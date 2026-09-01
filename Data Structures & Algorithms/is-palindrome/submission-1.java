class Solution {
    public boolean isPalindrome(String s) {
        String newString = s.toLowerCase().replaceAll("[^a-zA-Z0-9]", "");;
        for(int i = 0, j = newString.length() - 1; i < newString.length() && j >= 0; i++, j--){
            if(newString.charAt(i) != newString.charAt(j)){
                return false;
            }
        }
        return true;
    }
}
