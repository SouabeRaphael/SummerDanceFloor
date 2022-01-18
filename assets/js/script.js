document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');

  const bouncyCircle = new mojs.Shape({
    parent: ".block",
    shape: "circle",
    fill: { "#008000": "#0000FF" },
    radius: { 20: 80 },
    duration: 2000,
    isYoyo: true,
    isShowStart: true,
    easing: "elastic.inout",
    repeat: 1,
  }).then({
    fill: { "#0000FF": "#0FF0FF" },
  }).then({
    fill: { "#0000FF": "#0FF0FF" },
    duration: 10000,
  });

  

  const mojsPlayer = new MojsPlayer({ add: bouncyCircle });
  mojsPlayer.play();

});