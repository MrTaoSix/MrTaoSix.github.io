(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{496:function(a,t,s){"use strict";s.r(t);var r=s(29),e=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"arthas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arthas"}},[a._v("#")]),a._v(" Arthas")]),a._v(" "),s("h2",{attrs:{id:"arthas是啥子东西"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#arthas是啥子东西"}},[a._v("#")]),a._v(" Arthas是啥子东西？")]),a._v(" "),s("p",[a._v("Arthas是阿里开源的java诊断工具，我觉得很好用。")]),a._v(" "),s("p",[a._v("我常常用它来解决一下问题：")]),a._v(" "),s("ol",[s("li",[a._v("wo尼玛，我代码怎么没有执行？")]),a._v(" "),s("li",[a._v("wo尼玛，这个方法的入参是啥？")]),a._v(" "),s("li",[a._v("wo尼玛，这个方法返回了个啥？")]),a._v(" "),s("li",[a._v("wo尼玛，这个东西功能这么强！")])]),a._v(" "),s("p",[a._v("Arthas支持JDK 6+，支持Linux/Mac/Windows，采用命令行交互模式，同时提供丰富的 Tab 自动补全功能，进一步方便进行问题的定位和诊断。 "),s("s",[a._v("这句话Copy的")])]),a._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("h3",{attrs:{id:"快速安装arthas-boot-官方推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速安装arthas-boot-官方推荐"}},[a._v("#")]),a._v(" 快速安装arthas-boot（官方推荐）")]),a._v(" "),s("p",[a._v("我一般是在Docker里面使用，")]),a._v(" "),s("ul",[s("li",[s("s",[a._v("先这样")]),a._v("  先进入容器内部")]),a._v(" "),s("li",[s("s",[a._v("然后这样")]),a._v(" 使用curl下载arthas-boot.jar的jar包")]),a._v(" "),s("li",[s("s",[a._v("再这样")]),a._v(" 然后用java -jar的方式启动")])]),a._v(" "),s("h3",{attrs:{id:"一顿操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一顿操作"}},[a._v("#")]),a._v(" 一顿操作")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker exec -it 容器ID bash/sh\ncurl -O https://arthas.aliyun.com/arthas-boot.jar\njava -jar arthas-boot.jar\n")])])]),s("h3",{attrs:{id:"选择java进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择java进程"}},[a._v("#")]),a._v(" 选择Java进程")]),a._v(" "),s("p",[a._v("这个时候会提示你找到哪些Java进程，如果有多个进程请输入序号，如果只有一个直接回车就完事了")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[INFO] arthas-boot version: 3.4.1\n[INFO] Found existing java process, please choose one and input the serial number of the process, eg : 1. Then hit ENTER.\n* [1]: 1 /mrtao-docker-file.jar\n")])])]),s("h3",{attrs:{id:"启动完成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动完成"}},[a._v("#")]),a._v(" 启动完成")]),a._v(" "),s("p",[a._v("因为我是在容器内部启动的，只有一个程序，所以直接回车！")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[INFO] arthas home: /root/.arthas/lib/3.4.1/arthas\n[INFO] Try to attach process 1\n[INFO] Attach process 1 success.\n[INFO] arthas-client connect 127.0.0.1 3658\n  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.\n /  O  \\ |  .--. ''--.  .--'|  '--'  | /  O  \\ '   .-'\n|  .-.  ||  '--'.'   |  |   |  .--.  ||  .-.  |`.  `-.\n|  | |  ||  |\\  \\    |  |   |  |  |  ||  | |  |.-'    |\n`--' `--'`--' '--'   `--'   `--'  `--'`--' `--'`-----'\n\n\nwiki      https://arthas.aliyun.com/doc\ntutorials https://arthas.aliyun.com/doc/arthas-tutorials.html\nversion   3.4.1\npid       1\ntime      2020-09-21 06:45:52\n")])])]),s("h2",{attrs:{id:"查看s-q-l"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看s-q-l"}},[a._v("#")]),a._v(" 查看s q l")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("watch")]),a._v("  org.apache.ibatis.mapping.BoundSql getSql -n "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'returnObj'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'returnObj.indexOf(\"SELECT\")!=-1'")]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);