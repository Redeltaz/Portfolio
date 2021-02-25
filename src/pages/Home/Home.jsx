import {Component} from 'react'
import {Header} from './pageComponents/Header/Header'
import {Skills} from './pageComponents/Skills/Skills'
import {Presentation} from './pageComponents/Presentation/Presentation'
import './home.css'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            isHeader: true,
            isPresentation: false,
            isSkills: false,
        }
    }

    render (){
        return <div style={{ backgroundImage: 'url(./images/background.jpg)' }} className="home">
            <Header visibility={this.state.isHeader} />
            <Presentation visibility={this.state.isPresentation} />
            <Skills visibility={this.state.isSkills} />
        </div>
    }
}