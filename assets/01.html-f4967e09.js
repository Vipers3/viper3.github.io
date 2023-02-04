import{ab as s,G as t,H as d,E as e,S as o,N as r,ac as n,W as i}from"./framework-09305b5d.js";const l={},h=n('<h1 id="_01-【nodejs简介】" tabindex="-1"><a class="header-anchor" href="#_01-【nodejs简介】" aria-hidden="true">#</a> 01 【nodejs简介】</h1><h2 id="_1-前言" tabindex="-1"><a class="header-anchor" href="#_1-前言" aria-hidden="true">#</a> 1.前言</h2><p>Node 的重要性已经不言而喻，很多互联网公司都已经有大量的高性能系统运行在 Node 之上。Node 凭借其单线程、异步等举措实现了极高的性能基准。此外，目前最为流行的 Web 开发模式是前后端分离的形式，即前端开发者与后端开发者在自己喜欢的 IDE 上独立进行开发，然后通过 HTTP 或是 RPC 等方式实现数据与流程的交互。这种开发模式在 Node 的强大功能的引领下变得越来越高效，也越来越受到各个互联网公司的青睐。</p><h3 id="_1-1-前端同学为什么要学习后端-后端同学为什么要学习前端" tabindex="-1"><a class="header-anchor" href="#_1-1-前端同学为什么要学习后端-后端同学为什么要学习前端" aria-hidden="true">#</a> 1.1 前端同学为什么要学习后端/后端同学为什么要学习前端</h3><ul><li>了解前后端交互流程。</li><li>前端同学能够和后台开发的程序员更佳紧密地结合、更顺畅地沟通。</li><li>当网站的业务逻辑需要前置时，前端人员需要学习一些后台开发的技术，以完成相应的任务；；反过来也一样。</li><li>拓宽知识视野和技术栈，能够站在全局的角度审视整个项目。</li></ul><h3 id="_1-2-前端同学为什么要学-node-js" tabindex="-1"><a class="header-anchor" href="#_1-2-前端同学为什么要学-node-js" aria-hidden="true">#</a> 1.2 前端同学为什么要学 Node.js</h3><p>1、Node.js 使用 JavaScript 语言开发服务器端应用，<strong>便于前端同学上手</strong>（一些公司甚至要求前端工程师掌握 Node.js 开发）。</p><p>2、实现了前后端的语法统一，<strong>有利于和前端代码整合</strong>，甚至共用部分代码。</p><p>比如说，针对接口返回的各种字段，前后端都必须要做校验。此时，如果用 Node.js 来做后台开发的话，前后端可以共用校验的代码。</p><p>3、Node.js 性能高、生态系统活跃，提供了大量的开源库。</p><p>4、Jeff Atwood 在 2007 年提出了著名的 Atwood 定律：<strong>任何能够用 JavaScript 实现的应用系统，最终都必将用 JavaScript 实现</strong>。 Jeff Atwood 是谁不重要（他是 Stack Overflow 网站的联合创始人），重要的是这条定律。</p><h2 id="_2-node-js是什么" tabindex="-1"><a class="header-anchor" href="#_2-node-js是什么" aria-hidden="true">#</a> 2.Node.js是什么？</h2><h3 id="_2-1-官方定义" tabindex="-1"><a class="header-anchor" href="#_2-1-官方定义" aria-hidden="true">#</a> 2.1 官方定义</h3>',13),p={href:"https://nodejs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},c=e("strong",null,"Chrome V8 引擎",-1),_=e("strong",null,"事件驱动",-1),u=e("strong",null,"非阻塞式 I/O",-1),j=n('<p>Node.js 不是一门语言，也不是 JavaScript 的框架，也不是像Nginx一样的Web服务器 ，<strong>Node.js 是 JavaScript 在服务器端的运行环境（平台）</strong>。</p><h3 id="_2-2-node-js-的组成" tabindex="-1"><a class="header-anchor" href="#_2-2-node-js-的组成" aria-hidden="true">#</a> 2.2 Node.js 的组成</h3><p>在 Node.js 里运行 JavaScript，跟在 Chrome 里运行 JavaScript 有什么不同？</p><p>二者采用的是同样的 JS 引擎。在 Node.js 里写 JS，和在前端写 JS，几乎没有不同。在写法上的区别在于：Node.js 没有浏览器、页面标签相关的 API，但是新增了一些 Node.js 相关的 API。通俗来说，对于开发者而言，在前端写 JS 是用于控制浏览器；而 Node.js 环境写 JS 可以控制整个计算机。</p><p>我们知道，JavaScript 的组成分为三个部分：</p><ul><li>ECMAScript</li><li>DOM：标签元素相关的API</li><li>BOM：浏览器相关的API</li></ul><p>ECMAScript 是 JS 的语法；DOM 和 BOM 浏览器端为 JS 提供的 API。</p><p>而 Node.js 的组成分为：</p><ul><li><strong>ECMAScript</strong>。ECMAScript 的所有语法在 Node 环境中都可以使用。</li><li><strong>Node 环境</strong>提供的一些<strong>附加 API</strong>(包括文件、网络等相关的 API)。</li></ul><p>如下图所示：</p><figure><img src="https://i0.hdslb.com/bfs/album/bab95704bf2f5dd8e05236c74a98d487fafa6d41.png" alt="image-20221102140543274" tabindex="0" loading="lazy"><figcaption>image-20221102140543274</figcaption></figure><h3 id="_2-3-小总结" tabindex="-1"><a class="header-anchor" href="#_2-3-小总结" aria-hidden="true">#</a> 2.3 小总结</h3><ul><li>Node 是一个服务器端 JavaScript 解释器</li><li>Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境</li><li>Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效</li><li>Node.js 的包管理器 npm，是全球最大的开源库生态系统</li><li>Node.js 是一门动态语言，运行在服务端的 Javascript</li></ul><h2 id="_3-node-js-的应用" tabindex="-1"><a class="header-anchor" href="#_3-node-js-的应用" aria-hidden="true">#</a> 3.Node.js 的应用</h2><p>Node.js 拥有强大的开发者社区，现在已经发展出比较成熟的技术体系，以及庞大的生态。它被广泛地应用在 Web 服务、开发工作流、客户端应用等诸多领域。其中，在 <strong>Web 服务</strong>领域，业界对 Node.js 的接受程度最高。</p><h3 id="_3-1-bff-中间层" tabindex="-1"><a class="header-anchor" href="#_3-1-bff-中间层" aria-hidden="true">#</a> 3.1 BFF 中间层</h3>',16),g={href:"https://mp.weixin.qq.com/s/IYddaaw2ps1wR2VT1dZWPg",target:"_blank",rel:"noopener noreferrer"},f=n('<blockquote><p>BFF 模式下，整体分工很清晰，<strong>后端通过 Java/C++ 等语言负责服务实现，理想情况下给前端提供的是基于领域模型的 RPC 接口，前端则在 BFF 层直接调用服务端 RPC 接口拿到数据</strong>，按需加工消费数据，并实现人机交互。基于 BFF 模式的研发，很适合拥有前端技术背景的全栈型工程师。这种模式的好处很明显，后端可以专注于业务领域，更多从领域模型的视角去思考问题，页面视角的数据则交给前端型全栈工程师去搞定。<strong>领域模型与页面数据是两种思维模式，通过 BFF 可以很好地解耦开，让彼此更专业高效</strong>。</p></blockquote><p>在 Web 服务里，搭建一个中间层，前端访问中间层的接口，中间层再访问后台的 Java/C++ 服务。这类服务的特点是不需要太强的服务器运算能力，但对程序的灵活性有较高的要求。这两个特点，正好和 Node.js 的优势相吻合。Node.js 非常适合用来做 BFF 层，优势如下：</p><ul><li>对于前端来说：让前端<strong>有能力自由组装后台数据</strong>，这样可以减少大量的业务沟通成本，加快业务的迭代速度；并且，前端同学能够<strong>自主决定</strong>与后台的通讯方式。</li><li>对于后台和运维来说，好处是：安全性（不会把主服务器暴露在外面）、降低主服务器的复杂度等。</li></ul><h3 id="_3-2-服务端渲染" tabindex="-1"><a class="header-anchor" href="#_3-2-服务端渲染" aria-hidden="true">#</a> 3.2 服务端渲染</h3><p><strong>客户端渲染</strong>（CSR / Client side render）：前端通过一大堆接口请求数据，然后通过 JS 动态处理和生成页面结构和展示。优点是<strong>前后端分离</strong>、减小服务器压力、局部刷新。缺点是不利于 SEO（如果你的页面然后通过 Ajax 异步获取内容，抓取工具并不会等待异步完成后再行抓取页面内容）、首屏渲染慢。</p><p><strong>服务端渲染</strong>（SSR / Server Side Render）：服务器返回的不是接口数据，而是一整个页面（或整个楼层）的 HTML 字符串，浏览器直接显示即可。也就是说，在服务器端直接就渲染好了，然后一次性打包返回给前端。优点是<strong>有利于 SEO、首屏渲染很快</strong>。</p><p><strong>总结： 搜索引擎优化 + 首屏速度优化 = 服务端渲染</strong>。</p><p>备注：这里的「服务端渲染」只是让 Node.js 做中间层，不会替代后端的，后台同学请放心。</p><p>参考链接：</p>',9),N={href:"https://ssr.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://blog.csdn.net/u012036171/article/details/88833200",target:"_blank",rel:"noopener noreferrer"},S={href:"https://juejin.im/post/5c068fd8f265da61524d2abc",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.zhihu.com/question/59578433/answer/326694511",target:"_blank",rel:"noopener noreferrer"},x=n('<p>历史回顾：</p><p>（1）一开始，页面很简单，html 是后端渲染的（比如PHP、ASP、JSP等方式）。后端发现页面中的 js 好麻烦（虽然简单，但是坑多），于是让公司招聘专门写 js 的人，简称「前端切图仔」。</p><p>（2）随着 Node.js 和前端 MVC 的兴起，以及前端越来越复杂，慢慢演变成了「前后端分离」。</p><p>（3）前端的 SPA 应用流行之后，发现 SEO 问题很大，而且首屏渲染速度很慢，但是自己选的路再难走也要走下去，于是用 Node.js 在服务端渲染被看成是一条出路。</p><p>（4）以前在一起的时候，是后端做部分前端的工作；现在在一起的时候，是前端做部分后端的工作。</p><h3 id="_3-3-做小型服务、小型网站的后端-基于-express、koa-框架" tabindex="-1"><a class="header-anchor" href="#_3-3-做小型服务、小型网站的后端-基于-express、koa-框架" aria-hidden="true">#</a> 3.3 做小型服务、小型网站的后端（基于 Express、Koa 框架）</h3><p>现在很多公司的后台管理系统，都是用 Node.js 来开发接口，毕竟，后台管理系统对性能和并发的要求不是太高。有了 Node.js 之后，通过 JS 直接操作 DB，做增删改查，生成接口，极大降低了前端同学的学习门槛。</p><p>当然，有时候做 Node.js 开发，是因为：后台人力不够，所以把后台开发的一部分工作量，转移给前端同学。</p><h3 id="_3-4-做项目构建工具" tabindex="-1"><a class="header-anchor" href="#_3-4-做项目构建工具" aria-hidden="true">#</a> 3.4 做项目构建工具</h3><p>前端正在广泛使用的构建工具 gulp、Webpack，就是基于 Node.js 来实现的。</p><h3 id="_3-5-做-pc-客户端软件-基于-electron-框架" tabindex="-1"><a class="header-anchor" href="#_3-5-做-pc-客户端软件-基于-electron-框架" aria-hidden="true">#</a> 3.5 做 PC 客户端软件（基于 Electron 框架）</h3><p>Electron 框架就是基于 Node.js 的，可以用来开发客户端软件。</p><p>Electron 原名为 Atom Shell，是由 GitHub 开发的一个开源框架。Electron 以 Node.js 作为运行时（runtime），以 chromium 作为渲染引擎，使开发者可以使用 JS 这种前端技术栈开来发跨平台的桌面GUI应用程序。</p><p>有一点你可能会感到惊讶：程序员们都在用的代码编辑器 VS Code 软件， 就是基于 Electron 框架来开发的。其他使用 Electron 进行开发的知名应用还有：Skype、GitHub Desktop、Slack、WhatsApp等。</p>',14),J={href:"https://www.twitch.tv/",target:"_blank",rel:"noopener noreferrer"},v=e("h3",{id:"_3-6-知名度较高的-node-js-开源项目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-6-知名度较高的-node-js-开源项目","aria-hidden":"true"},"#"),o(" 3.6 知名度较高的 Node.js 开源项目")],-1),k=e("figure",null,[e("img",{src:"https://i0.hdslb.com/bfs/album/ea53e535fbda0627b4bab6bf90592e0d151a5ec2.png",alt:"image-20221102140856507",tabindex:"0",loading:"lazy"}),e("figcaption",null,"image-20221102140856507")],-1),C=e("li",null,[e("p",null,"express：Node.js 中著名的 web 服务框架。")],-1),E=e("li",null,[e("p",null,"Koa：下一代的 Node.js 的 Web 服务框架。所谓的“下一代”是相对于 Express 而言的。")],-1),P={href:"https://eggjs.org/zh-cn/",target:"_blank",rel:"noopener noreferrer"},A=e("li",null,[e("p",null,"mocha：是现在最流行的 JavaScript 测试框架，在浏览器和 Node 环境都可以使用。")],-1),w=e("li",null,[e("p",null,"PM2：node 多进程管理。")],-1),F=e("li",null,[e("p",null,"jade：非常优秀的模板引擎，不仅限于 js 语言。")],-1),I=e("li",null,[e("p",null,"CoffeeScript：用简洁的方式展示 JavaScript 优秀的部分。")],-1),B=e("li",null,[e("p",null,"Atom：编辑器。")],-1),O=e("li",null,[e("p",null,"VS Code：最酷炫的编辑器。")],-1),M={href:"http://socket.io",target:"_blank",rel:"noopener noreferrer"},V=n('<h3 id="_3-7-总结" tabindex="-1"><a class="header-anchor" href="#_3-7-总结" aria-hidden="true">#</a> 3.7 总结</h3><p>或许，能用 Node.js 做的后台应用，Java/C++ 也能做；但是 Node.js 可以让我们多一种选择。</p><p>短期来看，Node.js 很难像 Java/C++ 那样，成为后台的主力开发语言。这并非是因为 Node.js 的性能问题，主要是因为，Node.js 还比较年轻，经验积累太少，框架的支持度不够。搞企业级服务，Node.js 敌不过 Java/C++，所以目前只能搞「轻量级」；但未来可期。</p><p>限制语言能力的不是语言本身，而是生态。</p><h2 id="_4-node-js-的特点" tabindex="-1"><a class="header-anchor" href="#_4-node-js-的特点" aria-hidden="true">#</a> 4.Node.js 的特点</h2><ul><li>异步、非阻塞 IO 模型</li><li>事件循环</li><li>单线程</li><li>总结：轻量和高效</li></ul><p>Node.js 的性能和效率非常高。</p><p>传统的 Java 语言是一个请求开启一个线程，当请求处理完毕后就关闭这个线程。而 Node.js 则完全没有采用这种模型，它本质上就是一个单线程。</p><p>你可能会疑问：一个线程如何服务于大量的请求、如何处理高并发的呢？这是因为，Node.js 采用的是异步的、非阻塞的模型。</p><p>这里所谓的“单线程”，指的是 Node 的主线程只有一个。为了确保主线程不被阻塞，主线程是用于接收客户端请求。但不会处理具体的任务。而 Node 的背后还有一个线程池，线程池会处理长时间运行的任务（比如 IO 操作、网络操作）。线程池里的任务是通过队列和事件循环的机制来执行。</p><h2 id="_5-使用-node-js-时的劣势" tabindex="-1"><a class="header-anchor" href="#_5-使用-node-js-时的劣势" aria-hidden="true">#</a> 5.使用 Node.js 时的劣势</h2><ul><li>程序运行不稳定，可能会出现服务不可用的情况</li><li>程序运行效率较低，每秒的请求数维持在一个较低的水平</li><li>前端同学对服务器端的技术不太熟悉。</li></ul>',12);function W(R,T){const a=i("ExternalLinkIcon");return t(),d("div",null,[h,e("p",null,[e("a",p,[o("Node.js"),r(a)]),o(" 是一个基于 "),c,o("的 JavaScript 运行环境。Node.js 使用了一个"),_,o("、"),u,o("的模型，使其轻量又高效。Node.js 的包管理工具 npm 是全球最大的开源库生态系统。")]),j,e("p",null,[o("BFF，即 Backend For Frontend（服务于前端的后端）。玉伯在《"),e("a",g,[o("从前端技术进化到体验科技"),r(a)]),o("》这篇文章中点出了 BFF 层的概念：")]),f,e("ul",null,[e("li",null,[e("a",N,[o("Vue 服务端渲染的概念"),r(a)])]),e("li",null,[e("a",b,[o("https://blog.csdn.net/u012036171/article/details/88833200"),r(a)])]),e("li",null,[e("a",S,[o("https://juejin.im/post/5c068fd8f265da61524d2abc"),r(a)])]),e("li",null,[e("a",m,[o("方应杭"),r(a)])])]),x,e("p",null,[o("还有一个例子是：电子游戏直播网站 "),e("a",J,[o("Twitch"),r(a)]),o("，号称是国外游戏直播的鼻祖，它在 PC 端的客户端软件，就是用 Electron 框架的。你会发现，Twitch 的网站视觉，和 PC 端的视觉，几乎是一样的。如果两端都采用 JS 语言，就可以极大的复用现有的工程。")]),v,k,e("ul",null,[C,E,e("li",null,[e("p",null,[e("a",P,[o("Egg"),r(a)]),o("：2016 年，阿里巴巴研发了知名的 Egg.js 开源项目，号称企业级 Web 服务框架。Egg.js 是基于 Koa 开发的。")])]),A,w,F,I,B,O,e("li",null,[e("p",null,[e("a",M,[o("socket.io"),r(a)]),o("：实时通信框架。")])])]),V])}const H=s(l,[["render",W],["__file","01.html.vue"]]);export{H as default};
