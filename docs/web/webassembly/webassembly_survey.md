---
theme: smartblue
---

# Webassembly资源汇总

自2015年4月[W3C WebAssembly Community Group](https://www.w3.org/community/webassembly/2015/04/29/call-for-participation-in-webassembly-community-group/)成立以来，已近走过接近7个春夏秋冬，

本文旨在调研Webassembly产生的历史背景、能解决的问题、使用Webassembly的产品 和 Webassembly未来的发展趋势，如果错误请求斧正，本文将随着笔者的水平不断提升而持续更新。

![](https://moonstarimg.oss-cn-hangzhou.aliyuncs.com/picgo_img/20211003093522.png)

## 相关社区
- [W3C Community Group](https://www.w3.org/community/webassembly/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/webassembly)
- [Twitter](https://twitter.com/webassemblynews)
- [Slack: WebAssembly Developers](https://webassemblydevelopers.slack.com) [(click here to get an invitation)](https://webassemblydevelopers.herokuapp.com/)
- [WasmWeekly - a weekly newsletter](http://wasmweekly.news/)
- [WebAssembly AMA](http://pages.catchpoint.com/webassembly-ama.html)



## 相关编译工具链
- [Emscripten - LLVM-based project that compiles C and C++](http://kripken.github.io/emscripten-site/)
- [Binaryen - Binaryen is a compiler and toolchain infrastructure library for WebAssembly, written in C++](https://github.com/WebAssembly/binaryen)
- [Rust - A safe, concurrent, practical language](https://blog.rust-lang.org/2016/12/22/Rust-1.14.html)
- [ilwasm - CIL to WebAssembly compiler](https://github.com/kg/ilwasm)
- [WebAssembly for the GNU Toolchain](https://sourceware.org/ml/binutils/2017-03/msg00044.html)
- [faust2 - Functional programming language for signal processing and sound synthesis](https://faust.grame.fr/community/news/index.html#faust-webassembly-backend)
- [Asterius - A Haskell to WebAssembly compiler](https://github.com/tweag/asterius)
- [PPCI.wasm - PPCI Can compile wasm to machine code and run it in the Python process](http://ppci.readthedocs.io/en/latest/reference/wasm.html)
- [TinyGo - Go for embedded devices and WebAssembly.  Creates very small .wasm files.](https://github.com/aykevl/tinygo)
- [Bytecoder - A Rich Domain Model for Java Bytecode and Framework to interpret and transpile it to other languages such as JavaScript, OpenCL or WebAssembly](https://github.com/mirkosertic/Bytecoder)
- [AssemblyScript - Definitely not a TypeScript to WebAssembly compiler](https://github.com/AssemblyScript/assemblyscript)





## 相关语言支持

### Esoteric

- [funge.js - A Befunge JIT](https://github.com/serprex/befunge)

### Go

- [Go - Go programming language WebAssembly support](https://github.com/golang/go/wiki/WebAssembly)
- [Compiling Go to WebAssembly](https://www.sitepen.com/blog/compiling-go-to-webassembly/)
- [VueGo -  WebAssembly Vue.js wrapper written in Go](https://gitlab.com/AndrusGerman/vuego)

### JavaScript-family

- [AssemblyScript - A subset of TypeScript that compiles to WebAssembly](https://github.com/AssemblyScript/assemblyscript)
- [Getting Started with AssemblyScript](https://www.sitepen.com/blog/getting-started-with-assemblyscript/)
- [TurboScript - A TypeScript-like language that compiles to asm.js and WebAssembly (unmaintained)](https://github.com/01alchemist/TurboScript)
- [speedy.js - Accelerate JavaScript Applications by Compiling to WebAssembly (unmaintained)](https://github.com/MichaReiser/speedy.js)

### Kotlin

- [Kotlin/Native - Compile Kotlin code to native binaries](https://kotlinlang.org/docs/reference/native-overview.html)

### Lua

- [wasm_lua - Lua VM running in a WASM environment](https://github.com/vvanders/wasm_lua)

### OCAML

- [ocamlrun-wasm - OCaml Bytecode Interpreter in WASM](https://github.com/sebmarkbage/ocamlrun-wasm)

### Python

- [Pyodide - The Python scientific stack running in the browser](https://github.com/iodide-project/pyodide)
- [Rocket game - Rocket, written in Rust, compiled to WASM, running in Python](https://github.com/almarklein/rocket_rust_py/) (using [PPCI](http://ppci.readthedocs.io))

### Rust

- [Rusty Web](https://davidmcneil.github.io/the-rusty-web/)
- [parity-wasm - WebAssembly serialization/deserialization library in pure Rust](https://github.com/paritytech/parity-wasm)
- [wasmi - WebAssembly interpreter in pure Rust](https://github.com/paritytech/wasmi)
- [awesome-rust](https://github.com/rust-unofficial/awesome-rust) (*has scattered references to targeting WASM*)

### WASM-like

- [wah - a slightly higher-level language superset of webassembly](https://github.com/tmcw/wah)
- [Walt - Alternative Syntax for WebAssembly](https://github.com/ballercat/walt)
- [wam - Superset of wast syntax that is more convenient for humans to write directly](https://github.com/kanaka/wam)

### Other

- [Lys - a functional language that compiles to WebAssembly](https://github.com/lys-lang/lys)
- [Never - statically typed, embeddable functional programming language](https://github.com/never-lang/never)


## Benchmarks

- [WebAssembly Video Editor](https://d2jta7o2zej4pf.cloudfront.net/)
- [3D skeletal animation system](http://aws-website-webassemblyskeletalanimation-ffaza.s3-website-us-east-1.amazonaws.com/)
- [Cubes JS](http://kripken.github.io/ammo.js/examples/webgl_demo/ammo.html) - [Cubes (WebAssembly)](http://kripken.github.com/ammo.js/examples/webgl_demo/ammo.wasm.html).
- [JavaScript vs WebAssembly easy benchmark](https://takahirox.github.io/WebAssembly-benchmark/)
- [Performance Testing Web Assembly vs JavaScript](https://medium.com/samsung-internet-dev/performance-testing-web-assembly-vs-javascript-e07506fd5875)
- [A Real-World WebAssembly Benchmark by PSPDFKit](https://pspdfkit.com/blog/2018/a-real-world-webassembly-benchmark/)

- [Wasm vs. PNaCl Performance Benchmark by PDFTron](https://www.pdftron.com/blog/wasm/wasm-vs-pnacl/)



## 相关基础设施项目

### Web frameworks-libraries
- [asm-dom - A minimal WebAssembly virtual DOM to build C++ SPA](https://github.com/mbasso/asm-dom)
- [Blazor - Microsoft's web UI framework using C#/Razor and HTML, running client-side via WebAssembly](https://dotnet.microsoft.com/apps/aspnet/web-apps/client)
- [Yew - Rust framework for making client web apps](https://github.com/DenisKolodin/yew)
- [Perspective - Streaming pivot visualization via WebAssembly](https://github.com/jpmorganchase/perspective)
- [go-vdom-wasm - Webassembly VDOM to create web application using Golang(experimental)](https://github.com/mfrachet/go-vdom-wasm)
- [seed - A Rust framework for creating web apps](https://seed-rs.org/)
- [Vugu - A modern UI library for Go+WebAssembly](https://www.vugu.org/)
- [Vecty - Lets you build responsive and dynamic web frontends in Go using WebAssembly](https://vecty.io)

### Data processing
- [jq-web - the JSON processing tool jq ported to the web with Emscripten](https://github.com/fiatjaf/jq-web)

### WebGL
- [ammo.js - direct port of the Bullet physics engine to JavaScript using Emscripten](https://github.com/kripken/ammo.js)
- [Particle System - an experiment designed to benchmark web technologies: ES6, Emscripten and Web Assembly](https://github.com/leefsmp/Particle-System)
- [Oryol - a small, portable 3D coding framework written in C++](https://floooh.github.io/oryol/)

### webpack
- [wasm-loader - WASM webpack loader](https://github.com/ballercat/wasm-loader)
- [cpp-wasm-loader - C/C++ to WASM Webpack loader optimized for small bundle sizes](https://github.com/ClickSimply/cpp-wasm-loader)

### Browserify
- [rustify - Rust WebAssembly transform for Browserify](https://github.com/browserify/rustify)

### Node.js
- [webassembly - A minimal toolkit and runtime to produce and run WebAssembly modules.](https://github.com/dcodeIO/webassembly)
- [wasm-pack - pack up the wasm and publish it to npm!](https://github.com/ashleygwilliams/wasm-pack)
- [go-wasm-cli - Minimalistic cli to create and run (with hot reload) Go application targeting WASM](https://github.com/mfrachet/go-wasm-cli)
- [xwasm - WebAssembly Packager and WASM tooling for modern frontend](https://github.com/raphamorim/xwasm)

### .NET
- [Uno Platform - An implementation of Microsoft's UWP APIs for iOS/Android/WebAssembly, using C#/XAML on top of mono-wasm](https://github.com/nventive/Uno)
- [Ooui.Wasm - A Xamarin.Forms backend for WebAssembly, using C#/XAML on top of mono-wasm](https://github.com/praeclarum/Ooui)

### Others
- [wasm-init - Work environment and code generator for WebAssembly projects](https://github.com/shamadee/wasm-init)
- [wasm - Python WebAssembly decoder & disassembler library](https://github.com/athre0z/wasm)
- [MXnet.js - ASM.js build of MXNet, deep learning (neural nets and so) library](https://github.com/dmlc/mxnet.js/)
- [YAKC - a multi-system 8-bit emulator written in C++](https://floooh.github.io/virtualkc/index_wasm.html)
- [Eufa - a high efficient utility functions library written in webassembly](https://github.com/becavalier/eufa)
- [Argon2 in browser - Argon2 library compiled for browser runtime](https://github.com/antelle/argon2-browser)
- [cld3-asm - Wasm based JS binding for Google compact language detector 3](https://github.com/kwonoj/cld3-asm)
- [hunspell-asm - Wasm based JS binding for Hunspell spellchecker](https://github.com/kwonoj/hunspell-asm)
- [wasm-bindgen - Interoperating JS and Rust code](https://github.com/alexcrichton/wasm-bindgen)
- [ewasm - Ethereum flavored WebAssembly](https://github.com/ewasm)
- [webm-wasm - Create webm videos in JavaScript via WebAssembly](https://github.com/GoogleChromeLabs/webm-wasm)
- [wasm-pdf – Generate PDF files with JavaScript/WASM](https://github.com/jussiniinikoski/wasm-pdf)
- [go-web-app – Quickly setup Go + WebAssembly frontend apps](https://github.com/talentlessguy/go-web-app)



- https://www.pdftron.com/blog/wasm/wasm-vs-pnacl/)


## 相关工作机会
- [WebAssembly Jobs](https://webassemblyjobs.com)

## Examples
- [The Windows 10 calculator running in WebAssembly](https://platform.uno/a-piece-of-windows-10-is-now-running-on-webassembly-natively-on-ios-and-android/)
- [webassembly-examples](https://github.com/mdn/webassembly-examples)
- [Factorial in WebAssembly](https://www.hellorust.com/demos/factorial/index.html)
- [WebAssembly vs. JavaScript Animation Demo](https://github.com/sessamekesh/wasm-3d-animation-demo)
- [Web DSP](https://github.com/shamadee/web-dsp)
- [wasm-intro - Tiny WebAssembly Examples with LLVM/clang and C](https://github.com/bzar/wasm-intro)
- [webassembly-examples - From Simple To Complex.](https://github.com/reklatsmasters/webassembly-examples)
- [D3 force layout with WebAssembly](https://github.com/ColinEberhardt/d3-wasm-force/blob/master/README.md)
- [wasmBoy - Gameboy Emulator Library written in Web Assembly using AssemblyScript](https://github.com/torch2424/wasmBoy)
- [CppOpenGLWebAssemblyCMake - C++/OpenGL/OpenAL/GLFW/GLM based app built with CMake to native or WebAssembly](https://github.com/lukka/CppOpenGLWebAssemblyCMake)
- [WebAssembly A* Pathfinding](https://github.com/jakedeichert/wasm-astar)
- [HackerNews PWA with wasm-bindgen](https://github.com/ragingwind/wasm-hnpwa)
- [TiDB playground - writing SQL in an in-browser golang database in WebAssembly](https://tour.tidb.io/)
- [Made With Webassembly - Showcase of Awesome Production Applications, Side Projects, and Use Cases Made With Webassembly](https://madewithwebassembly.com/)
- [HandyTools - A tool providing features like base64 encoding/decoding, Unix time conversion, etc. Written in Go + WebAssembly](https://github.com/XD-DENG/handytools-go-webassembly)
- [WAsm Heatmap - Creates a heatmap layer for Leaflet.js with Go+WebAssembly+WebWorkers](https://aurium.gitlab.io/wasm-heatmap/)
- [Modfy - Wasm Video Transcoder](https://modfy.video/)



- eBay-Barcode Scanner(eBay条形码扫描)
- AutoCAD Web
- [在线PS软件](https://ps.gaoding.com/#/)
- [bilibili web投稿](https://link.zhihu.com/?target=https%3A//member.bilibili.com/v2%3Fspm_id_from%3D333.851.b_696e7465726e6174696f6e616c486561646572.36%23/upload/video/frame)
- Figma — 基于浏览器的多人实时协作 UI 设计工具
- Google Earth — 支持各大浏览器的 3D 地图，而且运行流畅


## Demos
- [Cubes - direct port of the Bullet physics engine](http://kripken.github.io/ammo.js/examples/webgl_demo/ammo.wasm.html)
- [Basic4GL](http://basic4gl.net/mobile/Development/webasm/basic4gl.html)
- [Symatem - an Ontology Engine, Visualizer, and Editor](http://symatem.github.io/)
- [Funky Karts](https://www.funkykarts.rocks/demo.html)
- [PSPDFKit for Web - a WebAssembly-based PDF viewer with annotation features](https://web-preview.pspdfkit.com/standalone/6)
- [Uno Platform Playground - a WebAssembly-based XAML playground](http://playground.platform.uno)
- [Roslyn Quoter - a WebAssembly-based Roslyn-based C# code quoter](http://roslynquoter-wasm.platform.uno/)
- [wasmBoy Demo/Debugger - a Gameboy Emulation library written in Web Assembly using AssemblyScript](https://wasmboy.app/)
- [DOOM 3 - Doom 3 WebAssembly port](http://wasm.continuation-labs.com/d3demo/)
- [Squoosh.app - Compress and compare images with different codecs, right in your browser](https://squoosh.app)
- [SketchUp - 3D modeling software](https://app.sketchup.com/app)
- [WebViewer - a CAD, MS Office, and PDF SDK](https://www.pdftron.com/webviewer/demo/)



## 相关视频
- [What is WebAssembly? By Some of its Creators (2019-08)](https://www.youtube.com/watch?v=fvkIQfRZ-Y0)
- [Level up Your Web Apps with WebAssembly (PerfMatters Conference 2019-04)](https://www.youtube.com/watch?v=o-2PLhMVBYU)
- [Go WebAssembly Tutorial - Building a Calculator (2018-08)](https://www.youtube.com/watch?v=4kBvvk2Bzis)
- [Get Going with WebAssembly (2018-08)](https://www.youtube.com/watch?v=iTrx0BbUXI4)
- [Build the future of the web with WebAssembly and more (Google I/O 2018-05)](https://www.youtube.com/watch?v=BnYq7JapeDA)
- [WebAssembly and the Death of JavaScript? (2018-02)](https://www.youtube.com/watch?v=pBYqen3B2gc)
- [Practical WebAssembly (2017-12)](https://www.youtube.com/watch?v=bac0dGQbUto)
- [Real World WebAssembly (Chrome Dev Summit 2017-10)](https://www.youtube.com/watch?v=PpuAqLCraAQ)
- [Andreas Rossberg - Bringing the Web up to Speed with WebAssembly (2017-06)](https://www.youtube.com/watch?v=AFy5TdrFG9Y)
- [Compiling for the Web with WebAssembly (Google I/O 2017-05)](https://www.youtube.com/watch?v=6v4E6oksar0)
- [A Cartoon Intro to WebAssembly (2017-05)](https://www.youtube.com/watch?list=PL37ZVnwpeshFmAPr65sU2O5WMs7_CGjs_&v=HktWin_LPf4)
- [WebAssembly Demystified (2017-05)](https://www.youtube.com/watch?v=cRwUD5SxF4o)
- [Meeting C++ 2016: Implementing a web game in C++14 - Kris Jusiak (2017-01)](https://www.youtube.com/watch?v=8gRHHIjx4oE)
- [CppCon 2016: Dan Gohman "C++ on the Web: Let's have some serious fun." (2016-10)](https://www.youtube.com/watch?v=jXMtQ2fTl4c)
- [WebAssembly and the Future of the Browser (2016-09)](https://www.youtube.com/watch?v=AIFmOwRbXao)
- [NYLUG Presents: Luke Wagner -on- WebAssembly: A New Compiler Target For The Web (2016-06)](https://www.youtube.com/watch?v=RByPdCN1RQ4)
- [Web Assembly - Nick Bray - BlinkOn 5 - (2015-11)](https://www.youtube.com/watch?v=iCSAUHpPbiU)
- [Web Assembly - Nick Bray - GOTO 2015 - (2015-10)](https://www.youtube.com/watch?v=NhAPPQqKCi8)
- [From ASM.JS to WebAssembly (2015-06)](https://brendaneich.com/2015/06/from-asm-js-to-webassembly/)
- [A Talk Near the Future of Python (a.k.a., Dave live-codes a WebAssembly Interpreter)](https://www.youtube.com/watch?v=r-A78RgMhZU)



## 相关学术论文
- [Bringing the Web up to Speed with WebAssembly](https://github.com/WebAssembly/spec/blob/master/papers/pldi2017.pdf)
- [The Web Assembles](http://blog.scottlogic.com/ceberhardt/assets/white-papers/the-web-assembles.pdf)



## WebAssembly现状

- Rust 是最常用和最受欢迎的 WebAssembly 语言
- C++是第三受欢迎的WebAssembly语言
- AssemblyScript 是第二受欢迎的 WebAssembly 语言
- WebAssembly 预计将对 Web、无服务器、游戏和容器化应用程序产生重大影响



## Webassembly发展方向逻辑

- 使用Wasm完全重写现有框架
- 使用Wasm重写现有框架的核心逻辑
- 使用Wasm配合框架增强应用的部分功能
- 使用其他语言构建Web前端框架

适用于计算密集型领域，在多功能视频播放器，音频转码工具，网页游戏，加解密上有广泛应用。





## Webassembly的不足之处

- 开发者们期待更好的调试支持





## 相关书籍

- [WebAssembly Reference Manual](https://github.com/sunfishcode/wasm-reference-manual)
- [Learn WebAssembly - Build web applications with native performance using Wasm and C/C++](https://www.packtpub.com/web-development/learn-webassembly)
- [Programming WebAssembly with Rust - Unified Development for Web, Mobile, and Embedded Applications](https://pragprog.com/book/khrust/programming-webassembly-with-rust)
- [Rust and WebAssembly](https://rustwasm.github.io/docs/book/)
- [WebAssembly in Action - Introduces the WebAssembly stack and walks you through the process of writing and running browser-based applications](https://www.manning.com/books/webassembly-in-action)
- [Level up with WebAssembly - A practical guide to building WebAssembly applications](http://www.levelupwasm.com/)
- [Hands-On Game Development with WebAssembly](https://www.packtpub.com/game-development/hands-game-development-webassembly)
- 《深入浅出WebAssembly》
- 《WebAssembly原理与核心技术》
- [极客时间Webassembly入门课](https://time.geekbang.org/column/intro/100059901)
- [WebAssembly资料精选 - 中文版](https://github.com/chai2010/awesome-wasm-zh)
- [WebAssembly标准入门 - 第一本中文图书](https://github.com/chai2010/awesome-wasm-zh/blob/master/webassembly-primer.md)
- [C/C++面向wasm编程 - 第一本中文开源图书](https://github.com/3dgen/cppwasm-book)
- [《深入浅出 WebAssembly》](https://zhuanlan.zhihu.com/p/47577104)



## 参考

https://github.com/mbasso/awesome-wasm

[WebAssembly完全入门——了解wasm的前世今身](https://juejin.cn/post/6844903709806182413#heading-21)

[The State of WebAssembly 2021](https://blog.scottlogic.com/2021/06/21/state-of-wasm.html)

[c++项目转成wasm全过程-字节WebInfra团队](https://zhuanlan.zhihu.com/p/158586853)

[WebAssembly 中文网](http://webassembly.org.cn/)

[WebAssembly 中文社区](https://www.w3ctech.com/category/18)

[WebAssembly-cn Orgnization](https://github.com/WebAssembly-cn)

