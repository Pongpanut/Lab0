import { scopedActions } from '@lib/redux-zero'
import { api } from '@app/services'

export default scopedActions('user', ({ setState }) => ({
  async loadOffers(state, params) {
    setState({ offersRequest: { pending: true } })

    try {
      const { data: offers } = await api.offers.query({ perPage: 10, ...params })
      return { offersRequest: {}, offers }
    } catch (error) {
      return { offersRequest: { error } }
    }
  },

  async resolveOffers(state, offers) {
    setState({ resolveRequest: { pending: true } })

    try {
      await api.offers.create(offers)
      return { resolveRequest: { pending: false, success: true } }
    } catch (error) {
      return { resolveRequest: { pending: false, error } }
    }
  }
}))
