class Solution {
    public boolean isValid(String s) {

        Stack<Character> parentheses = new Stack<>();
        HashMap<Character, Character> paranthesesMap = new HashMap<>();

        paranthesesMap.put('(', ')');
        paranthesesMap.put('[', ']');
        paranthesesMap.put('{', '}');

        for(int i =0; i < s.length(); i++){
            if(s.charAt(i) == '('){
                parentheses.push(')');
            }else if(s.charAt(i) == '['){
                parentheses.push(']');
            }else if(s.charAt(i) == '{'){
                parentheses.push('}');
            }else if(parentheses.isEmpty() || parentheses.pop() != s.charAt(i)){
                return false;
            }
        }   

        System.out.println(" HI");

        return parentheses.isEmpty();
    }
}