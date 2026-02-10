const modalButtons = document.querySelectorAll("[data-modal]");
const modals = document.querySelectorAll(".modal");
const body = document.body;

const openModal = (modal) => {
  if (!modal) return;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  body.classList.add("modal-open");
};

const closeModal = (modal) => {
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  body.classList.remove("modal-open");
};

modalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const id = button.getAttribute("data-modal");
    const modal = document.getElementById(id);
    openModal(modal);
  });
});

modals.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });

  const closeButton = modal.querySelector(".modal-close");
  if (closeButton) {
    closeButton.addEventListener("click", () => closeModal(modal));
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const openModalElement = document.querySelector(".modal.is-open");
  if (openModalElement) {
    closeModal(openModalElement);
  }
});
