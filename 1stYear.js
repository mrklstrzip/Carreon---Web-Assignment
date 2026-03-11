const grid = document.getElementById('fav-grid');
const extensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.heic' ,'.PNG', '.JPG', '.JPEG', '.GIF', '.WEBP'];

function tryLoadImage(element, baseName) {
    let attempt = 0;
    
    function tryNext() {
        if (attempt < extensions.length) {
            element.src = `${baseName}${extensions[attempt]}`;
            attempt++;
            element.onerror = tryNext;
        } else {
            element.src = 'https://placehold.co/60x60/3e2723/FFF?text=No+Img';
            element.onerror = null;
        }
    }

    tryNext();
}

for (let i = 1; i <= 36; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    
    const img = document.createElement('img');
    
    tryLoadImage(img, i);

    card.appendChild(img);
    
    card.onclick = () => {
        document.getElementById('f-name').innerText = "1st Year #" + i;
        
        const mainImg = document.getElementById('f-img');
        mainImg.src = img.src; 
        mainImg.style.display = "block";
        
        document.getElementById('f-desc').innerText = `S.Y. 2024-2025 Entry ${i}: One of my most memorable experiences.`;
    };
    grid.appendChild(card);
}

function goToExperience() {
    window.location.href = "Experience.html";
}