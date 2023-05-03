import React from 'react'
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

const InputField = ({ lable, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <>
      <div className="mb-4">
        <input className={`form-control ${meta.touched && meta.error && "is-invalid"}`}
          {...field}
          {...props}
          autoComplete="off"
        />
        <ErrorMessage component="div" name={field.name} className="error" style={{color:"red"}} />
      </div>
    </>
  )
}

export default InputField