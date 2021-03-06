// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Fetch = require("bs-fetch/src/Fetch.js");
var React = require("react");
var UrlUtils = require("../../../../shared/utils/UrlUtils.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var EmailUtils = require("../../../../shared/utils/EmailUtils.bs.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var OptionUtils = require("../../../../shared/utils/OptionUtils.bs.js");
var $$Notification = require("../../../../shared/Notification.bs.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var School__InputGroupError = require("../../../shared/components/School__InputGroupError.bs.js");
var CoachesSchoolIndex__Coach = require("../../types/school_index/CoachesSchoolIndex__Coach.bs.js");

var UnexpectedResponse = Caml_exceptions.create("SA_Coaches_CoachEditor.UnexpectedResponse");

function handleApiError(match) {
  if (Caml_exceptions.caml_is_extension(match) && match[0] === UnexpectedResponse) {
    return match[1];
  }
  
}

function reducer(state, action) {
  if (typeof action === "number") {
    return {
            name: state.name,
            email: state.email,
            title: state.title,
            linkedinUrl: state.linkedinUrl,
            public: state.public,
            exited: state.exited,
            connectLink: state.connectLink,
            imageFileName: state.imageFileName,
            dirty: state.dirty,
            saving: !state.saving,
            hasNameError: state.hasNameError,
            hasTitleError: state.hasTitleError,
            hasEmailError: state.hasEmailError,
            hasLinkedInUrlError: state.hasLinkedInUrlError,
            hasConnectLinkError: state.hasConnectLinkError,
            affiliation: state.affiliation
          };
  } else {
    switch (action.tag | 0) {
      case /* UpdateName */0 :
          return {
                  name: action[0],
                  email: state.email,
                  title: state.title,
                  linkedinUrl: state.linkedinUrl,
                  public: state.public,
                  exited: state.exited,
                  connectLink: state.connectLink,
                  imageFileName: state.imageFileName,
                  dirty: true,
                  saving: state.saving,
                  hasNameError: action[1],
                  hasTitleError: state.hasTitleError,
                  hasEmailError: state.hasEmailError,
                  hasLinkedInUrlError: state.hasLinkedInUrlError,
                  hasConnectLinkError: state.hasConnectLinkError,
                  affiliation: state.affiliation
                };
      case /* UpdateEmail */1 :
          return {
                  name: state.name,
                  email: action[0],
                  title: state.title,
                  linkedinUrl: state.linkedinUrl,
                  public: state.public,
                  exited: state.exited,
                  connectLink: state.connectLink,
                  imageFileName: state.imageFileName,
                  dirty: true,
                  saving: state.saving,
                  hasNameError: state.hasNameError,
                  hasTitleError: state.hasTitleError,
                  hasEmailError: action[1],
                  hasLinkedInUrlError: state.hasLinkedInUrlError,
                  hasConnectLinkError: state.hasConnectLinkError,
                  affiliation: state.affiliation
                };
      case /* UpdateTitle */2 :
          return {
                  name: state.name,
                  email: state.email,
                  title: action[0],
                  linkedinUrl: state.linkedinUrl,
                  public: state.public,
                  exited: state.exited,
                  connectLink: state.connectLink,
                  imageFileName: state.imageFileName,
                  dirty: true,
                  saving: state.saving,
                  hasNameError: state.hasNameError,
                  hasTitleError: action[1],
                  hasEmailError: state.hasEmailError,
                  hasLinkedInUrlError: state.hasLinkedInUrlError,
                  hasConnectLinkError: state.hasConnectLinkError,
                  affiliation: state.affiliation
                };
      case /* UpdateLinkedInUrl */3 :
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  linkedinUrl: action[0],
                  public: state.public,
                  exited: state.exited,
                  connectLink: state.connectLink,
                  imageFileName: state.imageFileName,
                  dirty: true,
                  saving: state.saving,
                  hasNameError: state.hasNameError,
                  hasTitleError: state.hasTitleError,
                  hasEmailError: state.hasEmailError,
                  hasLinkedInUrlError: action[1],
                  hasConnectLinkError: state.hasConnectLinkError,
                  affiliation: state.affiliation
                };
      case /* UpdateConnectLink */4 :
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  linkedinUrl: state.linkedinUrl,
                  public: state.public,
                  exited: state.exited,
                  connectLink: action[0],
                  imageFileName: state.imageFileName,
                  dirty: true,
                  saving: state.saving,
                  hasNameError: state.hasNameError,
                  hasTitleError: state.hasTitleError,
                  hasEmailError: state.hasEmailError,
                  hasLinkedInUrlError: state.hasLinkedInUrlError,
                  hasConnectLinkError: action[1],
                  affiliation: state.affiliation
                };
      case /* UpdatePublic */5 :
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  linkedinUrl: state.linkedinUrl,
                  public: action[0],
                  exited: state.exited,
                  connectLink: state.connectLink,
                  imageFileName: state.imageFileName,
                  dirty: true,
                  saving: state.saving,
                  hasNameError: state.hasNameError,
                  hasTitleError: state.hasTitleError,
                  hasEmailError: state.hasEmailError,
                  hasLinkedInUrlError: state.hasLinkedInUrlError,
                  hasConnectLinkError: state.hasConnectLinkError,
                  affiliation: state.affiliation
                };
      case /* UpdateImageFileName */6 :
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  linkedinUrl: state.linkedinUrl,
                  public: state.public,
                  exited: state.exited,
                  connectLink: state.connectLink,
                  imageFileName: action[0],
                  dirty: true,
                  saving: state.saving,
                  hasNameError: state.hasNameError,
                  hasTitleError: state.hasTitleError,
                  hasEmailError: state.hasEmailError,
                  hasLinkedInUrlError: state.hasLinkedInUrlError,
                  hasConnectLinkError: state.hasConnectLinkError,
                  affiliation: state.affiliation
                };
      case /* UpdateExited */7 :
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  linkedinUrl: state.linkedinUrl,
                  public: state.public,
                  exited: action[0],
                  connectLink: state.connectLink,
                  imageFileName: state.imageFileName,
                  dirty: true,
                  saving: state.saving,
                  hasNameError: state.hasNameError,
                  hasTitleError: state.hasTitleError,
                  hasEmailError: state.hasEmailError,
                  hasLinkedInUrlError: state.hasLinkedInUrlError,
                  hasConnectLinkError: state.hasConnectLinkError,
                  affiliation: state.affiliation
                };
      case /* UpdateAffiliation */8 :
          return {
                  name: state.name,
                  email: state.email,
                  title: state.title,
                  linkedinUrl: state.linkedinUrl,
                  public: state.public,
                  exited: state.exited,
                  connectLink: state.connectLink,
                  imageFileName: state.imageFileName,
                  dirty: true,
                  saving: state.saving,
                  hasNameError: state.hasNameError,
                  hasTitleError: state.hasTitleError,
                  hasEmailError: state.hasEmailError,
                  hasLinkedInUrlError: state.hasLinkedInUrlError,
                  hasConnectLinkError: state.hasConnectLinkError,
                  affiliation: action[0]
                };
      
    }
  }
}

