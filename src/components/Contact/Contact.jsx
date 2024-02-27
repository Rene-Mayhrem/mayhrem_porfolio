/* eslint-disable no-unused-vars */
import React from 'react';
import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <footer>
      <div>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul>
        <li>
          <img src={getImageUrl('contact/contactIcon.png')} alt="Email icon" />
          <a href="mailto:renecruz.0711@gmail.com">renecruz.0711@gmail.com</a>
        </li>
        <li>
          <img src={getImageUrl('contact/linkedinIcon.png')} alt="Linkedin icon" />
          <a href="mailto:renecruz.0711@gmail.com">René Cruz</a>
        </li>
        <li>
          <img src={getImageUrl('contact/githubIcon.png')} alt="Github icon" />
          <a href="mailto:renecruz.0711@gmail.com">Mayhrem-ctrl</a>
        </li>
      </ul>
    </footer>
  )
}

export default Contact
