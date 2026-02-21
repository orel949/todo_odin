function attacherTache(tache, conteneur)
{
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

    const box= document.createElement('div');
    box.className = 'box_jour';

    const nom = document.createElement('div');
    nom.textContent=tache.name;

    box.appendChild(checkbox);
    box.appendChild(nom);
    conteneur.appendChild(box);
}
export {attacherTache};