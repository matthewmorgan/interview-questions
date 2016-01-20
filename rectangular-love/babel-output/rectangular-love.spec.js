'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _rectangularLove = require('./rectangular-love');

var _rectangularLove2 = _interopRequireDefault(_rectangularLove);

describe('Our intersection finder', function () {
  var r1 = {
    'x': 1,
    'y': 1,
    'w': 5,
    'h': 5
  };

  var r2 = {
    'x': 4,
    'y': 4,
    'w': 2,
    'h': 6
  };

  var r3 = {
    'x': 4,
    'y': 4,
    'w': 2,
    'h': 2
  };

  it('finds the overlap when r1 is left and below r2', function () {
    expect((0, _rectangularLove2['default'])(r1, r2)).toEqual(r3);
  });

  it('works correctly when r2 is entirely inside r1', function () {
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
    expect((0, _rectangularLove2['default'])(r1, r2)).toEqual(r3);
  });

  it('works correctly when r2 falls outside the boundaries of r1', function () {
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

    expect((0, _rectangularLove2['default'])(r1, r2)).toEqual(r3);
  });

  it('doesn\'t care about argument order', function () {
    "use strict";
    expect((0, _rectangularLove2['default'])(r2, r1)).toEqual(r3);
  });

  it('gets it right if r2 is left and below r1', function () {
    "use strict";
    r2 = {
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
    expect((0, _rectangularLove2['default'])(r1, r2)).toEqual(r3);
  });

  it('returns null if there is no overlap', function () {
    "use strict";
    r2 = {
      'x': 100,
      'y': 100,
      'w': 10,
      'h': 10
    };
    expect((0, _rectangularLove2['default'])(r1, r2)).toEqual(null);
    expect((0, _rectangularLove2['default'])(r2, r1)).toEqual(null);
  });

  it('returns no overlap for adjacent rectangles ', function () {
    "use strict";
    r2 = {
      'x': 6,
      'y': 1,
      'h': 5,
      'w': 5
    };
    expect((0, _rectangularLove2['default'])(r1, r2)).toEqual(null);
    expect((0, _rectangularLove2['default'])(r2, r1)).toEqual(null);
  });
});