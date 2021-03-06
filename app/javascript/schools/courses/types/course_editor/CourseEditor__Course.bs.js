// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var DateFns = require("../../../../shared/utils/DateFns.bs.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var Belt_Option = require("bs-platform/lib/js/belt_Option.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");

function url(t) {
  return t.url;
}

function filename(t) {
  return t.filename;
}

function make(url, filename) {
  return {
          url: url,
          filename: filename
        };
}

var $$Image = {
  url: url,
  filename: filename,
  make: make
};

function name(t) {
  return t.name;
}

function id(t) {
  return t.id;
}

function endsAt(t) {
  return t.endsAt;
}

function about(t) {
  return t.about;
}

function publicSignup(t) {
  return t.publicSignup;
}

function description(t) {
  return t.description;
}

function featured(t) {
  return t.featured;
}

function cover(t) {
  return t.cover;
}

function thumbnail(t) {
  return t.thumbnail;
}

function progressionBehavior(t) {
  var match = t.progressionBehavior;
  if (typeof match === "number") {
    if (match !== 0) {
      return /* Strict */-976972951;
    } else {
      return /* Unlimited */751362817;
    }
  } else {
    return /* Limited */-599448518;
  }
}

function progressionLimit(t) {
  var match = t.progressionBehavior;
  if (typeof match === "number") {
    return ;
  } else {
    return match[0];
  }
}

function imageUrl(image) {
  return image.url;
}

function filename$1(image) {
  return image.filename;
}

function sort(courses) {
  return List.sort((function (x, y) {
                return Caml_format.caml_int_of_string(x.id) - Caml_format.caml_int_of_string(y.id) | 0;
              }), courses);
}

function updateList(courses, course) {
  var oldCourses = List.filter((function (c) {
            return c.id !== course.id;
          }))(courses);
  return List.rev(List.append(/* :: */[
                  course,
                  /* [] */0
                ], List.rev(oldCourses)));
}

function makeImageFromJs(data) {
  if (data !== undefined) {
    var image = Caml_option.valFromOption(data);
    return {
            url: image.url,
            filename: image.filename
          };
  }
  
}

function addImages(coverUrl, thumbnailUrl, coverFilename, thumbnailFilename, t) {
  return {
          id: t.id,
          name: t.name,
          description: t.description,
          endsAt: t.endsAt,
          about: t.about,
          publicSignup: t.publicSignup,
          thumbnail: thumbnailUrl !== undefined ? ({
                url: thumbnailUrl,
                filename: thumbnailFilename
              }) : undefined,
          cover: coverUrl !== undefined ? ({
                url: coverUrl,
                filename: coverFilename
              }) : undefined,
          featured: t.featured,
          progressionBehavior: t.progressionBehavior
        };
}

function replaceImages(cover, thumbnail, t) {
  return {
          id: t.id,
          name: t.name,
          description: t.description,
          endsAt: t.endsAt,
          about: t.about,
          publicSignup: t.publicSignup,
          thumbnail: thumbnail,
          cover: cover,
          featured: t.featured,
          progressionBehavior: t.progressionBehavior
        };
}

function makeFromJs(rawCourse) {
  var endsAt = Belt_Option.map(rawCourse.endsAt, DateFns.decodeISO);
  var match = rawCourse.progressionBehavior;
  var progressionBehavior = match !== -599448518 ? (
      match >= 751362817 ? /* Unlimited */0 : /* Strict */1
    ) : /* Limited */[Belt_Option.getExn(rawCourse.progressionLimit)];
  return {
          id: rawCourse.id,
          name: rawCourse.name,
          description: rawCourse.description,
          endsAt: endsAt,
          about: rawCourse.about,
          publicSignup: rawCourse.publicSignup,
          thumbnail: makeImageFromJs(rawCourse.thumbnail),
          cover: makeImageFromJs(rawCourse.cover),
          featured: rawCourse.featured,
          progressionBehavior: progressionBehavior
        };
}

