import { useState } from "react";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import { authOperations } from "redux/auth"; 
import { TextField, Button } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import { Container } from "@mui/system";
import BoxSx from "components/Box/Box";
import { Form, InputsList, Input } from "components/FormStyle/FormStyle.styled";


export default function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
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
        dispatch(authOperations.logIn({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (

        <Container>
            
            <Helmet>
                <title>Login Page</title>
            </Helmet>

            <BoxSx>
            
                <Form onSubmit={handleSubmit} autoComplete='off'>

                    <InputsList>
                        <Input>
                            <TextField variant="outlined" label="Email" type="email" name='email' value={email} onChange={handleChange} />
                        </Input>
                        <Input>
                            <TextField variant="outlined" label="Password" type="password" name='password' value={password} onChange={handleChange} />
                        </Input>
                    </InputsList>
              
                    <Button type="submit" variant="contained" startIcon={<LoginIcon />}>
                        LogIn
                    </Button>

                </Form>
            </BoxSx>
        </Container>

    );
};