function validationModif()
{
    const nom_tache = document.querySelector('#modification #nom_tache');
    const btnSubmit = document.querySelector('#btnSubmit_modif');
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
export {validationModif};