const a = 'm1模块中的变量a'

export const b = 20

export const c = 30

const obj = {
    name: '呵呵了'
}

const fn = () => {
    console.log('这是fn')
}

/* 
    1. 一个模块中只能有一个默认导出
    2. 导入模块时，路径必须以 /  ./  ../开头
*/

export default a

export {
    obj,
    fn
}
