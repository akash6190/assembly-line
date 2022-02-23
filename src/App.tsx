import React from 'react';
import './App.css';
import { AssemblyLine } from './features/assembly/AssemblyLine';

function App() {
  return (
    <div>
      <AssemblyLine stages={['Idea', 'Development', 'Testing', 'Deployment']}/>  
    </div>
  );
}

export default App;
