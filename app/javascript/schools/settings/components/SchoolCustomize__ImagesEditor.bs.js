// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Api = require("../../../shared/Api.bs.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var OptionUtils = require("../../../shared/utils/OptionUtils.bs.js");
var $$Notification = require("../../../shared/Notification.bs.js");
var DisablingCover = require("../../../shared/components/DisablingCover.bs.js");
var School__InputGroupError = require("../../shared/components/School__InputGroupError.bs.js");
var SchoolCustomize__Customizations = require("../types/SchoolCustomize__Customizations.bs.js");
var SchoolCustomize__ImageFileInput = require("./SchoolCustomize__ImageFileInput.bs.js");

function str(prim) {
  return prim;
}

function updateButtonText(updating) {
  if (updating) {
    return "Updating...";
  } else {
    return "Update Images";
  }
}

var formId = "sc-images-editor__form";

function handleUpdateImages(send, updateImagesCB, $$event) {
  $$event.preventDefault();
  Curry._1(send, /* BeginUpdate */0);
  var element = document.getElementById(formId);
  if (element == null) {
    return /* () */0;
  } else {
    return Api.sendFormData("/school/images", new FormData(element), (function (json) {
                  $$Notification.success("Done!", "Images have been updated successfully.");
                  Curry._1(updateImagesCB, json);
                  return Curry._1(send, /* DoneUpdating */2);
                }), (function (param) {
                  return Curry._1(send, /* ErrorOccured */1);
                }));
  }
}

function updateButtonDisabled(state) {
  if (state.updating || !state.formDirty || state.logoOnLightBgInvalid) {
    return true;
  } else {
    return state.iconInvalid;
  }
}

function isInvalidImageFile(image) {
  var match = image.type;
  var tmp;
  switch (match) {
    case "image/jpeg" :
    case "image/png" :
        tmp = false;
        break;
    default:
      tmp = true;
  }
  if (tmp) {
    return true;
  } else {
    return image.size > 2097152;
  }
}

function updateLogoOnLightBg(send, $$event) {
  var imageFile = Caml_array.caml_array_get($$event.target.files, 0);
  return Curry._1(send, /* SelectLogoOnLightBgFile */Block.__(0, [
                imageFile.name,
                isInvalidImageFile(imageFile)
              ]));
}

function updateCoverImage(send, $$event) {
  var imageFile = Caml_array.caml_array_get($$event.target.files, 0);
  return Curry._1(send, /* SelectCoverImageFile */Block.__(1, [
                imageFile.name,
                isInvalidImageFile(imageFile)
              ]));
}

function updateIcon(send, $$event) {
  var imageFile = Caml_array.caml_array_get($$event.target.files, 0);
  return Curry._1(send, /* SelectIconFile */Block.__(2, [
                imageFile.name,
                isInvalidImageFile(imageFile)
              ]));
}

function imageUploader(id, disabled, name, onChange, labelText, optionalImageLabel, errorState, errorMessage) {
  return React.createElement("div", {
              key: id,
              className: "mt-4"
            }, React.createElement("label", {
                  className: "block tracking-wide text-gray-800 text-xs font-semibold",
                  htmlFor: id
                }, labelText), React.createElement("input", {
                  className: "hidden",
                  id: id,
                  accept: ".jpg,.jpeg,.png,.gif,image/x-png,image/gif,image/jpeg",
                  disabled: disabled,
                  multiple: false,
                  name: name,
                  required: false,
                  type: "file",
                  onChange: onChange
                }), React.createElement("label", {
                  className: "file-input-label mt-2",
                  htmlFor: id
                }, React.createElement("i", {
                      className: "fas fa-upload"
                    }), React.createElement("span", {
                      className: "ml-2 truncate"
                    }, optionalImageLabel)), React.createElement(School__InputGroupError.make, {
                  message: errorMessage,
                  active: errorState
                }));
}

function initialState(param) {
  return {
          logoOnLightBgFilename: undefined,
          logoOnLightBgInvalid: false,
          coverImageFilename: undefined,
          coverImageInvalid: false,
          iconFilename: undefined,
          iconInvalid: false,
          updating: false,
          formDirty: false
        };
}

