console.log('Pradedam darba!');


window.onload = function() {
  SetGame();
}

function SetGame() {
  // set up the grid for the game board in html
  for (let i = 0; i < 9; i++) { // i goes from 0 to 9
    // <div></div>
    let tile = document.createElement("div");
    tile.id = i.toString();
  }
}

// 07 : 30













