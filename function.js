function orderFood(food,quantity){

    return {food,quantity}

}

function receiveOrder(recievedOrderDetail){
    console.log(recievedOrderDetail)
    
    return recievedOrderDetail

}

function cookFoodToOrder(){

}

function pickupOrder(){

}

function deliverOrder(){

}

const orderDetails = orderFood("pizza",4);
const receivedDetails = receiveOrder;
console.log(receivedDetails,"test")
console.log(orderDetails,"This is what i ordered")