document.addEventListener("DOMContentLoaded", () => {
  // 1. Temukan semua tombol yang membuka dialog
  const showDialogButtons = document.querySelectorAll("[data-gb-dialog-target]");

  // 2. Loop melalui setiap tombol
  showDialogButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Dapatkan ID dialog dari atribut data
      const dialogId = button.dataset.gbDialogTarget;
      const dialog = document.querySelector(dialogId);
      
      // Jika dialog ditemukan, tampilkan
      if (dialog) {
        dialog.showModal();
      }
    });
  });

  // 3. Temukan semua tombol yang menutup dialog
  const closeDialogButtons = document.querySelectorAll("[data-gb-dialog-close]");

  // 4. Loop melalui setiap tombol
  closeDialogButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Temukan dialog terdekat (parent) dari tombol
      const dialog = button.closest("dialog");
      
      // Jika dialog ditemukan, tutup
      if (dialog) {
        dialog.close();
      }
    });
  });
});