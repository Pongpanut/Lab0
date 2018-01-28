import createStore from 'redux-zero'
import { applyMiddleware } from 'redux-zero/middleware'
import { connect } from 'redux-zero/devtools'

const initialState = {
  device: {
    locationRequest: {}
  },
  user: {
    registered: true,
    anywhereBalance: 5564,
    inStoreBalance: 7286
  },
  onboarding: {
    signIn: {},
    verify: {}
  },
  nearby: {
    merchantsRequest: {}
  },
  wallet: {
    merchantsRequest: {},
    merchantRequest: {}
  },
  instore: {
    offerRequest: {},
    offer: {},
  },
  anywherePanel: {
    showAnywherePanel: true
  },
}

const middlewares = connect ? applyMiddleware(connect(initialState)): []

export default createStore(initialState, middlewares)
