
import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const [progress, setProgress] = useState(0)
  const pageSize = 6;

  return (
    <Router>
    <div>
      <Navbar/>
      <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
      />
        <Routes>
        <Route path="/" element={<News apiKey={apiKey} country="in" setProgress={setProgress} key="general" pageSize={pageSize} category="general"/>}/>
        <Route path="/business" element={<News apiKey={apiKey} country="in" setProgress={setProgress} key="business" pageSize={pageSize} category="business"/>}/>
        <Route path="/entertainment" element={<News apiKey={apiKey} country="in" setProgress={setProgress} key="entertainment" pageSize={pageSize} category="entertainment"/>}/>
        <Route path="/health" element={<News apiKey={apiKey} country="in" setProgress={setProgress} key="health" pageSize={pageSize} category="health"/>}/>
        <Route path="/science" element={<News apiKey={apiKey} country="in" setProgress={setProgress} key="science" pageSize={pageSize} category="science"/>}/>
        <Route path="/sports" element={<News apiKey={apiKey} country="in" setProgress={setProgress} key="sports" pageSize={pageSize} category="sports"/>}/>
        <Route path="/technology" element={<News apiKey={apiKey} country="in" setProgress={setProgress} key="technology" pageSize={pageSize} category="technology"/>}/>
        </Routes>
    </div>
    </Router>
  )  
}

export default App;