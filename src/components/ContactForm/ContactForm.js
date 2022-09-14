import { Formik } from 'formik';
import * as yup from 'yup';
import { Label, InfoInput, InfoForm, ErrorInfo } from "./ContactForm.styled";
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import BoxSx from "components/Box/Box";

const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
})

const initialValues = {
    name: '',
    number: '',
}

const ContactForm = ({ onSubmit }) => {

    const handleSubmit = (values, { resetForm }) => {

        onSubmit(values);
        resetForm();
    };

    return (
        <BoxSx>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                <InfoForm autoComplete="off">

                    <Label htmlFor='name'>Name
                        <InfoInput type="text" name="name" />
                        <ErrorInfo name="name" component='div' />
                    </Label>

                    <Label htmlFor='number'>Number
                        <InfoInput type="tel" name="number" />
                        <ErrorInfo name="number" component='div' />
                    </Label>

                    <Button type="submit" variant="contained" endIcon={<PersonAddAlt1Icon />}>
                        Add contact
                    </Button>
                    
                </InfoForm>
            </Formik>
        </BoxSx>
    );
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;