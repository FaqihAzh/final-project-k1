import { getNotification } from "../../../services/getNotification";
import { updateNotif } from "../../reducers/notificationsSlice/notificationsSlice";


export const notificationAct = () => async (dispatch) => {
  return await getNotification()
    .then((result) => {
      dispatch(updateNotif(result.data.data));
      console.log(result.data.data, "notif actions")
      return true;
    })
    
    .catch((err) => {
        return err;
    });
};
