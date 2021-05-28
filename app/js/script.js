const canvas = new fabric.Canvas("canvas");
// const spiderMan_key_set = ["q", "w", "e", "a", "s", "d"];
// const ironMan_key_set = ["r", "t", "y", "f", "g", "h"];
// const thor_key_set = ["u", "i", "o", "j", "k", "l"];
// const captainAmerica_key_set = ["z", "x", "c", "v", "b", "n"];
// head, left arm, right arm, left leg, right leg, body
//-------------------------------------------------------------//
function newPlayer(getImg) {
  fabric.Image.fromURL(getImg, (img) => {
    playerIMG = img;
    playerIMG.set({
      top: 10,
      left: 10,
    });
    playerIMG.scaleToWidth(50);
    playerIMG.scaleToHeight(200);
    canvas.add(playerIMG);
  });
}
newPlayer("./../../app/img/player.png");
