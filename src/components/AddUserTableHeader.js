import React from 'react'
import { Table, Button, Icon, Input,Form } from 'semantic-ui-react'

class AddUserTableHeader extends React.Component {
    render() {
        return (
    <Table.Header>
    <Table.Row>
            <Table.HeaderCell colSpan='16'>
            <Form onSubmit={this.props.handleUserFormSubmit}>
                <Form.Group widths='equal'>
                    <Form.Field onChange={event => this.props.handleNewUserEmailBoxChange(event)}
                        id='form-input-control-email'
                        control={Input}
                        placeholder='email'
                    />
                      <Form.Field onChange={event => this.props.handleNewUserFirstNameBoxChange(event)}
                        id='form-input-control-first-name'
                        control={Input}
                        placeholder='first name'
                    />
                       <Form.Field onChange={event => this.props.handleNewUserLastNameBoxChange(event)}
                        id='form-input-control-last-name'
                        control={Input}
                        placeholder='last name'
                    />
                         <Form.Field onChange={event => this.props.handleNewUserCityBoxChange(event)}
                        id='form-input-control-city'
                        control={Input}
                        placeholder='city'
                    />
                       <Form.Field onChange={event => this.props.handleNewUserCountryBoxChange(event)}
                        id='form-input-control-last-country'
                        control={Input}
                        placeholder='country'
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