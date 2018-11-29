import React from 'react'
import { Image, List } from 'semantic-ui-react'

const taskItem = (props) => (
<List.Item>
    <Image avatar src='https://cdn0.iconfinder.com/data/icons/tiny-icons-1/100/tiny-11-512.png' />
        <List.Content>
        <List.Header>
            {props.task.date}
            {props.task.title}
            {props.task.location}
            {props.task.time}
            {props.task.progress}
        </List.Header>
    </List.Content>
</List.Item>)


export default taskItem