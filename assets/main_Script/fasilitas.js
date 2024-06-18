// Function to fetch data from API and display fasilitas cards
async function fetchAndDisplayFasilitas() {
  try {
    const apiUrl = 'https://pesonabandung-a88c9-default-rtdb.asia-southeast1.firebasedatabase.app/Fasilitas.json';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Clear existing content in the gallery container
    const galleryContainer = document.getElementById('gallery-container-fasilitas');
    galleryContainer.innerHTML = '';

    // Loop through the data and create card elements
    let count = 0;
    for (let key in data) {
      if (count >= 3) break;
      const fasilitas = data[key];
      const cardHtml = `
        <div class="col-12 col-md-6 col-lg-12 item gallery-image active">
          <div class="d-flex align-items-center mb-3">
            <div class="item-img" style="flex: 0 0 auto; width: 180px;">
              <img class="w-100" src="${fasilitas.imagesurl}" alt="${fasilitas.name}" style="border: 1px solid #000000; border-radius: 8px;">
            </div>
            <div class="item-content ms-3" style="flex: 1 1 auto;">
              <h5 class="item-title mbr-fonts-style mb-2 mt-2 display-7"><strong>${fasilitas.name}</strong></h5>
              <p class="item-description mbr-fonts-style mb-2 mt-2 display-7">Deskripsi : ${fasilitas.description}</p>
              <h6 class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7">Kategori : <strong>${fasilitas.category}</strong></h6>
              <h6 class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7">Lokasi : ${fasilitas.lokasi}</h6>
              <h6 class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7">🌟 : ${fasilitas.rating}</h6>
              <a href="${fasilitas.link}" class="btn btn-primary w-100 display-4" target="_blank">Kunjungi Destinasi</a>
            </div>
          </div>
        </div>
      `;
      galleryContainer.innerHTML += cardHtml;
      count++;
    }
  } catch (error) {
    console.error('Error fetching and displaying fasilitas:', error);
    alert('Failed to fetch fasilitas. Please try again later.');
  }
}

// Call the function to fetch and display destinations when the page loads
document.addEventListener('DOMContentLoaded', fetchAndDisplayFasilitas);
