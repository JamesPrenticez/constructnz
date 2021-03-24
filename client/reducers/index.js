import {combineReducers} from 'redux'

import users from './users'
import jobs from './jobs'
import currentForm from './currentForm'
import autocomplete from './autocomplete'
import error from './error'

export default combineReducers({
    users,
    jobs,
    autocomplete,
    currentForm,
    error
})