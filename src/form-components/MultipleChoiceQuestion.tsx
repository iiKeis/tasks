import React, { useState } from "react";
import { Form } from "react-bootstrap";


export function MultipleChoiceQuestion({options,expectedAnswer,}: {options: string[];expectedAnswer: string;}): React.JSX.Element {
    const [userAnswer, setUserAnswer] = useState<string>(options[0]);

    function updateUserAnswer(event: React.ChangeEvent<HTMLSelectElement>){
        setUserAnswer(event.target.value);
    }


    //What is the difference between having options and expected answer as parameters vs. object parameters
    //Know how to render with a map using forms
    return (
        <div>
            <Form.Group controlId="userOption">
                <Form.Label>What is your answer?</Form.Label>
                <Form.Select value = {userAnswer} onChange={updateUserAnswer}>
                    {options.map((opt: string, index: number) => <option value={opt} key={index}>{opt}</option>)}
                </Form.Select>
            </Form.Group>
            {userAnswer === expectedAnswer ? <p>✔️</p> : <p>❌</p>}
        </div>
    )







    // const [givenAnswer, setGivenAnswer] = useState<string>(options[0])

    // function updateGivenAnswer(event: React.ChangeEvent<HTMLSelectElement>){
    //     setGivenAnswer(event.target.value);
    // }


    // return (


    //     <div>
    //         <h3>Multiple Choice Question</h3>
    //         <div>
    //         {options.map((o) => (


    //         <Form.Group controlId = "userAnswer">
    //             <Form.Label>What color is the sky?</Form.Label>
    //             <Form.Select value = {givenAnswer} onChange = {updateGivenAnswer}>
    //                 <option value = {o}>Red</option>
    //                 <option value = {o}>Blue</option>
    //                 <option value = {o}>Brown</option>
    //             </Form.Select>
    //             </Form.Group>
    //             ))}
    //             </div>
    //             <div>
    //                 {givenAnswer} === {expectedAnswer} ? ✔️ : ❌
    //             </div>


    //     </div>
    // );
}
