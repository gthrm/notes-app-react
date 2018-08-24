import React, {Component} from 'react'

import NoteEditor from './NoteEditor.js'
import NotesGrid from './NotesGrid.js'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2 className="App__header"> Notes app </h2>
                <NoteEditor onNoteAdd={this.handleNoteAdd} />
                <NotesGrid notes={this.state.notes} onNoteDeleted={this.handleNoteDeleted} />
            </div>
        )
    }
}

export default App