/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useDetails from "./hooks/useDetails";
import React from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./utils/firebase";

// Validation schema using Yup
const validationSchema = Yup.object({
    email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});


function FormComponent() {
    const details = useDetails();
    console.log(details);
    const intialValues = {
        email: '',
        password: '',
    };

    React.useEffect(() => {
        console.log(details);
    }, [details])

    const handleSubmit = async (values: { email: string, password: string }, { setSubmitting }: Record<string, any>) => {
        try {
            setSubmitting(true);
            const response = await signInWithEmailAndPassword(auth, values.email, values.password);

            console.log(response);
            setSubmitting(false);
        } catch (error: any) {
            alert(error?.message || JSON.stringify(error))
        }
    };


    return (
        <Formik
            initialValues={intialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
            validateOnBlur
            validateOnChange
            validateOnMount
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" render={(message) => (
                            <p style={{ color: 'red' }}>{message}</p>
                        )} />
                    </div>

                    <div>
                        <label htmlFor="password">Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error" render={(message) => (
                            <p style={{ color: 'red' }}>{message}</p>
                        )} />
                    </div>

                    <button type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}

export default FormComponent
