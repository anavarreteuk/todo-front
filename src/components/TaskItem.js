import React from 'react'
import { Table, Image, Button, Header, Modal, Icon } from 'semantic-ui-react'

export default class TaskItem extends React.Component {

    state = { modal1Open: false,
    modal2Open: false }

    handle1Open = () => this.setState({ modal1Open: true })

    handle1Close = () => this.setState({ modal1Open: false })


    handle2Open = () => this.setState({ modal2Open: true })

    handle2Close = () => this.setState({ modal2Open: false })

    render() {
        return (< Table.Row >
            <Table.Cell>{this.props.task.date}</Table.Cell>
            <Table.Cell>{this.props.task.title}</Table.Cell>
            <Table.Cell>{this.props.task.location}</Table.Cell>
            <Table.Cell>{this.props.task.time}</Table.Cell>
            <Table.Cell textAlign='center'>
                <Modal trigger={<Image onClick={this.handle1Open}
                    style={{ 'fontSize': 15 }} avatar src={this.props.task.beforeImage} />}
                    open={this.state.modal1Open}
                    onClose={this.handle1Close}>
                    <Modal.Header>Before Image</Modal.Header>
                    <Modal.Content image>
                        <Image centered wrapped size='large' src={this.props.task.beforeImage} />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handle1Close} inverted>
                            <Icon name='checkmark' /> Got it
                 </Button>
                    </Modal.Actions>
                </Modal>
                
                </Table.Cell>
            <Table.Cell textAlign='center'>
                <Modal trigger={<Image onClick={this.handle2Open}
                    style={{ 'fontSize': 15 }} avatar src={this.props.task.afterImage} />}
                    open={this.state.modal2Open}
                    onClose={this.handle2Close}>
                    <Modal.Header>After Image</Modal.Header>
                    <Modal.Content image>
                        <Image centered wrapped size='large' src={this.props.task.afterImage} />
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handle2Close} inverted>
                            <Icon name='checkmark' /> Got it
                 </Button>
                    </Modal.Actions>


                </Modal></Table.Cell>
            <Table.Cell textAlign='center'>
                <Button onClick={() => this.props.deactivateTask(this.props.task)} size='mini'>
                    X
            </Button>
            </Table.Cell>
        </Table.Row >)
    }



}




