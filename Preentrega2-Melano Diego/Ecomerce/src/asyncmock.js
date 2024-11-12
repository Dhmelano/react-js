let products = [
    {
        img: "../public/producto2.jpeg",
        id: 1 ,
        name:"PINK LEMONADE - NIKBAR",
        price: 12000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias dolore suscipit minima accusamu",
        category: "vaper",
    },

    {
        img: "../public/producto4.jpeg",
        id: 2 ,
        name:"WHITE GUMMY TORCH",
        price: 20000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias dolore suscipit minima accusamu",
        category: "vaper",
    }, 
    
    {
        img: "../public/producto5.png",
        id: 3 ,
        name:"VAPORESSO PUFFMI",
        price: 15000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias dolore suscipit minima accusamu",
        category: "vaper",
    }, 
    
    {
        img: "../public/producto6.jpeg",
        id: 4 ,
        name:"VAPORESSO SKY",
        price: 12000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias dolore suscipit minima accusamu",
        category: "vaper",
    },
    
    {
        img: "../public/liquido1.png",
        id: 5 ,
        name:"GRAPE ICE - NIKBAR 300",
        price: 10000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias dolore suscipit minima accusamu",
        category: "liquid",
    },
    
    {
        img: "../public/liquido2.png",
        id: 6 ,
        name:"BANANA ICE - NIKBAR 1500",
        price: 21000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias dolore suscipit minima accusamu",
        category: "liquid",
    }, 
    
    {
        img: "../public/liquido3.png",
        id:  7,
        name:"COOL MINT - NIKBAR 600",
        price: 7000,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero molestias dolore suscipit minima accusamu",
        category: "liquid",
    },
];

export let getProducts = () => {
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products)

        },2000)

    })

}

export let getProductsByCategory = (categoryId) =>{
    return new Promise((resolve)=> {
        setTimeout(()=>{
            resolve(products.filter((pord.category === categoryId)))

        },2000)

    })
}