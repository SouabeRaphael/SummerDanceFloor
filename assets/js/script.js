
document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  let bpm = 60/112;
  bpm = bpm * 1000;

  let music = new Audio('/assets/audio/summer.mp3');
  

  const bouncyCircle = new mojs.Shape({
    parent: ".block",
    shape: "circle",
    fill: "#272727",
    stroke: "#FFFF",
    strokeWidth: 8,
    radius: 200,
    duration: 2000,
    isYoyo: true,
    isShowStart: true,
    easing: "elastic.inout",
  });

  const form1 = new mojs.Shape({
    parent: ".form1",
    shape: "rect",
    left: 0,
    top: 0,
    radius: 55,
    fill: "none",
    stroke: "#FFFF00",
    strokeWidth: 3,
    isShowStart:  false,
    isYoyo: true,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: 800 },
    y: { [0]: 300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form2 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    points: 3,
    left: "100%",
    top: 0,
    radius: 55,
    fill: "none",
    stroke: "#00FFFF",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -800 },
    y: { [0]: 300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form3 = new mojs.Shape({
    parent: ".form1",
    shape: "rect",
    left: "100%",
    top: '100%',
    radius: 55,
    fill: "none",
    stroke: "#0000FF",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -800 },
    y: { [0]: -300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form4 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    points: 7,
    left: 0,
    top: '100%',
    radius: 55,
    fill: 'none',
    stroke: "#FF00FF",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: 800 },
    y: { [0]: -300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form12 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    left: '100%',
    top: '40%',
    radius: 30,
    radiusX: 30,
    fill: "none",
    stroke: "#00FF00",
    strokeWidth: 3,
  }).then({
    rotate: { 0: 360 },
    // duration: 800,
    x: { [0]: -700 },
    y: { [0]: 50 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form13 = new mojs.Shape({
    parent: ".form1",
    shape: "rect",
    left: '30%',
    top: '100%',
    radius: 30,
    radiusX: 30,
    fill: "none",
    stroke: "#0000FF",
    strokeWidth: 3,
  }).then({
    rotate: { 0: 360 },
    // duration: 800,
    x: { [0]: 450 },
    y: { [0]: -400 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form14 = new mojs.Shape({
    parent: ".form1",
    shape: "rect",
    left: "100%",
    top: '100%',
    radius: 55,
    fill: "none",
    stroke: "#0000FF",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -800 },
    y: { [0]: -300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form15 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    points: 7,
    left: 0,
    top: '100%',
    radius: 55,
    fill: 'none',
    stroke: "#FF00FF",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: 800 },
    y: { [0]: -300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });
  const form16 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    left: 0,
    top: '10%',
    radius: 55,
    fill: "none",
    stroke: "#FF0000",
    strokeWidth: 3,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: 800 },
    y: { [0]: 200 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form17 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    points: 5,
    left: 0,
    top: '30%',
    radius: 55,
    fill: "none",
    stroke: "#00FF00",
    strokeWidth: 3,
    isShowStart:  false,
    isYoyo: true,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: 800 },
    y: { [0]: 200 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form18 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    points: 3,
    left: "100%",
    top: 0,
    radius: 55,
    fill: "none",
    stroke: "#00FFFF",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -800 },
    y: { [0]: 300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form19 = new mojs.Shape({
    parent: ".form1",
    shape: "rect",
    left: "100%",
    top: '100%',
    radius: 55,
    fill: "none",
    stroke: "#FFFF00",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -800 },
    y: { [0]: -300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });




  const form20 = new mojs.Shape({
    parent: ".form1",
    shape: "rect",
    left: 0,
    top: 0,
    radius: 55,
    fill: "none",
    stroke: "#FFFF00",
    strokeWidth: 3,
    isShowStart:  false,
    isYoyo: true,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: 800 },
    y: { [0]: 300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form21 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    points: 3,
    left: "100%",
    top: 0,
    radius: 55,
    fill: "none",
    stroke: "#00FFFF",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -800 },
    y: { [0]: 300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form22 = new mojs.Shape({
    parent: ".form1",
    shape: "rect",
    left: "100%",
    top: '100%',
    radius: 55,
    fill: "none",
    stroke: "#FFFF00",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -800 },
    y: { [0]: -300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form23 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    points: 7,
    left: 0,
    top: '100%',
    radius: 55,
    fill: 'none',
    stroke: "#FF00FF",
    strokeWidth: 3,
    isShowStart:  false,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: 800 },
    y: { [0]: -300 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });
  const form24 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    left: 0,
    top: '50%',
    radius: 55,
    fill: "none",
    stroke: "#FF0000",
    strokeWidth: 3,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: 800 },
    y: { [0]: 0 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form25 = new mojs.Shape({
    parent: ".form1",
    shape: "cross",
    left: '100%',
    top: '50%',
    radius: 30,
    radiusX: 30,
    fill: "none",
    stroke: "#FF00FF",
    strokeWidth: 3,
  }).then({
    rotate: { 0: 360 },
    // duration: 800,
    x: { [0]: -800 },
    y: { [0]: -20 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form26 = new mojs.Shape({
    parent: ".form1",
    shape: "rect",
    left: '70%',
    top: 0,
    radius: 55,
    radiusX: 55,
    fill: "none",
    stroke: "#0000FF",
    strokeWidth: 3,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -350},
    y: { [0]: 500 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  const form27 = new mojs.Shape({
    parent: ".form1",
    shape: "polygon",
    points: 5,
    left: '70%',
    top: '100%',
    radius: 55,
    radiusX: 55,
    fill: "none",
    stroke: "#00FF00",
    strokeWidth: 3,
  }).then({
    rotate: { 0: 360 },
    x: { [0]: -300},
    y: { [0]: -450 },
    easing: "linear.none",
    isShowEnd: false,
    speed: 0.8,
    duration: bpm,
  });

  // create the timeline
  const mainTimeline = new mojs.Timeline({});
  const timeline3 = new mojs.Timeline({});
  const timeline4 = new mojs.Timeline({});
  const timeline5 = new mojs.Timeline({});
  const timeline6 = new mojs.Timeline({});
  timeline3.add(form12, form13);
  timeline4.add(form14, form15, form16);
  timeline5.add(form17, form18, form19);
  timeline6.add(form20, form21, form22, form23, form24, form25, form26, form27);
  mainTimeline.append(bouncyCircle, form1, form2, form3, form4)
  .append(timeline3)
  .append(timeline4)
  .append(timeline5)
  .append(timeline6);

  let btnPlay = document.querySelector('.block');
  console.log(btnPlay)
  btnPlay.addEventListener('click', playAudio);
  function playAudio(){
    mainTimeline.play()
    music.play()
  }

  // add the timeline to the player

  // const mojsPlayer = new MojsPlayer({
  //   add: mainTimeline,
  // });

});
