const toggleBtn = document.querySelector('.toggle_btn');

toggleBtn.onclick = function (){
    const toggleBtnImg = document.querySelector('.fa regular fa-bars');
    const dropdownMenu = document.querySelector('.dropdown_menu');

    dropdownMenu.classList.toggle('active');
    const isOpen = dropdownMenu.classList.contains('open');

    toggleBtnImg.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars';
}
