const audio = ['backsound.mp3']; //Just change this source to change the song
const audioNames = [audioEnchanted = new Audio(),];
for (let i = 0; i < audio.length; i++) {
    audioNames[i].src = audio[i];
}
function audioPlay(name) { // play audio
    if (name === 'Enchanted') {
        audioNames[0].play();
    }
}
function play() {
    audioPlay('Enchanted');
}

const isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    alert('Halo, pastikan udah hidupin volume suara ya');
}

let daynight = document.getElementById('daynight');
let sun = document.querySelector('#sun');
let moon = document.querySelector('#moon');
let bg = document.getElementById('bg');
var rotation = 0;
let day = 'day';

sun.addEventListener('click', rotate);
moon.addEventListener('click', rotate);

function rotate() {
    if (text.innerHTML == "coba kamu klik mataharinya, I guarantee you'll be amazed" || scene >= 45) {
        rotation = rotation + 0.5;
        daynight.style.transform = 'rotate(' + rotation + 'turn)';
        document.body.classList.toggle('dark-theme');
    }
    if (rotation % 1 == 0) day = 'day';
    else day = 'night';
}

function stars() {
    let count = 300;
    let scene = document.querySelector('.content');
    let i = 0;
    while (i < count) {
        let star = document.createElement('star');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 1;

        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';
        star.style.animationDuration = 15 + duration + 's';
        star.style.animationDelay = duration + 's';

        scene.appendChild(star);
        i++;
    }
}

function firefliesF() {
    let scene = document.querySelector('#fireflies');
    let count = 300;
    let i = 0;
    while (i < count) {
        let fireflies = document.createElement('fireflies');
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * window.innerHeight);
        let duration = Math.random() * 10;
        let size = Math.random() * 1;

        fireflies.style.left = x + 'px';
        fireflies.style.top = y + 'px';
        fireflies.style.width = 1 + size + 'px';
        fireflies.style.height = 1 + size + 'px';
        fireflies.style.animationDuration = 15 + duration + 's';
        fireflies.style.animationDelay = duration + 's';

        scene.appendChild(fireflies);
        i++;
    }
}

