import { FieldValue } from 'firebase/firestore';
import { UserProfile } from './profile';

/**
 * @deprecated
 */
export type Role = 'owner' | 'staff' | 'viewer' | 'courier-manager';

export type AdminRole = 'manager' | 'collaborator';

export interface NewManagerData {
  email: string;
  role: Role | AdminRole;
}

export interface ManagerProfile extends UserProfile {}

export interface ManagerPrivatePlatform {
  claimsUpdated: FieldValue;
}
