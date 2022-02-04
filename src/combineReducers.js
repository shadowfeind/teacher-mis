import { combineReducers } from "redux";
import {
  createAcademicGradingReducer,
  getAllAcademicGradingReducer,
  getSingleAcademicGradingforEditReducer,
  getSingleAcademicGradingReducer,
  updateSingleAcademicGradingReducer,
} from "./examination/academicGrading/AcademicGradingReducers";
import {
  createExamDivisionReducer,
  getAllExamDivisionReducer,
  getSingleExamDivisionEditReducer,
  getSingleExamDivisionReducer,
  updateSingleExamDivisionReducer,
} from "./examination/examDivision/ExamDivisionReducers";
import {
  getAllAcademicStudentExamdataReducer,
  getEventReducer,
  getEventScheduleReducer,
  getExamEntryBulkReducer,
  getExamEntrySearchDataReducer,
} from "./examination/examMarkEntry/ExamMarkEntryReducers";

import {
  getAllExamScheduleInitialDataReducer,
  getExamScheduleListReducer,
} from "./examination/examSchedule/ExamScheduleReducers";
import {
  getAllContactAddress,
  getSingleContactAddressReducer,
  updateSingleContactAddressReducer,
} from "./examination/pid/contactAddress/ContactAddressReducers";
import {
  getAllContactNumber,
  getSingleContactNumberReducer,
  updateSingleContactNumberReducer,
} from "./examination/pid/contactNumber/ContactNumberReducers";
import {
  createSingleEducationReducer,
  educationCreateReducer,
  getAllEducation,
  getAllEducationCreateReducer,
  getSingleEducationReducer,
  updateSingleEducationReducer,
} from "./examination/pid/education/EducationReducers";
import {
  getAllEmail,
  getSingleEmailReducer,
  updateSingleEmailReducer,
} from "./examination/pid/email/EmailReducers";
import {
  createSingleFamilyMemberReducer,
  familyMemberCreateReducer,
  getAllFamilyMember,
  getAllFamilyMemberCreateReducer,
  getSingleCreateFamilyMemberReducer,
  getSingleFamilyMemberReducer,
  updateSingleFamilyMemberReducer,
} from "./examination/pid/familyMember/FamilyMemberReducers";
import {
  getAllGuardian,
  getSingleGuardianReducer,
  updateSingleGuardianReducer,
} from "./examination/pid/gurdian/GuardianReducers";
import {
  createSingleHobbyReducer,
  getAllHobby,
  getAllHobbyCreateReducer,
  getSingleHobbyReducer,
  hobbyCreateReducer,
  updateSingleHobbyReducer,
} from "./examination/pid/hobby/HobbyReducers";
import {
  createSingleJobHistoryReducer,
  getAllJobHistory,
  getAllJobHistoryCreateReducer,
  getSingleJobHistoryReducer,
  jobHistoryCreateReducer,
  updateSingleJobHistoryReducer,
} from "./examination/pid/jobHistory/JobHistoryReducers";
import {
  getAllPersonalInformation,
  getSinglePersonalInformationReducer,
  updateSinglePersonalInformationReducer,
} from "./examination/pid/personalinformation/PersonalInformationReducers";
import {
  createSingleSkillReducer,
  getAllSkill,
  getAllSkillCreateReducer,
  getSingleSkillReducer,
  skillCreateReducer,
  updateSingleSkillReducer,
} from "./examination/pid/skill/SkillReducers";
import {
  createSingleTrainingReducer,
  getAllTraining,
  getAllTrainingCreateReducer,
  getSingleTrainingReducer,
  trainingCreateReducer,
  updateSingleTrainingReducer,
} from "./examination/pid/training/TrainingReducers";
import { getAllUploadPhoto } from "./examination/pid/uploadPhoto/UploadPhotoReducers";
import {
  getAllOtherOptionsForSelectReducer,
  getAllStudentMonthlyPresentSheetReducer,
  getEnglishDateReducer,
  getListForPresentStudentReducer,
  getListForUpdateStudentPresentReducer,
  getListStudentPresentReducer,
  getSubjectOptionsForSelectReducer,
  postListStudentPresentReducer,
} from "./examination/attendance/studentMonthlyPresentSheet/StudentMonthlyPresentSheetReducers";
import {
  getAllTotalStudentAttendanceReducer,
  getListTotalStudentAttendanceReducer,
} from "./examination/attendance/totalStudentAttendance/TotalStudentAttendanceReducers";
import {
  getAllInitialDataFromSubjectReducer,
  getAllInitialResourcesDataReducer,
  getAllOtherOptionsForResourcesSelectReducer,
  getAllResourcesListReducer,
  getCreateResourceReducer,
  postResourceReducer,
} from "./examination/resources/ResourcesReducers";
import {
  downloadAssignmentReducer,
  getAllAssignmentTeacherReducer,
  getAllOtherOptionsForAssignmentSelectReducer,
  getListTeacherAssignmentReducer,
  getSingleCreateTeacherAssignmentReducer,
  getSingleToEditTeacherAssignmentReducer,
  getTeacherAssignmentContentReducer,
  postTeacherAssignmentReducer,
  putSingleToEditTeacherAssignmentReducer,
} from "./examination/assignment/AssignmentReducers";
import { getBulkExamMarkApprovalSearchDataReducer, getExamMarkApprovalInitialDataReducer, getExamMarkApprovalScheduleHeaderReducer, getExamMarkApprovalSearchDataReducer, postBulkExamMarkApprovalReducer } from "./examination/examMarkApprovalTeacher/examMarkApproval/ExamMarkApprovalReducers";

