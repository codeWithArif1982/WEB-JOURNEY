const loadAllBlissData = ()=>{
    //fetch("https://jsonplaceholder.typicode.com/todos/1")
    fetch("https://jsonplaceholder.typicode.com/posts")
    // fetch("https://jsonplaceholder.typicode.com/users")
    //fetch("https://www.ncl.com/cms-service/tap/cruise-ships/BLISS")
    .then(response => response.json())
    .then(data => displayUsers(data))
}
function displayUsers(data){
    const ul = document.getElementById('user-list');
      for(const user of data){
        //console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
      }
    }