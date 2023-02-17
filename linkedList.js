class node {
    constructor(data,next=null) {
        this.data = data;
        this.next = next;
    }
}

class list {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    //insert node at head
    prepend(value){
        this.head = new node(value,this.head);
        this.length++;
    }

    //insert node at tail
    append(value){
        let current;
        let newData = new node(value)
        if(this.head === null){
            this.head = newData
        }else{
            current = this.head;
            while(current.next){
                current = current.next
                
            }
            current.next = newData
        }
        
        this.length++;
    }

    // returns the length of list
    size(){
        console.log(this.length)
    }
    
    //return first node value
    first(){
        let current = this.head
        console.log(current.data)
    }
    
    //returns last node value
    tail(){
        let current = this.head;
        if(current.next === null){
            console.log(current.data)
        }else{
            while(current.next !== null){
                current = current.next
            }
            console.log(current.data)
        }
    }
    
    //returns value at index based on count starting at 0
    at(index){
        let current = this.head;
        let count = 0;

        while(count !== index){
            current = current.next
            count++;
        }

        if(current === null){
            console.log(null)
        }else{
            console.log(current.data)
        }
    }
    
    //removes last node 
    pop(){
        let current = this.head
        
        if(current.next === null){
            current.data = null
        }else{
            while(current.next.next !== null){
                current = current.next
            }
            current.next = null;
        }

        this.length--;
    }
    
    //returns true if list contains value else false
    contains(value){
        let current = this.head
        
        if(current.data === value){
            console.log(true)
            return true;
        }
        
        while(current.next !== null){
            current = current.next
            if(current.data === value){
                
                console.log(true)
                return true;
            }
        }
        console.log(false)
        return false;

        
    }
    
    //finds index, based on count starting at 0, of value. else null
    find(value){
        let count = 0;
        let current = this.head;

        while(current.data !== value){
            if(current.next === null){
                console.log(null)
                return null
            }
            current = current.next
            count++;
        }
        console.log(count)
    }
    
    //prints list 
    print(){
        let current = this.head
        let output = ""
    
        while(current){
            output += ` (${current.data}) ->`
            current = current.next
        }
    
        output += ` ${null}`
    
        console.log(output)
    
    }

    //inserts value at index 
    insertAt(value,index){
        let current = this.head;
        let nextNode = this.head;

        if(index === 0){
            this.prepend(value)
        }else if( index === this.length){
            this.append(value)
        }else{
            for(let i=1;i<=index;i++){
                nextNode = nextNode.next;
            }
            for(let i = 1; i < index; i++){
                current = current.next;
            }
            
            current.next = new node(value,nextNode)
            
            
        }
        this.length++;
    }


    //removes value at index
    removeAt(index){
        let current = this.head;
        let nextNode= this.head;

        if(index === 0){
            this.head = current.next
        }
        if( index === this.length){
            this.pop()
        }else{
            for(let i = 1; i < index; i++){
                current = current.next;
            }

            current.next = current.next.next
        }
        this.length--;
    }

}






