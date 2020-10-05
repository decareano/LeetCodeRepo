public class Main {

    

    public int pivotIndex(int[] nums) {
            int sum = 0, leftsum = 0;
            for (int x: nums) sum += x;
            for (int i = 0; i < nums.length; ++i) {
                if (leftsum == sum - leftsum - nums[i]) return i;
                    leftsum += nums[i];
                
        
            }
            return -1;
    }
    
    public static void main(String args[]){
        Main lcs = new Main();
        int[] intArr = new int[]{ 1,7,3,6,5,6 }; 
        int result = lcs.pivotIndex(intArr);
        System.out.println(result);
        
    }
    // public static void main(String args[]){
    //     Main lcs = new Main();
    //     String str1 = "abcdefg";
    //     String str2 = "acefg";
        
    //     int result = lcs.lcsDynamic(str1.toCharArray(), str2.toCharArray());
    //     System.out.print(result);
    // }

    
    
    
}
