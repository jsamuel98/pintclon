(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[48164,53771],{482131:(e,t,n)=>{n.d(t,{Tb:()=>L,Tx:()=>A,Y:()=>g,kz:()=>S});var r,o,a,i,s=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},u=function(e,t){var n=function n(r){"pagehide"!==r.type&&"hidden"!==document.visibilityState||(e(r),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},d=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},l=function(e,t,n){var r;return function(o){t.value>=0&&(o||n)&&(t.delta=t.value-(r||0),(t.delta||void 0===r)&&(r=t.value,e(t)))}},p=-1,m=function(){return"hidden"===document.visibilityState?0:1/0},f=function(){u((function(e){var t=e.timeStamp;p=t}),!0)},v=function(){return p<0&&(p=m(),f(),d((function(){setTimeout((function(){p=m(),f()}),0)}))),{get firstHiddenTime(){return p}}},g=function(e,t){var n,r=v(),o=s("FCP"),a=function(e){"first-contentful-paint"===e.name&&(u&&u.disconnect(),e.startTime<r.firstHiddenTime&&(o.value=e.startTime,o.entries.push(e),n(!0)))},i=performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],u=i?null:c("paint",a);(i||u)&&(n=l(e,o,t),i&&a(i),d((function(r){o=s("FCP"),n=l(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-r.timeStamp,n(!0)}))}))})))},h=!1,y=-1,S=function(e,t){h||(g((function(e){y=e.value})),h=!0);var n,r=function(t){y>-1&&e(t)},o=s("CLS",0),a=0,i=[],p=function(e){if(!e.hadRecentInput){var t=i[0],r=i[i.length-1];a&&e.startTime-r.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,i.push(e)):(a=e.value,i=[e]),a>o.value&&(o.value=a,o.entries=i,n())}},m=c("layout-shift",p);m&&(n=l(r,o,t),u((function(){m.takeRecords().map(p),n(!0)})),d((function(){a=0,y=-1,o=s("CLS",0),n=l(r,o,t)})))},w={passive:!0,capture:!0},T=new Date,E=function(e,t){r||(r=t,o=e,a=new Date,b(removeEventListener),_())},_=function(){if(o>=0&&o<a-T){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+o};i.forEach((function(t){t(e)})),i=[]}},C=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){E(e,t),o()},r=function(){o()},o=function(){removeEventListener("pointerup",n,w),removeEventListener("pointercancel",r,w)};addEventListener("pointerup",n,w),addEventListener("pointercancel",r,w)}(t,e):E(t,e)}},b=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,C,w)}))},A=function(e,t){var n,a=v(),p=s("FID"),m=function(e){e.startTime<a.firstHiddenTime&&(p.value=e.processingStart-e.startTime,p.entries.push(e),n(!0))},f=c("first-input",m);n=l(e,p,t),f&&u((function(){f.takeRecords().map(m),f.disconnect()}),!0),f&&d((function(){var a;p=s("FID"),n=l(e,p,t),i=[],o=-1,r=null,b(addEventListener),a=m,i.push(a),_()}))},k=new Set,L=function(e,t){var n,r=v(),o=s("LCP"),a=function(e){var t=e.startTime;t<r.firstHiddenTime&&(o.value=t,o.entries.push(e)),n()},i=c("largest-contentful-paint",a);if(i){n=l(e,o,t);var p=function(){k.has(o.id)||(i.takeRecords().map(a),i.disconnect(),k.add(o.id),n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,p,{once:!0,capture:!0})})),u(p,!0),d((function(r){o=s("LCP"),n=l(e,o,t),requestAnimationFrame((function(){requestAnimationFrame((function(){o.value=performance.now()-r.timeStamp,k.add(o.id),n(!0)}))}))}))}}},648164:(e,t,n)=>{n.d(t,{cA:()=>$,fM:()=>D,N5:()=>N});var r=n(667294),o=n(290842);const a=e=>{const{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${(r?"socialBot":n&&"bot")||"nonbot"}.${t}`};var i=n(71445),s=n(932474),c=n(138064),u=n(482131);const d=(0,c.X)("LayoutShiftDebugger"),l=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&l(e.parentNode)||null,p=e=>Math.round(1e3*e);let m=[];const f=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{const r=(0,s.Jx)({annotateMarks:["initialAppLoad","RenderReactContainer"],name:"cumulative_layout_shift",pwtStaticContext:e});let o=0;const c=e=>{o=e.timeStamp};window.addEventListener("scroll",c),window.addEventListener("beforeunload",(()=>{window.removeEventListener("scroll",c)}));const f=`${a(e)}.CLS`,v=()=>(e=>{let t=Object.freeze({}),n=0;m.forEach((({value:e,shift:{sources:r},route:o,hadRecentNavigation:a,hadRecentScroll:i})=>{if(n+=e,!r||!r.length)return;const s=e/r.length;r.forEach((({node:e})=>{const n=e?l(e)||"ROOT":"NODE_REMOVED",r={route:o,boundaryId:n,hadRecentNavigation:a,hadRecentScroll:i},c=JSON.stringify(r);t={...t,[c]:{score:((t[c]||{}).score||0)+s,tags:r}}}))})),Object.keys(t).forEach((n=>{const{score:r,tags:o}=t[n];i.Z.count(`${e}.shifts`,p(r),1,{...o})})),d("Debug CLS boundaries",n,t,m),m=[]})(f);let g,h,y=0,S=0,w=0;(0,u.kz)((({entries:e,value:r})=>{if(w=r||0,e.length){g=t(),h=n();const a=e[0].startTime,i=y!==a,s=i?e:e.slice(S);i&&(y=a),m=m.concat(s.map((e=>({value:r,shift:e,route:g,hadRecentNavigation:h>0&&h+500>e.startTime,hadRecentScroll:o>0&&o+500>e.startTime})))),S=e.length}}),!0);const T=setInterval((()=>{if(m.length){v();const t=(e=w)<=.1?"good":e<=.25?"adequate":"poor";i.Z.count(`${f}.${t}`,1,1),r.stop(p(w))}var e}),1e3);window.addEventListener("beforeunload",(()=>{clearInterval(T),0===w&&r.abort("no_shifts_detected")}))};var v=n(987117);var g=n(890551);const h={pin_closeup:{LCP:"pin_closeup_lcp",FID:"pin_closeup_fid"},board:{LCP:"board_lcp",FID:"board_fid"},other_profile:{LCP:"other_profile_lcp",FID:"other_profile_fid"}},y=["CA","GB","DE","FR","AU","JP","BR","MX"],S=({surface:e,isAuthenticated:t})=>{if(t)return[];switch(e){case"pin_closeup":return["mweb_pin_page_ssr_lite"];default:return[]}},w=({pwtStaticContext:e,surface:t})=>{const n="pin_closeup"===t||"board"===t||"other_profile"===t?(({pwtStaticContext:e,surface:t})=>{const n=(0,s.Jx)({annotateExperiments:S({surface:t,isAuthenticated:e.isAuthenticated}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:h[t].LCP,pwtStaticContext:e}),r=(0,s.Jx)({name:h[t].FID,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"FID"===e&&r.stop(t)}})({pwtStaticContext:e,surface:t}):null,{isAuthenticated:r,isBot:o,isSocialBot:c,deviceType:d,locale:l}=e,p=l.split("-")[1],m={},f=(s,u)=>{if(!m[s]){m[s]=!0;const l=a(e);if("LCPCount"===s){const e=`${l}.${t}.${s}`;i.Z.count(`${e}.sum`,u,1),i.Z.increment(`${e}.size`,1)}else i.Z.timing(`${l}.${t}.${s}`,u,1),!r&&y.includes(p)&&(({botType:e,deviceType:t,isChrome:n,region:r})=>{const o=`pwtlogger.${e}.${t}`,a=["all",...r?[r.toLowerCase()]:[]],i=["all",...n?["chrome"]:[]],s=[];return a.forEach((e=>{i.forEach((t=>{s.push(`${o}.region_${e}.browser_${t}`)}))})),s})({botType:(c?"socialBot":o&&"bot")||"nonbot",deviceType:d,isChrome:!0,region:(0,v.Z)(p)}).forEach((e=>{i.Z.timing(`${e}.tags.growthSEO.${t}_${s}`,u,1,{country:p})})),n&&n(s,u)}};(0,u.Tx)((({value:e})=>f("FID",(e=>Number(e.toFixed(2)))(e)))),(0,u.Tb)((({value:e})=>{f("LCPCount",(0,g.Kj)()),f("LCP",(e=>10*Math.round(e/10))(e))})),(0,u.Y)((({value:e})=>f("FCP",e)))};var T=n(278703);let E=null;const _=e=>{switch(e){case"/":return"homefeed";case"/pin/:id":return"pin_closeup";case"/pin/:id/visual-search":return"flashlight";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/search/:scope":return"search";case"/topics/:interest":return"topic";default:return null}};var C=n(53330),b=n(388492),A=n(313889),k=n(493700),L=n(855168),x=n(785893);const I=(0,r.createContext)(null),R=(0,r.createContext)(null);function $({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:a,staticContext:i}){const c=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useRef)(t),l=(0,r.useRef)(!0),{path:p}=(0,L.$B)(),m=(0,r.useRef)(p),v=!i.isCachedRender&&(0,o.Z)(i.deviceType);if((0,r.useEffect)((()=>{m.current=p}),[p]),(0,r.useEffect)((()=>{if((0,k.X_)({size:n||1e3}),(0,g.UQ)(),(0,T.A9)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach((e=>{window.performance[e]||(0,T.A9)(`not_supported.window.performance.${e}`)})):(0,T.A9)("not_supported.window.performance"),window.PerformanceObserver||(0,T.A9)("not_supported.window.PerformanceObserer"),(0,C.v)()||(0,T.A9)("not_supported.grid_profiler"),l.current=!1,v&&!A.is){if(((e,t)=>{let n,r=0,o=0,a=null,i=null,c=null,u=null,d=[];const l=()=>{o+=1,c=window.requestAnimationFrame(l)},p=()=>{if(u){const n=d.some((e=>null!==a&&a-e>0&&a-e<=500)),o=t(),{isAuthenticated:c}=e;if(n){const t=(0,s.Jx)({name:"scroll_session",pwtStaticContext:e});if(!t)return;const n={surface:o,isAuthenticated:c};if(null===a||null===i||0===r)if(null===a&&null===i)t.error("no_duration",n);else if(null==a)E=i,t.error("no_start",n);else if(null==i){let e;e=E&&a-E<750?"no_end.outside_window":"no_end.single_event",t.error(e,n)}else t.error("no_frames",n);else{E=i;const e=i-a,s=e/r;0===s?t.error("zero_value",n):s<0?t.error("negative_value",n):(t.addBinaryAnnotation("surface",o,"STRING"),t.addBinaryAnnotation("isAuthenticated",c,"BOOL"),t.addBinaryAnnotation("duration_ms",e,"I32"),t.addBinaryAnnotation("total_frames_rendered",r,"I16"),t.stop(s))}}else(0,T.A9)("WARN.scroll_session.not_user",{tags:{isAuthenticated:c,surface:o}})}window.cancelAnimationFrame(c),r=0,o=0,d=[],i=null,a=null,u=null},m=({timeStamp:e})=>{n&&clearTimeout(n),n=setTimeout(p,500),null===u?(u=100*Math.random()<10,u&&(c=window.requestAnimationFrame(l),a=e)):u&&(i=e,r+=o,o=0)},f=({timeStamp:e})=>{d.push(e)};["wheel","pointerdown","keydown"].forEach((e=>{window.addEventListener(e,f,{passive:!0,capture:!0})})),window.addEventListener("scroll",m,{passive:!0}),window.addEventListener("pagehide",(()=>{window.removeEventListener("scroll",m),["wheel","pointerdown","keydown"].forEach((e=>{window.removeEventListener(e,f)}))}))})(i,(()=>_(m.current)?_(m.current)||"UNKNOWN_SURFACE":m.current||"UNKNOWN_SURFACE")),"Chrome"===i.browserName){f({staticContext:i,getCurrentRoute:()=>m.current,getLastNavigationTime:()=>u.current||0});const e=_(m.current);e&&w({pwtStaticContext:i,surface:e})}}}),[]),d.current!==t){d.current=t,u.current=null!==(h=window.performance)&&void 0!==h&&h.now?window.performance.now():null;const{current:e}=u;if(!l.current){const t=!c.current;(0,T.A9)("routeStart",{tags:{action:a}}),(0,k.Eg)(t),(0,g.Ux)(t),(0,g.on)(),(0,b.tl)();const{customBufferSize:n,defaultBufferSize:r}=(0,k.LH)();e&&((0,T.A9)("routeStart.customBufferSize",{count:n}),(0,T.A9)("routeStart.defaultBufferSize",{count:r}),c.current={time:e,action:a})}}var h;return(0,x.jsx)(I.Provider,{value:v?i:null,children:(0,x.jsx)(R.Provider,{value:c.current,children:e})})}const D=()=>(0,r.useContext)(R),N=()=>(0,r.useContext)(I)},290842:(e,t,n)=>{n.d(t,{Z:()=>i});const r=()=>{var e;return!(null===(e=window.performance)||void 0===e||!e.timing)};var o=n(929156),a=n(53330);function i(e){return!("desktop"===e&&!r())&&(!!o.Z&&(0,a.v)())}},134578:(e,t,n)=>{n.d(t,{D3:()=>a,Hd:()=>c,jh:()=>s,rX:()=>i});var r=n(428355),o=n(890551);const a=e=>({...(0,r.Z)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),i=()=>{const{firstInputDelay:e,largestContentfulPaint:t}=(0,o.v2)();return{firstInputDelayStart:(null==e?void 0:e.startTime)||0,firstInputDelayEnd:(null==e?void 0:e.endTime)||0,largestContentfulPaint:t||0}},s=(e,t)=>Object.keys(t).reduce(((n,r)=>({...n,[`${e}${r}`]:t[r]})),{}),c=(e,t)=>Object.keys(e).reduce(((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n),Object.freeze({}))},184905:(e,t,n)=>{n.d(t,{ng:()=>h,rA:()=>S});var r=n(631764),o=n(448091),a=n(493700),i=n(890551),s=n(388492),c=n(463998);const u=(e,t)=>(e||[]).reduce(((e,n)=>({...e,[`experiment.${n}`]:(0,c.sk)(t(n))})),{}),d=(e,t)=>"number"==typeof t?e(t):null,l=e=>e.reduce(((e,t)=>e+t),0),p=(e,t)=>Object.keys(t).reduce(((n,r)=>({...n,[`${e}${r}`]:t[r]})),{}),m=e=>{if(!e.length)return{};const t=e.map((({startTime:e,requestStart:t,responseStart:n,responseEnd:r})=>{const o=t||e;return{startTime:e,requestStart:o,responseStart:n||o,responseEnd:r}})),n=l(t.map((e=>e.requestStart-e.startTime))),r=l(t.map((e=>e.responseStart-e.requestStart))),o=l(t.map((e=>e.responseEnd-e.responseStart))),a=n+r+o,i=l(e.map((e=>e.decodedBodySize||0)));return{decodedBodySize:(0,c.cC)((s=i,Number(Number(s/1024).toFixed(3)))),"duration.all":(0,c.cC)(a),"duration.requestStartToResponseStart":(0,c.cC)(r),"duration.responseStartToResponseEnd":(0,c.cC)(o),"duration.startToRequestStart":(0,c.cC)(n)};var s},f=e=>{const t=e.filter((e=>!!e.responseEnd));return{...e.length?{...m(t),"count.completed":(0,c.cC)(t.length)}:{},"count.all":(0,c.cC)(e.length)}},v=e=>{const t=["timeSecond1","timeSecond2","timeSecond3"],n={timeSecond1:{start:0,end:0,count:0},timeSecond2:{start:0,end:0,count:0},timeSecond3:{start:0,end:0,count:0}},r={script_deferred:[],external:[],visually_complete:[],script:[],css:[],video:[],image:[],xmlhttprequest:[],other:[]};if(e.length){const{requestStart:o,startTime:a}=e[0].timing,i=o||a;n.timeSecond1.start=i,n.timeSecond1.end=i+1e3,n.timeSecond2.start=i+1e3,n.timeSecond2.end=i+2e3,n.timeSecond3.start=i+2e3,n.timeSecond3.end=i+3e3,e.forEach((e=>{const{timing:o}=e;r[e.category]=r[e.category].concat([o]),e.isDeferred&&(r.script_deferred=r.script_deferred.concat([o])),e.isExternal&&(r.external=r.external.concat([o])),e.isVisuallyCompleteRequired&&(r.visually_complete=r.visually_complete.concat([o]));const{requestStart:a,startTime:i,responseEnd:s}=o,c=a||i;t.forEach((e=>{const{start:t,end:r}=n[e];(c>=t&&c<r||c<t&&s>t)&&(n[e].count+=1)}))}))}const o={...p("concurrentRequests.",Object.keys(n).reduce(((e,t)=>e={...e,[t]:(0,c.cC)(n[t].count)}),{}))};return{...Object.keys(r).reduce(((e,t)=>({...e,...p(`resource.${t}.`,f(r[t]))})),o)}},g=(e,t,n)=>{const{devicePixelRatio:i,navigator:s,innerWidth:u,innerHeight:l,performance:p}=window,{deviceMemory:m,hardwareConcurrency:f,platform:v,userAgent:g,connection:h}=s,{memory:y}=p,{appType:S,appVersion:w,browserName:T,browserVersion:E,deviceType:_,isAppShell:C,isAuthenticated:b,isBot:A,isSocialBot:k,locale:L,osName:x,stageName:I}=t,R="desktop"===_?S||5:S||6;let $;const{navigationType:D}=e;let N=null;if("initial_app_load"===D){var O;$=1;const e=null===(O=(0,r.Z)("navigation")[0])||void 0===O?void 0:O.transferSize;N=e?parseFloat((.001*e).toFixed(1)):null}else $=4;return{"app.type":(0,c.jy)(R),"app.version":(0,c.sk)(w),"browser.name":(0,c.sk)(T),"browser.version":(0,c.sk)(E),"cpu.speed":(0,c.jy)(f),"device.memory":(0,c.jy)(m),"device.type":(0,c.jy)(0),"device.typeName":(0,c.sk)(_),"device.version":(0,c.sk)("unknown"),"pwt.cause":(0,c.jy)($),"net.effectiveType":(0,c.sk)((null==h?void 0:h.effectiveType)||null),"net.downlink":(0,c.cC)(d((e=>10*Math.round(e/10)),null==h?void 0:h.downlink)),"net.downlinkMax":(0,c.cC)(d((e=>10*Math.round(e/10)),null==h?void 0:h.downlinkMax)),"net.rtt":(0,c.cC)(d((e=>10*Math.round(e/10)),null==h?void 0:h.rtt)),"net.speed":(0,c.cC)((0,a.Hv)(n,!1)),"pwt.result":(0,c.jy)(1),"view.type":(0,c.cC)(0),"viewport.height":(0,c.cC)(l||0),"viewport.width":(0,c.cC)(u||0),devicePixelRatio:(0,c.cC)(i||0),isAppShell:(0,c.qr)(C),isAuthenticated:(0,c.qr)(b),isBot:(0,c.qr)(A),isSocialBot:(0,c.qr)(k),locale:(0,c.sk)(L),osName:(0,c.sk)(x),...null!==N&&{htmlResponseSize:(0,c.cC)(N)},platform:(0,c.sk)(v||null),profilerVersion:(0,c.sk)("3"),pwtActionName:(0,c.jy)((0,o.Rp)(e)),stageName:(0,c.sk)(I),userAgent:(0,c.sk)(g),usedJSHeapSize:(0,c.cC)((null==y?void 0:y.usedJSHeapSize)||0),totalJSHeapSize:(0,c.cC)((null==y?void 0:y.totalJSHeapSize)||0),jsHeapSizeLimit:(0,c.cC)((null==y?void 0:y.jsHeapSizeLimit)||0)}},h=({annotateExperiments:e,metricId:t,pwtStaticContext:n,binaryAnnotations:r={},performanceResourceTimings:o=[]})=>({...u(e,n.getExperimentGroup),...g(t,n,o),...r,stopwatchVersion:(0,c.jy)(1)}),y=(e,t)=>{var n;const{navigator:r}=window,{serviceWorker:o}=r,{surface:a,navigationType:u,isAuthenticated:d}=e,{cumulativeLayoutShiftScore:p,longTaskDurations:m}=(0,i.v2)();return{...m.length?{"longTask.count":(0,c.cC)(m.length),"longTask.maxDuration":(0,c.cC)(Math.max(...m)),"longTask.totalDuration":(0,c.cC)(l(m))}:{},cumulativeLayoutShiftScore:(0,c.cC)(100*p),"masonry.paginationMarkCount":(0,c.cC)((0,s.Ao)(s.at,t)),"metricId.isAuthenticated":(0,c.qr)(d),"metricId.navigationType":(0,c.sk)(u),"metricId.surface":(0,c.sk)(a),resourceBufferClearedCount:(0,c.jy)((0,s.Ao)("resourceBufferCleared",t)),scrollDuringLayout:(0,c.qr)((0,s.BA)("scrollDuringLayout",t)),serviceWorker:(0,c.qr)(o?!!o.controller:null),serviceWorkerState:(0,c.sk)((null==o||null===(n=o.controller)||void 0===n?void 0:n.state)||null)}},S=({annotateExperiments:e,binaryAnnotations:t={},entries:n,metricId:r,performanceResources:o,pwtEndTime:a,pwtStaticContext:i})=>({...t,...v(o),...u(e,i.getExperimentGroup),...g(r,i,n),...y(r,a)})},447474:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(929156);const o=()=>{const[e]=r.Z?r.Z.getEntriesByType("navigation"):[];return e}},978143:(e,t,n)=>{n.d(t,{Z:()=>S});let r=null;const o=(e,t)=>(r=r||{results:[],context:t},r.results.push(e),r);var a=n(143010),i=n(313889),s=n(138064),c=n(448091),u=n(278703),d=n(447474),l=n(976835);const p=(e,t)=>Object.keys(e).reduce(((n,r)=>{const o=e[r];return o&&(n[r]={timestamp:t+o}),n}),{}),m=({span:e,timeOrigin:t})=>{return{id:e.id,parent_id:e.parentId||null,result:1,name:e.name,timestamp:t+e.startTime,duration:e.endTime-e.startTime,annotations:p(e.annotationMap,t),binary_annotations:(n=e.binaryAnnotationMap,Object.keys(n).reduce(((e,t)=>{const r=n[t];if(!r)return e;const{value:o,type:a}=r;return null==o?e:e.concat({name:t,value:o,annotation_type:a})}),[]))};var n},f=(e,{startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:o,parentId:a,traceId:i})=>({name:`pwt/${e}`,startTime:t,endTime:n,annotationMap:r,binaryAnnotationMap:o,parentId:a,id:i}),v=({annotations:e})=>e.reduce(((e,{key:t,timestamp:n})=>({...e,[`server_${t}`]:{timestamp:n}})),{}),g=(e,t)=>({...e,annotations:{...v(t),...e.annotations},binary_annotations:[...t.binary_annotations,...e.binary_annotations]}),h=({traceId:e,actionName:t,result:n,timeOrigin:r,serverDataToJoin:o})=>{let a=m({span:f(t,n),timeOrigin:r}),i=null;return o&&(a=g(a,o),i=((e,t,n)=>{const r=(0,d.Z)();return(null==r?void 0:r.responseEnd)?g(m({span:{name:"html",startTime:0,endTime:(null==r?void 0:r.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{},id:e.server_span_id||(0,l.Z)(),parentId:t},timeOrigin:n}),e):null})(o,e,r)),{trace_id:e,spans:[a,...i?[i]:[],...n.spans.map((e=>m({span:e,timeOrigin:r})))]}},y=(0,s.X)("reportResult");function S({metricId:e,pwtStaticContext:t,result:n,isAuth:r}){const{serverData:s}=t,d=(0,c.KJ)(e),l=`${n.type}.${d}`,p=`${n.type}.sampled.${d}`,m=void 0!==r&&{tags:{isAuth:r}}||void 0;if((0,u.A9)(n.reason?l.concat(`.${n.reason}`):l,m),(0,u.A9)(n.reason?p.concat(`.${n.reason}`):p,{...m,sampleRate:.5}),"COMPLETE"!==n.type)return void y(`Abort metric ${d}`,n);const f=null!==(v=window.performance)&&void 0!==v&&v.now?Date.now()-window.performance.now():"unknown";var v,g;if("unknown"===f)return y(`Unable to convert to absolute times for ${d} due to missing time origin`),void(0,u.A9)(`missingTimeOrigin.${d}`,m);if(i.is&&(window.PWT_LAB_DATA=o(n,t)),n.spans.length&&(n.spans=n.spans.map((e=>(e.parentId||e.id===n.traceId||"network_resources"===e.name||(e.parentId=n.traceId),e)))),!i.is){const r=e.navigationType&&"initial_app_load"===e.navigationType,o=n.traceId,c=h({traceId:o,actionName:d,result:n,timeOrigin:f,serverDataToJoin:r&&s||null});(0,a.Z)({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(c),report_context:JSON.stringify((g=t,{debugTrace:i.eD,locale:g.locale,stageName:g.stageName,userId:g.isAuthenticated?g.userId:null}))}}),y(`PinTrace ${d} will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/${o.toString(16)}`,{duration:n.endTime-n.startTime,result:n,pwtStaticContext:t})}}},428355:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},645354:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(976835),o=n(428355),a=n(463998);const i=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function s(e,t){const{category:n,timing:s,isDeferred:c,isExternal:u,isVisuallyCompleteRequired:d}=e;return s.responseEnd&&("image"!==n||d)?{name:i(e),id:(0,r.Z)(),parentId:t,startTime:s.startTime,endTime:s.responseEnd,annotationMap:(0,o.Z)(s),binaryAnnotationMap:{category:(0,a.sk)(n),decodedBodySize:(0,a.cC)(s.decodedBodySize||0),initiatorType:(0,a.sk)(s.initiatorType),isDeferred:(0,a.qr)(c),isExternal:(0,a.qr)(u),name:(0,a.sk)(s.name),nextHopProtocol:(0,a.sk)(s.nextHopProtocol),transferSize:(0,a.cC)(s.transferSize||0)}}:null}},932474:(e,t,n)=>{n.d(t,{ku:()=>b,Jx:()=>E,PY:()=>C});var r=n(447474),o=n(890551);const a=()=>(0,o.PJ)().reduce(((e,{identifier:t,loadTime:n,renderTime:r})=>e[`${t}_loadTime`]?e[`${t}_dupe_loadTime`]?{...e,[`${t}_dupe_loadTime`]:n,[`${t}_dupe_renderTime`]:r}:e:{...e,[`${t}_loadTime`]:n,[`${t}_renderTime`]:r}),Object.freeze({}));var i=n(428355),s=n(134578),c=n(493700),u=n(426658);const d=e=>{switch(e){case"pin_closeup":{const e=(0,u.Z)();return(e=>{const t=(0,c.y0)();return e.reduce(((e,{name:n,match:r})=>t.filter((e=>r(e))).slice(0,2).reduce(((e,t,r)=>({...e,...(0,s.jh)(`${n}${r?"_dupe1":""}_`,(0,i.Z)(t))})),e)),Object.freeze({}))})([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}default:return{}}};var l=n(681192),p=n(976835),m=n(978143),f=n(645354),v=n(138064),g=n(388492),h=n(757345),y=n(184905),S=n(278703);const w=(0,v.X)("LightStopwatch"),T={},E=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:o,pwtStaticContext:i})=>{const c=(()=>{let e=[],t=null;if(window.PerformanceObserver){const n=1e3;t=(0,l.Z)({entryTypes:["resource"]},(t=>{e=e.concat(t.getEntries()),e.length>n&&(e=e.slice(-n))}))}return{get:()=>e,disconnect:()=>{t&&t.disconnect()}}})();let u=!0,v={};(0,S.A9)(`TIMING.${o}`,{tags:{isAuth:i.isAuthenticated}});const E={type:"stopwatch",name:o,navigationType:"initial_app_load"},_={abort:e=>{u?(u=!1,(0,m.Z)({metricId:E,pwtStaticContext:i,result:{type:"ABORT",reason:e}})):(0,S.H)("duplicate_abort_action",{action:o})},error:(e,t)=>{const n={...t,action:o};u?(e&&(0,S.H)(e,n),c&&c.disconnect(),u=!1):(0,S.H)("duplicate_error_action",n)},stop:l=>{if(!u)return void(0,S.H)("duplicate_stop_action",{action:o});u=!1,c.disconnect();const w=(0,p.Z)(),T=(0,r.Z)(),_=c.get(),C={type:"COMPLETE",traceId:(0,p.Z)(),startTime:0,endTime:l,spans:[{name:"network_resources",id:w,startTime:0,endTime:l,annotationMap:{},binaryAnnotationMap:{},parentId:null},..._.map((e=>(0,f.Z)((0,h.p)(e,[]),w))).filter(Boolean)],annotationMap:{...(0,s.jh)("resource_",n?d(n):{}),...(0,s.jh)("element_",a()),...(0,s.jh)("mark_",t&&t.length?(0,s.Hd)((0,g.gQ)(),t):{}),...(0,s.jh)("browser_",T?(0,s.D3)(T):{})},binaryAnnotationMap:(0,y.ng)({annotateExperiments:e,metricId:E,pwtStaticContext:i,performanceResourceTimings:_,binaryAnnotations:v})};(0,m.Z)({metricId:E,pwtStaticContext:i,result:C,isAuth:i.isAuthenticated})},addBinaryAnnotation:(e,t,n)=>{w(`adding binary annotation {${e}: ${String(t)}}`),v={...v,[e]:{value:t,type:n}}}};return T[o]=_,_},_=e=>T[e],C=e=>!!_(e),b=({stopwatchName:e,binaryAnnotationName:t,value:n,annotationType:r})=>{const o=_(e);o&&o.addBinaryAnnotation(t,n,r)}},890551:(e,t,n)=>{n.d(t,{Kj:()=>p,PJ:()=>c,UQ:()=>m,Ux:()=>u,on:()=>i,v2:()=>d});var r=n(517517),o=n(681192);const a={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null,elementTimings:[]},i=()=>{a.longTaskDurations=[]},s=(0,r.Z)((()=>a.elementTimings)),c=()=>s.get(),u=e=>{e&&s.save(),a.elementTimings=[]},d=()=>a;let l=0;const p=()=>l,m=()=>{(0,o.Z)({type:"element",buffered:!0},(e=>{a.elementTimings=a.elementTimings.concat(e.getEntries().reduce(((e,{identifier:t,loadTime:n,renderTime:r})=>e.concat("string"==typeof t&&"number"==typeof n&&"number"==typeof r?[{identifier:t,loadTime:n,renderTime:r}]:[])),[]))})),(0,o.Z)({entryTypes:["longtask"]},(e=>{e.getEntries().map((e=>a.longTaskDurations.push(e.duration)))}),(()=>i())),(0,o.Z)({type:"first-input",buffered:!0},((e,t)=>{const n=e.getEntries()[0];n&&n.startTime&&n.processingStart&&(a.firstInputDelay={startTime:n.startTime,endTime:n.processingStart}),t.disconnect()}),(()=>{a.firstInputDelay=null})),(0,o.Z)({type:"largest-contentful-paint",buffered:!0},(e=>{const t=e.getEntries(),n=t.length,r=t[n-1];r&&(l=n,a.largestContentfulPaint=r.renderTime||r.loadTime||null)})),(0,o.Z)({type:"layout-shift",buffered:!0},(e=>{e.getEntries().forEach((e=>{e.hadRecentInput||(a.cumulativeLayoutShiftScore+=e.value)}))}))}},426658:(e,t,n)=>{n.d(t,{Z:()=>o,f:()=>r});const r="closeupImage",o=()=>{if(!document.querySelector)return null;const e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}},976835:(e,t,n)=>{function r(){let e="";for(let t=0;t<15;t+=1){e+="0123456789"[Math.floor(10*Math.random())]}return Number(e)}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/48164-422ebbc6632765a8.mjs.map