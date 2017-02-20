import * as React from "react";
import * as ReactDOM from "react-dom";
import { Button } from "./Elements/Button/Button.tsx";

const rootEl = document.getElementById("my-app");
ReactDOM.render(
    <Button text="Click me to change state" />,
    rootEl
);
