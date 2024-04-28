const fs=require('fs')
const rstream= fs.createReadStream('file1.txt','utf-8')
const wstream=  fs.createWriteStream('file2.txt')
/*rstream.on('data',(chunk)=>{
    wstream.write(chunk)
})

*/
rstream.pipe(wstream)
//make new directory
if(!fs.existsSync('nodejs2024'))
{
fs.mkdir('nodejs2024',(err)=>{
    if(err) throw err;
    console.log('Directory created')
})
}
if(fs.existsSync('nodejs2024'))
{
fs.rmdir('nodejs2024',(err)=>{
    if(err) throw err;
    console.log('Directory removed')
})
}
