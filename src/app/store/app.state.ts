import { ProfileType } from "./auth/types/profile.type";

export type AppState = Partial<{
  profile: ProfileType;
  classList: any;
}>;
