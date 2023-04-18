import { roles } from 'constants/roles';

export const isPossibleRole = (role) => {
  const possibleRoles = Object.values(roles);

  return role && role.trim().length > 0 && possibleRoles.some((possibleRole) => possibleRole === role);
}
