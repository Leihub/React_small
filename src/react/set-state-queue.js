import { renderComponent } from '../react-dom/diff'


let setStateQueue  = []
let renderQueue = []


function defer (fn){
    return Promise.resolve().then(fn)
}

export function enqueueSetState(statechange,component){
    if(setStateQueue.length === 0 ){
        defer(flush)
    }
    setStateQueue.push({
        statechange,
        component
    })

    if(!renderQueue.some(item => item === component)){
        renderQueue.push(component)
    }
}

function flush(){
    //清空队列
    let item ,component

    while (item == setStateQueue.shift()) {
        const {component,statechange} = item
        if(!component.preState){
            component.preState = Object.assign({},statechange)
        }

        if(typeof statechange === 'function'){
            Object.assign(component.state,statechange(component.preState,component.props))
        }else{
            Object.assign(component.state,statechange)
        }

        component.preState = component.state
    }

    while(component == renderQueue.shift()){
        renderComponent(component)
    }
}