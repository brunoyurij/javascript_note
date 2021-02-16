import React from 'react';

import HeaderLogged from '../../components/header_logged';
import Notes from '../../components/notes';
import '../../styles/notes.scss';

const NotesScreen = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <HeaderLogged isOpen={isOpen} setIsOpen={setIsOpen} />
            <Notes isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default NotesScreen;
