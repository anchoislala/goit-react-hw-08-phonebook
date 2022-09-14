import { AuthNavigation, Link } from "./AuthNav.styled";
import { Button } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';

export default function AuthNav() {
    return (
        <AuthNavigation>
            
            <Button variant="contained" startIcon={<HowToRegIcon />}>
                <Link to='/register'>Registration</Link>
            </Button>
            <Button variant="contained" startIcon={<LoginIcon />}>
                <Link to='/login'>Login</Link>
            </Button>

        </AuthNavigation>
    );
};