export default class ApiResource {
  constructor(client, path) {
    this.client = client
    this.path = path
  }

  processIndexResponse = body => {
    const ts = Date.now()
    const data = body.data || []

    return {
      data: data.map(entity => this.processEntity(entity, ts)),
      meta: body.meta,
      ts
    }
  }

  processEntityResponse = body => {
    if (Array.isArray(body.data)) {
      return this.processIndexResponse(body)
    }

    const ts = Date.now()

    return {
      data: this.processEntity(body.data, ts),
      meta: body.meta,
      ts
    }
  }

  processEntity(entity, ts) {
    if (entity) {
      entity = this.deserialize(entity),
      entity && (entity._ts = ts)
    }
    return entity
  }

  query(params, options) {
    return this.send(this.path, 'GET', { params, ...options })
      .then(this.processIndexResponse)
  }

  find(id, params, options) {
    return this.sendEntity(id, 'GET', { params, ...options })
      .then(this.processEntityResponse)
  }

  create(data, options) {
    return this.send(this.path, 'POST', {
      data: this.serialize(data),
      ...options 
    })
      .then(this.processEntityResponse)
  }

  patch(id, data, options) {
    return this.sendEntity(id, 'PATCH', {
      data: this.serialize(data),
      ...options 
    })
      .then(this.processEntityResponse)
  }

  update(id, data, options) {
    return this.sendEntity(id, 'PUT', {
      data: this.serialize(data),
      ...options 
    })
      .then(this.processEntityResponse)
  }

  save(id, data, options) {
    if (id != null && typeof id == 'object') {
      options = data
      data = id
      id = null
    }

    if (id == null) {
      return this.create(data, options)
    } else {
      return this.patch(id, data, options)
    }
  }

  delete(id, options) {
    return this.sendEntity(id, 'DELETE', options)
  }

  sendEntity(id, method, options) {
    return this.send(`${this.path}/${id}`, method, options)
  }

  send(path, method, options) {
    return this.client.send(path, method, options)
  }

  deserialize(data) {
    return data
  }

  serialize(entity) {
    return entity
  }
}
