import {Component, useState, useEffect} from 'react'
import {useInView} from 'react-intersection-observer'
import './skills.css'

export function Skills(props){
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

    return (
        <div className="skills" ref={ref}>
            <p style={transform}>Test skills {inView.toString()}</p>
        </div>
    )
}