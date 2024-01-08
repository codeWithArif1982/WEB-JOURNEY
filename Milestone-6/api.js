const loadAllBlissData = ()=>{
    //fetch("https://jsonplaceholder.typicode.com/todos/1")
    fetch("https://jsonplaceholder.typicode.com/posts")
    // fetch("https://jsonplaceholder.typicode.com/users")
    //fetch("https://www.ncl.com/cms-service/tap/cruise-ships/BLISS")
    .then(response => response.json())
   // .then(data => displayUsers(data))
    .then(posts => displayPost(posts))
}
function displayUsers(data){
    const ul = document.getElementById('user-list');
      for(const user of data){
        //console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
      }
    };

function displayPost(posts){
    const postContainer = document.getElementById('post-list');
      for(const post of posts){
        //console.log(user.name);
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
       <h4>User- ${post.userId} </h4>
       <h5>Post : ${post.title} </h5>
       <p>Post ${post.body} </p>
        `;
        postContainer.appendChild(postDiv)
      }
    }    