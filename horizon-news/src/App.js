import './App.css';

import React, { Component, useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {

  

  const [progress, setProgress] = useState(0)


  const apiKey = process.env.REACT_APP_NEWS_API_KEY





    
    return (
      <div>

        <Router>

          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={progress}
            // progress = {10}
            onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} key="home" pageSize={12} apiKey={apiKey} category="general" country="us" />} />
            <Route exact path='/general' element={<News setProgress={setProgress} key="general" pageSize={12} apiKey={apiKey} category="general" country="us" />} />
            <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={12} apiKey={apiKey} category="business" country="us" />} />
            <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={12} apiKey={apiKey} category="entertainment" country="us" />} />
            <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={12} apiKey={apiKey} category="health" country="us" />} />
            <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={12} apiKey={apiKey} category="science" country="us" />} />
            <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={12} apiKey={apiKey} category="technology" country="us" />} />
            <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={12} apiKey={apiKey} category="sports" country="us" />} />
          </Routes>

        </Router>

      </div>
    )
}

export default App

