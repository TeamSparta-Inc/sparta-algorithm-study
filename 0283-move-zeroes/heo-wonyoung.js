let moveZeroes = function (nums) {
    let low = 0;
    let high = low + 1;

    while(high <= nums.length-1){
        if(nums[low] != 0){
            low+=1
            high+=1
        }else{
            if(nums[high] != 0){
                [nums[low], nums[high]] = [nums[high], nums[low]]
                low+=1
            }
            high+=1
        }
    }
};