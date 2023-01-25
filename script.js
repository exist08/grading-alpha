const input = document.getElementById('num');
const text = document.getElementById('text');

const graderReturner = (num) =>{
    if(num>510)
    return 'A+'
    if(num<510 && num>=450)
    return 'A'
    if(num<450 && num>=360)
    return 'B'
    if(num<360 && num>=270)
    return 'C'
    if(num<270 && num>=198)
    return 'D'
    if(num<198 && num>=120)
    return 'E'
    if(num<120)
    return 'E1'
}

input.addEventListener('keyup',(e)=>{{
    if(e.keyCode === 13){
        input.value = ''
        return
    }
    text.innerHTML = graderReturner(e.target.value)
}})
input.addEventListener('blur',()=>{
    input.value = ''
    return
})
