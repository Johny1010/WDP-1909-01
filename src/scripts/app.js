console.log('hello');
/// WDP190901-5 :add class active on click for buttons
const addClass = function () {
    const buttonsOutline = document.querySelectorAll('.btn-outline');
    buttonsOutline.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
        });
    });
};

addClass();

/// WDP190901-19 :select stars

const starsDiv = document.querySelectorAll('.stars');
starsDiv.forEach(star => {
  star.addEventListener('click', (e) => {
    if (e.target.tagName=="A"){
      e.preventDefault();
      let allStars = star.querySelectorAll('a');
      let allStarsArr= Array.prototype.slice.call(allStars);
      let starIndex = allStarsArr.indexOf(e.target);
      for(let i=0; i<= starIndex; i++) {
        allStarsArr[i].classList.add('full');
      }
      for(let i=starIndex  + 1; i<allStarsArr.length; i++) {
        allStarsArr[i].classList.remove('full');
      }
    }
  })
})

/// WDP190901-17
const aTab = document.querySelectorAll('.col.menu ul li a');
const tabContent = document.querySelectorAll('.tab-content');
const tabDots = document.querySelectorAll('.col-auto.dots');

function onClickTab(event) {
    aTab.forEach(content => {
        content.classList.remove('active');
    });
    tabContent.forEach(content => {
        content.classList.remove('active');
    });
    tabDots.forEach(content => {
        content.classList.remove('show');
    });
    event.preventDefault();
    event.target.classList.add('active');
    let dataTab = event.target.getAttribute('href');
    let activeTab = document.querySelector('.tab-content' + dataTab);
    let activeDots = document.querySelector('.col-auto.dots' + dataTab);
    activeTab.classList.add('active');
    activeDots.classList.add('show');
};

for (let i = 0; i < aTab.length; i++) {
    aTab[i].addEventListener('click', onClickTab, false);
}
