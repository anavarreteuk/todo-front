
import React, { Component } from 'react';
import { Grid, Segment, Button, Form, Table, Input } from 'semantic-ui-react'
import UserList from './UserList'


const leftDiv = (props) => (
    <Grid.Column width={4}>
            <Segment basic>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Input/>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <UserList users={props.users} selectUserHandler={props.selectUserHandler} deleteUserHandler={props.deleteUserHandler}/>
            </Segment>
    </Grid.Column> )


export default leftDiv