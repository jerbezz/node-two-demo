// here is our user Array. we will get all of our data out of here
const users = [
  {
    id: 1,
    first_name: 'Raul',
    last_name: 'Wynter',
    email: 'rwynter0@google.com'
  },
  {
    id: 2,
    first_name: 'Demetri',
    last_name: 'Dakin',
    email: 'ddakin1@google.com'
  },
  {
    id: 3,
    first_name: 'Lira',
    last_name: 'Collishaw',
    email: 'lcollishaw2@google.com'
  },
  {
    id: 4,
    first_name: 'Jennette',
    last_name: "O'Brollachain",
    email: 'jobrollachain3@msn.com'
  },
  {
    id: 5,
    first_name: 'Annaliese',
    last_name: 'Marishenko',
    email: 'amarishenko4@msn.com'
  },
  {
    id: 6,
    first_name: 'Delano',
    last_name: 'Millins',
    email: 'dmillins5@yahoo.com'
  },
  {
    id: 7,
    first_name: 'Allister',
    last_name: 'Rizzetti',
    email: 'arizzetti6@yahoo.com'
  },
  {
    id: 8,
    first_name: 'Yul',
    last_name: 'Slite',
    email: 'yslite7@yahoo.com'
  },
  {
    id: 9,
    first_name: 'Stu',
    last_name: 'Liveing',
    email: 'sliveing8@devmountain.com'
  },
  {
    id: 10,
    first_name: 'Carla',
    last_name: 'Gisbye',
    email: 'cgisbye9@devmountain.com'
  }
]
// module.exports allows us to export anything. In this case we are exporting a object with some methods
module.exports = {
  getUsers: (req, res) => res.status(200).send(users),
  getUserByID: (req, res) => {
    const { id } = req.params
    const user = users.filter((person) => person.id === id * 1)
    res.status(200).send(user)
  },
  getUserByFirstName: (req, res) => {
    const firstName = req.params.firstName
    const user = users.filter((person) => person.first_name === firstName)
    res.status(200).send(user)
  },
  getUserByEmail: (req, res) => {
    const data = users.filter((user) => user.email.includes(req.query.email))
    res.status(200).send(data)
  }
}