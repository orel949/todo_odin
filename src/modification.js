import { homeTasks, todayTasks ,sauvegarderTaches, projects } from "./index.js";
import { validationModif } from "./validationModif.js";
import { trierTache } from "./tri.js";
import { chargerPageActuelle } from "./chargerPage.js";
import { afficherProjet } from "./afficherProjet.js";

let lastmodif = null;
let lastInputListener = null;
let lastChangeListener = null;

function modifierTache(idTache)
{
    let tache;
    const dialogModif = document.querySelector('#modification_tache');
    for (let i=0;i<homeTasks.length;i++)
    {
        if (homeTasks[i].id===idTache)
        {
            tache=homeTasks[i];
        }
    }
    const form = document.querySelector('#modification');

    const nom = document.querySelector('#modification_tache #nom_tache');
    nom.value=tache.name;

    const description = document.querySelector('#modification_tache #description_tache');
    description.value=tache.description;

    const date = document.querySelector('#modification_tache #date_tache');
    date.value=tache.date;

    const selecteur = document.querySelector('#modification_tache #projet_choix');
    selecteur.innerHTML='';
    const placeholder = document.createElement('option');
    placeholder.value = ''; 
    placeholder.disabled = true;
    if (tache.projet=='')
    {
        placeholder.selected = true;
    }
    placeholder.textContent = 'Projets :';
    selecteur.appendChild(placeholder);
    for (let i=0;i<projects.length;i++)
    {
        let option = document.createElement('option');
        option.value = projects[i].name;
        option.textContent = projects[i].name;
        option.dataset.id=projects[i].id;
        selecteur.appendChild(option);
    }
    if (tache.projet!='')
    {
        selecteur.value = tache.projet;
    }

    const prioriteCheck = document.querySelector(`#modification_tache input[name="priorite_tache"][value="${tache.priority}"]`);
    prioriteCheck.checked = true;

    if (lastInputListener) form.removeEventListener('input', lastInputListener);
    if (lastChangeListener) form.removeEventListener('change', lastChangeListener);

    lastInputListener = () => validationModif();
    lastChangeListener = () => validationModif();

    form.addEventListener('input', lastInputListener);
    form.addEventListener('change', lastChangeListener);

    const btnSubmit = form.querySelector('#btnSubmit_modif');

    if (lastmodif)
    {
        btnSubmit.removeEventListener('click', lastmodif);
    }

    lastmodif = function(e)
    {
        e.preventDefault();
        tache.name=nom.value;
        tache.description=description.value;
        tache.projet = selecteur.value;
        const selectedOption = selecteur.options[selecteur.selectedIndex];
        const newIdProjet = selectedOption.dataset.id;
        for (let i = 0; i < projects.length; i++)
        {
            const index = projects[i].taches.indexOf(tache);
            if (index !== -1)
            {
                projects[i].taches.splice(index, 1);
                break;
            }
        }
        if (newIdProjet)
        {
            for (let i = 0; i < projects.length; i++)
            {
                if (newIdProjet === projects[i].id)
                {
                    projects[i].taches.push(tache);
                    break;
                }
            }
        }
        const priorite = document.querySelector('#modification_tache input[name="priorite_tache"]:checked');
        tache.priority = priorite.value;
        const today = new Date().toISOString().split("T")[0];
        if (tache.date===today)
        {
            tache.date=date.value;
            if (!(tache.date===today))
            {
                for (let i=0;i<todayTasks.length;i++)
                {
                    if (todayTasks[i].id===idTache)
                    {
                        todayTasks.splice(i,1);
                        break;
                    }
                }
            };
        }
        else
        {
            tache.date=date.value;
            if (tache.date===today)
            {
                todayTasks.push(tache);
            };
        }
        dialogModif.close();
        trierTache(homeTasks, 'date');
        trierTache(todayTasks, 'priorite');
        sauvegarderTaches();
        chargerPageActuelle();
    }
    btnSubmit.addEventListener('click', lastmodif);
};
export {modifierTache};