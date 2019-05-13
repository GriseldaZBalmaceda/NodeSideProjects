// const square=function(num){
// return num *num
// }
// const square = (num)=>{
// return num *num
// }
// const square =(num)=>num*num

// console.log(square(3))

// const event ={
//     name:'Birthday Party',
//     printGuestList:function(){
//         console.log("Guest list for " + this.name)
//     }
// }
const event ={
    name:'Birthday Party',
    guestList:['John','Jen','Mike'],
    printGuestList(){
        console.log("Guest list for " + this.name)

        this.guestList.forEach((x)=>{
            console.log(x + ' is attending ' + this.name)
        })
    }
}
event.printGuestList();