import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { StaticImage, getSrc } from 'gatsby-plugin-image'
import { RiFacebookBoxFill } from '@react-icons/all-files/ri/RiFacebookBoxFill'
import { RiTwitterFill } from '@react-icons/all-files/ri/RiTwitterFill'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import { RiGithubFill } from '@react-icons/all-files/ri/RiGithubFill'
import ImageGallery from 'react-image-gallery';

import "react-image-gallery/styles/css/image-gallery.css";

import 'photoswipe/dist/photoswipe.css'
import emailjs from '@emailjs/browser';


const nailit = <StaticImage formats={['auto', 'webp']} src="../../static/assets/nailit.png" alt="Nail It" />
const monti = <StaticImage formats={['auto', 'webp']} src="../images/monti.png" alt="Monti" />
const montiboard = <StaticImage formats={['auto', 'webp']} src="../images/montiboard.png" alt="Monti Board" />
const td = <StaticImage formats={['auto', 'webp']} src="../images/td.jpeg" alt="TD" />

type MainProps = {
  onCloseArticle: () => void;
  setWrapperRef: React.RefObject<HTMLDivElement>;
  timeout: boolean;
  articleTimeout: boolean; // Add the articleTimeout property
  article: string; // Add the article property
};



const Main: React.FC<React.PropsWithChildren<MainProps>> = props => {

  const [isOpen, setIsOpen] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formEmailSent, setFormEmailSent] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedback(event.target.value);
    setFormEmailSent(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    sendFeedback(
      'template_qys2jci',
      'earlybirdtechnolgy@gmail.com',
      feedback,
      name,
      email,
      'user_LHdwCAnhHTt2WttBkFzDG'
    );
    setFormSubmitted(true);
    setFormEmailSent(true);
  };

  const sendFeedback = (templateId: string, receiverEmail: string, feedback: string, name: string, email: string, user: string) => {
    emailjs.send(
      'service_gkwyaa8',
      templateId,
      {
        receiverEmail,
        feedback,
        name,
        email
      },
      'vg0_23APxIslm-2sz'
    )
      .then(res => {
        setFormEmailSent(true);
      })
      .catch(err => console.error('Failed to send feedback. Error: ', err));
  };
