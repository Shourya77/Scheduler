import React from 'react';
import { Formik } from 'formik';

export default function Form({
    children,
    initialValues,
    onSubmit,
    validateSchema,
}) {
    return (
        <Formik
        initialValues={initialValues}
        validateSchema={validateSchema}
        onSubmit={onSubmit}
        >
            {() => <React.Fragment>{children}</React.Fragment>}
        </Formik>
    );
}