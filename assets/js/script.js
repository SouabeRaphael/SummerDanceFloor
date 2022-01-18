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
  
  mojsPlayer.play();

});