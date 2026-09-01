class Solution {
    public List<String> generateParenthesis(int n) {

        ArrayList<String> solution = new ArrayList<>();

        backtrack("", 0, 0, n, solution);

        System.out.println(solution.toString());
        
        return solution;
    }
    
    public void backtrack(String str, int open, int close, int n, ArrayList<String> solution){
            if(str.length() == 2*n){
                solution.add(str);
            }

            if(open < n){
                backtrack(str + "(", open + 1, close, n, solution);
            }

            if(open > close){
                backtrack(str + ")", open, close + 1, n, solution);
            }

        }

}
