(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{255:function(t,e,n){},258:function(t,e){t.exports=function(t){return null==t}},261:function(t,e,n){},262:function(t,e,n){},263:function(t,e,n){},268:function(t,e,n){"use strict";n.r(e);var i=n(283),s=n(273),a=n(253);function r(t,e){return"group"===e.type&&e.children.some(e=>"group"===e.type?r(t,e):"page"===e.type&&Object(a.e)(t,e.path))}var o={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:s.default},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route(){this.refreshIndex()}},created(){this.refreshIndex()},methods:{refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const i=e[n];if(r(t,i))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(a.e)(this.$route,t.regularPath)}}},l=n(12),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,i){return e("li",{key:i},["group"===n.type?e("SidebarGroup",{attrs:{item:n,open:i===t.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):e("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:n}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=u.exports},269:function(t,e,n){"use strict";n(255)},271:function(t,e,n){},272:function(t,e,n){},273:function(t,e,n){"use strict";n.r(e);var i=n(253);function s(t,e,n,i,s){const a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}};return s>2&&(a.style={"padding-left":s+"rem"}),t("RouterLink",a,n)}function a(t,e,n,r,o,l=1){return!e||l>o?null:t("ul",{class:"sidebar-sub-headers"},e.map(e=>{const u=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[s(t,n+"#"+e.slug,e.title,u,e.level-1),a(t,e.children,n,r,o,l+1)])}))}var r={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:r,$themeConfig:o,$themeLocaleConfig:l},props:{item:u,sidebarDepth:c}}){const p=Object(i.e)(r,u.path),d="auto"===u.type?p||u.children.some(t=>Object(i.e)(r,u.basePath+"#"+t.slug)):p,h="external"===u.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,u.path,u.title||u.path):s(t,u.path,u.title||u.path,d),f=[e.frontmatter.sidebarDepth,c,l.sidebarDepth,o.sidebarDepth,1].find(t=>void 0!==t),b=l.displayAllHeaders||o.displayAllHeaders;if("auto"===u.type)return[h,a(t,u.children,u.basePath,r,f)];if((d||b)&&u.headers&&!i.d.test(u.path)){return[h,a(t,Object(i.c)(u.headers),u.path,r,f)]}return h}},o=(n(269),n(12)),l=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=l.exports},275:function(t,e,n){"use strict";n(261)},276:function(t,e,n){var i=n(15),s=n(6),a=n(13);t.exports=function(t){return"string"==typeof t||!s(t)&&a(t)&&"[object String]"==i(t)}},277:function(t,e,n){"use strict";n(262)},278:function(t,e,n){"use strict";n(263)},283:function(t,e,n){"use strict";n.r(e);var i=n(253),s={name:"SidebarGroup",components:{DropdownTransition:n(257).default},props:["item","open","collapsable","depth"],beforeCreate(){this.$options.components.SidebarLinks=n(268).default},methods:{isActive:i.e}},a=(n(278),n(12)),r=Object(a.a)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("RouterLink",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,"sidebar-depth":t.item.sidebarDepth,"initial-open-group-index":t.item.initialOpenGroupIndex,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports},287:function(t,e,n){"use strict";n.r(e);var i=n(258),s=n.n(i),a=n(253),r={name:"PageEdit",computed:{lastUpdated(){return this.$page.lastUpdated},lastUpdatedText(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},editLink(){const t=s()(this.$page.frontmatter.editLink)?this.$site.themeConfig.editLinks:this.$page.frontmatter.editLink,{repo:e,docsDir:n="",docsBranch:i="master",docsRepo:a=e}=this.$site.themeConfig;return t&&a&&this.$page.relativePath?this.createEditLink(e,a,n,i,this.$page.relativePath):null},editLinkText(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink(t,e,n,i,s){if(/bitbucket.org/.test(e)){return e.replace(a.a,"")+"/src"+`/${i}/`+(n?n.replace(a.a,"")+"/":"")+s+`?mode=edit&spa=0&at=${i}&fileviewer=file-view-default`}if(/gitlab.com/.test(e)){return e.replace(a.a,"")+"/-/edit"+`/${i}/`+(n?n.replace(a.a,"")+"/":"")+s}return(a.i.test(e)?e:"https://github.com/"+e).replace(a.a,"")+"/edit"+`/${i}/`+(n?n.replace(a.a,"")+"/":"")+s}}},o=(n(275),n(12)),l=Object(o.a)(r,(function(){var t=this._self._c;return t("footer",{staticClass:"page-edit"},[this.editLink?t("div",{staticClass:"edit-link"},[t("a",{attrs:{href:this.editLink,target:"_blank",rel:"noopener noreferrer"}},[this._v(this._s(this.editLinkText))]),this._v(" "),t("OutboundLink")],1):this._e()])}),[],!1,null,null,null);e.default=l.exports},288:function(t,e,n){"use strict";n.r(e);n(96);var i=n(253),s=n(276),a=n.n(s),r=n(258),o=n.n(r),l={name:"PageNav",props:["sidebarItems"],computed:{prev(){return c(u.PREV,this)},next(){return c(u.NEXT,this)}}};const u={NEXT:{resolveLink:function(t,e){return p(t,e,1)},getThemeLinkConfig:({nextLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.next},PREV:{resolveLink:function(t,e){return p(t,e,-1)},getThemeLinkConfig:({prevLinks:t})=>t,getPageLinkConfig:({frontmatter:t})=>t.prev}};function c(t,{$themeConfig:e,$page:n,$route:s,$site:r,sidebarItems:l}){const{resolveLink:u,getThemeLinkConfig:c,getPageLinkConfig:p}=t,d=c(e),h=p(n),f=o()(h)?d:h;return!1===f?void 0:a()(f)?Object(i.k)(r.pages,f,s.path):u(n,l)}function p(t,e,n){const i=[];!function t(e,n){for(let i=0,s=e.length;i<s;i++)"group"===e[i].type?t(e[i].children||[],n):n.push(e[i])}(e,i);for(let e=0;e<i.length;e++){const s=i[e];if("page"===s.type&&s.path===decodeURIComponent(t.path))return i[e+n]}}var d=l,h=(n(277),n(12)),f=Object(h.a)(d,(function(){var t=this,e=t._self._c;return t.prev||t.next?e("div",{staticClass:"page-nav"},[e("p",{staticClass:"inner"},[t.prev?e("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?e("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n        \n        "),e("OutboundLink")],1):e("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?e("span",{staticClass:"next"},["external"===t.next.type?e("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),e("OutboundLink")],1):e("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.default=f.exports},296:function(t,e,n){"use strict";n(271)},297:function(t,e,n){"use strict";n(272)},303:function(t,e,n){"use strict";n.r(e);var i=n(287),s=n(288),a={components:{PageEdit:i.default,PageNav:s.default},props:["sidebarItems"]},r=(n(296),n(12)),o=Object(r.a)(a,(function(){var t=this._self._c;return t("main",{staticClass:"page"},[this._t("top"),this._v(" "),t("Content",{staticClass:"theme-default-content"}),this._v(" "),t("PageEdit"),this._v(" "),t("PageNav",this._b({},"PageNav",{sidebarItems:this.sidebarItems},!1)),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},304:function(t,e,n){"use strict";n.r(e);var i=n(268),s=n(285),a={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:s.default},props:["items"]},r=(n(297),n(12)),o=Object(r.a)(a,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[t("NavLinks"),this._v(" "),this._t("top"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=o.exports},389:function(t,e,n){"use strict";n.r(e);var i=n(337),s=n(303),a=n(304),r=n(253),o={name:"Pet",components:{Page:s.default,Sidebar:a.default,Navbar:i.default},data:()=>({isSidebarOpen:!1}),computed:{shouldShowNavbar(){const{themeConfig:t}=this.$site,{frontmatter:e}=this.$page;return!1!==e.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar(){const{frontmatter:t}=this.$page;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems(){return Object(r.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses(){const t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},beforeMount(){function t(t){window.__theme=t,e=t,document.body.setAttribute("data-theme",t),window.__onThemeChange(t)}var e;window.__onThemeChange=function(){};try{e=localStorage.getItem("theme")}catch(t){}window.__setPreferredTheme=function(e){t(e);try{localStorage.setItem("theme",e)}catch(t){}};var n=window.matchMedia("(prefers-color-scheme: dark)");n.addListener((function(t){window.__setPreferredTheme(t.matches?"dark":"light")})),t(e||(n.matches?"dark":"light"))},mounted(){this.$router.afterEach(()=>{this.isSidebarOpen=!1})},methods:{toggleSidebar(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd(t){const e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},l=n(12),u=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?e("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),e("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),e("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),e("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.default=u.exports}}]);