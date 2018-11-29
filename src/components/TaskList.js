import React from 'react'
import TaskItem from './TaskItem'
import { Table } from 'semantic-ui-react'
import TaskListHeader from './TaskListHeader'


const TaskList = (props) => (
  <Table singleLine> 
    <TaskListHeader />
    <Table.Body>
  {props.selectedUser.map(user => (user.tasks.map(task => <TaskItem key={task.id} task = {task}/>)))}
    </Table.Body >
  </Table>
)
export default TaskList