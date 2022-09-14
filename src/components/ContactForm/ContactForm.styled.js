import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const Label = styled.label`
    display: flex;
    align-items: center;
    font-size: 30px;
    margin-bottom: 10px;
    justify-content: space-between;
`;

export const InfoInput = styled(Field)`
    margin-left: 20px;
    font-size: 25px;
    padding: 5px 5px;
    border: 1px solid rgba(33, 33, 33, 0.2);
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    outline: none;

    &:focus {
    border-color: #2196f3;
    transition-property: border-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
`;

export const InfoForm = styled(Form)`
    display: grid;
`;

export const ErrorInfo = styled(ErrorMessage)`
    margin-left: 10px;
    font-size: 15px;
    color: red;
`;