import React from 'react';
import './App.css';
import MainHeader from './components/youtube_header/MainHeader';
import SideBarAndMainWrapper from './components/youtube_mainComponent/main_component/SideBarAndMainWrapper';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <SideBarAndMainWrapper />
    </div>
  );
}

export default App;
