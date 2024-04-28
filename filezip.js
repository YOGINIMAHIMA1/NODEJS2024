const fs= require('fs')
const express= require('express')
const app =express();
const zlib= require('zlib')
const PORT= 3000;
const stream= fs.createReadStream('Files.txt').pipe(
zlib.createGzip().pipe(fs.createWriteStream('Files.zip')));


