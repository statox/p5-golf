var me=Object.defineProperty;var ue=(d,e,t)=>e in d?me(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var W=(d,e,t)=>(ue(d,typeof e!="symbol"?e+"":e,t),t);import{s as I,f as _,a as N,l as Q,g as x,h as T,d as p,c as G,m as Z,u as A,j as z,i as b,y as P,L as ee,n as fe,M as H,z as te,e as R,E as de,q as se}from"../chunks/scheduler.e421d989.js";import{S as L,i as M,b as S,d as D,m as C,a as w,t as j,e as O,g as oe,c as ne}from"../chunks/index.52486247.js";import{e as U}from"../chunks/each.e59479a4.js";import{V as y,P as J,m as he,a as ie,T as ye,b as ge,c as pe,d as $e}from"../chunks/p5utils.fe4d08ff.js";const be=(d,e)=>{if(e.geometry.type!=="sphere"||d.geometry.type!=="line")throw new Error("invalid geometry");const t=ve(d,e);if(!t){e.data.isColliding=!1;return}e.data.isColliding=!0;const n=.8,r=.2,a=d.position.x,s=d.position.y,f=d.position.x+d.geometry.vector.x,c=d.position.y+d.geometry.vector.y,o=f-a,l=c-s,i=new y(-l,o),u=new y(l,-o),m=t.clone().add(i),h=t.clone().add(u);let g;e.position.distanceSq(m)<e.position.distanceSq(h)?g=i:g=u;const $=g.clone().normalize(),k=e.velocity.clone(),E=$.multiplyScalar(k.dot($)),V=k.subtract(E),B=n,Y=r;return V.multiplyScalar(1-Y).subtract(E.multiplyScalar(B))},ve=(d,e)=>{if(e.geometry.type!=="sphere"||d.geometry.type!=="line")throw new Error("invalid geometry");const t=d.position.clone(),n=d.position.clone().add(d.geometry.vector),r=e.position.clone(),a=e.geometry.r,s=n.clone().subtract(t),f=t.clone().subtract(r),c=s.dot(s),o=f.dot(s)*2,l=f.dot(f)-a*a;let i=o*o-4*c*l;if(i<0)return;i=Math.sqrt(i);const u=(-o-i)/(2*c),m=(-o+i)/(2*c);if(u>=0&&u<=1)return t.add(s.multiplyScalar(u));if(m>=0&&m<=1)return t.add(s.multiplyScalar(m))};class K{constructor(e){W(this,"gravityEnabled");W(this,"dimensions");W(this,"t");W(this,"objects");W(this,"gravity",new y(0,-9.8));W(this,"drag",.01);W(this,"reporter");W(this,"lastTick");this.gravityEnabled=e.enableGravity??!0,this.dimensions=e.dimensions||new y(100,100),this.objects=[],this.t=0,this.reporter=e.reporter||console.log,this.lastTick=0}toggleGravity(){this.gravityEnabled=!this.gravityEnabled}addObject(e){this.objects.push(e)}applyGravity(e){e.acceleration.push(this.gravity)}applyDynamics(e,t){this.gravityEnabled&&this.applyGravity(t);const n=new y(0,0);for(;t.acceleration.length;){const a=t.acceleration.pop();a&&n.add(a)}n.divideScalar(t.m);const r=1-this.drag;t.velocity.add(n.multiplyScalar(e)).multiplyScalar(r),t.position.add(t.velocity.clone().multiplyScalar(e))}applyCollisions(e){const t=this.objects.find(s=>s.geometry.type==="sphere"),n=this.objects.filter(s=>s.geometry.type==="line");if(!t)throw new Error("No sphere in world");const r=new y(0,0);let a=0;for(const s of n){const f=be(s,t);f&&(a++,r.add(f))}a>0&&(r.divideScalar(a),t.velocity.copy(r),t.position.add(t.velocity.clone().multiplyScalar(e)))}step(){this.t===0&&(this.lastTick=Date.now()),this.t++;const e=Date.now(),t=5,n=(e-this.lastTick)/(1e3/60*t);for(const r of this.objects)r.fixed||this.applyDynamics(n,r);this.applyCollisions(n),this.reporter&&this.reporter(this),this.lastTick=Date.now()}}const v=d=>{var e,t;return{geometry:d.geometry,m:d.mass??10,position:((e=d.position)==null?void 0:e.clone())??new y(0,0),velocity:((t=d.velocity)==null?void 0:t.clone())??new y(0,0),acceleration:[],fixed:d.fixed??!1,data:{isColliding:!1}}};function we(d){let e,t,n,r,a=d[0][d[0].length-1]+"",s,f,c,o="New ball",l,i,u;return t=new J({props:{sketch:d[2]}}),{c(){e=_("div"),S(t.$$.fragment),n=N(),r=_("p"),s=Q(a),f=N(),c=_("button"),c.textContent=o,this.h()},l(m){e=x(m,"DIV",{class:!0});var h=T(e);D(t.$$.fragment,h),h.forEach(p),n=G(m),r=x(m,"P",{});var g=T(r);s=Z(g,a),g.forEach(p),f=G(m),c=x(m,"BUTTON",{"data-svelte-h":!0}),A(c)!=="svelte-1jwbm46"&&(c.textContent=o),this.h()},h(){z(e,"class","d-flex justify-content-center")},m(m,h){b(m,e,h),C(t,e,null),b(m,n,h),b(m,r,h),P(r,s),b(m,f,h),b(m,c,h),l=!0,i||(u=ee(c,"click",d[1]),i=!0)},p(m,[h]){(!l||h&1)&&a!==(a=m[0][m[0].length-1]+"")&&fe(s,a)},i(m){l||(w(t.$$.fragment,m),l=!0)},o(m){j(t.$$.fragment,m),l=!1},d(m){m&&(p(e),p(n),p(r),p(f),p(c)),O(t),i=!1,u()}}}function _e(d,e,t){console.clear();let n=[];const r=o=>{const l=o.objects[o.objects.length-1],i=l.position.clone().toFixed(2),u=l.velocity.clone().toFixed(2);n.push(`${o.t} - pos: ${i} - vel: ${u}`),n.length>50&&n.shift(),t(0,n)},a=new K({reporter:r,enableGravity:!0}),s=()=>{for(;a.objects.length;)a.objects.pop();const o=v({geometry:{type:"line",vector:new y(100,0)},position:new y(0,0),fixed:!0});a.addObject(o);for(let l=0;l<1;l++){const i=v({geometry:{type:"sphere",r:5},position:new y(20,50),velocity:new y(Math.random()*5-2.5,Math.random()*20)});a.addObject(i)}};let f;const c=o=>{o.setup=()=>{f=o,o.createCanvas(900,600),o.background(0),o.fill(255),o.stroke(255),s()},o.draw=()=>{o.background(0),a.step();for(const l of a.objects){const i=o.map(l.position.x,0,a.dimensions.x,0,o.width),u=o.map(l.position.y,0,a.dimensions.y,o.height,0);if(l.geometry.type==="sphere"&&(o.strokeWeight(l.geometry.r*2),o.point(i,u)),l.geometry.type==="line"){const m=i+o.map(l.geometry.vector.x,0,a.dimensions.x,0,o.width),h=u+o.map(l.geometry.vector.y,0,a.dimensions.y,0,o.height);o.strokeWeight(2),o.line(i,u,m,h)}}}};return H(()=>{f==null||f.remove()}),[n,s,c]}class xe extends L{constructor(e){super(),M(this,e,_e,we,I,{})}}function je(d){let e,t,n,r,a=d[0][d[0].length-1]+"",s,f,c,o="New ball",l,i,u;return t=new J({props:{sketch:d[2]}}),{c(){e=_("div"),S(t.$$.fragment),n=N(),r=_("p"),s=Q(a),f=N(),c=_("button"),c.textContent=o,this.h()},l(m){e=x(m,"DIV",{class:!0});var h=T(e);D(t.$$.fragment,h),h.forEach(p),n=G(m),r=x(m,"P",{});var g=T(r);s=Z(g,a),g.forEach(p),f=G(m),c=x(m,"BUTTON",{"data-svelte-h":!0}),A(c)!=="svelte-1jwbm46"&&(c.textContent=o),this.h()},h(){z(e,"class","d-flex justify-content-center")},m(m,h){b(m,e,h),C(t,e,null),b(m,n,h),b(m,r,h),P(r,s),b(m,f,h),b(m,c,h),l=!0,i||(u=ee(c,"click",d[1]),i=!0)},p(m,[h]){(!l||h&1)&&a!==(a=m[0][m[0].length-1]+"")&&fe(s,a)},i(m){l||(w(t.$$.fragment,m),l=!0)},o(m){j(t.$$.fragment,m),l=!1},d(m){m&&(p(e),p(n),p(r),p(f),p(c)),O(t),i=!1,u()}}}const X=6;function ke(d,e,t){console.clear();let n=[];const r=i=>{const u=i.objects[i.objects.length-1],m=u.position.clone().toFixed(2),h=u.velocity.clone().toFixed(2);n.push(`${i.t} - pos: ${m} - vel: ${h}`),n.length>50&&n.shift(),t(0,n)},a=new K({reporter:r,enableGravity:!0});let s,f;const c=()=>{for(;a.objects.length;)a.objects.pop();f=v({geometry:{type:"line",vector:new y(80,20)},position:new y(10,20),fixed:!0}),a.addObject(f),s=v({geometry:{type:"sphere",r:10},position:new y(20,50),velocity:new y(2.5,2.5),fixed:!0}),a.addObject(s)};let o;const l=i=>{const u=g=>typeof g=="number"?g*X:g.clone().multiplyScalar(X),m=g=>typeof g=="number"?g/X:g.clone().divideScalar(X);i.setup=()=>{o=i;const g=u(a.dimensions);i.createCanvas(g.x,g.y),i.background(0),i.fill(255),i.stroke(255),c()};let h;i.draw=()=>{if(i.background(0),a.step(),i.mouseIsPressed){const g=m(new y(i.mouseX,i.height-i.mouseY));if(h||(g.distance(s.position)<2?h="sphere":g.distance(f.position)<2?h="wallstart":g.distance(f.geometry.vector.clone().add(f.position))<2&&(h="wallend")),h==="sphere"&&s.position.copy(g),h==="wallstart"&&f.position.copy(g),h==="wallend"){const $=g.clone().subtract(f.position);f.geometry.vector.copy($)}}else h=void 0;for(const g of a.objects){i.stroke(s.data.isColliding?"red":"white");const $=i.map(g.position.x,0,a.dimensions.x,0,i.width),k=i.map(g.position.y,0,a.dimensions.y,i.height,0);if(g.geometry.type==="sphere"){const E=u(g.geometry.r*2);i.strokeWeight(E),i.point($,k)}if(g.geometry.type==="line"){const E=$+i.map(g.geometry.vector.x,0,a.dimensions.x,0,i.width),V=k-i.map(g.geometry.vector.y,0,a.dimensions.y,0,i.height);i.strokeWeight(2),i.line($,k,E,V)}}}};return H(()=>{o==null||o.remove()}),[n,c,l]}class Te extends L{constructor(e){super(),M(this,e,ke,je,I,{})}}function Se(d){let e,t,n;return t=new J({props:{sketch:d[0]}}),{c(){e=_("div"),S(t.$$.fragment),this.h()},l(r){e=x(r,"DIV",{class:!0});var a=T(e);D(t.$$.fragment,a),a.forEach(p),this.h()},h(){z(e,"class","d-flex justify-content-center")},m(r,a){b(r,e,a),C(t,e,null),n=!0},p:te,i(r){n||(w(t.$$.fragment,r),n=!0)},o(r){j(t.$$.fragment,r),n=!1},d(r){r&&p(e),O(t)}}}const q=6;function Ce(d){console.clear();const e=new K({reporter:()=>{},enableGravity:!0});let t;const n=()=>{for(;e.objects.length;)e.objects.pop();const o=v({geometry:{type:"line",vector:new y(100,0)},position:new y(0,2),fixed:!0});e.addObject(o);const l=v({geometry:{type:"line",vector:new y(100,0)},position:new y(0,98),fixed:!0});e.addObject(l);const i=v({geometry:{type:"line",vector:new y(0,100)},position:new y(2,0),fixed:!0});e.addObject(i);const u=v({geometry:{type:"line",vector:new y(0,100)},position:new y(98,0),fixed:!0});e.addObject(u);const m=v({geometry:{type:"line",vector:new y(50,50)},position:new y(20,10),fixed:!0});e.addObject(m),t=v({geometry:{type:"sphere",r:5},position:new y(20,50),velocity:new y(Math.random()*5-2.5,Math.random()*20)}),e.addObject(t)},r=o=>typeof o=="number"?o*q:o.clone().multiplyScalar(q),a=o=>typeof o=="number"?o/q:o.clone().divideScalar(q),s=(o,l)=>{for(const i of l.objects){o.stroke(i.data.isColliding?"red":"white");const u=o.map(i.position.x,0,l.dimensions.x,0,o.width),m=o.map(i.position.y,0,l.dimensions.y,o.height,0);if(i.geometry.type==="sphere"){const h=r(i.geometry.r*2);o.strokeWeight(h),o.point(u,m)}if(i.geometry.type==="line"){const h=u+o.map(i.geometry.vector.x,0,l.dimensions.x,0,o.width),g=m-o.map(i.geometry.vector.y,0,l.dimensions.y,0,o.height);o.strokeWeight(2),o.line(u,m,h,g)}}};let f;const c=o=>{o.setup=()=>{f=o;const i=r(e.dimensions);o.createCanvas(i.x,i.y),o.background(0),o.fill(255),o.stroke(255),n()},o.draw=()=>{if(o.background(0),o.mouseIsPressed){t.fixed=!0;const i=a(new y(o.mouseX,o.height-o.mouseY));t.position.copy(i)}else t.fixed=!1;e.step(),s(o,e)};let l;o.mousePressed=()=>{l=a(new y(o.mouseX,o.height-o.mouseY))},o.mouseReleased=()=>{const i=a(new y(o.mouseX,o.height-o.mouseY)),u=l.subtract(i);t.position.copy(i),t.velocity.copy(u)}};return H(()=>{f==null||f.remove()}),[c]}class Oe extends L{constructor(e){super(),M(this,e,Ce,Se,I,{})}}function Ee(d){let e,t,n,r,a,s,f,c="Gravity",o,l,i,u="Toggle",m,h,g;return t=new J({props:{sketch:d[1]}}),{c(){e=_("div"),S(t.$$.fragment),n=N(),r=_("table"),a=_("tbody"),s=_("tr"),f=_("th"),f.textContent=c,o=N(),l=_("td"),i=_("button"),i.textContent=u,this.h()},l($){e=x($,"DIV",{class:!0});var k=T(e);D(t.$$.fragment,k),k.forEach(p),n=G($),r=x($,"TABLE",{});var E=T(r);a=x(E,"TBODY",{});var V=T(a);s=x(V,"TR",{});var B=T(s);f=x(B,"TH",{"data-svelte-h":!0}),A(f)!=="svelte-vy75us"&&(f.textContent=c),o=G(B),l=x(B,"TD",{});var Y=T(l);i=x(Y,"BUTTON",{"data-svelte-h":!0}),A(i)!=="svelte-18lc94l"&&(i.textContent=u),Y.forEach(p),B.forEach(p),V.forEach(p),E.forEach(p),this.h()},h(){z(e,"class","d-flex justify-content-center")},m($,k){b($,e,k),C(t,e,null),b($,n,k),b($,r,k),P(r,a),P(a,s),P(s,f),P(s,o),P(s,l),P(l,i),m=!0,h||(g=ee(i,"click",d[2]),h=!0)},p:te,i($){m||(w(t.$$.fragment,$),m=!0)},o($){j(t.$$.fragment,$),m=!1},d($){$&&(p(e),p(n),p(r)),O(t),h=!1,g()}}}const F=6;function We(d){console.clear();const e=new K({reporter:()=>{},enableGravity:!0});let t;const n=()=>{for(;e.objects.length;)e.objects.pop();const l=v({geometry:{type:"line",vector:new y(100,0)},position:new y(0,0),fixed:!0});e.addObject(l);const i=v({geometry:{type:"line",vector:new y(100,0)},position:new y(0,100),fixed:!0});e.addObject(i);const u=v({geometry:{type:"line",vector:new y(0,100)},position:new y(0,0),fixed:!0});e.addObject(u);const m=v({geometry:{type:"line",vector:new y(0,100)},position:new y(100,0),fixed:!0});e.addObject(m);const h=v({geometry:{type:"line",vector:new y(50,50)},position:new y(20,10),fixed:!0});e.addObject(h),t=v({geometry:{type:"sphere",r:2},position:new y(20,50),velocity:new y(Math.random()*5-2.5,Math.random()*20)}),e.addObject(t)},r=l=>typeof l=="number"?l*F:l.clone().multiplyScalar(F),a=l=>typeof l=="number"?l/F:l.clone().divideScalar(F),s=(l,i)=>{for(const u of i.objects){l.stroke(u.data.isColliding?"red":"white");const m=l.map(u.position.x,0,i.dimensions.x,0,l.width),h=l.map(u.position.y,0,i.dimensions.y,l.height,0);if(u.geometry.type==="sphere"){const g=r(u.geometry.r*2);l.strokeWeight(g),l.point(m,h)}if(u.geometry.type==="line"){const g=m+l.map(u.geometry.vector.x,0,i.dimensions.x,0,l.width),$=h-l.map(u.geometry.vector.y,0,i.dimensions.y,0,l.height);l.strokeWeight(2),l.line(m,h,g,$)}}};let f;const c=l=>{l.setup=()=>{f=l;const u=r(e.dimensions);l.createCanvas(u.x,u.y),l.background(0),l.fill(255),l.stroke(255),n()},l.draw=()=>{if(l.background(0),he(l)){t.fixed=!0;const u=a(new y(l.mouseX,l.height-l.mouseY));t.position.copy(u)}else t.fixed=!1;e.step(),s(l,e)};let i;l.mousePressed=()=>{ie(l)&&(i=a(new y(l.mouseX,l.height-l.mouseY)))},l.mouseReleased=()=>{if(!ie(l))return;const u=a(new y(l.mouseX,l.height-l.mouseY)),m=i.subtract(u);t.position.copy(u),t.velocity.copy(m)}};return H(()=>{f==null||f.remove()}),[e,c,()=>e.toggleGravity()]}class De extends L{constructor(e){super(),M(this,e,We,Ee,I,{})}}function re(d,e,t){const n=d.slice();return n[1]=e[t],n}function le(d,e,t){const n=d.slice();return n[1]=e[t],n}function Pe(d){let e=d[1].title+"",t;return{c(){t=Q(e)},l(n){t=Z(n,e)},m(n,r){b(n,t,r)},p:te,d(n){n&&p(t)}}}function ce(d){let e,t;return e=new $e({props:{$$slots:{default:[Pe]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Ne(d){let e,t,n=U(d[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=ce(le(d,n,s));const a=s=>j(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=R()},l(s){for(let f=0;f<r.length;f+=1)r[f].l(s);e=R()},m(s,f){for(let c=0;c<r.length;c+=1)r[c]&&r[c].m(s,f);b(s,e,f),t=!0},p(s,f){if(f&1){n=U(s[0]);let c;for(c=0;c<n.length;c+=1){const o=le(s,n,c);r[c]?(r[c].p(o,f),w(r[c],1)):(r[c]=ce(o),r[c].c(),w(r[c],1),r[c].m(e.parentNode,e))}for(oe(),c=n.length;c<r.length;c+=1)a(c);ne()}},i(s){if(!t){for(let f=0;f<n.length;f+=1)w(r[f]);t=!0}},o(s){r=r.filter(Boolean);for(let f=0;f<r.length;f+=1)j(r[f]);t=!1},d(s){s&&p(e),de(r,s)}}}function Ge(d){let e,t,n;var r=d[1].component;function a(s,f){return{}}return r&&(e=se(r,a())),{c(){e&&S(e.$$.fragment),t=N()},l(s){e&&D(e.$$.fragment,s),t=G(s)},m(s,f){e&&C(e,s,f),b(s,t,f),n=!0},p(s,f){if(r!==(r=s[1].component)){if(e){oe();const c=e;j(c.$$.fragment,1,0,()=>{O(c,1)}),ne()}r?(e=se(r,a()),S(e.$$.fragment),w(e.$$.fragment,1),C(e,t.parentNode,t)):e=null}},i(s){n||(e&&w(e.$$.fragment,s),n=!0)},o(s){e&&j(e.$$.fragment,s),n=!1},d(s){s&&p(t),e&&O(e,s)}}}function ae(d){let e,t;return e=new pe({props:{$$slots:{default:[Ge]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p(n,r){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Ve(d){let e,t,n,r;e=new ge({props:{$$slots:{default:[Ne]},$$scope:{ctx:d}}});let a=U(d[0]),s=[];for(let c=0;c<a.length;c+=1)s[c]=ae(re(d,a,c));const f=c=>j(s[c],1,1,()=>{s[c]=null});return{c(){S(e.$$.fragment),t=N();for(let c=0;c<s.length;c+=1)s[c].c();n=R()},l(c){D(e.$$.fragment,c),t=G(c);for(let o=0;o<s.length;o+=1)s[o].l(c);n=R()},m(c,o){C(e,c,o),b(c,t,o);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(c,o);b(c,n,o),r=!0},p(c,o){const l={};if(o&64&&(l.$$scope={dirty:o,ctx:c}),e.$set(l),o&1){a=U(c[0]);let i;for(i=0;i<a.length;i+=1){const u=re(c,a,i);s[i]?(s[i].p(u,o),w(s[i],1)):(s[i]=ae(u),s[i].c(),w(s[i],1),s[i].m(n.parentNode,n))}for(oe(),i=a.length;i<s.length;i+=1)f(i);ne()}},i(c){if(!r){w(e.$$.fragment,c);for(let o=0;o<a.length;o+=1)w(s[o]);r=!0}},o(c){j(e.$$.fragment,c),s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)j(s[o]);r=!1},d(c){c&&(p(t),p(n)),O(e,c),de(s,c)}}}function Be(d){let e,t;return e=new ye({props:{$$slots:{default:[Ve]},$$scope:{ctx:d}}}),{c(){S(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,r){C(e,n,r),t=!0},p(n,[r]){const a={};r&64&&(a.$$scope={dirty:r,ctx:n}),e.$set(a)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){O(e,n)}}}function Ie(d){return[[{title:"Test collisions 3",component:De},{title:"Test collisions 2",component:Oe},{title:"Test collisions",component:Te},{title:"Test engine",component:xe}]]}class Ae extends L{constructor(e){super(),M(this,e,Ie,Be,I,{})}}export{Ae as component};
