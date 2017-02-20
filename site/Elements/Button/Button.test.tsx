import * as React from "react";
import * as Enzyme from "enzyme";
import { Button } from "./Button";

describe("Button", () => {
    it("Should calculate", () => {
        expect(1).toBe(2);
    });

    it("should show the text property", () => {
        var button = Enzyme.shallow(<Button text="hello" />);

        expect(button.text().trim()).toBe("hello");
    });

    it("should switch off when clicked", () => {
        const button = Enzyme.shallow(<Button text="hello"/>);

        expect(button.find(".off").length).toBe(0);

        button.find("button").simulate("click");

        expect(button.find(".off").length).toBe(1);
    });
});
