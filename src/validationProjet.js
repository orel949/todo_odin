function validationProjet(nameProjet)
{
    const submitProjet = document.querySelector('#btnCreaProjet');
    if (nameProjet.checkValidity())
    {
        submitProjet.classList.remove('hide');
        submitProjet.classList.add('active');
    }
    else
    {
        submitProjet.classList.remove('active');
        submitProjet.classList.add('hide');
    }
}
export {validationProjet};