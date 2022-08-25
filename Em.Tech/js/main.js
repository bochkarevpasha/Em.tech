let show = document.querySelector('.about__mid-square');
let hide = document.querySelector('.subscribe__mid-square');
let video = document.querySelector('.office-video__container');

show.onclick = function() {
    if (video.style.display = 'none') {
        video.style.display = 'block';
        document.getElementsByClassName('btn').style.opacity = '0.3'
    }
    else {
        video.style.display = 'none';
    }
}

hide.onclick = function() {
    if (video.style.display = 'block') {
        video.style.display = 'none';
    }
    else {
        video.style.display = 'block';
    }
}