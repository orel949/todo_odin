function createProjet(projet)
{
    const projetItemContainer = document.querySelector('.sidebar_projects_items');
    const projetItem = document.createElement('div');
    projetItem.className = 'projet_item';
    
    const projetNomBox = document.createElement('div');
    projetNomBox.className = 'projet_nom_box';
    
    const point = document.createElement('div');
    point.textContent = '●';
    
    const projetNom = document.createElement('div');
    projetNom.className = 'projet_nom underline';
    projetNom.textContent = projet.name;
    projetNom.dataset.id=projet.id;
    
    projetNomBox.appendChild(point);
    projetNomBox.appendChild(projetNom);
    
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.classList.add('deleteProjet');
    svg.dataset.id=projet.id;
    
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = 'trash-can-outline';
    
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z');
    
    svg.appendChild(title);
    svg.appendChild(path);
    
    projetItem.appendChild(projetNomBox);
    projetItem.appendChild(svg);

    projetItemContainer.appendChild(projetItem);
}

export {createProjet};