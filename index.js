// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
function isArray(o){
    return Object.prototype.toString.call(o) == '[object Array]';
}
console.log(isArray(a));
console.log(isArray(b));//false不是数组，true是数组。

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
var b = [];
for(var i=0; i<a.length; i++){   
    b.push(a[i]*2);
    //console.log(b);
}
console.log(b);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var color = colors.join(' ');
console.log(color.toString());
// case 2 output: 'Red+Green+White+Black'
var col = colors.join("+");
console.log(col.toString());
// case 3 output: 'Red,Green,White,Black'
console.log(colors.toString());

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
function sortNum(a,b){
    return b-a;
}
console.log(a.sort(sortNum));


// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function findMost(arr){
    var h = {};
    var maxNum = 0;
    var maxEl = null;
    for(var i=0; i<arr.length; i++){
        var a = arr[i];
        h[a] === undefined ? h[a] = 1 : (h[a]++);
        if(h[a]>maxNum){
            maxEl = a;
            maxNum = h[a];
        }
    }
    return '出现最多的元素是：' + maxEl;
}
console.log(findMost(a));