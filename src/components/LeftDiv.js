
import React, { Component } from 'react';
import { Grid, Segment, Button, Form, Table, Input } from 'semantic-ui-react'
import UserList from './UserList'


const leftDiv = (props) => (
    <Grid.Column width={4}>
            <Segment basic>
                <UserList users={props.users} handleNewUserInputBoxChange={props.handleNewUserInputBoxChange} selectUserFromUserListHandler={props.selectUserFromUserListHandler} handleUserFormSubmit={props.handleUserFormSubmit} deactivateUser={props.deactivateUser}/>
            </Segment>
    </Grid.Column> )


export default leftDiv