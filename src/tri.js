function trierTache(tab, choix)
{
    const prioriteOrdre = { low : 1, medium : 2, hard : 3};
    if (choix=='date')
    {
        tab.sort((a,b)=> {
            const comparaison1 = new Date(a.date) - new Date(b.date);
            if (!(comparaison1==0))
            {
                return comparaison1;
            }
            return prioriteOrdre[b.priority] - prioriteOrdre[a.priority];
        });

    }
    else if (choix=='priorite')
    {
        tab.sort((a,b)=> prioriteOrdre[b.priority] - prioriteOrdre[a.priority]);
    }
}
export {trierTache};
