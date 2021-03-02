import './skills.css'
import reactLogo from '../../../img/react.svg'
import nodeLogo from '../../../img/node.svg'
import symfonyLogo from '../../../img/symfony.svg'
import angularLogo from '../../../img/angular.svg'
import laravelLogo from '../../../img/laravel.svg'
import linuxLogo from '../../../img/linux.svg'
import sassLogo from '../../../img/sass.svg'
import mongodb from '../../../img/mongodb.svg'
import mysql from '../../../img/mysql.svg'
import { useState } from 'react'

export function Logo(props){
    const [logoStyle, setLogoStyle] = useState({opacity: '1'})
    const [textStyle, setTextStyle] = useState({opacity: '0'})

    function inHoverStyle() {
        setLogoStyle({opacity: '0'})
        setTextStyle({opacity: '1'})
    }

    function outHoverStyle() {
        setLogoStyle({opacity: '1'})
        setTextStyle({opacity: '0'})
    }

    return(
        <div className="logo" onMouseEnter={inHoverStyle} onMouseLeave={outHoverStyle}>
            <img src={props.logoName} alt={props.logoAlt} style={logoStyle} />
            <p style={textStyle}>{props.name}</p>
        </div>
    )
}

export function Skills(){

    return (
        <div className="section skills">
            <div className="mainSkillsFull">
                <h1>Compétences Principales</h1>
                <div className="mainSkills">
                    <Logo logoName={reactLogo} logoAlt="logo react" name="React"/>
                    <Logo logoName={nodeLogo} logoAlt="logo node" name="NodeJS"/>
                    <Logo logoName={symfonyLogo} logoAlt="logo symfony" name="Symfony"/>
                </div>
            </div>

            <div className="secondSkillsFull">
                <h1>Compétences Secondaires</h1>
                <div className="secondSkills">
                    <Logo logoName={angularLogo} logoAlt="logo angular" name="Angular"/>
                    <Logo logoName={laravelLogo} logoAlt="logo laravel" name="Laravel"/>
                    <Logo logoName={linuxLogo} logoAlt="logo linux" name="Linux"/>
                    <br />
                    <Logo logoName={sassLogo} logoAlt="logo sass" name="Sass"/>
                    <Logo logoName={mongodb} logoAlt="logo mongodatabase" name="MongoDB"/>
                    <Logo logoName={mysql} logoAlt="logo mysql" name="MySQL"/>
                </div>
            </div>
        </div>
    )
}