
import React, { Component } from 'react';
import { Grid, Segment, Button, Form } from 'semantic-ui-react'
import UserList from './UserList'


class leftDiv extends Component {

    render() {
        return (
            <Grid.Column padded width={4}>
                <Segment basic>
                    <Form onSubmit={this.props.handleSubmit}><Form.Field width={7}>
                        <label>New User:</label>
                        <input  onChange={this.props.handleChange} />
                    </Form.Field><Button type='submit' > Submit</Button>
                    </Form>


                    <br>
                    </br>
                    <br>
                    </br>
                    <UserList users={this.props.users} selectUserHandler={this.props.selectUserHandler} />
                </Segment>
            </Grid.Column>
        )
    }
}

export default leftDiv