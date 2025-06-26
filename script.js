var products = [
    {
    img:"https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    item:"T-shirt",
    desc:"wear the cloud",
    price:"20$"
},
{
    img:"https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    item:"Chair",
    desc:"sit in comfort",
    price:"80$"
},
{
    img:"https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    item:"lamp",
    desc:"light-years ahead",
    price:"45$"
}
]

var popular = [
{
    img:"https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    item:"lamp",
    desc:"light years ahead",
    price:"200$"
},
{
    img:"https://images.unsplash.com/photo-1552529232-9e6cb081de19?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    item:"lamp",
    desc:"light years ahead",
    price:"120$"
},
{
    img:"https://images.unsplash.com/photo-1573621588731-8d6d46bb65bf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    item:"bulb",
    desc:"ligth years ahead",
    price:"145$"
}
]

var cart =[]

function addProducts(){
    var clutter =""
    products.forEach((products,index)=>{
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class ="w-full h-full object-cover" src="${products.img}}" alt=""></div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${products.item}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${products.desc}</h3>
                            <h4 class="font-semibold mt-2">${products.price}</h4>
                        </div>
                        <button data-index="${index}" class=" add w-10 h-10 rounded-full bg-[#4A4563] text-yellow-400">
                        <i data-index=${index} class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`
        document.querySelector(".products").innerHTML = clutter
    })
}

const addPopularProducts=()=>{
    var clutter = ""
    popular.forEach((popular)=>{
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20 bg-red-500 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${popular.img}"   alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${popular.item}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${popular.desc}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">${popular.price}</h4>
                    </div>
                </div>`
        document.querySelector(".populars").innerHTML= clutter
    })
}

const addToCart=()=>{
    document.querySelector(".products").addEventListener("click",(dets)=>{
        if(dets.target.classList.contains('add')){
            cart.push(products[dets.target.dataset.index])
            console.log(cart)
        }
    })
}

const showCart=()=>{

    document.querySelector(".carticon").addEventListener("click",()=>{
        document.querySelector(".cartexpnd").style.display="block";
        var clutter =""
        cart.forEach((prod,index)=>{
            clutter += `<div class="flex gap-2 bg-white p-2 rounded-lg">
                <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
                <img class="w-full h-full object-cover" src="${prod.img}"/>
                </div>
                <div>
                    <h3 class="font-semibold">${prod.item}</h3>
                    <h5 class="text-sm font-semibold opacity-80">${prod.price}</h5>
                </div>
            </div>`
        })
        document.querySelector(".cartexpnd").innerHTML=clutter
    })

    document.querySelector(".cartexpnd").addEventListener("mouseleave",()=>{
            document.querySelector(".cartexpnd").style.display="none";
    })
}

addPopularProducts()
addProducts()
addToCart()
showCart()
