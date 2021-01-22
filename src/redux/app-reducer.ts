import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
    initialized: false
};
type AppType = {
    initialized: boolean
}

type ActionsType = initializedSuccessType;

const appReducer = (state: AppType = initialState, action: ActionsType) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
};

type initializedSuccessType = {
    type: 'INITIALIZED_SUCCESS'
}
export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(()=>{dispatch( initializedSuccess())});
};


export default appReducer;