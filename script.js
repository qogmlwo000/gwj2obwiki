const INTRO_RELEASE_AT = 1800;
const LANDING_DURATION = 3000;

const getStarCount = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return 0;
  }

  const isCompactViewport = window.matchMedia("(max-width: 768px)").matches;
  const deviceMemory = navigator.deviceMemory ?? 8;
  const isLowPowerDevice = deviceMemory <= 4;

  if (isCompactViewport && isLowPowerDevice) {
    return 14;
  }

  if (isCompactViewport || isLowPowerDevice) {
    return 24;
  }

  return 40;
};

const createStars = () => {
  const shell = document.querySelector(".page-shell");

  if (!shell) {
    return null;
  }

  const starCount = getStarCount();

  if (starCount === 0) {
    return null;
  }

  const fragment = document.createDocumentFragment();

  for (let index = 0; index < starCount; index += 1) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    star.style.animationDelay = `${Math.random() * 0.45}s`;
    star.style.animationDuration = `${1.25 + Math.random() * 0.9}s`;
    fragment.appendChild(star);
  }

  const starField = document.createElement("div");
  starField.className = "star-field";
  starField.appendChild(fragment);
  shell.prepend(starField);
  return starField;
};

const syncVisibilityState = () => {
  document.body.classList.toggle("is-paused", document.hidden);
};

const startLanding = () => {
  const introOverlay = document.querySelector(".intro-overlay");
  const starField = createStars();

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.classList.add("is-loaded");
    });
  });

  window.setTimeout(() => {
    document.body.classList.add("is-intro-complete");

    if (introOverlay) {
      window.setTimeout(() => introOverlay.remove(), 900);
    }
  }, INTRO_RELEASE_AT);

  window.setTimeout(() => {
    document.body.classList.add("is-settled");

    if (starField) {
      starField.classList.add("is-fading");
      window.setTimeout(() => starField.remove(), 450);
    }
  }, LANDING_DURATION);
};

document.addEventListener("visibilitychange", syncVisibilityState);
window.addEventListener("load", startLanding, { once: true });
