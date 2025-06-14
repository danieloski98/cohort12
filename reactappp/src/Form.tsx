import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

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
    const intialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values: { email: string, password: string }, { setSubmitting }: Record<string, any>) => {
        console.log("Form values:", values);
        setSubmitting(false);
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
