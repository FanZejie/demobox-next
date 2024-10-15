

var minSubArrayLen = function(target, nums) {
    const len = nums.length
    let left = 0
    let ans = len+1
    let sum = 0
    
    for(let right = 0; right < len;right++){
        sum += nums[right]
        while(sum >= target){
            ans = Math.min(ans,right - left + 1)
            sum -= nums[left++]
        }
    }
    return ans <= len ? ans : 0
};


console.log(minSubArrayLen(7,[2,3,1,2,4,3]))