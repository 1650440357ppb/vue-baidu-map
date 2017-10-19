webpackJsonp([10],{"2T6i":function(t,s,e){var n=e("VU/8")(e("qASo"),e("BWDA"),null,null);t.exports=n.exports},BWDA:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",[e("h1",[t._v("Custom Control")]),t._v(" "),t._m(0),t._v(" "),e("h2",[t._v("Instance Properties")]),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("Examples")]),t._v(" "),e("h3",[t._v("Add a custom control on the map")]),t._v(" "),e("h4",[t._v("Code")]),t._v(" "),t._m(2),t._v(" "),e("h4",[t._v("Preview")]),t._v(" "),e("doc-preview",[e("baidu-map",{staticClass:"map",attrs:{zoom:t.zoom,center:{lng:116.404,lat:39.915}}},[e("bm-control",[e("md-button",{staticClass:"md-raised",on:{click:function(s){t.addZoom(19)}}},[t._v("Zoom Max")]),t._v(" "),e("md-button",{staticClass:"md-raised",on:{click:function(s){t.addZoom(10)}}},[t._v("Reset")]),t._v(" "),e("md-button",{staticClass:"md-raised",on:{click:function(s){t.addZoom(3)}}},[t._v("Zoom Min")])],1)],1)],1),t._v(" "),e("h3",[t._v("Use third party libraries")]),t._v(" "),e("h4",[t._v("代码")]),t._v(" "),t._m(3),t._v(" "),e("h4",[t._v("预览")]),t._v(" "),e("doc-preview",[e("baidu-map",{staticClass:"map",attrs:{zoom:t.zoom,center:{lng:116.404,lat:39.915}},on:{ready:t.setDistanceToolInstance}},[e("bm-control",[e("md-button",{staticClass:"md-raised md-primary",on:{click:t.openDistanceTool}},[t._v("\n        Open Instance Tool\n      ")])],1)],1)],1)],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("code",[t._v("BmControl")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("name")]),t._v(" "),e("th",[t._v("type")]),t._v(" "),e("th",[t._v("default")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("anchor")]),t._v(" "),e("td",[t._v("ControlAnchor")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The location of the control.")])]),t._v(" "),e("tr",[e("td",[t._v("offset")]),t._v(" "),e("td",[t._v("Size")]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("The offset of the control.")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"zoom"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(">")]),t._v("\n      "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"addZoom(19)"')]),t._v(">")]),t._v("Zoom Max"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n      "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"addZoom(10)"')]),t._v(">")]),t._v("Reset"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n      "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"addZoom(3)"')]),t._v(">")]),t._v("Zoom Min"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n"),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  data () {\n    "),e("span",{staticClass:"hljs-keyword"},[t._v("return")]),t._v(" {\n      "),e("span",{staticClass:"hljs-attr"},[t._v("zoom")]),t._v(": "),e("span",{staticClass:"hljs-number"},[t._v("10")]),t._v("\n    }\n  },\n  "),e("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    addZoom (level) {\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".zoom = level\n    }\n  }\n}\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("pre",[e("code",{staticClass:"language-html"},[e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("class")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"map"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":zoom")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"zoom"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v(":center")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"{lng: 116.404, lat: 39.915}"')]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("@ready")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"setDistanceToolInstance"')]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(">")]),t._v("\n      "),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(" "),e("span",{staticClass:"hljs-attr"},[t._v("@click")]),t._v("="),e("span",{staticClass:"hljs-string"},[t._v('"openDistanceTool"')]),t._v(">")]),t._v("Open Instance Tool"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("button")]),t._v(">")]),t._v("\n    "),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("bm-control")]),t._v(">")]),t._v("\n  "),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("baidu-map")]),t._v(">")]),t._v("\n"),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("template")]),t._v(">")]),t._v("\n\n"),e("span",{staticClass:"hljs-tag"},[t._v("<"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),e("span",{staticClass:"javascript"},[t._v("\n"),e("span",{staticClass:"hljs-keyword"},[t._v("import")]),t._v(" DistanceTool "),e("span",{staticClass:"hljs-keyword"},[t._v("from")]),t._v(" "),e("span",{staticClass:"hljs-string"},[t._v("'bmaplib.distancetool'")]),t._v("\n\n"),e("span",{staticClass:"hljs-keyword"},[t._v("export")]),t._v(" "),e("span",{staticClass:"hljs-keyword"},[t._v("default")]),t._v(" {\n  "),e("span",{staticClass:"hljs-attr"},[t._v("methods")]),t._v(": {\n    setDistanceToolInstance ({map}) {\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v(".distanceTool = "),e("span",{staticClass:"hljs-keyword"},[t._v("new")]),t._v(" DistanceTool(map, {"),e("span",{staticClass:"hljs-attr"},[t._v("lineStroke")]),t._v(" : "),e("span",{staticClass:"hljs-number"},[t._v("2")]),t._v("})\n    },\n    openDistanceTool (e) {\n      "),e("span",{staticClass:"hljs-keyword"},[t._v("const")]),t._v(" {distanceTool} = "),e("span",{staticClass:"hljs-keyword"},[t._v("this")]),t._v("\n      distanceTool && distanceTool.open()\n    }\n  }\n}\n")]),e("span",{staticClass:"hljs-tag"},[t._v("</"),e("span",{staticClass:"hljs-name"},[t._v("script")]),t._v(">")]),t._v("\n")])])}]}},Qtnn:function(t,s,e){t.exports=e("2T6i")},cglj:function(t,s,e){(function(s){!function(s,e){t.exports=e()}(0,function(){function t(t){var t=s.event||t;t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}var e=e||{guid:"$BAIDU$"},n={};!function(){n[e.guid]={},e.extend=function(t,s){for(var e in s)s.hasOwnProperty(e)&&(t[e]=s[e]);return t},e.lang=e.lang||{},e.lang.guid=function(){return"TANGRAM__"+(n[e.guid]._counter++).toString(36)},n[e.guid]._counter=n[e.guid]._counter||1,n[e.guid]._instances=n[e.guid]._instances||{},e.lang.Class=function(t){this.guid=t||e.lang.guid(),n[e.guid]._instances[this.guid]=this},n[e.guid]._instances=n[e.guid]._instances||{},e.lang.isString=function(t){return"[object String]"==Object.prototype.toString.call(t)},e.lang.isFunction=function(t){return"[object Function]"==Object.prototype.toString.call(t)},e.lang.Class.prototype.toString=function(){return"[object "+(this._className||"Object")+"]"},e.lang.Class.prototype.dispose=function(){delete n[e.guid]._instances[this.guid];for(var t in this)e.lang.isFunction(this[t])||delete this[t];this.disposed=!0},e.lang.Event=function(t,s){this.type=t,this.returnValue=!0,this.target=s||null,this.currentTarget=null},e.lang.Class.prototype.addEventListener=function(t,s,n){if(e.lang.isFunction(s)){!this.__listeners&&(this.__listeners={});var i,a=this.__listeners;if("string"==typeof n&&n){if(/[^\w\-]/.test(n))throw"nonstandard key:"+n;s.hashCode=n,i=n}0!=t.indexOf("on")&&(t="on"+t),"object"!=typeof a[t]&&(a[t]={}),i=i||e.lang.guid(),s.hashCode=i,a[t][i]=s}},e.lang.Class.prototype.removeEventListener=function(t,s){if(e.lang.isFunction(s))s=s.hashCode;else if(!e.lang.isString(s))return;!this.__listeners&&(this.__listeners={}),0!=t.indexOf("on")&&(t="on"+t);var n=this.__listeners;n[t]&&n[t][s]&&delete n[t][s]},e.lang.Class.prototype.dispatchEvent=function(t,s){e.lang.isString(t)&&(t=new e.lang.Event(t)),!this.__listeners&&(this.__listeners={}),s=s||{};for(var n in s)t[n]=s[n];var n,i=this.__listeners,a=t.type;if(t.target=t.target||this,t.currentTarget=this,0!=a.indexOf("on")&&(a="on"+a),e.lang.isFunction(this[a])&&this[a].apply(this,arguments),"object"==typeof i[a])for(n in i[a])i[a][n].apply(this,arguments);return t.returnValue},e.lang.inherits=function(t,s,e){var n,i,a=t.prototype,o=new Function;o.prototype=s.prototype,i=t.prototype=new o;for(n in a)i[n]=a[n];t.prototype.constructor=t,t.superClass=s.prototype,"string"==typeof e&&(i._className=e)},e.dom=e.dom||{},e._g=e.dom._g=function(t){return e.lang.isString(t)?document.getElementById(t):t},e.g=e.dom.g=function(t){return"string"==typeof t||t instanceof String?document.getElementById(t):t&&t.nodeName&&(1==t.nodeType||9==t.nodeType)?t:null},e.insertHTML=e.dom.insertHTML=function(t,s,n){t=e.dom.g(t);var i,a;return t.insertAdjacentHTML?t.insertAdjacentHTML(s,n):(i=t.ownerDocument.createRange(),s=s.toUpperCase(),"AFTERBEGIN"==s||"BEFOREEND"==s?(i.selectNodeContents(t),i.collapse("AFTERBEGIN"==s)):(a="BEFOREBEGIN"==s,i[a?"setStartBefore":"setEndAfter"](t),i.collapse(a)),i.insertNode(i.createContextualFragment(n))),t},e.ac=e.dom.addClass=function(t,s){t=e.dom.g(t);for(var n=s.split(/\s+/),i=t.className,a=" "+i+" ",o=0,l=n.length;o<l;o++)a.indexOf(" "+n[o]+" ")<0&&(i+=(i?" ":"")+n[o]);return t.className=i,t},e.event=e.event||{},e.event._listeners=e.event._listeners||[],e.on=e.event.on=function(t,s,n){s=s.replace(/^on/i,""),t=e._g(t);var i,a=function(s){n.call(t,s)},o=e.event._listeners,l=e.event._eventFilter,_=s;return s=s.toLowerCase(),l&&l[s]&&(i=l[s](t,s,a),_=i.type,a=i.listener),t.addEventListener?t.addEventListener(_,a,!1):t.attachEvent&&t.attachEvent("on"+_,a),o[o.length]=[t,s,n,a,_],t},e.un=e.event.un=function(t,s,n){t=e._g(t),s=s.replace(/^on/i,"").toLowerCase();for(var i,a,o,l=e.event._listeners,_=l.length,r=!n;_--;)i=l[_],i[1]!==s||i[0]!==t||!r&&i[2]!==n||(a=i[4],o=i[3],t.removeEventListener?t.removeEventListener(a,o,!1):t.detachEvent&&t.detachEvent("on"+a,o),l.splice(_,1));return t},e.preventDefault=e.event.preventDefault=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}}();var i=function(t,s){t&&(this._map=t,s=s||{},this._opts=e.extend(e.extend(this._opts||{},{tips:"测距",followText:"单击确定地点，双击结束",unit:"metric",lineColor:"#ff6319",lineStroke:2,opacity:.8,lineStyle:"solid",cursor:"http://api.map.baidu.com/images/ruler.cur",secIcon:null,closeIcon:null}),s),this._followTitle=null,this._points=[],this._paths=[],this._dots=[],this._segDistance=[],this._overlays=[],this._enableMassClear=!0,this._units={metric:{name:"metric",conv:1,incon:1e3,u1:"米",u2:"公里"},us:{name:"us",conv:3.2808,incon:5279.856,u1:"英尺",u2:"英里"}},this._isOpen=!1,this._startFollowText="单击确定起点",this._movingTimerId=null,this._styles={BMapLib_diso:"height:17px;width:5px;position:absolute;background:url(http://api.map.baidu.com/images/dis_box_01.gif) no-repeat left top",BMapLib_disi:"color:#7a7a7a;position:absolute;left:5px;padding:0 4px 1px 0;line-height:17px;background:url(http://api.map.baidu.com/images/dis_box_01.gif) no-repeat right top",BMapLib_disBoxDis:"color:#ff6319;font-weight:bold"},this._opts.lineStroke<=0&&(this._opts.lineStroke=2),this._opts.opacity>1?this._opts.opacity=1:this._opts.opacity<0&&(this._opts.opacity=0),"solid"!=this._opts.lineStyle&&"dashed"!=this._opts.lineStyle&&(this._opts.lineStyle="solid"),this._units[this._opts.unit]||(this._opts.unit="metric"),this.text="测距")};e.lang.inherits(i,e.lang.Class,"DistanceTool"),i.prototype._bind=function(){this._setCursor(this._opts.cursor);var t=this;if(e.on(this._map.getContainer(),"mousemove",function(e){if(t._isOpen&&t._followTitle){e=s.event||e;if((e.target||e.srcElement)!=a.getDom(t._map))return void t._followTitle.hide();t._mapMoving||t._followTitle.show();var n=a.getDrawPoint(e,!0);t._followTitle.setPosition(n)}}),this._startFollowText){this._followTitle=new BMap.Label(this._startFollowText,{offset:new BMap.Size(14,16)});this._followTitle.setStyles({color:"#333",borderColor:"#ff0103"})}},i.prototype.open=function(){if(1==this._isOpen)return!0;if(!s.BMapLib||!s.BMapLib._toolInUse){this._isOpen=!0,s.BMapLib=s.BMapLib||{},s.BMapLib._toolInUse=!0,this._mapMoving&&delete this._mapMoving;var t=this;this._binded||(this._binded=!0,this._bind(),this._map.addEventListener("moving",function(){t._hideCurrent()})),this._followTitle&&(this._map.addOverlay(this._followTitle),this._followTitle.hide());var n=function(n){var i=t._map;if(t._isOpen){n=s.event||n;var o=a.getDrawPoint(n,!0);if(t._isPointValid(o)){if(t._bind.initX=n.pageX||n.clientX||0,t._bind.initY=n.pageY||n.clientY||0,t._points.length>0){var l=i.pointToPixel(t._points[t._points.length-1]),_=i.pointToPixel(o);if(Math.sqrt(Math.pow(l.x-_.x,2)+Math.pow(l.y-_.y,2))<5)return}t._bind.x=n.layerX||n.offsetX||0,t._bind.y=n.layerY||n.offsetY||0,t._points.push(o),t._addSecPoint(o),0==t._paths.length&&t._formatTitle(1,t._opts.followText,t._getTotalDistance()),t._paths.length>0&&(t._paths[t._paths.length-1].show(),t._paths[t._paths.length-1].setStrokeOpacity(t._opts.opacity));var r=new BMap.Polyline([o,o],{enableMassClear:t._enableMassClear});if(t._map.addOverlay(r),t._paths.push(r),t._overlays.push(r),r.setStrokeWeight(t._opts.lineStroke),r.setStrokeColor(t._opts.lineColor),r.setStrokeOpacity(t._opts.opacity/2),r.setStrokeStyle(t._opts.lineStyle),t._mapMoving&&r.hide(),t._points.length>1){t._paths[t._points.length-2].setPositionAt(1,o)}var p="";if(t._points.length>1){var c=(t._setSegDistance(t._points[t._points.length-2],t._points[t._points.length-1]),t._getTotalDistance());p=t._formatDisStr(c)}else p="起点";var h=new BMap.Label(p,{offset:new BMap.Size(10,-5),enableMassClear:t._enableMassClear});h.setStyles({color:"#333",borderColor:"#ff0103"}),t._map.addOverlay(h),t._formatSegLabel(h,p),t._overlays.push(h),o.disLabel=h,h.setPosition(o);var v=new e.lang.Event("onaddpoint");v.point=o,v.pixel=t._map.pointToPixel(o),v.index=t._points.length-1,v.distance=t._getTotalDistance().toFixed(0),t.dispatchEvent(v)}}},i=function(e){if(t._isOpen)if(t._paths.length>0){e=s.event||e;var n=e.pageX||e.clientX||0,o=e.pageY||e.clientY||0;void 0===t._bind.initX&&(t._bind.x=e.layerX||e.offsetX||0,t._bind.y=e.layerY||e.offsetY||0,t._bind.initX=n,t._bind.initY=o);var l=t._bind.x+n-t._bind.initX,_=t._bind.y+o-t._bind.initY,r=t._paths[t._paths.length-1],p=t._map.pixelToPoint(new BMap.Pixel(l,_));r.setPositionAt(1,p),t._mapMoving||r.show();var c=0,h=0;if(l<10?c=8:l>t._map.getSize().width-10&&(c=-8),_<10?h=8:_>t._map.getSize().height-10&&(h=-8),0!=c||0!=h)i._movingTimerId||(t._mapMoving=!0,t._map.panBy(c,h,{noAnimation:!0}),t._movingTimerId=i._movingTimerId=setInterval(function(){t._map.panBy(c,h,{noAnimation:!0})},30),r.hide(),t._followTitle&&t._followTitle.hide());else if(i._movingTimerId){clearInterval(i._movingTimerId),delete i._movingTimerId,delete t._movingTimerId;var v=t._paths[t._paths.length-1],d=t._map.pixelToPoint(new BMap.Pixel(l,_));if(!v)return;v.setPositionAt(1,d),v.show(),t._followTitle&&(t._followTitle.setPosition(d),t._followTitle.show()),t._bind.i=0,t._bind.j=0,delete t._mapMoving}if(t._followTitle){var u=t._getTotalDistance(),m=t._map.getDistance(t._points[t._points.length-1],p);t._updateInstDis(t._followTitle,u+m)}}else if(t._followTitle){t._followTitle.show(),e=s.event||e;var g=e.target||e.srcElement;g!=a.getDom()&&t._followTitle.hide()}},o=function(s){t._isOpen&&(e.un(a.getDom(t._map),"click",n),e.un(document,"mousemove",i),e.un(a.getDom(t._map),"dblclick",o),e.un(document,"keydown",l),e.un(a.getDom(t._map),"mouseup",_),setTimeout(function(){t.close()},50))},l=function(e){e=s.event||e,27==e.keyCode&&(t._clearCurData(),setTimeout(function(){t.close()},50))},_=function(e){e=s.event||e;var n=0;/msie (\d+\.\d)/i.test(navigator.userAgent)&&(n=document.documentMode||+RegExp.$1),(n&&1!=e.button||2==e.button)&&t.close()};return t._initData(),this._formatTitle(),a.show(this._map),this._setCursor(this._opts.cursor),e.on(a.getDom(this._map),"click",n),e.on(document,"mousemove",i),e.on(a.getDom(this._map),"dblclick",o),e.on(document,"keydown",l),e.on(a.getDom(this._map),"mouseup",_),this.bindFunc=[{elem:a.getDom(this._map),type:"click",func:n},{elem:a.getDom(this._map),type:"dblclick",func:o},{elem:document,type:"mousemove",func:i},{elem:document,type:"keydown",func:l},{elem:a.getDom(this._map),type:"mouseup",func:_}],!0}},i.prototype._dispatchLastEvent=function(){var t=new e.lang.Event("ondrawend");t.points=this._points?this._points.slice(0):[],t.overlays=this._paths?this._paths.slice(0,this._paths.length-1):[],t.distance=this._getTotalDistance().toFixed(0),this.dispatchEvent(t)},i.prototype.close=function(){if(0!=this._isOpen){this._isOpen=!1,BMapLib._toolInUse=!1,this._mapMoving&&delete this._mapMoving;var t=this;if(t._dispatchLastEvent(),t._points.length<2)t._clearCurData();else{t._paths[t._paths.length-1].remove(),t._paths[t._paths.length-1]=null,t._paths.length=t._paths.length-1;var s=t._points[t._points.length-1];s.disLabel&&s.disLabel.remove(),t._processLastOp()}a.hide();for(var n=0,i=this.bindFunc.length;n<i;n++)e.un(this.bindFunc[n].elem,this.bindFunc[n].type,this.bindFunc[n].func);t._movingTimerId&&(clearInterval(t._movingTimerId),t._movingTimerId=null),this._followTitle&&this._followTitle.hide()}},i.prototype._clearCurData=function(){for(var t=0,s=this._points.length;t<s;t++)this._points[t].disLabel&&this._points[t].disLabel.remove();for(var t=0,s=this._paths.length;t<s;t++)this._paths[t].remove();for(var t=0,s=this._dots.length;t<s;t++)this._dots[t].remove();this._initData()},i.prototype._initData=function(){this._points.length=0,this._paths.length=0,this._segDistance.length=0,this._dots.length=0},i.prototype._setSegDistance=function(t,s){if(t&&s){var e=this._map.getDistance(t,s);return this._segDistance.push(e),e}},i.prototype._getTotalDistance=function(){for(var t=0,s=0,e=this._segDistance.length;s<e;s++)t+=this._segDistance[s];return t},i.prototype._convertUnit=function(t,s){return s=s||"metric",this._units[s]?t*this._units[s].conv:t},i.prototype._addSecPoint=function(t){var s=this._opts.secIcon?this._opts.secIcon:new BMap.Icon("http://api.map.baidu.com/images/mapctrls.png",new BMap.Size(11,11),{imageOffset:new BMap.Size(-26,-313)}),e=new BMap.Marker(t,{icon:s,clickable:!1,baseZIndex:35e5,zIndexFixed:!0,enableMassClear:this._enableMassClear});this._map.addOverlay(e),this._dots.push(e)},i.prototype._formatDisStr=function(t){var s=this._opts.unit,e=this._units[s].u1,n=this._convertUnit(t,s);return n>this._units[s].incon?(n/=this._units[s].incon,e=this._units[s].u2,n=n.toFixed(1)):n=n.toFixed(0),n+e},i.prototype._setCursor=function(t){var s=/webkit/.test(navigator.userAgent.toLowerCase())?"url("+this._opts.cursor+") 3 6, crosshair":"url("+this._opts.cursor+"), crosshair";a._setCursor(s)},i.prototype._getCursor=function(){return this._opts.cursor},i.prototype._formatSegLabel=function(t,s){t.setStyle({border:"none",padding:"0"}),t.setContent("<span style='"+this._styles.BMapLib_diso+"'><span style='"+this._styles.BMapLib_disi+"'>"+s+"</span></span>")},i.prototype._processLastOp=function(){var s=this;if(delete s._bind.x,delete s._bind.y,delete s._bind.initX,delete s._bind.initY,s._paths.length>s._points.length-1){var n=s._paths.length-1;s._paths[n].remove(),s._paths[n]=null,s._paths.length=n}var i={};i.points=s._points.slice(0),i.paths=s._paths.slice(0),i.dots=s._dots.slice(0),i.segDis=s._segDistance.slice(0);var a=s._map.pointToPixel(i.points[i.points.length-1]),o=s._map.pointToPixel(i.points[i.points.length-2]),l=[0,0],_=[0,0];_=a.y-o.y>=0?[-5,11]:[-5,-35],l=a.x-o.x>=0?[14,0]:[-14,0];var r=i.points[i.points.length-1];r.disLabel=new BMap.Label("",{offset:new BMap.Size(-15,-40),enableMassClear:s._enableMassClear}),r.disLabel.setStyles({color:"#333",borderColor:"#ff0103"}),s._map.addOverlay(r.disLabel),r.disLabel.setOffset(new BMap.Size(_[0],_[1])),r.disLabel.setPosition(r),s._formatTitle(2,"","",r.disLabel);var p=this._opts.closeIcon?this._opts.closeIcon:new BMap.Icon("http://api.map.baidu.com/images/mapctrls.gif",new BMap.Size(12,12),{imageOffset:new BMap.Size(0,-14)});i.closeBtn=new BMap.Marker(i.points[i.points.length-1],{icon:p,offset:new BMap.Size(l[0],l[1]),baseZIndex:36e5,enableMassClear:s._enableMassClear}),s._map.addOverlay(i.closeBtn),i.closeBtn.setTitle("清除本次测距"),i.closeBtn.addEventListener("click",function(n){for(var a=0,o=i.points.length;a<o;a++)i.points[a].disLabel.remove(),i.points[a].disLabel=null;for(var a=0,o=i.paths.length;a<o;a++)i.paths[a].remove(),i.paths[a]=null;for(var a=0,o=i.dots.length;a<o;a++)i.dots[a].remove(),i.dots[a]=null;i.closeBtn.remove(),i.closeBtn=null,t(n);var l=new e.lang.Event("onremovepolyline");s.dispatchEvent(l)}),s._initData()},i.prototype._formatTitle=function(t,s,e,n){var i=n||this._followTitle;if(i){i.setStyle({lineHeight:"16px",zIndex:"85",padding:"3px 5px"});var a=this._startFollowText||"",o=[];if(1==t){i.setOffset(0,25);var l=this._opts.unit,_=this._units[l].u1,r=this._convertUnit(e,l);r>this._units[l].incon?(r/=this._units[l].incon,_=this._units[l].u2,r=r.toFixed(1)):r=r.toFixed(0),o.push("<span>总长：<span style='"+this._styles.BMapLib_disBoxDis+"'>"+r+"</span>"+_+"</span><br />"),o.push("<span style='color:#7a7a7a'>"+s+"</span>")}else if(2==t){var l=this._opts.unit,_=this._units[l].u1,r=this._convertUnit(this._getTotalDistance(),l);r>this._units[l].incon?(r/=this._units[l].incon,_=this._units[l].u2,r=r.toFixed(1)):r=r.toFixed(0),o.push("总长：<span style='"+this._styles.BMapLib_disBoxDis+"'>"+r+"</span>"+_)}else i.setOffset(0,25),o.push(a);i.setContent(o.join(""))}},i.prototype._updateInstDis=function(t,s){var e=this._opts.unit,n=this._units[e].u1;if(s>this._units[e].incon?(s/=this._units[e].incon,n=this._units[e].u2,s=s.toFixed(1)):s=s.toFixed(0),t){var i=[];i.push("<span>总长：<span style='"+this._styles.BMapLib_disBoxDis+"'>"+s+"</span>"+n+"</span><br />"),i.push("<span style='color:#7a7a7a'>"+this._opts.followText+"</span>"),t.setContent(i.join(""))}},i.prototype._hideCurrent=function(){if(this._isOpen){if(this._paths.length>0){this._paths[this._paths.length-1].hide()}this._followTitle&&this._followTitle.hide()}},i.prototype._isPointValid=function(t){if(!t)return!1;var s=this._map.getBounds(),e=s.getSouthWest(),n=s.getNorthEast();return!(t.lng<e.lng||t.lng>n.lng||t.lat<e.lat||t.lat>n.lat)};var a={_map:null,_html:"<div style='background:transparent url(http://api.map.baidu.com/images/blank.gif);position:absolute;left:0;top:0;width:100%;height:100%;z-index:1000' unselectable='on'></div>",_maskElement:null,_cursor:"default",_inUse:!1,show:function(t){this._map||(this._map=t),this._inUse=!0,this._maskElement||this._createMask(t),this._maskElement.style.display="block"},_createMask:function(s){if(this._map=s,this._map){e.insertHTML(this._map.getContainer(),"beforeEnd",this._html);var n=this._maskElement=this._map.getContainer().lastChild,i=function(s){return t(s),e.preventDefault(s)};e.on(n,"mouseup",function(t){2==t.button&&i(t)}),e.on(n,"contextmenu",i),n.style.display="none"}},getDrawPoint:function(t,e){t=s.event||t;var n=t.layerX||t.offsetX||0,i=t.layerY||t.offsetY||0,o=t.target||t.srcElement;if(o!=a.getDom(this._map)&&1==e)for(;o&&o!=this._map.getContainer();)0==o.clientWidth&&0==o.clientHeight&&o.offsetParent&&"td"==o.offsetParent.nodeName.toLowerCase()||(n+=o.offsetLeft,i+=o.offsetTop),o=o.offsetParent;if(!(o!=a.getDom(this._map)&&o!=this._map.getContainer()||void 0===n||void 0===i||isNaN(n)||isNaN(i)))return this._map.pixelToPoint(new BMap.Pixel(n,i))},hide:function(){this._map&&(this._inUse=!1,this._maskElement&&(this._maskElement.style.display="none"))},getDom:function(t){return this._maskElement||this._createMask(t),this._maskElement},_setCursor:function(t){this._cursor=t||"default",this._maskElement&&(this._maskElement.style.cursor=this._cursor)}};return i})}).call(s,e("DuR2"))},qASo:function(t,s,e){var n,i,a;!function(o,l){i=[t,s,e("cglj")],n=l,void 0!==(a="function"==typeof n?n.apply(s,i):n)&&(t.exports=a)}(0,function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=function(t){return t&&t.__esModule?t:{default:t}}(e);s.default={data:function(){return{zoom:10}},methods:{setDistanceToolInstance:function(t){var s=t.map;this.distanceTool=new n.default(s,{lineStroke:2})},openDistanceTool:function(t){var s=this.distanceTool;s&&s.open()},addZoom:function(t){this.zoom=t}}},t.exports=s.default})}});