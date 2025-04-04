const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';
const searchQuery = 'fun';
const limit = 10; // Set a smaller limit for pagination
let offset = 0; // Initially starting from the first page
const url1 = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=${limit}&offset=${offset}&rating=g&api_key=${apiKey}`;

console.log(url1);

async function fetchGif() {
  try {
    const response = await fetch(url1);

    if (!response.ok) {
      throw new Error(`Erreur ${response.status} : ${response.statusText}`);
    }

    const data = await response.json();
    console.log("GIF URL:", data.data);

    let content = document.getElementById('getGiphy');
    let findBtn = document.getElementById('find');
    let deleteBtn = document.getElementById('delete');
    let input = document.getElementById('input');
    let nextBtn = document.getElementById('next'); // Next button
    let prevBtn = document.getElementById('prev'); // Previous button

    function displayData(data) {
      content.innerHTML = ''; // Clear the content before displaying new results
      data.forEach(element => {
        console.log("GIF URL:", element.images.original);
        const img = document.createElement('img');
        img.setAttribute('src', `${element.images.original.url}`);
        img.setAttribute('class', `h-30 w-50`);
        content.append(img);
      });
    }

    // Display the initial set of GIFs
    displayData(data.data);

    // Button functionality to search GIFs based on input
    findBtn.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(input.value);
      let filterdata = data.data.filter(item => item.title && item.title.toLowerCase().includes(input.value.toLowerCase()));
      console.log(filterdata);
      displayData(filterdata);
    });

    // Button functionality to delete filtered GIFs
    deleteBtn.addEventListener('click', (e) => {
      e.preventDefault();
      let filterdata = data.data.filter(item => item.title && item.title.toLowerCase().includes(input.value.toLowerCase()));
      let dataDelete = data.data.filter(item => !filterdata.includes(item));
      console.log(dataDelete);
      displayData(dataDelete);
    });

    // Pagination: Next button functionality
    nextBtn.addEventListener('click', async () => {
      offset += limit; // Increase the offset by the limit
      await loadNewPage();
    });

    // Pagination: Previous button functionality
    prevBtn.addEventListener('click', async () => {
      if (offset > 0) {
        offset -= limit; // Decrease the offset by the limit
        await loadNewPage();
      }
    });

    // Function to load a new page of GIFs
    async function loadNewPage() {
      const newUrl = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=${limit}&offset=${offset}&rating=g&api_key=${apiKey}`;
      const newResponse = await fetch(newUrl);
      const newData = await newResponse.json();
      console.log("New GIFs:", newData.data);
      displayData(newData.data);
    }

  } catch (error) {
    console.error("Erreur :", error);
  }
}

fetchGif();


