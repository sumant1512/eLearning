import { AuthEffects } from "./auth/auth.effects";
import { ClassEffects } from "./class/class.effects";
import { StudentEffects } from "./students/student.effects";

export const AppEffects = [AuthEffects, ClassEffects, StudentEffects];
