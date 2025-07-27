const input = document.getElementById('search-input');
const clearBtn = document.getElementById('clear-btn');
const items = Array.from(document.querySelectorAll('#items-list li'));
const noResults = document.getElementById('no-results');

input.addEventListener('keyup', function () {
  const query = input.value.trim().toLowerCase();
  let anyVisible = false;
  items.forEach(li => {
    const text = li.textContent;
    const lower = text.toLowerCase();
    if (query && lower.includes(query)) {
      li.innerHTML = text.replace(
        new RegExp(query, 'ig'),
        match => `<span class="highlight">${match}</span>`
      );
      li.style.display = '';
      anyVisible = true;
    } else if (!query) {
      li.innerHTML = text;
      li.style.display = '';
      anyVisible = true;
    } else {
      li.style.display = 'none';
    }
  });
  noResults.style.display = anyVisible ? 'none' : '';
  clearBtn.style.display = query ? '' : 'none';
});

clearBtn.addEventListener('click', function () {
  input.value = '';
  input.dispatchEvent(new Event('keyup'));
});