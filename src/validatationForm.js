function validation()
{
    const nom_tache = document.querySelector('#creation #nom_tache');
    const btnSubmit = document.querySelector('#btnSubmit');
    if (nom_tache.checkValidity())
    {
        btnSubmit.classList.remove('hide');
        btnSubmit.classList.add('active');
    }
    else
    {
        btnSubmit.classList.remove('active');
        btnSubmit.classList.add('hide');
    }
};
export {validation};