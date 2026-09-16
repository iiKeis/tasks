import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function StartQuiz(): void {
        setProgress(true);
        setAttempt(attempt - 1);
    }

    function stopQuiz(): void {
        setProgress(false);
    }

    function addOneAttempt(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            <Button onClick={stopQuiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button onClick={addOneAttempt} disabled={progress}>
                Mulligan
            </Button>
            <Button onClick={StartQuiz} disabled={progress || attempt === 0}>
                Start Quiz
            </Button>
            <p>Attempts left are: {attempt}</p>
        </div>
    );
}
