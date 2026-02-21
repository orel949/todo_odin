import { createTodayPage } from "./today.js";
import { createHomePage } from "./home.js";
import { createProjetPage } from "./projet.js";
import { projects } from "./index.js";
import { createWeekPage } from "./week.js";

function chargerPageActuelle()
{
    let pageActuelle = document.querySelector('.menu_nom div').textContent;
    if (pageActuelle==='Boîte de réception')
    {
        createHomePage();
    }
    else if (pageActuelle==="Aujourd'hui")
    {
        createTodayPage();
    }
    else if (pageActuelle === "Prochainement")
    {
        createWeekPage();
    }
    else
    {
        const projet = projects.find(p => p.name === pageActuelle);
        if (projet)
        {
            createProjetPage(projet.id);
        }
        else
        {
            createTodayPage();
        }
    }
}
export {chargerPageActuelle};