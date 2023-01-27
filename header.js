
var favouritesNumber = document.querySelector('.favourites-number');
var likeButtons = document.querySelectorAll('.add-to-favorites');
likeButtons?.forEach((div) => {
    div.addEventListener('click', function() {
        if (div.classList.contains('block_like')) {
            favouritesNumber.innerHTML = Number(favouritesNumber.innerHTML) - 1;
        } else {
            favouritesNumber.innerHTML = Number(favouritesNumber.innerHTML) + 1;
        }
        div.classList.toggle('block_like');
        div.classList.toggle('block_not_like');
    });
});
window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
        document.querySelector("header").classList.add('header-shadow');
    } else {
        document.querySelector("header").classList.remove('header-shadow');
    }
})
