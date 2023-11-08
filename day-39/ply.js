if(!Array.prototype.includes) {
    Array.prototype.includes = function(el) {
        for(let i = 0; i< this.length; i++) {
            if(this[i] === el) {
                return true
            }
        }
        return false
    }
}