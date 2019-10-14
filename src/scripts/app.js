/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef
const slider = tns({
  container: '.my-slider',
  items: 4,
  controls: false,
  loop: true,
  mouseDrag: true,
  touch: true,
  autoHeight: true,
  speed: 400,
  responsive: {
    320: {
      edgePadding: 20,
      gutter: 20,
      items: 1
    },
    768: {
      gutter: 30,
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
