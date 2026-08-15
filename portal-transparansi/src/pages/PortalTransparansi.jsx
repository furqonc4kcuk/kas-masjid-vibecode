function PortalTransparansi() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section: Total Kas */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 bg-background rounded-xl p-8 shadow-neo-raised flex flex-col justify-center">
          <h2 className="text-on-surface-variant font-medium mb-2 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              account_balance_wallet
            </span>
            Total Kas Saat Ini
          </h2>
          <div className="text-5xl font-bold text-on-surface mb-4">
            Rp 145.850.000
          </div>
          <p className="text-sm text-on-surface-variant">
            Terakhir diperbarui: Hari ini, 09:30 WIB
          </p>
          <div className="mt-8 flex gap-4">
            <button className="bg-background text-primary font-semibold py-3 px-8 rounded-full shadow-neo-raised hover:shadow-neo-pressed transition-all duration-300 active:scale-95 flex items-center gap-2">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
              Infaq Sekarang
            </button>
            <button className="bg-background text-on-surface-variant font-semibold py-3 px-8 rounded-full shadow-neo-raised hover:shadow-neo-pressed transition-all duration-300 active:scale-95 flex items-center gap-2">
              <span className="material-symbols-outlined">download</span>
              Unduh Laporan
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="col-span-1 space-y-6">
          <div className="bg-background rounded-xl p-6 shadow-neo-raised">
            <h3 className="text-sm text-on-surface-variant font-medium mb-1">
              Pemasukan Bulan Ini
            </h3>
            <div className="text-2xl font-bold text-primary">Rp 32.400.000</div>
            <div className="text-xs text-tertiary mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                trending_up
              </span>
              +12% dari bulan lalu
            </div>
          </div>
          <div className="bg-background rounded-xl p-6 shadow-neo-raised">
            <h3 className="text-sm text-on-surface-variant font-medium mb-1">
              Pengeluaran Bulan Ini
            </h3>
            <div className="text-2xl font-bold text-on-surface">
              Rp 18.200.000
            </div>
            <div className="text-xs text-outline mt-2 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px]">
                payments
              </span>
              Operasional & Bantuan
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid: Cash Flow & Donations */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Interactive Chart Area */}
        <div className="lg:col-span-2 bg-background rounded-xl p-8 shadow-neo-raised">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">
                analytics
              </span>
              Arus Kas 6 Bulan Terakhir
            </h2>
            <div className="flex gap-2 bg-background p-1 rounded-lg shadow-neo-pressed">
              <button className="px-4 py-1 rounded-md bg-background shadow-neo-raised text-primary text-sm font-medium">
                Pemasukan
              </button>
              <button className="px-4 py-1 rounded-md text-on-surface-variant text-sm font-medium hover:text-primary transition-colors">
                Pengeluaran
              </button>
            </div>
          </div>

          {/* Chart Visual Placeholder */}
          <div className="h-64 w-full bg-background rounded-xl shadow-neo-pressed p-4 flex items-end justify-between gap-2 relative">
            <div className="w-full bg-primary/20 rounded-t-sm" style={{ height: '40%' }} />
            <div className="w-full bg-primary/40 rounded-t-sm" style={{ height: '60%' }} />
            <div className="w-full bg-primary/60 rounded-t-sm" style={{ height: '50%' }} />
            <div className="w-full bg-primary/80 rounded-t-sm" style={{ height: '75%' }} />
            <div className="w-full bg-primary/90 rounded-t-sm" style={{ height: '65%' }} />
            <div className="w-full bg-primary rounded-t-sm" style={{ height: '90%' }} />

            {/* Grid Lines */}
            <div className="absolute inset-4 flex flex-col justify-between pointer-events-none border-t border-outline-variant/30 pt-1">
              <div className="w-full h-px bg-outline-variant/20" />
              <div className="w-full h-px bg-outline-variant/20" />
              <div className="w-full h-px bg-outline-variant/20" />
              <div className="w-full h-px bg-outline-variant/20" />
            </div>
          </div>

          <div className="flex justify-between mt-2 text-xs text-on-surface-variant px-4">
            <span>Okt</span>
            <span>Nov</span>
            <span>Des</span>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
          </div>
        </div>

        {/* Recent Donations Log */}
        <div className="lg:col-span-1 bg-background rounded-xl p-8 shadow-neo-raised flex flex-col">
          <h2 className="text-lg font-semibold text-on-surface mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">
              receipt_long
            </span>
            Log Donasi Terkini
          </h2>

          <div className="flex-1 overflow-y-auto pr-2 space-y-4 max-h-[300px]">
            {/* Log Items */}
            <div className="bg-background rounded-lg p-4 shadow-neo-pressed flex justify-between items-center">
              <div>
                <div className="font-medium text-sm text-on-surface">
                  Hamba Allah
                </div>
                <div className="text-xs text-on-surface-variant">
                  Infaq Jumat • Hari ini, 12:15
                </div>
              </div>
              <div className="font-semibold text-primary text-sm">
                + Rp 500.000
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 shadow-neo-pressed flex justify-between items-center">
              <div>
                <div className="font-medium text-sm text-on-surface">
                  Bpk. H. Ahmad
                </div>
                <div className="text-xs text-on-surface-variant">
                  Wakaf Karpet • Kemarin
                </div>
              </div>
              <div className="font-semibold text-primary text-sm">
                + Rp 2.000.000
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 shadow-neo-pressed flex justify-between items-center">
              <div>
                <div className="font-medium text-sm text-on-surface">
                  Hamba Allah
                </div>
                <div className="text-xs text-on-surface-variant">
                  Infaq Pembangunan • Kemarin
                </div>
              </div>
              <div className="font-semibold text-primary text-sm">
                + Rp 1.500.000
              </div>
            </div>

            <div className="bg-background rounded-lg p-4 shadow-neo-pressed flex justify-between items-center">
              <div>
                <div className="font-medium text-sm text-on-surface">
                  Ibu Siti M.
                </div>
                <div className="text-xs text-on-surface-variant">
                  Zakat Maal • 2 Hari lalu
                </div>
              </div>
              <div className="font-semibold text-primary text-sm">
                + Rp 3.200.000
              </div>
            </div>
          </div>

          <button className="mt-4 w-full text-center text-sm font-medium text-primary hover:text-tertiary transition-colors">
            Lihat Semua
          </button>
        </div>
      </section>

      {/* Active Waqf Programs */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-on-surface flex items-center gap-3">
            <span
              className="material-symbols-outlined text-tertiary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              volunteer_activism
            </span>
            Program Wakaf Aktif
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Program 1 */}
          <div className="bg-background rounded-xl p-6 shadow-neo-raised flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 h-32 rounded-lg shadow-neo-pressed overflow-hidden relative">
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                data-alt="A soft, bright, neomorphic UI style illustration of a rolled-up plush mosque carpet in warm lighting, using the deep indigo and violet brand colors against a light gray background, highly detailed and serene."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC49qFaewvkqEcUT6sPsAmeyGIUfvW23o3OwY_wme23mQrKI1f01gGr44plC99z3xhZE72cHLKy0sk3x2eIkzDbda4ZCEVv7UISwUZjFkKlmcCllcgdjTt1si79fGgT-5_LWwYyr5K9xPsPHareUe2YmOjZ1IHPwJqX_xrxoEa7wBQqzlgYevpeDZ4C3DI4FB-uHCd8g5wCZ9AYN-WGcznPEc8tsMzS6zyjwdt1wIBC3JyJLHLeug0N"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <h3 className="text-lg font-semibold text-on-surface">
                Pengadaan Karpet Utama
              </h3>
              <p className="text-sm text-on-surface-variant">
                Penggantian karpet saf utama masjid untuk kenyamanan ibadah
                jamaah.
              </p>
              <div className="space-y-1 mt-4">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-primary">
                    Terkumpul: Rp 15.000.000
                  </span>
                  <span className="text-on-surface-variant">
                    Target: Rp 25.000.000
                  </span>
                </div>
                <div className="w-full h-3 bg-background rounded-full shadow-neo-pressed overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[60%]" />
                </div>
              </div>
              <button className="mt-2 text-sm bg-background text-primary font-medium py-2 px-4 rounded-lg shadow-neo-raised hover:shadow-neo-pressed transition-all active:scale-95 w-max">
                Ikut Wakaf
              </button>
            </div>
          </div>

          {/* Program 2 */}
          <div className="bg-background rounded-xl p-6 shadow-neo-raised flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/3 h-32 rounded-lg shadow-neo-pressed overflow-hidden relative">
              <img
                className="w-full h-full object-cover mix-blend-multiply opacity-80"
                data-alt="A soft, neomorphic UI style illustration of a mosque roof structure under repair, rendered in soft gray clay-like 3D with glowing indigo light accents, clean and minimalist architectural vibe."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyPPj_VgSzflgjH_JV8_SRDOOFnDg1Zo-0JDwVWiUcUu1x9pVl8hZ9oZ4fnHyYW0J0UvHuaCohLwEmQ-kitAYAJG0Uc8FKCkSO2H9MKjoOLlBg1tvlOUvOWOUNZhwvDOfAuq7yIBmJiKXnC9S13AVAvOfN54rtbTnnPMCGTToqROnDrsXhW4aTNtRy5EceodvSaBKsYQefAUYg5XaiBOa4_KBWsXjCpOzRQ_EAN6jEtmIIb1ElSEx1"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-3">
              <h3 className="text-lg font-semibold text-on-surface">
                Renovasi Atap Sisi Kanan
              </h3>
              <p className="text-sm text-on-surface-variant">
                Perbaikan kebocoran atap pada area jamaah wanita sebelum musim
                hujan.
              </p>
              <div className="space-y-1 mt-4">
                <div className="flex justify-between text-xs font-medium">
                  <span className="text-tertiary">
                    Terkumpul: Rp 8.500.000
                  </span>
                  <span className="text-on-surface-variant">
                    Target: Rp 10.000.000
                  </span>
                </div>
                <div className="w-full h-3 bg-background rounded-full shadow-neo-pressed overflow-hidden">
                  <div className="h-full bg-tertiary rounded-full w-[85%]" />
                </div>
              </div>
              <button className="mt-2 text-sm bg-background text-tertiary font-medium py-2 px-4 rounded-lg shadow-neo-raised hover:shadow-neo-pressed transition-all active:scale-95 w-max">
                Ikut Wakaf
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PortalTransparansi
