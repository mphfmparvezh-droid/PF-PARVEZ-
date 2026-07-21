// আপনার অ্যাপের ডেটা এখানে সাজিয়ে রাখুন। এখান থেকে আপনি অ্যাপ অ্যাড/রিমুভ করতে পারবেন।
// "image"-এর জায়গায় আপনার ইমেজের ডাইরেক্ট লিংক বসাবেন।
let appData = [
    { id: 1, name: "CapCut Pro", image: "https://via.placeholder.com/70/000000/ffffff?text=CapCut", rating: 5, downloads: "3.7K", category: "trending" },
    { id: 2, name: "ChatGPT", image: "https://via.placeholder.com/70/000000/ffffff?text=GPT", rating: 5, downloads: "753", category: "trending" },
    { id: 3, name: "Cricfy TV", image: "https://via.placeholder.com/70/000000/ffffff?text=TV", rating: 5, downloads: "635", category: "trending" },
    { id: 4, name: "Sportzfy", image: "https://via.placeholder.com/70/000000/ffffff?text=Sport", rating: 5, downloads: "12K", version: "v15.1.0", category: "latest" },
    { id: 5, name: "Cricfy TV", image: "https://via.placeholder.com/70/000000/ffffff?text=TV", rating: 5, downloads: "2K", version: "v13.0", category: "latest" },
    { id: 6, name: "TikTok", image: "https://via.placeholder.com/70/000000/ffffff?text=TikTok", rating: 5, downloads: "5K", version: "v11.0.3", category: "latest" }
];

// অ্যাপ রেন্ডার করার ফাংশন
function renderApps(data) {
    const trendingContainer = document.getElementById('trending-apps');
    const latestContainer = document.getElementById('latest-apps');
    
    trendingContainer.innerHTML = '';
    latestContainer.innerHTML = '';

    data.forEach(app => {
        const card = `
            <div class="app-card">
                <div class="app-logo"><img src="${app.image}" alt="${app.name}"></div>
                <div class="app-title">${app.name}</div>
                <div class="app-rating">${'★'.repeat(app.rating)}${'☆'.repeat(5-app.rating)}</div>
                <div class="app-downloads"><i class="fas fa-download"></i> ${app.downloads}</div>
                ${app.version ? `<div style="font-size:9px; color:#555; margin-top:4px;">${app.version}</div>` : ''}
            </div>
        `;

        if (app.category === 'trending') {
            trendingContainer.innerHTML += card;
        } else if (app.category === 'latest') {
            latestContainer.innerHTML += card;
        }
    });
}

// ---------------- থিম পরিবর্তনের ফাংশন ----------------
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    // আইকন পরিবর্তন (চাঁদ থেকে সূর্য)
    if (document.body.classList.contains('light-mode')) {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    } else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
});

// ---------------- সার্চ করার ফাংশন ----------------
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function performSearch() {
    const query = searchInput.value.toLowerCase();
    if (query === "") {
        renderApps(appData); // সার্চ খালি থাকলে সব দেখাবে
        return;
    }
    // নামের সাথে মিল রেখে ফিল্টার করবে
    const filteredData = appData.filter(app => app.name.toLowerCase().includes(query));
    renderApps(filteredData);
}

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// পেজ লোড হলে প্রথমবার অ্যাপ দেখাবে
document.addEventListener('DOMContentLoaded', () => renderApps(appData));