function str(prim) {
  return prim;
}

function nameOrTitleInvalid(name) {
  return name.length < 2;
}

function updateName(send, name) {
  return Curry._1(send, /* UpdateName */Block.__(0, [
                name,
                name.length < 2
              ]));
}

function emailInvalid(email) {
  return EmailUtils.isInvalid(false, email);
}

function updateEmail(send, email) {
  return Curry._1(send, /* UpdateEmail */Block.__(1, [
                email,
                EmailUtils.isInvalid(false, email)
              ]));
}

function updateTitle(send, title) {
  return Curry._1(send, /* UpdateTitle */Block.__(2, [
                title,
                title.length < 2
              ]));
}

function updateLinkedInUrl(send, linkedinUrl) {
  var regex = /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  var hasError = linkedinUrl.length < 1 ? false : !regex.test(linkedinUrl);
  return Curry._1(send, /* UpdateLinkedInUrl */Block.__(3, [
                linkedinUrl,
                hasError
              ]));
}

function updateConnectLink(send, connectLink) {
  return Curry._1(send, /* UpdateConnectLink */Block.__(4, [
                connectLink,
                UrlUtils.isInvalid(true, connectLink)
              ]));
}

function booleanButtonClasses(selected) {
  return "toggle-button__button" + (
          selected ? " toggle-button__button--active" : ""
        );
}

