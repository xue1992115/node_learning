/**
 * 需求描述：
 * 往一个文件追加新的内容，01_file.txt，写入内容：我是一个小小鸟
 */
// 1、导入模块
const fs = require('fs');
// 2、写入文件(异步写入)
fs.appendFile('./doc/01_file.txt', '\r\n我是新追加的内容', (err) => {
    if(err) {
        console.log('追加失败！');
        return;
    } else {
        console.log('追加成功！')
    }
})
// 3、写入文件(同步写入)
fs.appendFileSync('./doc/02_file.txt', '\r\n哈哈哈哈')
console.log('2222');
// 4、fs.writeFile其实也是可以追加写入的， 配置第三个参数即可
fs.writeFile('./doc/01_file.txt', '\r\n我是一个小小鸟', { flag: "a" }, (err) => {
    if(err) {
        console.log('写入失败！');
        return;
    } else {
        console.log('写入成功！')
    }
})

