/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
import{L as t}from"../../../chunks/Logger.js";import{b as e,a as r,i as n,c as s,d as o,f as i,g as a,h as c,j as u,e as f}from"../../../chunks/ensureType.js";import{p as l,g as p,i as g,a as d,b as y}from"../../../chunks/metadata.js";import"../../lang.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";import"../../../chunks/handleUtils.js";function m(t,e){const r="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(r,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const n=p(e);return g(n,r)?n.get(r):e[r]}function h(t,e,r){if(null==t)return t;const n=m(e[r],t);return!n&&r<e.length-1?void 0:r===e.length-1?n:h(n,e,r+1)}function j(t,e,r=0){return"string"==typeof e&&-1===e.indexOf(".")?m(e,t):h(t,l(e),r)}function v(t,e){return j(t,e)}function O(t,e){return void 0!==j(e,t)}function A(t,e,r){if(t&&e)if("object"==typeof e)for(const r of Object.getOwnPropertyNames(e))A(t,r,e[r]);else{if(-1!==e.indexOf(".")){const n=e.split("."),s=n.splice(n.length-1,1)[0];return void A(v(t,n),s,r)}t[e]=r}}function b(l={}){return(p,g)=>{if(p===Function.prototype)throw new Error(`Inappropriate use of @property() on a static field: ${p.name}.${g}. Accessor does not support static properties.`);const m=Object.getOwnPropertyDescriptor(p,g),h=d(p,g);m&&(m.get||m.set?(h.get=m.get||h.get,h.set=m.set||h.set):"value"in m&&("value"in l&&t.getLogger("esri.core.accessorSupport.decorators.property").warn(`@property() will redefine the value of "${g}" on "${p.constructor.name}" already defined in the metadata`,l),h.value=l.value=m.value)),null!=l.readOnly&&(h.readOnly=l.readOnly);const j=l.aliasOf;if(j){const t="string"==typeof j?j:j.source,e="string"==typeof j?null:!0===j.overridable;let r;h.dependsOn=[t],h.get=function(){let e=v(this,t);if("function"==typeof e){r||(r=t.split(".").slice(0,-1).join("."));const n=v(this,r);n&&(e=e.bind(n))}return e},h.readOnly||(h.set=e?function(t){void 0!==t?this._override(g,t):this._clearOverride(g)}:function(e){A(this,t,e)})}const O=l.type,b=l.types;h.cast||(O?h.cast=function(t){let e=0,r=t;if(n(t))return s(t);for(;Array.isArray(r)&&1===r.length&&"string"!=typeof r[0]&&"number"!=typeof r[0];)r=r[0],e++;const l=r;if(o(l))return 0===e?i(l):a(i(l),e);if(1===e)return c(l);if(e>1)return u(l,e);const p=t;if(p.from)return p.from;return f(p)}(O):b&&(Array.isArray(b)?h.cast=e(r(b[0])):h.cast=r(b))),l.range&&(h.cast=w(h.cast,l.range)),y(h,l)}}function k(t,e,r){const n=d(t,r);n.json||(n.json={});let s=n.json;return void 0!==e&&(s.origins||(s.origins={}),s.origins[e]||(s.origins[e]={}),s=s.origins[e]),s}function w(t,e){return r=>{let n=+t(r);return null!=e.step&&(n=Math.round(n/e.step)*e.step),null!=e.min&&(n=Math.max(e.min,n)),null!=e.max&&(n=Math.min(e.max,n)),n}}t.getLogger("esri.core.accessorSupport.set");export{O as e,w as ensureRange,v as g,b as property,k as propertyJSONMeta,A as s,j as v};