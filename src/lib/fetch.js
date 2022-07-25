import { api } from 'boot/axios'
import { Dialog } from 'quasar'

export const post = async (url, data, requestConfig, fetchOption) => {
  try {
    return (await api.post(url, data, requestConfig)).data
  } catch (error) {
    const message = error.isAxiosError
      ? error.response.data.message || error.response.data
      : error.message || error
    if (!fetchOption || !fetchOption.hideErrorDialog) {
      Dialog.create({
        title: 'Error',
        message,
      })
    }
    if (fetchOption) {
      if (fetchOption.errorCallback) fetchOption.errorCallback()
      if (fetchOption.needThrow) throw message
    }
  }
}
