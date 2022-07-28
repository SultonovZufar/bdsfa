const roet = require ('./roate1')

module.exports = (xbox) => {
 let norm = path.normalized(p)
 let abs = path.isAbsolute(norm)
 return(abs) ? norm : new Error ('this route incorrect')
}

