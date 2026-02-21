import { sauvegarderTaches, todayTasks } from "./index.js";


function verifierTacheJour()
{
    const today = new Date().toISOString().split("T")[0];
    for (let i=0;i<todayTasks.length;i++)
    {
        if (!(todayTasks[i].date===today))
        {
            todayTasks.splice(i,1);
        }
    }
    sauvegarderTaches();
}

export {verifierTacheJour};