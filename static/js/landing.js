(function () {
    var modal = document.getElementById("video-modal");
    var openBtn = document.getElementById("how-it-works-btn");
    var closeBtn = document.getElementById("video-modal-close");
    var iframe = document.getElementById("video-modal-iframe");
    var placeholder = document.getElementById("video-modal-placeholder");
    var videoSrc = iframe.dataset.src;

    function openModal(event) {
        event.preventDefault();
        if (videoSrc) {
            iframe.src = videoSrc + "?autoplay=1";
            iframe.hidden = false;
            placeholder.hidden = true;
        } else {
            placeholder.hidden = false;
        }
        modal.hidden = false;
    }

    function closeModal() {
        modal.hidden = true;
        iframe.src = "";
        iframe.hidden = true;
    }

    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });
})();
