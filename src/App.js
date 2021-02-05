import React from 'react'
import Header from 'Components/Header'
import Project from 'Components/Project'
import { projects } from 'Store'
import './App.css'

function App() {
  console.log('p', projects, projects.map)
  return (
    <div className="App">
      <a id='top-of-page'></a>
      <Header />
      { projects.map(project =>
          <Project
            key={project.icon}
            data={project}
          />
      )}
    </div>
  )
}

export default App
