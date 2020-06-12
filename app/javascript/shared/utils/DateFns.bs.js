// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var DateFns = require("date-fns");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var DateFnsTz = require("date-fns-tz");

function formatDistance(date, baseDate, includeSecondsOpt, addSuffixOpt, param) {
  var includeSeconds = includeSecondsOpt !== undefined ? includeSecondsOpt : false;
  var addSuffix = addSuffixOpt !== undefined ? addSuffixOpt : false;
  var options = {
    includeSeconds: includeSeconds,
    addSuffix: addSuffix
  };
  return DateFns.formatDistance(date, baseDate, options);
}

function formatDistanceStrict(date, baseDate, addSuffixOpt, unit, roundingMethodOpt, param) {
  var addSuffix = addSuffixOpt !== undefined ? addSuffixOpt : false;
  var roundingMethod = roundingMethodOpt !== undefined ? roundingMethodOpt : "round";
  var tmp = {
    addSuffix: addSuffix,
    roundingMethod: roundingMethod
  };
  if (unit !== undefined) {
    tmp.unit = Caml_option.valFromOption(unit);
  }
  var options = tmp;
  return DateFns.formatDistanceStrict(date, baseDate, options);
}

function formatDistanceToNow(date, includeSecondsOpt, addSuffixOpt, param) {
  var includeSeconds = includeSecondsOpt !== undefined ? includeSecondsOpt : false;
  var addSuffix = addSuffixOpt !== undefined ? addSuffixOpt : false;
  var options = {
    includeSeconds: includeSeconds,
    addSuffix: addSuffix
  };
  return DateFns.formatDistanceToNow(date, options);
}

function formatDistanceToNowStrict(date, addSuffixOpt, unit, roundingMethodOpt, param) {
  var addSuffix = addSuffixOpt !== undefined ? addSuffixOpt : false;
  var roundingMethod = roundingMethodOpt !== undefined ? roundingMethodOpt : "round";
  var tmp = {
    addSuffix: addSuffix,
    roundingMethod: roundingMethod
  };
  if (unit !== undefined) {
    tmp.unit = Caml_option.valFromOption(unit);
  }
  var options = tmp;
  return DateFns.formatDistanceToNowStrict(date, options);
}

function format(date, fmt) {
  return DateFnsTz.format(date, fmt, {
              timeZone: "Asia/Kolkata"
            });
}

function formatPreset(date, shortOpt, yearOpt, timeOpt, param) {
  var $$short = shortOpt !== undefined ? shortOpt : false;
  var year = yearOpt !== undefined ? yearOpt : false;
  var time = timeOpt !== undefined ? timeOpt : false;
  var leading = $$short ? "MMM d" : "MMMM d";
  var middle = year ? ", yyyy" : "";
  var trailing = time ? " HH:mm" : "";
  return format(date, leading + (middle + trailing));
}

function decodeISO(json) {
  if (typeof json === "string") {
    return DateFns.parseISO(json);
  } else {
    throw [
          Json_decode.DecodeError,
          "Expected string, got " + typeof json
        ];
  }
}

function encodeISO(date) {
  return date.toISOString();
}

function parseISO(prim) {
  return DateFns.parseISO(prim);
}

function differenceInSeconds(prim, prim$1) {
  return DateFns.differenceInSeconds(prim, prim$1);
}

function isPast(prim) {
  return DateFns.isPast(prim);
}

function isFuture(prim) {
  return DateFns.isFuture(prim);
}

exports.parseISO = parseISO;
exports.decodeISO = decodeISO;
exports.encodeISO = encodeISO;
exports.differenceInSeconds = differenceInSeconds;
exports.isPast = isPast;
exports.isFuture = isFuture;
exports.format = format;
exports.formatPreset = formatPreset;
exports.formatDistance = formatDistance;
exports.formatDistanceStrict = formatDistanceStrict;
exports.formatDistanceToNow = formatDistanceToNow;
exports.formatDistanceToNowStrict = formatDistanceToNowStrict;
/* date-fns Not a pure module */
