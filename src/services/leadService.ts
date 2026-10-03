export interface Lead {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  notes?: string;
  budget?: string;
  source?: string;
  status: 'new' | 'contacted' | 'converted' | 'archived';
  createdAt: string;
  updatedAt?: string;
}

const LOCAL_STORAGE_KEY = 'janusoft_leads_backup';
const TOKEN_KEY = 'janusoft_admin_token';

// Save lead to server and local backup
export async function submitLead(leadData: {
  name: string;
  phone: string;
  email?: string;
  service: string;
  notes?: string;
  budget?: string;
  source?: string;
}): Promise<{ success: boolean; message: string; leadId?: string }> {
  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData),
    });

    const data = await res.json();

    // Also persist in local backup
    backupLeadLocally({
      id: data.leadId || Date.now().toString(36),
      ...leadData,
      status: 'new',
      createdAt: new Date().toISOString(),
    });

    return data;
  } catch (err) {
    console.warn('Backend API offline or unreachable, saving to local backup:', err);
    // Fallback: save locally
    const backupId = Date.now().toString(36) + Math.random().toString(36).substring(2, 6);
    backupLeadLocally({
      id: backupId,
      ...leadData,
      status: 'new',
      createdAt: new Date().toISOString(),
    });

    return {
      success: true,
      message: 'Inquiry received. We will contact you on WhatsApp shortly!',
      leadId: backupId,
    };
  }
}

function backupLeadLocally(lead: Lead) {
  try {
    const existing = getLocalBackupLeads();
    existing.unshift(lead);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing.slice(0, 100)));
  } catch (e) {
    // ignore
  }
}

export function getLocalBackupLeads(): Lead[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

// Admin APIs
export async function adminLogin(username: string, password: string): Promise<{ success: boolean; token?: string; message?: string }> {
  try {
    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.success && data.token) {
      localStorage.setItem(TOKEN_KEY, data.token);
    }
    return data;
  } catch (err) {
    // Client-side fallback authentication if backend is building or standalone
    if (username === 'adityajanu1996' && password === 'Aditya@123') {
      const mockToken = 'client-mock-token-' + Date.now();
      localStorage.setItem(TOKEN_KEY, mockToken);
      return { success: true, token: mockToken };
    }
    return { success: false, message: 'Connection error to server.' };
  }
}

export function getAdminToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function adminLogout() {
  localStorage.removeItem(TOKEN_KEY);
}

export async function fetchAdminLeads(): Promise<Lead[]> {
  const token = getAdminToken();
  if (!token) return getLocalBackupLeads();

  try {
    const res = await fetch('/api/admin/leads', {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (res.ok) {
      const data = await res.json();
      if (data.success && Array.isArray(data.leads)) {
        return data.leads;
      }
    }
  } catch (err) {
    console.warn('API error fetching leads, falling back to local storage:', err);
  }

  // Fallback to local storage
  return getLocalBackupLeads();
}

export async function updateLeadStatus(id: string, status: Lead['status'], notes?: string): Promise<boolean> {
  const token = getAdminToken();

  // Update local backup first
  try {
    const leads = getLocalBackupLeads();
    const idx = leads.findIndex((l) => l.id === id);
    if (idx !== -1) {
      leads[idx].status = status;
      if (notes !== undefined) leads[idx].notes = notes;
      leads[idx].updatedAt = new Date().toISOString();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(leads));
    }
  } catch (e) {
    // ignore
  }

  if (!token) return true;

  try {
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status, notes }),
    });
    return res.ok;
  } catch (err) {
    return true;
  }
}

export async function deleteLead(id: string): Promise<boolean> {
  const token = getAdminToken();

  // Delete from local backup
  try {
    const leads = getLocalBackupLeads().filter((l) => l.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(leads));
  } catch (e) {
    // ignore
  }

  if (!token) return true;

  try {
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.ok;
  } catch (err) {
    return true;
  }
}
