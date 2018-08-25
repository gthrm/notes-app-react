import React, {Component} from 'react'

import NoteEditor from './NoteEditor.js'
import NotesGrid from './NotesGrid.js'

import './App.less'

class App extends Component {

    handelNoteAdd(data) {
        console.log(data)
    }

    render() {
        return (
            <div className="App">
                <h2 className="App__header"> Notes app </h2>
                <NoteEditor  onNoteAdd={this.handelNoteAdd}  />
                <NotesGrid  />
            </div>
        )
    }
}

export default App