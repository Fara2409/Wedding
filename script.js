let menuBtn = document.querySelector('#menu');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () =>{
    menuBtn.classList.remove('fa-times');
    navbar.classList.remove('active');
};

let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');

    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }

};

var swiper = new Swiper(".gallery-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    loop:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction:false,
    }
});

AOS.init({
    duration:800,
    delay:400
});

document.addEventListener('DOMContentLoaded', function () {
    const weddingDate = new Date("2025-07-26T18:00:00+03:00");
    const countdownElement = document.getElementById('countdown');

    if (!countdownElement) {
        console.error("Элемент с id 'countdown' не найден.");
        return;
    }

    function pad(num) {
        return num.toString().padStart(2, '0');
    }

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = weddingDate - now;

        if (timeRemaining <= 0) {
            countdownElement.textContent = "Свадьба уже состоялась!";
            clearInterval(countdownInterval);
        }
        if(document.getElementById('Tr')) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

            countdownElement.textContent =
                `${days} Gün ${pad(hours)} Saat ${pad(minutes)} Dakika`;
        }
        if(document.getElementById('Ru')) {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

            countdownElement.textContent =
                `${days} Дней ${pad(hours)} Часов ${pad(minutes)} Минут`;
        }
    }
    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown();
});

function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');
    rose.style.left = Math.random() * window.innerWidth + 'px';
    rose.style.animationDuration = (5 + Math.random() * 5) + 's';
    document.querySelector('.falling-roses').appendChild(rose);
}

setInterval(createRose, 500);



const music = document.getElementById('bg-music');
const toggleButton = document.getElementById('music-toggle');

toggleButton.addEventListener('click', () => {
    const iconPause = document.getElementById('icon_pause');
    const iconPlay = document.getElementById('icon_play');

    if (!music.paused) {
        music.pause();
        iconPause.classList.remove('pause_icon_visible');
        iconPause.classList.add('pause_icon_invisible');

        iconPlay.classList.remove('play_icon_invisible');
        iconPlay.classList.add('play_icon_visible');
    } else {
        music.play();
        iconPlay.classList.remove('play_icon_visible');
        iconPlay.classList.add('play_icon_invisible');

        iconPause.classList.remove('pause_icon_invisible');
        iconPause.classList.add('pause_icon_visible');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    music.volume = 0.1;

    const startButton = document.getElementById('start-button');

    startButton.addEventListener('click', function () {
        music.play().then(() => {
        }).catch(err => console.warn("Медиа не может быть воспроизведена автоматически:", err));

        startButton.classList.add('hidden');
        document.body.classList.add('fade-in');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tr = document.getElementById('Tr');
    const ru = document.getElementById('Ru');
    const calTr = document.getElementById('calendar-tr');
    const calRu = document.getElementById('calendar-ru');

    if (tr && calTr) {
        calTr.style.display = 'block';
    } else if (ru && calRu) {
        calRu.style.display = 'block';
    }
});