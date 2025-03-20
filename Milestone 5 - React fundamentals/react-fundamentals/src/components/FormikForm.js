import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name must be at least 3 characters long')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
});

const FormikForm = () => {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Formik Form</h2>
            <Formik
                initialValues={{ name: '', email: '' }}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    alert(`Form submitted! Name: ${values.name}, Email: ${values.email}`);
                    setSubmitting(false);
                    resetForm();
                }}
            >
                {({ isSubmitting }) => (
                    <Form className="bg-gray-100 p-4 rounded-md shadow-md w-96 mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-left font-medium">Name:</label>
                            <Field
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-left font-medium">Email:</label>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default FormikForm;
