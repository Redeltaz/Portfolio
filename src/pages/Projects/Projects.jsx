import ProjectsData from './allProjects.json'
import {useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import './projects.css'

export function SingleProject(props){
    const [isClicked, setIsClicked] = useState(false)
    const [maxSizeStyle, setMaxSizeStyle] = useState({display: 'none', opacity: 0, transform: 'scale(1)'})
    const [style, setStyle] = useState({opacity: '0', transform: 'translateY(-80px)'})
    const [lineStyle, setLineStyle] = useState({width: '0'})
    const logos = props.logos.map((logo) => {
        return <img src={`./images/logos/${logo}.svg`} alt={logo} />
    })
    const all = document.querySelectorAll('.minSize')

    useEffect(() => {
        setTimeout(() => {
            setStyle({opacity: '1', transform: 'translateY(0px)'})
        }, 600)
    }, [])

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
            setMaxSizeStyle({display: 'block', opacity: 0, transform: 'scale(0.9)'})
            requestAnimationFrame(() => {
                setMaxSizeStyle({display: 'block', opacity: 1, transform: 'scale(1)'})
                setLineStyle({width: '100%'})
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
        setLineStyle({width: '0'})
        requestAnimationFrame(() => {
            setMaxSizeStyle({display: 'none', opacity: 1})
        })
    }

    return(
        <div className="project" style={style}>
            <div className="minSize" onClick={addSize}>
                <h3>{props.name}</h3>
                <div className="logos">
                    {logos}
                </div>
            </div>
            <div className="maxSize" style={maxSizeStyle}>
                <div className="top">
                    <div className="maxTitle">
                        <h1>{props.name}</h1>
                        <div className="underline" style={lineStyle}></div>
                    </div>
                    <a href={props.projectLink} target="_blank" rel="noreferrer"><img src='./images/logos/github.svg' alt="logo github"/></a>
                </div>
                <p className="description">{props.description}</p>
                <div className="logoContent">
                    <p>Compétences développées :</p>
                    <div className="logos">
                        {logos}
                    </div>
                </div>
                <div onClick={removeSize} className="close"><p>Réduire</p></div>
            </div>
        </div>
    )
}

function More(){
    const [style, setStyle] = useState({opacity: '0', transform: 'translateY(-80px)'})

    useEffect(() => {
        setTimeout(() => {
            setStyle({opacity: '1', transform: 'translateY(0px)'})
        }, 2400)
    }, [])

    return(
        <div className="minSize more" style={style}>
            <h3>A venir...</h3>
        </div>
    )
}

export function Projects(){
    const [projectArray, setProjectArray] = useState([])
    let index = 0

    const listProjects = ProjectsData.map((project) =>
        <SingleProject 
            key = {project.name}
            name = {project.name}
            description = {project.description}
            logos = {project.logos}
            projectLink = {project.github}
        />
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setProjectArray(projectArray => [...projectArray, listProjects[index]])
            index++
            if(index >= listProjects.length){
                clearInterval(interval)
            }
        }, 300)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div className="projects">
            <div className="allProjects">
                {projectArray}
                <More />
            </div>
        </div>
    )
}