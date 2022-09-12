import React, {useState,useEffect} from 'react'
import {
    ErrorImageOverlay,
    ErrorImageContainer,
    ErrorImageText
  } from './error-boundary.styles';

const ErrorBoundry = ({children,error,info}) => {
  const [hasErrored, setHasErrored] = useState(false);

  useEffect(()=>{
    if(error) setHasErrored(true);
  },[error])

  if (hasErrored) {
    return (
      <ErrorImageOverlay>
        <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
        <ErrorImageText>Sorry this page is broken</ErrorImageText>
      </ErrorImageOverlay>
    );
  }
  return children;
}

export default ErrorBoundry