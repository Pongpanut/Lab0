import createStore from 'redux-zero'
import { applyMiddleware } from 'redux-zero/middleware'
import { connect } from 'redux-zero/devtools'

const initialState = {

  user: {
    status: false
  },
}

const middlewares = connect ? applyMiddleware(connect(initialState)) : []

export default createStore(initialState, middlewares)
