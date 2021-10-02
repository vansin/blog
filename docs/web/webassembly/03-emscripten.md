---
theme: smartblue
---
# Webassembly的C++编译工具链emscripten



Emscripten 是一个完整的 WebAssembly 开源编译器工具链。可以使用 Emscripten

- C 和 C++ 代码或任何其他使用 LLVM 的语言编译成 WebAssembly，并在 Web、Node.js 或其他 wasm 运行时上运行它。
- 将其他语言的 C/C++ 运行时编译成 WebAssembly，然后以间接方式运行其他语言的代码（例如，[Python](https://github.com/iodide-project/pyodide) 和 [Lua](https://daurnimator.github.io/lua.vm.js/lua.vm.js.html) 已经这样做了）。
- 实际上，任何可移植的 C 或 C++ 代码库都可以使用 Emscripten 编译成 WebAssembly，从需要渲染图形、播放声音、加载和处理文件的高性能游戏到 Qt 等应用程序框架。 Emscripten 已经被用于将一长串真实世界的代码库转换为 WebAssembly，包括商业代码库，如 [Unreal Engine 4](https://blog.mozilla.org/blog/2014/03/12/mozilla-and-epic-preview-unreal-engine-4-running-in-firefox/) 和 [Unity](https://blogs.unity3d.com/2018/08/15/webassembly-is-here/) 引擎。 有关示例和演示，[请参阅 wiki 上的社区维护列表](https://github.com/emscripten-core/emscripten/wiki/Porting-Examples-and-Demos)。
- Emscripten 生成小而快的代码！ 它的默认输出格式是 [WebAssembly](http://webassembly.org/) ，这是一种高度优化的可执行格式，运行速度几乎与本机代码一样快，同时具有可移植性和安全性。 Emscripten 通过与 LLVM、[Binaryen](https://github.com/WebAssembly/binaryen)、[Closure Compiler](https://developers.google.com/closure/compiler) 和其他工具的仔细集成，自动为您做很多优化工作。



## Emscripten 工具链

[Emscripten Compiler Frontend (emcc)](https://emscripten.org/docs/tools_reference/emcc.html#emccdoc)。 这是标准编译器（如 gcc 或 clang）的直接替代品。

Emcc 使用 [Clang](https://emscripten.org/docs/site/glossary.html#term-clang) 和 LLVM 编译为 WebAssembly。 Emcc 还发出 JavaScript，为编译后的代码提供 API 支持。 JavaScript 可以由 [Node.js](https://emscripten.org/docs/site/glossary.html#term-node-js),执行，也可以在浏览器的 HTML 中执行。



此 [Emscripten SDK](https://emscripten.org/docs/getting_started/downloads.html#sdk-download-and-install) 是安装完整工具链的教程, 包括 emcc和LLVM等，能在Linux、Windows和MacOS上运行



### 使用Emscripten移植代码

Emscripten 对可移植 C/C++ 代码的支持相当全面。 对 C 标准库、C++ 标准库、C++ 异常等的支持非常好，[SDL2](https://www.libsdl.org/) 和其他 API 也是如此。 Emscripten 支持中的 [OpenGL](https://emscripten.org/docs/porting/multimedia_and_graphics/OpenGL-support.html#opengl-support) 支持非常适合 OpenGL ES 2.0 类型的代码，对于其他类型也可以接受。



本机和 [Emscripten 运行时环境](https://emscripten.org/docs/porting/emscripten-runtime-environment.html#emscripten-runtime-environment)之间存在差异，这意味着通常需要对本机代码进行一些更改。 也就是说，许多应用程序只需要更改它们定义主循环的方式，并修改它们的[文件处理](https://emscripten.org/docs/porting/files/file_systems_overview.html#file-system-overview)以适应浏览器/JavaScript 的限制。



还有一些限制可以使一些代码更容易移植——阅读[可移植性指南](https://emscripten.org/docs/porting/guidelines/portability_guidelines.html#code-portability-guidelines)来确定你可能需要在哪些地方花费更多的精力。

## Reference

https://emscripten.org/index.html

