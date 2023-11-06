import axios from 'axios';

export const GET_LOGIN_FETCHING = 'GET_LOGIN_FETCHING';
export const GET_LOGIN_RESOLVED = 'GET_LOGIN_RESOLVED';
export const GET_LOGIN_REJECTED = 'GET_LOGIN_REJECTED';

export const getLogin = (token) => {
    return async (dispatch) => {
        dispatch({ type: GET_LOGIN_FETCHING });
        try {
            const result = await axios.post('http://localhost:3001/api/v1/user/profile',
                token,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            dispatch({ type: GET_LOGIN_RESOLVED, payload: result.data.body });
        } 
        catch (error) {
            dispatch({ type: GET_LOGIN_REJECTED });
            console.log(error);
        }
    }
}