export const reducers = combineReducers({
  getAllAcademicStudentExamdata: getAllAcademicStudentExamdataReducer,
  getEvent: getEventReducer,
  getEventSchedule: getEventScheduleReducer,
  getExamEntrySearchData: getExamEntrySearchDataReducer,
  getExamEntryBulk: getExamEntryBulkReducer,
  academicGrading: getAllAcademicGradingReducer,
  getSingleAcademicGrading: getSingleAcademicGradingReducer,
  createAcademicGrading: createAcademicGradingReducer,
  getSingleAcademicGradingforEdit: getSingleAcademicGradingforEditReducer,
  updateSingleAcademicGrading: updateSingleAcademicGradingReducer,
  getAllExamDivision: getAllExamDivisionReducer,
  getSingleExamDivision: getSingleExamDivisionReducer,
  createExamDivision: createExamDivisionReducer,
  getSingleExamDivisionEdit: getSingleExamDivisionEditReducer,
  updateSingleExamDivision: updateSingleExamDivisionReducer,
  getAllExamScheduleInitialData: getAllExamScheduleInitialDataReducer,
  getExamScheduleList: getExamScheduleListReducer,
  //PID PersonalInformation
  getAllPersonalInformation: getAllPersonalInformation,
  getSinglePersonalInformation: getSinglePersonalInformationReducer,
  updateSinglePersonalInformation: updateSinglePersonalInformationReducer,
  //PID ContactAddress
  getAllContactAddress: getAllContactAddress,
  getSingleContactAddress: getSingleContactAddressReducer,
  updateSingleContactAddress: updateSingleContactAddressReducer,
  //PID ContactNumber
  getAllContactNumber: getAllContactNumber,
  getSingleContactNumber: getSingleContactNumberReducer,
  updateSingleContactNumber: updateSingleContactNumberReducer,
  //PID Education
  getAllEducation: getAllEducation,
  getAllEducationCreate: getAllEducationCreateReducer,
  createSingleEducation: createSingleEducationReducer,
  educationCreate: educationCreateReducer,
  //PID Email
  getAllEmail: getAllEmail,
  getSingleEmail: getSingleEmailReducer,
  updateSingleEmail: updateSingleEmailReducer,
  //PID FamilyMember
  getAllFamilyMember: getAllFamilyMember,
  getAllFamilyMemberCreate: getAllFamilyMemberCreateReducer,
  createSingleFamilyMember: createSingleFamilyMemberReducer,
  familyMemberCreate: familyMemberCreateReducer,
  //PID Guardian
  getAllGuardian: getAllGuardian,
  getSingleGuardian: getSingleGuardianReducer,
  updateSingleGuardian: updateSingleGuardianReducer,
  //PID Hobby
  getAllHobby: getAllHobby,
  getAllHobbyCreate: getAllHobbyCreateReducer,
  createSingleHobby: createSingleHobbyReducer,
  hobbyCreate: hobbyCreateReducer,
  //PID JobHistory
  getAllJobHistory: getAllJobHistory,
  getAllJobHistoryCreate: getAllJobHistoryCreateReducer,
  createSingleJobHistory: createSingleJobHistoryReducer,
  jobHistoryCreate: jobHistoryCreateReducer,
  //PID Skill
  getAllSkill: getAllSkill,
  getAllSkillCreate: getAllSkillCreateReducer,
  createSingleSkill: createSingleSkillReducer,
  skillCreate: skillCreateReducer,
  //PID Training
  getAllTraining: getAllTraining,
  getAllTrainingCreate: getAllTrainingCreateReducer,
  createSingleTraining: createSingleTrainingReducer,
  trainingCreate: trainingCreateReducer,
  //PID UploadPhoto
  getAllUploadPhoto: getAllUploadPhoto,
  //attendance start
  getAllStudentMonthlyPresentSheet: getAllStudentMonthlyPresentSheetReducer,
  getAllOtherOptionsForSelect: getAllOtherOptionsForSelectReducer,
  getSubjectOptionsForSelect: getSubjectOptionsForSelectReducer,
  getEnglishDate: getEnglishDateReducer,
  getListStudentPresent: getListStudentPresentReducer,
  getListForUpdateStudentPresent: getListForUpdateStudentPresentReducer,
  getListForPresentStudent: getListForPresentStudentReducer,
  postListStudentPresent: postListStudentPresentReducer,
  getAllTotalStudentAttendance: getAllTotalStudentAttendanceReducer,
  getListTotalStudentAttendance: getListTotalStudentAttendanceReducer,
  //attendance end
  //resources start
  getAllInitialResourcesData: getAllInitialResourcesDataReducer,
  getAllInitialDataFromSubject: getAllInitialDataFromSubjectReducer,
  getAllOtherOptionsForResourcesSelect:
    getAllOtherOptionsForResourcesSelectReducer,
  getAllResourcesList: getAllResourcesListReducer,
  getCreateResource: getCreateResourceReducer,
  postResource: postResourceReducer,
  //resources end
  //assignment start
  getAllAssignmentTeacher: getAllAssignmentTeacherReducer,
  getAllOtherOptionsForAssignmentSelect:
    getAllOtherOptionsForAssignmentSelectReducer,
  getListTeacherAssignment: getListTeacherAssignmentReducer,
  getEnglishDate: getEnglishDateReducer,
  getSingleCreateTeacherAssignment: getSingleCreateTeacherAssignmentReducer,
  postTeacherAssignment: postTeacherAssignmentReducer,
  getTeacherAssignmentContent: getTeacherAssignmentContentReducer,
  getSingleToEditTeacherAssignment: getSingleToEditTeacherAssignmentReducer,
  putSingleToEditTeacherAssignment: putSingleToEditTeacherAssignmentReducer,
  downloadAssignment: downloadAssignmentReducer,
  //assignment end
   //ExamMarkApproval(Teacher)
   getExamMarkApprovalInitialData : getExamMarkApprovalInitialDataReducer,
   getExamMarkApprovalSearchData : getExamMarkApprovalSearchDataReducer,
   getExamMarkApprovalScheduleHeader : getExamMarkApprovalScheduleHeaderReducer,
   getBulkExamMarkApprovalSearchData : getBulkExamMarkApprovalSearchDataReducer,
   postBulkExamMarkApproval : postBulkExamMarkApprovalReducer,
});
