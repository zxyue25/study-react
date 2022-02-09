import {ADD_PERSON} from '../constants'

export const addPerson = personObj => ({type: ADD_PERSON, data: personObj})