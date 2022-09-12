import React from 'react'
import styled from 'styled-components'

const ContainerStyles = styled.div`
    max-width:1440px;
    padding: 0px 30px;
    margin:auto;
`
const Container = ({children}) => {
    return (
        <ContainerStyles className='container'>
            {children}
        </ContainerStyles>
    )
}
export default Container;