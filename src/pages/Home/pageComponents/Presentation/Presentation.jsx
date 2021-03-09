import './presentation.css'
import {useInView} from 'react-intersection-observer'
import { useEffect, useState } from 'react'

export function AboutMe(){
    const [text, setText] = useState("")
    const [ref, inView] = useInView({
        threshold: 0.6
    })

    let index = 0
    let completText = "sMotivated = true"
    let onWrite;

    function random(min, max){
        return Math.floor(Math.random() * (max - min) + min)
    }

    function play(){
        setText(completText.slice(0, index))

        index++

        if(index > completText.length){
            clearInterval(onWrite)
            return false;
        }

        clearInterval(onWrite)
        onWrite = setInterval(play, random(50,300))
    }

    useEffect(() => {
        if(inView){
            onWrite = setInterval(play, 300)
        }
    }, [inView])

    return(
        <div className="left" ref={ref}>
            <div className="leftContent">
                <p>{'<AboutMe'}</p>
                <span className="arguments">
                    <p>firstName = "Lucas"</p>
                    <p>age = 19</p>
                    <p>passion = "javascript"</p>
                    <div>
                        <p>i{text}</p>
                        <div className="blink"></div>
                    </div>
                </span>
                <p>{'/>'}</p>
            </div>
        </div>
    )
}

export function Presentation(){

        return(
            <div className="section presentation">
                <div className="presentationContent">
                    <AboutMe />
                    <div className="right">
                        <div className="rightContent">
                            <h1>Salut !</h1>
                            <p>Comme écrit ci-dessus, moi c'est Lucas je suis actuellement en 2ème année dans un bachelor Développement Web à l'IIM, je suis un jeune homme 
                                passionné par la programmation, notamment le Javascript. Je préfère le backend mais je reste tout de même polyvalent 
                                en maîtrisant certaines technologies frontend. Je suis également très intéressé par les outils devops (Docker, Kubernetes, GCP...) 
                                dans l'espoir de bien les maîtriser un jour pour être le plus polyvalent possible !
                            </p>
                        </div>
                        <div className="rightLine"></div>
                    </div>
                </div>
            </div>  
        ) 
}