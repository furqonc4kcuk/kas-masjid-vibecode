export default function TopBar() {
  return (
    <header className="w-full sticky top-0 z-40 bg-background shadow-[0px_4px_8px_rgba(0,0,0,0.04)] flex items-center justify-between px-8 py-4">
      <h2 className="font-display text-headline-sm font-semibold text-primary tracking-tight">
        SIK Masjid Al-Falah
      </h2>

      <div className="flex items-center gap-6">
        {/* Search */}
        <div className="relative hidden md:block">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
            search
          </span>
          <input
            className="shadow-neo-pressed py-2 pl-12 pr-4 w-64 text-sm text-on-surface placeholder-on-surface-variant rounded-lg"
            placeholder="Cari data..."
            type="text"
          />
        </div>

        {/* Icons */}
        <div className="flex gap-3">
          <button className="w-10 h-10 shadow-neo-raised flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 rounded-full">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="w-10 h-10 shadow-neo-raised flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors active:scale-95 rounded-full">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
        </div>

        <div className="w-px h-8 bg-surface-dim mx-2" />

        {/* Actions */}
        <button className="px-4 py-2 text-sm font-medium text-on-surface-variant hover:text-primary transition-colors">
          Cetak Laporan
        </button>
        <button className="shadow-neo-raised px-6 py-2 text-sm font-medium text-primary flex items-center gap-2 rounded-full hover:shadow-neo-pressed transition-all">
          <span className="material-symbols-outlined text-[18px]">qr_code_scanner</span>
          Donasi QRIS
        </button>
      </div>
    </header>
  )
}
