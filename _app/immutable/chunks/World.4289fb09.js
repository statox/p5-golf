var k=Object.defineProperty;var M=(h,t,o)=>t in h?k(h,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):h[t]=o;var s=(h,t,o)=>(M(h,typeof t!="symbol"?t+"":t,o),o);import{V as f}from"./PhysicObject.edd17eee.js";class B{constructor(){s(this,"apply",(t,o)=>{const e=this.bounce(t,o),n=this.pullApart(t,o);return{...e,...n}});s(this,"intersectionPoint",(t,o)=>{if(o.geometry.type!=="sphere"||t.geometry.type!=="line")throw new Error("invalid geometry");const e=t.position.clone(),n=t.position.clone().add(t.geometry.vector),i=o.position.clone(),c=o.geometry.r,r=n.clone().subtract(e),l=e.clone().subtract(i),a=r.dot(r),d=l.dot(r)*2,b=l.dot(l)-c*c;let m=d*d-4*a*b;if(m<0)return;m=Math.sqrt(m);const u=(-d-m)/(2*a),y=(-d+m)/(2*a),p=u>=0&&u<=1,T=y>=0&&y<=1;if(p&&T)return e.add(r.multiplyScalar(u+(y-u)*.5));if(p)return e.add(r.multiplyScalar(u+(1-u)*.5));if(T)return e.add(r.multiplyScalar(y*.5))});s(this,"bounce",(t,o)=>{if(o.geometry.type!=="sphere"||t.geometry.type!=="line")throw new Error("invalid geometry");const e=this.intersectionPoint(t,o);if(!e)return;const n=t.restitution*o.restitution,i=t.friction*o.friction,c=t.position.x,r=t.position.y,l=t.position.x+t.geometry.vector.x,a=t.position.y+t.geometry.vector.y,d=o.position.x,b=o.position.y,m=o.position.x+o.velocity.x,u=o.position.y+o.velocity.y;let y=(a-r)/(l-c),p=(u-b)/(m-d);if(y=[1/0,-1/0].includes(y)?360:y,p=[1/0,-1/0].includes(p)?360:p,(y-p)/(1+y*p)===0){const D=n,z=i;return{bouncedVelocity:o.velocity.multiplyScalar(1-z).multiplyScalar(-D),intersection:e}}const S=l-c,w=a-r,x=new f(-w,S),j=new f(w,-S),W=e.clone().add(x),A=e.clone().add(j);let g;o.position.distanceSq(W)<o.position.distanceSq(A)?g=x:g=j;const C=g.clone().normalize(),V=o.velocity.clone(),E=C.multiplyScalar(V.dot(C)),N=V.subtract(E),P=n,q=i;return{bouncedVelocity:N.multiplyScalar(1-q).subtract(E.multiplyScalar(P)),intersection:e}});s(this,"pullApart",(t,o)=>{if(o.geometry.type!=="sphere"||t.geometry.type!=="line")throw new Error("invalid geometry");const e=this.intersectionPoint(t,o);if(!e)return;const n=o.position.clone().subtract(e),i=n.length();if(i>o.geometry.r)return;const c=o.geometry.r-i;return{positionCorrection:n.normalize().multiplyScalar(c)}})}}class H{constructor(){s(this,"apply",(t,o)=>({...this.pullApart(t,o),...this.bounce(t,o)}));s(this,"intersectionPoint",(t,o)=>{if(t.geometry.type!=="sphere"||o.geometry.type!=="sphere")return;const e=t.geometry.r,n=o.geometry.r,i=t.position.distanceSq(o.position),c=(e+n)**2;if(i>c)return;const r=o.position.clone().subtract(t.position),l=e/(e+n);return r.multiplyScalar(l),t.position.clone().add(r)});s(this,"bounce",(t,o)=>{if(t.geometry.type!=="sphere"||o.geometry.type!=="sphere")throw new Error("invalid geometry");const e=this.intersectionPoint(t,o);if(!e)return;const n=t.restitution*o.restitution,i=t.friction*o.friction,c=o.position.x,r=o.position.y,l=o.position.x+o.velocity.x,a=o.position.y+o.velocity.y,d=t.position.x,b=t.position.y,m=t.position.x+t.velocity.x,u=t.position.y+t.velocity.y;let y=(a-r)/(l-c),p=(u-b)/(m-d);if(y=[1/0,-1/0].includes(y)?360:y,p=[1/0,-1/0].includes(p)?360:p,(y-p)/(1+y*p)===0){const D=n,z=i;return{bouncedVelocity:t.velocity.multiplyScalar(1-z).multiplyScalar(-D),intersection:e}}const S=l-c,w=a-r,x=new f(-w,S),j=new f(w,-S),W=e.clone().add(x),A=e.clone().add(j);let g;t.position.distanceSq(W)<t.position.distanceSq(A)?g=x:g=j;const C=g.clone().normalize(),V=t.velocity.clone(),E=C.multiplyScalar(V.dot(C)),N=V.subtract(E),P=n,q=i;return{bouncedVelocity:N.multiplyScalar(1-q).subtract(E.multiplyScalar(P)),intersection:e}});s(this,"pullApart",(t,o)=>{if(t.geometry.type!=="sphere"||o.geometry.type!=="sphere")throw new Error("invalid geometry");const e=this.intersectionPoint(t,o);if(!e)return;const n=t.position.clone().subtract(e),i=n.length(),c=t.geometry.r-i;return n.normalize().multiplyScalar(c),{positionCorrection:n}})}}const O=new B,_=new H;class Q{constructor(t){s(this,"gravityEnabled");s(this,"collisionEnabled");s(this,"dimensions");s(this,"t");s(this,"objects");s(this,"gravity",new f(0,-9.8));s(this,"antiGravity",new f(0,9.8));s(this,"drag",.001);s(this,"dt",.005);s(this,"reporter");this.collisionEnabled=t.enableCollisions??!0,this.gravityEnabled=t.enableGravity??!0,this.dimensions=t.dimensions||new f(100,100),this.objects=[],this.t=0,this.reporter=t.reporter||(()=>{})}toggleGravity(){this.gravityEnabled=!this.gravityEnabled}addObject(t){const o=this.objects.reduce((e,n)=>e>n.data.id?e:n.data.id,0);t.data.id=o+1,this.objects.push(t)}removeObject(t){if(t.data.id===-1)throw new Error("Cant remove an object with uninitialized id");const o=this.objects.findIndex(e=>e.data.id===t.data.id);if(o===-1)throw new Error("Object not found in world");this.objects.splice(o,1)}applyGravity(t){t.acceleration.push(this.gravity)}applyForce(t,o){t.acceleration.push(o)}applyDynamics(t,o){if(o.fixed)return;this.gravityEnabled&&this.applyGravity(o);const e=new f(0,0);for(;o.acceleration.length;){const i=o.acceleration.pop();i&&e.add(i)}e.divideScalar(o.m);const n=1-this.drag;o.velocity.add(e.multiplyScalar(t)).multiplyScalar(n),o.position.add(o.velocity.clone().multiplyScalar(t))}applyCollisions(t){var e,n;const o=new Array(this.objects.length).fill(0).map(i=>({totalVelocity:new f(0,0),nbCollisions:0}));for(let i=0;i<this.objects.length;i++){const c=this.objects[i];if(!c.fixed){c.data.isColliding=!1;for(let r=0;r<this.objects.length;r++){if(i===r)continue;const l=this.objects[r];if(c.geometry.type==="line"&&l.geometry.type==="line")continue;let a;if(c.geometry.type==="sphere"&&l.geometry.type==="sphere")a=(e=_.bounce(c,l))==null?void 0:e.bouncedVelocity;else{const d=c.geometry.type==="line"?c:l,b=c.geometry.type==="line"?l:c;a=(n=O.bounce(d,b))==null?void 0:n.bouncedVelocity}a&&(o[i].totalVelocity.add(a),o[i].nbCollisions++)}}}for(let i=0;i<this.objects.length;i++){const{totalVelocity:c,nbCollisions:r}=o[i];if(r===0)continue;const l=this.objects[i];c.divideScalar(r),l.velocity.copy(c),l.position.add(l.velocity.clone().multiplyScalar(t)),l.data.isColliding=!0,l.collisionListener()}}preventOverlaps(t){var o,e;for(let n=0;n<this.objects.length;n++){const i=this.objects[n];if(!i.fixed)for(let c=0;c<this.objects.length;c++){if(n===c)continue;const r=this.objects[c];if(i.geometry.type==="line"&&r.geometry.type==="line")continue;let l;if(i.geometry.type==="sphere"&&r.geometry.type==="sphere")l=(o=_.pullApart(i,r))==null?void 0:o.positionCorrection;else{const a=i.geometry.type==="line"?i:r,d=i.geometry.type==="line"?r:i;l=(e=O.pullApart(a,d))==null?void 0:e.positionCorrection}l&&(i.position.add(l.divideScalar(t).divideScalar(2)),r.fixed||r.position.add(l.divideScalar(t).divideScalar(2).multiplyScalar(-1)))}}}_step(t){for(const e of this.objects)this.applyDynamics(t,e),e.data.age++;const o=1;for(let e=0;e<o;e++)this.preventOverlaps(o);this.collisionEnabled&&this.applyCollisions(t)}stepFixedDt(){const o=Date.now()/1e3;I=o-v,v=o,this._step(.01),this.t+=.01,this.reporter&&this.reporter({...this,frameTime:I})}stepAccumulator(){const t=this.dt,o=Date.now()/1e3;v===0&&(v=o),I=o-v,v=o,G+=I;let e=0;for(;G>=t&&e<5;)e++,this._step(t),G-=t,this.t+=t,this.reporter&&this.reporter({...this,frameTime:I})}step(){this.stepAccumulator()}}let v=0,I=0,G=0;export{H as S,Q as W};