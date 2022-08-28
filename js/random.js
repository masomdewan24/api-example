const lodeUser = () =>{
    fetch('https://randomuser.me/api/?results=20')
    .then(res => res.json())
    .then(data => dispalyUsers(data.results))
}
const dispalyUsers = users => {
    const userContainer = document.getElementById('user-container');
    for( const user of users){
        console.log(user)
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h3>User name</h3>
        <p> Email: ${user.email}</p>
        <p>User location: ${user.location.city}</p>
        
        `
        userContainer.appendChild(userDiv);
    }
}


lodeUser();