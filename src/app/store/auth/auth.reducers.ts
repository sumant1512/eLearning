import { AuthActions, AuthActionsUnion } from "./auth.actions";
import { ProfileType } from "./types/profile.type";

const profile: ProfileType = {
  userDetails: {
    user_id: null,
    school_name: "",
    admin_name: "",
    aadhar_number: "",
    school_registration_no: "",
    admin_contact_no: "",
    school_contact_no: "",
    admin_profile_picture: "",
    school_cover_image: "",
    created_on: "",
    last_updated_on: "",
    address: "",
    email: "",
    user_type: "",
  },
};

export function profileReducer(state = profile, action: AuthActionsUnion): any {
  switch (action.type) {
    case AuthActions.FETCHED_PROFILE:
      return {
        userDetails: action.payload.profile,
      };
    default:
      return state;
  }
}
