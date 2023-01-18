import * as ta from '../types';

export const  getUsers=(employees)=> {
    return{
        type: ta.GET_USERS,
        payload: employees,
    }
}