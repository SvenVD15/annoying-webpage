// Iphone ID
const iphoneImage = document.getElementById('iphone');

// (1) Functie laat de Iphone knipperen
function knipperImage() {
    if (iphoneImage.style.opacity === '0') {
        iphoneImage.style.opacity = '1';
    } else {
        iphoneImage.style.opacity = '0';
    }
}

function startKnipper() {
    setInterval(knipperImage, 100);
}

// Start de startKnipper functie wanneer je op de IOS button drukt
document.getElementById('buttonIOS').addEventListener('click', startKnipper);

// (2) Functie om automatisch te scrollen
function autoScroll() {
    setInterval(function() {
        window.scrollBy(0, 2);
    }, 20);
}

// Start de autoScroll functie wanneer je op de Android button drukt
document.getElementById('buttonAndroid')?.addEventListener('click', autoScroll);

// (3) Functie om automatisch een popup te tonen
function showPopup() {
    const popup = document.createElement('div');
    const texts = ['yoyo', 'whatupp', 'lebron james', 'mashallah suii']; // Array of different texts
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00']; // Array of different background colors

    const randomText = texts[Math.floor(Math.random() * texts.length)]; // Get random text from the array
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // Get random color from the array

    popup.textContent = randomText;
    popup.style.position = 'fixed';
    popup.style.top = getRandomPosition(window.innerHeight) + 'px';
    popup.style.left = getRandomPosition(window.innerWidth) + 'px';
    popup.style.transform = 'translate(-50%, -50%)';
    popup.style.backgroundColor = randomColor;
    popup.style.color = '#fff';
    popup.style.padding = '20px';
    popup.style.borderRadius = '5px';
    popup.style.zIndex = '9999';
    document.body.appendChild(popup);

    setTimeout(function() {
        document.body.removeChild(popup);
    }, 2000); // Adjust the time interval (in milliseconds) between popups here
}

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

// Start de showPopup functie to display the popup periodically
setInterval(showPopup, 100); // Adjust the time interval (in milliseconds) between popups here

