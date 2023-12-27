(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{397:function(s,a,e){"use strict";e.r(a);var n=e(7),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"docker安装oracle11g"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker安装oracle11g"}},[s._v("#")]),s._v(" Docker安装oracle11g")]),s._v(" "),a("h3",{attrs:{id:"准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备工作"}},[s._v("#")]),s._v(" 准备工作")]),s._v(" "),a("ol",[a("li",[s._v("拉取镜像(jaspeen/oracle-11g)")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker pull jaspeen/oracle-11g\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[s._v("创建一个目录，用来放置oracle压缩包")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mkdir install\ncd install\nmkdir database\n\n#查看当前目录\n[root@localhost database]# pwd\n/install/database\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[s._v("将下载的oracle-11g安装压缩文件解压到/install/database")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#解压zip\nunzip -d /install/database oracle***.zip\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h3",{attrs:{id:"安装、运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装、运行"}},[s._v("#")]),s._v(" 安装、运行")]),s._v(" "),a("ol",[a("li",[s._v("通过镜像创建容器服务")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker run --privileged --name oracle11g -p 1521:1521 -v <install_folder>:/install jaspeen/oracle-11g\n\n#示例\ndocker run --privileged --name oracle11g -p 1521:1521 -v /install/database:/install jaspeen/oracle-11g\n\n# 最好在此步骤挂载表空间的磁盘目录，否则容器创建后再挂载操作会更加繁琐\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[s._v("查看结果："),a("code",[s._v("docker ps")])])]),s._v(" "),a("li",[a("p",[s._v("如果创建成功，则执行下面命令：")])])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("docker exec -it oracle11g /bin/bash\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"安装后管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装后管理"}},[s._v("#")]),s._v(" 安装后管理")]),s._v(" "),a("ul",[a("li",[s._v("在容器里面进行oracle的相关管理")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#默认实例为orcl,有sys和system用户\n#首次使用需要修改sys及system 密码，才能使用对应的用户访问\n\n# 1.切换至oracle用户\nsu - oracle\n\n# 2. 输入命令(以DBA用户登录oracle)\nsqlplus / as sysdba\n\n# 3.查看dba所管理用户列表(可忽略)\nselect * from all_users;\n\n# 4.修改用户口令\nalter user USER identified by 新密码;\n\n# 5.修改后可使用plsql等客户端尝试登陆\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"docker-oracle容器信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-oracle容器信息"}},[s._v("#")]),s._v(" docker-oracle容器信息")]),s._v(" "),a("ol",[a("li",[s._v("IP端口&&实例名")])]),s._v(" "),a("ul",[a("li",[s._v("ip:宿主机ip")]),s._v(" "),a("li",[s._v("instance: orcl")])]),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[s._v("默认用户名密码")])]),s._v(" "),a("ul",[a("li",[s._v("system && system")]),s._v(" "),a("li",[s._v("sys && sys")])])])}),[],!1,null,null,null);a.default=t.exports}}]);