function saveDisabled(state) {
  if (state.title.length < 2 || state.name.length < 2 || EmailUtils.isInvalid(false, state.email) || state.hasLinkedInUrlError || UrlUtils.isInvalid(true, state.connectLink) || !state.dirty) {
    return true;
  } else {
    return state.saving;
  }
}

function computeInitialState(coach) {
  if (coach !== undefined) {
    var coach$1 = Caml_option.valFromOption(coach);
    var match = CoachesSchoolIndex__Coach.linkedinUrl(coach$1);
    var match$1 = CoachesSchoolIndex__Coach.connectLink(coach$1);
    var match$2 = CoachesSchoolIndex__Coach.imageFileName(coach$1);
    return {
            name: CoachesSchoolIndex__Coach.name(coach$1),
            email: CoachesSchoolIndex__Coach.email(coach$1),
            title: CoachesSchoolIndex__Coach.title(coach$1),
            linkedinUrl: match !== undefined ? match : "",
            public: CoachesSchoolIndex__Coach.$$public(coach$1),
            exited: CoachesSchoolIndex__Coach.exited(coach$1),
            connectLink: match$1 !== undefined ? match$1 : "",
            imageFileName: match$2 !== undefined ? match$2 : "",
            dirty: false,
            saving: false,
            hasNameError: false,
            hasTitleError: false,
            hasEmailError: false,
            hasLinkedInUrlError: false,
            hasConnectLinkError: false,
            affiliation: OptionUtils.toString(CoachesSchoolIndex__Coach.affiliation(coach$1))
          };
  } else {
    return {
            name: "",
            email: "",
            title: "",
            linkedinUrl: "",
            public: false,
            exited: false,
            connectLink: "",
            imageFileName: "",
            dirty: false,
            saving: false,
            hasNameError: false,
            hasTitleError: false,
            hasEmailError: false,
            hasLinkedInUrlError: false,
            hasConnectLinkError: false,
            affiliation: ""
          };
  }
}

