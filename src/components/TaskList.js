import React from 'react'
import TaskItem from './TaskItem'
import { Table} from 'semantic-ui-react'
import TaskListHeader from './TaskListHeader'
import AddTaskTableHeader from './AddTaskTableHeader'


const TaskList = (props) => (
  <Table celled selectable> 
    <AddTaskTableHeader handleNewDateBoxChange={props.handleNewDateBoxChange}
    handleNewTaskBoxChange={props.handleNewTaskBoxChange}
    handleNewTimeBoxChange={props.handleNewTimeBoxChange}
    handleNewLocationBoxChange={props.handleNewLocationBoxChange}
    handleTaskFormSubmit={props.handleTaskFormSubmit}
    />
    <TaskListHeader />
    <Table.Body>
      {props.filterActiveTasksByUser()
        .map(task => 
          <TaskItem deactivateTask ={props.deactivateTask} key={task.id} task = {task}/>)}
    </Table.Body >
  </Table>
)
export default TaskList

