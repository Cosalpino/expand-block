const blocks = document.querySelectorAll('.blocks__block');

function active(id){
    var element = document.getElementById(id);
    var hasActive = element.classList.contains('blocks__block--active');

    removeActive();

    if (!hasActive){
        element.classList.add('blocks__block--active');
    }
}

function removeActive(){
    blocks.forEach(block => {
        block.classList.remove('blocks__block--active');
    })
}