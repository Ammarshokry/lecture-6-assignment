let value = +prompt('ادخل قيمة الميراث')
let boysnum = +prompt('كم عدد الاولاد')
let girlsnum = +prompt('كم عدد البنات')
let mother = confirm('هل هناك زوجه')
if(mother == true){
    let boys = value / boysnum
    let girls = value / girlsnum -(boys / 2)
    let mum = value / 8
    let msg = `boys money is ${boys} and girls money is ${girls} and mums money is ${mum}`
    document.write(msg)
}else{
    let boys = value / boysnum
    let girls = value / girlsnum -(boys / 2)
    let msg = `boys money is ${boys} and girls money is ${girls}`
    document.write(msg)
}