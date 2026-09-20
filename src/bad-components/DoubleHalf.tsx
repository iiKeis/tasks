import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { dhValue, setDhValue } from "./DoubleHalfState";

interface DoubleHaveButtonProp {
    setDhValue: (newDhValue: number) => void;
    dhValue: number;
}

function Doubler({
    setDhValue,
    dhValue,
}: DoubleHaveButtonProp): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(2 * dhValue);
            }}
        >
            Double
        </Button>
    );
}

function Halver({
    setDhValue,
    dhValue,
}: DoubleHaveButtonProp): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setDhValue(0.5 * dhValue);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);

    return (
        <div>
            <div>
                <strong>Double Half</strong>
            </div>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler setDhValue={setDhValue} dhValue={dhValue}></Doubler>
            <Halver setDhValue={setDhValue} dhValue={dhValue}></Halver>
        </div>
    );
}
