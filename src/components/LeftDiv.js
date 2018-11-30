
import React, { Component } from 'react';
import { Grid, Segment, Button, Form } from 'semantic-ui-react'
import UserList from './UserList'
import NewUserInputBox from './NewUserInputBox';



const leftDiv = (props) => (
    <Grid.Column width={4}>
             <Segment basic>
                <Form onSubmit={props.handleSubmit}><Form.Field width={7}>
                        <label>New User:</label>
                        <input  onChange={props.handleChange} />
                    </Form.Field><Button type='submit' > Submit</Button>
                    </Form>
            </Segment>
            <Segment basic>
                <UserList users={props.users} selectUserHandler={props.selectUserHandler}/>
            </Segment>
    </Grid.Column> )


export default leftDiv