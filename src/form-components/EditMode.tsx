import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

export function EditMode(): JSX.Element {
    const [edit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);

    function updateEdit(event: ChangeEvent) {
        setEdit(event.target.checked);
    }
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode"
                label="Edit Mode"
                checked={edit}
                onChange={updateEdit}
            ></Form.Check>
            {edit ? (
                <div>
                    <Form.Group controlId="changeName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            value={name}
                            onChange={(event: ChangeEvent) =>
                                setName(event.target.value)
                            }
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Student?"
                        checked={student}
                        onChange={(event: ChangeEvent) =>
                            setStudent(event.target.checked)
                        }
                    ></Form.Check>
                </div>
            ) : (
                <div>
                    {name} is {student ? "" : "not"} a student
                </div>
            )}
            <h3>Edit Mode</h3>
        </div>
    );
}
