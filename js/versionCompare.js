/*
 * @Author: 高辉
 * @Date:   2017-04-01 06:45:52
 * @Last Modified by:   高辉
 * @Last Modified time: 2017-04-01 10:22:22
 */
function versionCompare(v1, v2) {
    var result;
    //对获取到的字符串类型的版本号进行转化
    var v1Arr = v1.split('.').map(function(data) {
        return parseFloat("0." + data);
    });
    var v2Arr = v2.split('.').map(function(data) {
        return parseFloat("0." + data);
    });

    /*

    利用进行版本号比较的逻辑分析:

        1.转化后的两个数组的长度相同
        2.转化后的两个数组的长度不同

    对两个数组按照最小的数组长度进行截取,在前面部分都相同的情况下,谁有剩余,并且剩余部分不为0,谁的版本号就大,剩余都为0,则相同

    在截取部分不相同的情况下,就不必在判定冗余部分,直接对现有的连个数组进行循环比较

    */
    var arrLen = Math.min(v1Arr.length, v2Arr.length);

    var v1ArrSplice = v1Arr.splice(0, arrLen);
    var v2ArrSplice = v2Arr.splice(0, arrLen);

    //过滤数组截取后的剩余部分中的0值
    v1Arr = v1Arr.filter(function(ele, index, arr) {
        if (ele != 0) {
            return true;
        }
    })
    v2Arr = v2Arr.filter(function(ele, index, arr) {
            if (ele != 0) {
                return true;
            }
        })
        //在截取部分相同的情况下
    if (v1ArrSplice.join() === v2ArrSplice.join()) {
        if (v1Arr.length > v2Arr.length) {
            result = 1;
        } else if (v1Arr.length < v2Arr.length) {
            result = -1;
        } else {
            result = 0;
        }
    }
    //在截取部分不相同的情况下,直接对现有的连个数组进行循环比较
    else {
        result = compare(arrLen, v1ArrSplice, v2ArrSplice);
    }
    //两个数组的比较
    function compare(length, arr1, arr2) {
        for (var i = 0; i < length; i++) {
            if (arr1[i] === arr2[i]) {
                continue;
            } else if (arr1[i] > arr2[i]) {
                return 1;
            } else {
                return -1;
            }
        }
    }
    return result;
}
