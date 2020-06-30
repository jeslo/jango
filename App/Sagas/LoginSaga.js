import {put} from 'redux-saga/effects'
import Actions from '../Redux/LoginRedux'

const LOGIN_URL =
  'http://crmservice.rbcentre.com/api/CRMMobApp/AppUserLogin'
const REGISTER_URL =
  'http://crmservice.rbcentre.com/api/CRMMobApp/UserRegistration'
const VALIDATE_USER_URL =
  'http://crmservice.rbcentre.com/api/CRMMobApp/GetValidUser'
const PACKAGE_LIST_URL =
  'http://crmservice.rbcentre.com/api/CRMMobApp/GetPakagesByUser'
// const CHECK_IN_URL =
//   'http://crmservice.rbcentre.com/api/CRMMobApp/UserCheckInProcess'

export function * getLoginData ({params}) {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: params
  }
  const result = yield fetch(LOGIN_URL, postOptions)
    .then(resp => resp.json())
    .then(r => r)
    .catch(e => e)
  if (result.error) return yield put(Actions.getLoginDetailsFailure())
  yield put(Actions.getLoginDetailsSuccess(result))
  if (result.Result === 'successfully logined') {
    yield put(Actions.getValidUserReuest({phone: result.Result.phone}))
  }
}

export function * registerUser ({params}) {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: params
  }
  const result = yield fetch(REGISTER_URL, postOptions)
    .then(resp => resp.json())
    .then(r => r)
    .catch(e => e)
  if (result.error) return yield put(Actions.registerUserFailure())
  yield put(Actions.registerUserSuccess(result))
  console.tron.log('>>>>rsponse', result)
  //   if (result.error)
}

export function * validateUser ({params}) {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: params
  }
  const result = yield fetch(VALIDATE_USER_URL, postOptions)
    .then(resp => resp.json())
    .then(r => r)
    .catch(e => e)
  if (result.Result === 'success') yield put(Actions.getPackageListRequest())
  yield put(Actions.validateUserFailure(result))
}

export function * packageList ({params}) {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json'
    },
    body: params
  }
  const result = yield fetch(PACKAGE_LIST_URL, postOptions)
    .then(resp => resp.json())
    .then(r => r)
    .catch(e => e)
  if (result.Result === 'Success') yield put(Actions.getPackageListSuccess(result))
  yield put(Actions.getPackageListFailure(result))
}
