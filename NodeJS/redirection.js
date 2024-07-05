const http = require('http')
const { type } = require('os')
// function listener(req,res){
// //   console.log(req)
// console.log(req.url)
// console.log(req.method)
// console.log(req.headers)
//   process.exit()
// }
// const server = http.createServer(listener)
// server.listen(8000)


const server = http.createServer((req,res)=>{
    const url = req.url
    if(url== '/'){
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Karka</title></head>')
        res.write('<body><h1>Hello...</h1></body>')

        res.write('</html>')
        return res.end()
    }
    else if(url=='/form'){
        res.setHeader('Content-type','text/html')
        res.write('<html>')
        res.write('<head><title>Karka</title></head>')
        res.write('<body><form action="/submit" enctype="multipart/form-data" method="POST"><input type="text "value=" " name="user"/><input type="submit" value="submit"/><input type="file" name="file"/></form></body>')

        res.write('</html>')
        return res.end()

    }
    else if(url == "/submit"){
        req.on("data",(chunk)=>{
            console.log(chunk)

        })
        res.setHeader("Location","/form")
        res.statusCode = 302
        return res.end()
    }
    res.setHeader('Content-type','text/html')
    res.write('<html>')
    res.write('<head><title>Karka</title></head>')
    res.write('<body><h1>Hello...q1234</h1></body>')

    res.write('</html>')
    res.end()
})
server.listen(8000)