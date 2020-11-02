export interface TeacherTypeWithAssingedClassList {
  teacher_list: TeacherType[];
  tagged_subject_with_teacher?: AssingedClassSubjectList[];
}

export interface TeacherType {
  teacher_id: number;
  first_name: string;
  last_name: string;
  dob: string;
  relatior_name: string;
  email: string;
  mobile_number: string;
  teacher_address: string;
  gender: string;
  city: string;
  state: string;
  tagged_subject_with_teacher?: object[];
  registered_on: string;
  last_updated_on: string;
}

export interface AssingedClassSubjectList {
  user_id: number;
  class_name: string;
  subject_name: string;
  class_id: number;
  subject_id: number;
  assinged_on: string;
}
