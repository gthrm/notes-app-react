import React from 'react'
import Note from './Note.js'

import Masonry from 'react-masonry-component'

import './NotesGrid.less';

const NotesGrid = React.createClass({
    render() {
        const masonryOptions = {
            itemSelector: '.Note',
            columnWidth: 250,
            gutter: 10,
            isFitWidth: true
        }
        return (
            <Masonry
                className="NotesGrid"
                options={masonryOptions}
            >
                {
                    this.props.notes.map(note =>
                        <Note
                            key={note.id}
                            title={note.title}
                            onDelete={this.props.onDelete.bind(null, note)}
                            color={note.color}
                        >
                            {note.text}
                        </Note>
                    )
                }
            </Masonry>
        )
    }
})

export default NotesGrid