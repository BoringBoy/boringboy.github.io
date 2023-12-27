(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{436:function(a,s,e){"use strict";e.r(s);var t=e(7),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"通过iptables限制连接数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过iptables限制连接数"}},[a._v("#")]),a._v(" 通过iptables限制连接数")]),a._v(" "),s("blockquote",[s("p",[a._v("iptables 是一个 Linux 内核的防火墙工具，可以用于设置和管理网络规则.")])]),a._v(" "),s("p",[a._v("通过iptables，可以做到限制速率，设备数和请求连接数。")]),a._v(" "),s("h2",{attrs:{id:"为什么要限制连接数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要限制连接数"}},[a._v("#")]),a._v(" 为什么要限制连接数")]),a._v(" "),s("p",[a._v("限制连接数，主要是考虑到以下几点原因：")]),a._v(" "),s("ul",[s("li",[a._v("安全性：")])]),a._v(" "),s("p",[a._v("限制单个 IP 的连接数可以有效防止特定 IP 地址发起的恶意行为，如 DDoS（分布式拒绝服务）攻击、暴力破解、爬虫等。通过降低对单个 IP 的并发连接数限制，可以减少对系统资源的滥用和恶意访问。")]),a._v(" "),s("ul",[s("li",[a._v("资源管理：")])]),a._v(" "),s("p",[a._v("某些情况下，有限的网络带宽或服务器资源可能无法满足大量连接请求。通过限制单个 IP 的连接数，可以避免某个 IP 占用过多资源导致其他合法用户无法正常访问。")]),a._v(" "),s("ul",[s("li",[a._v("公平性：")])]),a._v(" "),s("p",[a._v("限制单个 IP 的连接数有助于确保所有用户可以平等地共享资源。如果某个 IP 连接数过多，可能导致其他用户的访问速度变慢或无法连接。")]),a._v(" "),s("ul",[s("li",[a._v("防止滥用：")])]),a._v(" "),s("p",[a._v("在某些情况下，限制单个 IP 的连接数可以防止资源被滥用。例如，控制下载速度、避免盗刷或并发请求过载等。")]),a._v(" "),s("h2",{attrs:{id:"实际应用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实际应用"}},[a._v("#")]),a._v(" 实际应用")]),a._v(" "),s("ol",[s("li",[a._v("限制局域网内每个用户的连接数为50")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" FORWARD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" connlimit –connlimit-above "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" REJECT  \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[a._v("限制指定局域网用户的连接数,如：限定192.168.1.100的连接数为50")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" FORWARD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.100 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" connlimit –connlimit-above "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" REJECT  \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[a._v("限制除某用户以外的IP连接数为50")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-I")]),a._v(" FORWARD "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".1.100 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" connlimit –connlimit-above "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" REJECT  \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"4"}},[s("li",[a._v("连接速率限制为100Mbps")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("iptables "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" INPUT "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.2")]),a._v(".3.4 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" tcp "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dport")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("53")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" limit "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--limit")]),a._v(" 100mbit/s "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-j")]),a._v(" ACCEPT\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"部分参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部分参数说明"}},[a._v("#")]),a._v(" 部分参数说明：")]),a._v(" "),s("ul",[s("li",[s("p",[s("code",[a._v("-p tcp")]),a._v("： 表示仅针对 TCP 协议的连接限制")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("-m connlimit")]),a._v("： 表示使用 connlimit 模块来管理连接数量")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("--connlimit-above 50")]),a._v("：表示限制连接的数量上限为 50，超过这个数量，就会拒绝连接。")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("-s 192.168.1.100")]),a._v(": 表示针对源 IP 地址为 192.168.1.100 的主机")])]),a._v(" "),s("li",[s("p",[s("code",[a._v("-j REJECT")]),a._v(": 表示拒绝满足以上条件的连接请求")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);