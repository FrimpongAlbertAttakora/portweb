(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{426:function(e,n,t){var content=t(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(18).default)("5f1cbfc7",content,!0,{sourceMap:!1})},427:function(e,n,t){"use strict";t.r(n);t(24),t(61);var r={name:"App",components:{Typewriter:t(428).a},data:function(){return{replace:[{from:"full stack developer",to:"mathematics educator"},{from:"Hello, I am a mathematics educator",to:" ... and an electronics hobbist base in Ghana"},{from:" ... and an electronics hobbist base in Ghana",to:" Hello, I am a full stack developer ... base in Ghana"}]}}},o=(t(429),t(75)),component=Object(o.a)(r,(function(){var e=this,n=e._self._c;return n("div",{attrs:{id:"app"}},[n("typewriter",{attrs:{replace:e.replace,"type-interval":100,"replace-interval":1e3}},[n("div",{staticStyle:{"font-size":"30px",color:"gray","text-decoration":"underline"}},[e._v(" Hello, I am a full stack developer ")])])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Typewriter:t(427).default})},428:function(e,n,t){"use strict";(function(e){t(113),t(32),t(66),t(24),t(61),t(4),t(43),t(207),t(206),t(86),t(134);function r(e,n,t,r,o,c,l){try{var d=e[c](l),f=d.value}catch(e){return void t(e)}d.done?n(f):Promise.resolve(f).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,c){var l=e.apply(n,t);function d(e){r(l,o,c,d,f,"next",e)}function f(e){r(l,o,c,d,f,"throw",e)}d(void 0)}))}}var c=function(e,n){if(!e)throw new Error(n||"Assertion failed")},script={name:"Typewriter",props:{startDelay:{type:Number,default:0},typeInterval:{type:Number,default:75},replace:{type:Array,default:function(){return[]}},replaceInterval:{type:Number,default:2e3}},mounted:function(){this.init()},methods:{init:function(){var e=this;return o(regeneratorRuntime.mark((function n(){var t,r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$el,r=t.innerHTML,o=t.innerText,e.$el.innerHTML=r.trim()===o?"<span>".concat(r,"</span>"):r,n.next=4,e.typewriter(e.$el.innerHTML);case 4:e.replace.length&&setTimeout((function(){e.startReplacing()}),e.replaceInterval);case 5:case"end":return n.stop()}}),n)})))()},typewriter:function(e){var n=this;return new Promise((function(t){n.$el.innerHTML="";!function r(o){o="<"===e[o]?e.indexOf(">",o)+1:++o,n.$el.innerHTML=e.substr(0,o),o<e.length-1?setTimeout(r,n.typeInterval,o):t()}(0)}))},removeString:function(e,n){var t=this;return new Promise((function(r){var o=t.$el;!function n(c){o.innerHTML=o.innerHTML.slice(0,c),c--,e<=c?setTimeout(n,t.typeInterval,c):r()}(n-1)}))},addString:function(e,n){var t=this;return new Promise((function(r){var o=t.$el;!function e(c,l){o.innerHTML=t.insert(o.innerHTML,l,n[c]),c<n.length-1?setTimeout(e,t.typeInterval,++c,++l):r()}(0,e)}))},insert:function(text,e,n){return text.substring(0,e)+n+text.substr(e)},replaceLastWord:function(e){var n=this;return o(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.$el.innerText.split(" ").pop(),c(r,"Component`s current innerHTML is empty"),t.next=4,n.replaceText({from:r,to:e});case 4:case"end":return t.stop()}}),t)})))()},replaceText:function(e){var n=this;return o(regeneratorRuntime.mark((function t(){var r,o,l,d,f,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c(e,"Changed parameter is needed"),r=e.from,o=e.to,l=n.$el.innerHTML,d=new RegExp("\\b"+r+"\\b"),f=l.match(d),c(f,"Substring '".concat(r,"' not found in component` current innerHTML")),m=f.index,t.next=9,n.removeString(m,m+r.length);case 9:return t.next=11,n.addString(m,o);case 11:case"end":return t.stop()}}),t)})))()},startReplacing:function(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.replace,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.replaceInterval;if(!n)throw new Error("Replace parameter is needed");if(!n)throw new Error("Replace parameter has 0 length");return new Promise((function(r){var c=function(){var l=o(regeneratorRuntime.mark((function o(l){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.replaceText(n[l]);case 2:if(!(l<n.length-1)){o.next=5;break}return setTimeout(c,t,++l),o.abrupt("return");case 5:r();case 6:case"end":return o.stop()}}),o)})));return function(e){return l.apply(this,arguments)}}();c(0)}))}}};function l(template,style,script,e,n,t,r,o,c,l){"boolean"!=typeof r&&(c=o,o=r,r=!1);const d="function"==typeof script?script.options:script;let f;if(template&&template.render&&(d.render=template.render,d.staticRenderFns=template.staticRenderFns,d._compiled=!0,n&&(d.functional=!0)),e&&(d._scopeId=e),t?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),style&&style.call(this,c(e)),e&&e._registeredComponents&&e._registeredComponents.add(t)},d._ssrRegister=f):style&&(f=r?function(e){style.call(this,l(e,this.$root.$options.shadowRoot))}:function(e){style.call(this,o(e))}),f)if(d.functional){const e=d.render;d.render=function(n,t){return f.call(t),e(n,t)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,f):[f]}return script}const d="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function f(e){return(e,style)=>function(e,n){const t=d?n.media||"default":e,style=h[t]||(h[t]={ids:new Set,styles:[]});if(!style.ids.has(e)){style.ids.add(e);let code=n.source;if(n.map&&(code+="\n/*# sourceURL="+n.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),style.element||(style.element=document.createElement("style"),style.element.type="text/css",n.media&&style.element.setAttribute("media",n.media),void 0===m&&(m=document.head||document.getElementsByTagName("head")[0]),m.appendChild(style.element)),"styleSheet"in style.element)style.styles.push(code),style.element.styleSheet.cssText=style.styles.filter(Boolean).join("\n");else{const e=style.ids.size-1,n=document.createTextNode(code),t=style.element.childNodes;t[e]&&style.element.removeChild(t[e]),t.length?style.element.insertBefore(n,t[e]):style.element.appendChild(n)}}}(e,style)}let m;const h={};const v=script;var y=function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{staticClass:"content"},[e._t("default")],2)};y._withStripped=!0;const x=l({render:y,staticRenderFns:[]},(function(e){e&&e("data-v-b6673ec6_0",{source:'\n@keyframes blink {\nfrom,\n  to {\n    opacity: 0;\n}\n50% {\n    opacity: 1;\n}\n}\n.content *:last-child::after {\n  font-size: calc(1em + 2px);\n  content: "|";\n  animation: blink 0.75s step-end infinite;\n}\n',map:{version:3,sources:["/home/runner/work/typewriter-vue/typewriter-vue/src/components/Typewriter.vue"],names:[],mappings:";AAkKA;AACA;;IAEA,UAAA;AACA;AACA;IACA,UAAA;AACA;AACA;AAEA;EACA,0BAAA;EACA,YAAA;EACA,wCAAA;AACA",file:"Typewriter.vue",sourcesContent:['<template>\n  <div class="content">\n    <slot></slot>\n  </div>\n</template>\n\n<script>\nconst assert = (condition, message) => {\n  if (!condition) {\n    throw new Error(message || "Assertion failed");\n  }\n};\n\nexport default {\n  name: "Typewriter",\n  props: {\n    /**\n     *  Time to wait before typing first character (ms).\n     */\n    startDelay: {\n      type: Number,\n      default: 0,\n    },\n    /**\n     * Interval between entering letters (ms).\n     */\n    typeInterval: {\n      type: Number,\n      default: 75,\n    },\n    /**\n     * Array of objects with keys:\n     *  - from - @type {String}  to be replaced (has to be present in currently displayed text),\n     *  - to - @type {String} that will replace \'from\' text\n     */\n    replace: {\n      type: Array,\n      default: () => [],\n    },\n    /**\n     * Interval between replacing  in (ms).\n     */\n    replaceInterval: {\n      type: Number,\n      default: 2000,\n    },\n  },\n  mounted() {\n    this.init();\n  },\n  methods: {\n    async init() {\n      const { innerHTML, innerText } = this.$el;\n      this.$el.innerHTML =\n        innerHTML.trim() === innerText\n          ? `<span>${innerHTML}</span>`\n          : innerHTML;\n      await this.typewriter(this.$el.innerHTML);\n      if (this.replace.length) {\n        setTimeout(() => {\n          this.startReplacing();\n        }, this.replaceInterval);\n      }\n    },\n    typewriter(str) {\n      return new Promise((resolve) => {\n        this.$el.innerHTML = "";\n        const f = (index) => {\n          const current = str[index];\n          index = current === "<" ? str.indexOf(">", index) + 1 : ++index;\n          this.$el.innerHTML = str.substr(0, index);\n          if (index < str.length - 1) {\n            setTimeout(f, this.typeInterval, index);\n            return;\n          }\n          resolve();\n        };\n        f(0);\n      });\n    },\n    removeString(start, end) {\n      return new Promise((resolve) => {\n        const elementCopy = this.$el;\n        const f = (index) => {\n          elementCopy.innerHTML = elementCopy.innerHTML.slice(0, index);\n          index--;\n          if (start <= index) {\n            setTimeout(f, this.typeInterval, index);\n            return;\n          }\n          resolve();\n        };\n        f(end - 1);\n      });\n    },\n    addString(start, str) {\n      return new Promise((resolve) => {\n        const elementCopy = this.$el;\n        const f = (index, start) => {\n          elementCopy.innerHTML = this.insert(\n            elementCopy.innerHTML,\n            start,\n            str[index]\n          );\n          if (index < str.length - 1) {\n            setTimeout(f, this.typeInterval, ++index, ++start);\n            return;\n          }\n          resolve();\n        };\n        f(0, start);\n      });\n    },\n    insert(text, index, newChar) {\n      return text.substring(0, index) + newChar + text.substr(index);\n    },\n    async replaceLastWord(to) {\n      const lastWord = this.$el.innerText.split(" ").pop();\n      assert(lastWord, "Component`s current innerHTML is empty");\n      await this.replaceText({ from: lastWord, to });\n    },\n    async replaceText(changed) {\n      assert(changed, "Changed parameter is needed");\n      const { from, to } = changed;\n      const str = this.$el.innerHTML;\n      const regex = new RegExp("\\\\b" + from + "\\\\b");\n      const match = str.match(regex);\n      assert(\n        match,\n        `Substring \'${from}\' not found in component\\` current innerHTML`\n      );\n      const { index } = match;\n      await this.removeString(index, index + from.length);\n      await this.addString(index, to);\n    },\n    startReplacing(\n      replace = this.replace,\n      replaceInterval = this.replaceInterval\n    ) {\n      if (!replace) {\n        throw new Error("Replace parameter is needed");\n      }\n      if (!replace) {\n        throw new Error("Replace parameter has 0 length");\n      }\n      return new Promise((resolve) => {\n        const func = async (index) => {\n          await this.replaceText(replace[index]);\n          if (index < replace.length - 1) {\n            setTimeout(func, replaceInterval, ++index);\n            return;\n          }\n          resolve();\n        };\n        func(0);\n      });\n    },\n  },\n};\n<\/script>\n\n<style>\n@keyframes blink {\n  from,\n  to {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n.content *:last-child::after {\n  font-size: calc(1em + 2px);\n  content: "|";\n  animation: blink 0.75s step-end infinite;\n}\n</style>\n']},media:void 0})}),v,undefined,false,undefined,!1,f,void 0,void 0);var w={install:function e(n){e.installed||(e.installed=!0,n.component("Typewriter",x))}},T=null;"undefined"!=typeof window?T=window.Vue:void 0!==e&&(T=e.Vue),T&&T.use(w),n.a=x}).call(this,t(85))},429:function(e,n,t){"use strict";t(426)},430:function(e,n,t){var r=t(17)(!1);r.push([e.i,".typewriter.content :last-child:after{font-size:calc(3em + 20px)!important}",""]),e.exports=r}}]);