
let intx=document.querySelector('.intx')
let btn=document.querySelector('.btn')
let update=document.querySelector('.update')
let list=document.querySelector('.list')
let todo=[]
let id;


btn.addEventListener('click',()=>{
    todo.push(intx.value)
    addTodo()
})
update.addEventListener('click',()=>{
    todo[id]=intx.value
    addTodo()
})
function addTodo(){
    list.innerHTML=''
    todo.map((mahadi)=>{
        list.innerHTML+= `<li>${mahadi}<button class="edt">Edit</button><button class="delt">Delete</button></li>`
        intx.value=''
        let delt =document.querySelectorAll('.delt')
        let delitem=Array.from(delt)
        let edt=document.querySelectorAll('.edt')
        let edititem=Array.from(edt)
        edititem.map((item,index)=>{
            item.addEventListener('click',()=>{
               intx.value= todo[index]
                id=index
                list.innerHTML=''
            })
        })



        delitem.map((habib,index)=>{
            habib.addEventListener('click',()=>{
                todo.splice(index,1)
                addTodo()
            })
        })

    })
}

