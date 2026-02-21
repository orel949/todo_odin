import "./styles.css";
import { createHomePage } from "./home.js";
import { createTodayPage } from "./today.js";
import { createWeekPage } from "./week.js";
import { validation } from "./validatationForm.js";
import { supprimerTache } from "./suppression.js";
import { modifierTache } from "./modification.js";
import { detaillerTache } from "./details.js";
import { trierTache } from "./tri.js";
import { validationProjet } from "./validationProjet.js";
import { afficherProjet } from "./afficherProjet.js";
import { supprimerProjet } from "./suppressionProjet.js";
import { chargerPageActuelle } from "./chargerPage.js";
import { createProjetPage } from "./projet.js";

function chargerTaches()
{
    const dataHome = localStorage.getItem('homeTasks');
    const dataToday = localStorage.getItem('todayTasks');
    const dataProjets = localStorage.getItem('projects');

    homeTasks = dataHome ? JSON.parse(dataHome) : [];
    todayTasks = dataToday ? JSON.parse(dataToday) : [];
    projects = dataProjets ? JSON.parse(dataProjets) : [];
}
function sauvegarderTaches()
{
    localStorage.setItem('homeTasks',JSON.stringify(homeTasks));
    localStorage.setItem('todayTasks', JSON.stringify(todayTasks));
    localStorage.setItem('projects', JSON.stringify(projects));
}


let homeTasks=[];
let todayTasks=[];
let projects=[];

chargerTaches();

function task(name, description, date, priority, projet)
{
    let id = crypto.randomUUID();
    if (date=='')
    {
        date = new Date().toISOString().split('T')[0];
    }
    if (priority=='')
    {
        priority='low';
    }
    return{
        id,
        name,
        description,
        date,
        priority,
        projet
    };
}

function projet(name, taches)
{
    let id = crypto.randomUUID();
    return{
        id,
        name,
        taches
    };
}

createTodayPage();
afficherProjet();

const menuHome = document.querySelector('.sidebar_home');
const menuToday = document.querySelector('.sidebar_today');
const menuWeek = document.querySelector('.sidebar_week');

const btnAdd = document.querySelector('#btnAdd');

menuHome.addEventListener('click', ()=>
{
    btnAdd.classList.remove('hide');
    createHomePage();
});
menuToday.addEventListener('click', ()=>
{
    btnAdd.classList.remove('hide');
    createTodayPage();
});
menuWeek.addEventListener('click', ()=>
{
    btnAdd.classList.add('hide');
    createWeekPage();
});

const dialogCreation = document.querySelector('#creation_tache');
const btnCloseCrea = document.querySelector('#closeCreation');
const btnSubmit = document.querySelector('#btnSubmit');
let form = document.querySelector('#creation');
const selecteur = document.querySelector('#projet_choix');
btnAdd.addEventListener('click', ()=>
{
    dialogCreation.showModal();
    const nom_tache = document.querySelector('#creation #nom_tache');
    nom_tache.addEventListener('input', ()=>
    {
        validation();
    });
    dialogCreation.addEventListener('close', ()=>
    {
        btnSubmit.classList.add('hide');
        btnSubmit.classList.remove('active');
        form.reset();
        chargerPageActuelle();
    });
});
btnCloseCrea.addEventListener('click', ()=>
{
    dialogCreation.close();
    chargerPageActuelle();
});
btnSubmit.addEventListener('click', (e)=>
{
    e.preventDefault();
    let tache = task(form.nom.value, form.description.value, form.date.value, form.priorite_tache.value, selecteur.value);
    const today = new Date().toISOString().split("T")[0];
    if (tache.date===today)
    {
        todayTasks.push(tache);
    }
    if (selecteur.value!="")
    {
        for (let i=0;i<projects.length;i++)
        {
            if (projects[i].name==selecteur.value)
            {
                projects[i].taches.push(tache);
            }
        }
    }
    homeTasks.push(tache);
    trierTache(homeTasks, 'date');
    trierTache(todayTasks, 'priorite');
    sauvegarderTaches();
    dialogCreation.close();
    chargerPageActuelle();
});

const btnProjet = document.querySelector('.projects_add');
const submitProjet = document.querySelector('#btnCreaProjet');
const creationProjet = document.querySelector('.creation_projet');
let inputProjet = document.querySelector('#nom_projet');
const btnCloseProjet = document.querySelector('#close');
const sidebarProjet = document.querySelector('.sidebar');

