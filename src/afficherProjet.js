import { chargerPageActuelle } from "./chargerPage.js";
import { createProjet } from "./creationProjet.js";
import { projects } from "./index.js";

function afficherProjet()
{
    const projetItemContainer = document.querySelector('.sidebar_projects_items');
    projetItemContainer.innerHTML='';
    for (let i=0;i<projects.length;i++)
    {
        createProjet(projects[i]);
    }
    const sidebar_projet= document.querySelector('.sidebar_projects');
    if (projects.length==0)
    {
        sidebar_projet.classList.add('vide');
    }
    else
    {
        sidebar_projet.classList.remove('vide');
    }
}
export {afficherProjet};