import Rectangles from './rectangular-love';
describe('Our intersection finder', () => {
const r1 = {
  'x': 1,
  'y': 1,
  'w': 5,
  'h': 5
};

let r2 = {
  'x': 4,
  'y': 4,
  'w': 2,
  'h': 6
};

let r3 = {
  'x': 4,
  'y': 4,
  'w': 2,
  'h': 2
};


  it('finds the overlap when r1 is left and below r2', ()=> {
      expect(Rectangles(r1,r2)).toEqual(r3);
  });



  it('works correctly when r2 is entirely inside r1', () =>{
    r2 = {
      'x': 2,
      'y': 3,
      'w': 2,
      'h': 2
    };

    r3 = {
      'x': 2,
      'y': 3,
      'w': 2,
      'h': 2
    };
        expect(Rectangles(r1,r2)).toEqual(r3);
  });

  it('works correctly when r2 falls outside the boundaries of r1', () => {
    r2 = {
      'x': 2,
      'y': 3,
      'w': 5,
      'h': 5
    };

    r3 = {
      'x': 2,
      'y': 3,
      'w': 4,
      'h': 3
    };

    expect(Rectangles(r1,r2)).toEqual(r3);

  })

  it('doesn\'t care about argument order', ()=> {
    "use strict";
    expect(Rectangles(r2,r1)).toEqual(r3);
  })

  it('gets it right if r2 is left and below r1', ()=>{
    "use strict";
    r2={
      'x': 0,
      'y': 0,
      'w': 3,
      'h': 3
    };
    r3 = {
      'x': 1,
      'y': 1,
      'w': 2,
      'h': 2
    };
    expect(Rectangles(r1,r2)).toEqual(r3);

  })

  it('returns null if there is no overlap', () => {
    "use strict";
    r2 = {
      'x':100,
      'y': 100,
      'w': 10,
      'h': 10
    };
    expect(Rectangles(r1,r2)).toEqual(null);
    expect(Rectangles(r2,r1)).toEqual(null);
  });

  it('returns no overlap for adjacent rectangles ', () => {
    "use strict";
    r2 = {
      'x': 6,
      'y': 1,
      'h': 5,
      'w': 5
    };
    expect(Rectangles(r1,r2)).toEqual(null);
    expect(Rectangles(r2,r1)).toEqual(null);

  });

});