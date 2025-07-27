document.addEventListener('DOMContentLoaded', () => {
  const page = document.body.dataset.page;
  if (!page) return;
  import(`../../src/controllers/${page.charAt(0).toUpperCase() + page.slice(1)}Controller.js`)
    .then(module => new module.default())
    .catch(console.error);
});