import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {
  const [projects, setProjects] = useState([]);
  const [newP, setNewP] = useState({
    name: '',
    description: ''
  });

  useEffect(()=>{
    axios.get('https://webapi-back.herokuapp.com/projects')
    .then(res => {
      setProjects(res.data)
    })
    .catch(err => { console.log('error')})
  },[projects, setProjects])

  const handleChange = e => {
    setNewP({
      ...newP,
      [e.target.name] : e.target.value
    });
  }

  const handleSumbit = e => {
    e.preventDefault();
    axios.post("https://webapi-back.herokuapp.com/projects", newP )
    .then(res => {
      setNewP(res.data)
    })
  }

  return (
    <div className="App">
      {projects.map(project => (
        <>
        <h1>{`Project Name: ${project.name}`}</h1>
        <p>{project.description}</p>
        
        </>
      ))}
      <hr></hr>
      <h2>Add Project</h2>
      <form onSubmit={handleSumbit}>
        <input name="name" placeholder='name' onChange={handleChange} value={newP.name} />
        <input name="description" placeholder='description' onChange={handleChange} value={newP.description} />
        <button>Add project</button>
      </form>
    </div>
  );
}

export default App;
