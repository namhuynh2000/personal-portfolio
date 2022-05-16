import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBookBookmark, BiMessageSquareDetail } from 'react-icons/bi'
import { SiCodesandbox } from 'react-icons/si'
import { MdOutlineEmojiFoodBeverage } from 'react-icons/md'
import { MdOutlineMusicNote } from 'react-icons/md'
import AUDIO from '../../assets/THERE-S NO ONE AT ALL.flac'

const audio = new Audio(AUDIO);

function Nav() {
  const [activeNav, setActiveNav] = React.useState('#');
  const [isMusic, setIsMusic] = React.useState(false);


  React.useEffect(() => {
    if (isMusic) {
      audio.play();
    }
    else audio.pause();
  }, [isMusic])

  // const onOffAudio = () => {
  //   if (isMusic) {
  //     audio.play();
  //   }
  //   else audio.pause();
  // }

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookBookmark /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><SiCodesandbox /></a>
      <a href="#Hobbies" onClick={() => setActiveNav('#Hobbies')} className={activeNav === '#Hobbies' ? 'active' : ''}><MdOutlineEmojiFoodBeverage /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
      <a onClick={() => setIsMusic(!isMusic)}><MdOutlineMusicNote style={isMusic ? { color: '#4db5ff' } : {}} /></a>
    </nav >
  )
}

export default Nav