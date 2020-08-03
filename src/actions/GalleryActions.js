import axios from "axios";

export const getPictures = () => {
  function success(pics) {
    return { type: "GET_PICTURES", payload: pics };
  }

  return (dispatch) => {
    axios
      .get("/pictures")
      .then((resp) => {
        if (resp.status === 200) {
          return dispatch(success(resp.data.pics));
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
