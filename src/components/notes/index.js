import React, { useState, useEffect } from 'react';
import { push as Menu } from 'react-burger-menu';
import { Column } from 'rbx';
import List from './list';
import NoteService from '../../services/notes';
import Editor from './editor';

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
        } else {
            setNotes([]);
        }
    }

    const updateNote = async (oldNote, params) => {
        // eslint-disable-next-line no-underscore-dangle
        const updatedNote = await NoteService.update(oldNote._id, params);
        // eslint-disable-next-line no-underscore-dangle
        const index = notes.findIndex((n) => n._id === oldNote._id);
        console.log(index);
        notes[index] = updatedNote.data;
        setNotes([...notes]);
        setCurrentNote(updatedNote.data);
    };

    const createNote = async () => {
        await NoteService.create();
        fetchNotes();
    };

    const deleteNote = async (note) => {
        // eslint-disable-next-line no-underscore-dangle
        await NoteService.delete(note._id);
        fetchNotes();
    };

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
                        createNote={createNote}
                        current_note={currentNote}
                        deleteNote={deleteNote}
                    />
                </Menu>

                <Column size={12} className="notes-editor" id="notes-editor">
                    <Editor note={currentNote} updateNote={updateNote} />
                </Column>
            </div>
        </>
    );
};

export default Notes;
