/**
 * 需求描述：
 * 新建一个文件，01_file.txt，写入内容：我是一个小小鸟
 */
// 1、导入模块
const fs = require('fs');
// 2、写入文件(异步写入)
fs.writeFile('./doc/01_file.txt', '我是一个小小鸟', (err) => {
    if(err) {
        console.log('写入失败！');
        return;
    } else {
        console.log('写入成功！')
    }
})
// 3、写入文件(同步写入)
fs.writeFileSync('./doc/02_file.txt', '我是一个小小鸟02')
console.log('2222');

