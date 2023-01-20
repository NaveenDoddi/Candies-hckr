function candies(n, arr) {
    // Write your code here
    var sum = 0;
    var arrr = []
    var count = 0
    for(let i=0; i<n; i++){
        if(arr[i] <= arr[i+1]){
            count = 1
            
            
        }
        else{
            count++ 
            if (arr[i+1] <+ arr[i+2]){
               count = 1
               count++
            }
            

        }
        sum += count
        arrr[i] = count
        // console.log(arr[i]<arr[i+1])
        console.log(arrr)
        
        
    }
return sum
}