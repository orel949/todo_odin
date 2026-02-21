function formatDateFr(dateString) {
    const date = new Date(dateString);
    const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 
                  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
    
    const jour = date.getDate();
    const moisNom = mois[date.getMonth()];
    
    return `${jour} ${moisNom}`;
}
export {formatDateFr};