function SA_Coaches_CoachEditor(Props) {
  var coach = Props.coach;
  var closeFormCB = Props.closeFormCB;
  var updateCoachCB = Props.updateCoachCB;
  var authenticityToken = Props.authenticityToken;
  var match = React.useReducer(reducer, coach, computeInitialState);
  var send = match[1];
  var state = match[0];
  var formId = "coach-create-form";
  var avatarUploaderText = function (param) {
    var match = state.imageFileName;
    if (match === "") {
      return "Upload an avatar";
    } else {
      return "Replace avatar: " + state.imageFileName;
    }
  };
  var handleResponseJSON = function (json) {
    var error = Json_decode.field("error", (function (param) {
            return Json_decode.nullable(Json_decode.string, param);
          }), json);
    if (error !== null) {
      Curry._1(send, /* UpdateSaving */0);
      return $$Notification.error("Something went wrong!", error);
    } else {
      var json$1 = json;
      var id = Json_decode.field("id", Json_decode.$$int, json$1);
      var imageUrl = Json_decode.field("image_url", Json_decode.string, json$1);
      var newCoach = CoachesSchoolIndex__Coach.make(id, state.name, imageUrl, state.email, state.title, state.linkedinUrl, state.public, state.connectLink, state.exited, state.imageFileName, state.affiliation);
      if (coach !== undefined) {
        $$Notification.success("Success", "Coach updated successfully");
      } else {
        $$Notification.success("Success", "Coach created successfully");
      }
      Curry._1(updateCoachCB, newCoach);
      return Curry._1(closeFormCB, /* () */0);
    }
  };
  return React.createElement("div", {
              className: "blanket"
            }, React.createElement("div", {
                  className: "drawer-right"
                }, React.createElement("div", {
                      className: "drawer-right__close absolute"
                    }, React.createElement("button", {
                          className: "flex items-center justify-center bg-white text-gray-600 font-bold py-3 px-5 rounded-l-full rounded-r-none hover:text-gray-700 focus:outline-none mt-4",
                          title: "close",
                          onClick: (function (_e) {
                              return Curry._1(closeFormCB, /* () */0);
                            })
                        }, React.createElement("i", {
                              className: "fas fa-times text-xl"
                            }))), React.createElement("div", {
                      className: "drawer-right-form w-full"
                    }, React.createElement("div", {
                          className: "w-full"
                        }, React.createElement("div", {
                              className: "mx-auto bg-white"
                            }, React.createElement("div", {
                                  className: "max-w-2xl px-6 pt-5 mx-auto"
                                }, React.createElement("h5", {
                                      className: "uppercase text-center border-b border-gray-400 pb-2"
                                    }, coach !== undefined ? CoachesSchoolIndex__Coach.name(Caml_option.valFromOption(coach)) : "Add New Coach")), React.createElement("form", {
                                  key: "xxx",
                                  id: formId,
                                  onSubmit: (function ($$event) {
                                      var $$event$1 = $$event;
                                      $$event$1.preventDefault();
                                      Curry._1(send, /* UpdateSaving */0);
                                      var element = document.getElementById(formId);
                                      if (element == null) {
                                        return /* () */0;
                                      } else {
                                        var formData = new FormData(element);
                                        var endPoint = coach !== undefined ? "/school/coaches/" + String(CoachesSchoolIndex__Coach.id(Caml_option.valFromOption(coach))) : "/school/coaches/";
                                        var httpMethod = coach !== undefined ? /* Patch */8 : /* Post */2;
                                        fetch(endPoint, Fetch.RequestInit.make(httpMethod, undefined, Caml_option.some(formData), undefined, undefined, undefined, /* SameOrigin */1, undefined, undefined, undefined, undefined, undefined)(/* () */0)).then((function (response) {
                                                    if (response.ok || response.status === 422) {
                                                      return response.json();
                                                    } else {
                                                      return Promise.reject([
                                                                  UnexpectedResponse,
                                                                  response.status
                                                                ]);
                                                    }
                                                  })).then((function (json) {
                                                  return Promise.resolve(handleResponseJSON(json));
                                                })).catch((function (error) {
                                                var match = handleApiError(error);
                                                return Promise.resolve(match !== undefined ? (Curry._1(send, /* UpdateSaving */0), $$Notification.error(String(match), "Please try again")) : (Curry._1(send, /* UpdateSaving */0), $$Notification.error("Something went wrong!", "Please try again")));
                                              }));
                                        return /* () */0;
                                      }
                                    })
                                }, React.createElement("input", {
                                      name: "authenticity_token",
                                      type: "hidden",
                                      value: authenticityToken
                                    }), React.createElement("div", {
                                      className: "max-w-2xl px-6 pb-6 mx-auto"
                                    }, React.createElement("div", {
                                          className: "mt-5"
                                        }, React.createElement("label", {
                                              className: "inline-block tracking-wide text-gray-900 text-xs font-semibold",
                                              htmlFor: "name"
                                            }, "Name"), React.createElement("span", undefined, "*"), React.createElement("input", {
                                              className: "appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                              id: "name",
                                              name: "faculty[name]",
                                              placeholder: "Coach Name",
                                              type: "text",
                                              value: state.name,
                                              onChange: (function ($$event) {
                                                  return updateName(send, $$event.target.value);
                                                })
                                            }), React.createElement(School__InputGroupError.make, {
                                              message: "is not a valid name",
                                              active: state.hasNameError
                                            })), coach !== undefined ? null : React.createElement("div", {
                                            className: "mt-5"
                                          }, React.createElement("label", {
                                                className: "inline-block tracking-wide text-xs font-semibold",
                                                htmlFor: "email"
                                              }, "Email"), React.createElement("span", undefined, "*"), React.createElement("input", {
                                                className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                                id: "email",
                                                name: "faculty[email]",
                                                placeholder: "Coach email address",
                                                type: "email",
                                                value: state.email,
                                                onChange: (function ($$event) {
                                                    return updateEmail(send, $$event.target.value);
                                                  })
                                              }), React.createElement(School__InputGroupError.make, {
                                                message: "is not a valid email address",
                                                active: state.hasEmailError
                                              })), React.createElement("div", {
                                          className: "mt-5"
                                        }, React.createElement("label", {
                                              className: "inline-block tracking-wide text-xs font-semibold",
                                              htmlFor: "title"
                                            }, "Title"), React.createElement("span", undefined, "*"), React.createElement("input", {
                                              className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                              id: "title",
                                              name: "faculty[title]",
                                              placeholder: "Coach Title/Expertise",
                                              type: "text",
                                              value: state.title,
                                              onChange: (function ($$event) {
                                                  return updateTitle(send, $$event.target.value);
                                                })
                                            }), React.createElement(School__InputGroupError.make, {
                                              message: "is not a valid title",
                                              active: state.hasTitleError
                                            })), React.createElement("div", {
                                          className: "mt-5"
                                        }, React.createElement("label", {
                                              className: "inline-block tracking-wide text-xs font-semibold",
                                              htmlFor: "affiliation"
                                            }, "Affiliation"), React.createElement("input", {
                                              className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                              id: "affiliation",
                                              name: "faculty[affiliation]",
                                              placeholder: "Acme Inc., Acme University, etc.",
                                              type: "text",
                                              value: state.affiliation,
                                              onChange: (function ($$event) {
                                                  return Curry._1(send, /* UpdateAffiliation */Block.__(8, [$$event.target.value]));
                                                })
                                            })), React.createElement("div", {
                                          className: "mt-5"
                                        }, React.createElement("label", {
                                              className: "inline-block tracking-wide text-xs font-semibold",
                                              htmlFor: "linkedIn"
                                            }, "LinkedIn"), React.createElement("input", {
                                              className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                              id: "linkedIn",
                                              name: "faculty[linkedin_url]",
                                              placeholder: "LinkedIn Profile URL",
                                              type: "text",
                                              value: state.linkedinUrl,
                                              onChange: (function ($$event) {
                                                  return updateLinkedInUrl(send, $$event.target.value);
                                                })
                                            }), React.createElement(School__InputGroupError.make, {
                                              message: "is not a valid LinkedIn URL",
                                              active: state.hasLinkedInUrlError
                                            })), React.createElement("div", {
                                          className: "mt-5"
                                        }, React.createElement("label", {
                                              className: "inline-block tracking-wide text-xs font-semibold",
                                              htmlFor: "connectLink"
                                            }, "Connect Link"), React.createElement("input", {
                                              className: "appearance-none block w-full bg-white border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                              id: "connectLink",
                                              name: "faculty[connect_link]",
                                              placeholder: "Student connect request link for the coach",
                                              type: "text",
                                              value: state.connectLink,
                                              onChange: (function ($$event) {
                                                  return updateConnectLink(send, $$event.target.value);
                                                })
                                            }), React.createElement(School__InputGroupError.make, {
                                              message: "is not a valid connect url",
                                              active: state.hasConnectLinkError
                                            })), React.createElement("div", {
                                          className: "mt-5"
                                        }, React.createElement("div", {
                                              className: "flex items-center flex-shrink-0"
                                            }, React.createElement("label", {
                                                  className: "block tracking-wide text-xs font-semibold mr-3",
                                                  htmlFor: "evaluated"
                                                }, "Should the coach profile be public?"), React.createElement("div", {
                                                  className: "flex flex-shrink-0 rounded-lg overflow-hidden border border-gray-400",
                                                  id: "notification"
                                                }, React.createElement("button", {
                                                      className: booleanButtonClasses(state.public),
                                                      name: "faculty[public]",
                                                      type: "submit",
                                                      value: "true",
                                                      onClick: (function (_event) {
                                                          _event.preventDefault();
                                                          return Curry._1(send, /* UpdatePublic */Block.__(5, [true]));
                                                        })
                                                    }, "Yes"), React.createElement("button", {
                                                      className: booleanButtonClasses(!state.public),
                                                      onClick: (function (_event) {
                                                          _event.preventDefault();
                                                          return Curry._1(send, /* UpdatePublic */Block.__(5, [false]));
                                                        })
                                                    }, "No"), React.createElement("input", {
                                                      name: "faculty[public]",
                                                      type: "hidden",
                                                      value: Pervasives.string_of_bool(state.public)
                                                    })))), React.createElement("div", {
                                          className: "mt-5"
                                        }, React.createElement("label", {
                                              className: "block tracking-wide text-xs font-semibold",
                                              htmlFor: "avatarUploader"
                                            }, "Avatar"), React.createElement("input", {
                                              className: "hidden",
                                              id: "sa-coach-editor__file-input",
                                              disabled: state.saving,
                                              multiple: false,
                                              name: "faculty[image]",
                                              required: false,
                                              type: "file",
                                              onChange: (function ($$event) {
                                                  return Curry._1(send, /* UpdateImageFileName */Block.__(6, [Caml_array.caml_array_get($$event.target.files, 0).name]));
                                                })
                                            }), React.createElement("label", {
                                              className: "file-input-label mt-2",
                                              htmlFor: "sa-coach-editor__file-input"
                                            }, React.createElement("i", {
                                                  className: "fas fa-upload mr-2 text-gray-600 text-lg"
                                                }), React.createElement("span", {
                                                  className: "truncate"
                                                }, avatarUploaderText(/* () */0))))), React.createElement("div", {
                                      className: "p-6 bg-gray-200"
                                    }, React.createElement("div", {
                                          className: "max-w-2xl px-6 mx-auto"
                                        }, React.createElement("div", {
                                              className: "flex max-w-2xl w-full justify-between items-center mx-auto"
                                            }, coach !== undefined ? React.createElement("div", {
                                                    className: "flex items-center flex-shrink-0"
                                                  }, React.createElement("label", {
                                                        className: "block tracking-wide  text-xs font-semibold mr-3",
                                                        htmlFor: "evaluated"
                                                      }, "Has the coach left the school?"), React.createElement("div", {
                                                        className: "flex flex-shrink-0 rounded-lg overflow-hidden border border-gray-400",
                                                        id: "exited"
                                                      }, React.createElement("button", {
                                                            className: booleanButtonClasses(state.exited),
                                                            name: "faculty[exited]",
                                                            onClick: (function (_event) {
                                                                _event.preventDefault();
                                                                return Curry._1(send, /* UpdateExited */Block.__(7, [true]));
                                                              })
                                                          }, "Yes"), React.createElement("button", {
                                                            className: booleanButtonClasses(!state.exited),
                                                            onClick: (function (_event) {
                                                                _event.preventDefault();
                                                                return Curry._1(send, /* UpdateExited */Block.__(7, [false]));
                                                              })
                                                          }, "No"), React.createElement("input", {
                                                            name: "faculty[exited]",
                                                            type: "hidden",
                                                            value: Pervasives.string_of_bool(state.exited)
                                                          }))) : null, React.createElement("button", {
                                                  className: "w-auto btn btn-large btn-primary",
                                                  disabled: saveDisabled(state)
                                                }, coach !== undefined ? "Update Coach" : "Add Coach"))))))))));
}

var make = SA_Coaches_CoachEditor;

exports.UnexpectedResponse = UnexpectedResponse;
exports.handleApiError = handleApiError;
exports.reducer = reducer;
exports.str = str;
exports.nameOrTitleInvalid = nameOrTitleInvalid;
exports.updateName = updateName;
exports.emailInvalid = emailInvalid;
exports.updateEmail = updateEmail;
exports.updateTitle = updateTitle;
exports.updateLinkedInUrl = updateLinkedInUrl;
exports.updateConnectLink = updateConnectLink;
exports.booleanButtonClasses = booleanButtonClasses;
exports.saveDisabled = saveDisabled;
exports.computeInitialState = computeInitialState;
exports.make = make;
/* react Not a pure module */
