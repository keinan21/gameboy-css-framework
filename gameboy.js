document.addEventListener("DOMContentLoaded", () => {
  const showDialogButtons = document.querySelectorAll("[data-gb-dialog-target]");

  showDialogButtons.forEach(button => {
    button.addEventListener("click", () => {
      const dialogId = button.dataset.gbDialogTarget;
      const dialog = document.querySelector(dialogId);
      
      if (dialog) {
        dialog.showModal();
      }
    });
  });

  const closeDialogButtons = document.querySelectorAll("[data-gb-dialog-close]");

  closeDialogButtons.forEach(button => {
    button.addEventListener("click", () => {
      const dialog = button.closest("dialog");
      if (dialog) {
        dialog.close();
      }
    });
  });
});