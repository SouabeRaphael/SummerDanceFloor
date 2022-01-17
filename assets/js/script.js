document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const bouncyCircle = new mojs.Shape({
    parent: ".block",
    shape: "circle",
    fill: "#808080",
    stroke: "#FFFF",
    strokeWidth: 8,
    radius: 200,
    duration: 2000,
    isYoyo: true,
    isShowStart: true,
    easing: "elastic.inout",
    repeat: 999,
  });

  const form1 = new mojs.Shape({
    parent: ".form1",
    shape: "rect",
    left: 0,
    top: 0,
    radius: 20,
    fill: "#FF0000",
    stroke: "#FFFF",
    strokeWidth: 3,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: 750 },
    y: { [0]: 400 },
    easing: "linear.none",
    duration: 1500,
  });

  const form2 = new mojs.Shape({
    parent: ".form2",
    shape: "circle",
    left: "100vw",
    top: 0,
    radius: 20,
    fill: "#FF0000",
    stroke: "#FFFF",
    strokeWidth: 3,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -800 },
    y: { [0]: 300 },
    easing: "linear.none",
    duration: 1500,
  });

  // create the timeline
  const mainTimeline = new mojs.Timeline({});
  mainTimeline.add(bouncyCircle, form1, form2);

  // add the timeline to the player
  const mojsPlayer = new MojsPlayer({
    add: mainTimeline,
  });
});
