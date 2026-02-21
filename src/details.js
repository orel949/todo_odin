import { homeTasks } from "./index.js";
import { formatDateFr } from "./formatDate.js";

function detaillerTache(idTache)
{
    let tache;
    for (let i=0;i<homeTasks.length;i++)
    {
        if (idTache===homeTasks[i].id)
        {
            tache=homeTasks[i];
        }
    };
    const nomTache = document.querySelector('.details_nom');
    nomTache.innerHTML='';
    nomTache.textContent=tache.name;

    const projets = document.getElementById('project');
    projets.innerHTML='';
    projets.textContent='Projets : '+tache.projet;

    const priorite = document.getElementById('priority');
    priorite.innerHTML='';
    if (tache.priority=='')
    {
        priorite.textContent='Priorité : low';
    }
    else
    {
        priorite.textContent='Priorité : '+tache.priority;
    }

    const dueDate = document.getElementById('dueDate');
    dueDate.innerHTML='';
    dueDate.textContent='Date : '+formatDateFr(tache.date);

    const description = document.getElementById('description');
    description.innerHTML='';
    description.textContent='Description : '+tache.description;
};
export {detaillerTache};