// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';


function id(t) {
  return t.id;
}

function name(t) {
  return t.name;
}

function passGrade(t) {
  return t.passGrade;
}

function make(id, name, maxGrade, passGrade) {
  return {
          id: id,
          name: name,
          passGrade: passGrade,
          maxGrade: maxGrade
        };
}

function makeFromJs(ecData) {
  return ecData.map((function (ec) {
                return make(ec.id, ec.name, ec.maxGrade, ec.passGrade);
              }));
}

exports.id = id;
exports.name = name;
exports.passGrade = passGrade;
exports.make = make;
exports.makeFromJs = makeFromJs;
/* No side effect */
