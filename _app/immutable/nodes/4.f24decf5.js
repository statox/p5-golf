var ht=Object.defineProperty;var yt=(f,e,t)=>e in f?ht(f,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):f[e]=t;var q=(f,e,t)=>(yt(f,typeof e!="symbol"?e+"":e,t),t);import{s as re,f as w,a as E,l as B,g as _,h as k,d as g,c as O,m as I,u as z,j as _e,i as S,y as v,L as ie,n as A,M as xe,z as qe,O as pt,e as Ve,E as ut,q as lt}from"../chunks/scheduler.e421d989.js";import{S as le,i as ce,b as G,d as M,m as Y,a as W,t as F,e as L,g as He,c as ze}from"../chunks/index.52486247.js";import{e as Ne}from"../chunks/each.e59479a4.js";import{V as h,P as Te,m as mt,a as Be,T as gt,b as bt,c as vt,d as $t}from"../chunks/p5utils.fe4d08ff.js";const wt=(f,e)=>{if(e.geometry.type!=="sphere"||f.geometry.type!=="line")throw new Error("invalid geometry");const t=_t(f,e);if(!t)return;const s=.8,i=.2,c=f.position.x,o=f.position.y,d=f.position.x+f.geometry.vector.x,a=f.position.y+f.geometry.vector.y,n=d-c,r=a-o,l=new h(-r,n),y=new h(r,-n),u=t.clone().add(l),p=t.clone().add(y);let b;e.position.distanceSq(u)<e.position.distanceSq(p)?b=l:b=y;const m=b.clone().normalize(),x=e.velocity.clone(),$=m.multiplyScalar(x.dot(m)),C=x.subtract($),P=s,V=i;return C.multiplyScalar(1-V).subtract($.multiplyScalar(P))},_t=(f,e)=>{if(e.geometry.type!=="sphere"||f.geometry.type!=="line")throw new Error("invalid geometry");const t=f.position.clone(),s=f.position.clone().add(f.geometry.vector),i=e.position.clone(),c=e.geometry.r,o=s.clone().subtract(t),d=t.clone().subtract(i),a=o.dot(o),n=d.dot(o)*2,r=d.dot(d)-c*c;let l=n*n-4*a*r;if(l<0)return;l=Math.sqrt(l);const y=(-n-l)/(2*a),u=(-n+l)/(2*a);if(y>=0&&y<=1)return t.add(o.multiplyScalar(y));if(u>=0&&u<=1)return t.add(o.multiplyScalar(u))};class je{constructor(e){q(this,"gravityEnabled");q(this,"dimensions");q(this,"t");q(this,"objects");q(this,"gravity",new h(0,-9.8));q(this,"antiGravity",new h(0,9.8));q(this,"drag",.001);q(this,"reporter");this.gravityEnabled=e.enableGravity??!0,this.dimensions=e.dimensions||new h(100,100),this.objects=[],this.t=0,this.reporter=e.reporter||console.log}toggleGravity(){this.gravityEnabled=!this.gravityEnabled}addObject(e){this.objects.push(e)}applyGravity(e){e.acceleration.push(this.gravity)}applyDynamics(e,t){this.gravityEnabled&&this.applyGravity(t);const s=new h(0,0);for(;t.acceleration.length;){const c=t.acceleration.pop();c&&s.add(c)}s.divideScalar(t.m);const i=1-this.drag;t.velocity.add(s.multiplyScalar(e)).multiplyScalar(i),t.position.add(t.velocity.clone().multiplyScalar(e))}applyCollisions(e){const t=this.objects.find(o=>o.geometry.type==="sphere"),s=this.objects.filter(o=>o.geometry.type==="line");if(!t)throw new Error("No sphere in world");t.data.isColliding=!1;const i=new h(0,0);let c=0;for(const o of s){o.data.isColliding=!1;const d=wt(o,t);d&&(c++,i.add(d),o.data.isColliding=!0)}c>0&&(i.divideScalar(c),t.velocity.copy(i),t.position.add(t.velocity.clone().multiplyScalar(e)),t.data.isColliding=!0,t.acceleration.push(this.gravity.clone().multiplyScalar(-1)))}_step(e){this.applyCollisions(e);for(const t of this.objects)t.fixed||this.applyDynamics(e,t)}stepFixedDt(){const t=Date.now()/1e3;we=t-$e,$e=t,this._step(.01),this.t+=.01,this.reporter&&this.reporter({...this,frameTime:we})}stepAccumulator(){const t=Date.now()/1e3;$e===0&&($e=t),we=t-$e,Ue+=we;let s=0;for(;Ue>=.01&&s<5;)s++,this._step(.01),Ue-=.01,this.t+=.01,this.reporter&&this.reporter({...this,frameTime:we})}step(){this.stepAccumulator()}}let $e=0,we=0,Ue=0;const j=f=>{var e,t;return{geometry:f.geometry,m:f.mass??1,position:((e=f.position)==null?void 0:e.clone())??new h(0,0),velocity:((t=f.velocity)==null?void 0:t.clone())??new h(0,0),acceleration:[],fixed:f.fixed??!1,data:{isColliding:!1}}};function xt(f){let e,t,s,i,c=f[0][f[0].length-1]+"",o,d,a,n="New ball",r,l,y;return t=new Te({props:{sketch:f[2]}}),{c(){e=w("div"),G(t.$$.fragment),s=E(),i=w("p"),o=B(c),d=E(),a=w("button"),a.textContent=n,this.h()},l(u){e=_(u,"DIV",{class:!0});var p=k(e);M(t.$$.fragment,p),p.forEach(g),s=O(u),i=_(u,"P",{});var b=k(i);o=I(b,c),b.forEach(g),d=O(u),a=_(u,"BUTTON",{"data-svelte-h":!0}),z(a)!=="svelte-1jwbm46"&&(a.textContent=n),this.h()},h(){_e(e,"class","d-flex justify-content-center")},m(u,p){S(u,e,p),Y(t,e,null),S(u,s,p),S(u,i,p),v(i,o),S(u,d,p),S(u,a,p),r=!0,l||(y=ie(a,"click",f[1]),l=!0)},p(u,[p]){(!r||p&1)&&c!==(c=u[0][u[0].length-1]+"")&&A(o,c)},i(u){r||(W(t.$$.fragment,u),r=!0)},o(u){F(t.$$.fragment,u),r=!1},d(u){u&&(g(e),g(s),g(i),g(d),g(a)),L(t),l=!1,y()}}}function Tt(f,e,t){console.clear();let s=[];const i=n=>{const r=n.objects[n.objects.length-1],l=r.position.clone().toFixed(2),y=r.velocity.clone().toFixed(2);s.push(`${n.t.toFixed(2)} - pos: ${l} - vel: ${y}`),s.length>50&&s.shift(),t(0,s)},c=new je({reporter:i,enableGravity:!0}),o=()=>{for(;c.objects.length;)c.objects.pop();const n=j({geometry:{type:"line",vector:new h(100,0)},position:new h(0,0),fixed:!0});c.addObject(n);for(let r=0;r<1;r++){const l=j({geometry:{type:"sphere",r:5},position:new h(20,50),velocity:new h(Math.random()*5-2.5,Math.random()*20)});c.addObject(l)}};let d;const a=n=>{n.setup=()=>{d=n,n.createCanvas(900,600),n.background(0),n.fill(255),n.stroke(255),o()},n.draw=()=>{n.background(0),c.step();for(const r of c.objects){const l=n.map(r.position.x,0,c.dimensions.x,0,n.width),y=n.map(r.position.y,0,c.dimensions.y,n.height,0);if(r.geometry.type==="sphere"&&(n.strokeWeight(r.geometry.r*2),n.point(l,y)),r.geometry.type==="line"){const u=l+n.map(r.geometry.vector.x,0,c.dimensions.x,0,n.width),p=y+n.map(r.geometry.vector.y,0,c.dimensions.y,0,n.height);n.strokeWeight(2),n.line(l,y,u,p)}}}};return xe(()=>{d==null||d.remove()}),[s,o,a]}class jt extends le{constructor(e){super(),ce(this,e,Tt,xt,re,{})}}function kt(f){let e,t,s,i,c=f[0][f[0].length-1]+"",o,d,a,n="New ball",r,l,y;return t=new Te({props:{sketch:f[2]}}),{c(){e=w("div"),G(t.$$.fragment),s=E(),i=w("p"),o=B(c),d=E(),a=w("button"),a.textContent=n,this.h()},l(u){e=_(u,"DIV",{class:!0});var p=k(e);M(t.$$.fragment,p),p.forEach(g),s=O(u),i=_(u,"P",{});var b=k(i);o=I(b,c),b.forEach(g),d=O(u),a=_(u,"BUTTON",{"data-svelte-h":!0}),z(a)!=="svelte-1jwbm46"&&(a.textContent=n),this.h()},h(){_e(e,"class","d-flex justify-content-center")},m(u,p){S(u,e,p),Y(t,e,null),S(u,s,p),S(u,i,p),v(i,o),S(u,d,p),S(u,a,p),r=!0,l||(y=ie(a,"click",f[1]),l=!0)},p(u,[p]){(!r||p&1)&&c!==(c=u[0][u[0].length-1]+"")&&A(o,c)},i(u){r||(W(t.$$.fragment,u),r=!0)},o(u){F(t.$$.fragment,u),r=!1},d(u){u&&(g(e),g(s),g(i),g(d),g(a)),L(t),l=!1,y()}}}const Pe=6;function Ct(f,e,t){console.clear();let s=[];const i=l=>{const y=l.objects[l.objects.length-1],u=y.position.clone().toFixed(2),p=y.velocity.clone().toFixed(2);s.push(`${l.t.toFixed(2)} - pos: ${u} - vel: ${p}`),s.length>50&&s.shift(),t(0,s)},c=new je({reporter:i,enableGravity:!0});let o,d;const a=()=>{for(;c.objects.length;)c.objects.pop();d=j({geometry:{type:"line",vector:new h(80,20)},position:new h(10,20),fixed:!0}),c.addObject(d),o=j({geometry:{type:"sphere",r:10},position:new h(20,50),velocity:new h(2.5,2.5),fixed:!0}),c.addObject(o)};let n;const r=l=>{const y=b=>typeof b=="number"?b*Pe:b.clone().multiplyScalar(Pe),u=b=>typeof b=="number"?b/Pe:b.clone().divideScalar(Pe);l.setup=()=>{n=l;const b=y(c.dimensions);l.createCanvas(b.x,b.y),l.background(0),l.fill(255),l.stroke(255),a()};let p;l.draw=()=>{if(l.background(0),c.step(),l.mouseIsPressed){const b=u(new h(l.mouseX,l.height-l.mouseY));if(p||(b.distance(o.position)<2?p="sphere":b.distance(d.position)<2?p="wallstart":b.distance(d.geometry.vector.clone().add(d.position))<2&&(p="wallend")),p==="sphere"&&o.position.copy(b),p==="wallstart"&&d.position.copy(b),p==="wallend"){const m=b.clone().subtract(d.position);d.geometry.vector.copy(m)}}else p=void 0;for(const b of c.objects){l.stroke(o.data.isColliding?"red":"white");const m=l.map(b.position.x,0,c.dimensions.x,0,l.width),x=l.map(b.position.y,0,c.dimensions.y,l.height,0);if(b.geometry.type==="sphere"){const $=y(b.geometry.r*2);l.strokeWeight($),l.point(m,x)}if(b.geometry.type==="line"){const $=m+l.map(b.geometry.vector.x,0,c.dimensions.x,0,l.width),C=x-l.map(b.geometry.vector.y,0,c.dimensions.y,0,l.height);l.strokeWeight(2),l.line(m,x,$,C)}}}};return xe(()=>{n==null||n.remove()}),[s,a,r]}class St extends le{constructor(e){super(),ce(this,e,Ct,kt,re,{})}}function Et(f){let e,t,s;return t=new Te({props:{sketch:f[0]}}),{c(){e=w("div"),G(t.$$.fragment),this.h()},l(i){e=_(i,"DIV",{class:!0});var c=k(e);M(t.$$.fragment,c),c.forEach(g),this.h()},h(){_e(e,"class","d-flex justify-content-center")},m(i,c){S(i,e,c),Y(t,e,null),s=!0},p:qe,i(i){s||(W(t.$$.fragment,i),s=!0)},o(i){F(t.$$.fragment,i),s=!1},d(i){i&&g(e),L(t)}}}const De=6;function Ot(f){console.clear();const e=new je({reporter:()=>{},enableGravity:!0});let t;const s=()=>{for(;e.objects.length;)e.objects.pop();const n=j({geometry:{type:"line",vector:new h(100,0)},position:new h(0,2),fixed:!0});e.addObject(n);const r=j({geometry:{type:"line",vector:new h(100,0)},position:new h(0,98),fixed:!0});e.addObject(r);const l=j({geometry:{type:"line",vector:new h(0,100)},position:new h(2,0),fixed:!0});e.addObject(l);const y=j({geometry:{type:"line",vector:new h(0,100)},position:new h(98,0),fixed:!0});e.addObject(y);const u=j({geometry:{type:"line",vector:new h(50,50)},position:new h(20,10),fixed:!0});e.addObject(u),t=j({geometry:{type:"sphere",r:5},position:new h(20,50),velocity:new h(Math.random()*5-2.5,Math.random()*20)}),e.addObject(t)},i=n=>typeof n=="number"?n*De:n.clone().multiplyScalar(De),c=n=>typeof n=="number"?n/De:n.clone().divideScalar(De),o=(n,r)=>{for(const l of r.objects){n.stroke(l.data.isColliding?"red":"white");const y=n.map(l.position.x,0,r.dimensions.x,0,n.width),u=n.map(l.position.y,0,r.dimensions.y,n.height,0);if(l.geometry.type==="sphere"){const p=i(l.geometry.r*2);n.strokeWeight(p),n.point(y,u)}if(l.geometry.type==="line"){const p=y+n.map(l.geometry.vector.x,0,r.dimensions.x,0,n.width),b=u-n.map(l.geometry.vector.y,0,r.dimensions.y,0,n.height);n.strokeWeight(2),n.line(y,u,p,b)}}};let d;const a=n=>{n.setup=()=>{d=n;const l=i(e.dimensions);n.createCanvas(l.x,l.y),n.background(0),n.fill(255),n.stroke(255),s()},n.draw=()=>{if(n.background(0),n.mouseIsPressed){t.fixed=!0;const l=c(new h(n.mouseX,n.height-n.mouseY));t.position.copy(l)}else t.fixed=!1;e.step(),o(n,e)};let r;n.mousePressed=()=>{r=c(new h(n.mouseX,n.height-n.mouseY))},n.mouseReleased=()=>{const l=c(new h(n.mouseX,n.height-n.mouseY)),y=r.subtract(l);t.position.copy(l),t.velocity.copy(y)}};return xe(()=>{d==null||d.remove()}),[a]}class Pt extends le{constructor(e){super(),ce(this,e,Ot,Et,re,{})}}function Dt(f){let e,t,s,i,c,o,d,a="Gravity",n,r,l,y="Toggle",u,p,b;return t=new Te({props:{sketch:f[1]}}),{c(){e=w("div"),G(t.$$.fragment),s=E(),i=w("table"),c=w("tbody"),o=w("tr"),d=w("th"),d.textContent=a,n=E(),r=w("td"),l=w("button"),l.textContent=y,this.h()},l(m){e=_(m,"DIV",{class:!0});var x=k(e);M(t.$$.fragment,x),x.forEach(g),s=O(m),i=_(m,"TABLE",{});var $=k(i);c=_($,"TBODY",{});var C=k(c);o=_(C,"TR",{});var P=k(o);d=_(P,"TH",{"data-svelte-h":!0}),z(d)!=="svelte-vy75us"&&(d.textContent=a),n=O(P),r=_(P,"TD",{});var V=k(r);l=_(V,"BUTTON",{"data-svelte-h":!0}),z(l)!=="svelte-18lc94l"&&(l.textContent=y),V.forEach(g),P.forEach(g),C.forEach(g),$.forEach(g),this.h()},h(){_e(e,"class","d-flex justify-content-center")},m(m,x){S(m,e,x),Y(t,e,null),S(m,s,x),S(m,i,x),v(i,c),v(c,o),v(o,d),v(o,n),v(o,r),v(r,l),u=!0,p||(b=ie(l,"click",f[2]),p=!0)},p:qe,i(m){u||(W(t.$$.fragment,m),u=!0)},o(m){F(t.$$.fragment,m),u=!1},d(m){m&&(g(e),g(s),g(i)),L(t),p=!1,b()}}}const We=6;function Wt(f){console.clear();const e=new je({reporter:()=>{},enableGravity:!0});let t;const s=()=>{for(;e.objects.length;)e.objects.pop();const r=j({geometry:{type:"line",vector:new h(100,0)},position:new h(0,0),fixed:!0});e.addObject(r);const l=j({geometry:{type:"line",vector:new h(100,0)},position:new h(0,100),fixed:!0});e.addObject(l);const y=j({geometry:{type:"line",vector:new h(0,100)},position:new h(0,0),fixed:!0});e.addObject(y);const u=j({geometry:{type:"line",vector:new h(0,100)},position:new h(100,0),fixed:!0});e.addObject(u);const p=j({geometry:{type:"line",vector:new h(50,50)},position:new h(20,10),fixed:!0});e.addObject(p),t=j({geometry:{type:"sphere",r:2},position:new h(20,50),velocity:new h(Math.random()*5-2.5,Math.random()*20)}),e.addObject(t)},i=r=>typeof r=="number"?r*We:r.clone().multiplyScalar(We),c=r=>typeof r=="number"?r/We:r.clone().divideScalar(We),o=(r,l)=>{for(const y of l.objects){r.stroke(y.data.isColliding?"red":"white");const u=r.map(y.position.x,0,l.dimensions.x,0,r.width),p=r.map(y.position.y,0,l.dimensions.y,r.height,0);if(y.geometry.type==="sphere"){const b=i(y.geometry.r*2);r.strokeWeight(b),r.point(u,p)}if(y.geometry.type==="line"){const b=u+r.map(y.geometry.vector.x,0,l.dimensions.x,0,r.width),m=p-r.map(y.geometry.vector.y,0,l.dimensions.y,0,r.height);r.strokeWeight(2),r.line(u,p,b,m)}}};let d;const a=r=>{r.setup=()=>{d=r;const y=i(e.dimensions);r.createCanvas(y.x,y.y),r.background(0),r.fill(255),r.stroke(255),s()},r.draw=()=>{if(r.background(0),mt(r)){t.fixed=!0;const y=c(new h(r.mouseX,r.height-r.mouseY));t.position.copy(y)}else t.fixed=!1;e.step(),o(r,e)};let l;r.mousePressed=()=>{Be(r)&&(l=c(new h(r.mouseX,r.height-r.mouseY)))},r.mouseReleased=()=>{if(!Be(r))return;const y=c(new h(r.mouseX,r.height-r.mouseY)),u=l.subtract(y);t.position.copy(y),t.velocity.copy(u)}};return xe(()=>{d==null||d.remove()}),[e,a,()=>e.toggleGravity()]}class Ft extends le{constructor(e){super(),ce(this,e,Wt,Dt,re,{})}}function Vt(f){let e,t,s,i,c,o=f[0]?"Disable":"Enable",d,a,n,r,l=f[1]?"Play":"Pause",y,u,p,b="Reset",m,x,$,C,P,V="Simulation time/Frame duration",H,J,K=f[2].t+"",R,Z,ae,de=f[2].frameTime+"",ke,Ie,X,ee,Je="Sphere position",Ge,fe,ue=f[2].spherePos.x.toFixed(2)+"",Ce,Ye,me,he=f[2].spherePos.y.toFixed(2)+"",Se,Le,U,te,Ke="Sphere velocity",Xe,ye,pe=f[2].sphereVel.x.toFixed(2)+"",Ee,Ae,ge,be=f[2].sphereVel.y.toFixed(2)+"",Oe,N,Me,Qe;return t=new Te({props:{sketch:f[4]}}),{c(){e=w("div"),G(t.$$.fragment),s=E(),i=w("div"),c=w("button"),d=B(o),a=B(" pause on collision"),n=E(),r=w("button"),y=B(l),u=E(),p=w("button"),p.textContent=b,m=E(),x=w("table"),$=w("tbody"),C=w("tr"),P=w("th"),P.textContent=V,H=E(),J=w("td"),R=B(K),Z=E(),ae=w("td"),ke=B(de),Ie=E(),X=w("tr"),ee=w("th"),ee.textContent=Je,Ge=E(),fe=w("td"),Ce=B(ue),Ye=E(),me=w("td"),Se=B(he),Le=E(),U=w("tr"),te=w("th"),te.textContent=Ke,Xe=E(),ye=w("td"),Ee=B(pe),Ae=E(),ge=w("td"),Oe=B(be),this.h()},l(T){e=_(T,"DIV",{class:!0});var D=k(e);M(t.$$.fragment,D),D.forEach(g),s=O(T),i=_(T,"DIV",{});var oe=k(i);c=_(oe,"BUTTON",{});var Re=k(c);d=I(Re,o),a=I(Re," pause on collision"),Re.forEach(g),n=O(oe),r=_(oe,"BUTTON",{});var Ze=k(r);y=I(Ze,l),Ze.forEach(g),u=O(oe),p=_(oe,"BUTTON",{"data-svelte-h":!0}),z(p)!=="svelte-tlxueg"&&(p.textContent=b),oe.forEach(g),m=O(T),x=_(T,"TABLE",{});var et=k(x);$=_(et,"TBODY",{});var ve=k($);C=_(ve,"TR",{});var ne=k(C);P=_(ne,"TH",{"data-svelte-h":!0}),z(P)!=="svelte-rirgm4"&&(P.textContent=V),H=O(ne),J=_(ne,"TD",{});var tt=k(J);R=I(tt,K),tt.forEach(g),Z=O(ne),ae=_(ne,"TD",{});var ot=k(ae);ke=I(ot,de),ot.forEach(g),ne.forEach(g),Ie=O(ve),X=_(ve,"TR",{});var Q=k(X);ee=_(Q,"TH",{"data-svelte-h":!0}),z(ee)!=="svelte-1y1nif6"&&(ee.textContent=Je),Ge=O(Q),fe=_(Q,"TD",{});var nt=k(fe);Ce=I(nt,ue),nt.forEach(g),Ye=O(Q),me=_(Q,"TD",{});var st=k(me);Se=I(st,he),st.forEach(g),Le=O(Q),Q.forEach(g),U=_(ve,"TR",{});var se=k(U);te=_(se,"TH",{"data-svelte-h":!0}),z(te)!=="svelte-1uw1fs2"&&(te.textContent=Ke),Xe=O(se),ye=_(se,"TD",{});var it=k(ye);Ee=I(it,pe),it.forEach(g),Ae=O(se),ge=_(se,"TD",{});var rt=k(ge);Oe=I(rt,be),rt.forEach(g),se.forEach(g),ve.forEach(g),et.forEach(g),this.h()},h(){_e(e,"class","d-flex justify-content-center")},m(T,D){S(T,e,D),Y(t,e,null),S(T,s,D),S(T,i,D),v(i,c),v(c,d),v(c,a),v(i,n),v(i,r),v(r,y),v(i,u),v(i,p),S(T,m,D),S(T,x,D),v(x,$),v($,C),v(C,P),v(C,H),v(C,J),v(J,R),v(C,Z),v(C,ae),v(ae,ke),v($,Ie),v($,X),v(X,ee),v(X,Ge),v(X,fe),v(fe,Ce),v(X,Ye),v(X,me),v(me,Se),v(X,Le),v($,U),v(U,te),v(U,Xe),v(U,ye),v(ye,Ee),v(U,Ae),v(U,ge),v(ge,Oe),N=!0,Me||(Qe=[ie(c,"click",f[5]),ie(r,"click",f[6]),ie(p,"click",f[3])],Me=!0)},p(T,[D]){(!N||D&1)&&o!==(o=T[0]?"Disable":"Enable")&&A(d,o),(!N||D&2)&&l!==(l=T[1]?"Play":"Pause")&&A(y,l),(!N||D&4)&&K!==(K=T[2].t+"")&&A(R,K),(!N||D&4)&&de!==(de=T[2].frameTime+"")&&A(ke,de),(!N||D&4)&&ue!==(ue=T[2].spherePos.x.toFixed(2)+"")&&A(Ce,ue),(!N||D&4)&&he!==(he=T[2].spherePos.y.toFixed(2)+"")&&A(Se,he),(!N||D&4)&&pe!==(pe=T[2].sphereVel.x.toFixed(2)+"")&&A(Ee,pe),(!N||D&4)&&be!==(be=T[2].sphereVel.y.toFixed(2)+"")&&A(Oe,be)},i(T){N||(W(t.$$.fragment,T),N=!0)},o(T){F(t.$$.fragment,T),N=!1},d(T){T&&(g(e),g(s),g(i),g(m),g(x)),L(t),Me=!1,pt(Qe)}}}const Fe=60;function Nt(f,e,t){console.clear();let s=!1,i=!1,c={t:"0",frameTime:"0",spherePos:new h(0,0),sphereVel:new h(0,0),ballIsColliding:!1},o,d;const a=()=>{o=new je({dimensions:new h(10,10),reporter:R=>{var Z;t(2,c.t=(Z=R==null?void 0:R.t)==null?void 0:Z.toFixed(2),c),c.spherePos.copy(d.position),c.sphereVel.copy(d.velocity),t(2,c.frameTime=R.frameTime.toFixed(3),c),t(2,c),t(2,c.ballIsColliding=d.data.isColliding,c),s&&d.data.isColliding&&!i&&t(1,i=!0)},enableGravity:!0});const m=j({geometry:{type:"line",vector:new h(10,0)},position:new h(0,0),fixed:!0});o.addObject(m);const x=j({geometry:{type:"line",vector:new h(0,100)},position:new h(0,0),fixed:!0});o.addObject(x);const $=j({geometry:{type:"line",vector:new h(0,100)},position:new h(10,0),fixed:!0});o.addObject($);const C=j({geometry:{type:"line",vector:new h(3,-3)},position:new h(3.5,8),fixed:!0});o.addObject(C);const P=j({geometry:{type:"line",vector:new h(3,3)},position:new h(3.5,5),fixed:!0});o.addObject(P);const V=j({geometry:{type:"line",vector:new h(6,0)},position:new h(2,2),fixed:!0});o.addObject(V);const H=j({geometry:{type:"line",vector:new h(4,0)},position:new h(3,2.5),fixed:!0});o.addObject(H);const J=j({geometry:{type:"line",vector:new h(2,0)},position:new h(4,3),fixed:!0});o.addObject(J);const K=j({geometry:{type:"line",vector:new h(.6,0)},position:new h(4.7,3.5),fixed:!0});o.addObject(K),d=j({geometry:{type:"sphere",r:.1},position:new h(5,10),velocity:new h(0,0)}),o.addObject(d)},n=m=>typeof m=="number"?m*Fe:m.clone().multiplyScalar(Fe),r=m=>typeof m=="number"?m/Fe:m.clone().divideScalar(Fe),l=(m,x)=>{for(const $ of x.objects){m.stroke($.data.isColliding?"red":"white");const C=m.map($.position.x,0,x.dimensions.x,0,m.width),P=m.map($.position.y,0,x.dimensions.y,m.height,0);if($.geometry.type==="sphere"){const V=n($.geometry.r*2);m.strokeWeight(V),m.point(C,P)}if($.geometry.type==="line"){const V=C+m.map($.geometry.vector.x,0,x.dimensions.x,0,m.width),H=P-m.map($.geometry.vector.y,0,x.dimensions.y,0,m.height);m.strokeWeight(2),m.line(C,P,V,H)}}};let y;const u=m=>{m.setup=()=>{y=m,a();const $=n(o.dimensions);m.createCanvas($.x,$.y),m.background(0),m.fill(255),m.stroke(255),a()},m.draw=()=>{if(m.background(0),mt(m)){d.fixed=!0;const $=r(new h(m.mouseX,m.height-m.mouseY));d.position.copy($)}else d.fixed=!1;i||o.step(),l(m,o)};let x;m.mousePressed=()=>{Be(m)&&(x=r(new h(m.mouseX,m.height-m.mouseY)))},m.mouseReleased=()=>{if(!Be(m))return;const $=r(new h(m.mouseX,m.height-m.mouseY)),C=x.subtract($).multiplyScalar(3);d.position.copy($),d.velocity.copy(C)}};return xe(()=>{y==null||y.remove()}),[s,i,c,a,u,()=>t(0,s=!s),()=>t(1,i=!i)]}class Bt extends le{constructor(e){super(),ce(this,e,Nt,Vt,re,{})}}function ct(f,e,t){const s=f.slice();return s[1]=e[t],s}function at(f,e,t){const s=f.slice();return s[1]=e[t],s}function It(f){let e=f[1].title+"",t;return{c(){t=B(e)},l(s){t=I(s,e)},m(s,i){S(s,t,i)},p:qe,d(s){s&&g(t)}}}function dt(f){let e,t;return e=new $t({props:{$$slots:{default:[It]},$$scope:{ctx:f}}}),{c(){G(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,i){Y(e,s,i),t=!0},p(s,i){const c={};i&64&&(c.$$scope={dirty:i,ctx:s}),e.$set(c)},i(s){t||(W(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){L(e,s)}}}function Gt(f){let e,t,s=Ne(f[0]),i=[];for(let o=0;o<s.length;o+=1)i[o]=dt(at(f,s,o));const c=o=>F(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=Ve()},l(o){for(let d=0;d<i.length;d+=1)i[d].l(o);e=Ve()},m(o,d){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(o,d);S(o,e,d),t=!0},p(o,d){if(d&1){s=Ne(o[0]);let a;for(a=0;a<s.length;a+=1){const n=at(o,s,a);i[a]?(i[a].p(n,d),W(i[a],1)):(i[a]=dt(n),i[a].c(),W(i[a],1),i[a].m(e.parentNode,e))}for(He(),a=s.length;a<i.length;a+=1)c(a);ze()}},i(o){if(!t){for(let d=0;d<s.length;d+=1)W(i[d]);t=!0}},o(o){i=i.filter(Boolean);for(let d=0;d<i.length;d+=1)F(i[d]);t=!1},d(o){o&&g(e),ut(i,o)}}}function Yt(f){let e,t,s;var i=f[1].component;function c(o,d){return{}}return i&&(e=lt(i,c())),{c(){e&&G(e.$$.fragment),t=E()},l(o){e&&M(e.$$.fragment,o),t=O(o)},m(o,d){e&&Y(e,o,d),S(o,t,d),s=!0},p(o,d){if(i!==(i=o[1].component)){if(e){He();const a=e;F(a.$$.fragment,1,0,()=>{L(a,1)}),ze()}i?(e=lt(i,c()),G(e.$$.fragment),W(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}},i(o){s||(e&&W(e.$$.fragment,o),s=!0)},o(o){e&&F(e.$$.fragment,o),s=!1},d(o){o&&g(t),e&&L(e,o)}}}function ft(f){let e,t;return e=new vt({props:{$$slots:{default:[Yt]},$$scope:{ctx:f}}}),{c(){G(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,i){Y(e,s,i),t=!0},p(s,i){const c={};i&64&&(c.$$scope={dirty:i,ctx:s}),e.$set(c)},i(s){t||(W(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){L(e,s)}}}function Lt(f){let e,t,s,i;e=new bt({props:{$$slots:{default:[Gt]},$$scope:{ctx:f}}});let c=Ne(f[0]),o=[];for(let a=0;a<c.length;a+=1)o[a]=ft(ct(f,c,a));const d=a=>F(o[a],1,1,()=>{o[a]=null});return{c(){G(e.$$.fragment),t=E();for(let a=0;a<o.length;a+=1)o[a].c();s=Ve()},l(a){M(e.$$.fragment,a),t=O(a);for(let n=0;n<o.length;n+=1)o[n].l(a);s=Ve()},m(a,n){Y(e,a,n),S(a,t,n);for(let r=0;r<o.length;r+=1)o[r]&&o[r].m(a,n);S(a,s,n),i=!0},p(a,n){const r={};if(n&64&&(r.$$scope={dirty:n,ctx:a}),e.$set(r),n&1){c=Ne(a[0]);let l;for(l=0;l<c.length;l+=1){const y=ct(a,c,l);o[l]?(o[l].p(y,n),W(o[l],1)):(o[l]=ft(y),o[l].c(),W(o[l],1),o[l].m(s.parentNode,s))}for(He(),l=c.length;l<o.length;l+=1)d(l);ze()}},i(a){if(!i){W(e.$$.fragment,a);for(let n=0;n<c.length;n+=1)W(o[n]);i=!0}},o(a){F(e.$$.fragment,a),o=o.filter(Boolean);for(let n=0;n<o.length;n+=1)F(o[n]);i=!1},d(a){a&&(g(t),g(s)),L(e,a),ut(o,a)}}}function Xt(f){let e,t;return e=new gt({props:{$$slots:{default:[Lt]},$$scope:{ctx:f}}}),{c(){G(e.$$.fragment)},l(s){M(e.$$.fragment,s)},m(s,i){Y(e,s,i),t=!0},p(s,[i]){const c={};i&64&&(c.$$scope={dirty:i,ctx:s}),e.$set(c)},i(s){t||(W(e.$$.fragment,s),t=!0)},o(s){F(e.$$.fragment,s),t=!1},d(s){L(e,s)}}}function At(f){return[[{title:"Obstacles",component:Bt},{title:"Test collisions 3",component:Ft},{title:"Test collisions 2",component:Pt},{title:"Test collisions",component:St},{title:"Test engine",component:jt}]]}class zt extends le{constructor(e){super(),ce(this,e,At,Xt,re,{})}}export{zt as component};
