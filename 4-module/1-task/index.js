function makeFriendsList(friends) {
  const ul = document.createElement('ul');
  ul.innerHTML = friendsToHTML(friends);
  return ul;
}

function friendsToHTML(friends){
  const arrayOfFriends = [];
    
  for (const friend of friends){  
    arrayOfFriends.push(`<li>${friend.firstName} ${friend.lastName}</li>`)
  }
    
  return arrayOfFriends.join('\n');
}