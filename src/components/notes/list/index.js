/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Column, Tag, Title, List } from 'rbx';
import Moment from 'moment';

function ListNotes(props) {
    return (
        <>
            <Column.Group breakpoint="mobile">
                <Column size={6} offset={1}>
                    <Title size={6}>{props.notes.length} Notes</Title>
                </Column>
            </Column.Group>
            <List className="notes-list">
                {props.notes.map((item, key) => (
                    <List.Item
                        // eslint-disable-next-line react/no-array-index-key
                        key={key}
                        onClick={() => props.selectNote(item._id)}
                        active={item._id === props.current_note._id}
                    >
                        <Title size={6}>
                            {item.title
                                .replace(/(<([^>]+)>)/gi, '')
                                .substring(0, 15)}
                        </Title>
                        <Title size={6} subtitle spaced={false}>
                            {item.body
                                .replace(/(<([^>]+)>)/gi, '')
                                .substring(0, 30)}
                        </Title>

                        <Tag color="dark">
                            {Moment(item.created_at).format('DD/MM')}
                        </Tag>
                    </List.Item>
                ))}
            </List>
        </>
    );
}

export default ListNotes;
