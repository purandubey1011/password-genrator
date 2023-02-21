let user_input = prompt("how much character's password do you want?")

let password_input = document.getElementById('password')
let txt = document.getElementById('txt')
let restart_btn = document.getElementById('btn')
let copy_btn = document.getElementById('copyBtn')

class password{
    constructor(){
        this.pass = ''
    }
    strongPassword(len){
        let Char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let char = "abcdefghijklmopqrstuvwxyz"
        let num = "1234567890"
        let speical = "!@#$%^&*~"
        if(len<4){
            alert('password should be atleast 4 character.')
        }else{
            let i = 0;
            while(i<=len){
                this.pass += Char[Math.floor(Math.random() * Char.length)]
                this.pass += char[Math.floor(Math.random() * char.length)]
                this.pass += num[Math.floor(Math.random() * num.length)]
                this.pass += speical[Math.floor(Math.random() * speical.length)]
                i+=4
            }
            this.pass = this.pass.substr(0,len)
            return this.pass
        }
    }
}

let p = new password()
let strontPass = p.strongPassword(user_input)
console.log(strontPass)

txt.innerHTML += `Your ${user_input} characters password is:`
password_input.value = strontPass

restart_btn.addEventListener('click',(e)=>{
    e.preventDefault()
    location.reload()
})
function copyPassword(){
    password_input.select();
    password_input.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(password_input.value);
    alert("Copied the text: " + password_input.value);
}