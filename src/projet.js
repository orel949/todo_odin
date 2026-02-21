import { createTache } from "./creationTache.js";
import { projects } from "./index.js"

function createProjetPage(idProjet)
{
    let projet;
    const grille = document.querySelector('.grille');
    grille.innerHTML='';
    for (let i=0;i<projects.length;i++)
    {
        if (projects[i].id===idProjet)
        {
            projet=projects[i];
            break;
        }
    }
    const menu_nom = document.querySelector('.menu_nom');
    menu_nom.innerHTML='';
    const nom = document.createElement('div');
    nom.textContent=projet.name;
    menu_nom.appendChild(nom);
    for (let i=0;i<projet.taches.length;i++)
    {
        createTache(projet.taches[i]);
    }
}
export {createProjetPage}