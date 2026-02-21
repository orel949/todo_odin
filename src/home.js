import { createTache } from "./creationTache.js";
import { homeTasks, projects } from "./index.js";

function createHomePage()
{
    const menu_nom = document.querySelector('.menu_nom');
    menu_nom.innerHTML='';
    const nom = document.createElement('div');
    nom.textContent='Boîte de réception';
    menu_nom.appendChild(nom);
    const grille = document.querySelector('.grille');
    grille.innerHTML='';
    for (let i=0;i<homeTasks.length;i++)
    {
        createTache(homeTasks[i]);
    }
    const selecteur = document.querySelector('#projet_choix');
    selecteur.innerHTML='';
    const placeholder = document.createElement('option');
    placeholder.value = ''; 
    placeholder.disabled = true;
    placeholder.selected = true;
    placeholder.textContent = 'Projets :';
    selecteur.appendChild(placeholder);
    for (let i=0;i<projects.length;i++)
    {
        let option = document.createElement('option');
        option.value = projects[i].name;
        option.textContent = projects[i].name;
        selecteur.appendChild(option);
    }
};
export {createHomePage};