import {CHANGE_FORM} from '../actions'

export default function currentForm (state='view', action) {
    switch (action.type) {
        case CHANGE_FORM:
            return action.form
        default:
            return state
    }
}