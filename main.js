// import {math} from 'math'


const fctn = ()=>{
    //document.querySelector('body').setAttribute('background-color','white')
    const bgClr = document.querySelector('body');
    const buttonsTheme = document.querySelectorAll('.icon')
    if(bgClr.classList.contains('darkmode')){
        document.querySelector('body').classList.replace('darkmode','lightmode')
    }else{
        document.querySelector('body').classList.replace('lightmode','darkmode')
    }
    buttonsTheme.forEach((obj)=>{
        if(obj.classList.contains('icon__dark')){
            obj.classList.replace('icon__dark','icon__light')
        }else{
            obj.classList.replace('icon__light','icon__dark')
        }
    })
}

const mainJson = 
[
    {'name':1,},
    {'name':2,},
    {'name':3,},
    {'name':4,},
    {'name':5,},
    {'name':6,},
    {'name':7,},
    {'name':8,},
    {'name':9,},
    {'name':10,},
    {'name':11,},
    {'name':12,},
    {'name':13,},
    {'name':14,},
    {'name':15,},
    {'name':16,},
    {'name':17,},
]

const objects = document.querySelector('.objects')

// console.log(Math.ceil(mainJson.length/3))


for( let i = 0; i < Math.ceil(mainJson.length/3);i++){
    const div = document.createElement('div');
    div.classList += 'objects__row'
    div.id = `row${i}`;
    objects.insertAdjacentElement("beforeend",div)
}
mainJson.forEach((obj,i)=>{
    console.log(i)
    const objects__row = document.querySelector(`#row${Math.ceil((i+1)/3)-1}`)
    const div = document.createElement('div');
    div.classList.add('icon')
    div.classList.add('icon__dark')
    div.innerText = `${obj.name}`
    objects__row.insertAdjacentElement("beforeend",div)
})