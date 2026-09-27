import React, { useState } from "react";
import { Form } from "react-bootstrap";

/*
You will need a state to represent the number of attempts the user has left, and another state to represent the number of attempts they are requesting.
The initial number of attempts left should be 3.
The number of attempts left should be visible.
There should be a numeric input box where the user can specify their requested number of attempts.
There should be two buttons, one labeled use that decreases the attempts by one and one labeled gain that increases the attempts by the amount in the input box.
If the user attempts to request an invalid amount (e.g., the empty string "") that cannot be parsed as an integer, then do not change their number of attempts.
When the user is out of attempts, the use button should be disabled
*/
export function GiveAttempts(): React.JSX.Element {
    //state 1
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [attemptsRequested, setAttemptsRequested] = useState<number>(0);

    return (
        <div>
            <div>Give Attempts</div>
            <div>Attemps left are: {attemptsLeft}</div>
            <Form.Group controlId="requested-attempts">
                <Form.Label>Request Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={(e) => {
                        setAttemptsRequested(parseInt(e.target.value) || 0);
                    }}
                />
            </Form.Group>

            <button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft - 1);
                }}
                disabled={attemptsLeft === 0}
            >
                use
            </button>

            <button
                onClick={() => {
                    setAttemptsLeft(attemptsLeft + attemptsRequested);
                }}
            >
                gain
            </button>
        </div>
    );
}
