public class Main {
    static int calSumUtil(int a[], int b[],  int n, int m) { 
        // array to store sum. 
        int[] sum= new int[n]; 
      
        int i = n - 1, j = m - 1, k = n - 1; 
      
        int carry = 0, s = 0; 
      
        // Until we reach beginning of array. 
        // we are comparing only for second  
        // array because we have already compare 
        // the size of array in wrapper function. 
        while (j >= 0)  {
            s = a[i] + b[j] + carry; 
              
            sum[k] = (s % 10); 
      
            // Finding carry for next sum. 
            carry = s / 10; 
      
            k--; 
            i--; 
            j--; 
        }
        
        int ans = 0;
        if (carry == 1) 
            ans = 10; 
      
        // Converting array into number. 
        for ( i = 0; i <= n - 1; i++) { 
            ans += sum[i]; 
            ans *= 10; 
        } 
      
        return ans / 10; 
    }
    static int calSum(int a[], int b[], int n, int m) { 
        // Making first array which have 
        // greater number of element 
        if (n >= m) 
            
            return calSumUtil(a, b, n, m); 
            
      
        else
            return calSumUtil(b, a, m, n); 
    } 
  
    public static void main(String[] args) {
        int a[] = { 1,2,7 }; 
        int b[] = { 9,2,8 }; 
          
        int n = a.length; 
        int m = b.length; 
        System.out.println(calSumUtil(a, b, n, m)); 
        

    }
}
