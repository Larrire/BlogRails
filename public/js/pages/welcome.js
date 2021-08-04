navbar = document.querySelector('.navbar');
navbar.classList.add('onTop');
logo = document.querySelector('#navbar-logo');
logo.setAttribute('src', `${base_url}/blog-logo-white.png`)
btnSearch = document.querySelector('#btnSearch');
btnSearch.classList.remove('btn-outline-dark')

window.onscroll = function(){
    if( window.scrollY === 0 ){
        navbar.classList.add('onTop');
        logo.setAttribute('src', `${base_url}/blog-logo-white.png`)
        btnSearch.classList.remove('btn-outline-dark')
    } else {
        navbar.classList.remove('onTop');
        logo.setAttribute('src', `${base_url}/blog-logo-black.png`)
        btnSearch.classList.add('btn-outline-dark')
    }
}