import { formatDateFr } from "./formatDate.js";

function createTache(tache)
{
    const grille = document.querySelector('.grille');
    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.id=tache.id;
    
    const left = document.createElement('div');
    left.className = 'left';
    
    const caseDiv = document.createElement('div');
    caseDiv.className = 'case';
    
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.dataset.id=tache.id;

    const priorite = tache.priority;
    if (priorite=='hard')
    {
        checkbox.className= 'priorite_hard';
    }
    else if (priorite=='medium')
    {
        checkbox.className= 'priorite_medium';
    }
    else 
    {
        checkbox.className= 'priorite_low';
    }
    
    const nomDiv = document.createElement('div');
    nomDiv.className = 'nom';
    nomDiv.textContent = tache.name;

    
    caseDiv.appendChild(checkbox);
    left.appendChild(caseDiv);
    left.appendChild(nomDiv);

    const today = new Date().toISOString().split("T")[0];
    if (tache.date<today)
    {
        const retard = document.createElement('div');
        retard.className='retard underline';
        retard.textContent = "en retard";
        left.appendChild(retard);
    }
    
    const right = document.createElement('div');
    right.className = 'right';
    
    const details = document.createElement('div');
    details.className = 'details';
    details.dataset.id=tache.id;
    details.textContent = 'Details';
    
    const dateDiv = document.createElement('div');
    dateDiv.className = 'date';
    dateDiv.textContent = formatDateFr(tache.date);
    
    const modif = document.createElement('div');
    modif.className = 'modif';
    modif.dataset.id=tache.id;
    
    const svgModif = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgModif.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgModif.setAttribute('viewBox', '0 0 24 24');
    
    const titleModif = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    
    const pathModif = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathModif.setAttribute('d', 'M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z');
    
    svgModif.appendChild(titleModif);
    svgModif.appendChild(pathModif);
    modif.appendChild(svgModif);
    
    const deleteDiv = document.createElement('div');
    deleteDiv.className = 'delete';
    deleteDiv.dataset.id=tache.id;
    
    const svgDelete = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgDelete.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgDelete.setAttribute('viewBox', '0 0 24 24');
    
    const titleDelete = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    
    const pathDelete = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathDelete.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
    
    svgDelete.appendChild(titleDelete);
    svgDelete.appendChild(pathDelete);
    deleteDiv.appendChild(svgDelete);
    
    right.appendChild(details);
    right.appendChild(dateDiv);
    right.appendChild(modif);
    right.appendChild(deleteDiv);
    
    item.appendChild(left);
    item.appendChild(right);

    grille.appendChild(item);
}
export {createTache};