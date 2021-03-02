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
                    <p>fullName = "Lucas.C"</p>
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
                            <p>Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit. Ut lobortis ornare metus, at pulvinar mi mollis quis. Mauris 
                            aliquet vehicula dolor, at iaculis ligula pellentesque eget. Quisque cursus mauris 
                            eget metus dignissim tristique. Ut ut libero et neque elementum ultrices nec sed turpis. 
                            Cras elementum, purus sit amet dictum interdum, dolor nibh dapibus velit, at blandit quam 
                            lorem vel lacus. Ut accumsan vitae eros ut porttitor</p>
                        </div>
                        <div className="rightLine"></div>
                    </div>
                </div>
            </div>  
        ) 
}