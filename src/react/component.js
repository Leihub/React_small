import { renderComponent } from '../react-dom/diff'

class Component {
    constructor(props = {}){
        this.isReactComponent = true;

        this.state = {}
        this.props = props
    }
    setState(statechange){
        Object.assign(this.state,statechange)
        renderComponent(this)
    }
}

export default Component;