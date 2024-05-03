const EventEmitter= require('events');
const emitter= new EventEmitter()
emitter.on("order-pizza",(size,toppings)=>{
    console.log(`Ordered Recieved Baking ${size}  Pizza with ${toppings}`)
})
emitter.on("order-pizza",(size)=>{
    console.log(`Ordered Recieved Baking ${size} Pizza`)
}
)
emitter.emit("order-pizza","large","mushroom")