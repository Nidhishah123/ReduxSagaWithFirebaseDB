import {StyleSheet} from 'react-native';
import {colors} from './constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    marginTop: 60,
  },
  button: {
    height: 35,
    width: 100,
    margin: 30,
    alignSelf: 'center',
    backgroundColor: colors.BLUE,
    borderRadius: 4,
    justifyContent: 'center'
  },
  input: {
    borderColor: 'transparent',
    flex: 1,
    textAlign: 'right',
    color: colors.BLUE,
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 10,
  },
  inputLabel: {
    fontSize: 16,
    color: colors.GREY,
  },
  separator: {
    height: 8,
    backgroundColor: colors.LIGHT_GREY,
  },
  inputContainer: {
    width: '100%',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: colors.LIGHT_GREY,
    backgroundColor: colors.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  error: {
    color: colors.DARK_RED,
    alignSelf: 'center',
    marginTop: 10,
  }
});