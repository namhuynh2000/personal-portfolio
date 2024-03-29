import React from 'react'
import { BsFacebook, BsGithub } from 'react-icons/bs'
import { FaHackerrank } from 'react-icons/fa'

function HeaderSocials() {
    return (
        <div className='header__socials'>
            <a href="https://github.com/namhuynh2000" rel="noreferrer" target="_blank"><BsGithub /></a>
            <a href="https://www.facebook.com/ruins.huynh/" rel="noreferrer" target="_blank"><BsFacebook /></a>
            <a href="https://www.hackerrank.com/hqnam_it" rel="noreferrer" target="_blank"><FaHackerrank /></a>
        </div>
    )
}

export default HeaderSocials