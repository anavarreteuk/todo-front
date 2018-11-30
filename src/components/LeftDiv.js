import React from 'react'
import { Grid, Segment} from 'semantic-ui-react'
import UserList from './UserList'
import NewUserInputBox from './NewUserInputBox';


const leftDiv = (props) => (
    <Grid.Column width={4}>
             <Segment basic>
                <NewUserInputBox/>
            </Segment>
            <Segment basic>
                <UserList users={props.users} selectUserHandler={props.selectUserHandler}/>
            </Segment>
    </Grid.Column> )

export default leftDiv