import logo from './logo.svg';
import './App.css';
import VideoPlayer from './views/VideoPlayer';
import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={null}>
      <div className="App">
        <VideoPlayer />
      </div>
    </Suspense >
  );
}

export default App;
