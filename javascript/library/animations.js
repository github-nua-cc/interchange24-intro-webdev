const animationsToggleButton = document.getElementById("toggle-animations");
const allAnimations = document.getElementsByClassName("animation");

let animated = false;

const randomNumber = (from, to) => {
  return Math.random() * (to - from) + from;
};

const calculateLeftAnimationVariables = (element) => {
  //set animation key points
  const leftStartingPoint = randomNumber(0, window.innerWidth / 2);
  element.style.setProperty("--left-starting-point", leftStartingPoint + "px");

  const leftFirstTop = randomNumber(0, window.innerHeight / 3);
  element.style.setProperty("--left-first-top", leftFirstTop + "px");

  const leftSecondTop = randomNumber(
    window.innerHeight,
    2 * window.innerHeight
  );
  element.style.setProperty("--left-second-top", leftSecondTop + "px");

  const leftThirdTop = randomNumber(0, window.innerHeight / 3);
  element.style.setProperty("--left-third-top", leftThirdTop + "px");

  const leftFourtyTop = randomNumber(
    window.innerHeight,
    2 * window.innerHeight
  );
  element.style.setProperty("--left-fourth-top", leftFourtyTop + "px");

  //duration - between 5 and 15 seconds
  const leftDuration = randomNumber(5, 15);
  element.style.setProperty("--left-duration", leftDuration + "s");
};

const calculateRightAnimationVariables = (element) => {
  // set animation right starting point
  const rightStartingPoint = randomNumber(0, window.innerHeight / 2);
  element.style.setProperty(
    "--right-starting-point",
    rightStartingPoint + "px"
  );

  //duration - between 10 and 20 seconds
  const rightDuration = randomNumber(10, 20);
  element.style.setProperty("--right-duration", rightDuration + "s");
};

const calculateUpDownAnimationVariables = (element) => {
  // set animation starting point
  const updownStartingPoint = randomNumber(0, window.innerWidth / 3);
  element.style.setProperty(
    "--updown-starting-point",
    updownStartingPoint + "px"
  );

  // set middle point
  const updownMiddlePoint = randomNumber(
    window.innerWidth / 3,
    (2 * window.innerWidth) / 3
  );
  element.style.setProperty("--updown-middle-point", updownMiddlePoint + "px");

  //duration - between 5 and 15 seconds
  const updownDuration = randomNumber(5, 15);
  element.style.setProperty("--updown-duration", updownDuration + "s");
};

// start animation at index
const startAnimation = (index) => {
  // if we've done them all do nothing
  if (index >= allAnimations.length) return;

  // get animation
  const animation = allAnimations[index];

  //it's a left to right -> calculate left animation values
  if (animation.classList.contains("left-to-right")) {
    calculateLeftAnimationVariables(animation);
  }

  //if it's a right to left -> calculate right animation values
  if (animation.classList.contains("right-to-left")) {
    calculateRightAnimationVariables(animation);
  }

  //if it's an updown -> calculate updown animation values
  if (animation.classList.contains("up-and-down")) {
    calculateUpDownAnimationVariables(animation);
  }

  //anything else
  animation.classList.add("animated");
  startAnimation(index + 1);
};

// loop through all animations and remove aniimated class to disable them
const disableAnimations = () => {
  for (const animation of allAnimations) {
    animation.classList.remove("animated");
  }
};

// animations toggle button
animationsToggleButton.onclick = () => {
  // disable all animations
  if (animated) disableAnimations();
  // start the first animation which will recursively start all following animations
  else startAnimation(0);

  animated = !animated;
};
