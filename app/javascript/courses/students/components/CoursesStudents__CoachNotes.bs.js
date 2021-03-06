// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var FaIcon = require("../../../shared/components/FaIcon.bs.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var ArrayUtils = require("../../../shared/utils/ArrayUtils.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var GraphqlQuery = require("../../../shared/utils/GraphqlQuery.bs.js");
var DisablingCover = require("../../../shared/components/DisablingCover.bs.js");
var MarkdownEditor = require("../../../shared/components/MarkdownEditor.bs.js");
var CoursesStudents__CoachNote = require("../types/CoursesStudents__CoachNote.bs.js");
var CoursesStudents__CoachNoteShow = require("./CoursesStudents__CoachNoteShow.bs.js");

((require("./CoursesStudents__StudentOverlay.css")));

function str(prim) {
  return prim;
}

var ppx_printed_query = "mutation CreateCoachNoteMutation($studentId: ID!, $note: String!)  {\ncreateCoachNote(studentId: $studentId, note: $note)  {\ncoachNote  {\nid  \nnote  \ncreatedAt  \nauthor  {\nid  \navatarUrl  \nname  \ntitle  \n}\n\n}\n\n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "createCoachNote");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "coachNote");
    var tmp$1;
    if (match$1 !== undefined) {
      var value$3 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeNull(value$3);
      if (match$2 !== undefined) {
        tmp$1 = undefined;
      } else {
        var value$4 = Js_option.getExn(Js_json.decodeObject(value$3));
        var match$3 = Js_dict.get(value$4, "id");
        var tmp$2;
        if (match$3 !== undefined) {
          var value$5 = Caml_option.valFromOption(match$3);
          var match$4 = Js_json.decodeString(value$5);
          tmp$2 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$5));
        } else {
          tmp$2 = Js_exn.raiseError("graphql_ppx: Field id on type CoachNote is missing");
        }
        var match$5 = Js_dict.get(value$4, "note");
        var tmp$3;
        if (match$5 !== undefined) {
          var value$6 = Caml_option.valFromOption(match$5);
          var match$6 = Js_json.decodeString(value$6);
          tmp$3 = match$6 !== undefined ? match$6 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$6));
        } else {
          tmp$3 = Js_exn.raiseError("graphql_ppx: Field note on type CoachNote is missing");
        }
        var match$7 = Js_dict.get(value$4, "createdAt");
        var match$8 = Js_dict.get(value$4, "author");
        var tmp$4;
        if (match$8 !== undefined) {
          var value$7 = Caml_option.valFromOption(match$8);
          var match$9 = Js_json.decodeNull(value$7);
          if (match$9 !== undefined) {
            tmp$4 = undefined;
          } else {
            var value$8 = Js_option.getExn(Js_json.decodeObject(value$7));
            var match$10 = Js_dict.get(value$8, "id");
            var tmp$5;
            if (match$10 !== undefined) {
              var value$9 = Caml_option.valFromOption(match$10);
              var match$11 = Js_json.decodeString(value$9);
              tmp$5 = match$11 !== undefined ? match$11 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$9));
            } else {
              tmp$5 = Js_exn.raiseError("graphql_ppx: Field id on type User is missing");
            }
            var match$12 = Js_dict.get(value$8, "avatarUrl");
            var tmp$6;
            if (match$12 !== undefined) {
              var value$10 = Caml_option.valFromOption(match$12);
              var match$13 = Js_json.decodeNull(value$10);
              if (match$13 !== undefined) {
                tmp$6 = undefined;
              } else {
                var match$14 = Js_json.decodeString(value$10);
                tmp$6 = match$14 !== undefined ? match$14 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$10));
              }
            } else {
              tmp$6 = undefined;
            }
            var match$15 = Js_dict.get(value$8, "name");
            var tmp$7;
            if (match$15 !== undefined) {
              var value$11 = Caml_option.valFromOption(match$15);
              var match$16 = Js_json.decodeString(value$11);
              tmp$7 = match$16 !== undefined ? match$16 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$11));
            } else {
              tmp$7 = Js_exn.raiseError("graphql_ppx: Field name on type User is missing");
            }
            var match$17 = Js_dict.get(value$8, "title");
            var tmp$8;
            if (match$17 !== undefined) {
              var value$12 = Caml_option.valFromOption(match$17);
              var match$18 = Js_json.decodeString(value$12);
              tmp$8 = match$18 !== undefined ? match$18 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$12));
            } else {
              tmp$8 = Js_exn.raiseError("graphql_ppx: Field title on type User is missing");
            }
            tmp$4 = {
              id: tmp$5,
              avatarUrl: tmp$6,
              name: tmp$7,
              title: tmp$8
            };
          }
        } else {
          tmp$4 = undefined;
        }
        tmp$1 = {
          id: tmp$2,
          note: tmp$3,
          createdAt: match$7 !== undefined ? Caml_option.valFromOption(match$7) : Js_exn.raiseError("graphql_ppx: Field createdAt on type CoachNote is missing"),
          author: tmp$4
        };
      }
    } else {
      tmp$1 = undefined;
    }
    tmp = {
      coachNote: tmp$1
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field createCoachNote on type Mutation is missing");
  }
  return {
          createCoachNote: tmp
        };
}

