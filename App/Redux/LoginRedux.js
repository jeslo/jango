import {createActions, createReducer} from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions({
  getLoginDetailsRequest: ['params'],
  getLoginDetailsSuccess: ['data'],
  getLoginDetailsFailure: [],

  registerUserRequest: ['params'],
  registerUserSuccess: ['data'],
  registerUserFailure: [],

  getValidUserRequest: ['params'],
  getValidUserSuccess: ['data'],
  getValidUserFailure: [],

  getPackageListRequest: ['params'],
  getPackageListSuccess: ['data'],
  getPackageListFailure: [],

  getCheckInRequest: ['params'],
  getCheckInSuccess: ['data'],
  getCheckInFailure: []

})

export const loginTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  registerDetails: {},
  loginLoader: false,
  loginDetails: {},
  validUserDetails: {},
  packagedetails: {},
  checkinDetails: {},
  registrationFailed: false,
  loginFailed: false
})

/* ------------- Reducers ------------- */

export const setLoginOrSignupLoader = state =>
  state.merge({
    loginLoader: true
  })
export const handleLoginSuccess = (state, {data}) =>
  state.merge({
    loginDetails: data
  })
export const getLoginDetailsFailure = (state, {data}) =>
  state.merge({
    loginFailed: true
  })

  
export const handleRegistrationSuccess = (state, {data}) =>
  state.merge({
    loginLoader: false,
    registrationFailed: true
  })
export const handleRegistrationFailure = (state, {data}) =>
  state.merge({
    loginLoader: false
  })



export const handleValidUserSuccess = (state, {data}) =>
  state.merge({
    validUserDetails: data
  })
export const handleValidUserFailure = (state, {data}) =>
  state.merge({
    validUserDetails: data
  })


export const handlePackageListSuccess = (state, {data}) =>
  state.merge({
    packagedetails: data
  })
export const handlePackageListFailure = (state, {data}) =>
  state.merge({
    packagedetails: data
  })


export const handleCheckInSuccess = (state, {data}) =>
  state.merge({
    checkinDetails: data
  })
export const handleCheckInFailure = (state, {data}) =>
  state.merge({
    
  })



/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_LOGIN_DETAILS_REQUEST]: setLoginOrSignupLoader,
  [Types.GET_LOGIN_DETAILS_SUCCESS]: handleLoginSuccess,
  [Types.GET_LOGIN_DETAILS_FAILURE]: getLoginDetailsFailure,

  [Types.REGISTER_USER_REQUEST]: setLoginOrSignupLoader,
  [Types.REGISTER_USER_SUCCESS]: handleRegistrationSuccess,
  [Types.REGISTER_USER_FAILURE]: handleRegistrationFailure,


  [Types.GET_VALID_USER_REQUEST]: setLoginOrSignupLoader,
  [Types.GET_VALID_USER_SUCCESS]: handleValidUserSuccess,
  [Types.GET_VALID_USER_FAILURE]: handleValidUserFailure,

  [Types.GET_PACKAGE_LIST_REQUEST]: setLoginOrSignupLoader,
  [Types.GET_PACKAGE_LIST_SUCCESS]: handlePackageListSuccess,
  [Types.GET_PACKAGE_LIST_FAILURE]: handlePackageListFailure,

  [Types.GET_CHECK_IN_REQUEST]: setLoginOrSignupLoader,
  [Types.GET_CHECK_IN_SUCCESS]: handleCheckInSuccess,
  [Types.GET_CHECK_IN_FAILURE]: handleCheckInFailure
})
