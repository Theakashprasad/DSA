class HashMap{
    constructor(size = 10){
        this.table = Array(size)
        this.size = size
    }

    hash(key){
        let hashIndex = 0
        for (let i = 0; i < key.length; i++) {
            hashIndex += key.charCodeAt(i)
        }
        return hashIndex % this.size
    }
    insert(key, val){
        const index = this.hash(key)
        if( !this.table[index] ){
            this.table = []
        }
        this.table[index] = {key, val}
        
    }
    display(){
        for (let i = 0; i < this.size; i++) {
            console.log(this.table[i]);
                        
        }
    }
}

const newHash = new HashMap
newHash.insert('name', 'ak')
newHash.display()