const loadSingleUser =  ()=>{
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => displaySingleUser(data.results[0]))
}

loadSingleUser();
const displaySingleUser = user =>{

}