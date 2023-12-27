import {
  getNotification,
  putNotificationMark,
} from "../../../services/getNotification";
import { updateNotif } from "../../reducers/notificationsSlice/notificationsSlice";

export const notificationAct = () => async (dispatch) => {
  return await getNotification()
    .then((result) => {
      dispatch(updateNotif(result.data.data));
      return true;
    })

    .catch((err) => {
      return err;
    });
};

export const notificationPutAct = (id) => async (dispatch) => {
  return await putNotificationMark(id)
    .then((result) => {
      return true;
    })

    .catch((err) => {
      return err;
    });
};
