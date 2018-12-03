
import React from 'react';
import { Grid, Segment} from 'semantic-ui-react'
import UserList from './UserList'


const leftDiv = (props) => (
    <Grid.Column width={4}>
            <Segment basic>
                <UserList allusers={props.allusers} users={props.users} selectUserFromUserListHandler={props.selectUserFromUserListHandler} handleUserFormSubmit={props.handleUserFormSubmit} removeUserFromGroup={props.removeUserFromGroup}/>
            </Segment>
    </Grid.Column> )


export default leftDiv