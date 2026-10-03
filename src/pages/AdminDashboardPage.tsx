import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  LogOut, 
  MessageSquare, 
  Phone, 
  Mail, 
  Download, 
  RefreshCw, 
  Search, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  PlusCircle,
  Eye,
  EyeOff
} from 'lucide-react';
import { 
  Lead, 
  adminLogin, 
  adminLogout, 
  getAdminToken, 
  fetchAdminLeads, 
  updateLeadStatus, 
  deleteLead,
  submitLead
} from '../services/leadService';

export const AdminDashboardPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('adityajanu1996');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loginError, setLoginError] = useState<string>('');
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  // Dashboard state
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    const token = getAdminToken();
    if (token) {
      setIsAuthenticated(true);
      loadLeads();
    } else {
      setLoading(false);
    }
  }, []);

  const loadLeads = async () => {
    setIsRefreshing(true);
    try {
      const data = await fetchAdminLeads();
      setLeads(data);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);

    try {
      const res = await adminLogin(username, password);
      if (res.success) {
        setIsAuthenticated(true);
        loadLeads();
      } else {
        setLoginError(res.message || 'Invalid username or password');
      }
    } catch (err) {
      setLoginError('Error connecting to server.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    adminLogout();
    setIsAuthenticated(false);
    setLeads([]);
  };

  const handleStatusChange = async (leadId: string, newStatus: Lead['status']) => {
    // Optimistic UI update
    setLeads((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
    );
    await updateLeadStatus(leadId, newStatus);
  };

  const handleDelete = async (leadId: string) => {
    if (!window.confirm('Are you sure you want to delete this lead?')) return;
    setLeads((prev) => prev.filter((l) => l.id !== leadId));
    await deleteLead(leadId);
  };

  const handleAddSampleLead = async () => {
    await submitLead({
      name: 'Rohan Sharma',
      phone: '+91 98765 43210',
      email: 'rohan@example.com',
      service: 'Web App & MVP Development',
      notes: 'Need a telemedicine booking app with Razorpay integration and doctor dashboard.',
      budget: '₹45,000',
      source: 'Admin Sample Lead',
    });
    await loadLeads();
  };

  const handleExportCsv = () => {
    window.open('/api/admin/export', '_blank');
  };

  // Helper to format clean WhatsApp click URL
  const getWhatsAppUrl = (phone: string, name: string, service: string) => {
    const cleanNumber = phone.replace(/[^0-9]/g, '');
    const text = encodeURIComponent(
      `Hi ${name}! Aditya here from Janusoft. I received your inquiry regarding "${service}". I'd love to discuss your requirements and share a fast spec and timeline!`
    );
    return `https://wa.me/${cleanNumber}?text=${text}`;
  };

  // Filtered leads
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      (lead.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.phone || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.email || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.service || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (lead.notes || '').toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === 'all' ? true : lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const totalLeads = leads.length;
  const newLeadsCount = leads.filter((l) => l.status === 'new').length;
  const contactedCount = leads.filter((l) => l.status === 'contacted').length;
  const convertedCount = leads.filter((l) => l.status === 'converted').length;

  // ----------------------------------------------------
  // Login Screen
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 text-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-500/10">
              <Lock className="w-6 h-6 text-cyan-400" />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
              Janusoft Lead Central
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Authorized Technical Founder Access Only
            </p>
          </div>

          {loginError && (
            <div className="mb-6 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold text-center">
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="adityajanu1996"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                />
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-slate-50/50"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 px-4 rounded-xl font-bold text-sm text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-slate-900/20 disabled:opacity-50"
            >
              {isLoggingIn ? 'Verifying...' : 'Sign In to Dashboard'}
            </button>
          </form>

          <div className="mt-8 text-center text-[11px] text-slate-400 border-t border-slate-100 pt-4">
            Security: 256-bit TLS Session · Hackproof Technologies India Pvt Ltd
          </div>
        </div>
      </div>
    );
  }

  // ----------------------------------------------------
  // Authenticated Dashboard
  // ----------------------------------------------------
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-6 rounded-3xl border border-slate-200/90 shadow-sm">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
              Live Lead CRM
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Customer Lead Management
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Logged in as <strong className="text-slate-800">adityajanu1996</strong> (Founder & Lead Architect)
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={handleAddSampleLead}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
            title="Create a sample test lead to verify workflow"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span>Add Test Lead</span>
          </button>

          <button
            onClick={handleExportCsv}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-brand-700 bg-brand-50 hover:bg-brand-100 border border-brand-200 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={loadLeads}
            disabled={isRefreshing}
            className="p-2 rounded-xl text-slate-600 bg-slate-100 hover:bg-slate-200 transition-colors"
            title="Refresh Leads"
          >
            <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-700 bg-rose-50 hover:bg-rose-100 border border-rose-200 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
          <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
            Total Leads
          </div>
          <div className="text-3xl font-extrabold text-slate-900">{totalLeads}</div>
          <div className="text-[11px] text-slate-400 mt-1">All time inquiries captured</div>
        </div>

        <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 shadow-sm">
          <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center justify-between">
            <span>New Inquiries</span>
            {newLeadsCount > 0 && (
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            )}
          </div>
          <div className="text-3xl font-extrabold text-emerald-700">{newLeadsCount}</div>
          <div className="text-[11px] text-emerald-600 mt-1">Pending first contact</div>
        </div>

        <div className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/80 shadow-sm">
          <div className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
            Contacted
          </div>
          <div className="text-3xl font-extrabold text-amber-700">{contactedCount}</div>
          <div className="text-[11px] text-amber-600 mt-1">In active discussion</div>
        </div>

        <div className="p-5 rounded-2xl bg-indigo-50/50 border border-indigo-200/80 shadow-sm">
          <div className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-1">
            Converted Deals
          </div>
          <div className="text-3xl font-extrabold text-indigo-700">{convertedCount}</div>
          <div className="text-[11px] text-indigo-600 mt-1">Signed projects</div>
        </div>
      </div>

      {/* Search & Filter Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-semibold overflow-x-auto w-full sm:w-auto">
          {['all', 'new', 'contacted', 'converted', 'archived'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-3 py-1.5 rounded-xl capitalize transition-all whitespace-nowrap ${
                statusFilter === status
                  ? 'bg-white text-slate-900 font-bold shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {status}
              {status === 'new' && newLeadsCount > 0 && (
                <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-500 text-white font-bold">
                  {newLeadsCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder="Search leads by name, phone, service..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-brand-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        </div>
      </div>

      {/* Leads Table / List */}
      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-xs text-slate-400">Loading inquiries...</div>
        ) : filteredLeads.length === 0 ? (
          <div className="p-12 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div className="text-sm font-bold text-slate-700">No leads found in this filter</div>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              Any inquiry submitted on the website or via the WhatsApp form will automatically appear here in real time.
            </p>
            <button
              onClick={handleAddSampleLead}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Create Test Lead</span>
            </button>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider font-semibold text-[11px]">
                  <th className="py-3.5 px-4 sm:px-6">Customer</th>
                  <th className="py-3.5 px-4">Instant Action</th>
                  <th className="py-3.5 px-4">Service & Budget</th>
                  <th className="py-3.5 px-4">Notes / Requirement</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-4 text-right">Delete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredLeads.map((lead) => {
                  const date = new Date(lead.createdAt);
                  const timeFormatted = date.toLocaleString('en-IN', {
                    timeZone: 'Asia/Kolkata',
                    dateStyle: 'short',
                    timeStyle: 'short',
                  });

                  return (
                    <tr key={lead.id} className="hover:bg-slate-50/70 transition-colors">
                      {/* Customer Details */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="font-bold text-slate-900 text-sm">{lead.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                          {timeFormatted} IST
                        </div>
                        {lead.email && (
                          <div className="text-slate-500 text-[11px] flex items-center gap-1 mt-1">
                            <Mail className="w-3 h-3 text-slate-400" />
                            <a href={`mailto:${lead.email}`} className="hover:underline">
                              {lead.email}
                            </a>
                          </div>
                        )}
                        <span className="inline-block mt-1 px-1.5 py-0.2 rounded text-[9px] font-mono bg-slate-100 text-slate-600">
                          {lead.source || 'Website'}
                        </span>
                      </td>

                      {/* WhatsApp / Phone Action Buttons */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <div className="flex flex-col gap-1.5">
                          {lead.phone ? (
                            <>
                              <a
                                href={getWhatsAppUrl(lead.phone, lead.name, lead.service)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-sm transition-all"
                              >
                                <MessageSquare className="w-3.5 h-3.5" />
                                <span>WhatsApp</span>
                                <ExternalLink className="w-3 h-3 opacity-70" />
                              </a>
                              <a
                                href={`tel:${lead.phone}`}
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-[11px] font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors font-mono"
                              >
                                <Phone className="w-3 h-3 text-brand-600" />
                                <span>{lead.phone}</span>
                              </a>
                            </>
                          ) : (
                            <span className="text-slate-400 italic">No phone provided</span>
                          )}
                        </div>
                      </td>

                      {/* Service & Budget */}
                      <td className="py-4 px-4">
                        <div className="font-semibold text-slate-900">{lead.service}</div>
                        {lead.budget && (
                          <div className="text-brand-600 font-semibold text-[11px] mt-0.5">
                            Budget: {lead.budget}
                          </div>
                        )}
                      </td>

                      {/* Notes / Requirement */}
                      <td className="py-4 px-4 max-w-xs">
                        <p className="text-slate-600 line-clamp-2 leading-relaxed">
                          {lead.notes || <span className="text-slate-400 italic">No notes provided</span>}
                        </p>
                      </td>

                      {/* Status Selector */}
                      <td className="py-4 px-4">
                        <select
                          value={lead.status}
                          onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                          className={`px-2.5 py-1.5 rounded-lg font-bold text-xs border focus:outline-none transition-colors ${
                            lead.status === 'new'
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                              : lead.status === 'contacted'
                              ? 'bg-amber-50 text-amber-700 border-amber-300'
                              : lead.status === 'converted'
                              ? 'bg-indigo-50 text-indigo-700 border-indigo-300'
                              : 'bg-slate-100 text-slate-600 border-slate-300'
                          }`}
                        >
                          <option value="new">🔵 New</option>
                          <option value="contacted">🟡 Contacted</option>
                          <option value="converted">🟢 Converted</option>
                          <option value="archived">⚪ Archived</option>
                        </select>
                      </td>

                      {/* Delete */}
                      <td className="py-4 px-4 text-right">
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                          title="Delete Lead"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
