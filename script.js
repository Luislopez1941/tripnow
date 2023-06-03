function openModal(imageUrl) {
    let modal = document.getElementById("myModal");
    let modalImage = document.getElementById("modalImage");

    modal.style.display = "block";
    modalImage.src = imageUrl;
    
    modal.onclick = function () {
        modal.style.display = "none";
        modalImage.src = "";
    };
}
