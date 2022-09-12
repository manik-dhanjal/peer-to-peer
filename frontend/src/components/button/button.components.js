import React from 'react'
import styled from 'styled-components'
import {COLORS, TYPES} from '../../constans/theme.constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Button = ({title,type=TYPES.PRIMARY,onClick,icon=null}) => {
  return (
    <ButtonStyles onClick={onClick} type={type}>
        {
            icon &&
            <FontAwesomeIcon icon={icon} className="btn-icon"/>
        }
        {title}
    </ButtonStyles>
  )
}

export default Button

const ButtonStyles = styled.button`
    background:${
        ({type}) => type=== TYPES.PRIMARY ?  COLORS.BLUE+"30":  COLORS.BLACK
    };
    border:none;
    color:${
        ({type}) => type ===  TYPES.PRIMARY ?  COLORS.BLUE :  COLORS.WHITE
    };
    font-size:1em;
    padding:0.6rem 1rem;
    border-radius:0.7rem;
    min-width:9rem;
    transition:0.2s ease;
    cursor:pointer;
    .btn-icon{
        margin-right:0.5rem;
        font-size:1.1em;
    }
    font-weight:600;
    &:hover{
        background:${
            ({type}) => type=== TYPES.PRIMARY ?  COLORS.BLUE+"50":  COLORS.BLACK+"f0"
        };
    }
` 