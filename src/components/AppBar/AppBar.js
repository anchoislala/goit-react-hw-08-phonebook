import Navigation from "../Navigation/Navigation"
import AuthNav from "../Navigation/AuthNav"
import UserMenu from "../UserMenu/UserMenu"
import { useAuth } from "hooks"
import { Header } from "./AppBar.styled"


export default function AppBar() {
    const { isLoggedIn } = useAuth();

    return (
        <Header>

            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}

        </Header>
    );
};