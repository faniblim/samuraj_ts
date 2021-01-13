import {authAPI} from "../api/api";

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
                ...action.payload,
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
    isAuth: boolean
}

type setUserDataCType = {
    type: 'SET_USER_DATA'
    id: any
    email: any
    login: any
    isAuth: boolean
    payload: Datatype
}

const setAuthUserData = ( id: any,email: any,login: any,isAuth: boolean) =>
    ({type: SET_USER_DATA, payload:{id, email, login, isAuth}});

export const getAuthUserData = () => (dispatch: any) => {
    authAPI.me()
        .then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login,true));
            }
        });
}
export const login = (email:string, password:string, rememberMe:boolean) => (dispatch: any) => {
    authAPI.login(email, password, rememberMe).then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        }
    });
};

export const logout = () => (dispatch: any) => {
    authAPI.logout().then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    });
};


export default authReducer;