// In a separate file called actions.js
export const SET_DATA = 'SET_DATA';

export const setData = (name,newName, affidavit,publication,notified) => ({
  type: SET_DATA,
  payload: { name,newName, affidavit,publication,notified },
});
