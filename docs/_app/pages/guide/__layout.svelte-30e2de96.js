import{S as z,i as C,s as G,l as A,f as E,d,D as H,e as v,k as D,c as g,a as b,n as S,b as p,H as h,I as J,J as K,K as M,x as P,u as B,M as F,t as N,g as U,h as j}from"../../chunks/vendor-146a7b72.js";function q(u,e,l){const a=u.slice();return a[3]=e[l][0],a[4]=e[l][1],a}function O(u){let e,l,a=u[4]+"",t,s;return{c(){e=v("li"),l=v("span"),t=N(a),s=D(),this.h()},l(n){e=g(n,"LI",{class:!0});var o=b(e);l=g(o,"SPAN",{class:!0});var f=b(l);t=U(f,a),f.forEach(d),s=S(o),o.forEach(d),this.h()},h(){p(l,"class","uppercase"),p(e,"class","menu-title")},m(n,o){E(n,e,o),h(e,l),h(l,t),h(e,s)},p(n,o){o&1&&a!==(a=n[4]+"")&&j(t,a)},d(n){n&&d(e)}}}function Q(u){let e,l,a=u[4]+"",t,s,n;return{c(){e=v("li"),l=v("a"),t=N(a),n=D(),this.h()},l(o){e=g(o,"LI",{});var f=b(e);l=g(f,"A",{class:!0,href:!0});var r=b(l);t=U(r,a),r.forEach(d),n=S(f),f.forEach(d),this.h()},h(){p(l,"class","capitalize"),p(l,"href",s=u[3])},m(o,f){E(o,e,f),h(e,l),h(l,t),h(e,n)},p(o,f){f&1&&a!==(a=o[4]+"")&&j(t,a),f&1&&s!==(s=o[3])&&p(l,"href",s)},d(o){o&&d(e)}}}function w(u){let e;function l(s,n){return s[3]?Q:O}let a=l(u),t=a(u);return{c(){t.c(),e=A()},l(s){t.l(s),e=A()},m(s,n){t.m(s,n),E(s,e,n)},p(s,n){a===(a=l(s))&&t?t.p(s,n):(t.d(1),t=a(s),t&&(t.c(),t.m(e.parentNode,e)))},d(s){t.d(s),s&&d(e)}}}function R(u){let e,l,a,t,s,n,o,f=u[0],r=[];for(let i=0;i<f.length;i+=1)r[i]=w(q(u,f,i));const I=u[2].default,_=H(I,u,u[1],null);return{c(){e=v("div"),l=v("div"),a=v("div"),t=v("ul");for(let i=0;i<r.length;i+=1)r[i].c();s=D(),n=v("div"),_&&_.c(),this.h()},l(i){e=g(i,"DIV",{class:!0});var m=b(e);l=g(m,"DIV",{class:!0});var c=b(l);a=g(c,"DIV",{class:!0});var k=b(a);t=g(k,"UL",{class:!0});var V=b(t);for(let y=0;y<r.length;y+=1)r[y].l(V);V.forEach(d),k.forEach(d),s=S(c),n=g(c,"DIV",{class:!0});var L=b(n);_&&_.l(L),L.forEach(d),c.forEach(d),m.forEach(d),this.h()},h(){p(t,"class","menu py-3 shadow-lg bg-base-100 rounded-box"),p(a,"class","col-span-12 md:col-span-4 xl:col-span-2"),p(n,"class","col-span-12 md:col-span-8 xl:col-span-10 documentation"),p(l,"class","grid grid-cols-12 gap-10"),p(e,"class","container mx-auto p-4")},m(i,m){E(i,e,m),h(e,l),h(l,a),h(a,t);for(let c=0;c<r.length;c+=1)r[c].m(t,null);h(l,s),h(l,n),_&&_.m(n,null),o=!0},p(i,[m]){if(m&1){f=i[0];let c;for(c=0;c<f.length;c+=1){const k=q(i,f,c);r[c]?r[c].p(k,m):(r[c]=w(k),r[c].c(),r[c].m(t,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=f.length}_&&_.p&&(!o||m&2)&&J(_,I,i,i[1],o?M(I,i[1],m,null):K(i[1]),null)},i(i){o||(P(_,i),o=!0)},o(i){B(_,i),o=!1},d(i){i&&d(e),F(r,i),_&&_.d(i)}}}function T(u,e,l){let{$$slots:a={},$$scope:t}=e,{menu:s=[[null,"Getting Started"],["/guide/installation","Installation"],["/guide/usage","Usage"]]}=e;return u.$$set=n=>{"menu"in n&&l(0,s=n.menu),"$$scope"in n&&l(1,t=n.$$scope)},[s,t,a]}class X extends z{constructor(e){super();C(this,e,T,R,G,{menu:0})}}export{X as default};
