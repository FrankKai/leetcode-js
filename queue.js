class MyQueue  {
    constructor(){
        // store elements
        this.data = [];
        // a pointer to indicate the start position
        this.p_start = 0;
    }
    /**Insert an element into the queue. Return true if the operation is successful. */
    enQueue(x){
        this.data.push(x);
        return true;
    }  
    /** Delete an element from the queue. Return true if the operation is successful. */
    deQueue(){
        if(this.isEmpty()){
            return false;
        }
        this.p_start++;
        return true;
    }
    /** Get the front item from the queue. */
    Front(){
        return this.data[this.p_start];
    }
    /** Checks whether the queue is empty or not. */
    isEmpty() {
        return this.p_start >= this.data.length;
    }
}

export default MyQueue;