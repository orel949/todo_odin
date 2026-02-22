import { homeTasks, sauvegarderTaches, todayTasks } from "./index.js";


function verifierTacheJour()
{
    const today = new Date().toISOString().split("T")[0];
    for (let i=todayTasks.length-1;i>=0;i--)
    {
        if (!(todayTasks[i].date===today))
        {
            todayTasks.splice(i,1);
        }
    }
    for (let i=0;i<homeTasks.length;i++)
    {
        if (homeTasks[i].date===today && !todayTasks.some(t => t.id === homeTasks[i].id))
        {
            todayTasks.push(homeTasks[i]);
        }
    }
    sauvegarderTaches();
}

export {verifierTacheJour};