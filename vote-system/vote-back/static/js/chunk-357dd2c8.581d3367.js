(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-357dd2c8"],{8981:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"ticket"}},[n("el-breadcrumb",[n("el-breadcrumb-item",{attrs:{to:{path:"/vote"}}},[t._v("首页")]),n("el-breadcrumb-item",[t._v("所有投票")]),n("el-breadcrumb-item",[t._v("所有用户的投票")])],1),n("el-card",[n("el-table",{attrs:{data:t.ticketlist,border:!0}},[n("el-table-column",{attrs:{type:"index",label:"#",width:"80"}}),n("el-table-column",{attrs:{prop:"id",label:"投票号",width:"80"}}),n("el-table-column",{attrs:{prop:"title",label:"标题"}}),n("el-table-column",{attrs:{prop:"desc",label:"描述",width:"200"}}),n("el-table-column",{attrs:{prop:"anonymouse",label:"实名/匿名",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.anonymouse?n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("匿名")]):n("el-button",{attrs:{type:"warning",size:"mini"}},[t._v("实名")])]}}])}),n("el-table-column",{attrs:{prop:"singleSelection",label:"单选/多选",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.singleSelection?n("el-button",{attrs:{type:"primary",size:"mini"}},[t._v("单选")]):n("el-button",{attrs:{type:"warning",size:"mini"}},[t._v("多选")])]}}])}),n("el-table-column",{attrs:{prop:"deadline",label:"创建时间",width:"200"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(t._f("dateFormat")(e.row.deadline))+" ")]}}])}),n("el-table-column",{attrs:{label:"操作",width:"160"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"info",icon:"el-icon-more",size:"mini"},on:{click:function(n){return t.showticketDetail(e.row.id)}}},[t._v("详情")])]}}])})],1),n("el-pagination",{attrs:{"current-page":t.pagenum,"page-sizes":[20,40,60],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.total,background:""},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),n("el-dialog",{attrs:{title:"详情",visible:t.ticketlogVisible,width:"30%"},on:{"update:visible":function(e){t.ticketlogVisible=e}}},[n("el-form",{attrs:{model:t.info}},[n("el-form-item",{attrs:{label:"标题"}},[n("el-input",{attrs:{disabled:""},model:{value:t.info.title,callback:function(e){t.$set(t.info,"title",e)},expression:"info.title"}})],1),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{attrs:{disabled:""},model:{value:t.info.desc,callback:function(e){t.$set(t.info,"desc",e)},expression:"info.desc"}})],1)],1),1===t.showinfo?n("div",{staticClass:"option-btns"},[t._l(t.options,(function(e,a){return n("el-button",{key:a,staticClass:"option-btn",attrs:{type:"success"}},[t._v(" 选项"+t._s(a+1)+":"+t._s(e.content)+" --- "+t._s(t.summary[e.id].length)+"票 ")])})),n("el-button",{staticClass:"option-btn",attrs:{type:"success"}},[t._v("你的选择:"+t._s(t.votedinfo.content))])],2):n("div",{staticClass:"option-btns"},[t._l(t.options,(function(e,a){return n("el-button",{key:a,staticClass:"option-btn",attrs:{type:"warning"},on:{click:function(n){return t.tovote(e.id,e.voteid)}}},[t._v("选项"+t._s(a+1)+":"+t._s(e.content)+" ")])})),n("el-button",{staticClass:"option-btn",attrs:{type:"warning"}},[t._v("你尚未投票，可以点击选项投票")])],2),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.ticketlogVisible=!1}}},[t._v("确 定")])],1)],1)],1)},i=[],o=n("1da1"),r=n("5530"),s=(n("96cf"),n("2ef0")),l=n.n(s),c=n("d722"),u={name:"ticket",data:function(){return{ticketlist:[],ticketlogVisible:!1,info:{},options:[],voteups:[],total:0,pagesize:20,pagenum:1,votedinfo:{},showinfo:0}},created:function(){this.getTicketInfo()},computed:{summary:function(){var t=l.a.mapValues(l.a.keyBy(this.options,"id"),(function(){return[]}));return Object(r["a"])(Object(r["a"])({},t),l.a.groupBy(this.voteups,"optionid"))}},methods:{getTicketInfo:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].get("/ticketsinfo");case 2:if(n=e.sent,a=n.data,200===a.meta.status){e.next=6;break}return e.abrupt("return",t.$message.error("投票数据请求失败"));case 6:t.ticketlist=a.data.tickets,t.total=t.ticketlist.length;case 8:case"end":return e.stop()}}),e)})))()},showticketDetail:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,i,o,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,c["a"].get("/voteinfo/"+t);case 2:if(a=n.sent,i=a.data,200===i.meta.status){n.next=6;break}return n.abrupt("return",e.$message.error("请求数据详情失败,请确认您已登录"));case 6:return e.info=i.data.info,e.options=i.data.options,e.voteups=i.data.voteups,e.ticketlogVisible=!0,e.voteups=l.a.uniqBy(e.voteups,"userid"),n.next=13,c["a"].get("/contentinfo/"+t);case 13:if(o=n.sent,r=o.data,200===r.meta.status){n.next=18;break}return e.showinfo=0,n.abrupt("return");case 18:e.votedinfo=r.data.contents,e.showinfo=r.meta.code;case 20:case"end":return n.stop()}}),n)})))()},tovote:function(t,e){var n=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var i,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,c["a"].post("/voteup",{optionid:t,voteid:e});case 2:if(i=a.sent,o=i.data,200===o.meta.status){a.next=6;break}return a.abrupt("return",n.$message.error("投票失败"));case 6:n.$message.success("投票成功"),n.showticketDetail(e);case 8:case"end":return a.stop()}}),a)})))()},handleSizeChange:function(t){this.pagesize=t,this.getTicketInfo()},handleCurrentChange:function(t){this.pagenum=t,this.getTicketInfo()}}},p=u,d=(n("d131"),n("2877")),f=Object(d["a"])(p,a,i,!1,null,"4c2c6f02",null);e["default"]=f.exports},c319:function(t,e,n){},d131:function(t,e,n){"use strict";n("c319")}}]);
//# sourceMappingURL=chunk-357dd2c8.581d3367.js.map