import EventEmitter from 'event-emitter'
import { camelizeKeys, decamelizeKeys } from 'humps'
import qs from 'qs'
import ApiResource from './ApiResource'

function addQueryString(url, params) {
  if (params) {
    const query = qs.stringify(decamelizeKeys(params))
    if (query != '') {
      return url + `?${query}`
    }
  }

  return url
}

function handleNetworkError(error) {
  error = new Error(error.message)
  error.name = 'NetworkError'
  error.status = 0
  throw error
}

function handleResponse(response) {
  return response.json()
    .then(body => {
      body = camelizeKeys(body)

      if (!response.ok) {
        const meta = body.meta || {}
        const error = new Error(meta.errorMessage || response.statusText)
        error.name = 'ServerError'
        error.status = meta.statusCode || response.status
        error.errorCode = meta.errorCode
        // TODO: Resolve validation errors
        error.errors = body.errors
        throw error
      }

      return body
    })
}

export default class ApiClient {
  constructor({ endpoint = '', token }) {
    this.endpoint = endpoint
    this.token = token
  }

  resource(name, props = {}) {
    const resource = new ApiResource(this, name)
    Object.assign(resource, props)
    this[name] = resource
    return resource
  }

  send(path, method, { params, data } = {}) {
    // const url = addQueryString(`${this.endpoint}/${path}`, params)
    const url = 'https://lab0api.herokuapp.com/api/member/verifyUser'
    const headers = {
      'Accept': 'application/json, text/plain, */*'
    }
    let body

    if (this.token) {
      headers['X-Auth-Token'] = this.token
    }

    if (data) {
      headers['Content-Type'] = 'application/json'
      body = JSON.stringify(decamelizeKeys(data))
    }

    return fetch(url, {
      method,
      headers,
      body
    })
      .catch(handleNetworkError)
      .then(handleResponse)
      .catch(error => {
        error.request = { path, method, params, data }
        this.emit('error', error)
        throw error
      })
  }
}

EventEmitter(ApiClient.prototype)
