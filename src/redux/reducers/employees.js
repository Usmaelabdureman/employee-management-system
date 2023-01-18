export const SET_LOADING = "SET_LOADING"
export const GET_EMPLOYEES = "GET_EMPLOYEES"
export const GET_EMPLOYEES_REQUESTED = "GET_EMPLOYEES_REQUESTED"
export const CREATE_EMPLOYEE = "CREATE_EMPLOYEE"
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE"
export const DELETE_EMPLOYEE_REQUESTED = "DELETE_EMPLOYEE_REQUESTED"

const initialState = {
  employees: [],
}

export default function employees(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload
      }
    default:
      return state
  }
}