const order = {

};

if (!order?.customer?.address?.city) {
  console.log('City is required');
}


// const order = {};

// let x = order.customer?.address?.city ?? "City is required";

// if (order.customer?.address?.city ?? "City is required") {
//   console.log(x);
// }