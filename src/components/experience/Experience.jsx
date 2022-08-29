import React from 'react'
import './experience.css'
import { MdVerified } from 'react-icons/md'

function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">


        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>

            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>NPM/YARN</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Svelte</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Node JS (Express)</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>C/C++</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Elastic Search</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Firebase</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Postgresql</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Redis</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__softskills">
          <h3>Soft Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Google Search</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Github</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Trello</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>English</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__UIUX">
          <h3>UI/UX Designer</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Adobe XD</h4>
                <small className='text-light'>Proficient</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>
            <article className='experience__details'>
              <MdVerified className='experience__details-icon' />
              <div>
                <h4>Illustrator</h4>
                <small className='text-light'>Knowledgeable</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience