import {
  SAVE_DATA_SUCCESS,
  IN_PORGRESS,
  FETCH_DATA_SUCCESS,
  EDIT_DATA_SUCCESS,
  ERROR_OCCURRED,
} from '../actions/type';

const INITIAL_STATE = {
  error: false,
  firstName: '',
  lastName: '',
  company: '',
  department: '',
  position: '',
  email: '',
  inProgress: false,
};

export default loginData = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_DATA_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload,
        inProgress: false,
        error: false,
      });

    case SAVE_DATA_SUCCESS:
      return Object.assign({}, state, {
        inProgress: false,
        error: false,
      });

    case IN_PORGRESS:
      return Object.assign({}, state, {
        inProgress: true,
        error: false,
      });

    case FETCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload,
        inProgress: false,
        error: false,
      });

    case ERROR_OCCURRED:
      return Object.assign({}, state, {
        error: true,
      });

    default:
      return state;
  }
};