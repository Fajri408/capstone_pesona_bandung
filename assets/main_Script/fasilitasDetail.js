const apiURL = 'https://pesonabandung-a88c9-default-rtdb.asia-southeast1.firebasedatabase.app/Fasilitas.json';
let fasilitas = [];

document.addEventListener('DOMContentLoaded', () => {
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            fasilitas = Object.values(data);
            const filter = getURLParameter('filter');
            if (filter) {
                filterByCategory(filter);
            } else {
                renderFasilitas(fasilitas);
            }
        });
});

function renderFasilitas(fasilitas) {
    const container = document.getElementById('fasilitas-container');
    container.innerHTML = '';
    fasilitas.forEach(fasilitas => {
        const card = `
            <div class="item features-image col-12 col-md-6 col-lg-4">
                <div class="item-wrapper">
                    <div class="item-img">
                        <img src="${fasilitas.imagesurl}" alt="${fasilitas.name}" class="img-fluid">
                    </div>
                    <div class="item-content">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="item-title mbr-fonts-style display-7 mb-0"><strong>${fasilitas.name}</strong></h5>
                            <button class="btn btn-primary btn-sm display-4" onclick="toggleDetails(this)">Lihat Detail</button>
                        </div>
                        <div class="item-details mt-2" style="display: none;">
                            <p class="mbr-text mbr-fonts-style display-7">${fasilitas.description}</p>
                            <p class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7"><strong>Lokasi : </strong>${fasilitas.lokasi}</p>
                            <p class="mbr-item-subtitle mbr-fonts-style mb-2 mt-2 display-7">🌟 : ${fasilitas.rating}</p>
                            <a href="${fasilitas.link}" target="_blank" class="btn btn-primary btn-sm display-4">Lihat di Peta</a>
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
    const filteredFasilitas = category === 'Semua' ? fasilitas : fasilitas.filter(fasilitas => fasilitas.category === category);
    renderFasilitas(filteredFasilitas);
}

function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}