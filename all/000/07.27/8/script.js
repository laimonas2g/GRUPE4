const imgForm = document.getElementById('img-form');
const imgUrl = document.getElementById('img-url');
const gallery = document.getElementById('gallery');

imgForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const url = imgUrl.value.trim();
  if (url) {
    const container = document.createElement('div');
    container.className = 'gallery-img-container';

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Gallery Image';

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '×';
    removeBtn.className = 'remove-btn';
    removeBtn.addEventListener('click', function() {
      container.remove();
    });

    container.appendChild(img);
    container.appendChild(removeBtn);
    gallery.appendChild(container);

    imgUrl.value = '';
  }
});