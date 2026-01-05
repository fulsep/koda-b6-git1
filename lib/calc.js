export function sum(num1, num2){
  if(typeof num1 === "object"){
    // console.log("Parameter 1 harus bertipe number")
    const err = new Error("Tipe data parameter 1 tidak boleh objek");
    throw err;
  }
  
  if(typeof num1 !== "number"){
    // console.log("Parameter 1 harus bertipe number")
    const err = new Error("Tipe data parameter 1 harus number");
    throw err;
  }
  return num1+num2;
}

export function multiply(num1, num2){
  return num1*num2;
}

export function divide(num1,num2){
  return num1/num2;
}