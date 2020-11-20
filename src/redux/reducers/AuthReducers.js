const INITIAL_STATE = {
    username: '',
    isLogin: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, username: action.payload, isLogin: true}
        case 'LOGOUT':
            return INITIAL_STATE
        default:
            return state
    }
}