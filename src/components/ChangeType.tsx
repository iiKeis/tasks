import React, { useState } from "react";

import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );

    function switchCategoryQuestion(): void {
        const typeOfQuestion =
            question === "multiple_choice_question" ?
                "short_answer_question"
            :   "multiple_choice_question";
        setQuestion(typeOfQuestion);
    }

    return (
        <div>
            <Button onClick={switchCategoryQuestion}>Change Type</Button>
            {
                <p>
                    {question === "multiple_choice_question" ?
                        "Multiple Choice"
                    :   "Short Answer"}
                </p>
            }
        </div>
    );
}
