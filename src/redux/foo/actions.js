import { PUSH_FOO } from './actionType';

let count = 0;

function pushFoo() {
  count += 1;
  return {
    type: PUSH_FOO,
    payload: `This is the pushFoo Function ${count}`,
  };
}

export default pushFoo;
