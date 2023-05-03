import React from 'react';
import { Form } from 'react-bootstrap';

function MultiSelectInput({ label, options,value, onChange }) {
    const option = ['a', 'b', 'c']
    return (
        <Form.Group controlId="formMultiSelect">
            <Form.Label>{label}</Form.Label>
            <Form.Control
                as="select"
                multiple ={ true}
                value={value}
                onChange={onChange}
            >
                {options && options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </Form.Control>
        </Form.Group>
    );
}


export default MultiSelectInput;