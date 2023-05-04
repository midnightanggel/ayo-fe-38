const articleDesc = document.getElementById("articleDesc");
const description =
  "Jakarta (ANTARA) - Gubernur Jawa Tengah Ganjar Pranowo menyatakan belajar memajukan pendidikan keagamaan di ponpes Girikusumo bersama KH Munif Zuhri atau Mbah Zuhri. Beliau punya ide yang banyak, beliau sedang mengembangkan diskusi-diskusi antara kampus dengan pesantren dan sudah berjalan beberapa seri, katanya dalam keterangan tertulis di Jakarta, Kamis. Hal itu disampaikan Ganjar usai sowan (berkunjung) ke ponpes Girikusumo. Kunjungan itu rangka syawalan setelah Idul Fitri. Pondok Pesantren (Ponpes) Girikusumo didirikan sejak tahun 1868 oleh Syeikh Muhammad Hadi bin Thohir di Kecamatan Mranggen, Kabupaten Demak, Jawa Tengah. Menurut dia, dalam diskusi itu, terdapat sejumlah kiai, akademisi hingga pakar yang sudah berpengalaman di bidangnya. Diskusi-nya bagaimana merawat bangsa ini, ucapnya. Menurut Ganjar, lingkungan pendidikan pondok pesantren memang harus mengikuti perkembangan zaman, salah satunya dengan menggandeng perguruan tinggi seperti yang dijalankan Mbah Zuhri. Hal itu kata dia, dalam rangka penanaman nilai-nilai pendidikan keagamaan dan penghormatan terhadap tokoh agama dan orang tua. Ihwal merawat bangsa dan negara, serta persatuan dan kesatuan Indonesia juga wajib dilakukan di lingkungan pesantren, katanya menegaskan. Selain itu, kata Ganjar, slogan Hubbul Wathon Minal Iman yang berarti cinta tanah air atau nasionalisme adalah sebagian dari iman, dapat diamalkan, terutama oleh para santri dan pelajar. Saya banyak mendapatkan ide-ide dari beliau (Mbah Zuhri), bagaimana merawat bangsa bersama-sama, biar para anak muda, para pelajar, kelak kemudian cintanya pada bangsa dan negara tidak pernah luntur, penghormatan pada romo, kiai, ulama, orang tua tidak luntur, hubbul wathon minal iman ada di situ, tutur Ganjar menegaskan. Diketahui Ganjar Pranowo merupakan bakal calon presiden pada Pemilu 2024, yang diusung PDI Perjuangan.";
articleDesc.innerHTML = description
  .split(". ")
  .map((el) => `<p>${el}.</p>`)
  .join("");
