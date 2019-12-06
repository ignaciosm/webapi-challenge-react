import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    axios.get('https://cors-anywhere.herokuapp.com/https://webapi-back.herokuapp.com/projects')
    .then(res => {
      setProjects(res.data)
    })
    .catch(err => { console.log('error')})
  },[])

  return (
    <div className="App">
      {projects.map(project => (
        <>
        <h1>{`Project Name: ${project.name}`}</h1>
        <p>{project.description}</p>
        </>
      ))}
    </div>
  );
}

export default App;
