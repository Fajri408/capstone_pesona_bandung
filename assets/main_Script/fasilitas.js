// Function to fetch data from API and display fasilitas cards
async function fetchAndDisplayFasilitas() {
  try {
    const apiUrl = 'https://pesonabandung-a88c9-default-rtdb.asia-southeast1.firebasedatabase.app/Fasilitas.json';
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const galleryContainer = document.getElementById('gallery-container-fasilitas');
    galleryContainer.innerHTML = '';

    const fasilitasArray = Object.values(data);
    fasilitasArray.sort((a, b) => new Date(b.date) - new Date(a.date));

    window.fasilitasArray = fasilitasArray;

    const recentFasilitas = fasilitasArray.slice(0, 3);
    recentFasilitas.forEach(fasilitas => {
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
    })
  } catch (error) {
    console.error('Error fetching and displaying fasilitas:', error);
    alert('Failed to fetch fasilitas. Please try again later.');
  }
}

function searchFasilitas() {
  const searchInput = document.querySelector('.searchbox input').value.toLowerCase();
  const filteredFasilitas = window.fasilitasArray.filter(fasilitas =>
      fasilitas.name.toLowerCase().includes(searchInput) ||
      fasilitas.description.toLowerCase().includes(searchInput) ||
      fasilitas.category.toLowerCase().includes(searchInput) ||
      fasilitas.lokasi.toLowerCase().includes(searchInput)
  );

  const galleryContainer = document.getElementById('gallery-container-fasilitas');
  galleryContainer.innerHTML = '';

  filteredFasilitas.forEach(fasilitas => {
      const cardHtml = `
          <div class="col-12 col-md-6 col-lg-12 item gallery-image active">
              <div class="d-flex align-items-center mb-3">
                  <div class="item-img" style="flex: 0 0 auto; width: 180px;">
                      <img class="w-100" src="${fasilitas.imagesurl}" alt="${fasilitas.name}" style="border: 1px solid #000000; border-radius: 8px;">
                  </div>
                  <div class="item-content ms-3" style="flex: 1 1 auto;">
                      <h5 class="item-title mbr-fonts-style mb-2 mt-2 display-7"><strong>${fasilitas.name}</strong></h5>
                      <p class="item-description mbr-fonts-style mb-2 mt-2 display-7">Deskripsi: ${fasilitas.description}</p>
                      <h6 class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7">Category: ${fasilitas.category}, Lokasi: ${fasilitas.lokasi}, Rating: ${fasilitas.rating}</h6>
                      <a href="${fasilitas.link}" class="btn btn-primary w-100 display-4" target="_blank">Kunjungi Destinasi</a>
                  </div>
              </div>
          </div>
      `;
      galleryContainer.innerHTML += cardHtml;
  });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayFasilitas);
document.getElementById('button-addon2').addEventListener('click', searchFasilitas);