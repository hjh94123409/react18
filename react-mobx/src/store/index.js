import React from 'react'
import CounterStore from './counter.Store'
import ListStore from './list.Store'
import TaskStore from './task.Store'

class RootStore {
    constructor() {
        this.listStore = new ListStore()
        this.counterStore = new CounterStore()
        this.taskStore = new TaskStore()
    }
}

const rootStore = new RootStore()

const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export default useStore
