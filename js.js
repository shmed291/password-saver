const localSavep = localStorage.getItem("pass")?JSON.parse(localStorage.getItem("pass")) :
[]
const localSavef = localStorage.getItem("name")?JSON.parse(localStorage.getItem("name")) :
[]
function addRemove(){
    let plus = document.querySelector('.plus')
    let minus = document.querySelector(".minus")
    let limit = document.querySelector(".number") 
    plus.addEventListener('click',()=>{
        limit.textContent++
        if(limit.textContent < 8){
            limit.textContent++
        }else if(limit.textContent > 20){
            limit.textContent--
        }
    })
    minus.addEventListener('click',()=>{
        limit.textContent--
        if(limit.textContent < 8){
            limit.textContent++
        }else if(limit.textContent > 20){
            limit.textContent--
        }
    })
}
function pass(){
let place = document.querySelector('.unpass')
let pass = ""
let limit = document.querySelector(".number")  
 let indexs = [
        'A', 'b', 'C', 'd', 'E', 'f', 'G', 'h', 'I', 'j', 'K', 'l', 'M', 'n', 'O', 'p', 'Q', 'r', 
        'S', 't', 'U', 'v', 'W', 'x', 'Y', 'y', 'Z', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '+', '{', '}', '[', ']', '|', '\\', 
        ';', ':', '"', '\'', '<', '>', ',', '.', '/', '?', '~'
    ]
    let after = []
    if(limit.textContent > 7 && limit.textContent <= 20){
for(let i = 0;i<limit.textContent;i++){

    let random = Math.floor(Math.random() * 68)
    after.push(indexs[random])
    console.log(after);
    limit.classList.remove('no')
    document.querySelector('.unpass').textContent = after.join('')
}
}else{
    limit.classList.add('no')
}

}
function save(){
    let item = ''
for(let i = 0 ; i < localSavep.length;i++){
item +=`<div class="password">
                <p class="inpass">${localSavep[i]}</p>
                <p class="for">${localSavef[i]}</p>
                <a class='remove'><i class="fa-solid fa-xmark"></i></a>
            </div>
            `
            
}
document.querySelector('.passwords').innerHTML = item
remove()
}
function add(){
    let pass = document.querySelector('.unpass').textContent
    let name = document.querySelector('.pfor').value
    if(pass !== 'password!'&& name !== ""){
        localSavep.push(pass)
        localStorage.setItem("pass",JSON.stringify(localSavep));
    
        localSavef.push(name)
        localStorage.setItem("name",JSON.stringify(localSavef));
        location.reload()
        document.querySelector('.pfor').classList.remove('no')
    }else if(name === ""){
        document.querySelector('.pfor').classList.add('no')
    }
}
function remove(){
    let remove = document.querySelectorAll('.remove')
    remove.forEach((r,i)=>{
        r.addEventListener('click',()=>{
            localSavep.splice(i,1)
            localSavef.splice(i,1)
            localStorage.setItem("pass",JSON.stringify(localSavep));
            localStorage.setItem("name",JSON.stringify(localSavef));
            location.reload()
        })
    })
}
window.onload =()=>{
    save()
    addRemove()
}
