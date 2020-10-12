import { HOST } from "config.constants";

export enum RoutesEnum {
  HOME = "home",
  REGISTRATION = "registration",
  PROFILE = "profile",
  VERIFICATION = "verification",
  PRIVACY_POLICY = "privacy-policy",
  RESET_PASSWORD = "reset-password",
  ADMIN = "admin",
  STUDENT = "student",
  SUPER_ADMIN = "super-admin",
}

export const contentNotFoundExceptionUrl = [`${HOST}sendOTP`];

export const successUrl = [
  `${HOST}addClass`,
  `${HOST}addSubject`,
  `${HOST}addTopic`,
  `${HOST}studentRegistration`,
  `${HOST}editSubjectName`,
  `${HOST}editClassName`,
  `${HOST}editTopicName`,
  `${HOST}sendOTP`,
  `${HOST}verifyOTP`,
  `${HOST}updatePassword`,
];

export const contentNotFoundUrl = [""];
