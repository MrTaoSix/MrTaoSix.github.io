(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{487:function(t,s,a){"use strict";a.r(s);var n=a(29),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"elastic-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#elastic-部署"}},[t._v("#")]),t._v(" Elastic 部署")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" chown -R esuser:esuser /usr/local/elasticsearch-7.14.0/\n")])])]),a("h2",{attrs:{id:"安全配置-权限-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安全配置-权限-https"}},[t._v("#")]),t._v(" 安全配置（权限，HTTPS）")]),t._v(" "),a("p",[a("strong",[t._v("下面配置为最低安全性只适用于开发")])]),t._v(" "),a("h3",{attrs:{id:"启用elastic安全功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用elastic安全功能"}},[t._v("#")]),t._v(" 启用elastic安全功能")]),t._v(" "),a("p",[t._v("基本许可证时，默认安全功能是关闭的。启用即可开启身份验证")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("停止 Es")])]),t._v(" "),a("li",[a("p",[t._v("将 "),a("code",[t._v("xpack.security.enabled")]),t._v("添加到配置文件"),a("code",[t._v("$ES_PATH_CONF/elasticsearch.yml")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("xpack.security.enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("ES_PATH_CONF: es的安装路径下的/config文件夹下")])])]),t._v(" "),a("li",[a("p",[t._v("启动")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("./bin/elasticsearch\n")])])])]),t._v(" "),a("li",[a("p",[t._v("随机生成密码")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("./bin/elasticsearch-setup-passwords auto\n密码将输出到控制台\n")])])]),a("blockquote",[a("p",[t._v("修改密码 请看下回分解。 "),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/security-minimal-setup.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)])])])]),t._v(" "),a("h3",{attrs:{id:"内置用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置用户"}},[t._v("#")]),t._v(" 内置用户")]),t._v(" "),a("p",[t._v("Elastic Stack 安全功能提供了内置的用户凭证来帮助您启动和运行。这些用户拥有一组固定的权限，在设置密码之前无法进行身份验证。该"),a("code",[t._v("elastic")]),t._v("用户可以用来"),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/built-in-users.html#set-built-in-user-passwords",target:"_blank",rel:"noopener noreferrer"}},[t._v("设置所有内置的用户密码"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("elastic")])])]),t._v(" "),a("p",[t._v("一个内置的"),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/built-in-roles.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("超级用户"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("kibana_system")])])]),t._v(" "),a("p",[t._v("Kibana 用于连接 Elasticsearch 并与之通信的用户。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("logstash_system")])])]),t._v(" "),a("p",[t._v("Logstash 在 Elasticsearch 中存储监控信息时使用的用户。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("beats_system")])])]),t._v(" "),a("p",[t._v("Beats 在 Elasticsearch 中存储监控信息时使用的用户。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("apm_system")])])]),t._v(" "),a("p",[t._v("APM 服务器在 Elasticsearch 中存储监控信息时使用的用户。")]),t._v(" "),a("p",[a("strong",[a("code",[t._v("remote_monitoring_user")])])]),t._v(" "),a("p",[t._v("在 Elasticsearch 中收集和存储监控信息时使用的用户 Metricbeat。它具有"),a("code",[t._v("remote_monitoring_agent")]),t._v("和 "),a("code",[t._v("remote_monitoring_collector")]),t._v("内置角色。")]),t._v(" "),a("h4",{attrs:{id:"设置密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[t._v("#")]),t._v(" 设置密码")]),t._v(" "),a("p",[t._v("这是密码后引导密码不在有效，\n"),a("strong",[t._v("注意 ⚠️：密码不要设置为数字，不得低于六位。虽然你现在设置没问题，但是kibana链接的时候会识别为number  这个狗东西指定要String。")])]),t._v(" "),a("blockquote",[a("p",[t._v("设置内置用户密码、")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("$ bin/elasticsearch-setup-passwords interactive\n\n\nPlease confirm that you would like to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("continue")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("y/N"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("y\nEnter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("elastic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nReenter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("elastic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nEnter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("apm_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nReenter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("apm_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nEnter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kibana_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nReenter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kibana_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nEnter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("logstash_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nReenter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("logstash_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nEnter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("beats_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nReenter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("beats_system"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nEnter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote_monitoring_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\nReenter password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote_monitoring_user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(":\n")])])]),a("p",[t._v("为每一个特定用户设置密码")])]),t._v(" "),a("h4",{attrs:{id:"验证密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证密码"}},[t._v("#")]),t._v(" 验证密码")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --user elastic -XGET "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost:9200/_cat/health?v&pretty'")]),t._v("\nEnter "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" user "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'elastic'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\nepoch      timestamp cluster        status node.total node.data shards pri relo init unassign pending_tasks max_task_wait_time active_shards_percent\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1630996535")]),t._v(" 06:35:35  my-application yellow          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                  -                 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("75.0")]),t._v("%\n")])])]),a("p",[t._v("只针对此版本，如需其他版本请参考官方文档")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/built-in-users.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档：内置用户 "),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"kibana-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kibana-部署"}},[t._v("#")]),t._v(" "),a("strong",[t._v("Kibana 部署")])]),t._v(" "),a("h2",{attrs:{id:"配置kibana-使用密码连接到es"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置kibana-使用密码连接到es"}},[t._v("#")]),t._v(" 配置Kibana 使用密码连接到ES")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("将"),a("code",[t._v("elasticsearch.username")]),t._v("设置添加到"),a("code",[t._v("KIB_PATH_CONF/kibana.yml")]),t._v(" 文件并将值设置给"),a("code",[t._v("kibana_system")]),t._v("用户：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("elasticsearch.username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kibana_system"')]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("运行以下命令以创建 Kibana 密钥库并添加安全设置")]),t._v(" "),a("ul",[a("li",[a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("./bin/kibana-keystore create\n\n")])])]),a("p",[t._v("将"),a("code",[t._v("kibana_system")]),t._v("用户的密码添加到 Kibana 密钥库：")])]),t._v(" "),a("li",[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./bin/kibana-keystore add elasticsearch.password\n")])])])])])]),t._v(" "),a("li",[a("p",[t._v("重启")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(". /bin/kibana\n")])])])])]),t._v(" "),a("blockquote",[a("p",[t._v("如果您在本地运行 Kibana，请转到"),a("code",[t._v("http://localhost:5601")]),t._v("查看登录页面。")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/security-minimal-setup.html#add-built-in-users",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)]),t._v(" "),a("h1",{attrs:{id:"logstash-部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logstash-部署"}},[t._v("#")]),t._v(" Logstash 部署")]),t._v(" "),a("h2",{attrs:{id:"收日志推es"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#收日志推es"}},[t._v("#")]),t._v(" 收日志推ES")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Log stash /config 目录下添加文件  log4j_to_es.conf")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#l structure of this file")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Set: https://www.elastic.co/guide/en/logstash/current/configuration-file-structure.html")]),t._v("\ninput "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For detail config for log4j as input,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# See: https://www.elastic.co/guide/en/logstash/current/plugins-inputs-log4j.html")]),t._v("\n  tcp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    mode ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "server"\n    host ='),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "192.168.0.96"\n    port ='),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" 5678\n    codec ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(" json_lines\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nfilter "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Only matched data are send to output.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\noutput "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# For detail config for elasticsearch as output,")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# See: https://www.elastic.co/guide/en/logstash/current/plugins-outputs-elasticsearch.html")]),t._v("\n  elasticsearch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    action ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "index"          '),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#The operation on ES")]),t._v("\n    hosts  ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "192.168.0.96'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v('9200"   '),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ElasticSearch host, can be array.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# index  => "applog"         #The index to write data to.')]),t._v("\n    user  ="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "elastic"\n    password ='),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")]),t._v(' "esadmin"\n  '),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("启动logstash")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" ./bin/logstash -f  config/log4jdemo.conf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("spring boot 发送日志到logs ta sh")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("添加依赖")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("net.logstash.logback"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("logstash-logback-encoder"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("5.0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("添加日志配置 logback-spring.xml")]),t._v(" "),a("div",{staticClass:"language-XML extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[t._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--开启tcp格式的logstash传输，通过TCP协议连接Logstash--\x3e")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("STASH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("net.logstash.logback.appender.LogstashTcpSocketAppender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("destination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("192.168.0.96:5678"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("destination")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("encoder")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("UTF-8"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("net.logstash.logback.encoder.LogstashEncoder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("customFields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('{"appname":"ERP-${springActive}"}'),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("customFields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("providers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("timestamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("loggerName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("threadName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("logLevel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("callerData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("providers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("encoder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("appender")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t \n\t \n\t \t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("root")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("level")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("info"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("CONSOLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("LOG-FILE—DEBUG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("LOG-FILE-INFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("LOG-FILE-ERROR"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("appender-ref")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("STASH"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("root")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n")])])])])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);