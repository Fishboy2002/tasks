import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "orange",
        "purple",
        "cyan",
        "magenta",
        "white",
        "black"
    ];

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((val: string) => (
                <Form.Check
                    key={val}
                    inline
                    type="radio"
                    name={val}
                    id="pick-color"
                    label={val}
                    style={{ backgroundColor: val }}
                    value={val}
                    checked={color === val}
                    onChange={() => setColor(val)}
                ></Form.Check>
            ))}
            <div>
                You have chosen{" "}
                <span
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
