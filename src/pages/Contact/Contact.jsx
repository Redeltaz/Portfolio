import './contact.css'
import {useInView} from 'react-intersection-observer'
import { useEffect, useState } from 'react'

function Title(props){
    const [width, setWidth] = useState({width: '0'})
    const [visible, setVisible] = useState(props.isVisible)

    useEffect(() => {
        if(!visible){
            setWidth({width: '100%'})
        }
    }, [visible])

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

function Button(props){
    return(
        <a href="./CV_Lucas_Campistron.pdf" target="_blank">
            <div className="button">
                <p>CV</p>
            </div>
        </a>
    )
}

export function Contact(props){
    const [style, setStyle] = useState({transform: 'translateX(-150px)', opacity: '0'})
    const [isVisible, setIsVisible] = useState(false)

    const [ref, inView] = useInView({
        threshold: 1
    })

    useEffect(() => {
        if(!inView){
            setIsVisible(true)
            setStyle({transform: 'translateX(0px)', opacity: '1'})
        }
    }, [inView])

    return (
        <div className="contact">
            <div className="content" rel={ref} style={style}>
                <Title isVisible={isVisible} />
                <div className="link">
                    <Single img="linkedin" content="Lucas Campistron" link="https://www.linkedin.com/in/lucas-campistron-9660891a1/" />
                    <Single img="gmail" content="lucascampistron95@gmail.com" />
                    <Single img="facebook" content="Lucas Campistron" link="https://www.facebook.com/profile.php?id=100004554795469" />
                </div>
                <Button />
            </div>
        </div>
    )
}