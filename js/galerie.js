const galerieImage = document.getElementById("allImages");

let monImage = getImage("titre", "../image/bouffe 1.jpg");

function getImage(titre, urlImage){
   return 
   <div class="col p-3">
        <div class="image-card text-white">
            <img src="${urlImage}" class="rounded w-100"/>
            <p class="titre-image">${Titre}</p>
            <div class="action-image-buttons" data-show="admin">
                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#EditionPhotoModal"><i class="bi bi-pencil-square"></i></button>
                <button type="button" class="btn btn-outline-light" data-bs-toggle="modal" data-bs-target="#DeletePhotoModal"><i class="bi bi-trash"></i></button>
            </div>
        </div>
    </div>
} 