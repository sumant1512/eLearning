export interface ProfileType {
  userDetails: UserDetailsType;
}

export interface UserDetailsType {
  user_id: number;
  school_name: string;
  admin_name?: string;
  first_name?: string;
  last_name?: string;
  class_name?: string;
  dob?: string;
  aadhar_number: string;
  school_registration_no: string;
  admin_contact_no: string;
  school_contact_no: string;
  admin_profile_picture: string;
  school_cover_image: string;
  created_on: string;
  last_updated_on: string;
  address: string;
  student_profile_picture?: string;
  user_type: string;
  email: string;
  class_id?: number;
  student_id?: number;
  mobile_number?: string;
  school_type?: string;
  pin_code?: string;
  city?: string;
  state?: string;
  student_address?: string;
}
