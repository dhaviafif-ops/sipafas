/* SIPAFAS Fase 1 — data dummy untuk simulasi antarmuka. */
window.SIPAFAS_DEMO = {
  users: [
    {id:1,name:'Nadia Putri',email:'nadia@kampus.ac.id',role:'mahasiswa',active:true},
    {id:2,name:'Rizky Pratama',email:'rizky@kampus.ac.id',role:'mahasiswa',active:true},
    {id:3,name:'Budi Santoso',email:'budi.petugas@kampus.ac.id',role:'petugas',active:true},
    {id:4,name:'Siti Rahma',email:'siti.petugas@kampus.ac.id',role:'petugas',active:true},
    {id:5,name:'Admin Kampus',email:'admin@kampus.ac.id',role:'administrator',active:true}
  ],
  categories: [{id:1,name:'Ruang kelas'},{id:2,name:'Kebersihan'},{id:3,name:'Kelistrikan'},{id:4,name:'Jaringan internet'},{id:5,name:'Toilet dan air'},{id:6,name:'Fasilitas umum'}],
  facilities: [
    {id:1,name:'Ruang Kelas A-203',location:'Gedung A · Lantai 2',categoryId:1,active:true,description:'Ruang kuliah lantai dua.'},
    {id:2,name:'Toilet Gedung B',location:'Gedung B · Lantai 1',categoryId:5,active:true,description:'Toilet dekat lobi.'},
    {id:3,name:'Wi-Fi Perpustakaan',location:'Perpustakaan · Lantai 1',categoryId:4,active:true,description:'Jaringan internet area baca.'},
    {id:4,name:'Lampu Koridor C',location:'Gedung C · Lantai 3',categoryId:3,active:true,description:'Lampu koridor lantai tiga.'},
    {id:5,name:'Taman Lama',location:'Area belakang kampus',categoryId:6,active:false,description:'Sudah tidak digunakan.'},
    {id:6,name:'Proyektor A-101',location:'Gedung A · Lantai 1',categoryId:1,active:true,description:'Perangkat presentasi kelas.'}
  ],
  complaints: [
    {id:1001,ownerId:1,facilityId:1,staffId:3,assignedBy:5,title:'AC ruang kelas tidak dingin',description:'AC di ruang A-203 menyala tetapi tidak terasa dingin sejak pagi.',status:'Diproses',createdAt:'2026-10-07T08:35:00',updatedAt:'2026-10-08T09:20:00',assignedAt:'2026-10-07T10:00:00',reason:'',attachments:['foto-ac.jpg'],history:[{status:'Baru',by:1,note:'Pengaduan dibuat',at:'2026-10-07T08:35:00'},{status:'Diverifikasi',by:5,note:'Laporan valid dan diteruskan',at:'2026-10-07T09:15:00'},{status:'Diproses',by:3,note:'Petugas sedang memeriksa unit AC',at:'2026-10-08T09:20:00'}]},
    {id:1002,ownerId:2,facilityId:2,staffId:4,assignedBy:5,title:'Keran toilet bocor',description:'Keran wastafel bocor dan air terus menetes.',status:'Diverifikasi',createdAt:'2026-10-08T10:10:00',updatedAt:'2026-10-08T11:30:00',assignedAt:'2026-10-08T11:00:00',reason:'',attachments:[],history:[{status:'Baru',by:2,note:'Pengaduan dibuat',at:'2026-10-08T10:10:00'},{status:'Diverifikasi',by:5,note:'Laporan diterima untuk ditangani',at:'2026-10-08T11:30:00'}]},
    {id:1003,ownerId:1,facilityId:3,staffId:null,assignedBy:null,title:'Wi-Fi perpustakaan sering terputus',description:'Koneksi Wi-Fi terputus berulang kali di area baca.',status:'Baru',createdAt:'2026-10-09T07:50:00',updatedAt:'2026-10-09T07:50:00',assignedAt:null,reason:'',attachments:[],history:[{status:'Baru',by:1,note:'Pengaduan dibuat',at:'2026-10-09T07:50:00'}]},
    {id:1004,ownerId:2,facilityId:4,staffId:3,assignedBy:5,title:'Lampu koridor mati',description:'Dua lampu di dekat tangga tidak menyala.',status:'Selesai',createdAt:'2026-10-04T14:00:00',updatedAt:'2026-10-06T15:25:00',assignedAt:'2026-10-04T15:00:00',reason:'',attachments:[],history:[{status:'Baru',by:2,note:'Pengaduan dibuat',at:'2026-10-04T14:00:00'},{status:'Diverifikasi',by:5,note:'Laporan valid',at:'2026-10-04T14:30:00'},{status:'Diproses',by:3,note:'Mengganti lampu',at:'2026-10-05T09:00:00'},{status:'Selesai',by:3,note:'Lampu sudah berfungsi kembali',at:'2026-10-06T15:25:00'}]},
    {id:1005,ownerId:1,facilityId:6,staffId:null,assignedBy:null,title:'Proyektor tidak tersedia',description:'Proyektor di ruang A-101 tidak ditemukan saat kelas dimulai.',status:'Ditolak',createdAt:'2026-10-02T09:00:00',updatedAt:'2026-10-02T10:05:00',assignedAt:null,reason:'Laporan perlu dilengkapi dengan informasi jadwal dan waktu kejadian.',attachments:[],history:[{status:'Baru',by:1,note:'Pengaduan dibuat',at:'2026-10-02T09:00:00'},{status:'Ditolak',by:5,note:'Laporan perlu dilengkapi dengan informasi jadwal dan waktu kejadian.',at:'2026-10-02T10:05:00'}]}
  ]
};
