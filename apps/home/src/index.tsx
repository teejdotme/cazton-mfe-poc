import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Component from "./component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Component,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;