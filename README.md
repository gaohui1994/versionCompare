# versionCompare
版本号比较


**版本比较的三种结果及其返回值**

1. 第一个版本低于第二个版本的时候 return -1
2. 第一个版本等于第二个版本的时候 return 0
3. 第一个版本小于第二个版本的时候 return 1


**版本的命名风格主要有以下三种,在比较版本号的时候,只需要比较主版本号,主版本号由用户输入**

1. GNU版
主版本号 . 子版本号 [. 修正版本号 [. 编译版本号 ]]
示例 : 1.2.1, 2.0, 5.0.0 build-13124

2. Windows版
主版本号.子版本号[修正版本号[.编译版本号]]
示例: 1.21, 2.0

3. Net.Framework版
主版本号.子版本号[.编译版本号[.修正版本号]]
示例: 1.21, 2.0

> 此外还有测试版本号,1.0以下的版本:0.x

**测试数据:两两交互比较:对测试数据进行了严格的约束处理**
1.2.1  5.0.0  1.21   2.0   0.1  0.01   1.01
......

对空值和0值进行了相关的处理,对数据的格式使用正则匹配的形式进行了严格匹配

        测试用例: 文本框输入v1,v2对应的值如下:每一组数据进行正反处理

        空值处理:
            ["", ""],
            ["1", ""],
            ["", "0"],



        数据格式约束:输入的值由数字和小数点组成,并且第一位必须是数字,最后一位也必须是数字
            - 在以0开头的情况下,进行特殊的处理
            ["0.0.1.2.1", "0.0.1.2"],
            ["0.1.5", "0.1.8"],
            ["0.1.2", "0.2.2"],
            

            ["1.0", "1"],
            ["1.0", "1.0"],
            ["1.0.0", "1.0"],

            ["1.1", "1"],
            ["1.2.1", "1.2.1.0"],
            ["1.1", "1.1.0"],

            ["11.11.11","11.11.11.1"]


所有的测试用例都已经通过测试,在算法逻辑上也没有问题