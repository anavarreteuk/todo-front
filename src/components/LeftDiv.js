import React from 'react'
import { Grid, Segment} from 'semantic-ui-react'
import UserList from './UserList'

const leftDiv = (props) => (
<Grid.Column padded width={4}>
        <Segment basic>
            <UserList users={props.users} selectUserHandler={props.selectUserHandler}/>
        </Segment>
</Grid.Column> )

export default leftDiv