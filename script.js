document.getElementById('left-arrow').addEventListener('click', (e) => {
  const activeTile = document.querySelector('[data-status="active"');

  activeTile.style.transform = "translate(-100%, 0)";
});
