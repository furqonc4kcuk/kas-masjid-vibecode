import { NavLink } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Ringkasan', icon: 'dashboard' },
  { path: '/buku-kas', label: 'Buku Kas', icon: 'account_balance_wallet' },
  { path: '/laporan-infaq', label: 'Laporan Infaq', icon: 'receipt_long' },
  { path: '/zakat-mustahik', label: 'Zakat & Mustahik', icon: 'volunteer_activism', fill: true },
  { path: '/inventaris', label: 'Inventaris Aset', icon: 'inventory_2' },
  { path: '/pengaturan', label: 'Pengaturan', icon: 'settings' },
]

export default function Sidebar() {
  return (
    <nav className="w-64 h-screen fixed left-0 top-0 bg-background shadow-[6px_6px_12px_rgba(0,0,0,0.08),-6px_-6px_12px_rgba(255,255,255,0.6)] flex flex-col p-6 gap-4 z-50">
      {/* Brand/Header */}
      <div className="flex items-center gap-3 mb-8 px-2">
        <div className="w-12 h-12 rounded-full shadow-neo-raised flex items-center justify-center text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
            mosque
          </span>
        </div>
        <div>
          <h1 className="font-display text-xl font-semibold text-on-surface">
            Masjid Al-Falah
          </h1>
          <p className="font-body text-xs text-on-surface-variant">
            Sistem Keuangan
          </p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col gap-2 flex-grow">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 font-body text-label-sm font-medium transition-all duration-300 rounded-xl ${
                isActive
                  ? 'text-primary shadow-[inset_4px_4px_8px_rgba(0,0,0,0.06),inset_-4px_-4px_8px_rgba(255,255,255,0.5)] rounded-lg'
                  : 'text-on-surface-variant hover:text-primary'
              }`
            }
          >
            <span
              className="material-symbols-outlined"
              style={item.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
            >
              {item.icon}
            </span>
            {item.label}
          </NavLink>
        ))}
      </div>

      {/* CTA */}
      <button className="mt-auto shadow-neo-raised py-3 px-4 flex items-center justify-center gap-2 text-primary font-medium w-full rounded-full hover:shadow-neo-pressed transition-all active:scale-95">
        <span className="material-symbols-outlined">add</span>
        Tambah Transaksi
      </button>
    </nav>
  )
}
