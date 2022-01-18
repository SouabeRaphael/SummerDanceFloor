document.addEventListener('DOMContentLoaded', (event) => {
  
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
    x:            { 750 : -27},
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
    delay:        2500,
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
    delay:        2s500,
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
    
    delay:        6500,
    duration:     1000,
    isShowEnd:  false,

  });



  // Plan 6

  const firstcircle = new mojs.Shape({
    shape:        'circle',
    left:         '50%',
    fill:         'none',
    radius:       200,
    stroke:       { 'rgba(255,255,255)' : 'rgba(255,255,255)' },
    strokeWidth:  { 10: 10 },
    
    delay:        6500,
    duration:     1000,
    isShowEnd:  false,

  });









  const BLtimeline = new mojs.Timeline;
  BLtimeline.add(lineInBegin1,lineInBegin2,arc1,arc2,firstcircle);

  const mojsPlayer = new MojsPlayer({ add: BLtimeline});
  mojsPlayer.play();

});