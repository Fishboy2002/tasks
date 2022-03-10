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
                    name="colors"
                    id="pick-color"
                    label={<span style={{ backgroundColor: val }}>{val}</span>}
                    value={val}
                    checked={color === val}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setColor(e.target.value)
                    }
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
