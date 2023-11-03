
async function f1(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json()
    console.log(data)
}
f1()

