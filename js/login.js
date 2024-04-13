const form = document.getElementById("login-form")

form.addEventListener("submit", async function login(event){
    event.preventDefault()
    const user= document.getElementById("user").value
    const email= document.getElementById("email").value
    if(user.length === 0 || email.length === 0){
        console.log("email ou senha vazio")
    }
    const formData={
        username : user,
        email : email,
    }
    await fetch("https://poupe-mais-api.vercel.app/user/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body : JSON.stringify(formData),
    })
    .then(function(response){
        if(!response.ok){
            throw new Error("Nenhum dado retornado!")
        }
        return response.json();
    })
    .then(function (data){
        const {username, email, token} = data.body
        sessionStorage.setItem("username", username)
        sessionStorage.setItem("email", email)
        sessionStorage.setItem("token", token)

        window.location.href = "dashboard.html"


    })
    .catch(function (error){
        console.error(error)
    })
})