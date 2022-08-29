import { observer } from 'mobx-react-lite'

// import useStore from './store'

import Todo from './Todo'

function App() {
    // const { counterStore } = useStore()
    return (
        <div className="App">
            <Todo />
        </div>
    )
}

export default observer(App)
