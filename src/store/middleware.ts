import isPlainObject from 'redux/src/utils/isPlainObject';

export const handleClassObjectsForRedux = (store: any) => (next: (o: any) => any) => (action: any) => {
  if (!isPlainObject(action) &&
      typeof action !== 'function' &&
      !Array.isArray(action)) {
        action = {...action};
  }

  const result = next(action);
  // AJAX(result.getState()).to(someCoolPlace);
  return result;
};

// // The above is the same as this:
// handleClassObjectsForRedux = store => {
//   return next => {
//     return action => {
//       // does something here
//     }
//   }
// }
