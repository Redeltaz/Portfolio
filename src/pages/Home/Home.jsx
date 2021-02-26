import {Component} from 'react'
import {Header} from './pageComponents/Header/Header'
import {Skills} from './pageComponents/Skills/Skills'
import {Presentation} from './pageComponents/Presentation/Presentation'
import ReactFullpage from '@fullpage/react-fullpage'
import './home.css'

export class Home extends Component {

    render (){
        return <ReactFullpage
        scrollingSpeed = {1500}
        verticalCentered = {false}
    
        render={({ state, fullpageApi }) => {
          return (
            <div className="home">
                <ReactFullpage.Wrapper>
                    <Header />
                    <Presentation />
                    <Skills />
                </ReactFullpage.Wrapper>
            </div>
          );
        }}
      />
    }
}