// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");
var Js_json = require("bs-platform/lib/js/js_json.js");
var Js_option = require("bs-platform/lib/js/js_option.js");
var EmailUtils = require("../../../shared/utils/EmailUtils.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var OptionUtils = require("../../../shared/utils/OptionUtils.bs.js");
var GraphqlQuery = require("../../../shared/utils/GraphqlQuery.bs.js");
var $$Notification = require("../../../shared/Notification.bs.js");
var DisablingCover = require("../../../shared/components/DisablingCover.bs.js");
var GraphqlErrorHandler = require("../../../shared/utils/GraphqlErrorHandler.bs.js");
var School__InputGroupError = require("../../shared/components/School__InputGroupError.bs.js");
var SchoolCustomize__Customizations = require("../types/SchoolCustomize__Customizations.bs.js");
var SchoolCustomize__UpdateSchoolStringError = require("./SchoolCustomize__UpdateSchoolStringError.bs.js");

function str(prim) {
  return prim;
}

function handleInputChange(callback, $$event) {
  return Curry._1(callback, $$event.target.value);
}

function updateContactDetailsButtonText(updating) {
  if (updating) {
    return "Updating...";
  } else {
    return "Update Contact Details";
  }
}

var ppx_printed_query = "mutation UpdateAddressAndEmailMutation($address: String!, $emailAddress: String!)  {\nupdateAddress: updateSchoolString(key: \"address\", value: $address)  {\nerrors  \n}\n\nupdateEmailAddress: updateSchoolString(key: \"email_address\", value: $emailAddress)  {\nerrors  \n}\n\n}\n";

function parse(value) {
  var value$1 = Js_option.getExn(Js_json.decodeObject(value));
  var match = Js_dict.get(value$1, "updateAddress");
  var tmp;
  if (match !== undefined) {
    var value$2 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match)));
    var match$1 = Js_dict.get(value$2, "errors");
    tmp = {
      errors: match$1 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match$1))).map((function (value) {
                var match = Js_json.decodeString(value);
                if (match !== undefined) {
                  var value$1 = match;
                  switch (value$1) {
                    case "InvalidKey" :
                        return /* InvalidKey */-37069048;
                    case "InvalidLengthValue" :
                        return /* InvalidLengthValue */718585620;
                    case "InvalidValue" :
                        return /* InvalidValue */522207514;
                    default:
                      return Js_exn.raiseError("graphql_ppx: Unknown enum variant for UpdateSchoolStringError: " + value$1);
                  }
                } else {
                  return Js_exn.raiseError("graphql_ppx: Expected enum value for UpdateSchoolStringError, got " + JSON.stringify(value));
                }
              })) : Js_exn.raiseError("graphql_ppx: Field errors on type UpdateSchoolStringPayload is missing")
    };
  } else {
    tmp = Js_exn.raiseError("graphql_ppx: Field updateAddress on type Mutation is missing");
  }
  var match$2 = Js_dict.get(value$1, "updateEmailAddress");
  var tmp$1;
  if (match$2 !== undefined) {
    var value$3 = Js_option.getExn(Js_json.decodeObject(Caml_option.valFromOption(match$2)));
    var match$3 = Js_dict.get(value$3, "errors");
    tmp$1 = {
      errors: match$3 !== undefined ? Js_option.getExn(Js_json.decodeArray(Caml_option.valFromOption(match$3))).map((function (value) {
                var match = Js_json.decodeString(value);
                if (match !== undefined) {
                  var value$1 = match;
                  switch (value$1) {
                    case "InvalidKey" :
                        return /* InvalidKey */-37069048;
                    case "InvalidLengthValue" :
                        return /* InvalidLengthValue */718585620;
                    case "InvalidValue" :
                        return /* InvalidValue */522207514;
                    default:
                      return Js_exn.raiseError("graphql_ppx: Unknown enum variant for UpdateSchoolStringError: " + value$1);
                  }
                } else {
                  return Js_exn.raiseError("graphql_ppx: Expected enum value for UpdateSchoolStringError, got " + JSON.stringify(value));
                }
              })) : Js_exn.raiseError("graphql_ppx: Field errors on type UpdateSchoolStringPayload is missing")
    };
  } else {
    tmp$1 = Js_exn.raiseError("graphql_ppx: Field updateEmailAddress on type Mutation is missing");
  }
  return {
          updateAddress: tmp,
          updateEmailAddress: tmp$1
        };
}

