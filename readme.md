# Cronjob Gratis
Pada repo ini akan dijelaskan cara membuat cronjob **gratis** menggunakan Google Script

Langkah-langkah :
- Buka [Google Drive](http://drive.google.com)
- Buat file skrip baru `Baru >> Lainnya >> Skrip Google Apps`
![step_1](https://user-images.githubusercontent.com/9781026/31232654-bbed44d8-aa14-11e7-95b7-eb0253b37fce.png)
- Buka [script.js](https://raw.githubusercontent.com/marufdwinov/cronjob/master/script.js)
- *Copy* isi file tersebut
- *Paste* pada file `Skrip Google Apps` yang baru saja dibuat
![step_2](https://user-images.githubusercontent.com/9781026/31232656-bc384dfc-aa14-11e7-8b12-a183f59cfe03.png)
- Buat file spreadsheets baru, untuk menyimpan data log dari cronjob kita
![step_3](https://user-images.githubusercontent.com/9781026/31232657-bc96b144-aa14-11e7-905c-f1a277f11ca3.png)
- *Copy* `key` dari spreadsheet yang kita buat
![step_4](https://user-images.githubusercontent.com/9781026/31232677-c65e4750-aa14-11e7-87b3-5863e2659235.png)
- Kembali ke file `Skrip Google Apps` yang telah kita buat, edit pada bagian `url` dan `ss`
![step_5](https://user-images.githubusercontent.com/9781026/31232673-c565dade-aa14-11e7-8953-610bff87082f.png)
- Uji coba menjalankan cronjob yang telah kita buat, dengan menekan tombol `Jalankan`
![step_6](https://user-images.githubusercontent.com/9781026/31232675-c6316186-aa14-11e7-8b09-50d4901227f4.png)
- Beri otorisasi untuk cronjob kita, agar dapat mengakses *spreadsheet* yang sudah kita buat
![step_7](https://user-images.githubusercontent.com/9781026/31232703-d0366c1c-aa14-11e7-8a39-63adfe2d84cd.png)
![step_8](https://user-images.githubusercontent.com/9781026/31232706-d0e88672-aa14-11e7-83f3-59ef8895fd16.png)
- Apabila berhasil, maka kita dapat melanjutkan untuk mengatur cronjob kita agar dapat bekerja sesuai interval yang kita inginkan, tekan tombol `Pemicu proyek saat ini`
![step_9](https://user-images.githubusercontent.com/9781026/31232707-d13ef372-aa14-11e7-9415-f9c6b4432420.png)
- Kemudian tabahkan *trigger* baru
![step_10](https://user-images.githubusercontent.com/9781026/31232757-f55eee1a-aa14-11e7-85b3-2d063ff528ac.png)
- Atur interval sesuai kebutuhan kita, lalu simpan
![step_11](https://user-images.githubusercontent.com/9781026/31232756-f559ee88-aa14-11e7-9b7a-b8c6b7cd1c42.png)
- Cronjob **berhasil** kita buat :)

## Author
- Ma'ruf Shidiq [@marufdwinov](http://github.com/marufdwinov)