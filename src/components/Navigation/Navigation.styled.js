import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`;

export const Link = styled(NavLink)`
    padding: 5px 10px;
    border-radius: 4px;
    text-decoration: none;
    color: white;
    font-weight: 500;

    &.active {
    color: yellow;
    }
`;