function make(address, emailAddress, param) {
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "address",
                    address
                  ],
                  /* tuple */[
                    "emailAddress",
                    emailAddress
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeWithVariables(variables) {
  var address = variables.address;
  var emailAddress = variables.emailAddress;
  return {
          query: ppx_printed_query,
          variables: Js_dict.fromArray([
                  /* tuple */[
                    "address",
                    address
                  ],
                  /* tuple */[
                    "emailAddress",
                    emailAddress
                  ]
                ].filter((function (param) {
                      return !Js_json.test(param[1], /* Null */5);
                    }))),
          parse: parse
        };
}

function makeVariables(address, emailAddress, param) {
  return Js_dict.fromArray([
                /* tuple */[
                  "address",
                  address
                ],
                /* tuple */[
                  "emailAddress",
                  emailAddress
                ]
              ].filter((function (param) {
                    return !Js_json.test(param[1], /* Null */5);
                  })));
}

function definition_002(graphql_ppx_use_json_variables_fn, address, emailAddress, param) {
  return Curry._1(graphql_ppx_use_json_variables_fn, Js_dict.fromArray([
                    /* tuple */[
                      "address",
                      address
                    ],
                    /* tuple */[
                      "emailAddress",
                      emailAddress
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

var UpdateContactDetailsQuery = {
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

var UpdateSchoolStringErrorHandler = GraphqlErrorHandler.Make(SchoolCustomize__UpdateSchoolStringError);

function handleUpdateContactDetails(state, send, updateAddressCB, updateEmailAddressCB, $$event) {
  $$event.preventDefault();
  Curry._1(send, /* BeginUpdate */0);
  Curry._2(UpdateSchoolStringErrorHandler.$$catch, (function (param) {
          return Curry._1(send, /* ErrorOccured */1);
        }), (function (eta) {
              return GraphqlQuery.sendQuery(undefined, eta);
            })(make(state.address, state.emailAddress, /* () */0)).then((function (result) {
              var match = result.updateAddress.errors;
              var match$1 = result.updateEmailAddress.errors;
              if (match.length !== 0) {
                if (match$1.length !== 0) {
                  var errors = $$Array.append(match$1, match);
                  return Promise.reject([
                              UpdateSchoolStringErrorHandler.Errors,
                              errors
                            ]);
                } else {
                  $$Notification.notice("Partial success!", "We were only able to update the email address.");
                  return Promise.reject([
                              UpdateSchoolStringErrorHandler.Errors,
                              match
                            ]);
                }
              } else if (match$1.length !== 0) {
                $$Notification.notice("Partial success!", "We were only able to update the address.");
                return Promise.reject([
                            UpdateSchoolStringErrorHandler.Errors,
                            match$1
                          ]);
              } else {
                $$Notification.success("Done!", "Contact details have been updated.");
                Curry._1(updateAddressCB, state.address);
                Curry._1(updateEmailAddressCB, state.emailAddress);
                Curry._1(send, /* DoneUpdating */2);
                return Promise.resolve(/* () */0);
              }
            })));
  return /* () */0;
}

function updateButtonDisabled(state) {
  if (state.updating || !state.formDirty) {
    return true;
  } else {
    return state.emailAddressInvalid;
  }
}

function initialState(customizations) {
  return {
          address: OptionUtils.$$default("", SchoolCustomize__Customizations.address(customizations)),
          emailAddress: OptionUtils.$$default("", SchoolCustomize__Customizations.emailAddress(customizations)),
          emailAddressInvalid: false,
          updating: false,
          formDirty: false
        };
}

function reducer(state, action) {
  if (typeof action === "number") {
    switch (action) {
      case /* BeginUpdate */0 :
          return {
                  address: state.address,
                  emailAddress: state.emailAddress,
                  emailAddressInvalid: state.emailAddressInvalid,
                  updating: true,
                  formDirty: state.formDirty
                };
      case /* ErrorOccured */1 :
          return {
                  address: state.address,
                  emailAddress: state.emailAddress,
                  emailAddressInvalid: state.emailAddressInvalid,
                  updating: false,
                  formDirty: state.formDirty
                };
      case /* DoneUpdating */2 :
          return {
                  address: state.address,
                  emailAddress: state.emailAddress,
                  emailAddressInvalid: state.emailAddressInvalid,
                  updating: false,
                  formDirty: false
                };
      
    }
  } else if (action.tag) {
    return {
            address: state.address,
            emailAddress: action[0],
            emailAddressInvalid: action[1],
            updating: state.updating,
            formDirty: true
          };
  } else {
    return {
            address: action[0],
            emailAddress: state.emailAddress,
            emailAddressInvalid: state.emailAddressInvalid,
            updating: state.updating,
            formDirty: true
          };
  }
}

function SchoolCustomize__ContactsEditor(Props) {
  var customizations = Props.customizations;
  var updateAddressCB = Props.updateAddressCB;
  var updateEmailAddressCB = Props.updateEmailAddressCB;
  var match = React.useReducer(reducer, initialState(customizations));
  var send = match[1];
  var state = match[0];
  return React.createElement("div", {
              className: "mx-8 pt-8"
            }, React.createElement("h5", {
                  className: "uppercase text-center border-b border-gray-400 pb-2"
                }, "Manage Contact Details"), React.createElement(DisablingCover.make, {
                  disabled: state.updating,
                  children: null
                }, React.createElement("div", {
                      key: "contacts-editor__address-input-group",
                      className: "mt-3"
                    }, React.createElement("label", {
                          className: "inline-block tracking-wide text-xs font-semibold",
                          htmlFor: "contacts-editor__address"
                        }, "Contact Address ", React.createElement("i", {
                              className: "fab fa-markdown text-base"
                            })), React.createElement("textarea", {
                          className: "appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                          id: "contacts-editor__address",
                          maxLength: 1000,
                          placeholder: "Leave the address empty to hide the footer section.",
                          value: state.address,
                          onChange: (function (param) {
                              var address = param.target.value;
                              return Curry._1(send, /* UpdateAddress */Block.__(0, [address]));
                            })
                        })), React.createElement("div", {
                      key: "contacts-editor__email-address-input-group",
                      className: "mt-3"
                    }, React.createElement("label", {
                          className: "inline-block tracking-wide text-xs font-semibold",
                          htmlFor: "contacts-editor__email-address"
                        }, "Email Address"), React.createElement("input", {
                          className: "appearance-none block w-full bg-white text-gray-800 border border-gray-400 rounded py-3 px-4 mt-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                          id: "contacts-editor__email-address",
                          maxLength: 250,
                          placeholder: "Leave the email address empty to hide the footer link.",
                          type: "text",
                          value: state.emailAddress,
                          onChange: (function (param) {
                              var emailAddress = param.target.value;
                              return Curry._1(send, /* UpdateEmailAddress */Block.__(1, [
                                            emailAddress,
                                            EmailUtils.isInvalid(true, emailAddress)
                                          ]));
                            })
                        }), React.createElement(School__InputGroupError.make, {
                          message: "is not a valid email address",
                          active: state.emailAddressInvalid
                        })), React.createElement("button", {
                      key: "contacts-editor__update-button",
                      className: "w-full bg-indigo-600 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded focus:outline-none mt-3",
                      disabled: updateButtonDisabled(state),
                      onClick: (function (param) {
                          return handleUpdateContactDetails(state, send, updateAddressCB, updateEmailAddressCB, param);
                        })
                    }, state.updating ? "Updating..." : "Update Contact Details")));
}

var make$1 = SchoolCustomize__ContactsEditor;

exports.str = str;
exports.handleInputChange = handleInputChange;
exports.updateContactDetailsButtonText = updateContactDetailsButtonText;
exports.UpdateContactDetailsQuery = UpdateContactDetailsQuery;
exports.UpdateSchoolStringErrorHandler = UpdateSchoolStringErrorHandler;
exports.handleUpdateContactDetails = handleUpdateContactDetails;
exports.updateButtonDisabled = updateButtonDisabled;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make$1;
/* UpdateSchoolStringErrorHandler Not a pure module */
