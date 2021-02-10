import React, { useState } from 'react'
import Header from 'Components/Header'
import Project from 'Components/Project'
import Lightbox from 'Components/Lightbox'
import { projects } from 'Store'
import './App.css'

function App() {
  const [lightboxActive, setLightboxActive] = useState(false)
  const [activeProject, setActiveProject] = useState(null)
  const [imageNum, setImageNum] = useState(0)

  const toggleLightbox = () => setLightboxActive(!lightboxActive)

  return (
    <div className="App">
      <Lightbox
        lightboxActive={lightboxActive}
        toggleLightbox={toggleLightbox}
        activeProject={activeProject}
        imageNum={imageNum}
        setImageNum={setImageNum}
      />
      <Header />
      { projects.map(project =>
          <Project
            key={project.icon}
            data={project}
            toggleLightbox={toggleLightbox}
            setActiveProject={setActiveProject}
            setImageNum={setImageNum}
        />
      )}
    </div>
  )
}

export default App
