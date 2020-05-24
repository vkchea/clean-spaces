import {USER_ACC} from '../constants';

export function updateAcc(a) {
    return {
        type: USER_ACC,
        payload: a
    }
}