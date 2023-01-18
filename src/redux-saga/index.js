import { call, put, takeEvery } from 'redux-saga/effects'

const apiUrl = `'https://63bdda61e348cb076204aebb.mockapi.io/api/v1/employee-data`;
function getApi() {
  return fetch(apiUrl, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  }).then(response => response.json())
    .catch((error) => {throw error})
}

function* fetchEmployees(action) {
   try {
      const employees = yield call(getApi);
      yield put({type: 'GET_EMPLOYEES_SUCCESS', employees: employees});
   } catch (e) {
      yield put({type: 'GET_EMPLOYEES_FAILED', message: e.message});
   }
}

function* employeeSaga() {
   yield takeEvery('GET_EMPLOYEES_REQUESTED', fetchEmployees);
}

export default employeeSaga;