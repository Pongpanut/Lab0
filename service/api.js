import moment from 'moment'
import { Platform } from 'react-native'
import Config from 'react-native-config'
import DeviceInfo from 'react-native-device-info'
import ApiClient from '@lib/api/ApiClient'

let endpoint = Config.API_URL

if (__DEV__) {
  if (DeviceInfo.isEmulator()) {
    endpoint = Platform.select({
      android: Config.API_URL,
      ios: Config.API_URL
    })
  } else {
    endpoint = Config.API_PROXY_URL
  }
}

const api = new ApiClient({ endpoint })

api.resource('users')

export default api

// Utils

function deserializeMerchant({ customers = [], ...rest }) {
  return {
    ...rest,
    customer: customers[0]
  }
}
