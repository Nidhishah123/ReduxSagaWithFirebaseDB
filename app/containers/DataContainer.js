import {connect} from 'react-redux';
import { saveData, editData, dataFetch, editFormData } from '../actions';

import AppScreen from '../components/AppScreen';

const mapStateToProps = (state) => {
  return state.DataReducer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveData: (data) => dispatch(saveData(data)),
    editData: (data, id) => dispatch(editData(data, id)),
    dataFetch: () => dispatch(dataFetch()),
    editFormData: (data) => dispatch(editFormData(data)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AppScreen);
