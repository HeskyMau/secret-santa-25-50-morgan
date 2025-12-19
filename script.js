const infoWindow = document.getElementById('info-window');
const contentInfo = document.getElementById('content');
const closeBtn = document.getElementById('close-btn');

const contents = [
    "Oouh, le cristal magique...",
    "Coucou",
    "Teeest",
    "Bichou bichou, jetem Momo d'amour",
    "Horglup",
    "PHOTOBOMB",
    "blblblbl <333333",
    "Noyeux joël",
    "42",
    "Horglup, mais baveux cette fois-ci"
]

for (let i = 0; i < contents.length; ++i) {
    const crystal = document.getElementById(`crystal${i + 1}`);
    if (crystal) {
        crystal.addEventListener('click', (e) => {
            e.stopPropagation();
            contentInfo.innerHTML = contents[i];
            infoWindow.classList.add('show');
        });
    }
}

closeBtn.addEventListener('click', () => {
    infoWindow.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (infoWindow.classList.contains('show')) {
        if (!infoWindow.contains(e.target)) {
            infoWindow.classList.remove('show');
        }
    }
});
