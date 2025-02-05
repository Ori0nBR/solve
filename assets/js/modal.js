document.addEventListener("DOMContentLoaded", function() {
    const photos = document.querySelectorAll('.section-projects--photo');
    const modals = document.querySelectorAll('.g-m-1, .g-m-2, .g-m-3, .g-m-4, .g-m-5, .g-m-6, .g-m-7, .g-m-8, .g-m-9, .g-m-10, .g-m-11, .g-m-12');
    const closeBtns = document.querySelectorAll('.galery-close');

    function hideAllWindows() {
        modals.forEach(function(modal) {
            modal.classList.remove('show');
            modal.classList.add('hide');
            const content = modal.querySelector('.galery-modal-content');
            content.style.opacity = '0';
            content.style.transform = 'scale(0.8)';
        });
    }

    function openWindow(windowElement) {
        hideAllWindows();
        windowElement.classList.remove('hide');
        windowElement.classList.add('show');
        const content = windowElement.querySelector('.galery-modal-content');
        content.style.opacity = '1';
        content.style.transform = 'scale(1)';
    }

    photos.forEach(function(photo) {
        photo.addEventListener('click', function() {
            const modalClass = photo.classList[1];
            const modal = document.querySelector(`.${modalClass.replace('g-', 'g-m-')}`);
            openWindow(modal);
        });
    });

    closeBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            hideAllWindows();
        });
    });

    window.addEventListener('click', function(event) {
        modals.forEach(function(modal) {
            if (event.target === modal) {
                hideAllWindows();
            }
        });
    });
});