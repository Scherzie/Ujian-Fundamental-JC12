const Faktorial=(num)=>{
    var total=1
    for (let i=num;i>=1;i--){
        total*=i
    }
    return total
}
console.log(Faktorial(5))//120
console.log(Faktorial(4))//24
console.log(Faktorial(10))//3628800