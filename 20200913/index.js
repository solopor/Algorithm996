/**
 * 求解无序队列中的最长子序列，详见： https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/shi-pin-tu-jie-zui-chang-shang-sheng-zi-xu-lie-by-/
 * @param {} array 
 */
function calculateMaxSubsequenceLength(array) {
    if (!array || array.length == 0) {
        return 0;
    }
    const routes = [];
    for (let i = 0; i < array.length; i++) {
        routes[i] = 1;
    }
    for (let i = 1; i < array.length; i++) { 
        for (let j = 0; j < i; j++) {
            if (array[j] < array[i] && (temp =  routes[j] + 1) > routes[i]) {
                routes[i] = temp;
            }
        }
    }
    let maxRoute = 1;
    for (const route of routes) {
        if (route > maxRoute) {
            maxRoute = route;
        }
    }
    console.log(maxRoute);
}

calculateMaxSubsequenceLength([1,2,5,4,3,7,8,6,9,0])

function calculateMaxSubsequenceLength2(array) {
    const sortArray = [];
    const routes = [];
    for (let i = 0; i < array.length; i++) {
        routes[i] = 1;
    }
    sortArray.push({key: array[0], value: routes[0]});
    for (let i = 1; i < array.length; i++) {
        for (j = 0; j < i; j++) {

        }
    }
}

function lengthOfLIS(nums) {
    const tails = [];
    let res = 0;
    for(const num of nums) {
        let i = 0, j = res;
        console.log(`num start ----->${num}, res=${res}`);
        while(i < j) {
            let m = Math.floor((i + j) / 2);
            if(tails[m] < num) i = m + 1;
            else j = m;
        }
        console.log(`i=${i}`);
        tails[i] = num;
        if(res == j) res++;
    }
    console.log(res);
    return res;
}

lengthOfLIS([1,3,7,8,2,4,5,6])


/**
 * 二分查找
 * @param {}} array 
 * @param {*} aim 
 */
function middleSearch(array, aim) {
    const length = array.length;
    let i = 0, j = length;
    let middle = i;
    let hitheTarget = false;
    while(i < j) {
        middle = Math.floor((i + j) / 2);
        if (array[middle] > aim) {
            j = middle;
        } else if (array[middle] < aim) {
            i = middle + 1;
        } else {
            hitheTarget = true;
            break ;
        }
    }
    if (hitheTarget) {
        console.log('middle =' + middle);
    } else {
        console.log('not hit the target');
    }
}

middleSearch([0,1,2,3,4,5], 4)