let content = document.getElementById('content');
let text = document.getElementById('text');
let magic = document.getElementById('magic');
let shoots = document.getElementById('shootingStar');
let btn = document.getElementById('btnWrap');
let cover = document.getElementById('cover');
let yes = document.getElementById('yes');
let no = document.getElementById('no');
let scene = -1;
let count = 0;
// let g1 = document.getElementById('g1');
content.addEventListener('click', function() {
    scene++;
    if (scene == 0) {
        cover.style.animation = 'fadeout 1s alternate forwards';
        play();
        console.log('Created by abdi special for dhea');
    } else if (scene == 1) {
        text.innerHTML = 'pohonnya cantik kan deee';
        cover.style.zIndex = '-98';
        play();
    } else if (scene == 2) {
        text.innerHTML = 'colorful... penuh warna just like u wkwk';
        play();
    } else if (scene == 3) {
        text.innerHTML = 'yang warna-warni itu bunganya, banyak kann';
        play();
    } else if (scene == 4) {
        text.innerHTML = 'aku maren sempet ngelamun trus ga sengaja ngeliat pohon ini';
        play();
    } else if (scene == 5) {
        text.innerHTML = 'emang ga mirip 100% sih, tapi emang bunganya tu warna-warni';
        play();
    } else if (scene == 6) {
        text.innerHTML = 'abstrak tapi cantik just like u, tapi kamu ga abstrak ko';
        play();
    } else if (scene == 7) {
        text.innerHTML = 'coba kamu luangin waktu bentar buat liat pemandangannya';
        play();
    } else if (scene == 8) {
        text.innerHTML = 'gimana, suka gaaa??';
        play();
    } else if (scene == 9) {
        text.innerHTML = 'tapi colorful tree ini bakal jauh lebih cantik kalo malam hari';
        play();
    } else if (scene == 10) {
        text.innerHTML = 'jadi dhea tunggu sampe malam ya....';
        play();
    } else if (scene == 11) {
        text.innerHTML = 'HAHAHAHA ga ko canda aee, yok langsung buat jadi malam';
        play();
    } else if (scene == 12) {
        text.innerHTML = "so i'll give u a magic power to control the time";
        play();
    } else if (scene == 13) {
        text.innerHTML = "coba kamu klik mataharinya, I guarantee you'll be amazed";
        play();
    } else if (scene == 14 && day == 'night') {
        play();
        bg.style.background = '#000';
        let count = 0;
        text.innerHTML = '';
        const actionInterval = setInterval(function() {
            if (count == 3) {
                clearInterval(actionInterval);
                text.innerHTML = 'gimana? cantik gaaa??';
            }
            count++;
        }, 500);
    } else if (scene >= 14 && scene <= 43 && day != 'night') {
        scene = 13;
        text.innerHTML = "coba kamu klik mataharinya, I guarantee you'll be amazed";
        play();
    } else if (scene == 15) {
        text.innerHTML = 'this is a glowing tree too';
        text.style.transitionDelay = '0s';
        play();
    } else if (scene == 16) {
        text.innerHTML = 'pohonnya bakal bersinar kalo malam hari';
        play();
    } else if (scene == 17) {
        text.innerHTML = 'tapi keliatannya masih biasa aja ga sii?';
        play();
    } else if (scene == 18) {
        text.innerHTML = 'langit nya juga sepi bet kyk hati wkwk';
        play();
    } else if (scene == 19) {
        text.innerHTML = 'deee, do u wanna see a magic?';
        play();
    } else if (scene == 20) {
        text.innerHTML = 'so... let me show you how magical this night would be?';
        play();
    } else if (scene == 21) {
        text.innerHTML = 'u ready?';
        play();
    } else if (scene == 22) {
        play();
        $('.fireworks').fireworks({
            sound: false,
            opacity: 1,
            width: '100%',
            height: '100%',
        });
        count = 3;
        const actionInterval = setInterval(function() {
            text.style.fontSize = '30px';
            if (count > 0) text.innerHTML = count;
            else if (count == 0) {
                text.innerHTML = '';
                text.style.fontSize = '18px';
                scene = 22;
                stars();
            } else if (count == -3) {
                $('.fireworks').remove();
                bg.style.background = 'var(--background-color)';
                bg.style.animation = 'bgcolor 1.5s linear';
                document.body.classList.add('star');
                text.style.top = '20%';
                scene = 22;
            } else if (count == -4) {
                text.style.animation = 'fade 2s linear';
                text.style.fontSize = '30px';
                text.innerHTML = 'Happy Birthday Sayanggg';
                clearInterval(actionInterval);
                scene = 22;
            }
            count--;
            scene = 22;
        }, 1000);
        scene = 22;
    } else if (scene == 23 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'teruntuk Dhea Eka Mayang Sari wanita yang pernah jadi pemilik hatiku, Happy Birthday deee';
        play();
    } else if (scene == 24 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'maaf aku baru buat sekarang';
        play();
    } else if (scene == 25 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'sebagai gantinya aku kasih 300 bintang aja ya...';
        // firefliesF();
        // play();
    } else if (scene == 26 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'beneran 300, kalo ga percaya kamu hitung ae sendiri HAHA';
        play();
    } else if (scene == 27 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'dan untuk wish kamu buat ae sendiri wkwk';
        play();
    } else if (scene == 28 && count == -5) {
        text.style.fontSize = '18px';
        text.style.top = '23%';
        text.innerHTML = 'tuu aku kasih bintang satu';
        shoots.style.display = 'block';
        shoots.innerHTML = '<span></span>';
        shoots.classList = 'shootingStar one';
        play();
    } else if (scene == 29 && count == -5) {
        text.innerHTML = 'kecepetan kahh? wkwk';
        shoots.classList = 'shootingStar none';
        play();
    } else if (scene == 30) {
        text.innerHTML = 'yodahhh, ni sekali lagi...';
        play();
    } else if (scene == 31) {
        text.innerHTML = 'tuuu, make a wish giii';
        shoots.classList = 'shootingStar one';
        play();
    } else if (scene == 32) {
        text.innerHTML = 'wkwk kamu wish apa tadii?? atau malah ga sempet wish??';
        btn.style.display = 'flex';
        play();
    } else if (scene == 33) {
        text.innerHTML = 'siapa suruh make a wish lama...';
        btn.style.display = 'none';
        play();
    } else if (scene == 34) {
        text.innerHTML = 'yodahhh aku kasih shooting star lagi, kamu mau ga?';
        yes.innerHTML = 'mauuu';
        no.innerHTML = 'mau bangett';
        btn.style.display = 'flex';
        play();
    } else if (scene == 35) {
        text.innerHTML = 'tuuu dah aku spam shooting star khusus untuk kamuu';
        btn.style.display = 'none';
        shoots.classList = 'shootingStar';
        shoots.innerHTML = '<span></span><span></span><span></span><span></span><span></span>';
        play();
    } else if (scene == 36) {
        text.innerHTML = 'biar kamu bisa make wishes sebanyak mungkinnn';
        play();
    } else if (scene == 37) {
        text.innerHTML = 'and biar kamu bisa liat shooting star yang cantikk';
        play();
    } else if (scene == 38) {
        text.innerHTML = 'at least... i wanna say';
        play();
    } else if (scene == 39) {
        text.innerHTML = "aku kangen banget sama kamu tauuu, aku kangen dipeluk kamuu, aku kangen jailin kamuu, aku kangen semuanyaa";
        play();
    } else if (scene == 40) {
        text.innerHTML = "sayang banget yaa kita udah ga sama-sama lagi padahal aku masih sayang banget sama kamu";
        play();
    } else if (scene == 41) {
        text.innerHTML = "aku sadar sikap aku yang ngebuat kamu pergi dan aku nyesel, tapi nyesel pun udah percuma sekarang";
        play();
    } else if (scene == 42) {
        text.innerHTML = "aku ga bakal minta kamu balik lagi sama aku krn aku tau klo kamu sama aku cuma bakal ngebuat kamu sakit";
        play();
    } else if (scene == 43) {
        text.innerHTML = "maafin semua kesalahan aku yaaa, maafin semua perlakuan aku ke kamu";
        play();
    } else if (scene == 44) {
        text.innerHTML = "aku udah berusaha nepatin janji aku buat ga ninggalin kamu, tapi kalo kamu yang milih pergi aku ga bisa apa-apa";
        play();
    } else if (scene == 45) {
        text.innerHTML = "oh iyaa, barang yang pernah aku kasih jangan dibuang yaa, anggap aja itu aku yang nemenin kamu dari jauh";
        play();
    } else if (scene == 46) {
        text.innerHTML = "tapi kalo kamu emang benci banget sama aku gapapa buang ajaa, aku gapapa kokk";
        play();
    } else if (scene == 47) {
        text.innerHTML = "aku senang banget bisa kenal sama kamu, dan aku harap kita ga bakal pernah asing";
        play();
    } else if (scene == 48) {
        text.innerHTML = "kamu jaga diri yaa, jangan telat makan muluuu ntar sakit susahh kamu kan gabisa minum obat";
        play();
    } else if (scene == 49) {
        text.innerHTML = "titip salam buat pengganti aku, bilang klo aku nitipin kamu ke dia yaaa";
        play();
    } else if (scene == 50) {
        text.innerHTML = "kalo kamu butuh apa-apa hubungin aja akuu, aku bakal selalu ada buat kamuu";
        play();
    } else if (scene == 51) {
        text.innerHTML = "kalo butuh tempat cerita aku siap dengerin kamu cerita tentang apapun ituu";
        play();
    } else if (scene == 52) {
        text.innerHTML = "sekali lagi jaga diri baik-baik ya sayangggg dan maaf buat semuanya";
        play();
    } else if (scene == 53) {
        text.innerHTML = 'last... with these 300 stars,...';
        play();
    } else if (scene == 54) {
        text.innerHTML = 'I wish you...';
        firefliesF();
    } else if (scene == 55) {
        document.body.classList.add('fireflies');
        magic.style.display = 'block';
        magic.style.animation = 'fade 2s linear';
        document.querySelector('#fireflies').style.animation = 'fade 1s alternate forwards';
        text.style.animation = 'fade 1s linear';
        setTimeout(function() {
            text.innerHTML = 'and here are the fireflies';
        }, 5000)
        play();
    } else if (scene >= 56) {
        text.innerHTML = '';
        magic.style.display = 'none';
        play();

    }
});
