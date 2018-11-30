import React from 'react'
import TaskItem from './TaskItem'
import { Table} from 'semantic-ui-react'
import TaskListHeader from './TaskListHeader'
import AddTaskTableHeader from './AddTaskTableHeader'


const TaskList = (props) => (
  <Table celled selectable> 
    <AddTaskTableHeader/>
    <TaskListHeader />
    <Table.Body>
  {props.selectedUser.map(user => (user.tasks.map(task => <TaskItem key={task.id} task = {task}/>)))}
    </Table.Body >
  </Table>
)
export default TaskList

