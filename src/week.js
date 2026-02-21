import { formatDateFr } from "./formatDate.js";
import { homeTasks } from "./index.js";
import { attacherTache } from "./weekCreationTache.js";

function matchDay(tab, date, conteneur)
{
    for (let i=0;i<tab.length;i++)
    {
        if (tab[i].date===date)
        {
            attacherTache(tab[i], conteneur);
        }
    }
}

function createWeekPage()
{
    const menu_nom = document.querySelector('.menu_nom');
    menu_nom.innerHTML='';
    const nom = document.createElement('div');
    nom.textContent='Prochainement';
    menu_nom.appendChild(nom);
    const grille = document.querySelector('.grille');
    grille.innerHTML='';
    const jourGrille = document.createElement('div');
    jourGrille.className = 'jour_grille';

// Jour 1
const day1 = new Date().toISOString().split("T")[0];
const jourContainer1 = document.createElement('div');
jourContainer1.className = 'jour_container';
const jour1 = document.createElement('div');
jour1.className = 'jour';
jour1.textContent = 'Aujourd\'hui';
const tacheConteneur1 = document.createElement('div');
tacheConteneur1.className = 'tache_conteneur';

matchDay(homeTasks, day1, tacheConteneur1);

jourContainer1.appendChild(jour1);
jourContainer1.appendChild(tacheConteneur1);
jourGrille.appendChild(jourContainer1);

// Jour 2
const day2 = new Date(Date.now() + 86400000).toISOString().split("T")[0];
const jourContainer2 = document.createElement('div');
jourContainer2.className = 'jour_container';
const jour2 = document.createElement('div');
jour2.className = 'jour';
jour2.textContent = 'Demain';
const tacheConteneur2 = document.createElement('div');
tacheConteneur2.className = 'tache_conteneur';

matchDay(homeTasks, day2, tacheConteneur2);

jourContainer2.appendChild(jour2);
jourContainer2.appendChild(tacheConteneur2);
jourGrille.appendChild(jourContainer2);

// Jour 3
const day3 = new Date(Date.now() + 86400000*2).toISOString().split("T")[0];
const jourContainer3 = document.createElement('div');
jourContainer3.className = 'jour_container';
const jour3 = document.createElement('div');
jour3.className = 'jour';
jour3.textContent = formatDateFr(day3);
const tacheConteneur3 = document.createElement('div');
tacheConteneur3.className = 'tache_conteneur';

matchDay(homeTasks, day3, tacheConteneur3);

jourContainer3.appendChild(jour3);
jourContainer3.appendChild(tacheConteneur3);
jourGrille.appendChild(jourContainer3);

// Jour 4
const day4 = new Date(Date.now() + 86400000*3).toISOString().split("T")[0];
const jourContainer4 = document.createElement('div');
jourContainer4.className = 'jour_container';
const jour4 = document.createElement('div');
jour4.className = 'jour';
jour4.textContent = formatDateFr(day4);
const tacheConteneur4 = document.createElement('div');
tacheConteneur4.className = 'tache_conteneur';

matchDay(homeTasks, day4, tacheConteneur4);

jourContainer4.appendChild(jour4);
jourContainer4.appendChild(tacheConteneur4);
jourGrille.appendChild(jourContainer4);

// Jour 5
const day5 = new Date(Date.now() + 86400000*4).toISOString().split("T")[0];
const jourContainer5 = document.createElement('div');
jourContainer5.className = 'jour_container';
const jour5 = document.createElement('div');
jour5.className = 'jour';
jour5.textContent = formatDateFr(day5);
const tacheConteneur5 = document.createElement('div');
tacheConteneur5.className = 'tache_conteneur';

matchDay(homeTasks, day5, tacheConteneur5);

jourContainer5.appendChild(jour5);
jourContainer5.appendChild(tacheConteneur5);
jourGrille.appendChild(jourContainer5);

// Jour 6
const day6 = new Date(Date.now() + 86400000*5).toISOString().split("T")[0];
const jourContainer6 = document.createElement('div');
jourContainer6.className = 'jour_container';
const jour6 = document.createElement('div');
jour6.className = 'jour';
jour6.textContent = formatDateFr(day6);
const tacheConteneur6 = document.createElement('div');
tacheConteneur6.className = 'tache_conteneur';

matchDay(homeTasks, day6, tacheConteneur6);

jourContainer6.appendChild(jour6);
jourContainer6.appendChild(tacheConteneur6);
jourGrille.appendChild(jourContainer6);

grille.appendChild(jourGrille);
};
export {createWeekPage};