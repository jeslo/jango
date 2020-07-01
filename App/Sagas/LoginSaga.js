import {put} from 'redux-saga/effects'
import {NavigationActions} from 'react-navigation'
import Actions from '../Redux/LoginRedux'
import _ from 'lodash'

const LOGIN_URL = 'http://crmservice.rbcentre.com/api/CRMMobApp/AppUserLogin'
const REGISTER_URL =
  'http://crmservice.rbcentre.com/api/CRMMobApp/UserRegistration'
const VALIDATE_USER_URL =
  'http://crmservice.rbcentre.com/api/CRMMobApp/GetValidUser'
const PACKAGE_LIST_URL =
  'http://crmservice.rbcentre.com/api/CRMMobApp/GetPakagesByUser'
const CHECK_IN_URL =
  'http://crmservice.rbcentre.com/api/CRMMobApp/UserCheckInProcess'

export function * getLoginData ({params}) {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(params),
  }
  const result = yield fetch(LOGIN_URL, postOptions)
    .then(resp => resp.json())
    .then(r => r)
    .catch(e => console.tron.log('>>>>>>eeeee, e'))
  // console.warn('>>>', result)
  if (result.error) return yield put(Actions.getLoginDetailsFailure())
  yield put(Actions.getLoginDetailsSuccess(result))
  if (result.ResultMsg === 'successfully logined') {
    yield put(Actions.getValidUserRequest({phone: result.Result.phone}))
    yield put(NavigationActions.navigate({routeName: 'CheckinScreen'}))
  }
}

export function * registerUser ({params}) {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(params),
  }
  const result = yield fetch(REGISTER_URL, postOptions)
    .then(resp => resp.json())
    .then(r => r)
    .catch(e => e)
  if (result.error || _.get(result, 'result', '') !== 'Registered successfully!') return yield put(Actions.registerUserFailure())
  yield put(Actions.registerUserSuccess(result))
  yield put(NavigationActions.navigate({routeName: 'CheckinScreen'}))
  console.tron.log('>>>>rsponse', result)
  //   if (result.error)
}

export function * validateUser ({params}) {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(params),
  }
  const result = yield fetch(VALIDATE_USER_URL, postOptions)
    .then(resp => resp.json())
    .then(r => r)
    .catch(e => e)

  if (result.error) return yield put(Actions.getValidUserFailure(result))
  yield put(Actions.getValidUserSuccess(result))
  if (_.get(result, 'Result.guId', '')) {
    yield put(
      Actions.getPackageListRequest({
        ContactId: _.get(result, 'Result.guId', '')
      })
    )
  }
}

export function * packageList ({params}) {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(params),
  }
  const result = yield fetch(PACKAGE_LIST_URL, postOptions)
    .then(resp => resp.json())
    .then(r => r)
    .catch(e => e)
  if (result.error) {
    yield put(Actions.getPackageListFailure(result))
  } else {
    yield put(Actions.getPackageListSuccess(result))
  }
}
export function * checkIn ({params}) {
  const postOptions = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(params),
  }
  const result = yield fetch(CHECK_IN_URL, postOptions)
    .then(resp => resp.json())
    .then(r => r)
    .catch(e => e)
  if (result.Result === 'Success') yield put(Actions.getCheckInSuccess(result))
  yield put(Actions.getCheckInFailure(result))
}