btnProjet.addEventListener('click', ()=>
{
    creationProjet.classList.remove('cache');
    inputProjet.focus();
})

btnCloseProjet.addEventListener('click', ()=>
{
    creationProjet.classList.add('cache');
    inputProjet.value='';
    validationProjet(inputProjet);
})

inputProjet.addEventListener('input', ()=>
{
    validationProjet(inputProjet);
})

submitProjet.addEventListener('click', (e)=>
{
    e.preventDefault();
    let newProject = projet(inputProjet.value,[]);
    projects.push(newProject);
    sauvegarderTaches();
    afficherProjet();
    chargerPageActuelle();
    creationProjet.classList.add('cache');
    inputProjet.value='';
    validationProjet(inputProjet);
})

sidebarProjet.addEventListener('click',(e)=>
{
    const btnDelete = e.target.closest('.deleteProjet');
    const projetBtn = e.target.closest('.projet_nom');
    if (btnDelete)
    {
        let idProjet = btnDelete.dataset.id;
        const projetItem = btnDelete.closest('.projet_item');
        projetItem.classList.add('deleted');
        setTimeout(()=>
        {
            projetItem.classList.add('removingDeleted');
            setTimeout(()=>
            {
                supprimerProjet(idProjet);
                afficherProjet();
            },500)
        },1000)
    }
    else if (projetBtn)
    {
        let idProjet = projetBtn.dataset.id;
        createProjetPage(idProjet);
    }
})


const grille = document.querySelector('.grille');
const dialogDetails = document.querySelector('#details_tache');
const btnCloseDetails = document.querySelector('#closeDetails');
btnCloseDetails.addEventListener('click', ()=>
{
    dialogDetails.close();
});
const dialogModif = document.querySelector('#modification_tache');
const btnCloseModif = document.querySelector('#closeModif');
const btnSubmitModif = document.querySelector('#btnSubmit_modif');
btnCloseModif.addEventListener('click', ()=>
{
    dialogModif.close();
});
dialogModif.addEventListener('close', ()=>
{
    btnSubmitModif.classList.remove('active');
    btnSubmitModif.classList.add('hide');
});

grille.addEventListener('click', (e)=>
{
    const btnDelete = e.target.closest('.delete');
    const btnModif = e.target.closest('.modif');
    const btnDetails = e.target.closest('.details');
    const checkbox = document.querySelectorAll('input[type="checkbox"]');
    if (btnDetails)
    {
        let idTache=btnDetails.dataset.id;
        dialogDetails.showModal();
        detaillerTache(idTache);
    }
    if (btnModif)
    {
        let idTache=btnModif.dataset.id;
        dialogModif.showModal();
        modifierTache(idTache);
    }
    if (btnDelete)
    {
        let pageActuelle = document.querySelector('.menu_nom div').textContent;
        let idTache = btnDelete.dataset.id;
        const item = btnDelete.closest('.item');
        item.classList.add('deleted');
        setTimeout(()=>
        {
            item.classList.add('removingDeleted');
            setTimeout(()=>
            {
                supprimerTache(idTache);
                if (pageActuelle==='Boîte de réception')
                {
                    createHomePage();
                }
                else if (pageActuelle==="Aujourd'hui")
                {
                    createTodayPage();
                }
            },500)
        },1000)
    }
    checkbox.forEach(touche =>{
        touche.addEventListener('change', ()=>
        {
            let pageActuelle = document.querySelector('.menu_nom div').textContent;
            let idTache = touche.dataset.id;
            if (pageActuelle==="Prochainement")
            {
                const box = touche.closest('.box_jour');
                box.classList.add('completed');
                setTimeout(()=>
                {
                    box.classList.add('removing');
                    setTimeout(()=>
                    {
                        supprimerTache(idTache);
                        createWeekPage();
                    },500);
                },1000);
            }
            else
            {
                const item = touche.closest('.item');
                item.classList.add('completed');
                setTimeout(()=>
                {
                    item.classList.add('removing');
                    setTimeout(()=>
                    {
                        supprimerTache(idTache);
                        if (pageActuelle==='Boîte de réception')
                        {
                            createHomePage();
                        }
                        else if (pageActuelle==="Aujourd'hui")
                        {
                            createTodayPage();
                        }
                    },500);
                },1000);
            }
        })
    })
});

export {homeTasks, todayTasks, projects};
export {sauvegarderTaches};
