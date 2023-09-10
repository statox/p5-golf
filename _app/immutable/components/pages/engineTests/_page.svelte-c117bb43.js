var me=Object.defineProperty;var ue=(d,e,t)=>e in d?me(d,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):d[e]=t;var D=(d,e,t)=>(ue(d,typeof e!="symbol"?e+"":e,t),t);import{S as Y,i as M,s as X,k as _,w as E,a as N,q as B,l as x,m as k,x as P,h as p,c as G,r as I,n as z,b,y as O,D as S,I as Z,u as fe,f as w,t as j,z as C,J as H,B as ee,e as U,g as te,d as oe,P as de,v as se}from"../../../chunks/index-8cded794.js";import{v as h,P as J,m as ye,a as ie,T as he,b as ge,c as pe,d as $e}from"../../../chunks/p5utils-8102c767.js";const be=(d,e)=>{if(e.geometry.type!=="sphere"||d.geometry.type!=="line")throw new Error("invalid geometry");const t=ve(d,e);if(!t){e.data.isColliding=!1;return}e.data.isColliding=!0;const n=.8,i=.2,a=d.position.x,s=d.position.y,m=d.position.x+d.geometry.vector.x,c=d.position.y+d.geometry.vector.y,o=m-a,l=c-s,r=new h(-l,o),u=new h(l,-o),f=t.clone().add(r),y=t.clone().add(u);let g;e.position.distanceSq(f)<e.position.distanceSq(y)?g=r:g=u;const $=g.clone().normalize(),T=e.velocity.clone(),W=$.multiplyScalar(T.dot($)),L=T.subtract(W),V=n,q=i;return L.multiplyScalar(1-q).subtract(W.multiplyScalar(V))},ve=(d,e)=>{if(e.geometry.type!=="sphere"||d.geometry.type!=="line")throw new Error("invalid geometry");const t=d.position.clone(),n=d.position.clone().add(d.geometry.vector),i=e.position.clone(),a=e.geometry.r,s=n.clone().subtract(t),m=t.clone().subtract(i),c=s.dot(s),o=m.dot(s)*2,l=m.dot(m)-a*a;let r=o*o-4*c*l;if(r<0)return;r=Math.sqrt(r);const u=(-o-r)/(2*c),f=(-o+r)/(2*c);if(u>=0&&u<=1)return t.add(s.multiplyScalar(u));if(f>=0&&f<=1)return t.add(s.multiplyScalar(f))};class K{constructor(e){D(this,"gravityEnabled");D(this,"dimensions");D(this,"t");D(this,"objects");D(this,"gravity",new h(0,-9.8));D(this,"drag",.01);D(this,"reporter");D(this,"lastTick");this.gravityEnabled=e.enableGravity??!0,this.dimensions=e.dimensions||new h(100,100),this.objects=[],this.t=0,this.reporter=e.reporter||console.log,this.lastTick=0}toggleGravity(){this.gravityEnabled=!this.gravityEnabled}addObject(e){this.objects.push(e)}applyGravity(e){e.acceleration.push(this.gravity)}applyDynamics(e,t){this.gravityEnabled&&this.applyGravity(t);const n=new h(0,0);for(;t.acceleration.length;){const a=t.acceleration.pop();a&&n.add(a)}n.divideScalar(t.m);const i=1-this.drag;t.velocity.add(n.multiplyScalar(e)).multiplyScalar(i),t.position.add(t.velocity.clone().multiplyScalar(e))}applyCollisions(e){const t=this.objects.find(s=>s.geometry.type==="sphere"),n=this.objects.filter(s=>s.geometry.type==="line");if(!t)throw new Error("No sphere in world");const i=new h(0,0);let a=0;for(const s of n){const m=be(s,t);m&&(a++,i.add(m))}a>0&&(i.divideScalar(a),t.velocity.copy(i),t.position.add(t.velocity.clone().multiplyScalar(e)))}step(){this.t===0&&(this.lastTick=Date.now()),this.t++;const e=Date.now(),t=5,n=(e-this.lastTick)/(1e3/60*t);for(const i of this.objects)i.fixed||this.applyDynamics(n,i);this.applyCollisions(n),this.reporter&&this.reporter(this),this.lastTick=Date.now()}}const v=d=>{var e,t;return{geometry:d.geometry,m:d.mass??10,position:((e=d.position)==null?void 0:e.clone())??new h(0,0),velocity:((t=d.velocity)==null?void 0:t.clone())??new h(0,0),acceleration:[],fixed:d.fixed??!1,data:{isColliding:!1}}};function we(d){let e,t,n,i,a=d[0][d[0].length-1]+"",s,m,c,o,l,r,u;return t=new J({props:{sketch:d[2]}}),{c(){e=_("div"),E(t.$$.fragment),n=N(),i=_("p"),s=B(a),m=N(),c=_("button"),o=B("New ball"),this.h()},l(f){e=x(f,"DIV",{class:!0});var y=k(e);P(t.$$.fragment,y),y.forEach(p),n=G(f),i=x(f,"P",{});var g=k(i);s=I(g,a),g.forEach(p),m=G(f),c=x(f,"BUTTON",{});var $=k(c);o=I($,"New ball"),$.forEach(p),this.h()},h(){z(e,"class","d-flex justify-content-center")},m(f,y){b(f,e,y),O(t,e,null),b(f,n,y),b(f,i,y),S(i,s),b(f,m,y),b(f,c,y),S(c,o),l=!0,r||(u=Z(c,"click",d[1]),r=!0)},p(f,[y]){(!l||y&1)&&a!==(a=f[0][f[0].length-1]+"")&&fe(s,a)},i(f){l||(w(t.$$.fragment,f),l=!0)},o(f){j(t.$$.fragment,f),l=!1},d(f){f&&p(e),C(t),f&&p(n),f&&p(i),f&&p(m),f&&p(c),r=!1,u()}}}function _e(d,e,t){console.clear();let n=[];const i=o=>{const l=o.objects[o.objects.length-1],r=l.position.clone().toFixed(2),u=l.velocity.clone().toFixed(2);n.push(`${o.t} - pos: ${r} - vel: ${u}`),n.length>50&&n.shift(),t(0,n)},a=new K({reporter:i,enableGravity:!0}),s=()=>{for(;a.objects.length;)a.objects.pop();const o=v({geometry:{type:"line",vector:new h(100,0)},position:new h(0,0),fixed:!0});a.addObject(o);for(let l=0;l<1;l++){const r=v({geometry:{type:"sphere",r:5},position:new h(20,50),velocity:new h(Math.random()*5-2.5,Math.random()*20)});a.addObject(r)}};let m;const c=o=>{o.setup=()=>{m=o,o.createCanvas(900,600),o.background(0),o.fill(255),o.stroke(255),s()},o.draw=()=>{o.background(0),a.step();for(const l of a.objects){const r=o.map(l.position.x,0,a.dimensions.x,0,o.width),u=o.map(l.position.y,0,a.dimensions.y,o.height,0);if(l.geometry.type==="sphere"&&(o.strokeWeight(l.geometry.r*2),o.point(r,u)),l.geometry.type==="line"){const f=r+o.map(l.geometry.vector.x,0,a.dimensions.x,0,o.width),y=u+o.map(l.geometry.vector.y,0,a.dimensions.y,0,o.height);o.strokeWeight(2),o.line(r,u,f,y)}}}};return H(()=>{m==null||m.remove()}),[n,s,c]}class xe extends Y{constructor(e){super(),M(this,e,_e,we,X,{})}}function ke(d){let e,t,n,i,a=d[0][d[0].length-1]+"",s,m,c,o,l,r,u;return t=new J({props:{sketch:d[2]}}),{c(){e=_("div"),E(t.$$.fragment),n=N(),i=_("p"),s=B(a),m=N(),c=_("button"),o=B("New ball"),this.h()},l(f){e=x(f,"DIV",{class:!0});var y=k(e);P(t.$$.fragment,y),y.forEach(p),n=G(f),i=x(f,"P",{});var g=k(i);s=I(g,a),g.forEach(p),m=G(f),c=x(f,"BUTTON",{});var $=k(c);o=I($,"New ball"),$.forEach(p),this.h()},h(){z(e,"class","d-flex justify-content-center")},m(f,y){b(f,e,y),O(t,e,null),b(f,n,y),b(f,i,y),S(i,s),b(f,m,y),b(f,c,y),S(c,o),l=!0,r||(u=Z(c,"click",d[1]),r=!0)},p(f,[y]){(!l||y&1)&&a!==(a=f[0][f[0].length-1]+"")&&fe(s,a)},i(f){l||(w(t.$$.fragment,f),l=!0)},o(f){j(t.$$.fragment,f),l=!1},d(f){f&&p(e),C(t),f&&p(n),f&&p(i),f&&p(m),f&&p(c),r=!1,u()}}}const F=6;function je(d,e,t){console.clear();let n=[];const i=r=>{const u=r.objects[r.objects.length-1],f=u.position.clone().toFixed(2),y=u.velocity.clone().toFixed(2);n.push(`${r.t} - pos: ${f} - vel: ${y}`),n.length>50&&n.shift(),t(0,n)},a=new K({reporter:i,enableGravity:!0});let s,m;const c=()=>{for(;a.objects.length;)a.objects.pop();m=v({geometry:{type:"line",vector:new h(80,20)},position:new h(10,20),fixed:!0}),a.addObject(m),s=v({geometry:{type:"sphere",r:10},position:new h(20,50),velocity:new h(2.5,2.5),fixed:!0}),a.addObject(s)};let o;const l=r=>{const u=g=>typeof g=="number"?g*F:g.clone().multiplyScalar(F),f=g=>typeof g=="number"?g/F:g.clone().divideScalar(F);r.setup=()=>{o=r;const g=u(a.dimensions);r.createCanvas(g.x,g.y),r.background(0),r.fill(255),r.stroke(255),c()};let y;r.draw=()=>{if(r.background(0),a.step(),r.mouseIsPressed){const g=f(new h(r.mouseX,r.height-r.mouseY));if(y||(g.distance(s.position)<2?y="sphere":g.distance(m.position)<2?y="wallstart":g.distance(m.geometry.vector.clone().add(m.position))<2&&(y="wallend")),y==="sphere"&&s.position.copy(g),y==="wallstart"&&m.position.copy(g),y==="wallend"){const $=g.clone().subtract(m.position);m.geometry.vector.copy($)}}else y=void 0;for(const g of a.objects){r.stroke(s.data.isColliding?"red":"white");const $=r.map(g.position.x,0,a.dimensions.x,0,r.width),T=r.map(g.position.y,0,a.dimensions.y,r.height,0);if(g.geometry.type==="sphere"){const W=u(g.geometry.r*2);r.strokeWeight(W),r.point($,T)}if(g.geometry.type==="line"){const W=$+r.map(g.geometry.vector.x,0,a.dimensions.x,0,r.width),L=T-r.map(g.geometry.vector.y,0,a.dimensions.y,0,r.height);r.strokeWeight(2),r.line($,T,W,L)}}}};return H(()=>{o==null||o.remove()}),[n,c,l]}class Te extends Y{constructor(e){super(),M(this,e,je,ke,X,{})}}function Se(d){let e,t,n;return t=new J({props:{sketch:d[0]}}),{c(){e=_("div"),E(t.$$.fragment),this.h()},l(i){e=x(i,"DIV",{class:!0});var a=k(e);P(t.$$.fragment,a),a.forEach(p),this.h()},h(){z(e,"class","d-flex justify-content-center")},m(i,a){b(i,e,a),O(t,e,null),n=!0},p:ee,i(i){n||(w(t.$$.fragment,i),n=!0)},o(i){j(t.$$.fragment,i),n=!1},d(i){i&&p(e),C(t)}}}const A=6;function Ee(d){console.clear();const e=new K({reporter:()=>{},enableGravity:!0});let t;const n=()=>{for(;e.objects.length;)e.objects.pop();const o=v({geometry:{type:"line",vector:new h(100,0)},position:new h(0,2),fixed:!0});e.addObject(o);const l=v({geometry:{type:"line",vector:new h(100,0)},position:new h(0,98),fixed:!0});e.addObject(l);const r=v({geometry:{type:"line",vector:new h(0,100)},position:new h(2,0),fixed:!0});e.addObject(r);const u=v({geometry:{type:"line",vector:new h(0,100)},position:new h(98,0),fixed:!0});e.addObject(u);const f=v({geometry:{type:"line",vector:new h(50,50)},position:new h(20,10),fixed:!0});e.addObject(f),t=v({geometry:{type:"sphere",r:5},position:new h(20,50),velocity:new h(Math.random()*5-2.5,Math.random()*20)}),e.addObject(t)},i=o=>typeof o=="number"?o*A:o.clone().multiplyScalar(A),a=o=>typeof o=="number"?o/A:o.clone().divideScalar(A),s=(o,l)=>{for(const r of l.objects){o.stroke(r.data.isColliding?"red":"white");const u=o.map(r.position.x,0,l.dimensions.x,0,o.width),f=o.map(r.position.y,0,l.dimensions.y,o.height,0);if(r.geometry.type==="sphere"){const y=i(r.geometry.r*2);o.strokeWeight(y),o.point(u,f)}if(r.geometry.type==="line"){const y=u+o.map(r.geometry.vector.x,0,l.dimensions.x,0,o.width),g=f-o.map(r.geometry.vector.y,0,l.dimensions.y,0,o.height);o.strokeWeight(2),o.line(u,f,y,g)}}};let m;const c=o=>{o.setup=()=>{m=o;const r=i(e.dimensions);o.createCanvas(r.x,r.y),o.background(0),o.fill(255),o.stroke(255),n()},o.draw=()=>{if(o.background(0),o.mouseIsPressed){t.fixed=!0;const r=a(new h(o.mouseX,o.height-o.mouseY));t.position.copy(r)}else t.fixed=!1;e.step(),s(o,e)};let l;o.mousePressed=()=>{l=a(new h(o.mouseX,o.height-o.mouseY))},o.mouseReleased=()=>{const r=a(new h(o.mouseX,o.height-o.mouseY)),u=l.subtract(r);t.position.copy(r),t.velocity.copy(u)}};return H(()=>{m==null||m.remove()}),[c]}class Oe extends Y{constructor(e){super(),M(this,e,Ee,Se,X,{})}}function Ce(d){let e,t,n,i,a,s,m,c,o,l,r,u,f,y,g;return t=new J({props:{sketch:d[1]}}),{c(){e=_("div"),E(t.$$.fragment),n=N(),i=_("table"),a=_("tbody"),s=_("tr"),m=_("th"),c=B("Gravity"),o=N(),l=_("td"),r=_("button"),u=B("Toggle"),this.h()},l($){e=x($,"DIV",{class:!0});var T=k(e);P(t.$$.fragment,T),T.forEach(p),n=G($),i=x($,"TABLE",{});var W=k(i);a=x(W,"TBODY",{});var L=k(a);s=x(L,"TR",{});var V=k(s);m=x(V,"TH",{});var q=k(m);c=I(q,"Gravity"),q.forEach(p),o=G(V),l=x(V,"TD",{});var Q=k(l);r=x(Q,"BUTTON",{});var ne=k(r);u=I(ne,"Toggle"),ne.forEach(p),Q.forEach(p),V.forEach(p),L.forEach(p),W.forEach(p),this.h()},h(){z(e,"class","d-flex justify-content-center")},m($,T){b($,e,T),O(t,e,null),b($,n,T),b($,i,T),S(i,a),S(a,s),S(s,m),S(m,c),S(s,o),S(s,l),S(l,r),S(r,u),f=!0,y||(g=Z(r,"click",d[2]),y=!0)},p:ee,i($){f||(w(t.$$.fragment,$),f=!0)},o($){j(t.$$.fragment,$),f=!1},d($){$&&p(e),C(t),$&&p(n),$&&p(i),y=!1,g()}}}const R=6;function We(d){console.clear();const e=new K({reporter:()=>{},enableGravity:!0});let t;const n=()=>{for(;e.objects.length;)e.objects.pop();const l=v({geometry:{type:"line",vector:new h(100,0)},position:new h(0,0),fixed:!0});e.addObject(l);const r=v({geometry:{type:"line",vector:new h(100,0)},position:new h(0,100),fixed:!0});e.addObject(r);const u=v({geometry:{type:"line",vector:new h(0,100)},position:new h(0,0),fixed:!0});e.addObject(u);const f=v({geometry:{type:"line",vector:new h(0,100)},position:new h(100,0),fixed:!0});e.addObject(f);const y=v({geometry:{type:"line",vector:new h(50,50)},position:new h(20,10),fixed:!0});e.addObject(y),t=v({geometry:{type:"sphere",r:2},position:new h(20,50),velocity:new h(Math.random()*5-2.5,Math.random()*20)}),e.addObject(t)},i=l=>typeof l=="number"?l*R:l.clone().multiplyScalar(R),a=l=>typeof l=="number"?l/R:l.clone().divideScalar(R),s=(l,r)=>{for(const u of r.objects){l.stroke(u.data.isColliding?"red":"white");const f=l.map(u.position.x,0,r.dimensions.x,0,l.width),y=l.map(u.position.y,0,r.dimensions.y,l.height,0);if(u.geometry.type==="sphere"){const g=i(u.geometry.r*2);l.strokeWeight(g),l.point(f,y)}if(u.geometry.type==="line"){const g=f+l.map(u.geometry.vector.x,0,r.dimensions.x,0,l.width),$=y-l.map(u.geometry.vector.y,0,r.dimensions.y,0,l.height);l.strokeWeight(2),l.line(f,y,g,$)}}};let m;const c=l=>{l.setup=()=>{m=l;const u=i(e.dimensions);l.createCanvas(u.x,u.y),l.background(0),l.fill(255),l.stroke(255),n()},l.draw=()=>{if(l.background(0),ye(l)){t.fixed=!0;const u=a(new h(l.mouseX,l.height-l.mouseY));t.position.copy(u)}else t.fixed=!1;e.step(),s(l,e)};let r;l.mousePressed=()=>{ie(l)&&(r=a(new h(l.mouseX,l.height-l.mouseY)))},l.mouseReleased=()=>{if(!ie(l))return;const u=a(new h(l.mouseX,l.height-l.mouseY)),f=r.subtract(u);t.position.copy(u),t.velocity.copy(f)}};return H(()=>{m==null||m.remove()}),[e,c,()=>e.toggleGravity()]}class De extends Y{constructor(e){super(),M(this,e,We,Ce,X,{})}}function re(d,e,t){const n=d.slice();return n[1]=e[t],n}function le(d,e,t){const n=d.slice();return n[1]=e[t],n}function Pe(d){let e=d[1].title+"",t;return{c(){t=B(e)},l(n){t=I(n,e)},m(n,i){b(n,t,i)},p:ee,d(n){n&&p(t)}}}function ce(d){let e,t;return e=new $e({props:{$$slots:{default:[Pe]},$$scope:{ctx:d}}}),{c(){E(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,i){O(e,n,i),t=!0},p(n,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:n}),e.$set(a)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Ne(d){let e,t,n=d[0],i=[];for(let s=0;s<n.length;s+=1)i[s]=ce(le(d,n,s));const a=s=>j(i[s],1,1,()=>{i[s]=null});return{c(){for(let s=0;s<i.length;s+=1)i[s].c();e=U()},l(s){for(let m=0;m<i.length;m+=1)i[m].l(s);e=U()},m(s,m){for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(s,m);b(s,e,m),t=!0},p(s,m){if(m&1){n=s[0];let c;for(c=0;c<n.length;c+=1){const o=le(s,n,c);i[c]?(i[c].p(o,m),w(i[c],1)):(i[c]=ce(o),i[c].c(),w(i[c],1),i[c].m(e.parentNode,e))}for(te(),c=n.length;c<i.length;c+=1)a(c);oe()}},i(s){if(!t){for(let m=0;m<n.length;m+=1)w(i[m]);t=!0}},o(s){i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)j(i[m]);t=!1},d(s){de(i,s),s&&p(e)}}}function Ge(d){let e,t,n;var i=d[1].component;function a(s){return{}}return i&&(e=se(i,a())),{c(){e&&E(e.$$.fragment),t=N()},l(s){e&&P(e.$$.fragment,s),t=G(s)},m(s,m){e&&O(e,s,m),b(s,t,m),n=!0},p(s,m){if(i!==(i=s[1].component)){if(e){te();const c=e;j(c.$$.fragment,1,0,()=>{C(c,1)}),oe()}i?(e=se(i,a()),E(e.$$.fragment),w(e.$$.fragment,1),O(e,t.parentNode,t)):e=null}},i(s){n||(e&&w(e.$$.fragment,s),n=!0)},o(s){e&&j(e.$$.fragment,s),n=!1},d(s){e&&C(e,s),s&&p(t)}}}function ae(d){let e,t;return e=new pe({props:{$$slots:{default:[Ge]},$$scope:{ctx:d}}}),{c(){E(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,i){O(e,n,i),t=!0},p(n,i){const a={};i&64&&(a.$$scope={dirty:i,ctx:n}),e.$set(a)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Be(d){let e,t,n,i;e=new ge({props:{$$slots:{default:[Ne]},$$scope:{ctx:d}}});let a=d[0],s=[];for(let c=0;c<a.length;c+=1)s[c]=ae(re(d,a,c));const m=c=>j(s[c],1,1,()=>{s[c]=null});return{c(){E(e.$$.fragment),t=N();for(let c=0;c<s.length;c+=1)s[c].c();n=U()},l(c){P(e.$$.fragment,c),t=G(c);for(let o=0;o<s.length;o+=1)s[o].l(c);n=U()},m(c,o){O(e,c,o),b(c,t,o);for(let l=0;l<s.length;l+=1)s[l]&&s[l].m(c,o);b(c,n,o),i=!0},p(c,o){const l={};if(o&64&&(l.$$scope={dirty:o,ctx:c}),e.$set(l),o&1){a=c[0];let r;for(r=0;r<a.length;r+=1){const u=re(c,a,r);s[r]?(s[r].p(u,o),w(s[r],1)):(s[r]=ae(u),s[r].c(),w(s[r],1),s[r].m(n.parentNode,n))}for(te(),r=a.length;r<s.length;r+=1)m(r);oe()}},i(c){if(!i){w(e.$$.fragment,c);for(let o=0;o<a.length;o+=1)w(s[o]);i=!0}},o(c){j(e.$$.fragment,c),s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)j(s[o]);i=!1},d(c){C(e,c),c&&p(t),de(s,c),c&&p(n)}}}function Ie(d){let e,t;return e=new he({props:{$$slots:{default:[Be]},$$scope:{ctx:d}}}),{c(){E(e.$$.fragment)},l(n){P(e.$$.fragment,n)},m(n,i){O(e,n,i),t=!0},p(n,[i]){const a={};i&64&&(a.$$scope={dirty:i,ctx:n}),e.$set(a)},i(n){t||(w(e.$$.fragment,n),t=!0)},o(n){j(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Le(d){return[[{title:"Test collisions 3",component:De},{title:"Test collisions 2",component:Oe},{title:"Test collisions",component:Te},{title:"Test engine",component:xe}]]}class Xe extends Y{constructor(e){super(),M(this,e,Le,Ie,X,{})}}export{Xe as default};
