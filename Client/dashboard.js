// These buttons demonstrate interactions. Add your page URLs here later.
const toast = document.getElementById('toast');
const sidebar = document.querySelector('.sidebar');
const menu = document.getElementById('menu');
let toastTimer;

menu.addEventListener('click', () => {
  const isOpen = sidebar.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('[data-action]').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    toast.textContent = action === 'Dashboard'
      ? 'You are viewing your dashboard.'
      : `${action} clicked — connect this button to your page.`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
    sidebar.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  });
});