//  .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, {
//   publicKey: 'YOUR_PUBLIC_KEY',
// })
  //vg0_23APxIslm-2sz
  
  const close = (
    <div
      className="close"
      onClick={() => {
        props.onCloseArticle()
      }}
    ></div>
  )

  

  return (
    <div ref={props.setWrapperRef} id="main" style={props.timeout ? { display: 'flex' } : { display: 'none' }}>
      <article
        id="intro"
        className={`${props.article === 'intro' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Intro</h2>
        {/* <span className="image main">
          <img src={pic01} alt="" />
        </span> */}
        <p>
        A result-oriented Information Technology professional company with 20+
        years of technology and work experience. Our background includes systems
        analysis, development, systems integration, project leadership, research
        and usage of innovative and emerging technologies, and directing/managing
        cross-department/organization systems development and project teams.
        </p>
        <p>
          Services include:
          <ul>
            <li>Strategic Planning/Thinking</li>
            <li>Systems / Application / Mobile Development</li>
            <li>Emerging Technology</li>
            <li>Service Oriented Architecture (SOA)</li>
          </ul>
          Specialties: Web and mobile application development, application integration, database design and development, and web services.
        </p>
        {close}
      </article>

      <article
          id="work"
          className={`${props.article === 'work' ? 'active' : ''} ${
            props.articleTimeout !== undefined ? props.articleTimeout ? 'timeout' : '' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>

          <div>
          <h3><a href="http://tirediscounters.com/">Tire Discounters</a></h3>
          <span className="image main">
            {td}
          </span>
          <p>
            Created web based internal tools that facilitated tracking:
            <ul>
              <li>Customer Statisfaction</li>
              <li>Repair Requests</li>
              <li>Internal Supply Ordering</li>
            </ul>
          </p>
          </div>

          <div>
          <h3><a href="http://pinegroveband.com/">Pinegrove</a></h3>
          <span className="image main">
           <ImageGallery
              showFullscreenButton={false}
              showPlayButton={false}
              items={[
              {original: "/assets/pinegrove.png", thumbnail: "/assets/pinegrove.png"},
              {original: "/assets/pgmain.png", thumbnail: "/assets/pgmain.png"},
              {original: "/assets/pgrecordings.png", thumbnail: "/assets/pgrecordings.png"},
              {original: "/assets/pgalbum.png", thumbnail: "/assets/pgalbum.png"}
              ]}
              renderLeftNav= {(onClick, disabled) => {
                return (
               
                    <button type="button" disabled={disabled}
                    onClick={onClick} className="image-gallery-icon image-gallery-left-nav" style={{boxShadow: 'none', width: 'unset'}} aria-label="Next Slide">
                      <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                      {/* <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg> */}
                      </button>
                    
                )
              }}
              renderRightNav= {(onClick, disabled) => {
                return (
               
                    <button type="button" disabled={disabled}
                    onClick={onClick} className="image-gallery-icon image-gallery-right-nav" style={{boxShadow: 'none', width: 'unset'}} aria-label="Next Slide">
                      {/* <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg> */}
                      <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                      </button>
                    
                )
              }}
            />
          </span>
          <p>
            Worked with the band to create a customized artist website that showcases their simple aesthetics. The site is easily updateable using a backend content management system.
          </p>
          </div>

          <div>
          <h3><a href="http://nailitapp.com/">Nail It Mobile App</a></h3>
          <span className="image main">
           {nailit}
          </span>
          <p>
            With a simple tap the Nailit app allows you to easily track all of your project communication, bids and estimates.  Best of all your team will now be able to see who else is working onyour project and easily communicate with them.  The Nailit app takes the secretarial work out of your job, allowing you to focus on value added activities.
          </p>
          <p>
            Built for people on-the-go that already use tools like Dropbox, email and texting to juggle bids over the phone. The Nail it App integrates all that into one, giving everybody on the project more time to do the work! 
            <span className="image main">
            <ImageGallery
              showFullscreenButton={false}
              showPlayButton={false}
              items={[
              {original: "/assets/nailitapp.png", thumbnail: "/assets/nailitapp.png"},
              {original: "/assets/nailit1.png", thumbnail: "/assets/nailit1.png"},
              {original: "/assets/nailit2.png", thumbnail: "/assets/nailit2.png"},
              {original: "/assets/nailit3.png", thumbnail: "/assets/nailit3.png"},
              {original: "/assets/nailit4.png", thumbnail: "/assets/nailit4.png"}
              ]}
              renderLeftNav= {(onClick, disabled) => {
                return (
               
                    <button type="button" disabled={disabled}
                    onClick={onClick} className="image-gallery-icon image-gallery-left-nav" style={{boxShadow: 'none', width: 'unset'}} aria-label="Next Slide">
                      <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                      {/* <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg> */}
                      </button>
                    
                )
              }}
              renderRightNav= {(onClick, disabled) => {
                return (
               
                    <button type="button" disabled={disabled}
                    onClick={onClick} className="image-gallery-icon image-gallery-right-nav" style={{boxShadow: 'none' , width: 'unset'}} aria-label="Next Slide">
                      {/* <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg> */}
                      <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" viewBox="6 0 12 24" fill="none" stroke="currentColor" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                      </button>
                    
                )
              }}
            />
          </span>
          </p>
          <p>Work done for DBMK, LLC.</p>
          </div>

          <div>
          <h3><a href="http://monti-inc.com/">Monti Inc</a></h3>
          <span className="image main">
            {monti} 
          </span>
          <p>
            Created a realtime order fulfillment board for Monti Inc - a Cincinnati based machining and fabrication company.
          </p>
          <p>
        
        <span className="image main">
            {montiboard}
          </span>
          </p>
          </div>

         {close}
      </article>

      <article
        id="about"
        className={`${props.article === 'about' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <h2 className="major">About</h2>
        {/* <span className="image main">
          <img src={profilePic} alt="" />
        </span> */}
        <p>
          Owned and operated by Matthew Hartman. Made in Batavia, Ohio.
        </p>
        <p>Technical expertise includes:
          <ul>
            <li>Front End and Mobile Development including Angular and React and React Native</li>
            <li>Gatsby.js</li>
            <li>Microsoft ASP.Net, C#, SQL Server, WCF, BizTalk</li>
            <li>Node.js</li>
            <li>MongoDB and Oracle Datase Administration</li>
            <li>SAML / Shibboleth Authentication</li>
            <li>Linux System Administration</li>
          </ul>
        </p>
        {close}
      </article>
      <article
        id="contact"
        className={`${props.article === 'contact' ? 'active' : ''} ${props.articleTimeout ? 'timeout' : ''}`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Contact</h2>
        {formEmailSent ? (<p>Thanks for reaching out!</p>) :
          <form className="feedback-form" onSubmit={handleSubmit}>
            <p>
              <label>Name</label>
              <input
                type="text"
                id="name"
                name="firstname"
                placeholder="Your name"
                className="text-input"
                onChange={(event) => setName(event.target.value)}
              />
            </p>
            <p>
              <label>Email</label>
              <input
                type="email"
                className="text-input"
                id="email"
                name="email"
                placeholder="Your email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </p>
            <p>
              <textarea
                className="text-input"
                id="feedback-entry"
                name="feedback-entry"
                onChange={handleChange}
                placeholder="Enter your feedback here"
                required
                value={feedback}
              />
            </p>
            <div className="btn-group">
              <input type="submit" value="Submit" className="btn btn--submit" />
            </div>
          </form>
        }

        <ul className="icons">
          <li>
            <a
              href="https://twitter.com/EngineericTech"
              className="icon fa-twitter"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <Link
              to="https://github.com/hartmamt"
              className="icon"
              rel="noopener noreferrer"
              target="_blank"
              area-label="Bibwoe"
            >
              <RiGithubFill
                alt="Github"
                style={{
                  fontSize: '2em',
                  color: 'gray',
                }}
              />
              <span className="label">GitHub</span>
            </Link>
          </li>
        </ul>
        {close}
      </article>

      
    </div>
  )
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string.isRequired,
  articleTimeout: PropTypes.bool.isRequired,
  onCloseArticle: PropTypes.func.isRequired,
  timeout: PropTypes.bool.isRequired,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
