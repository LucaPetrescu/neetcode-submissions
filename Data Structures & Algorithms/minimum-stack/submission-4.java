class MinStack {

    private ArrayList<Integer> stack;
    private ArrayList<Integer> minStack;
    private int min;

    public MinStack() {
        this.stack = new ArrayList<>();
        this.minStack = new ArrayList<>();
    }
    
    public void push(int val) {
        this.stack.add(val);
        updateMin(val);
    }

    private void updateMin(int val){
        if(this.minStack.size() == 0){
            
            this.minStack.add(val);
        }else{
            if (val <= this.minStack.get(this.minStack.size() - 1)) {
                this.minStack.add(val);
            } else {
                this.minStack.add(this.minStack.get(this.minStack.size() - 1)); // Add the current min again
            }
        }
    }
    
    public void pop() {
        if(this.stack.size() != 0 && this.minStack.size() != 0){
            this.stack.remove(this.stack.size() - 1);
            this.minStack.remove(this.minStack.size() - 1);
        }
        
    }
    
    public int top() {

        if(this.stack.size() != 0){
            int index = this.stack.size() - 1;
            return this.stack.get(index);
        }

        return 0;
        
    }
    
    public int getMin() {

        if(this.minStack.size() != 0){
            return this.minStack.get(this.minStack.size() - 1);
        }

        return 0;
    }
}
