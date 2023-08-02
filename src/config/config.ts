export const carouselConfig = {
  class: "carousel"
};

export const spinneConfig = {
  lines: 10, // The number of lines to draw
  length: 10, // The length of each line
  width: 2, // The line thickness
  radius: 10, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: "spinner-line-fade-quick", // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  color: "#ffffff", // CSS color or array of colors
  fadeColor: "transparent", // CSS color or array of colors
  top: "50%", // Top position relative to parent
  left: "50%", // Left position relative to parent
  shadow: "0 0 1px transparent", // Box-shadow for the lines
  zIndex: 2000000000, // The z-index (defaults to 2e9)
  className: "spinner", // The CSS class to assign to the spinner
  position: "absolute", // Element positioning
};

const toastifyConfig = {
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
};

export const toastifyConfigError = Object.assign(toastifyConfig, {
  text: "There was an error, try again",
  style: {
    background:
      "linear-gradient(to right, hsla(4, 48%, 62%, 1), hsla(4, 48%, 52%, 1))",
  },
});

export const toastifyConfigSuccess = Object.assign(toastifyConfig, {
  text: "Email sent successfully",
  style: {
    background:
      "linear-gradient(to right, hsla(171, 100%, 34%, 1), hsla(171, 100%, 24%, 1))",
  },
});
