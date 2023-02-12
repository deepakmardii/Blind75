/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const isEmpty = nums.length === 0;
    if (isEmpty) return 0;

    return linearSearch(nums);
};

const linearSearch = (nums, max=nums[0]) => {
    for(let index=0; index<nums.length; index++){
        max=getMax(nums, index,max);
    }
    return max;
}

const getMax=(nums, index, max, product=1)=>{
    for(let num=index; num<nums.length; num++){
        product*=nums[num];
        max=Math.max(max,product);
    }
    return max;
}