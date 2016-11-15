export default store => next => action => {
  if (!action.payload || !action.payload.then) {
    console.log('action without payload...pass!');
    return next(action);
  }
  console.log('action have payload: ', action);
  action.payload
    .then( val => {
    console.log('resolved: ', val)
    store.dispatch({
      ...action,
      payload: val.data
    })
  }).catch( err => {
    console.log('oh no: ', err);
  })


  console.log('到底了');
}
