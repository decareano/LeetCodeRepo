public class Main {
    void sum(int a[], int n) { 
      //how many items in array
      int i = n;
      
      if (a[i] < 9) {
        a[i] = a[i] + 1;
      } else if (a[i] >= 9) {
        a[i] = 0;
        i--;
        
      sum(a, i);
      
      }
 
        // }
        
        // int ans = 0;
        // if (carry == 1) 
        //     ans = 10; 
      
        // // Converting array into number. 
        // for ( i = 0; i <= n - 1; i++) { 
        //     ans += sum[i]; 
        //     ans *= 10; 
        // } 
      
        // return ans / 10; 
    }
    
  
    public static void main(String[] args) {
         Main obj = new Main();  
         System.out.println(obj);
            
        // number of elements in array  
        int n = 4;  
    
        // array elements, index of array  
        // should be 1 based, hence, 0 is  
        // added here at arr[0]  
        int a[] = {0, 1, 9, 3, 9}; 
    
        obj.sum(a, n);  
    
        // If 1 was appended at head  
        // of array then, print it  
        if (a[0] > 0)  
            System.out.print(a[0] + ", ");  
  
        int i; 
        for (i = 1; i <= n; i++) {  
            System.out.print(a[i]);  
    
            if (i < n)  
                System.out.print(", ");  
        }  
  
    }  
} 

