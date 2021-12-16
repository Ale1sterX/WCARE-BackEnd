const allRoles = {
  user: ['editUser'],
  admin: ['getUsers', 'manageUsers', 'editUser'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
