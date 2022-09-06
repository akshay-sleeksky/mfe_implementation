import React from "react";
import * as ReactDOMClient from "react-dom/client";

import reactToWebComponent from "react-to-webcomponent";

import {App} from "./app";

const MyGreeting = reactToWebComponent(App, React, ReactDOMClient);

customElements.define("web-greeting", MyGreeting);