const toggleTheme = () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
    }
    else document.body.classList.add("dark")
}

// var image = document.querySelector('#image');

// image.onclick = function() {
//     image.src = 'Task\svg\toggle-2.svg';
// };


function changeImage(image) {
    image.src = 'Task\svg\toggle-2.svg';
}