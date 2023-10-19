let fourm = document.querySelector('form')

// let divv = document.querySelector('div')

let list = document.getElementById("list")



let btn = document.getElementById('btn')

let recTexxt = document.getElementById('recText')
fourm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e);


    if(e.target[0].value == 0){
        alert('please enter value')
    }
    else{

    

        let h1 = document.createElement('li')
        h1.innerHTML = e.target[0].value
        list.appendChild(h1)

    

        e.target[0].value = ''

        let edit = document.createElement('button')
        edit.innerHTML = 'edit'
        h1.appendChild(edit)


        let del = document.createElement('button')
        del.innerHTML = 'Delete'
        h1.appendChild(del)

        edit.addEventListener('click', (ev)=>{
        ev.preventDefault()
        

        let editNote = prompt('edit the content you like')

        

        

        h1.replaceChildren(e.target[0].value+editNote)


        let del = document.createElement('button')
        del.innerHTML = 'Delete'
        h1.appendChild(del)


        del.addEventListener('click', (a)=>{
        a.preventDefault()

        h1.remove(e.target[0].value)
    })

        

    })

    del.addEventListener('click', (a)=>{
        a.preventDefault()

        h1.remove(e.target[0].value)
    })
        
    }


    


})