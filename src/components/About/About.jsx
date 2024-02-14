import React from 'react'
import { getImageUrl } from '../../utils'
import { styles } from '../About/About.module.css'

const About = () => {
  return (
    <section>
      <h2>About</h2>
      <div>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" />
      </div>
      <ul>
        <li>
          <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
          <div>
            <h3>Frontend developer</h3>
            <p>I am a frontend developer withy experience in building responsive and optimized sites</p>
          </div>
        </li>
        <li>
          <img src={getImageUrl("about/serverIcon.png")} alt="Cursor" />
          <div>
            <h3>Backend developer</h3>
            <p>I am a backend developer with experience developing fast and optimized backend systems and APIs</p>
          </div>
        </li>
        <li>
          <img src={getImageUrl("about/serverIcon.png")} alt="Cursor" />
          <div>
            <h3>UX/UX Designer</h3>
            <p>I have designed multiple landing pages and have systems as well</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default About
