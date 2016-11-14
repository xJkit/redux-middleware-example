export default store => next => action => {
  if (!action.payload) {
    console.log('action without payload...pass!');
    return next(action);
  }
  console.log('action have payload: ', action);
  return next(action);
}
