// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var HelpIcon = require("../../../../shared/components/HelpIcon.bs.js");
var School__InputGroupError = require("../../../shared/components/School__InputGroupError.bs.js");
var StudentsEditor__StudentInfo = require("../../types/students_editor/StudentsEditor__StudentInfo.bs.js");
var StudentsEditor__SearchableTagList = require("./StudentsEditor__SearchableTagList.bs.js");

function str(prim) {
  return prim;
}

function updateName(send, name) {
  var hasError = name.length < 2;
  return Curry._1(send, /* UpdateName */Block.__(0, [
                name,
                hasError
              ]));
}

function updateEmail(send, email) {
  var regex = /.+@.+\..+/i;
  var hasError = !regex.test(email);
  return Curry._1(send, /* UpdateEmail */Block.__(1, [
                email,
                hasError
              ]));
}

function hasEmailDuplication(email, emailsToAdd) {
  return $$Array.exists((function (emailToAdd) {
                return Caml_obj.caml_equal(email, emailToAdd);
              }), emailsToAdd);
}

function formInvalid(state, emailsToAdd) {
  if (state.name === "" || state.email === "" || state.hasNameError || state.hasEmailError) {
    return true;
  } else {
    return hasEmailDuplication(state.email, emailsToAdd);
  }
}

function handleAdd(state, send, emailsToAdd, addToListCB) {
  var teamName = $$String.trim(state.teamName) === "" ? undefined : state.teamName;
  if (formInvalid(state, emailsToAdd)) {
    return 0;
  } else {
    Curry._1(addToListCB, StudentsEditor__StudentInfo.make(state.name, state.email, state.title, state.affiliation, state.tagsToApply, teamName));
    return Curry._1(send, /* ResetForm */0);
  }
}

function initialState(param) {
  return {
          name: "",
          email: "",
          title: "",
          affiliation: "",
          hasNameError: false,
          hasEmailError: false,
          tagsToApply: [],
          teamName: ""
        };
}

function reducer(state, action) {
  if (typeof action === "number") {
    return {
            name: "",
            email: "",
            title: state.title,
            affiliation: state.affiliation,
            hasNameError: false,
            hasEmailError: false,
            tagsToApply: state.tagsToApply,
            teamName: state.teamName
          };
  } else {
    switch (action.tag | 0) {
      case /* UpdateName */0 :
          return {
                  name: action[0],
                  email: state.email,
                  title: state.title,
                  affiliation: state.affiliation,
                  hasNameError: action[1],
                  hasEmailError: state.hasEmailError,
                  tagsToApply: state.tagsToApply,
                  teamName: state.teamName
                };
      case /* UpdateEmail */1 :
          return {
                  name: state.name,
                  email: action[0],
                  title: state.title,
                  affiliation: state.affiliation,
                  hasNameError: state.hasNameError,
                  hasEmailError: action[1],
                  tagsToApply: state.tagsToApply,
                  teamName: state.teamName
                };
      case /* UpdateTitle */2 :
          return {
                  name: state.name,
                  email: state.email,
                  title: action[0],
                  affiliation: state.affiliation,
                  hasNameError: state.hasNameError,
                  hasEmailError: state.hasEmailError,
                  tagsToApply: state.tagsToApply,
                  teamName: state.teamName
                };
      case /* UpdateTeamName */3 :
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  affiliation: state.affiliation,
                  hasNameError: state.hasNameError,
                  hasEmailError: state.hasEmailError,
                  tagsToApply: state.tagsToApply,
                  teamName: action[0]
                };
      case /* UpdateAffiliation */4 :
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  affiliation: action[0],
                  hasNameError: state.hasNameError,
                  hasEmailError: state.hasEmailError,
                  tagsToApply: state.tagsToApply,
                  teamName: state.teamName
                };
      case /* AddTag */5 :
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  affiliation: state.affiliation,
                  hasNameError: state.hasNameError,
                  hasEmailError: state.hasEmailError,
                  tagsToApply: $$Array.append([action[0]], state.tagsToApply),
                  teamName: state.teamName
                };
      case /* RemoveTag */6 :
          var tag = action[0];
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  affiliation: state.affiliation,
                  hasNameError: state.hasNameError,
                  hasEmailError: state.hasEmailError,
                  tagsToApply: state.tagsToApply.filter((function (t) {
                          return t !== tag;
                        })),
                  teamName: state.teamName
                };
      
    }
  }
}

