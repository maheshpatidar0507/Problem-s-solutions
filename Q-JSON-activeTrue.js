const profiles = [
  {
    name: "ankit",
    active: true,
  },
  {
    name: "ankit",
    active: true,
  },
  {
    name: "rahul",
    active: false,
  },
  {
    name: "shivam",
    active: true,
  },
  {
    name: "mitesh",
    active: false,
  },
];
const result = profiles.filter((data) => data.active); //short way
//   {
// if (data.active === true) {
//   return true;
// }
//   });
console.log(result);
