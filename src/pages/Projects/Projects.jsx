import ProjectsData from './allProjects.json'
import {useState} from 'react'
import './projects.css'

export function SingleProject(props){
    const [isClicked, setIsClicked] = useState(false)
    const [maxSizeStyle, setMaxSizeStyle] = useState({display: 'none', opacity: 0, transform: 'translateY(-50px)'})
    const logos = props.logos.map((logo) => {
        return <img src={`./images/logos/${logo}.svg`} alt={logo} />
    })
    const all = document.querySelectorAll('.minSize')

    function addSize(){
        if(!isClicked){
            setIsClicked(true)
            let all = document.querySelectorAll('.minSize')
            all.forEach(elem => {
                elem.style.display = "none"
                requestAnimationFrame(() => {
                    elem.style.opacity = "0"
                })
            })
            setMaxSizeStyle({display: 'block', opacity: 0, transform: 'translateY(-50px)'})
            requestAnimationFrame(() => {
                setMaxSizeStyle({display: 'block', opacity: 1, transform: 'translateY(0px)'})
            })
        }
    }

    function removeSize(){
        setIsClicked(false)
        all.forEach(elem => {
            elem.style.display = "block"
            requestAnimationFrame(() => {
                elem.style.opacity = "1"
            })
        })
        setMaxSizeStyle({display: 'block', opacity: 1})
        requestAnimationFrame(() => {
            setMaxSizeStyle({display: 'none', opacity: 1})
        })
    }

    return(
        <div className="project">
            <div className="minSize" onClick={addSize}>
                <h3>{props.name}</h3>
                <div className="logos">
                    {logos}
                </div>
            </div>
            <div className="maxSize" style={maxSizeStyle}>
                <div className="top">
                    <h1>{props.name}</h1>
                    <a href={props.projectLink} target="_blank" rel="noreferrer"><img src='./images/logos/github.svg' alt="logo github"/></a>
                </div>
                <p className="description">{props.description}</p>
                <div className="logoContent">
                    <p>Compétences développées :</p>
                    <div className="logos">
                        {logos}
                    </div>
                </div>
                <p onClick={removeSize} className="close">Réduire</p>
            </div>
        </div>
    )
}

export function Projects(props){

    const listProjects = ProjectsData.map((project) =>
        <SingleProject 
            key = {project.name}
            name = {project.name}
            description = {project.description}
            logos = {project.logos}
            projectLink = {project.github}
        />
    );

    return (
        <div className="projects">
            <div className="allProjects">
                {listProjects}
                <div className="minSize more">
                    <h3>A venir...</h3>
                </div>
            </div>
        </div>
    )
}