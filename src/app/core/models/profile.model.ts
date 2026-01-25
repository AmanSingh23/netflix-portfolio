export interface Profile {
  id: string;
  name: string;
  avatar: string;
  isChild: boolean;
  color: string;
  isActive?: boolean;
}

export interface ProfileSelectionState {
  selectedProfile: Profile | null;
  profiles: Profile[];
}
