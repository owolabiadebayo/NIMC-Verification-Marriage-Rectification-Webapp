// In a separate file called actions.js
export const SET_DATA = "SET_DATA";

export const setData = (
  name,
  newName,
  affidavit,
  publication,
  persons,
  others,
  transactionId,
  imageData,
  dob,
  dob1
) => {
  return (dispatch) => {
    // Make an API call or perform other asynchronous tasks here
    // Dispatch an action when the tasks are complete
    dispatch({
      type: SET_DATA,
      payload: {
        name,
        newName,
        affidavit,
        publication,
        persons,
        others,
        transactionId,
        imageData,
        dob,
        dob1,
      },
    });
  };
};
