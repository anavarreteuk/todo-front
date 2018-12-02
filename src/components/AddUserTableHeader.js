import React from 'react'
import { Table, Button, Icon, Input,Form } from 'semantic-ui-react'



class AddUserTableHeader extends React.Component {
    render() {
        return (
    <Table.Header>
    <Table.Row>
            <Table.HeaderCell colSpan='4'>
            <Form onSubmit={this.props.handleUserFormSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field onChange={event => this.props.handleNewUserInputBoxChange(event)}
                        id='form-input-control-last-name'
                        control={Input}
                        placeholder='Enter Name'
                    />
                        <Form.Field>
                            <Button floated='right' icon primary size='medium'>
                            <Icon name='plus' /> 
                            &nbsp;&nbsp;USER
                            </Button>
                        </Form.Field>
                </Form.Group>
            </Form>
            </Table.HeaderCell>
    </Table.Row>
    </Table.Header>
        )
    }
}

export default AddUserTableHeader 