import{s as ge,f as w,a as C,e as ht,g as _,u as G,c as S,j as W,i as j,z as De,d as m,h as T,y as d,P as We,L as z,Q as He,O as st,l as A,m as R,n as te,M as Oe}from"../chunks/scheduler.32ebed32.js";import{S as be,i as we,b as re,d as le,m as ie,a as ce,t as ae,e as ue}from"../chunks/index.c25c2528.js";import{V as u,c as E,P as Be,m as rt,d as lt,a as Ge,w as me,s as yt,C as gt}from"../chunks/PhysicObject.d0894205.js";import{W as Xe,L as bt,S as wt}from"../chunks/World.a244ff66.js";function mt(l){let t,n,c,o,s="dt",e,y,a,i,p,f,$="drag",v,g,b,r,h,D,k="gravity enabled",F,I,L,M,H;return{c(){t=w("table"),n=w("tbody"),c=w("tr"),o=w("th"),o.textContent=s,e=C(),y=w("td"),a=w("input"),i=C(),p=w("tr"),f=w("th"),f.textContent=$,v=C(),g=w("td"),b=w("input"),r=C(),h=w("tr"),D=w("th"),D.textContent=k,F=C(),I=w("td"),L=w("input"),this.h()},l(Y){t=_(Y,"TABLE",{});var U=T(t);n=_(U,"TBODY",{});var O=T(n);c=_(O,"TR",{});var B=T(c);o=_(B,"TH",{"data-svelte-h":!0}),G(o)!=="svelte-16dheti"&&(o.textContent=s),e=S(B),y=_(B,"TD",{});var X=T(y);a=_(X,"INPUT",{type:!0,min:!0,max:!0,step:!0}),X.forEach(m),B.forEach(m),i=S(O),p=_(O,"TR",{});var ee=T(p);f=_(ee,"TH",{"data-svelte-h":!0}),G(f)!=="svelte-2hq5g"&&(f.textContent=$),v=S(ee),g=_(ee,"TD",{});var Q=T(g);b=_(Q,"INPUT",{type:!0,min:!0,max:!0,step:!0}),Q.forEach(m),ee.forEach(m),r=S(O),h=_(O,"TR",{});var q=T(h);D=_(q,"TH",{"data-svelte-h":!0}),G(D)!=="svelte-ic0r87"&&(D.textContent=k),F=S(q),I=_(q,"TD",{});var ne=T(I);L=_(ne,"INPUT",{type:!0}),ne.forEach(m),q.forEach(m),O.forEach(m),U.forEach(m),this.h()},h(){W(a,"type","number"),W(a,"min","0"),W(a,"max","0.5"),W(a,"step","0.001"),W(b,"type","number"),W(b,"min","0"),W(b,"max","0.01"),W(b,"step","0.001"),W(L,"type","checkbox")},m(Y,U){j(Y,t,U),d(t,n),d(n,c),d(c,o),d(c,e),d(c,y),d(y,a),We(a,l[0].dt),d(n,i),d(n,p),d(p,f),d(p,v),d(p,g),d(g,b),We(b,l[0].drag),d(n,r),d(n,h),d(h,D),d(h,F),d(h,I),d(I,L),L.checked=l[0].gravityEnabled,M||(H=[z(a,"input",l[1]),z(b,"input",l[2]),z(L,"change",l[3])],M=!0)},p(Y,U){U&1&&He(a.value)!==Y[0].dt&&We(a,Y[0].dt),U&1&&He(b.value)!==Y[0].drag&&We(b,Y[0].drag),U&1&&(L.checked=Y[0].gravityEnabled)},d(Y){Y&&m(t),M=!1,st(H)}}}function _t(l){let t,n="Engine settings",c,o,s=l[0]&&mt(l);return{c(){t=w("p"),t.textContent=n,c=C(),s&&s.c(),o=ht(),this.h()},l(e){t=_(e,"P",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-gf3gek"&&(t.textContent=n),c=S(e),s&&s.l(e),o=ht(),this.h()},h(){W(t,"class","title svelte-g74uk9")},m(e,y){j(e,t,y),j(e,c,y),s&&s.m(e,y),j(e,o,y)},p(e,[y]){e[0]?s?s.p(e,y):(s=mt(e),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},i:De,o:De,d(e){e&&(m(t),m(c),m(o)),s&&s.d(e)}}}function $t(l,t,n){let{world:c}=t;function o(){c.dt=He(this.value),n(0,c)}function s(){c.drag=He(this.value),n(0,c)}function e(){c.gravityEnabled=this.checked,n(0,c)}return l.$$set=y=>{"world"in y&&n(0,c=y.world)},[c,o,s,e]}class ft extends be{constructor(t){super(),we(this,t,$t,_t,ge,{world:0})}}function xt(l){let t,n="Shooter",c,o,s,e="Angle",y,a,i,p,f,$,v,g,b="Magnitude",r,h,D,k,F,I,L,M,H="Shoot",Y,U;return{c(){t=w("p"),t.textContent=n,c=C(),o=w("span"),s=w("label"),s.textContent=e,y=C(),a=w("input"),i=C(),p=A(l[0]),f=A(" deg"),$=C(),v=w("span"),g=w("label"),g.textContent=b,r=C(),h=w("input"),D=C(),k=A(l[1]),F=C(),I=w("br"),L=C(),M=w("button"),M.textContent=H,this.h()},l(O){t=_(O,"P",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-198ugk3"&&(t.textContent=n),c=S(O),o=_(O,"SPAN",{});var B=T(o);s=_(B,"LABEL",{for:!0,"data-svelte-h":!0}),G(s)!=="svelte-lab87n"&&(s.textContent=e),y=S(B),a=_(B,"INPUT",{id:!0,type:!0,min:!0,max:!0}),i=S(B),p=R(B,l[0]),f=R(B," deg"),B.forEach(m),$=S(O),v=_(O,"SPAN",{});var X=T(v);g=_(X,"LABEL",{for:!0,"data-svelte-h":!0}),G(g)!=="svelte-1vc5oxa"&&(g.textContent=b),r=S(X),h=_(X,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),D=S(X),k=R(X,l[1]),X.forEach(m),F=S(O),I=_(O,"BR",{}),L=S(O),M=_(O,"BUTTON",{"data-svelte-h":!0}),G(M)!=="svelte-8jpwxr"&&(M.textContent=H),this.h()},h(){W(t,"class","title svelte-g74uk9"),W(s,"for","angleSlider"),W(a,"id","angleSlider"),W(a,"type","range"),W(a,"min","0"),W(a,"max","360"),W(g,"for","magSlider"),W(h,"id","magSlider"),W(h,"type","range"),W(h,"min","0"),W(h,"max","1"),W(h,"step","0.01")},m(O,B){j(O,t,B),j(O,c,B),j(O,o,B),d(o,s),d(o,y),d(o,a),We(a,l[0]),d(o,i),d(o,p),d(o,f),j(O,$,B),j(O,v,B),d(v,g),d(v,r),d(v,h),We(h,l[1]),d(v,D),d(v,k),j(O,F,B),j(O,I,B),j(O,L,B),j(O,M,B),Y||(U=[z(a,"change",l[4]),z(a,"input",l[4]),z(h,"change",l[5]),z(h,"input",l[5]),z(M,"click",l[6])],Y=!0)},p(O,[B]){B&1&&We(a,O[0]),B&1&&te(p,O[0]),B&2&&We(h,O[1]),B&2&&te(k,O[1])},i:De,o:De,d(O){O&&(m(t),m(c),m(o),m($),m(v),m(F),m(I),m(L),m(M)),Y=!1,st(U)}}}function kt(l,t,n){let{onShoot:c}=t,o=0,s=.5;const e=()=>{const p=new u(1,0);p.rotateDeg(o),p.multiplyScalar(s),c(p)};function y(){o=He(this.value),n(0,o)}function a(){s=He(this.value),n(1,s)}const i=()=>e();return l.$$set=p=>{"onShoot"in p&&n(3,c=p.onShoot)},[o,s,e,c,y,a,i]}class vt extends be{constructor(t){super(),we(this,t,kt,xt,ge,{onShoot:3})}}const Tt=l=>{const t=[],n=E({geometry:{type:"line",vector:new u(15,0)},position:new u(0,0),fixed:!0});t.push(n);const c=E({geometry:{type:"line",vector:new u(0,100)},position:new u(0,0),fixed:!0});t.push(c);const o=E({geometry:{type:"line",vector:new u(0,100)},position:new u(15,0),fixed:!0});t.push(o);for(let s=0;s<l.nbBalls;s++){const e=E({geometry:{type:"sphere",r:l.rBalls},position:new u(Math.random()*15,Math.random()*15),velocity:new u(Math.random()*15,Math.random()*15)});t.push(e)}return{objects:t,sphere:t[3]}};function Ct(l){let t,n,c,o,s,e=l[0]?"Disable":"Enable",y,a,i,p,f=l[1]?"Play":"Pause",$,v,g,b="Reset",r,h,D,k,F,I,L,M,H,Y="Simulation time/Frame duration",U,O,B=l[3].t+"",X,ee,Q,q=l[3].frameTime+"",ne,Ee,P,N,oe="Sphere position",_e,de,$e=l[3].spherePos.x.toFixed(2)+"",xe,fe,he,ke=l[3].spherePos.y.toFixed(2)+"",Fe,Ne,J,pe,qe="Sphere velocity",Ae,Te,Ve=l[3].sphereVel.x.toFixed(2)+"",Ie,Re,Ce,Le=l[3].sphereVel.y.toFixed(2)+"",Me,K,Ye,ze;return n=new Be({props:{sketch:l[5]}}),h=new vt({props:{onShoot:l[6]}}),k=new ft({props:{world:l[2]}}),{c(){t=w("div"),re(n.$$.fragment),c=C(),o=w("div"),s=w("button"),y=A(e),a=A(" pause on collision"),i=C(),p=w("button"),$=A(f),v=C(),g=w("button"),g.textContent=b,r=C(),re(h.$$.fragment),D=C(),re(k.$$.fragment),F=C(),I=w("table"),L=w("tbody"),M=w("tr"),H=w("th"),H.textContent=Y,U=C(),O=w("td"),X=A(B),ee=C(),Q=w("td"),ne=A(q),Ee=C(),P=w("tr"),N=w("th"),N.textContent=oe,_e=C(),de=w("td"),xe=A($e),fe=C(),he=w("td"),Fe=A(ke),Ne=C(),J=w("tr"),pe=w("th"),pe.textContent=qe,Ae=C(),Te=w("td"),Ie=A(Ve),Re=C(),Ce=w("td"),Me=A(Le),this.h()},l(x){t=_(x,"DIV",{class:!0});var V=T(t);le(n.$$.fragment,V),V.forEach(m),c=S(x),o=_(x,"DIV",{});var Z=T(o);s=_(Z,"BUTTON",{});var Ue=T(s);y=R(Ue,e),a=R(Ue," pause on collision"),Ue.forEach(m),i=S(Z),p=_(Z,"BUTTON",{});var Qe=T(p);$=R(Qe,f),Qe.forEach(m),v=S(Z),g=_(Z,"BUTTON",{"data-svelte-h":!0}),G(g)!=="svelte-tlxueg"&&(g.textContent=b),Z.forEach(m),r=S(x),le(h.$$.fragment,x),D=S(x),le(k.$$.fragment,x),F=S(x),I=_(x,"TABLE",{});var Je=T(I);L=_(Je,"TBODY",{});var Se=T(L);M=_(Se,"TR",{});var ye=T(M);H=_(ye,"TH",{"data-svelte-h":!0}),G(H)!=="svelte-rirgm4"&&(H.textContent=Y),U=S(ye),O=_(ye,"TD",{});var Ke=T(O);X=R(Ke,B),Ke.forEach(m),ee=S(ye),Q=_(ye,"TD",{});var Ze=T(Q);ne=R(Ze,q),Ze.forEach(m),ye.forEach(m),Ee=S(Se),P=_(Se,"TR",{});var se=T(P);N=_(se,"TH",{"data-svelte-h":!0}),G(N)!=="svelte-1y1nif6"&&(N.textContent=oe),_e=S(se),de=_(se,"TD",{});var et=T(de);xe=R(et,$e),et.forEach(m),fe=S(se),he=_(se,"TD",{});var tt=T(he);Fe=R(tt,ke),tt.forEach(m),Ne=S(se),se.forEach(m),J=_(Se,"TR",{});var ve=T(J);pe=_(ve,"TH",{"data-svelte-h":!0}),G(pe)!=="svelte-1uw1fs2"&&(pe.textContent=qe),Ae=S(ve),Te=_(ve,"TD",{});var nt=T(Te);Ie=R(nt,Ve),nt.forEach(m),Re=S(ve),Ce=_(ve,"TD",{});var ot=T(Ce);Me=R(ot,Le),ot.forEach(m),ve.forEach(m),Se.forEach(m),Je.forEach(m),this.h()},h(){W(t,"class","d-flex justify-content-center")},m(x,V){j(x,t,V),ie(n,t,null),j(x,c,V),j(x,o,V),d(o,s),d(s,y),d(s,a),d(o,i),d(o,p),d(p,$),d(o,v),d(o,g),j(x,r,V),ie(h,x,V),j(x,D,V),ie(k,x,V),j(x,F,V),j(x,I,V),d(I,L),d(L,M),d(M,H),d(M,U),d(M,O),d(O,X),d(M,ee),d(M,Q),d(Q,ne),d(L,Ee),d(L,P),d(P,N),d(P,_e),d(P,de),d(de,xe),d(P,fe),d(P,he),d(he,Fe),d(P,Ne),d(L,J),d(J,pe),d(J,Ae),d(J,Te),d(Te,Ie),d(J,Re),d(J,Ce),d(Ce,Me),K=!0,Ye||(ze=[z(s,"click",l[7]),z(p,"click",l[8]),z(g,"click",l[4])],Ye=!0)},p(x,[V]){(!K||V&1)&&e!==(e=x[0]?"Disable":"Enable")&&te(y,e),(!K||V&2)&&f!==(f=x[1]?"Play":"Pause")&&te($,f);const Z={};V&4&&(Z.world=x[2]),k.$set(Z)},i(x){K||(ce(n.$$.fragment,x),ce(h.$$.fragment,x),ce(k.$$.fragment,x),K=!0)},o(x){ae(n.$$.fragment,x),ae(h.$$.fragment,x),ae(k.$$.fragment,x),K=!1},d(x){x&&(m(t),m(c),m(o),m(r),m(D),m(F),m(I)),ue(n),ue(h,x),ue(k,x),Ye=!1,st(ze)}}}const it=60;function St(l,t,n){console.clear();let c=!1,o=!1,s={t:"0",frameTime:"0",spherePos:new u(0,0),sphereVel:new u(0,0),ballIsColliding:!1},e,y;const a=()=>{n(2,e=new Xe({dimensions:new u(15,15),reporter:()=>{},enableGravity:!0}));const r=Tt({nbBalls:5,rBalls:.2});y=r.sphere;for(const h of r.objects)e.addObject(h)},i=r=>typeof r=="number"?r*it:r.clone().multiplyScalar(it),p=r=>typeof r=="number"?r/it:r.clone().divideScalar(it);let f;const $=r=>{r.setup=()=>{f=r,a();const k=i(e.dimensions);r.createCanvas(k.x,k.y),r.background(0),r.fill(255),r.stroke(255),a()},r.draw=()=>{r.background(0),rt(r)?y.fixed=!0:y.fixed=!1,o||e.step(),lt(r,e),D(r)};let h;r.mousePressed=()=>{Ge(r)&&(h=p(new u(r.mouseX,r.height-r.mouseY)),y.position.copy(h))},r.mouseReleased=()=>{if(!Ge(r)||!h)return;const k=p(new u(r.mouseX,r.height-r.mouseY)),F=h.subtract(k).multiplyScalar(3);h=void 0,y.velocity.copy(F)};const D=k=>{if(!h)return;k.stroke("blue"),k.strokeWeight(2);const F=i(h);k.line(F.x,k.height-F.y,k.mouseX,k.mouseY)}},v=r=>{r.multiplyScalar(1e4),e.applyForce(y,r)};return Oe(()=>{f==null||f.remove()}),[c,o,e,s,a,$,v,()=>n(0,c=!c),()=>n(1,o=!o)]}let Et=class extends be{constructor(t){super(),we(this,t,St,Ct,ge,{})}};function jt(l){let t,n,c,o,s=l[0][l[0].length-1]+"",e,y,a,i="New ball",p,f,$;return n=new Be({props:{sketch:l[2]}}),{c(){t=w("div"),re(n.$$.fragment),c=C(),o=w("p"),e=A(s),y=C(),a=w("button"),a.textContent=i,this.h()},l(v){t=_(v,"DIV",{class:!0});var g=T(t);le(n.$$.fragment,g),g.forEach(m),c=S(v),o=_(v,"P",{});var b=T(o);e=R(b,s),b.forEach(m),y=S(v),a=_(v,"BUTTON",{"data-svelte-h":!0}),G(a)!=="svelte-1jwbm46"&&(a.textContent=i),this.h()},h(){W(t,"class","d-flex justify-content-center")},m(v,g){j(v,t,g),ie(n,t,null),j(v,c,g),j(v,o,g),d(o,e),j(v,y,g),j(v,a,g),p=!0,f||($=z(a,"click",l[1]),f=!0)},p(v,[g]){(!p||g&1)&&s!==(s=v[0][v[0].length-1]+"")&&te(e,s)},i(v){p||(ce(n.$$.fragment,v),p=!0)},o(v){ae(n.$$.fragment,v),p=!1},d(v){v&&(m(t),m(c),m(o),m(y),m(a)),ue(n),f=!1,$()}}}function Pt(l,t,n){console.clear();let c=[];const o=i=>{const p=i.objects[i.objects.length-1],f=p.position.clone().toFixed(2),$=p.velocity.clone().toFixed(2);c.push(`${i.t.toFixed(2)} - pos: ${f} - vel: ${$}`),c.length>50&&c.shift(),n(0,c)},s=new Xe({reporter:o,enableGravity:!0}),e=()=>{for(;s.objects.length;)s.objects.pop();const i=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,0),fixed:!0});s.addObject(i);for(let p=0;p<1;p++){const f=E({geometry:{type:"sphere",r:5},position:new u(20,50),velocity:new u(Math.random()*5-2.5,Math.random()*20)});s.addObject(f)}};let y;const a=i=>{i.setup=()=>{y=i,i.createCanvas(900,600),i.background(0),i.fill(255),i.stroke(255),e()},i.draw=()=>{i.background(0),s.step();for(const p of s.objects){const f=i.map(p.position.x,0,s.dimensions.x,0,i.width),$=i.map(p.position.y,0,s.dimensions.y,i.height,0);if(p.geometry.type==="sphere"&&(i.strokeWeight(p.geometry.r*2),i.point(f,$)),p.geometry.type==="line"){const v=f+i.map(p.geometry.vector.x,0,s.dimensions.x,0,i.width),g=$+i.map(p.geometry.vector.y,0,s.dimensions.y,0,i.height);i.strokeWeight(2),i.line(f,$,v,g)}}}};return Oe(()=>{y==null||y.remove()}),[c,e,a]}class Dt extends be{constructor(t){super(),we(this,t,Pt,jt,ge,{})}}function Ot(l){let t,n,c,o,s=l[0][l[0].length-1]+"",e,y,a,i="New ball",p,f,$;return n=new Be({props:{sketch:l[2]}}),{c(){t=w("div"),re(n.$$.fragment),c=C(),o=w("p"),e=A(s),y=C(),a=w("button"),a.textContent=i,this.h()},l(v){t=_(v,"DIV",{class:!0});var g=T(t);le(n.$$.fragment,g),g.forEach(m),c=S(v),o=_(v,"P",{});var b=T(o);e=R(b,s),b.forEach(m),y=S(v),a=_(v,"BUTTON",{"data-svelte-h":!0}),G(a)!=="svelte-1jwbm46"&&(a.textContent=i),this.h()},h(){W(t,"class","d-flex justify-content-center")},m(v,g){j(v,t,g),ie(n,t,null),j(v,c,g),j(v,o,g),d(o,e),j(v,y,g),j(v,a,g),p=!0,f||($=z(a,"click",l[1]),f=!0)},p(v,[g]){(!p||g&1)&&s!==(s=v[0][v[0].length-1]+"")&&te(e,s)},i(v){p||(ce(n.$$.fragment,v),p=!0)},o(v){ae(n.$$.fragment,v),p=!1},d(v){v&&(m(t),m(c),m(o),m(y),m(a)),ue(n),f=!1,$()}}}const ct=6;function Bt(l,t,n){console.clear();let c=[];const o=f=>{const $=f.objects[f.objects.length-1],v=$.position.clone().toFixed(2),g=$.velocity.clone().toFixed(2);c.push(`${f.t.toFixed(2)} - pos: ${v} - vel: ${g}`),c.length>50&&c.shift(),n(0,c)},s=new Xe({reporter:o,enableGravity:!0});let e,y;const a=()=>{for(;s.objects.length;)s.objects.pop();y=E({geometry:{type:"line",vector:new u(40,40)},position:new u(30,30),fixed:!0}),s.addObject(y),e=E({geometry:{type:"sphere",r:10},position:new u(20,50),velocity:new u(2.5,2.5),fixed:!0}),s.addObject(e)};let i;const p=f=>{const $=b=>typeof b=="number"?b*ct:b.clone().multiplyScalar(ct),v=b=>typeof b=="number"?b/ct:b.clone().divideScalar(ct);f.setup=()=>{i=f;const b=$(s.dimensions);f.createCanvas(b.x,b.y),f.background(0),f.fill(255),f.stroke(255),a()};let g;f.draw=()=>{if(f.background(0),s.step(),f.mouseIsPressed){const b=v(new u(f.mouseX,f.height-f.mouseY));if(g||(b.distance(e.position)<2?g="sphere":b.distance(y.position)<2?g="wallstart":b.distance(y.geometry.vector.clone().add(y.position))<2&&(g="wallend")),g==="sphere"&&e.position.copy(b),g==="wallstart"&&y.position.copy(b),g==="wallend"){const r=b.clone().subtract(y.position);y.geometry.vector.copy(r)}}else g=void 0;for(const b of s.objects.sort((r,h)=>r.geometry.type<h.geometry.type?1:-1)){f.stroke(e.data.isColliding?"red":"white");const r=f.map(b.position.x,0,s.dimensions.x,0,f.width),h=f.map(b.position.y,0,s.dimensions.y,f.height,0);if(b.geometry.type==="sphere"){const D=$(b.geometry.r*2);f.strokeWeight(D),f.point(r,h)}if(b.geometry.type==="line"){const D=r+f.map(b.geometry.vector.x,0,s.dimensions.x,0,f.width),k=h-f.map(b.geometry.vector.y,0,s.dimensions.y,0,f.height);f.stroke("blue"),f.strokeWeight(2),f.line(r,h,D,k)}}}};return Oe(()=>{i==null||i.remove()}),[c,a,p]}class Ft extends be{constructor(t){super(),we(this,t,Bt,Ot,ge,{})}}function Vt(l){let t,n,c;return n=new Be({props:{sketch:l[0]}}),{c(){t=w("div"),re(n.$$.fragment),this.h()},l(o){t=_(o,"DIV",{class:!0});var s=T(t);le(n.$$.fragment,s),s.forEach(m),this.h()},h(){W(t,"class","d-flex justify-content-center")},m(o,s){j(o,t,s),ie(n,t,null),c=!0},p:De,i(o){c||(ce(n.$$.fragment,o),c=!0)},o(o){ae(n.$$.fragment,o),c=!1},d(o){o&&m(t),ue(n)}}}const at=6;function It(l){console.clear();const t=new Xe({reporter:()=>{},enableGravity:!0});let n;const c=()=>{for(;t.objects.length;)t.objects.pop();n=E({geometry:{type:"sphere",r:5},position:new u(20,50),velocity:new u(Math.random()*5-2.5,Math.random()*20)}),t.addObject(n);const a=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,2),fixed:!0});t.addObject(a);const i=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,98),fixed:!0});t.addObject(i);const p=E({geometry:{type:"line",vector:new u(0,100)},position:new u(2,0),fixed:!0});t.addObject(p);const f=E({geometry:{type:"line",vector:new u(0,100)},position:new u(98,0),fixed:!0});t.addObject(f);const $=E({geometry:{type:"line",vector:new u(50,50)},position:new u(20,10),fixed:!0});t.addObject($)},o=a=>typeof a=="number"?a*at:a.clone().multiplyScalar(at),s=a=>typeof a=="number"?a/at:a.clone().divideScalar(at);let e;const y=a=>{a.setup=()=>{e=a;const p=o(t.dimensions);a.createCanvas(p.x,p.y),a.background(0),a.fill(255),a.stroke(255),c()},a.draw=()=>{if(a.background(0),a.mouseIsPressed){n.fixed=!0;const p=s(new u(a.mouseX,a.height-a.mouseY));n.position.copy(p)}else n.fixed=!1;t.step(),lt(a,t)};let i;a.mousePressed=()=>{i=s(new u(a.mouseX,a.height-a.mouseY))},a.mouseReleased=()=>{const p=s(new u(a.mouseX,a.height-a.mouseY)),f=i.subtract(p);n.position.copy(p),n.velocity.copy(f)}};return Oe(()=>{e==null||e.remove()}),[y]}class Lt extends be{constructor(t){super(),we(this,t,It,Vt,ge,{})}}function Mt(l){let t,n,c,o,s,e,y,a="Gravity",i,p,f,$="Toggle",v,g,b;return n=new Be({props:{sketch:l[1]}}),{c(){t=w("div"),re(n.$$.fragment),c=C(),o=w("table"),s=w("tbody"),e=w("tr"),y=w("th"),y.textContent=a,i=C(),p=w("td"),f=w("button"),f.textContent=$,this.h()},l(r){t=_(r,"DIV",{class:!0});var h=T(t);le(n.$$.fragment,h),h.forEach(m),c=S(r),o=_(r,"TABLE",{});var D=T(o);s=_(D,"TBODY",{});var k=T(s);e=_(k,"TR",{});var F=T(e);y=_(F,"TH",{"data-svelte-h":!0}),G(y)!=="svelte-vy75us"&&(y.textContent=a),i=S(F),p=_(F,"TD",{});var I=T(p);f=_(I,"BUTTON",{"data-svelte-h":!0}),G(f)!=="svelte-18lc94l"&&(f.textContent=$),I.forEach(m),F.forEach(m),k.forEach(m),D.forEach(m),this.h()},h(){W(t,"class","d-flex justify-content-center")},m(r,h){j(r,t,h),ie(n,t,null),j(r,c,h),j(r,o,h),d(o,s),d(s,e),d(e,y),d(e,i),d(e,p),d(p,f),v=!0,g||(b=z(f,"click",l[2]),g=!0)},p:De,i(r){v||(ce(n.$$.fragment,r),v=!0)},o(r){ae(n.$$.fragment,r),v=!1},d(r){r&&(m(t),m(c),m(o)),ue(n),g=!1,b()}}}const ut=6;function Wt(l){console.clear();const t=new Xe({reporter:()=>{},enableGravity:!0});let n;const c=()=>{for(;t.objects.length;)t.objects.pop();const i=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,0),fixed:!0});t.addObject(i);const p=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,100),fixed:!0});t.addObject(p);const f=E({geometry:{type:"line",vector:new u(0,100)},position:new u(0,0),fixed:!0});t.addObject(f);const $=E({geometry:{type:"line",vector:new u(0,100)},position:new u(100,0),fixed:!0});t.addObject($);const v=E({geometry:{type:"line",vector:new u(50,50)},position:new u(20,10),fixed:!0});t.addObject(v),n=E({geometry:{type:"sphere",r:2},position:new u(20,50),velocity:new u(Math.random()*5-2.5,Math.random()*20)}),t.addObject(n)},o=i=>typeof i=="number"?i*ut:i.clone().multiplyScalar(ut),s=i=>typeof i=="number"?i/ut:i.clone().divideScalar(ut);let e;const y=i=>{i.setup=()=>{e=i;const f=o(t.dimensions);i.createCanvas(f.x,f.y),i.background(0),i.fill(255),i.stroke(255),c()},i.draw=()=>{if(i.background(0),rt(i)){n.fixed=!0;const f=s(new u(i.mouseX,i.height-i.mouseY));n.position.copy(f)}else n.fixed=!1;t.step(),lt(i,t)};let p;i.mousePressed=()=>{Ge(i)&&(p=s(new u(i.mouseX,i.height-i.mouseY)))},i.mouseReleased=()=>{if(!Ge(i))return;const f=s(new u(i.mouseX,i.height-i.mouseY)),$=p.subtract(f);n.position.copy(f),n.velocity.copy($)}};return Oe(()=>{e==null||e.remove()}),[t,y,()=>t.toggleGravity()]}class Nt extends be{constructor(t){super(),we(this,t,Wt,Mt,ge,{})}}const At=()=>{const l=[],t=E({geometry:{type:"line",vector:new u(15,0)},position:new u(0,0),fixed:!0});l.push(t);const n=E({geometry:{type:"line",vector:new u(0,100)},position:new u(0,0),fixed:!0});l.push(n);const c=E({geometry:{type:"line",vector:new u(0,100)},position:new u(15,0),fixed:!0});l.push(c);const o=E({geometry:{type:"line",vector:new u(3,-3)},position:new u(3.5,8),fixed:!0});l.push(o);const s=E({geometry:{type:"line",vector:new u(3,3)},position:new u(3.5,5),fixed:!0});l.push(s);const e=E({geometry:{type:"line",vector:new u(6,0)},position:new u(2,2),fixed:!0});l.push(e);const y=E({geometry:{type:"line",vector:new u(4,0)},position:new u(3,2.5),fixed:!0});l.push(y);const a=E({geometry:{type:"line",vector:new u(2,0)},position:new u(4,3),fixed:!0});l.push(a);const i=E({geometry:{type:"line",vector:new u(.6,0)},position:new u(4.7,3.5),fixed:!0});l.push(i);const p=E({geometry:{type:"line",vector:new u(1,0)},position:new u(10,10.1),fixed:!0});l.push(p);const f=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(11,10),fixed:!0});l.push(f);const $=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(11.5,10),fixed:!0});l.push($);const v=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(12,10),fixed:!0});l.push(v);const g=E({geometry:{type:"line",vector:new u(1,0)},position:new u(12,10.1),fixed:!0});l.push(g);for(let r=.2;r<.5;r+=.1)for(let h=0;h<10;h++){const D=E({geometry:{type:"line",vector:new u(0,3)},position:new u(9+h*r,1),fixed:!0});l.push(D)}const b=E({geometry:{type:"sphere",r:.1},position:new u(5,10),velocity:new u(0,0)});return l.push(b),{objects:l,sphere:b}};function Rt(l){let t,n,c,o,s,e=l[0]?"Disable":"Enable",y,a,i,p,f=l[1]?"Play":"Pause",$,v,g,b="Reset",r,h,D,k,F,I,L,M,H,Y="Simulation time/Frame duration",U,O,B=l[2].t+"",X,ee,Q,q=l[2].frameTime+"",ne,Ee,P,N,oe="Sphere position",_e,de,$e=l[2].spherePos.x.toFixed(2)+"",xe,fe,he,ke=l[2].spherePos.y.toFixed(2)+"",Fe,Ne,J,pe,qe="Sphere velocity",Ae,Te,Ve=l[2].sphereVel.x.toFixed(2)+"",Ie,Re,Ce,Le=l[2].sphereVel.y.toFixed(2)+"",Me,K,Ye,ze;return n=new Be({props:{sketch:l[5]}}),h=new vt({props:{onShoot:l[6]}}),k=new ft({props:{world:l[3]}}),{c(){t=w("div"),re(n.$$.fragment),c=C(),o=w("div"),s=w("button"),y=A(e),a=A(" pause on collision"),i=C(),p=w("button"),$=A(f),v=C(),g=w("button"),g.textContent=b,r=C(),re(h.$$.fragment),D=C(),re(k.$$.fragment),F=C(),I=w("table"),L=w("tbody"),M=w("tr"),H=w("th"),H.textContent=Y,U=C(),O=w("td"),X=A(B),ee=C(),Q=w("td"),ne=A(q),Ee=C(),P=w("tr"),N=w("th"),N.textContent=oe,_e=C(),de=w("td"),xe=A($e),fe=C(),he=w("td"),Fe=A(ke),Ne=C(),J=w("tr"),pe=w("th"),pe.textContent=qe,Ae=C(),Te=w("td"),Ie=A(Ve),Re=C(),Ce=w("td"),Me=A(Le),this.h()},l(x){t=_(x,"DIV",{class:!0});var V=T(t);le(n.$$.fragment,V),V.forEach(m),c=S(x),o=_(x,"DIV",{});var Z=T(o);s=_(Z,"BUTTON",{});var Ue=T(s);y=R(Ue,e),a=R(Ue," pause on collision"),Ue.forEach(m),i=S(Z),p=_(Z,"BUTTON",{});var Qe=T(p);$=R(Qe,f),Qe.forEach(m),v=S(Z),g=_(Z,"BUTTON",{"data-svelte-h":!0}),G(g)!=="svelte-tlxueg"&&(g.textContent=b),Z.forEach(m),r=S(x),le(h.$$.fragment,x),D=S(x),le(k.$$.fragment,x),F=S(x),I=_(x,"TABLE",{});var Je=T(I);L=_(Je,"TBODY",{});var Se=T(L);M=_(Se,"TR",{});var ye=T(M);H=_(ye,"TH",{"data-svelte-h":!0}),G(H)!=="svelte-rirgm4"&&(H.textContent=Y),U=S(ye),O=_(ye,"TD",{});var Ke=T(O);X=R(Ke,B),Ke.forEach(m),ee=S(ye),Q=_(ye,"TD",{});var Ze=T(Q);ne=R(Ze,q),Ze.forEach(m),ye.forEach(m),Ee=S(Se),P=_(Se,"TR",{});var se=T(P);N=_(se,"TH",{"data-svelte-h":!0}),G(N)!=="svelte-1y1nif6"&&(N.textContent=oe),_e=S(se),de=_(se,"TD",{});var et=T(de);xe=R(et,$e),et.forEach(m),fe=S(se),he=_(se,"TD",{});var tt=T(he);Fe=R(tt,ke),tt.forEach(m),Ne=S(se),se.forEach(m),J=_(Se,"TR",{});var ve=T(J);pe=_(ve,"TH",{"data-svelte-h":!0}),G(pe)!=="svelte-1uw1fs2"&&(pe.textContent=qe),Ae=S(ve),Te=_(ve,"TD",{});var nt=T(Te);Ie=R(nt,Ve),nt.forEach(m),Re=S(ve),Ce=_(ve,"TD",{});var ot=T(Ce);Me=R(ot,Le),ot.forEach(m),ve.forEach(m),Se.forEach(m),Je.forEach(m),this.h()},h(){W(t,"class","d-flex justify-content-center")},m(x,V){j(x,t,V),ie(n,t,null),j(x,c,V),j(x,o,V),d(o,s),d(s,y),d(s,a),d(o,i),d(o,p),d(p,$),d(o,v),d(o,g),j(x,r,V),ie(h,x,V),j(x,D,V),ie(k,x,V),j(x,F,V),j(x,I,V),d(I,L),d(L,M),d(M,H),d(M,U),d(M,O),d(O,X),d(M,ee),d(M,Q),d(Q,ne),d(L,Ee),d(L,P),d(P,N),d(P,_e),d(P,de),d(de,xe),d(P,fe),d(P,he),d(he,Fe),d(P,Ne),d(L,J),d(J,pe),d(J,Ae),d(J,Te),d(Te,Ie),d(J,Re),d(J,Ce),d(Ce,Me),K=!0,Ye||(ze=[z(s,"click",l[7]),z(p,"click",l[8]),z(g,"click",l[4])],Ye=!0)},p(x,[V]){(!K||V&1)&&e!==(e=x[0]?"Disable":"Enable")&&te(y,e),(!K||V&2)&&f!==(f=x[1]?"Play":"Pause")&&te($,f);const Z={};V&8&&(Z.world=x[3]),k.$set(Z),(!K||V&4)&&B!==(B=x[2].t+"")&&te(X,B),(!K||V&4)&&q!==(q=x[2].frameTime+"")&&te(ne,q),(!K||V&4)&&$e!==($e=x[2].spherePos.x.toFixed(2)+"")&&te(xe,$e),(!K||V&4)&&ke!==(ke=x[2].spherePos.y.toFixed(2)+"")&&te(Fe,ke),(!K||V&4)&&Ve!==(Ve=x[2].sphereVel.x.toFixed(2)+"")&&te(Ie,Ve),(!K||V&4)&&Le!==(Le=x[2].sphereVel.y.toFixed(2)+"")&&te(Me,Le)},i(x){K||(ce(n.$$.fragment,x),ce(h.$$.fragment,x),ce(k.$$.fragment,x),K=!0)},o(x){ae(n.$$.fragment,x),ae(h.$$.fragment,x),ae(k.$$.fragment,x),K=!1},d(x){x&&(m(t),m(c),m(o),m(r),m(D),m(F),m(I)),ue(n),ue(h,x),ue(k,x),Ye=!1,st(ze)}}}const dt=60;function Yt(l,t,n){console.clear();let c=!1,o=!1,s={t:"0",frameTime:"0",spherePos:new u(0,0),sphereVel:new u(0,0),ballIsColliding:!1},e,y;const a=()=>{n(3,e=new Xe({dimensions:new u(15,15),reporter:h=>{var D;n(2,s.t=(D=h==null?void 0:h.t)==null?void 0:D.toFixed(1),s),s.spherePos.copy(y.position).unfloat(),s.sphereVel.copy(y.velocity).unfloat(),n(2,s.frameTime=h.frameTime.toFixed(2),s),n(2,s),n(2,s.ballIsColliding=y.data.isColliding,s),c&&y.data.isColliding&&!o&&n(1,o=!0)},enableGravity:!0}));const r=At();y=r.sphere;for(const h of r.objects)e.addObject(h)},i=r=>typeof r=="number"?r*dt:r.clone().multiplyScalar(dt),p=r=>typeof r=="number"?r/dt:r.clone().divideScalar(dt);let f;const $=r=>{r.setup=()=>{f=r,a();const k=i(e.dimensions);r.createCanvas(k.x,k.y),r.background(0),r.fill(255),r.stroke(255),a()},r.draw=()=>{r.background(0),rt(r)?y.fixed=!0:y.fixed=!1,o||e.step(),lt(r,e),D(r)};let h;r.mousePressed=()=>{Ge(r)&&(h=p(new u(r.mouseX,r.height-r.mouseY)),y.position.copy(h))},r.mouseReleased=()=>{if(!Ge(r)||!h)return;const k=p(new u(r.mouseX,r.height-r.mouseY)),F=h.subtract(k).multiplyScalar(3);h=void 0,y.velocity.copy(F)};const D=k=>{if(!h)return;k.stroke("blue"),k.strokeWeight(2);const F=i(h);k.line(F.x,k.height-F.y,k.mouseX,k.mouseY)}},v=r=>{r.multiplyScalar(1e4),e.applyForce(y,r)};return Oe(()=>{f==null||f.remove()}),[c,o,s,e,a,$,v,()=>n(0,c=!c),()=>n(1,o=!o)]}let Ut=class extends be{constructor(t){super(),we(this,t,Yt,Rt,ge,{})}};const Xt=()=>{const l=[],t=E({geometry:{type:"line",vector:new u(15,0)},position:new u(0,0),fixed:!0});l.push(t);const n=E({geometry:{type:"line",vector:new u(0,100)},position:new u(0,0),fixed:!0});l.push(n);const c=E({geometry:{type:"line",vector:new u(0,100)},position:new u(15,0),fixed:!0});l.push(c);const o=E({geometry:{type:"line",vector:new u(3,-3)},position:new u(3.5,8),fixed:!0});l.push(o);const s=E({geometry:{type:"line",vector:new u(3,3)},position:new u(3.5,5),fixed:!0});l.push(s);const e=E({geometry:{type:"line",vector:new u(6,0)},position:new u(2,2),fixed:!0});l.push(e);const y=E({geometry:{type:"line",vector:new u(4,0)},position:new u(3,2.5),fixed:!0});l.push(y);const a=E({geometry:{type:"line",vector:new u(2,0)},position:new u(4,3),fixed:!0});l.push(a);const i=E({geometry:{type:"line",vector:new u(.6,0)},position:new u(4.7,3.5),fixed:!0});l.push(i);const p=E({geometry:{type:"line",vector:new u(1,0)},position:new u(10,10.1),fixed:!0});l.push(p);const f=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(11,10),fixed:!0});l.push(f);const $=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(11.5,10),fixed:!0});l.push($);const v=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(12,10),fixed:!0});l.push(v);const g=E({geometry:{type:"line",vector:new u(1,0)},position:new u(12,10.1),fixed:!0});l.push(g);for(let b=.2;b<.5;b+=.1)for(let r=0;r<10;r++){const h=E({geometry:{type:"line",vector:new u(0,3)},position:new u(9+r*b,1),fixed:!0});l.push(h)}return{objects:l}};function Ht(l){let t,n,c,o,s,e=l[0]?"Disable":"Enable",y,a,i,p,f=l[1]?"Play":"Pause",$,v,g,b="Reset",r,h,D,k,F,I,L,M="Simulation time/Frame duration",H,Y,U=l[2].t+"",O,B,X,ee=l[2].frameTime+"",Q,q,ne,Ee;return n=new Be({props:{sketch:l[5]}}),h=new ft({props:{world:l[3]}}),{c(){t=w("div"),re(n.$$.fragment),c=C(),o=w("div"),s=w("button"),y=A(e),a=A(" pause on collision"),i=C(),p=w("button"),$=A(f),v=C(),g=w("button"),g.textContent=b,r=C(),re(h.$$.fragment),D=C(),k=w("table"),F=w("tbody"),I=w("tr"),L=w("th"),L.textContent=M,H=C(),Y=w("td"),O=A(U),B=C(),X=w("td"),Q=A(ee),this.h()},l(P){t=_(P,"DIV",{class:!0});var N=T(t);le(n.$$.fragment,N),N.forEach(m),c=S(P),o=_(P,"DIV",{});var oe=T(o);s=_(oe,"BUTTON",{});var _e=T(s);y=R(_e,e),a=R(_e," pause on collision"),_e.forEach(m),i=S(oe),p=_(oe,"BUTTON",{});var de=T(p);$=R(de,f),de.forEach(m),v=S(oe),g=_(oe,"BUTTON",{"data-svelte-h":!0}),G(g)!=="svelte-tlxueg"&&(g.textContent=b),oe.forEach(m),r=S(P),le(h.$$.fragment,P),D=S(P),k=_(P,"TABLE",{});var $e=T(k);F=_($e,"TBODY",{});var xe=T(F);I=_(xe,"TR",{});var fe=T(I);L=_(fe,"TH",{"data-svelte-h":!0}),G(L)!=="svelte-rirgm4"&&(L.textContent=M),H=S(fe),Y=_(fe,"TD",{});var he=T(Y);O=R(he,U),he.forEach(m),B=S(fe),X=_(fe,"TD",{});var ke=T(X);Q=R(ke,ee),ke.forEach(m),fe.forEach(m),xe.forEach(m),$e.forEach(m),this.h()},h(){W(t,"class","d-flex justify-content-center")},m(P,N){j(P,t,N),ie(n,t,null),j(P,c,N),j(P,o,N),d(o,s),d(s,y),d(s,a),d(o,i),d(o,p),d(p,$),d(o,v),d(o,g),j(P,r,N),ie(h,P,N),j(P,D,N),j(P,k,N),d(k,F),d(F,I),d(I,L),d(I,H),d(I,Y),d(Y,O),d(I,B),d(I,X),d(X,Q),q=!0,ne||(Ee=[z(s,"click",l[6]),z(p,"click",l[7]),z(g,"click",l[4])],ne=!0)},p(P,[N]){(!q||N&1)&&e!==(e=P[0]?"Disable":"Enable")&&te(y,e),(!q||N&2)&&f!==(f=P[1]?"Play":"Pause")&&te($,f);const oe={};N&8&&(oe.world=P[3]),h.$set(oe),(!q||N&4)&&U!==(U=P[2].t+"")&&te(O,U),(!q||N&4)&&ee!==(ee=P[2].frameTime+"")&&te(Q,ee)},i(P){q||(ce(n.$$.fragment,P),ce(h.$$.fragment,P),q=!0)},o(P){ae(n.$$.fragment,P),ae(h.$$.fragment,P),q=!1},d(P){P&&(m(t),m(c),m(o),m(r),m(D),m(k)),ue(n),ue(h,P),ne=!1,st(Ee)}}}const pt=60;function Gt(l,t,n){console.clear();let c=!1,o=!1,s={t:"0",frameTime:"0"},e;const y=()=>{clearInterval(f),f=setInterval(a,100),n(3,e=new Xe({dimensions:new u(15,15),reporter:r=>{var h;n(2,s.t=(h=r==null?void 0:r.t)==null?void 0:h.toFixed(1),s),n(2,s.frameTime=r.frameTime.toFixed(2),s),n(2,s)},enableGravity:!0}));const b=Xt();for(const r of b.objects)e.addObject(r)},a=()=>{console.log("add ball");const b=Math.random()*e.dimensions.x,r=Math.random()*e.dimensions.y,h=-5+Math.random()*10,D=-5+Math.random()*10,k=E({geometry:{type:"sphere",r:.1},position:new u(b,r),velocity:new u(h,D)});e.addObject(k)},i=b=>typeof b=="number"?b*pt:b.clone().multiplyScalar(pt);let p,f;const $=b=>{b.setup=()=>{p=b,y();const r=i(e.dimensions);b.createCanvas(r.x,r.y),b.background(0),b.fill(255),b.stroke(255),y()},b.draw=()=>{b.background(0),o||e.step(),lt(b,e)}};return Oe(()=>{p==null||p.remove(),clearInterval(f)}),[c,o,s,e,y,$,()=>n(0,c=!c),()=>n(1,o=!o)]}class qt extends be{constructor(t){super(),we(this,t,Gt,Ht,ge,{})}}function zt(l){let t,n,c;return n=new Be({props:{sketch:l[0]}}),{c(){t=w("div"),re(n.$$.fragment),this.h()},l(o){t=_(o,"DIV",{class:!0});var s=T(t);le(n.$$.fragment,s),s.forEach(m),this.h()},h(){W(t,"class","d-flex justify-content-center")},m(o,s){j(o,t,s),ie(n,t,null),c=!0},p:De,i(o){c||(ce(n.$$.fragment,o),c=!0)},o(o){ae(n.$$.fragment,o),c=!1},d(o){o&&m(t),ue(n)}}}const Pe=6;function Qt(l){console.clear();let t;const n=E({geometry:{type:"sphere",r:10},position:new u(30,50),velocity:new u(15,15)}),c=E({geometry:{type:"line",vector:new u(80,0)},position:new u(10,70)}),o=new bt,s=e=>{const y=new u(100,100),a=me(y,Pe);e.setup=()=>{t=e,e.createCanvas(a.x,a.y),e.noFill()};let i;e.draw=()=>{if(e.background(0),!rt(e))i=void 0;else{const h=yt(new u(e.mouseX,e.height-e.mouseY),Pe);if(i||(h.distance(n.position)<=n.geometry.r?i="sphere":h.distance(n.position.clone().add(n.velocity))<=6?i="spherevelocity":h.distance(c.position)<=6?i="linestart":h.distance(c.geometry.vector.clone().add(c.position))<=6&&(i="lineend")),i==="sphere")n.position.copy(h);else if(i==="spherevelocity"){const D=h.clone().subtract(n.position);n.velocity.copy(D)}else if(i==="linestart")c.position.copy(h);else if(i==="lineend"){const D=h.clone().subtract(c.position);c.geometry.vector.copy(D)}}const{intersection:p,bouncedVelocity:f}=o.apply(c,n);for(let h=0;h<10;h++){const{positionCorrection:D}=o.apply(c,n);D&&(n.position.add(D.multiplyScalar(.5)),c.position.subtract(D.multiplyScalar(.5)))}e.stroke(255),e.noFill();const $=me(n.position,Pe);e.circle($.x,e.height-$.y,2*n.geometry.r*Pe),e.stroke(255);const v=me(n.velocity,Pe);e.line($.x,e.height-$.y,$.x+v.x,e.height-($.y+v.y)),e.stroke(255);const{x:g,y:b}=me(c.position,Pe),r=me(c.geometry.vector,Pe);if(e.line(g,e.height-b,g+r.x,e.height-(b+r.y)),p){e.stroke("#54d7ff"),e.fill("#54d7ff");const h=me(p,Pe);e.circle(h.x,e.height-h.y,5)}if(f){e.stroke("green"),e.fill("green");const h=me(f,Pe);e.line($.x,e.height-$.y,$.x+h.x,e.height-($.y+h.y))}}};return Oe(()=>{t==null||t.remove()}),[s]}class Jt extends be{constructor(t){super(),we(this,t,Qt,zt,ge,{})}}function Kt(l){let t,n,c;return n=new Be({props:{sketch:l[0]}}),{c(){t=w("div"),re(n.$$.fragment),this.h()},l(o){t=_(o,"DIV",{class:!0});var s=T(t);le(n.$$.fragment,s),s.forEach(m),this.h()},h(){W(t,"class","d-flex justify-content-center")},m(o,s){j(o,t,s),ie(n,t,null),c=!0},p:De,i(o){c||(ce(n.$$.fragment,o),c=!0)},o(o){ae(n.$$.fragment,o),c=!1},d(o){o&&m(t),ue(n)}}}const je=6;function Zt(l){console.clear();let t;const n=E({geometry:{type:"sphere",r:10},position:new u(30,50),velocity:new u(15,15)}),c=E({geometry:{type:"sphere",r:10},position:new u(70,50),velocity:new u(0,45)}),o=new wt,s=e=>{const y=new u(100,100),a=me(y,je);e.setup=()=>{t=e,e.createCanvas(a.x,a.y),e.noFill()};let i;e.draw=()=>{if(e.background(0),!rt(e))i=void 0;else{const r=yt(new u(e.mouseX,e.height-e.mouseY),je);if(i||(r.distance(n.position)<=n.geometry.r?i="sphere":r.distance(n.position.clone().add(n.velocity))<=6?i="spherevelocity":r.distance(c.position)<=c.geometry.r?i="sphere2":r.distance(c.position.clone().add(c.velocity))<=6&&(i="sphere2velocity")),i==="sphere")n.position.copy(r);else if(i==="spherevelocity"){const h=r.clone().subtract(n.position);n.velocity.copy(h)}else if(i==="sphere2")c.position.copy(r);else if(i==="sphere2velocity"){const h=r.clone().subtract(c.position);c.velocity.copy(h)}}const{intersection:p,bouncedVelocity:f}=o.apply(n,c);for(let r=0;r<10;r++){const{positionCorrection:h}=o.apply(n,c);h&&(n.position.add(h.multiplyScalar(.5)),c.position.subtract(h.multiplyScalar(.5)))}e.stroke(255),e.noFill();const $=me(n.position,je);e.circle($.x,e.height-$.y,2*n.geometry.r*je),e.stroke(255);const v=me(n.velocity,je);e.line($.x,e.height-$.y,$.x+v.x,e.height-($.y+v.y)),e.stroke(255),e.noFill();const g=me(c.position,je);e.circle(g.x,e.height-g.y,2*c.geometry.r*je),e.stroke(255);const b=me(c.velocity,je);if(e.line(g.x,e.height-g.y,g.x+b.x,e.height-(g.y+b.y)),p){e.stroke("#54d7ff"),e.fill("#54d7ff");const r=me(p,je);e.circle(r.x,e.height-r.y,5)}if(f){e.stroke("green"),e.fill("green");const r=me(f,je);e.line($.x,e.height-$.y,$.x+r.x,e.height-($.y+r.y))}}};return Oe(()=>{t==null||t.remove()}),[s]}class en extends be{constructor(t){super(),we(this,t,Zt,Kt,ge,{})}}function tn(l){let t,n="<span>This page is a list of engine tests. They use the actual engine and allow me to setup different situations and check manually for regressions and bugs.</span> <br/> <span>Use the selection menu to see the different pages</span>",c,o,s,e,y;return e=new gt({props:{tabs:l[0]}}),{c(){t=w("div"),t.innerHTML=n,c=C(),o=w("br"),s=C(),re(e.$$.fragment)},l(a){t=_(a,"DIV",{"data-svelte-h":!0}),G(t)!=="svelte-11mzr87"&&(t.innerHTML=n),c=S(a),o=_(a,"BR",{}),s=S(a),le(e.$$.fragment,a)},m(a,i){j(a,t,i),j(a,c,i),j(a,o,i),j(a,s,i),ie(e,a,i),y=!0},p:De,i(a){y||(ce(e.$$.fragment,a),y=!0)},o(a){ae(e.$$.fragment,a),y=!1},d(a){a&&(m(t),m(c),m(o),m(s)),ue(e,a)}}}function nn(l){return[[{label:"Ball pool",value:Et},{label:"Sphere Sphere Collider",value:en},{label:"Line Sphere Collider",value:Jt},{label:"Perfs - Multiple balls",value:qt},{label:"Playground - Engine settings",value:Ut},{label:"Dynamics + collisions - 1",value:Nt},{label:"Dynamics + collisions - 2",value:Lt},{label:"Sphere Line - pull apart",value:Ft},{label:"One ball bounce",value:Dt}]]}class un extends be{constructor(t){super(),we(this,t,nn,tn,ge,{})}}export{un as component};
