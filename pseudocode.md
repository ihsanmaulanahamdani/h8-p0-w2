Drag Racing Cars

- SIMPAN "nama player"
- SIMPAN "tipe mobil" dengan nilai array 
- SIMPAN "mobil" dengan nilai tipe mobil dan posisi data pada array

- BUATLAH function dengan nama pilihMobil
  - JIKA "nama player" sama dengan kosong
  - TAMPILKAN "silahkan isi nama anda untuk melanjutkan permainan"
  - JIKA "mobil" sama dengan "tipe mobil" dengan data array di dalamnya
  - TAMPILKAN "selamat datang DITAMBAH "nama player" DITAMBAH di game cars racing"
  - TAMPILKAN "Anda memilih mobil DITAMBAH "tipe mobil dengan data array didalamnya" DITAMBAH sebagai mobil anda"
  - PANGGIL function pilihMobil

- BUATLAH function menghitungKecepatan dengan parameter kecepatan dan mobil
  - SWITCH mobil 
  - CASE untuk "tipe mobil" di posisi array pertama lalu masukkan nilai kecepatan DITAMBAH dengan nilai random dari 1 - 5 dan menggunakan bilangan bulat
  - CASE untuk "tipe mobil" di posisi array kedua lalu masukkan nilai kecepatan DITAMBAH dengan nilai random dari 5 - 10 dan menggunakan bilangan bulat
  - CASE untuk "tipe mobil" di posisi array ketiga lalu masukkan nilai kecepatan DITAMBAH dengan nilai random dari 7 - 15 dan menggunakan bilangan bulat
  - CASE untuk "tipe mobil" di posisi array keempatlalu masukkan nilai kecepatan DITAMBAH dengan nilai random dari 9 - 20 dan menggunakan bilangan bulat
  - CASE untuk "tipe mobil" di posisi array kelima lalu masukkan nilai kecepatan DITAMBAH dengan nilai random dari 25 - 12 dan menggunakan bilangan bulat
  - CASE untuk "tipe mobil" untuk komputer player lalu masukkan nilai kecepatan DITAMBAH dengan nilai random dari 1 - 10 dan menggunakan bilangan bulat
  - RETURN kecepatan

- SIMPAN variabel kecepatan awal dari player dengan nilai 0
- SIMPAN variabel kecepatan awal dari computer player dengan nilai 0
- SIMPAN variabel kecepatan akhir player dengan nilai 0
- SIMPAN variabel kecepatan akhir dari computer player dengan nilai 0
- SIMPAN variabel kecepatan dengan nilai 100
- SIMPAN variabel jarak tempuh dengan nilai 0
- SIMPAN variabel jarak tempuh total player dengan nilai 0
- SIMPAN variabel jarak tempuh total computer player dengan nilai 0
- SIMPAN variabel finish dengan nilai 1000
- SIMPAN variabel waktu tempuh player dengan nilai 0
- SIMPAN variabel waktu tempuh player dengan nilai 0

- BUATLAH function dengan nama mulaiPermainan
  - MENGHITUNG kecepatan akhir mobil player pada iterasi detik tertentu dan ASSIGN ke variabel kecepatan akhir player
  - MENGHITUNG kecepatan akhir mobil komputer player pada iterasi detik tertentu dan ASSIGN ke variabel kecepatan akhir komputer player
  - MENGHITUNG jarak tempuh mobil player pada iterasi detik tertentu dan ASSIGN ke variabel jarak tempuh player
  - ASSIGN jarak tempuh total mobil player DITAMBAH jarak tempuh mobil player pada iterasi detik tertentu
  - MENGHITUNG jarak tempuh komputer mobil player pada iterasi detik tertentu dan ASSIGN ke variabel jarak tempuh komputer player
  - ASSIGN jarak tempuh total mobil komputer player DITAMBAH jarak tempuh mobil computer player pada iterasi detik tertentu
  - MENGHITUNG waktu tempuh player dengan cara jarak tempuh total player DIBAGI kecepatan akhir player dan ASSIGN ke variabel waktu tempuh player
  - SIMPAN variabel waktu player untuk membuat angka di belakang koma menjadi 2 digit
  - MENGHITUNG waktu tempuh komputer player dengan cara jarak tempuh total computer player DIBAGI kecepatan akhir komputer player dan ASSIGN ke variabel waktu tempuh komputer player
  - SIMPAN variabel waktu komputer player untuk membuat angka di belakang koma menjadi 2 digit
  - TAMPILKAN "Waktu tempuh " DITAMBAH nama player DITAMBAH ": " DITAMBAH waktuPlayer DITAMBAH " detik"
  - TAMPILKAN "kecepatan Player: "  kecepatan akhir player
  - TAMPILKAN "Waktu tempuh komputer: " DITAMBAH waktu komputer DITAMBAH " detik"
  - TAMPILKAN "kecepatan Komputer: " DITAMBAH kecepatan akhir komputer player
  - ASSIGN kecepatan akhir player pada iterasi detik tertentu menjadi kecepatan awal player untuk iterasi detik selanjutnya
  - ASSIGN kecepatan akhir komputer player pada iterasi detik tertentu menjadi kecepatan awal komputer player untuk iterasi detik selanjutnya
  - JIKA waktu tempuh player lebih kecil dari waktu tempuh komputer
  - TAMPILKAN congratulation, you won!!!
  - LAINNYA TAMPILKAN sorry, you loose!!!
  - TAMPILKAN mobil yang digunakan adalah DITAMBAH variabel mobil
  - PANGGIL function mulaiPermainan
