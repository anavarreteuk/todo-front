import React from 'react'
import { List } from 'semantic-ui-react'
import TaskItem from './TaskItem'

const TaskList = (props) => (
  <List animated verticalAlign='middle'>
    {props.selectedUser.map(user => (user.tasks.map(task => <TaskItem key={task.id} task = {task}/>)))}
  </List>
)
export default TaskList