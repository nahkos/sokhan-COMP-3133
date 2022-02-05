import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Brenda Stonewall',
    email: 'brenda@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Stephanie Henridge',
    email: 'stephanie@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
