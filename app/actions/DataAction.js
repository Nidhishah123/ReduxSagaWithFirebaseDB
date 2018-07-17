import {
  EDIT_DATA_SUCCESS,
  FETCHING_DATA,
  SAVING_DATA,
  EDITING_DATA
} from './type';

export const editFormData = (data) => {
  return ({
    type: EDIT_DATA_SUCCESS,
    payload: data,
  })
};

export function dataFetch() {
  return {
    type: FETCHING_DATA
  };
}

export function saveData(data) {
  return {
    type: SAVING_DATA,
    payload: {
      data: data,
    }
  };
}

export function editData(data, id) {
  return {
    type: EDITING_DATA,
    payload: {
      data: data,
      id: id,
    }
  };
}