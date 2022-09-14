import { useAuth } from "hooks";
import { useDispatch} from "react-redux";
import { authOperations } from "redux/auth";
import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { UserText } from "./UserMenu.styled";

export default function UserMenu() {
    const dispatch = useDispatch();
    const { user } = useAuth();
    
    return (
        <div>
            <UserText>Welcome, {user.name}</UserText>

            <Button type="button"
                onClick={() => dispatch(authOperations.logOut())}
                variant="contained"
                endIcon={<LogoutIcon />}>
                LogOut
            </Button>

        </div>
    );
};