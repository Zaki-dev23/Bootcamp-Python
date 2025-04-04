const userSearch = document.getElementById('userSearch');
const fetchBtn = document.querySelector('.submitBtn');
const deleteAllBtn = document.querySelector('.deleteAll');
const wrapper = document.getElementById('wrapper');

async function fetchRandomGif(tag) {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&tag=${tag}&rating=g`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch GIF");
    }

    const result = await response.json();
    return result.data.images.original.url;

  } catch (error) {
    console.error("Error fetching GIF:", error);
  }
}

fetchBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const tag = userSearch.value.trim();

  if (!tag) {
    alert("Please enter a category to search for a GIF.");
    return;
  }

  const gifUrl = await fetchRandomGif(tag);

  if (gifUrl) {
    const gifContainer = document.createElement('div');
    gifContainer.className = 'flex flex-col items-center bg-white p-3 rounded-lg shadow';

    const img = document.createElement('img');
    img.src = gifUrl;
    img.className = 'rounded-lg mb-2 max-w-full h-auto';

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 text-sm';

    deleteBtn.addEventListener('click', () => {
      gifContainer.remove();
    });

    gifContainer.appendChild(img);
    gifContainer.appendChild(deleteBtn);

    wrapper.appendChild(gifContainer);
  }
});

deleteAllBtn.addEventListener('click', () => {
  wrapper.innerHTML = '';
});
