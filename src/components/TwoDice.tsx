import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [die1, setDie1] = useState<number>(1);
    const [die2, setDie2] = useState<number>(6);

    function rollLeft(): void {
        const rollDie1 = d6();
        setDie1(rollDie1);
    }

    function rollRight(): void {
        const rollDie2 = d6();
        setDie2(rollDie2);
    }

    return (
        <div>
            <span data-testid="left-die">{die1}</span>
            <Button onClick={rollLeft}>Roll Left</Button>
            {die1 === 1 && die2 === 1 && <p>Lose</p>}
            {die1 !== 1 && <p></p>}
            {die1 !== 1 && die2 === die1 && <p>Win</p>}
            <span data-testid="right-die">{die2}</span>
            <Button onClick={rollRight}>Roll Right</Button>
            Two Dice
        </div>
    );
}
