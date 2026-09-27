import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [mode, setMode] = useState<boolean>(false)
    const [studentName, setStudentNmae] = useState<string>("Your Name is a student ")
    const [isStudent, setIsStudent] = useState<boolean>(true)

    function updateMode(event: React.ChangeEvent<HTMLInputElement>){
        setMode(event.target.checked)
    }

    function updateStudentName(event: React.ChangeEvent<HTMLInputElement>){
        setStudentNmae(event.target.value)
    }

    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>){
        setIsStudent(event.target.checked)
    }

    return (
        <div>
            <div>Edit Mode</div>
            <Form.Switch
            type="checkbox"
            id="EditMode?"
            label="Toggle Edit Mode"
            checked={mode}
            onChange={updateMode}
            >

            </Form.Switch>
                {mode && <Form.Group controlId = "formStudentName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control value={studentName} onChange={updateStudentName} disabled={!mode}></Form.Control>
                </Form.Group>

                }

                {mode &&  <Form.Switch
                type="checkbox"
                id="is-student-check"
                label="Student?"
                checked={isStudent}
                onChange={updateIsStudent}
                disabled={!mode}
                ></Form.Switch>

                }
                <div>
                    {isStudent ?  `${studentName} is  a student.`: `${studentName} is not a student.`}
                </div>
        </div>
    );
}
