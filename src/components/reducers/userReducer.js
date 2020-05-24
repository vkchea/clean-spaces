import { USER_CONT, USER_REPORT, USER_INFO, USER_LOGIN } from '../constants';

const initialState = {
    userCont: [
    ],
    userRepo: [
    ],
    userInfo: {

    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CONT:
            return {
                userCont: state.userCont.push(action.payload),
                ...state,
            };
        case USER_REPORT:
            return {
                userRepo: state.userRepo.push(action.payload),
                ...state,
            }
        case USER_INFO:
            return{
                ...state,
                userInfo: action.payload
            }
        case USER_LOGIN:
            return{
                userCont: action.payload.userCont,
                userRepo: action.payload.userRepo,
                userInfo: action.payload.userInfo
            }
        default:
            return state;
    }
}
export default userReducer;