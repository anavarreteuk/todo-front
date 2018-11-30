import React from 'react'
import { Grid, Segment} from 'semantic-ui-react'
import TaskList from './TaskList'

const rightDiv = (props) => (
<Grid.Column width={12}>
        <Segment basic>

                {props.selectedUser? 

                <TaskList selectedUser={props.selectedUser}/>
                : null }
        </Segment>
</Grid.Column> )

export default rightDiv

    // && props.users.map(user => user.tasks).map(user => console.log(user)) > 0