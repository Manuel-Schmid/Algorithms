const nums = [2,6,3,5,3,-6,16]

console.log(twoSum(nums, 10))

function twoSum(nums, res) {
    let checkedNums = []
    for(const num of nums) {
        const  neededNum = res - num
        if (checkedNums.indexOf(neededNum) > -1) return {num: num, neededNum: neededNum}
        else checkedNums.push(num)
    }
    return {}
}
