let inp = document.getElementById('inp')
let count = document.getElementById('count')

inp.addEventListener('input', ()=>{
    let val = inp.value.toLowerCase()
    console.log(val);
    
    const name = document.querySelectorAll('.men')
    name.forEach((i)=>{
         
        if(i.lastElementChild.textContent.toLowerCase().includes(val)){
            i.classList.remove('hidden')
        }else{
            i.classList.add('hidden')

        }
            

    })
})

fetch('https://restcountries.com/v3.1/all?fields=name,flags').then((data)=>{
    return data.json()
}).then((item)=>{
    item.forEach((counts)=>{
        count.innerHTML += `<ul class="men">
                <li><img src="${counts.flags.png}"</li>
                <li>${counts.name.common}</li>
                </ul>`
    })
}).catch((err)=>{
    console.log(err);
    
})






