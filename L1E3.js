const item = {
    "name": "Biscuits",
    "type": "regular",
    "category": "food",
    "price": 2.0
};

function applyCoupon(category){
    return function(discount){
        return function(myItem){
            if(myItem.category == category){
                myItem.price *= 1-discount; 
            }
            return myItem;
        }
    }
}

const y = applyCoupon("food")(0.1)(item).price === 1.8;
console.log("applyCoupon", y); 

