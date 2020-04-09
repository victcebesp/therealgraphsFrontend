document.addEventListener('DOMContentLoaded', () => {

    document.getElementsByClassName("button is-danger")[0].addEventListener('click', () => {
        document.getElementsByClassName('modal')[0].classList.toggle('is-active');
        document.getElementsByClassName('is-clipped')[0].classList.toggle('is-clipped');
        document.cookie = "First_visit=True";
    });

    document.getElementsByClassName("modal-close")[0].addEventListener('click', () => {
        document.getElementsByClassName('modal')[0].classList.toggle('is-active');
        document.getElementsByClassName('is-clipped')[0].classList.toggle('is-clipped');
        document.cookie = "First_visit=True";
    });

    document.getElementsByClassName("button is-success")[0].addEventListener('click', () => {
        document.getElementsByClassName('is-clipped')[0].classList.toggle('is-clipped');
        document.cookie = "First_visit=True";
    });

    if (document.cookie.indexOf('First_visit=') !== -1) {
        document.getElementsByClassName('modal')[0].classList.remove('is-active');
        document.getElementsByClassName('is-clipped')[0].classList.remove('is-clipped');
    }

});