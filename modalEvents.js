document.addEventListener('DOMContentLoaded', () => {

    document.getElementsByClassName("button is-danger")[0].addEventListener('click', () => {
        document.getElementsByClassName('modal')[0].classList.toggle('is-active');
        document.getElementsByClassName('is-clipped')[0].classList.toggle('is-clipped');
    });

    document.getElementsByClassName("button is-success")[0].addEventListener('click', () => {
        document.getElementsByClassName('is-clipped')[0].classList.toggle('is-clipped');
    });

    document.getElementsByClassName("modal-close")[0].addEventListener('click', () => {
        document.getElementsByClassName('modal')[0].classList.toggle('is-active');
        document.getElementsByClassName('is-clipped')[0].classList.toggle('is-clipped');
    });

});