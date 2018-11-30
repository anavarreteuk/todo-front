import React from 'react'
import TaskItem from './TaskItem'
import { Table} from 'semantic-ui-react'
import TaskListHeader from './TaskListHeader'
import TableFooter from './TableFooter'


const TaskList = (props) => (
  <Table celled selectable> 
    <TaskListHeader />
    <Table.Body>
  {props.selectedUser.map(user => (user.tasks.map(task => <TaskItem key={task.id} task = {task}/>)))}
    </Table.Body >
    <Table.Footer fullWidth>
    <TableFooter />
    </Table.Footer>

  </Table>
)
export default TaskList

