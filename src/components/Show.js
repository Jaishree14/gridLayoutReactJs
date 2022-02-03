import * as React from "react";
import {Show, SimpleShowLayout, TextInput, DateInput } from 'react-admin';
import RichTextInput from 'ra-input-rich-text';

const ShowPostButton = (props) => {
    return (
        <Show {...props}>
        <SimpleShowLayout>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <RichTextInput source="body" />
            <DateInput label="Publication date" source="publishedAt" defaultValue={new Date()} />
    
        </SimpleShowLayout>
    </Show>
    )
}
    

export default ShowPostButton
