'use strict';
module.exports = function() {
  
  let y = Math.floor(Math.random() * (1000000 + 1));
  
  const x = function() {
    return y;
  };

  return x;
};