import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", "/js/auth/signin.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", "/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
    new Route("/reservation", "Reserver", "/pages/reservations/reservation.html"),
    new Route("/editPassword", "Changer de mot de passe", "/pages/auth/editPassword.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Steam Coffee";