let arr = [1, 2, 3, 4]
let a = arr.reduce((pre, cur) => pre + cur)
console.log(a)

const userList = [
  {
    id: 1,
    username: 'john',
    sex: 1,
    email: 'john@163.com'
  },
  {
    id: 2,
    username: 'jerry',
    sex: 1,
    email: 'jerry@163.com'
  },
  {
    id: 3,
    username: 'nancy',
    sex: 0,
    email: ''
  }
];
function keyByUsernameReducer(acc, person) {
  return {...acc, [person.username]: person};
}
const userObj = userList.reduce(keyByUsernameReducer, {});
console.log(userObj);


var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  ( acc, cur ) => acc.concat(cur)
 );

console.log(flattened)