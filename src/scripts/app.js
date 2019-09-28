console.log('hello');
/// WDP190901-5 :add class active on click for buttons
const addClass = function () {
    const buttonsOutline = document.querySelectorAll('.btn-outline');
    buttonsOutline.forEach(button => {
        button.addEventListener('click', () => {    
            button.classList.toggle('active');ą
        });
    });
};

addClass();

