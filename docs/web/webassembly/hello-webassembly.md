# Hello WebAssembly

本文运行一下Hello WebAssembly

## 安装

```shell
git clone https://github.com/emscripten-core/emsdk.git
cd emsdk
```

```shell
./emsdk install latest
./emsdk activate latest
source ./emsdk_env.sh
```

## 编译运行hello.js

新打开一个命令行终端一定要

```shell
source ./emsdk_env.sh
```



```c
// hello.c
#include <stdio.h>

int main() {
  printf("hello, world!\n");
  return 0;
}
```



```bash
emcc hello.c -o hello.js
```



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210929093422.png)

可以看到会新生成一个hello.wasm和hello.js

```shell
node hello.js
```



![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210929093522.png)



## 编译运行hello.html

```bash
emcc hello.c -O3 -o hello.html
python -m SimpleHTTPServer 8000
```

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20210929093727.png)

## Reference

https://wasmbyexample.dev/examples/hello-world/hello-world.c.en-us.html