function reducer(state, action) {
  if (typeof action === "number") {
    switch (action) {
      case /* BeginUpdate */0 :
          return {
                  logoOnLightBgFilename: state.logoOnLightBgFilename,
                  logoOnLightBgInvalid: state.logoOnLightBgInvalid,
                  coverImageFilename: state.coverImageFilename,
                  coverImageInvalid: state.coverImageInvalid,
                  iconFilename: state.iconFilename,
                  iconInvalid: state.iconInvalid,
                  updating: true,
                  formDirty: state.formDirty
                };
      case /* ErrorOccured */1 :
          return {
                  logoOnLightBgFilename: state.logoOnLightBgFilename,
                  logoOnLightBgInvalid: state.logoOnLightBgInvalid,
                  coverImageFilename: state.coverImageFilename,
                  coverImageInvalid: state.coverImageInvalid,
                  iconFilename: state.iconFilename,
                  iconInvalid: state.iconInvalid,
                  updating: false,
                  formDirty: state.formDirty
                };
      case /* DoneUpdating */2 :
          return {
                  logoOnLightBgFilename: undefined,
                  logoOnLightBgInvalid: false,
                  coverImageFilename: undefined,
                  coverImageInvalid: false,
                  iconFilename: undefined,
                  iconInvalid: false,
                  updating: false,
                  formDirty: false
                };
      
    }
  } else {
    switch (action.tag | 0) {
      case /* SelectLogoOnLightBgFile */0 :
          return {
                  logoOnLightBgFilename: action[0],
                  logoOnLightBgInvalid: action[1],
                  coverImageFilename: state.coverImageFilename,
                  coverImageInvalid: state.coverImageInvalid,
                  iconFilename: state.iconFilename,
                  iconInvalid: state.iconInvalid,
                  updating: state.updating,
                  formDirty: true
                };
      case /* SelectCoverImageFile */1 :
          return {
                  logoOnLightBgFilename: state.logoOnLightBgFilename,
                  logoOnLightBgInvalid: state.logoOnLightBgInvalid,
                  coverImageFilename: action[0],
                  coverImageInvalid: action[1],
                  iconFilename: state.iconFilename,
                  iconInvalid: state.iconInvalid,
                  updating: state.updating,
                  formDirty: true
                };
      case /* SelectIconFile */2 :
          return {
                  logoOnLightBgFilename: state.logoOnLightBgFilename,
                  logoOnLightBgInvalid: state.logoOnLightBgInvalid,
                  coverImageFilename: state.coverImageFilename,
                  coverImageInvalid: state.coverImageInvalid,
                  iconFilename: action[0],
                  iconInvalid: action[1],
                  updating: state.updating,
                  formDirty: true
                };
      
    }
  }
}

function SchoolCustomize__ImagesEditor(Props) {
  var customizations = Props.customizations;
  var updateImagesCB = Props.updateImagesCB;
  var authenticityToken = Props.authenticityToken;
  var match = React.useReducer(reducer, {
        logoOnLightBgFilename: undefined,
        logoOnLightBgInvalid: false,
        coverImageFilename: undefined,
        coverImageInvalid: false,
        iconFilename: undefined,
        iconInvalid: false,
        updating: false,
        formDirty: false
      });
  var send = match[1];
  var state = match[0];
  var logoOnLightBg = SchoolCustomize__Customizations.logoOnLightBg(customizations);
  var coverImage = SchoolCustomize__Customizations.coverImage(customizations);
  var icon = SchoolCustomize__Customizations.icon(customizations);
  return React.createElement("form", {
              key: "sc-images-editor__form",
              className: "mx-8 pt-8",
              id: formId,
              onSubmit: (function (param) {
                  return handleUpdateImages(send, updateImagesCB, param);
                })
            }, React.createElement("input", {
                  name: "authenticity_token",
                  type: "hidden",
                  value: authenticityToken
                }), React.createElement("h5", {
                  className: "uppercase text-center border-b border-gray-400 pb-2"
                }, "Manage Images"), React.createElement(DisablingCover.make, {
                  disabled: state.updating,
                  children: null
                }, React.createElement(SchoolCustomize__ImageFileInput.make, {
                      id: "sc-images-editor__logo-on-400-bg-input",
                      disabled: state.updating,
                      name: "logo_on_light_bg",
                      onChange: (function (param) {
                          return updateLogoOnLightBg(send, param);
                        }),
                      labelText: "Logo on a light background",
                      imageName: OptionUtils.map(SchoolCustomize__Customizations.filename, logoOnLightBg),
                      selectedImageName: state.logoOnLightBgFilename,
                      errorState: state.logoOnLightBgInvalid
                    }), React.createElement(SchoolCustomize__ImageFileInput.make, {
                      id: "sc-images-editor__icon-input",
                      disabled: state.updating,
                      name: "icon",
                      onChange: (function (param) {
                          return updateIcon(send, param);
                        }),
                      labelText: "Icon",
                      imageName: SchoolCustomize__Customizations.filename(icon),
                      selectedImageName: state.iconFilename,
                      errorState: state.iconInvalid
                    }), React.createElement(SchoolCustomize__ImageFileInput.make, {
                      id: "sc-images-editor__cover-image-input",
                      disabled: state.updating,
                      name: "cover_image",
                      onChange: (function (param) {
                          return updateCoverImage(send, param);
                        }),
                      labelText: "Cover image",
                      imageName: OptionUtils.map(SchoolCustomize__Customizations.filename, coverImage),
                      selectedImageName: state.coverImageFilename,
                      errorState: state.coverImageInvalid
                    }), React.createElement("div", {
                      className: "flex justify-end"
                    }, React.createElement("button", {
                          key: "sc-images-editor__update-button",
                          className: "btn btn-primary btn-large mt-6",
                          disabled: updateButtonDisabled(state),
                          type: "submit"
                        }, state.updating ? "Updating..." : "Update Images"))));
}

var maxAllowedSize = 2097152;

var make = SchoolCustomize__ImagesEditor;

exports.str = str;
exports.updateButtonText = updateButtonText;
exports.formId = formId;
exports.handleUpdateImages = handleUpdateImages;
exports.updateButtonDisabled = updateButtonDisabled;
exports.maxAllowedSize = maxAllowedSize;
exports.isInvalidImageFile = isInvalidImageFile;
exports.updateLogoOnLightBg = updateLogoOnLightBg;
exports.updateCoverImage = updateCoverImage;
exports.updateIcon = updateIcon;
exports.imageUploader = imageUploader;
exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* Api Not a pure module */
