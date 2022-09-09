import { NavLink } from "react-router-dom"; 

const Navigation = () => (
    <nav>
        <NavLink to='/' >
            Main
        </NavLink>

        <NavLink to='/contacts'>
            Contacts
        </NavLink>
    </nav>
);

export default Navigation;