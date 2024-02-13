let btnDropdown = document.querySelector('.btn-dropdown')
let menu = document.querySelector('#menu')

function showHandler(){
        if(menu.classList.contains("show")){
            menu.classList.remove('show')
            menu.classList.add('hide')
        }else{
            menu.classList.remove('hide')
            menu.classList.add('show')
        }
}

btnDropdown.addEventListener('click' ,showHandler)