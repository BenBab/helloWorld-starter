import React, {Component} from 'react';
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'

class Header extends Component {

    render(){
        const { pathname } = this.props.history.location
        return (
            <ToolBar>
                <Title>Hello world</Title>
                <NavigationItems>
                    <NavItem to="/" activepath={pathname}>home <Icon className="fas fa-home"/></NavItem>
                    <NavItem to="/users" activepath={pathname}>test </NavItem>
                    
                </NavigationItems>
            </ToolBar>
        );
    }
} 

export default (withRouter(Header));

const Title = styled.h2`
    margin: 20px 10px;
`;

const Icon = styled.i`
    margin: 0 5px;
`;

const ToolBar = styled.header`
    display: flex;
    justify-content: space-between;
    background: linear-gradient(45deg, #455AB4, transparent);
    box-shadow: 0px 1px 15px grey;
    padding: 0 15px;
`

const NavigationItems = styled.div`
    display: flex;
    padding: 10px 20px;
    position: relative;
`;

const NavItem = styled(NavLink)`
    min-width: 100px;
    background: ${props => props.activepath === props.to ? 'rgba(69, 90, 180, .3)' : 'transparent' };
    border: 0;
    margin: 0 5px;
    padding: 0 10px;
    font-size: 1em;
    font-weight: bold;
    border-radius: 2px;
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;

    &:hover {
        background: rgba(69, 90, 180, .3);
        cursor: pointer;
        text-decoration: none;
    }
`;




