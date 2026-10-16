const guideName = '2DVentures';
const currentYear = new Date().getFullYear();
let placeCount = 0;
const placeRating = 4.5;
const priceLevel = 2;
const placeIsOpen = true;
const walkingDistance = false;
const placeDecisions = [
    {
        key: 'luneta',
        rating: placeRating,
        priceLevel,
        isOpen: placeIsOpen,
        walkingDistance
    },
    {
        key: 'sunken',
        rating: 3.5,
        priceLevel: 1,
        isOpen: true,
        walkingDistance: false
    },
    {
        key: 'san-simon',
        rating: 2,
        priceLevel: 2,
        isOpen: false,
        walkingDistance: false
    }
];

const guideNameElement = document.getElementById('GuideName');
const footerText = document.getElementById('footer-text');
const placeCountElement = document.getElementById('place-count');

if (guideNameElement) {
    guideNameElement.textContent = guideName;
}

if (footerText) {
    footerText.textContent = `© ${currentYear} ${guideName}. All rights reserved.`;
}

placeCount = document.querySelectorAll('.place-card').length;
if (placeCountElement) {
    placeCountElement.textContent = placeCount;
}

function getRatingLabel(rating) {
    if (rating >= 4) {
        return 'Highly recommended';
    } else if (rating >= 2.5) {
        return 'Worth a visit';
    } else {
        return "Only if you're nearby";
    }
}

placeDecisions.forEach((place) => {
    const ratingLabel = getRatingLabel(place.rating);
    const budgetAndOpen = place.priceLevel <= 2 && place.isOpen === true;
    const budgetMessage = budgetAndOpen ? 'Good option right now' : 'Maybe another time';
    const distanceNote = place.walkingDistance === true ? 'Walking distance' : 'Better to commute';
    const ratingLabelElement = document.getElementById(`${place.key}-rating-label`);
    const budgetMessageElement = document.getElementById(`${place.key}-budget-message`);
    const distanceNoteElement = document.getElementById(`${place.key}-distance-note`);

    if (ratingLabelElement) {
        ratingLabelElement.textContent = ratingLabel;
    }
    if (budgetMessageElement) {
        budgetMessageElement.textContent = budgetMessage;
    }
    if (distanceNoteElement) {
        distanceNoteElement.textContent = distanceNote;
    }
});

const firstPlace = placeDecisions[0];
const ratingLabel = getRatingLabel(firstPlace.rating);
const budgetMessage = firstPlace.priceLevel <= 2 && firstPlace.isOpen === true ? 'Good option right now' : 'Maybe another time';
const distanceNote = firstPlace.walkingDistance === true ? 'Walking distance' : 'Better to commute';

console.log('guide name:', guideName);
console.log('current year:', currentYear);
console.log('places reviewed:', placeCount);
console.log('rating label:', ratingLabel);
console.log('budget status:', budgetMessage);
console.log('distance note:', distanceNote);

const sidebarToggle = document.querySelector('#sidebar-toggle');
const sidebar = document.querySelector('#guide-sidebar');

function setSidebarOpen(isOpen) {
    document.body.classList.toggle('sidebar-open', isOpen);
    sidebarToggle.setAttribute('aria-expanded', String(isOpen));
    sidebarToggle.textContent = isOpen ? 'Close guide menu' : 'Open guide menu';
}

sidebarToggle.addEventListener('click', () => {
    const isOpen = sidebarToggle.getAttribute('aria-expanded') === 'true';
    setSidebarOpen(!isOpen);
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.body.classList.contains('sidebar-open')) {
        setSidebarOpen(false);
    }
});

document.addEventListener('click', (event) => {
    if (document.body.classList.contains('sidebar-open') && !sidebar.contains(event.target) && event.target !== sidebarToggle) {
        setSidebarOpen(false);
    }
});