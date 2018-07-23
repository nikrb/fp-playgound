/* eslint-disable camelcase */
/* eslint-disable object-curly-newline */
import { filter, propEq, prop, map, compose } from 'ramda';

const list = [
  { name: 'nik', role: 'admin', email: 'n@e.com' },
];

it('should get prop', () => {
  const role = prop('role')(list[0]);
  expect(role).toBe('admin');
});
it('should get prop conditionally', () => {
  const role_prop = propEq('role', 'admin');
  const roles = filter(role_prop, list);
  expect(roles.length).toBe(1);
  expect(roles).toEqual([{ name: 'nik', role: 'admin', email: 'n@e.com' }]);
});

it('should get email list', () => {
  const getEmailOf = map(prop('email'));
  const onlyAdmin = filter(propEq('role', 'admin'));

  const getAdminEmails = compose(getEmailOf, onlyAdmin);
  // console.log(getAdminEmails());
  const emails = getAdminEmails(list);
  expect(emails).toEqual(['n@e.com']);
});
