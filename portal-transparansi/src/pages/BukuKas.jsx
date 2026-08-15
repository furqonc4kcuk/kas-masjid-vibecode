import { useState } from 'react'

const penerimaanData = [
  {
    tanggal: '24 Mar 2024',
    nama: 'Bpk. Ahmad Fauzi & Keluarga (4 Jiwa)',
    jenis: 'Zakat Fitrah',
    bentuk: 'Beras',
    jumlah: '10 Kg',
    status: 'Diterima',
  },
  {
    tanggal: '24 Mar 2024',
    nama: 'Ibu Siti Aminah',
    jenis: 'Zakat Maal',
    bentuk: 'Uang Tunai',
    jumlah: 'Rp 2.500.000',
    status: 'Diterima',
  },
  {
    tanggal: '23 Mar 2024',
    nama: 'Hamba Allah',
    jenis: 'Fidyah',
    bentuk: 'Uang Tunai',
    jumlah: 'Rp 150.000',
    status: 'Diterima',
  },
]

function BukuKas() {
  const [activeTab, setActiveTab] = useState('penerimaan')

  return (
    <div className="flex-1 p-8 overflow-y-auto">
      {/* Header Section */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h1 className="font-display text-3xl font-bold text-on-surface mb-2">
            Manajemen ZIS & Mustahik
          </h1>
          <p className="text-on-surface-variant">
            Pantau penerimaan zakat fitrah, maal, dan distribusi ke asnaf.
          </p>
        </div>
      </div>

      {/* Stats Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="shadow-neo-raised p-6 flex flex-col justify-between rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full shadow-neo-pressed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">rice_bowl</span>
            </div>
            <span className="text-xs font-semibold text-primary bg-primary-container px-2 py-1 rounded-full">
              +12%
            </span>
          </div>
          <div>
            <p className="text-sm text-on-surface-variant mb-1">Total Beras Zakat</p>
            <h3 className="font-display text-2xl font-bold text-on-surface">
              1,250 <span className="text-lg font-medium text-on-surface-variant">Kg</span>
            </h3>
          </div>
        </div>

        <div className="shadow-neo-raised p-6 flex flex-col justify-between rounded-xl">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-full shadow-neo-pressed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-[20px]">payments</span>
            </div>
            <span className="text-xs font-semibold text-primary bg-primary-container px-2 py-1 rounded-full">
              +8%
            </span>
          </div>
          <div>
            <p className="text-sm text-on-surface-variant mb-1">Total Zakat Maal (Uang)</p>
            <h3 className="font-display text-2xl font-bold text-on-surface">Rp 45.5M</h3>
          </div>
        </div>

        <div className="shadow-neo-raised p-6 flex flex-col justify-between md:col-span-2 relative overflow-hidden group rounded-xl">
          {/* Decorative Background element */}
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-surface-dim rounded-full mix-blend-multiply opacity-50 blur-2xl group-hover:bg-primary transition-colors duration-500" />
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full shadow-neo-pressed flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[20px]">group</span>
                </div>
                <p className="text-sm font-medium text-on-surface-variant">Distribusi Mustahik</p>
              </div>
              <span className="text-sm font-semibold text-tertiary">85% Terdistribusi</span>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-display text-xl font-bold text-on-surface">
                  320 / 375 <span className="text-sm font-medium text-on-surface-variant">Keluarga</span>
                </h3>
              </div>
              {/* Neomorphic Progress Bar */}
              <div className="w-full h-4 shadow-neo-pressed rounded-full overflow-hidden p-1">
                <div className="h-full bg-tertiary rounded-full w-[85%] relative overflow-hidden">
                  {/* Shine effect on progress bar */}
                  <div className="absolute top-0 left-0 w-full h-1/2 bg-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area with Tabs */}
      <div className="shadow-neo-raised p-6 rounded-xl">
        {/* Custom Neomorphic Tabs */}
        <div className="flex gap-4 mb-8 border-b-2 border-surface-dim pb-2">
          <button
            className={`px-4 py-2 font-semibold border-b-2 -mb-[10px] z-10 transition-colors ${
              activeTab === 'penerimaan'
                ? 'text-primary border-primary'
                : 'font-medium text-on-surface-variant hover:text-on-surface'
            }`}
            onClick={() => setActiveTab('penerimaan')}
          >
            Penerimaan Zakat
          </button>
          <button
            className={`px-4 py-2 font-medium border-b-2 -mb-[10px] z-10 transition-colors ${
              activeTab === 'mustahik'
                ? 'text-primary border-primary'
                : 'text-on-surface-variant hover:text-on-surface'
            }`}
            onClick={() => setActiveTab('mustahik')}
          >
            Daftar Mustahik
          </button>
        </div>

        {/* Tab Content: Penerimaan */}
        {activeTab === 'penerimaan' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-lg font-bold text-on-surface">
                Data Penerimaan Zakat Fitrah & Maal
              </h3>
              <button className="shadow-neo-raised px-5 py-2 text-sm font-medium text-primary flex items-center gap-2 rounded-full hover:shadow-neo-pressed transition-all active:scale-95">
                <span className="material-symbols-outlined text-[18px]">add</span>
                Penerimaan Baru
              </button>
            </div>

            <div className="w-full shadow-neo-pressed p-4 overflow-x-auto rounded-xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-surface-dim">
                    <th className="py-3 px-4 font-medium text-sm text-on-surface-variant">Tanggal</th>
                    <th className="py-3 px-4 font-medium text-sm text-on-surface-variant">Nama Muzakki</th>
                    <th className="py-3 px-4 font-medium text-sm text-on-surface-variant">Jenis Zakat</th>
                    <th className="py-3 px-4 font-medium text-sm text-on-surface-variant">Bentuk</th>
                    <th className="py-3 px-4 font-medium text-sm text-on-surface-variant text-right">Jumlah</th>
                    <th className="py-3 px-4 font-medium text-sm text-on-surface-variant text-center">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {penerimaanData.map((row, idx) => (
                    <tr key={idx} className="border-b border-surface-dim/50 hover:bg-surface-container-lowest transition-colors">
                      <td className="py-4 px-4 text-sm text-on-surface">{row.tanggal}</td>
                      <td className="py-4 px-4 text-sm font-medium text-on-surface">{row.nama}</td>
                      <td className="py-4 px-4 text-sm text-on-surface-variant">{row.jenis}</td>
                      <td className="py-4 px-4 text-sm text-on-surface-variant">{row.bentuk}</td>
                      <td className="py-4 px-4 text-sm font-semibold text-on-surface text-right">{row.jumlah}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#ecfdf5] text-[#065f46]">
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab Content: Mustahik */}
        {activeTab === 'mustahik' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-display text-lg font-bold text-on-surface">
                Daftar Penerima Zakat (Asnaf)
              </h3>
              <button className="shadow-neo-raised px-5 py-2 text-sm font-medium text-primary flex items-center gap-2 rounded-full hover:shadow-neo-pressed transition-all active:scale-95">
                <span className="material-symbols-outlined text-[18px]">person_add</span>
                Tambah Mustahik
              </button>
            </div>

            <div className="w-full shadow-neo-pressed p-8 flex flex-col items-center justify-center text-center rounded-xl">
              <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-4">group</span>
              <p className="text-on-surface-variant">Tampilan Daftar Mustahik akan muncul di sini.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BukuKas
