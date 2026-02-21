import { createTache } from "./creationTache.js";
import { todayTasks, projects } from "./index.js";
import { verifierTacheJour } from "./verifDate.js";

function createTodayPage()
{
    const menu_nom = document.querySelector('.menu_nom');
    menu_nom.innerHTML='';
    const nom = document.createElement('div');
    nom.textContent="Aujourd'hui";
    menu_nom.appendChild(nom);
    const grille = document.querySelector('.grille');
    grille.innerHTML='';
    verifierTacheJour();
    for (let i=0;i<todayTasks.length;i++)
    {
        createTache(todayTasks[i]);
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
export {createTodayPage};