

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
=======
document.addEventListener('DOMContentLoaded', (event) => {

  console.log('DOM fully loaded and parsed');

  /* -------------------------- */
  /* Explosion initiale au drop */
  /* -------------------------- */
  const randBurst3 = new mojs.Burst({
    radius:   { 0: 1000 },
  count:    50,
  children: {
    shape:      'polygon',
    points:     5,
    radius:     50,
    fill:       'magenta',
    rotate:      { 360: 0 },
    duration:   200,
    delay:      'stagger( rand(0, 1) )',
  }
  }).setSpeed(0.2);

  const randBurst2 = new mojs.Burst({
    radius:   { 0: 1000 },
  count:    50,
  children: {
    shape:      'rect',
    radius:     50,
    fill:       'yellow',
    rotate:      { 360: 0 },
    delay:      100,
    duration:   200,
    delay:      'stagger( rand(0, 1) )',
  }
  }).setSpeed(0.2);

  const randBurst1 = new mojs.Burst({
    radius:   { 0: 1000 },
  count:    50,
  children: {
    shape:      'polygon',
    radius:     50,
    fill:       'cyan',
    rotate:     { 360: 0 },
    delay:      500,
    duration:   200,
    delay:      'stagger( rand(0, 1) )',
  }
  }).setSpeed(0.2);

  /* -------------------------------- */
  /* Bursts successifs jusqu'à la fin */
  /* -------------------------------- */
  const squareBurst = new mojs.Burst({
    radius:   { 0: 500 },
    count:    24,
    children: {
      shape:      'polygon',
      points:     4,
      radius:     {75 : 50},
      fill:       ['#FF1616','#14DD16','#16B0FF'],
      rotate:     { 600: 0 },
      duration:   265,
    }
  }).setSpeed(0.5);

  const triangleBurst = new mojs.Burst({
    radius:   { 0: 500 },
    count:    24,
    children: {
      shape:      'polygon',
      radius:     {75 : 50},
      fill:       ['#FF1616','#14DD16','#16B0FF'],
      rotate:     { 500: 0 },
      duration:   265,
    }
  }).setSpeed(0.5);

  const pentagonBurst = new mojs.Burst({
    radius:   { 0: 500 },
    count:    24,
    children: {
      shape:      'polygon',
      points:     5,
      radius:     {75 : 50},
      fill:       ['#FF1616','#14DD16','#16B0FF'],
      rotate:     { 600: 0 },
      duration:   265,
    }
  }).setSpeed(0.5);

  const squareBurstFinal = new mojs.Burst({
    radius:   { 0: 500 },
    count:    24,
    children: {
      shape:      'polygon',
      points:     4,
      radius:     {75 : 50},
      fill:       ['#FF1616','#14DD16','#16B0FF'],
      rotate:     { 360: 0 },
      duration:   265,
    }
  }).setSpeed(0.5);

  const triangleBurstFinal = new mojs.Burst({
    radius:   { 0: 500 },
    count:    24,
    children: {
      shape:      'polygon',
      radius:     {75 : 50},
      fill:       ['#FF1616','#14DD16','#16B0FF'],
      rotate:     { 500: 0 },
      duration:   265,
    }
  }).setSpeed(0.5);

  /* --------------------------- */
  /* Animation du cercle central */
  /* --------------------------- */
  const circleMagenta = new mojs.Shape({
    shape:        'circle',
    radius:       {75 : 50},
    fill:         'magenta',
    duration:     265,
    isYoyo:       true,
    isShowStart:  false,
    repeat:       7,
    isShowEnd:  false

  });
  const circleCyan = new mojs.Shape({
    shape:        'circle',
    radius:       {75 : 50},
    fill:         'cyan',
    duration:     265,
    isYoyo:       true,
    isShowStart:  false,
    repeat:       7,
    isShowEnd:  false
  });
  const circleYellow = new mojs.Shape({
    shape:        'circle',
    radius:       {75 : 50},
    fill:         'yellow',
    duration:     265,
    isYoyo:       true,
    isShowStart:  false,
    repeat:       7,
    isShowEnd:  false
  });

  const circleMagentaFinal = new mojs.Shape({
    shape:        'circle',
    radius:       {75 : 50},
    fill:         'magenta',
    duration:     265,
    isYoyo:       true,
    isShowStart:  false,
    repeat:       7,
    isShowEnd:  false
  });
  const circleCyanFinal = new mojs.Shape({
    shape:        'circle',
    radius:       {75 : 50},
    fill:         'cyan',
    duration:     265,
    isYoyo:       true,
    isShowStart:  false,
    repeat:       7,
    isShowEnd:  false
  });

  /* --------------------------- */
  /*       Scintillements        */
  /* --------------------------- */

const yShift = 30;
const collisionOpts = {
  fill:   'white',
  y:      { 0: -yShift },
  radius: 5,
  scale:  { 1: 0 },
  duration:  1500,
  isTimelineLess: true,
  isForce3d: true
}

const collision1 = new mojs.Shape(collisionOpts);

const collision2 = new mojs.Shape({
  ...collisionOpts,
  y:    { 0: yShift },
  direction: -1
});

const collision3 = new mojs.Shape({
  ...collisionOpts,
  direction: -1,
  y:    { 0: yShift/1.5 },
  x:    { 0: 10 },
});

const starOpts = {
  shape:          'cross',
  fill:           'none',
  stroke:         'white',
  strokeWidth:    3,
  strokeLinecap:  'round',
  direction:      1,
  left:           collisionOpts.left,
  radius:         { 9: 0 },
  y:              { 0: -yShift/5 },
  x:              'rand(-15, 15)',
  delay:          collisionOpts.duration/2,
  isShowEnd:      false,
}

const collision4 = new mojs.Shape( starOpts );

const collision5 = new mojs.Shape({
  ...starOpts,
  top:    '50%',
  radius: {8: 0},
  y:      { 0: yShift/2 },
  x:      0
});

const collision6 = new mojs.Shape({
  ...starOpts,
  top:    '50%',
  radius: { 9: 0 },
  y:      { 0: yShift },
  x:      { 0: 10 },
  delay:  starOpts.delay - 25
});

const collision7 = new mojs.Shape({
  ...starOpts,
  top:    '49%',
  radius: { 11: 0 },
  y:      { 0: yShift*0.5 },
  x:      { 0: 19 },
  delay:  starOpts.delay - 40,
});

const collision8 = new mojs.Shape({
  ...starOpts,
  top:    '50%',
  radius: { 5: 0 },
  y:      { 0: yShift*1.7 },
  x:      { 0: 6 },
  delay:  starOpts.delay - 45,
});

const collision9 = new mojs.Shape({
  ...starOpts,
  top:    '48%',
  radius: { 9: 0 },
  y:      { 0: yShift*2.4 },
  x:      { 0: -25 },
  delay:  starOpts.delay - 30,
});

const yes = new mojs.Timeline({ delay: 6400 });
yes.add(
  collision1, collision2, collision3,
  collision4, collision5, collision6,
  collision7, collision8, collision9
);

  /* ------------------------- */
  /* Timeline du burst initial */
  /* ------------------------- */
  const explosion = new mojs.Timeline({});
  explosion.add(randBurst1,randBurst2,randBurst3,yes);

  /* -------------------------- */
  /* Timeline du cercle central */
  /* -------------------------- */
  const centerCircleRepeat = new mojs.Timeline({repeat:1});

  centerCircleRepeat.add(circleMagenta)
  .append(circleCyan)
  .append(circleYellow);

  const centerCircle = new mojs.Timeline({});

  centerCircle.add(centerCircleRepeat)
  .append(circleMagentaFinal)
  .append(circleCyanFinal);

  /* ------------------------------ */
  /* TImeline des bursts successifs */
  /* ------------------------------ */
  const burstsRepeat = new mojs.Timeline({repeat:9})

  burstsRepeat.add(squareBurst)
  .append(triangleBurst)
  .append(pentagonBurst);

  const bursts = new mojs.Timeline({});

  bursts.add(burstsRepeat)
  .append(squareBurstFinal)
  .append(triangleBurstFinal);

  /* ----------------------------- */
  /* TImeline de toute l'animation */
  /* ----------------------------- */
  const postDrop = new mojs.Timeline({});

  postDrop.add(centerCircle,explosion,bursts);
  
  const mojsPlayer = new MojsPlayer({
    add: postDrop
  });
  
=======
  
  // Plan 1
  const lineInBegin1 = new mojs.Shape({
    shape:        'rect',
    fill:         { '#FFFFFF' : '#FFFFFF'},
    radius:       10,
    rx:           3,
    x:            { [-750] : 12},
    y:            { 200 : 200},
    scaleX:       { 0 : 5},
    scaleY:       { 0.5 : 0.5},
    origin:       { '0 50%' : '100% 50%'},


    delay:        0,
    duration:     4000,
    isShowEnd:  false,
  }).then({
    scaleX:       { 5 : 0},
    duration:     1000,
  });

  const lineInBegin2 = new mojs.Shape({
    shape:        'rect',
    fill:         { '#FFFFFF' : '#FFFFFF'},
    radius:       10,
    rx:           3,
    x:            { 750 : -33},
    y:            { [-200] : -200},
    scaleX:       { [-0] : -5},
    scaleY:       { 0.5 : 0.5},
    origin:       { '0 50%' : '100% 50%'},


    delay:        0,
    duration:     4000,
    isShowEnd:  false,
  }).then({
    scaleX:       { [-5] : 0},
    duration:     1000,
  });

  // Plan 2

  const arc1 = new mojs.Shape({
    shape:        'circle',
    left:         '50%',
    fill:         'none',
    radius:       200,
    stroke:       { 'rgba(255,255,255)' : 'rgba(255,255,255)' },
    strokeWidth:  { 10: 10 },
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '-50%' },
    rotate:        { [-90]: -90 },
    delay:        3400,
    duration:     3000,
    isShowEnd:  false,
  });

  const arc2 = new mojs.Shape({
    shape:        'circle',
    left:         '50%',
    fill:         'none',
    radius:       200,
    stroke:       { 'rgba(255,255,255)' : 'rgba(255,255,255)' },
    strokeWidth:  { 10: 10 },
    strokeDasharray: '100%',
    strokeDashoffset: { '-100%' : '-50%' },
    rotate:        { [-270]: -270 },
    delay:        3400,
    duration:     3000,
    isShowEnd:  false,
  });

  // Plan 3

  const firstcircle = new mojs.Shape({
    shape:        'circle',
    left:         '50%',
    fill:         'none',
    radius:       200,
    stroke:       { 'rgba(255,255,255)' : 'rgba(255,255,255)' },
    strokeWidth:  { 10: 10 },
    
    delay:        6400,
    duration:     1000,
    isShowEnd:  false,

  });

  // Plan 6

  const circleBeforeBoum = new mojs.Shape({
    shape:        'circle',
    left:         '50%',
    fill:         'none',
    radius:       200,
    stroke:       { 'rgba(255,255,255)' : 'rgba(255,255,255)' },
    strokeWidth:  { 10: 10 },
    delay:        16000,
    duration:     500,
    isShowEnd:  false,

    // Plan 7

  }).then({
    scale: 2,
    duration:     100,
  }).then({
    duration:     100,
    scale: 1,

    // Plan 8

  }).then({
    delay:        350,
    duration:     100,
    scale: 3,
    
  }).then({
    duration:     100,
    scale: 1,
  });

  const circleBeforeBoum2 = new mojs.Shape({
    shape:        'circle',
    left:         '50%',
    fill:         'none',
    radius:       180,
    stroke:       { 'rgba(255,255,255)' : 'rgba(255,255,255)' },
    strokeWidth:  { 5: 5 },
    delay:        16000,
    duration:     50,
    isShowEnd:  false,

  }).then({
    scale: 1.5,
    duration:     100,
  }).then({
    duration:     100,
    scale: 1,
  }).then({
    delay:        350,
    duration:     100,
    scale: 2,
    
  }).then({
    duration:     100,
    scale: 1,
  });

  const BLtimeline = new mojs.Timeline;
  BLtimeline.add(lineInBegin1,lineInBegin2,arc1,arc2,firstcircle,circleBeforeBoum,circleBeforeBoum2);

  const mojsPlayer = new MojsPlayer({ add: BLtimeline});


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
  // });=======
  mojsPlayer.play();


});
