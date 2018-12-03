// import React from 'react'
// import { Table, Input } from 'semantic-ui-react'

// const UserSearchHeader = () => (
//     <Table.Header>
//         <Table.Row>
      
//             <Table.HeaderCell><Input size= 'medium'icon='users' iconPosition='left' placeholder='Search users...' /></Table.HeaderCell>
//             <Table.HeaderCell textAlign='center'></Table.HeaderCell>
//         </Table.Row>
//     </Table.Header>





// )
// export default UserSearchHeader

import _ from 'lodash'

import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'


export default class SearchExampleStandard extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  source = () => this.props.users.map(user => ({
    title: user.email,
    description: user.firstname+" "+user.lastname,
    price: user.city
  }))


  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

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

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
            results={results}
            value={value}
            {...this.props}
          />
        </Grid.Column>

      </Grid>
    )
  }
}


