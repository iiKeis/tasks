import React, { useState } from "react";

export function Double(): React.JSX.Element {
    const [numbers, setNumbers] = useState<number[]>([2, 4, 8]);

    function addNumber(): void {
        setNumbers((currentNumbers) => [
            ...currentNumbers,
            currentNumbers.length + 1,
        ]);
    }

    function doubleNumbers(): void {
        setNumbers((currentNumbers) =>
            currentNumbers.map((number) => number * 2),
        );
    }

    return (
        <div>
            <h2>Number Practice</h2>

            <ul>
                {numbers.map((number, index) => (
                    <li key={index}>{number}</li>
                ))}
            </ul>

            <button onClick={addNumber}>Add Number</button>
            <button onClick={doubleNumbers}>Double Numbers</button>
        </div>
    );
}
