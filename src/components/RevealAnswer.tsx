import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [answer, setAnswer] = useState<boolean>(false);

    function toggleRevealAnswer(): void {
        setAnswer(!answer);
    }

    return (
        <div>
            <Button onClick={toggleRevealAnswer}>Reveal Answer</Button>
            {answer && <p>42</p>}
        </div>
    );
}
