import axios from "axios";

export const fetchApiRedux = (dispatch, url, success, failure) => {
  axios
    .get(url)
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return dispatch(failure(response));
      }
      dispatch(success(response.data));
    })
    .catch(err => {
      console.log("Fetch Error", err);
      dispatch(failure(err));
    });
};


export const fetchApi = (url, success, failure) => {
  axios
    .get(url)
    .then(response => {
      if (response.status !== 200) {
        console.log(
          "Looks like there was a problem. Status Code: " + response.status
        );
        return failure(response);
      }
      success(response.data);
    })
    .catch(err => {
      console.log("Fetch Error", err);
      failure(err);
    });
};