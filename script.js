var objPeople= [
{
    username: "nome",
    password: "pass"
}
]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value
    if(username == objPeople[0].username && password == objPeople[0].password){
        console.log("Logado")
        return
    }else{
        console.log("Erro, conta não existe")
        }
    }

function registerInfo(){
    var Nusername = document.getElementById("username").value
    var Npassword = document.getElementById("password").value
    objPeople[1].username = Nusername
    objPeople[2].password = Npassword
    console.log(objPeople)
}
