import React from 'react'
import { Grid, Segment} from 'semantic-ui-react'
import TaskList from './TaskList'

const rightDiv = (props) => (
<Grid.Column width={12}>
        <Segment basic>
                {props.selectedUser.length>0?
                <TaskList handleNewDateBoxChange={props.handleNewDateBoxChange}
                handleNewTaskBoxChange={props.handleNewTaskBoxChange}
                handleNewTimeBoxChange={props.handleNewTimeBoxChange}
                handleNewLocationBoxChange={props.handleNewLocationBoxChange}
                handleTaskFormSubmit={props.handleTaskFormSubmit}
                 selectedUser={props.selectedUser}
                 users={props.users}
                 filterActiveTasksByUser={props.filterActiveTasksByUser}
                 activeTasks={props.activeTasks}
                 deactivateTask={props.deactivateTask}
                 />
                : null }
        </Segment>
</Grid.Column> )

export default rightDiv

    // && props.users.map(user => user.tasks).map(user => console.log(user)) > 0