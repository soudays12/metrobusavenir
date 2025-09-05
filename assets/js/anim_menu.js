

/* on selectionne respectivement le BOUTON, le menu NAVIGATION et la LISTE */
const menu_button = document.getElementById("menu")
const navigation = document.getElementById("navigation")
const nav_bar = document.getElementById("nav-bar")
const liste_menu = document.getElementById("liste_menu")
const user_nav = document.getElementById("user-nav")


menu_button.addEventListener("click", togglenav)

function togglenav(){
    menu_button.classList.toggle("active")
    navigation.classList.toggle("active")
    nav_bar.classList.toggle("active")
    liste_menu.classList.toggle("active")
    user_nav.classList.toggle("active")
}



/* on fait agrandir le bouton de recherche */
const champ_recherche = document.getElementById("search_input")
const btn_recherche = document.getElementById("fa-search")
const nom_site = document.getElementById("nom_site")
const recherche_form = document.getElementById("recherche_form")

btn_recherche.addEventListener("click", agrandir_recherche)

function agrandir_recherche(){
    champ_recherche.classList.toggle("active")
    btn_recherche.classList.toggle("active")
    nom_site.classList.toggle("active")
    recherche_form.classList.toggle("active")
}