function StudentsEditor__StudentInfoForm(Props) {
  var addToListCB = Props.addToListCB;
  var studentTags = Props.studentTags;
  var emailsToAdd = Props.emailsToAdd;
  var match = React.useReducer(reducer, initialState(/* () */0));
  var send = match[1];
  var state = match[0];
  return React.createElement("div", {
              className: "bg-gray-100 p-4"
            }, React.createElement("div", undefined, React.createElement("label", {
                      className: "inline-block tracking-wide text-xs font-semibold",
                      htmlFor: "name"
                    }, "Name"), React.createElement("input", {
                      className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                      id: "name",
                      placeholder: "User name here",
                      type: "text",
                      value: state.name,
                      onChange: (function ($$event) {
                          return updateName(send, $$event.target.value);
                        })
                    }), React.createElement(School__InputGroupError.make, {
                      message: "is not valid",
                      active: state.hasNameError
                    })), React.createElement("div", {
                  className: "mt-5"
                }, React.createElement("label", {
                      className: "inline-block tracking-wide text-xs font-semibold",
                      htmlFor: "email"
                    }, "Email"), React.createElement("input", {
                      className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                      id: "email",
                      placeholder: "User email here",
                      type: "email",
                      value: state.email,
                      onChange: (function ($$event) {
                          return updateEmail(send, $$event.target.value);
                        })
                    }), React.createElement(School__InputGroupError.make, {
                      message: state.hasEmailError ? "invalid email" : (
                          hasEmailDuplication(state.email, emailsToAdd) ? "email address not unique for student" : ""
                        ),
                      active: state.hasEmailError || hasEmailDuplication(state.email, emailsToAdd)
                    })), React.createElement("div", {
                  className: "mt-5"
                }, React.createElement("label", {
                      className: "inline-block tracking-wide text-xs font-semibold mb-2 leading-tight",
                      htmlFor: "title"
                    }, "Title"), React.createElement("span", {
                      className: "text-xs ml-1"
                    }, "(optional)"), React.createElement("input", {
                      className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500",
                      id: "title",
                      placeholder: "User, Coach, CEO, etc.",
                      type: "text",
                      value: state.title,
                      onChange: (function ($$event) {
                          return Curry._1(send, /* UpdateTitle */Block.__(2, [$$event.target.value]));
                        })
                    })), React.createElement("div", {
                  className: "mt-5"
                }, React.createElement("label", {
                      className: "inline-block tracking-wide text-xs font-semibold mb-2 leading-tight",
                      htmlFor: "affiliation"
                    }, "Affiliation"), React.createElement("span", {
                      className: "text-xs ml-1"
                    }, "(optional)"), React.createElement("input", {
                      className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500",
                      id: "affiliation",
                      placeholder: "Acme Inc., Acme University, etc.",
                      type: "text",
                      value: state.affiliation,
                      onChange: (function ($$event) {
                          return Curry._1(send, /* UpdateAffiliation */Block.__(4, [$$event.target.value]));
                        })
                    })), React.createElement("div", {
                  className: "mt-5"
                }, React.createElement("label", {
                      className: "inline-block tracking-wide text-xs font-semibold mb-2 leading-tight",
                      htmlFor: "team_name"
                    }, "Team Name"), React.createElement("span", {
                      className: "text-xs ml-1"
                    }, "(optional)"), React.createElement(HelpIcon.make, {
                      className: "ml-1",
                      children: "Students with same team name will be grouped together; this will not affect existing teams in the course."
                    }), React.createElement("input", {
                      className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 leading-snug focus:outline-none focus:bg-white focus:border-gray-500",
                      id: "team_name",
                      maxLength: 50,
                      placeholder: "Avengers, Fantastic Four, etc.",
                      type: "text",
                      value: state.teamName,
                      onChange: (function ($$event) {
                          return Curry._1(send, /* UpdateTeamName */Block.__(3, [$$event.target.value]));
                        })
                    })), React.createElement("div", {
                  className: "mt-5"
                }, React.createElement("label", {
                      className: "inline-block tracking-wide text-xs font-semibold",
                      htmlFor: "tags"
                    }, "Tags"), React.createElement("span", {
                      className: "text-xs ml-1"
                    }, "(optional)")), React.createElement(StudentsEditor__SearchableTagList.make, {
                  unselectedTags: studentTags.filter((function (tag) {
                          return !$$Array.mem(tag, state.tagsToApply);
                        })),
                  selectedTags: state.tagsToApply,
                  addTagCB: (function (tag) {
                      return Curry._1(send, /* AddTag */Block.__(5, [tag]));
                    }),
                  removeTagCB: (function (tag) {
                      return Curry._1(send, /* RemoveTag */Block.__(6, [tag]));
                    }),
                  allowNewTags: true
                }), React.createElement("button", {
                  className: "btn btn-primary mt-5" + (
                    formInvalid(state, emailsToAdd) ? " disabled" : ""
                  ),
                  disabled: formInvalid(state, emailsToAdd),
                  onClick: (function (_e) {
                      return handleAdd(state, send, emailsToAdd, addToListCB);
                    })
                }, "Add to List"));
}

var make = StudentsEditor__StudentInfoForm;

exports.str = str;
exports.updateName = updateName;
exports.updateEmail = updateEmail;
exports.hasEmailDuplication = hasEmailDuplication;
exports.formInvalid = formInvalid;
exports.handleAdd = handleAdd;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
