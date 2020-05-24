import { USER_CONT, USER_REPORT, USER_INFO, USER_LOGIN, USER_ACC} from '../constants';

export function updateMap(o) {
    return {
        type: USER_CONT,
        payload: o
    }
}

export function updateMapRepo(x) {
    return{
        type: USER_REPORT,
        payload: x
    }
}

export function updateUserInfo(a){
    return {
        type: USER_INFO,
        payload: a
    }
}

export function currentUser(a) {
    return {
        type: USER_LOGIN,
        payload: a
    }
}