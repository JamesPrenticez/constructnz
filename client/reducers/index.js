import {combineReducers} from 'redux'

import jobs from './jobs'
import currentForm from './currentForm'

export default combineReducers({
    jobs,
    currentForm
})