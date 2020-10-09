public class Solution {
  
    //public void sum(int[] a, int n) {
    public static void sum(int[] a, int n) {
      int i = n;
      if (a[i] < 9) {
        a[i] = a[i] + 1;
      } else {
        
        a[i] = 0;
        i--;
        
        sum(a, i);
      }
    

        
      
    
      if (a[0] > 0)  
            System.out.print(a[0] + ", ");  
      
      int j; 
      for (j = 1; j <= n; j++) {  
          System.out.print(a[j]);  
    
            if (j < n)  
                System.out.print(", ");  
      } 
    } 
    
    
    public static void main(String[] args) {
      //if you use static in method sum then no need 
      //to instantiate class. if not, then you need
      //to do it in the main method
      //Solution a_test = new Solution();
      int n = 4;
      int a[] = {0, 1, 9, 3, 9}; 
    
      sum(a, n);
      // if (a[0] > 0)  
      //       System.out.print(a[0] + ", ");  
      //       int i; 
      //       for (i = 1; i <= n; i++) {  
      //         System.out.print(a[i]);  
    
      //       if (i < n)  
      //           System.out.print(", ");  
      //       } 

    }
}
