var bt=Object.defineProperty;var wt=(i,e,t)=>e in i?bt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var st=(i,e,t)=>(wt(i,typeof e!="symbol"?e+"":e,t),t);import{s as ge,f as w,a as C,e as mt,g as _,u as q,c as S,j as W,i as P,z as De,d as m,h as k,y as d,P as We,L as Q,Q as He,O as rt,l as Y,m as U,n as te,M as Oe}from"../chunks/scheduler.32ebed32.js";import{S as be,i as we,b as re,d as ie,m as le,a as ce,t as ae,e as ue}from"../chunks/index.c25c2528.js";import{V as u,c as E,P as Ve,m as it,d as lt,a as Ge,w as me,s as vt,C as _t}from"../chunks/PhysicObject.d0894205.js";import{W as Xe,L as xt}from"../chunks/World.2902d636.js";function pt(i){let e,t,l,o,s="dt",n,p,a,c,y,f,x="drag",g,v,b,r,h,j,T="gravity enabled",V,F,B,L,X;return{c(){e=w("table"),t=w("tbody"),l=w("tr"),o=w("th"),o.textContent=s,n=C(),p=w("td"),a=w("input"),c=C(),y=w("tr"),f=w("th"),f.textContent=x,g=C(),v=w("td"),b=w("input"),r=C(),h=w("tr"),j=w("th"),j.textContent=T,V=C(),F=w("td"),B=w("input"),this.h()},l(M){e=_(M,"TABLE",{});var R=k(e);t=_(R,"TBODY",{});var D=k(t);l=_(D,"TR",{});var I=k(l);o=_(I,"TH",{"data-svelte-h":!0}),q(o)!=="svelte-16dheti"&&(o.textContent=s),n=S(I),p=_(I,"TD",{});var H=k(p);a=_(H,"INPUT",{type:!0,min:!0,max:!0,step:!0}),H.forEach(m),I.forEach(m),c=S(D),y=_(D,"TR",{});var J=k(y);f=_(J,"TH",{"data-svelte-h":!0}),q(f)!=="svelte-2hq5g"&&(f.textContent=x),g=S(J),v=_(J,"TD",{});var z=k(v);b=_(z,"INPUT",{type:!0,min:!0,max:!0,step:!0}),z.forEach(m),J.forEach(m),r=S(D),h=_(D,"TR",{});var G=k(h);j=_(G,"TH",{"data-svelte-h":!0}),q(j)!=="svelte-ic0r87"&&(j.textContent=T),V=S(G),F=_(G,"TD",{});var ne=k(F);B=_(ne,"INPUT",{type:!0}),ne.forEach(m),G.forEach(m),D.forEach(m),R.forEach(m),this.h()},h(){W(a,"type","number"),W(a,"min","0"),W(a,"max","0.5"),W(a,"step","0.001"),W(b,"type","number"),W(b,"min","0"),W(b,"max","0.01"),W(b,"step","0.001"),W(B,"type","checkbox")},m(M,R){P(M,e,R),d(e,t),d(t,l),d(l,o),d(l,n),d(l,p),d(p,a),We(a,i[0].dt),d(t,c),d(t,y),d(y,f),d(y,g),d(y,v),d(v,b),We(b,i[0].drag),d(t,r),d(t,h),d(h,j),d(h,V),d(h,F),d(F,B),B.checked=i[0].gravityEnabled,L||(X=[Q(a,"input",i[1]),Q(b,"input",i[2]),Q(B,"change",i[3])],L=!0)},p(M,R){R&1&&He(a.value)!==M[0].dt&&We(a,M[0].dt),R&1&&He(b.value)!==M[0].drag&&We(b,M[0].drag),R&1&&(B.checked=M[0].gravityEnabled)},d(M){M&&m(e),L=!1,rt(X)}}}function $t(i){let e,t="Engine settings",l,o,s=i[0]&&pt(i);return{c(){e=w("p"),e.textContent=t,l=C(),s&&s.c(),o=mt(),this.h()},l(n){e=_(n,"P",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-gf3gek"&&(e.textContent=t),l=S(n),s&&s.l(n),o=mt(),this.h()},h(){W(e,"class","title svelte-g74uk9")},m(n,p){P(n,e,p),P(n,l,p),s&&s.m(n,p),P(n,o,p)},p(n,[p]){n[0]?s?s.p(n,p):(s=pt(n),s.c(),s.m(o.parentNode,o)):s&&(s.d(1),s=null)},i:De,o:De,d(n){n&&(m(e),m(l),m(o)),s&&s.d(n)}}}function Tt(i,e,t){let{world:l}=e;function o(){l.dt=He(this.value),t(0,l)}function s(){l.drag=He(this.value),t(0,l)}function n(){l.gravityEnabled=this.checked,t(0,l)}return i.$$set=p=>{"world"in p&&t(0,l=p.world)},[l,o,s,n]}class ht extends be{constructor(e){super(),we(this,e,Tt,$t,ge,{world:0})}}function kt(i){let e,t="Shooter",l,o,s,n="Angle",p,a,c,y,f,x,g,v,b="Magnitude",r,h,j,T,V,F,B,L,X="Shoot",M,R;return{c(){e=w("p"),e.textContent=t,l=C(),o=w("span"),s=w("label"),s.textContent=n,p=C(),a=w("input"),c=C(),y=Y(i[0]),f=Y(" deg"),x=C(),g=w("span"),v=w("label"),v.textContent=b,r=C(),h=w("input"),j=C(),T=Y(i[1]),V=C(),F=w("br"),B=C(),L=w("button"),L.textContent=X,this.h()},l(D){e=_(D,"P",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-198ugk3"&&(e.textContent=t),l=S(D),o=_(D,"SPAN",{});var I=k(o);s=_(I,"LABEL",{for:!0,"data-svelte-h":!0}),q(s)!=="svelte-lab87n"&&(s.textContent=n),p=S(I),a=_(I,"INPUT",{id:!0,type:!0,min:!0,max:!0}),c=S(I),y=U(I,i[0]),f=U(I," deg"),I.forEach(m),x=S(D),g=_(D,"SPAN",{});var H=k(g);v=_(H,"LABEL",{for:!0,"data-svelte-h":!0}),q(v)!=="svelte-1vc5oxa"&&(v.textContent=b),r=S(H),h=_(H,"INPUT",{id:!0,type:!0,min:!0,max:!0,step:!0}),j=S(H),T=U(H,i[1]),H.forEach(m),V=S(D),F=_(D,"BR",{}),B=S(D),L=_(D,"BUTTON",{"data-svelte-h":!0}),q(L)!=="svelte-8jpwxr"&&(L.textContent=X),this.h()},h(){W(e,"class","title svelte-g74uk9"),W(s,"for","angleSlider"),W(a,"id","angleSlider"),W(a,"type","range"),W(a,"min","0"),W(a,"max","360"),W(v,"for","magSlider"),W(h,"id","magSlider"),W(h,"type","range"),W(h,"min","0"),W(h,"max","1"),W(h,"step","0.01")},m(D,I){P(D,e,I),P(D,l,I),P(D,o,I),d(o,s),d(o,p),d(o,a),We(a,i[0]),d(o,c),d(o,y),d(o,f),P(D,x,I),P(D,g,I),d(g,v),d(g,r),d(g,h),We(h,i[1]),d(g,j),d(g,T),P(D,V,I),P(D,F,I),P(D,B,I),P(D,L,I),M||(R=[Q(a,"change",i[4]),Q(a,"input",i[4]),Q(h,"change",i[5]),Q(h,"input",i[5]),Q(L,"click",i[6])],M=!0)},p(D,[I]){I&1&&We(a,D[0]),I&1&&te(y,D[0]),I&2&&We(h,D[1]),I&2&&te(T,D[1])},i:De,o:De,d(D){D&&(m(e),m(l),m(o),m(x),m(g),m(V),m(F),m(B),m(L)),M=!1,rt(R)}}}function Ct(i,e,t){let{onShoot:l}=e,o=0,s=.5;const n=()=>{const y=new u(1,0);y.rotateDeg(o),y.multiplyScalar(s),l(y)};function p(){o=He(this.value),t(0,o)}function a(){s=He(this.value),t(1,s)}const c=()=>n();return i.$$set=y=>{"onShoot"in y&&t(3,l=y.onShoot)},[o,s,n,l,p,a,c]}class gt extends be{constructor(e){super(),we(this,e,Ct,kt,ge,{onShoot:3})}}const St=()=>{const i=[],e=E({geometry:{type:"line",vector:new u(15,0)},position:new u(0,0),fixed:!0});i.push(e);const t=E({geometry:{type:"line",vector:new u(0,100)},position:new u(0,0),fixed:!0});i.push(t);const l=E({geometry:{type:"line",vector:new u(0,100)},position:new u(15,0),fixed:!0});i.push(l);for(let o=0;o<10;o++){const s=E({geometry:{type:"sphere",r:.1},position:new u(Math.random()*15,Math.random()*15),velocity:new u(Math.random()*15,Math.random()*15)});i.push(s)}return{objects:i,sphere:i[3]}};function Et(i){let e,t,l,o,s,n=i[0]?"Disable":"Enable",p,a,c,y,f=i[1]?"Play":"Pause",x,g,v,b="Reset",r,h,j,T,V,F,B,L,X,M="Simulation time/Frame duration",R,D,I=i[3].t+"",H,J,z,G=i[3].frameTime+"",ne,Ee,O,A,oe="Sphere position",_e,de,xe=i[3].spherePos.x.toFixed(2)+"",$e,fe,he,Te=i[3].spherePos.y.toFixed(2)+"",Ie,Me,K,pe,qe="Sphere velocity",Ae,ke,Fe=i[3].sphereVel.x.toFixed(2)+"",Be,Re,Ce,Le=i[3].sphereVel.y.toFixed(2)+"",Ne,Z,Ye,ze;return t=new Ve({props:{sketch:i[5]}}),h=new gt({props:{onShoot:i[6]}}),T=new ht({props:{world:i[2]}}),{c(){e=w("div"),re(t.$$.fragment),l=C(),o=w("div"),s=w("button"),p=Y(n),a=Y(" pause on collision"),c=C(),y=w("button"),x=Y(f),g=C(),v=w("button"),v.textContent=b,r=C(),re(h.$$.fragment),j=C(),re(T.$$.fragment),V=C(),F=w("table"),B=w("tbody"),L=w("tr"),X=w("th"),X.textContent=M,R=C(),D=w("td"),H=Y(I),J=C(),z=w("td"),ne=Y(G),Ee=C(),O=w("tr"),A=w("th"),A.textContent=oe,_e=C(),de=w("td"),$e=Y(xe),fe=C(),he=w("td"),Ie=Y(Te),Me=C(),K=w("tr"),pe=w("th"),pe.textContent=qe,Ae=C(),ke=w("td"),Be=Y(Fe),Re=C(),Ce=w("td"),Ne=Y(Le),this.h()},l($){e=_($,"DIV",{class:!0});var N=k(e);ie(t.$$.fragment,N),N.forEach(m),l=S($),o=_($,"DIV",{});var ee=k(o);s=_(ee,"BUTTON",{});var Ue=k(s);p=U(Ue,n),a=U(Ue," pause on collision"),Ue.forEach(m),c=S(ee),y=_(ee,"BUTTON",{});var Qe=k(y);x=U(Qe,f),Qe.forEach(m),g=S(ee),v=_(ee,"BUTTON",{"data-svelte-h":!0}),q(v)!=="svelte-tlxueg"&&(v.textContent=b),ee.forEach(m),r=S($),ie(h.$$.fragment,$),j=S($),ie(T.$$.fragment,$),V=S($),F=_($,"TABLE",{});var Je=k(F);B=_(Je,"TBODY",{});var Se=k(B);L=_(Se,"TR",{});var ye=k(L);X=_(ye,"TH",{"data-svelte-h":!0}),q(X)!=="svelte-rirgm4"&&(X.textContent=M),R=S(ye),D=_(ye,"TD",{});var Ke=k(D);H=U(Ke,I),Ke.forEach(m),J=S(ye),z=_(ye,"TD",{});var Ze=k(z);ne=U(Ze,G),Ze.forEach(m),ye.forEach(m),Ee=S(Se),O=_(Se,"TR",{});var se=k(O);A=_(se,"TH",{"data-svelte-h":!0}),q(A)!=="svelte-1y1nif6"&&(A.textContent=oe),_e=S(se),de=_(se,"TD",{});var et=k(de);$e=U(et,xe),et.forEach(m),fe=S(se),he=_(se,"TD",{});var tt=k(he);Ie=U(tt,Te),tt.forEach(m),Me=S(se),se.forEach(m),K=_(Se,"TR",{});var ve=k(K);pe=_(ve,"TH",{"data-svelte-h":!0}),q(pe)!=="svelte-1uw1fs2"&&(pe.textContent=qe),Ae=S(ve),ke=_(ve,"TD",{});var nt=k(ke);Be=U(nt,Fe),nt.forEach(m),Re=S(ve),Ce=_(ve,"TD",{});var ot=k(Ce);Ne=U(ot,Le),ot.forEach(m),ve.forEach(m),Se.forEach(m),Je.forEach(m),this.h()},h(){W(e,"class","d-flex justify-content-center")},m($,N){P($,e,N),le(t,e,null),P($,l,N),P($,o,N),d(o,s),d(s,p),d(s,a),d(o,c),d(o,y),d(y,x),d(o,g),d(o,v),P($,r,N),le(h,$,N),P($,j,N),le(T,$,N),P($,V,N),P($,F,N),d(F,B),d(B,L),d(L,X),d(L,R),d(L,D),d(D,H),d(L,J),d(L,z),d(z,ne),d(B,Ee),d(B,O),d(O,A),d(O,_e),d(O,de),d(de,$e),d(O,fe),d(O,he),d(he,Ie),d(O,Me),d(B,K),d(K,pe),d(K,Ae),d(K,ke),d(ke,Be),d(K,Re),d(K,Ce),d(Ce,Ne),Z=!0,Ye||(ze=[Q(s,"click",i[7]),Q(y,"click",i[8]),Q(v,"click",i[4])],Ye=!0)},p($,[N]){(!Z||N&1)&&n!==(n=$[0]?"Disable":"Enable")&&te(p,n),(!Z||N&2)&&f!==(f=$[1]?"Play":"Pause")&&te(x,f);const ee={};N&4&&(ee.world=$[2]),T.$set(ee)},i($){Z||(ce(t.$$.fragment,$),ce(h.$$.fragment,$),ce(T.$$.fragment,$),Z=!0)},o($){ae(t.$$.fragment,$),ae(h.$$.fragment,$),ae(T.$$.fragment,$),Z=!1},d($){$&&(m(e),m(l),m(o),m(r),m(j),m(V),m(F)),ue(t),ue(h,$),ue(T,$),Ye=!1,rt(ze)}}}const ct=60;function jt(i,e,t){console.clear();let l=!1,o=!1,s={t:"0",frameTime:"0",spherePos:new u(0,0),sphereVel:new u(0,0),ballIsColliding:!1},n,p;const a=()=>{t(2,n=new Xe({dimensions:new u(15,15),reporter:()=>{},enableGravity:!0}));const r=St();p=r.sphere;for(const h of r.objects)n.addObject(h)},c=r=>typeof r=="number"?r*ct:r.clone().multiplyScalar(ct),y=r=>typeof r=="number"?r/ct:r.clone().divideScalar(ct);let f;const x=r=>{r.setup=()=>{f=r,a();const T=c(n.dimensions);r.createCanvas(T.x,T.y),r.background(0),r.fill(255),r.stroke(255),a()},r.draw=()=>{r.background(0),it(r)?p.fixed=!0:p.fixed=!1,o||n.step(),lt(r,n),j(r)};let h;r.mousePressed=()=>{Ge(r)&&(h=y(new u(r.mouseX,r.height-r.mouseY)),p.position.copy(h))},r.mouseReleased=()=>{if(!Ge(r)||!h)return;const T=y(new u(r.mouseX,r.height-r.mouseY)),V=h.subtract(T).multiplyScalar(3);h=void 0,p.velocity.copy(V)};const j=T=>{if(!h)return;T.stroke("blue"),T.strokeWeight(2);const V=c(h);T.line(V.x,T.height-V.y,T.mouseX,T.mouseY)}},g=r=>{r.multiplyScalar(1e4),n.applyForce(p,r)};return Oe(()=>{f==null||f.remove()}),[l,o,n,s,a,x,g,()=>t(0,l=!l),()=>t(1,o=!o)]}let Pt=class extends be{constructor(e){super(),we(this,e,jt,Et,ge,{})}};function Dt(i){let e,t,l,o,s=i[0][i[0].length-1]+"",n,p,a,c="New ball",y,f,x;return t=new Ve({props:{sketch:i[2]}}),{c(){e=w("div"),re(t.$$.fragment),l=C(),o=w("p"),n=Y(s),p=C(),a=w("button"),a.textContent=c,this.h()},l(g){e=_(g,"DIV",{class:!0});var v=k(e);ie(t.$$.fragment,v),v.forEach(m),l=S(g),o=_(g,"P",{});var b=k(o);n=U(b,s),b.forEach(m),p=S(g),a=_(g,"BUTTON",{"data-svelte-h":!0}),q(a)!=="svelte-1jwbm46"&&(a.textContent=c),this.h()},h(){W(e,"class","d-flex justify-content-center")},m(g,v){P(g,e,v),le(t,e,null),P(g,l,v),P(g,o,v),d(o,n),P(g,p,v),P(g,a,v),y=!0,f||(x=Q(a,"click",i[1]),f=!0)},p(g,[v]){(!y||v&1)&&s!==(s=g[0][g[0].length-1]+"")&&te(n,s)},i(g){y||(ce(t.$$.fragment,g),y=!0)},o(g){ae(t.$$.fragment,g),y=!1},d(g){g&&(m(e),m(l),m(o),m(p),m(a)),ue(t),f=!1,x()}}}function Ot(i,e,t){console.clear();let l=[];const o=c=>{const y=c.objects[c.objects.length-1],f=y.position.clone().toFixed(2),x=y.velocity.clone().toFixed(2);l.push(`${c.t.toFixed(2)} - pos: ${f} - vel: ${x}`),l.length>50&&l.shift(),t(0,l)},s=new Xe({reporter:o,enableGravity:!0}),n=()=>{for(;s.objects.length;)s.objects.pop();const c=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,0),fixed:!0});s.addObject(c);for(let y=0;y<1;y++){const f=E({geometry:{type:"sphere",r:5},position:new u(20,50),velocity:new u(Math.random()*5-2.5,Math.random()*20)});s.addObject(f)}};let p;const a=c=>{c.setup=()=>{p=c,c.createCanvas(900,600),c.background(0),c.fill(255),c.stroke(255),n()},c.draw=()=>{c.background(0),s.step();for(const y of s.objects){const f=c.map(y.position.x,0,s.dimensions.x,0,c.width),x=c.map(y.position.y,0,s.dimensions.y,c.height,0);if(y.geometry.type==="sphere"&&(c.strokeWeight(y.geometry.r*2),c.point(f,x)),y.geometry.type==="line"){const g=f+c.map(y.geometry.vector.x,0,s.dimensions.x,0,c.width),v=x+c.map(y.geometry.vector.y,0,s.dimensions.y,0,c.height);c.strokeWeight(2),c.line(f,x,g,v)}}}};return Oe(()=>{p==null||p.remove()}),[l,n,a]}class Vt extends be{constructor(e){super(),we(this,e,Ot,Dt,ge,{})}}function It(i){let e,t,l,o,s=i[0][i[0].length-1]+"",n,p,a,c="New ball",y,f,x;return t=new Ve({props:{sketch:i[2]}}),{c(){e=w("div"),re(t.$$.fragment),l=C(),o=w("p"),n=Y(s),p=C(),a=w("button"),a.textContent=c,this.h()},l(g){e=_(g,"DIV",{class:!0});var v=k(e);ie(t.$$.fragment,v),v.forEach(m),l=S(g),o=_(g,"P",{});var b=k(o);n=U(b,s),b.forEach(m),p=S(g),a=_(g,"BUTTON",{"data-svelte-h":!0}),q(a)!=="svelte-1jwbm46"&&(a.textContent=c),this.h()},h(){W(e,"class","d-flex justify-content-center")},m(g,v){P(g,e,v),le(t,e,null),P(g,l,v),P(g,o,v),d(o,n),P(g,p,v),P(g,a,v),y=!0,f||(x=Q(a,"click",i[1]),f=!0)},p(g,[v]){(!y||v&1)&&s!==(s=g[0][g[0].length-1]+"")&&te(n,s)},i(g){y||(ce(t.$$.fragment,g),y=!0)},o(g){ae(t.$$.fragment,g),y=!1},d(g){g&&(m(e),m(l),m(o),m(p),m(a)),ue(t),f=!1,x()}}}const at=6;function Ft(i,e,t){console.clear();let l=[];const o=f=>{const x=f.objects[f.objects.length-1],g=x.position.clone().toFixed(2),v=x.velocity.clone().toFixed(2);l.push(`${f.t.toFixed(2)} - pos: ${g} - vel: ${v}`),l.length>50&&l.shift(),t(0,l)},s=new Xe({reporter:o,enableGravity:!0});let n,p;const a=()=>{for(;s.objects.length;)s.objects.pop();p=E({geometry:{type:"line",vector:new u(40,40)},position:new u(30,30),fixed:!0}),s.addObject(p),n=E({geometry:{type:"sphere",r:10},position:new u(20,50),velocity:new u(2.5,2.5),fixed:!0}),s.addObject(n)};let c;const y=f=>{const x=b=>typeof b=="number"?b*at:b.clone().multiplyScalar(at),g=b=>typeof b=="number"?b/at:b.clone().divideScalar(at);f.setup=()=>{c=f;const b=x(s.dimensions);f.createCanvas(b.x,b.y),f.background(0),f.fill(255),f.stroke(255),a()};let v;f.draw=()=>{if(f.background(0),s.step(),f.mouseIsPressed){const b=g(new u(f.mouseX,f.height-f.mouseY));if(v||(b.distance(n.position)<2?v="sphere":b.distance(p.position)<2?v="wallstart":b.distance(p.geometry.vector.clone().add(p.position))<2&&(v="wallend")),v==="sphere"&&n.position.copy(b),v==="wallstart"&&p.position.copy(b),v==="wallend"){const r=b.clone().subtract(p.position);p.geometry.vector.copy(r)}}else v=void 0;for(const b of s.objects.sort((r,h)=>r.geometry.type<h.geometry.type?1:-1)){f.stroke(n.data.isColliding?"red":"white");const r=f.map(b.position.x,0,s.dimensions.x,0,f.width),h=f.map(b.position.y,0,s.dimensions.y,f.height,0);if(b.geometry.type==="sphere"){const j=x(b.geometry.r*2);f.strokeWeight(j),f.point(r,h)}if(b.geometry.type==="line"){const j=r+f.map(b.geometry.vector.x,0,s.dimensions.x,0,f.width),T=h-f.map(b.geometry.vector.y,0,s.dimensions.y,0,f.height);f.stroke("blue"),f.strokeWeight(2),f.line(r,h,j,T)}}}};return Oe(()=>{c==null||c.remove()}),[l,a,y]}class Bt extends be{constructor(e){super(),we(this,e,Ft,It,ge,{})}}function Lt(i){let e,t,l;return t=new Ve({props:{sketch:i[0]}}),{c(){e=w("div"),re(t.$$.fragment),this.h()},l(o){e=_(o,"DIV",{class:!0});var s=k(e);ie(t.$$.fragment,s),s.forEach(m),this.h()},h(){W(e,"class","d-flex justify-content-center")},m(o,s){P(o,e,s),le(t,e,null),l=!0},p:De,i(o){l||(ce(t.$$.fragment,o),l=!0)},o(o){ae(t.$$.fragment,o),l=!1},d(o){o&&m(e),ue(t)}}}const ut=6;function Nt(i){console.clear();const e=new Xe({reporter:()=>{},enableGravity:!0});let t;const l=()=>{for(;e.objects.length;)e.objects.pop();t=E({geometry:{type:"sphere",r:5},position:new u(20,50),velocity:new u(Math.random()*5-2.5,Math.random()*20)}),e.addObject(t);const a=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,2),fixed:!0});e.addObject(a);const c=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,98),fixed:!0});e.addObject(c);const y=E({geometry:{type:"line",vector:new u(0,100)},position:new u(2,0),fixed:!0});e.addObject(y);const f=E({geometry:{type:"line",vector:new u(0,100)},position:new u(98,0),fixed:!0});e.addObject(f);const x=E({geometry:{type:"line",vector:new u(50,50)},position:new u(20,10),fixed:!0});e.addObject(x)},o=a=>typeof a=="number"?a*ut:a.clone().multiplyScalar(ut),s=a=>typeof a=="number"?a/ut:a.clone().divideScalar(ut);let n;const p=a=>{a.setup=()=>{n=a;const y=o(e.dimensions);a.createCanvas(y.x,y.y),a.background(0),a.fill(255),a.stroke(255),l()},a.draw=()=>{if(a.background(0),a.mouseIsPressed){t.fixed=!0;const y=s(new u(a.mouseX,a.height-a.mouseY));t.position.copy(y)}else t.fixed=!1;e.step(),lt(a,e)};let c;a.mousePressed=()=>{c=s(new u(a.mouseX,a.height-a.mouseY))},a.mouseReleased=()=>{const y=s(new u(a.mouseX,a.height-a.mouseY)),f=c.subtract(y);t.position.copy(y),t.velocity.copy(f)}};return Oe(()=>{n==null||n.remove()}),[p]}class Wt extends be{constructor(e){super(),we(this,e,Nt,Lt,ge,{})}}function Mt(i){let e,t,l,o,s,n,p,a="Gravity",c,y,f,x="Toggle",g,v,b;return t=new Ve({props:{sketch:i[1]}}),{c(){e=w("div"),re(t.$$.fragment),l=C(),o=w("table"),s=w("tbody"),n=w("tr"),p=w("th"),p.textContent=a,c=C(),y=w("td"),f=w("button"),f.textContent=x,this.h()},l(r){e=_(r,"DIV",{class:!0});var h=k(e);ie(t.$$.fragment,h),h.forEach(m),l=S(r),o=_(r,"TABLE",{});var j=k(o);s=_(j,"TBODY",{});var T=k(s);n=_(T,"TR",{});var V=k(n);p=_(V,"TH",{"data-svelte-h":!0}),q(p)!=="svelte-vy75us"&&(p.textContent=a),c=S(V),y=_(V,"TD",{});var F=k(y);f=_(F,"BUTTON",{"data-svelte-h":!0}),q(f)!=="svelte-18lc94l"&&(f.textContent=x),F.forEach(m),V.forEach(m),T.forEach(m),j.forEach(m),this.h()},h(){W(e,"class","d-flex justify-content-center")},m(r,h){P(r,e,h),le(t,e,null),P(r,l,h),P(r,o,h),d(o,s),d(s,n),d(n,p),d(n,c),d(n,y),d(y,f),g=!0,v||(b=Q(f,"click",i[2]),v=!0)},p:De,i(r){g||(ce(t.$$.fragment,r),g=!0)},o(r){ae(t.$$.fragment,r),g=!1},d(r){r&&(m(e),m(l),m(o)),ue(t),v=!1,b()}}}const dt=6;function At(i){console.clear();const e=new Xe({reporter:()=>{},enableGravity:!0});let t;const l=()=>{for(;e.objects.length;)e.objects.pop();const c=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,0),fixed:!0});e.addObject(c);const y=E({geometry:{type:"line",vector:new u(100,0)},position:new u(0,100),fixed:!0});e.addObject(y);const f=E({geometry:{type:"line",vector:new u(0,100)},position:new u(0,0),fixed:!0});e.addObject(f);const x=E({geometry:{type:"line",vector:new u(0,100)},position:new u(100,0),fixed:!0});e.addObject(x);const g=E({geometry:{type:"line",vector:new u(50,50)},position:new u(20,10),fixed:!0});e.addObject(g),t=E({geometry:{type:"sphere",r:2},position:new u(20,50),velocity:new u(Math.random()*5-2.5,Math.random()*20)}),e.addObject(t)},o=c=>typeof c=="number"?c*dt:c.clone().multiplyScalar(dt),s=c=>typeof c=="number"?c/dt:c.clone().divideScalar(dt);let n;const p=c=>{c.setup=()=>{n=c;const f=o(e.dimensions);c.createCanvas(f.x,f.y),c.background(0),c.fill(255),c.stroke(255),l()},c.draw=()=>{if(c.background(0),it(c)){t.fixed=!0;const f=s(new u(c.mouseX,c.height-c.mouseY));t.position.copy(f)}else t.fixed=!1;e.step(),lt(c,e)};let y;c.mousePressed=()=>{Ge(c)&&(y=s(new u(c.mouseX,c.height-c.mouseY)))},c.mouseReleased=()=>{if(!Ge(c))return;const f=s(new u(c.mouseX,c.height-c.mouseY)),x=y.subtract(f);t.position.copy(f),t.velocity.copy(x)}};return Oe(()=>{n==null||n.remove()}),[e,p,()=>e.toggleGravity()]}class Rt extends be{constructor(e){super(),we(this,e,At,Mt,ge,{})}}const Yt=()=>{const i=[],e=E({geometry:{type:"line",vector:new u(15,0)},position:new u(0,0),fixed:!0});i.push(e);const t=E({geometry:{type:"line",vector:new u(0,100)},position:new u(0,0),fixed:!0});i.push(t);const l=E({geometry:{type:"line",vector:new u(0,100)},position:new u(15,0),fixed:!0});i.push(l);const o=E({geometry:{type:"line",vector:new u(3,-3)},position:new u(3.5,8),fixed:!0});i.push(o);const s=E({geometry:{type:"line",vector:new u(3,3)},position:new u(3.5,5),fixed:!0});i.push(s);const n=E({geometry:{type:"line",vector:new u(6,0)},position:new u(2,2),fixed:!0});i.push(n);const p=E({geometry:{type:"line",vector:new u(4,0)},position:new u(3,2.5),fixed:!0});i.push(p);const a=E({geometry:{type:"line",vector:new u(2,0)},position:new u(4,3),fixed:!0});i.push(a);const c=E({geometry:{type:"line",vector:new u(.6,0)},position:new u(4.7,3.5),fixed:!0});i.push(c);const y=E({geometry:{type:"line",vector:new u(1,0)},position:new u(10,10.1),fixed:!0});i.push(y);const f=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(11,10),fixed:!0});i.push(f);const x=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(11.5,10),fixed:!0});i.push(x);const g=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(12,10),fixed:!0});i.push(g);const v=E({geometry:{type:"line",vector:new u(1,0)},position:new u(12,10.1),fixed:!0});i.push(v);for(let r=.2;r<.5;r+=.1)for(let h=0;h<10;h++){const j=E({geometry:{type:"line",vector:new u(0,3)},position:new u(9+h*r,1),fixed:!0});i.push(j)}const b=E({geometry:{type:"sphere",r:.1},position:new u(5,10),velocity:new u(0,0)});return i.push(b),{objects:i,sphere:b}};function Ut(i){let e,t,l,o,s,n=i[0]?"Disable":"Enable",p,a,c,y,f=i[1]?"Play":"Pause",x,g,v,b="Reset",r,h,j,T,V,F,B,L,X,M="Simulation time/Frame duration",R,D,I=i[2].t+"",H,J,z,G=i[2].frameTime+"",ne,Ee,O,A,oe="Sphere position",_e,de,xe=i[2].spherePos.x.toFixed(2)+"",$e,fe,he,Te=i[2].spherePos.y.toFixed(2)+"",Ie,Me,K,pe,qe="Sphere velocity",Ae,ke,Fe=i[2].sphereVel.x.toFixed(2)+"",Be,Re,Ce,Le=i[2].sphereVel.y.toFixed(2)+"",Ne,Z,Ye,ze;return t=new Ve({props:{sketch:i[5]}}),h=new gt({props:{onShoot:i[6]}}),T=new ht({props:{world:i[3]}}),{c(){e=w("div"),re(t.$$.fragment),l=C(),o=w("div"),s=w("button"),p=Y(n),a=Y(" pause on collision"),c=C(),y=w("button"),x=Y(f),g=C(),v=w("button"),v.textContent=b,r=C(),re(h.$$.fragment),j=C(),re(T.$$.fragment),V=C(),F=w("table"),B=w("tbody"),L=w("tr"),X=w("th"),X.textContent=M,R=C(),D=w("td"),H=Y(I),J=C(),z=w("td"),ne=Y(G),Ee=C(),O=w("tr"),A=w("th"),A.textContent=oe,_e=C(),de=w("td"),$e=Y(xe),fe=C(),he=w("td"),Ie=Y(Te),Me=C(),K=w("tr"),pe=w("th"),pe.textContent=qe,Ae=C(),ke=w("td"),Be=Y(Fe),Re=C(),Ce=w("td"),Ne=Y(Le),this.h()},l($){e=_($,"DIV",{class:!0});var N=k(e);ie(t.$$.fragment,N),N.forEach(m),l=S($),o=_($,"DIV",{});var ee=k(o);s=_(ee,"BUTTON",{});var Ue=k(s);p=U(Ue,n),a=U(Ue," pause on collision"),Ue.forEach(m),c=S(ee),y=_(ee,"BUTTON",{});var Qe=k(y);x=U(Qe,f),Qe.forEach(m),g=S(ee),v=_(ee,"BUTTON",{"data-svelte-h":!0}),q(v)!=="svelte-tlxueg"&&(v.textContent=b),ee.forEach(m),r=S($),ie(h.$$.fragment,$),j=S($),ie(T.$$.fragment,$),V=S($),F=_($,"TABLE",{});var Je=k(F);B=_(Je,"TBODY",{});var Se=k(B);L=_(Se,"TR",{});var ye=k(L);X=_(ye,"TH",{"data-svelte-h":!0}),q(X)!=="svelte-rirgm4"&&(X.textContent=M),R=S(ye),D=_(ye,"TD",{});var Ke=k(D);H=U(Ke,I),Ke.forEach(m),J=S(ye),z=_(ye,"TD",{});var Ze=k(z);ne=U(Ze,G),Ze.forEach(m),ye.forEach(m),Ee=S(Se),O=_(Se,"TR",{});var se=k(O);A=_(se,"TH",{"data-svelte-h":!0}),q(A)!=="svelte-1y1nif6"&&(A.textContent=oe),_e=S(se),de=_(se,"TD",{});var et=k(de);$e=U(et,xe),et.forEach(m),fe=S(se),he=_(se,"TD",{});var tt=k(he);Ie=U(tt,Te),tt.forEach(m),Me=S(se),se.forEach(m),K=_(Se,"TR",{});var ve=k(K);pe=_(ve,"TH",{"data-svelte-h":!0}),q(pe)!=="svelte-1uw1fs2"&&(pe.textContent=qe),Ae=S(ve),ke=_(ve,"TD",{});var nt=k(ke);Be=U(nt,Fe),nt.forEach(m),Re=S(ve),Ce=_(ve,"TD",{});var ot=k(Ce);Ne=U(ot,Le),ot.forEach(m),ve.forEach(m),Se.forEach(m),Je.forEach(m),this.h()},h(){W(e,"class","d-flex justify-content-center")},m($,N){P($,e,N),le(t,e,null),P($,l,N),P($,o,N),d(o,s),d(s,p),d(s,a),d(o,c),d(o,y),d(y,x),d(o,g),d(o,v),P($,r,N),le(h,$,N),P($,j,N),le(T,$,N),P($,V,N),P($,F,N),d(F,B),d(B,L),d(L,X),d(L,R),d(L,D),d(D,H),d(L,J),d(L,z),d(z,ne),d(B,Ee),d(B,O),d(O,A),d(O,_e),d(O,de),d(de,$e),d(O,fe),d(O,he),d(he,Ie),d(O,Me),d(B,K),d(K,pe),d(K,Ae),d(K,ke),d(ke,Be),d(K,Re),d(K,Ce),d(Ce,Ne),Z=!0,Ye||(ze=[Q(s,"click",i[7]),Q(y,"click",i[8]),Q(v,"click",i[4])],Ye=!0)},p($,[N]){(!Z||N&1)&&n!==(n=$[0]?"Disable":"Enable")&&te(p,n),(!Z||N&2)&&f!==(f=$[1]?"Play":"Pause")&&te(x,f);const ee={};N&8&&(ee.world=$[3]),T.$set(ee),(!Z||N&4)&&I!==(I=$[2].t+"")&&te(H,I),(!Z||N&4)&&G!==(G=$[2].frameTime+"")&&te(ne,G),(!Z||N&4)&&xe!==(xe=$[2].spherePos.x.toFixed(2)+"")&&te($e,xe),(!Z||N&4)&&Te!==(Te=$[2].spherePos.y.toFixed(2)+"")&&te(Ie,Te),(!Z||N&4)&&Fe!==(Fe=$[2].sphereVel.x.toFixed(2)+"")&&te(Be,Fe),(!Z||N&4)&&Le!==(Le=$[2].sphereVel.y.toFixed(2)+"")&&te(Ne,Le)},i($){Z||(ce(t.$$.fragment,$),ce(h.$$.fragment,$),ce(T.$$.fragment,$),Z=!0)},o($){ae(t.$$.fragment,$),ae(h.$$.fragment,$),ae(T.$$.fragment,$),Z=!1},d($){$&&(m(e),m(l),m(o),m(r),m(j),m(V),m(F)),ue(t),ue(h,$),ue(T,$),Ye=!1,rt(ze)}}}const ft=60;function Xt(i,e,t){console.clear();let l=!1,o=!1,s={t:"0",frameTime:"0",spherePos:new u(0,0),sphereVel:new u(0,0),ballIsColliding:!1},n,p;const a=()=>{t(3,n=new Xe({dimensions:new u(15,15),reporter:h=>{var j;t(2,s.t=(j=h==null?void 0:h.t)==null?void 0:j.toFixed(1),s),s.spherePos.copy(p.position).unfloat(),s.sphereVel.copy(p.velocity).unfloat(),t(2,s.frameTime=h.frameTime.toFixed(2),s),t(2,s),t(2,s.ballIsColliding=p.data.isColliding,s),l&&p.data.isColliding&&!o&&t(1,o=!0)},enableGravity:!0}));const r=Yt();p=r.sphere;for(const h of r.objects)n.addObject(h)},c=r=>typeof r=="number"?r*ft:r.clone().multiplyScalar(ft),y=r=>typeof r=="number"?r/ft:r.clone().divideScalar(ft);let f;const x=r=>{r.setup=()=>{f=r,a();const T=c(n.dimensions);r.createCanvas(T.x,T.y),r.background(0),r.fill(255),r.stroke(255),a()},r.draw=()=>{r.background(0),it(r)?p.fixed=!0:p.fixed=!1,o||n.step(),lt(r,n),j(r)};let h;r.mousePressed=()=>{Ge(r)&&(h=y(new u(r.mouseX,r.height-r.mouseY)),p.position.copy(h))},r.mouseReleased=()=>{if(!Ge(r)||!h)return;const T=y(new u(r.mouseX,r.height-r.mouseY)),V=h.subtract(T).multiplyScalar(3);h=void 0,p.velocity.copy(V)};const j=T=>{if(!h)return;T.stroke("blue"),T.strokeWeight(2);const V=c(h);T.line(V.x,T.height-V.y,T.mouseX,T.mouseY)}},g=r=>{r.multiplyScalar(1e4),n.applyForce(p,r)};return Oe(()=>{f==null||f.remove()}),[l,o,s,n,a,x,g,()=>t(0,l=!l),()=>t(1,o=!o)]}let Ht=class extends be{constructor(e){super(),we(this,e,Xt,Ut,ge,{})}};const Gt=()=>{const i=[],e=E({geometry:{type:"line",vector:new u(15,0)},position:new u(0,0),fixed:!0});i.push(e);const t=E({geometry:{type:"line",vector:new u(0,100)},position:new u(0,0),fixed:!0});i.push(t);const l=E({geometry:{type:"line",vector:new u(0,100)},position:new u(15,0),fixed:!0});i.push(l);const o=E({geometry:{type:"line",vector:new u(3,-3)},position:new u(3.5,8),fixed:!0});i.push(o);const s=E({geometry:{type:"line",vector:new u(3,3)},position:new u(3.5,5),fixed:!0});i.push(s);const n=E({geometry:{type:"line",vector:new u(6,0)},position:new u(2,2),fixed:!0});i.push(n);const p=E({geometry:{type:"line",vector:new u(4,0)},position:new u(3,2.5),fixed:!0});i.push(p);const a=E({geometry:{type:"line",vector:new u(2,0)},position:new u(4,3),fixed:!0});i.push(a);const c=E({geometry:{type:"line",vector:new u(.6,0)},position:new u(4.7,3.5),fixed:!0});i.push(c);const y=E({geometry:{type:"line",vector:new u(1,0)},position:new u(10,10.1),fixed:!0});i.push(y);const f=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(11,10),fixed:!0});i.push(f);const x=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(11.5,10),fixed:!0});i.push(x);const g=E({geometry:{type:"line",vector:new u(0,-4)},position:new u(12,10),fixed:!0});i.push(g);const v=E({geometry:{type:"line",vector:new u(1,0)},position:new u(12,10.1),fixed:!0});i.push(v);for(let b=.2;b<.5;b+=.1)for(let r=0;r<10;r++){const h=E({geometry:{type:"line",vector:new u(0,3)},position:new u(9+r*b,1),fixed:!0});i.push(h)}return{objects:i}};function qt(i){let e,t,l,o,s,n=i[0]?"Disable":"Enable",p,a,c,y,f=i[1]?"Play":"Pause",x,g,v,b="Reset",r,h,j,T,V,F,B,L="Simulation time/Frame duration",X,M,R=i[2].t+"",D,I,H,J=i[2].frameTime+"",z,G,ne,Ee;return t=new Ve({props:{sketch:i[5]}}),h=new ht({props:{world:i[3]}}),{c(){e=w("div"),re(t.$$.fragment),l=C(),o=w("div"),s=w("button"),p=Y(n),a=Y(" pause on collision"),c=C(),y=w("button"),x=Y(f),g=C(),v=w("button"),v.textContent=b,r=C(),re(h.$$.fragment),j=C(),T=w("table"),V=w("tbody"),F=w("tr"),B=w("th"),B.textContent=L,X=C(),M=w("td"),D=Y(R),I=C(),H=w("td"),z=Y(J),this.h()},l(O){e=_(O,"DIV",{class:!0});var A=k(e);ie(t.$$.fragment,A),A.forEach(m),l=S(O),o=_(O,"DIV",{});var oe=k(o);s=_(oe,"BUTTON",{});var _e=k(s);p=U(_e,n),a=U(_e," pause on collision"),_e.forEach(m),c=S(oe),y=_(oe,"BUTTON",{});var de=k(y);x=U(de,f),de.forEach(m),g=S(oe),v=_(oe,"BUTTON",{"data-svelte-h":!0}),q(v)!=="svelte-tlxueg"&&(v.textContent=b),oe.forEach(m),r=S(O),ie(h.$$.fragment,O),j=S(O),T=_(O,"TABLE",{});var xe=k(T);V=_(xe,"TBODY",{});var $e=k(V);F=_($e,"TR",{});var fe=k(F);B=_(fe,"TH",{"data-svelte-h":!0}),q(B)!=="svelte-rirgm4"&&(B.textContent=L),X=S(fe),M=_(fe,"TD",{});var he=k(M);D=U(he,R),he.forEach(m),I=S(fe),H=_(fe,"TD",{});var Te=k(H);z=U(Te,J),Te.forEach(m),fe.forEach(m),$e.forEach(m),xe.forEach(m),this.h()},h(){W(e,"class","d-flex justify-content-center")},m(O,A){P(O,e,A),le(t,e,null),P(O,l,A),P(O,o,A),d(o,s),d(s,p),d(s,a),d(o,c),d(o,y),d(y,x),d(o,g),d(o,v),P(O,r,A),le(h,O,A),P(O,j,A),P(O,T,A),d(T,V),d(V,F),d(F,B),d(F,X),d(F,M),d(M,D),d(F,I),d(F,H),d(H,z),G=!0,ne||(Ee=[Q(s,"click",i[6]),Q(y,"click",i[7]),Q(v,"click",i[4])],ne=!0)},p(O,[A]){(!G||A&1)&&n!==(n=O[0]?"Disable":"Enable")&&te(p,n),(!G||A&2)&&f!==(f=O[1]?"Play":"Pause")&&te(x,f);const oe={};A&8&&(oe.world=O[3]),h.$set(oe),(!G||A&4)&&R!==(R=O[2].t+"")&&te(D,R),(!G||A&4)&&J!==(J=O[2].frameTime+"")&&te(z,J)},i(O){G||(ce(t.$$.fragment,O),ce(h.$$.fragment,O),G=!0)},o(O){ae(t.$$.fragment,O),ae(h.$$.fragment,O),G=!1},d(O){O&&(m(e),m(l),m(o),m(r),m(j),m(T)),ue(t),ue(h,O),ne=!1,rt(Ee)}}}const yt=60;function zt(i,e,t){console.clear();let l=!1,o=!1,s={t:"0",frameTime:"0"},n;const p=()=>{clearInterval(f),f=setInterval(a,100),t(3,n=new Xe({dimensions:new u(15,15),reporter:r=>{var h;t(2,s.t=(h=r==null?void 0:r.t)==null?void 0:h.toFixed(1),s),t(2,s.frameTime=r.frameTime.toFixed(2),s),t(2,s)},enableGravity:!0}));const b=Gt();for(const r of b.objects)n.addObject(r)},a=()=>{console.log("add ball");const b=Math.random()*n.dimensions.x,r=Math.random()*n.dimensions.y,h=-5+Math.random()*10,j=-5+Math.random()*10,T=E({geometry:{type:"sphere",r:.1},position:new u(b,r),velocity:new u(h,j)});n.addObject(T)},c=b=>typeof b=="number"?b*yt:b.clone().multiplyScalar(yt);let y,f;const x=b=>{b.setup=()=>{y=b,p();const r=c(n.dimensions);b.createCanvas(r.x,r.y),b.background(0),b.fill(255),b.stroke(255),p()},b.draw=()=>{b.background(0),o||n.step(),lt(b,n)}};return Oe(()=>{y==null||y.remove(),clearInterval(f)}),[l,o,s,n,p,x,()=>t(0,l=!l),()=>t(1,o=!o)]}class Qt extends be{constructor(e){super(),we(this,e,zt,qt,ge,{})}}function Jt(i){let e,t,l;return t=new Ve({props:{sketch:i[0]}}),{c(){e=w("div"),re(t.$$.fragment),this.h()},l(o){e=_(o,"DIV",{class:!0});var s=k(e);ie(t.$$.fragment,s),s.forEach(m),this.h()},h(){W(e,"class","d-flex justify-content-center")},m(o,s){P(o,e,s),le(t,e,null),l=!0},p:De,i(o){l||(ce(t.$$.fragment,o),l=!0)},o(o){ae(t.$$.fragment,o),l=!1},d(o){o&&m(e),ue(t)}}}const Pe=6;function Kt(i){console.clear();let e;const t=E({geometry:{type:"sphere",r:10},position:new u(30,50),velocity:new u(15,15)}),l=E({geometry:{type:"line",vector:new u(80,0)},position:new u(10,70)}),o=new xt,s=n=>{const p=new u(100,100),a=me(p,Pe);n.setup=()=>{e=n,n.createCanvas(a.x,a.y),n.noFill()};let c;n.draw=()=>{if(n.background(0),!it(n))c=void 0;else{const h=vt(new u(n.mouseX,n.height-n.mouseY),Pe);if(c||(h.distance(t.position)<=t.geometry.r?c="sphere":h.distance(t.position.clone().add(t.velocity))<=6?c="spherevelocity":h.distance(l.position)<=6?c="linestart":h.distance(l.geometry.vector.clone().add(l.position))<=6&&(c="lineend")),c==="sphere")t.position.copy(h);else if(c==="spherevelocity"){const j=h.clone().subtract(t.position);t.velocity.copy(j)}else if(c==="linestart")l.position.copy(h);else if(c==="lineend"){const j=h.clone().subtract(l.position);l.geometry.vector.copy(j)}}const{intersection:y,bouncedVelocity:f}=o.apply(l,t);for(let h=0;h<10;h++){const{positionCorrection:j}=o.apply(l,t);j&&(t.position.add(j.multiplyScalar(.5)),l.position.subtract(j.multiplyScalar(.5)))}n.stroke(255),n.noFill();const x=me(t.position,Pe);n.circle(x.x,n.height-x.y,2*t.geometry.r*Pe),n.stroke(255);const g=me(t.velocity,Pe);n.line(x.x,n.height-x.y,x.x+g.x,n.height-(x.y+g.y)),n.stroke(255);const{x:v,y:b}=me(l.position,Pe),r=me(l.geometry.vector,Pe);if(n.line(v,n.height-b,v+r.x,n.height-(b+r.y)),y){n.stroke("#54d7ff"),n.fill("#54d7ff");const h=me(y,Pe);n.circle(h.x,n.height-h.y,5)}if(f){n.stroke("green"),n.fill("green");const h=me(f,Pe);n.line(x.x,n.height-x.y,x.x+h.x,n.height-(x.y+h.y))}}};return Oe(()=>{e==null||e.remove()}),[s]}class Zt extends be{constructor(e){super(),we(this,e,Kt,Jt,ge,{})}}class en{constructor(){st(this,"apply",(e,t)=>({...this.pullApart(e,t),...this.bounce(e,t)}));st(this,"intersectionPoint",(e,t)=>{if(e.geometry.type!=="sphere"||t.geometry.type!=="sphere")return;const l=e.geometry.r,o=t.geometry.r,s=e.position.distanceSq(t.position),n=(l+o)**2;if(s>n)return;const p=t.position.clone().subtract(e.position),a=l/(l+o);return p.multiplyScalar(a),e.position.clone().add(p)});st(this,"bounce",(e,t)=>{if(e.geometry.type!=="sphere"||t.geometry.type!=="sphere")throw new Error("invalid geometry");const l=this.intersectionPoint(e,t);if(!l)return;const o=e.restitution*t.restitution,s=e.friction*t.friction,n=t.position.x,p=t.position.y,a=t.position.x+t.velocity.x,c=t.position.y+t.velocity.y,y=e.position.x,f=e.position.y,x=e.position.x+e.velocity.x,g=e.position.y+e.velocity.y;let v=(c-p)/(a-n),b=(g-f)/(x-y);if(v=[1/0,-1/0].includes(v)?360:v,b=[1/0,-1/0].includes(b)?360:b,(v-b)/(1+v*b)===0){const z=o,G=s;return{bouncedVelocity:e.velocity.multiplyScalar(1-G).multiplyScalar(-z),intersection:l}}const h=a-n,j=c-p,T=new u(-j,h),V=new u(j,-h),F=l.clone().add(T),B=l.clone().add(V);let L;e.position.distanceSq(F)<e.position.distanceSq(B)?L=T:L=V;const X=L.clone().normalize(),M=e.velocity.clone(),R=X.multiplyScalar(M.dot(X)),D=M.subtract(R),I=o,H=s;return{bouncedVelocity:D.multiplyScalar(1-H).subtract(R.multiplyScalar(I)),intersection:l}});st(this,"pullApart",(e,t)=>{if(e.geometry.type!=="sphere"||t.geometry.type!=="sphere")throw new Error("invalid geometry");const l=this.intersectionPoint(e,t);if(!l)return;const o=e.position.clone().subtract(l),s=o.length(),n=e.geometry.r-s;return o.normalize().multiplyScalar(n),{positionCorrection:o}})}}function tn(i){let e,t,l;return t=new Ve({props:{sketch:i[0]}}),{c(){e=w("div"),re(t.$$.fragment),this.h()},l(o){e=_(o,"DIV",{class:!0});var s=k(e);ie(t.$$.fragment,s),s.forEach(m),this.h()},h(){W(e,"class","d-flex justify-content-center")},m(o,s){P(o,e,s),le(t,e,null),l=!0},p:De,i(o){l||(ce(t.$$.fragment,o),l=!0)},o(o){ae(t.$$.fragment,o),l=!1},d(o){o&&m(e),ue(t)}}}const je=6;function nn(i){console.clear();let e;const t=E({geometry:{type:"sphere",r:10},position:new u(30,50),velocity:new u(15,15)}),l=E({geometry:{type:"sphere",r:10},position:new u(70,50),velocity:new u(0,45)}),o=new en,s=n=>{const p=new u(100,100),a=me(p,je);n.setup=()=>{e=n,n.createCanvas(a.x,a.y),n.noFill()};let c;n.draw=()=>{if(n.background(0),!it(n))c=void 0;else{const r=vt(new u(n.mouseX,n.height-n.mouseY),je);if(c||(r.distance(t.position)<=t.geometry.r?c="sphere":r.distance(t.position.clone().add(t.velocity))<=6?c="spherevelocity":r.distance(l.position)<=l.geometry.r?c="sphere2":r.distance(l.position.clone().add(l.velocity))<=6&&(c="sphere2velocity")),c==="sphere")t.position.copy(r);else if(c==="spherevelocity"){const h=r.clone().subtract(t.position);t.velocity.copy(h)}else if(c==="sphere2")l.position.copy(r);else if(c==="sphere2velocity"){const h=r.clone().subtract(l.position);l.velocity.copy(h)}}const{intersection:y,bouncedVelocity:f}=o.apply(t,l);for(let r=0;r<10;r++){const{positionCorrection:h}=o.apply(t,l);h&&(t.position.add(h.multiplyScalar(.5)),l.position.subtract(h.multiplyScalar(.5)))}n.stroke(255),n.noFill();const x=me(t.position,je);n.circle(x.x,n.height-x.y,2*t.geometry.r*je),n.stroke(255);const g=me(t.velocity,je);n.line(x.x,n.height-x.y,x.x+g.x,n.height-(x.y+g.y)),n.stroke(255),n.noFill();const v=me(l.position,je);n.circle(v.x,n.height-v.y,2*l.geometry.r*je),n.stroke(255);const b=me(l.velocity,je);if(n.line(v.x,n.height-v.y,v.x+b.x,n.height-(v.y+b.y)),y){n.stroke("#54d7ff"),n.fill("#54d7ff");const r=me(y,je);n.circle(r.x,n.height-r.y,5)}if(f){n.stroke("green"),n.fill("green");const r=me(f,je);n.line(x.x,n.height-x.y,x.x+r.x,n.height-(x.y+r.y))}}};return Oe(()=>{e==null||e.remove()}),[s]}class on extends be{constructor(e){super(),we(this,e,nn,tn,ge,{})}}function sn(i){let e,t="<span>This page is a list of engine tests. They use the actual engine and allow me to setup different situations and check manually for regressions and bugs.</span> <br/> <span>Use the selection menu to see the different pages</span>",l,o,s,n,p;return n=new _t({props:{tabs:i[0]}}),{c(){e=w("div"),e.innerHTML=t,l=C(),o=w("br"),s=C(),re(n.$$.fragment)},l(a){e=_(a,"DIV",{"data-svelte-h":!0}),q(e)!=="svelte-11mzr87"&&(e.innerHTML=t),l=S(a),o=_(a,"BR",{}),s=S(a),ie(n.$$.fragment,a)},m(a,c){P(a,e,c),P(a,l,c),P(a,o,c),P(a,s,c),le(n,a,c),p=!0},p:De,i(a){p||(ce(n.$$.fragment,a),p=!0)},o(a){ae(n.$$.fragment,a),p=!1},d(a){a&&(m(e),m(l),m(o),m(s)),ue(n,a)}}}function rn(i){return[[{label:"Ball pool",value:Pt},{label:"Sphere Sphere Collider",value:on},{label:"Line Sphere Collider",value:Zt},{label:"Perfs - Multiple balls",value:Qt},{label:"Playground - Engine settings",value:Ht},{label:"Dynamics + collisions - 1",value:Rt},{label:"Dynamics + collisions - 2",value:Wt},{label:"Sphere Line - pull apart",value:Bt},{label:"One ball bounce",value:Vt}]]}class mn extends be{constructor(e){super(),we(this,e,rn,sn,ge,{})}}export{mn as component};
