const fs = require('fs')

const conversion = (str) => {
  const num = "零壹贰叁肆伍陆柒捌玖".split('')
const unit = "分角元拾佰仟".split('')
    let arr = str.split('')
    console.log(str)
    let mem = 1;
    let rest = arr.reduce((acc, char) => {
        let u =  unit.indexOf(char) - 2
        // console.log(num.indexOf(char).toString(), char)
        if(u === -3) { mem = num.indexOf(char); return acc }
        else {
            
            let res = acc + mem*Math.pow(10, u)
            mem = 1;
            return res;
        }
    }, 0)
    if(str.search("拾元")!=-1)rest-=1;
    console.log(rest)
    return rest
}
try {
  const data = fs.readFileSync('./bills.csv', 'utf8')
  let t = Array.from(data.trim().split('\r\n'))
  t.shift();
  let errCount = 0;
  let n = t.reduce((acc,str) => {
      let temp = str.trim().split(',')

      let res = acc+conversion(temp[0])*temp[1]
      console.log(res)
      return res
  }, 0)
  console.log(n, 'res')
} catch (err) {
  console.error(err)
}
