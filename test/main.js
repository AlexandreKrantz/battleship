"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shipFactory = void 0;

const shipFactory = length => {
  const hitArr = [];

  for (let i = 0; i < length; i++) {
    hitArr[i] = false;
  }

  const hit = pos => {
    hitArr[pos] = true;
  };

  const isSunk = () => {
    let result = true;

    for (let i of hitArr) {
      if (i == false) {
        result = false;
      }
    }

    return result;
  };

  return {
    length,
    hitArr,
    hit,
    isSunk
  };
};

exports.shipFactory = shipFactory;