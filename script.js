const numTiles = document.getElementsByClassName('img-container').length;

document.getElementById('left-arrow').addEventListener('click', (e) => {
  const activeTile = document.querySelector('[data-status="active"');
  const currentIndex = parseInt(activeTile.dataset.index);
  const nextIndex = currentIndex < (numTiles - 1) ? (currentIndex + 1) : 0;
  const rightTile = document.querySelector(`[data-index="${nextIndex}"]`);

  activeTile.dataset.status = 'left';
  rightTile.dataset.status = 'active';

  const nextRightIndex = nextIndex < (numTiles - 1) ? (nextIndex + 1) : 0;
  const nextRightTile = document.querySelector(`[data-index="${nextRightIndex}"]`);

  nextRightTile.dataset.status = 'becoming-right';
});

document.getElementById('right-arrow').addEventListener('click', (e) => {
  const activeTile = document.querySelector('[data-status="active"');
  const currentIndex = parseInt(activeTile.dataset.index);
  const nextIndex = currentIndex > 0 ? (currentIndex - 1) : (numTiles - 1);
  const leftTile = document.querySelector(`[data-index="${nextIndex}"]`);

  activeTile.dataset.status = 'right';
  leftTile.dataset.status = 'active';

  const nextLeftIndex = nextIndex > 0 ? (nextIndex - 1) : (numTiles - 1);
  const nextLeftTile = document.querySelector(`[data-index="${nextLeftIndex}"]`);

  nextLeftTile.dataset.status = 'becoming-left';
});