var ppx_printed_query = "fragment allFields on Course   {\nid  \nname  \ndescription  \nendsAt  \nabout  \npublicSignup  \nthumbnail  {\nurl  \nfilename  \n}\n\ncover  {\nurl  \nfilename  \n}\n\nfeatured  \nprogressionBehavior  \nprogressionLimit  \n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "id");
  var tmp;
  if (match !== undefined) {
    var value$2 = Caml_option.valFromOption(match);
    var match$1 = Js_json.decodeString(value$2);
    tmp = match$1 !== undefined ? match$1 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field id on type Course is missing");
  }
  var match$2 = Js_dict.get(value$1, "name");
  var tmp$1;
  if (match$2 !== undefined) {
    var value$3 = Caml_option.valFromOption(match$2);
    var match$3 = Js_json.decodeString(value$3);
    tmp$1 = match$3 !== undefined ? match$3 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
  } else {
    tmp$1 = Js_exn.raiseError("graphql_ppx: Field name on type Course is missing");
  }
  var match$4 = Js_dict.get(value$1, "description");
  var tmp$2;
  if (match$4 !== undefined) {
    var value$4 = Caml_option.valFromOption(match$4);
    var match$5 = Js_json.decodeString(value$4);
    tmp$2 = match$5 !== undefined ? match$5 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
  } else {
    tmp$2 = Js_exn.raiseError("graphql_ppx: Field description on type Course is missing");
  }
  var match$6 = Js_dict.get(value$1, "endsAt");
  var tmp$3;
  if (match$6 !== undefined) {
    var value$5 = Caml_option.valFromOption(match$6);
    var match$7 = Js_json.decodeNull(value$5);
    tmp$3 = match$7 !== undefined ? undefined : Caml_option.some(value$5);
  } else {
    tmp$3 = undefined;
  }
  var match$8 = Js_dict.get(value$1, "about");
  var tmp$4;
  if (match$8 !== undefined) {
    var value$6 = Caml_option.valFromOption(match$8);
    var match$9 = Js_json.decodeNull(value$6);
    if (match$9 !== undefined) {
      tmp$4 = undefined;
    } else {
      var match$10 = Js_json.decodeString(value$6);
      tmp$4 = match$10 !== undefined ? match$10 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
    }
  } else {
    tmp$4 = undefined;
  }
  var match$11 = Js_dict.get(value$1, "publicSignup");
  var tmp$5;
  if (match$11 !== undefined) {
    var value$7 = Caml_option.valFromOption(match$11);
    var match$12 = Js_json.decodeBoolean(value$7);
    tmp$5 = match$12 !== undefined ? match$12 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$7));
  } else {
    tmp$5 = Js_exn.raiseError("graphql_ppx: Field publicSignup on type Course is missing");
  }
  var match$13 = Js_dict.get(value$1, "thumbnail");
  var tmp$6;
  if (match$13 !== undefined) {
    var value$8 = Caml_option.valFromOption(match$13);
    var match$14 = Js_json.decodeNull(value$8);
    if (match$14 !== undefined) {
      tmp$6 = undefined;
    } else {
      var value$9 = Js_option.getExn(Js_json.decodeObject(value$8));
      var match$15 = Js_dict.get(value$9, "url");
      var tmp$7;
      if (match$15 !== undefined) {
        var value$10 = Caml_option.valFromOption(match$15);
        var match$16 = Js_json.decodeString(value$10);
        tmp$7 = match$16 !== undefined ? match$16 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$10));
      } else {
        tmp$7 = Js_exn.raiseError("graphql_ppx: Field url on type Image is missing");
      }
      var match$17 = Js_dict.get(value$9, "filename");
      var tmp$8;
      if (match$17 !== undefined) {
        var value$11 = Caml_option.valFromOption(match$17);
        var match$18 = Js_json.decodeString(value$11);
        tmp$8 = match$18 !== undefined ? match$18 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$11));
      } else {
        tmp$8 = Js_exn.raiseError("graphql_ppx: Field filename on type Image is missing");
      }
      tmp$6 = {
        url: tmp$7,
        filename: tmp$8
      };
    }
  } else {
    tmp$6 = undefined;
  }
  var match$19 = Js_dict.get(value$1, "cover");
  var tmp$9;
  if (match$19 !== undefined) {
    var value$12 = Caml_option.valFromOption(match$19);
    var match$20 = Js_json.decodeNull(value$12);
    if (match$20 !== undefined) {
      tmp$9 = undefined;
    } else {
      var value$13 = Js_option.getExn(Js_json.decodeObject(value$12));
      var match$21 = Js_dict.get(value$13, "url");
      var tmp$10;
      if (match$21 !== undefined) {
        var value$14 = Caml_option.valFromOption(match$21);
        var match$22 = Js_json.decodeString(value$14);
        tmp$10 = match$22 !== undefined ? match$22 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$14));
      } else {
        tmp$10 = Js_exn.raiseError("graphql_ppx: Field url on type Image is missing");
      }
      var match$23 = Js_dict.get(value$13, "filename");
      var tmp$11;
      if (match$23 !== undefined) {
        var value$15 = Caml_option.valFromOption(match$23);
        var match$24 = Js_json.decodeString(value$15);
        tmp$11 = match$24 !== undefined ? match$24 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$15));
      } else {
        tmp$11 = Js_exn.raiseError("graphql_ppx: Field filename on type Image is missing");
      }
      tmp$9 = {
        url: tmp$10,
        filename: tmp$11
      };
    }
  } else {
    tmp$9 = undefined;
  }
  var match$25 = Js_dict.get(value$1, "featured");
  var tmp$12;
  if (match$25 !== undefined) {
    var value$16 = Caml_option.valFromOption(match$25);
    var match$26 = Js_json.decodeBoolean(value$16);
    tmp$12 = match$26 !== undefined ? match$26 : Js_exn.raiseError("graphql_ppx: Expected boolean, got " + JSON.stringify(value$16));
  } else {
    tmp$12 = Js_exn.raiseError("graphql_ppx: Field featured on type Course is missing");
  }
  var match$27 = Js_dict.get(value$1, "progressionBehavior");
  var tmp$13;
  if (match$27 !== undefined) {
    var value$17 = Caml_option.valFromOption(match$27);
    var match$28 = Js_json.decodeString(value$17);
    if (match$28 !== undefined) {
      var value$18 = match$28;
      switch (value$18) {
        case "Limited" :
            tmp$13 = /* Limited */-599448518;
            break;
        case "Strict" :
            tmp$13 = /* Strict */-976972951;
            break;
        case "Unlimited" :
            tmp$13 = /* Unlimited */751362817;
            break;
        default:
          tmp$13 = Js_exn.raiseError("graphql_ppx: Unknown enum variant for ProgressionBehavior: " + value$18);
      }
    } else {
      tmp$13 = Js_exn.raiseError("graphql_ppx: Expected enum value for ProgressionBehavior, got " + JSON.stringify(value$17));
    }
  } else {
    tmp$13 = Js_exn.raiseError("graphql_ppx: Field progressionBehavior on type Course is missing");
  }
  var match$29 = Js_dict.get(value$1, "progressionLimit");
  var tmp$14;
  if (match$29 !== undefined) {
    var value$19 = Caml_option.valFromOption(match$29);
    var match$30 = Js_json.decodeNull(value$19);
    if (match$30 !== undefined) {
      tmp$14 = undefined;
    } else {
      var match$31 = Js_json.decodeNumber(value$19);
      tmp$14 = match$31 !== undefined ? match$31 | 0 : Js_exn.raiseError("graphql_ppx: Expected int, got " + JSON.stringify(value$19));
    }
  } else {
    tmp$14 = undefined;
  }
  return {
          id: tmp,
          name: tmp$1,
          description: tmp$2,
          endsAt: tmp$3,
          about: tmp$4,
          publicSignup: tmp$5,
          thumbnail: tmp$6,
          cover: tmp$9,
          featured: tmp$12,
          progressionBehavior: tmp$13,
          progressionLimit: tmp$14
        };
}

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var AllFields = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  name: "allFields",
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

var Fragments = {
  AllFields: AllFields
};

exports.$$Image = $$Image;
exports.name = name;
exports.id = id;
exports.endsAt = endsAt;
exports.about = about;
exports.publicSignup = publicSignup;
exports.description = description;
exports.featured = featured;
exports.cover = cover;
exports.thumbnail = thumbnail;
exports.progressionBehavior = progressionBehavior;
exports.progressionLimit = progressionLimit;
exports.imageUrl = imageUrl;
exports.filename = filename$1;
exports.sort = sort;
exports.updateList = updateList;
exports.makeImageFromJs = makeImageFromJs;
exports.addImages = addImages;
exports.replaceImages = replaceImages;
exports.makeFromJs = makeFromJs;
exports.Fragments = Fragments;
/* DateFns Not a pure module */
