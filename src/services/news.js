import axios from 'axios';

export function querySlotByCodeConfig() {

  const querySlotByCodeConfigApi = {
    method: 'GET',
    url: '/monkeyApi/ad/slot/query_slot_by_code?adSlotCode=mo9.libra.news',
    headers: {
      'Client-Id': 503,
    }
  }
  return axios(querySlotByCodeConfigApi)
}
