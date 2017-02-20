import * as React from "react";
import * as style from "./Button.css";

export interface IButtonProps { text: string; }
export interface IButtonState { on: boolean; }

export class Button extends React.Component<IButtonProps, IButtonState> {

    constructor(props: IButtonProps) {
        super(props);
        this.state = { on: true };
    }

    private onButtonClicked(): any {
        this.setState({ on: !this.state.on });
    }

    public render() {
        const buttonState = this.state.on ? style.on : style.off;
        return (
            <button
                type="button"
                onClick={() => this.onButtonClicked()}
                className={buttonState} > {this.props.text}
            </button>
        );
    }
}
