// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Api = require("../shared/Api.bs.js");
var $$Array = require("bs-platform/lib/js/array.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var FaIcon = require("../shared/components/FaIcon.bs.js");
var DomUtils = require("../shared/utils/DomUtils.bs.js");
var EmailUtils = require("../shared/utils/EmailUtils.bs.js");
var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var OptionUtils = require("../shared/utils/OptionUtils.bs.js");
var EmailSentIconSvg = require("./images/email-sent-icon.svg");
var ResetPasswordIconSvg = require("./images/reset-password-icon.svg");
var FederatedSignInIconSvg = require("./images/federated-sign-in-icon.svg");
var ContinueWithEmailIconSvg = require("./images/continue-with-email-icon.svg");

((require("./UserSessionNew.css")));

var federatedSignInIcon = FederatedSignInIconSvg.default;

var signInWithPasswordIcon = ContinueWithEmailIconSvg.default;

var signInEmailSentIcon = EmailSentIconSvg.default;

var forgotPasswordIcon = ResetPasswordIconSvg.default;

function str(prim) {
  return prim;
}

function handleErrorCB(setSaving, param) {
  return Curry._1(setSaving, (function (param) {
                return false;
              }));
}

function handleSignInWithPasswordCB(response) {
  var path = Json_decode.field("path", (function (param) {
          return Json_decode.nullable(Json_decode.string, param);
        }), response);
  if (path !== null) {
    return DomUtils.redirect(path);
  } else {
    return /* () */0;
  }
}

function handleSignInWithEmailCB(setView, param) {
  return Curry._1(setView, (function (param) {
                return /* SignInEmailSent */2;
              }));
}

function signInWithPassword(authenticityToken, email, password, setSaving, sharedDevice) {
  var payload = { };
  payload["authenticity_token"] = authenticityToken;
  payload["email"] = email;
  payload["shared_device"] = sharedDevice ? "1" : "0";
  payload["password"] = password;
  Curry._1(setSaving, (function (param) {
          return true;
        }));
  return Api.create("/users/sign_in", payload, handleSignInWithPasswordCB, (function (param) {
                return Curry._1(setSaving, (function (param) {
                              return false;
                            }));
              }));
}

function sendSignInEmail(authenticityToken, email, setView, setSaving, sharedDevice) {
  var payload = { };
  payload["authenticity_token"] = authenticityToken;
  payload["email"] = email;
  payload["referer"] = "";
  payload["shared_device"] = sharedDevice ? "1" : "0";
  payload["username"] = "";
  Curry._1(setSaving, (function (param) {
          return true;
        }));
  return Api.create("/users/send_login_email", payload, (function (param) {
                return Curry._1(setView, (function (param) {
                              return /* SignInEmailSent */2;
                            }));
              }), (function (param) {
                return Curry._1(setSaving, (function (param) {
                              return false;
                            }));
              }));
}

function sendResetPasswordEmail(authenticityToken, email, setView, setSaving) {
  var payload = { };
  payload["authenticity_token"] = authenticityToken;
  payload["email"] = email;
  payload["username"] = "";
  Curry._1(setSaving, (function (param) {
          return true;
        }));
  return Api.create("/users/send_reset_password_email", payload, (function (param) {
                return Curry._1(setView, (function (param) {
                              return /* SignInEmailSent */2;
                            }));
              }), (function (param) {
                return Curry._1(setSaving, (function (param) {
                              return false;
                            }));
              }));
}

function renderIcon(view) {
  var iconUrl;
  switch (view) {
    case /* FederatedSignIn */0 :
        iconUrl = federatedSignInIcon;
        break;
    case /* SignInWithPassword */1 :
        iconUrl = signInWithPasswordIcon;
        break;
    case /* SignInEmailSent */2 :
        iconUrl = signInEmailSentIcon;
        break;
    case /* ForgotPassword */3 :
        iconUrl = forgotPasswordIcon;
        break;
    
  }
  return React.createElement("img", {
              className: "mx-auto w-32 sm:w-42",
              src: iconUrl
            });
}

function headerText(view, schoolName) {
  switch (view) {
    case /* FederatedSignIn */0 :
        return "Sign in to " + schoolName;
    case /* SignInWithPassword */1 :
        return "Continue with email";
    case /* SignInEmailSent */2 :
        return "We've sent you a magic link!";
    case /* ForgotPassword */3 :
        return "Reset password";
    
  }
}

function federatedLoginUrl(oauthHost, fqdn, provider) {
  var tmp;
  switch (provider) {
    case /* Google */0 :
        tmp = "google";
        break;
    case /* Facebook */1 :
        tmp = "facebook";
        break;
    case /* Github */2 :
        tmp = "github";
        break;
    case /* Developer */3 :
        tmp = "developer";
        break;
    
  }
  return "//" + (oauthHost + ("/oauth/" + (tmp + ("?fqdn=" + fqdn))));
}

function buttonText(provider) {
  var tmp;
  switch (provider) {
    case /* Google */0 :
        tmp = "with Google";
        break;
    case /* Facebook */1 :
        tmp = "with Facebook";
        break;
    case /* Github */2 :
        tmp = "with Github";
        break;
    case /* Developer */3 :
        tmp = "as Developer";
        break;
    
  }
  return "Continue " + tmp;
}

function buttonClasses(provider) {
  var tmp;
  switch (provider) {
    case /* Google */0 :
        tmp = "federated-sigin-in__google-btn hover:bg-red-600 text-white";
        break;
    case /* Facebook */1 :
        tmp = "federated-sigin-in__facebook-btn hover:bg-blue-800 text-white";
        break;
    case /* Github */2 :
        tmp = "federated-sigin-in__github-btn hover:bg-black text-white";
        break;
    case /* Developer */3 :
        tmp = "bg-green-100 border-green-400 text-green-800 hover:bg-green-200";
        break;
    
  }
  return "flex justify-center items-center px-3 py-2 leading-snug border border-transparent rounded-lg cursor-pointer font-semibold mt-4 w-full " + tmp;
}

function iconClasses(provider) {
  switch (provider) {
    case /* Google */0 :
        return "fab fa-google";
    case /* Facebook */1 :
        return "fab fa-facebook-f mr-1";
    case /* Github */2 :
        return "fab fa-github";
    case /* Developer */3 :
        return "fas fa-laptop-code";
    
  }
}

function providers(param) {
  var defaultProvides = [
    /* Google */0,
    /* Facebook */1,
    /* Github */2
  ];
  if (DomUtils.isDevelopment(/* () */0)) {
    return $$Array.append([/* Developer */3], defaultProvides);
  } else {
    return defaultProvides;
  }
}

function renderFederatedlogin(fqdn, oauthHost) {
  return React.createElement("div", {
              className: "flex flex-col pb-5 md:px-9 items-center max-w-sm mx-auto"
            }, $$Array.map((function (provider) {
                    return React.createElement("a", {
                                key: buttonText(provider),
                                className: buttonClasses(provider),
                                href: federatedLoginUrl(oauthHost, fqdn, provider)
                              }, React.createElement("span", {
                                    className: "w-1/5 text-right text-lg"
                                  }, React.createElement(FaIcon.make, {
                                        classes: iconClasses(provider)
                                      })), React.createElement("span", {
                                    className: "w-4/5 pl-3 text-left"
                                  }, buttonText(provider)));
                  }), providers(/* () */0)));
}

function validPassword(password) {
  return password !== "";
}

function validEmail(email) {
  return EmailUtils.isInvalid(false, email);
}

function renderSignInWithEmail(email, setEmail, password, setPassword, authenticityToken, setView, saving, setSaving, sharedDevice, setSharedDevice) {
  return React.createElement("div", {
              className: "pt-4 pb-5 md:px-9 items-center max-w-sm mx-auto"
            }, React.createElement("div", undefined, React.createElement("label", {
                      className: "inline-block tracking-wide text-gray-900 text-xs font-semibold",
                      htmlFor: "email"
                    }, "Email Address"), React.createElement("input", {
                      className: "appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400",
                      id: "email",
                      disabled: saving,
                      placeholder: "john@example.com",
                      type: "text",
                      value: email,
                      onChange: (function ($$event) {
                          return Curry._1(setEmail, $$event.target.value);
                        })
                    })), React.createElement("div", {
                  className: "mt-4"
                }, React.createElement("div", {
                      className: "flex justify-between"
                    }, React.createElement("label", {
                          className: "inline-block tracking-wide text-gray-900 text-xs font-semibold",
                          htmlFor: "password"
                        }, "Password"), React.createElement("button", {
                          className: "text-primary-400 text-center text-xs font-semibold hover:text-primary-600 cursor-pointer whitespace-no-wrap hover:underline inline",
                          disabled: saving,
                          onClick: (function (param) {
                              if (saving) {
                                return /* () */0;
                              } else {
                                return Curry._1(setView, (function (param) {
                                              return /* ForgotPassword */3;
                                            }));
                              }
                            })
                        }, "Set a New Password")), React.createElement("input", {
                      className: "appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400",
                      id: "password",
                      disabled: saving,
                      placeholder: "Type your password",
                      type: "password",
                      value: password,
                      onChange: (function ($$event) {
                          return Curry._1(setPassword, $$event.target.value);
                        })
                    })), React.createElement("div", {
                  className: "flex justify-between items-center leading-snug mt-4 flex-col flex-col-reverse sm:flex-row"
                }, React.createElement("div", {
                      className: "flex items-strecth text-gray-700 hover:text-gray-900"
                    }, React.createElement("input", {
                          id: "sharedDevice",
                          checked: sharedDevice,
                          disabled: saving,
                          type: "checkbox",
                          onChange: (function (param) {
                              return Curry._1(setSharedDevice, (function (sharedDevice) {
                                            return !sharedDevice;
                                          }));
                            })
                        }), React.createElement("label", {
                          className: "block pl-2 font-semibold cursor-pointer text-xs select-none whitespace-no-wrap",
                          htmlFor: "sharedDevice"
                        }, "Are you using a shared device?"))), React.createElement("div", {
                  className: "mt-6"
                }, password !== "" ? React.createElement("button", {
                        className: "btn btn-success btn-large text-center w-full",
                        disabled: saving || EmailUtils.isInvalid(false, email),
                        onClick: (function (param) {
                            return signInWithPassword(authenticityToken, email, password, setSaving, sharedDevice);
                          })
                      }, saving ? React.createElement(FaIcon.make, {
                              classes: "fas fa-spinner fa-spin mr-2"
                            }) : null, React.createElement("span", undefined, saving ? "Signing in" : "Sign in with password")) : React.createElement("button", {
                        className: "btn btn-primary btn-large text-center w-full",
                        disabled: saving || EmailUtils.isInvalid(false, email),
                        onClick: (function (param) {
                            return sendSignInEmail(authenticityToken, email, setView, setSaving, sharedDevice);
                          })
                      }, saving ? React.createElement(FaIcon.make, {
                              classes: "fas fa-spinner fa-spin mr-2"
                            }) : null, React.createElement("span", undefined, saving ? "Signing in" : "Email me a link to sign in"))));
}

function renderSignInEmailSent(param) {
  return React.createElement("div", {
              className: "max-w-sm mx-auto"
            }, React.createElement("p", {
                  className: "mt-4 text-center"
                }, "It should reach you in less than a minute. Click the link in the email, and you'll be signed in."));
}

function renderForgotPassword(authenticityToken, email, saving, setEmail, setSaving, setView) {
  return React.createElement("div", {
              className: "max-w-sm mx-auto md:px-9 pb-4"
            }, React.createElement("div", {
                  className: "text-sm mt-2 text-center pb-3"
                }, "Enter your email for password recovery"), React.createElement("label", {
                  className: "inline-block tracking-wide text-gray-900 text-xs font-semibold",
                  htmlFor: "email"
                }, "Email"), React.createElement("input", {
                  className: "appearance-none h-10 mt-1 block w-full text-gray-800 border border-gray-400 rounded py-2 px-4 text-sm bg-gray-100 hover:bg-gray-200 focus:outline-none focus:bg-white focus:border-primary-400",
                  id: "email",
                  disabled: saving,
                  placeholder: "john@example.com",
                  type: "text",
                  value: email,
                  onChange: (function ($$event) {
                      return Curry._1(setEmail, $$event.target.value);
                    })
                }), React.createElement("button", {
                  className: "btn btn-primary btn-large text-center w-full mt-4 mr-2",
                  disabled: saving || EmailUtils.isInvalid(false, email),
                  onClick: (function (param) {
                      return sendResetPasswordEmail(authenticityToken, email, setView, setSaving);
                    })
                }, saving ? React.createElement(FaIcon.make, {
                        classes: "fas fa-spinner fa-spin mr-2"
                      }) : null, React.createElement("span", undefined, saving ? "Dispatching email" : "Send Email")));
}

function UserSessionNew(Props) {
  var schoolName = Props.schoolName;
  var authenticityToken = Props.authenticityToken;
  var fqdn = Props.fqdn;
  var oauthHost = Props.oauthHost;
  var match = React.useState((function () {
          return OptionUtils.mapWithDefault((function (param) {
                        return /* FederatedSignIn */0;
                      }), /* SignInWithPassword */1, oauthHost);
        }));
  var setView = match[1];
  var view = match[0];
  var match$1 = React.useState((function () {
          return "";
        }));
  var setEmail = match$1[1];
  var email = match$1[0];
  var match$2 = React.useState((function () {
          return "";
        }));
  var match$3 = React.useState((function () {
          return false;
        }));
  var match$4 = React.useState((function () {
          return false;
        }));
  var setSaving = match$4[1];
  var saving = match$4[0];
  var tmp;
  var exit = 0;
  var exit$1 = 0;
  if (oauthHost !== undefined) {
    if (view !== 0) {
      exit$1 = 2;
    } else {
      tmp = renderFederatedlogin(fqdn, oauthHost);
    }
  } else if (view !== 0) {
    exit$1 = 2;
  } else {
    exit = 1;
  }
  if (exit$1 === 2) {
    switch (view - 1 | 0) {
      case /* FederatedSignIn */0 :
          exit = 1;
          break;
      case /* SignInWithPassword */1 :
          tmp = renderSignInEmailSent(/* () */0);
          break;
      case /* SignInEmailSent */2 :
          tmp = renderForgotPassword(authenticityToken, email, saving, setEmail, setSaving, setView);
          break;
      
    }
  }
  if (exit === 1) {
    tmp = renderSignInWithEmail(email, setEmail, match$2[0], match$2[1], authenticityToken, setView, saving, setSaving, match$3[0], match$3[1]);
  }
  var tmp$1;
  var exit$2 = 0;
  if (view >= 3) {
    exit$2 = 1;
  } else {
    switch (view) {
      case /* FederatedSignIn */0 :
          tmp$1 = React.createElement("div", {
                className: "max-w-sm mx-auto md:px-9"
              }, React.createElement("span", {
                    className: "federated-signin-in__seperator block relative z-10 text-center text-xs text-gray-600 font-semibold"
                  }, React.createElement("span", {
                        className: "bg-white px-2"
                      }, "OR")), React.createElement("button", {
                    className: "flex justify-center items-center px-3 py-2 leading-snug border border-gray-400 text-primary-500 hover:bg-gray-100 hover:border-primary-500 focus:bg-gray-200 focus::border-primary-500 focus:outline-none rounded-lg cursor-pointer font-semibold mt-4 w-full",
                    disabled: saving,
                    onClick: (function (param) {
                        return Curry._1(setView, (function (param) {
                                      return /* SignInWithPassword */1;
                                    }));
                      })
                  }, React.createElement("span", {
                        className: "w-1/5 text-right text-lg"
                      }, React.createElement(FaIcon.make, {
                            classes: "fas fa-envelope"
                          })), React.createElement("span", {
                        className: "w-4/5 pl-3 text-left"
                      }, "Continue with email")));
          break;
      case /* SignInWithPassword */1 :
          exit$2 = 1;
          break;
      case /* SignInEmailSent */2 :
          tmp$1 = null;
          break;
      
    }
  }
  if (exit$2 === 1) {
    tmp$1 = oauthHost !== undefined ? React.createElement("div", {
            className: "max-w-sm mx-auto md:px-9"
          }, React.createElement("button", {
                className: "w-full p-3 text-primary-500 leading-snug rounded-lg underline cursor-pointer text-sm text-center font-semibold hover:bg-gray-200 focus:bg-gray-200 focus:outline-none",
                disabled: saving,
                onClick: (function (param) {
                    return Curry._1(setView, (function (param) {
                                  return /* FederatedSignIn */0;
                                }));
                  })
              }, "Sign in with Google, Facebook, or Github")) : null;
  }
  return React.createElement("div", {
              className: "bg-gray-100 sm:py-10"
            }, React.createElement("div", {
                  className: "container mx-auto max-w-lg px-4 py-6 sm:py-8 bg-white rounded-lg shadow"
                }, renderIcon(view), React.createElement("div", {
                      className: "max-w-sm mx-auto text-lg sm:text-2xl font-bold text-center mt-4"
                    }, headerText(view, schoolName)), tmp, tmp$1));
}

var make = UserSessionNew;

exports.federatedSignInIcon = federatedSignInIcon;
exports.signInWithPasswordIcon = signInWithPasswordIcon;
exports.signInEmailSentIcon = signInEmailSentIcon;
exports.forgotPasswordIcon = forgotPasswordIcon;
exports.str = str;
exports.handleErrorCB = handleErrorCB;
exports.handleSignInWithPasswordCB = handleSignInWithPasswordCB;
exports.handleSignInWithEmailCB = handleSignInWithEmailCB;
exports.signInWithPassword = signInWithPassword;
exports.sendSignInEmail = sendSignInEmail;
exports.sendResetPasswordEmail = sendResetPasswordEmail;
exports.renderIcon = renderIcon;
exports.headerText = headerText;
exports.federatedLoginUrl = federatedLoginUrl;
exports.buttonText = buttonText;
exports.buttonClasses = buttonClasses;
exports.iconClasses = iconClasses;
exports.providers = providers;
exports.renderFederatedlogin = renderFederatedlogin;
exports.validPassword = validPassword;
exports.validEmail = validEmail;
exports.renderSignInWithEmail = renderSignInWithEmail;
exports.renderSignInEmailSent = renderSignInEmailSent;
exports.renderForgotPassword = renderForgotPassword;
exports.make = make;
/*  Not a pure module */
