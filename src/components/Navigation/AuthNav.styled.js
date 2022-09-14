import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AuthNavigation = styled.div`
    display: flex;
    align-items: center;
`;

export const Link = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: white;
    font-weight: 500;

    &.active {
    color: yellow;
    }
`;

