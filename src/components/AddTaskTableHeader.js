import React from 'react'
import { Table, Button, Icon, Input,Form } from 'semantic-ui-react'
import Calendar from 'react-calendar'

const AddTaskTableHeader = (props) => (
<Table.Header>
<Table.Row>
        <Table.HeaderCell colSpan='12'>
        <Form onSubmit={props.handleTaskFormSubmit}>
            <Form.Group widths='equal'>
                        <Form.Field onClick={<Calendar />} onChange={event => props.handleNewDateBoxChange(event)}
                    id='form-input-control-first-name'
                    control={Input}
                    placeholder='Enter Date'>
                            
                </Form.Field>
                <Form.Field onChange={event => props.handleNewTaskBoxChange(event)}
                    id='form-input-control-last-name'
                    control={Input}
                    placeholder='Enter  Task Title'
                />
                   <Form.Field onChange={event => props.handleNewLocationBoxChange(event)}
                    id='form-input-control-last-name'
                    control={Input}
                    placeholder='Enter Location'
                />
                   <Form.Field onChange={event => props.handleNewTimeBoxChange(event)}
                    id='form-input-control-last-name'
                    control={Input}
                    placeholder='Enter Time'
                />
                     <Form.Field>
                        <Button floated='right' icon primary size='medium'>
                        <Icon name='plus' /> 
                        &nbsp;&nbsp;TASK
                        </Button>
                    </Form.Field>
            </Form.Group>
        </Form>
        </Table.HeaderCell>
</Table.Row>
</Table.Header>
)


export default AddTaskTableHeader 