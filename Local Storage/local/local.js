// localStorage.setItem('name','jaculin')


let arr=['jaculin',26]
// localStorage.setItem('Details',JSON.stringify(arr))


let name=localStorage.getItem('name')
let details=localStorage.getItem("Details")
console.log(details)


let det=JSON.parse(localStorage.getItem("Details"))
console.log(det,"ja")

// localStorage.removeItem('name')

localStorage.clear()