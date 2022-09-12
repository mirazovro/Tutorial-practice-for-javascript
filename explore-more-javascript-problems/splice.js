const friends = [12, 25, 65, 78, 60, 45, 78];
//Removes elements from an array
//if necessary, inserts new elements in their place
//returning the deleted elements.
//will change the original array
const partial = friends.splice(2, 3, 66, 78, 98);
console.log(partial);
console.log(friends);
