import {
  GET_ALL_ANNOUNCEMENT_TEACHER_FAIL,
  GET_ALL_ANNOUNCEMENT_TEACHER_REQUEST,
  GET_ALL_ANNOUNCEMENT_TEACHER_RESET,
  GET_ALL_ANNOUNCEMENT_TEACHER_SUCCESS,
} from "./AnnouncementConstant";

export const getAllTeacherAnnouncement = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_ANNOUNCEMENT_TEACHER_REQUEST:
      return { loading: true };
    case GET_ALL_ANNOUNCEMENT_TEACHER_SUCCESS:
      return { loading: false, announcement: action.payload };
    case GET_ALL_ANNOUNCEMENT_TEACHER_FAIL:
      return { loading: false, error: action.payload };
    case GET_ALL_ANNOUNCEMENT_TEACHER_RESET:
      return {};
    default:
      return state;
  }
};
