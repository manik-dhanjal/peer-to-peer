import React from 'react'
import styled from "styled-components"
import Button from '../button/button.components'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { COLORS, TYPES } from '../../constans/theme.constants';
import { Link } from 'react-router-dom';
import Container from '../container/container.componets';

const Layout = ({children}) => {
  return (
    <>
        <Header>
            <Container>
                <div className='' id="logo">
                    <Link to="/">
                        P2P
                    </Link>
                </div>
                <nav>
                    <ul className='nav-list'>
                        <li className='nav-list-item'>
                            <Link to="#">
                                Features
                            </Link >
                        </li>
                        <li className='nav-list-item'>
                            <Link to="#">
                                About us
                            </Link>
                        </li>
                        <li className='nav-list-item'>
                            <Link to="#">
                                Contact us
                            </Link>
                        </li>
                        <li className='nav-list-item'>
                            <Button
                                title="Log In"
                                onClick={()=>console.log("clicked")}
                            />
                        </li>
                        <li className='nav-list-item'>
                            <Button
                                title="Sign Up"
                                onClick={()=>console.log("clicked")}
                                type={TYPES.SECONDARY}
                            />
                        </li>
                    </ul>
                </nav>
            </Container>
        </Header>
        <Main>
           {children}
        </Main>
        <Footer>
            {/* footer */}
        </Footer>
    </>
  )
}

export default Layout

const Header = styled.header`
    &>.container{
        height:60px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        #logo>a{
            font-size:1.5rem;
            text-decoration:none;
            color:${COLORS.BLACK};
            font-weight:600;
        }
        .nav-list{
            list-style-type:none;
            display:flex;
            align-items:center; 
        }
        .nav-list-item{
            margin-left:2rem;
            &>a{
                padding:0.2rem 0.5rem;
                color:${COLORS.BLACK};
                text-decoration:none;
            }
        }  
    }
`
const Footer = styled.footer`

`

const Main = styled.main`

`