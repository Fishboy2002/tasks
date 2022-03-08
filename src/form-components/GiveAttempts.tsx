import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [gain, setGain] = useState<number>(0);

    return (
        <div>
            <div>You currently have {attempts} attempts remaining</div>
            <Form.Group controlId="amountToGive">
                <Form.Label>Add Attempts</Form.Label>
                <Form.Control
                    type="number"
                    value={gain}
                    onChange={(event: ChangeEvent) =>
                        setGain(parseInt(event.target.value) || 0)
                    }
                />
            </Form.Group>
            <button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </button>
            <button onClick={() => setAttempts(attempts + gain)}>gain</button>
        </div>
    );
}
