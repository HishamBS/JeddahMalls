import React, { Component } from 'react'
import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';

export default class admin_app extends Component {
    render() {
        return (
        <Admin dataProvider={simpleRestProvider('http://localhost:3000')}>
            <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        </Admin>
        )
    }
}
