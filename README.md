# SIPAFAS — Fase 1 (Prototipe Frontend)

Sistem Pengaduan Fasilitas Kampus. Proyek ini adalah **prototipe tampilan Fase 1**, memakai HTML5, Bootstrap 5, CSS, jQuery, dan data dummy. Belum ada backend PHP, database MySQL, API, maupun autentikasi server.

## Cara menjalankan

1. Ekstrak folder `sipafas-fase1`.
2. Buka folder tersebut dengan Visual Studio Code.
3. Disarankan jalankan `index.html` menggunakan ekstensi **Live Server**. Klik kanan `index.html` → **Open with Live Server**.
4. Internet diperlukan agar Bootstrap, Bootstrap Icons, jQuery, dan Google Fonts dari CDN bisa dimuat.
5. Pada halaman login, pilih salah satu tombol akun demo atau isi email demo dan kata sandi `demo123`.

## Akun demo

| Role | Email | Kata sandi |
|---|---|---|
| Mahasiswa | `nadia@kampus.ac.id` | `demo123` |
| Petugas | `budi.petugas@kampus.ac.id` | `demo123` |
| Administrator | `admin@kampus.ac.id` | `demo123` |

Kamu bisa berganti akun demo melalui tombol panah di sebelah nama akun.

## Yang bisa dicoba

- Dashboard berbeda sesuai role.
- Mahasiswa membuat pengaduan, membuka detail, dan melihat riwayat.
- Daftar pengaduan bisa dicari dan difilter berdasarkan status.
- Administrator memverifikasi/menolak laporan (alasan wajib), menunjuk petugas, mengelola fasilitas, dan membuat akun petugas.
- Petugas memperbarui status menjadi Diproses atau Selesai dan menambahkan catatan.
- Fasilitas yang tidak digunakan dapat ditandai tidak aktif, bukan dihapus.
- Timeline mencatat perubahan status.
- Data demo yang diubah tersimpan di `localStorage` browser. Tombol reset belum dibuat; untuk mengembalikan data awal, hapus data situs/localStorage untuk halaman Live Server.

## Catatan penting

Ini hanya simulasi sisi frontend untuk latihan. `localStorage`, pemilihan akun demo, dan kata sandi di contoh tidak cocok untuk sistem sungguhan. Pada Fase 2 nanti, aturan role harus ditegakkan di backend PHP, password disimpan sebagai hash, dan data dipindahkan ke MySQL melalui endpoint yang tervalidasi.
