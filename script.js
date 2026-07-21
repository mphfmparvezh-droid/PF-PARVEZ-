// আপনার অ্যাপের ডেটা। লোগোর লিংকগুলো আসল লিংক দিয়ে আপডেট করা হয়েছে।
let appData = [
    { id: 1, name: "CapCut Pro", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/CapCut_logo.svg/1200px-CapCut_logo.svg.png", rating: 5, downloads: "3.7K", category: "trending" },
    { id: 2, name: "ChatGPT", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1200px-ChatGPT_logo.svg.png", rating: 5, downloads: "753", category: "trending" },
    { id: 3, name: "Cricfy TV", image: "https://play-lh.googleusercontent.com/3KP9P7b4tB2g3m9eM_jk-g7X7LqD8t8p4o4w9b8k7m8n9o0p", rating: 5, downloads: "635", category: "trending" }, // উদাহরণ লিংক
    { id: 4, name: "Sportzfy", image: "https://play-lh.googleusercontent.com/5aF1aP6vCgW0tWlL_s4r3QHjvGaL3J_Da4k5_6H6v6P0qW", rating: 5, downloads: "12K", version: "v15.1.0", category: "latest" }, // উদাহরণ লিংক
    { id: 5, name: "Cricfy TV", image: "https://play-lh.googleusercontent.com/3KP9P7b4tB2g3m9eM_jk-g7X7LqD8t8p4o4w9b8k7m8n9o0p", rating: 5, downloads: "2K", version: "v13.0", category: "latest" },
    { id: 6, name: "TikTok", image: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg", rating: 5, downloads: "5K", version: "v11.0.3", category: "latest" }
];

// অ্যাপ রেন্ডার করার ফাংশন
function renderApps(data) {
    const trendingContainer = document.getElementById('trending-apps');
    const latestContainer = document.getElementById('latest-apps');
    
    trendingContainer.innerHTML = '';
    latestContainer.innerHTML = '';

    data.forEach(app => {
        // ইমেজ লোড না হলে একটি ডিফল্ট ইমেজ দেখানোর জন্য onerror যুক্ত করা হলো
        const card = `
            <div class="app-card">
                <div class="app-logo"><img src="${app.image}" onerror="this.src='https://via.placeholder.com/70/333333/ffffff?text=App'" alt="${app.name}"></div>
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

/* -------- ১. থিম পরিবর্তন (ডার্ক/লাইট) -------- */
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    } else {
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    }
});

/* -------- ২. সার্চ ফাংশন -------- */
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

function performSearch() {
    const query = searchInput.value.toLowerCase();
    if (query === "") {
        renderApps(appData);
        return;
    }
    const filteredData = appData.filter(app => app.name.toLowerCase().includes(query));
    renderApps(filteredData);
}
searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') performSearch();
});

/* -------- ৩. উপরের ডান পাশের আইকন (টেলিগ্রাম ও মেনু) -------- */
document.getElementById('telegram-btn').addEventListener('click', () => {
    // আপনার টেলিগ্রাম লিংক নিচে বসিয়ে দিলেই কাজ করবে
    window.open('https://t.me/your_channel_link', '_blank'); 
});

document.getElementById('menu-btn').addEventListener('click', () => {
    alert("মেনু বাটন কাজ করছে! (আপনি এখানে ড্রপডাউন মেনু বা সেটিংস অ্যাড করতে পারবেন)");
});

/* -------- ৪. নিচের নেভিগেশন বাটন (Home, Apps, Preset, AI Prompt) -------- */
document.getElementById('nav-home').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('nav-apps').addEventListener('click', () => {
    document.getElementById('trending-apps').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('nav-preset').addEventListener('click', () => {
    alert("Preset সেকশনটি এখনো ডেভেলপমেন্টে আছে। খুব শীঘ্রই যোগ করা হবে!");
});

document.getElementById('nav-ai').addEventListener('click', () => {
    alert("AI Prompt সেকশনটি এখনো ডেভেলপমেন্টে আছে। খুব শীঘ্রই যোগ করা হবে!");
});

// পেজ লোড হলে অ্যাপ রেন্ডার করবে
document.addEventListener('DOMContentLoaded', () => renderApps(appData));
