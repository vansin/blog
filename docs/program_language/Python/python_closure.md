# Python闭包

以下为一个简单的闭包示例



```python	
def multiply_by(factor):
    def multiply(value):
        return value*factor
    return multiply

time2 = multiply_by(2)

print(time2(10))
print(multiply_by(2)(10))
```

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211021190136.png)

