async function fetchAndDisplayDestinations() {
  try {
      const apiUrl = 'https://pesonabandung-a88c9-default-rtdb.asia-southeast1.firebasedatabase.app/Destinasi.json';
      const response = await fetch(apiUrl);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();

      const galleryContainer = document.getElementById('gallery-container');
      galleryContainer.innerHTML = '';

      const destinationsArray = Object.values(data);
      destinationsArray.sort((a, b) => new Date(b.date) - new Date(a.date)); 

      window.destinationsArray = destinationsArray;

      const recentDestinations = destinationsArray.slice(0, 3);
      recentDestinations.forEach(destination => {
          const cardHtml = `
              <div class="col-12 col-md-6 col-lg-12 item gallery-image active">
                  <div class="d-flex align-items-center mb-3">
                      <div class="item-img" style="flex: 0 0 auto; width: 180px;">
                          <img class="w-100" src="${destination.imagesurl}" alt="${destination.name}" style="border: 1px solid #000000; border-radius: 8px;">
                      </div>
                      <div class="item-content ms-3" style="flex: 1 1 auto;">
                          <h5 class="item-title mbr-fonts-style mb-2 mt-2 display-7"><strong>${destination.name}</strong></h5>
                          <p class="item-description mbr-fonts-style mb-2 mt-2 display-7">Deskripsi: ${destination.description}</p>
                          <h6 class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7">Category: ${destination.category}, Lokasi: ${destination.lokasi}, Rating: ${destination.rating}</h6>
                          <a href="${destination.link}" class="btn btn-primary w-100 display-4" target="_blank">Kunjungi Destinasi</a>
                      </div>
                  </div>
              </div>
          `;
          galleryContainer.innerHTML += cardHtml;
      });
  } catch (error) {
      console.error('Error fetching and displaying destinations:', error);
      alert('Failed to fetch destinations. Please try again later.');
  }
}

function goToRandomDestination() {
  if (window.destinationsArray && window.destinationsArray.length > 0) {
      const randomIndex = Math.floor(Math.random() * window.destinationsArray.length);
      const randomDestination = window.destinationsArray[randomIndex];
      window.open(randomDestination.link, '_blank');
  } else {
      alert('No destinations available to navigate to.');
  }
}

function searchDestinations() {
  const searchInput = document.querySelector('.searchbox input').value.toLowerCase();
  const filteredDestinations = window.destinationsArray.filter(destination =>
      destination.name.toLowerCase().includes(searchInput) ||
      destination.description.toLowerCase().includes(searchInput) ||
      destination.category.toLowerCase().includes(searchInput) ||
      destination.lokasi.toLowerCase().includes(searchInput)
  );

  const galleryContainer = document.getElementById('gallery-container');
  galleryContainer.innerHTML = '';

  filteredDestinations.forEach(destination => {
      const cardHtml = `
          <div class="col-12 col-md-6 col-lg-12 item gallery-image active">
              <div class="d-flex align-items-center mb-3">
                  <div class="item-img" style="flex: 0 0 auto; width: 180px;">
                      <img class="w-100" src="${destination.imagesurl}" alt="${destination.name}" style="border: 1px solid #000000; border-radius: 8px;">
                  </div>
                  <div class="item-content ms-3" style="flex: 1 1 auto;">
                      <h5 class="item-title mbr-fonts-style mb-2 mt-2 display-7"><strong>${destination.name}</strong></h5>
                      <p class="item-description mbr-fonts-style mb-2 mt-2 display-7">Deskripsi: ${destination.description}</p>
                      <h6 class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7">Category: ${destination.category}, Lokasi: ${destination.lokasi}, Rating: ${destination.rating}</h6>
                      <a href="${destination.link}" class="btn btn-primary w-100 display-4" target="_blank">Kunjungi Destinasi</a>
                  </div>
              </div>
          </div>
      `;
      galleryContainer.innerHTML += cardHtml;
  });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayDestinations);
document.getElementById('random-destination-btn').addEventListener('click', goToRandomDestination);
document.getElementById('button-addon2').addEventListener('click', searchDestinations);
