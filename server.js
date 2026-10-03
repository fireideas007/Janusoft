import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 80;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Storage directory and file
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const LEADS_FILE = path.join(DATA_DIR, 'leads.json');

if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(LEADS_FILE)) {
  fs.writeFileSync(LEADS_FILE, JSON.stringify([], null, 2), 'utf-8');
}

function readLeads() {
  try {
    const raw = fs.readFileSync(LEADS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading leads:', err);
    return [];
  }
}

function writeLeads(leads) {
  try {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing leads:', err);
    return false;
  }
}

// Credentials specified by user
const ADMIN_USER = 'adityajanu1996';
const ADMIN_PASS = 'Aditya@123';

// Active tokens in-memory (or deterministic token)
const activeTokens = new Set();
const SECRET_SALT = 'janusoft-secure-2026-salt';

function generateToken(username) {
  const token = crypto
    .createHmac('sha256', SECRET_SALT)
    .update(`${username}:${Date.now()}:${Math.random()}`)
    .digest('hex');
  activeTokens.add(token);
  return token;
}

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Authentication required' });
  }

  const token = authHeader.split(' ')[1];
  if (!activeTokens.has(token)) {
    return res.status(401).json({ success: false, message: 'Invalid or expired session' });
  }

  next();
}

// ==========================================
// API Endpoints
// ==========================================

// 1. Submit Lead (Public)
app.post('/api/leads', (req, res) => {
  const { name, phone, email, service, notes, budget, source } = req.body;

  if (!phone && !name && !email) {
    return res.status(400).json({ success: false, message: 'Please provide at least a phone number or name.' });
  }

  const leads = readLeads();
  const newLead = {
    id: Date.now().toString(36) + Math.random().toString(36).substring(2, 6),
    name: (name || 'Anonymous Inquiry').trim(),
    phone: (phone || '').trim(),
    email: (email || '').trim(),
    service: service || 'General Consultation',
    notes: (notes || '').trim(),
    budget: budget || 'Standard',
    source: source || 'Homepage Quick Capture',
    status: 'new', // new, contacted, converted, archived
    createdAt: new Date().toISOString(),
    ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown'
  };

  leads.unshift(newLead);
  writeLeads(leads);

  console.log(`[Lead Captured] ${newLead.name} (${newLead.phone}) - ${newLead.service}`);

  return res.status(201).json({
    success: true,
    message: 'Lead captured successfully',
    leadId: newLead.id
  });
});

// 2. Admin Login
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    const token = generateToken(username);
    return res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        username: ADMIN_USER,
        displayName: 'Aditya Janu'
      }
    });
  }

  return res.status(401).json({
    success: false,
    message: 'Invalid username or password'
  });
});

// 3. Admin Check Session
app.get('/api/admin/me', authMiddleware, (req, res) => {
  res.json({
    success: true,
    user: {
      username: ADMIN_USER,
      displayName: 'Aditya Janu'
    }
  });
});

// 4. Admin Get Leads
app.get('/api/admin/leads', authMiddleware, (req, res) => {
  const leads = readLeads();
  res.json({
    success: true,
    count: leads.length,
    leads
  });
});

// 5. Admin Update Lead Status / Notes
app.patch('/api/admin/leads/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  const { status, notes } = req.body;

  const leads = readLeads();
  const index = leads.findIndex((l) => l.id === id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: 'Lead not found' });
  }

  if (status) leads[index].status = status;
  if (notes !== undefined) leads[index].notes = notes;
  leads[index].updatedAt = new Date().toISOString();

  writeLeads(leads);

  res.json({
    success: true,
    message: 'Lead updated',
    lead: leads[index]
  });
});

// 6. Admin Delete Lead
app.delete('/api/admin/leads/:id', authMiddleware, (req, res) => {
  const { id } = req.params;
  let leads = readLeads();
  const initialLength = leads.length;
  leads = leads.filter((l) => l.id !== id);

  if (leads.length === initialLength) {
    return res.status(404).json({ success: false, message: 'Lead not found' });
  }

  writeLeads(leads);

  res.json({
    success: true,
    message: 'Lead deleted'
  });
});

// 7. Admin Export CSV
app.get('/api/admin/export', authMiddleware, (req, res) => {
  const leads = readLeads();
  
  const headers = ['ID', 'Date', 'Time (IST)', 'Name', 'Phone', 'Email', 'Service', 'Status', 'Budget', 'Notes', 'Source'];
  const rows = leads.map((l) => {
    const d = new Date(l.createdAt);
    const dateStr = d.toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' });
    const timeStr = d.toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' });
    return [
      `"${l.id}"`,
      `"${dateStr}"`,
      `"${timeStr}"`,
      `"${(l.name || '').replace(/"/g, '""')}"`,
      `"${(l.phone || '').replace(/"/g, '""')}"`,
      `"${(l.email || '').replace(/"/g, '""')}"`,
      `"${(l.service || '').replace(/"/g, '""')}"`,
      `"${l.status || 'new'}"`,
      `"${l.budget || ''}"`,
      `"${(l.notes || '').replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      `"${l.source || ''}"`
    ].join(',');
  });

  const csv = [headers.join(','), ...rows].join('\n');

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename="janusoft-leads.csv"');
  res.send(csv);
});

// ==========================================
// Static Assets & SPA Routing
// ==========================================
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, { maxAge: '1d' }));

  app.use((req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Janusoft] Server listening on port ${PORT}`);
});
