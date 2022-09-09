import { useSelector } from "react-redux"
import { authSelectors } from "redux/auth"
import Navigation from "./Navigation"
import AuthNav from "./AuthNav"
import UserMenu from "./UserMenu/UserMenu"

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    );
};