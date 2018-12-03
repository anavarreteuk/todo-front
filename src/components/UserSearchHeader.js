import _ from 'lodash'
import React, { Component } from 'react'
import { Search, Grid, Table, Button } from 'semantic-ui-react'


export default class UserSearchHeader extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  source = () => this.props.allusers.map(user => ({
    title: user.firstname+" "+user.lastname,
    //image:`https://st2.depositphotos.com/5394392/12427/v/950/depositphotos_124271988-stock-illustration-user-icon-human-person-sign.jpg`,
    description: user.email,
    price: user.city
  }))


  findUserByEmail = () => this.state.value

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.description })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = result => re.test(result.description)

      this.setState({
        isLoading: false,
        results: _.filter(this.source(), isMatch),
      })
    }, 300)
  }
   
    findUserObj = () => {
        let value = this.state.value
        return this.props.allusers.find(user =>user.email === value)
    }
    
 
      
  render() {
    const { isLoading, value, results } = this.state

    return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>
            <Grid>
              <Grid.Column width={16}>
                <Search size= 'medium' icon='users' placeholder='Search users...'
                  loading={isLoading}
                  onResultSelect={this.handleResultSelect}
                  onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                  results={results}
                  value={value}
                  {...this.props}
                />
              </Grid.Column>

            </Grid>
        </Table.HeaderCell>
        <Table.HeaderCell>
            <Button onClick={() => this.props.addUserToGroup(this.findUserObj(this.state.value))} floated='right' size='mini'>
                +
            </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    )
  }
}


