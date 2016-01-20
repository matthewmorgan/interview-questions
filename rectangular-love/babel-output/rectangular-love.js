'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

exports['default'] = function (r1, r2) {
  var r3 = {};
  computeAxis(r1.x, r1.w, r2.x, r2.w, 'x', 'w', r3);
  computeAxis(r1.y, r1.h, r2.y, r2.h, 'y', 'h', r3);

  return !r3.h || !r3.w ? null : r3;
};

function computeAxis(loc1, length1, loc2, length2, axis, dimension, r3) {
  var max1 = loc1 + length1;
  var max2 = loc2 + length2;
  if (loc1 <= loc2) {
    if (max1 >= loc2) {
      r3[axis] = loc2;
      r3[dimension] = Math.min(max1 - loc2, length2);
    } else {
      if (loc2 <= max1) {
        r3[axis] = loc2;
        r3[dimension] = length2;
      }
    }
  } else {
    if (max2 >= loc1) {
      r3[axis] = loc1;
      r3[dimension] = max2 - loc1;
    } else {
      //no overlap
    }
  }
}
module.exports = exports['default'];