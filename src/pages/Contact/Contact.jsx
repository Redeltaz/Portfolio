import './contact.css'
import { useEffect, useState } from 'react'

function Title(){
    const [width, setWidth] = useState({width: '0'})

    useEffect(() => {
        setWidth({width: '100%'})
    }, [])

    return(
        <div className="title">
            <h1>Contactez moi !</h1>
            <div className="titleLine" style={width}></div>
        </div>
    )
}

function Single(props){
    return(
        <div className="single">
            <img src={`./images/logos/${props.img}.svg`} alt={`${props.img} logo`} />
            { props.link ? <a href={props.link} target="_blank" rel="noreferrer">{props.content}</a> : <p>{props.content}</p> }
        </div>
    )
}

function Button(){
    return(
        <a href="./CV_Lucas_Campistron.pdf" target="_blank">
            <div className="button">
                <p>CV</p>
            </div>
        </a>
    )
}

export function Contact(){
    const [style, setStyle] = useState({transform: 'translateX(-150px)', opacity: '0'})
    
    useEffect(() => {
        setStyle({transform: 'translateX(0px)', opacity: '1'})
    }, [])

    return (
        <div className="contact">
            <div className="content" style={style}>
                <Title />
                <div className="link">
                    <Single img="linkedin" content="Lucas Campistron" link="https://www.linkedin.com/in/lucas-campistron-9660891a1/" />
                    <Single img="gmail" content="lucascampistron95@gmail.com" />
                    <Single img="facebook" content="Lucas Campistron" link="https://www.facebook.com/profile.php?id=100004554795469" />
                    <Single img="github" content="Redeltaz" link="https://github.com/Redeltaz" />
                </div>
                <Button />
            </div>
        </div>
    )
}