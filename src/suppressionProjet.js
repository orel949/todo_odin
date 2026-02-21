import { chargerPageActuelle } from "./chargerPage.js";
import { projects, sauvegarderTaches } from "./index.js";

function supprimerProjet(idProjet)
{
    for (let i=0;i<projects.length;i++)
    {
        if (projects[i].id==idProjet)
        {
            for (let j=0;j<projects[i].taches.length;j++)
            {
                projects[i].taches[j].projet="";
            }
            projects.splice(i,1);
            break;
        }
    }
    sauvegarderTaches();
    chargerPageActuelle();
}

export {supprimerProjet};