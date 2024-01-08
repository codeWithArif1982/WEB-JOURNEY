const loadAllBlissData = ()=>{
    //fetch("https://jsonplaceholder.typicode.com/todos/1")
    fetch("https://jsonplaceholder.typicode.com/users")
    //fetch("https://www.ncl.com/cms-service/tap/cruise-ships/BLISS")
    .then(response => response.json())
    .then(json => console.log(json))
}