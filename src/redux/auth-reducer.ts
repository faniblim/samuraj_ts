const SET_USER_DATA = "SET_USER_DATA";

type AuthType = {
    id: any
    email: any
    login: any
    isAuth: boolean
}

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
};

type ActionsType = setUserDataCType;

const authReducer = (state: AuthType = initialState, action: ActionsType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }
};

type Datatype = {
    id: number
    email: string
    login: string
}

type setUserDataCType = {
    type: 'SET_USER_DATA'
    data: Datatype
}

export const setAuthUserData = (data: Datatype) =>
    ({type: SET_USER_DATA, data});

export default authReducer;