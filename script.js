// এই JSON অ্যারেতে আপনি অ্যাপ এড বা রিমুভ করতে পারবেন
const appData = [
    // Trending Apps
    {
        id: 1,
        name: "CapCut Pro",
        image: "https://via.placeholder.com/70/000000/ffffff?text=CapCut", // আপনার লোগো লিংক দিন
        rating: 5,
        downloads: "3.7K",
        category: "trending"
    },
    {
        id: 2,
        name: "ChatGPT",
        image: "https://via.placeholder.com/70/000000/ffffff?text=GPT",
        rating: 5,
        downloads: "753",
        category: "trending"
    },
    {
        id: 3,
        name: "Cricfy TV",
        image: "https://via.placeholder.com/70/000000/ffffff?text=TV",
        rating: 5,
        downloads: "635",
        category: "trending"
    },
    // Latest Updates
    {
        id: 4,
        name: "Sportzfy",
        image: "https://via.placeholder.com/70/000000/ffffff?text=Sport",
        rating: 5,
        downloads: "12K",
        version: "v15.1.0",
        category: "latest"
    },
    {
        id: 5,
        name: "Cricfy TV",
        image: "https://via.placeholder.com/70/000000/ffffff?text=TV",
        rating: 5,
        downloads: "2K",
        version: "v13.0",
        category: "latest"
    },
    {
        id: 6,
        name: "TikTok",
        image: "https://via.placeholder.com/70/000000/ffffff?text=TikTok",
        rating: 5,
        downloads: "5K",
        version: "v11.0.3",
        category: "latest"
    }
];

// রেন্ডার ফাংশন
function renderApps() {
    const trendingContainer = document.getElementById('trending-apps');
    const latestContainer = document.getElementById('latest-apps');
    
    trendingContainer.innerHTML = '';
    latestContainer.innerHTML = '';

    appData.forEach(app => {
        const card = 
            <div class="app-card">
                <div class="app-logo"><img src="${app.image}" alt="${app.name}"></div>
                <div class="app-title">${app.name}</div>
                <div class="app-rating">${'★'.repeat(app.rating)}${'☆'.repeat(5-app.rating)}</div>
                <div class="app-downloads"><i class="fas fa-download"></i> ${app.downloads}</div>
                ${app.version ? <div style="font-size:9px; color:#555; margin-top:4px;">${app.version}</div> : ''}
            </div>
        ;

        if (app.category === 'trending') {
            trendingContainer.innerHTML += card;
        } else if (app.category === 'latest') {
            latestContainer.innerHTML += card;
        }
    });
}

// পেজ লোড হলে রেন্ডার করুন
document.addEventListener('DOMContentLoaded', renderApps);
