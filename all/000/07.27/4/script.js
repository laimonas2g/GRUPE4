const modal = document.getElementById('modal');
const openBtn = document.getElementById('open-modal');
const closeBtn = document.getElementById('close-modal');
const form = document.getElementById('modal-form');
const thankYou = document.getElementById('thank-you');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');

// Open modal
openBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
  form.style.display = '';
  thankYou.style.display = 'none';
  form.reset();
  nameError.textContent = '';
  emailError.textContent = '';
});

// Close modal
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close on Escape key
document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') modal.style.display = 'none';
});

// Form validate & submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  nameError.textContent = '';
  emailError.textContent = '';
  if (!form.name.value.trim()) {
    nameError.textContent = 'Name is required';
    valid = false;
  }
  if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(form.email.value.trim())) {
    emailError.textContent = 'Valid email required';
    valid = false;
  }
  if (valid) {
    form.style.display = 'none';
    thankYou.style.display = '';
    setTimeout(() => {
      modal.style.display = 'none';
    }, 2000);
  }
});