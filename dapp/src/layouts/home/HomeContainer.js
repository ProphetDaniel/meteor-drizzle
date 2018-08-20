import Home from './Home'
import { drizzleConnect } from 'drizzle-react'
import PropTypes from 'prop-types'

import { callAddTodo } from '../todos/TodoAsyncActions';
import {setLoggedUser, unsetLoggedUser} from '../login/LoginActions';

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    drizzleStatus: state.drizzleStatus,
    todos: state.todos,
    user: state.user,
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchCallAddTodo: data => dispatch(callAddTodo(data)),
  dispatchSetLoggedUser: data => dispatch(setLoggedUser(data)),
  dispatchUnsetLoggedUser: data => dispatch(unsetLoggedUser()),
});

Home.contextTypes = {
  drizzle: PropTypes.object
}

const HomeContainer = drizzleConnect(Home, mapStateToProps, mapDispatchToProps);

export default HomeContainer
