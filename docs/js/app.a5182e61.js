(function(t){function e(e){for(var a,s,o=e[0],u=e[1],l=e[2],d=0,f=[];d<o.length;d++)s=o[d],r[s]&&f.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0cfb":function(t,e,n){},"16f4":function(t,e,n){"use strict";var a=n("aad4"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("vue-sweet-calendar")]),n("div",[n("h2",[t._v("Calendar")]),n("button",{attrs:{id:"todayButton"},on:{click:function(e){return t.goToday()}}},[t._v("Today")]),n("Calendar",{ref:"calendar",attrs:{eventCategories:t.eventCategories,events:t.events}})],1),n("div",[n("h2",[t._v("Date Picker")]),n("input",{attrs:{type:"text"},domProps:{value:t.selectedDate.iso}}),n("date-picker",{attrs:{selectedDate:t.selectedDate.iso},on:{setDate:t.setDate}})],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sweetCalendar"}},[n("div",{staticClass:"container calendar"},[n("div",{staticClass:"header"},[n("div",{staticClass:"left-arrow",on:{click:t.prevMonth}},[n("span",[t._v("<")])]),n("div",{staticClass:"month"},[t._v(t._s(t.selectedMonthName)+" "+t._s(t.selectedYear))]),n("div",{staticClass:"right-arrow",on:{click:t.nextMonth}},[n("span",[t._v(">")])])]),n("div",{staticClass:"body"},[t._l(t.weekdays,function(e,a){return n("div",{key:"day-name-"+(a+1),staticClass:"day-name",attrs:{title:e}},[t._v("\n        "+t._s(e[0])+"\n      ")])}),t._l(t.days,function(e,a){return n("div",{key:a,staticClass:"day-container",on:{click:function(n){return t.clickedDay(e)}}},[e?n("div",{staticClass:"before",style:t.generateBeforeStyle(e)},[t._v(" ")]):t._e(),e?n("div",{class:["day","day-"+e.getDate()+",\n          weekday-"+e.getDay(),t.offDays.includes(e.getDay())?"off-day":null,e.toDateString()===t.today.toDateString()?"today":null],style:t.generateDayStyle(e)},[n("span",[t._v(t._s(e.getDate()))])]):t._e(),e?n("div",{staticClass:"after",style:t.generateAfterStyle(e)},[t._v(" ")]):t._e()])})],2)])])},o=[],u=(n("c5f6"),n("7514"),n("14b9"),n("ac4d"),n("8a81"),n("ac6a"),n("6c7b"),n("9a04")),l=n("75fc"),c=n("d225"),d=n("b0b4"),f=function(){function t(){var e;Object(c["a"])(this,t);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];if(a.length>1){var i=a[0],s=a[1],o=a.slice(2);e=Object(u["a"])(Date,[i,s-1].concat(Object(l["a"])(o)))}else e=Object(u["a"])(Date,a);e.setHours(0,0,0,0),this._date=e}return Object(d["a"])(t,[{key:"getMonth",value:function(){return this._date.getMonth()+1}},{key:"getDay",value:function(){return this._date.getDay()+1}},{key:"getMonthName",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long";return this._date.toLocaleString("en-US",{month:t})}},{key:"getFullYear",value:function(){return this._date.getFullYear()}},{key:"getDate",value:function(){return this._date.getDate()}},{key:"getTime",value:function(){return this._date.getTime()}},{key:"getDayName",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"long";return this._date.toLocaleString("en-US",{weekday:t})}},{key:"getNextDay",value:function(){var t=new this.constructor(this.getTime());return t.setDate(t.getDate()+1),t}},{key:"getPrevDay",value:function(){var t=new this.constructor(this.getTime());return t.setDate(t.getDate()-1),t}},{key:"setDate",value:function(t){return this._date.setDate(t),this.getTime()}},{key:"isInRange",value:function(t,e){var n,a,r,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"never",o=new this.constructor(t),u=new this.constructor(e),l=this.getTime();switch(s){case"monthly":return n=new this.constructor(this.getFullYear(),this.getMonth(),o.getDate()).getTime(),a=new this.constructor(this.getFullYear(),this.getMonth(),u.getDate()).getTime(),r=l>=n,i=l<=a,r&&i;case"yearly":return n=new this.constructor(this.getFullYear(),o.getMonth(),o.getDate()).getTime(),a=new this.constructor(this.getFullYear(),u.getMonth(),u.getDate()).getTime(),r=l>=n,i=l<=a,r&&i;case"never":return r=l>=o.getTime(),i=l<=u.getTime(),r&&i;default:return r=l>=o.getTime(),i=l<=u.getTime(),r&&i}}},{key:"toDateString",value:function(){return this._date.toDateString()}},{key:"toISOString",value:function(){return this._date.toISOString()}},{key:"getTimezoneOffset",value:function(){return this._date.getTimezoneOffset()}},{key:"getNumberOfDaysInMonth",value:function(){return new this.constructor(this.getFullYear(),this.getMonth()+1,0).getDate()}},{key:"getFirstWeekdayOfMonth",value:function(){return new this.constructor(this.getFullYear(),this.getMonth(),1).getDay()}}]),t}(),y={name:"Calendar",data:function(){return{today:new f,date:null,weekdays:null}},computed:{days:function(){var t=this,e=Array((this.startWeekDayOfMonth-this.firstDayOfWeek+7)%7).fill(null),n=Array(this.numberOfDays).fill().map(function(e,n){return new f(t.selectedYear,t.selectedMonth,n+1)});return e.concat(n)},startWeekDayOfMonth:function(){return this.date.getFirstWeekdayOfMonth()},numberOfDays:function(){return this.date.getNumberOfDaysInMonth()},selectedMonth:function(){return this.date.getMonth()},selectedMonthName:function(){return this.date.getMonthName()},selectedYear:function(){return this.date.getFullYear()}},methods:{clickedDay:function(t){null!==t&&this.$emit("click",t._date)},prevMonth:function(){this.date=new f(this.selectedYear,this.selectedMonth-1,1)},nextMonth:function(){this.date=new f(this.selectedYear,this.selectedMonth+1,1)},generateWeekdayNames:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=2;n<=t;n++){var a=e.shift();e.push(a)}return e},generateDayStyle:function(t){var e=this,n={cursor:this.cursor},a=!0,r=!1,i=void 0;try{for(var s,o=function(){var a=s.value;if(t.isInRange(a.start,a.end,a.repeat)){var r=e.eventCategories.find(function(t){return t.id===a.categoryId})||{};Object.assign(n,{color:r.id?r.textColor:null,backgroundColor:r.id?r.backgroundColor:null,fontWeight:r.id?"bold":"normal",cursor:e.eventCursor})}},u=this.events[Symbol.iterator]();!(a=(s=u.next()).done);a=!0)o()}catch(l){r=!0,i=l}finally{try{a||null==u.return||u.return()}finally{if(r)throw i}}return n},generateBeforeStyle:function(t){var e=this,n={},a=!0,r=!1,i=void 0;try{for(var s,o=function(){var a=s.value;if(t.isInRange(a.start,a.end,a.repeat)&&t.getPrevDay().isInRange(a.start,a.end,a.repeat)){var r=e.eventCategories.find(function(t){return t.id===a.categoryId})||{};Object.assign(n,{backgroundColor:r.backgroundColor})}},u=this.events[Symbol.iterator]();!(a=(s=u.next()).done);a=!0)o()}catch(l){r=!0,i=l}finally{try{a||null==u.return||u.return()}finally{if(r)throw i}}return n},generateAfterStyle:function(t){var e=this,n={},a=!0,r=!1,i=void 0;try{for(var s,o=function(){var a=s.value;if(t.isInRange(a.start,a.end,a.repeat)&&t.getNextDay().isInRange(a.start,a.end,a.repeat)){var r=e.eventCategories.find(function(t){return t.id===a.categoryId})||{};Object.assign(n,{backgroundColor:r.backgroundColor})}},u=this.events[Symbol.iterator]();!(a=(s=u.next()).done);a=!0)o()}catch(l){r=!0,i=l}finally{try{a||null==u.return||u.return()}finally{if(r)throw i}}return n},goToday:function(){this.date=this.today}},props:{initialDate:{type:String,default:null},eventCursor:{type:String,default:""},cursor:{type:String,default:""},firstDayOfWeek:{type:Number,default:1},eventCategories:{type:Array,default:function(){return[]}},events:{type:Array,default:function(){return[]}},offDays:{type:Array,default:function(){return[1,7]}}},beforeMount:function(){this.date=Date.parse(this.initialDate)?new f(this.initialDate):new f,this.weekdays=this.generateWeekdayNames(this.firstDayOfWeek)}},h=y,g=(n("7721"),n("2877")),v=Object(g["a"])(h,s,o,!1,null,"1311e33a",null),p=v.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sweetCalendar"}},[n("div",{staticClass:"container date-picker"},[n("div",{staticClass:"header"},[n("div",{staticClass:"left-arrow",on:{click:t.prevMonth}},[n("span",[t._v("<")])]),n("div",{staticClass:"month"},[t._v(t._s(t.selectedMonthName)+" "+t._s(t.selectedYear))]),n("div",{staticClass:"right-arrow",on:{click:t.nextMonth}},[n("span",[t._v(">")])])]),n("div",{staticClass:"body"},[t._l(t.weekdays,function(e,a){return n("div",{key:"day-name-"+(a+1),staticClass:"day-name",attrs:{title:e}},[t._v("\n        "+t._s(e[0])+"\n      ")])}),t._l(t.days,function(e,a){return n("div",{key:a,staticClass:"day-container"},[e?n("div",{class:["day","day-"+e.getDate()+",\n            weekday-"+e.getDay(),t.offDays.includes(e.getDay())?"off-day":null,e.toDateString()===t.today.toDateString()?"today":null,t.isSelected(e)?"selected":null],on:{click:function(n){return t.selectDay(e)}}},[n("span",[t._v(t._s(e.getDate()))])]):t._e()])})],2)])])},m=[],k={name:"DatePicker",data:function(){return{today:new f,date:null,weekdays:null}},computed:{days:function(){var t=this,e=Array((this.startWeekDayOfMonth-this.firstDayOfWeek+7)%7).fill(null),n=Array(this.numberOfDays).fill().map(function(e,n){return new f(t.selectedYear,t.selectedMonth,n+1)});return e.concat(n)},startWeekDayOfMonth:function(){return this.date.getFirstWeekdayOfMonth()},numberOfDays:function(){return this.date.getNumberOfDaysInMonth()},selectedMonth:function(){return this.date.getMonth()},selectedMonthName:function(){return this.date.getMonthName()},selectedYear:function(){return this.date.getFullYear()}},methods:{prevMonth:function(){this.date=new f(this.selectedYear,this.selectedMonth-1,1)},nextMonth:function(){this.date=new f(this.selectedYear,this.selectedMonth+1,1)},generateWeekdayNames:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],n=2;n<=t;n++){var a=e.shift();e.push(a)}return e},selectDay:function(t){this.$emit("setDate",{iso:t.toISOString(),timeZoneOffset:t.getTimezoneOffset()})},isSelected:function(t){return!!this.selectedDate&&t.toDateString()===new f(this.selectedDate).toDateString()}},props:{initialDate:{type:String,default:null},selectedDate:{type:String,default:null},firstDayOfWeek:{type:Number,default:1},offDays:{type:Array,default:function(){return[1,7]}}},beforeMount:function(){this.date=Date.parse(this.initialDate)?new f(this.initialDate):new f,this.weekdays=this.generateWeekdayNames(this.firstDayOfWeek)}},b=k,w=(n("16f4"),Object(g["a"])(b,D,m,!1,null,"d9b43398",null)),_=w.exports,M={name:"app",components:{Calendar:p,DatePicker:_},data:function(){return{eventCategories:[{id:1,title:"Personal",textColor:"white",backgroundColor:"Blue"},{id:2,title:"Company-wide",textColor:"white",backgroundColor:"red"}],events:[{title:"test1",start:"2019-04-02",end:"2019-04-04",repeat:"never",categoryId:1},{title:"test2",start:"2019-04-08",end:"2019-04-09",repeat:"monthly",categoryId:1},{title:"test3",start:"2019-04-10",end:"2019-04-11",repeat:"yearly",categoryId:2},{title:"test4",start:"2019-04-23",end:"2019-04-23",repeat:"monthly",categoryId:2}],selectedDate:{}}},methods:{goToday:function(){this.$refs.calendar.goToday()},setDate:function(t){this.selectedDate=t}}},O=M,C=(n("cf25"),Object(g["a"])(O,r,i,!1,null,null,null)),S=C.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(S)}}).$mount("#app")},7721:function(t,e,n){"use strict";var a=n("b719"),r=n.n(a);r.a},aad4:function(t,e,n){},b719:function(t,e,n){},cf25:function(t,e,n){"use strict";var a=n("0cfb"),r=n.n(a);r.a}});
//# sourceMappingURL=app.a5182e61.js.map