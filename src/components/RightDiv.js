import React from 'react'
import { Grid, Segment} from 'semantic-ui-react'
import TaskList from './TaskList'

const rightDiv = (props) => (

<Grid.Column width={12}>
        <Segment basic>
            <TaskList  selectedUser={props.selectedUser}/>
        </Segment>
</Grid.Column> )

export default rightDiv