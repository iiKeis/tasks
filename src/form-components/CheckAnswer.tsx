import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    //handler needs to go INSIDE component
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <div>Check Answer</div>
            <Form.Group controlId="formAnswer">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                    type="string"
                    value={answer}
                    onChange={updateAnswer}
                />
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}

// //why does {____} go around the entire ternary operation?
