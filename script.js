const xhr = new XMLHttpRequest();
let url;
document.querySelector("button").addEventListener("click", () => {
    url = document.getElementById("url").value
    console.log(url)
    xhr.open('GET', `https://api.github.com/users/${url}`);
    xhr.send();
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState)
        // if(xhr.status===404){
        //     const error = document.createElement("h1")
        //     error.innerText="You entered the wrong username!!"
        //     document.querySelector(".card").appendChild(error)
        // }
        if(xhr.readyState === 4) {
            if (xhr.status==200) {                
                const data = JSON.parse(xhr.responseText)
                // console.log(data.avatar_url, data.name, data.followers)
                putData(data.avatar_url, data.name, data.followers)
            }
        }
    }
})
const putData = function (source, name, followers) {
    if (source != undefined) {
        document.querySelector(".card").style.display = "flex"
        document.getElementById("image").setAttribute("src", source);
        document.getElementById("username").innerHTML ="Name : "
        document.getElementById("followers").innerHTML ="Followers : "
        document.getElementById("username").innerHTML += name
        document.getElementById("followers").innerHTML += followers
    }
}