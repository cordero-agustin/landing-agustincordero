const data = [
    {
        id:'01',
        name:'Camiseta Titular 2025',
        description:'Camiseta titular de Indunaciones de la temporada actual.',
        price:119000,
        stock:25,
        category:'camisetas',
        img:'../camiseta25.png'
    },
    {
        id:'02',
        name:'Short Titular 2025',
        description:'Short titular de Indunaciones de la temporada actual.',
        price:59000,
        stock:10,
        category:'shorts',
        img:'../short.png'
    },
    {
        id:'03',
        name:'Camiseta Titular 2024',
        description:'sara saras..',
        price:79000,
        stock:12,
        category:'camisetas',
        img:'../camiseta24.png'
    },
    {
        id:'04',
        name:'Pack Stickers',
        description:'Pack de 10 stickers de Indunaciones',
        price:3999,
        stock:15,
        category:'accesorios',
        img:'../sticker.png'
    },
    
]


export const getProducts= ()=> {
    let error= false
    return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            if(!error){
                resolve(data)
            }else{
                reject('Hubo un error, intente mas tarde')
            }
        },3000)
    })
}

export const getItem =(id)=>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
            let product = data.find((item)=> item.id === id)
            resolve(product)
        },2000)
    })
}