
import { querySlotByCodeConfig } from '../services/news';

export default {
  namespace: 'news',
  state: {
    newsList: [],
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
  effects: {
    *querySlotByCodeConfig(action, { call, put }) {  // eslint-disable-line
      console.log('111');
      // const data = yield call(querySlotByCodeConfig, action.payload);
      // console.log('data ->', data);

      yield put({
        type: 'save',
        payload: {
          newsList: [1, 2, 3, 4, 5, 6],
        },
      });
    },
  },

};
