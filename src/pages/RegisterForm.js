import { useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { authOperations } from "redux/auth";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import BoxSx from "components/Box/Box";
import { Form, InputsList, Input } from "components/FormStyle/FormStyle.styled";

export default function RegisterForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>

            <Helmet>
                <title>Register Page</title>
            </Helmet>
            
            <BoxSx>
                <Form onSubmit={handleSubmit} autoComplete='off'>
              
                    <InputsList>
                        <Input>
                            <TextField variant="outlined" label="Name" type='text' name='name' value={name} onChange={handleChange} />
                        </Input><Input>
                            <TextField variant="outlined" label="Email" type='email' name='email' value={email} onChange={handleChange} />
                        </Input><Input>
                            <TextField variant="outlined" label="Password" type='password' name='password' value={password} onChange={handleChange} />
                        </Input>
                    </InputsList>

                    <Button variant="contained" type="submit" startIcon={<HowToRegIcon />}>Register</Button>
                </Form>
            </BoxSx>
        </div>
    );
};