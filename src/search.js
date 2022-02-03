import * as React from "react";
import { render } from 'react-dom';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';

import { PostList, PostEdit, PostCreate, PostIcon } from './posts';



const SearchFilter = props => (
    <Filter {...props}>
      <TextInput label="Search" source="name" alwaysOn />
    </Filter>
  )
  
  export const SearchList = props => (
    <List {...props} filters={<SearchFilter />}>
      <Datagrid>
        <TextField source="name" />
        <TextField source="avgRating" />
        <TextField source="numReviews" />
        <EditButton label="" />
        <DeleteButton label="" redirect={false} />
      </Datagrid>
    </List>
  )