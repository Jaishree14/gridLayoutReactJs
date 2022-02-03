import React from 'react';
import { Admin, Resource, ShowButton } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";
import PostEdit from "./components/PostEdit";
import ShowPostButton from './components/Show';

function App() {
    return <Admin dataProvider={fakeDataProvider({
        "posts":[
            {
                "id":"1",
                "title":"Post1",
                "body": "This is post discription",
                "publishedAt":"01-02-2022"
            },
            {
                "id":"2",
                "title":"Post2",
                "body": "This is post discription",
                "publishedAt":"01-02-2022"
            },
            {
                "id":"3",
                "title":"Post3",
                "body": "This is post discription",
                "publishedAt":"01-02-2022"
            },
            {
                "id":"4",
                "title":"Post4",
                "body": "This is post discription",
                "publishedAt":"01-02-2022"
            }
        ]
    })}>
    <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={ShowPostButton}/>
</Admin>
}

//export default App; 
