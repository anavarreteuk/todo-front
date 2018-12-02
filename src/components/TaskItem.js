import React from 'react'
import { Table, Image , Button} from 'semantic-ui-react'

const taskItem = (props) => (
    < Table.Row >
        <Table.Cell>{props.task.date}</Table.Cell>
        <Table.Cell>{props.task.title}</Table.Cell>    
        <Table.Cell>{props.task.location}</Table.Cell>   
        <Table.Cell>{props.task.time}</Table.Cell> 
        <Table.Cell  textAlign='center'><Image  style={{'fontSize':15}} avatar src={props.task.beforeImage}/></Table.Cell> 
        <Table.Cell  textAlign='center'><Image  style={{'fontSize':15}} avatar src={props.task.afterImage}/></Table.Cell>
        <Table.Cell>{props.task.progress}</Table.Cell>  
        <Table.Cell textAlign='center'> 
            <Button onClick={() => props.deactivateTask(props.task)} size='mini'>
                X
            </Button>
            </Table.Cell>  
     </Table.Row >)


export default taskItem

    
      