import React, { useState, useEffect } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Column } from 'rbx';
import List from './list';
import NoteService from '../../services/notes';

const Notes = (props) => {
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState({
        title: '',
        body: '',
        id: '',
    });

    async function fetchNotes() {
        const response = await NoteService.index();
        if (response.data.length >= 1) {
            setNotes(response.data.reverse());
            setCurrentNote(response.data[0]);
        }
    }

    useEffect(() => {
        fetchNotes();
    }, []);

    const selectNote = (id) => {
        // eslint-disable-next-line no-underscore-dangle
        const noteFinded = notes.find((note) => note._id === id);
        setCurrentNote(noteFinded);
    };

    return (
        <>
            <div className="notes" id="notes">
                <Menu
                    pageWrapId="notes-editor"
                    isOpen={props.isOpen}
                    onStateChange={(state) => props.setIsOpen(state.isOpen)}
                    disableAutoFocus
                    outerContainerId="notes"
                    customBurgerIcon={false}
                    customCrossIcon={false}
                >
                    <List
                        notes={notes}
                        selectNote={selectNote}
                        current_note={currentNote}
                    />
                </Menu>

                <Column size={12} className="notes-editor" id="notes-editor">
                    Editor...
                </Column>
            </div>
        </>
    );
};

export default Notes;
