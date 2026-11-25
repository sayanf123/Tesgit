PASANG DI GITHUB PAGES
1. Buat repository baru di GitHub (public), mis. "toko".
2. Upload SEMUA isi folder ini ke repo (Add file > Upload files). Pastikan folder data/ dan images/ ikut, juga file .nojekyll.
3. Settings > Pages > Source: "Deploy from a branch", Branch: main, folder: / (root) > Save.
4. Tunggu 1-2 menit. Situs: https://USERNAME.github.io/toko/
5. Buat token untuk admin:
   GitHub > Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate new token
   - Repository access: Only select repositories > pilih repo "toko"
   - Permissions > Repository permissions > Contents: Read and write
   - Generate, lalu salin token (github_pat_...)
6. Buka https://USERNAME.github.io/toko/admin.html, isi "username/toko" dan tempel token > Masuk.

CATATAN
- Tidak ada username/password: token GitHub adalah kunci login. Hanya pemegang token yang bisa mengubah katalog.
- Jangan membagikan token dan jangan menaruhnya di dalam file repo.
- Perubahan tampil di situs publik sekitar 1 menit (GitHub Pages perlu membangun ulang).
- Data ada di data/products.json, foto di images/. Semua tercatat sebagai commit sehingga mudah dikembalikan.
