import React from 'react'
import { Grid, Segment, Button, Form} from 'semantic-ui-react'
import UserList from './UserList'

const leftDiv = (props) => (
<Grid.Column padded width={4}>
        <Segment basic>
            <Form ><Form.Field width={7}>
                <label>New User:</label>
                <input />
            </Form.Field><Button type='submit'>Submit</Button>
            </Form>
            <br>
            </br>
            <br>
            </br>
            <UserList users={props.users} selectUserHandler={props.selectUserHandler}/>
        </Segment>
</Grid.Column> )

export default leftDiv