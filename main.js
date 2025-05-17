function friend(friends){
  // setup a tabulation array to hold the response
  let list = [];
  
  // iterate through the list using a for loop
  for (i = 0; i < friends.length; i++) {\
    // check if the iteration is 4 letter long
    if (friends[i].length === 4) {
      // add it to the tabulation array if it is
      list.push(friends[i]);
    }
  }
  // return the list whith four letters
  return list;
}