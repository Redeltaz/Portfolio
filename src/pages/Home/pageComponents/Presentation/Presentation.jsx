import {Component, useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'
import './presentation.css'

export function Presentation(props){
        const [transform, setTransform] = useState({transform: 'translateX(-200px)'})

        const [ref, inView] = useInView({
            threshold: 1
        })

        useEffect(() => {
            if(inView){
                setTransform({transform: 'translateX(0px)'})
            }else{
                setTransform({transform: 'translateX(-200px)'})
            }
        }, [inView])

        return(
            <div className="presentation" ref={ref}>
                <p style={transform}>Test présentation {inView.toString()}</p>
            </div>  
        ) 
}