const apiURL = 'https://pesonabandung-a88c9-default-rtdb.asia-southeast1.firebasedatabase.app/Destinasi.json';
let destinations = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            destinations = Object.values(data);
            const filter = getURLParameter('filter');
            if (filter) {
                filterByCategory(filter);
            } else {
                renderDestinations(destinations);
            }
        });
});

function renderDestinations(destinations) {
    const container = document.getElementById('destinations-container');
    container.innerHTML = '';
    destinations.forEach(destination => {
        const card = `
            <div class="item features-image col-12 col-md-6 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="${destination.imagesurl}" alt="${destination.name}" class="img-fluid">
                    </div>
                    <div class="item-content">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="item-title mbr-fonts-style display-7 mb-0"><strong>${destination.name}</strong></h5>
                            <button class="btn btn-primary btn-sm display-4" onclick="toggleDetails(this)">Lihat Detail</button>
                        </div>
                        <div class="item-details mt-2" style="display: none;">
                            <p class="mbr-text mbr-fonts-style display-7">${destination.description}</p>
                            <p class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7"><strong>Lokasi : </strong> ${destination.lokasi}</p>
                            <p class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7">🌟 : ${destination.rating}</p>
                            <a href="${destination.link}" target="_blank" class="btn btn-primary btn-sm display-4">Lihat di Peta</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', card);
    });
}

function toggleDetails(button) {
    const details = button.parentElement.nextElementSibling;
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        button.textContent = "Sembunyikan Detail";
    } else {
        details.style.display = "none";
        button.textContent = "Lihat Detail";
    }
}

function filterByCategory(category) {
    const filteredDestinations = category === 'Semua' ? destinations : destinations.filter(destination => destination.category === category);
    renderDestinations(filteredDestinations);
}

function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

function filterDestinations() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const filteredDestinations = destinations.filter(destination => 
        destination.name.toLowerCase().includes(searchInput) || 
        destination.description.toLowerCase().includes(searchInput) ||
        destination.lokasi.toLowerCase().includes(searchInput)
    );
    renderDestinations(filteredDestinations);
}