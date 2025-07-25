import { useState } from 'react';
import Greeting from './Greeting';
import RenderHtml from './html-jsx/RenderHtml';
import PropsStateDemo from './props-state/PropsStateDemo';
import StyledBox from './css-demo/StyledBox';
import './App.css';

function App() {
  const [username, setUsername] = useState('Sujay');

  const toggleName = () => {
    setUsername(prev => prev === 'Sujay' ? 'React Dev' : 'Sujay');
  };

  return (
    <div className="app-container">
      <h1>Vite React Feature Demo</h1>
      <RenderHtml />
      <Greeting name={username} />
      <button onClick={toggleName}>Toggle Name</button>
      <PropsStateDemo />
      <StyledBox />
    </div>
  );
}

export default App;
