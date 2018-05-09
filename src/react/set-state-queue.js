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
}

function flush(){
    
}