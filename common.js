const h=(t,a={},...c)=>{const e=document.createElement(t);
 for(const k in a){if(k==='on')for(const v in a.on)e.addEventListener(v,a.on[v]);else if(k!=='class'&&k in e)e[k]=a[k];else e.setAttribute(k,a[k])}
 c.flat().forEach(x=>{if(x!=null&&x!==false)e.append(x)});return e};
