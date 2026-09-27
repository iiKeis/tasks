import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    //colors state
    const [color, setColors] = useState<string>("");
    const myColors: string[] = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "pink",
        "teal",
    ];

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColors(event.target.value);
    }

    return (
        <div>
            <div>Change Color</div>
            <div>
                {myColors.map((c) => (
                    <Form.Check
                        style={{ backgroundColor: c }}
                        inline
                        key={c}
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={c}
                        label={c}
                        value={c}
                        checked={color === c}
                    />
                ))}
                <div>
                    <span style={{ backgroundColor: color }}>
                        {" "}
                        The current color is: {color}
                    </span>
                </div>

                <div>
                    <strong>Colored Box</strong>
                </div>
                <span>Box: {color}</span>

                <div
                    data-testid="colored-box"
                    style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: color,
                        display: "inline-block",
                        verticalAlign: "bottom",
                        marginLeft: "5px",
                    }}
                >
                    {color}
                </div>

                {/* <div>
                {color.map((c =>))}
            </div> */}

                {/* <div>Your current color is {color}</div>
            <div> Your color is <span style={{ backgroundColor: "red" }}>red background!</span></div> */}
            </div>
        </div>
    );
}
