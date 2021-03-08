import './skills.css'
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
            <img src={`./images/logos/${props.logoName}.svg`} alt={props.logoAlt} style={logoStyle} />
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
                    <Logo logoName='react' logoAlt="logo react" name="React"/>
                    <Logo logoName='node' logoAlt="logo node" name="NodeJS"/>
                    <Logo logoName='symfony' logoAlt="logo symfony" name="Symfony"/>
                </div>
            </div>

            <div className="secondSkillsFull">
                <h1>Compétences Secondaires</h1>
                <div className="secondSkills">
                    <Logo logoName='angular' logoAlt="logo angular" name="Angular"/>
                    <Logo logoName='laravel' logoAlt="logo laravel" name="Laravel"/>
                    <Logo logoName='vue' logoAlt="logo vue" name="Vue.js"/>
                    <br />
                    <Logo logoName='linux' logoAlt="logo linux" name="Linux"/>
                    <Logo logoName='sass' logoAlt="logo sass" name="Sass"/>
                    <Logo logoName='mongodb' logoAlt="logo mongodatabase" name="MongoDB"/>
                </div>
            </div>
        </div>
    )
}