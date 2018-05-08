class Component {
    constructor(props = {}){
        this.state = {}
        this.props = props
    }
    setState(statechange){
        Object.assign(this.state,statechange)
        renderComponent(this)
    }
}

