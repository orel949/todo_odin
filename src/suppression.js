import { homeTasks, sauvegarderTaches, projects } from "./index.js";
import { todayTasks } from "./index.js";

function supprimerTache(idTache)
{
    for (let i=0;i<homeTasks.length;i++)
    {
        if (homeTasks[i].id==idTache)
        {
            homeTasks.splice(i,1);
            break;
        }
    }
    for (let i=0;i<todayTasks.length;i++)
    {
        if (todayTasks[i].id==idTache)
        {
            todayTasks.splice(i,1);
            break;
        }
    }
    for (let i=0;i<projects.length;i++)
    {
        for (let j=0;j<projects[i].taches.length;j++)
        {
            if (projects[i].taches[j].id==idTache)
            {
                projects[i].taches.splice(j,1);
                break;
            }
        }
    }
    sauvegarderTaches();
};
export {supprimerTache};