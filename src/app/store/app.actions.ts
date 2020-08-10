import { AuthActionsUnion } from "./auth/auth.actions";
import { ClassActionsUnion } from "./class/class.actions";

export type AppActionsUnion = AuthActionsUnion | ClassActionsUnion;
