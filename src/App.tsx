import React,{useState} from 'react';
import './App.css';
import MainHeader from './components/youtube_header/MainHeader';
import SideBarAndMainWrapper from './components/youtube_mainComponent/main_component/SideBarAndMainWrapper';

function App() {
  const [open, setIsOpen] = useState(false)
  return (
    <div className="App">
      <MainHeader setIsOpen={setIsOpen} open={open} />
      <SideBarAndMainWrapper  open={open} />
    </div>
  );
}

export default App;
