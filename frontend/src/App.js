import React, {useEffect, lazy, Suspense } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ErrorBoundry from './components/error-boundary/error-boundary.components';

import './App.css';
import Layout from './components/layout/layout.component';

const MeetingRoom = lazy(() => import('./pages/meeting-room.pages'));
const WaitingRoom = lazy(() => import('./pages/waiting-room.pages'));
const Homepage = lazy(() => import('./pages/home.pages'));


const App = ({ checkUserSession, currentUser}) => {
  return (
    <Layout>
      <ErrorBoundry>
        <Suspense>
          <Routes>
                <Route path="/" element={<Homepage/>}/>
                <Route path = '/waiting' element={<WaitingRoom/>}/>
                <Route path = '/meeting' element={<MeetingRoom/>}/>
          </Routes>
        </Suspense>
      </ErrorBoundry>
    </Layout>
  );
}

export default App;