function make(studentId, note, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "studentId",
                    studentId
                  ],
                  /* tuple */[
                    "note",
                    note
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var studentId = variables.studentId;
  var note = variables.note;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "studentId",
                    studentId
                  ],
                  /* tuple */[
                    "note",
                    note
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeVariables(studentId, note, param) {
  return Js_dict.fromArray([
                /* tuple */[
                  "studentId",
                  studentId
                ],
                /* tuple */[
                  "note",
                  note
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002(graphql_ppx_use_json_variables_fn, studentId, note, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([
                    /* tuple */[
                      "studentId",
                      studentId
                    ],
                    /* tuple */[
                      "note",
                      note
                    ]
                  ].filter((function (param) {
                        return !Js_json.test(param[1], /* Null */5);
                      }))));
}

var definition = /* tuple */[
  parse,
  ppx_printed_query,
  definition_002
];

function ret_type(f) {
  return { };
}

var MT_Ret = { };

var CreateCoachNotesMutation = {
  ppx_printed_query: ppx_printed_query,
  query: ppx_printed_query,
  parse: parse,
  make: make,
  makeWithVariables: makeWithVariables,
  makeVariables: makeVariables,
  definition: definition,
  ret_type: ret_type,
  MT_Ret: MT_Ret
};

function saveNote(studentId, setState, state, addNoteCB) {
  Curry._1(setState, (function (state) {
          return {
                  newNote: state.newNote,
                  saving: true
                };
        }));
  (function (eta) {
            return GraphqlQuery.sendQuery(undefined, eta);
          })(make(studentId, state.newNote, /* () */0)).then((function (response) {
            var match = response.createCoachNote.coachNote;
            if (match !== undefined) {
              var newNote = CoursesStudents__CoachNote.makeFromJs(Caml_option.valFromOption(match));
              Curry._1(addNoteCB, newNote);
              Curry._1(setState, (function (param) {
                      return {
                              newNote: "",
                              saving: false
                            };
                    }));
            } else {
              Curry._1(setState, (function (state) {
                      return {
                              newNote: state.newNote,
                              saving: false
                            };
                    }));
            }
            return Promise.resolve(/* () */0);
          })).catch((function (_error) {
          Curry._1(setState, (function (state) {
                  return {
                          newNote: state.newNote,
                          saving: false
                        };
                }));
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function updateCoachNoteCB(setState, newNote) {
  return Curry._1(setState, (function (state) {
                return {
                        newNote: newNote,
                        saving: state.saving
                      };
              }));
}

function saveNoteButtonText(title, iconClasses) {
  return React.createElement("span", undefined, React.createElement(FaIcon.make, {
                  classes: iconClasses + " mr-2"
                }), title);
}

function CoursesStudents__CoachNotes(Props) {
  var studentId = Props.studentId;
  var coachNotes = Props.coachNotes;
  var addNoteCB = Props.addNoteCB;
  var removeNoteCB = Props.removeNoteCB;
  var userId = Props.userId;
  var match = React.useState((function () {
          return {
                  newNote: "",
                  saving: false
                };
        }));
  var setState = match[1];
  var state = match[0];
  return React.createElement("div", {
              className: "mt-3 text-sm"
            }, React.createElement("label", {
                  className: "font-semibold text-sm block mb-1",
                  htmlFor: "course-students__coach-notes-new-note"
                }, "Add a New Note"), React.createElement(DisablingCover.make, {
                  disabled: state.saving,
                  message: "Saving...",
                  children: React.createElement(MarkdownEditor.make, {
                        value: state.newNote,
                        onChange: (function (param) {
                            return updateCoachNoteCB(setState, param);
                          }),
                        profile: /* Permissive */2,
                        textareaId: "course-students__coach-notes-new-note",
                        maxLength: 10000
                      })
                }), React.createElement("button", {
                  className: "btn btn-primary mt-2",
                  disabled: state.newNote.length < 1 || state.saving,
                  onClick: (function (param) {
                      return saveNote(studentId, setState, state, addNoteCB);
                    })
                }, state.saving ? saveNoteButtonText("Saving", "fas fa-spinner") : saveNoteButtonText("Save Note", "")), React.createElement("div", undefined, React.createElement("h6", {
                      className: "font-semibold mt-6"
                    }, "All Notes"), ArrayUtils.isEmpty(coachNotes) ? React.createElement("div", {
                        className: "bg-gray-200 rounded text-center p-4 md:p-6 items-center justify-center mt-2"
                      }, React.createElement("i", {
                            className: "fas fa-sticky-note text-gray-400 text-4xl"
                          }), React.createElement("p", {
                            className: "text-xs font-semibold text-gray-700 mt-2"
                          }, "No notes here!")) : null, $$Array.map((function (note) {
                        return React.createElement(CoursesStudents__CoachNoteShow.make, {
                                    note: note,
                                    userId: userId,
                                    removeNoteCB: removeNoteCB,
                                    key: CoursesStudents__CoachNote.id(note)
                                  });
                      }), CoursesStudents__CoachNote.sort(coachNotes))));
}

var make$1 = CoursesStudents__CoachNotes;

exports.str = str;
exports.CreateCoachNotesMutation = CreateCoachNotesMutation;
exports.saveNote = saveNote;
exports.updateCoachNoteCB = updateCoachNoteCB;
exports.saveNoteButtonText = saveNoteButtonText;
exports.make = make$1;
/*  Not a pure module */
