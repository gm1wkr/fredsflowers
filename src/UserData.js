const dummyUsers = [
  {
    id: 100,
    name: "Sandra Wan",
    email: "sandra@example.com",
    isPremium: true
  },
  {
    id: 110,
    name: "Bridgette",
    email: "bridgette@example.com",
    isPremium: false
  },
  {
    id: 120,
    name: "Tommy Flowers",
    email: "bletchly@example.com",
    isPremium: true
  },
  {
    id: 130,
    name: "Bunny Ginnes",
    email: "bunny@example.com",
    isPremium: false
  },
];

const dummyUser = dummyUsers[Math.floor(Math.random() * dummyUsers.length)]


export default dummyUser;