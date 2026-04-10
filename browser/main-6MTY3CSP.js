var Wk=Object.create;var xp=Object.defineProperty,qk=Object.defineProperties,Yk=Object.getOwnPropertyDescriptor,Qk=Object.getOwnPropertyDescriptors,Kk=Object.getOwnPropertyNames,Bc=Object.getOwnPropertySymbols,Zk=Object.getPrototypeOf,Sp=Object.prototype.hasOwnProperty,lw=Object.prototype.propertyIsEnumerable;var aw=(t,n,e)=>n in t?xp(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e,_=(t,n)=>{for(var e in n||={})Sp.call(n,e)&&aw(t,e,n[e]);if(Bc)for(var e of Bc(n))lw.call(n,e)&&aw(t,e,n[e]);return t},G=(t,n)=>qk(t,Qk(n));var Oa=(t,n)=>{var e={};for(var i in t)Sp.call(t,i)&&n.indexOf(i)<0&&(e[i]=t[i]);if(t!=null&&Bc)for(var i of Bc(t))n.indexOf(i)<0&&lw.call(t,i)&&(e[i]=t[i]);return e};var Ip=(t,n)=>()=>(n||t((n={exports:{}}).exports,n),n.exports);var Xk=(t,n,e,i)=>{if(n&&typeof n=="object"||typeof n=="function")for(let r of Kk(n))!Sp.call(t,r)&&r!==e&&xp(t,r,{get:()=>n[r],enumerable:!(i=Yk(n,r))||i.enumerable});return t};var Jk=(t,n,e)=>(e=t!=null?Wk(Zk(t)):{},Xk(n||!t||!t.__esModule?xp(e,"default",{value:t,enumerable:!0}):e,t));var Le=(t,n,e)=>new Promise((i,r)=>{var o=l=>{try{a(e.next(l))}catch(c){r(c)}},s=l=>{try{a(e.throw(l))}catch(c){r(c)}},a=l=>l.done?i(l.value):Promise.resolve(l.value).then(o,s);a((e=e.apply(t,n)).next())});var $M=Ip($f=>{"use strict";$f.byteLength=YH;$f.toByteArray=KH;$f.fromByteArray=JH;var yi=[],Tn=[],qH=typeof Uint8Array<"u"?Uint8Array:Array,cb="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Yo=0,UM=cb.length;Yo<UM;++Yo)yi[Yo]=cb[Yo],Tn[cb.charCodeAt(Yo)]=Yo;var Yo,UM;Tn[45]=62;Tn[95]=63;function zM(t){var n=t.length;if(n%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");e===-1&&(e=n);var i=e===n?0:4-e%4;return[e,i]}function YH(t){var n=zM(t),e=n[0],i=n[1];return(e+i)*3/4-i}function QH(t,n,e){return(n+e)*3/4-e}function KH(t){var n,e=zM(t),i=e[0],r=e[1],o=new qH(QH(t,i,r)),s=0,a=r>0?i-4:i,l;for(l=0;l<a;l+=4)n=Tn[t.charCodeAt(l)]<<18|Tn[t.charCodeAt(l+1)]<<12|Tn[t.charCodeAt(l+2)]<<6|Tn[t.charCodeAt(l+3)],o[s++]=n>>16&255,o[s++]=n>>8&255,o[s++]=n&255;return r===2&&(n=Tn[t.charCodeAt(l)]<<2|Tn[t.charCodeAt(l+1)]>>4,o[s++]=n&255),r===1&&(n=Tn[t.charCodeAt(l)]<<10|Tn[t.charCodeAt(l+1)]<<4|Tn[t.charCodeAt(l+2)]>>2,o[s++]=n>>8&255,o[s++]=n&255),o}function ZH(t){return yi[t>>18&63]+yi[t>>12&63]+yi[t>>6&63]+yi[t&63]}function XH(t,n,e){for(var i,r=[],o=n;o<e;o+=3)i=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(t[o+2]&255),r.push(ZH(i));return r.join("")}function JH(t){for(var n,e=t.length,i=e%3,r=[],o=16383,s=0,a=e-i;s<a;s+=o)r.push(XH(t,s,s+o>a?a:s+o));return i===1?(n=t[e-1],r.push(yi[n>>2]+yi[n<<4&63]+"==")):i===2&&(n=(t[e-2]<<8)+t[e-1],r.push(yi[n>>10]+yi[n>>4&63]+yi[n<<2&63]+"=")),r.join("")}});var GM=Ip(db=>{"use strict";db.read=function(t,n,e,i,r){var o,s,a=r*8-i-1,l=(1<<a)-1,c=l>>1,d=-7,h=e?r-1:0,f=e?-1:1,p=t[n+h];for(h+=f,o=p&(1<<-d)-1,p>>=-d,d+=a;d>0;o=o*256+t[n+h],h+=f,d-=8);for(s=o&(1<<-d)-1,o>>=-d,d+=i;d>0;s=s*256+t[n+h],h+=f,d-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(p?-1:1)*(1/0);s=s+Math.pow(2,i),o=o-c}return(p?-1:1)*s*Math.pow(2,o-i)};db.write=function(t,n,e,i,r,o){var s,a,l,c=o*8-r-1,d=(1<<c)-1,h=d>>1,f=r===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=i?0:o-1,m=i?1:-1,b=n<0||n===0&&1/n<0?1:0;for(n=Math.abs(n),isNaN(n)||n===1/0?(a=isNaN(n)?1:0,s=d):(s=Math.floor(Math.log(n)/Math.LN2),n*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+h>=1?n+=f/l:n+=f*Math.pow(2,1-h),n*l>=2&&(s++,l/=2),s+h>=d?(a=0,s=d):s+h>=1?(a=(n*l-1)*Math.pow(2,r),s=s+h):(a=n*Math.pow(2,h-1)*Math.pow(2,r),s=0));r>=8;t[e+p]=a&255,p+=m,a/=256,r-=8);for(s=s<<r|a,c+=r;c>0;t[e+p]=s&255,p+=m,s/=256,c-=8);t[e+p-m]|=b*128}});var lA=Ip(va=>{"use strict";var ub=$M(),ga=GM(),WM=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;va.Buffer=y;va.SlowBuffer=oU;va.INSPECT_MAX_BYTES=50;var Gf=2147483647;va.kMaxLength=Gf;y.TYPED_ARRAY_SUPPORT=eU();!y.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function eU(){try{let t=new Uint8Array(1),n={foo:function(){return 42}};return Object.setPrototypeOf(n,Uint8Array.prototype),Object.setPrototypeOf(t,n),t.foo()===42}catch(t){return!1}}Object.defineProperty(y.prototype,"parent",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.buffer}});Object.defineProperty(y.prototype,"offset",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.byteOffset}});function Xi(t){if(t>Gf)throw new RangeError('The value "'+t+'" is invalid for option "size"');let n=new Uint8Array(t);return Object.setPrototypeOf(n,y.prototype),n}function y(t,n,e){if(typeof t=="number"){if(typeof n=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return mb(t)}return KM(t,n,e)}y.poolSize=8192;function KM(t,n,e){if(typeof t=="string")return nU(t,n);if(ArrayBuffer.isView(t))return iU(t);if(t==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(bi(t,ArrayBuffer)||t&&bi(t.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(bi(t,SharedArrayBuffer)||t&&bi(t.buffer,SharedArrayBuffer)))return fb(t,n,e);if(typeof t=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');let i=t.valueOf&&t.valueOf();if(i!=null&&i!==t)return y.from(i,n,e);let r=rU(t);if(r)return r;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof t[Symbol.toPrimitive]=="function")return y.from(t[Symbol.toPrimitive]("string"),n,e);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}y.from=function(t,n,e){return KM(t,n,e)};Object.setPrototypeOf(y.prototype,Uint8Array.prototype);Object.setPrototypeOf(y,Uint8Array);function ZM(t){if(typeof t!="number")throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function tU(t,n,e){return ZM(t),t<=0?Xi(t):n!==void 0?typeof e=="string"?Xi(t).fill(n,e):Xi(t).fill(n):Xi(t)}y.alloc=function(t,n,e){return tU(t,n,e)};function mb(t){return ZM(t),Xi(t<0?0:gb(t)|0)}y.allocUnsafe=function(t){return mb(t)};y.allocUnsafeSlow=function(t){return mb(t)};function nU(t,n){if((typeof n!="string"||n==="")&&(n="utf8"),!y.isEncoding(n))throw new TypeError("Unknown encoding: "+n);let e=XM(t,n)|0,i=Xi(e),r=i.write(t,n);return r!==e&&(i=i.slice(0,r)),i}function hb(t){let n=t.length<0?0:gb(t.length)|0,e=Xi(n);for(let i=0;i<n;i+=1)e[i]=t[i]&255;return e}function iU(t){if(bi(t,Uint8Array)){let n=new Uint8Array(t);return fb(n.buffer,n.byteOffset,n.byteLength)}return hb(t)}function fb(t,n,e){if(n<0||t.byteLength<n)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<n+(e||0))throw new RangeError('"length" is outside of buffer bounds');let i;return n===void 0&&e===void 0?i=new Uint8Array(t):e===void 0?i=new Uint8Array(t,n):i=new Uint8Array(t,n,e),Object.setPrototypeOf(i,y.prototype),i}function rU(t){if(y.isBuffer(t)){let n=gb(t.length)|0,e=Xi(n);return e.length===0||t.copy(e,0,0,n),e}if(t.length!==void 0)return typeof t.length!="number"||vb(t.length)?Xi(0):hb(t);if(t.type==="Buffer"&&Array.isArray(t.data))return hb(t.data)}function gb(t){if(t>=Gf)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+Gf.toString(16)+" bytes");return t|0}function oU(t){return+t!=t&&(t=0),y.alloc(+t)}y.isBuffer=function(n){return n!=null&&n._isBuffer===!0&&n!==y.prototype};y.compare=function(n,e){if(bi(n,Uint8Array)&&(n=y.from(n,n.offset,n.byteLength)),bi(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),!y.isBuffer(n)||!y.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(n===e)return 0;let i=n.length,r=e.length;for(let o=0,s=Math.min(i,r);o<s;++o)if(n[o]!==e[o]){i=n[o],r=e[o];break}return i<r?-1:r<i?1:0};y.isEncoding=function(n){switch(String(n).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}};y.concat=function(n,e){if(!Array.isArray(n))throw new TypeError('"list" argument must be an Array of Buffers');if(n.length===0)return y.alloc(0);let i;if(e===void 0)for(e=0,i=0;i<n.length;++i)e+=n[i].length;let r=y.allocUnsafe(e),o=0;for(i=0;i<n.length;++i){let s=n[i];if(bi(s,Uint8Array))o+s.length>r.length?(y.isBuffer(s)||(s=y.from(s)),s.copy(r,o)):Uint8Array.prototype.set.call(r,s,o);else if(y.isBuffer(s))s.copy(r,o);else throw new TypeError('"list" argument must be an Array of Buffers');o+=s.length}return r};function XM(t,n){if(y.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||bi(t,ArrayBuffer))return t.byteLength;if(typeof t!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);let e=t.length,i=arguments.length>2&&arguments[2]===!0;if(!i&&e===0)return 0;let r=!1;for(;;)switch(n){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":return pb(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return e*2;case"hex":return e>>>1;case"base64":return aA(t).length;default:if(r)return i?-1:pb(t).length;n=(""+n).toLowerCase(),r=!0}}y.byteLength=XM;function sU(t,n,e){let i=!1;if((n===void 0||n<0)&&(n=0),n>this.length||((e===void 0||e>this.length)&&(e=this.length),e<=0)||(e>>>=0,n>>>=0,e<=n))return"";for(t||(t="utf8");;)switch(t){case"hex":return gU(this,n,e);case"utf8":case"utf-8":return eA(this,n,e);case"ascii":return pU(this,n,e);case"latin1":case"binary":return mU(this,n,e);case"base64":return hU(this,n,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _U(this,n,e);default:if(i)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),i=!0}}y.prototype._isBuffer=!0;function Qo(t,n,e){let i=t[n];t[n]=t[e],t[e]=i}y.prototype.swap16=function(){let n=this.length;if(n%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<n;e+=2)Qo(this,e,e+1);return this};y.prototype.swap32=function(){let n=this.length;if(n%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<n;e+=4)Qo(this,e,e+3),Qo(this,e+1,e+2);return this};y.prototype.swap64=function(){let n=this.length;if(n%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<n;e+=8)Qo(this,e,e+7),Qo(this,e+1,e+6),Qo(this,e+2,e+5),Qo(this,e+3,e+4);return this};y.prototype.toString=function(){let n=this.length;return n===0?"":arguments.length===0?eA(this,0,n):sU.apply(this,arguments)};y.prototype.toLocaleString=y.prototype.toString;y.prototype.equals=function(n){if(!y.isBuffer(n))throw new TypeError("Argument must be a Buffer");return this===n?!0:y.compare(this,n)===0};y.prototype.inspect=function(){let n="",e=va.INSPECT_MAX_BYTES;return n=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(n+=" ... "),"<Buffer "+n+">"};WM&&(y.prototype[WM]=y.prototype.inspect);y.prototype.compare=function(n,e,i,r,o){if(bi(n,Uint8Array)&&(n=y.from(n,n.offset,n.byteLength)),!y.isBuffer(n))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof n);if(e===void 0&&(e=0),i===void 0&&(i=n?n.length:0),r===void 0&&(r=0),o===void 0&&(o=this.length),e<0||i>n.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=i)return 0;if(r>=o)return-1;if(e>=i)return 1;if(e>>>=0,i>>>=0,r>>>=0,o>>>=0,this===n)return 0;let s=o-r,a=i-e,l=Math.min(s,a),c=this.slice(r,o),d=n.slice(e,i);for(let h=0;h<l;++h)if(c[h]!==d[h]){s=c[h],a=d[h];break}return s<a?-1:a<s?1:0};function JM(t,n,e,i,r){if(t.length===0)return-1;if(typeof e=="string"?(i=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,vb(e)&&(e=r?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(r)return-1;e=t.length-1}else if(e<0)if(r)e=0;else return-1;if(typeof n=="string"&&(n=y.from(n,i)),y.isBuffer(n))return n.length===0?-1:qM(t,n,e,i,r);if(typeof n=="number")return n=n&255,typeof Uint8Array.prototype.indexOf=="function"?r?Uint8Array.prototype.indexOf.call(t,n,e):Uint8Array.prototype.lastIndexOf.call(t,n,e):qM(t,[n],e,i,r);throw new TypeError("val must be string, number or Buffer")}function qM(t,n,e,i,r){let o=1,s=t.length,a=n.length;if(i!==void 0&&(i=String(i).toLowerCase(),i==="ucs2"||i==="ucs-2"||i==="utf16le"||i==="utf-16le")){if(t.length<2||n.length<2)return-1;o=2,s/=2,a/=2,e/=2}function l(d,h){return o===1?d[h]:d.readUInt16BE(h*o)}let c;if(r){let d=-1;for(c=e;c<s;c++)if(l(t,c)===l(n,d===-1?0:c-d)){if(d===-1&&(d=c),c-d+1===a)return d*o}else d!==-1&&(c-=c-d),d=-1}else for(e+a>s&&(e=s-a),c=e;c>=0;c--){let d=!0;for(let h=0;h<a;h++)if(l(t,c+h)!==l(n,h)){d=!1;break}if(d)return c}return-1}y.prototype.includes=function(n,e,i){return this.indexOf(n,e,i)!==-1};y.prototype.indexOf=function(n,e,i){return JM(this,n,e,i,!0)};y.prototype.lastIndexOf=function(n,e,i){return JM(this,n,e,i,!1)};function aU(t,n,e,i){e=Number(e)||0;let r=t.length-e;i?(i=Number(i),i>r&&(i=r)):i=r;let o=n.length;i>o/2&&(i=o/2);let s;for(s=0;s<i;++s){let a=parseInt(n.substr(s*2,2),16);if(vb(a))return s;t[e+s]=a}return s}function lU(t,n,e,i){return Wf(pb(n,t.length-e),t,e,i)}function cU(t,n,e,i){return Wf(wU(n),t,e,i)}function dU(t,n,e,i){return Wf(aA(n),t,e,i)}function uU(t,n,e,i){return Wf(DU(n,t.length-e),t,e,i)}y.prototype.write=function(n,e,i,r){if(e===void 0)r="utf8",i=this.length,e=0;else if(i===void 0&&typeof e=="string")r=e,i=this.length,e=0;else if(isFinite(e))e=e>>>0,isFinite(i)?(i=i>>>0,r===void 0&&(r="utf8")):(r=i,i=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let o=this.length-e;if((i===void 0||i>o)&&(i=o),n.length>0&&(i<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return aU(this,n,e,i);case"utf8":case"utf-8":return lU(this,n,e,i);case"ascii":case"latin1":case"binary":return cU(this,n,e,i);case"base64":return dU(this,n,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return uU(this,n,e,i);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}};y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function hU(t,n,e){return n===0&&e===t.length?ub.fromByteArray(t):ub.fromByteArray(t.slice(n,e))}function eA(t,n,e){e=Math.min(t.length,e);let i=[],r=n;for(;r<e;){let o=t[r],s=null,a=o>239?4:o>223?3:o>191?2:1;if(r+a<=e){let l,c,d,h;switch(a){case 1:o<128&&(s=o);break;case 2:l=t[r+1],(l&192)===128&&(h=(o&31)<<6|l&63,h>127&&(s=h));break;case 3:l=t[r+1],c=t[r+2],(l&192)===128&&(c&192)===128&&(h=(o&15)<<12|(l&63)<<6|c&63,h>2047&&(h<55296||h>57343)&&(s=h));break;case 4:l=t[r+1],c=t[r+2],d=t[r+3],(l&192)===128&&(c&192)===128&&(d&192)===128&&(h=(o&15)<<18|(l&63)<<12|(c&63)<<6|d&63,h>65535&&h<1114112&&(s=h))}}s===null?(s=65533,a=1):s>65535&&(s-=65536,i.push(s>>>10&1023|55296),s=56320|s&1023),i.push(s),r+=a}return fU(i)}var YM=4096;function fU(t){let n=t.length;if(n<=YM)return String.fromCharCode.apply(String,t);let e="",i=0;for(;i<n;)e+=String.fromCharCode.apply(String,t.slice(i,i+=YM));return e}function pU(t,n,e){let i="";e=Math.min(t.length,e);for(let r=n;r<e;++r)i+=String.fromCharCode(t[r]&127);return i}function mU(t,n,e){let i="";e=Math.min(t.length,e);for(let r=n;r<e;++r)i+=String.fromCharCode(t[r]);return i}function gU(t,n,e){let i=t.length;(!n||n<0)&&(n=0),(!e||e<0||e>i)&&(e=i);let r="";for(let o=n;o<e;++o)r+=EU[t[o]];return r}function _U(t,n,e){let i=t.slice(n,e),r="";for(let o=0;o<i.length-1;o+=2)r+=String.fromCharCode(i[o]+i[o+1]*256);return r}y.prototype.slice=function(n,e){let i=this.length;n=~~n,e=e===void 0?i:~~e,n<0?(n+=i,n<0&&(n=0)):n>i&&(n=i),e<0?(e+=i,e<0&&(e=0)):e>i&&(e=i),e<n&&(e=n);let r=this.subarray(n,e);return Object.setPrototypeOf(r,y.prototype),r};function Mt(t,n,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+n>e)throw new RangeError("Trying to access beyond buffer length")}y.prototype.readUintLE=y.prototype.readUIntLE=function(n,e,i){n=n>>>0,e=e>>>0,i||Mt(n,e,this.length);let r=this[n],o=1,s=0;for(;++s<e&&(o*=256);)r+=this[n+s]*o;return r};y.prototype.readUintBE=y.prototype.readUIntBE=function(n,e,i){n=n>>>0,e=e>>>0,i||Mt(n,e,this.length);let r=this[n+--e],o=1;for(;e>0&&(o*=256);)r+=this[n+--e]*o;return r};y.prototype.readUint8=y.prototype.readUInt8=function(n,e){return n=n>>>0,e||Mt(n,1,this.length),this[n]};y.prototype.readUint16LE=y.prototype.readUInt16LE=function(n,e){return n=n>>>0,e||Mt(n,2,this.length),this[n]|this[n+1]<<8};y.prototype.readUint16BE=y.prototype.readUInt16BE=function(n,e){return n=n>>>0,e||Mt(n,2,this.length),this[n]<<8|this[n+1]};y.prototype.readUint32LE=y.prototype.readUInt32LE=function(n,e){return n=n>>>0,e||Mt(n,4,this.length),(this[n]|this[n+1]<<8|this[n+2]<<16)+this[n+3]*16777216};y.prototype.readUint32BE=y.prototype.readUInt32BE=function(n,e){return n=n>>>0,e||Mt(n,4,this.length),this[n]*16777216+(this[n+1]<<16|this[n+2]<<8|this[n+3])};y.prototype.readBigUInt64LE=jr(function(n){n=n>>>0,_a(n,"offset");let e=this[n],i=this[n+7];(e===void 0||i===void 0)&&bc(n,this.length-8);let r=e+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24,o=this[++n]+this[++n]*2**8+this[++n]*2**16+i*2**24;return BigInt(r)+(BigInt(o)<<BigInt(32))});y.prototype.readBigUInt64BE=jr(function(n){n=n>>>0,_a(n,"offset");let e=this[n],i=this[n+7];(e===void 0||i===void 0)&&bc(n,this.length-8);let r=e*2**24+this[++n]*2**16+this[++n]*2**8+this[++n],o=this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+i;return(BigInt(r)<<BigInt(32))+BigInt(o)});y.prototype.readIntLE=function(n,e,i){n=n>>>0,e=e>>>0,i||Mt(n,e,this.length);let r=this[n],o=1,s=0;for(;++s<e&&(o*=256);)r+=this[n+s]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*e)),r};y.prototype.readIntBE=function(n,e,i){n=n>>>0,e=e>>>0,i||Mt(n,e,this.length);let r=e,o=1,s=this[n+--r];for(;r>0&&(o*=256);)s+=this[n+--r]*o;return o*=128,s>=o&&(s-=Math.pow(2,8*e)),s};y.prototype.readInt8=function(n,e){return n=n>>>0,e||Mt(n,1,this.length),this[n]&128?(255-this[n]+1)*-1:this[n]};y.prototype.readInt16LE=function(n,e){n=n>>>0,e||Mt(n,2,this.length);let i=this[n]|this[n+1]<<8;return i&32768?i|4294901760:i};y.prototype.readInt16BE=function(n,e){n=n>>>0,e||Mt(n,2,this.length);let i=this[n+1]|this[n]<<8;return i&32768?i|4294901760:i};y.prototype.readInt32LE=function(n,e){return n=n>>>0,e||Mt(n,4,this.length),this[n]|this[n+1]<<8|this[n+2]<<16|this[n+3]<<24};y.prototype.readInt32BE=function(n,e){return n=n>>>0,e||Mt(n,4,this.length),this[n]<<24|this[n+1]<<16|this[n+2]<<8|this[n+3]};y.prototype.readBigInt64LE=jr(function(n){n=n>>>0,_a(n,"offset");let e=this[n],i=this[n+7];(e===void 0||i===void 0)&&bc(n,this.length-8);let r=this[n+4]+this[n+5]*2**8+this[n+6]*2**16+(i<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+this[++n]*2**8+this[++n]*2**16+this[++n]*2**24)});y.prototype.readBigInt64BE=jr(function(n){n=n>>>0,_a(n,"offset");let e=this[n],i=this[n+7];(e===void 0||i===void 0)&&bc(n,this.length-8);let r=(e<<24)+this[++n]*2**16+this[++n]*2**8+this[++n];return(BigInt(r)<<BigInt(32))+BigInt(this[++n]*2**24+this[++n]*2**16+this[++n]*2**8+i)});y.prototype.readFloatLE=function(n,e){return n=n>>>0,e||Mt(n,4,this.length),ga.read(this,n,!0,23,4)};y.prototype.readFloatBE=function(n,e){return n=n>>>0,e||Mt(n,4,this.length),ga.read(this,n,!1,23,4)};y.prototype.readDoubleLE=function(n,e){return n=n>>>0,e||Mt(n,8,this.length),ga.read(this,n,!0,52,8)};y.prototype.readDoubleBE=function(n,e){return n=n>>>0,e||Mt(n,8,this.length),ga.read(this,n,!1,52,8)};function cn(t,n,e,i,r,o){if(!y.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(n>r||n<o)throw new RangeError('"value" argument is out of bounds');if(e+i>t.length)throw new RangeError("Index out of range")}y.prototype.writeUintLE=y.prototype.writeUIntLE=function(n,e,i,r){if(n=+n,e=e>>>0,i=i>>>0,!r){let a=Math.pow(2,8*i)-1;cn(this,n,e,i,a,0)}let o=1,s=0;for(this[e]=n&255;++s<i&&(o*=256);)this[e+s]=n/o&255;return e+i};y.prototype.writeUintBE=y.prototype.writeUIntBE=function(n,e,i,r){if(n=+n,e=e>>>0,i=i>>>0,!r){let a=Math.pow(2,8*i)-1;cn(this,n,e,i,a,0)}let o=i-1,s=1;for(this[e+o]=n&255;--o>=0&&(s*=256);)this[e+o]=n/s&255;return e+i};y.prototype.writeUint8=y.prototype.writeUInt8=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,1,255,0),this[e]=n&255,e+1};y.prototype.writeUint16LE=y.prototype.writeUInt16LE=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,2,65535,0),this[e]=n&255,this[e+1]=n>>>8,e+2};y.prototype.writeUint16BE=y.prototype.writeUInt16BE=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,2,65535,0),this[e]=n>>>8,this[e+1]=n&255,e+2};y.prototype.writeUint32LE=y.prototype.writeUInt32LE=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,4,4294967295,0),this[e+3]=n>>>24,this[e+2]=n>>>16,this[e+1]=n>>>8,this[e]=n&255,e+4};y.prototype.writeUint32BE=y.prototype.writeUInt32BE=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,4,4294967295,0),this[e]=n>>>24,this[e+1]=n>>>16,this[e+2]=n>>>8,this[e+3]=n&255,e+4};function tA(t,n,e,i,r){sA(n,i,r,t,e,7);let o=Number(n&BigInt(4294967295));t[e++]=o,o=o>>8,t[e++]=o,o=o>>8,t[e++]=o,o=o>>8,t[e++]=o;let s=Number(n>>BigInt(32)&BigInt(4294967295));return t[e++]=s,s=s>>8,t[e++]=s,s=s>>8,t[e++]=s,s=s>>8,t[e++]=s,e}function nA(t,n,e,i,r){sA(n,i,r,t,e,7);let o=Number(n&BigInt(4294967295));t[e+7]=o,o=o>>8,t[e+6]=o,o=o>>8,t[e+5]=o,o=o>>8,t[e+4]=o;let s=Number(n>>BigInt(32)&BigInt(4294967295));return t[e+3]=s,s=s>>8,t[e+2]=s,s=s>>8,t[e+1]=s,s=s>>8,t[e]=s,e+8}y.prototype.writeBigUInt64LE=jr(function(n,e=0){return tA(this,n,e,BigInt(0),BigInt("0xffffffffffffffff"))});y.prototype.writeBigUInt64BE=jr(function(n,e=0){return nA(this,n,e,BigInt(0),BigInt("0xffffffffffffffff"))});y.prototype.writeIntLE=function(n,e,i,r){if(n=+n,e=e>>>0,!r){let l=Math.pow(2,8*i-1);cn(this,n,e,i,l-1,-l)}let o=0,s=1,a=0;for(this[e]=n&255;++o<i&&(s*=256);)n<0&&a===0&&this[e+o-1]!==0&&(a=1),this[e+o]=(n/s>>0)-a&255;return e+i};y.prototype.writeIntBE=function(n,e,i,r){if(n=+n,e=e>>>0,!r){let l=Math.pow(2,8*i-1);cn(this,n,e,i,l-1,-l)}let o=i-1,s=1,a=0;for(this[e+o]=n&255;--o>=0&&(s*=256);)n<0&&a===0&&this[e+o+1]!==0&&(a=1),this[e+o]=(n/s>>0)-a&255;return e+i};y.prototype.writeInt8=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,1,127,-128),n<0&&(n=255+n+1),this[e]=n&255,e+1};y.prototype.writeInt16LE=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,2,32767,-32768),this[e]=n&255,this[e+1]=n>>>8,e+2};y.prototype.writeInt16BE=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,2,32767,-32768),this[e]=n>>>8,this[e+1]=n&255,e+2};y.prototype.writeInt32LE=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,4,2147483647,-2147483648),this[e]=n&255,this[e+1]=n>>>8,this[e+2]=n>>>16,this[e+3]=n>>>24,e+4};y.prototype.writeInt32BE=function(n,e,i){return n=+n,e=e>>>0,i||cn(this,n,e,4,2147483647,-2147483648),n<0&&(n=4294967295+n+1),this[e]=n>>>24,this[e+1]=n>>>16,this[e+2]=n>>>8,this[e+3]=n&255,e+4};y.prototype.writeBigInt64LE=jr(function(n,e=0){return tA(this,n,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});y.prototype.writeBigInt64BE=jr(function(n,e=0){return nA(this,n,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function iA(t,n,e,i,r,o){if(e+i>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function rA(t,n,e,i,r){return n=+n,e=e>>>0,r||iA(t,n,e,4,34028234663852886e22,-34028234663852886e22),ga.write(t,n,e,i,23,4),e+4}y.prototype.writeFloatLE=function(n,e,i){return rA(this,n,e,!0,i)};y.prototype.writeFloatBE=function(n,e,i){return rA(this,n,e,!1,i)};function oA(t,n,e,i,r){return n=+n,e=e>>>0,r||iA(t,n,e,8,17976931348623157e292,-17976931348623157e292),ga.write(t,n,e,i,52,8),e+8}y.prototype.writeDoubleLE=function(n,e,i){return oA(this,n,e,!0,i)};y.prototype.writeDoubleBE=function(n,e,i){return oA(this,n,e,!1,i)};y.prototype.copy=function(n,e,i,r){if(!y.isBuffer(n))throw new TypeError("argument should be a Buffer");if(i||(i=0),!r&&r!==0&&(r=this.length),e>=n.length&&(e=n.length),e||(e=0),r>0&&r<i&&(r=i),r===i||n.length===0||this.length===0)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),n.length-e<r-i&&(r=n.length-e+i);let o=r-i;return this===n&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(e,i,r):Uint8Array.prototype.set.call(n,this.subarray(i,r),e),o};y.prototype.fill=function(n,e,i,r){if(typeof n=="string"){if(typeof e=="string"?(r=e,e=0,i=this.length):typeof i=="string"&&(r=i,i=this.length),r!==void 0&&typeof r!="string")throw new TypeError("encoding must be a string");if(typeof r=="string"&&!y.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(n.length===1){let s=n.charCodeAt(0);(r==="utf8"&&s<128||r==="latin1")&&(n=s)}}else typeof n=="number"?n=n&255:typeof n=="boolean"&&(n=Number(n));if(e<0||this.length<e||this.length<i)throw new RangeError("Out of range index");if(i<=e)return this;e=e>>>0,i=i===void 0?this.length:i>>>0,n||(n=0);let o;if(typeof n=="number")for(o=e;o<i;++o)this[o]=n;else{let s=y.isBuffer(n)?n:y.from(n,r),a=s.length;if(a===0)throw new TypeError('The value "'+n+'" is invalid for argument "value"');for(o=0;o<i-e;++o)this[o+e]=s[o%a]}return this};var ma={};function _b(t,n,e){ma[t]=class extends e{constructor(){super(),Object.defineProperty(this,"message",{value:n.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(r){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:r,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}_b("ERR_BUFFER_OUT_OF_BOUNDS",function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError);_b("ERR_INVALID_ARG_TYPE",function(t,n){return`The "${t}" argument must be of type number. Received type ${typeof n}`},TypeError);_b("ERR_OUT_OF_RANGE",function(t,n,e){let i=`The value of "${t}" is out of range.`,r=e;return Number.isInteger(e)&&Math.abs(e)>2**32?r=QM(String(e)):typeof e=="bigint"&&(r=String(e),(e>BigInt(2)**BigInt(32)||e<-(BigInt(2)**BigInt(32)))&&(r=QM(r)),r+="n"),i+=` It must be ${n}. Received ${r}`,i},RangeError);function QM(t){let n="",e=t.length,i=t[0]==="-"?1:0;for(;e>=i+4;e-=3)n=`_${t.slice(e-3,e)}${n}`;return`${t.slice(0,e)}${n}`}function vU(t,n,e){_a(n,"offset"),(t[n]===void 0||t[n+e]===void 0)&&bc(n,t.length-(e+1))}function sA(t,n,e,i,r,o){if(t>e||t<n){let s=typeof n=="bigint"?"n":"",a;throw o>3?n===0||n===BigInt(0)?a=`>= 0${s} and < 2${s} ** ${(o+1)*8}${s}`:a=`>= -(2${s} ** ${(o+1)*8-1}${s}) and < 2 ** ${(o+1)*8-1}${s}`:a=`>= ${n}${s} and <= ${e}${s}`,new ma.ERR_OUT_OF_RANGE("value",a,t)}vU(i,r,o)}function _a(t,n){if(typeof t!="number")throw new ma.ERR_INVALID_ARG_TYPE(n,"number",t)}function bc(t,n,e){throw Math.floor(t)!==t?(_a(t,e),new ma.ERR_OUT_OF_RANGE(e||"offset","an integer",t)):n<0?new ma.ERR_BUFFER_OUT_OF_BOUNDS:new ma.ERR_OUT_OF_RANGE(e||"offset",`>= ${e?1:0} and <= ${n}`,t)}var yU=/[^+/0-9A-Za-z-_]/g;function bU(t){if(t=t.split("=")[0],t=t.trim().replace(yU,""),t.length<2)return"";for(;t.length%4!==0;)t=t+"=";return t}function pb(t,n){n=n||1/0;let e,i=t.length,r=null,o=[];for(let s=0;s<i;++s){if(e=t.charCodeAt(s),e>55295&&e<57344){if(!r){if(e>56319){(n-=3)>-1&&o.push(239,191,189);continue}else if(s+1===i){(n-=3)>-1&&o.push(239,191,189);continue}r=e;continue}if(e<56320){(n-=3)>-1&&o.push(239,191,189),r=e;continue}e=(r-55296<<10|e-56320)+65536}else r&&(n-=3)>-1&&o.push(239,191,189);if(r=null,e<128){if((n-=1)<0)break;o.push(e)}else if(e<2048){if((n-=2)<0)break;o.push(e>>6|192,e&63|128)}else if(e<65536){if((n-=3)<0)break;o.push(e>>12|224,e>>6&63|128,e&63|128)}else if(e<1114112){if((n-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,e&63|128)}else throw new Error("Invalid code point")}return o}function wU(t){let n=[];for(let e=0;e<t.length;++e)n.push(t.charCodeAt(e)&255);return n}function DU(t,n){let e,i,r,o=[];for(let s=0;s<t.length&&!((n-=2)<0);++s)e=t.charCodeAt(s),i=e>>8,r=e%256,o.push(r),o.push(i);return o}function aA(t){return ub.toByteArray(bU(t))}function Wf(t,n,e,i){let r;for(r=0;r<i&&!(r+e>=n.length||r>=t.length);++r)n[r+e]=t[r];return r}function bi(t,n){return t instanceof n||t!=null&&t.constructor!=null&&t.constructor.name!=null&&t.constructor.name===n.name}function vb(t){return t!==t}var EU=(function(){let t="0123456789abcdef",n=new Array(256);for(let e=0;e<16;++e){let i=e*16;for(let r=0;r<16;++r)n[i+r]=t[e]+t[r]}return n})();function jr(t){return typeof BigInt>"u"?CU:t}function CU(){throw new Error("BigInt not supported")}});var Pt=null,jc=!1,Tp=1,eR=null,vt=Symbol("SIGNAL");function K(t){let n=Pt;return Pt=t,n}function zc(){return Pt}var Wr={version:0,lastCleanEpoch:0,dirty:!1,producers:void 0,producersTail:void 0,consumers:void 0,consumersTail:void 0,recomputing:!1,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,kind:"unknown",producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function qr(t){if(jc)throw new Error("");if(Pt===null)return;Pt.consumerOnSignalRead(t);let n=Pt.producersTail;if(n!==void 0&&n.producer===t)return;let e,i=Pt.recomputing;if(i&&(e=n!==void 0?n.nextProducer:Pt.producers,e!==void 0&&e.producer===t)){Pt.producersTail=e,e.lastReadVersion=t.version;return}let r=t.consumersTail;if(r!==void 0&&r.consumer===Pt&&(!i||nR(r,Pt)))return;let o=os(Pt),s={producer:t,consumer:Pt,nextProducer:e,prevConsumer:r,lastReadVersion:t.version,nextConsumer:void 0};Pt.producersTail=s,n!==void 0?n.nextProducer=s:Pt.producers=s,o&&hw(t,s)}function cw(){Tp++}function $c(t){if(!(os(t)&&!t.dirty)&&!(!t.dirty&&t.lastCleanEpoch===Tp)){if(!t.producerMustRecompute(t)&&!rs(t)){Uc(t);return}t.producerRecomputeValue(t),Uc(t)}}function Mp(t){if(t.consumers===void 0)return;let n=jc;jc=!0;try{for(let e=t.consumers;e!==void 0;e=e.nextConsumer){let i=e.consumer;i.dirty||tR(i)}}finally{jc=n}}function Ap(){return Pt?.consumerAllowSignalWrites!==!1}function tR(t){t.dirty=!0,Mp(t),t.consumerMarkedDirty?.(t)}function Uc(t){t.dirty=!1,t.lastCleanEpoch=Tp}function ir(t){return t&&dw(t),K(t)}function dw(t){t.producersTail=void 0,t.recomputing=!0}function Yr(t,n){K(n),t&&uw(t)}function uw(t){t.recomputing=!1;let n=t.producersTail,e=n!==void 0?n.nextProducer:t.producers;if(e!==void 0){if(os(t))do e=kp(e);while(e!==void 0);n!==void 0?n.nextProducer=void 0:t.producers=void 0}}function rs(t){for(let n=t.producers;n!==void 0;n=n.nextProducer){let e=n.producer,i=n.lastReadVersion;if(i!==e.version||($c(e),i!==e.version))return!0}return!1}function rr(t){if(os(t)){let n=t.producers;for(;n!==void 0;)n=kp(n)}t.producers=void 0,t.producersTail=void 0,t.consumers=void 0,t.consumersTail=void 0}function hw(t,n){let e=t.consumersTail,i=os(t);if(e!==void 0?(n.nextConsumer=e.nextConsumer,e.nextConsumer=n):(n.nextConsumer=void 0,t.consumers=n),n.prevConsumer=e,t.consumersTail=n,!i)for(let r=t.producers;r!==void 0;r=r.nextProducer)hw(r.producer,r)}function kp(t){let n=t.producer,e=t.nextProducer,i=t.nextConsumer,r=t.prevConsumer;if(t.nextConsumer=void 0,t.prevConsumer=void 0,i!==void 0?i.prevConsumer=r:n.consumersTail=r,r!==void 0)r.nextConsumer=i;else if(n.consumers=i,!os(n)){let o=n.producers;for(;o!==void 0;)o=kp(o)}return e}function os(t){return t.consumerIsAlwaysLive||t.consumers!==void 0}function Gc(t){eR?.(t)}function nR(t,n){let e=n.producersTail;if(e!==void 0){let i=n.producers;do{if(i===t)return!0;if(i===e)break;i=i.nextProducer}while(i!==void 0)}return!1}function Wc(t,n){return Object.is(t,n)}function Fa(t,n){let e=Object.create(iR);e.computation=t,n!==void 0&&(e.equal=n);let i=()=>{if($c(e),qr(e),e.value===Pa)throw e.error;return e.value};return i[vt]=e,Gc(e),i}var Vc=Symbol("UNSET"),Hc=Symbol("COMPUTING"),Pa=Symbol("ERRORED"),iR=G(_({},Wr),{value:Vc,dirty:!0,error:null,equal:Wc,kind:"computed",producerMustRecompute(t){return t.value===Vc||t.value===Hc},producerRecomputeValue(t){if(t.value===Hc)throw new Error("");let n=t.value;t.value=Hc;let e=ir(t),i,r=!1;try{i=t.computation(),K(null),r=n!==Vc&&n!==Pa&&i!==Pa&&t.equal(n,i)}catch(o){i=Pa,t.error=o}finally{Yr(t,e)}if(r){t.value=n;return}t.value=i,t.version++}});function rR(){throw new Error}var fw=rR;function pw(t){fw(t)}function Rp(t){fw=t}var oR=null;function Np(t,n){let e=Object.create(La);e.value=t,n!==void 0&&(e.equal=n);let i=()=>mw(e);return i[vt]=e,Gc(e),[i,s=>ss(e,s),s=>Op(e,s)]}function mw(t){return qr(t),t.value}function ss(t,n){Ap()||pw(t),t.equal(t.value,n)||(t.value=n,sR(t))}function Op(t,n){Ap()||pw(t),ss(t,n(t.value))}var La=G(_({},Wr),{equal:Wc,value:void 0,kind:"signal"});function sR(t){t.version++,cw(),Mp(t),oR?.(t)}var Pp=G(_({},Wr),{consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,dirty:!0,kind:"effect"});function Fp(t){if(t.dirty=!1,t.version>0&&!rs(t))return;t.version++;let n=ir(t);try{t.cleanup(),t.fn()}finally{Yr(t,n)}}function le(t){return typeof t=="function"}function as(t){let e=t(i=>{Error.call(i),i.stack=new Error().stack});return e.prototype=Object.create(Error.prototype),e.prototype.constructor=e,e}var qc=as(t=>function(e){t(this),this.message=e?`${e.length} errors occurred during unsubscription:
${e.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=e});function Qr(t,n){if(t){let e=t.indexOf(n);0<=e&&t.splice(e,1)}}var ce=class t{constructor(n){this.initialTeardown=n,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let n;if(!this.closed){this.closed=!0;let{_parentage:e}=this;if(e)if(this._parentage=null,Array.isArray(e))for(let o of e)o.remove(this);else e.remove(this);let{initialTeardown:i}=this;if(le(i))try{i()}catch(o){n=o instanceof qc?o.errors:[o]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let o of r)try{gw(o)}catch(s){n=n??[],s instanceof qc?n=[...n,...s.errors]:n.push(s)}}if(n)throw new qc(n)}}add(n){var e;if(n&&n!==this)if(this.closed)gw(n);else{if(n instanceof t){if(n.closed||n._hasParent(this))return;n._addParent(this)}(this._finalizers=(e=this._finalizers)!==null&&e!==void 0?e:[]).push(n)}}_hasParent(n){let{_parentage:e}=this;return e===n||Array.isArray(e)&&e.includes(n)}_addParent(n){let{_parentage:e}=this;this._parentage=Array.isArray(e)?(e.push(n),e):e?[e,n]:n}_removeParent(n){let{_parentage:e}=this;e===n?this._parentage=null:Array.isArray(e)&&Qr(e,n)}remove(n){let{_finalizers:e}=this;e&&Qr(e,n),n instanceof t&&n._removeParent(this)}};ce.EMPTY=(()=>{let t=new ce;return t.closed=!0,t})();var Lp=ce.EMPTY;function Yc(t){return t instanceof ce||t&&"closed"in t&&le(t.remove)&&le(t.add)&&le(t.unsubscribe)}function gw(t){le(t)?t():t.unsubscribe()}var kn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var ls={setTimeout(t,n,...e){let{delegate:i}=ls;return i?.setTimeout?i.setTimeout(t,n,...e):setTimeout(t,n,...e)},clearTimeout(t){let{delegate:n}=ls;return(n?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Qc(t){ls.setTimeout(()=>{let{onUnhandledError:n}=kn;if(n)n(t);else throw t})}function Ba(){}var _w=Bp("C",void 0,void 0);function vw(t){return Bp("E",void 0,t)}function yw(t){return Bp("N",t,void 0)}function Bp(t,n,e){return{kind:t,value:n,error:e}}var Kr=null;function cs(t){if(kn.useDeprecatedSynchronousErrorHandling){let n=!Kr;if(n&&(Kr={errorThrown:!1,error:null}),t(),n){let{errorThrown:e,error:i}=Kr;if(Kr=null,e)throw i}}else t()}function bw(t){kn.useDeprecatedSynchronousErrorHandling&&Kr&&(Kr.errorThrown=!0,Kr.error=t)}var Zr=class extends ce{constructor(n){super(),this.isStopped=!1,n?(this.destination=n,Yc(n)&&n.add(this)):this.destination=cR}static create(n,e,i){return new xi(n,e,i)}next(n){this.isStopped?Vp(yw(n),this):this._next(n)}error(n){this.isStopped?Vp(vw(n),this):(this.isStopped=!0,this._error(n))}complete(){this.isStopped?Vp(_w,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(n){this.destination.next(n)}_error(n){try{this.destination.error(n)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},aR=Function.prototype.bind;function jp(t,n){return aR.call(t,n)}var Hp=class{constructor(n){this.partialObserver=n}next(n){let{partialObserver:e}=this;if(e.next)try{e.next(n)}catch(i){Kc(i)}}error(n){let{partialObserver:e}=this;if(e.error)try{e.error(n)}catch(i){Kc(i)}else Kc(n)}complete(){let{partialObserver:n}=this;if(n.complete)try{n.complete()}catch(e){Kc(e)}}},xi=class extends Zr{constructor(n,e,i){super();let r;if(le(n)||!n)r={next:n??void 0,error:e??void 0,complete:i??void 0};else{let o;this&&kn.useDeprecatedNextContext?(o=Object.create(n),o.unsubscribe=()=>this.unsubscribe(),r={next:n.next&&jp(n.next,o),error:n.error&&jp(n.error,o),complete:n.complete&&jp(n.complete,o)}):r=n}this.destination=new Hp(r)}};function Kc(t){kn.useDeprecatedSynchronousErrorHandling?bw(t):Qc(t)}function lR(t){throw t}function Vp(t,n){let{onStoppedNotification:e}=kn;e&&ls.setTimeout(()=>e(t,n))}var cR={closed:!0,next:Ba,error:lR,complete:Ba};var ds=typeof Symbol=="function"&&Symbol.observable||"@@observable";function zt(t){return t}function Up(...t){return zp(t)}function zp(t){return t.length===0?zt:t.length===1?t[0]:function(e){return t.reduce((i,r)=>r(i),e)}}var J=(()=>{class t{constructor(e){e&&(this._subscribe=e)}lift(e){let i=new t;return i.source=this,i.operator=e,i}subscribe(e,i,r){let o=uR(e)?e:new xi(e,i,r);return cs(()=>{let{operator:s,source:a}=this;o.add(s?s.call(o,a):a?this._subscribe(o):this._trySubscribe(o))}),o}_trySubscribe(e){try{return this._subscribe(e)}catch(i){e.error(i)}}forEach(e,i){return i=ww(i),new i((r,o)=>{let s=new xi({next:a=>{try{e(a)}catch(l){o(l),s.unsubscribe()}},error:o,complete:r});this.subscribe(s)})}_subscribe(e){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(e)}[ds](){return this}pipe(...e){return zp(e)(this)}toPromise(e){return e=ww(e),new e((i,r)=>{let o;this.subscribe(s=>o=s,s=>r(s),()=>i(o))})}}return t.create=n=>new t(n),t})();function ww(t){var n;return(n=t??kn.Promise)!==null&&n!==void 0?n:Promise}function dR(t){return t&&le(t.next)&&le(t.error)&&le(t.complete)}function uR(t){return t&&t instanceof Zr||dR(t)&&Yc(t)}function hR(t){return le(t?.lift)}function de(t){return n=>{if(hR(n))return n.lift(function(e){try{return t(e,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function ue(t,n,e,i,r){return new $p(t,n,e,i,r)}var $p=class extends Zr{constructor(n,e,i,r,o,s){super(n),this.onFinalize=o,this.shouldUnsubscribe=s,this._next=e?function(a){try{e(a)}catch(l){n.error(l)}}:super._next,this._error=r?function(a){try{r(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){n.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:e}=this;super.unsubscribe(),!e&&((n=this.onFinalize)===null||n===void 0||n.call(this))}}};var us={schedule(t){let n=requestAnimationFrame,e=cancelAnimationFrame,{delegate:i}=us;i&&(n=i.requestAnimationFrame,e=i.cancelAnimationFrame);let r=n(o=>{e=void 0,t(o)});return new ce(()=>e?.(r))},requestAnimationFrame(...t){let{delegate:n}=us;return(n?.requestAnimationFrame||requestAnimationFrame)(...t)},cancelAnimationFrame(...t){let{delegate:n}=us;return(n?.cancelAnimationFrame||cancelAnimationFrame)(...t)},delegate:void 0};var Dw=as(t=>function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var E=(()=>{class t extends J{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(e){let i=new Zc(this,this);return i.operator=e,i}_throwIfClosed(){if(this.closed)throw new Dw}next(e){cs(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(e)}})}error(e){cs(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=e;let{observers:i}=this;for(;i.length;)i.shift().error(e)}})}complete(){cs(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:e}=this;for(;e.length;)e.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var e;return((e=this.observers)===null||e===void 0?void 0:e.length)>0}_trySubscribe(e){return this._throwIfClosed(),super._trySubscribe(e)}_subscribe(e){return this._throwIfClosed(),this._checkFinalizedStatuses(e),this._innerSubscribe(e)}_innerSubscribe(e){let{hasError:i,isStopped:r,observers:o}=this;return i||r?Lp:(this.currentObservers=null,o.push(e),new ce(()=>{this.currentObservers=null,Qr(o,e)}))}_checkFinalizedStatuses(e){let{hasError:i,thrownError:r,isStopped:o}=this;i?e.error(r):o&&e.complete()}asObservable(){let e=new J;return e.source=this,e}}return t.create=(n,e)=>new Zc(n,e),t})(),Zc=class extends E{constructor(n,e){super(),this.destination=n,this.source=e}next(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.next)===null||i===void 0||i.call(e,n)}error(n){var e,i;(i=(e=this.destination)===null||e===void 0?void 0:e.error)===null||i===void 0||i.call(e,n)}complete(){var n,e;(e=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||e===void 0||e.call(n)}_subscribe(n){var e,i;return(i=(e=this.source)===null||e===void 0?void 0:e.subscribe(n))!==null&&i!==void 0?i:Lp}};var Ue=class extends E{constructor(n){super(),this._value=n}get value(){return this.getValue()}_subscribe(n){let e=super._subscribe(n);return!e.closed&&n.next(this._value),e}getValue(){let{hasError:n,thrownError:e,_value:i}=this;if(n)throw e;return this._throwIfClosed(),i}next(n){super.next(this._value=n)}};var ja={now(){return(ja.delegate||Date).now()},delegate:void 0};var Si=class extends E{constructor(n=1/0,e=1/0,i=ja){super(),this._bufferSize=n,this._windowTime=e,this._timestampProvider=i,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,n),this._windowTime=Math.max(1,e)}next(n){let{isStopped:e,_buffer:i,_infiniteTimeWindow:r,_timestampProvider:o,_windowTime:s}=this;e||(i.push(n),!r&&i.push(o.now()+s)),this._trimBuffer(),super.next(n)}_subscribe(n){this._throwIfClosed(),this._trimBuffer();let e=this._innerSubscribe(n),{_infiniteTimeWindow:i,_buffer:r}=this,o=r.slice();for(let s=0;s<o.length&&!n.closed;s+=i?1:2)n.next(o[s]);return this._checkFinalizedStatuses(n),e}_trimBuffer(){let{_bufferSize:n,_timestampProvider:e,_buffer:i,_infiniteTimeWindow:r}=this,o=(r?1:2)*n;if(n<1/0&&o<i.length&&i.splice(0,i.length-o),!r){let s=e.now(),a=0;for(let l=1;l<i.length&&i[l]<=s;l+=2)a=l;a&&i.splice(0,a+1)}}};var Xc=class extends ce{constructor(n,e){super()}schedule(n,e=0){return this}};var Va={setInterval(t,n,...e){let{delegate:i}=Va;return i?.setInterval?i.setInterval(t,n,...e):setInterval(t,n,...e)},clearInterval(t){let{delegate:n}=Va;return(n?.clearInterval||clearInterval)(t)},delegate:void 0};var hs=class extends Xc{constructor(n,e){super(n,e),this.scheduler=n,this.work=e,this.pending=!1}schedule(n,e=0){var i;if(this.closed)return this;this.state=n;let r=this.id,o=this.scheduler;return r!=null&&(this.id=this.recycleAsyncId(o,r,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(o,this.id,e),this}requestAsyncId(n,e,i=0){return Va.setInterval(n.flush.bind(n,this),i)}recycleAsyncId(n,e,i=0){if(i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&Va.clearInterval(e)}execute(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;let i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(n,e){let i=!1,r;try{this.work(n)}catch(o){i=!0,r=o||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),r}unsubscribe(){if(!this.closed){let{id:n,scheduler:e}=this,{actions:i}=e;this.work=this.state=this.scheduler=null,this.pending=!1,Qr(i,this),n!=null&&(this.id=this.recycleAsyncId(e,n,null)),this.delay=null,super.unsubscribe()}}};var fs=class t{constructor(n,e=t.now){this.schedulerActionCtor=n,this.now=e}schedule(n,e=0,i){return new this.schedulerActionCtor(this,n).schedule(i,e)}};fs.now=ja.now;var ps=class extends fs{constructor(n,e=fs.now){super(n,e),this.actions=[],this._active=!1}flush(n){let{actions:e}=this;if(this._active){e.push(n);return}let i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}}};var Xr=new ps(hs),Ew=Xr;var Jc=class extends hs{constructor(n,e){super(n,e),this.scheduler=n,this.work=e}requestAsyncId(n,e,i=0){return i!==null&&i>0?super.requestAsyncId(n,e,i):(n.actions.push(this),n._scheduled||(n._scheduled=us.requestAnimationFrame(()=>n.flush(void 0))))}recycleAsyncId(n,e,i=0){var r;if(i!=null?i>0:this.delay>0)return super.recycleAsyncId(n,e,i);let{actions:o}=n;e!=null&&e===n._scheduled&&((r=o[o.length-1])===null||r===void 0?void 0:r.id)!==e&&(us.cancelAnimationFrame(e),n._scheduled=void 0)}};var ed=class extends ps{flush(n){this._active=!0;let e;n?e=n.id:(e=this._scheduled,this._scheduled=void 0);let{actions:i}=this,r;n=n||i.shift();do if(r=n.execute(n.state,n.delay))break;while((n=i[0])&&n.id===e&&i.shift());if(this._active=!1,r){for(;(n=i[0])&&n.id===e&&i.shift();)n.unsubscribe();throw r}}};var td=new ed(Jc);var $e=new J(t=>t.complete());function nd(t){return t&&le(t.schedule)}function Gp(t){return t[t.length-1]}function id(t){return le(Gp(t))?t.pop():void 0}function ti(t){return nd(Gp(t))?t.pop():void 0}function Cw(t,n){return typeof Gp(t)=="number"?t.pop():n}function Sw(t,n,e,i){function r(o){return o instanceof e?o:new e(function(s){s(o)})}return new(e||(e=Promise))(function(o,s){function a(d){try{c(i.next(d))}catch(h){s(h)}}function l(d){try{c(i.throw(d))}catch(h){s(h)}}function c(d){d.done?o(d.value):r(d.value).then(a,l)}c((i=i.apply(t,n||[])).next())})}function xw(t){var n=typeof Symbol=="function"&&Symbol.iterator,e=n&&t[n],i=0;if(e)return e.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function Jr(t){return this instanceof Jr?(this.v=t,this):new Jr(t)}function Iw(t,n,e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=e.apply(t,n||[]),r,o=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),r[Symbol.asyncIterator]=function(){return this},r;function s(p){return function(m){return Promise.resolve(m).then(p,h)}}function a(p,m){i[p]&&(r[p]=function(b){return new Promise(function(C,M){o.push([p,b,C,M])>1||l(p,b)})},m&&(r[p]=m(r[p])))}function l(p,m){try{c(i[p](m))}catch(b){f(o[0][3],b)}}function c(p){p.value instanceof Jr?Promise.resolve(p.value.v).then(d,h):f(o[0][2],p)}function d(p){l("next",p)}function h(p){l("throw",p)}function f(p,m){p(m),o.shift(),o.length&&l(o[0][0],o[0][1])}}function Tw(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n=t[Symbol.asyncIterator],e;return n?n.call(t):(t=typeof xw=="function"?xw(t):t[Symbol.iterator](),e={},i("next"),i("throw"),i("return"),e[Symbol.asyncIterator]=function(){return this},e);function i(o){e[o]=t[o]&&function(s){return new Promise(function(a,l){s=t[o](s),r(a,l,s.done,s.value)})}}function r(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}var rd=t=>t&&typeof t.length=="number"&&typeof t!="function";function od(t){return le(t?.then)}function sd(t){return le(t[ds])}function ad(t){return Symbol.asyncIterator&&le(t?.[Symbol.asyncIterator])}function ld(t){return new TypeError(`You provided ${t!==null&&typeof t=="object"?"an invalid object":`'${t}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function fR(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var cd=fR();function dd(t){return le(t?.[cd])}function ud(t){return Iw(this,arguments,function*(){let e=t.getReader();try{for(;;){let{value:i,done:r}=yield Jr(e.read());if(r)return yield Jr(void 0);yield yield Jr(i)}}finally{e.releaseLock()}})}function hd(t){return le(t?.getReader)}function Be(t){if(t instanceof J)return t;if(t!=null){if(sd(t))return pR(t);if(rd(t))return mR(t);if(od(t))return gR(t);if(ad(t))return Mw(t);if(dd(t))return _R(t);if(hd(t))return vR(t)}throw ld(t)}function pR(t){return new J(n=>{let e=t[ds]();if(le(e.subscribe))return e.subscribe(n);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function mR(t){return new J(n=>{for(let e=0;e<t.length&&!n.closed;e++)n.next(t[e]);n.complete()})}function gR(t){return new J(n=>{t.then(e=>{n.closed||(n.next(e),n.complete())},e=>n.error(e)).then(null,Qc)})}function _R(t){return new J(n=>{for(let e of t)if(n.next(e),n.closed)return;n.complete()})}function Mw(t){return new J(n=>{yR(t,n).catch(e=>n.error(e))})}function vR(t){return Mw(ud(t))}function yR(t,n){var e,i,r,o;return Sw(this,void 0,void 0,function*(){try{for(e=Tw(t);i=yield e.next(),!i.done;){let s=i.value;if(n.next(s),n.closed)return}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=e.return)&&(yield o.call(e))}finally{if(r)throw r.error}}n.complete()})}function en(t,n,e,i=0,r=!1){let o=n.schedule(function(){e(),r?t.add(this.schedule(null,i)):this.unsubscribe()},i);if(t.add(o),!r)return o}function fd(t,n=0){return de((e,i)=>{e.subscribe(ue(i,r=>en(i,t,()=>i.next(r),n),()=>en(i,t,()=>i.complete(),n),r=>en(i,t,()=>i.error(r),n)))})}function pd(t,n=0){return de((e,i)=>{i.add(t.schedule(()=>e.subscribe(i),n))})}function Aw(t,n){return Be(t).pipe(pd(n),fd(n))}function kw(t,n){return Be(t).pipe(pd(n),fd(n))}function Rw(t,n){return new J(e=>{let i=0;return n.schedule(function(){i===t.length?e.complete():(e.next(t[i++]),e.closed||this.schedule())})})}function Nw(t,n){return new J(e=>{let i;return en(e,n,()=>{i=t[cd](),en(e,n,()=>{let r,o;try{({value:r,done:o}=i.next())}catch(s){e.error(s);return}o?e.complete():e.next(r)},0,!0)}),()=>le(i?.return)&&i.return()})}function md(t,n){if(!t)throw new Error("Iterable cannot be null");return new J(e=>{en(e,n,()=>{let i=t[Symbol.asyncIterator]();en(e,n,()=>{i.next().then(r=>{r.done?e.complete():e.next(r.value)})},0,!0)})})}function Ow(t,n){return md(ud(t),n)}function Pw(t,n){if(t!=null){if(sd(t))return Aw(t,n);if(rd(t))return Rw(t,n);if(od(t))return kw(t,n);if(ad(t))return md(t,n);if(dd(t))return Nw(t,n);if(hd(t))return Ow(t,n)}throw ld(t)}function Oe(t,n){return n?Pw(t,n):Be(t)}function j(...t){let n=ti(t);return Oe(t,n)}function Ha(t,n){let e=le(t)?t:()=>t,i=r=>r.error(e());return new J(n?r=>n.schedule(i,0,r):i)}function Ua(t){return!!t&&(t instanceof J||le(t.lift)&&le(t.subscribe))}var eo=as(t=>function(){t(this),this.name="EmptyError",this.message="no elements in sequence"});function Fw(t){return t instanceof Date&&!isNaN(t)}function W(t,n){return de((e,i)=>{let r=0;e.subscribe(ue(i,o=>{i.next(t.call(n,o,r++))}))})}var{isArray:bR}=Array;function wR(t,n){return bR(n)?t(...n):t(n)}function gd(t){return W(n=>wR(t,n))}var{isArray:DR}=Array,{getPrototypeOf:ER,prototype:CR,keys:xR}=Object;function _d(t){if(t.length===1){let n=t[0];if(DR(n))return{args:n,keys:null};if(SR(n)){let e=xR(n);return{args:e.map(i=>n[i]),keys:e}}}return{args:t,keys:null}}function SR(t){return t&&typeof t=="object"&&ER(t)===CR}function vd(t,n){return t.reduce((e,i,r)=>(e[i]=n[r],e),{})}function or(...t){let n=ti(t),e=id(t),{args:i,keys:r}=_d(t);if(i.length===0)return Oe([],n);let o=new J(IR(i,n,r?s=>vd(r,s):zt));return e?o.pipe(gd(e)):o}function IR(t,n,e=zt){return i=>{Lw(n,()=>{let{length:r}=t,o=new Array(r),s=r,a=r;for(let l=0;l<r;l++)Lw(n,()=>{let c=Oe(t[l],n),d=!1;c.subscribe(ue(i,h=>{o[l]=h,d||(d=!0,a--),a||i.next(e(o.slice()))},()=>{--s||i.complete()}))},i)},i)}}function Lw(t,n,e){t?en(e,t,n):n()}function Bw(t,n,e,i,r,o,s,a){let l=[],c=0,d=0,h=!1,f=()=>{h&&!l.length&&!c&&n.complete()},p=b=>c<i?m(b):l.push(b),m=b=>{o&&n.next(b),c++;let C=!1;Be(e(b,d++)).subscribe(ue(n,M=>{r?.(M),o?p(M):n.next(M)},()=>{C=!0},void 0,()=>{if(C)try{for(c--;l.length&&c<i;){let M=l.shift();s?en(n,s,()=>m(M)):m(M)}f()}catch(M){n.error(M)}}))};return t.subscribe(ue(n,p,()=>{h=!0,f()})),()=>{a?.()}}function At(t,n,e=1/0){return le(n)?At((i,r)=>W((o,s)=>n(i,o,r,s))(Be(t(i,r))),e):(typeof n=="number"&&(e=n),de((i,r)=>Bw(i,r,t,e)))}function sr(t=1/0){return At(zt,t)}function jw(){return sr(1)}function ar(...t){return jw()(Oe(t,ti(t)))}function Ii(t){return new J(n=>{Be(t()).subscribe(n)})}function lr(...t){let n=id(t),{args:e,keys:i}=_d(t),r=new J(o=>{let{length:s}=e;if(!s){o.complete();return}let a=new Array(s),l=s,c=s;for(let d=0;d<s;d++){let h=!1;Be(e[d]).subscribe(ue(o,f=>{h||(h=!0,c--),a[d]=f},()=>l--,void 0,()=>{(!l||!h)&&(c||o.next(i?vd(i,a):a),o.complete())}))}});return n?r.pipe(gd(n)):r}function ms(t=0,n,e=Ew){let i=-1;return n!=null&&(nd(n)?e=n:i=n),new J(r=>{let o=Fw(t)?+t-e.now():t;o<0&&(o=0);let s=0;return e.schedule(function(){r.closed||(r.next(s++),0<=i?this.schedule(void 0,i):r.complete())},o)})}function Wp(t=0,n=Xr){return t<0&&(t=0),ms(t,t,n)}function yt(...t){let n=ti(t),e=Cw(t,1/0),i=t;return i.length?i.length===1?Be(i[0]):sr(e)(Oe(i,n)):$e}function re(t,n){return de((e,i)=>{let r=0;e.subscribe(ue(i,o=>t.call(n,o,r++)&&i.next(o)))})}function Vw(t){return de((n,e)=>{let i=!1,r=null,o=null,s=!1,a=()=>{if(o?.unsubscribe(),o=null,i){i=!1;let c=r;r=null,e.next(c)}s&&e.complete()},l=()=>{o=null,s&&e.complete()};n.subscribe(ue(e,c=>{i=!0,r=c,o||Be(t(c)).subscribe(o=ue(e,a,l))},()=>{s=!0,(!i||!o||o.closed)&&e.complete()}))})}function yd(t,n=Xr){return Vw(()=>ms(t,n))}function un(t){return de((n,e)=>{let i=null,r=!1,o;i=n.subscribe(ue(e,void 0,void 0,s=>{o=Be(t(s,un(t)(n))),i?(i.unsubscribe(),i=null,o.subscribe(e)):r=!0})),r&&(i.unsubscribe(),i=null,o.subscribe(e))})}function cr(t,n){return le(n)?At(t,n,1):At(t,1)}function Ti(t,n=Xr){return de((e,i)=>{let r=null,o=null,s=null,a=()=>{if(r){r.unsubscribe(),r=null;let c=o;o=null,i.next(c)}};function l(){let c=s+t,d=n.now();if(d<c){r=this.schedule(void 0,c-d),i.add(r);return}a()}e.subscribe(ue(i,c=>{o=c,s=n.now(),r||(r=n.schedule(l,t),i.add(r))},()=>{a(),i.complete()},void 0,()=>{o=r=null}))})}function Hw(t){return de((n,e)=>{let i=!1;n.subscribe(ue(e,r=>{i=!0,e.next(r)},()=>{i||e.next(t),e.complete()}))})}function Me(t){return t<=0?()=>$e:de((n,e)=>{let i=0;n.subscribe(ue(e,r=>{++i<=t&&(e.next(r),t<=i&&e.complete())}))})}function bd(t){return W(()=>t)}function wd(t,n=zt){return t=t??TR,de((e,i)=>{let r,o=!0;e.subscribe(ue(i,s=>{let a=n(s);(o||!t(r,a))&&(o=!1,r=a,i.next(s))}))})}function TR(t,n){return t===n}function Uw(t=MR){return de((n,e)=>{let i=!1;n.subscribe(ue(e,r=>{i=!0,e.next(r)},()=>i?e.complete():e.error(t())))})}function MR(){return new eo}function ni(t){return de((n,e)=>{try{n.subscribe(e)}finally{e.add(t)}})}function Mi(t,n){let e=arguments.length>=2;return i=>i.pipe(t?re((r,o)=>t(r,o,i)):zt,Me(1),e?Hw(n):Uw(()=>new eo))}function Dd(t){return t<=0?()=>$e:de((n,e)=>{let i=[];n.subscribe(ue(e,r=>{i.push(r),t<i.length&&i.shift()},()=>{for(let r of i)e.next(r);e.complete()},void 0,()=>{i=null}))})}function Ed(){return de((t,n)=>{let e,i=!1;t.subscribe(ue(n,r=>{let o=e;e=r,i&&n.next([o,r]),i=!0}))})}function qp(t=1/0){let n;t&&typeof t=="object"?n=t:n={count:t};let{count:e=1/0,delay:i,resetOnSuccess:r=!1}=n;return e<=0?zt:de((o,s)=>{let a=0,l,c=()=>{let d=!1;l=o.subscribe(ue(s,h=>{r&&(a=0),s.next(h)},void 0,h=>{if(a++<e){let f=()=>{l?(l.unsubscribe(),l=null,c()):d=!0};if(i!=null){let p=typeof i=="number"?ms(i):Be(i(h,a)),m=ue(s,()=>{m.unsubscribe(),f()},()=>{s.complete()});p.subscribe(m)}else f()}else s.error(h)})),d&&(l.unsubscribe(),l=null,c())};c()})}function za(t={}){let{connector:n=()=>new E,resetOnError:e=!0,resetOnComplete:i=!0,resetOnRefCountZero:r=!0}=t;return o=>{let s,a,l,c=0,d=!1,h=!1,f=()=>{a?.unsubscribe(),a=void 0},p=()=>{f(),s=l=void 0,d=h=!1},m=()=>{let b=s;p(),b?.unsubscribe()};return de((b,C)=>{c++,!h&&!d&&f();let M=l=l??n();C.add(()=>{c--,c===0&&!h&&!d&&(a=Yp(m,r))}),M.subscribe(C),!s&&c>0&&(s=new xi({next:Y=>M.next(Y),error:Y=>{h=!0,f(),a=Yp(p,e,Y),M.error(Y)},complete:()=>{d=!0,f(),a=Yp(p,i),M.complete()}}),Be(b).subscribe(s))})(o)}}function Yp(t,n,...e){if(n===!0){t();return}if(n===!1)return;let i=new xi({next:()=>{i.unsubscribe(),t()}});return Be(n(...e)).subscribe(i)}function to(t,n,e){let i,r=!1;return t&&typeof t=="object"?{bufferSize:i=1/0,windowTime:n=1/0,refCount:r=!1,scheduler:e}=t:i=t??1/0,za({connector:()=>new Si(i,n,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:r})}function $a(t){return re((n,e)=>t<=e)}function ft(...t){let n=ti(t);return de((e,i)=>{(n?ar(t,e,n):ar(t,e)).subscribe(i)})}function We(t,n){return de((e,i)=>{let r=null,o=0,s=!1,a=()=>s&&!r&&i.complete();e.subscribe(ue(i,l=>{r?.unsubscribe();let c=0,d=o++;Be(t(l,d)).subscribe(r=ue(i,h=>i.next(n?n(l,h,d,c++):h),()=>{r=null,a()}))},()=>{s=!0,a()}))})}function he(t){return de((n,e)=>{Be(t).subscribe(ue(e,()=>e.complete(),Ba)),!e.closed&&n.subscribe(e)})}function lt(t,n,e){let i=le(t)||n||e?{next:t,error:n,complete:e}:t;return i?de((r,o)=>{var s;(s=i.subscribe)===null||s===void 0||s.call(i);let a=!0;r.subscribe(ue(o,l=>{var c;(c=i.next)===null||c===void 0||c.call(i,l),o.next(l)},()=>{var l;a=!1,(l=i.complete)===null||l===void 0||l.call(i),o.complete()},l=>{var c;a=!1,(c=i.error)===null||c===void 0||c.call(i,l),o.error(l)},()=>{var l,c;a&&((l=i.unsubscribe)===null||l===void 0||l.call(i)),(c=i.finalize)===null||c===void 0||c.call(i)}))}):zt}var Qp;function Cd(){return Qp}function ii(t){let n=Qp;return Qp=t,n}var zw=Symbol("NotFound");function gs(t){return t===zw||t?.name==="\u0275NotFound"}function $w(t){let n=K(null);try{return t()}finally{K(n)}}var kd="https://angular.dev/best-practices/security#preventing-cross-site-scripting-xss",w=class extends Error{code;constructor(n,e){super(ri(n,e)),this.code=n}};function AR(t){return`NG0${Math.abs(t)}`}function ri(t,n){return`${AR(t)}${n?": "+n:""}`}var nn=globalThis;function Pe(t){for(let n in t)if(t[n]===Pe)return n;throw Error("")}function Qw(t,n){for(let e in n)n.hasOwnProperty(e)&&!t.hasOwnProperty(e)&&(t[e]=n[e])}function Za(t){if(typeof t=="string")return t;if(Array.isArray(t))return`[${t.map(Za).join(", ")}]`;if(t==null)return""+t;let n=t.overriddenName||t.name;if(n)return`${n}`;let e=t.toString();if(e==null)return""+e;let i=e.indexOf(`
`);return i>=0?e.slice(0,i):e}function Rd(t,n){return t?n?`${t} ${n}`:t:n||""}var kR=Pe({__forward_ref__:Pe});function rn(t){return t.__forward_ref__=rn,t}function bt(t){return lm(t)?t():t}function lm(t){return typeof t=="function"&&t.hasOwnProperty(kR)&&t.__forward_ref__===rn}function v(t){return{token:t.token,providedIn:t.providedIn||null,factory:t.factory,value:void 0}}function A(t){return{providers:t.providers||[],imports:t.imports||[]}}function Xa(t){return RR(t,Nd)}function cm(t){return Xa(t)!==null}function RR(t,n){return t.hasOwnProperty(n)&&t[n]||null}function NR(t){let n=t?.[Nd]??null;return n||null}function Zp(t){return t&&t.hasOwnProperty(Sd)?t[Sd]:null}var Nd=Pe({\u0275prov:Pe}),Sd=Pe({\u0275inj:Pe}),g=class{_desc;ngMetadataName="InjectionToken";\u0275prov;constructor(n,e){this._desc=n,this.\u0275prov=void 0,typeof e=="number"?this.__NG_ELEMENT_ID__=e:e!==void 0&&(this.\u0275prov=v({token:this,providedIn:e.providedIn||"root",factory:e.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function dm(t){return t&&!!t.\u0275providers}var um=Pe({\u0275cmp:Pe}),hm=Pe({\u0275dir:Pe}),fm=Pe({\u0275pipe:Pe}),pm=Pe({\u0275mod:Pe}),Wa=Pe({\u0275fac:Pe}),so=Pe({__NG_ELEMENT_ID__:Pe}),Gw=Pe({__NG_ENV_ID__:Pe});function mm(t){return Pd(t,"@NgModule"),t[pm]||null}function oi(t){return Pd(t,"@Component"),t[um]||null}function Od(t){return Pd(t,"@Directive"),t[hm]||null}function Kw(t){return Pd(t,"@Pipe"),t[fm]||null}function Pd(t,n){if(t==null)throw new w(-919,!1)}function Ja(t){return typeof t=="string"?t:t==null?"":String(t)}var Zw=Pe({ngErrorCode:Pe}),OR=Pe({ngErrorMessage:Pe}),PR=Pe({ngTokenPath:Pe});function gm(t,n){return Xw("",-200,n)}function Fd(t,n){throw new w(-201,!1)}function Xw(t,n,e){let i=new w(n,t);return i[Zw]=n,i[OR]=t,e&&(i[PR]=e),i}function FR(t){return t[Zw]}var Xp;function Jw(){return Xp}function $t(t){let n=Xp;return Xp=t,n}function _m(t,n,e){let i=Xa(t);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(e&8)return null;if(n!==void 0)return n;Fd(t,"")}var LR={},no=LR,BR="__NG_DI_FLAG__",Jp=class{injector;constructor(n){this.injector=n}retrieve(n,e){let i=io(e)||0;try{return this.injector.get(n,i&8?null:no,i)}catch(r){if(gs(r))return r;throw r}}};function jR(t,n=0){let e=Cd();if(e===void 0)throw new w(-203,!1);if(e===null)return _m(t,void 0,n);{let i=VR(n),r=e.retrieve(t,i);if(gs(r)){if(i.optional)return null;throw r}return r}}function I(t,n=0){return(Jw()||jR)(bt(t),n)}function u(t,n){return I(t,io(n))}function io(t){return typeof t>"u"||typeof t=="number"?t:0|(t.optional&&8)|(t.host&&1)|(t.self&&2)|(t.skipSelf&&4)}function VR(t){return{optional:!!(t&8),host:!!(t&1),self:!!(t&2),skipSelf:!!(t&4)}}function em(t){let n=[];for(let e=0;e<t.length;e++){let i=bt(t[e]);if(Array.isArray(i)){if(i.length===0)throw new w(900,!1);let r,o=0;for(let s=0;s<i.length;s++){let a=i[s],l=HR(a);typeof l=="number"?l===-1?r=a.token:o|=l:r=a}n.push(I(r,o))}else n.push(I(i))}return n}function HR(t){return t[BR]}function dr(t,n){let e=t.hasOwnProperty(Wa);return e?t[Wa]:null}function e0(t,n,e){if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(e&&(r=e(r),o=e(o)),o!==r)return!1}return!0}function t0(t){return t.flat(Number.POSITIVE_INFINITY)}function Ld(t,n){t.forEach(e=>Array.isArray(e)?Ld(e,n):n(e))}function vm(t,n,e){n>=t.length?t.push(e):t.splice(n,0,e)}function el(t,n){return n>=t.length-1?t.pop():t.splice(n,1)[0]}function n0(t,n){let e=[];for(let i=0;i<t;i++)e.push(n);return e}function i0(t,n,e,i){let r=t.length;if(r==n)t.push(e,i);else if(r===1)t.push(i,t[0]),t[0]=e;else{for(r--,t.push(t[r-1],t[r]);r>n;){let o=r-2;t[r]=t[o],r--}t[n]=e,t[n+1]=i}}function Bd(t,n,e){let i=vs(t,n);return i>=0?t[i|1]=e:(i=~i,i0(t,i,n,e)),i}function jd(t,n){let e=vs(t,n);if(e>=0)return t[e|1]}function vs(t,n){return UR(t,n,1)}function UR(t,n,e){let i=0,r=t.length>>e;for(;r!==i;){let o=i+(r-i>>1),s=t[o<<e];if(n===s)return o<<e;s>n?r=o:i=o+1}return~(r<<e)}var Nn={},Ft=[],ki=new g(""),ym=new g("",-1),bm=new g(""),qa=class{get(n,e=no){if(e===no){let r=Xw("",-201);throw r.name="\u0275NotFound",r}return e}};function Gt(t){return{\u0275providers:t}}function r0(...t){return{\u0275providers:wm(!0,t),\u0275fromNgModule:!0}}function wm(t,...n){let e=[],i=new Set,r,o=s=>{e.push(s)};return Ld(n,s=>{let a=s;Id(a,o,[],i)&&(r||=[],r.push(a))}),r!==void 0&&o0(r,o),e}function o0(t,n){for(let e=0;e<t.length;e++){let{ngModule:i,providers:r}=t[e];Dm(r,o=>{n(o,i)})}}function Id(t,n,e,i){if(t=bt(t),!t)return!1;let r=null,o=Zp(t),s=!o&&oi(t);if(!o&&!s){let l=t.ngModule;if(o=Zp(l),o)r=l;else return!1}else{if(s&&!s.standalone)return!1;r=t}let a=i.has(r);if(s){if(a)return!1;if(i.add(r),s.dependencies){let l=typeof s.dependencies=="function"?s.dependencies():s.dependencies;for(let c of l)Id(c,n,e,i)}}else if(o){if(o.imports!=null&&!a){i.add(r);let c;Ld(o.imports,d=>{Id(d,n,e,i)&&(c||=[],c.push(d))}),c!==void 0&&o0(c,n)}if(!a){let c=dr(r)||(()=>new r);n({provide:r,useFactory:c,deps:Ft},r),n({provide:bm,useValue:r,multi:!0},r),n({provide:ki,useValue:()=>I(r),multi:!0},r)}let l=o.providers;if(l!=null&&!a){let c=t;Dm(l,d=>{n(d,c)})}}else return!1;return r!==t&&t.providers!==void 0}function Dm(t,n){for(let e of t)dm(e)&&(e=e.\u0275providers),Array.isArray(e)?Dm(e,n):n(e)}var zR=Pe({provide:String,useValue:Pe});function s0(t){return t!==null&&typeof t=="object"&&zR in t}function $R(t){return!!(t&&t.useExisting)}function GR(t){return!!(t&&t.useFactory)}function ro(t){return typeof t=="function"}function a0(t){return!!t.useClass}var tl=new g(""),xd={},Ww={},Kp;function ys(){return Kp===void 0&&(Kp=new qa),Kp}var Fe=class{},oo=class extends Fe{parent;source;scopes;records=new Map;_ngOnDestroyHooks=new Set;_onDestroyHooks=[];get destroyed(){return this._destroyed}_destroyed=!1;injectorDefTypes;constructor(n,e,i,r){super(),this.parent=e,this.source=i,this.scopes=r,nm(n,s=>this.processProvider(s)),this.records.set(ym,_s(void 0,this)),r.has("environment")&&this.records.set(Fe,_s(void 0,this));let o=this.records.get(tl);o!=null&&typeof o.value=="string"&&this.scopes.add(o.value),this.injectorDefTypes=new Set(this.get(bm,Ft,{self:!0}))}retrieve(n,e){let i=io(e)||0;try{return this.get(n,no,i)}catch(r){if(gs(r))return r;throw r}}destroy(){Ga(this),this._destroyed=!0;let n=K(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let e=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of e)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),K(n)}}onDestroy(n){return Ga(this),this._onDestroyHooks.push(n),()=>this.removeOnDestroy(n)}runInContext(n){Ga(this);let e=ii(this),i=$t(void 0),r;try{return n()}finally{ii(e),$t(i)}}get(n,e=no,i){if(Ga(this),n.hasOwnProperty(Gw))return n[Gw](this);let r=io(i),o,s=ii(this),a=$t(void 0);try{if(!(r&4)){let c=this.records.get(n);if(c===void 0){let d=KR(n)&&Xa(n);d&&this.injectableDefInScope(d)?c=_s(tm(n),xd):c=null,this.records.set(n,c)}if(c!=null)return this.hydrate(n,c,r)}let l=r&2?ys():this.parent;return e=r&8&&e===no?null:e,l.get(n,e)}catch(l){let c=FR(l);throw c===-200||c===-201?new w(c,null):l}finally{$t(a),ii(s)}}resolveInjectorInitializers(){let n=K(null),e=ii(this),i=$t(void 0),r;try{let o=this.get(ki,Ft,{self:!0});for(let s of o)s()}finally{ii(e),$t(i),K(n)}}toString(){return"R3Injector[...]"}processProvider(n){n=bt(n);let e=ro(n)?n:bt(n&&n.provide),i=qR(n);if(!ro(n)&&n.multi===!0){let r=this.records.get(e);r||(r=_s(void 0,xd,!0),r.factory=()=>em(r.multi),this.records.set(e,r)),e=n,r.multi.push(n)}this.records.set(e,i)}hydrate(n,e,i){let r=K(null);try{if(e.value===Ww)throw gm("");return e.value===xd&&(e.value=Ww,e.value=e.factory(void 0,i)),typeof e.value=="object"&&e.value&&QR(e.value)&&this._ngOnDestroyHooks.add(e.value),e.value}finally{K(r)}}injectableDefInScope(n){if(!n.providedIn)return!1;let e=bt(n.providedIn);return typeof e=="string"?e==="any"||this.scopes.has(e):this.injectorDefTypes.has(e)}removeOnDestroy(n){let e=this._onDestroyHooks.indexOf(n);e!==-1&&this._onDestroyHooks.splice(e,1)}};function tm(t){let n=Xa(t),e=n!==null?n.factory:dr(t);if(e!==null)return e;if(t instanceof g)throw new w(-204,!1);if(t instanceof Function)return WR(t);throw new w(-204,!1)}function WR(t){if(t.length>0)throw new w(-204,!1);let e=NR(t);return e!==null?()=>e.factory(t):()=>new t}function qR(t){if(s0(t))return _s(void 0,t.useValue);{let n=Em(t);return _s(n,xd)}}function Em(t,n,e){let i;if(ro(t)){let r=bt(t);return dr(r)||tm(r)}else if(s0(t))i=()=>bt(t.useValue);else if(GR(t))i=()=>t.useFactory(...em(t.deps||[]));else if($R(t))i=(r,o)=>I(bt(t.useExisting),o!==void 0&&o&8?8:void 0);else{let r=bt(t&&(t.useClass||t.provide));if(YR(t))i=()=>new r(...em(t.deps));else return dr(r)||tm(r)}return i}function Ga(t){if(t.destroyed)throw new w(-205,!1)}function _s(t,n,e=!1){return{factory:t,value:n,multi:e?[]:void 0}}function YR(t){return!!t.deps}function QR(t){return t!==null&&typeof t=="object"&&typeof t.ngOnDestroy=="function"}function KR(t){return typeof t=="function"||typeof t=="object"&&t.ngMetadataName==="InjectionToken"}function nm(t,n){for(let e of t)Array.isArray(e)?nm(e,n):e&&dm(e)?nm(e.\u0275providers,n):n(e)}function pt(t,n){let e;t instanceof oo?(Ga(t),e=t):e=new Jp(t);let i,r=ii(e),o=$t(void 0);try{return n()}finally{ii(r),$t(o)}}function Cm(){return Jw()!==void 0||Cd()!=null}var On=0,X=1,ne=2,wt=3,yn=4,Wt=5,ao=6,bs=7,ct=8,Ri=9,si=10,ze=11,ws=12,xm=13,lo=14,qt=15,fr=16,co=17,ai=18,Ni=19,Sm=20,Ai=21,Vd=22,ur=23,hn=24,uo=25,pr=26,et=27,l0=1,Im=6,mr=7,nl=8,ho=9,ot=10;function Oi(t){return Array.isArray(t)&&typeof t[l0]=="object"}function Pn(t){return Array.isArray(t)&&t[l0]===!0}function Tm(t){return(t.flags&4)!==0}function Pi(t){return t.componentOffset>-1}function il(t){return(t.flags&1)===1}function Fn(t){return!!t.template}function Ds(t){return(t[ne]&512)!==0}function fo(t){return(t[ne]&256)===256}var Mm="svg",c0="math";function bn(t){for(;Array.isArray(t);)t=t[On];return t}function Am(t,n){return bn(n[t])}function Ln(t,n){return bn(n[t.index])}function Hd(t,n){return t.data[n]}function km(t,n){return t[n]}function Rm(t,n,e,i){e>=t.data.length&&(t.data[e]=null,t.blueprint[e]=null),n[e]=i}function wn(t,n){let e=n[t];return Oi(e)?e:e[On]}function d0(t){return(t[ne]&4)===4}function Ud(t){return(t[ne]&128)===128}function u0(t){return Pn(t[wt])}function Dn(t,n){return n==null?null:t[n]}function Nm(t){t[co]=0}function Om(t){t[ne]&1024||(t[ne]|=1024,Ud(t)&&po(t))}function h0(t,n){for(;t>0;)n=n[lo],t--;return n}function rl(t){return!!(t[ne]&9216||t[hn]?.dirty)}function zd(t){t[si].changeDetectionScheduler?.notify(8),t[ne]&64&&(t[ne]|=1024),rl(t)&&po(t)}function po(t){t[si].changeDetectionScheduler?.notify(0);let n=hr(t);for(;n!==null&&!(n[ne]&8192||(n[ne]|=8192,!Ud(n)));)n=hr(n)}function Pm(t,n){if(fo(t))throw new w(911,!1);t[Ai]===null&&(t[Ai]=[]),t[Ai].push(n)}function f0(t,n){if(t[Ai]===null)return;let e=t[Ai].indexOf(n);e!==-1&&t[Ai].splice(e,1)}function hr(t){let n=t[wt];return Pn(n)?n[wt]:n}function Fm(t){return t[bs]??=[]}function Lm(t){return t.cleanup??=[]}function p0(t,n,e,i){let r=Fm(n);r.push(e),t.firstCreatePass&&Lm(t).push(i,r.length-1)}var fe={lFrame:S0(null),bindingsEnabled:!0,skipHydrationRootTNode:null};var im=!1;function m0(){return fe.lFrame.elementDepthCount}function g0(){fe.lFrame.elementDepthCount++}function Bm(){fe.lFrame.elementDepthCount--}function jm(){return fe.bindingsEnabled}function Vm(){return fe.skipHydrationRootTNode!==null}function Hm(t){return fe.skipHydrationRootTNode===t}function Um(){fe.skipHydrationRootTNode=null}function ie(){return fe.lFrame.lView}function Qe(){return fe.lFrame.tView}function tt(t){return fe.lFrame.contextLView=t,t[ct]}function nt(t){return fe.lFrame.contextLView=null,t}function Dt(){let t=zm();for(;t!==null&&t.type===64;)t=t.parent;return t}function zm(){return fe.lFrame.currentTNode}function _0(){let t=fe.lFrame,n=t.currentTNode;return t.isParent?n:n.parent}function Es(t,n){let e=fe.lFrame;e.currentTNode=t,e.isParent=n}function $m(){return fe.lFrame.isParent}function Gm(){fe.lFrame.isParent=!1}function v0(){return fe.lFrame.contextLView}function Wm(){return im}function Ya(t){let n=im;return im=t,n}function qm(){let t=fe.lFrame,n=t.bindingRootIndex;return n===-1&&(n=t.bindingRootIndex=t.tView.bindingStartIndex),n}function y0(){return fe.lFrame.bindingIndex}function b0(t){return fe.lFrame.bindingIndex=t}function gr(){return fe.lFrame.bindingIndex++}function $d(t){let n=fe.lFrame,e=n.bindingIndex;return n.bindingIndex=n.bindingIndex+t,e}function w0(){return fe.lFrame.inI18n}function D0(t,n){let e=fe.lFrame;e.bindingIndex=e.bindingRootIndex=t,Gd(n)}function E0(){return fe.lFrame.currentDirectiveIndex}function Gd(t){fe.lFrame.currentDirectiveIndex=t}function C0(t){let n=fe.lFrame.currentDirectiveIndex;return n===-1?null:t[n]}function Wd(){return fe.lFrame.currentQueryIndex}function ol(t){fe.lFrame.currentQueryIndex=t}function ZR(t){let n=t[X];return n.type===2?n.declTNode:n.type===1?t[Wt]:null}function Ym(t,n,e){if(e&4){let r=n,o=t;for(;r=r.parent,r===null&&!(e&1);)if(r=ZR(o),r===null||(o=o[lo],r.type&10))break;if(r===null)return!1;n=r,t=o}let i=fe.lFrame=x0();return i.currentTNode=n,i.lView=t,!0}function qd(t){let n=x0(),e=t[X];fe.lFrame=n,n.currentTNode=e.firstChild,n.lView=t,n.tView=e,n.contextLView=t,n.bindingIndex=e.bindingStartIndex,n.inI18n=!1}function x0(){let t=fe.lFrame,n=t===null?null:t.child;return n===null?S0(t):n}function S0(t){let n={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:t,child:null,inI18n:!1};return t!==null&&(t.child=n),n}function I0(){let t=fe.lFrame;return fe.lFrame=t.parent,t.currentTNode=null,t.lView=null,t}var Qm=I0;function Yd(){let t=I0();t.isParent=!0,t.tView=null,t.selectedIndex=-1,t.contextLView=null,t.elementDepthCount=0,t.currentDirectiveIndex=-1,t.currentNamespace=null,t.bindingRootIndex=-1,t.bindingIndex=-1,t.currentQueryIndex=0}function T0(t){return(fe.lFrame.contextLView=h0(t,fe.lFrame.contextLView))[ct]}function li(){return fe.lFrame.selectedIndex}function _r(t){fe.lFrame.selectedIndex=t}function sl(){let t=fe.lFrame;return Hd(t.tView,t.selectedIndex)}function mo(){fe.lFrame.currentNamespace=Mm}function M0(){return fe.lFrame.currentNamespace}var A0=!0;function Qd(){return A0}function Kd(t){A0=t}function rm(t,n=null,e=null,i){let r=Km(t,n,e,i);return r.resolveInjectorInitializers(),r}function Km(t,n=null,e=null,i,r=new Set){let o=[e||Ft,r0(t)],s;return new oo(o,n||ys(),s||null,r)}var B=class t{static THROW_IF_NOT_FOUND=no;static NULL=new qa;static create(n,e){if(Array.isArray(n))return rm({name:""},e,n,"");{let i=n.name??"";return rm({name:i},n.parent,n.providers,i)}}static \u0275prov=v({token:t,providedIn:"any",factory:()=>I(ym)});static __NG_ELEMENT_ID__=-1},P=new g(""),dt=(()=>{class t{static __NG_ELEMENT_ID__=XR;static __NG_ENV_ID__=e=>e}return t})(),Td=class extends dt{_lView;constructor(n){super(),this._lView=n}get destroyed(){return fo(this._lView)}onDestroy(n){let e=this._lView;return Pm(e,n),()=>f0(e,n)}};function XR(){return new Td(ie())}var Zm=!1,k0=new g(""),ci=(()=>{class t{taskId=0;pendingTasks=new Set;destroyed=!1;pendingTask=new Ue(!1);debugTaskTracker=u(k0,{optional:!0});get hasPendingTasks(){return this.destroyed?!1:this.pendingTask.value}get hasPendingTasksObservable(){return this.destroyed?new J(e=>{e.next(!1),e.complete()}):this.pendingTask}add(){!this.hasPendingTasks&&!this.destroyed&&this.pendingTask.next(!0);let e=this.taskId++;return this.pendingTasks.add(e),this.debugTaskTracker?.add(e),e}has(e){return this.pendingTasks.has(e)}remove(e){this.pendingTasks.delete(e),this.debugTaskTracker?.remove(e),this.pendingTasks.size===0&&this.hasPendingTasks&&this.pendingTask.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this.hasPendingTasks&&this.pendingTask.next(!1),this.destroyed=!0,this.pendingTask.unsubscribe()}static \u0275prov=v({token:t,providedIn:"root",factory:()=>new t})}return t})(),om=class extends E{__isAsync;destroyRef=void 0;pendingTasks=void 0;constructor(n=!1){super(),this.__isAsync=n,Cm()&&(this.destroyRef=u(dt,{optional:!0})??void 0,this.pendingTasks=u(ci,{optional:!0})??void 0)}emit(n){let e=K(null);try{super.next(n)}finally{K(e)}}subscribe(n,e,i){let r=n,o=e||(()=>null),s=i;if(n&&typeof n=="object"){let l=n;r=l.next?.bind(l),o=l.error?.bind(l),s=l.complete?.bind(l)}this.__isAsync&&(o=this.wrapInTimeout(o),r&&(r=this.wrapInTimeout(r)),s&&(s=this.wrapInTimeout(s)));let a=super.subscribe({next:r,error:o,complete:s});return n instanceof ce&&n.add(a),a}wrapInTimeout(n){return e=>{let i=this.pendingTasks?.add();setTimeout(()=>{try{n(e)}finally{i!==void 0&&this.pendingTasks?.remove(i)}})}}},N=om;function Md(...t){}function Xm(t){let n,e;function i(){t=Md;try{e!==void 0&&typeof cancelAnimationFrame=="function"&&cancelAnimationFrame(e),n!==void 0&&clearTimeout(n)}catch(r){}}return n=setTimeout(()=>{t(),i()}),typeof requestAnimationFrame=="function"&&(e=requestAnimationFrame(()=>{t(),i()})),()=>i()}function R0(t){return queueMicrotask(()=>t()),()=>{t=Md}}var Jm="isAngularZone",Qa=Jm+"_ID",JR=0,T=class t{hasPendingMacrotasks=!1;hasPendingMicrotasks=!1;isStable=!0;onUnstable=new N(!1);onMicrotaskEmpty=new N(!1);onStable=new N(!1);onError=new N(!1);constructor(n){let{enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:i=!1,shouldCoalesceRunChangeDetection:r=!1,scheduleInRootZone:o=Zm}=n;if(typeof Zone>"u")throw new w(908,!1);Zone.assertZonePatched();let s=this;s._nesting=0,s._outer=s._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(s._inner=s._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(s._inner=s._inner.fork(Zone.longStackTraceZoneSpec)),s.shouldCoalesceEventChangeDetection=!r&&i,s.shouldCoalesceRunChangeDetection=r,s.callbackScheduled=!1,s.scheduleInRootZone=o,nN(s)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get(Jm)===!0}static assertInAngularZone(){if(!t.isInAngularZone())throw new w(909,!1)}static assertNotInAngularZone(){if(t.isInAngularZone())throw new w(909,!1)}run(n,e,i){return this._inner.run(n,e,i)}runTask(n,e,i,r){let o=this._inner,s=o.scheduleEventTask("NgZoneEvent: "+r,n,eN,Md,Md);try{return o.runTask(s,e,i)}finally{o.cancelTask(s)}}runGuarded(n,e,i){return this._inner.runGuarded(n,e,i)}runOutsideAngular(n){return this._outer.run(n)}},eN={};function eg(t){if(t._nesting==0&&!t.hasPendingMicrotasks&&!t.isStable)try{t._nesting++,t.onMicrotaskEmpty.emit(null)}finally{if(t._nesting--,!t.hasPendingMicrotasks)try{t.runOutsideAngular(()=>t.onStable.emit(null))}finally{t.isStable=!0}}}function tN(t){if(t.isCheckStableRunning||t.callbackScheduled)return;t.callbackScheduled=!0;function n(){Xm(()=>{t.callbackScheduled=!1,sm(t),t.isCheckStableRunning=!0,eg(t),t.isCheckStableRunning=!1})}t.scheduleInRootZone?Zone.root.run(()=>{n()}):t._outer.run(()=>{n()}),sm(t)}function nN(t){let n=()=>{tN(t)},e=JR++;t._inner=t._inner.fork({name:"angular",properties:{[Jm]:!0,[Qa]:e,[Qa+e]:!0},onInvokeTask:(i,r,o,s,a,l)=>{if(iN(l))return i.invokeTask(o,s,a,l);try{return qw(t),i.invokeTask(o,s,a,l)}finally{(t.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||t.shouldCoalesceRunChangeDetection)&&n(),Yw(t)}},onInvoke:(i,r,o,s,a,l,c)=>{try{return qw(t),i.invoke(o,s,a,l,c)}finally{t.shouldCoalesceRunChangeDetection&&!t.callbackScheduled&&!rN(l)&&n(),Yw(t)}},onHasTask:(i,r,o,s)=>{i.hasTask(o,s),r===o&&(s.change=="microTask"?(t._hasPendingMicrotasks=s.microTask,sm(t),eg(t)):s.change=="macroTask"&&(t.hasPendingMacrotasks=s.macroTask))},onHandleError:(i,r,o,s)=>(i.handleError(o,s),t.runOutsideAngular(()=>t.onError.emit(s)),!1)})}function sm(t){t._hasPendingMicrotasks||(t.shouldCoalesceEventChangeDetection||t.shouldCoalesceRunChangeDetection)&&t.callbackScheduled===!0?t.hasPendingMicrotasks=!0:t.hasPendingMicrotasks=!1}function qw(t){t._nesting++,t.isStable&&(t.isStable=!1,t.onUnstable.emit(null))}function Yw(t){t._nesting--,eg(t)}var Ka=class{hasPendingMicrotasks=!1;hasPendingMacrotasks=!1;isStable=!0;onUnstable=new N;onMicrotaskEmpty=new N;onStable=new N;onError=new N;run(n,e,i){return n.apply(e,i)}runGuarded(n,e,i){return n.apply(e,i)}runOutsideAngular(n){return n()}runTask(n,e,i,r){return n.apply(e,i)}};function iN(t){return N0(t,"__ignore_ng_zone__")}function rN(t){return N0(t,"__scheduler_tick__")}function N0(t,n){return!Array.isArray(t)||t.length!==1?!1:t[0]?.data?.[n]===!0}var tn=class{_console=console;handleError(n){this._console.error("ERROR",n)}},fn=new g("",{factory:()=>{let t=u(T),n=u(Fe),e;return i=>{t.runOutsideAngular(()=>{n.destroyed&&!e?setTimeout(()=>{throw i}):(e??=n.get(tn),e.handleError(i))})}}}),O0={provide:ki,useValue:()=>{let t=u(tn,{optional:!0})},multi:!0};function xe(t,n){let[e,i,r]=Np(t,n?.equal),o=e,s=o[vt];return o.set=i,o.update=r,o.asReadonly=P0.bind(o),o}function P0(){let t=this[vt];if(t.readonlyFn===void 0){let n=()=>this();n[vt]=t,t.readonlyFn=n}return t.readonlyFn}var Cs=(()=>{class t{view;node;constructor(e,i){this.view=e,this.node=i}static __NG_ELEMENT_ID__=oN}return t})();function oN(){return new Cs(ie(),Dt())}var Rn=class{},xs=new g("",{factory:()=>!0});var Zd=new g(""),Ss=(()=>{class t{internalPendingTasks=u(ci);scheduler=u(Rn);errorHandler=u(fn);add(){let e=this.internalPendingTasks.add();return()=>{this.internalPendingTasks.has(e)&&(this.scheduler.notify(11),this.internalPendingTasks.remove(e))}}run(e){let i=this.add();e().catch(this.errorHandler).finally(i)}static \u0275prov=v({token:t,providedIn:"root",factory:()=>new t})}return t})(),Xd=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new am})}return t})(),am=class{dirtyEffectCount=0;queues=new Map;add(n){this.enqueue(n),this.schedule(n)}schedule(n){n.dirty&&this.dirtyEffectCount++}remove(n){let e=n.zone,i=this.queues.get(e);i.has(n)&&(i.delete(n),n.dirty&&this.dirtyEffectCount--)}enqueue(n){let e=n.zone;this.queues.has(e)||this.queues.set(e,new Set);let i=this.queues.get(e);i.has(n)||i.add(n)}flush(){for(;this.dirtyEffectCount>0;){let n=!1;for(let[e,i]of this.queues)e===null?n||=this.flushQueue(i):n||=e.run(()=>this.flushQueue(i));n||(this.dirtyEffectCount=0)}}flushQueue(n){let e=!1;for(let i of n)i.dirty&&(this.dirtyEffectCount--,e=!0,i.run());return e}},Ad=class{[vt];constructor(n){this[vt]=n}destroy(){this[vt].destroy()}};function go(t,n){let e=n?.injector??u(B),i=n?.manualCleanup!==!0?e.get(dt):null,r,o=e.get(Cs,null,{optional:!0}),s=e.get(Rn);return o!==null?(r=lN(o.view,s,t),i instanceof Td&&i._lView===o.view&&(i=null)):r=cN(t,e.get(Xd),s),r.injector=e,i!==null&&(r.onDestroyFns=[i.onDestroy(()=>r.destroy())]),new Ad(r)}var F0=G(_({},Pp),{cleanupFns:void 0,zone:null,onDestroyFns:null,run(){let t=Ya(!1);try{Fp(this)}finally{Ya(t)}},cleanup(){if(!this.cleanupFns?.length)return;let t=K(null);try{for(;this.cleanupFns.length;)this.cleanupFns.pop()()}finally{this.cleanupFns=[],K(t)}}}),sN=G(_({},F0),{consumerMarkedDirty(){this.scheduler.schedule(this),this.notifier.notify(12)},destroy(){if(rr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.scheduler.remove(this)}}),aN=G(_({},F0),{consumerMarkedDirty(){this.view[ne]|=8192,po(this.view),this.notifier.notify(13)},destroy(){if(rr(this),this.onDestroyFns!==null)for(let t of this.onDestroyFns)t();this.cleanup(),this.view[ur]?.delete(this)}});function lN(t,n,e){let i=Object.create(aN);return i.view=t,i.zone=typeof Zone<"u"?Zone.current:null,i.notifier=n,i.fn=L0(i,e),t[ur]??=new Set,t[ur].add(i),i.consumerMarkedDirty(i),i}function cN(t,n,e){let i=Object.create(sN);return i.fn=L0(i,t),i.scheduler=n,i.notifier=e,i.zone=typeof Zone<"u"?Zone.current:null,i.scheduler.add(i),i.notifier.notify(12),i}function L0(t,n){return()=>{n(e=>(t.cleanupFns??=[]).push(e))}}function vl(t){return{toString:t}.toString()}function vD(t){let n=nn.ng;if(n&&n.\u0275compilerFacade)return n.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function mN(t){return typeof t=="function"}function yD(t,n,e,i){n!==null?n.applyValueToInputSignal(n,i):t[e]=i}var lu=class{previousValue;currentValue;firstChange;constructor(n,e,i){this.previousValue=n,this.currentValue=e,this.firstChange=i}isFirstChange(){return this.firstChange}},Ke=(()=>{let t=()=>bD;return t.ngInherit=!0,t})();function bD(t){return t.type.prototype.ngOnChanges&&(t.setInput=_N),gN}function gN(){let t=DD(this),n=t?.current;if(n){let e=t.previous;if(e===Nn)t.previous=n;else for(let i in n)e[i]=n[i];t.current=null,this.ngOnChanges(n)}}function _N(t,n,e,i,r){let o=this.declaredInputs[i],s=DD(t)||vN(t,{previous:Nn,current:null}),a=s.current||(s.current={}),l=s.previous,c=l[o];a[o]=new lu(c&&c.currentValue,e,l===Nn),yD(t,n,r,e)}var wD="__ngSimpleChanges__";function DD(t){return t[wD]||null}function vN(t,n){return t[wD]=n}var B0=[];var He=function(t,n=null,e){for(let i=0;i<B0.length;i++){let r=B0[i];r(t,n,e)}},Ae=(function(t){return t[t.TemplateCreateStart=0]="TemplateCreateStart",t[t.TemplateCreateEnd=1]="TemplateCreateEnd",t[t.TemplateUpdateStart=2]="TemplateUpdateStart",t[t.TemplateUpdateEnd=3]="TemplateUpdateEnd",t[t.LifecycleHookStart=4]="LifecycleHookStart",t[t.LifecycleHookEnd=5]="LifecycleHookEnd",t[t.OutputStart=6]="OutputStart",t[t.OutputEnd=7]="OutputEnd",t[t.BootstrapApplicationStart=8]="BootstrapApplicationStart",t[t.BootstrapApplicationEnd=9]="BootstrapApplicationEnd",t[t.BootstrapComponentStart=10]="BootstrapComponentStart",t[t.BootstrapComponentEnd=11]="BootstrapComponentEnd",t[t.ChangeDetectionStart=12]="ChangeDetectionStart",t[t.ChangeDetectionEnd=13]="ChangeDetectionEnd",t[t.ChangeDetectionSyncStart=14]="ChangeDetectionSyncStart",t[t.ChangeDetectionSyncEnd=15]="ChangeDetectionSyncEnd",t[t.AfterRenderHooksStart=16]="AfterRenderHooksStart",t[t.AfterRenderHooksEnd=17]="AfterRenderHooksEnd",t[t.ComponentStart=18]="ComponentStart",t[t.ComponentEnd=19]="ComponentEnd",t[t.DeferBlockStateStart=20]="DeferBlockStateStart",t[t.DeferBlockStateEnd=21]="DeferBlockStateEnd",t[t.DynamicComponentStart=22]="DynamicComponentStart",t[t.DynamicComponentEnd=23]="DynamicComponentEnd",t[t.HostBindingsUpdateStart=24]="HostBindingsUpdateStart",t[t.HostBindingsUpdateEnd=25]="HostBindingsUpdateEnd",t})(Ae||{});function yN(t,n,e){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:o}=n.type.prototype;if(i){let s=bD(n);(e.preOrderHooks??=[]).push(t,s),(e.preOrderCheckHooks??=[]).push(t,s)}r&&(e.preOrderHooks??=[]).push(0-t,r),o&&((e.preOrderHooks??=[]).push(t,o),(e.preOrderCheckHooks??=[]).push(t,o))}function ED(t,n){for(let e=n.directiveStart,i=n.directiveEnd;e<i;e++){let o=t.data[e].type.prototype,{ngAfterContentInit:s,ngAfterContentChecked:a,ngAfterViewInit:l,ngAfterViewChecked:c,ngOnDestroy:d}=o;s&&(t.contentHooks??=[]).push(-e,s),a&&((t.contentHooks??=[]).push(e,a),(t.contentCheckHooks??=[]).push(e,a)),l&&(t.viewHooks??=[]).push(-e,l),c&&((t.viewHooks??=[]).push(e,c),(t.viewCheckHooks??=[]).push(e,c)),d!=null&&(t.destroyHooks??=[]).push(e,d)}}function iu(t,n,e){CD(t,n,3,e)}function ru(t,n,e,i){(t[ne]&3)===e&&CD(t,n,e,i)}function tg(t,n){let e=t[ne];(e&3)===n&&(e&=16383,e+=1,t[ne]=e)}function CD(t,n,e,i){let r=i!==void 0?t[co]&65535:0,o=i??-1,s=n.length-1,a=0;for(let l=r;l<s;l++)if(typeof n[l+1]=="number"){if(a=n[l],i!=null&&a>=i)break}else n[l]<0&&(t[co]+=65536),(a<o||o==-1)&&(bN(t,e,n,l),t[co]=(t[co]&4294901760)+l+2),l++}function j0(t,n){He(Ae.LifecycleHookStart,t,n);let e=K(null);try{n.call(t)}finally{K(e),He(Ae.LifecycleHookEnd,t,n)}}function bN(t,n,e,i){let r=e[i]<0,o=e[i+1],s=r?-e[i]:e[i],a=t[s];r?t[ne]>>14<t[co]>>16&&(t[ne]&3)===n&&(t[ne]+=16384,j0(a,o)):j0(a,o)}var Ts=-1,vo=class{factory;name;injectImpl;resolving=!1;canSeeViewProviders;multi;componentProviders;index;providerFactory;constructor(n,e,i,r){this.factory=n,this.name=r,this.canSeeViewProviders=e,this.injectImpl=i}};function wN(t){return(t.flags&8)!==0}function DN(t){return(t.flags&16)!==0}function EN(t,n,e){let i=0;for(;i<e.length;){let r=e[i];if(typeof r=="number"){if(r!==0)break;i++;let o=e[i++],s=e[i++],a=e[i++];t.setAttribute(n,s,a,o)}else{let o=r,s=e[++i];CN(o)?t.setProperty(n,o,s):t.setAttribute(n,o,s),i++}}return i}function xD(t){return t===3||t===4||t===6}function CN(t){return t.charCodeAt(0)===64}function Ms(t,n){if(!(n===null||n.length===0))if(t===null||t.length===0)t=n.slice();else{let e=-1;for(let i=0;i<n.length;i++){let r=n[i];typeof r=="number"?e=r:e===0||(e===-1||e===2?V0(t,e,r,null,n[++i]):V0(t,e,r,null,null))}}return t}function V0(t,n,e,i,r){let o=0,s=t.length;if(n===-1)s=-1;else for(;o<t.length;){let a=t[o++];if(typeof a=="number"){if(a===n){s=-1;break}else if(a>n){s=o-1;break}}}for(;o<t.length;){let a=t[o];if(typeof a=="number")break;if(a===e){r!==null&&(t[o+1]=r);return}o++,r!==null&&o++}s!==-1&&(t.splice(s,0,n),o=s+1),t.splice(o++,0,e),r!==null&&t.splice(o++,0,r)}function SD(t){return t!==Ts}function cu(t){return t&32767}function xN(t){return t>>16}function du(t,n){let e=xN(t),i=n;for(;e>0;)i=i[lo],e--;return i}var ug=!0;function uu(t){let n=ug;return ug=t,n}var SN=256,ID=SN-1,TD=5,IN=0,di={};function TN(t,n,e){let i;typeof e=="string"?i=e.charCodeAt(0)||0:e.hasOwnProperty(so)&&(i=e[so]),i==null&&(i=e[so]=IN++);let r=i&ID,o=1<<r;n.data[t+(r>>TD)]|=o}function hu(t,n){let e=MD(t,n);if(e!==-1)return e;let i=n[X];i.firstCreatePass&&(t.injectorIndex=n.length,ng(i.data,t),ng(n,null),ng(i.blueprint,null));let r=Qg(t,n),o=t.injectorIndex;if(SD(r)){let s=cu(r),a=du(r,n),l=a[X].data;for(let c=0;c<8;c++)n[o+c]=a[s+c]|l[s+c]}return n[o+8]=r,o}function ng(t,n){t.push(0,0,0,0,0,0,0,0,n)}function MD(t,n){return t.injectorIndex===-1||t.parent&&t.parent.injectorIndex===t.injectorIndex||n[t.injectorIndex+8]===null?-1:t.injectorIndex}function Qg(t,n){if(t.parent&&t.parent.injectorIndex!==-1)return t.parent.injectorIndex;let e=0,i=null,r=n;for(;r!==null;){if(i=OD(r),i===null)return Ts;if(e++,r=r[lo],i.injectorIndex!==-1)return i.injectorIndex|e<<16}return Ts}function hg(t,n,e){TN(t,n,e)}function MN(t,n){if(n==="class")return t.classes;if(n==="style")return t.styles;let e=t.attrs;if(e){let i=e.length,r=0;for(;r<i;){let o=e[r];if(xD(o))break;if(o===0)r=r+2;else if(typeof o=="number")for(r++;r<i&&typeof e[r]=="string";)r++;else{if(o===n)return e[r+1];r=r+2}}}return null}function AD(t,n,e){if(e&8||t!==void 0)return t;Fd(n,"NodeInjector")}function kD(t,n,e,i){if(e&8&&i===void 0&&(i=null),(e&3)===0){let r=t[Ri],o=$t(void 0);try{return r?r.get(n,i,e&8):_m(n,i,e&8)}finally{$t(o)}}return AD(i,n,e)}function RD(t,n,e,i=0,r){if(t!==null){if(n[ne]&2048&&!(i&2)){let s=NN(t,n,e,i,di);if(s!==di)return s}let o=ND(t,n,e,i,di);if(o!==di)return o}return kD(n,e,i,r)}function ND(t,n,e,i,r){let o=kN(e);if(typeof o=="function"){if(!Ym(n,t,i))return i&1?AD(r,e,i):kD(n,e,i,r);try{let s;if(s=o(i),s==null&&!(i&8))Fd(e);else return s}finally{Qm()}}else if(typeof o=="number"){let s=null,a=MD(t,n),l=Ts,c=i&1?n[qt][Wt]:null;for((a===-1||i&4)&&(l=a===-1?Qg(t,n):n[a+8],l===Ts||!U0(i,!1)?a=-1:(s=n[X],a=cu(l),n=du(l,n)));a!==-1;){let d=n[X];if(H0(o,a,d.data)){let h=AN(a,n,e,s,i,c);if(h!==di)return h}l=n[a+8],l!==Ts&&U0(i,n[X].data[a+8]===c)&&H0(o,a,n)?(s=d,a=cu(l),n=du(l,n)):a=-1}}return r}function AN(t,n,e,i,r,o){let s=n[X],a=s.data[t+8],l=i==null?Pi(a)&&ug:i!=s&&(a.type&3)!==0,c=r&1&&o===a,d=ou(a,s,e,l,c);return d!==null?dl(n,s,d,a,r):di}function ou(t,n,e,i,r){let o=t.providerIndexes,s=n.data,a=o&1048575,l=t.directiveStart,c=t.directiveEnd,d=o>>20,h=i?a:a+d,f=r?a+d:c;for(let p=h;p<f;p++){let m=s[p];if(p<l&&e===m||p>=l&&m.type===e)return p}if(r){let p=s[l];if(p&&Fn(p)&&p.type===e)return l}return null}function dl(t,n,e,i,r){let o=t[e],s=n.data;if(o instanceof vo){let a=o;if(a.resolving)throw gm("");let l=uu(a.canSeeViewProviders);a.resolving=!0;let c=s[e].type||s[e],d,h=a.injectImpl?$t(a.injectImpl):null,f=Ym(t,i,0);try{o=t[e]=a.factory(void 0,r,s,t,i),n.firstCreatePass&&e>=i.directiveStart&&yN(e,s[e],n)}finally{h!==null&&$t(h),uu(l),a.resolving=!1,Qm()}}return o}function kN(t){if(typeof t=="string")return t.charCodeAt(0)||0;let n=t.hasOwnProperty(so)?t[so]:void 0;return typeof n=="number"?n>=0?n&ID:RN:n}function H0(t,n,e){let i=1<<t;return!!(e[n+(t>>TD)]&i)}function U0(t,n){return!(t&2)&&!(t&1&&n)}var _o=class{_tNode;_lView;constructor(n,e){this._tNode=n,this._lView=e}get(n,e,i){return RD(this._tNode,this._lView,n,io(i),e)}};function RN(){return new _o(Dt(),ie())}function je(t){return vl(()=>{let n=t.prototype.constructor,e=n[Wa]||fg(n),i=Object.prototype,r=Object.getPrototypeOf(t.prototype).constructor;for(;r&&r!==i;){let o=r[Wa]||fg(r);if(o&&o!==e)return o;r=Object.getPrototypeOf(r)}return o=>new o})}function fg(t){return lm(t)?()=>{let n=fg(bt(t));return n&&n()}:dr(t)}function NN(t,n,e,i,r){let o=t,s=n;for(;o!==null&&s!==null&&s[ne]&2048&&!Ds(s);){let a=ND(o,s,e,i|2,di);if(a!==di)return a;let l=o.parent;if(!l){let c=s[Sm];if(c){let d=c.get(e,di,i&-5);if(d!==di)return d}l=OD(s),s=s[lo]}o=l}return r}function OD(t){let n=t[X],e=n.type;return e===2?n.declTNode:e===1?t[Wt]:null}function Cu(t){return MN(Dt(),t)}function ON(){return Ns(Dt(),ie())}function Ns(t,n){return new O(Ln(t,n))}var O=(()=>{class t{nativeElement;constructor(e){this.nativeElement=e}static __NG_ELEMENT_ID__=ON}return t})();function PD(t){return t instanceof O?t.nativeElement:t}function PN(){return this._results[Symbol.iterator]()}var vr=class{_emitDistinctChangesOnly;dirty=!0;_onDirty=void 0;_results=[];_changesDetected=!1;_changes=void 0;length=0;first=void 0;last=void 0;get changes(){return this._changes??=new E}constructor(n=!1){this._emitDistinctChangesOnly=n}get(n){return this._results[n]}map(n){return this._results.map(n)}filter(n){return this._results.filter(n)}find(n){return this._results.find(n)}reduce(n,e){return this._results.reduce(n,e)}forEach(n){this._results.forEach(n)}some(n){return this._results.some(n)}toArray(){return this._results.slice()}toString(){return this._results.toString()}reset(n,e){this.dirty=!1;let i=t0(n);(this._changesDetected=!e0(this._results,i,e))&&(this._results=i,this.length=i.length,this.last=i[this.length-1],this.first=i[0])}notifyOnChanges(){this._changes!==void 0&&(this._changesDetected||!this._emitDistinctChangesOnly)&&this._changes.next(this)}onDirty(n){this._onDirty=n}setDirty(){this.dirty=!0,this._onDirty?.()}destroy(){this._changes!==void 0&&(this._changes.complete(),this._changes.unsubscribe())}[Symbol.iterator]=PN};function FD(t){return(t.flags&128)===128}var Kg=(function(t){return t[t.OnPush=0]="OnPush",t[t.Eager=1]="Eager",t[t.Default=1]="Default",t})(Kg||{}),LD=new Map,FN=0;function LN(){return FN++}function BN(t){LD.set(t[Ni],t)}function pg(t){LD.delete(t[Ni])}var z0="__ngContext__";function As(t,n){Oi(n)?(t[z0]=n[Ni],BN(n)):t[z0]=n}function BD(t){return VD(t[ws])}function jD(t){return VD(t[yn])}function VD(t){for(;t!==null&&!Pn(t);)t=t[yn];return t}var jN;function Zg(t){jN=t}var wr=new g("",{factory:()=>VN}),VN="ng";var xu=new g(""),wo=new g("",{providedIn:"platform",factory:()=>"unknown"}),Dr=new g(""),Os=new g("",{factory:()=>u(P).body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var HD="r";var UD="di";var zD=!1,$D=new g("",{factory:()=>zD});var Su=new g("");var HN=(t,n,e,i)=>{};function UN(t,n,e,i){HN(t,n,e,i)}function Iu(t){return(t.flags&32)===32}var zN=()=>null;function GD(t,n,e=!1){return zN(t,n,e)}function WD(t,n){let e=t.contentQueries;if(e!==null){let i=K(null);try{for(let r=0;r<e.length;r+=2){let o=e[r],s=e[r+1];if(s!==-1){let a=t.data[s];ol(o),a.contentQueries(2,n[s],s)}}}finally{K(i)}}}function mg(t,n,e){ol(0);let i=K(null);try{n(t,e)}finally{K(i)}}function qD(t,n,e){if(Tm(n)){let i=K(null);try{let r=n.directiveStart,o=n.directiveEnd;for(let s=r;s<o;s++){let a=t.data[s];if(a.contentQueries){let l=e[s];a.contentQueries(1,l,s)}}}finally{K(i)}}}var Vn=(function(t){return t[t.Emulated=0]="Emulated",t[t.None=2]="None",t[t.ShadowDom=3]="ShadowDom",t[t.ExperimentalIsolatedShadowDom=4]="ExperimentalIsolatedShadowDom",t})(Vn||{});var Jd;function $N(){if(Jd===void 0&&(Jd=null,nn.trustedTypes))try{Jd=nn.trustedTypes.createPolicy("angular",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){}return Jd}function Tu(t){return $N()?.createHTML(t)||t}var Fi=class{changingThisBreaksApplicationSecurity;constructor(n){this.changingThisBreaksApplicationSecurity=n}toString(){return`SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${kd})`}},gg=class extends Fi{getTypeName(){return"HTML"}},_g=class extends Fi{getTypeName(){return"Style"}},vg=class extends Fi{getTypeName(){return"Script"}},yg=class extends Fi{getTypeName(){return"URL"}},bg=class extends Fi{getTypeName(){return"ResourceURL"}};function fi(t){return t instanceof Fi?t.changingThisBreaksApplicationSecurity:t}function Do(t,n){let e=YD(t);if(e!=null&&e!==n){if(e==="ResourceURL"&&n==="URL")return!0;throw new Error(`Required a safe ${n}, got a ${e} (see ${kd})`)}return e===n}function YD(t){return t instanceof Fi&&t.getTypeName()||null}function Xg(t){return new gg(t)}function Jg(t){return new _g(t)}function e_(t){return new vg(t)}function t_(t){return new yg(t)}function n_(t){return new bg(t)}function GN(t){let n=new Dg(t);return WN()?new wg(n):n}var wg=class{inertDocumentHelper;constructor(n){this.inertDocumentHelper=n}getInertBodyElement(n){n="<body><remove></remove>"+n;try{let e=new window.DOMParser().parseFromString(Tu(n),"text/html").body;return e===null?this.inertDocumentHelper.getInertBodyElement(n):(e.firstChild?.remove(),e)}catch(e){return null}}},Dg=class{defaultDoc;inertDocument;constructor(n){this.defaultDoc=n,this.inertDocument=this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")}getInertBodyElement(n){let e=this.inertDocument.createElement("template");return e.innerHTML=Tu(n),e}};function WN(){try{return!!new window.DOMParser().parseFromString(Tu(""),"text/html")}catch(t){return!1}}var qN=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;function Mu(t){return t=String(t),t.match(qN)?t:"unsafe:"+t}function Li(t){let n={};for(let e of t.split(","))n[e]=!0;return n}function yl(...t){let n={};for(let e of t)for(let i in e)e.hasOwnProperty(i)&&(n[i]=!0);return n}var QD=Li("area,br,col,hr,img,wbr"),KD=Li("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),ZD=Li("rp,rt"),YN=yl(ZD,KD),QN=yl(KD,Li("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),KN=yl(ZD,Li("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),$0=yl(QD,QN,KN,YN),XD=Li("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),ZN=Li("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),XN=Li("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext"),JN=yl(XD,ZN,XN),eO=Li("script,style,template");var Eg=class{sanitizedSomething=!1;buf=[];sanitizeChildren(n){let e=n.firstChild,i=!0,r=[];for(;e;){if(e.nodeType===Node.ELEMENT_NODE?i=this.startElement(e):e.nodeType===Node.TEXT_NODE?this.chars(e.nodeValue):this.sanitizedSomething=!0,i&&e.firstChild){r.push(e),e=iO(e);continue}for(;e;){e.nodeType===Node.ELEMENT_NODE&&this.endElement(e);let o=nO(e);if(o){e=o;break}e=r.pop()}}return this.buf.join("")}startElement(n){let e=G0(n).toLowerCase();if(!$0.hasOwnProperty(e))return this.sanitizedSomething=!0,!eO.hasOwnProperty(e);this.buf.push("<"),this.buf.push(e);let i=n.attributes;for(let r=0;r<i.length;r++){let o=i.item(r),s=o.name,a=s.toLowerCase();if(!JN.hasOwnProperty(a)){this.sanitizedSomething=!0;continue}let l=o.value;XD[a]&&(l=Mu(l)),this.buf.push(" ",s,'="',W0(l),'"')}return this.buf.push(">"),!0}endElement(n){let e=G0(n).toLowerCase();$0.hasOwnProperty(e)&&!QD.hasOwnProperty(e)&&(this.buf.push("</"),this.buf.push(e),this.buf.push(">"))}chars(n){this.buf.push(W0(n))}};function tO(t,n){return(t.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY)!==Node.DOCUMENT_POSITION_CONTAINED_BY}function nO(t){let n=t.nextSibling;if(n&&t!==n.previousSibling)throw JD(n);return n}function iO(t){let n=t.firstChild;if(n&&tO(t,n))throw JD(n);return n}function G0(t){let n=t.nodeName;return typeof n=="string"?n:"FORM"}function JD(t){return new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`)}var rO=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,oO=/([^\#-~ |!])/g;function W0(t){return t.replace(/&/g,"&amp;").replace(rO,function(n){let e=n.charCodeAt(0),i=n.charCodeAt(1);return"&#"+((e-55296)*1024+(i-56320)+65536)+";"}).replace(oO,function(n){return"&#"+n.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}var eu;function i_(t,n){let e=null;try{eu=eu||GN(t);let i=n?String(n):"";e=eu.getInertBodyElement(i);let r=5,o=i;do{if(r===0)throw new Error("Failed to sanitize html because the input is unstable");r--,i=o,o=e.innerHTML,e=eu.getInertBodyElement(i)}while(i!==o);let a=new Eg().sanitizeChildren(q0(e)||e);return Tu(a)}finally{if(e){let i=q0(e)||e;for(;i.firstChild;)i.firstChild.remove()}}}function q0(t){return"content"in t&&sO(t)?t.content:null}function sO(t){return t.nodeType===Node.ELEMENT_NODE&&t.nodeName==="TEMPLATE"}function aO(t,n){return t.createText(n)}function lO(t,n,e){t.setValue(n,e)}function eE(t,n,e){return t.createElement(n,e)}function fu(t,n,e,i,r){t.insertBefore(n,e,i,r)}function tE(t,n,e){t.appendChild(n,e)}function Y0(t,n,e,i,r){i!==null?fu(t,n,e,i,r):tE(t,n,e)}function nE(t,n,e,i){t.removeChild(null,n,e,i)}function cO(t,n,e){t.setAttribute(n,"style",e)}function dO(t,n,e){e===""?t.removeAttribute(n,"class"):t.setAttribute(n,"class",e)}function iE(t,n,e){let{mergedAttrs:i,classes:r,styles:o}=e;i!==null&&EN(t,n,i),r!==null&&dO(t,n,r),o!==null&&cO(t,n,o)}var Yt=(function(t){return t[t.NONE=0]="NONE",t[t.HTML=1]="HTML",t[t.STYLE=2]="STYLE",t[t.SCRIPT=3]="SCRIPT",t[t.URL=4]="URL",t[t.RESOURCE_URL=5]="RESOURCE_URL",t})(Yt||{});function rE(t){return t instanceof Function?t():t}function uO(t,n,e){let i=t.length;for(;;){let r=t.indexOf(n,e);if(r===-1)return r;if(r===0||t.charCodeAt(r-1)<=32){let o=n.length;if(r+o===i||t.charCodeAt(r+o)<=32)return r}e=r+1}}var oE="ng-template";function hO(t,n,e,i){let r=0;if(i){for(;r<n.length&&typeof n[r]=="string";r+=2)if(n[r]==="class"&&uO(n[r+1].toLowerCase(),e,0)!==-1)return!0}else if(r_(t))return!1;if(r=n.indexOf(1,r),r>-1){let o;for(;++r<n.length&&typeof(o=n[r])=="string";)if(o.toLowerCase()===e)return!0}return!1}function r_(t){return t.type===4&&t.value!==oE}function fO(t,n,e){let i=t.type===4&&!e?oE:t.value;return n===i}function pO(t,n,e){let i=4,r=t.attrs,o=r!==null?_O(r):0,s=!1;for(let a=0;a<n.length;a++){let l=n[a];if(typeof l=="number"){if(!s&&!Bn(i)&&!Bn(l))return!1;if(s&&Bn(l))continue;s=!1,i=l|i&1;continue}if(!s)if(i&4){if(i=2|i&1,l!==""&&!fO(t,l,e)||l===""&&n.length===1){if(Bn(i))return!1;s=!0}}else if(i&8){if(r===null||!hO(t,r,l,e)){if(Bn(i))return!1;s=!0}}else{let c=n[++a],d=mO(l,r,r_(t),e);if(d===-1){if(Bn(i))return!1;s=!0;continue}if(c!==""){let h;if(d>o?h="":h=r[d+1].toLowerCase(),i&2&&c!==h){if(Bn(i))return!1;s=!0}}}}return Bn(i)||s}function Bn(t){return(t&1)===0}function mO(t,n,e,i){if(n===null)return-1;let r=0;if(i||!e){let o=!1;for(;r<n.length;){let s=n[r];if(s===t)return r;if(s===3||s===6)o=!0;else if(s===1||s===2){let a=n[++r];for(;typeof a=="string";)a=n[++r];continue}else{if(s===4)break;if(s===0){r+=4;continue}}r+=o?1:2}return-1}else return vO(n,t)}function sE(t,n,e=!1){for(let i=0;i<n.length;i++)if(pO(t,n[i],e))return!0;return!1}function gO(t){let n=t.attrs;if(n!=null){let e=n.indexOf(5);if((e&1)===0)return n[e+1]}return null}function _O(t){for(let n=0;n<t.length;n++){let e=t[n];if(xD(e))return n}return t.length}function vO(t,n){let e=t.indexOf(4);if(e>-1)for(e++;e<t.length;){let i=t[e];if(typeof i=="number")return-1;if(i===n)return e;e++}return-1}function yO(t,n){e:for(let e=0;e<n.length;e++){let i=n[e];if(t.length===i.length){for(let r=0;r<t.length;r++)if(t[r]!==i[r])continue e;return!0}}return!1}function Q0(t,n){return t?":not("+n.trim()+")":n}function bO(t){let n=t[0],e=1,i=2,r="",o=!1;for(;e<t.length;){let s=t[e];if(typeof s=="string")if(i&2){let a=t[++e];r+="["+s+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+s:i&4&&(r+=" "+s);else r!==""&&!Bn(s)&&(n+=Q0(o,r),r=""),i=s,o=o||!Bn(i);e++}return r!==""&&(n+=Q0(o,r)),n}function wO(t){return t.map(bO).join(",")}function DO(t){let n=[],e=[],i=1,r=2;for(;i<t.length;){let o=t[i];if(typeof o=="string")r===2?o!==""&&n.push(o,t[++i]):r===8&&e.push(o);else{if(!Bn(r))break;r=o}i++}return e.length&&n.push(1,...e),n}var Qt={};function o_(t,n,e,i,r,o,s,a,l,c,d){let h=et+i,f=h+r,p=EO(h,f),m=typeof c=="function"?c():c;return p[X]={type:t,blueprint:p,template:e,queries:null,viewQuery:a,declTNode:n,data:p.slice().fill(null,h),bindingStartIndex:h,expandoStartIndex:f,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof o=="function"?o():o,pipeRegistry:typeof s=="function"?s():s,firstChild:null,schemas:l,consts:m,incompleteFirstPass:!1,ssrId:d}}function EO(t,n){let e=[];for(let i=0;i<n;i++)e.push(i<t?null:Qt);return e}function CO(t){let n=t.tView;return n===null||n.incompleteFirstPass?t.tView=o_(1,null,t.template,t.decls,t.vars,t.directiveDefs,t.pipeDefs,t.viewQuery,t.schemas,t.consts,t.id):n}function s_(t,n,e,i,r,o,s,a,l,c,d){let h=n.blueprint.slice();return h[On]=r,h[ne]=i|4|128|8|64|1024,(c!==null||t&&t[ne]&2048)&&(h[ne]|=2048),Nm(h),h[wt]=h[lo]=t,h[ct]=e,h[si]=s||t&&t[si],h[ze]=a||t&&t[ze],h[Ri]=l||t&&t[Ri]||null,h[Wt]=o,h[Ni]=LN(),h[ao]=d,h[Sm]=c,h[qt]=n.type==2?t[qt]:h,h}function xO(t,n,e){let i=Ln(n,t),r=CO(e),o=t[si].rendererFactory,s=a_(t,s_(t,r,null,aE(e),i,n,null,o.createRenderer(i,e),null,null,null));return t[n.index]=s}function aE(t){let n=16;return t.signals?n=4096:t.onPush&&(n=64),n}function lE(t,n,e,i){if(e===0)return-1;let r=n.length;for(let o=0;o<e;o++)n.push(i),t.blueprint.push(i),t.data.push(null);return r}function a_(t,n){return t[ws]?t[xm][yn]=n:t[ws]=n,t[xm]=n,n}function S(t=1){cE(Qe(),ie(),li()+t,!1)}function cE(t,n,e,i){if(!i)if((n[ne]&3)===3){let o=t.preOrderCheckHooks;o!==null&&iu(n,o,e)}else{let o=t.preOrderHooks;o!==null&&ru(n,o,0,e)}_r(e)}var Au=(function(t){return t[t.None=0]="None",t[t.SignalBased=1]="SignalBased",t[t.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",t})(Au||{});function Cg(t,n,e,i){let r=K(null);try{let[o,s,a]=t.inputs[e],l=null;(s&Au.SignalBased)!==0&&(l=n[o][vt]),l!==null&&l.transformFn!==void 0?i=l.transformFn(i):a!==null&&(i=a.call(n,i)),t.setInput!==null?t.setInput(n,l,i,e,o):yD(n,l,o,i)}finally{K(r)}}var ui=(function(t){return t[t.Important=1]="Important",t[t.DashCase=2]="DashCase",t})(ui||{}),SO;function l_(t,n){return SO(t,n)}var R9=typeof document<"u"&&typeof document?.documentElement?.getAnimations=="function";var xg=new WeakMap,al=new WeakSet;function IO(t,n){let e=xg.get(t);if(!e||e.length===0)return;let i=n.parentNode,r=n.previousSibling;for(let o=e.length-1;o>=0;o--){let s=e[o],a=s.parentNode;s===n?(e.splice(o,1),al.add(s),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}}))):(r&&s===r||a&&i&&a!==i)&&(e.splice(o,1),s.dispatchEvent(new CustomEvent("animationend",{detail:{cancel:!0}})),s.parentNode?.removeChild(s))}}function TO(t,n){let e=xg.get(t);e?e.includes(n)||e.push(n):xg.set(t,[n])}var yo=new Set,ku=(function(t){return t[t.CHANGE_DETECTION=0]="CHANGE_DETECTION",t[t.AFTER_NEXT_RENDER=1]="AFTER_NEXT_RENDER",t})(ku||{}),Hn=new g(""),K0=new Set;function Cn(t){K0.has(t)||(K0.add(t),performance?.mark?.("mark_feature_usage",{detail:{feature:t}}))}var Ru=(()=>{class t{impl=null;execute(){this.impl?.execute()}static \u0275prov=v({token:t,providedIn:"root",factory:()=>new t})}return t})(),c_=[0,1,2,3],d_=(()=>{class t{ngZone=u(T);scheduler=u(Rn);errorHandler=u(tn,{optional:!0});sequences=new Set;deferredRegistrations=new Set;executing=!1;constructor(){u(Hn,{optional:!0})}execute(){let e=this.sequences.size>0;e&&He(Ae.AfterRenderHooksStart),this.executing=!0;for(let i of c_)for(let r of this.sequences)if(!(r.erroredOrDestroyed||!r.hooks[i]))try{r.pipelinedValue=this.ngZone.runOutsideAngular(()=>this.maybeTrace(()=>{let o=r.hooks[i];return o(r.pipelinedValue)},r.snapshot))}catch(o){r.erroredOrDestroyed=!0,this.errorHandler?.handleError(o)}this.executing=!1;for(let i of this.sequences)i.afterRun(),i.once&&(this.sequences.delete(i),i.destroy());for(let i of this.deferredRegistrations)this.sequences.add(i);this.deferredRegistrations.size>0&&this.scheduler.notify(7),this.deferredRegistrations.clear(),e&&He(Ae.AfterRenderHooksEnd)}register(e){let{view:i}=e;i!==void 0?((i[uo]??=[]).push(e),po(i),i[ne]|=8192):this.executing?this.deferredRegistrations.add(e):this.addSequence(e)}addSequence(e){this.sequences.add(e),this.scheduler.notify(7)}unregister(e){this.executing&&this.sequences.has(e)?(e.erroredOrDestroyed=!0,e.pipelinedValue=void 0,e.once=!0):(this.sequences.delete(e),this.deferredRegistrations.delete(e))}maybeTrace(e,i){return i?i.run(ku.AFTER_NEXT_RENDER,e):e()}static \u0275prov=v({token:t,providedIn:"root",factory:()=>new t})}return t})(),ul=class{impl;hooks;view;once;snapshot;erroredOrDestroyed=!1;pipelinedValue=void 0;unregisterOnDestroy;constructor(n,e,i,r,o,s=null){this.impl=n,this.hooks=e,this.view=i,this.once=r,this.snapshot=s,this.unregisterOnDestroy=o?.onDestroy(()=>this.destroy())}afterRun(){this.erroredOrDestroyed=!1,this.pipelinedValue=void 0,this.snapshot?.dispose(),this.snapshot=null}destroy(){this.impl.unregister(this),this.unregisterOnDestroy?.();let n=this.view?.[uo];n&&(this.view[uo]=n.filter(e=>e!==this))}};function st(t,n){let e=n?.injector??u(B);return Cn("NgAfterNextRender"),AO(t,e,n,!0)}function MO(t){return t instanceof Function?[void 0,void 0,t,void 0]:[t.earlyRead,t.write,t.mixedReadWrite,t.read]}function AO(t,n,e,i){let r=n.get(Ru);r.impl??=n.get(d_);let o=n.get(Hn,null,{optional:!0}),s=e?.manualCleanup!==!0?n.get(dt):null,a=n.get(Cs,null,{optional:!0}),l=new ul(r.impl,MO(t),a?.view,i,s,o?.snapshot(null));return r.impl.register(l),l}var dE=new g("",{factory:()=>({queue:new Set,isScheduled:!1,scheduler:null,injector:u(Fe)})});function uE(t,n,e){let i=t.get(dE);if(Array.isArray(n))for(let r of n)i.queue.add(r),e?.detachedLeaveAnimationFns?.push(r);else i.queue.add(n),e?.detachedLeaveAnimationFns?.push(n);i.scheduler&&i.scheduler(t)}function kO(t,n){let e=t.get(dE);if(n.detachedLeaveAnimationFns){for(let i of n.detachedLeaveAnimationFns)e.queue.delete(i);n.detachedLeaveAnimationFns=void 0}}function RO(t,n){for(let[e,i]of n)uE(t,i.animateFns)}function Z0(t,n,e,i){let r=t?.[pr]?.enter;n!==null&&r&&r.has(e.index)&&RO(i,r)}function Is(t,n,e,i,r,o,s,a){if(r!=null){let l,c=!1;Pn(r)?l=r:Oi(r)&&(c=!0,r=r[On]);let d=bn(r);t===0&&i!==null?(Z0(a,i,o,e),s==null?tE(n,i,d):fu(n,i,d,s||null,!0)):t===1&&i!==null?(Z0(a,i,o,e),fu(n,i,d,s||null,!0),IO(o,d)):t===2?(a?.[pr]?.leave?.has(o.index)&&TO(o,d),al.delete(d),X0(a,o,e,h=>{if(al.has(d)){al.delete(d);return}nE(n,d,c,h)})):t===3&&(al.delete(d),X0(a,o,e,()=>{n.destroyNode(d)})),l!=null&&zO(n,t,e,l,o,i,s)}}function NO(t,n){hE(t,n),n[On]=null,n[Wt]=null}function OO(t,n,e,i,r,o){i[On]=r,i[Wt]=n,Ou(t,i,e,1,r,o)}function hE(t,n){n[si].changeDetectionScheduler?.notify(9),Ou(t,n,n[ze],2,null,null)}function PO(t){let n=t[ws];if(!n)return ig(t[X],t);for(;n;){let e=null;if(Oi(n))e=n[ws];else{let i=n[ot];i&&(e=i)}if(!e){for(;n&&!n[yn]&&n!==t;)Oi(n)&&ig(n[X],n),n=n[wt];n===null&&(n=t),Oi(n)&&ig(n[X],n),e=n&&n[yn]}n=e}}function u_(t,n){let e=t[ho],i=e.indexOf(n);e.splice(i,1)}function Nu(t,n){if(fo(n))return;let e=n[ze];e.destroyNode&&Ou(t,n,e,3,null,null),PO(n)}function ig(t,n){if(fo(n))return;let e=K(null);try{n[ne]&=-129,n[ne]|=256,n[hn]&&rr(n[hn]),BO(t,n),LO(t,n),n[X].type===1&&n[ze].destroy();let i=n[fr];if(i!==null&&Pn(n[wt])){i!==n[wt]&&u_(i,n);let r=n[ai];r!==null&&r.detachView(t)}pg(n)}finally{K(e)}}function X0(t,n,e,i){let r=t?.[pr];if(r==null||r.leave==null||!r.leave.has(n.index))return i(!1);t&&yo.add(t[Ni]),uE(e,()=>{if(r.leave&&r.leave.has(n.index)){let s=r.leave.get(n.index),a=[];if(s){for(let l=0;l<s.animateFns.length;l++){let c=s.animateFns[l],{promise:d}=c();a.push(d)}r.detachedLeaveAnimationFns=void 0}r.running=Promise.allSettled(a),FO(t,i)}else t&&yo.delete(t[Ni]),i(!1)},r)}function FO(t,n){let e=t[pr]?.running;if(e){e.then(()=>{t[pr].running=void 0,yo.delete(t[Ni]),n(!0)});return}n(!1)}function LO(t,n){let e=t.cleanup,i=n[bs];if(e!==null)for(let s=0;s<e.length-1;s+=2)if(typeof e[s]=="string"){let a=e[s+3];a>=0?i[a]():i[-a].unsubscribe(),s+=2}else{let a=i[e[s+1]];e[s].call(a)}i!==null&&(n[bs]=null);let r=n[Ai];if(r!==null){n[Ai]=null;for(let s=0;s<r.length;s++){let a=r[s];a()}}let o=n[ur];if(o!==null){n[ur]=null;for(let s of o)s.destroy()}}function BO(t,n){let e;if(t!=null&&(e=t.destroyHooks)!=null)for(let i=0;i<e.length;i+=2){let r=n[e[i]];if(!(r instanceof vo)){let o=e[i+1];if(Array.isArray(o))for(let s=0;s<o.length;s+=2){let a=r[o[s]],l=o[s+1];He(Ae.LifecycleHookStart,a,l);try{l.call(a)}finally{He(Ae.LifecycleHookEnd,a,l)}}else{He(Ae.LifecycleHookStart,r,o);try{o.call(r)}finally{He(Ae.LifecycleHookEnd,r,o)}}}}}function fE(t,n,e){return jO(t,n.parent,e)}function jO(t,n,e){let i=n;for(;i!==null&&i.type&168;)n=i,i=n.parent;if(i===null)return e[On];if(Pi(i)){let{encapsulation:r}=t.data[i.directiveStart+i.componentOffset];if(r===Vn.None||r===Vn.Emulated)return null}return Ln(i,e)}function pE(t,n,e){return HO(t,n,e)}function VO(t,n,e){return t.type&40?Ln(t,e):null}var HO=VO,J0;function h_(t,n,e,i){let r=fE(t,i,n),o=n[ze],s=i.parent||n[Wt],a=pE(s,i,n);if(r!=null)if(Array.isArray(e))for(let l=0;l<e.length;l++)Y0(o,r,e[l],a,!1);else Y0(o,r,e,a,!1);J0!==void 0&&J0(o,i,n,e,r)}function ll(t,n){if(n!==null){let e=n.type;if(e&3)return Ln(n,t);if(e&4)return Sg(-1,t[n.index]);if(e&8){let i=n.child;if(i!==null)return ll(t,i);{let r=t[n.index];return Pn(r)?Sg(-1,r):bn(r)}}else{if(e&128)return ll(t,n.next);if(e&32)return l_(n,t)()||bn(t[n.index]);{let i=mE(t,n);if(i!==null){if(Array.isArray(i))return i[0];let r=hr(t[qt]);return ll(r,i)}else return ll(t,n.next)}}}return null}function mE(t,n){if(n!==null){let i=t[qt][Wt],r=n.projection;return i.projection[r]}return null}function Sg(t,n){let e=ot+t+1;if(e<n.length){let i=n[e],r=i[X].firstChild;if(r!==null)return ll(i,r)}return n[mr]}function f_(t,n,e,i,r,o,s){for(;e!=null;){let a=i[Ri];if(e.type===128){e=e.next;continue}let l=i[e.index],c=e.type;if(s&&n===0&&(l&&As(bn(l),i),e.flags|=2),!Iu(e))if(c&8)f_(t,n,e.child,i,r,o,!1),Is(n,t,a,r,l,e,o,i);else if(c&32){let d=l_(e,i),h;for(;h=d();)Is(n,t,a,r,h,e,o,i);Is(n,t,a,r,l,e,o,i)}else c&16?gE(t,n,i,e,r,o):Is(n,t,a,r,l,e,o,i);e=s?e.projectionNext:e.next}}function Ou(t,n,e,i,r,o){f_(e,i,t.firstChild,n,r,o,!1)}function UO(t,n,e){let i=n[ze],r=fE(t,e,n),o=e.parent||n[Wt],s=pE(o,e,n);gE(i,0,n,e,r,s)}function gE(t,n,e,i,r,o){let s=e[qt],l=s[Wt].projection[i.projection];if(Array.isArray(l))for(let c=0;c<l.length;c++){let d=l[c];Is(n,t,e[Ri],r,d,i,o,e)}else{let c=l,d=s[wt];FD(i)&&(c.flags|=128),f_(t,n,c,d,r,o,!0)}}function zO(t,n,e,i,r,o,s){let a=i[mr],l=bn(i);a!==l&&Is(n,t,e,o,a,r,s);for(let c=ot;c<i.length;c++){let d=i[c];Ou(d[X],d,t,n,o,a)}}function $O(t,n,e,i,r){if(n)r?t.addClass(e,i):t.removeClass(e,i);else{let o=i.indexOf("-")===-1?void 0:ui.DashCase;r==null?t.removeStyle(e,i,o):(typeof r=="string"&&r.endsWith("!important")&&(r=r.slice(0,-10),o|=ui.Important),t.setStyle(e,i,r,o))}}function _E(t,n,e,i,r){let o=li(),s=i&2;try{_r(-1),s&&n.length>et&&cE(t,n,et,!1);let a=s?Ae.TemplateUpdateStart:Ae.TemplateCreateStart;He(a,r,e),e(i,r)}finally{_r(o);let a=s?Ae.TemplateUpdateEnd:Ae.TemplateCreateEnd;He(a,r,e)}}function p_(t,n,e){KO(t,n,e),(e.flags&64)===64&&ZO(t,n,e)}function Pu(t,n,e=Ln){let i=n.localNames;if(i!==null){let r=n.index+1;for(let o=0;o<i.length;o+=2){let s=i[o+1],a=s===-1?e(n,t):t[s];t[r++]=a}}}function GO(t,n,e,i){let o=i.get($D,zD)||e===Vn.ShadowDom||e===Vn.ExperimentalIsolatedShadowDom,s=t.selectRootElement(n,o);return WO(s),s}function WO(t){qO(t)}var qO=()=>null;function YO(t){return t==="class"?"className":t==="for"?"htmlFor":t==="formaction"?"formAction":t==="innerHtml"?"innerHTML":t==="readonly"?"readOnly":t==="tabindex"?"tabIndex":t}function vE(t,n,e,i,r,o){let s=n[X];if(m_(t,s,n,e,i)){Pi(t)&&QO(n,t.index);return}t.type&3&&(e=YO(e)),yE(t,n,e,i,r,o)}function yE(t,n,e,i,r,o){if(t.type&3){let s=Ln(t,n);i=o!=null?o(i,t.value||"",e):i,r.setProperty(s,e,i)}else t.type&12}function QO(t,n){let e=wn(n,t);e[ne]&16||(e[ne]|=64)}function KO(t,n,e){let i=e.directiveStart,r=e.directiveEnd;Pi(e)&&xO(n,e,t.data[i+e.componentOffset]),t.firstCreatePass||hu(e,n);let o=e.initialInputs;for(let s=i;s<r;s++){let a=t.data[s],l=dl(n,t,s,e);if(As(l,n),o!==null&&tP(n,s-i,l,a,e,o),Fn(a)){let c=wn(e.index,n);c[ct]=dl(n,t,s,e)}}}function ZO(t,n,e){let i=e.directiveStart,r=e.directiveEnd,o=e.index,s=E0();try{_r(o);for(let a=i;a<r;a++){let l=t.data[a],c=n[a];Gd(a),(l.hostBindings!==null||l.hostVars!==0||l.hostAttrs!==null)&&XO(l,c)}}finally{_r(-1),Gd(s)}}function XO(t,n){t.hostBindings!==null&&t.hostBindings(1,n)}function bE(t,n){let e=t.directiveRegistry,i=null;if(e)for(let r=0;r<e.length;r++){let o=e[r];sE(n,o.selectors,!1)&&(i??=[],Fn(o)?i.unshift(o):i.push(o))}return i}function JO(t,n,e,i,r,o){let s=Ln(t,n);eP(n[ze],s,o,t.value,e,i,r)}function eP(t,n,e,i,r,o,s){if(o==null)t.removeAttribute(n,r,e);else{let a=s==null?Ja(o):s(o,i||"",r);t.setAttribute(n,r,a,e)}}function tP(t,n,e,i,r,o){let s=o[n];if(s!==null)for(let a=0;a<s.length;a+=2){let l=s[a],c=s[a+1];Cg(i,e,l,c)}}function wE(t,n,e,i,r){let o=et+e,s=n[X],a=r(s,n,t,i,e);n[o]=a,Es(t,!0);let l=t.type===2;return l?(iE(n[ze],a,t),(m0()===0||il(t))&&As(a,n),g0()):As(a,n),Qd()&&(!l||!Iu(t))&&h_(s,n,a,t),t}function DE(t){let n=t;return $m()?Gm():(n=n.parent,Es(n,!1)),n}function nP(t,n){let e=t[Ri];if(!e)return;let i;try{i=e.get(fn,null)}catch(r){i=null}i?.(n)}function m_(t,n,e,i,r){let o=t.inputs?.[i],s=t.hostDirectiveInputs?.[i],a=!1;if(s)for(let l=0;l<s.length;l+=2){let c=s[l],d=s[l+1],h=n.data[c];Cg(h,e[c],d,r),a=!0}if(o)for(let l of o){let c=e[l],d=n.data[l];Cg(d,c,i,r),a=!0}return a}function iP(t,n){let e=wn(n,t),i=e[X];rP(i,e);let r=e[On];r!==null&&e[ao]===null&&(e[ao]=GD(r,e[Ri])),He(Ae.ComponentStart);try{g_(i,e,e[ct])}finally{He(Ae.ComponentEnd,e[ct])}}function rP(t,n){for(let e=n.length;e<t.blueprint.length;e++)n.push(t.blueprint[e])}function g_(t,n,e){qd(n);try{let i=t.viewQuery;i!==null&&mg(1,i,e);let r=t.template;r!==null&&_E(t,n,r,1,e),t.firstCreatePass&&(t.firstCreatePass=!1),n[ai]?.finishViewCreation(t),t.staticContentQueries&&WD(t,n),t.staticViewQueries&&mg(2,t.viewQuery,e);let o=t.components;o!==null&&oP(n,o)}catch(i){throw t.firstCreatePass&&(t.incompleteFirstPass=!0,t.firstCreatePass=!1),i}finally{n[ne]&=-5,Yd()}}function oP(t,n){for(let e=0;e<n.length;e++)iP(t,n[e])}function bl(t,n,e,i){let r=K(null);try{let o=n.tView,a=t[ne]&4096?4096:16,l=s_(t,o,e,a,null,n,null,null,i?.injector??null,i?.embeddedViewInjector??null,i?.dehydratedView??null),c=t[n.index];l[fr]=c;let d=t[ai];return d!==null&&(l[ai]=d.createEmbeddedView(o)),g_(o,l,e),l}finally{K(r)}}function ks(t,n){return!n||n.firstChild===null||FD(t)}function hl(t,n,e,i,r=!1){for(;e!==null;){if(e.type===128){e=r?e.projectionNext:e.next;continue}let o=n[e.index];o!==null&&i.push(bn(o)),Pn(o)&&EE(o,i);let s=e.type;if(s&8)hl(t,n,e.child,i);else if(s&32){let a=l_(e,n),l;for(;l=a();)i.push(l)}else if(s&16){let a=mE(n,e);if(Array.isArray(a))i.push(...a);else{let l=hr(n[qt]);hl(l[X],l,a,i,!0)}}e=r?e.projectionNext:e.next}return i}function EE(t,n){for(let e=ot;e<t.length;e++){let i=t[e],r=i[X].firstChild;r!==null&&hl(i[X],i,r,n)}t[mr]!==t[On]&&n.push(t[mr])}function CE(t){if(t[uo]!==null){for(let n of t[uo])n.impl.addSequence(n);t[uo].length=0}}var xE=[];function sP(t){return t[hn]??aP(t)}function aP(t){let n=xE.pop()??Object.create(cP);return n.lView=t,n}function lP(t){t.lView[hn]!==t&&(t.lView=null,xE.push(t))}var cP=G(_({},Wr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{po(t.lView)},consumerOnSignalRead(){this.lView[hn]=this}});function dP(t){let n=t[hn]??Object.create(uP);return n.lView=t,n}var uP=G(_({},Wr),{consumerIsAlwaysLive:!0,kind:"template",consumerMarkedDirty:t=>{let n=hr(t.lView);for(;n&&!SE(n[X]);)n=hr(n);n&&Om(n)},consumerOnSignalRead(){this.lView[hn]=this}});function SE(t){return t.type!==2}function IE(t){if(t[ur]===null)return;let n=!0;for(;n;){let e=!1;for(let i of t[ur])i.dirty&&(e=!0,i.zone===null||Zone.current===i.zone?i.run():i.zone.run(()=>i.run()));n=e&&!!(t[ne]&8192)}}var hP=100;function TE(t,n=0){let i=t[si].rendererFactory,r=!1;r||i.begin?.();try{fP(t,n)}finally{r||i.end?.()}}function fP(t,n){let e=Wm();try{Ya(!0),Ig(t,n);let i=0;for(;rl(t);){if(i===hP)throw new w(103,!1);i++,Ig(t,1)}}finally{Ya(e)}}function pP(t,n,e,i){if(fo(n))return;let r=n[ne],o=!1,s=!1;qd(n);let a=!0,l=null,c=null;o||(SE(t)?(c=sP(n),l=ir(c)):zc()===null?(a=!1,c=dP(n),l=ir(c)):n[hn]&&(rr(n[hn]),n[hn]=null));try{Nm(n),b0(t.bindingStartIndex),e!==null&&_E(t,n,e,2,i);let d=(r&3)===3;if(!o)if(d){let p=t.preOrderCheckHooks;p!==null&&iu(n,p,null)}else{let p=t.preOrderHooks;p!==null&&ru(n,p,0,null),tg(n,0)}if(s||mP(n),IE(n),ME(n,0),t.contentQueries!==null&&WD(t,n),!o)if(d){let p=t.contentCheckHooks;p!==null&&iu(n,p)}else{let p=t.contentHooks;p!==null&&ru(n,p,1),tg(n,1)}_P(t,n);let h=t.components;h!==null&&kE(n,h,0);let f=t.viewQuery;if(f!==null&&mg(2,f,i),!o)if(d){let p=t.viewCheckHooks;p!==null&&iu(n,p)}else{let p=t.viewHooks;p!==null&&ru(n,p,2),tg(n,2)}if(t.firstUpdatePass===!0&&(t.firstUpdatePass=!1),n[Vd]){for(let p of n[Vd])p();n[Vd]=null}o||(CE(n),n[ne]&=-73)}catch(d){throw o||po(n),d}finally{c!==null&&(Yr(c,l),a&&lP(c)),Yd()}}function ME(t,n){for(let e=BD(t);e!==null;e=jD(e))for(let i=ot;i<e.length;i++){let r=e[i];AE(r,n)}}function mP(t){for(let n=BD(t);n!==null;n=jD(n)){if(!(n[ne]&2))continue;let e=n[ho];for(let i=0;i<e.length;i++){let r=e[i];Om(r)}}}function gP(t,n,e){He(Ae.ComponentStart);let i=wn(n,t);try{AE(i,e)}finally{He(Ae.ComponentEnd,i[ct])}}function AE(t,n){Ud(t)&&Ig(t,n)}function Ig(t,n){let i=t[X],r=t[ne],o=t[hn],s=!!(n===0&&r&16);if(s||=!!(r&64&&n===0),s||=!!(r&1024),s||=!!(o?.dirty&&rs(o)),s||=!1,o&&(o.dirty=!1),t[ne]&=-9217,s)pP(i,t,i.template,t[ct]);else if(r&8192){let a=K(null);try{IE(t),ME(t,1);let l=i.components;l!==null&&kE(t,l,1),CE(t)}finally{K(a)}}}function kE(t,n,e){for(let i=0;i<n.length;i++)gP(t,n[i],e)}function _P(t,n){let e=t.hostBindingOpCodes;if(e!==null)try{for(let i=0;i<e.length;i++){let r=e[i];if(r<0)_r(~r);else{let o=r,s=e[++i],a=e[++i];D0(s,o);let l=n[o];He(Ae.HostBindingsUpdateStart,l);try{a(2,l)}finally{He(Ae.HostBindingsUpdateEnd,l)}}}}finally{_r(-1)}}function __(t,n){let e=Wm()?64:1088;for(t[si].changeDetectionScheduler?.notify(n);t;){t[ne]|=e;let i=hr(t);if(Ds(t)&&!i)return t;t=i}return null}function RE(t,n,e,i){return[t,!0,0,n,null,i,null,e,null,null]}function NE(t,n){let e=ot+n;if(e<t.length)return t[e]}function wl(t,n,e,i=!0){let r=n[X];if(vP(r,n,t,e),i){let s=Sg(e,t),a=n[ze],l=a.parentNode(t[mr]);l!==null&&OO(r,t[Wt],a,n,l,s)}let o=n[ao];o!==null&&o.firstChild!==null&&(o.firstChild=null)}function OE(t,n){let e=fl(t,n);return e!==void 0&&Nu(e[X],e),e}function fl(t,n){if(t.length<=ot)return;let e=ot+n,i=t[e];if(i){let r=i[fr];r!==null&&r!==t&&u_(r,i),n>0&&(t[e-1][yn]=i[yn]);let o=el(t,ot+n);NO(i[X],i);let s=o[ai];s!==null&&s.detachView(o[X]),i[wt]=null,i[yn]=null,i[ne]&=-129}return i}function vP(t,n,e,i){let r=ot+i,o=e.length;i>0&&(e[r-1][yn]=n),i<o-ot?(n[yn]=e[r],vm(e,ot+i,n)):(e.push(n),n[yn]=null),n[wt]=e;let s=n[fr];s!==null&&e!==s&&PE(s,n);let a=n[ai];a!==null&&a.insertView(t),zd(n),n[ne]|=128}function PE(t,n){let e=t[ho],i=n[wt];if(Oi(i))t[ne]|=2;else{let r=i[wt][qt];n[qt]!==r&&(t[ne]|=2)}e===null?t[ho]=[n]:e.push(n)}var yr=class{_lView;_cdRefInjectingView;_appRef=null;_attachedToViewContainer=!1;exhaustive;get rootNodes(){let n=this._lView,e=n[X];return hl(e,n,e.firstChild,[])}constructor(n,e){this._lView=n,this._cdRefInjectingView=e}get context(){return this._lView[ct]}set context(n){this._lView[ct]=n}get destroyed(){return fo(this._lView)}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let n=this._lView[wt];if(Pn(n)){let e=n[nl],i=e?e.indexOf(this):-1;i>-1&&(fl(n,i),el(e,i))}this._attachedToViewContainer=!1}Nu(this._lView[X],this._lView)}onDestroy(n){Pm(this._lView,n)}markForCheck(){__(this._cdRefInjectingView||this._lView,4)}detach(){this._lView[ne]&=-129}reattach(){zd(this._lView),this._lView[ne]|=128}detectChanges(){this._lView[ne]|=1024,TE(this._lView)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new w(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null;let n=Ds(this._lView),e=this._lView[fr];e!==null&&!n&&u_(e,this._lView),hE(this._lView[X],this._lView)}attachToAppRef(n){if(this._attachedToViewContainer)throw new w(902,!1);this._appRef=n;let e=Ds(this._lView),i=this._lView[fr];i!==null&&!e&&PE(i,this._lView),zd(this._lView)}};var Lt=(()=>{class t{_declarationLView;_declarationTContainer;elementRef;static __NG_ELEMENT_ID__=yP;constructor(e,i,r){this._declarationLView=e,this._declarationTContainer=i,this.elementRef=r}get ssrId(){return this._declarationTContainer.tView?.ssrId||null}createEmbeddedView(e,i){return this.createEmbeddedViewImpl(e,i)}createEmbeddedViewImpl(e,i,r){let o=bl(this._declarationLView,this._declarationTContainer,e,{embeddedViewInjector:i,dehydratedView:r});return new yr(o)}}return t})();function yP(){return Fu(Dt(),ie())}function Fu(t,n){return t.type&4?new Lt(n,t,Ns(t,n)):null}function Ps(t,n,e,i,r){let o=t.data[n];if(o===null)o=bP(t,n,e,i,r),w0()&&(o.flags|=32);else if(o.type&64){o.type=e,o.value=i,o.attrs=r;let s=_0();o.injectorIndex=s===null?-1:s.injectorIndex}return Es(o,!0),o}function bP(t,n,e,i,r){let o=zm(),s=$m(),a=s?o:o&&o.parent,l=t.data[n]=DP(t,a,e,n,i,r);return wP(t,l,o,s),l}function wP(t,n,e,i){t.firstChild===null&&(t.firstChild=n),e!==null&&(i?e.child==null&&n.parent!==null&&(e.child=n):e.next===null&&(e.next=n,n.prev=e))}function DP(t,n,e,i,r,o){let s=n?n.injectorIndex:-1,a=0;return Vm()&&(a|=128),{type:e,index:i,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,controlDirectiveIndex:-1,customControlIndex:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:o,mergedAttrs:null,localNames:null,initialInputs:null,inputs:null,hostDirectiveInputs:null,outputs:null,hostDirectiveOutputs:null,directiveToIndex:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:n,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function EP(t){let n=t[Im]??[],i=t[wt][ze],r=[];for(let o of n)o.data[UD]!==void 0?r.push(o):CP(o,i);t[Im]=r}function CP(t,n){let e=0,i=t.firstChild;if(i){let r=t.data[HD];for(;e<r;){let o=i.nextSibling;nE(n,i,!1),i=o,e++}}}var xP=()=>null,SP=()=>null;function pu(t,n){return xP(t,n)}function FE(t,n,e){return SP(t,n,e)}var LE=class{},Lu=class{},Tg=class{resolveComponentFactory(n){throw new w(917,!1)}},Dl=class{static NULL=new Tg},qe=class{},ke=(()=>{class t{destroyNode=null;static __NG_ELEMENT_ID__=()=>IP()}return t})();function IP(){let t=ie(),n=Dt(),e=wn(n.index,t);return(Oi(e)?e:t)[ze]}var BE=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>null})}return t})();var su={},Mg=class{injector;parentInjector;constructor(n,e){this.injector=n,this.parentInjector=e}get(n,e,i){let r=this.injector.get(n,su,i);return r!==su||e===su?r:this.parentInjector.get(n,e,i)}};function mu(t,n,e){let i=e?t.styles:null,r=e?t.classes:null,o=0;if(n!==null)for(let s=0;s<n.length;s++){let a=n[s];if(typeof a=="number")o=a;else if(o==1)r=Rd(r,a);else if(o==2){let l=a,c=n[++s];i=Rd(i,l+": "+c+";")}}e?t.styles=i:t.stylesWithoutHost=i,e?t.classes=r:t.classesWithoutHost=r}function Z(t,n=0){let e=ie();if(e===null)return I(t,n);let i=Dt();return RD(i,e,bt(t),n)}function v_(){let t="invalid";throw new Error(t)}function jE(t,n,e,i,r){let o=i===null?null:{"":-1},s=r(t,e);if(s!==null){let a=s,l=null,c=null;for(let d of s)if(d.resolveHostDirectives!==null){[a,l,c]=d.resolveHostDirectives(s);break}AP(t,n,e,a,o,l,c)}o!==null&&i!==null&&TP(e,i,o)}function TP(t,n,e){let i=t.localNames=[];for(let r=0;r<n.length;r+=2){let o=e[n[r+1]];if(o==null)throw new w(-301,!1);i.push(n[r],o)}}function MP(t,n,e){n.componentOffset=e,(t.components??=[]).push(n.index)}function AP(t,n,e,i,r,o,s){let a=i.length,l=null;for(let f=0;f<a;f++){let p=i[f];l===null&&Fn(p)&&(l=p,MP(t,e,f)),hg(hu(e,n),t,p.type)}FP(e,t.data.length,a),l?.viewProvidersResolver&&l.viewProvidersResolver(l);for(let f=0;f<a;f++){let p=i[f];p.providersResolver&&p.providersResolver(p)}let c=!1,d=!1,h=lE(t,n,a,null);a>0&&(e.directiveToIndex=new Map);for(let f=0;f<a;f++){let p=i[f];if(e.mergedAttrs=Ms(e.mergedAttrs,p.hostAttrs),RP(t,e,n,h,p),PP(h,p,r),s!==null&&s.has(p)){let[b,C]=s.get(p);e.directiveToIndex.set(p.type,[h,b+e.directiveStart,C+e.directiveStart])}else(o===null||!o.has(p))&&e.directiveToIndex.set(p.type,h);p.contentQueries!==null&&(e.flags|=4),(p.hostBindings!==null||p.hostAttrs!==null||p.hostVars!==0)&&(e.flags|=64);let m=p.type.prototype;!c&&(m.ngOnChanges||m.ngOnInit||m.ngDoCheck)&&((t.preOrderHooks??=[]).push(e.index),c=!0),!d&&(m.ngOnChanges||m.ngDoCheck)&&((t.preOrderCheckHooks??=[]).push(e.index),d=!0),h++}kP(t,e,o)}function kP(t,n,e){for(let i=n.directiveStart;i<n.directiveEnd;i++){let r=t.data[i];if(e===null||!e.has(r))eD(0,n,r,i),eD(1,n,r,i),nD(n,i,!1);else{let o=e.get(r);tD(0,n,o,i),tD(1,n,o,i),nD(n,i,!0)}}}function eD(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s;t===0?s=n.inputs??={}:s=n.outputs??={},s[o]??=[],s[o].push(i),VE(n,o)}}function tD(t,n,e,i){let r=t===0?e.inputs:e.outputs;for(let o in r)if(r.hasOwnProperty(o)){let s=r[o],a;t===0?a=n.hostDirectiveInputs??={}:a=n.hostDirectiveOutputs??={},a[s]??=[],a[s].push(i,o),VE(n,s)}}function VE(t,n){n==="class"?t.flags|=8:n==="style"&&(t.flags|=16)}function nD(t,n,e){let{attrs:i,inputs:r,hostDirectiveInputs:o}=t;if(i===null||!e&&r===null||e&&o===null||r_(t)){t.initialInputs??=[],t.initialInputs.push(null);return}let s=null,a=0;for(;a<i.length;){let l=i[a];if(l===0){a+=4;continue}else if(l===5){a+=2;continue}else if(typeof l=="number")break;if(!e&&r.hasOwnProperty(l)){let c=r[l];for(let d of c)if(d===n){s??=[],s.push(l,i[a+1]);break}}else if(e&&o.hasOwnProperty(l)){let c=o[l];for(let d=0;d<c.length;d+=2)if(c[d]===n){s??=[],s.push(c[d+1],i[a+1]);break}}a+=2}t.initialInputs??=[],t.initialInputs.push(s)}function RP(t,n,e,i,r){t.data[i]=r;let o=r.factory||(r.factory=dr(r.type,!0)),s=new vo(o,Fn(r),Z,null);t.blueprint[i]=s,e[i]=s,NP(t,n,i,lE(t,e,r.hostVars,Qt),r)}function NP(t,n,e,i,r){let o=r.hostBindings;if(o){let s=t.hostBindingOpCodes;s===null&&(s=t.hostBindingOpCodes=[]);let a=~n.index;OP(s)!=a&&s.push(a),s.push(e,i,o)}}function OP(t){let n=t.length;for(;n>0;){let e=t[--n];if(typeof e=="number"&&e<0)return e}return 0}function PP(t,n,e){if(e){if(n.exportAs)for(let i=0;i<n.exportAs.length;i++)e[n.exportAs[i]]=t;Fn(n)&&(e[""]=t)}}function FP(t,n,e){t.flags|=1,t.directiveStart=n,t.directiveEnd=n+e,t.providerIndexes=n}function HE(t,n,e,i,r,o,s,a){let l=n[X],c=l.consts,d=Dn(c,s),h=Ps(l,t,e,i,d);return o&&jE(l,n,h,Dn(c,a),r),h.mergedAttrs=Ms(h.mergedAttrs,h.attrs),h.attrs!==null&&mu(h,h.attrs,!1),h.mergedAttrs!==null&&mu(h,h.mergedAttrs,!0),l.queries!==null&&l.queries.elementStart(l,h),h}function UE(t,n){ED(t,n),Tm(n)&&t.queries.elementEnd(n)}function LP(t,n,e,i,r,o){let s=n.consts,a=Dn(s,r),l=Ps(n,t,e,i,a);if(l.mergedAttrs=Ms(l.mergedAttrs,l.attrs),o!=null){let c=Dn(s,o);l.localNames=[];for(let d=0;d<c.length;d+=2)l.localNames.push(c[d],-1)}return l.attrs!==null&&mu(l,l.attrs,!1),l.mergedAttrs!==null&&mu(l,l.mergedAttrs,!0),n.queries!==null&&n.queries.elementStart(n,l),l}function zE(t,n,e){return t[n]=e}function BP(t,n){return t[n]}function En(t,n,e){if(e===Qt)return!1;let i=t[n];return Object.is(i,e)?!1:(t[n]=e,!0)}function jP(t,n,e,i){let r=En(t,n,e);return En(t,n+1,i)||r}function au(t,n,e){return function i(r){let o=Pi(t)?wn(t.index,n):n;__(o,5);let s=n[ct],a=iD(n,s,e,r),l=i.__ngNextListenerFn__;for(;l;)a=iD(n,s,l,r)&&a,l=l.__ngNextListenerFn__;return a}}function iD(t,n,e,i){let r=K(null);try{return He(Ae.OutputStart,n,e),e(i)!==!1}catch(o){return nP(t,o),!1}finally{He(Ae.OutputEnd,n,e),K(r)}}function $E(t,n,e,i,r,o,s,a){let l=il(t),c=!1,d=null;if(!i&&l&&(d=HP(n,e,o,t.index)),d!==null){let h=d.__ngLastListenerFn__||d;h.__ngNextListenerFn__=s,d.__ngLastListenerFn__=s,c=!0}else{let h=Ln(t,e),f=i?i(h):h;UN(e,f,o,a);let p=r.listen(f,o,a);if(!VP(o)){let m=i?b=>i(bn(b[t.index])):t.index;GE(m,n,e,o,a,p,!1)}}return c}function VP(t){return t.startsWith("animation")||t.startsWith("transition")}function HP(t,n,e,i){let r=t.cleanup;if(r!=null)for(let o=0;o<r.length-1;o+=2){let s=r[o];if(s===e&&r[o+1]===i){let a=n[bs],l=r[o+2];return a&&a.length>l?a[l]:null}typeof s=="string"&&(o+=2)}return null}function GE(t,n,e,i,r,o,s){let a=n.firstCreatePass?Lm(n):null,l=Fm(e),c=l.length;l.push(r,o),a&&a.push(i,t,c,(c+1)*(s?-1:1))}function rD(t,n,e,i,r,o){let s=n[e],a=n[X],c=a.data[e].outputs[i],h=s[c].subscribe(o);GE(t.index,a,n,r,o,h,!0)}var Ag=Symbol("BINDING");function WE(t){return t.debugInfo?.className||t.type.name||null}var gu=class extends Dl{ngModule;constructor(n){super(),this.ngModule=n}resolveComponentFactory(n){let e=oi(n);return new br(e,this.ngModule)}};function UP(t){return Object.keys(t).map(n=>{let[e,i,r]=t[n],o={propName:e,templateName:n,isSignal:(i&Au.SignalBased)!==0};return r&&(o.transform=r),o})}function zP(t){return Object.keys(t).map(n=>({propName:t[n],templateName:n}))}function $P(t,n,e){let i=n instanceof Fe?n:n?.injector;return i&&t.getStandaloneInjector!==null&&(i=t.getStandaloneInjector(i)||i),i?new Mg(e,i):e}function GP(t){let n=t.get(qe,null);if(n===null)throw new w(407,!1);let e=t.get(BE,null),i=t.get(Rn,null),r=t.get(Hn,null,{optional:!0});return{rendererFactory:n,sanitizer:e,changeDetectionScheduler:i,ngReflect:!1,tracingService:r}}function WP(t,n){let e=qE(t);return eE(n,e,e==="svg"?Mm:e==="math"?c0:null)}function qE(t){return(t.selectors[0][0]||"div").toLowerCase()}var br=class extends Lu{componentDef;ngModule;selector;componentType;ngContentSelectors;isBoundToModule;cachedInputs=null;cachedOutputs=null;get inputs(){return this.cachedInputs??=UP(this.componentDef.inputs),this.cachedInputs}get outputs(){return this.cachedOutputs??=zP(this.componentDef.outputs),this.cachedOutputs}constructor(n,e){super(),this.componentDef=n,this.ngModule=e,this.componentType=n.type,this.selector=wO(n.selectors),this.ngContentSelectors=n.ngContentSelectors??[],this.isBoundToModule=!!e}create(n,e,i,r,o,s){He(Ae.DynamicComponentStart);let a=K(null);try{let l=this.componentDef,c=$P(l,r||this.ngModule,n),d=GP(c),h=d.tracingService;return h&&h.componentCreate?h.componentCreate(WE(l),()=>this.createComponentRef(d,c,e,i,o,s)):this.createComponentRef(d,c,e,i,o,s)}finally{K(a)}}createComponentRef(n,e,i,r,o,s){let a=this.componentDef,l=qP(r,a,s,o),c=n.rendererFactory.createRenderer(null,a),d=r?GO(c,r,a.encapsulation,e):WP(a,c),h=s?.some(oD)||o?.some(m=>typeof m!="function"&&m.bindings.some(oD)),f=s_(null,l,null,512|aE(a),null,null,n,c,e,null,GD(d,e,!0));f[et]=d,qd(f);let p=null;try{let m=HE(et,f,2,"#host",()=>l.directiveRegistry,!0,0);iE(c,d,m),As(d,f),p_(l,f,m),qD(l,m,f),UE(l,m),i!==void 0&&QP(m,this.ngContentSelectors,i),p=wn(m.index,f),f[ct]=p[ct],g_(l,f,null)}catch(m){throw p!==null&&pg(p),pg(f),m}finally{He(Ae.DynamicComponentEnd),Yd()}return new _u(this.componentType,f,!!h)}};function qP(t,n,e,i){let r=t?["ng-version","21.2.8"]:DO(n.selectors[0]),o=null,s=null,a=0;if(e)for(let d of e)a+=d[Ag].requiredVars,d.create&&(d.targetIdx=0,(o??=[]).push(d)),d.update&&(d.targetIdx=0,(s??=[]).push(d));if(i)for(let d=0;d<i.length;d++){let h=i[d];if(typeof h!="function")for(let f of h.bindings){a+=f[Ag].requiredVars;let p=d+1;f.create&&(f.targetIdx=p,(o??=[]).push(f)),f.update&&(f.targetIdx=p,(s??=[]).push(f))}}let l=[n];if(i)for(let d of i){let h=typeof d=="function"?d:d.type,f=Od(h);l.push(f)}return o_(0,null,YP(o,s),1,a,l,null,null,null,[r],null)}function YP(t,n){return!t&&!n?null:e=>{if(e&1&&t)for(let i of t)i.create();if(e&2&&n)for(let i of n)i.update()}}function oD(t){let n=t[Ag].kind;return n==="input"||n==="twoWay"}var _u=class extends LE{_rootLView;_hasInputBindings;instance;hostView;changeDetectorRef;componentType;location;previousInputValues=null;_tNode;constructor(n,e,i){super(),this._rootLView=e,this._hasInputBindings=i,this._tNode=Hd(e[X],et),this.location=Ns(this._tNode,e),this.instance=wn(this._tNode.index,e)[ct],this.hostView=this.changeDetectorRef=new yr(e,void 0),this.componentType=n}setInput(n,e){this._hasInputBindings;let i=this._tNode;if(this.previousInputValues??=new Map,this.previousInputValues.has(n)&&Object.is(this.previousInputValues.get(n),e))return;let r=this._rootLView,o=m_(i,r[X],r,n,e);this.previousInputValues.set(n,e);let s=wn(i.index,r);__(s,1)}get injector(){return new _o(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(n){this.hostView.onDestroy(n)}};function QP(t,n,e){let i=t.projection=[];for(let r=0;r<n.length;r++){let o=e[r];i.push(o!=null&&o.length?Array.from(o):null)}}var Et=(()=>{class t{static __NG_ELEMENT_ID__=KP}return t})();function KP(){let t=Dt();return YE(t,ie())}var kg=class t extends Et{_lContainer;_hostTNode;_hostLView;constructor(n,e,i){super(),this._lContainer=n,this._hostTNode=e,this._hostLView=i}get element(){return Ns(this._hostTNode,this._hostLView)}get injector(){return new _o(this._hostTNode,this._hostLView)}get parentInjector(){let n=Qg(this._hostTNode,this._hostLView);if(SD(n)){let e=du(n,this._hostLView),i=cu(n),r=e[X].data[i+8];return new _o(r,e)}else return new _o(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(n){let e=sD(this._lContainer);return e!==null&&e[n]||null}get length(){return this._lContainer.length-ot}createEmbeddedView(n,e,i){let r,o;typeof i=="number"?r=i:i!=null&&(r=i.index,o=i.injector);let s=pu(this._lContainer,n.ssrId),a=n.createEmbeddedViewImpl(e||{},o,s);return this.insertImpl(a,r,ks(this._hostTNode,s)),a}createComponent(n,e,i,r,o,s,a){let l=n&&!mN(n),c;if(l)c=e;else{let C=e||{};c=C.index,i=C.injector,r=C.projectableNodes,o=C.environmentInjector||C.ngModuleRef,s=C.directives,a=C.bindings}let d=l?n:new br(oi(n)),h=i||this.parentInjector;if(!o&&d.ngModule==null){let M=(l?h:this.parentInjector).get(Fe,null);M&&(o=M)}let f=oi(d.componentType??{}),p=pu(this._lContainer,f?.id??null),m=p?.firstChild??null,b=d.create(h,r,m,o,s,a);return this.insertImpl(b.hostView,c,ks(this._hostTNode,p)),b}insert(n,e){return this.insertImpl(n,e,!0)}insertImpl(n,e,i){let r=n._lView;if(u0(r)){let a=this.indexOf(n);if(a!==-1)this.detach(a);else{let l=r[wt],c=new t(l,l[Wt],l[wt]);c.detach(c.indexOf(n))}}let o=this._adjustIndex(e),s=this._lContainer;return wl(s,r,o,i),n.attachToViewContainerRef(),vm(rg(s),o,n),n}move(n,e){return this.insert(n,e)}indexOf(n){let e=sD(this._lContainer);return e!==null?e.indexOf(n):-1}remove(n){let e=this._adjustIndex(n,-1),i=fl(this._lContainer,e);i&&(el(rg(this._lContainer),e),Nu(i[X],i))}detach(n){let e=this._adjustIndex(n,-1),i=fl(this._lContainer,e);return i&&el(rg(this._lContainer),e)!=null?new yr(i):null}_adjustIndex(n,e=0){return n??this.length+e}};function sD(t){return t[nl]}function rg(t){return t[nl]||(t[nl]=[])}function YE(t,n){let e,i=n[t.index];return Pn(i)?e=i:(e=RE(i,n,null,t),n[t.index]=e,a_(n,e)),XP(e,n,t,i),new kg(e,t,n)}function ZP(t,n){let e=t[ze],i=e.createComment(""),r=Ln(n,t),o=e.parentNode(r);return fu(e,o,i,e.nextSibling(r),!1),i}var XP=tF,JP=()=>!1;function eF(t,n,e){return JP(t,n,e)}function tF(t,n,e,i){if(t[mr])return;let r;e.type&8?r=bn(i):r=ZP(n,e),t[mr]=r}var Rg=class t{queryList;matches=null;constructor(n){this.queryList=n}clone(){return new t(this.queryList)}setDirty(){this.queryList.setDirty()}},Ng=class t{queries;constructor(n=[]){this.queries=n}createEmbeddedView(n){let e=n.queries;if(e!==null){let i=n.contentQueries!==null?n.contentQueries[0]:e.length,r=[];for(let o=0;o<i;o++){let s=e.getByIndex(o),a=this.queries[s.indexInDeclarationView];r.push(a.clone())}return new t(r)}return null}insertView(n){this.dirtyQueriesWithMatches(n)}detachView(n){this.dirtyQueriesWithMatches(n)}finishViewCreation(n){this.dirtyQueriesWithMatches(n)}dirtyQueriesWithMatches(n){for(let e=0;e<this.queries.length;e++)b_(n,e).matches!==null&&this.queries[e].setDirty()}},vu=class{flags;read;predicate;constructor(n,e,i=null){this.flags=e,this.read=i,typeof n=="string"?this.predicate=sF(n):this.predicate=n}},Og=class t{queries;constructor(n=[]){this.queries=n}elementStart(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].elementStart(n,e)}elementEnd(n){for(let e=0;e<this.queries.length;e++)this.queries[e].elementEnd(n)}embeddedTView(n){let e=null;for(let i=0;i<this.length;i++){let r=e!==null?e.length:0,o=this.getByIndex(i).embeddedTView(n,r);o&&(o.indexInDeclarationView=i,e!==null?e.push(o):e=[o])}return e!==null?new t(e):null}template(n,e){for(let i=0;i<this.queries.length;i++)this.queries[i].template(n,e)}getByIndex(n){return this.queries[n]}get length(){return this.queries.length}track(n){this.queries.push(n)}},Pg=class t{metadata;matches=null;indexInDeclarationView=-1;crossesNgTemplate=!1;_declarationNodeIndex;_appliesToNextNode=!0;constructor(n,e=-1){this.metadata=n,this._declarationNodeIndex=e}elementStart(n,e){this.isApplyingToNode(e)&&this.matchTNode(n,e)}elementEnd(n){this._declarationNodeIndex===n.index&&(this._appliesToNextNode=!1)}template(n,e){this.elementStart(n,e)}embeddedTView(n,e){return this.isApplyingToNode(n)?(this.crossesNgTemplate=!0,this.addMatch(-n.index,e),new t(this.metadata)):null}isApplyingToNode(n){if(this._appliesToNextNode&&(this.metadata.flags&1)!==1){let e=this._declarationNodeIndex,i=n.parent;for(;i!==null&&i.type&8&&i.index!==e;)i=i.parent;return e===(i!==null?i.index:-1)}return this._appliesToNextNode}matchTNode(n,e){let i=this.metadata.predicate;if(Array.isArray(i))for(let r=0;r<i.length;r++){let o=i[r];this.matchTNodeWithReadOption(n,e,nF(e,o)),this.matchTNodeWithReadOption(n,e,ou(e,n,o,!1,!1))}else i===Lt?e.type&4&&this.matchTNodeWithReadOption(n,e,-1):this.matchTNodeWithReadOption(n,e,ou(e,n,i,!1,!1))}matchTNodeWithReadOption(n,e,i){if(i!==null){let r=this.metadata.read;if(r!==null)if(r===O||r===Et||r===Lt&&e.type&4)this.addMatch(e.index,-2);else{let o=ou(e,n,r,!1,!1);o!==null&&this.addMatch(e.index,o)}else this.addMatch(e.index,i)}}addMatch(n,e){this.matches===null?this.matches=[n,e]:this.matches.push(n,e)}};function nF(t,n){let e=t.localNames;if(e!==null){for(let i=0;i<e.length;i+=2)if(e[i]===n)return e[i+1]}return null}function iF(t,n){return t.type&11?Ns(t,n):t.type&4?Fu(t,n):null}function rF(t,n,e,i){return e===-1?iF(n,t):e===-2?oF(t,n,i):dl(t,t[X],e,n)}function oF(t,n,e){if(e===O)return Ns(n,t);if(e===Lt)return Fu(n,t);if(e===Et)return YE(n,t)}function QE(t,n,e,i){let r=n[ai].queries[i];if(r.matches===null){let o=t.data,s=e.matches,a=[];for(let l=0;s!==null&&l<s.length;l+=2){let c=s[l];if(c<0)a.push(null);else{let d=o[c];a.push(rF(n,d,s[l+1],e.metadata.read))}}r.matches=a}return r.matches}function Fg(t,n,e,i){let r=t.queries.getByIndex(e),o=r.matches;if(o!==null){let s=QE(t,n,r,e);for(let a=0;a<o.length;a+=2){let l=o[a];if(l>0)i.push(s[a/2]);else{let c=o[a+1],d=n[-l];for(let h=ot;h<d.length;h++){let f=d[h];f[fr]===f[wt]&&Fg(f[X],f,c,i)}if(d[ho]!==null){let h=d[ho];for(let f=0;f<h.length;f++){let p=h[f];Fg(p[X],p,c,i)}}}}}return i}function y_(t,n){return t[ai].queries[n].queryList}function KE(t,n,e){let i=new vr((e&4)===4);return p0(t,n,i,i.destroy),(n[ai]??=new Ng).queries.push(new Rg(i))-1}function ZE(t,n,e){let i=Qe();return i.firstCreatePass&&(JE(i,new vu(t,n,e),-1),(n&2)===2&&(i.staticViewQueries=!0)),KE(i,ie(),n)}function XE(t,n,e,i){let r=Qe();if(r.firstCreatePass){let o=Dt();JE(r,new vu(n,e,i),o.index),aF(r,t),(e&2)===2&&(r.staticContentQueries=!0)}return KE(r,ie(),e)}function sF(t){return t.split(",").map(n=>n.trim())}function JE(t,n,e){t.queries===null&&(t.queries=new Og),t.queries.track(new Pg(n,e))}function aF(t,n){let e=t.contentQueries||(t.contentQueries=[]),i=e.length?e[e.length-1]:-1;n!==i&&e.push(t.queries.length-1,n)}function b_(t,n){return t.queries.getByIndex(n)}function eC(t,n){let e=t[X],i=b_(e,n);return i.crossesNgTemplate?Fg(e,t,n,[]):QE(e,t,i,n)}function tC(t,n,e){let i,r=Fa(()=>{i._dirtyCounter();let o=lF(i,t);if(n&&o===void 0)throw new w(-951,!1);return o});return i=r[vt],i._dirtyCounter=xe(0),i._flatValue=void 0,r}function w_(t){return tC(!0,!1,t)}function D_(t){return tC(!0,!0,t)}function nC(t,n){let e=t[vt];e._lView=ie(),e._queryIndex=n,e._queryList=y_(e._lView,n),e._queryList.onDirty(()=>e._dirtyCounter.update(i=>i+1))}function lF(t,n){let e=t._lView,i=t._queryIndex;if(e===void 0||i===void 0||e[ne]&4)return n?void 0:Ft;let r=y_(e,i),o=eC(e,i);return r.reset(o,PD),n?r.first:r._changesDetected||t._flatValue===void 0?t._flatValue=r.toArray():t._flatValue}var Lg=new Map,cF=new Set;function E_(t){return Le(this,null,function*(){let n=Lg;Lg=new Map;let e=new Map;function i(o){let s=e.get(o);if(s)return s;let a=t(o).then(l=>dF(o,l));return e.set(o,a),a}let r=Array.from(n).map(a=>Le(null,[a],function*([o,s]){if(s.styleUrl&&s.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");let l=[];s.templateUrl&&l.push(i(s.templateUrl).then(f=>{s.template=f}));let c=typeof s.styles=="string"?[s.styles]:s.styles??[];s.styles=c;let{styleUrl:d,styleUrls:h}=s;if(d&&(h=[d],s.styleUrl=void 0),h?.length){let f=Promise.all(h.map(p=>i(p))).then(p=>{c.push(...p),s.styleUrls=void 0});l.push(f)}yield Promise.all(l),cF.delete(o)}));yield Promise.all(r)})}function iC(){return Lg.size===0}function dF(t,n){return Le(this,null,function*(){if(typeof n=="string")return n;if(n.status!==void 0&&n.status!==200)throw new w(918,!1);return n.text()})}var hi=class{},Bu=class{};var pl=class extends hi{ngModuleType;_parent;_bootstrapComponents=[];_r3Injector;instance;destroyCbs=[];componentFactoryResolver=new gu(this);constructor(n,e,i,r=!0){super(),this.ngModuleType=n,this._parent=e;let o=mm(n);this._bootstrapComponents=rE(o.bootstrap),this._r3Injector=Km(n,e,[{provide:hi,useValue:this},{provide:Dl,useValue:this.componentFactoryResolver},...i],Za(n),new Set(["environment"])),r&&this.resolveInjectorInitializers()}resolveInjectorInitializers(){this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(this.ngModuleType)}get injector(){return this._r3Injector}destroy(){let n=this._r3Injector;!n.destroyed&&n.destroy(),this.destroyCbs.forEach(e=>e()),this.destroyCbs=null}onDestroy(n){this.destroyCbs.push(n)}},ml=class extends Bu{moduleType;constructor(n){super(),this.moduleType=n}create(n){return new pl(this.moduleType,n,[])}};function rC(t,n,e){return new pl(t,n,e,!1)}var yu=class extends hi{injector;componentFactoryResolver=new gu(this);instance=null;constructor(n){super();let e=new oo([...n.providers,{provide:hi,useValue:this},{provide:Dl,useValue:this.componentFactoryResolver}],n.parent||ys(),n.debugName,new Set(["environment"]));this.injector=e,n.runEnvironmentInitializers&&e.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(n){this.injector.onDestroy(n)}};function Fs(t,n,e=null){return new yu({providers:t,parent:n,debugName:e,runEnvironmentInitializers:!0}).injector}var uF=(()=>{class t{_injector;cachedInjectors=new Map;constructor(e){this._injector=e}getOrCreateStandaloneInjector(e){if(!e.standalone)return null;if(!this.cachedInjectors.has(e)){let i=wm(!1,e.type),r=i.length>0?Fs([i],this._injector,""):null;this.cachedInjectors.set(e,r)}return this.cachedInjectors.get(e)}ngOnDestroy(){try{for(let e of this.cachedInjectors.values())e!==null&&e.destroy()}finally{this.cachedInjectors.clear()}}static \u0275prov=v({token:t,providedIn:"environment",factory:()=>new t(I(Fe))})}return t})();function F(t){return vl(()=>{let n=oC(t),e=G(_({},n),{decls:t.decls,vars:t.vars,template:t.template,consts:t.consts||null,ngContentSelectors:t.ngContentSelectors,onPush:t.changeDetection===Kg.OnPush,directiveDefs:null,pipeDefs:null,dependencies:n.standalone&&t.dependencies||null,getStandaloneInjector:n.standalone?r=>r.get(uF).getOrCreateStandaloneInjector(e):null,getExternalStyles:null,signals:t.signals??!1,data:t.data||{},encapsulation:t.encapsulation||Vn.Emulated,styles:t.styles||Ft,_:null,schemas:t.schemas||null,tView:null,id:""});n.standalone&&Cn("NgStandalone"),sC(e);let i=t.dependencies;return e.directiveDefs=aD(i,hF),e.pipeDefs=aD(i,Kw),e.id=mF(e),e})}function hF(t){return oi(t)||Od(t)}function k(t){return vl(()=>({type:t.type,bootstrap:t.bootstrap||Ft,declarations:t.declarations||Ft,imports:t.imports||Ft,exports:t.exports||Ft,transitiveCompileScopes:null,schemas:t.schemas||null,id:t.id||null}))}function fF(t,n){if(t==null)return Nn;let e={};for(let i in t)if(t.hasOwnProperty(i)){let r=t[i],o,s,a,l;Array.isArray(r)?(a=r[0],o=r[1],s=r[2]??o,l=r[3]||null):(o=r,s=r,a=Au.None,l=null),e[o]=[i,a,l],n[o]=s}return e}function pF(t){if(t==null)return Nn;let n={};for(let e in t)t.hasOwnProperty(e)&&(n[t[e]]=e);return n}function R(t){return vl(()=>{let n=oC(t);return sC(n),n})}function Eo(t){return{type:t.type,name:t.name,factory:null,pure:t.pure!==!1,standalone:t.standalone??!0,onDestroy:t.type.prototype.ngOnDestroy||null}}function oC(t){let n={};return{type:t.type,providersResolver:null,viewProvidersResolver:null,factory:null,hostBindings:t.hostBindings||null,hostVars:t.hostVars||0,hostAttrs:t.hostAttrs||null,contentQueries:t.contentQueries||null,declaredInputs:n,inputConfig:t.inputs||Nn,exportAs:t.exportAs||null,standalone:t.standalone??!0,signals:t.signals===!0,selectors:t.selectors||Ft,viewQuery:t.viewQuery||null,features:t.features||null,setInput:null,resolveHostDirectives:null,hostDirectives:null,controlDef:null,inputs:fF(t.inputs,n),outputs:pF(t.outputs),debugInfo:null}}function sC(t){t.features?.forEach(n=>n(t))}function aD(t,n){return t?()=>{let e=typeof t=="function"?t():t,i=[];for(let r of e){let o=n(r);o!==null&&i.push(o)}return i}:null}function mF(t){let n=0,e=typeof t.consts=="function"?"":t.consts,i=[t.selectors,t.ngContentSelectors,t.hostVars,t.hostAttrs,e,t.vars,t.decls,t.encapsulation,t.standalone,t.signals,t.exportAs,JSON.stringify(t.inputs),JSON.stringify(t.outputs),Object.getOwnPropertyNames(t.type.prototype),!!t.contentQueries,!!t.viewQuery];for(let o of i.join("|"))n=Math.imul(31,n)+o.charCodeAt(0)<<0;return n+=2147483648,"c"+n}function C_(t){let n=e=>{let i=Array.isArray(t);e.hostDirectives===null?(e.resolveHostDirectives=gF,e.hostDirectives=i?t.map(Bg):[t]):i?e.hostDirectives.unshift(...t.map(Bg)):e.hostDirectives.unshift(t)};return n.ngInherit=!0,n}function gF(t){let n=[],e=!1,i=null,r=null;for(let o=0;o<t.length;o++){let s=t[o];if(s.hostDirectives!==null){let a=n.length;i??=new Map,r??=new Map,aC(s,n,i),r.set(s,[a,n.length-1])}o===0&&Fn(s)&&(e=!0,n.push(s))}for(let o=e?1:0;o<t.length;o++)n.push(t[o]);return[n,i,r]}function aC(t,n,e){if(t.hostDirectives!==null)for(let i of t.hostDirectives)if(typeof i=="function"){let r=i();for(let o of r)lD(Bg(o),n,e)}else lD(i,n,e)}function lD(t,n,e){let i=Od(t.directive);_F(i.declaredInputs,t.inputs),aC(i,n,e),e.set(i,t),n.push(i)}function Bg(t){return typeof t=="function"?{directive:bt(t),inputs:Nn,outputs:Nn}:{directive:bt(t.directive),inputs:cD(t.inputs),outputs:cD(t.outputs)}}function cD(t){if(t===void 0||t.length===0)return Nn;let n={};for(let e=0;e<t.length;e+=2)n[t[e]]=t[e+1];return n}function _F(t,n){for(let e in n)if(n.hasOwnProperty(e)){let i=n[e],r=t[e];t[i]=r}}function vF(t){return Object.getPrototypeOf(t.prototype).constructor}function ge(t){let n=vF(t.type),e=!0,i=[t];for(;n;){let r;if(Fn(t))r=n.\u0275cmp||n.\u0275dir;else{if(n.\u0275cmp)throw new w(903,!1);r=n.\u0275dir}if(r){if(e){i.push(r);let s=t;s.inputs=og(t.inputs),s.declaredInputs=og(t.declaredInputs),s.outputs=og(t.outputs);let a=r.hostBindings;a&&EF(t,a);let l=r.viewQuery,c=r.contentQueries;if(l&&wF(t,l),c&&DF(t,c),yF(t,r),Qw(t.outputs,r.outputs),Fn(r)&&r.data.animation){let d=t.data;d.animation=(d.animation||[]).concat(r.data.animation)}}let o=r.features;if(o)for(let s=0;s<o.length;s++){let a=o[s];a&&a.ngInherit&&a(t),a===ge&&(e=!1)}}n=Object.getPrototypeOf(n)}bF(i)}function yF(t,n){for(let e in n.inputs){if(!n.inputs.hasOwnProperty(e)||t.inputs.hasOwnProperty(e))continue;let i=n.inputs[e];i!==void 0&&(t.inputs[e]=i,t.declaredInputs[e]=n.declaredInputs[e])}}function bF(t){let n=0,e=null;for(let i=t.length-1;i>=0;i--){let r=t[i];r.hostVars=n+=r.hostVars,r.hostAttrs=Ms(r.hostAttrs,e=Ms(e,r.hostAttrs))}}function og(t){return t===Nn?{}:t===Ft?[]:t}function wF(t,n){let e=t.viewQuery;e?t.viewQuery=(i,r)=>{n(i,r),e(i,r)}:t.viewQuery=n}function DF(t,n){let e=t.contentQueries;e?t.contentQueries=(i,r,o)=>{n(i,r,o),e(i,r,o)}:t.contentQueries=n}function EF(t,n){let e=t.hostBindings;e?t.hostBindings=(i,r)=>{n(i,r),e(i,r)}:t.hostBindings=n}function lC(t,n,e,i,r,o,s,a){if(e.firstCreatePass){t.mergedAttrs=Ms(t.mergedAttrs,t.attrs);let d=t.tView=o_(2,t,r,o,s,e.directiveRegistry,e.pipeRegistry,null,e.schemas,e.consts,null);e.queries!==null&&(e.queries.template(e,t),d.queries=e.queries.embeddedTView(t))}a&&(t.flags|=a),Es(t,!1);let l=xF(e,n,t,i);Qd()&&h_(e,n,l,t),As(l,n);let c=RE(l,n,l,t);n[i+et]=c,a_(n,c),eF(c,t,n)}function CF(t,n,e,i,r,o,s,a,l,c,d){let h=e+et,f;return n.firstCreatePass?(f=Ps(n,h,4,s||null,a||null),jm()&&jE(n,t,f,Dn(n.consts,c),bE),ED(n,f)):f=n.data[h],lC(f,t,n,e,i,r,o,l),il(f)&&p_(n,t,f),c!=null&&Pu(t,f,d),f}function gl(t,n,e,i,r,o,s,a,l,c,d){let h=e+et,f;if(n.firstCreatePass){if(f=Ps(n,h,4,s||null,a||null),c!=null){let p=Dn(n.consts,c);f.localNames=[];for(let m=0;m<p.length;m+=2)f.localNames.push(p[m],-1)}}else f=n.data[h];return lC(f,t,n,e,i,r,o,l),c!=null&&Pu(t,f,d),f}function kt(t,n,e,i,r,o,s,a){let l=ie(),c=Qe(),d=Dn(c.consts,o);return CF(l,c,t,n,e,i,r,d,void 0,s,a),kt}var xF=SF;function SF(t,n,e,i){return Kd(!0),n[ze].createComment("")}var ju=(()=>{class t{log(e){console.log(e)}warn(e){console.warn(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function Ls(t){return typeof t=="function"&&t[vt]!==void 0}function x_(t){return Ls(t)&&typeof t.set=="function"}var Vu=new g(""),Hu=new g(""),El=(()=>{class t{_ngZone;registry;_isZoneStable=!0;_callbacks=[];_taskTrackingZone=null;_destroyRef;constructor(e,i,r){this._ngZone=e,this.registry=i,Cm()&&(this._destroyRef=u(dt,{optional:!0})??void 0),S_||(dC(r),r.addToWindow(i)),this._watchAngularEvents(),e.run(()=>{this._taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){let e=this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),i=this._ngZone.runOutsideAngular(()=>this._ngZone.onStable.subscribe({next:()=>{T.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}}));this._destroyRef?.onDestroy(()=>{e.unsubscribe(),i.unsubscribe()})}isStable(){return this._isZoneStable&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb()}});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(i=>i.updateCb&&i.updateCb(e)?(clearTimeout(i.timeoutId),!1):!0)}}getPendingTasks(){return this._taskTrackingZone?this._taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,i,r){let o=-1;i&&i>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(s=>s.timeoutId!==o),e()},i)),this._callbacks.push({doneCb:e,timeoutId:o,updateCb:r})}whenStable(e,i,r){if(r&&!this._taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(e,i,r),this._runCallbacksIfReady()}registerApplication(e){this.registry.registerApplication(e,this)}unregisterApplication(e){this.registry.unregisterApplication(e)}findProviders(e,i,r){return[]}static \u0275fac=function(i){return new(i||t)(I(T),I(cC),I(Hu))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),cC=(()=>{class t{_applications=new Map;registerApplication(e,i){this._applications.set(e,i)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,i=!0){return S_?.findTestabilityInTree(this,e,i)??null}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})();function dC(t){S_=t}var S_;function Bi(t){return!!t&&typeof t.then=="function"}function Uu(t){return!!t&&typeof t.subscribe=="function"}var zu=new g("");function $u(t){return Gt([{provide:zu,multi:!0,useValue:t}])}var I_=(()=>{class t{resolve;reject;initialized=!1;done=!1;donePromise=new Promise((e,i)=>{this.resolve=e,this.reject=i});appInits=u(zu,{optional:!0})??[];injector=u(B);constructor(){}runInitializers(){if(this.initialized)return;let e=[];for(let r of this.appInits){let o=pt(this.injector,r);if(Bi(o))e.push(o);else if(Uu(o)){let s=new Promise((a,l)=>{o.subscribe({complete:a,error:l})});e.push(s)}}let i=()=>{this.done=!0,this.resolve()};Promise.all(e).then(()=>{i()}).catch(r=>{this.reject(r)}),e.length===0&&i(),this.initialized=!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Gu=new g("");function uC(){Rp(()=>{let t="";throw new w(600,t)})}function hC(t){return t.isBoundToModule}var IF=10;function T_(t,n){return Array.isArray(n)?n.reduce(T_,t):_(_({},t),n)}var Bt=(()=>{class t{_runningTick=!1;_destroyed=!1;_destroyListeners=[];_views=[];internalErrorHandler=u(fn);afterRenderManager=u(Ru);zonelessEnabled=u(xs);rootEffectScheduler=u(Xd);dirtyFlags=0;tracingSnapshot=null;allTestViews=new Set;autoDetectTestViews=new Set;includeAllTestViews=!1;afterTick=new E;get allViews(){return[...(this.includeAllTestViews?this.allTestViews:this.autoDetectTestViews).keys(),...this._views]}get destroyed(){return this._destroyed}componentTypes=[];components=[];internalPendingTask=u(ci);get isStable(){return this.internalPendingTask.hasPendingTasksObservable.pipe(W(e=>!e))}constructor(){u(Hn,{optional:!0})}whenStable(){let e;return new Promise(i=>{e=this.isStable.subscribe({next:r=>{r&&i()}})}).finally(()=>{e.unsubscribe()})}_injector=u(Fe);_rendererFactory=null;get injector(){return this._injector}bootstrap(e,i){return this.bootstrapImpl(e,i)}bootstrapImpl(e,i,r=B.NULL){return this._injector.get(T).run(()=>{He(Ae.BootstrapComponentStart);let s=e instanceof Lu;if(!this._injector.get(I_).done){let m="";throw new w(405,m)}let l;s?l=e:l=this._injector.get(Dl).resolveComponentFactory(e),this.componentTypes.push(l.componentType);let c=hC(l)?void 0:this._injector.get(hi),d=i||l.selector,h=l.create(r,[],d,c),f=h.location.nativeElement,p=h.injector.get(Vu,null);return p?.registerApplication(f),h.onDestroy(()=>{this.detachView(h.hostView),cl(this.components,h),p?.unregisterApplication(f)}),this._loadComponent(h),He(Ae.BootstrapComponentEnd,h),h})}tick(){this.zonelessEnabled||(this.dirtyFlags|=1),this._tick()}_tick(){He(Ae.ChangeDetectionStart),this.tracingSnapshot!==null?this.tracingSnapshot.run(ku.CHANGE_DETECTION,this.tickImpl):this.tickImpl()}tickImpl=()=>{if(this._runningTick)throw He(Ae.ChangeDetectionEnd),new w(101,!1);let e=K(null);try{this._runningTick=!0,this.synchronize()}finally{this._runningTick=!1,this.tracingSnapshot?.dispose(),this.tracingSnapshot=null,K(e),this.afterTick.next(),He(Ae.ChangeDetectionEnd)}};synchronize(){this._rendererFactory===null&&!this._injector.destroyed&&(this._rendererFactory=this._injector.get(qe,null,{optional:!0}));let e=0;for(;this.dirtyFlags!==0&&e++<IF;){He(Ae.ChangeDetectionSyncStart);try{this.synchronizeOnce()}finally{He(Ae.ChangeDetectionSyncEnd)}}}synchronizeOnce(){this.dirtyFlags&16&&(this.dirtyFlags&=-17,this.rootEffectScheduler.flush());let e=!1;if(this.dirtyFlags&7){let i=!!(this.dirtyFlags&1);this.dirtyFlags&=-8,this.dirtyFlags|=8;for(let{_lView:r}of this.allViews){if(!i&&!rl(r))continue;let o=i&&!this.zonelessEnabled?0:1;TE(r,o),e=!0}if(this.dirtyFlags&=-5,this.syncDirtyFlagsWithViews(),this.dirtyFlags&23)return}e||(this._rendererFactory?.begin?.(),this._rendererFactory?.end?.()),this.dirtyFlags&8&&(this.dirtyFlags&=-9,this.afterRenderManager.execute()),this.syncDirtyFlagsWithViews()}syncDirtyFlagsWithViews(){if(this.allViews.some(({_lView:e})=>rl(e))){this.dirtyFlags|=2;return}else this.dirtyFlags&=-8}attachView(e){let i=e;this._views.push(i),i.attachToAppRef(this)}detachView(e){let i=e;cl(this._views,i),i.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView);try{this.tick()}catch(r){this.internalErrorHandler(r)}this.components.push(e),this._injector.get(Gu,[]).forEach(r=>r(e))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(e=>e()),this._views.slice().forEach(e=>e.destroy())}finally{this._destroyed=!0,this._views=[],this._destroyListeners=[]}}onDestroy(e){return this._destroyListeners.push(e),()=>cl(this._destroyListeners,e)}destroy(){if(this._destroyed)throw new w(406,!1);let e=this._injector;e.destroy&&!e.destroyed&&e.destroy()}get viewCount(){return this._views.length}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function cl(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function oe(t,n,e,i){let r=ie(),o=gr();if(En(r,o,n)){let s=Qe(),a=sl();JO(a,r,t,n,e,i)}return oe}var jg=class{destroy(n){}updateValue(n,e){}swap(n,e){let i=Math.min(n,e),r=Math.max(n,e),o=this.detach(r);if(r-i>1){let s=this.detach(i);this.attach(i,o),this.attach(r,s)}else this.attach(i,o)}move(n,e){this.attach(e,this.detach(n))}};function sg(t,n,e,i,r){return t===e&&Object.is(n,i)?1:Object.is(r(t,n),r(e,i))?-1:0}function TF(t,n,e,i){let r,o,s=0,a=t.length-1,l=void 0;if(Array.isArray(n)){K(i);let c=n.length-1;for(K(null);s<=a&&s<=c;){let d=t.at(s),h=n[s],f=sg(s,d,s,h,e);if(f!==0){f<0&&t.updateValue(s,h),s++;continue}let p=t.at(a),m=n[c],b=sg(a,p,c,m,e);if(b!==0){b<0&&t.updateValue(a,m),a--,c--;continue}let C=e(s,d),M=e(a,p),Y=e(s,h);if(Object.is(Y,M)){let we=e(c,m);Object.is(we,C)?(t.swap(s,a),t.updateValue(a,m),c--,a--):t.move(a,s),t.updateValue(s,h),s++;continue}if(r??=new bu,o??=uD(t,s,a,e),Vg(t,r,s,Y))t.updateValue(s,h),s++,a++;else if(o.has(Y))r.set(C,t.detach(s)),a--;else{let we=t.create(s,n[s]);t.attach(s,we),s++,a++}}for(;s<=c;)dD(t,r,e,s,n[s]),s++}else if(n!=null){K(i);let c=n[Symbol.iterator]();K(null);let d=c.next();for(;!d.done&&s<=a;){let h=t.at(s),f=d.value,p=sg(s,h,s,f,e);if(p!==0)p<0&&t.updateValue(s,f),s++,d=c.next();else{r??=new bu,o??=uD(t,s,a,e);let m=e(s,f);if(Vg(t,r,s,m))t.updateValue(s,f),s++,a++,d=c.next();else if(!o.has(m))t.attach(s,t.create(s,f)),s++,a++,d=c.next();else{let b=e(s,h);r.set(b,t.detach(s)),a--}}}for(;!d.done;)dD(t,r,e,t.length,d.value),d=c.next()}for(;s<=a;)t.destroy(t.detach(a--));r?.forEach(c=>{t.destroy(c)})}function Vg(t,n,e,i){return n!==void 0&&n.has(i)?(t.attach(e,n.get(i)),n.delete(i),!0):!1}function dD(t,n,e,i,r){if(Vg(t,n,i,e(i,r)))t.updateValue(i,r);else{let o=t.create(i,r);t.attach(i,o)}}function uD(t,n,e,i){let r=new Set;for(let o=n;o<=e;o++)r.add(i(o,t.at(o)));return r}var bu=class{kvMap=new Map;_vMap=void 0;has(n){return this.kvMap.has(n)}delete(n){if(!this.has(n))return!1;let e=this.kvMap.get(n);return this._vMap!==void 0&&this._vMap.has(e)?(this.kvMap.set(n,this._vMap.get(e)),this._vMap.delete(e)):this.kvMap.delete(n),!0}get(n){return this.kvMap.get(n)}set(n,e){if(this.kvMap.has(n)){let i=this.kvMap.get(n);this._vMap===void 0&&(this._vMap=new Map);let r=this._vMap;for(;r.has(i);)i=r.get(i);r.set(i,e)}else this.kvMap.set(n,e)}forEach(n){for(let[e,i]of this.kvMap)if(n(i,e),this._vMap!==void 0){let r=this._vMap;for(;r.has(i);)i=r.get(i),n(i,e)}}};function pe(t,n,e,i,r,o,s,a){Cn("NgControlFlow");let l=ie(),c=Qe(),d=Dn(c.consts,o);return gl(l,c,t,n,e,i,r,d,256,s,a),M_}function M_(t,n,e,i,r,o,s,a){Cn("NgControlFlow");let l=ie(),c=Qe(),d=Dn(c.consts,o);return gl(l,c,t,n,e,i,r,d,512,s,a),M_}function me(t,n){Cn("NgControlFlow");let e=ie(),i=gr(),r=e[i]!==Qt?e[i]:-1,o=r!==-1?wu(e,et+r):void 0,s=0;if(En(e,i,t)){let a=K(null);try{if(o!==void 0&&OE(o,s),t!==-1){let l=et+t,c=wu(e,l),d=$g(e[X],l),h=FE(c,d,e),f=bl(e,d,n,{dehydratedView:h});wl(c,f,s,ks(d,h))}}finally{K(a)}}else if(o!==void 0){let a=NE(o,s);a!==void 0&&(a[ct]=n)}}var Hg=class{lContainer;$implicit;$index;constructor(n,e,i){this.lContainer=n,this.$implicit=e,this.$index=i}get $count(){return this.lContainer.length-ot}};function Co(t,n){return n}var Ug=class{hasEmptyBlock;trackByFn;liveCollection;constructor(n,e,i){this.hasEmptyBlock=n,this.trackByFn=e,this.liveCollection=i}};function xo(t,n,e,i,r,o,s,a,l,c,d,h,f){Cn("NgControlFlow");let p=ie(),m=Qe(),b=l!==void 0,C=ie(),M=a?s.bind(C[qt][ct]):s,Y=new Ug(b,M);C[et+t]=Y,gl(p,m,t+1,n,e,i,r,Dn(m.consts,o),256),b&&gl(p,m,t+2,l,c,d,h,Dn(m.consts,f),512)}var zg=class extends jg{lContainer;hostLView;templateTNode;operationsCounter=void 0;needsIndexUpdate=!1;constructor(n,e,i){super(),this.lContainer=n,this.hostLView=e,this.templateTNode=i}get length(){return this.lContainer.length-ot}at(n){return this.getLView(n)[ct].$implicit}attach(n,e){let i=e[ao];this.needsIndexUpdate||=n!==this.length,wl(this.lContainer,e,n,ks(this.templateTNode,i)),MF(this.lContainer,n)}detach(n){return this.needsIndexUpdate||=n!==this.length-1,AF(this.lContainer,n),kF(this.lContainer,n)}create(n,e){let i=pu(this.lContainer,this.templateTNode.tView.ssrId);return bl(this.hostLView,this.templateTNode,new Hg(this.lContainer,e,n),{dehydratedView:i})}destroy(n){Nu(n[X],n)}updateValue(n,e){this.getLView(n)[ct].$implicit=e}reset(){this.needsIndexUpdate=!1}updateIndexes(){if(this.needsIndexUpdate)for(let n=0;n<this.length;n++)this.getLView(n)[ct].$index=n}getLView(n){return RF(this.lContainer,n)}};function So(t){let n=K(null),e=li();try{let i=ie(),r=i[X],o=i[e],s=e+1,a=wu(i,s);if(o.liveCollection===void 0){let c=$g(r,s);o.liveCollection=new zg(a,i,c)}else o.liveCollection.reset();let l=o.liveCollection;if(TF(l,t,o.trackByFn,n),l.updateIndexes(),o.hasEmptyBlock){let c=gr(),d=l.length===0;if(En(i,c,d)){let h=e+2,f=wu(i,h);if(d){let p=$g(r,h),m=FE(f,p,i),b=bl(i,p,void 0,{dehydratedView:m});wl(f,b,0,ks(p,m))}else r.firstUpdatePass&&EP(f),OE(f,0)}}}finally{K(n)}}function wu(t,n){return t[n]}function MF(t,n){if(t.length<=ot)return;let e=ot+n,i=t[e],r=i?i[pr]:void 0;if(i&&r&&r.detachedLeaveAnimationFns&&r.detachedLeaveAnimationFns.length>0){let o=i[Ri];kO(o,r),yo.delete(i[Ni]),r.detachedLeaveAnimationFns=void 0}}function AF(t,n){if(t.length<=ot)return;let e=ot+n,i=t[e],r=i?i[pr]:void 0;r&&r.leave&&r.leave.size>0&&(r.detachedLeaveAnimationFns=[])}function kF(t,n){return fl(t,n)}function RF(t,n){return NE(t,n)}function $g(t,n){return Hd(t,n)}function De(t,n,e){let i=ie(),r=gr();if(En(i,r,n)){let o=Qe(),s=sl();vE(s,i,t,n,i[ze],e)}return De}function Gg(t,n,e,i,r){m_(n,t,e,r?"class":"style",i)}function D(t,n,e,i){let r=ie(),o=r[X],s=t+et,a=o.firstCreatePass?HE(s,r,2,n,bE,jm(),e,i):o.data[s];if(Pi(a)){let l=r[si].tracingService;if(l&&l.componentCreate){let c=o.data[a.directiveStart+a.componentOffset];return l.componentCreate(WE(c),()=>(hD(t,n,r,a,i),D))}}return hD(t,n,r,a,i),D}function hD(t,n,e,i,r){if(wE(i,e,t,n,fC),il(i)){let o=e[X];p_(o,e,i),qD(o,i,e)}r!=null&&Pu(e,i)}function x(){let t=Qe(),n=Dt(),e=DE(n);return t.firstCreatePass&&UE(t,e),Hm(e)&&Um(),Bm(),e.classesWithoutHost!=null&&wN(e)&&Gg(t,e,ie(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&DN(e)&&Gg(t,e,ie(),e.stylesWithoutHost,!1),x}function Se(t,n,e,i){return D(t,n,e,i),x(),Se}function jt(t,n,e,i){let r=ie(),o=r[X],s=t+et,a=o.firstCreatePass?LP(s,o,2,n,e,i):o.data[s];return wE(a,r,t,n,fC),i!=null&&Pu(r,a),jt}function on(){let t=Dt(),n=DE(t);return Hm(n)&&Um(),Bm(),on}function Kt(t,n,e,i){return jt(t,n,e,i),on(),Kt}var fC=(t,n,e,i,r)=>(Kd(!0),eE(n[ze],i,M0()));function Rt(){return ie()}function pn(t,n,e){let i=ie(),r=gr();if(En(i,r,n)){let o=Qe(),s=sl();yE(s,i,t,n,i[ze],e)}return pn}var Cl="en-US";var NF=Cl;function pC(t){typeof t=="string"&&(NF=t.toLowerCase().replace(/_/g,"-"))}function q(t,n,e){let i=ie(),r=Qe(),o=Dt();return mC(r,i,i[ze],o,t,n,e),q}function Wu(t,n,e){let i=ie(),r=Qe(),o=Dt();return(o.type&3||e)&&$E(o,r,i,e,i[ze],t,n,au(o,i,n)),Wu}function mC(t,n,e,i,r,o,s){let a=!0,l=null;if((i.type&3||s)&&(l??=au(i,n,o),$E(i,t,n,s,e,r,o,l)&&(a=!1)),a){let c=i.outputs?.[r],d=i.hostDirectiveOutputs?.[r];if(d&&d.length)for(let h=0;h<d.length;h+=2){let f=d[h],p=d[h+1];l??=au(i,n,o),rD(i,n,f,p,r,l)}if(c&&c.length)for(let h of c)l??=au(i,n,o),rD(i,n,h,r,r,l)}}function se(t=1){return T0(t)}function OF(t,n){let e=null,i=gO(t);for(let r=0;r<n.length;r++){let o=n[r];if(o==="*"){e=r;continue}if(i===null?sE(t,o,!0):yO(i,o))return r}return e}function Re(t){let n=ie()[qt][Wt];if(!n.projection){let e=t?t.length:1,i=n.projection=n0(e,null),r=i.slice(),o=n.child;for(;o!==null;){if(o.type!==128){let s=t?OF(o,t):0;s!==null&&(r[s]?r[s].projectionNext=o:i[s]=o,r[s]=o)}o=o.next}}}function U(t,n=0,e,i,r,o){let s=ie(),a=Qe(),l=i?t+1:null;l!==null&&gl(s,a,l,i,r,o,null,e);let c=Ps(a,et+t,16,null,e||null);c.projection===null&&(c.projection=n),Gm();let h=!s[ao]||Vm();s[qt][Wt].projection[c.projection]===null&&l!==null?PF(s,a,l):h&&!Iu(c)&&UO(a,s,c)}function PF(t,n,e){let i=et+e,r=n.data[i],o=t[i],s=pu(o,r.tView.ssrId),a=bl(t,r,void 0,{dehydratedView:s});wl(o,a,0,ks(r,s))}function Ct(t,n,e,i){return XE(t,n,e,i),Ct}function it(t,n,e){return ZE(t,n,e),it}function z(t){let n=ie(),e=Qe(),i=Wd();ol(i+1);let r=b_(e,i);if(t.dirty&&d0(n)===((r.metadata.flags&2)===2)){if(r.matches===null)t.reset([]);else{let o=eC(n,i);t.reset(o,PD),t.notifyOnChanges()}return!0}return!1}function $(){return y_(ie(),Wd())}function qu(t,n,e,i,r){return nC(n,XE(t,e,i,r)),qu}function Yu(t,n,e,i){return nC(t,ZE(n,e,i)),Yu}function Qu(t=1){ol(Wd()+t)}function pi(t){let n=v0();return km(n,et+t)}function tu(t,n){return t<<17|n<<2}function bo(t){return t>>17&32767}function FF(t){return(t&2)==2}function LF(t,n){return t&131071|n<<17}function Wg(t){return t|2}function Rs(t){return(t&131068)>>2}function ag(t,n){return t&-131069|n<<2}function BF(t){return(t&1)===1}function qg(t){return t|1}function jF(t,n,e,i,r,o){let s=o?n.classBindings:n.styleBindings,a=bo(s),l=Rs(s);t[i]=e;let c=!1,d;if(Array.isArray(e)){let h=e;d=h[1],(d===null||vs(h,d)>0)&&(c=!0)}else d=e;if(r)if(l!==0){let f=bo(t[a+1]);t[i+1]=tu(f,a),f!==0&&(t[f+1]=ag(t[f+1],i)),t[a+1]=LF(t[a+1],i)}else t[i+1]=tu(a,0),a!==0&&(t[a+1]=ag(t[a+1],i)),a=i;else t[i+1]=tu(l,0),a===0?a=i:t[l+1]=ag(t[l+1],i),l=i;c&&(t[i+1]=Wg(t[i+1])),fD(t,d,i,!0),fD(t,d,i,!1),VF(n,d,t,i,o),s=tu(a,l),o?n.classBindings=s:n.styleBindings=s}function VF(t,n,e,i,r){let o=r?t.residualClasses:t.residualStyles;o!=null&&typeof n=="string"&&vs(o,n)>=0&&(e[i+1]=qg(e[i+1]))}function fD(t,n,e,i){let r=t[e+1],o=n===null,s=i?bo(r):Rs(r),a=!1;for(;s!==0&&(a===!1||o);){let l=t[s],c=t[s+1];HF(l,n)&&(a=!0,t[s+1]=i?qg(c):Wg(c)),s=i?bo(c):Rs(c)}a&&(t[e+1]=i?Wg(r):qg(r))}function HF(t,n){return t===null||n==null||(Array.isArray(t)?t[1]:t)===n?!0:Array.isArray(t)&&typeof n=="string"?vs(t,n)>=0:!1}var jn={textEnd:0,key:0,keyEnd:0,value:0,valueEnd:0};function UF(t){return t.substring(jn.key,jn.keyEnd)}function zF(t){return $F(t),gC(t,_C(t,0,jn.textEnd))}function gC(t,n){let e=jn.textEnd;return e===n?-1:(n=jn.keyEnd=GF(t,jn.key=n,e),_C(t,n,e))}function $F(t){jn.key=0,jn.keyEnd=0,jn.value=0,jn.valueEnd=0,jn.textEnd=t.length}function _C(t,n,e){for(;n<e&&t.charCodeAt(n)<=32;)n++;return n}function GF(t,n,e){for(;n<e&&t.charCodeAt(n)>32;)n++;return n}function ji(t,n,e){return vC(t,n,e,!1),ji}function H(t,n){return vC(t,n,null,!0),H}function Un(t){qF(JF,WF,t,!0)}function WF(t,n){for(let e=zF(n);e>=0;e=gC(n,e))Bd(t,UF(n),!0)}function vC(t,n,e,i){let r=ie(),o=Qe(),s=$d(2);if(o.firstUpdatePass&&bC(o,t,s,i),n!==Qt&&En(r,s,n)){let a=o.data[li()];wC(o,a,r,r[ze],t,r[s+1]=t1(n,e),i,s)}}function qF(t,n,e,i){let r=Qe(),o=$d(2);r.firstUpdatePass&&bC(r,null,o,i);let s=ie();if(e!==Qt&&En(s,o,e)){let a=r.data[li()];if(DC(a,i)&&!yC(r,o)){let l=i?a.classesWithoutHost:a.stylesWithoutHost;l!==null&&(e=Rd(l,e||"")),Gg(r,a,s,e,i)}else e1(r,a,s,s[ze],s[o+1],s[o+1]=XF(t,n,e),i,o)}}function yC(t,n){return n>=t.expandoStartIndex}function bC(t,n,e,i){let r=t.data;if(r[e+1]===null){let o=r[li()],s=yC(t,e);DC(o,i)&&n===null&&!s&&(n=!1),n=YF(r,o,n,i),jF(r,o,n,e,s,i)}}function YF(t,n,e,i){let r=C0(t),o=i?n.residualClasses:n.residualStyles;if(r===null)(i?n.classBindings:n.styleBindings)===0&&(e=lg(null,t,n,e,i),e=_l(e,n.attrs,i),o=null);else{let s=n.directiveStylingLast;if(s===-1||t[s]!==r)if(e=lg(r,t,n,e,i),o===null){let l=QF(t,n,i);l!==void 0&&Array.isArray(l)&&(l=lg(null,t,n,l[1],i),l=_l(l,n.attrs,i),KF(t,n,i,l))}else o=ZF(t,n,i)}return o!==void 0&&(i?n.residualClasses=o:n.residualStyles=o),e}function QF(t,n,e){let i=e?n.classBindings:n.styleBindings;if(Rs(i)!==0)return t[bo(i)]}function KF(t,n,e,i){let r=e?n.classBindings:n.styleBindings;t[bo(r)]=i}function ZF(t,n,e){let i,r=n.directiveEnd;for(let o=1+n.directiveStylingLast;o<r;o++){let s=t[o].hostAttrs;i=_l(i,s,e)}return _l(i,n.attrs,e)}function lg(t,n,e,i,r){let o=null,s=e.directiveEnd,a=e.directiveStylingLast;for(a===-1?a=e.directiveStart:a++;a<s&&(o=n[a],i=_l(i,o.hostAttrs,r),o!==t);)a++;return t!==null&&(e.directiveStylingLast=a),i}function _l(t,n,e){let i=e?1:2,r=-1;if(n!==null)for(let o=0;o<n.length;o++){let s=n[o];typeof s=="number"?r=s:r===i&&(Array.isArray(t)||(t=t===void 0?[]:["",t]),Bd(t,s,e?!0:n[++o]))}return t===void 0?null:t}function XF(t,n,e){if(e==null||e==="")return Ft;let i=[],r=fi(e);if(Array.isArray(r))for(let o=0;o<r.length;o++)t(i,r[o],!0);else if(r instanceof Set)for(let o of r)t(i,o,!0);else if(typeof r=="object")for(let o in r)r.hasOwnProperty(o)&&t(i,o,r[o]);else typeof r=="string"&&n(i,r);return i}function JF(t,n,e){let i=String(n);i!==""&&!i.includes(" ")&&Bd(t,i,e)}function e1(t,n,e,i,r,o,s,a){r===Qt&&(r=Ft);let l=0,c=0,d=0<r.length?r[0]:null,h=0<o.length?o[0]:null;for(;d!==null||h!==null;){let f=l<r.length?r[l+1]:void 0,p=c<o.length?o[c+1]:void 0,m=null,b;d===h?(l+=2,c+=2,f!==p&&(m=h,b=p)):h===null||d!==null&&d<h?(l+=2,m=d):(c+=2,m=h,b=p),m!==null&&wC(t,n,e,i,m,b,s,a),d=l<r.length?r[l]:null,h=c<o.length?o[c]:null}}function wC(t,n,e,i,r,o,s,a){if(!(n.type&3))return;let l=t.data,c=l[a+1],d=BF(c)?pD(l,n,e,r,Rs(c),s):void 0;if(!Du(d)){Du(o)||FF(c)&&(o=pD(l,null,e,r,a,s));let h=Am(li(),e);$O(i,s,h,r,o)}}function pD(t,n,e,i,r,o){let s=n===null,a;for(;r>0;){let l=t[r],c=Array.isArray(l),d=c?l[1]:l,h=d===null,f=e[r+1];f===Qt&&(f=h?Ft:void 0);let p=h?jd(f,i):d===i?f:void 0;if(c&&!Du(p)&&(p=jd(l,i)),Du(p)&&(a=p,s))return a;let m=t[r+1];r=s?bo(m):Rs(m)}if(n!==null){let l=o?n.residualClasses:n.residualStyles;l!=null&&(a=jd(l,i))}return a}function Du(t){return t!==void 0}function t1(t,n){return t==null||t===""||(typeof n=="string"?t=t+n:typeof t=="object"&&(t=Za(fi(t)))),t}function DC(t,n){return(t.flags&(n?8:16))!==0}function ye(t,n=""){let e=ie(),i=Qe(),r=t+et,o=i.firstCreatePass?Ps(i,r,1,n,null):i.data[r],s=n1(i,e,o,n);e[r]=s,Qd()&&h_(i,e,s,o),Es(o,!1)}var n1=(t,n,e,i)=>(Kd(!0),aO(n[ze],i));function i1(t,n,e,i=""){return En(t,gr(),e)?n+Ja(e)+i:Qt}function r1(t,n,e,i,r,o=""){let s=y0(),a=jP(t,s,e,r);return $d(2),a?n+Ja(e)+i+Ja(r)+o:Qt}function ut(t){return Vi("",t),ut}function Vi(t,n,e){let i=ie(),r=i1(i,t,n,e);return r!==Qt&&EC(i,li(),r),Vi}function Ku(t,n,e,i,r){let o=ie(),s=r1(o,t,n,e,i,r);return s!==Qt&&EC(o,li(),s),Ku}function EC(t,n,e){let i=Am(n,t);lO(t[ze],i,e)}function Io(t,n,e){x_(n)&&(n=n());let i=ie(),r=gr();if(En(i,r,n)){let o=Qe(),s=sl();vE(s,i,t,n,i[ze],e)}return Io}function Bs(t,n){let e=x_(t);return e&&t.set(n),e}function To(t,n){let e=ie(),i=Qe(),r=Dt();return mC(i,e,e[ze],r,t,n),To}function mD(t,n,e){let i=Qe();i.firstCreatePass&&CC(n,i.data,i.blueprint,Fn(t),e)}function CC(t,n,e,i,r){if(t=bt(t),Array.isArray(t))for(let o=0;o<t.length;o++)CC(t[o],n,e,i,r);else{let o=Qe(),s=ie(),a=Dt(),l=ro(t)?t:bt(t.provide),c=Em(t),d=a.providerIndexes&1048575,h=a.directiveStart,f=a.providerIndexes>>20;if(ro(t)||!t.multi){let p=new vo(c,r,Z,null),m=dg(l,n,r?d:d+f,h);m===-1?(hg(hu(a,s),o,l),cg(o,t,n.length),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(p),s.push(p)):(e[m]=p,s[m]=p)}else{let p=dg(l,n,d+f,h),m=dg(l,n,d,d+f),b=p>=0&&e[p],C=m>=0&&e[m];if(r&&!C||!r&&!b){hg(hu(a,s),o,l);let M=a1(r?s1:o1,e.length,r,i,c,t);!r&&C&&(e[m].providerFactory=M),cg(o,t,n.length,0),n.push(l),a.directiveStart++,a.directiveEnd++,r&&(a.providerIndexes+=1048576),e.push(M),s.push(M)}else{let M=xC(e[r?m:p],c,!r&&i);cg(o,t,p>-1?p:m,M)}!r&&i&&C&&e[m].componentProviders++}}}function cg(t,n,e,i){let r=ro(n),o=a0(n);if(r||o){let l=(o?bt(n.useClass):n).prototype.ngOnDestroy;if(l){let c=t.destroyHooks||(t.destroyHooks=[]);if(!r&&n.multi){let d=c.indexOf(e);d===-1?c.push(e,[i,l]):c[d+1].push(i,l)}else c.push(e,l)}}}function xC(t,n,e){return e&&t.componentProviders++,t.multi.push(n)-1}function dg(t,n,e,i){for(let r=e;r<i;r++)if(n[r]===t)return r;return-1}function o1(t,n,e,i,r){return Yg(this.multi,[])}function s1(t,n,e,i,r){let o=this.multi,s;if(this.providerFactory){let a=this.providerFactory.componentProviders,l=dl(i,i[X],this.providerFactory.index,r);s=l.slice(0,a),Yg(o,s);for(let c=a;c<l.length;c++)s.push(l[c])}else s=[],Yg(o,s);return s}function Yg(t,n){for(let e=0;e<t.length;e++){let i=t[e];n.push(i())}return n}function a1(t,n,e,i,r,o){let s=new vo(t,e,Z,null);return s.multi=[],s.index=n,s.componentProviders=0,xC(s,r,i&&!e),s}function Ie(t,n){return e=>{e.providersResolver=(i,r)=>mD(i,r?r(t):t,!1),n&&(e.viewProvidersResolver=(i,r)=>mD(i,r?r(n):n,!0))}}function A_(t,n){let e=qm()+t,i=ie();return i[e]===Qt?zE(i,e,n()):BP(i,e)}function l1(t,n){let e=t[n];return e===Qt?void 0:e}function c1(t,n,e,i,r,o){let s=n+e;return En(t,s,r)?zE(t,s+1,o?i.call(o,r):i(r)):l1(t,s+1)}function mt(t,n){let e=Qe(),i,r=t+et;e.firstCreatePass?(i=d1(n,e.pipeRegistry),e.data[r]=i,i.onDestroy&&(e.destroyHooks??=[]).push(r,i.onDestroy)):i=e.data[r];let o=i.factory||(i.factory=dr(i.type,!0)),s,a=$t(Z);try{let l=uu(!1),c=o();return uu(l),Rm(e,ie(),r,c),c}finally{$t(a)}}function d1(t,n){if(n)for(let e=n.length-1;e>=0;e--){let i=n[e];if(t===i.name)return i}}function gt(t,n,e){let i=t+et,r=ie(),o=km(r,i);return u1(r,i)?c1(r,qm(),n,o.transform,e,o):o.transform(e)}function u1(t,n){return t[X].data[n].pure}function Zu(t,n){return Fu(t,n)}var nu=null;function SC(t){nu!==null&&(t.defaultEncapsulation!==nu.defaultEncapsulation||t.preserveWhitespaces!==nu.preserveWhitespaces)||(nu=t)}var Eu=class{ngModuleFactory;componentFactories;constructor(n,e){this.ngModuleFactory=n,this.componentFactories=e}},k_=(()=>{class t{compileModuleSync(e){return new ml(e)}compileModuleAsync(e){return Promise.resolve(this.compileModuleSync(e))}compileModuleAndAllComponentsSync(e){let i=this.compileModuleSync(e),r=mm(e),o=rE(r.declarations).reduce((s,a)=>{let l=oi(a);return l&&s.push(new br(l)),s},[]);return new Eu(i,o)}compileModuleAndAllComponentsAsync(e){return Promise.resolve(this.compileModuleAndAllComponentsSync(e))}clearCache(){}clearCacheFor(e){}getModuleId(e){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),IC=new g("");var TC=(()=>{class t{applicationErrorHandler=u(fn);appRef=u(Bt);taskService=u(ci);ngZone=u(T);zonelessEnabled=u(xs);tracing=u(Hn,{optional:!0});zoneIsDefined=typeof Zone<"u"&&!!Zone.root.run;schedulerTickApplyArgs=[{data:{__scheduler_tick__:!0}}];subscriptions=new ce;angularZoneId=this.zoneIsDefined?this.ngZone._inner?.get(Qa):null;scheduleInRootZone=!this.zonelessEnabled&&this.zoneIsDefined&&(u(Zd,{optional:!0})??!1);cancelScheduledCallback=null;useMicrotaskScheduler=!1;runningTick=!1;pendingRenderTaskId=null;constructor(){this.subscriptions.add(this.appRef.afterTick.subscribe(()=>{let e=this.taskService.add();if(!this.runningTick&&(this.cleanup(),!this.zonelessEnabled||this.appRef.includeAllTestViews)){this.taskService.remove(e);return}this.switchToMicrotaskScheduler(),this.taskService.remove(e)})),this.subscriptions.add(this.ngZone.onUnstable.subscribe(()=>{this.runningTick||this.cleanup()}))}switchToMicrotaskScheduler(){this.ngZone.runOutsideAngular(()=>{let e=this.taskService.add();this.useMicrotaskScheduler=!0,queueMicrotask(()=>{this.useMicrotaskScheduler=!1,this.taskService.remove(e)})})}notify(e){if(!this.zonelessEnabled&&e===5)return;switch(e){case 0:{this.appRef.dirtyFlags|=2;break}case 3:case 2:case 4:case 5:case 1:{this.appRef.dirtyFlags|=4;break}case 6:{this.appRef.dirtyFlags|=2;break}case 12:{this.appRef.dirtyFlags|=16;break}case 13:{this.appRef.dirtyFlags|=2;break}case 11:break;default:this.appRef.dirtyFlags|=8}if(this.appRef.tracingSnapshot=this.tracing?.snapshot(this.appRef.tracingSnapshot)??null,!this.shouldScheduleTick())return;let i=this.useMicrotaskScheduler?R0:Xm;this.pendingRenderTaskId=this.taskService.add(),this.scheduleInRootZone?this.cancelScheduledCallback=Zone.root.run(()=>i(()=>this.tick())):this.cancelScheduledCallback=this.ngZone.runOutsideAngular(()=>i(()=>this.tick()))}shouldScheduleTick(){return!(this.appRef.destroyed||this.pendingRenderTaskId!==null||this.runningTick||this.appRef._runningTick||!this.zonelessEnabled&&this.zoneIsDefined&&Zone.current.get(Qa+this.angularZoneId))}tick(){if(this.runningTick||this.appRef.destroyed)return;if(this.appRef.dirtyFlags===0){this.cleanup();return}!this.zonelessEnabled&&this.appRef.dirtyFlags&7&&(this.appRef.dirtyFlags|=1);let e=this.taskService.add();try{this.ngZone.run(()=>{this.runningTick=!0,this.appRef._tick()},void 0,this.schedulerTickApplyArgs)}catch(i){this.applicationErrorHandler(i)}finally{this.taskService.remove(e),this.cleanup()}}ngOnDestroy(){this.subscriptions.unsubscribe(),this.cleanup()}cleanup(){if(this.runningTick=!1,this.cancelScheduledCallback?.(),this.cancelScheduledCallback=null,this.pendingRenderTaskId!==null){let e=this.pendingRenderTaskId;this.pendingRenderTaskId=null,this.taskService.remove(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function MC(){return[{provide:Rn,useExisting:TC},{provide:T,useClass:Ka},{provide:xs,useValue:!0}]}function h1(){return typeof $localize<"u"&&$localize.locale||Cl}var Xu=new g("",{factory:()=>u(Xu,{optional:!0,skipSelf:!0})||h1()});function rt(t){return $w(t)}function Vt(t,n){return Fa(t,n?.equal)}var FC=Symbol("InputSignalNode#UNSET"),k1=G(_({},La),{transformFn:void 0,applyValueToInputSignal(t,n){ss(t,n)}});function LC(t,n){let e=Object.create(k1);e.value=t,e.transformFn=n?.transform;function i(){if(qr(e),e.value===FC){let r=null;throw new w(-950,r)}return e.value}return i[vt]=e,i}var Hi=class{attributeName;constructor(n){this.attributeName=n}__NG_ELEMENT_ID__=()=>Cu(this.attributeName);toString(){return`HostAttributeToken ${this.attributeName}`}},BC=(()=>{let t=new g("");return t.__NG_ELEMENT_ID__=n=>{let e=Dt();if(e===null)throw new w(-204,!1);if(e.type&2)return e.value;if(n&8)return null;throw new w(-204,!1)},t})();function AC(t,n){return LC(t,n)}function R1(t){return LC(FC,t)}var jC=(AC.required=R1,AC);function kC(t,n){return w_(n)}function N1(t,n){return D_(n)}var Sl=(kC.required=N1,kC);function RC(t,n){return w_(n)}function O1(t,n){return D_(n)}var VC=(RC.required=O1,RC);function P1(t,n,e){let i=new ml(e);return Promise.resolve(i)}function NC(t){for(let n=t.length-1;n>=0;n--)if(t[n]!==void 0)return t[n]}var F1=(()=>{class t{zone=u(T);changeDetectionScheduler=u(Rn);applicationRef=u(Bt);applicationErrorHandler=u(fn);_onMicrotaskEmptySubscription;initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.changeDetectionScheduler.runningTick||this.zone.run(()=>{try{this.applicationRef.dirtyFlags|=1,this.applicationRef._tick()}catch(e){this.applicationErrorHandler(e)}})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),L1=new g("",{factory:()=>!1});function B1({ngZoneFactory:t,scheduleInRootZone:n}){return t??=()=>new T(G(_({},UC()),{scheduleInRootZone:n})),[{provide:xs,useValue:!1},{provide:T,useFactory:t},{provide:ki,multi:!0,useFactory:()=>{let e=u(F1,{optional:!0});return()=>e.initialize()}},{provide:ki,multi:!0,useFactory:()=>{let e=u(j1);return()=>{e.initialize()}}},{provide:Zd,useValue:n??Zm}]}function HC(t){let n=t?.scheduleInRootZone,e=B1({ngZoneFactory:()=>{let i=UC(t);return i.scheduleInRootZone=n,i.shouldCoalesceEventChangeDetection&&Cn("NgZone_CoalesceEvent"),new T(i)},scheduleInRootZone:n});return Gt([{provide:L1,useValue:!0},e])}function UC(t){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:t?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:t?.runCoalescing??!1}}var j1=(()=>{class t{subscription=new ce;initialized=!1;zone=u(T);pendingTasks=u(ci);initialize(){if(this.initialized)return;this.initialized=!0;let e=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(e=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{T.assertNotInAngularZone(),queueMicrotask(()=>{e!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(e),e=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{T.assertInAngularZone(),e??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Ju=new g(""),V1=new g("");function xl(t){return!t.moduleRef}function H1(t){let n=xl(t)?t.r3Injector:t.moduleRef.injector,e=n.get(T);return e.run(()=>{xl(t)?t.r3Injector.resolveInjectorInitializers():t.moduleRef.resolveInjectorInitializers();let i=n.get(fn),r;if(e.runOutsideAngular(()=>{r=e.onError.subscribe({next:i})}),xl(t)){let o=()=>n.destroy(),s=t.platformInjector.get(Ju);s.add(o),n.onDestroy(()=>{r.unsubscribe(),s.delete(o)})}else{let o=()=>t.moduleRef.destroy(),s=t.platformInjector.get(Ju);s.add(o),t.moduleRef.onDestroy(()=>{cl(t.allPlatformModules,t.moduleRef),r.unsubscribe(),s.delete(o)})}return z1(i,e,()=>{let o=n.get(ci),s=o.add(),a=n.get(I_);return a.runInitializers(),a.donePromise.then(()=>{let l=n.get(Xu,Cl);if(pC(l||Cl),!n.get(V1,!0))return xl(t)?n.get(Bt):(t.allPlatformModules.push(t.moduleRef),t.moduleRef);if(xl(t)){let d=n.get(Bt);return t.rootComponent!==void 0&&d.bootstrap(t.rootComponent),d}else return zC?.(t.moduleRef,t.allPlatformModules),t.moduleRef}).finally(()=>{o.remove(s)})})})}var zC;function OC(){zC=U1}function U1(t,n){let e=t.injector.get(Bt);if(t._bootstrapComponents.length>0)t._bootstrapComponents.forEach(i=>e.bootstrap(i));else if(t.instance.ngDoBootstrap)t.instance.ngDoBootstrap(e);else throw new w(-403,!1);n.push(t)}function z1(t,n,e){try{let i=e();return Bi(i)?i.catch(r=>{throw n.runOutsideAngular(()=>t(r)),r}):i}catch(i){throw n.runOutsideAngular(()=>t(i)),i}}var $C=(()=>{class t{_injector;_modules=[];_destroyListeners=[];_destroyed=!1;constructor(e){this._injector=e}bootstrapModuleFactory(e,i){let r=[MC(),...i?.applicationProviders??[],O0],o=rC(e.moduleType,this.injector,r);return OC(),H1({moduleRef:o,allPlatformModules:this._modules,platformInjector:this.injector})}bootstrapModule(e,i=[]){let r=T_({},i);return OC(),P1(this.injector,r,e).then(o=>this.bootstrapModuleFactory(o,r))}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new w(404,!1);this._modules.slice().forEach(i=>i.destroy()),this._destroyListeners.forEach(i=>i());let e=this._injector.get(Ju,null);e&&(e.forEach(i=>i()),e.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}static \u0275fac=function(i){return new(i||t)(I(B))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"platform"})}return t})(),P_=null;function $1(t){if(L_())throw new w(400,!1);uC(),P_=t;let n=t.get($C);return q1(t),n}function F_(t,n,e=[]){let i=`Platform: ${n}`,r=new g(i);return(o=[])=>{let s=L_();if(!s){let a=[...e,...o,{provide:r,useValue:!0}];s=t?.(a)??$1(G1(a,i))}return W1(r)}}function G1(t=[],n){return B.create({name:n,providers:[{provide:tl,useValue:"platform"},{provide:Ju,useValue:new Set([()=>P_=null])},...t]})}function W1(t){let n=L_();if(!n)throw new w(-401,!1);return n}function L_(){return P_?.get($C)??null}function q1(t){let n=t.get(xu,null);pt(t,()=>{n?.forEach(e=>e())})}function GC(){return!1}var Y1=1e4;var SX=Y1-1e3;var Ee=(()=>{class t{static __NG_ELEMENT_ID__=Q1}return t})();function Q1(t){return K1(Dt(),ie(),(t&16)===16)}function K1(t,n,e){if(Pi(t)&&!e){let i=wn(t.index,n);return new yr(i,i)}else if(t.type&175){let i=n[qt];return new yr(i,n)}return null}var WC=F_(null,"core",[]),qC=(()=>{class t{constructor(e){}static \u0275fac=function(i){return new(i||t)(I(Bt))};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();function ee(t){return typeof t=="boolean"?t:t!=null&&t!=="false"}function Ui(t,n=NaN){return!isNaN(parseFloat(t))&&!isNaN(Number(t))?Number(t):n}var R_=Symbol("NOT_SET"),YC=new Set,Z1=G(_({},La),{kind:"afterRenderEffectPhase",consumerIsAlwaysLive:!0,consumerAllowSignalWrites:!0,value:R_,cleanup:null,consumerMarkedDirty(){if(this.sequence.impl.executing){if(this.sequence.lastPhase===null||this.sequence.lastPhase<this.phase)return;this.sequence.erroredOrDestroyed=!0}this.sequence.scheduler.notify(7)},phaseFn(t){if(this.sequence.lastPhase=this.phase,!this.dirty)return this.signal;if(this.dirty=!1,this.value!==R_&&!rs(this))return this.signal;try{for(let r of this.cleanup??YC)r()}finally{this.cleanup?.clear()}let n=[];t!==void 0&&n.push(t),n.push(this.registerCleanupFn);let e=ir(this),i;try{i=this.userFn.apply(null,n)}finally{Yr(this,e)}return(this.value===R_||!this.equal(this.value,i))&&(this.value=i,this.version++),this.signal}}),N_=class extends ul{scheduler;lastPhase=null;nodes=[void 0,void 0,void 0,void 0];onDestroyFns=null;constructor(n,e,i,r,o,s=null){super(n,[void 0,void 0,void 0,void 0],i,!1,o.get(dt),s),this.scheduler=r;for(let a of c_){let l=e[a];if(l===void 0)continue;let c=Object.create(Z1);c.sequence=this,c.phase=a,c.userFn=l,c.dirty=!0,c.signal=()=>(qr(c),c.value),c.signal[vt]=c,c.registerCleanupFn=d=>(c.cleanup??=new Set).add(d),this.nodes[a]=c,this.hooks[a]=d=>c.phaseFn(d)}}afterRun(){super.afterRun(),this.lastPhase=null}destroy(){if(this.onDestroyFns!==null)for(let n of this.onDestroyFns)n();super.destroy();for(let n of this.nodes)if(n)try{for(let e of n.cleanup??YC)e()}finally{rr(n)}}};function QC(t,n){let e=n?.injector??u(B),i=e.get(Rn),r=e.get(Ru),o=e.get(Hn,null,{optional:!0});r.impl??=e.get(d_);let s=t;typeof s=="function"&&(s={mixedReadWrite:t});let a=e.get(Cs,null,{optional:!0}),l=new N_(r.impl,[s.earlyRead,s.write,s.mixedReadWrite,s.read],a?.view,i,e,o?.snapshot(null));return r.impl.register(l),l}function eh(t,n){let e=oi(t),i=n.elementInjector||ys();return new br(e).create(i,n.projectableNodes,n.hostElement,n.environmentInjector,n.directives,n.bindings)}function KC(t){let n=oi(t);if(!n)return null;let e=new br(n);return{get selector(){return e.selector},get type(){return e.componentType},get inputs(){return e.inputs},get outputs(){return e.outputs},get ngContentSelectors(){return e.ngContentSelectors},get isStandalone(){return n.standalone},get isSignal(){return n.signals}}}var ZC=null;function mn(){return ZC}function B_(t){ZC??=t}var Il=class{},zi=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>u(XC),providedIn:"platform"})}return t})(),j_=new g(""),XC=(()=>{class t extends zi{_location;_history;_doc=u(P);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return mn().getBaseHref(this._doc)}onPopState(e){let i=mn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",e,!1),()=>i.removeEventListener("popstate",e)}onHashChange(e){let i=mn().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",e,!1),()=>i.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,i,r){this._history.pushState(e,i,r)}replaceState(e,i,r){this._history.replaceState(e,i,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function th(t,n){return t?n?t.endsWith("/")?n.startsWith("/")?t+n.slice(1):t+n:n.startsWith("/")?t+n:`${t}/${n}`:t:n}function JC(t){let n=t.search(/#|\?|$/);return t[n-1]==="/"?t.slice(0,n-1)+t.slice(n):t}function zn(t){return t&&t[0]!=="?"?`?${t}`:t}var $i=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>u(ih),providedIn:"root"})}return t})(),nh=new g(""),ih=(()=>{class t extends $i{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??u(P).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return th(this._baseHref,e)}path(e=!1){let i=this._platformLocation.pathname+zn(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${i}${r}`:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+zn(o));this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+zn(o));this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(I(zi),I(nh,8))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var mi=(()=>{class t{_subject=new E;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let i=this._locationStrategy.getBaseHref();this._basePath=eL(JC(ex(i))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,i=""){return this.path()==this.normalize(e+zn(i))}normalize(e){return t.stripTrailingSlash(J1(this._basePath,ex(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,i="",r=null){this._locationStrategy.pushState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+zn(i)),r)}replaceState(e,i="",r=null){this._locationStrategy.replaceState(r,"",e,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+zn(i)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",i){this._urlChangeListeners.forEach(r=>r(e,i))}subscribe(e,i,r){return this._subject.subscribe({next:e,error:i??void 0,complete:r??void 0})}static normalizeQueryParams=zn;static joinWithSlash=th;static stripTrailingSlash=JC;static \u0275fac=function(i){return new(i||t)(I($i))};static \u0275prov=v({token:t,factory:()=>X1(),providedIn:"root"})}return t})();function X1(){return new mi(I($i))}function J1(t,n){if(!t||!n.startsWith(t))return n;let e=n.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:n}function ex(t){return t.replace(/\/index.html$/,"")}function eL(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var U_=(()=>{class t extends $i{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,i){super(),this._platformLocation=e,i!=null&&(this._baseHref=i)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let i=this._platformLocation.hash??"#";return i.length>0?i.substring(1):i}prepareExternalUrl(e){let i=th(this._baseHref,e);return i.length>0?"#"+i:i}pushState(e,i,r,o){let s=this.prepareExternalUrl(r+zn(o))||this._platformLocation.pathname;this._platformLocation.pushState(e,i,s)}replaceState(e,i,r,o){let s=this.prepareExternalUrl(r+zn(o))||this._platformLocation.pathname;this._platformLocation.replaceState(e,i,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(i){return new(i||t)(I(zi),I(nh,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();var z_=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=u(B);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let i=this._viewContainerRef;if(this._viewRef&&i.remove(i.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=i.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,i,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,i,r):!1,get:(e,i,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,i,r)}})}static \u0275fac=function(i){return new(i||t)(Z(Et))};static \u0275dir=R({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ke]})}return t})();function nL(t,n){return new w(2100,!1)}var V_=class{createSubscription(n,e,i){return rt(()=>n.subscribe({next:e,error:i}))}dispose(n){rt(()=>n.unsubscribe())}},H_=class{createSubscription(n,e,i){return n.then(r=>e?.(r),r=>i?.(r)),{unsubscribe:()=>{e=null,i=null}}}dispose(n){n.unsubscribe()}},iL=new H_,rL=new V_,$_=(()=>{class t{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=u(fn);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,i=>this._updateLatestValue(e,i),i=>this.applicationErrorHandler(i))}_selectStrategy(e){if(Bi(e))return iL;if(Uu(e))return rL;throw nL(t,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,i){e===this._obj&&(this._latestValue=i,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(i){return new(i||t)(Z(Ee,16))};static \u0275pipe=Eo({name:"async",type:t,pure:!1})}return t})();var G_=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();function Tl(t,n){n=encodeURIComponent(n);for(let e of t.split(";")){let i=e.indexOf("="),[r,o]=i==-1?[e,""]:[e.slice(0,i),e.slice(i+1)];if(r.trim()===n)return decodeURIComponent(o)}return null}var Mo=class{};var q_="browser";function tx(t){return t===q_}var Y_=(()=>{class t{static \u0275prov=v({token:t,providedIn:"root",factory:()=>new W_(u(P),window)})}return t})(),W_=class{document;window;offset=()=>[0,0];constructor(n,e){this.document=n,this.window=e}setOffset(n){Array.isArray(n)?this.offset=()=>n:this.offset=n}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(n,e){this.window.scrollTo(G(_({},e),{left:n[0],top:n[1]}))}scrollToAnchor(n,e){let i=sL(this.document,n);i&&(this.scrollToElement(i,e),i.focus())}setHistoryScrollRestoration(n){try{this.window.history.scrollRestoration=n}catch(e){console.warn(ri(2400,!1))}}scrollToElement(n,e){let i=n.getBoundingClientRect(),r=i.left+this.window.pageXOffset,o=i.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(G(_({},e),{left:r-s[0],top:o-s[1]}))}};function sL(t,n){let e=t.getElementById(n)||t.getElementsByName(n)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let i=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let o=r.shadowRoot;if(o){let s=o.getElementById(n)||o.querySelector(`[name="${n}"]`);if(s)return s}r=i.nextNode()}}return null}var Ml=class{_doc;constructor(n){this._doc=n}manager},rh=(()=>{class t extends Ml{constructor(e){super(e)}supports(e){return!0}addEventListener(e,i,r,o){return e.addEventListener(i,r,o),()=>this.removeEventListener(e,i,r,o)}removeEventListener(e,i,r,o){return e.removeEventListener(i,r,o)}static \u0275fac=function(i){return new(i||t)(I(P))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),ah=new g(""),X_=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,i){this._zone=i,e.forEach(s=>{s.manager=this});let r=e.filter(s=>!(s instanceof rh));this._plugins=r.slice().reverse();let o=e.find(s=>s instanceof rh);o&&this._plugins.push(o)}addEventListener(e,i,r,o){return this._findPluginFor(i).addEventListener(e,i,r,o)}getZone(){return this._zone}_findPluginFor(e){let i=this._eventNameToPlugin.get(e);if(i)return i;if(i=this._plugins.find(o=>o.supports(e)),!i)throw new w(5101,!1);return this._eventNameToPlugin.set(e,i),i}static \u0275fac=function(i){return new(i||t)(I(ah),I(T))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Q_="ng-app-id";function nx(t){for(let n of t)n.remove()}function ix(t,n){let e=n.createElement("style");return e.textContent=t,e}function lL(t,n,e,i){let r=t.head?.querySelectorAll(`style[${Q_}="${n}"],link[${Q_}="${n}"]`);if(r)for(let o of r)o.removeAttribute(Q_),o instanceof HTMLLinkElement?i.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Z_(t,n){let e=n.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var J_=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,i,r,o={}){this.doc=e,this.appId=i,this.nonce=r,lL(e,i,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,i){for(let r of e)this.addUsage(r,this.inline,ix);i?.forEach(r=>this.addUsage(r,this.external,Z_))}removeStyles(e,i){for(let r of e)this.removeUsage(r,this.inline);i?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,i,r){let o=i.get(e);o?o.usage++:i.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,r(e,this.doc)))})}removeUsage(e,i){let r=i.get(e);r&&(r.usage--,r.usage<=0&&(nx(r.elements),i.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])nx(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[i,{elements:r}]of this.inline)r.push(this.addElement(e,ix(i,this.doc)));for(let[i,{elements:r}]of this.external)r.push(this.addElement(e,Z_(i,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,i){return this.nonce&&i.setAttribute("nonce",this.nonce),e.appendChild(i)}static \u0275fac=function(i){return new(i||t)(I(P),I(wr),I(Os,8),I(wo))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),K_={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},ev=/%COMP%/g;var ox="%COMP%",cL=`_nghost-${ox}`,dL=`_ngcontent-${ox}`,uL=!0,hL=new g("",{factory:()=>uL});function fL(t){return dL.replace(ev,t)}function pL(t){return cL.replace(ev,t)}function sx(t,n){return n.map(e=>e.replace(ev,t))}var Rl=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,i,r,o,s,a,l=null,c=null){this.eventManager=e,this.sharedStylesHost=i,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=s,this.ngZone=a,this.nonce=l,this.tracingService=c,this.defaultRenderer=new Al(e,s,a,this.tracingService)}createRenderer(e,i){if(!e||!i)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,i);return r instanceof sh?r.applyToHost(e):r instanceof kl&&r.applyStyles(),r}getOrCreateRenderer(e,i){let r=this.rendererByCompId,o=r.get(i.id);if(!o){let s=this.doc,a=this.ngZone,l=this.eventManager,c=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.tracingService;switch(i.encapsulation){case Vn.Emulated:o=new sh(l,c,i,this.appId,d,s,a,h);break;case Vn.ShadowDom:return new oh(l,e,i,s,a,this.nonce,h,c);case Vn.ExperimentalIsolatedShadowDom:return new oh(l,e,i,s,a,this.nonce,h);default:o=new kl(l,c,i,d,s,a,h);break}r.set(i.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(i){return new(i||t)(I(X_),I(J_),I(wr),I(hL),I(P),I(T),I(Os),I(Hn,8))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Al=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(n,e,i,r){this.eventManager=n,this.doc=e,this.ngZone=i,this.tracingService=r}destroy(){}destroyNode=null;createElement(n,e){return e?this.doc.createElementNS(K_[e]||e,n):this.doc.createElement(n)}createComment(n){return this.doc.createComment(n)}createText(n){return this.doc.createTextNode(n)}appendChild(n,e){(rx(n)?n.content:n).appendChild(e)}insertBefore(n,e,i){n&&(rx(n)?n.content:n).insertBefore(e,i)}removeChild(n,e){e.remove()}selectRootElement(n,e){let i=typeof n=="string"?this.doc.querySelector(n):n;if(!i)throw new w(-5104,!1);return e||(i.textContent=""),i}parentNode(n){return n.parentNode}nextSibling(n){return n.nextSibling}setAttribute(n,e,i,r){if(r){e=r+":"+e;let o=K_[r];o?n.setAttributeNS(o,e,i):n.setAttribute(e,i)}else n.setAttribute(e,i)}removeAttribute(n,e,i){if(i){let r=K_[i];r?n.removeAttributeNS(r,e):n.removeAttribute(`${i}:${e}`)}else n.removeAttribute(e)}addClass(n,e){n.classList.add(e)}removeClass(n,e){n.classList.remove(e)}setStyle(n,e,i,r){r&(ui.DashCase|ui.Important)?n.style.setProperty(e,i,r&ui.Important?"important":""):n.style[e]=i}removeStyle(n,e,i){i&ui.DashCase?n.style.removeProperty(e):n.style[e]=""}setProperty(n,e,i){n!=null&&(n[e]=i)}setValue(n,e){n.nodeValue=e}listen(n,e,i,r){if(typeof n=="string"&&(n=mn().getGlobalEventTarget(this.doc,n),!n))throw new w(5102,!1);let o=this.decoratePreventDefault(i);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(n,e,o)),this.eventManager.addEventListener(n,e,o,r)}decoratePreventDefault(n){return e=>{if(e==="__ngUnwrap__")return n;n(e)===!1&&e.preventDefault()}}};function rx(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var oh=class extends Al{hostEl;sharedStylesHost;shadowRoot;constructor(n,e,i,r,o,s,a,l){super(n,r,o,a),this.hostEl=e,this.sharedStylesHost=l,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let c=i.styles;c=sx(i.id,c);for(let h of c){let f=document.createElement("style");s&&f.setAttribute("nonce",s),f.textContent=h,this.shadowRoot.appendChild(f)}let d=i.getExternalStyles?.();if(d)for(let h of d){let f=Z_(h,r);s&&f.setAttribute("nonce",s),this.shadowRoot.appendChild(f)}}nodeOrShadowRoot(n){return n===this.hostEl?this.shadowRoot:n}appendChild(n,e){return super.appendChild(this.nodeOrShadowRoot(n),e)}insertBefore(n,e,i){return super.insertBefore(this.nodeOrShadowRoot(n),e,i)}removeChild(n,e){return super.removeChild(null,e)}parentNode(n){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(n)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},kl=class extends Al{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(n,e,i,r,o,s,a,l){super(n,o,s,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let c=i.styles;this.styles=l?sx(l,c):c,this.styleUrls=i.getExternalStyles?.(l)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&yo.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},sh=class extends kl{contentAttr;hostAttr;constructor(n,e,i,r,o,s,a,l){let c=r+"-"+i.id;super(n,e,i,o,s,a,l,c),this.contentAttr=fL(c),this.hostAttr=pL(c)}applyToHost(n){this.applyStyles(),this.setAttribute(n,this.hostAttr,"")}createElement(n,e){let i=super.createElement(n,e);return super.setAttribute(i,this.contentAttr,""),i}};var lh=class t extends Il{supportsDOMEvents=!0;static makeCurrent(){B_(new t)}onAndCancel(n,e,i,r){return n.addEventListener(e,i,r),()=>{n.removeEventListener(e,i,r)}}dispatchEvent(n,e){n.dispatchEvent(e)}remove(n){n.remove()}createElement(n,e){return e=e||this.getDefaultDocument(),e.createElement(n)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(n){return n.nodeType===Node.ELEMENT_NODE}isShadowRoot(n){return n instanceof DocumentFragment}getGlobalEventTarget(n,e){return e==="window"?window:e==="document"?n:e==="body"?n.body:null}getBaseHref(n){let e=mL();return e==null?null:gL(e)}resetBaseElement(){Nl=null}getUserAgent(){return window.navigator.userAgent}getCookie(n){return Tl(document.cookie,n)}},Nl=null;function mL(){return Nl=Nl||document.head.querySelector("base"),Nl?Nl.getAttribute("href"):null}function gL(t){return new URL(t,document.baseURI).pathname}var ch=class{addToWindow(n){nn.getAngularTestability=(i,r=!0)=>{let o=n.findTestabilityInTree(i,r);if(o==null)throw new w(5103,!1);return o},nn.getAllAngularTestabilities=()=>n.getAllTestabilities(),nn.getAllAngularRootElements=()=>n.getAllRootElements();let e=i=>{let r=nn.getAllAngularTestabilities(),o=r.length,s=function(){o--,o==0&&i()};r.forEach(a=>{a.whenStable(s)})};nn.frameworkStabilizers||(nn.frameworkStabilizers=[]),nn.frameworkStabilizers.push(e)}findTestabilityInTree(n,e,i){if(e==null)return null;let r=n.getTestability(e);return r??(i?mn().isShadowRoot(e)?this.findTestabilityInTree(n,e.host,!0):this.findTestabilityInTree(n,e.parentElement,!0):null)}},_L=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),ax=["alt","control","meta","shift"],vL={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yL={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},lx=(()=>{class t extends Ml{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,i,r,o){let s=t.parseEventName(i),a=t.eventCallback(s.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>mn().onAndCancel(e,s.domEventName,a,o))}static parseEventName(e){let i=e.toLowerCase().split("."),r=i.shift();if(i.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(i.pop()),s="",a=i.indexOf("code");if(a>-1&&(i.splice(a,1),s="code."),ax.forEach(c=>{let d=i.indexOf(c);d>-1&&(i.splice(d,1),s+=c+".")}),s+=o,i.length!=0||o.length===0)return null;let l={};return l.domEventName=r,l.fullKey=s,l}static matchEventFullKeyCode(e,i){let r=vL[e.key]||e.key,o="";return i.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),ax.forEach(s=>{if(s!==r){let a=yL[s];a(e)&&(o+=s+".")}}),o+=r,o===i)}static eventCallback(e,i,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>i(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(i){return new(i||t)(I(P))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function bL(){lh.makeCurrent()}function wL(){return new tn}function DL(){return Zg(document),document}var EL=[{provide:wo,useValue:q_},{provide:xu,useValue:bL,multi:!0},{provide:P,useFactory:DL}],tv=F_(WC,"browser",EL);var CL=[{provide:Hu,useClass:ch},{provide:Vu,useClass:El},{provide:El,useClass:El}],xL=[{provide:tl,useValue:"root"},{provide:tn,useFactory:wL},{provide:ah,useClass:rh,multi:!0},{provide:ah,useClass:lx,multi:!0},Rl,J_,X_,{provide:qe,useExisting:Rl},{provide:Mo,useClass:_L},[]],Ol=(()=>{class t{constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({providers:[...xL,...CL],imports:[G_,qC]})}return t})();var gi=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(e=>{let i=e.indexOf(":");if(i>0){let r=e.slice(0,i),o=e.slice(i+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((e,i)=>{this.addHeaderEntry(i,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([e,i])=>{this.setHeaderEntries(e,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let e=this.headers.get(n.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,e){return this.clone({name:n,value:e,op:"a"})}set(n,e){return this.clone({name:n,value:e,op:"s"})}delete(n,e){return this.clone({name:n,value:e,op:"d"})}maybeSetNormalizedName(n,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,n)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(e=>{this.headers.set(e,n.headers.get(e)),this.normalizedNames.set(e,n.normalizedNames.get(e))})}clone(n){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([n]),e}applyUpdate(n){let e=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,e);let r=(n.op==="a"?this.headers.get(e):void 0)||[];r.push(...i),this.headers.set(e,r);break;case"d":let o=n.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>o.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(n,e){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(e):this.headers.set(i,[e])}setHeaderEntries(n,e){let i=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=n.toLowerCase();this.headers.set(r,i),this.maybeSetNormalizedName(n,r)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>n(this.normalizedNames.get(e),this.headers.get(e)))}};var uh=class{map=new Map;set(n,e){return this.map.set(n,e),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}},hh=class{encodeKey(n){return cx(n)}encodeValue(n){return cx(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function SL(t,n){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[s,a]=o==-1?[n.decodeKey(r),""]:[n.decodeKey(r.slice(0,o)),n.decodeValue(r.slice(o+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var IL=/%(\d[a-f0-9])/gi,TL={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function cx(t){return encodeURIComponent(t).replace(IL,(n,e)=>TL[e]??n)}function dh(t){return`${t}`}var Gi=class t{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new hh,n.fromString){if(n.fromObject)throw new w(2805,!1);this.map=SL(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(e=>{let i=n.fromObject[e],r=Array.isArray(i)?i.map(dh):[dh(i)];this.map.set(e,r)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let e=this.map.get(n);return e?e[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,e){return this.clone({param:n,value:e,op:"a"})}appendAll(n){let e=[];return Object.keys(n).forEach(i=>{let r=n[i];Array.isArray(r)?r.forEach(o=>{e.push({param:i,value:o,op:"a"})}):e.push({param:i,value:r,op:"a"})}),this.clone(e)}set(n,e){return this.clone({param:n,value:e,op:"s"})}delete(n,e){return this.clone({param:n,value:e,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let e=this.encoder.encodeKey(n);return this.map.get(n).map(i=>e+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(n),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let e=(n.op==="a"?this.map.get(n.param):void 0)||[];e.push(dh(n.value)),this.map.set(n.param,e);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],r=i.indexOf(dh(n.value));r!==-1&&i.splice(r,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};function ML(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function dx(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function ux(t){return typeof Blob<"u"&&t instanceof Blob}function hx(t){return typeof FormData<"u"&&t instanceof FormData}function AL(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var fx="Content-Type",px="Accept",gx="text/plain",_x="application/json",kL=`${_x}, ${gx}, */*`,js=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(n,e,i,r){this.url=e,this.method=n.toUpperCase();let o;if(ML(this.method)||r?(this.body=i!==void 0?i:null,o=r):o=i,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new w(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new gi,this.context??=new uh,!this.params)this.params=new Gi,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||dx(this.body)||ux(this.body)||hx(this.body)||AL(this.body)?this.body:this.body instanceof Gi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||hx(this.body)?null:ux(this.body)?this.body.type||null:dx(this.body)?null:typeof this.body=="string"?gx:this.body instanceof Gi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?_x:null}clone(n={}){let e=n.method||this.method,i=n.url||this.url,r=n.responseType||this.responseType,o=n.keepalive??this.keepalive,s=n.priority||this.priority,a=n.cache||this.cache,l=n.mode||this.mode,c=n.redirect||this.redirect,d=n.credentials||this.credentials,h=n.referrer||this.referrer,f=n.integrity||this.integrity,p=n.referrerPolicy||this.referrerPolicy,m=n.transferCache??this.transferCache,b=n.timeout??this.timeout,C=n.body!==void 0?n.body:this.body,M=n.withCredentials??this.withCredentials,Y=n.reportProgress??this.reportProgress,we=n.headers||this.headers,ve=n.params||this.params,Ut=n.context??this.context;return n.setHeaders!==void 0&&(we=Object.keys(n.setHeaders).reduce((Nt,Xe)=>Nt.set(Xe,n.setHeaders[Xe]),we)),n.setParams&&(ve=Object.keys(n.setParams).reduce((Nt,Xe)=>Nt.set(Xe,n.setParams[Xe]),ve)),new t(e,i,C,{params:ve,headers:we,context:Ut,reportProgress:Y,responseType:r,withCredentials:M,transferCache:m,keepalive:o,cache:a,priority:s,timeout:b,mode:l,redirect:c,credentials:d,referrer:h,integrity:f,referrerPolicy:p})}},Ao=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Ao||{}),Hs=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(n,e=200,i="OK"){this.headers=n.headers||new gi,this.status=n.status!==void 0?n.status:e,this.statusText=n.statusText||i,this.url=n.url||null,this.redirected=n.redirected,this.responseType=n.responseType,this.ok=this.status>=200&&this.status<300}},fh=class t extends Hs{constructor(n={}){super(n)}type=Ao.ResponseHeader;clone(n={}){return new t({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Pl=class t extends Hs{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=Ao.Response;clone(n={}){return new t({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0,redirected:n.redirected??this.redirected,responseType:n.responseType??this.responseType})}},Vs=class extends Hs{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},RL=200,NL=204,mh=(function(t){return t[t.Continue=100]="Continue",t[t.SwitchingProtocols=101]="SwitchingProtocols",t[t.Processing=102]="Processing",t[t.EarlyHints=103]="EarlyHints",t[t.Ok=200]="Ok",t[t.Created=201]="Created",t[t.Accepted=202]="Accepted",t[t.NonAuthoritativeInformation=203]="NonAuthoritativeInformation",t[t.NoContent=204]="NoContent",t[t.ResetContent=205]="ResetContent",t[t.PartialContent=206]="PartialContent",t[t.MultiStatus=207]="MultiStatus",t[t.AlreadyReported=208]="AlreadyReported",t[t.ImUsed=226]="ImUsed",t[t.MultipleChoices=300]="MultipleChoices",t[t.MovedPermanently=301]="MovedPermanently",t[t.Found=302]="Found",t[t.SeeOther=303]="SeeOther",t[t.NotModified=304]="NotModified",t[t.UseProxy=305]="UseProxy",t[t.Unused=306]="Unused",t[t.TemporaryRedirect=307]="TemporaryRedirect",t[t.PermanentRedirect=308]="PermanentRedirect",t[t.BadRequest=400]="BadRequest",t[t.Unauthorized=401]="Unauthorized",t[t.PaymentRequired=402]="PaymentRequired",t[t.Forbidden=403]="Forbidden",t[t.NotFound=404]="NotFound",t[t.MethodNotAllowed=405]="MethodNotAllowed",t[t.NotAcceptable=406]="NotAcceptable",t[t.ProxyAuthenticationRequired=407]="ProxyAuthenticationRequired",t[t.RequestTimeout=408]="RequestTimeout",t[t.Conflict=409]="Conflict",t[t.Gone=410]="Gone",t[t.LengthRequired=411]="LengthRequired",t[t.PreconditionFailed=412]="PreconditionFailed",t[t.PayloadTooLarge=413]="PayloadTooLarge",t[t.UriTooLong=414]="UriTooLong",t[t.UnsupportedMediaType=415]="UnsupportedMediaType",t[t.RangeNotSatisfiable=416]="RangeNotSatisfiable",t[t.ExpectationFailed=417]="ExpectationFailed",t[t.ImATeapot=418]="ImATeapot",t[t.MisdirectedRequest=421]="MisdirectedRequest",t[t.UnprocessableEntity=422]="UnprocessableEntity",t[t.Locked=423]="Locked",t[t.FailedDependency=424]="FailedDependency",t[t.TooEarly=425]="TooEarly",t[t.UpgradeRequired=426]="UpgradeRequired",t[t.PreconditionRequired=428]="PreconditionRequired",t[t.TooManyRequests=429]="TooManyRequests",t[t.RequestHeaderFieldsTooLarge=431]="RequestHeaderFieldsTooLarge",t[t.UnavailableForLegalReasons=451]="UnavailableForLegalReasons",t[t.InternalServerError=500]="InternalServerError",t[t.NotImplemented=501]="NotImplemented",t[t.BadGateway=502]="BadGateway",t[t.ServiceUnavailable=503]="ServiceUnavailable",t[t.GatewayTimeout=504]="GatewayTimeout",t[t.HttpVersionNotSupported=505]="HttpVersionNotSupported",t[t.VariantAlsoNegotiates=506]="VariantAlsoNegotiates",t[t.InsufficientStorage=507]="InsufficientStorage",t[t.LoopDetected=508]="LoopDetected",t[t.NotExtended=510]="NotExtended",t[t.NetworkAuthenticationRequired=511]="NetworkAuthenticationRequired",t})(mh||{});var OL=new g("");var PL=/^\)\]\}',?\n/;var iv=(()=>{class t{xhrFactory;tracingService=u(Hn,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new w(-2800,!1);let i=this.xhrFactory;return j(null).pipe(We(()=>new J(o=>{let s=i.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((C,M)=>s.setRequestHeader(C,M.join(","))),e.headers.has(px)||s.setRequestHeader(px,kL),!e.headers.has(fx)){let C=e.detectContentTypeHeader();C!==null&&s.setRequestHeader(fx,C)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let C=e.responseType.toLowerCase();s.responseType=C!=="json"?C:"text"}let a=e.serializeBody(),l=null,c=()=>{if(l!==null)return l;let C=s.statusText||"OK",M=new gi(s.getAllResponseHeaders()),Y=s.responseURL||e.url;return l=new fh({headers:M,status:s.status,statusText:C,url:Y}),l},d=this.maybePropagateTrace(()=>{let{headers:C,status:M,statusText:Y,url:we}=c(),ve=null;M!==NL&&(ve=typeof s.response>"u"?s.responseText:s.response),M===0&&(M=ve?RL:0);let Ut=M>=200&&M<300;if(e.responseType==="json"&&typeof ve=="string"){let Nt=ve;ve=ve.replace(PL,"");try{ve=ve!==""?JSON.parse(ve):null}catch(Xe){ve=Nt,Ut&&(Ut=!1,ve={error:Xe,text:ve})}}Ut?(o.next(new Pl({body:ve,headers:C,status:M,statusText:Y,url:we||void 0})),o.complete()):o.error(new Vs({error:ve,headers:C,status:M,statusText:Y,url:we||void 0}))}),h=this.maybePropagateTrace(C=>{let{url:M}=c(),Y=new Vs({error:C,status:s.status||0,statusText:s.statusText||"Unknown Error",url:M||void 0});o.error(Y)}),f=h;e.timeout&&(f=this.maybePropagateTrace(C=>{let{url:M}=c(),Y=new Vs({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:M||void 0});o.error(Y)}));let p=!1,m=this.maybePropagateTrace(C=>{p||(o.next(c()),p=!0);let M={type:Ao.DownloadProgress,loaded:C.loaded};C.lengthComputable&&(M.total=C.total),e.responseType==="text"&&s.responseText&&(M.partialText=s.responseText),o.next(M)}),b=this.maybePropagateTrace(C=>{let M={type:Ao.UploadProgress,loaded:C.loaded};C.lengthComputable&&(M.total=C.total),o.next(M)});return s.addEventListener("load",d),s.addEventListener("error",h),s.addEventListener("timeout",f),s.addEventListener("abort",h),e.reportProgress&&(s.addEventListener("progress",m),a!==null&&s.upload&&s.upload.addEventListener("progress",b)),s.send(a),o.next({type:Ao.Sent}),()=>{s.removeEventListener("error",h),s.removeEventListener("abort",h),s.removeEventListener("load",d),s.removeEventListener("timeout",f),e.reportProgress&&(s.removeEventListener("progress",m),a!==null&&s.upload&&s.upload.removeEventListener("progress",b)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||t)(I(Mo))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function vx(t,n){return n(t)}function FL(t,n){return(e,i)=>n.intercept(e,{handle:r=>t(r,i)})}function LL(t,n,e){return(i,r)=>pt(e,()=>n(i,o=>t(o,r)))}var yx=new g(""),rv=new g("",{factory:()=>[]}),bx=new g(""),ov=new g("",{factory:()=>!0});function BL(){let t=null;return(n,e)=>{t===null&&(t=(u(yx,{optional:!0})??[]).reduceRight(FL,vx));let i=u(Ss);if(u(ov)){let o=i.add();return t(n,e).pipe(ni(o))}else return t(n,e)}}var sv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=I(iv),r},providedIn:"root"})}return t})();var ph=(()=>{class t{backend;injector;chain=null;pendingTasks=u(Ss);contributeToStability=u(ov);constructor(e,i){this.backend=e,this.injector=i}handle(e){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(rv),...this.injector.get(bx,[])]));this.chain=i.reduceRight((r,o)=>LL(r,o,this.injector),vx)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(ni(i))}else return this.chain(e,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||t)(I(sv),I(Fe))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),av=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=I(ph),r},providedIn:"root"})}return t})();function nv(t,n){return{body:n,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Er=(()=>{class t{handler;constructor(e){this.handler=e}request(e,i,r={}){let o;if(e instanceof js)o=e;else{let l;r.headers instanceof gi?l=r.headers:l=new gi(r.headers);let c;r.params&&(r.params instanceof Gi?c=r.params:c=new Gi({fromObject:r.params})),o=new js(e,i,r.body!==void 0?r.body:null,{headers:l,context:r.context,params:c,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let s=j(o).pipe(cr(l=>this.handler.handle(l)));if(e instanceof js||r.observe==="events")return s;let a=s.pipe(re(l=>l instanceof Pl));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return a.pipe(W(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new w(2806,!1);return l.body}));case"blob":return a.pipe(W(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new w(2807,!1);return l.body}));case"text":return a.pipe(W(l=>{if(l.body!==null&&typeof l.body!="string")throw new w(2808,!1);return l.body}));default:return a.pipe(W(l=>l.body))}case"response":return a;default:throw new w(2809,!1)}}delete(e,i={}){return this.request("DELETE",e,i)}get(e,i={}){return this.request("GET",e,i)}head(e,i={}){return this.request("HEAD",e,i)}jsonp(e,i){return this.request("JSONP",e,{params:new Gi().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,i={}){return this.request("OPTIONS",e,i)}patch(e,i,r={}){return this.request("PATCH",e,nv(r,i))}post(e,i,r={}){return this.request("POST",e,nv(r,i))}put(e,i,r={}){return this.request("PUT",e,nv(r,i))}static \u0275fac=function(i){return new(i||t)(I(av))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jL=new g("",{factory:()=>!0}),VL="XSRF-TOKEN",HL=new g("",{factory:()=>VL}),UL="X-XSRF-TOKEN",zL=new g("",{factory:()=>UL}),$L=(()=>{class t{cookieName=u(HL);doc=u(P);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=Tl(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),wx=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=I($L),r},providedIn:"root"})}return t})();function GL(t,n){if(!u(jL)||t.method==="GET"||t.method==="HEAD")return n(t);try{let r=u(zi).href,{origin:o}=new URL(r),{origin:s}=new URL(t.url,o);if(o!==s)return n(t)}catch(r){return n(t)}let e=u(wx).getToken(),i=u(zL);return e!=null&&!t.headers.has(i)&&(t=t.clone({headers:t.headers.set(i,e)})),n(t)}var lv=(function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t})(lv||{});function WL(t,n){return{\u0275kind:t,\u0275providers:n}}function cv(...t){let n=[Er,ph,{provide:av,useExisting:ph},{provide:sv,useFactory:()=>u(OL,{optional:!0})??u(iv)},{provide:rv,useValue:GL,multi:!0}];for(let e of t)n.push(...e.\u0275providers);return Gt(n)}var mx=new g("");function dv(){return WL(lv.LegacyInterceptors,[{provide:mx,useFactory:BL},{provide:rv,useExisting:mx,multi:!0}])}var Dx=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(i){return new(i||t)(I(P))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var hv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:function(i){let r=null;return i?r=new(i||t):r=I(qL),r},providedIn:"root"})}return t})(),qL=(()=>{class t extends hv{_doc;constructor(e){super(),this._doc=e}sanitize(e,i){if(i==null)return null;switch(e){case Yt.NONE:return i;case Yt.HTML:return Do(i,"HTML")?fi(i):i_(this._doc,String(i)).toString();case Yt.STYLE:return Do(i,"Style")?fi(i):i;case Yt.SCRIPT:if(Do(i,"Script"))return fi(i);throw new w(5200,!1);case Yt.URL:return Do(i,"URL")?fi(i):Mu(String(i));case Yt.RESOURCE_URL:if(Do(i,"ResourceURL"))return fi(i);throw new w(5201,!1);default:throw new w(5202,!1)}}bypassSecurityTrustHtml(e){return Xg(e)}bypassSecurityTrustStyle(e){return Jg(e)}bypassSecurityTrustScript(e){return e_(e)}bypassSecurityTrustUrl(e){return t_(e)}bypassSecurityTrustResourceUrl(e){return n_(e)}static \u0275fac=function(i){return new(i||t)(I(P))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gh=new WeakMap,Ye=(()=>{class t{_appRef;_injector=u(B);_environmentInjector=u(Fe);load(e){let i=this._appRef=this._appRef||this._injector.get(Bt),r=gh.get(i);r||(r={loaders:new Set,refs:[]},gh.set(i,r),i.onDestroy(()=>{gh.get(i)?.refs.forEach(o=>o.destroy()),gh.delete(i)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(eh(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var pv;function Ex(){if(pv==null){let t=typeof document<"u"?document.head:null;pv=!!(t&&(t.createShadowRoot||t.attachShadow))}return pv}function ko(t){if(Ex()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function Us(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function xt(t){return t.composedPath?t.composedPath()[0]:t.target}function Ro(t){return t.buttons===0||t.detail===0}function No(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}function St(t,n=0){return Cx(t)?Number(t):arguments.length===2?n:0}function Cx(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Ze(t){return t instanceof O?t.nativeElement:t}var mv;try{mv=typeof Intl<"u"&&Intl.v8BreakIterator}catch(t){mv=!1}var _e=(()=>{class t{_platformId=u(wo);isBrowser=this._platformId?tx(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||mv)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var YL=new g("cdk-dir-doc",{providedIn:"root",factory:()=>u(P)}),QL=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function xx(t){let n=t?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?QL.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr"}var _t=(()=>{class t{get value(){return this.valueSignal()}valueSignal=xe("ltr");change=new N;constructor(){let e=u(YL,{optional:!0});if(e){let i=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(xx(i||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var $n=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})($n||{}),_h,Oo;function vh(){if(Oo==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Oo=!1,Oo;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Oo=!0;else{let t=Element.prototype.scrollTo;t?Oo=!/\{\s*\[native code\]\s*\}/.test(t.toString()):Oo=!1}}return Oo}function zs(){if(typeof document!="object"||!document)return $n.NORMAL;if(_h==null){let t=document.createElement("div"),n=t.style;t.dir="rtl",n.width="1px",n.overflow="auto",n.visibility="hidden",n.pointerEvents="none",n.position="absolute";let e=document.createElement("div"),i=e.style;i.width="2px",i.height="1px",t.appendChild(e),document.body.appendChild(t),_h=$n.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,_h=t.scrollLeft===0?$n.NEGATED:$n.INVERTED),t.remove()}return _h}var Ce=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();var KL=20,Gn=(()=>{class t{_ngZone=u(T);_platform=u(_e);_renderer=u(qe).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new E;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=KL){return this._platform.isBrowser?new J(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(yd(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):j()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(re(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_scrollableContainsElement(e,i){let r=Ze(i),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wi=(()=>{class t{elementRef=u(O);scrollDispatcher=u(Gn);ngZone=u(T);dir=u(_t,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new E;_renderer=u(ke);_cleanupScroll;_elementScrolled=new E;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),r&&zs()!=$n.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),zs()==$n.INVERTED?e.left=e.right:zs()==$n.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;vh()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:i:e=="end"&&(e=s?i:r),s&&zs()==$n.INVERTED?e==i?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:s&&zs()==$n.NEGATED?e==i?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==i?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),ZL=20,Wn=(()=>{class t{_platform=u(_e);_listeners;_viewportSize=null;_change=new E;_document=u(P);constructor(){let e=u(T),i=u(qe).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[i.listen("window","resize",r),i.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),s=-o.top||e.body?.scrollTop||i.scrollY||r.scrollTop||0,a=-o.left||e.body?.scrollLeft||i.scrollX||r.scrollLeft||0;return{top:s,left:a}}change(e=ZL){return e>0?this._change.pipe(yd(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _i=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})(),gv=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Ce,_i,Ce,_i]})}return t})();var _v={},Ge=class t{_appId=u(wr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),_v.hasOwnProperty(n)||(_v[n]=0),`${n}${e?t._infix+"-":""}${_v[n]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})};function Cr(t){return Array.isArray(t)?t:[t]}function bv(t){let n=t.cloneNode(!0),e=n.querySelectorAll("[id]"),i=t.nodeName.toLowerCase();n.removeAttribute("id");for(let r=0;r<e.length;r++)e[r].removeAttribute("id");return i==="canvas"?Tx(t,n):(i==="input"||i==="select"||i==="textarea")&&Ix(t,n),Sx("canvas",t,n,Tx),Sx("input, textarea, select",t,n,Ix),n}function Sx(t,n,e,i){let r=n.querySelectorAll(t);if(r.length){let o=e.querySelectorAll(t);for(let s=0;s<r.length;s++)i(r[s],o[s])}}var JL=0;function Ix(t,n){n.type!=="file"&&(n.value=t.value),n.type==="radio"&&n.name&&(n.name=`mat-clone-${n.name}-${JL++}`)}function Tx(t,n){let e=n.getContext("2d");if(e)try{e.drawImage(t,0,0)}catch(i){}}function Sv(t){let n=t.getBoundingClientRect();return{top:n.top,right:n.right,bottom:n.bottom,left:n.left,width:n.width,height:n.height,x:n.x,y:n.y}}function wv(t,n,e){let{top:i,bottom:r,left:o,right:s}=t;return e>=i&&e<=r&&n>=o&&n<=s}function eB(t,n){let e=n.left<t.left,i=n.left+n.width>t.right,r=n.top<t.top,o=n.top+n.height>t.bottom;return e||i||r||o}function Bl(t,n,e){t.top+=n,t.bottom=t.top+t.height,t.left+=e,t.right=t.left+t.width}function Mx(t,n,e,i){let{top:r,right:o,bottom:s,left:a,width:l,height:c}=t,d=l*n,h=c*n;return i>r-h&&i<s+h&&e>a-d&&e<o+d}var yh=class{_document;positions=new Map;constructor(n){this._document=n}clear(){this.positions.clear()}cache(n){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),n.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:Sv(e)})})}handleScroll(n){let e=xt(n),i=this.positions.get(e);if(!i)return null;let r=i.scrollPosition,o,s;if(e===this._document){let c=this.getViewportScrollPosition();o=c.top,s=c.left}else o=e.scrollTop,s=e.scrollLeft;let a=r.top-o,l=r.left-s;return this.positions.forEach((c,d)=>{c.clientRect&&e!==d&&e.contains(d)&&Bl(c.clientRect,a,l)}),r.top=o,r.left=s,{top:a,left:l}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Hx(t,n){let e=t.rootNodes;if(e.length===1&&e[0].nodeType===n.ELEMENT_NODE)return e[0];let i=n.createElement("div");return e.forEach(r=>i.appendChild(r)),i}function Iv(t,n,e){for(let i in n)if(n.hasOwnProperty(i)){let r=n[i];r?t.setProperty(i,r,e?.has(i)?"important":""):t.removeProperty(i)}return t}function $s(t,n){let e=n?"":"none";Iv(t.style,{"touch-action":n?"":"none","-webkit-user-drag":n?"":"none","-webkit-tap-highlight-color":n?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function Ax(t,n,e){Iv(t.style,{position:n?"":"fixed",top:n?"":"0",opacity:n?"":"0",left:n?"":"-999em"},e)}function bh(t,n){return n&&n!="none"?t+" "+n:t}function kx(t,n){t.style.width=`${n.width}px`,t.style.height=`${n.height}px`,t.style.transform=jl(n.left,n.top)}function jl(t,n){return`translate3d(${Math.round(t)}px, ${Math.round(n)}px, 0)`}var Fl={capture:!0},vv={passive:!1,capture:!0},tB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(i,r){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return t})(),Eh=(()=>{class t{_ngZone=u(T);_document=u(P);_styleLoader=u(Ye);_renderer=u(qe).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new E;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=xe([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new E;pointerUp=new E;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,vv)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,i){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(tB),this._activeDragInstances.update(r=>[...r,e]),this._activeDragInstances().length===1)){let r=i.type.startsWith("touch"),o=a=>this.pointerUp.next(a),s=[["scroll",a=>this._scroll.next(a),Fl],["selectstart",this._preventDefaultWhileDragging,vv]];r?s.push(["touchend",o,Fl],["touchcancel",o,Fl]):s.push(["mouseup",o,Fl]),r||s.push(["mousemove",a=>this.pointerMove.next(a),vv]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=s.map(([a,l,c])=>this._renderer.listen(this._document,a,l,c))})}}stopDragging(e){this._activeDragInstances.update(i=>{let r=i.indexOf(e);return r>-1?(i.splice(r,1),[...i]):i}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let i=[this._scroll];return e&&e!==this._document&&i.push(new J(r=>this._ngZone.runOutsideAngular(()=>{let o=this._renderer.listen(e,"scroll",s=>{this._activeDragInstances().length&&r.next(s)},Fl);return()=>{o()}}))),yt(...i)}registerDirectiveNode(e,i){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,i)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Rx(t){let n=t.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(t)*n}function nB(t){let n=getComputedStyle(t),e=yv(n,"transition-property"),i=e.find(a=>a==="transform"||a==="all");if(!i)return 0;let r=e.indexOf(i),o=yv(n,"transition-duration"),s=yv(n,"transition-delay");return Rx(o[r])+Rx(s[r])}function yv(t,n){return t.getPropertyValue(n).split(",").map(i=>i.trim())}var iB=new Set(["position"]),Dv=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(n,e,i,r,o,s,a,l,c,d){this._document=n,this._rootElement=e,this._direction=i,this._initialDomRect=r,this._previewTemplate=o,this._previewClass=s,this._pickupPositionOnPage=a,this._initialTransform=l,this._zIndex=c,this._renderer=d}attach(n){this._preview=this._createPreview(),n.appendChild(this._preview),Nx(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(n){this._preview.style.transform=n}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(n){this._preview.classList.add(n)}getTransitionDuration(){return nB(this._preview)}addEventListener(n,e){return this._renderer.listen(this._preview,n,e)}_createPreview(){let n=this._previewTemplate,e=this._previewClass,i=n?n.template:null,r;if(i&&n){let o=n.matchSize?this._initialDomRect:null,s=n.viewContainer.createEmbeddedView(i,n.context);s.detectChanges(),r=Hx(s,this._document),this._previewEmbeddedView=s,n.matchSize?kx(r,o):r.style.transform=jl(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else r=bv(this._rootElement),kx(r,this._initialDomRect),this._initialTransform&&(r.style.transform=this._initialTransform);return Iv(r.style,{"pointer-events":"none",margin:Nx(r)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},iB),$s(r,!1),r.classList.add("cdk-drag-preview"),r.setAttribute("popover","manual"),r.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(o=>r.classList.add(o)):r.classList.add(e)),r}};function Nx(t){return"showPopover"in t}var rB={passive:!0},Ox={passive:!1},oB={passive:!1,capture:!0},sB=800,Px="cdk-drag-placeholder",Fx=new Set(["position"]);function Ux(t,n,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let i=t.get(ke,null,{optional:!0})||t.get(qe).createRenderer(null,null);return new Ev(n,e,t.get(P),t.get(T),t.get(Wn),t.get(Eh),i)}var Ev=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=xe(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new E;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=ce.EMPTY;_pointerUpSubscription=ce.EMPTY;_scrollSubscription=ce.EMPTY;_resizeSubscription=ce.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(n){n!==this._disabled&&(this._disabled=n,this._toggleNativeDragInteractions(),this._handles.forEach(e=>$s(e,n)))}_disabled=!1;beforeStarted=new E;started=new E;released=new E;ended=new E;entered=new E;exited=new E;dropped=new E;moved=this._moveEvents;data;constrainPosition;constructor(n,e,i,r,o,s,a){this._config=e,this._document=i,this._ngZone=r,this._viewportRuler=o,this._dragDropRegistry=s,this._renderer=a,this.withRootElement(n).withParent(e.parentDragRef||null),this._parentPositions=new yh(i),s.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(n){this._handles=n.map(i=>Ze(i)),this._handles.forEach(i=>$s(i,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(i=>{this._handles.indexOf(i)>-1&&e.add(i)}),this._disabledHandles=e,this}withPreviewTemplate(n){return this._previewTemplate=n,this}withPlaceholderTemplate(n){return this._placeholderTemplate=n,this}withRootElement(n){let e=Ze(n);if(e!==this._rootElement){this._removeRootElementListeners();let i=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[i.listen(e,"mousedown",this._pointerDown,Ox),i.listen(e,"touchstart",this._pointerDown,rB),i.listen(e,"dragstart",this._nativeDragStart,Ox)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(n){return this._boundaryElement=n?Ze(n):null,this._resizeSubscription.unsubscribe(),n&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(n){return this._parentDragRef=n,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&eB(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let n=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),i=0,r=0;e.left<n.left?i=n.left-e.left:e.right>n.right&&(i=n.right-e.right),e.top<n.top?r=n.top-e.top:e.bottom>n.bottom&&(r=n.bottom-e.bottom);let o=this._activeTransform.x,s=this._activeTransform.y,a=o+i,l=s+r;this._rootElement.style.transform=jl(a,l),this._activeTransform={x:a,y:l},this._passiveTransform={x:a,y:l}}}disableHandle(n){!this._disabledHandles.has(n)&&this._handles.indexOf(n)>-1&&(this._disabledHandles.add(n),$s(n,!0))}enableHandle(n){this._disabledHandles.has(n)&&(this._disabledHandles.delete(n),$s(n,this.disabled))}withDirection(n){return this._direction=n,this}_withDropContainer(n){this._dropContainer=n}getFreeDragPosition(){let n=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:n.x,y:n.y}}setFreeDragPosition(n){return this._activeTransform={x:0,y:0},this._passiveTransform.x=n.x,this._passiveTransform.y=n.y,this._dropContainer||this._applyRootElementTransform(n.x,n.y),this}withPreviewContainer(n){return this._previewContainer=n,this}_sortFromLastPointerPosition(){let n=this._lastKnownPointerPosition;n&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(n),n)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=n=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(n);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,n)}else this.disabled||this._initializeDragSequence(this._rootElement,n)};_pointerMove=n=>{let e=this._getPointerPositionOnPage(n);if(!this._hasStartedDragging()){let r=Math.abs(e.x-this._pickupPositionOnPage.x),o=Math.abs(e.y-this._pickupPositionOnPage.y);if(r+o>=this._config.dragStartThreshold){let a=Date.now()>=this._dragStartTime+this._getDragStartDelay(n),l=this._dropContainer;if(!a){this._endDragSequence(n);return}(!l||!l.isDragging()&&!l.isReceiving())&&(n.cancelable&&n.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(n)))}return}n.cancelable&&n.preventDefault();let i=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(i),this._dropContainer)this._updateActiveDropContainer(i,e);else{let r=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,o=this._activeTransform;o.x=i.x-r.x+this._passiveTransform.x,o.y=i.y-r.y+this._passiveTransform.y,this._applyRootElementTransform(o.x,o.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:i,event:n,distance:this._getDragDistance(i),delta:this._pointerDirectionDelta})})};_pointerUp=n=>{this._endDragSequence(n)};_endDragSequence(n){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:n}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(n),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(n);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:n})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(n){Ll(n)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),i=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",aB,oB)}),i){let r=this._rootElement,o=r.parentNode,s=this._placeholder=this._createPlaceholderElement(),a=this._marker=this._marker||this._document.createComment("");o.insertBefore(a,r),this._initialTransform=r.style.transform||"",this._preview=new Dv(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(o,e)),Ax(r,!1,Fx),this._document.body.appendChild(o.replaceChild(s,r)),this.started.next({source:this,event:n}),i.start(),this._initialContainer=i,this._initialIndex=i.getItemIndex(this)}else this.started.next({source:this,event:n}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(i?i.getScrollableParents():[])}_initializeDragSequence(n,e){this._parentDragRef&&e.stopPropagation();let i=this.isDragging(),r=Ll(e),o=!r&&e.button!==0,s=this._rootElement,a=xt(e),l=!r&&this._lastTouchEventTime&&this._lastTouchEventTime+sB>Date.now(),c=r?No(e):Ro(e);if(a&&a.draggable&&e.type==="mousedown"&&e.preventDefault(),i||o||l||c)return;if(this._handles.length){let f=s.style;this._rootElementTapHighlight=f.webkitTapHighlightColor||"",f.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(f=>this._updateOnScroll(f)),this._boundaryElement&&(this._boundaryRect=Sv(this._boundaryElement));let d=this._previewTemplate;this._pickupPositionInElement=d&&d.template&&!d.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,n,e);let h=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:h.x,y:h.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(n){Ax(this._rootElement,!0,Fx),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,i=e.getItemIndex(this),r=this._getPointerPositionOnPage(n),o=this._getDragDistance(r),s=e._isOverContainer(r.x,r.y);this.ended.next({source:this,distance:o,dropPoint:r,event:n}),this.dropped.next({item:this,currentIndex:i,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:s,distance:o,dropPoint:r,event:n}),e.drop(this,i,this._initialIndex,this._initialContainer,s,o,r,n),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:n,y:e},{x:i,y:r}){let o=this._initialContainer._getSiblingContainerFromPosition(this,n,e);!o&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(n,e)&&(o=this._initialContainer),o&&o!==this._dropContainer&&this._ngZone.run(()=>{let s=this._dropContainer.getItemIndex(this),a=this._dropContainer.getItemAtIndex(s+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(o,this._dropContainer,a),this._dropContainer=o,this._dropContainer.enter(this,n,e,o===this._initialContainer&&o.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:o,currentIndex:o.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(i,r),this._dropContainer._sortItem(this,n,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(n,e):this._applyPreviewTransform(n-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let n=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(n.left,n.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(i=>{let r=a=>{(!a||this._preview&&xt(a)===this._preview.element&&a.propertyName==="transform")&&(s(),i(),clearTimeout(o))},o=setTimeout(r,e*1.5),s=this._preview.addEventListener("transitionend",r)}))}_createPlaceholderElement(){let n=this._placeholderTemplate,e=n?n.template:null,i;return e?(this._placeholderRef=n.viewContainer.createEmbeddedView(e,n.context),this._placeholderRef.detectChanges(),i=Hx(this._placeholderRef,this._document)):i=bv(this._rootElement),i.style.pointerEvents="none",i.classList.add(Px),i}_getPointerPositionInElement(n,e,i){let r=e===this._rootElement?null:e,o=r?r.getBoundingClientRect():n,s=Ll(i)?i.targetTouches[0]:i,a=this._getViewportScrollPosition(),l=s.pageX-o.left-a.left,c=s.pageY-o.top-a.top;return{x:o.left-n.left+l,y:o.top-n.top+c}}_getPointerPositionOnPage(n){let e=this._getViewportScrollPosition(),i=Ll(n)?n.touches[0]||n.changedTouches[0]||{pageX:0,pageY:0}:n,r=i.pageX-e.left,o=i.pageY-e.top;if(this._ownerSVGElement){let s=this._ownerSVGElement.getScreenCTM();if(s){let a=this._ownerSVGElement.createSVGPoint();return a.x=r,a.y=o,a.matrixTransform(s.inverse())}}return{x:r,y:o}}_getConstrainedPointerPosition(n){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:i,y:r}=this.constrainPosition?this.constrainPosition(n,this,this._initialDomRect,this._pickupPositionInElement):n;if(this.lockAxis==="x"||e==="x"?r=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(i=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:o,y:s}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,a=this._boundaryRect,{width:l,height:c}=this._getPreviewRect(),d=a.top+s,h=a.bottom-(c-s),f=a.left+o,p=a.right-(l-o);i=Lx(i,f,p),r=Lx(r,d,h)}return{x:i,y:r}}_updatePointerDirectionDelta(n){let{x:e,y:i}=n,r=this._pointerDirectionDelta,o=this._pointerPositionAtLastDirectionChange,s=Math.abs(e-o.x),a=Math.abs(i-o.y);return s>this._config.pointerDirectionChangeThreshold&&(r.x=e>o.x?1:-1,o.x=e),a>this._config.pointerDirectionChangeThreshold&&(r.y=i>o.y?1:-1,o.y=i),r}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let n=this._handles.length>0||!this.isDragging();n!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=n,$s(this._rootElement,n))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(n=>n()),this._rootElementCleanups=void 0}_applyRootElementTransform(n,e){let i=1/this.scale,r=jl(n*i,e*i),o=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=o.transform&&o.transform!="none"?o.transform:""),o.transform=bh(r,this._initialTransform)}_applyPreviewTransform(n,e){let i=this._previewTemplate?.template?void 0:this._initialTransform,r=jl(n,e);this._preview.setTransform(bh(r,i))}_getDragDistance(n){let e=this._pickupPositionOnPage;return e?{x:n.x-e.x,y:n.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:n,y:e}=this._passiveTransform;if(n===0&&e===0||this.isDragging()||!this._boundaryElement)return;let i=this._rootElement.getBoundingClientRect(),r=this._boundaryElement.getBoundingClientRect();if(r.width===0&&r.height===0||i.width===0&&i.height===0)return;let o=r.left-i.left,s=i.right-r.right,a=r.top-i.top,l=i.bottom-r.bottom;r.width>i.width?(o>0&&(n+=o),s>0&&(n-=s)):n=0,r.height>i.height?(a>0&&(e+=a),l>0&&(e-=l)):e=0,(n!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:n})}_getDragStartDelay(n){let e=this.dragStartDelay;return typeof e=="number"?e:Ll(n)?e.touch:e?e.mouse:0}_updateOnScroll(n){let e=this._parentPositions.handleScroll(n);if(e){let i=xt(n);this._boundaryRect&&i!==this._boundaryElement&&i.contains(this._boundaryElement)&&Bl(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=ko(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(n,e){let i=this._previewContainer||"global";if(i==="parent")return n;if(i==="global"){let r=this._document;return e||r.fullscreenElement||r.webkitFullscreenElement||r.mozFullScreenElement||r.msFullscreenElement||r.body}return Ze(i)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=n=>{if(this._handles.length){let e=this._getTargetHandle(n);e&&!this._disabledHandles.has(e)&&!this.disabled&&n.preventDefault()}else this.disabled||n.preventDefault()};_getTargetHandle(n){return this._handles.find(e=>n.target&&(n.target===e||e.contains(n.target)))}_conditionallyInsertAnchor(n,e,i){if(n===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let r=this._anchor??=bv(this._placeholder);r.classList.remove(Px),r.classList.add("cdk-drag-anchor"),r.style.transform="",i?i.before(r):Ze(e.element).appendChild(r)}}};function Lx(t,n,e){return Math.max(n,Math.min(e,t))}function Ll(t){return t.type[0]==="t"}function aB(t){t.preventDefault()}function zx(t,n,e){let i=Bx(n,t.length-1),r=Bx(e,t.length-1);if(i===r)return;let o=t[i],s=r<i?-1:1;for(let a=i;a!==r;a+=s)t[a]=t[a+s];t[r]=o}function Bx(t,n){return Math.max(0,Math.min(n,t))}var wh=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(n){this._dragDropRegistry=n}_previousSwap={drag:null,delta:0,overlaps:!1};start(n){this.withItems(n)}sort(n,e,i,r){let o=this._itemPositions,s=this._getItemIndexFromPointerPosition(n,e,i,r);if(s===-1&&o.length>0)return null;let a=this.orientation==="horizontal",l=o.findIndex(C=>C.drag===n),c=o[s],d=o[l].clientRect,h=c.clientRect,f=l>s?1:-1,p=this._getItemOffsetPx(d,h,f),m=this._getSiblingOffsetPx(l,o,f),b=o.slice();return zx(o,l,s),o.forEach((C,M)=>{if(b[M]===C)return;let Y=C.drag===n,we=Y?p:m,ve=Y?n.getPlaceholderElement():C.drag.getRootElement();C.offset+=we;let Ut=Math.round(C.offset*(1/C.drag.scale));a?(ve.style.transform=bh(`translate3d(${Ut}px, 0, 0)`,C.initialTransform),Bl(C.clientRect,0,we)):(ve.style.transform=bh(`translate3d(0, ${Ut}px, 0)`,C.initialTransform),Bl(C.clientRect,we,0))}),this._previousSwap.overlaps=wv(h,e,i),this._previousSwap.drag=c.drag,this._previousSwap.delta=a?r.x:r.y,{previousIndex:l,currentIndex:s}}enter(n,e,i,r){let o=this._activeDraggables,s=o.indexOf(n),a=n.getPlaceholderElement();s>-1&&o.splice(s,1);let l=r==null||r<0?this._getItemIndexFromPointerPosition(n,e,i):r,c=o[l];if(c===n&&(c=o[l+1]),!c&&(l==null||l===-1||l<o.length-1)&&this._shouldEnterAsFirstChild(e,i)&&(c=o[0]),c&&!this._dragDropRegistry.isDragging(c)){let d=c.getRootElement();d.parentElement.insertBefore(a,d),o.splice(l,0,n)}else this._element.appendChild(a),o.push(n);a.style.transform="",this._cacheItemPositions()}withItems(n){this._activeDraggables=n.slice(),this._cacheItemPositions()}withSortPredicate(n){this._sortPredicate=n}reset(){this._activeDraggables?.forEach(n=>{let e=n.getRootElement();if(e){let i=this._itemPositions.find(r=>r.drag===n)?.initialTransform;e.style.transform=i||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(n){return this._getVisualItemPositions().findIndex(e=>e.drag===n)}getItemAtIndex(n){return this._getVisualItemPositions()[n]?.drag||null}updateOnScroll(n,e){this._itemPositions.forEach(({clientRect:i})=>{Bl(i,n,e)}),this._itemPositions.forEach(({drag:i})=>{this._dragDropRegistry.isDragging(i)&&i._sortFromLastPointerPosition()})}withElementContainer(n){this._element=n}_cacheItemPositions(){let n=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let i=e.getVisibleElement();return{drag:e,offset:0,initialTransform:i.style.transform||"",clientRect:Sv(i)}}).sort((e,i)=>n?e.clientRect.left-i.clientRect.left:e.clientRect.top-i.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(n,e,i){let r=this.orientation==="horizontal",o=r?e.left-n.left:e.top-n.top;return i===-1&&(o+=r?e.width-n.width:e.height-n.height),o}_getSiblingOffsetPx(n,e,i){let r=this.orientation==="horizontal",o=e[n].clientRect,s=e[n+i*-1],a=o[r?"width":"height"]*i;if(s){let l=r?"left":"top",c=r?"right":"bottom";i===-1?a-=s.clientRect[l]-o[c]:a+=o[l]-s.clientRect[c]}return a}_shouldEnterAsFirstChild(n,e){if(!this._activeDraggables.length)return!1;let i=this._itemPositions,r=this.orientation==="horizontal";if(i[0].drag!==this._activeDraggables[0]){let s=i[i.length-1].clientRect;return r?n>=s.right:e>=s.bottom}else{let s=i[0].clientRect;return r?n<=s.left:e<=s.top}}_getItemIndexFromPointerPosition(n,e,i,r){let o=this.orientation==="horizontal",s=this._itemPositions.findIndex(({drag:a,clientRect:l})=>{if(a===n)return!1;if(r){let c=o?r.x:r.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&c===this._previousSwap.delta)return!1}return o?e>=Math.floor(l.left)&&e<Math.floor(l.right):i>=Math.floor(l.top)&&i<Math.floor(l.bottom)});return s===-1||!this._sortPredicate(s,n)?-1:s}},Cv=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(n,e){this._document=n,this._dragDropRegistry=e}start(n){let e=this._element.childNodes;this._relatedNodes=[];for(let i=0;i<e.length;i++){let r=e[i];this._relatedNodes.push([r,r.nextSibling])}this.withItems(n)}sort(n,e,i,r){let o=this._getItemIndexFromPointerPosition(n,e,i),s=this._previousSwap;if(o===-1||this._activeItems[o]===n)return null;let a=this._activeItems[o];if(s.drag===a&&s.overlaps&&s.deltaX===r.x&&s.deltaY===r.y)return null;let l=this.getItemIndex(n),c=n.getPlaceholderElement(),d=a.getRootElement();o>l?d.after(c):d.before(c),zx(this._activeItems,l,o);let h=this._getRootNode().elementFromPoint(e,i);return s.deltaX=r.x,s.deltaY=r.y,s.drag=a,s.overlaps=d===h||d.contains(h),{previousIndex:l,currentIndex:o}}enter(n,e,i,r){let o=this._activeItems.indexOf(n);o>-1&&this._activeItems.splice(o,1);let s=r==null||r<0?this._getItemIndexFromPointerPosition(n,e,i):r;s===-1&&(s=this._getClosestItemIndexToPointer(n,e,i));let a=this._activeItems[s];a&&!this._dragDropRegistry.isDragging(a)?(this._activeItems.splice(s,0,n),a.getRootElement().before(n.getPlaceholderElement())):(this._activeItems.push(n),this._element.appendChild(n.getPlaceholderElement()))}withItems(n){this._activeItems=n.slice()}withSortPredicate(n){this._sortPredicate=n}reset(){let n=this._element,e=this._previousSwap;for(let i=this._relatedNodes.length-1;i>-1;i--){let[r,o]=this._relatedNodes[i];r.parentNode===n&&r.nextSibling!==o&&(o===null?n.appendChild(r):o.parentNode===n&&n.insertBefore(r,o))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(n){return this._activeItems.indexOf(n)}getItemAtIndex(n){return this._activeItems[n]||null}updateOnScroll(){this._activeItems.forEach(n=>{this._dragDropRegistry.isDragging(n)&&n._sortFromLastPointerPosition()})}withElementContainer(n){n!==this._element&&(this._element=n,this._rootNode=void 0)}_getItemIndexFromPointerPosition(n,e,i){let r=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(i)),o=r?this._activeItems.findIndex(s=>{let a=s.getRootElement();return r===a||a.contains(r)}):-1;return o===-1||!this._sortPredicate(o,n)?-1:o}_getRootNode(){return this._rootNode||(this._rootNode=ko(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(n,e,i){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let r=1/0,o=-1;for(let s=0;s<this._activeItems.length;s++){let a=this._activeItems[s];if(a!==n){let{x:l,y:c}=a.getRootElement().getBoundingClientRect(),d=Math.hypot(e-l,i-c);d<r&&(r=d,o=s)}}return o}},jx=.05,$x=.05,xn=(function(t){return t[t.NONE=0]="NONE",t[t.UP=1]="UP",t[t.DOWN=2]="DOWN",t})(xn||{}),Zt=(function(t){return t[t.NONE=0]="NONE",t[t.LEFT=1]="LEFT",t[t.RIGHT=2]="RIGHT",t})(Zt||{});function Gx(t,n){return new xv(n,t.get(Eh),t.get(P),t.get(T),t.get(Wn))}var xv=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new E;entered=new E;exited=new E;dropped=new E;sorted=new E;receivingStarted=new E;receivingStopped=new E;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=ce.EMPTY;_verticalScrollDirection=xn.NONE;_horizontalScrollDirection=Zt.NONE;_scrollNode;_stopScrollTimers=new E;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(n,e,i,r,o){this._dragDropRegistry=e,this._ngZone=r,this._viewportRuler=o;let s=this.element=Ze(n);this._document=i,this.withOrientation("vertical").withElementContainer(s),e.registerDropContainer(this),this._parentPositions=new yh(i)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(n,e,i,r){this._draggingStarted(),r==null&&this.sortingDisabled&&(r=this._draggables.indexOf(n)),this._sortStrategy.enter(n,e,i,r),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:n,container:this,currentIndex:this.getItemIndex(n)})}exit(n){this._reset(),this.exited.next({item:n,container:this})}drop(n,e,i,r,o,s,a,l={}){this._reset(),this.dropped.next({item:n,currentIndex:e,previousIndex:i,container:this,previousContainer:r,isPointerOverContainer:o,distance:s,dropPoint:a,event:l})}withItems(n){let e=this._draggables;return this._draggables=n,n.forEach(i=>i._withDropContainer(this)),this.isDragging()&&(e.filter(r=>r.isDragging()).every(r=>n.indexOf(r)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(n){return this._direction=n,this._sortStrategy instanceof wh&&(this._sortStrategy.direction=n),this}connectedTo(n){return this._siblings=n.slice(),this}withOrientation(n){if(n==="mixed")this._sortStrategy=new Cv(this._document,this._dragDropRegistry);else{let e=new wh(this._dragDropRegistry);e.direction=this._direction,e.orientation=n,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,i)=>this.sortPredicate(e,i,this)),this}withScrollableParents(n){let e=this._container;return this._scrollableElements=n.indexOf(e)===-1?[e,...n]:n.slice(),this}withElementContainer(n){if(n===this._container)return this;let e=Ze(this.element),i=this._scrollableElements.indexOf(this._container),r=this._scrollableElements.indexOf(n);return i>-1&&this._scrollableElements.splice(i,1),r>-1&&this._scrollableElements.splice(r,1),this._sortStrategy&&this._sortStrategy.withElementContainer(n),this._cachedShadowRoot=null,this._scrollableElements.unshift(n),this._container=n,this}getScrollableParents(){return this._scrollableElements}getItemIndex(n){return this._isDragging?this._sortStrategy.getItemIndex(n):this._draggables.indexOf(n)}getItemAtIndex(n){return this._isDragging?this._sortStrategy.getItemAtIndex(n):this._draggables[n]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(n,e,i,r){if(this.sortingDisabled||!this._domRect||!Mx(this._domRect,jx,e,i))return;let o=this._sortStrategy.sort(n,e,i,r);o&&this.sorted.next({previousIndex:o.previousIndex,currentIndex:o.currentIndex,container:this,item:n})}_startScrollingIfNecessary(n,e){if(this.autoScrollDisabled)return;let i,r=xn.NONE,o=Zt.NONE;if(this._parentPositions.positions.forEach((s,a)=>{a===this._document||!s.clientRect||i||Mx(s.clientRect,jx,n,e)&&([r,o]=lB(a,s.clientRect,this._direction,n,e),(r||o)&&(i=a))}),!r&&!o){let{width:s,height:a}=this._viewportRuler.getViewportSize(),l={width:s,height:a,top:0,right:s,bottom:a,left:0};r=Wx(l,e),o=qx(l,n),i=window}i&&(r!==this._verticalScrollDirection||o!==this._horizontalScrollDirection||i!==this._scrollNode)&&(this._verticalScrollDirection=r,this._horizontalScrollDirection=o,this._scrollNode=i,(r||o)&&i?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let n=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=n.msScrollSnapType||n.scrollSnapType||"",n.scrollSnapType=n.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let n=this._container.style;n.scrollSnapType=n.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Wp(0,td).pipe(he(this._stopScrollTimers)).subscribe(()=>{let n=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===xn.UP?n.scrollBy(0,-e):this._verticalScrollDirection===xn.DOWN&&n.scrollBy(0,e),this._horizontalScrollDirection===Zt.LEFT?n.scrollBy(-e,0):this._horizontalScrollDirection===Zt.RIGHT&&n.scrollBy(e,0)})};_isOverContainer(n,e){return this._domRect!=null&&wv(this._domRect,n,e)}_getSiblingContainerFromPosition(n,e,i){return this._siblings.find(r=>r._canReceive(n,e,i))}_canReceive(n,e,i){if(!this._domRect||!wv(this._domRect,e,i)||!this.enterPredicate(n,this))return!1;let r=this._getShadowRoot().elementFromPoint(e,i);return r?r===this._container||this._container.contains(r):!1}_startReceiving(n,e){let i=this._activeSiblings;!i.has(n)&&e.every(r=>this.enterPredicate(r,this)||this._draggables.indexOf(r)>-1)&&(i.add(n),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:n,receiver:this,items:e}))}_stopReceiving(n){this._activeSiblings.delete(n),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:n,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(n=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(n);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let n=ko(this._container);this._cachedShadowRoot=n||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let n=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,n))}};function Wx(t,n){let{top:e,bottom:i,height:r}=t,o=r*$x;return n>=e-o&&n<=e+o?xn.UP:n>=i-o&&n<=i+o?xn.DOWN:xn.NONE}function qx(t,n){let{left:e,right:i,width:r}=t,o=r*$x;return n>=e-o&&n<=e+o?Zt.LEFT:n>=i-o&&n<=i+o?Zt.RIGHT:Zt.NONE}function lB(t,n,e,i,r){let o=Wx(n,r),s=qx(n,i),a=xn.NONE,l=Zt.NONE;if(o){let c=t.scrollTop;o===xn.UP?c>0&&(a=xn.UP):t.scrollHeight-c>t.clientHeight&&(a=xn.DOWN)}if(s){let c=t.scrollLeft;e==="rtl"?s===Zt.RIGHT?c<0&&(l=Zt.RIGHT):t.scrollWidth+c>t.clientWidth&&(l=Zt.LEFT):s===Zt.LEFT?c>0&&(l=Zt.LEFT):t.scrollWidth-c>t.clientWidth&&(l=Zt.RIGHT)}return[a,l]}var cB=(()=>{class t{_injector=u(B);constructor(){}createDrag(e,i){return Ux(this._injector,e,i)}createDropList(e){return Gx(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Dh=new g("CDK_DRAG_PARENT");var Yx=new g("CdkDragHandle"),Qx=(()=>{class t{element=u(O);_parentDrag=u(Dh,{optional:!0,skipSelf:!0});_dragDropRegistry=u(Eh);_stateChanges=new E;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._stateChanges.next(this)}_disabled=!1;constructor(){this._parentDrag?._addHandle(this)}ngAfterViewInit(){if(!this._parentDrag){let e=this.element.nativeElement.parentElement;for(;e;){let i=this._dragDropRegistry.getDragDirectiveForNode(e);if(i){this._parentDrag=i,i._addHandle(this);break}e=e.parentElement}}}ngOnDestroy(){this._parentDrag?._removeHandle(this),this._stateChanges.complete()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","cdkDragHandle",""]],hostAttrs:[1,"cdk-drag-handle"],inputs:{disabled:[2,"cdkDragHandleDisabled","disabled",ee]},features:[Ie([{provide:Yx,useExisting:t}])]})}return t})(),Kx=new g("CDK_DRAG_CONFIG"),Zx=new g("CdkDropList"),Xx=(()=>{class t{element=u(O);dropContainer=u(Zx,{optional:!0,skipSelf:!0});_ngZone=u(T);_viewContainerRef=u(Et);_dir=u(_t,{optional:!0});_changeDetectorRef=u(Ee);_selfHandle=u(Yx,{optional:!0,self:!0});_parentDrag=u(Dh,{optional:!0,skipSelf:!0});_dragDropRegistry=u(Eh);_destroyed=new E;_handles=new Ue([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new N;released=new N;ended=new N;entered=new N;exited=new N;dropped=new N;moved=new J(e=>{let i=this._dragRef.moved.pipe(W(r=>({source:this,pointerPosition:r.pointerPosition,event:r.event,delta:r.delta,distance:r.distance}))).subscribe(e);return()=>{i.unsubscribe()}});_injector=u(B);constructor(){let e=this.dropContainer,i=u(Kx,{optional:!0});this._dragRef=Ux(this._injector,this.element,{dragStartThreshold:i&&i.dragStartThreshold!=null?i.dragStartThreshold:5,pointerDirectionChangeThreshold:i&&i.pointerDirectionChangeThreshold!=null?i.pointerDirectionChangeThreshold:5,zIndex:i?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),i&&this._assignDefaults(i),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(he(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){st(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let i=e.rootElementSelector,r=e.freeDragPosition;i&&!i.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,r&&!r.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let i=this._handles.getValue();i.push(e),this._handles.next(i)}_removeHandle(e){let i=this._handles.getValue(),r=i.indexOf(e);r>-1&&(i.splice(r,1),this._handles.next(i))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,i=e;this.rootElementSelector&&(i=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(i||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):Ze(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let i=this._dir,r=this.dragStartDelay,o=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,s=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof r=="object"&&r?r:St(r),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(o).withPreviewTemplate(s).withPreviewContainer(this.previewContainer||"global"),i&&e.withDirection(i.value)}}),e.beforeStarted.pipe(Me(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let i=this.element.nativeElement.parentElement;for(;i;){let r=this._dragDropRegistry.getDragDirectiveForNode(i);if(r){e.withParent(r._dragRef);break}i=i.parentElement}})}_handleEvents(e){e.started.subscribe(i=>{this.started.emit({source:this,event:i.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(i=>{this.released.emit({source:this,event:i.event})}),e.ended.subscribe(i=>{this.ended.emit({source:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:i.container.data,item:this,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:i.container.data,item:this})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,isPointerOverContainer:i.isPointerOverContainer,item:this,distance:i.distance,dropPoint:i.dropPoint,event:i.event})})}_assignDefaults(e){let{lockAxis:i,dragStartDelay:r,constrainPosition:o,previewClass:s,boundaryElement:a,draggingDisabled:l,rootElementSelector:c,previewContainer:d}=e;this.disabled=l??!1,this.dragStartDelay=r||0,this.lockAxis=i||null,o&&(this.constrainPosition=o),s&&(this.previewClass=s),a&&(this.boundaryElement=a),c&&(this.rootElementSelector=c),d&&(this.previewContainer=d)}_setupHandlesListener(){this._handles.pipe(lt(e=>{let i=e.map(r=>r.element);this._selfHandle&&this.rootElementSelector&&i.push(this.element),this._dragRef.withHandles(i)}),We(e=>yt(...e.map(i=>i._stateChanges.pipe(ft(i))))),he(this._destroyed)).subscribe(e=>{let i=this._dragRef,r=e.element.nativeElement;e.disabled?i.disableHandle(r):i.enableHandle(r)})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(i,r){i&2&&H("cdk-drag-disabled",r.disabled)("cdk-drag-dragging",r._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",ee],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",Ui]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[Ie([{provide:Dh,useExisting:t}]),Ke]})}return t})(),Vx=new g("CdkDropListGroup");var Jx=(()=>{class t{element=u(O);_changeDetectorRef=u(Ee);_scrollDispatcher=u(Gn);_dir=u(_t,{optional:!0});_group=u(Vx,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new E;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=u(Ge).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new N;entered=new N;exited=new N;sorted=new N;_unsortedItems=new Set;constructor(){let e=u(Kx,{optional:!0}),i=u(B);this._dropListRef=Gx(i,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(r,o)=>this.enterPredicate(r.data,o.data),this._dropListRef.sortPredicate=(r,o,s)=>this.sortPredicate(r,o.data,s.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),t._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let i=this._latestSortedRefs.indexOf(e._dragRef);i>-1&&(this._latestSortedRefs.splice(i,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,i)=>e._dragRef.getVisibleElement().compareDocumentPosition(i._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=t._dropLists.indexOf(this);e>-1&&t._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(ft(this._dir.value),he(this._destroyed)).subscribe(i=>e.withDirection(i)),e.beforeStarted.subscribe(()=>{let i=Cr(this.connectedTo).map(r=>{if(typeof r=="string"){let o=t._dropLists.find(s=>s.id===r);return o}return r});if(this._group&&this._group._items.forEach(r=>{i.indexOf(r)===-1&&i.push(r)}),!this._scrollableParentsResolved){let r=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(o=>o.getElementRef().nativeElement);this._dropListRef.withScrollableParents(r),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let r=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(r)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=St(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(i.filter(r=>r&&r!==this).map(r=>r._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(i=>i._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(i=>{this.entered.emit({container:this,item:i.item.data,currentIndex:i.currentIndex})}),e.exited.subscribe(i=>{this.exited.emit({container:this,item:i.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(i=>{this.sorted.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,container:this,item:i.item.data})}),e.dropped.subscribe(i=>{this.dropped.emit({previousIndex:i.previousIndex,currentIndex:i.currentIndex,previousContainer:i.previousContainer.data,container:i.container.data,item:i.item.data,isPointerOverContainer:i.isPointerOverContainer,distance:i.distance,dropPoint:i.dropPoint,event:i.event}),this._changeDetectorRef.markForCheck()}),yt(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:i,draggingDisabled:r,sortingDisabled:o,listAutoScrollDisabled:s,listOrientation:a}=e;this.disabled=r??!1,this.sortingDisabled=o??!1,this.autoScrollDisabled=s??!1,this.orientation=a||"vertical",this.lockAxis=i||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(i,r){i&2&&(oe("id",r.id),H("cdk-drop-list-disabled",r.disabled)("cdk-drop-list-dragging",r._dropListRef.isDragging())("cdk-drop-list-receiving",r._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",ee],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",ee],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",ee],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",ee]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[Ie([{provide:Vx,useValue:void 0},{provide:Zx,useExisting:t}])]})}return t})();var dB=new g("CdkDragPlaceholder"),eS=(()=>{class t{templateRef=u(Lt);_drag=u(Dh,{optional:!0});data;constructor(){this._drag?._setPlaceholderTemplate(this)}ngOnDestroy(){this._drag?._resetPlaceholderTemplate(this)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["ng-template","cdkDragPlaceholder",""]],inputs:{data:"data"},features:[Ie([{provide:dB,useExisting:t}])]})}return t})();var tS=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({providers:[cB],imports:[_i]})}return t})();var cS=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,i){this._renderer=e,this._elementRef=i}setProperty(e,i){this._renderer.setProperty(this._elementRef.nativeElement,e,i)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(i){return new(i||t)(Z(ke),Z(O))};static \u0275dir=R({type:t})}return t})(),hB=(()=>{class t extends cS{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275dir=R({type:t,features:[ge]})}return t})(),Fh=new g("");var fB={provide:Fh,useExisting:rn(()=>Lh),multi:!0};function pB(){let t=mn()?mn().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var mB=new g(""),Lh=(()=>{class t extends cS{_compositionMode;_composing=!1;constructor(e,i,r){super(e,i),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!pB())}writeValue(e){let i=e??"";this.setProperty("value",i)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(i){return new(i||t)(Z(ke),Z(O),Z(mB,8))};static \u0275dir=R({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,r){i&1&&q("input",function(s){return r._handleInput(s.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(s){return r._compositionEnd(s.target.value)})},standalone:!1,features:[Ie([fB]),ge]})}return t})();function Av(t){return t==null||kv(t)===0}function kv(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Rv=new g(""),Nv=new g(""),gB=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,xh=class{static min(n){return _B(n)}static max(n){return vB(n)}static required(n){return yB(n)}static requiredTrue(n){return bB(n)}static email(n){return wB(n)}static minLength(n){return DB(n)}static maxLength(n){return EB(n)}static pattern(n){return CB(n)}static nullValidator(n){return dS()}static compose(n){return gS(n)}static composeAsync(n){return _S(n)}};function _B(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<t?{min:{min:t,actual:n.value}}:null}}function vB(t){return n=>{if(n.value==null||t==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>t?{max:{max:t,actual:n.value}}:null}}function yB(t){return Av(t.value)?{required:!0}:null}function bB(t){return t.value===!0?null:{required:!0}}function wB(t){return Av(t.value)||gB.test(t.value)?null:{email:!0}}function DB(t){return n=>{let e=n.value?.length??kv(n.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function EB(t){return n=>{let e=n.value?.length??kv(n.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function CB(t){if(!t)return dS;let n,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=t.toString(),n=t),i=>{if(Av(i.value))return null;let r=i.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function dS(t){return null}function uS(t){return t!=null}function hS(t){return Bi(t)?Oe(t):t}function fS(t){let n={};return t.forEach(e=>{n=e!=null?_(_({},n),e):n}),Object.keys(n).length===0?null:n}function pS(t,n){return n.map(e=>e(t))}function xB(t){return!t.validate}function mS(t){return t.map(n=>xB(n)?n:e=>n.validate(e))}function gS(t){if(!t)return null;let n=t.filter(uS);return n.length==0?null:function(e){return fS(pS(e,n))}}function Ov(t){return t!=null?gS(mS(t)):null}function _S(t){if(!t)return null;let n=t.filter(uS);return n.length==0?null:function(e){let i=pS(e,n).map(hS);return lr(i).pipe(W(fS))}}function Pv(t){return t!=null?_S(mS(t)):null}function nS(t,n){return t===null?[n]:Array.isArray(t)?[...t,n]:[t,n]}function vS(t){return t._rawValidators}function yS(t){return t._rawAsyncValidators}function Tv(t){return t?Array.isArray(t)?t:[t]:[]}function Sh(t,n){return Array.isArray(t)?t.includes(n):t===n}function iS(t,n){let e=Tv(n);return Tv(t).forEach(r=>{Sh(e,r)||e.push(r)}),e}function rS(t,n){return Tv(n).filter(e=>!Sh(t,e))}var Ih=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Ov(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Pv(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control?.reset(n)}hasError(n,e){return this.control?this.control.hasError(n,e):!1}getError(n,e){return this.control?this.control.getError(n,e):null}},Po=class extends Ih{name;get formDirective(){return null}get path(){return null}},Fo=class extends Ih{_parent=null;name=null;valueAccessor=null},Mv=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var bS=(()=>{class t extends Mv{constructor(e){super(e)}static \u0275fac=function(i){return new(i||t)(Z(Fo,2))};static \u0275dir=R({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,r){i&2&&H("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ge]})}return t})();var Vl="VALID",Ch="INVALID",Gs="PENDING",Hl="DISABLED",xr=class{},Th=class extends xr{value;source;constructor(n,e){super(),this.value=n,this.source=e}},zl=class extends xr{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e}},$l=class extends xr{touched;source;constructor(n,e){super(),this.touched=n,this.source=e}},Ws=class extends xr{status;source;constructor(n,e){super(),this.status=n,this.source=e}},Mh=class extends xr{source;constructor(n){super(),this.source=n}},Ah=class extends xr{source;constructor(n){super(),this.source=n}};function wS(t){return(Bh(t)?t.validators:t)||null}function SB(t){return Array.isArray(t)?Ov(t):t||null}function DS(t,n){return(Bh(n)?n.asyncValidators:t)||null}function IB(t){return Array.isArray(t)?Pv(t):t||null}function Bh(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function TB(t,n,e){let i=t.controls;if(!(n?Object.keys(i):i).length)throw new w(1e3,"");if(!i[e])throw new w(1001,"")}function MB(t,n,e){t._forEachChild((i,r)=>{if(e[r]===void 0)throw new w(1002,"")})}var kh=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return rt(this.statusReactive)}set status(n){rt(()=>this.statusReactive.set(n))}_status=Vt(()=>this.statusReactive());statusReactive=xe(void 0);get valid(){return this.status===Vl}get invalid(){return this.status===Ch}get pending(){return this.status===Gs}get disabled(){return this.status===Hl}get enabled(){return this.status!==Hl}errors;get pristine(){return rt(this.pristineReactive)}set pristine(n){rt(()=>this.pristineReactive.set(n))}_pristine=Vt(()=>this.pristineReactive());pristineReactive=xe(!0);get dirty(){return!this.pristine}get touched(){return rt(this.touchedReactive)}set touched(n){rt(()=>this.touchedReactive.set(n))}_touched=Vt(()=>this.touchedReactive());touchedReactive=xe(!1);get untouched(){return!this.touched}_events=new E;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(iS(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(iS(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(rS(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(rS(n,this._rawAsyncValidators))}hasValidator(n){return Sh(this._rawValidators,n)}hasAsyncValidator(n){return Sh(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(G(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new $l(!0,i))}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n))}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),n.onlySelf||this._parent?._updateTouched(n,i),e&&n.emitEvent!==!1&&this._events.next(new $l(!1,i))}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(G(_({},n),{sourceControl:i})),e&&n.emitEvent!==!1&&this._events.next(new zl(!1,i))}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),n.onlySelf||this._parent?._updatePristine(n,i),e&&n.emitEvent!==!1&&this._events.next(new zl(!0,i))}markAsPending(n={}){this.status=Gs;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Ws(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(G(_({},n),{sourceControl:e}))}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Hl,this.errors=null,this._forEachChild(r=>{r.disable(G(_({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Th(this.value,i)),this._events.next(new Ws(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(G(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Vl,this._forEachChild(i=>{i.enable(G(_({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(G(_({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Vl||this.status===Gs)&&this._runAsyncValidator(i,n.emitEvent)}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Th(this.value,e)),this._events.next(new Ws(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(G(_({},n),{sourceControl:e}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Hl:Vl}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=Gs,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let i=hS(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((i,r)=>i&&i._find(r),this)}getError(n,e){let i=e?this.get(e):this;return i?.errors?i.errors[n]:null}hasError(n,e){return!!this.getError(n,e)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,e,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new Ws(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,i)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?Hl:this.errors?Ch:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Gs)?Gs:this._anyControlsHaveStatus(Ch)?Ch:Vl}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,e){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new zl(this.pristine,e))}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new $l(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){Bh(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=SB(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=IB(this._rawAsyncValidators)}},Rh=class extends kh{constructor(n,e,i){super(wS(e),DS(i,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(n,e,i={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(n,e,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,e={}){MB(this,!0,n),Object.keys(n).forEach(i=>{TB(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(i=>{let r=this.controls[i];r&&r.patchValue(n[i],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(n={},e={}){this._forEachChild((i,r)=>{i.reset(n?n[r]:null,G(_({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ah(this))}getRawValue(){return this._reduceChildren({},(n,e,i)=>(n[i]=e.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(e,i)=>i._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let i=this.controls[e];i&&n(i,e)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[e,i]of Object.entries(this.controls))if(this.contains(e)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(e,i,r)=>((i.enabled||this.disabled)&&(e[r]=i.value),e))}_reduceChildren(n,e){let i=n;return this._forEachChild((r,o)=>{i=e(i,r,o)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var jh=new g("",{factory:()=>Fv}),Fv="always";function AB(t,n){return[...n.path,t]}function Nh(t,n,e=Fv){Lv(t,n),n.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(t.disabled),RB(t,n),OB(t,n),NB(t,n),kB(t,n)}function oS(t,n,e=!0){let i=()=>{};n?.valueAccessor?.registerOnChange(i),n?.valueAccessor?.registerOnTouched(i),Ph(t,n),t&&(n._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Oh(t,n){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n)})}function kB(t,n){if(n.valueAccessor.setDisabledState){let e=i=>{n.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(e),n._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Lv(t,n){let e=vS(t);n.validator!==null?t.setValidators(nS(e,n.validator)):typeof e=="function"&&t.setValidators([e]);let i=yS(t);n.asyncValidator!==null?t.setAsyncValidators(nS(i,n.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();Oh(n._rawValidators,r),Oh(n._rawAsyncValidators,r)}function Ph(t,n){let e=!1;if(t!==null){if(n.validator!==null){let r=vS(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(n.asyncValidator!==null){let r=yS(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==n.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let i=()=>{};return Oh(n._rawValidators,i),Oh(n._rawAsyncValidators,i),e}function RB(t,n){n.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ES(t,n)})}function NB(t,n){n.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ES(t,n),t.updateOn!=="submit"&&t.markAsTouched()})}function ES(t,n){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function OB(t,n){let e=(i,r)=>{n.valueAccessor.writeValue(i),r&&n.viewToModelUpdate(i)};t.registerOnChange(e),n._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function CS(t,n){t==null,Lv(t,n)}function PB(t,n){return Ph(t,n)}function FB(t,n){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue)}function LB(t){return Object.getPrototypeOf(t.constructor)===hB}function xS(t,n){t._syncPendingControls(),n.forEach(e=>{let i=e.control;i.updateOn==="submit"&&i._pendingChange&&(e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function BB(t,n){if(!n)return null;Array.isArray(n);let e,i,r;return n.forEach(o=>{o.constructor===Lh?e=o:LB(o)?i=o:r=o}),r||i||e||null}function jB(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}var VB={provide:Po,useExisting:rn(()=>Bv)},Ul=Promise.resolve(),Bv=(()=>{class t extends Po{callSetDisabledState;get submitted(){return rt(this.submittedReactive)}_submitted=Vt(()=>this.submittedReactive());submittedReactive=xe(!1);_directives=new Set;form;ngSubmit=new N;options;constructor(e,i,r){super(),this.callSetDisabledState=r,this.form=new Rh({},Ov(e),Pv(i))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ul.then(()=>{let i=this._findContainer(e.path);e.control=i.registerControl(e.name,e.control),Nh(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ul.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ul.then(()=>{let i=this._findContainer(e.path),r=new Rh({});CS(r,e),i.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ul.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,i){Ul.then(()=>{this.form.get(e.path).setValue(i)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),xS(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Mh(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(i){return new(i||t)(Z(Rv,10),Z(Nv,10),Z(jh,8))};static \u0275dir=R({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(i,r){i&1&&q("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ie([VB]),ge]})}return t})();function sS(t,n){let e=t.indexOf(n);e>-1&&t.splice(e,1)}function aS(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var SS=class extends kh{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,i){super(wS(e),DS(i,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Bh(e)&&(e.nonNullable||e.initialValueIsDefault)&&(aS(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(n,e={}){this.setValue(n,e)}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ah(this))}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){sS(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){sS(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){aS(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var HB=t=>t instanceof SS;var UB={provide:Fo,useExisting:rn(()=>jv)},lS=Promise.resolve(),jv=(()=>{class t extends Fo{_changeDetectorRef;callSetDisabledState;control=new SS;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new N;constructor(e,i,r,o,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(i),this._setAsyncValidators(r),this.valueAccessor=BB(this,o)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let i=e.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),FB(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Nh(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){lS.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let i=e.isDisabled.currentValue,r=i!==0&&ee(i);lS.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?AB(e,this._parent):[e]}static \u0275fac=function(i){return new(i||t)(Z(Po,9),Z(Rv,10),Z(Nv,10),Z(Fh,10),Z(Ee,8),Z(jh,8))};static \u0275dir=R({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[Ie([UB]),ge,Ke]})}return t})();var zB=(()=>{class t extends Po{callSetDisabledState;get submitted(){return rt(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=Vt(()=>this._submittedReactive());_submittedReactive=xe(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,i,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(i)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Ph(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let i=this.form.get(e.path);return Nh(i,e,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),i}getControl(e){return this.form.get(e.path)}removeControl(e){oS(e.control||null,e,!1),jB(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,i){this.form.get(e.path).setValue(i)}onReset(){this.resetForm()}resetForm(e=void 0,i={}){this.form.reset(e,i),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,xS(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Mh(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let i=e.control,r=this.form.get(e.path);i!==r&&(oS(i||null,e),HB(r)&&(Nh(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let i=this.form.get(e.path);CS(i,e),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let i=this.form?.get(e.path);i&&PB(i,e)&&i.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){Lv(this.form,this),this._oldForm&&Ph(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||t)(Z(Rv,10),Z(Nv,10),Z(jh,8))};static \u0275dir=R({type:t,features:[ge,Ke]})}return t})();var $B={provide:Po,useExisting:rn(()=>Vv)},Vv=(()=>{class t extends zB{form=null;ngSubmit=new N;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275dir=R({type:t,selectors:[["","formGroup",""]],hostBindings:function(i,r){i&1&&q("submit",function(s){return r.onSubmit(s)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[Ie([$B]),ge]})}return t})();var GB=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();var IS=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:jh,useValue:e.callSetDisabledState??Fv}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[GB]})}return t})();var Gl=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this)}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(n){this._attachedHost=n}},Sr=class extends Gl{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,i,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=i,this.projectableNodes=r,this.bindings=o||null}},Ir=class extends Gl{templateRef;viewContainerRef;context;injector;constructor(n,e,i,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=i,this.injector=r}get origin(){return this.templateRef.elementRef}attach(n,e=this.context){return this.context=e,super.attach(n)}detach(){return this.context=void 0,super.detach()}},Hv=class extends Gl{element;constructor(n){super(),this.element=n instanceof O?n.nativeElement:n}},qs=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(n){if(n instanceof Sr)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Ir)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof Hv)return this._attachedPortal=n,this.attachDomPortal(n)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(n){this._disposeFn=n}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Vh=class extends qs{outletElement;_appRef;_defaultInjector;constructor(n,e,i){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=i}attachComponentPortal(n){let e;if(n.viewContainerRef){let i=n.injector||n.viewContainerRef.injector,r=i.get(hi,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:i,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,r=n.injector||this._defaultInjector||B.NULL,o=r.get(Fe,i.injector);e=eh(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e}attachTemplatePortal(n){let e=n.viewContainerRef,i=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return i.rootNodes.forEach(r=>this.outletElement.appendChild(r)),i.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(i);r!==-1&&e.remove(r)}),this._attachedPortal=n,i}attachDomPortal=n=>{let e=n.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(n){return n.hostView.rootNodes[0]}};var qi=(()=>{class t extends qs{_moduleRef=u(hi,{optional:!0});_document=u(P);_viewContainerRef=u(Et);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new N;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),i.parentNode.insertBefore(r,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(i,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[ge]})}return t})(),qn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();var Wl;function TS(){if(Wl==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Wl=!0}))}finally{Wl=Wl||!1}return Wl}function Ys(t){return TS()?t:!!t.capture}var MS=new g("cdk-input-modality-detector-options"),AS={ignoreKeys:[18,17,224,91,16]},kS=650,Uv={passive:!0,capture:!0},RS=(()=>{class t{_platform=u(_e);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Ue(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=xt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<kS||(this._modality.next(Ro(e)?"keyboard":"mouse"),this._mostRecentTarget=xt(e))};_onTouchstart=e=>{if(No(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=xt(e)};constructor(){let e=u(T),i=u(P),r=u(MS,{optional:!0});if(this._options=_(_({},AS),r),this.modalityDetected=this._modality.pipe($a(1)),this.modalityChanged=this.modalityDetected.pipe(wd()),this._platform.isBrowser){let o=u(qe).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(i,"keydown",this._onKeydown,Uv),o.listen(i,"mousedown",this._onMousedown,Uv),o.listen(i,"touchstart",this._onTouchstart,Uv)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ql=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ql||{}),NS=new g("cdk-focus-monitor-default-options"),Hh=Ys({passive:!0,capture:!0}),Xt=(()=>{class t{_ngZone=u(T);_platform=u(_e);_inputModalityDetector=u(RS);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=u(P);_stopInputModalityDetector=new E;constructor(){let e=u(NS,{optional:!0});this._detectionMode=e?.detectionMode||ql.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=xt(e);for(let r=i;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,i=!1){let r=Ze(e);if(!this._platform.isBrowser||r.nodeType!==1)return j();let o=ko(r)||this._document,s=this._elementInfo.get(r);if(s)return i&&(s.checkChildren=!0),s.subject;let a={checkChildren:i,subject:new E,rootNode:o};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let i=Ze(e),r=this._elementInfo.get(i);r&&(r.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(r))}focusVia(e,i,r){let o=Ze(e),s=this._document.activeElement;o===s?this._getClosestElementsInfo(o).forEach(([a,l])=>this._originChanged(a,i,l)):(this._setOrigin(i),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ql.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===ql.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?kS:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,i){let r=this._elementInfo.get(i),o=xt(e);!r||!r.checkChildren&&i!==o||this._originChanged(i,this._getFocusOrigin(o),r)}_onBlur(e,i){let r=this._elementInfo.get(i);!r||r.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(r,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,r=this._rootNodeFocusListenerCount.get(i)||0;r||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,Hh),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,Hh)}),this._rootNodeFocusListenerCount.set(i,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(he(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let r=this._rootNodeFocusListenerCount.get(i);r>1?this._rootNodeFocusListenerCount.set(i,r-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Hh),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Hh),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,r){this._setClasses(e,i),this._emitOrigin(r,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&i.push([o,r])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let s=0;s<o.length;s++)if(o[s].contains(i))return!0}return!1}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Qs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Uh;function qB(){if(Uh===void 0&&(Uh=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Uh=t.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}))}return Uh}function Ks(t){return qB()?.createHTML(t)||t}var OS=new Set,Lo,Tr=(()=>{class t{_platform=u(_e);_nonce=u(Os,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):QB}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&YB(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function YB(t,n){if(!OS.has(t))try{Lo||(Lo=document.createElement("style"),n&&Lo.setAttribute("nonce",n),Lo.setAttribute("type","text/css"),document.head.appendChild(Lo)),Lo.sheet&&(Lo.sheet.insertRule(`@media ${t} {body{ }}`,0),OS.add(t))}catch(e){console.error(e)}}function QB(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var Yl=(()=>{class t{_mediaMatcher=u(Tr);_zone=u(T);_queries=new Map;_destroySubject=new E;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return PS(Cr(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=PS(Cr(e)).map(s=>this._registerQuery(s).observable),o=or(r);return o=ar(o.pipe(Me(1)),o.pipe($a(1),Ti(0))),o.pipe(W(s=>{let a={matches:!1,breakpoints:{}};return s.forEach(({matches:l,query:c})=>{a.matches=a.matches||l,a.breakpoints[c]=l}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),o={observable:new J(s=>{let a=l=>this._zone.run(()=>s.next(l));return i.addListener(a),()=>{i.removeListener(a)}}).pipe(ft(i),W(({matches:s})=>({query:e,matches:s})),he(this._destroySubject)),mql:i};return this._queries.set(e,o),o}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function PS(t){return t.map(n=>n.split(",")).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function KB(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var FS=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),LS=(()=>{class t{_mutationObserverFactory=u(FS);_observedElements=new Map;_ngZone=u(T);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=Ze(e);return new J(r=>{let s=this._observeElement(i).pipe(W(a=>a.filter(l=>!KB(l))),re(a=>!!a.length)).subscribe(a=>{this._ngZone.run(()=>{r.next(a)})});return()=>{s.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new E,r=this._mutationObserverFactory.create(o=>i.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:r}=this._observedElements.get(e);i&&i.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),BS=(()=>{class t{_contentObserver=u(LS);_elementRef=u(O);event=new N;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=St(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Ti(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",ee],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Zs=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({providers:[FS]})}return t})();var Xs=(()=>{class t{_platform=u(_e);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return XB(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=ZB(sj(e));if(i&&(jS(i)===-1||!this.isVisible(i)))return!1;let r=e.nodeName.toLowerCase(),o=jS(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!rj(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return oj(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function ZB(t){try{return t.frameElement}catch(n){return null}}function XB(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function JB(t){let n=t.nodeName.toLowerCase();return n==="input"||n==="select"||n==="button"||n==="textarea"}function ej(t){return nj(t)&&t.type=="hidden"}function tj(t){return ij(t)&&t.hasAttribute("href")}function nj(t){return t.nodeName.toLowerCase()=="input"}function ij(t){return t.nodeName.toLowerCase()=="a"}function US(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let n=t.getAttribute("tabindex");return!!(n&&!isNaN(parseInt(n,10)))}function jS(t){if(!US(t))return null;let n=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(n)?-1:n}function rj(t){let n=t.nodeName.toLowerCase(),e=n==="input"&&t.type;return e==="text"||e==="password"||n==="select"||n==="textarea"}function oj(t){return ej(t)?!1:JB(t)||tj(t)||t.hasAttribute("contenteditable")||US(t)}function sj(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var zh=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,r,o=!1,s){this._element=n,this._checker=e,this._ngZone=i,this._document=r,this._injector=s,o||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener("focus",this.startAnchorListener),n.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary("start");return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary("end");return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(r)return r}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let r=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(r)return r}return null}_createAnchor(){let n=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add("cdk-visually-hidden"),n.classList.add("cdk-focus-trap-anchor"),n.setAttribute("aria-hidden","true"),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){this._injector?st(n,{injector:this._injector}):setTimeout(n)}},Ql=(()=>{class t{_checker=u(Xs);_ngZone=u(T);_document=u(P);_injector=u(B);constructor(){u(Ye).load(Qs)}create(e,i=!1){return new zh(e,this._checker,this._ngZone,this._document,i,this._injector)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Mr=(function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t})(Mr||{}),VS="cdk-high-contrast-black-on-white",HS="cdk-high-contrast-white-on-black",zv="cdk-high-contrast-active",zS=(()=>{class t{_platform=u(_e);_hasCheckedHighContrastMode=!1;_document=u(P);_breakpointSubscription;constructor(){this._breakpointSubscription=u(Yl).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return Mr.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,r=i&&i.getComputedStyle?i.getComputedStyle(e):null,o=(r&&r.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return Mr.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return Mr.BLACK_ON_WHITE}return Mr.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(zv,VS,HS),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===Mr.BLACK_ON_WHITE?e.add(zv,VS):i===Mr.WHITE_ON_BLACK&&e.add(zv,HS)}}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Kl=(()=>{class t{constructor(){u(zS)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Zs]})}return t})();function $v(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function ht(t){return t==null?"":typeof t=="string"?t:`${t}px`}function sn(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var $S=vh();function Ar(t){return new $h(t.get(Wn),t.get(P))}var $h=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=ht(-this._previousScrollPosition.left),n.style.top=ht(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,i=n.style,r=e.style,o=i.scrollBehavior||"",s=r.scrollBehavior||"";this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),$S&&(i.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),$S&&(i.scrollBehavior=o,r.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function ZS(t,n){return new Gh(t.get(Gn),t.get(T),t.get(Wn),n)}var Gh=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,i,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(re(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=n.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Zl=class{enable(){}disable(){}attach(){}};function Gv(t,n){return n.some(e=>{let i=t.bottom<e.top,r=t.top>e.bottom,o=t.right<e.left,s=t.left>e.right;return i||r||o||s})}function GS(t,n){return n.some(e=>{let i=t.top<e.top,r=t.bottom>e.bottom,o=t.left<e.left,s=t.right>e.right;return i||r||o||s})}function Kh(t,n){return new Wh(t.get(Gn),t.get(Wn),t.get(T),n)}var Wh=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,i,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=i,this._config=r}attach(n){this._overlayRef,this._overlayRef=n}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:r}=this._viewportRuler.getViewportSize();Gv(e,[{width:i,height:r,bottom:r,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},XS=(()=>{class t{_injector=u(B);constructor(){}noop=()=>new Zl;close=e=>ZS(this._injector,e);block=()=>Ar(this._injector);reposition=e=>Kh(this._injector,e);static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Js=class{positionStrategy;scrollStrategy=new Zl;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let i of e)n[i]!==void 0&&(this[i]=n[i])}}};var qh=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e}};var JS=(()=>{class t{_attachedOverlays=[];_document=u(P);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),eI=(()=>{class t extends JS{_ngZone=u(T);_renderer=u(qe).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let r=i.length-1;r>-1;r--){let o=i[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),tI=(()=>{class t extends JS{_platform=u(_e);_ngZone=u(T);_renderer=u(qe).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(i,"pointerdown",this._pointerDownListener,r),o.listen(i,"click",this._clickListener,r),o.listen(i,"auxclick",this._clickListener,r),o.listen(i,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=xt(e)};_clickListener=e=>{let i=xt(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let s=o.length-1;s>-1;s--){let a=o[s],l=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,l))){if(WS(a.overlayElement,i)||WS(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>l.next(e)):l.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function WS(t,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,i=n;for(;i;){if(i===t)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var nI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),Zh=(()=>{class t{_platform=u(_e);_containerElement;_document=u(P);_styleLoader=u(Ye);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||$v()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove()}let i=this._document.createElement("div");i.classList.add(e),$v()?i.setAttribute("platform","test"):this._platform.isBrowser||i.setAttribute("platform","server"),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(nI)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wv=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,i,r){this._renderer=e,this._ngZone=i,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function qv(t){return t&&t.nodeType===1}var ea=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new E;_attachments=new E;_detachments=new E;_positionStrategy;_scrollStrategy;_locationChanges=ce.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new E;_outsidePointerEvents=new E;_afterNextRenderRef;constructor(n,e,i,r,o,s,a,l,c,d=!1,h,f){this._portalOutlet=n,this._host=e,this._pane=i,this._config=r,this._ngZone=o,this._keyboardDispatcher=s,this._document=a,this._location=l,this._outsideClickDispatcher=c,this._animationsDisabled=d,this._injector=h,this._renderer=f,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=st(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()))}updateSize(n){this._config=_(_({},this._config),n),this._updateElementSize()}setDirection(n){this._config=G(_({},this._config),{direction:n}),this._updateElementDirection()}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0)}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1)}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr"}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=ht(this._config.width),n.height=ht(this._config.height),n.minWidth=ht(this._config.minWidth),n.minHeight=ht(this._config.minHeight),n.maxWidth=ht(this._config.maxWidth),n.maxHeight=ht(this._config.maxHeight)}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none"}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;qv(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch(n){}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new Wv(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n))}):this._backdropRef.element.classList.add(n)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(n,e,i){let r=Cr(e||[]).filter(o=>!!o);r.length&&(i?n.classList.add(...r):n.classList.remove(...r))}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=st(()=>{n=!0,this._detachContent()},{injector:this._injector})}catch(e){if(n)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.()}},qS="cdk-overlay-connected-position-bounding-box",aj=/([A-Za-z%]+)$/;function Xh(t,n){return new Yh(n,t.get(Wn),t.get(P),t.get(_e),t.get(Zh))}var Yh=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new E;_resizeSubscription=ce.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(n,e,i,r,o){this._viewportRuler=e,this._document=i,this._platform=r,this._overlayContainer=o,this.setOrigin(n)}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(qS),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,i=this._viewportRect,r=this._containerRect,o=[],s;for(let a of this._preferredPositions){let l=this._getOriginPoint(n,r,a),c=this._getOverlayPoint(l,e,a),d=this._getOverlayFit(c,e,i,a);if(d.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,l);return}if(this._canFitWithFlexibleDimensions(d,c,i)){o.push({position:a,origin:l,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(l,a)});continue}(!s||s.overlayFit.visibleArea<d.visibleArea)&&(s={overlayFit:d,overlayPoint:c,originPoint:l,position:a,overlayRect:e})}if(o.length){let a=null,l=-1;for(let c of o){let d=c.boundingBoxRect.width*c.boundingBoxRect.height*(c.position.weight||1);d>l&&(l=d,a=c)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&Bo(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(qS),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply()}withScrollableContainers(n){return this._scrollables=n,this}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(n){return this._viewportMargin=n,this}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this}withPush(n=!0){return this._canPush=n,this}withLockedPosition(n=!0){return this._positionLocked=n,this}setOrigin(n){return this._origin=n,this}withDefaultOffsetX(n){return this._offsetX=n,this}withDefaultOffsetY(n){return this._offsetY=n,this}withTransformOriginOn(n){return this._transformOriginSelector=n,this}withPopoverLocation(n){return this._popoverLocation=n,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof O?this._origin.nativeElement:qv(this._origin)?this._origin:null}_getOriginPoint(n,e,i){let r;if(i.originX=="center")r=n.left+n.width/2;else{let s=this._isRtl()?n.right:n.left,a=this._isRtl()?n.left:n.right;r=i.originX=="start"?s:a}e.left<0&&(r-=e.left);let o;return i.originY=="center"?o=n.top+n.height/2:o=i.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o}}_getOverlayPoint(n,e,i){let r;i.overlayX=="center"?r=-e.width/2:i.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return i.overlayY=="center"?o=-e.height/2:o=i.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o}}_getOverlayFit(n,e,i,r){let o=QS(e),{x:s,y:a}=n,l=this._getOffset(r,"x"),c=this._getOffset(r,"y");l&&(s+=l),c&&(a+=c);let d=0-s,h=s+o.width-i.width,f=0-a,p=a+o.height-i.height,m=this._subtractOverflows(o.width,d,h),b=this._subtractOverflows(o.height,f,p),C=m*b;return{visibleArea:C,isCompletelyWithinViewport:o.width*o.height===C,fitsInViewportVertically:b===o.height,fitsInViewportHorizontally:m==o.width}}_canFitWithFlexibleDimensions(n,e,i){if(this._hasFlexibleDimensions){let r=i.bottom-e.y,o=i.right-e.x,s=YS(this._overlayRef.getConfig().minHeight),a=YS(this._overlayRef.getConfig().minWidth),l=n.fitsInViewportVertically||s!=null&&s<=r,c=n.fitsInViewportHorizontally||a!=null&&a<=o;return l&&c}return!1}_pushOverlayOnScreen(n,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=QS(e),o=this._viewportRect,s=Math.max(n.x+r.width-o.width,0),a=Math.max(n.y+r.height-o.height,0),l=Math.max(o.top-i.top-n.y,0),c=Math.max(o.left-i.left-n.x,0),d=0,h=0;return r.width<=o.width?d=c||-s:d=n.x<this._getViewportMarginStart()?o.left-i.left-n.x:0,r.height<=o.height?h=l||-a:h=n.y<this._getViewportMarginTop()?o.top-i.top-n.y:0,this._previousPushAmount={x:d,y:h},{x:n.x+d,y:n.y+h}}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!lj(this._lastScrollVisibility,i)){let r=new qh(n,i);this._positionChanges.next(r)}this._lastScrollVisibility=i}this._lastPosition=n,this._isInitialRender=!1}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,r=n.overlayY;n.overlayX==="center"?i="center":this._isRtl()?i=n.overlayX==="start"?"right":"left":i=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${i} ${r}`}_calculateBoundingBoxRect(n,e){let i=this._viewportRect,r=this._isRtl(),o,s,a;if(e.overlayY==="top")s=n.y,o=i.height-s+this._getViewportMarginBottom();else if(e.overlayY==="bottom")a=i.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=i.height-a+this._getViewportMarginTop();else{let p=Math.min(i.bottom-n.y+i.top,n.y),m=this._lastBoundingBoxSize.height;o=p*2,s=n.y-p,o>m&&!this._isInitialRender&&!this._growAfterOpen&&(s=n.y-m/2)}let l=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,c=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,d,h,f;if(c)f=i.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),d=n.x-this._getViewportMarginStart();else if(l)h=n.x,d=i.right-n.x-this._getViewportMarginEnd();else{let p=Math.min(i.right-n.x+i.left,n.x),m=this._lastBoundingBoxSize.width;d=p*2,h=n.x-p,d>m&&!this._isInitialRender&&!this._growAfterOpen&&(h=n.x-m/2)}return{top:s,left:h,bottom:a,right:f,width:d,height:o}}_setBoundingBoxStyles(n,e){let i=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;r.width=ht(i.width),r.height=ht(i.height),r.top=ht(i.top)||"auto",r.bottom=ht(i.bottom)||"auto",r.left=ht(i.left)||"auto",r.right=ht(i.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=ht(o)),s&&(r.maxWidth=ht(s))}this._lastBoundingBoxSize=i,Bo(this._boundingBox.style,r)}_resetBoundingBoxStyles(){Bo(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){Bo(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(n,e){let i={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(r){let d=this._viewportRuler.getViewportScrollPosition();Bo(i,this._getExactOverlayY(e,n,d)),Bo(i,this._getExactOverlayX(e,n,d))}else i.position="static";let a="",l=this._getOffset(e,"x"),c=this._getOffset(e,"y");l&&(a+=`translateX(${l}px) `),c&&(a+=`translateY(${c}px)`),i.transform=a.trim(),s.maxHeight&&(r?i.maxHeight=ht(s.maxHeight):o&&(i.maxHeight="")),s.maxWidth&&(r?i.maxWidth=ht(s.maxWidth):o&&(i.maxWidth="")),Bo(this._pane.style,i)}_getExactOverlayY(n,e,i){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i)),n.overlayY==="bottom"){let s=this._document.documentElement.clientHeight;r.bottom=`${s-(o.y+this._overlayRect.height)}px`}else r.top=ht(o.y);return r}_getExactOverlayX(n,e,i){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,i));let s;if(this._isRtl()?s=n.overlayX==="end"?"left":"right":s=n.overlayX==="end"?"right":"left",s==="right"){let a=this._document.documentElement.clientWidth;r.right=`${a-(o.x+this._overlayRect.width)}px`}else r.left=ht(o.x);return r}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:GS(n,i),isOriginOutsideView:Gv(n,i),isOverlayClipped:GS(e,i),isOverlayOutsideView:Gv(e,i)}}_subtractOverflows(n,...e){return e.reduce((i,r)=>i-Math.max(r,0),n)}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+n-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY}_validatePositions(){}_addPanelClasses(n){this._pane&&Cr(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let n=this._origin;if(n instanceof O)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,i=n.height||0;return{top:n.y,bottom:n.y+i,left:n.x,right:n.x+e,height:i,width:e}}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let i=e.getBoundingClientRect();return n&&(e.style.display=""),i}};function Bo(t,n){for(let e in n)n.hasOwnProperty(e)&&(t[e]=n[e]);return t}function YS(t){if(typeof t!="number"&&t!=null){let[n,e]=t.split(aj);return!e||e==="px"?parseFloat(n):null}return t||null}function QS(t){return{top:Math.floor(t.top),right:Math.floor(t.right),bottom:Math.floor(t.bottom),left:Math.floor(t.left),width:Math.floor(t.width),height:Math.floor(t.height)}}function lj(t,n){return t===n?!0:t.isOriginClipped===n.isOriginClipped&&t.isOriginOutsideView===n.isOriginOutsideView&&t.isOverlayClipped===n.isOverlayClipped&&t.isOverlayOutsideView===n.isOverlayOutsideView}var KS="cdk-global-overlay-wrapper";function kr(t){return new Qh}var Qh=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(KS),this._isDisposed=!1}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this}left(n=""){return this._xOffset=n,this._xPosition="left",this}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this}right(n=""){return this._xOffset=n,this._xPosition="right",this}start(n=""){return this._xOffset=n,this._xPosition="start",this}end(n=""){return this._xOffset=n,this._xPosition="end",this}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this}centerVertically(n=""){return this.top(n),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,i=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:s,maxHeight:a}=i,l=(r==="100%"||r==="100vw")&&(!s||s==="100%"||s==="100vw"),c=(o==="100%"||o==="100vh")&&(!a||a==="100%"||a==="100vh"),d=this._xPosition,h=this._xOffset,f=this._overlayRef.getConfig().direction==="rtl",p="",m="",b="";l?b="flex-start":d==="center"?(b="center",f?m=h:p=h):f?d==="left"||d==="end"?(b="flex-end",p=h):(d==="right"||d==="start")&&(b="flex-start",m=h):d==="left"||d==="start"?(b="flex-start",p=h):(d==="right"||d==="end")&&(b="flex-end",m=h),n.position=this._cssPosition,n.marginLeft=l?"0":p,n.marginTop=c?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=l?"0":m,e.justifyContent=b,e.alignItems=c?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(KS),i.justifyContent=i.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0}},iI=(()=>{class t{_injector=u(B);constructor(){}global(){return kr()}flexibleConnectedTo(e){return Xh(this._injector,e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),rI=new g("OVERLAY_DEFAULT_CONFIG");function ta(t,n){t.get(Ye).load(nI);let e=t.get(Zh),i=t.get(P),r=t.get(Ge),o=t.get(Bt),s=t.get(_t),a=t.get(ke,null,{optional:!0})||t.get(qe).createRenderer(null,null),l=new Js(n),c=t.get(rI,null,{optional:!0})?.usePopover??!0;l.direction=l.direction||s.value,"showPopover"in i.body?l.usePopover=n?.usePopover??c:l.usePopover=!1;let d=i.createElement("div"),h=i.createElement("div");d.id=r.getId("cdk-overlay-"),d.classList.add("cdk-overlay-pane"),h.appendChild(d),l.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let f=l.usePopover?l.positionStrategy?.getPopoverInsertionPoint?.():null;return qv(f)?f.after(h):f?.type==="parent"?f.element.appendChild(h):e.getContainerElement().appendChild(h),new ea(new Vh(d,o,t),h,d,l,t.get(T),t.get(eI),i,t.get(mi),t.get(tI),n?.disableAnimations??t.get(Dr,null,{optional:!0})==="NoopAnimations",t.get(Fe),a)}var oI=(()=>{class t{scrollStrategies=u(XS);_positionBuilder=u(iI);_injector=u(B);constructor(){}create(e){return ta(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var jo=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({providers:[oI],imports:[Ce,qn,gv,gv]})}return t})();function cj(t,n){}var Rr=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var Jl=(()=>{class t extends qs{_elementRef=u(O);_focusTrapFactory=u(Ql);_config;_interactivityChecker=u(Xs);_ngZone=u(T);_focusMonitor=u(Xt);_renderer=u(ke);_changeDetectorRef=u(Ee);_injector=u(B);_platform=u(_e);_document=u(P);_portalOutlet;_focusTrapped=new E;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=u(Rr,{optional:!0})||new Rr,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let i=this._ariaLabelledByQueue.indexOf(e);i>-1&&(this._ariaLabelledByQueue.splice(i,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),i}attachTemplatePortal(e){this._portalOutlet.hasAttached();let i=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),i}attachDomPortal=e=>{this._portalOutlet.hasAttached();let i=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),i};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_trapFocus(e){this._isDestroyed||st(()=>{let i=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||i.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,i=null;if(typeof e=="string"?i=this._document.querySelector(e):typeof e=="boolean"?i=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(i=e),this._config.restoreFocus&&i&&typeof i.focus=="function"){let r=Us(),o=this._elementRef.nativeElement;(!r||r===this._document.body||r===o||o.contains(r))&&(this._focusMonitor?(this._focusMonitor.focusVia(i,this._closeInteractionType),this._closeInteractionType=null):i.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,i=Us();return e===i||e.contains(i)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=Us()))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["cdk-dialog-container"]],viewQuery:function(i,r){if(i&1&&it(qi,7),i&2){let o;z(o=$())&&(r._portalOutlet=o.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(i,r){i&2&&oe("id",r._config.id||null)("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null)},features:[ge],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&kt(0,cj,0,0,"ng-template",0)},dependencies:[qi],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return t})(),Xl=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new E;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(n,e){this.overlayRef=n,this.config=e,this.disableClose=e.disableClose,this.backdropClick=n.backdropClick(),this.keydownEvents=n.keydownEvents(),this.outsidePointerEvents=n.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(i=>{i.keyCode===27&&!this.disableClose&&!sn(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=n.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(n,e){if(this._canClose(n)){let i=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(n),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(n="",e=""){return this.overlayRef.updateSize({width:n,height:e}),this}addPanelClass(n){return this.overlayRef.addPanelClass(n),this}removePanelClass(n){return this.overlayRef.removePanelClass(n),this}_canClose(n){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(n,e,this.componentInstance))}},dj=new g("DialogScrollStrategy",{providedIn:"root",factory:()=>{let t=u(B);return()=>Ar(t)}}),uj=new g("DialogData"),hj=new g("DefaultDialogConfig");function fj(t){let n=xe(t),e=new N;return{valueSignal:n,get value(){return n()},change:e,ngOnDestroy(){e.complete()}}}var ec=(()=>{class t{_injector=u(B);_defaultOptions=u(hj,{optional:!0});_parentDialog=u(t,{optional:!0,skipSelf:!0});_overlayContainer=u(Zh);_idGenerator=u(Ge);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new E;_afterOpenedAtThisLevel=new E;_ariaHiddenElements=new Map;_scrollStrategy=u(dj);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Ii(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ft(void 0)));constructor(){}open(e,i){let r=this._defaultOptions||new Rr;i=_(_({},r),i),i.id=i.id||this._idGenerator.getId("cdk-dialog-"),i.id&&this.getDialogById(i.id);let o=this._getOverlayConfig(i),s=ta(this._injector,o),a=new Xl(s,i),l=this._attachContainer(s,a,i);if(a.containerInstance=l,!this.openDialogs.length){let c=this._overlayContainer.getContainerElement();l._focusTrapped?l._focusTrapped.pipe(Me(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(c)}):this._hideNonDialogContentFromAssistiveTechnology(c)}return this._attachDialogContent(e,a,l,i),this.openDialogs.push(a),a.closed.subscribe(()=>this._removeOpenDialog(a,!0)),this.afterOpened.next(a),a}closeAll(){Yv(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){Yv(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),Yv(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let i=new Js({positionStrategy:e.positionStrategy||kr().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(i.backdropClass=e.backdropClass),i}_attachContainer(e,i,r){let o=r.injector||r.viewContainerRef?.injector,s=[{provide:Rr,useValue:r},{provide:Xl,useValue:i},{provide:ea,useValue:e}],a;r.container?typeof r.container=="function"?a=r.container:(a=r.container.type,s.push(...r.container.providers(r))):a=Jl;let l=new Sr(a,r.viewContainerRef,B.create({parent:o||this._injector,providers:s}));return e.attach(l).instance}_attachDialogContent(e,i,r,o){if(e instanceof Lt){let s=this._createInjector(o,i,r,void 0),a={$implicit:o.data,dialogRef:i};o.templateContext&&(a=_(_({},a),typeof o.templateContext=="function"?o.templateContext():o.templateContext)),r.attachTemplatePortal(new Ir(e,null,a,s))}else{let s=this._createInjector(o,i,r,this._injector),a=r.attachComponentPortal(new Sr(e,o.viewContainerRef,s));i.componentRef=a,i.componentInstance=a.instance}}_createInjector(e,i,r,o){let s=e.injector||e.viewContainerRef?.injector,a=[{provide:uj,useValue:e.data},{provide:Xl,useValue:i}];return e.providers&&(typeof e.providers=="function"?a.push(...e.providers(i,e,r)):a.push(...e.providers)),e.direction&&(!s||!s.get(_t,null,{optional:!0}))&&a.push({provide:_t,useValue:fj(e.direction)}),B.create({parent:s||o,providers:a})}_removeOpenDialog(e,i){let r=this.openDialogs.indexOf(e);r>-1&&(this.openDialogs.splice(r,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((o,s)=>{o?s.setAttribute("aria-hidden",o):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),i&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let i=e.parentElement.children;for(let r=i.length-1;r>-1;r--){let o=i[r];o!==e&&o.nodeName!=="SCRIPT"&&o.nodeName!=="STYLE"&&!o.hasAttribute("aria-live")&&!o.hasAttribute("popover")&&(this._ariaHiddenElements.set(o,o.getAttribute("aria-hidden")),o.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Yv(t,n){let e=t.length;for(;e--;)n(t[e])}var Jh=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({providers:[ec],imports:[jo,qn,Kl,qn]})}return t})();var Vo={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};var mj=new g("MATERIAL_ANIMATIONS"),sI=null;function gj(){return u(mj,{optional:!0})?.animationsDisabled||u(Dr,{optional:!0})==="NoopAnimations"?"di-disabled":(sI??=u(Tr).matchMedia("(prefers-reduced-motion)").matches,sI?"reduced-motion":"enabled")}function Ve(){return gj()!=="enabled"}function _j(t,n){}var aI="_mat-bottom-sheet-enter",lI="_mat-bottom-sheet-exit",vj=(()=>{class t extends Jl{_breakpointSubscription;_animationsDisabled=Ve();_animationState="void";_animationStateChanged=new N;_destroyed=!1;constructor(){super();let e=u(Yl);this._breakpointSubscription=e.observe([Vo.Medium,Vo.Large,Vo.XLarge]).subscribe(()=>{let i=this._elementRef.nativeElement.classList;i.toggle("mat-bottom-sheet-container-medium",e.isMatched(Vo.Medium)),i.toggle("mat-bottom-sheet-container-large",e.isMatched(Vo.Large)),i.toggle("mat-bottom-sheet-container-xlarge",e.isMatched(Vo.XLarge))})}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._animationsDisabled&&this._simulateAnimation(aI))}exit(){this._destroyed||(this._elementRef.nativeElement.setAttribute("mat-exit",""),this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._animationsDisabled&&this._simulateAnimation(lI))}ngOnDestroy(){super.ngOnDestroy(),this._breakpointSubscription.unsubscribe(),this._destroyed=!0}_simulateAnimation(e){this._ngZone.run(()=>{this._handleAnimationEvent(!0,e),setTimeout(()=>this._handleAnimationEvent(!1,e))})}_trapFocus(){super._trapFocus({preventScroll:!0})}_handleAnimationEvent(e,i){let r=i===aI;(r||i===lI)&&this._animationStateChanged.emit({toState:r?"visible":"hidden",phase:e?"start":"done"})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-bottom-sheet-container"]],hostAttrs:["tabindex","-1",1,"mat-bottom-sheet-container"],hostVars:9,hostBindings:function(i,r){i&1&&q("animationstart",function(s){return r._handleAnimationEvent(!0,s.animationName)})("animationend",function(s){return r._handleAnimationEvent(!1,s.animationName)})("animationcancel",function(s){return r._handleAnimationEvent(!1,s.animationName)}),i&2&&(oe("role",r._config.role)("aria-modal",r._config.ariaModal)("aria-label",r._config.ariaLabel),H("mat-bottom-sheet-container-animations-enabled",!r._animationsDisabled)("mat-bottom-sheet-container-enter",r._animationState==="visible")("mat-bottom-sheet-container-exit",r._animationState==="hidden"))},features:[ge],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(i,r){i&1&&kt(0,_j,0,0,"ng-template",0)},dependencies:[qi],styles:[`@keyframes _mat-bottom-sheet-enter {
  from {
    transform: translateY(100%);
  }
  to {
    transform: none;
  }
}
@keyframes _mat-bottom-sheet-exit {
  from {
    transform: none;
  }
  to {
    transform: translateY(100%);
  }
}
.mat-bottom-sheet-container {
  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  padding: 8px 16px;
  min-width: 100vw;
  box-sizing: border-box;
  display: block;
  outline: 0;
  max-height: 80vh;
  overflow: auto;
  position: relative;
  background: var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));
  color: var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));
  line-height: var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-weight: var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking));
}
@media (forced-colors: active) {
  .mat-bottom-sheet-container {
    outline: 1px solid;
  }
}

.mat-bottom-sheet-container-animations-enabled {
  transform: translateY(100%);
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter {
  animation: _mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit {
  animation: _mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards;
}

.mat-bottom-sheet-container-xlarge, .mat-bottom-sheet-container-large, .mat-bottom-sheet-container-medium {
  border-top-left-radius: var(--mat-bottom-sheet-container-shape, 28px);
  border-top-right-radius: var(--mat-bottom-sheet-container-shape, 28px);
}

.mat-bottom-sheet-container-medium {
  min-width: 384px;
  max-width: calc(100vw - 128px);
}

.mat-bottom-sheet-container-large {
  min-width: 512px;
  max-width: calc(100vw - 256px);
}

.mat-bottom-sheet-container-xlarge {
  min-width: 576px;
  max-width: calc(100vw - 384px);
}
`],encapsulation:2})}return t})(),Kv=new g("MatBottomSheetData"),Qv=class{viewContainerRef;injector;panelClass;direction;data=null;hasBackdrop=!0;backdropClass;disableClose=!1;ariaLabel=null;ariaModal=!1;closeOnNavigation=!0;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;height="";minHeight;maxHeight},na=class{_ref;get instance(){return this._ref.componentInstance}get componentRef(){return this._ref.componentRef}containerInstance;disableClose;_afterOpened=new E;_result;_closeFallbackTimeout;constructor(n,e,i){this._ref=n,this.containerInstance=i,this.disableClose=e.disableClose,i._animationStateChanged.pipe(re(r=>r.phase==="done"&&r.toState==="visible"),Me(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(re(r=>r.phase==="done"&&r.toState==="hidden"),Me(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._ref.close(this._result)}),n.overlayRef.detachments().subscribe(()=>{this._ref.close(this._result)}),yt(this.backdropClick(),this.keydownEvents().pipe(re(r=>r.keyCode===27))).subscribe(r=>{!this.disableClose&&(r.type!=="keydown"||!sn(r))&&(r.preventDefault(),this.dismiss())})}dismiss(n){this.containerInstance&&(this.containerInstance._animationStateChanged.pipe(re(e=>e.phase==="start"),Me(1)).subscribe(()=>{this._closeFallbackTimeout=setTimeout(()=>this._ref.close(this._result),500),this._ref.overlayRef.detachBackdrop()}),this._result=n,this.containerInstance.exit(),this.containerInstance=null)}afterDismissed(){return this._ref.closed}afterOpened(){return this._afterOpened}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}},yj=new g("mat-bottom-sheet-default-options"),Zv=(()=>{class t{_injector=u(B);_parentBottomSheet=u(t,{optional:!0,skipSelf:!0});_animationsDisabled=Ve();_defaultOptions=u(yj,{optional:!0});_bottomSheetRefAtThisLevel=null;_dialog=u(ec);get _openedBottomSheetRef(){let e=this._parentBottomSheet;return e?e._openedBottomSheetRef:this._bottomSheetRefAtThisLevel}set _openedBottomSheetRef(e){this._parentBottomSheet?this._parentBottomSheet._openedBottomSheetRef=e:this._bottomSheetRefAtThisLevel=e}constructor(){}open(e,i){let r=_(_({},this._defaultOptions||new Qv),i),o;return this._dialog.open(e,G(_({},r),{disableClose:!0,closeOnOverlayDetachments:!1,maxWidth:"100%",container:vj,scrollStrategy:r.scrollStrategy||Ar(this._injector),positionStrategy:kr(this._injector).centerHorizontally().bottom("0"),disableAnimations:this._animationsDisabled,templateContext:()=>({bottomSheetRef:o}),providers:(s,a,l)=>(o=new na(s,r,l),[{provide:na,useValue:o},{provide:Kv,useValue:r.data}])})),o.afterDismissed().subscribe(()=>{this._openedBottomSheetRef===o&&(this._openedBottomSheetRef=null)}),this._openedBottomSheetRef?(this._openedBottomSheetRef.afterDismissed().subscribe(()=>o.containerInstance?.enter()),this._openedBottomSheetRef.dismiss()):o.containerInstance.enter(),this._openedBottomSheetRef=o,o}dismiss(e){this._openedBottomSheetRef&&this._openedBottomSheetRef.dismiss(e)}ngOnDestroy(){this._bottomSheetRefAtThisLevel&&this._bottomSheetRefAtThisLevel.dismiss()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),cI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({providers:[Zv],imports:[Jh,qn,Ce]})}return t})();var hI=" ";function bj(t,n,e){let i=tf(t,n);e=e.trim(),!i.some(r=>r.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(hI)))}function wj(t,n,e){let i=tf(t,n);e=e.trim();let r=i.filter(o=>o!==e);r.length?t.setAttribute(n,r.join(hI)):t.removeAttribute(n)}function tf(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var fI="cdk-describedby-message",ef="cdk-describedby-host",Jv=0,pI=(()=>{class t{_platform=u(_e);_document=u(P);_messageRegistry=new Map;_messagesContainer=null;_id=`${Jv++}`;constructor(){u(Ye).load(Qs),this._id=u(wr)+"-"+Jv++}describe(e,i,r){if(!this._canBeDescribed(e,i))return;let o=Xv(i,r);typeof i!="string"?(uI(i,this._id),this._messageRegistry.set(o,{messageElement:i,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(i,r),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,i,r){if(!i||!this._isElementNode(e))return;let o=Xv(i,r);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof i=="string"){let s=this._messageRegistry.get(o);s&&s.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ef}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(ef);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let r=this._document.createElement("div");uI(r,this._id),r.textContent=e,i&&r.setAttribute("role",i),this._createMessagesContainer(),this._messagesContainer.appendChild(r),this._messageRegistry.set(Xv(e,i),{messageElement:r,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<i.length;o++)i[o].remove();let r=this._document.createElement("div");r.style.visibility="hidden",r.classList.add(e),r.classList.add("cdk-visually-hidden"),this._platform.isBrowser||r.setAttribute("platform","server"),this._document.body.appendChild(r),this._messagesContainer=r}_removeCdkDescribedByReferenceIds(e){let i=tf(e,"aria-describedby").filter(r=>r.indexOf(fI)!=0);e.setAttribute("aria-describedby",i.join(" "))}_addMessageReference(e,i){let r=this._messageRegistry.get(i);bj(e,"aria-describedby",r.messageElement.id),e.setAttribute(ef,this._id),r.referenceCount++}_removeMessageReference(e,i){let r=this._messageRegistry.get(i);r.referenceCount--,wj(e,"aria-describedby",r.messageElement.id),e.removeAttribute(ef)}_isElementDescribedByMessage(e,i){let r=tf(e,"aria-describedby"),o=this._messageRegistry.get(i),s=o&&o.messageElement.id;return!!s&&r.indexOf(s)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i=="object")return!0;let r=i==null?"":`${i}`.trim(),o=e.getAttribute("aria-label");return r?!o||o.trim()!==r:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Xv(t,n){return typeof t=="string"?`${n||""}/${t}`:t}function uI(t,n){t.id||(t.id=`${fI}-${n}-${Jv++}`)}var ia,mI=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ey(){if(ia)return ia;if(typeof document!="object"||!document)return ia=new Set(mI),ia;let t=document.createElement("input");return ia=new Set(mI.filter(n=>(t.setAttribute("type",n),t.type===n))),ia}function at(t){return t!=null&&`${t}`!="false"}var Sn=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Sn||{}),ty=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Sn.HIDDEN;constructor(n,e,i,r=!1){this._renderer=n,this.element=e,this.config=i,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},gI=Ys({passive:!0,capture:!0}),ny=class{_events=new Map;addHandler(n,e,i,r){let o=this._events.get(e);if(o){let s=o.get(i);s?s.add(r):o.set(i,new Set([r]))}else this._events.set(e,new Map([[i,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,gI)})}removeHandler(n,e,i){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(i),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,gI)))}_delegateEventHandler=n=>{let e=xt(n);e&&this._events.get(n.type)?.forEach((i,r)=>{(r===e||r.contains(e))&&i.forEach(o=>o.handleEvent(n))})}},tc={enterDuration:225,exitDuration:150},Dj=800,_I=Ys({passive:!0,capture:!0}),vI=["mousedown","touchstart"],yI=["mouseup","mouseleave","touchend","touchcancel"],Ej=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Ho=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new ny;constructor(n,e,i,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Ze(i)),o&&o.get(Ye).load(Ej)}fadeInRipple(n,e,i={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=_(_({},tc),i.animation);i.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let s=i.radius||Cj(n,e,r),a=n-r.left,l=e-r.top,c=o.enterDuration,d=document.createElement("div");d.classList.add("mat-ripple-element"),d.style.left=`${a-s}px`,d.style.top=`${l-s}px`,d.style.height=`${s*2}px`,d.style.width=`${s*2}px`,i.color!=null&&(d.style.backgroundColor=i.color),d.style.transitionDuration=`${c}ms`,this._containerElement.appendChild(d);let h=window.getComputedStyle(d),f=h.transitionProperty,p=h.transitionDuration,m=f==="none"||p==="0s"||p==="0s, 0s"||r.width===0&&r.height===0,b=new ty(this,d,i,m);d.style.transform="scale3d(1, 1, 1)",b.state=Sn.FADING_IN,i.persistent||(this._mostRecentTransientRipple=b);let C=null;return!m&&(c||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let M=()=>{C&&(C.fallbackTimer=null),clearTimeout(we),this._finishRippleTransition(b)},Y=()=>this._destroyRipple(b),we=setTimeout(Y,c+100);d.addEventListener("transitionend",M),d.addEventListener("transitioncancel",Y),C={onTransitionEnd:M,onTransitionCancel:Y,fallbackTimer:we}}),this._activeRipples.set(b,C),(m||!c)&&this._finishRippleTransition(b),b}fadeOutRipple(n){if(n.state===Sn.FADING_OUT||n.state===Sn.HIDDEN)return;let e=n.element,i=_(_({},tc),n.config.animation);e.style.transitionDuration=`${i.exitDuration}ms`,e.style.opacity="0",n.state=Sn.FADING_OUT,(n._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(n)}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut()})}setupTriggerEvents(n){let e=Ze(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,vI.forEach(i=>{t._eventManager.addHandler(this._ngZone,i,e,this)}))}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{yI.forEach(e=>{this._triggerElement.addEventListener(e,this,_I)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(n){n.state===Sn.FADING_IN?this._startFadeOutTransition(n):n.state===Sn.FADING_OUT&&this._destroyRipple(n)}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:i}=n.config;n.state=Sn.VISIBLE,!i&&(!e||!this._isPointerDown)&&n.fadeOut()}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=Sn.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove()}_onMousedown(n){let e=Ro(n),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+Dj;!this._target.rippleDisabled&&!e&&!i&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig))}_onTouchStart(n){if(!this._target.rippleDisabled&&!No(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let i=0;i<e.length;i++)this.fadeInRipple(e[i].clientX,e[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===Sn.VISIBLE||n.config.terminateOnPointerUp&&n.state===Sn.FADING_IN;!n.config.persistent&&e&&n.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let n=this._triggerElement;n&&(vI.forEach(e=>t._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(yI.forEach(e=>n.removeEventListener(e,this,_I)),this._pointerUpEventsRegistered=!1))}};function Cj(t,n,e){let i=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(i*i+r*r)}var Uo=new g("mat-ripple-global-options"),bI=(()=>{class t{_elementRef=u(O);_animationsDisabled=Ve();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=u(T),i=u(_e),r=u(Uo,{optional:!0}),o=u(B);this._globalOptions=r||{},this._rippleRenderer=new Ho(this,e,this._elementRef,i,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:_(_(_({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,i=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,i,_(_({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,_(_({},this.rippleConfig),e))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(i,r){i&2&&H("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return t})();var xj={capture:!0},Sj=["focus","mousedown","mouseenter","touchstart"],iy="mat-ripple-loader-uninitialized",ry="mat-ripple-loader-class-name",wI="mat-ripple-loader-centered",nf="mat-ripple-loader-disabled",rf=(()=>{class t{_document=u(P);_animationsDisabled=Ve();_globalRippleOptions=u(Uo,{optional:!0});_platform=u(_e);_ngZone=u(T);_injector=u(B);_eventCleanups;_hosts=new Map;constructor(){let e=u(qe).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Sj.map(i=>e.listen(this._document,i,this._onInteraction,xj)))}ngOnDestroy(){let e=this._hosts.keys();for(let i of e)this.destroyRipple(i);this._eventCleanups.forEach(i=>i())}configureRipple(e,i){e.setAttribute(iy,this._globalRippleOptions?.namespace??""),(i.className||!e.hasAttribute(ry))&&e.setAttribute(ry,i.className||""),i.centered&&e.setAttribute(wI,""),i.disabled&&e.setAttribute(nf,"")}setDisabled(e,i){let r=this._hosts.get(e);r?(r.target.rippleDisabled=i,!i&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):i?e.setAttribute(nf,""):e.removeAttribute(nf)}_onInteraction=e=>{let i=xt(e);if(i instanceof HTMLElement){let r=i.closest(`[${iy}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let i=this._document.createElement("span");i.classList.add("mat-ripple",e.getAttribute(ry)),e.append(i);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??tc.enterDuration,s=this._animationsDisabled?0:r?.animation?.exitDuration??tc.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(nf),rippleConfig:{centered:e.hasAttribute(wI),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:s}}},l=new Ho(a,this._ngZone,i,this._platform,this._injector),c=!a.rippleDisabled;c&&l.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:l,hasSetUpEvents:c}),e.removeAttribute(iy)}destroyRipple(e){let i=this._hosts.get(e);i&&(i.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Yn=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(i,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Ij=["mat-icon-button",""],Tj=["*"],Mj=new g("MAT_BUTTON_CONFIG");function DI(t){return t==null?void 0:Ui(t)}var oy=(()=>{class t{_elementRef=u(O);_ngZone=u(T);_animationsDisabled=Ve();_config=u(Mj,{optional:!0});_focusMonitor=u(Xt);_cleanupClick;_renderer=u(ke);_rippleLoader=u(rf);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){u(Ye).load(Yn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",i){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,i):this._elementRef.nativeElement.focus(i)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(i,r){i&2&&(oe("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Un(r.color?"mat-"+r.color:""),H("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",ee],disabled:[2,"disabled","disabled",ee],ariaDisabled:[2,"aria-disabled","ariaDisabled",ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee],tabIndex:[2,"tabIndex","tabIndex",DI],_tabindex:[2,"tabindex","_tabindex",DI]}})}return t})(),sy=(()=>{class t extends oy{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ge],attrs:Ij,ngContentSelectors:Tj,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Re(),Kt(0,"span",0),U(1),Kt(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var Or=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Ce]})}return t})();var Aj=["matButton",""],kj=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Rj=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var EI=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),of=(()=>{class t extends oy{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=Nj(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let i=this._elementRef.nativeElement.classList,r=this._appearance?EI.get(this._appearance):null,o=EI.get(e);r&&i.remove(...r),i.add(...o),this._appearance=e}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ge],attrs:Aj,ngContentSelectors:Rj,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(i,r){i&1&&(Re(kj),Kt(0,"span",0),U(1),jt(2,"span",1),U(3,1),on(),U(4,2),Kt(5,"span",2)(6,"span",3)),i&2&&H("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function Nj(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var CI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Or,Ce]})}return t})();var nc=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new E;constructor(n=!1,e,i=!0,r){this._multiple=n,this._emitChanges=i,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...n){this._verifyValueAssignment(n),n.forEach(i=>this._markSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...n){this._verifyValueAssignment(n),n.forEach(i=>this._unmarkSelected(i));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,i=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!i.has(this._getConcreteValue(o,i))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n)}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e}isSelected(n){return this._selection.has(this._getConcreteValue(n))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(n){this._multiple&&this.selected&&this._selected.sort(n)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n))}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n))}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n))}_verifyValueAssignment(n){n.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let i of e)if(this.compareWith(n,i))return i;return n}else return n}};var ic=(()=>{class t{_listeners=[];notify(e,i){for(let r of this._listeners)r(e,i)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(i=>e!==i)}}ngOnDestroy(){this._listeners=[]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var xI=(()=>{class t{_animationsDisabled=Ve();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(i,r){i&2&&H("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(i,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Bj=["button"],jj=["*"];function Vj(t,n){if(t&1&&(D(0,"div",2),Se(1,"mat-pseudo-checkbox",6),x()),t&2){let e=se();S(),De("disabled",e.disabled)}}var SI=new g("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),II=new g("MatButtonToggleGroup"),Hj={provide:Fh,useExisting:rn(()=>rc),multi:!0},sf=class{source;value;constructor(n,e){this.source=n,this.value=e}},rc=(()=>{class t{_changeDetector=u(Ee);_dir=u(_t,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=u(Ge).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(i=>i.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new N;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new N;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=u(SI,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new nc(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||sn(e))return;let r=e.target.id,o=this._buttonToggles.toArray().findIndex(a=>a.buttonId===r),s=null;switch(e.keyCode){case 32:case 13:s=this._buttonToggles.get(o)||null;break;case 38:s=this._getNextButton(o,-1);break;case 37:s=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:s=this._getNextButton(o,1);break;case 39:s=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}s&&(e.preventDefault(),s._onButtonClick(),s.focus())}_emitChangeEvent(e){let i=new sf(e,this.value);this._rawValue=i.value,this._controlValueAccessorChangeFn(i.value),this.change.emit(i)}_syncButtonToggle(e,i,r=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?i?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,r)):this._updateModelValue(e,r)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(i=>e.value!=null&&i===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let i=this._buttonToggles.get(e);if(!i.disabled){i.tabIndex=0;break}}}_getNextButton(e,i){let r=this._buttonToggles;for(let o=1;o<=r.length;o++){let s=(e+i*o+r.length)%r.length,a=r.get(s);if(a&&!a.disabled)return a}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let i=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(r=>this._selectValue(r,i))):(this._clearSelection(),this._selectValue(e,i)),!this.multiple&&i.every(r=>r.tabIndex===-1)){for(let r of i)if(!r.disabled){r.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,i){for(let r of i)if(r.value===e){r.checked=!0,this._selectionModel.select(r),this.multiple||(r.tabIndex=0);break}}_updateModelValue(e,i){i&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-button-toggle-group"]],contentQueries:function(i,r,o){if(i&1&&Ct(o,oa,5),i&2){let s;z(s=$())&&(r._buttonToggles=s)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(i,r){i&1&&q("keydown",function(s){return r._keydown(s)}),i&2&&(oe("role",r.multiple?"group":"radiogroup")("aria-disabled",r.disabled),H("mat-button-toggle-vertical",r.vertical)("mat-button-toggle-group-appearance-standard",r.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",ee],value:"value",multiple:[2,"multiple","multiple",ee],disabled:[2,"disabled","disabled",ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",ee],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",ee]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[Ie([Hj,{provide:II,useExisting:t}])]})}return t})(),oa=(()=>{class t{_changeDetectorRef=u(Ee);_elementRef=u(O);_focusMonitor=u(Xt);_idGenerator=u(Ge);_animationDisabled=Ve();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new N;constructor(){u(Ye).load(Yn);let e=u(II,{optional:!0}),i=u(new Hi("tabindex"),{optional:!0})||"",r=u(SI,{optional:!0});this._tabIndex=xe(parseInt(i)||0),this.buttonToggleGroup=e,this._appearance=r&&r.appearance?r.appearance:"standard",this._disabledInteractive=r?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let i=this.buttonToggleGroup._buttonToggles.find(r=>r.tabIndex===0);i&&(i.tabIndex=-1),this.tabIndex=0}this.change.emit(new sf(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-button-toggle"]],viewQuery:function(i,r){if(i&1&&it(Bj,5),i&2){let o;z(o=$())&&(r._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(i,r){i&1&&q("focus",function(){return r.focus()}),i&2&&(oe("aria-label",null)("aria-labelledby",null)("id",r.id)("name",null),H("mat-button-toggle-standalone",!r.buttonToggleGroup)("mat-button-toggle-checked",r.checked)("mat-button-toggle-disabled",r.disabled)("mat-button-toggle-disabled-interactive",r.disabledInteractive)("mat-button-toggle-appearance-standard",r.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",ee],appearance:"appearance",checked:[2,"checked","checked",ee],disabled:[2,"disabled","disabled",ee],disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:jj,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(i,r){if(i&1&&(Re(),D(0,"button",1,0),q("click",function(){return r._onButtonClick()}),pe(2,Vj,2,1,"div",2),D(3,"span",3),U(4),x()(),Se(5,"span",4)(6,"span",5)),i&2){let o=pi(1);De("id",r.buttonId)("disabled",r.disabled&&!r.disabledInteractive||null),oe("role",r.isSingleSelector()?"radio":"button")("tabindex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("aria-pressed",r.isSingleSelector()?null:r.checked)("aria-checked",r.isSingleSelector()?r.checked:null)("name",r._getButtonName())("aria-label",r.ariaLabel)("aria-labelledby",r.ariaLabelledby)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),S(2),me(r.buttonToggleGroup&&(!r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideSingleSelectionIndicator||r.buttonToggleGroup.multiple&&!r.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),S(4),De("matRippleTrigger",o)("matRippleDisabled",r.disableRipple||r.disabled)}},dependencies:[bI,xI],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return t})(),TI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Or,oa,Ce]})}return t})();function Uj(t,n){}var cf=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},ly="mdc-dialog--open",AI="mdc-dialog--opening",kI="mdc-dialog--closing",zj=150,$j=75,Gj=(()=>{class t extends Jl{_animationStateChanged=new N;_animationsEnabled=!Ve();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?NI(this._config.enterAnimationDuration)??zj:0;_exitAnimationDuration=this._animationsEnabled?NI(this._config.exitAnimationDuration)??$j:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(RI,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(AI,ly)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(ly),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(ly),this._animationsEnabled?(this._hostElement.style.setProperty(RI,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(kI)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(AI,kI)}_waitForAnimationToComplete(e,i){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(i,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let i=super.attachComponentPortal(e);return i.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),i}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(i,r){i&2&&(pn("id",r._config.id),oe("aria-modal",r._config.ariaModal)("role",r._config.role)("aria-labelledby",r._config.ariaLabel?null:r._ariaLabelledByQueue[0])("aria-label",r._config.ariaLabel)("aria-describedby",r._config.ariaDescribedBy||null),H("_mat-animation-noopable",!r._animationsEnabled)("mat-mdc-dialog-container-with-actions",r._actionSectionCount>0))},features:[ge],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(i,r){i&1&&(D(0,"div",0)(1,"div",1),kt(2,Uj,0,0,"ng-template",2),x()())},dependencies:[qi],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return t})(),RI="--mat-dialog-transition-duration";function NI(t){return t==null?null:typeof t=="number"?t:t.endsWith("ms")?St(t.substring(0,t.length-2)):t.endsWith("s")?St(t.substring(0,t.length-1))*1e3:t==="0"?0:null}var lf=(function(t){return t[t.OPEN=0]="OPEN",t[t.CLOSING=1]="CLOSING",t[t.CLOSED=2]="CLOSED",t})(lf||{}),Yi=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Si(1);_beforeClosed=new Si(1);_result;_closeFallbackTimeout;_state=lf.OPEN;_closeInteractionType;constructor(n,e,i){this._ref=n,this._config=e,this._containerInstance=i,this.disableClose=e.disableClose,this.id=n.id,n.addPanelClass("mat-mdc-dialog-panel"),i._animationStateChanged.pipe(re(r=>r.state==="opened"),Me(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),i._animationStateChanged.pipe(re(r=>r.state==="closed"),Me(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),n.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),yt(this.backdropClick(),this.keydownEvents().pipe(re(r=>r.keyCode===27&&!this.disableClose&&!sn(r)))).subscribe(r=>{this.disableClose||(r.preventDefault(),OI(this,r.type==="keydown"?"keyboard":"mouse"))})}close(n){let e=this._config.closePredicate;e&&!e(n,this._config,this.componentInstance)||(this._result=n,this._containerInstance._animationStateChanged.pipe(re(i=>i.state==="closing"),Me(1)).subscribe(i=>{this._beforeClosed.next(n),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),i.totalTime+100)}),this._state=lf.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(n){let e=this._ref.config.positionStrategy;return n&&(n.left||n.right)?n.left?e.left(n.left):e.right(n.right):e.centerHorizontally(),n&&(n.top||n.bottom)?n.top?e.top(n.top):e.bottom(n.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(n="",e=""){return this._ref.updateSize(n,e),this}addPanelClass(n){return this._ref.addPanelClass(n),this}removePanelClass(n){return this._ref.removePanelClass(n),this}getState(){return this._state}_finishDialogClose(){this._state=lf.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function OI(t,n,e){return t._closeInteractionType=n,t.close(e)}var oc=new g("MatMdcDialogData"),cy=new g("mat-mdc-dialog-default-options"),Wj=new g("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(B);return()=>Ar(t)}}),sc=(()=>{class t{_defaultOptions=u(cy,{optional:!0});_scrollStrategy=u(Wj);_parentDialog=u(t,{optional:!0,skipSelf:!0});_idGenerator=u(Ge);_injector=u(B);_dialog=u(ec);_animationsDisabled=Ve();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new E;_afterOpenedAtThisLevel=new E;dialogConfigClass=cf;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Ii(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(ft(void 0)));constructor(){this._dialogRefConstructor=Yi,this._dialogContainerType=Gj,this._dialogDataToken=oc}open(e,i){let r;i=_(_({},this._defaultOptions||new cf),i),i.id=i.id||this._idGenerator.getId("mat-mdc-dialog-"),i.scrollStrategy=i.scrollStrategy||this._scrollStrategy();let o=this._dialog.open(e,G(_({},i),{positionStrategy:kr(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||i.enterAnimationDuration?.toLocaleString()==="0"||i.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:i},{provide:Rr,useValue:i}]},templateContext:()=>({dialogRef:r}),providers:(s,a,l)=>(r=new this._dialogRefConstructor(s,i,l),r.updatePosition(i?.position),[{provide:this._dialogContainerType,useValue:l},{provide:this._dialogDataToken,useValue:a.data},{provide:this._dialogRefConstructor,useValue:r}])}));return r.componentRef=o.componentRef,r.componentInstance=o.componentInstance,this.openDialogs.push(r),this.afterOpened.next(r),r.afterClosed().subscribe(()=>{let s=this.openDialogs.indexOf(r);s>-1&&(this.openDialogs.splice(s,1),this.openDialogs.length||this._getAfterAllClosed().next())}),r}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(i=>i.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let i=e.length;for(;i--;)e[i].close()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),df=(()=>{class t{dialogRef=u(Yi,{optional:!0});_elementRef=u(O);_dialog=u(sc);ariaLabel;type="button";dialogResult;_matDialogClose;constructor(){}ngOnInit(){this.dialogRef||(this.dialogRef=LI(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let i=e._matDialogClose||e._matDialogCloseResult;i&&(this.dialogResult=i.currentValue)}_onButtonClick(e){OI(this.dialogRef,e.screenX===0&&e.screenY===0?"keyboard":"mouse",this.dialogResult)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","mat-dialog-close",""],["","matDialogClose",""]],hostVars:2,hostBindings:function(i,r){i&1&&q("click",function(s){return r._onButtonClick(s)}),i&2&&oe("aria-label",r.ariaLabel||null)("type",r.type)},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],type:"type",dialogResult:[0,"mat-dialog-close","dialogResult"],_matDialogClose:[0,"matDialogClose","_matDialogClose"]},exportAs:["matDialogClose"],features:[Ke]})}return t})(),PI=(()=>{class t{_dialogRef=u(Yi,{optional:!0});_elementRef=u(O);_dialog=u(sc);constructor(){}ngOnInit(){this._dialogRef||(this._dialogRef=LI(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t})}return t})(),uf=(()=>{class t extends PI{id=u(Ge).getId("mat-mdc-dialog-title-");_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275dir=R({type:t,selectors:[["","mat-dialog-title",""],["","matDialogTitle",""]],hostAttrs:[1,"mat-mdc-dialog-title","mdc-dialog__title"],hostVars:1,hostBindings:function(i,r){i&2&&pn("id",r.id)},inputs:{id:"id"},exportAs:["matDialogTitle"],features:[ge]})}return t})(),FI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","mat-dialog-content",""],["mat-dialog-content"],["","matDialogContent",""]],hostAttrs:[1,"mat-mdc-dialog-content","mdc-dialog__content"],features:[C_([Wi])]})}return t})(),hf=(()=>{class t extends PI{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275dir=R({type:t,selectors:[["","mat-dialog-actions",""],["mat-dialog-actions"],["","matDialogActions",""]],hostAttrs:[1,"mat-mdc-dialog-actions","mdc-dialog__actions"],hostVars:6,hostBindings:function(i,r){i&2&&H("mat-mdc-dialog-actions-align-start",r.align==="start")("mat-mdc-dialog-actions-align-center",r.align==="center")("mat-mdc-dialog-actions-align-end",r.align==="end")},inputs:{align:"align"},features:[ge]})}return t})();function LI(t,n){let e=t.nativeElement.parentElement;for(;e&&!e.classList.contains("mat-mdc-dialog-container");)e=e.parentElement;return e?n.find(i=>i.id===e.id):null}var BI=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({providers:[sc],imports:[Jh,jo,qn,Ce]})}return t})();var uy=class{_box;_destroyed=new E;_resizeSubject=new E;_resizeObserver;_elementObservables=new Map;constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new J(e=>{let i=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),i.unsubscribe(),this._elementObservables.delete(n)}}).pipe(re(e=>e.some(i=>i.target===n)),to({bufferSize:1,refCount:!0}),he(this._destroyed))),this._elementObservables.get(n)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},jI=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=u(T);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,i){let r=i?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new uy(r)),this._observers.get(r).observe(e)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qj=["notch"],Yj=["matFormFieldNotchedOutline",""],Qj=["*"],VI=["iconPrefixContainer"],HI=["textPrefixContainer"],UI=["iconSuffixContainer"],zI=["textSuffixContainer"],Kj=["textField"],Zj=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Xj=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Jj(t,n){t&1&&Se(0,"span",21)}function eV(t,n){if(t&1&&(D(0,"label",20),U(1,1),pe(2,Jj,1,0,"span",21),x()),t&2){let e=se(2);De("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),oe("for",e._control.disableAutomaticLabeling?null:e._control.id),S(2),me(!e.hideRequiredMarker&&e._control.required?2:-1)}}function tV(t,n){if(t&1&&pe(0,eV,3,5,"label",20),t&2){let e=se();me(e._hasFloatingLabel()?0:-1)}}function nV(t,n){t&1&&Se(0,"div",7)}function iV(t,n){}function rV(t,n){if(t&1&&kt(0,iV,0,0,"ng-template",13),t&2){se(2);let e=pi(1);De("ngTemplateOutlet",e)}}function oV(t,n){if(t&1&&(D(0,"div",9),pe(1,rV,1,1,null,13),x()),t&2){let e=se();De("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),S(),me(e._forceDisplayInfixLabel()?-1:1)}}function sV(t,n){t&1&&(D(0,"div",10,2),U(2,2),x())}function aV(t,n){t&1&&(D(0,"div",11,3),U(2,3),x())}function lV(t,n){}function cV(t,n){if(t&1&&kt(0,lV,0,0,"ng-template",13),t&2){se();let e=pi(1);De("ngTemplateOutlet",e)}}function dV(t,n){t&1&&(D(0,"div",14,4),U(2,4),x())}function uV(t,n){t&1&&(D(0,"div",15,5),U(2,5),x())}function hV(t,n){t&1&&Se(0,"div",16)}function fV(t,n){t&1&&(D(0,"div",18),U(1,6),x())}function pV(t,n){if(t&1&&(D(0,"mat-hint",22),ye(1),x()),t&2){let e=se(2);De("id",e._hintLabelId),S(),ut(e.hintLabel)}}function mV(t,n){if(t&1&&(D(0,"div",19),pe(1,pV,2,2,"mat-hint",22),U(2,7),Se(3,"div",23),U(4,8),x()),t&2){let e=se();S(),me(e.hintLabel?1:-1)}}var ac=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-label"]]})}return t})(),gV=new g("MatError");var hy=(()=>{class t{align="start";id=u(Ge).getId("mat-mdc-hint-");static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(i,r){i&2&&(pn("id",r.id),oe("align",null),H("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),_V=new g("MatPrefix");var vV=new g("MatSuffix");var KI=new g("FloatingLabelParent"),$I=(()=>{class t{_elementRef=u(O);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=u(jI);_ngZone=u(T);_parent=u(KI);_resizeSubscription=new ce;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return yV(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(i,r){i&2&&H("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function yV(t){let n=t;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let i=e.scrollWidth;return e.remove(),i}var GI="mdc-line-ripple--active",ff="mdc-line-ripple--deactivating",WI=(()=>{class t{_elementRef=u(O);_cleanupTransitionEnd;constructor(){let e=u(T),i=u(ke);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=i.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ff),e.add(GI)}deactivate(){this._elementRef.nativeElement.classList.add(ff)}_handleTransitionEnd=e=>{let i=this._elementRef.nativeElement.classList,r=i.contains(ff);e.propertyName==="opacity"&&r&&i.remove(GI,ff)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),qI=(()=>{class t{_elementRef=u(O);_ngZone=u(T);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,i=e.querySelector(".mdc-floating-label");i?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(i.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>i.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let i=this._notch.nativeElement;!this.open||!e?i.style.width="":i.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(i,r){if(i&1&&it(qj,5),i&2){let o;z(o=$())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(i,r){i&2&&H("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Yj,ngContentSelectors:Qj,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(i,r){i&1&&(Re(),Kt(0,"div",1),jt(1,"div",2,0),U(3),on(),Kt(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),fy=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t})}return t})();var py=new g("MatFormField"),bV=new g("MAT_FORM_FIELD_DEFAULT_OPTIONS"),YI="fill",wV="auto",QI="fixed",DV="translateY(-50%)",pf=(()=>{class t{_elementRef=u(O);_changeDetectorRef=u(Ee);_platform=u(_e);_idGenerator=u(Ge);_ngZone=u(T);_defaults=u(bV,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=Sl("iconPrefixContainer");_textPrefixContainerSignal=Sl("textPrefixContainer");_iconSuffixContainerSignal=Sl("iconSuffixContainer");_textSuffixContainerSignal=Sl("textSuffixContainer");_prefixSuffixContainers=Vt(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=VC(ac);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=at(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||wV}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let i=e||this._defaults?.appearance||YI;this._appearanceSignal.set(i)}_appearanceSignal=xe(YI);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||QI}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||QI}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new E;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=Ve();constructor(){let e=this._defaults,i=u(_t);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),go(()=>this._currentDirection=i.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Vt(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let i=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),i.controlType&&this._elementRef.nativeElement.classList.add(r+i.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=i.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=i.stateChanges.pipe(ft([void 0,void 0]),W(()=>[i.errorState,i.userAriaDescribedBy]),Ed(),re(([[o,s],[a,l]])=>o!==a||s!==l)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),i.ngControl&&i.ngControl.valueChanges&&(this._valueChanges=i.ngControl.valueChanges.pipe(he(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),yt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){QC({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Vt(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let i=this._control?this._control.ngControl:null;return i&&i[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(a=>a.align==="start"):null,s=this._hintChildren?this._hintChildren.find(a=>a.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),s&&e.push(s.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let i=this._control.describedByIds,r;if(i){let o=this._describedByIds||e;r=e.concat(i.filter(s=>s&&!o.includes(s)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,i=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,s=e?.getBoundingClientRect().width??0,a=i?.getBoundingClientRect().width??0,l=r?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=this._currentDirection==="rtl"?"-1":"1",h=`${s+a}px`,p=`calc(${d} * (${h} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,m=`var(--mat-mdc-form-field-label-transform, ${DV} translateX(${p}))`,b=s+a+l+c;return[m,b]}_writeOutlinedLabelStyles(e){if(e!==null){let[i,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=i),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let i=e.getRootNode();return i&&i!==e}return document.documentElement.contains(e)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-form-field"]],contentQueries:function(i,r,o){if(i&1&&(qu(o,r._labelChild,ac,5),Ct(o,fy,5)(o,_V,5)(o,vV,5)(o,gV,5)(o,hy,5)),i&2){Qu();let s;z(s=$())&&(r._formFieldControl=s.first),z(s=$())&&(r._prefixChildren=s),z(s=$())&&(r._suffixChildren=s),z(s=$())&&(r._errorChildren=s),z(s=$())&&(r._hintChildren=s)}},viewQuery:function(i,r){if(i&1&&(Yu(r._iconPrefixContainerSignal,VI,5)(r._textPrefixContainerSignal,HI,5)(r._iconSuffixContainerSignal,UI,5)(r._textSuffixContainerSignal,zI,5),it(Kj,5)(VI,5)(HI,5)(UI,5)(zI,5)($I,5)(qI,5)(WI,5)),i&2){Qu(4);let o;z(o=$())&&(r._textField=o.first),z(o=$())&&(r._iconPrefixContainer=o.first),z(o=$())&&(r._textPrefixContainer=o.first),z(o=$())&&(r._iconSuffixContainer=o.first),z(o=$())&&(r._textSuffixContainer=o.first),z(o=$())&&(r._floatingLabel=o.first),z(o=$())&&(r._notchedOutline=o.first),z(o=$())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(i,r){i&2&&H("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[Ie([{provide:py,useExisting:t},{provide:KI,useExisting:t}])],ngContentSelectors:Xj,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(i,r){if(i&1&&(Re(Zj),kt(0,tV,1,1,"ng-template",null,0,Zu),D(2,"div",6,1),q("click",function(s){return r._control.onContainerClick(s)}),pe(4,nV,1,0,"div",7),D(5,"div",8),pe(6,oV,2,2,"div",9),pe(7,sV,3,0,"div",10),pe(8,aV,3,0,"div",11),D(9,"div",12),pe(10,cV,1,1,null,13),U(11),x(),pe(12,dV,3,0,"div",14),pe(13,uV,3,0,"div",15),x(),pe(14,hV,1,0,"div",16),x(),D(15,"div",17),pe(16,fV,2,0,"div",18)(17,mV,5,1,"div",19),x()),i&2){let o;S(2),H("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),S(2),me(!r._hasOutline()&&!r._control.disabled?4:-1),S(2),me(r._hasOutline()?6:-1),S(),me(r._hasIconPrefix?7:-1),S(),me(r._hasTextPrefix?8:-1),S(2),me(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),S(2),me(r._hasTextSuffix?12:-1),S(),me(r._hasIconSuffix?13:-1),S(),me(r._hasOutline()?-1:14),S(),H("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let s=r._getSubscriptMessageType();S(),me((o=s)==="error"?16:o==="hint"?17:-1)}},dependencies:[$I,qI,z_,WI,hy],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var lc=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Zs,pf,Ce]})}return t})();function ZI(t){return Error(`Unable to find icon with the name "${t}"`)}function CV(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function XI(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function JI(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Qi=class{url;svgText;options;svgElement=null;constructor(n,e,i){this.url=n,this.svgText=e,this.options=i}},tT=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,i,r,o){this._httpClient=e,this._sanitizer=i,this._errorHandler=o,this._document=r}addSvgIcon(e,i,r){return this.addSvgIconInNamespace("",e,i,r)}addSvgIconLiteral(e,i,r){return this.addSvgIconLiteralInNamespace("",e,i,r)}addSvgIconInNamespace(e,i,r,o){return this._addSvgIconConfig(e,i,new Qi(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,i,r,o){let s=this._sanitizer.sanitize(Yt.HTML,r);if(!s)throw JI(r);let a=Ks(s);return this._addSvgIconConfig(e,i,new Qi("",a,o))}addSvgIconSet(e,i){return this.addSvgIconSetInNamespace("",e,i)}addSvgIconSetLiteral(e,i){return this.addSvgIconSetLiteralInNamespace("",e,i)}addSvgIconSetInNamespace(e,i,r){return this._addSvgIconSetConfig(e,new Qi(i,null,r))}addSvgIconSetLiteralInNamespace(e,i,r){let o=this._sanitizer.sanitize(Yt.HTML,i);if(!o)throw JI(i);let s=Ks(o);return this._addSvgIconSetConfig(e,new Qi("",s,r))}registerFontClassAlias(e,i=e){return this._fontCssClassesByAlias.set(e,i),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let i=this._sanitizer.sanitize(Yt.RESOURCE_URL,e);if(!i)throw XI(e);let r=this._cachedIconsByUrl.get(i);return r?j(mf(r)):this._loadSvgIconFromConfig(new Qi(e,null)).pipe(lt(o=>this._cachedIconsByUrl.set(i,o)),W(o=>mf(o)))}getNamedSvgIcon(e,i=""){let r=eT(i,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(i,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let s=this._iconSetConfigs.get(i);return s?this._getSvgFromIconSetConfigs(e,s):Ha(ZI(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?j(mf(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(W(i=>mf(i)))}_getSvgFromIconSetConfigs(e,i){let r=this._extractIconWithNameFromAnySet(e,i);if(r)return j(r);let o=i.filter(s=>!s.svgText).map(s=>this._loadSvgIconSetFromConfig(s).pipe(un(a=>{let c=`Loading icon set URL: ${this._sanitizer.sanitize(Yt.RESOURCE_URL,s.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(c)),j(null)})));return lr(o).pipe(W(()=>{let s=this._extractIconWithNameFromAnySet(e,i);if(!s)throw ZI(e);return s}))}_extractIconWithNameFromAnySet(e,i){for(let r=i.length-1;r>=0;r--){let o=i[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let s=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(s,e,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(lt(i=>e.svgText=i),W(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?j(null):this._fetchIcon(e).pipe(lt(i=>e.svgText=i))}_extractSvgIconFromSet(e,i,r){let o=e.querySelector(`[id="${i}"]`);if(!o)return null;let s=o.cloneNode(!0);if(s.removeAttribute("id"),s.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(s,r);if(s.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(s),r);let a=this._svgElementFromString(Ks("<svg></svg>"));return a.appendChild(s),this._setSvgAttributes(a,r)}_svgElementFromString(e){let i=this._document.createElement("DIV");i.innerHTML=e;let r=i.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let i=this._svgElementFromString(Ks("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:s,value:a}=r[o];s!=="id"&&i.setAttribute(s,a)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&i.appendChild(e.childNodes[o].cloneNode(!0));return i}_setSvgAttributes(e,i){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),i&&i.viewBox&&e.setAttribute("viewBox",i.viewBox),e}_fetchIcon(e){let{url:i,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw CV();if(i==null)throw Error(`Cannot fetch icon from URL "${i}".`);let s=this._sanitizer.sanitize(Yt.RESOURCE_URL,i);if(!s)throw XI(i);let a=this._inProgressUrlFetches.get(s);if(a)return a;let l=this._httpClient.get(s,{responseType:"text",withCredentials:o}).pipe(W(c=>Ks(c)),ni(()=>this._inProgressUrlFetches.delete(s)),za());return this._inProgressUrlFetches.set(s,l),l}_addSvgIconConfig(e,i,r){return this._svgIconConfigs.set(eT(e,i),r),this}_addSvgIconSetConfig(e,i){let r=this._iconSetConfigs.get(e);return r?r.push(i):this._iconSetConfigs.set(e,[i]),this}_svgElementFromConfig(e){if(!e.svgElement){let i=this._svgElementFromString(e.svgText);this._setSvgAttributes(i,e.options),e.svgElement=i}return e.svgElement}_getIconConfigFromResolvers(e,i){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](i,e);if(o)return xV(o)?new Qi(o.url,null,o.options):new Qi(o,null)}}static \u0275fac=function(i){return new(i||t)(I(Er,8),I(hv),I(P,8),I(tn))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function mf(t){return t.cloneNode(!0)}function eT(t,n){return t+":"+n}function xV(t){return!!(t.url&&t.options)}var SV=["*"],IV=new g("MAT_ICON_DEFAULT_OPTIONS"),TV=new g("mat-icon-location",{providedIn:"root",factory:()=>{let t=u(P),n=t?t.location:null;return{getPathname:()=>n?n.pathname+n.search:""}}}),nT=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],MV=nT.map(t=>`[${t}]`).join(", "),AV=/^url\(['"]?#(.*?)['"]?\)$/,sa=(()=>{class t{_elementRef=u(O);_iconRegistry=u(tT);_location=u(TV);_errorHandler=u(tn);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let i=this._cleanupFontValue(e);i!==this._fontSet&&(this._fontSet=i,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let i=this._cleanupFontValue(e);i!==this._fontIcon&&(this._fontIcon=i,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ce.EMPTY;constructor(){let e=u(new Hi("aria-hidden"),{optional:!0}),i=u(IV,{optional:!0});i&&(i.color&&(this.color=this._defaultColor=i.color),i.fontSet&&(this.fontSet=i.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let i=e.split(":");switch(i.length){case 1:return["",i[0]];case 2:return i;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let i=this._location.getPathname();i!==this._previousPath&&(this._previousPath=i,this._prependPathToReferences(i))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let i=this._location.getPathname();this._previousPath=i,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(i),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,i=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();i--;){let r=e.childNodes[i];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,i=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),i.forEach(r=>e.classList.add(r)),this._previousFontSetClass=i,this.fontIcon!==this._previousFontIconClass&&!i.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let i=this._elementsWithExternalReferences;i&&i.forEach((r,o)=>{r.forEach(s=>{o.setAttribute(s.name,`url('${e}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(e){let i=e.querySelectorAll(MV),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<i.length;o++)nT.forEach(s=>{let a=i[o],l=a.getAttribute(s),c=l?l.match(AV):null;if(c){let d=r.get(a);d||(d=[],r.set(a,d)),d.push({name:s,value:c[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[i,r]=this._splitIconName(e);i&&(this._svgNamespace=i),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,i).pipe(Me(1)).subscribe(o=>this._setSvgElement(o),o=>{let s=`Error retrieving icon ${i}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(s))})}}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(i,r){i&2&&(oe("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Un(r.color?"mat-"+r.color:""),H("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",ee],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:SV,decls:1,vars:0,template:function(i,r){i&1&&(Re(),U(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),iT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Ce]})}return t})();var kV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(i,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),RV={passive:!0},rT=(()=>{class t{_platform=u(_e);_ngZone=u(T);_renderer=u(qe).createRenderer(null,null);_styleLoader=u(Ye);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return $e;this._styleLoader.load(kV);let i=Ze(e),r=this._monitoredElements.get(i);if(r)return r.subject;let o=new E,s="cdk-text-field-autofilled",a=c=>{c.animationName==="cdk-text-field-autofill-start"&&!i.classList.contains(s)?(i.classList.add(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!0}))):c.animationName==="cdk-text-field-autofill-end"&&i.classList.contains(s)&&(i.classList.remove(s),this._ngZone.run(()=>o.next({target:c.target,isAutofilled:!1})))},l=this._ngZone.runOutsideAngular(()=>(i.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(i,"animationstart",a,RV)));return this._monitoredElements.set(i,{subject:o,unlisten:l}),o}stopMonitoring(e){let i=Ze(e),r=this._monitoredElements.get(i);r&&(r.unlisten(),r.subject.complete(),i.classList.remove("cdk-text-field-autofill-monitored"),i.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(i))}ngOnDestroy(){this._monitoredElements.forEach((e,i)=>this.stopMonitoring(i))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var oT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();var sT=new g("MAT_INPUT_VALUE_ACCESSOR");var gf=(()=>{class t{isErrorState(e,i){return!!(e&&e.invalid&&(e.touched||i&&i.submitted))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var _f=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,i,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=i,this._parentForm=r,this._stateChanges=o}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,i=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=i?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next())}};var NV=["button","checkbox","file","hidden","image","radio","range","reset","submit"],OV=new g("MAT_INPUT_CONFIG"),aT=(()=>{class t{_elementRef=u(O);_platform=u(_e);ngControl=u(Fo,{optional:!0,self:!0});_autofillMonitor=u(rT);_ngZone=u(T);_formField=u(py,{optional:!0});_renderer=u(ke);_uid=u(Ge).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=u(OV,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new E;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=at(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(xh.required)??!1}set required(e){this._required=at(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ey().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=at(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ey().has(e));constructor(){let e=u(Bv,{optional:!0}),i=u(Vv,{optional:!0}),r=u(gf),o=u(sT,{optional:!0,self:!0}),s=this._elementRef.nativeElement,a=s.nodeName.toLowerCase();o?Ls(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=s,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(s,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new _f(r,this.ngControl,i,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=a==="select",this._isTextarea=a==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=s.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&go(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let i=this._elementRef.nativeElement;i.type==="number"?(i.type="text",i.setSelectionRange(0,0),i.type="number"):i.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let i=this._elementRef.nativeElement;this._previousPlaceholder=e,e?i.setAttribute("placeholder",e):i.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){NV.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,i=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&i&&i.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let i=this._elementRef.nativeElement;e.length?i.setAttribute("aria-describedby",e.join(" ")):i.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let i=e.target;!i.value&&i.selectionStart===0&&i.selectionEnd===0&&(i.setSelectionRange(1,1),i.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(i,r){i&1&&q("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),i&2&&(pn("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),oe("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),H("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",ee]},exportAs:["matInput"],features:[Ie([{provide:fy,useExisting:t}]),Ke]})}return t})(),lT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[lc,lc,oT,Ce]})}return t})();var cT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Ce]})}return t})();var dT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Ce]})}return t})();var FV=["*"];var LV=["unscopedContent"],BV=["text"],jV=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],VV=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var HV=new g("ListOption"),_y=(()=>{class t{_elementRef=u(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),UV=(()=>{class t{_elementRef=u(O);constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),zV=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),uT=(()=>{class t{_listOption=u(HV,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,hostVars:4,hostBindings:function(i,r){i&2&&H("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),$V=(()=>{class t extends uT{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275dir=R({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ge]})}return t})(),GV=(()=>{class t extends uT{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275dir=R({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ge]})}return t})(),WV=new g("MAT_LIST_CONFIG"),gy=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=at(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(at(e))}_disabled=xe(!1);_defaultOptions=u(WV,{optional:!0});static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,hostVars:1,hostBindings:function(i,r){i&2&&oe("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),qV=(()=>{class t{_elementRef=u(O);_ngZone=u(T);_listBase=u(gy,{optional:!0});_platform=u(_e);_hostElement;_isButtonElement;_noopAnimations=Ve();_avatars;_icons;set lines(e){this._explicitLines=St(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=at(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(at(e))}_disabled=xe(!1);_subscriptions=new ce;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){u(Ye).load(Yn);let e=u(Uo,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Ho(this,this._ngZone,this._hostElement,this._platform,u(B)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(yt(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,contentQueries:function(i,r,o){if(i&1&&Ct(o,$V,4)(o,GV,4),i&2){let s;z(s=$())&&(r._avatars=s),z(s=$())&&(r._icons=s)}},hostVars:4,hostBindings:function(i,r){i&2&&(oe("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),H("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var hT=(()=>{class t extends gy{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-action-list"]],hostAttrs:["role","group",1,"mat-mdc-action-list","mat-mdc-list-base","mdc-list"],exportAs:["matActionList"],features:[Ie([{provide:gy,useExisting:t}]),ge],ngContentSelectors:FV,decls:1,vars:0,template:function(i,r){i&1&&(Re(),U(0))},styles:[`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`],encapsulation:2,changeDetection:0})}return t})();var fT=(()=>{class t extends qV{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=at(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&Ct(o,UV,5)(o,_y,5)(o,zV,5),i&2){let s;z(s=$())&&(r._lines=s),z(s=$())&&(r._titles=s),z(s=$())&&(r._meta=s)}},viewQuery:function(i,r){if(i&1&&it(LV,5)(BV,5),i&2){let o;z(o=$())&&(r._unscopedContent=o.first),z(o=$())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(oe("aria-current",r._getAriaCurrent()),H("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[ge],ngContentSelectors:VV,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Re(jV),U(0),D(1,"span",1),U(2,1),U(3,2),D(4,"span",2,0),q("cdkObserveContent",function(){return r._updateItemLines(!0)}),U(6,3),x()(),U(7,4),U(8,5),Se(9,"div",3))},dependencies:[BS],encapsulation:2,changeDetection:0})}return t})();var pT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Zs,Or,dT,Ce,cT]})}return t})();var yf=["*"],QV=["content"],KV=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],ZV=["mat-drawer","mat-drawer-content","*"];function XV(t,n){if(t&1){let e=Rt();D(0,"div",1),q("click",function(){tt(e);let r=se();return nt(r._onBackdropClicked())}),x()}if(t&2){let e=se();H("mat-drawer-shown",e._isShowingBackdrop())}}function JV(t,n){t&1&&(D(0,"mat-drawer-content"),U(1,2),x())}var e2=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],t2=["mat-sidenav","mat-sidenav-content","*"];function n2(t,n){if(t&1){let e=Rt();D(0,"div",1),q("click",function(){tt(e);let r=se();return nt(r._onBackdropClicked())}),x()}if(t&2){let e=se();H("mat-drawer-shown",e._isShowingBackdrop())}}function i2(t,n){t&1&&(D(0,"mat-sidenav-content"),U(1,2),x())}var r2=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var o2=new g("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),by=new g("MAT_DRAWER_CONTAINER"),vf=(()=>{class t extends Wi{_platform=u(_e);_changeDetectorRef=u(Ee);_container=u(yy);constructor(){let e=u(O),i=u(Gn),r=u(T);super(e,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:i}=this._container;return e!=null&&e.mode!=="over"&&e.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(ji("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),H("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[Ie([{provide:Wi,useExisting:t}]),ge],ngContentSelectors:yf,decls:1,vars:0,template:function(i,r){i&1&&(Re(),U(0))},encapsulation:2,changeDetection:0})}return t})(),vy=(()=>{class t{_elementRef=u(O);_focusTrapFactory=u(Ql);_focusMonitor=u(Xt);_platform=u(_e);_ngZone=u(T);_renderer=u(ke);_interactivityChecker=u(Xs);_doc=u(P);_container=u(by,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=at(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=at(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(at(e))}_opened=xe(!1);_openedVia=null;_animationStarted=new E;_animationEnd=new E;openedChange=new N(!0);_openedStream=this.openedChange.pipe(re(e=>e),W(()=>{}));openedStart=this._animationStarted.pipe(re(()=>this.opened),bd(void 0));_closedStream=this.openedChange.pipe(re(e=>!e),W(()=>{}));closedStart=this._animationStarted.pipe(re(()=>!this.opened),bd(void 0));_destroyed=new E;onPositionChanged=new N;_content;_modeChanged=new E;_injector=u(B);_changeDetectorRef=u(Ee);constructor(){this.openedChange.pipe(he(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,i=this._elementRef.nativeElement;return[e.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!sn(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(i,"transitionend",this._handleTransitionEvent),e.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,i){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),s(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),s=this._renderer.listen(e,"mousedown",r)})),e.focus(i)}_focusByCssSelector(e,i){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":st(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,i){e&&i&&(this._openedVia=i);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,i,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Me(1)).subscribe(s=>o(s?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=e=>{let i=this._elementRef.nativeElement;e.target===i&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&it(QV,5),i&2){let o;z(o=$())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(oe("align",null)("tabIndex",r.mode!=="side"?"-1":null),ji("visibility",!r._container&&!r.opened?"hidden":null),H("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:yf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Re(),D(0,"div",1,0),U(2),x())},dependencies:[Wi],encapsulation:2,changeDetection:0})}return t})(),yy=(()=>{class t{_dir=u(_t,{optional:!0});_element=u(O);_ngZone=u(T);_changeDetectorRef=u(Ee);_animationDisabled=Ve();_transitionsEnabled=!1;_allDrawers;_drawers=new vr;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=at(e)}_autosize=u(o2);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:at(e)}_backdropOverride=null;backdropClick=new N;_start=null;_end=null;_left=null;_right=null;_destroyed=new E;_doCheckSubject=new E;_contentMargins={left:null,right:null};_contentMarginChanges=new E;get scrollable(){return this._userContent||this._content}_injector=u(B);constructor(){let e=u(_e),i=u(Wn);this._dir?.change.pipe(he(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(he(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ft(this._allDrawers),he(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ft(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Ti(10),he(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,e-=r}}e=e||null,i=i||null,(e!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:e,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(he(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(he(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(he(this._drawers.changes)).subscribe(()=>{st({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(he(yt(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&Ct(o,vf,5)(o,vy,5),i&2){let s;z(s=$())&&(r._content=s.first),z(s=$())&&(r._allDrawers=s)}},viewQuery:function(i,r){if(i&1&&it(vf,5),i&2){let o;z(o=$())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&H("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[Ie([{provide:by,useExisting:t}])],ngContentSelectors:ZV,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Re(KV),pe(0,XV,1,2,"div",0),U(1),U(2,1),pe(3,JV,2,0,"mat-drawer-content")),i&2&&(me(r.hasBackdrop?0:-1),S(3),me(r._content?-1:3))},dependencies:[vf],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return t})(),aa=(()=>{class t extends vf{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[Ie([{provide:Wi,useExisting:t}]),ge],ngContentSelectors:yf,decls:1,vars:0,template:function(i,r){i&1&&(Re(),U(0))},encapsulation:2,changeDetection:0})}return t})(),cc=(()=>{class t extends vy{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=at(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=St(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=St(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(oe("tabIndex",r.mode!=="side"?"-1":null)("align",null),ji("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),H("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[Ie([{provide:vy,useExisting:t}]),ge],ngContentSelectors:yf,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Re(),D(0,"div",1,0),U(2),x())},dependencies:[Wi],encapsulation:2,changeDetection:0})}return t})(),mT=(()=>{class t extends yy{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&Ct(o,aa,5)(o,cc,5),i&2){let s;z(s=$())&&(r._content=s.first),z(s=$())&&(r._allDrawers=s)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&H("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[Ie([{provide:by,useExisting:t},{provide:yy,useExisting:t}]),ge],ngContentSelectors:t2,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Re(e2),pe(0,n2,1,2,"div",0),U(1),U(2,1),pe(3,i2,2,0,"mat-sidenav-content")),i&2&&(me(r.hasBackdrop?0:-1),S(3),me(r._content?-1:3))},dependencies:[aa],styles:[r2],encapsulation:2,changeDetection:0})}return t})(),gT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[_i,Ce,_i]})}return t})();var a2=["*",[["mat-toolbar-row"]]],l2=["*","mat-toolbar-row"],c2=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),_T=(()=>{class t{_elementRef=u(O);_platform=u(_e);_document=u(P);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&Ct(o,c2,5),i&2){let s;z(s=$())&&(r._toolbarRows=s)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(Un(r.color?"mat-"+r.color:""),H("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:l2,decls:2,vars:0,template:function(i,r){i&1&&(Re(a2),U(0),U(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var vT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Ce]})}return t})();var u2=["tooltip"],h2=20;var f2=new g("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let t=u(B);return()=>Kh(t,{scrollThrottle:h2})}}),p2=new g("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var yT="tooltip-panel",m2={passive:!0},g2=8,_2=8,v2=24,y2=200,wy=(()=>{class t{_elementRef=u(O);_ngZone=u(T);_platform=u(_e);_ariaDescriber=u(pI);_focusMonitor=u(Xt);_dir=u(_t);_injector=u(B);_viewContainerRef=u(Et);_mediaMatcher=u(Tr);_document=u(P);_renderer=u(ke);_animationsDisabled=Ve();_defaultOptions=u(p2,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=bT;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=at(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let i=at(e);this._disabled!==i&&(this._disabled=i,i?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=St(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=St(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let i=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(i)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new E;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=g2}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(he(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(i=>i()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,i){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let r=this._createOverlay(i);this._detach(),this._portal=this._portal||new Sr(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=r.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(he(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let i=this._tooltipInstance;i&&(i.isVisible()?i.hide(e):(i._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let s=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&s._origin instanceof O)return this._overlayRef;this._detach()}let i=this._injector.get(Gn).getAncestorScrollContainers(this._elementRef),r=`${this._cssClassPrefix}-${yT}`,o=Xh(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(i).withPopoverLocation("global");return o.positionChanges.pipe(he(this._destroyed)).subscribe(s=>{this._updateCurrentPositionClass(s.connectionPair),this._tooltipInstance&&s.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ta(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,r]:r,scrollStrategy:this._injector.get(f2)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(he(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(he(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(he(this._destroyed)).subscribe(s=>{s.preventDefault(),s.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(he(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let i=e.getConfig().positionStrategy,r=this._getOrigin(),o=this._getOverlayPosition();i.withPositions([this._addOffset(_(_({},r.main),o.main)),this._addOffset(_(_({},r.fallback),o.fallback))])}_addOffset(e){let i=_2,r=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-i:e.originY==="bottom"?e.offsetY=i:e.originX==="start"?e.offsetX=r?-i:i:e.originX==="end"&&(e.offsetX=r?i:-i),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"||i=="below"?r={originX:"center",originY:i=="above"?"top":"bottom"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={originX:"start",originY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={originX:"end",originY:"center"});let{x:o,y:s}=this._invertPosition(r.originX,r.originY);return{main:r,fallback:{originX:o,originY:s}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",i=this.position,r;i=="above"?r={overlayX:"center",overlayY:"bottom"}:i=="below"?r={overlayX:"center",overlayY:"top"}:i=="before"||i=="left"&&e||i=="right"&&!e?r={overlayX:"end",overlayY:"center"}:(i=="after"||i=="right"&&e||i=="left"&&!e)&&(r={overlayX:"start",overlayY:"center"});let{x:o,y:s}=this._invertPosition(r.overlayX,r.overlayY);return{main:r,fallback:{overlayX:o,overlayY:s}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),st(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,i){return this.position==="above"||this.position==="below"?i==="top"?i="bottom":i==="bottom"&&(i="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:i}}_updateCurrentPositionClass(e){let{overlayY:i,originX:r,originY:o}=e,s;if(i==="center"?this._dir&&this._dir.value==="rtl"?s=r==="end"?"left":"right":s=r==="start"?"left":"right":s=i==="bottom"&&o==="top"?"above":"below",s!==this._currentPosition){let a=this._overlayRef;if(a){let l=`${this._cssClassPrefix}-${yT}-`;a.removePanelClass(l+this._currentPosition),a.addPanelClass(l+s)}this._currentPosition=s}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let i=e.targetTouches?.[0],r=i?{x:i.clientX,y:i.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,r)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let i;e.x!==void 0&&e.y!==void 0&&(i=e),this.show(void 0,i)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let i=e.relatedTarget;(!i||!this._overlayRef?.overlayElement.contains(i))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let i=this._document.elementFromPoint(e.clientX,e.clientY),r=this._elementRef.nativeElement;i!==r&&!r.contains(i)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,i){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,i,m2))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let i=this._elementRef.nativeElement,r=i.style;(e==="on"||i.nodeName!=="INPUT"&&i.nodeName!=="TEXTAREA")&&(r.userSelect=r.msUserSelect=r.webkitUserSelect=r.MozUserSelect="none"),(e==="on"||!i.draggable)&&(r.webkitUserDrag="none"),r.touchAction="none",r.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||st({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!sn(e):!0;static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(i,r){i&2&&H("mat-mdc-tooltip-disabled",r.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return t})(),bT=(()=>{class t{_changeDetectorRef=u(Ee);_elementRef=u(O);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=Ve();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new E;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>v2&&e.width>=y2}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let i=this._tooltip.nativeElement,r=this._showAnimation,o=this._hideAnimation;if(i.classList.remove(e?o:r),i.classList.add(e?r:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let s=getComputedStyle(i);(s.getPropertyValue("animation-duration")==="0s"||s.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(i.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-tooltip-component"]],viewQuery:function(i,r){if(i&1&&it(u2,7),i&2){let o;z(o=$())&&(r._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(i,r){i&1&&q("mouseleave",function(s){return r._handleMouseLeave(s)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(i,r){i&1&&(jt(0,"div",1,0),Wu("animationend",function(s){return r._handleAnimationEnd(s)}),jt(2,"div",2),ye(3),on()()),i&2&&(Un(r.tooltipClass),H("mdc-tooltip--multiline",r._isMultiline),S(3),ut(r.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return t})();var wT=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[Kl,jo,Ce,_i]})}return t})();var be=(function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t})(be||{}),Qn="*";function DT(t,n=null){return{type:be.Sequence,steps:t,options:n}}function Dy(t){return{type:be.Style,styles:t,offset:null}}var Ki=class{_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_originalOnDoneFns=[];_originalOnStartFns=[];_started=!1;_destroyed=!1;_finished=!1;_position=0;parentPlayer=null;totalTime;constructor(n=0,e=0){this.totalTime=n+e}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(n=>n()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(n){this._position=this.totalTime?n*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},la=class{_onDoneFns=[];_onStartFns=[];_finished=!1;_started=!1;_destroyed=!1;_onDestroyFns=[];parentPlayer=null;totalTime=0;players;constructor(n){this.players=n;let e=0,i=0,r=0,o=this.players.length;o==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(s=>{s.onDone(()=>{++e==o&&this._onFinish()}),s.onDestroy(()=>{++i==o&&this._onDestroy()}),s.onStart(()=>{++r==o&&this._onStart()})}),this.totalTime=this.players.reduce((s,a)=>Math.max(s,a.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this.players.forEach(n=>n.init())}onStart(n){this._onStartFns.push(n)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(n=>n()),this._onStartFns=[])}onDone(n){this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(n=>n.play())}pause(){this.players.forEach(n=>n.pause())}restart(){this.players.forEach(n=>n.restart())}finish(){this._onFinish(),this.players.forEach(n=>n.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(n=>n.destroy()),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}reset(){this.players.forEach(n=>n.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(n){let e=n*this.totalTime;this.players.forEach(i=>{let r=i.totalTime?Math.min(1,e/i.totalTime):1;i.setPosition(r)})}getPosition(){let n=this.players.reduce((e,i)=>e===null||i.totalTime>e.totalTime?i:e,null);return n!=null?n.getPosition():0}beforeDestroy(){this.players.forEach(n=>{n.beforeDestroy&&n.beforeDestroy()})}triggerCallback(n){let e=n=="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},dc="!";function ET(t){return new w(3e3,!1)}function w2(){return new w(3100,!1)}function D2(){return new w(3101,!1)}function E2(t){return new w(3001,!1)}function C2(t){return new w(3003,!1)}function x2(t){return new w(3004,!1)}function xT(t,n){return new w(3005,!1)}function ST(){return new w(3006,!1)}function IT(){return new w(3007,!1)}function TT(t,n){return new w(3008,!1)}function MT(t){return new w(3002,!1)}function AT(t,n,e,i,r){return new w(3010,!1)}function kT(){return new w(3011,!1)}function RT(){return new w(3012,!1)}function NT(){return new w(3200,!1)}function OT(){return new w(3202,!1)}function PT(){return new w(3013,!1)}function FT(t){return new w(3014,!1)}function LT(t){return new w(3015,!1)}function BT(t){return new w(3016,!1)}function jT(t,n){return new w(3404,!1)}function S2(t){return new w(3502,!1)}function VT(t){return new w(3503,!1)}function HT(){return new w(3300,!1)}function UT(t){return new w(3504,!1)}function zT(t){return new w(3301,!1)}function $T(t,n){return new w(3302,!1)}function GT(t){return new w(3303,!1)}function WT(t,n){return new w(3400,!1)}function qT(t){return new w(3401,!1)}function YT(t){return new w(3402,!1)}function QT(t,n){return new w(3505,!1)}function Zi(t){switch(t.length){case 0:return new Ki;case 1:return t[0];default:return new la(t)}}function Sy(t,n,e=new Map,i=new Map){let r=[],o=[],s=-1,a=null;if(n.forEach(l=>{let c=l.get("offset"),d=c==s,h=d&&a||new Map;l.forEach((f,p)=>{let m=p,b=f;if(p!=="offset")switch(m=t.normalizePropertyName(m,r),b){case dc:b=e.get(p);break;case Qn:b=i.get(p);break;default:b=t.normalizeStyleValue(p,m,b,r);break}h.set(m,b)}),d||o.push(h),a=h,s=c}),r.length)throw S2(r);return o}function bf(t,n,e,i){switch(n){case"start":t.onStart(()=>i(e&&Ey(e,"start",t)));break;case"done":t.onDone(()=>i(e&&Ey(e,"done",t)));break;case"destroy":t.onDestroy(()=>i(e&&Ey(e,"destroy",t)));break}}function Ey(t,n,e){let i=e.totalTime,r=!!e.disabled,o=wf(t.element,t.triggerName,t.fromState,t.toState,n||t.phaseName,i??t.totalTime,r),s=t._data;return s!=null&&(o._data=s),o}function wf(t,n,e,i,r="",o=0,s){return{element:t,triggerName:n,fromState:e,toState:i,phaseName:r,totalTime:o,disabled:!!s}}function an(t,n,e){let i=t.get(n);return i||t.set(n,i=e),i}function Iy(t){let n=t.indexOf(":"),e=t.substring(1,n),i=t.slice(n+1);return[e,i]}var I2=typeof document>"u"?null:document.documentElement;function Df(t){let n=t.parentNode||t.host||null;return n===I2?null:n}function T2(t){return t.substring(1,6)=="ebkit"}var zo=null,CT=!1;function KT(t){zo||(zo=M2()||{},CT=zo.style?"WebkitAppearance"in zo.style:!1);let n=!0;return zo.style&&!T2(t)&&(n=t in zo.style,!n&&CT&&(n="Webkit"+t.charAt(0).toUpperCase()+t.slice(1)in zo.style)),n}function M2(){return typeof document<"u"?document.body:null}function Ty(t,n){for(;n;){if(n===t)return!0;n=Df(n)}return!1}function My(t,n,e){if(e)return Array.from(t.querySelectorAll(n));let i=t.querySelector(n);return i?[i]:[]}var A2=1e3,Ay="{{",k2="}}",ky="ng-enter",Ef="ng-leave",uc="ng-trigger",hc=".ng-trigger",Ry="ng-animating",Cf=".ng-animating";function vi(t){if(typeof t=="number")return t;let n=t.match(/^(-?[\.\d]+)(m?s)/);return!n||n.length<2?0:Cy(parseFloat(n[1]),n[2])}function Cy(t,n){return n==="s"?t*A2:t}function fc(t,n,e){return t.hasOwnProperty("duration")?t:N2(t,n,e)}var R2=/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;function N2(t,n,e){let i,r=0,o="";if(typeof t=="string"){let s=t.match(R2);if(s===null)return n.push(ET(t)),{duration:0,delay:0,easing:""};i=Cy(parseFloat(s[1]),s[2]);let a=s[3];a!=null&&(r=Cy(parseFloat(a),s[4]));let l=s[5];l&&(o=l)}else i=t;if(!e){let s=!1,a=n.length;i<0&&(n.push(w2()),s=!0),r<0&&(n.push(D2()),s=!0),s&&n.splice(a,0,ET(t))}return{duration:i,delay:r,easing:o}}function ZT(t){return t.length?t[0]instanceof Map?t:t.map(n=>new Map(Object.entries(n))):[]}function Kn(t,n,e){n.forEach((i,r)=>{let o=xf(r);e&&!e.has(r)&&e.set(r,t.style[o]),t.style[o]=i})}function Pr(t,n){n.forEach((e,i)=>{let r=xf(i);t.style[r]=""})}function ca(t){return Array.isArray(t)?t.length==1?t[0]:DT(t):t}function XT(t,n,e){let i=n.params||{},r=Ny(t);r.length&&r.forEach(o=>{i.hasOwnProperty(o)||e.push(E2(o))})}var xy=new RegExp(`${Ay}\\s*(.+?)\\s*${k2}`,"g");function Ny(t){let n=[];if(typeof t=="string"){let e;for(;e=xy.exec(t);)n.push(e[1]);xy.lastIndex=0}return n}function da(t,n,e){let i=`${t}`,r=i.replace(xy,(o,s)=>{let a=n[s];return a==null&&(e.push(C2(s)),a=""),a.toString()});return r==i?t:r}var O2=/-+([a-z0-9])/g;function xf(t){return t.replace(O2,(...n)=>n[1].toUpperCase())}function JT(t,n){return t===0||n===0}function eM(t,n,e){if(e.size&&n.length){let i=n[0],r=[];if(e.forEach((o,s)=>{i.has(s)||r.push(s),i.set(s,o)}),r.length)for(let o=1;o<n.length;o++){let s=n[o];r.forEach(a=>s.set(a,Sf(t,a)))}}return n}function ln(t,n,e){switch(n.type){case be.Trigger:return t.visitTrigger(n,e);case be.State:return t.visitState(n,e);case be.Transition:return t.visitTransition(n,e);case be.Sequence:return t.visitSequence(n,e);case be.Group:return t.visitGroup(n,e);case be.Animate:return t.visitAnimate(n,e);case be.Keyframes:return t.visitKeyframes(n,e);case be.Style:return t.visitStyle(n,e);case be.Reference:return t.visitReference(n,e);case be.AnimateChild:return t.visitAnimateChild(n,e);case be.AnimateRef:return t.visitAnimateRef(n,e);case be.Query:return t.visitQuery(n,e);case be.Stagger:return t.visitStagger(n,e);default:throw x2(n.type)}}function Sf(t,n){return window.getComputedStyle(t)[n]}var Ky=(()=>{class t{validateStyleProperty(e){return KT(e)}containsElement(e,i){return Ty(e,i)}getParentElement(e){return Df(e)}query(e,i,r){return My(e,i,r)}computeStyle(e,i,r){return r||""}animate(e,i,r,o,s,a=[],l){return new Ki(r,o)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),Go=class{static NOOP=new Ky},Wo=class{};var P2=new Set(["width","height","minWidth","minHeight","maxWidth","maxHeight","left","top","bottom","right","fontSize","outlineWidth","outlineOffset","paddingTop","paddingLeft","paddingBottom","paddingRight","marginTop","marginLeft","marginBottom","marginRight","borderRadius","borderWidth","borderTopWidth","borderLeftWidth","borderRightWidth","borderBottomWidth","textIndent","perspective"]),kf=class extends Wo{normalizePropertyName(n,e){return xf(n)}normalizeStyleValue(n,e,i,r){let o="",s=i.toString().trim();if(P2.has(e)&&i!==0&&i!=="0")if(typeof i=="number")o="px";else{let a=i.match(/^[+-]?[\d\.]+([a-z]*)$/);a&&a[1].length==0&&r.push(xT(n,i))}return s+o}};var Rf="*";function F2(t,n){let e=[];return typeof t=="string"?t.split(/\s*,\s*/).forEach(i=>L2(i,e,n)):e.push(t),e}function L2(t,n,e){if(t[0]==":"){let l=B2(t,e);if(typeof l=="function"){n.push(l);return}t=l}let i=t.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);if(i==null||i.length<4)return e.push(LT(t)),n;let r=i[1],o=i[2],s=i[3];n.push(tM(r,s));let a=r==Rf&&s==Rf;o[0]=="<"&&!a&&n.push(tM(s,r))}function B2(t,n){switch(t){case":enter":return"void => *";case":leave":return"* => void";case":increment":return(e,i)=>parseFloat(i)>parseFloat(e);case":decrement":return(e,i)=>parseFloat(i)<parseFloat(e);default:return n.push(BT(t)),"* => *"}}var If=new Set(["true","1"]),Tf=new Set(["false","0"]);function tM(t,n){let e=If.has(t)||Tf.has(t),i=If.has(n)||Tf.has(n);return(r,o)=>{let s=t==Rf||t==r,a=n==Rf||n==o;return!s&&e&&typeof r=="boolean"&&(s=r?If.has(t):Tf.has(t)),!a&&i&&typeof o=="boolean"&&(a=o?If.has(n):Tf.has(n)),s&&a}}var uM=":self",j2=new RegExp(`s*${uM}s*,?`,"g");function hM(t,n,e,i){return new jy(t).build(n,e,i)}var nM="",jy=class{_driver;constructor(n){this._driver=n}build(n,e,i){let r=new Vy(e);return this._resetContextStyleTimingState(r),ln(this,ca(n),r)}_resetContextStyleTimingState(n){n.currentQuerySelector=nM,n.collectedStyles=new Map,n.collectedStyles.set(nM,new Map),n.currentTime=0}visitTrigger(n,e){let i=e.queryCount=0,r=e.depCount=0,o=[],s=[];return n.name.charAt(0)=="@"&&e.errors.push(ST()),n.definitions.forEach(a=>{if(this._resetContextStyleTimingState(e),a.type==be.State){let l=a,c=l.name;c.toString().split(/\s*,\s*/).forEach(d=>{l.name=d,o.push(this.visitState(l,e))}),l.name=c}else if(a.type==be.Transition){let l=this.visitTransition(a,e);i+=l.queryCount,r+=l.depCount,s.push(l)}else e.errors.push(IT())}),{type:be.Trigger,name:n.name,states:o,transitions:s,queryCount:i,depCount:r,options:null}}visitState(n,e){let i=this.visitStyle(n.styles,e),r=n.options&&n.options.params||null;if(i.containsDynamicStyles){let o=new Set,s=r||{};i.styles.forEach(a=>{a instanceof Map&&a.forEach(l=>{Ny(l).forEach(c=>{s.hasOwnProperty(c)||o.add(c)})})}),o.size&&e.errors.push(TT(n.name,[...o.values()]))}return{type:be.State,name:n.name,style:i,options:r?{params:r}:null}}visitTransition(n,e){e.queryCount=0,e.depCount=0;let i=ln(this,ca(n.animation),e),r=F2(n.expr,e.errors);return{type:be.Transition,matchers:r,animation:i,queryCount:e.queryCount,depCount:e.depCount,options:$o(n.options)}}visitSequence(n,e){return{type:be.Sequence,steps:n.steps.map(i=>ln(this,i,e)),options:$o(n.options)}}visitGroup(n,e){let i=e.currentTime,r=0,o=n.steps.map(s=>{e.currentTime=i;let a=ln(this,s,e);return r=Math.max(r,e.currentTime),a});return e.currentTime=r,{type:be.Group,steps:o,options:$o(n.options)}}visitAnimate(n,e){let i=z2(n.timings,e.errors);e.currentAnimateTimings=i;let r,o=n.styles?n.styles:Dy({});if(o.type==be.Keyframes)r=this.visitKeyframes(o,e);else{let s=n.styles,a=!1;if(!s){a=!0;let c={};i.easing&&(c.easing=i.easing),s=Dy(c)}e.currentTime+=i.duration+i.delay;let l=this.visitStyle(s,e);l.isEmptyStep=a,r=l}return e.currentAnimateTimings=null,{type:be.Animate,timings:i,style:r,options:null}}visitStyle(n,e){let i=this._makeStyleAst(n,e);return this._validateStyleAst(i,e),i}_makeStyleAst(n,e){let i=[],r=Array.isArray(n.styles)?n.styles:[n.styles];for(let a of r)typeof a=="string"?a===Qn?i.push(a):e.errors.push(MT(a)):i.push(new Map(Object.entries(a)));let o=!1,s=null;return i.forEach(a=>{if(a instanceof Map&&(a.has("easing")&&(s=a.get("easing"),a.delete("easing")),!o)){for(let l of a.values())if(l.toString().indexOf(Ay)>=0){o=!0;break}}}),{type:be.Style,styles:i,easing:s,offset:n.offset,containsDynamicStyles:o,options:null}}_validateStyleAst(n,e){let i=e.currentAnimateTimings,r=e.currentTime,o=e.currentTime;i&&o>0&&(o-=i.duration+i.delay),n.styles.forEach(s=>{typeof s!="string"&&s.forEach((a,l)=>{let c=e.collectedStyles.get(e.currentQuerySelector),d=c.get(l),h=!0;d&&(o!=r&&o>=d.startTime&&r<=d.endTime&&(e.errors.push(AT(l,d.startTime,d.endTime,o,r)),h=!1),o=d.startTime),h&&c.set(l,{startTime:o,endTime:r}),e.options&&XT(a,e.options,e.errors)})})}visitKeyframes(n,e){let i={type:be.Keyframes,styles:[],options:null};if(!e.currentAnimateTimings)return e.errors.push(kT()),i;let r=1,o=0,s=[],a=!1,l=!1,c=0,d=n.steps.map(M=>{let Y=this._makeStyleAst(M,e),we=Y.offset!=null?Y.offset:U2(Y.styles),ve=0;return we!=null&&(o++,ve=Y.offset=we),l=l||ve<0||ve>1,a=a||ve<c,c=ve,s.push(ve),Y});l&&e.errors.push(RT()),a&&e.errors.push(NT());let h=n.steps.length,f=0;o>0&&o<h?e.errors.push(OT()):o==0&&(f=r/(h-1));let p=h-1,m=e.currentTime,b=e.currentAnimateTimings,C=b.duration;return d.forEach((M,Y)=>{let we=f>0?Y==p?1:f*Y:s[Y],ve=we*C;e.currentTime=m+b.delay+ve,b.duration=ve,this._validateStyleAst(M,e),M.offset=we,i.styles.push(M)}),i}visitReference(n,e){return{type:be.Reference,animation:ln(this,ca(n.animation),e),options:$o(n.options)}}visitAnimateChild(n,e){return e.depCount++,{type:be.AnimateChild,options:$o(n.options)}}visitAnimateRef(n,e){return{type:be.AnimateRef,animation:this.visitReference(n.animation,e),options:$o(n.options)}}visitQuery(n,e){let i=e.currentQuerySelector,r=n.options||{};e.queryCount++,e.currentQuery=n;let[o,s]=V2(n.selector);e.currentQuerySelector=i.length?i+" "+o:o,an(e.collectedStyles,e.currentQuerySelector,new Map);let a=ln(this,ca(n.animation),e);return e.currentQuery=null,e.currentQuerySelector=i,{type:be.Query,selector:o,limit:r.limit||0,optional:!!r.optional,includeSelf:s,animation:a,originalSelector:n.selector,options:$o(n.options)}}visitStagger(n,e){e.currentQuery||e.errors.push(PT());let i=n.timings==="full"?{duration:0,delay:0,easing:"full"}:fc(n.timings,e.errors,!0);return{type:be.Stagger,animation:ln(this,ca(n.animation),e),timings:i,options:null}}};function V2(t){let n=!!t.split(/\s*,\s*/).find(e=>e==uM);return n&&(t=t.replace(j2,"")),t=t.replace(/@\*/g,hc).replace(/@\w+/g,e=>hc+"-"+e.slice(1)).replace(/:animating/g,Cf),[t,n]}function H2(t){return t?_({},t):null}var Vy=class{errors;queryCount=0;depCount=0;currentTransition=null;currentQuery=null;currentQuerySelector=null;currentAnimateTimings=null;currentTime=0;collectedStyles=new Map;options=null;unsupportedCSSPropertiesFound=new Set;constructor(n){this.errors=n}};function U2(t){if(typeof t=="string")return null;let n=null;if(Array.isArray(t))t.forEach(e=>{if(e instanceof Map&&e.has("offset")){let i=e;n=parseFloat(i.get("offset")),i.delete("offset")}});else if(t instanceof Map&&t.has("offset")){let e=t;n=parseFloat(e.get("offset")),e.delete("offset")}return n}function z2(t,n){if(t.hasOwnProperty("duration"))return t;if(typeof t=="number"){let o=fc(t,n).duration;return Oy(o,0,"")}let e=t;if(e.split(/\s+/).some(o=>o.charAt(0)=="{"&&o.charAt(1)=="{")){let o=Oy(0,0,"");return o.dynamic=!0,o.strValue=e,o}let r=fc(e,n);return Oy(r.duration,r.delay,r.easing)}function $o(t){return t?(t=_({},t),t.params&&(t.params=H2(t.params))):t={},t}function Oy(t,n,e){return{duration:t,delay:n,easing:e}}function Zy(t,n,e,i,r,o,s=null,a=!1){return{type:1,element:t,keyframes:n,preStyleProps:e,postStyleProps:i,duration:r,delay:o,totalTime:r+o,easing:s,subTimeline:a}}var mc=class{_map=new Map;get(n){return this._map.get(n)||[]}append(n,e){let i=this._map.get(n);i||this._map.set(n,i=[]),i.push(...e)}has(n){return this._map.has(n)}clear(){this._map.clear()}},$2=1,G2=":enter",W2=new RegExp(G2,"g"),q2=":leave",Y2=new RegExp(q2,"g");function fM(t,n,e,i,r,o=new Map,s=new Map,a,l,c=[]){return new Hy().buildKeyframes(t,n,e,i,r,o,s,a,l,c)}var Hy=class{buildKeyframes(n,e,i,r,o,s,a,l,c,d=[]){c=c||new mc;let h=new Uy(n,e,c,r,o,d,[]);h.options=l;let f=l.delay?vi(l.delay):0;h.currentTimeline.delayNextStep(f),h.currentTimeline.setStyles([s],null,h.errors,l),ln(this,i,h);let p=h.timelines.filter(m=>m.containsAnimation());if(p.length&&a.size){let m;for(let b=p.length-1;b>=0;b--){let C=p[b];if(C.element===e){m=C;break}}m&&!m.allowOnlyTimelineStyles()&&m.setStyles([a],null,h.errors,l)}return p.length?p.map(m=>m.buildKeyframes()):[Zy(e,[],[],[],0,f,"",!1)]}visitTrigger(n,e){}visitState(n,e){}visitTransition(n,e){}visitAnimateChild(n,e){let i=e.subInstructions.get(e.element);if(i){let r=e.createSubContext(n.options),o=e.currentTimeline.currentTime,s=this._visitSubInstructions(i,r,r.options);o!=s&&e.transformIntoNewTimeline(s)}e.previousNode=n}visitAnimateRef(n,e){let i=e.createSubContext(n.options);i.transformIntoNewTimeline(),this._applyAnimationRefDelays([n.options,n.animation.options],e,i),this.visitReference(n.animation,i),e.transformIntoNewTimeline(i.currentTimeline.currentTime),e.previousNode=n}_applyAnimationRefDelays(n,e,i){for(let r of n){let o=r?.delay;if(o){let s=typeof o=="number"?o:vi(da(o,r?.params??{},e.errors));i.delayNextStep(s)}}}_visitSubInstructions(n,e,i){let o=e.currentTimeline.currentTime,s=i.duration!=null?vi(i.duration):null,a=i.delay!=null?vi(i.delay):null;return s!==0&&n.forEach(l=>{let c=e.appendInstructionToTimeline(l,s,a);o=Math.max(o,c.duration+c.delay)}),o}visitReference(n,e){e.updateOptions(n.options,!0),ln(this,n.animation,e),e.previousNode=n}visitSequence(n,e){let i=e.subContextCount,r=e,o=n.options;if(o&&(o.params||o.delay)&&(r=e.createSubContext(o),r.transformIntoNewTimeline(),o.delay!=null)){r.previousNode.type==be.Style&&(r.currentTimeline.snapshotCurrentStyles(),r.previousNode=Nf);let s=vi(o.delay);r.delayNextStep(s)}n.steps.length&&(n.steps.forEach(s=>ln(this,s,r)),r.currentTimeline.applyStylesToKeyframe(),r.subContextCount>i&&r.transformIntoNewTimeline()),e.previousNode=n}visitGroup(n,e){let i=[],r=e.currentTimeline.currentTime,o=n.options&&n.options.delay?vi(n.options.delay):0;n.steps.forEach(s=>{let a=e.createSubContext(n.options);o&&a.delayNextStep(o),ln(this,s,a),r=Math.max(r,a.currentTimeline.currentTime),i.push(a.currentTimeline)}),i.forEach(s=>e.currentTimeline.mergeTimelineCollectedStyles(s)),e.transformIntoNewTimeline(r),e.previousNode=n}_visitTiming(n,e){if(n.dynamic){let i=n.strValue,r=e.params?da(i,e.params,e.errors):i;return fc(r,e.errors)}else return{duration:n.duration,delay:n.delay,easing:n.easing}}visitAnimate(n,e){let i=e.currentAnimateTimings=this._visitTiming(n.timings,e),r=e.currentTimeline;i.delay&&(e.incrementTime(i.delay),r.snapshotCurrentStyles());let o=n.style;o.type==be.Keyframes?this.visitKeyframes(o,e):(e.incrementTime(i.duration),this.visitStyle(o,e),r.applyStylesToKeyframe()),e.currentAnimateTimings=null,e.previousNode=n}visitStyle(n,e){let i=e.currentTimeline,r=e.currentAnimateTimings;!r&&i.hasCurrentStyleProperties()&&i.forwardFrame();let o=r&&r.easing||n.easing;n.isEmptyStep?i.applyEmptyStep(o):i.setStyles(n.styles,o,e.errors,e.options),e.previousNode=n}visitKeyframes(n,e){let i=e.currentAnimateTimings,r=e.currentTimeline.duration,o=i.duration,a=e.createSubContext().currentTimeline;a.easing=i.easing,n.styles.forEach(l=>{let c=l.offset||0;a.forwardTime(c*o),a.setStyles(l.styles,l.easing,e.errors,e.options),a.applyStylesToKeyframe()}),e.currentTimeline.mergeTimelineCollectedStyles(a),e.transformIntoNewTimeline(r+o),e.previousNode=n}visitQuery(n,e){let i=e.currentTimeline.currentTime,r=n.options||{},o=r.delay?vi(r.delay):0;o&&(e.previousNode.type===be.Style||i==0&&e.currentTimeline.hasCurrentStyleProperties())&&(e.currentTimeline.snapshotCurrentStyles(),e.previousNode=Nf);let s=i,a=e.invokeQuery(n.selector,n.originalSelector,n.limit,n.includeSelf,!!r.optional,e.errors);e.currentQueryTotal=a.length;let l=null;a.forEach((c,d)=>{e.currentQueryIndex=d;let h=e.createSubContext(n.options,c);o&&h.delayNextStep(o),c===e.element&&(l=h.currentTimeline),ln(this,n.animation,h),h.currentTimeline.applyStylesToKeyframe();let f=h.currentTimeline.currentTime;s=Math.max(s,f)}),e.currentQueryIndex=0,e.currentQueryTotal=0,e.transformIntoNewTimeline(s),l&&(e.currentTimeline.mergeTimelineCollectedStyles(l),e.currentTimeline.snapshotCurrentStyles()),e.previousNode=n}visitStagger(n,e){let i=e.parentContext,r=e.currentTimeline,o=n.timings,s=Math.abs(o.duration),a=s*(e.currentQueryTotal-1),l=s*e.currentQueryIndex;switch(o.duration<0?"reverse":o.easing){case"reverse":l=a-l;break;case"full":l=i.currentStaggerTime;break}let d=e.currentTimeline;l&&d.delayNextStep(l);let h=d.currentTime;ln(this,n.animation,e),e.previousNode=n,i.currentStaggerTime=r.currentTime-h+(r.startTime-i.currentTimeline.startTime)}},Nf={},Uy=class t{_driver;element;subInstructions;_enterClassName;_leaveClassName;errors;timelines;parentContext=null;currentTimeline;currentAnimateTimings=null;previousNode=Nf;subContextCount=0;options={};currentQueryIndex=0;currentQueryTotal=0;currentStaggerTime=0;constructor(n,e,i,r,o,s,a,l){this._driver=n,this.element=e,this.subInstructions=i,this._enterClassName=r,this._leaveClassName=o,this.errors=s,this.timelines=a,this.currentTimeline=l||new Of(this._driver,e,0),a.push(this.currentTimeline)}get params(){return this.options.params}updateOptions(n,e){if(!n)return;let i=n,r=this.options;i.duration!=null&&(r.duration=vi(i.duration)),i.delay!=null&&(r.delay=vi(i.delay));let o=i.params;if(o){let s=r.params;s||(s=this.options.params={}),Object.keys(o).forEach(a=>{(!e||!s.hasOwnProperty(a))&&(s[a]=da(o[a],s,this.errors))})}}_copyOptions(){let n={};if(this.options){let e=this.options.params;if(e){let i=n.params={};Object.keys(e).forEach(r=>{i[r]=e[r]})}}return n}createSubContext(n=null,e,i){let r=e||this.element,o=new t(this._driver,r,this.subInstructions,this._enterClassName,this._leaveClassName,this.errors,this.timelines,this.currentTimeline.fork(r,i||0));return o.previousNode=this.previousNode,o.currentAnimateTimings=this.currentAnimateTimings,o.options=this._copyOptions(),o.updateOptions(n),o.currentQueryIndex=this.currentQueryIndex,o.currentQueryTotal=this.currentQueryTotal,o.parentContext=this,this.subContextCount++,o}transformIntoNewTimeline(n){return this.previousNode=Nf,this.currentTimeline=this.currentTimeline.fork(this.element,n),this.timelines.push(this.currentTimeline),this.currentTimeline}appendInstructionToTimeline(n,e,i){let r={duration:e??n.duration,delay:this.currentTimeline.currentTime+(i??0)+n.delay,easing:""},o=new zy(this._driver,n.element,n.keyframes,n.preStyleProps,n.postStyleProps,r,n.stretchStartingKeyframe);return this.timelines.push(o),r}incrementTime(n){this.currentTimeline.forwardTime(this.currentTimeline.duration+n)}delayNextStep(n){n>0&&this.currentTimeline.delayNextStep(n)}invokeQuery(n,e,i,r,o,s){let a=[];if(r&&a.push(this.element),n.length>0){n=n.replace(W2,"."+this._enterClassName),n=n.replace(Y2,"."+this._leaveClassName);let l=i!=1,c=this._driver.query(this.element,n,l);i!==0&&(c=i<0?c.slice(c.length+i,c.length):c.slice(0,i)),a.push(...c)}return!o&&a.length==0&&s.push(FT(e)),a}},Of=class t{_driver;element;startTime;_elementTimelineStylesLookup;duration=0;easing=null;_previousKeyframe=new Map;_currentKeyframe=new Map;_keyframes=new Map;_styleSummary=new Map;_localTimelineStyles=new Map;_globalTimelineStyles;_pendingStyles=new Map;_backFill=new Map;_currentEmptyStepKeyframe=null;constructor(n,e,i,r){this._driver=n,this.element=e,this.startTime=i,this._elementTimelineStylesLookup=r,this._elementTimelineStylesLookup||(this._elementTimelineStylesLookup=new Map),this._globalTimelineStyles=this._elementTimelineStylesLookup.get(e),this._globalTimelineStyles||(this._globalTimelineStyles=this._localTimelineStyles,this._elementTimelineStylesLookup.set(e,this._localTimelineStyles)),this._loadKeyframe()}containsAnimation(){switch(this._keyframes.size){case 0:return!1;case 1:return this.hasCurrentStyleProperties();default:return!0}}hasCurrentStyleProperties(){return this._currentKeyframe.size>0}get currentTime(){return this.startTime+this.duration}delayNextStep(n){let e=this._keyframes.size===1&&this._pendingStyles.size;this.duration||e?(this.forwardTime(this.currentTime+n),e&&this.snapshotCurrentStyles()):this.startTime+=n}fork(n,e){return this.applyStylesToKeyframe(),new t(this._driver,n,e||this.currentTime,this._elementTimelineStylesLookup)}_loadKeyframe(){this._currentKeyframe&&(this._previousKeyframe=this._currentKeyframe),this._currentKeyframe=this._keyframes.get(this.duration),this._currentKeyframe||(this._currentKeyframe=new Map,this._keyframes.set(this.duration,this._currentKeyframe))}forwardFrame(){this.duration+=$2,this._loadKeyframe()}forwardTime(n){this.applyStylesToKeyframe(),this.duration=n,this._loadKeyframe()}_updateStyle(n,e){this._localTimelineStyles.set(n,e),this._globalTimelineStyles.set(n,e),this._styleSummary.set(n,{time:this.currentTime,value:e})}allowOnlyTimelineStyles(){return this._currentEmptyStepKeyframe!==this._currentKeyframe}applyEmptyStep(n){n&&this._previousKeyframe.set("easing",n);for(let[e,i]of this._globalTimelineStyles)this._backFill.set(e,i||Qn),this._currentKeyframe.set(e,Qn);this._currentEmptyStepKeyframe=this._currentKeyframe}setStyles(n,e,i,r){e&&this._previousKeyframe.set("easing",e);let o=r&&r.params||{},s=Q2(n,this._globalTimelineStyles);for(let[a,l]of s){let c=da(l,o,i);this._pendingStyles.set(a,c),this._localTimelineStyles.has(a)||this._backFill.set(a,this._globalTimelineStyles.get(a)??Qn),this._updateStyle(a,c)}}applyStylesToKeyframe(){this._pendingStyles.size!=0&&(this._pendingStyles.forEach((n,e)=>{this._currentKeyframe.set(e,n)}),this._pendingStyles.clear(),this._localTimelineStyles.forEach((n,e)=>{this._currentKeyframe.has(e)||this._currentKeyframe.set(e,n)}))}snapshotCurrentStyles(){for(let[n,e]of this._localTimelineStyles)this._pendingStyles.set(n,e),this._updateStyle(n,e)}getFinalKeyframe(){return this._keyframes.get(this.duration)}get properties(){let n=[];for(let e in this._currentKeyframe)n.push(e);return n}mergeTimelineCollectedStyles(n){n._styleSummary.forEach((e,i)=>{let r=this._styleSummary.get(i);(!r||e.time>r.time)&&this._updateStyle(i,e.value)})}buildKeyframes(){this.applyStylesToKeyframe();let n=new Set,e=new Set,i=this._keyframes.size===1&&this.duration===0,r=[];this._keyframes.forEach((a,l)=>{let c=new Map([...this._backFill,...a]);c.forEach((d,h)=>{d===dc?n.add(h):d===Qn&&e.add(h)}),i||c.set("offset",l/this.duration),r.push(c)});let o=[...n.values()],s=[...e.values()];if(i){let a=r[0],l=new Map(a);a.set("offset",0),l.set("offset",1),r=[a,l]}return Zy(this.element,r,o,s,this.duration,this.startTime,this.easing,!1)}},zy=class extends Of{keyframes;preStyleProps;postStyleProps;_stretchStartingKeyframe;timings;constructor(n,e,i,r,o,s,a=!1){super(n,e,s.delay),this.keyframes=i,this.preStyleProps=r,this.postStyleProps=o,this._stretchStartingKeyframe=a,this.timings={duration:s.duration,delay:s.delay,easing:s.easing}}containsAnimation(){return this.keyframes.length>1}buildKeyframes(){let n=this.keyframes,{delay:e,duration:i,easing:r}=this.timings;if(this._stretchStartingKeyframe&&e){let o=[],s=i+e,a=e/s,l=new Map(n[0]);l.set("offset",0),o.push(l);let c=new Map(n[0]);c.set("offset",iM(a)),o.push(c);let d=n.length-1;for(let h=1;h<=d;h++){let f=new Map(n[h]),p=f.get("offset"),m=e+p*i;f.set("offset",iM(m/s)),o.push(f)}i=s,e=0,r="",n=o}return Zy(this.element,n,this.preStyleProps,this.postStyleProps,i,e,r,!0)}};function iM(t,n=3){let e=Math.pow(10,n-1);return Math.round(t*e)/e}function Q2(t,n){let e=new Map,i;return t.forEach(r=>{if(r==="*"){i??=n.keys();for(let o of i)e.set(o,Qn)}else for(let[o,s]of r)e.set(o,s)}),e}function rM(t,n,e,i,r,o,s,a,l,c,d,h,f){return{type:0,element:t,triggerName:n,isRemovalTransition:r,fromState:e,fromStyles:o,toState:i,toStyles:s,timelines:a,queriedElements:l,preStyleProps:c,postStyleProps:d,totalTime:h,errors:f}}var Py={},Pf=class{_triggerName;ast;_stateStyles;constructor(n,e,i){this._triggerName=n,this.ast=e,this._stateStyles=i}match(n,e,i,r){return K2(this.ast.matchers,n,e,i,r)}buildStyles(n,e,i){let r=this._stateStyles.get("*");return n!==void 0&&(r=this._stateStyles.get(n?.toString())||r),r?r.buildStyles(e,i):new Map}build(n,e,i,r,o,s,a,l,c,d){let h=[],f=this.ast.options&&this.ast.options.params||Py,p=a&&a.params||Py,m=this.buildStyles(i,p,h),b=l&&l.params||Py,C=this.buildStyles(r,b,h),M=new Set,Y=new Map,we=new Map,ve=r==="void",Ut={params:pM(b,f),delay:this.ast.options?.delay},Nt=d?[]:fM(n,e,this.ast.animation,o,s,m,C,Ut,c,h),Xe=0;return Nt.forEach(Jt=>{Xe=Math.max(Jt.duration+Jt.delay,Xe)}),h.length?rM(e,this._triggerName,i,r,ve,m,C,[],[],Y,we,Xe,h):(Nt.forEach(Jt=>{let zr=Jt.element,is=an(Y,zr,new Set);Jt.preStyleProps.forEach($r=>is.add($r));let iw=an(we,zr,new Set);Jt.postStyleProps.forEach($r=>iw.add($r)),zr!==e&&M.add(zr)}),rM(e,this._triggerName,i,r,ve,m,C,Nt,[...M.values()],Y,we,Xe))}};function K2(t,n,e,i,r){return t.some(o=>o(n,e,i,r))}function pM(t,n){let e=_({},n);return Object.entries(t).forEach(([i,r])=>{r!=null&&(e[i]=r)}),e}var $y=class{styles;defaultParams;normalizer;constructor(n,e,i){this.styles=n,this.defaultParams=e,this.normalizer=i}buildStyles(n,e){let i=new Map,r=pM(n,this.defaultParams);return this.styles.styles.forEach(o=>{typeof o!="string"&&o.forEach((s,a)=>{s&&(s=da(s,r,e));let l=this.normalizer.normalizePropertyName(a,e);s=this.normalizer.normalizeStyleValue(a,l,s,e),i.set(a,s)})}),i}};function Z2(t,n,e){return new Gy(t,n,e)}var Gy=class{name;ast;_normalizer;transitionFactories=[];fallbackTransition;states=new Map;constructor(n,e,i){this.name=n,this.ast=e,this._normalizer=i,e.states.forEach(r=>{let o=r.options&&r.options.params||{};this.states.set(r.name,new $y(r.style,o,i))}),oM(this.states,"true","1"),oM(this.states,"false","0"),e.transitions.forEach(r=>{this.transitionFactories.push(new Pf(n,r,this.states))}),this.fallbackTransition=X2(n,this.states)}get containsQueries(){return this.ast.queryCount>0}matchTransition(n,e,i,r){return this.transitionFactories.find(s=>s.match(n,e,i,r))||null}matchStyles(n,e,i){return this.fallbackTransition.buildStyles(n,e,i)}};function X2(t,n,e){let i=[(s,a)=>!0],r={type:be.Sequence,steps:[],options:null},o={type:be.Transition,animation:r,matchers:i,options:null,queryCount:0,depCount:0};return new Pf(t,o,n)}function oM(t,n,e){t.has(n)?t.has(e)||t.set(e,t.get(n)):t.has(e)&&t.set(n,t.get(e))}var J2=new mc,Wy=class{bodyNode;_driver;_normalizer;_animations=new Map;_playersById=new Map;players=[];constructor(n,e,i){this.bodyNode=n,this._driver=e,this._normalizer=i}register(n,e){let i=[],r=[],o=hM(this._driver,e,i,r);if(i.length)throw VT(i);this._animations.set(n,o)}_buildPlayer(n,e,i){let r=n.element,o=Sy(this._normalizer,n.keyframes,e,i);return this._driver.animate(r,o,n.duration,n.delay,n.easing,[],!0)}create(n,e,i={}){let r=[],o=this._animations.get(n),s,a=new Map;if(o?(s=fM(this._driver,e,o,ky,Ef,new Map,new Map,i,J2,r),s.forEach(d=>{let h=an(a,d.element,new Map);d.postStyleProps.forEach(f=>h.set(f,null))})):(r.push(HT()),s=[]),r.length)throw UT(r);a.forEach((d,h)=>{d.forEach((f,p)=>{d.set(p,this._driver.computeStyle(h,p,Qn))})});let l=s.map(d=>{let h=a.get(d.element);return this._buildPlayer(d,new Map,h)}),c=Zi(l);return this._playersById.set(n,c),c.onDestroy(()=>this.destroy(n)),this.players.push(c),c}destroy(n){let e=this._getPlayer(n);e.destroy(),this._playersById.delete(n);let i=this.players.indexOf(e);i>=0&&this.players.splice(i,1)}_getPlayer(n){let e=this._playersById.get(n);if(!e)throw zT(n);return e}listen(n,e,i,r){let o=wf(e,"","","");return bf(this._getPlayer(n),i,o,r),()=>{}}command(n,e,i,r){if(i=="register"){this.register(n,r[0]);return}if(i=="create"){let s=r[0]||{};this.create(n,e,s);return}let o=this._getPlayer(n);switch(i){case"play":o.play();break;case"pause":o.pause();break;case"reset":o.reset();break;case"restart":o.restart();break;case"finish":o.finish();break;case"init":o.init();break;case"setPosition":o.setPosition(parseFloat(r[0]));break;case"destroy":this.destroy(n);break}}},sM="ng-animate-queued",eH=".ng-animate-queued",Fy="ng-animate-disabled",tH=".ng-animate-disabled",nH="ng-star-inserted",iH=".ng-star-inserted",rH=[],mM={namespaceId:"",setForRemoval:!1,setForMove:!1,hasAnimation:!1,removedBeforeQueried:!1},oH={namespaceId:"",setForMove:!1,setForRemoval:!1,hasAnimation:!1,removedBeforeQueried:!0},Zn="__ng_removed",gc=class{namespaceId;value;options;get params(){return this.options.params}constructor(n,e=""){this.namespaceId=e;let i=n&&n.hasOwnProperty("value"),r=i?n.value:n;if(this.value=aH(r),i){let o=n,{value:s}=o,a=Oa(o,["value"]);this.options=a}else this.options={};this.options.params||(this.options.params={})}absorbOptions(n){let e=n.params;if(e){let i=this.options.params;Object.keys(e).forEach(r=>{i[r]==null&&(i[r]=e[r])})}}},pc="void",Ly=new gc(pc),qy=class{id;hostElement;_engine;players=[];_triggers=new Map;_queue=[];_elementListeners=new Map;_hostClassName;constructor(n,e,i){this.id=n,this.hostElement=e,this._engine=i,this._hostClassName="ng-tns-"+n,In(e,this._hostClassName)}listen(n,e,i,r){if(!this._triggers.has(e))throw $T(i,e);if(i==null||i.length==0)throw GT(e);if(!lH(i))throw WT(i,e);let o=an(this._elementListeners,n,[]),s={name:e,phase:i,callback:r};o.push(s);let a=an(this._engine.statesByElement,n,new Map);return a.has(e)||(In(n,uc),In(n,uc+"-"+e),a.set(e,Ly)),()=>{this._engine.afterFlush(()=>{let l=o.indexOf(s);l>=0&&o.splice(l,1),this._triggers.has(e)||a.delete(e)})}}register(n,e){return this._triggers.has(n)?!1:(this._triggers.set(n,e),!0)}_getTrigger(n){let e=this._triggers.get(n);if(!e)throw qT(n);return e}trigger(n,e,i,r=!0){let o=this._getTrigger(e),s=new _c(this.id,e,n),a=this._engine.statesByElement.get(n);a||(In(n,uc),In(n,uc+"-"+e),this._engine.statesByElement.set(n,a=new Map));let l=a.get(e),c=new gc(i,this.id);if(!(i&&i.hasOwnProperty("value"))&&l&&c.absorbOptions(l.options),a.set(e,c),l||(l=Ly),!(c.value===pc)&&l.value===c.value){if(!uH(l.params,c.params)){let b=[],C=o.matchStyles(l.value,l.params,b),M=o.matchStyles(c.value,c.params,b);b.length?this._engine.reportError(b):this._engine.afterFlush(()=>{Pr(n,C),Kn(n,M)})}return}let f=an(this._engine.playersByElement,n,[]);f.forEach(b=>{b.namespaceId==this.id&&b.triggerName==e&&b.queued&&b.destroy()});let p=o.matchTransition(l.value,c.value,n,c.params),m=!1;if(!p){if(!r)return;p=o.fallbackTransition,m=!0}return this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:e,transition:p,fromState:l,toState:c,player:s,isFallbackTransition:m}),m||(In(n,sM),s.onStart(()=>{ua(n,sM)})),s.onDone(()=>{let b=this.players.indexOf(s);b>=0&&this.players.splice(b,1);let C=this._engine.playersByElement.get(n);if(C){let M=C.indexOf(s);M>=0&&C.splice(M,1)}}),this.players.push(s),f.push(s),s}deregister(n){this._triggers.delete(n),this._engine.statesByElement.forEach(e=>e.delete(n)),this._elementListeners.forEach((e,i)=>{this._elementListeners.set(i,e.filter(r=>r.name!=n))})}clearElementCache(n){this._engine.statesByElement.delete(n),this._elementListeners.delete(n);let e=this._engine.playersByElement.get(n);e&&(e.forEach(i=>i.destroy()),this._engine.playersByElement.delete(n))}_signalRemovalForInnerTriggers(n,e){let i=this._engine.driver.query(n,hc,!0);i.forEach(r=>{if(r[Zn])return;let o=this._engine.fetchNamespacesByElement(r);o.size?o.forEach(s=>s.triggerLeaveAnimation(r,e,!1,!0)):this.clearElementCache(r)}),this._engine.afterFlushAnimationsDone(()=>i.forEach(r=>this.clearElementCache(r)))}triggerLeaveAnimation(n,e,i,r){let o=this._engine.statesByElement.get(n),s=new Map;if(o){let a=[];if(o.forEach((l,c)=>{if(s.set(c,l.value),this._triggers.has(c)){let d=this.trigger(n,c,pc,r);d&&a.push(d)}}),a.length)return this._engine.markElementAsRemoved(this.id,n,!0,e,s),i&&Zi(a).onDone(()=>this._engine.processLeaveNode(n)),!0}return!1}prepareLeaveAnimationListeners(n){let e=this._elementListeners.get(n),i=this._engine.statesByElement.get(n);if(e&&i){let r=new Set;e.forEach(o=>{let s=o.name;if(r.has(s))return;r.add(s);let l=this._triggers.get(s).fallbackTransition,c=i.get(s)||Ly,d=new gc(pc),h=new _c(this.id,s,n);this._engine.totalQueuedPlayers++,this._queue.push({element:n,triggerName:s,transition:l,fromState:c,toState:d,player:h,isFallbackTransition:!0})})}}removeNode(n,e){let i=this._engine;if(n.childElementCount&&this._signalRemovalForInnerTriggers(n,e),this.triggerLeaveAnimation(n,e,!0))return;let r=!1;if(i.totalAnimations){let o=i.players.length?i.playersByQueriedElement.get(n):[];if(o&&o.length)r=!0;else{let s=n;for(;s=s.parentNode;)if(i.statesByElement.get(s)){r=!0;break}}}if(this.prepareLeaveAnimationListeners(n),r)i.markElementAsRemoved(this.id,n,!1,e);else{let o=n[Zn];(!o||o===mM)&&(i.afterFlush(()=>this.clearElementCache(n)),i.destroyInnerAnimations(n),i._onRemovalComplete(n,e))}}insertNode(n,e){In(n,this._hostClassName)}drainQueuedTransitions(n){let e=[];return this._queue.forEach(i=>{let r=i.player;if(r.destroyed)return;let o=i.element,s=this._elementListeners.get(o);s&&s.forEach(a=>{if(a.name==i.triggerName){let l=wf(o,i.triggerName,i.fromState.value,i.toState.value);l._data=n,bf(i.player,a.phase,l,a.callback)}}),r.markedForDestroy?this._engine.afterFlush(()=>{r.destroy()}):e.push(i)}),this._queue=[],e.sort((i,r)=>{let o=i.transition.ast.depCount,s=r.transition.ast.depCount;return o==0||s==0?o-s:this._engine.driver.containsElement(i.element,r.element)?1:-1})}destroy(n){this.players.forEach(e=>e.destroy()),this._signalRemovalForInnerTriggers(this.hostElement,n)}},Yy=class{bodyNode;driver;_normalizer;players=[];newHostElements=new Map;playersByElement=new Map;playersByQueriedElement=new Map;statesByElement=new Map;disabledNodes=new Set;totalAnimations=0;totalQueuedPlayers=0;_namespaceLookup={};_namespaceList=[];_flushFns=[];_whenQuietFns=[];namespacesByHostElement=new Map;collectedEnterElements=[];collectedLeaveElements=[];onRemovalComplete=(n,e)=>{};_onRemovalComplete(n,e){this.onRemovalComplete(n,e)}constructor(n,e,i){this.bodyNode=n,this.driver=e,this._normalizer=i}get queuedPlayers(){let n=[];return this._namespaceList.forEach(e=>{e.players.forEach(i=>{i.queued&&n.push(i)})}),n}createNamespace(n,e){let i=new qy(n,e,this);return this.bodyNode&&this.driver.containsElement(this.bodyNode,e)?this._balanceNamespaceList(i,e):(this.newHostElements.set(e,i),this.collectEnterElement(e)),this._namespaceLookup[n]=i}_balanceNamespaceList(n,e){let i=this._namespaceList,r=this.namespacesByHostElement;if(i.length-1>=0){let s=!1,a=this.driver.getParentElement(e);for(;a;){let l=r.get(a);if(l){let c=i.indexOf(l);i.splice(c+1,0,n),s=!0;break}a=this.driver.getParentElement(a)}s||i.unshift(n)}else i.push(n);return r.set(e,n),n}register(n,e){let i=this._namespaceLookup[n];return i||(i=this.createNamespace(n,e)),i}registerTrigger(n,e,i){let r=this._namespaceLookup[n];r&&r.register(e,i)&&this.totalAnimations++}destroy(n,e){n&&(this.afterFlush(()=>{}),this.afterFlushAnimationsDone(()=>{let i=this._fetchNamespace(n);this.namespacesByHostElement.delete(i.hostElement);let r=this._namespaceList.indexOf(i);r>=0&&this._namespaceList.splice(r,1),i.destroy(e),delete this._namespaceLookup[n]}))}_fetchNamespace(n){return this._namespaceLookup[n]}fetchNamespacesByElement(n){let e=new Set,i=this.statesByElement.get(n);if(i){for(let r of i.values())if(r.namespaceId){let o=this._fetchNamespace(r.namespaceId);o&&e.add(o)}}return e}trigger(n,e,i,r){if(Mf(e)){let o=this._fetchNamespace(n);if(o)return o.trigger(e,i,r),!0}return!1}insertNode(n,e,i,r){if(!Mf(e))return;let o=e[Zn];if(o&&o.setForRemoval){o.setForRemoval=!1,o.setForMove=!0;let s=this.collectedLeaveElements.indexOf(e);s>=0&&this.collectedLeaveElements.splice(s,1)}if(n){let s=this._fetchNamespace(n);s&&s.insertNode(e,i)}r&&this.collectEnterElement(e)}collectEnterElement(n){this.collectedEnterElements.push(n)}markElementAsDisabled(n,e){e?this.disabledNodes.has(n)||(this.disabledNodes.add(n),In(n,Fy)):this.disabledNodes.has(n)&&(this.disabledNodes.delete(n),ua(n,Fy))}removeNode(n,e,i){if(Mf(e)){let r=n?this._fetchNamespace(n):null;r?r.removeNode(e,i):this.markElementAsRemoved(n,e,!1,i);let o=this.namespacesByHostElement.get(e);o&&o.id!==n&&o.removeNode(e,i)}else this._onRemovalComplete(e,i)}markElementAsRemoved(n,e,i,r,o){this.collectedLeaveElements.push(e),e[Zn]={namespaceId:n,setForRemoval:r,hasAnimation:i,removedBeforeQueried:!1,previousTriggersValues:o}}listen(n,e,i,r,o){return Mf(e)?this._fetchNamespace(n).listen(e,i,r,o):()=>{}}_buildInstruction(n,e,i,r,o){return n.transition.build(this.driver,n.element,n.fromState.value,n.toState.value,i,r,n.fromState.options,n.toState.options,e,o)}destroyInnerAnimations(n){let e=this.driver.query(n,hc,!0);e.forEach(i=>this.destroyActiveAnimationsForElement(i)),this.playersByQueriedElement.size!=0&&(e=this.driver.query(n,Cf,!0),e.forEach(i=>this.finishActiveQueriedAnimationOnElement(i)))}destroyActiveAnimationsForElement(n){let e=this.playersByElement.get(n);e&&e.forEach(i=>{i.queued?i.markedForDestroy=!0:i.destroy()})}finishActiveQueriedAnimationOnElement(n){let e=this.playersByQueriedElement.get(n);e&&e.forEach(i=>i.finish())}whenRenderingDone(){return new Promise(n=>{if(this.players.length)return Zi(this.players).onDone(()=>n());n()})}processLeaveNode(n){let e=n[Zn];if(e&&e.setForRemoval){if(n[Zn]=mM,e.namespaceId){this.destroyInnerAnimations(n);let i=this._fetchNamespace(e.namespaceId);i&&i.clearElementCache(n)}this._onRemovalComplete(n,e.setForRemoval)}n.classList?.contains(Fy)&&this.markElementAsDisabled(n,!1),this.driver.query(n,tH,!0).forEach(i=>{this.markElementAsDisabled(i,!1)})}flush(n=-1){let e=[];if(this.newHostElements.size&&(this.newHostElements.forEach((i,r)=>this._balanceNamespaceList(i,r)),this.newHostElements.clear()),this.totalAnimations&&this.collectedEnterElements.length)for(let i=0;i<this.collectedEnterElements.length;i++){let r=this.collectedEnterElements[i];In(r,nH)}if(this._namespaceList.length&&(this.totalQueuedPlayers||this.collectedLeaveElements.length)){let i=[];try{e=this._flushAnimations(i,n)}finally{for(let r=0;r<i.length;r++)i[r]()}}else for(let i=0;i<this.collectedLeaveElements.length;i++){let r=this.collectedLeaveElements[i];this.processLeaveNode(r)}if(this.totalQueuedPlayers=0,this.collectedEnterElements.length=0,this.collectedLeaveElements.length=0,this._flushFns.forEach(i=>i()),this._flushFns=[],this._whenQuietFns.length){let i=this._whenQuietFns;this._whenQuietFns=[],e.length?Zi(e).onDone(()=>{i.forEach(r=>r())}):i.forEach(r=>r())}}reportError(n){throw YT(n)}_flushAnimations(n,e){let i=new mc,r=[],o=new Map,s=[],a=new Map,l=new Map,c=new Map,d=new Set;this.disabledNodes.forEach(V=>{d.add(V);let Q=this.driver.query(V,eH,!0);for(let te=0;te<Q.length;te++)d.add(Q[te])});let h=this.bodyNode,f=Array.from(this.statesByElement.keys()),p=cM(f,this.collectedEnterElements),m=new Map,b=0;p.forEach((V,Q)=>{let te=ky+b++;m.set(Q,te),V.forEach(Te=>In(Te,te))});let C=[],M=new Set,Y=new Set;for(let V=0;V<this.collectedLeaveElements.length;V++){let Q=this.collectedLeaveElements[V],te=Q[Zn];te&&te.setForRemoval&&(C.push(Q),M.add(Q),te.hasAnimation?this.driver.query(Q,iH,!0).forEach(Te=>M.add(Te)):Y.add(Q))}let we=new Map,ve=cM(f,Array.from(M));ve.forEach((V,Q)=>{let te=Ef+b++;we.set(Q,te),V.forEach(Te=>In(Te,te))}),n.push(()=>{p.forEach((V,Q)=>{let te=m.get(Q);V.forEach(Te=>ua(Te,te))}),ve.forEach((V,Q)=>{let te=we.get(Q);V.forEach(Te=>ua(Te,te))}),C.forEach(V=>{this.processLeaveNode(V)})});let Ut=[],Nt=[];for(let V=this._namespaceList.length-1;V>=0;V--)this._namespaceList[V].drainQueuedTransitions(e).forEach(te=>{let Te=te.player,Tt=te.element;if(Ut.push(Te),this.collectedEnterElements.length){let Ot=Tt[Zn];if(Ot&&Ot.setForMove){if(Ot.previousTriggersValues&&Ot.previousTriggersValues.has(te.triggerName)){let Gr=Ot.previousTriggersValues.get(te.triggerName),vn=this.statesByElement.get(te.element);if(vn&&vn.has(te.triggerName)){let Lc=vn.get(te.triggerName);Lc.value=Gr,vn.set(te.triggerName,Lc)}}Te.destroy();return}}let ei=!h||!this.driver.containsElement(h,Tt),dn=we.get(Tt),nr=m.get(Tt),Je=this._buildInstruction(te,i,nr,dn,ei);if(Je.errors&&Je.errors.length){Nt.push(Je);return}if(ei){Te.onStart(()=>Pr(Tt,Je.fromStyles)),Te.onDestroy(()=>Kn(Tt,Je.toStyles)),r.push(Te);return}if(te.isFallbackTransition){Te.onStart(()=>Pr(Tt,Je.fromStyles)),Te.onDestroy(()=>Kn(Tt,Je.toStyles)),r.push(Te);return}let sw=[];Je.timelines.forEach(Ot=>{Ot.stretchStartingKeyframe=!0,this.disabledNodes.has(Ot.element)||sw.push(Ot)}),Je.timelines=sw,i.append(Tt,Je.timelines);let Gk={instruction:Je,player:Te,element:Tt};s.push(Gk),Je.queriedElements.forEach(Ot=>an(a,Ot,[]).push(Te)),Je.preStyleProps.forEach((Ot,Gr)=>{if(Ot.size){let vn=l.get(Gr);vn||l.set(Gr,vn=new Set),Ot.forEach((Lc,Cp)=>vn.add(Cp))}}),Je.postStyleProps.forEach((Ot,Gr)=>{let vn=c.get(Gr);vn||c.set(Gr,vn=new Set),Ot.forEach((Lc,Cp)=>vn.add(Cp))})});if(Nt.length){let V=[];Nt.forEach(Q=>{V.push(QT(Q.triggerName,Q.errors))}),Ut.forEach(Q=>Q.destroy()),this.reportError(V)}let Xe=new Map,Jt=new Map;s.forEach(V=>{let Q=V.element;i.has(Q)&&(Jt.set(Q,Q),this._beforeAnimationBuild(V.player.namespaceId,V.instruction,Xe))}),r.forEach(V=>{let Q=V.element;this._getPreviousPlayers(Q,!1,V.namespaceId,V.triggerName,null).forEach(Te=>{an(Xe,Q,[]).push(Te),Te.destroy()})});let zr=C.filter(V=>dM(V,l,c)),is=new Map;lM(is,this.driver,Y,c,Qn).forEach(V=>{dM(V,l,c)&&zr.push(V)});let $r=new Map;p.forEach((V,Q)=>{lM($r,this.driver,new Set(V),l,dc)}),zr.forEach(V=>{let Q=is.get(V),te=$r.get(V);is.set(V,new Map([...Q?.entries()??[],...te?.entries()??[]]))});let Ep=[],rw=[],ow={};s.forEach(V=>{let{element:Q,player:te,instruction:Te}=V;if(i.has(Q)){if(d.has(Q)){te.onDestroy(()=>Kn(Q,Te.toStyles)),te.disabled=!0,te.overrideTotalTime(Te.totalTime),r.push(te);return}let Tt=ow;if(Jt.size>1){let dn=Q,nr=[];for(;dn=dn.parentNode;){let Je=Jt.get(dn);if(Je){Tt=Je;break}nr.push(dn)}nr.forEach(Je=>Jt.set(Je,Tt))}let ei=this._buildAnimation(te.namespaceId,Te,Xe,o,$r,is);if(te.setRealPlayer(ei),Tt===ow)Ep.push(te);else{let dn=this.playersByElement.get(Tt);dn&&dn.length&&(te.parentPlayer=Zi(dn)),r.push(te)}}else Pr(Q,Te.fromStyles),te.onDestroy(()=>Kn(Q,Te.toStyles)),rw.push(te),d.has(Q)&&r.push(te)}),rw.forEach(V=>{let Q=o.get(V.element);if(Q&&Q.length){let te=Zi(Q);V.setRealPlayer(te)}}),r.forEach(V=>{V.parentPlayer?V.syncPlayerEvents(V.parentPlayer):V.destroy()});for(let V=0;V<C.length;V++){let Q=C[V],te=Q[Zn];if(ua(Q,Ef),te&&te.hasAnimation)continue;let Te=[];if(a.size){let ei=a.get(Q);ei&&ei.length&&Te.push(...ei);let dn=this.driver.query(Q,Cf,!0);for(let nr=0;nr<dn.length;nr++){let Je=a.get(dn[nr]);Je&&Je.length&&Te.push(...Je)}}let Tt=Te.filter(ei=>!ei.destroyed);Tt.length?cH(this,Q,Tt):this.processLeaveNode(Q)}return C.length=0,Ep.forEach(V=>{this.players.push(V),V.onDone(()=>{V.destroy();let Q=this.players.indexOf(V);this.players.splice(Q,1)}),V.play()}),Ep}afterFlush(n){this._flushFns.push(n)}afterFlushAnimationsDone(n){this._whenQuietFns.push(n)}_getPreviousPlayers(n,e,i,r,o){let s=[];if(e){let a=this.playersByQueriedElement.get(n);a&&(s=a)}else{let a=this.playersByElement.get(n);if(a){let l=!o||o==pc;a.forEach(c=>{c.queued||!l&&c.triggerName!=r||s.push(c)})}}return(i||r)&&(s=s.filter(a=>!(i&&i!=a.namespaceId||r&&r!=a.triggerName))),s}_beforeAnimationBuild(n,e,i){let r=e.triggerName,o=e.element,s=e.isRemovalTransition?void 0:n,a=e.isRemovalTransition?void 0:r;for(let l of e.timelines){let c=l.element,d=c!==o,h=an(i,c,[]);this._getPreviousPlayers(c,d,s,a,e.toState).forEach(p=>{let m=p.getRealPlayer();m.beforeDestroy&&m.beforeDestroy(),p.destroy(),h.push(p)})}Pr(o,e.fromStyles)}_buildAnimation(n,e,i,r,o,s){let a=e.triggerName,l=e.element,c=[],d=new Set,h=new Set,f=e.timelines.map(m=>{let b=m.element;d.add(b);let C=b[Zn];if(C&&C.removedBeforeQueried)return new Ki(m.duration,m.delay);let M=b!==l,Y=dH((i.get(b)||rH).map(Xe=>Xe.getRealPlayer())).filter(Xe=>{let Jt=Xe;return Jt.element?Jt.element===b:!1}),we=o.get(b),ve=s.get(b),Ut=Sy(this._normalizer,m.keyframes,we,ve),Nt=this._buildPlayer(m,Ut,Y);if(m.subTimeline&&r&&h.add(b),M){let Xe=new _c(n,a,b);Xe.setRealPlayer(Nt),c.push(Xe)}return Nt});c.forEach(m=>{an(this.playersByQueriedElement,m.element,[]).push(m),m.onDone(()=>sH(this.playersByQueriedElement,m.element,m))}),d.forEach(m=>In(m,Ry));let p=Zi(f);return p.onDestroy(()=>{d.forEach(m=>ua(m,Ry)),Kn(l,e.toStyles)}),h.forEach(m=>{an(r,m,[]).push(p)}),p}_buildPlayer(n,e,i){return e.length>0?this.driver.animate(n.element,e,n.duration,n.delay,n.easing,i):new Ki(n.duration,n.delay)}},_c=class{namespaceId;triggerName;element;_player=new Ki;_containsRealPlayer=!1;_queuedCallbacks=new Map;destroyed=!1;parentPlayer=null;markedForDestroy=!1;disabled=!1;queued=!0;totalTime=0;constructor(n,e,i){this.namespaceId=n,this.triggerName=e,this.element=i}setRealPlayer(n){this._containsRealPlayer||(this._player=n,this._queuedCallbacks.forEach((e,i)=>{e.forEach(r=>bf(n,i,void 0,r))}),this._queuedCallbacks.clear(),this._containsRealPlayer=!0,this.overrideTotalTime(n.totalTime),this.queued=!1)}getRealPlayer(){return this._player}overrideTotalTime(n){this.totalTime=n}syncPlayerEvents(n){let e=this._player;e.triggerCallback&&n.onStart(()=>e.triggerCallback("start")),n.onDone(()=>this.finish()),n.onDestroy(()=>this.destroy())}_queueEvent(n,e){an(this._queuedCallbacks,n,[]).push(e)}onDone(n){this.queued&&this._queueEvent("done",n),this._player.onDone(n)}onStart(n){this.queued&&this._queueEvent("start",n),this._player.onStart(n)}onDestroy(n){this.queued&&this._queueEvent("destroy",n),this._player.onDestroy(n)}init(){this._player.init()}hasStarted(){return this.queued?!1:this._player.hasStarted()}play(){!this.queued&&this._player.play()}pause(){!this.queued&&this._player.pause()}restart(){!this.queued&&this._player.restart()}finish(){this._player.finish()}destroy(){this.destroyed=!0,this._player.destroy()}reset(){!this.queued&&this._player.reset()}setPosition(n){this.queued||this._player.setPosition(n)}getPosition(){return this.queued?0:this._player.getPosition()}triggerCallback(n){let e=this._player;e.triggerCallback&&e.triggerCallback(n)}};function sH(t,n,e){let i=t.get(n);if(i){if(i.length){let r=i.indexOf(e);i.splice(r,1)}i.length==0&&t.delete(n)}return i}function aH(t){return t??null}function Mf(t){return t&&t.nodeType===1}function lH(t){return t=="start"||t=="done"}function aM(t,n){let e=t.style.display;return t.style.display=n??"none",e}function lM(t,n,e,i,r){let o=[];e.forEach(l=>o.push(aM(l)));let s=[];i.forEach((l,c)=>{let d=new Map;l.forEach(h=>{let f=n.computeStyle(c,h,r);d.set(h,f),(!f||f.length==0)&&(c[Zn]=oH,s.push(c))}),t.set(c,d)});let a=0;return e.forEach(l=>aM(l,o[a++])),s}function cM(t,n){let e=new Map;if(t.forEach(a=>e.set(a,[])),n.length==0)return e;let i=1,r=new Set(n),o=new Map;function s(a){if(!a)return i;let l=o.get(a);if(l)return l;let c=a.parentNode;return e.has(c)?l=c:r.has(c)?l=i:l=s(c),o.set(a,l),l}return n.forEach(a=>{let l=s(a);l!==i&&e.get(l).push(a)}),e}function In(t,n){t.classList?.add(n)}function ua(t,n){t.classList?.remove(n)}function cH(t,n,e){Zi(e).onDone(()=>t.processLeaveNode(n))}function dH(t){let n=[];return gM(t,n),n}function gM(t,n){for(let e=0;e<t.length;e++){let i=t[e];i instanceof la?gM(i.players,n):n.push(i)}}function uH(t,n){let e=Object.keys(t),i=Object.keys(n);if(e.length!=i.length)return!1;for(let r=0;r<e.length;r++){let o=e[r];if(!n.hasOwnProperty(o)||t[o]!==n[o])return!1}return!0}function dM(t,n,e){let i=e.get(t);if(!i)return!1;let r=n.get(t);return r?i.forEach(o=>r.add(o)):n.set(t,i),e.delete(t),!0}var ha=class{_driver;_normalizer;_transitionEngine;_timelineEngine;_triggerCache={};onRemovalComplete=(n,e)=>{};constructor(n,e,i){this._driver=e,this._normalizer=i,this._transitionEngine=new Yy(n.body,e,i),this._timelineEngine=new Wy(n.body,e,i),this._transitionEngine.onRemovalComplete=(r,o)=>this.onRemovalComplete(r,o)}registerTrigger(n,e,i,r,o){let s=n+"-"+r,a=this._triggerCache[s];if(!a){let l=[],c=[],d=hM(this._driver,o,l,c);if(l.length)throw jT(r,l);a=Z2(r,d,this._normalizer),this._triggerCache[s]=a}this._transitionEngine.registerTrigger(e,r,a)}register(n,e){this._transitionEngine.register(n,e)}destroy(n,e){this._transitionEngine.destroy(n,e)}onInsert(n,e,i,r){this._transitionEngine.insertNode(n,e,i,r)}onRemove(n,e,i){this._transitionEngine.removeNode(n,e,i)}disableAnimations(n,e){this._transitionEngine.markElementAsDisabled(n,e)}process(n,e,i,r){if(i.charAt(0)=="@"){let[o,s]=Iy(i),a=r;this._timelineEngine.command(o,e,s,a)}else this._transitionEngine.trigger(n,e,i,r)}listen(n,e,i,r,o){if(i.charAt(0)=="@"){let[s,a]=Iy(i);return this._timelineEngine.listen(s,e,a,o)}return this._transitionEngine.listen(n,e,i,r,o)}flush(n=-1){this._transitionEngine.flush(n)}get players(){return[...this._transitionEngine.players,...this._timelineEngine.players]}whenRenderingDone(){return this._transitionEngine.whenRenderingDone()}afterFlushAnimationsDone(n){this._transitionEngine.afterFlushAnimationsDone(n)}};function hH(t,n){let e=null,i=null;return Array.isArray(n)&&n.length?(e=By(n[0]),n.length>1&&(i=By(n[n.length-1]))):n instanceof Map&&(e=By(n)),e||i?new fH(t,e,i):null}var fH=(()=>{class t{_element;_startStyles;_endStyles;static initialStylesByElement=new WeakMap;_state=0;_initialStyles;constructor(e,i,r){this._element=e,this._startStyles=i,this._endStyles=r;let o=t.initialStylesByElement.get(e);o||t.initialStylesByElement.set(e,o=new Map),this._initialStyles=o}start(){this._state<1&&(this._startStyles&&Kn(this._element,this._startStyles,this._initialStyles),this._state=1)}finish(){this.start(),this._state<2&&(Kn(this._element,this._initialStyles),this._endStyles&&(Kn(this._element,this._endStyles),this._endStyles=null),this._state=1)}destroy(){this.finish(),this._state<3&&(t.initialStylesByElement.delete(this._element),this._startStyles&&(Pr(this._element,this._startStyles),this._endStyles=null),this._endStyles&&(Pr(this._element,this._endStyles),this._endStyles=null),Kn(this._element,this._initialStyles),this._state=3)}}return t})();function By(t){let n=null;return t.forEach((e,i)=>{pH(i)&&(n=n||new Map,n.set(i,e))}),n}function pH(t){return t==="display"||t==="position"}var Ff=class{element;keyframes;options;_specialStyles;_onDoneFns=[];_onStartFns=[];_onDestroyFns=[];_duration;_delay;_initialized=!1;_finished=!1;_started=!1;_destroyed=!1;_finalKeyframe;_originalOnDoneFns=[];_originalOnStartFns=[];domPlayer=null;time=0;parentPlayer=null;currentSnapshot=new Map;constructor(n,e,i,r){this.element=n,this.keyframes=e,this.options=i,this._specialStyles=r,this._duration=i.duration,this._delay=i.delay||0,this.time=this._duration+this._delay}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(n=>n()),this._onDoneFns=[])}init(){this._buildPlayer()&&this._preparePlayerBeforeStart()}_buildPlayer(){if(this._initialized)return this.domPlayer;this._initialized=!0;let n=this.keyframes,e=this._triggerWebAnimation(this.element,n,this.options);if(!e)return this._onFinish(),null;this.domPlayer=e,this._finalKeyframe=n.length?n[n.length-1]:new Map;let i=()=>this._onFinish();return e.addEventListener("finish",i),this.onDestroy(()=>{e.removeEventListener("finish",i)}),e}_preparePlayerBeforeStart(){this._delay?this._resetDomPlayerState():this.domPlayer?.pause()}_convertKeyframesToObject(n){let e=[];return n.forEach(i=>{e.push(Object.fromEntries(i))}),e}_triggerWebAnimation(n,e,i){let r=this._convertKeyframesToObject(e);try{return n.animate(r,i)}catch(o){return null}}onStart(n){this._originalOnStartFns.push(n),this._onStartFns.push(n)}onDone(n){this._originalOnDoneFns.push(n),this._onDoneFns.push(n)}onDestroy(n){this._onDestroyFns.push(n)}play(){let n=this._buildPlayer();n&&(this.hasStarted()||(this._onStartFns.forEach(e=>e()),this._onStartFns=[],this._started=!0,this._specialStyles&&this._specialStyles.start()),n.play())}pause(){this.init(),this.domPlayer?.pause()}finish(){this.init(),this.domPlayer&&(this._specialStyles&&this._specialStyles.finish(),this._onFinish(),this.domPlayer.finish())}reset(){this._resetDomPlayerState(),this._destroyed=!1,this._finished=!1,this._started=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}_resetDomPlayerState(){this.domPlayer?.cancel()}restart(){this.reset(),this.play()}hasStarted(){return this._started}destroy(){this._destroyed||(this._destroyed=!0,this._resetDomPlayerState(),this._onFinish(),this._specialStyles&&this._specialStyles.destroy(),this._onDestroyFns.forEach(n=>n()),this._onDestroyFns=[])}setPosition(n){this.domPlayer||this.init(),this.domPlayer&&(this.domPlayer.currentTime=n*this.time)}getPosition(){return this.domPlayer?+(this.domPlayer.currentTime??0)/this.time:this._initialized?1:0}get totalTime(){return this._delay+this._duration}beforeDestroy(){let n=new Map;this.hasStarted()&&this._finalKeyframe.forEach((i,r)=>{r!=="offset"&&n.set(r,this._finished?i:Sf(this.element,r))}),this.currentSnapshot=n}triggerCallback(n){let e=n==="start"?this._onStartFns:this._onDoneFns;e.forEach(i=>i()),e.length=0}},Lf=class{validateStyleProperty(n){return!0}validateAnimatableStyleProperty(n){return!0}containsElement(n,e){return Ty(n,e)}getParentElement(n){return Df(n)}query(n,e,i){return My(n,e,i)}computeStyle(n,e,i){return Sf(n,e)}animate(n,e,i,r,o,s=[]){let a=r==0?"both":"forwards",l={duration:i,delay:r,fill:a};o&&(l.easing=o);let c=new Map,d=s.filter(p=>p instanceof Ff);JT(i,r)&&d.forEach(p=>{p.currentSnapshot.forEach((m,b)=>c.set(b,m))});let h=ZT(e).map(p=>new Map(p));h=eM(n,h,c);let f=hH(n,h);return new Ff(n,h,l,f)}};var Af="@",_M="@.disabled",Bf=class{namespaceId;delegate;engine;_onDestroy;\u0275type=0;constructor(n,e,i,r){this.namespaceId=n,this.delegate=e,this.engine=i,this._onDestroy=r}get data(){return this.delegate.data}destroyNode(n){this.delegate.destroyNode?.(n)}destroy(){this.engine.destroy(this.namespaceId,this.delegate),this.engine.afterFlushAnimationsDone(()=>{queueMicrotask(()=>{this.delegate.destroy()})}),this._onDestroy?.()}createElement(n,e){return this.delegate.createElement(n,e)}createComment(n){return this.delegate.createComment(n)}createText(n){return this.delegate.createText(n)}appendChild(n,e){this.delegate.appendChild(n,e),this.engine.onInsert(this.namespaceId,e,n,!1)}insertBefore(n,e,i,r=!0){this.delegate.insertBefore(n,e,i),this.engine.onInsert(this.namespaceId,e,n,r)}removeChild(n,e,i,r){if(r){this.delegate.removeChild(n,e,i,r);return}this.parentNode(e)&&this.engine.onRemove(this.namespaceId,e,this.delegate)}selectRootElement(n,e){return this.delegate.selectRootElement(n,e)}parentNode(n){return this.delegate.parentNode(n)}nextSibling(n){return this.delegate.nextSibling(n)}setAttribute(n,e,i,r){this.delegate.setAttribute(n,e,i,r)}removeAttribute(n,e,i){this.delegate.removeAttribute(n,e,i)}addClass(n,e){this.delegate.addClass(n,e)}removeClass(n,e){this.delegate.removeClass(n,e)}setStyle(n,e,i,r){this.delegate.setStyle(n,e,i,r)}removeStyle(n,e,i){this.delegate.removeStyle(n,e,i)}setProperty(n,e,i){e.charAt(0)==Af&&e==_M?this.disableAnimations(n,!!i):this.delegate.setProperty(n,e,i)}setValue(n,e){this.delegate.setValue(n,e)}listen(n,e,i,r){return this.delegate.listen(n,e,i,r)}disableAnimations(n,e){this.engine.disableAnimations(n,e)}},Qy=class extends Bf{factory;constructor(n,e,i,r,o){super(e,i,r,o),this.factory=n,this.namespaceId=e}setProperty(n,e,i){e.charAt(0)==Af?e.charAt(1)=="."&&e==_M?(i=i===void 0?!0:!!i,this.disableAnimations(n,i)):this.engine.process(this.namespaceId,n,e.slice(1),i):this.delegate.setProperty(n,e,i)}listen(n,e,i,r){if(e.charAt(0)==Af){let o=mH(n),s=e.slice(1),a="";return s.charAt(0)!=Af&&([s,a]=gH(s)),this.engine.listen(this.namespaceId,o,s,a,l=>{let c=l._data||-1;this.factory.scheduleListenerCallback(c,i,l)})}return this.delegate.listen(n,e,i,r)}};function mH(t){switch(t){case"body":return document.body;case"document":return document;case"window":return window;default:return t}}function gH(t){let n=t.indexOf("."),e=t.substring(0,n),i=t.slice(n+1);return[e,i]}var jf=class{delegate;engine;_zone;_currentId=0;_microtaskId=1;_animationCallbacksBuffer=[];_rendererCache=new Map;_cdRecurDepth=0;constructor(n,e,i){this.delegate=n,this.engine=e,this._zone=i,e.onRemovalComplete=(r,o)=>{o?.removeChild(null,r)}}createRenderer(n,e){let r=this.delegate.createRenderer(n,e);if(!n||!e?.data?.animation){let c=this._rendererCache,d=c.get(r);if(!d){let h=()=>c.delete(r);d=new Bf("",r,this.engine,h),c.set(r,d)}return d}let o=e.id,s=e.id+"-"+this._currentId;this._currentId++,this.engine.register(s,n);let a=c=>{Array.isArray(c)?c.forEach(a):this.engine.registerTrigger(o,s,n,c.name,c)};return e.data.animation.forEach(a),new Qy(this,s,r,this.engine)}begin(){this._cdRecurDepth++,this.delegate.begin&&this.delegate.begin()}_scheduleCountTask(){queueMicrotask(()=>{this._microtaskId++})}scheduleListenerCallback(n,e,i){if(n>=0&&n<this._microtaskId){this._zone.run(()=>e(i));return}let r=this._animationCallbacksBuffer;r.length==0&&queueMicrotask(()=>{this._zone.run(()=>{r.forEach(o=>{let[s,a]=o;s(a)}),this._animationCallbacksBuffer=[]})}),r.push([e,i])}end(){this._cdRecurDepth--,this._cdRecurDepth==0&&this._zone.runOutsideAngular(()=>{this._scheduleCountTask(),this.engine.flush(this._microtaskId)}),this.delegate.end&&this.delegate.end()}whenRenderingDone(){return this.engine.whenRenderingDone()}componentReplaced(n){this.engine.flush(),this.delegate.componentReplaced?.(n)}};var vH=(()=>{class t extends ha{constructor(e,i,r){super(e,i,r)}ngOnDestroy(){this.flush()}static \u0275fac=function(i){return new(i||t)(I(P),I(Go),I(Wo))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function yH(){return new kf}function bH(){return new jf(u(Rl),u(ha),u(T))}var yM=[{provide:Wo,useFactory:yH},{provide:ha,useClass:vH},{provide:qe,useFactory:bH}],wH=[{provide:Go,useClass:Ky},{provide:Dr,useValue:"NoopAnimations"},...yM],vM=[{provide:Go,useFactory:()=>new Lf},{provide:Dr,useFactory:()=>"BrowserAnimations"},...yM],bM=(()=>{class t{static withConfig(e){return{ngModule:t,providers:e.disableAnimations?wH:vM}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({providers:vM,imports:[Ol]})}return t})();var wM=(()=>{class t{constructor(e,i){this.dialogRef=e,this.data=i}cancel(){this.dialogRef.close()}static{this.\u0275fac=function(i){return new(i||t)(Z(Yi),Z(oc))}}static{this.\u0275cmp=F({type:t,selectors:[["mp-confirmation-dialog"]],standalone:!1,decls:7,vars:4,consts:[["mat-dialog-title",""],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close","",3,"click"],["mat-button","","color","accent","cdkFocusInitial","",3,"mat-dialog-close"]],template:function(i,r){i&1&&(D(0,"h1",0),ye(1),x(),D(2,"div",1)(3,"button",2),q("click",function(){return r.cancel()}),ye(4),x(),D(5,"button",3),ye(6),x()()),i&2&&(S(),ut(r.data.title),S(3),ut(r.data.cancel),S(),De("mat-dialog-close",!0),S(),ut(r.data.confirm))},dependencies:[of,df,uf,hf],encapsulation:2,changeDetection:0})}}return t})();var DM=(()=>{class t{constructor(e,i){this.dialogRef=e,this.data=i}cancel(){this.dialogRef.close()}static{this.\u0275fac=function(i){return new(i||t)(Z(Yi),Z(oc))}}static{this.\u0275cmp=F({type:t,selectors:[["mp-input-dialog"]],standalone:!1,decls:13,vars:6,consts:[["mat-dialog-title",""],["mat-dialog-content",""],[1,"mp-form-field-wrapper"],["appearance","fill"],["matInput","","cdkFocusInitial","",3,"ngModelChange","ngModel"],["mat-dialog-actions","","align","end"],["mat-button","","mat-dialog-close","",3,"click"],["mat-button","","color","accent",3,"mat-dialog-close"]],template:function(i,r){i&1&&(D(0,"h1",0),ye(1),x(),D(2,"div",1)(3,"div",2)(4,"mat-form-field",3)(5,"mat-label"),ye(6),x(),D(7,"input",4),To("ngModelChange",function(s){return Bs(r.value,s)||(r.value=s),s}),x()()()(),D(8,"div",5)(9,"button",6),q("click",function(){return r.cancel()}),ye(10),x(),D(11,"button",7),ye(12),x()()),i&2&&(S(),ut(r.data.title),S(5),ut(r.data.inputLabel),S(),Io("ngModel",r.value),S(3),ut(r.data.cancel),S(),De("mat-dialog-close",r.value),S(),ut(r.data.confirm))},dependencies:[of,df,uf,hf,FI,pf,ac,aT,Lh,bS,jv],styles:[".mp-form-field-wrapper[_ngcontent-%COMP%]{padding-top:18px}.mp-form-field-wrapper[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}"],changeDetection:0})}}return t})();function EM(t){t||(t=u(dt));let n=new J(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(he(n))}function CM(t,n){let i=!n?.manualCleanup?n?.injector?.get(dt)??u(dt):null,r=DH(n?.equal),o;n?.requireSync?o=xe({kind:0},{equal:r}):o=xe({kind:1,value:n?.initialValue},{equal:r});let s,a=t.subscribe({next:l=>o.set({kind:1,value:l}),error:l=>{o.set({kind:2,error:l}),s?.()},complete:()=>{s?.()}});if(n?.requireSync&&o().kind===0)throw new w(601,!1);return s=i?.onDestroy(a.unsubscribe.bind(a)),Vt(()=>{let l=o();switch(l.kind){case 1:return l.value;case 2:throw l.error;case 0:throw new w(601,!1)}},{equal:n?.equal})}function DH(t=Object.is){return(n,e)=>n.kind===1&&e.kind===1&&t(n.value,e.value)}function xM(t){return typeof t=="function"}function qo(t){return typeof t=="string"}function vc(t){return!!t&&typeof t=="object"&&!Array.isArray(t)}function Vf(t){return t==null}function Xy(t){return!Vf(t)}function Jy(t){return t?Array.isArray(t)||qo(t)?t.length:vc(t)?Object.keys(t).length:0:0}function SM(t){return Jy(t)===0}function eb(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(n,e)=>e==0?n.toLowerCase():n.toUpperCase()).replace(/\s+|_|-|\//g,"")}var ib=class{translations;constructor(n){this.translations=n}getTranslation(n){return j(this.translations.get(n)||{})}},TM=new g(""),pa=new g("",{providedIn:"root",factory:()=>fa}),fa={defaultLang:"en",reRenderOnLangChange:!1,prodMode:!1,failedRetries:2,fallbackLang:[],availableLangs:[],missingHandler:{logMissingKey:!0,useFallbackTranslation:!1,allowEmpty:!1},flatten:{aot:!1},interpolation:["{{","}}"],scopes:{keepCasing:!1,autoPrefixKeys:!0}};function EH(t={}){return G(_(_({},fa),t),{missingHandler:_(_({},fa.missingHandler),t.missingHandler),flatten:_(_({},fa.flatten),t.flatten),scopes:_(_({},fa.scopes),t.scopes)})}function tb(t,n){return t&&(Object.prototype.hasOwnProperty.call(t,n)?t[n]:n.split(".").reduce((e,i)=>e?.[i],t))}function CH(t,n,e){t=_({},t);let i=n.split("."),r=i.length-1;return i.reduce((o,s,a)=>(a===r?o[s]=e:o[s]=Array.isArray(o[s])?o[s].slice():_({},o[s]),o&&o[s]),t),t}var MM=new g(""),xH=(()=>{class t{config=u(pa,{optional:!0})??fa;get interpolationMatcher(){return SH(this.config)}transpile({value:e,params:i={},translation:r,key:o}){if(qo(e)){let s,a=e;for(;(s=this.interpolationMatcher.exec(a))!==null;){let[l,c]=s;a=a.replace(l,()=>{let d=c.trim(),h=tb(i,d);return Xy(h)?h:Xy(r[d])?this.transpile({params:i,translation:r,key:o,value:r[d]}):""})}return a}else i&&(vc(e)?e=this.handleObject({value:e,params:i,translation:r,key:o}):Array.isArray(e)&&(e=this.handleArray({value:e,params:i,translation:r,key:o})));return e}handleObject({value:e,params:i={},translation:r,key:o}){let s=e;return Object.keys(i).forEach(a=>{let l=this.transpile({value:tb(s,a),params:tb(i,a),translation:r,key:o});s=CH(s,a,l)}),s}handleArray(r){var o=r,{value:e}=o,i=Oa(o,["value"]);return e.map(s=>this.transpile(_({value:s},i)))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function SH(t){let[n,e]=t.interpolation;return new RegExp(`${n}([^${n}${e}]*?)${e}`,"g")}var AM=new g(""),IH=(()=>{class t{handle(e,i){if(i.missingHandler.logMissingKey&&!i.prodMode){let r=`Missing translation for '${e}'`;console.warn(`%c ${r}`,"font-size: 12px; color: red")}return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),kM=new g(""),TH=(()=>{class t{preSaveTranslation(e){return e}preSaveTranslationKey(e,i){return i}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),RM=new g(""),MH=(()=>{class t{userConfig;constructor(e){this.userConfig=e}getNextLangs(){let e=this.userConfig.fallbackLang;if(!e)throw new Error("When using the default fallback, a fallback language must be provided in the config!");return Array.isArray(e)?e:[e]}static \u0275fac=function(i){return new(i||t)(I(pa))};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function NM(t){let{path:n,inlineLoader:e,mainLoader:i,data:r}=t;if(e){let o=e[n];if(xM(o)===!1)throw`You're using an inline loader but didn't provide a loader for ${n}`;return e[n]().then(s=>s.default?s.default:s)}return i.getTranslation(n,r)}function AH({mainLoader:t,path:n,data:e,fallbackPath:i,inlineLoader:r}){return(i?[n,i]:[n]).map(s=>{let a=NM({path:s,mainLoader:t,inlineLoader:r,data:e});return Oe(a).pipe(W(l=>({translation:l,lang:s})))})}function IM(t){let n={};function e(i,r){if(i===null)n[r]=null;else if(vc(i))for(let[o,s]of Object.entries(i))e(s,r?`${r}.${o}`:o);else n[r]=i}return e(t,""),n}function kH(t){let n={};for(let[e,i]of Object.entries(t)){let r=e.split("."),o=n;r.forEach((s,a)=>{a===r.length-1?o[s]=i:(o[s]??={},o=o[s])})}return n}function yc(t){if(!t)return"";let n=t.split("/");return n.pop(),n.join("/")}function Fr(t){return t?t.split("/").pop():""}function RH(t,n){return Object.keys(t).reduce((e,i)=>(e[`${n}/${i}`]=t[i],e),{})}function OM(t){return typeof t?.scope=="string"}function NH(t){return t?.loader&&vc(t.loader)}function PM(t,n){return NH(t)?RH(t.loader,n):void 0}function nb(t){return{scope:yc(t)||null,langName:Fr(t)}}var OH;var rb=class extends Error{lang;fallbackLangs;isScope;constructor(n,e,i){let r="Unable to load translation and all the fallback languages";i&&(r+=", did you misspell the scope name?"),super(r),this.lang=n,this.fallbackLangs=e,this.isScope=i,this.name="TranslationLoadError"}},lb=(()=>{class t{loader;parser;missingHandler;interceptor;fallbackStrategy;langChanges$;translations=new Map;cache=new Map;firstFallbackLang;defaultLang="";availableLangs=[];isResolvedMissingOnce=!1;lang;failedLangs=new Set;events=new E;events$=this.events.asObservable();config;activeLang;destroyRef=u(dt);destroyed=!1;constructor(e,i,r,o,s,a){this.loader=e,this.parser=i,this.missingHandler=r,this.interceptor=o,this.fallbackStrategy=a,this.loader||(this.loader=new ib(this.translations)),OH=this,this.config=JSON.parse(JSON.stringify(s)),this.setAvailableLangs(this.config.availableLangs||[]),this.setFallbackLangForMissingTranslation(this.config),this.setDefaultLang(this.config.defaultLang),this.lang=new Ue(this.getDefaultLang()),this.langChanges$=this.lang.asObservable(),this.activeLang=CM(this.lang,{requireSync:!0}),this.events$.subscribe(l=>{l.type==="translationLoadSuccess"&&l.wasFailure&&this.setActiveLang(l.payload.langName)}),this.destroyRef.onDestroy(()=>{this.destroyed=!0,this.lang.complete(),this.events.complete(),this.cache.clear()})}getDefaultLang(){return this.defaultLang}setDefaultLang(e){this.defaultLang=e}getActiveLang(){return this.lang.getValue()}setActiveLang(e){return this.parser.onLangChanged?.(e),this.lang.next(e),this.events.next({type:"langChanged",payload:nb(e)}),this}setAvailableLangs(e){this.availableLangs=e}getAvailableLangs(){return this.availableLangs}load(e,i={}){if(this.destroyed)return $e;let r=this.cache.get(e);if(r)return r;let o,s=this._isLangScoped(e),a;s&&(a=yc(e));let l={path:e,mainLoader:this.loader,inlineLoader:i.inlineLoader,data:s?{scope:a}:void 0};if(this.useFallbackTranslation(e)){let d=s?`${a}/${this.firstFallbackLang}`:this.firstFallbackLang,h=AH(G(_({},l),{fallbackPath:d}));o=lr(h)}else{let d=NM(l);o=Oe(d)}let c=o.pipe(qp(this.config.failedRetries),lt(d=>{if(Array.isArray(d)){d.forEach(h=>{this.handleSuccess(h.lang,h.translation),h.lang!==e&&this.cache.set(h.lang,j({}))});return}this.handleSuccess(e,d)}),un(d=>(this.config.prodMode||console.error(`Error while trying to load "${e}"`,d),this.handleFailure(e,i))),to(1),EM(this.destroyRef));return this.cache.set(e,c),c}translate(e,i={},r=this.getActiveLang()){if(!e)return e;let{scope:o,resolveLang:s}=this.resolveLangAndScope(r);if(Array.isArray(e))return e.map(c=>this.translate(this.config.scopes.autoPrefixKeys&&o?`${o}.${c}`:c,i,s));e=this.config.scopes.autoPrefixKeys&&o?`${o}.${e}`:e;let a=this.getTranslation(s),l=a[e];return l?this.parser.transpile({value:l,params:i,translation:a,key:e}):this._handleMissingKey(e,l,i)}selectTranslate(e,i,r,o=!1){let s,a=(c,d)=>this.load(c,d).pipe(W(()=>o?this.translateObject(e,i,c):this.translate(e,i,c)));if(Vf(r))return this.langChanges$.pipe(We(c=>a(c)));if(r=Array.isArray(r)?r[r.length-1]:r,OM(r)){let c=r;r=c.scope,s=PM(c,c.scope)}if(r=r,this.isLang(r)||this.isScopeWithLang(r))return a(r);let l=r;return this.langChanges$.pipe(We(c=>a(`${l}/${c}`,{inlineLoader:s})))}isScopeWithLang(e){return this.isLang(Fr(e))}translateObject(e,i={},r=this.getActiveLang()){if(qo(e)||Array.isArray(e)){let{resolveLang:s,scope:a}=this.resolveLangAndScope(r);if(Array.isArray(e))return e.map(d=>this.translateObject(this.config.scopes.autoPrefixKeys&&a?`${a}.${d}`:d,i,s));let l=this.getTranslation(s);e=this.config.scopes.autoPrefixKeys&&a?`${a}.${e}`:e;let c=kH(this.getObjectByKey(l,e));return SM(c)?this.translate(e,i,r):this.parser.transpile({value:c,params:i,translation:l,key:e})}let o=[];for(let[s,a]of this.getEntries(e))o.push(this.translateObject(s,a,r));return o}selectTranslateObject(e,i,r){if(qo(e)||Array.isArray(e))return this.selectTranslate(e,i,r,!0);let[[o,s],...a]=this.getEntries(e);return this.selectTranslateObject(o,s,r).pipe(W(l=>{let c=[l];for(let[d,h]of a)c.push(this.translateObject(d,h,r));return c}))}getTranslation(e){if(e){if(this.isLang(e))return this.translations.get(e)||{};{let{scope:i,resolveLang:r}=this.resolveLangAndScope(e),o=this.translations.get(r)||{};return this.getObjectByKey(o,i)}}return this.translations}selectTranslation(e){let i=this.langChanges$;if(e){let r=Fr(e)!==e;this.isLang(e)||r?i=j(e):i=this.langChanges$.pipe(W(o=>`${e}/${o}`))}return i.pipe(We(r=>this.load(r).pipe(W(()=>this.getTranslation(r)))))}setTranslation(e,i=this.getActiveLang(),r={}){let s=_(_({},{merge:!0,emitChange:!0}),r),a=yc(i),l=e;if(a){let p=this.getMappedScope(a);l=IM({[p]:e})}let c=a?Fr(i):i,d=_(_({},s.merge&&this.getTranslation(c)),l),h=this.config.flatten.aot?d:IM(d),f=this.interceptor.preSaveTranslation(h,c);this.translations.set(c,f),s.emitChange&&this.setActiveLang(this.getActiveLang())}setTranslationKey(e,i,r={}){let o=r.lang||this.getActiveLang(),s=this.interceptor.preSaveTranslationKey(e,i,o),a={[e]:s};this.setTranslation(a,o,G(_({},r),{merge:!0}))}setFallbackLangForMissingTranslation({fallbackLang:e}){let i=Array.isArray(e)?e[0]:e;e&&this.useFallbackTranslation(i)&&(this.firstFallbackLang=i)}_handleMissingKey(e,i,r){if(this.config.missingHandler.allowEmpty&&i==="")return"";if(!this.isResolvedMissingOnce&&this.useFallbackTranslation()){this.isResolvedMissingOnce=!0;let o=this.translate(e,r,this.firstFallbackLang);return this.isResolvedMissingOnce=!1,o}return this.missingHandler.handle(e,this.getMissingHandlerData(),r)}_isLangScoped(e){return this.getAvailableLangsIds().indexOf(e)===-1}isLang(e){return this.getAvailableLangsIds().indexOf(e)!==-1}_loadDependencies(e,i){let r=Fr(e);return this._isLangScoped(e)&&!this.isLoadedTranslation(r)?or([this.load(r),this.load(e,{inlineLoader:i})]):this.load(e,{inlineLoader:i})}_completeScopeWithLang(e){return this._isLangScoped(e)&&!this.isLang(Fr(e))?`${e}/${this.getActiveLang()}`:e}_setScopeAlias(e,i){this.config.scopeMapping||(this.config.scopeMapping={}),this.config.scopeMapping[e]=i}isLoadedTranslation(e){return Jy(this.getTranslation(e))}getAvailableLangsIds(){let e=this.getAvailableLangs()[0];return qo(e)?this.getAvailableLangs():this.getAvailableLangs().map(i=>i.id)}getMissingHandlerData(){return G(_({},this.config),{activeLang:this.getActiveLang(),availableLangs:this.availableLangs,defaultLang:this.defaultLang})}useFallbackTranslation(e){return this.config.missingHandler.useFallbackTranslation&&e!==this.firstFallbackLang}handleSuccess(e,i){this.setTranslation(i,e,{emitChange:!1}),this.events.next({wasFailure:!!this.failedLangs.size,type:"translationLoadSuccess",payload:nb(e)}),this.failedLangs.forEach(r=>this.cache.delete(r)),this.failedLangs.clear()}handleFailure(e,i){Vf(i.failedCounter)&&(i.failedCounter=0,i.fallbackLangs||(i.fallbackLangs=this.fallbackStrategy.getNextLangs(e)));let r=e.split("/"),o=i.fallbackLangs,s=o[i.failedCounter];if(this.failedLangs.add(e),this.cache.has(s))return this.handleSuccess(s,this.getTranslation(s)),$e;let a=s===r[r.length-1];if(!s||a)throw new rb(e,o??[],r.length>1);let l=s;return r.length>1&&(r[r.length-1]=s,l=r.join("/")),i.failedCounter++,this.events.next({type:"translationLoadFailure",payload:nb(e)}),this.load(l,i)}getMappedScope(e){let{scopeMapping:i={},scopes:r={keepCasing:!1}}=this.config;return i[e]||(r.keepCasing?e:eb(e))}resolveLangAndScope(e){let i=e,r;if(this._isLangScoped(e)){let o=Fr(e),s=this.isLang(o);i=s?o:this.getActiveLang(),r=this.getMappedScope(s?yc(e):e)}return{scope:r,resolveLang:i}}getObjectByKey(e,i){let r={},o=`${i}.`;for(let s in e)s.startsWith(o)&&(r[s.replace(o,"")]=e[s]);return r}getEntries(e){return e instanceof Map?e.entries():Object.entries(e)}static \u0275fac=function(i){return new(i||t)(I(TM,8),I(MM),I(AM),I(kM),I(pa),I(RM))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var PH=new g("");var FH=new g("");function ob(t,n,e="|"){if(qo(t)){let i=t.split(e),r=i.pop();return r===n?[!0,i.toString()]:[!1,r]}return[!1,""]}function LH(t,n){let[e]=ob(n,"static");return e?!1:!!t.config.reRenderOnLangChange}function BH(t){return t?n=>n:Me(1)}var sb=class{initialized=!1;resolve({inline:n,provider:e,active:i}){let r=i;if(this.initialized)return r=i,r;if(e){let[,o]=ob(e,"static");r=o}if(n){let[,o]=ob(n,"static");r=o}return this.initialized=!0,r}resolveLangBasedOnScope(n){return yc(n)?Fr(n):n}resolveLangPath(n,e){return e?`${e}/${n}`:n}},ab=class{service;constructor(n){this.service=n}resolve(n){let{inline:e,provider:i}=n;if(e)return e;if(i){if(OM(i)){let{scope:r,alias:o=this.service.config.scopes.keepCasing?r:eb(r)}=i;return this.service._setScopeAlias(r,o),r}return i}}};var Lr=(()=>{class t{service;providerScope;providerLang;cdr;subscription=null;lastValue="";lastKey;path;langResolver=new sb;scopeResolver;constructor(e,i,r,o){this.service=e,this.providerScope=i,this.providerLang=r,this.cdr=o,this.scopeResolver=new ab(this.service)}transform(e,i,r){if(!e)return e;let o=i?`${e}${JSON.stringify(i)}`:e;if(o===this.lastKey)return this.lastValue;this.lastKey=o,this.subscription?.unsubscribe();let s=LH(this.service,this.providerLang||r);return this.subscription=this.service.langChanges$.pipe(We(a=>{let l=this.langResolver.resolve({inline:r,provider:this.providerLang,active:a});return Array.isArray(this.providerScope)?lr(this.providerScope.map(c=>this.resolveScope(l,c))):this.resolveScope(l,this.providerScope)}),BH(s)).subscribe(()=>this.updateValue(e,i)),this.lastValue}ngOnDestroy(){this.subscription?.unsubscribe(),this.subscription=null}updateValue(e,i){let r=this.langResolver.resolveLangBasedOnScope(this.path);this.lastValue=this.service.translate(e,i,r),this.cdr.markForCheck()}resolveScope(e,i){let r=this.scopeResolver.resolve({inline:void 0,provider:i});this.path=this.langResolver.resolveLangPath(e,r);let o=PM(i,r);return this.service._loadDependencies(this.path,o)}static \u0275fac=function(i){return new(i||t)(Z(lb,16),Z(FH,24),Z(PH,24),Z(Ee,16))};static \u0275pipe=Eo({name:"transloco",type:t,pure:!1})}return t})();var FM=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();function LM(t){let n=[HH(xH),zH(IH),$H(TH),UH(MH)];return t.config&&n.push(jH(t.config)),t.loader&&n.push(VH(t.loader)),n}function jH(t){return Gt([{provide:pa,useValue:EH(t)}])}function VH(t){return Gt([{provide:TM,useClass:t}])}function HH(t){return Gt([{provide:MM,useClass:t,deps:[pa]}])}function UH(t){return Gt([{provide:RM,useClass:t,deps:[pa]}])}function zH(t){return Gt([{provide:AM,useClass:t}])}function $H(t){return Gt([{provide:kM,useClass:t}])}var Br=(function(t){return t[t.JANUARY=1]="JANUARY",t[t.FEBRUARY=2]="FEBRUARY",t[t.MARCH=3]="MARCH",t[t.APRIL=4]="APRIL",t[t.MAY=5]="MAY",t[t.JUNE=6]="JUNE",t[t.JULY=7]="JULY",t[t.AUGUST=8]="AUGUST",t[t.SEPTEMBER=9]="SEPTEMBER",t[t.OCTOBER=10]="OCTOBER",t[t.NOVEMBER=11]="NOVEMBER",t[t.DECEMBER=12]="DECEMBER",t})(Br||{});function BM(t){return t===Br.JANUARY?Br.DECEMBER:t-1}function jM(t){return t===Br.DECEMBER?Br.JANUARY:t+1}function Uf(t){return`${t}`.padStart(2,"0")}var zf=(()=>{class t{transform(e){return`${Uf(e.month)} / ${e.year}`}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275pipe=Eo({name:"monthYear",type:t,pure:!0,standalone:!1})}}return t})();function GH(t,n){if(t&1){let e=Rt();D(0,"button",1),q("click",function(){let r=tt(e).$index,o=se().$index,s=se();return nt(s.dismiss(o,r))}),D(1,"span",2),ye(2),mt(3,"transloco"),x(),D(4,"span",3),ye(5),mt(6,"monthYear"),x()()}if(t&2){let e=n.$implicit,i=n.$index,r=se(),o=r.$implicit,s=r.$index,a=se();S(2),Ku("",e," ",a.isSource(s,i)?gt(3,3,"components.SwapEntryBottomSheetComponent.sourceInfo"):""),S(3),ut(gt(6,5,o.date))}}function WH(t,n){if(t&1&&xo(0,GH,7,7,"button",0,Co),t&2){let e=n.$implicit;So(e.entries)}}var HM=(()=>{class t{constructor(e,i){this.bottomSheetRef=e,this.data=i}isSource(e,i){return e===this.data.groupIndex&&i===this.data.entryIndex}dismiss(e,i){this.bottomSheetRef.dismiss({groupIndex:e,entryIndex:i})}static{this.\u0275fac=function(i){return new(i||t)(Z(na),Z(Kv))}}static{this.\u0275cmp=F({type:t,selectors:[["mp-swap-entry-bottom-sheet"]],standalone:!1,decls:3,vars:0,consts:[["mat-list-item",""],["mat-list-item","",3,"click"],["matListItemTitle",""],["matLine",""]],template:function(i,r){i&1&&(D(0,"mat-action-list"),xo(1,WH,2,0,null,null,Co),x()),i&2&&(S(),So(r.data.groups))},dependencies:[hT,fT,_y,Lr,zf],encapsulation:2,changeDetection:0})}}return t})();var yb=Jk(lA());function cA(t){let n=SU(t);return xU(n)}function xU(t){return yb.Buffer.from(t,"base64").toString()}function dA(t){return yb.Buffer.from(t,"utf-8").toString("base64")}function SU(t){let n=t.replace(/-/g,"+").replace(/_/g,"/"),e=t.length%4;if(e==1)throw new Error("Invalid base64url");return e>0&&(n+="=".repeat(4-e)),n}function uA(t){let e=cA(t).split(";");if(e.length!=3)throw new Error("Invalid config");return{url:e[0],authUsername:e[1],authPassword:e[2]}}var Vr=(function(t){return t.READ_ONLY="READ_ONLY",t.PLANNING="PLANNING",t.PERSON_MANAGEMENT="PERSON_MANAGEMENT",t.MONTH_MANAGEMENT="MONTH_MANGEMENT",t})(Vr||{});var Ji=(function(t){return t.A="A",t.B="B",t})(Ji||{});var ae="primary",Rc=Symbol("RouteTitle"),Cb=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Zo(t){return new Cb(t)}function bb(t,n,e){for(let i=0;i<t.length;i++){let r=t[i],o=n[i];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function yA(t,n,e){let i=e.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>t.length||e.pathMatch==="full"&&(n.hasChildren()||i.length<t.length))return null;let l={},c=t.slice(0,i.length);return bb(i,c,l)?{consumed:c,posParams:l}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),s=i.slice(r+1);if(o.length+s.length>t.length||e.pathMatch==="full"&&n.hasChildren()&&e.path!=="**")return null;let a={};return!bb(o,t.slice(0,o.length),a)||!bb(s,t.slice(t.length-s.length),a)?null:{consumed:t,posParams:a}}function Xf(t){return new Promise((n,e)=>{t.pipe(Mi()).subscribe({next:i=>n(i),error:i=>e(i)})})}function IU(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!wi(t[e],n[e]))return!1;return!0}function wi(t,n){let e=t?xb(t):void 0,i=n?xb(n):void 0;if(!e||!i||e.length!=i.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!bA(t[r],n[r]))return!1;return!0}function xb(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function bA(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),i=[...n].sort();return e.every((r,o)=>i[o]===r)}else return t===n}function TU(t){return t.length>0?t[t.length-1]:null}function Jo(t){return Ua(t)?t:Bi(t)?Oe(Promise.resolve(t)):j(t)}function wA(t){return Ua(t)?Xf(t):Promise.resolve(t)}var MU={exact:CA,subset:xA},DA={exact:AU,subset:kU,ignored:()=>!0},EA={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Sb={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function hA(t,n,e){return MU[e.paths](t.root,n.root,e.matrixParams)&&DA[e.queryParams](t.queryParams,n.queryParams)&&!(e.fragment==="exact"&&t.fragment!==n.fragment)}function AU(t,n){return wi(t,n)}function CA(t,n,e){if(!Ko(t.segments,n.segments)||!Qf(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!t.children[i]||!CA(t.children[i],n.children[i],e))return!1;return!0}function kU(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>bA(t[e],n[e]))}function xA(t,n,e){return SA(t,n,n.segments,e)}function SA(t,n,e,i){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!Ko(r,e)||n.hasChildren()||!Qf(r,e,i))}else if(t.segments.length===e.length){if(!Ko(t.segments,e)||!Qf(t.segments,e,i))return!1;for(let r in n.children)if(!t.children[r]||!xA(t.children[r],n.children[r],i))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!Ko(t.segments,r)||!Qf(t.segments,r,i)||!t.children[ae]?!1:SA(t.children[ae],n,o,i)}}function Qf(t,n,e){return n.every((i,r)=>DA[e](t[r].parameters,i.parameters))}var An=class{root;queryParams;fragment;_queryParamMap;constructor(n=new Ne([],{}),e={},i=null){this.root=n,this.queryParams=e,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Zo(this.queryParams),this._queryParamMap}toString(){return OU.serialize(this)}},Ne=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Kf(this)}},Hr=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=Zo(this.parameters),this._parameterMap}toString(){return TA(this)}};function RU(t,n){return Ko(t,n)&&t.every((e,i)=>wi(e.parameters,n[i].parameters))}function Ko(t,n){return t.length!==n.length?!1:t.every((e,i)=>e.path===n[i].path)}function NU(t,n){let e=[];return Object.entries(t.children).forEach(([i,r])=>{i===ae&&(e=e.concat(n(r,i)))}),Object.entries(t.children).forEach(([i,r])=>{i!==ae&&(e=e.concat(n(r,i)))}),e}var es=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>new tr,providedIn:"root"})}return t})(),tr=class{parse(n){let e=new Tb(n);return new An(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${wc(n.root,!0)}`,i=LU(n.queryParams),r=typeof n.fragment=="string"?`#${PU(n.fragment)}`:"";return`${e}${i}${r}`}},OU=new tr;function Kf(t){return t.segments.map(n=>TA(n)).join("/")}function wc(t,n){if(!t.hasChildren())return Kf(t);if(n){let e=t.children[ae]?wc(t.children[ae],!1):"",i=[];return Object.entries(t.children).forEach(([r,o])=>{r!==ae&&i.push(`${r}:${wc(o,!1)}`)}),i.length>0?`${e}(${i.join("//")})`:e}else{let e=NU(t,(i,r)=>r===ae?[wc(t.children[ae],!1)]:[`${r}:${wc(i,!1)}`]);return Object.keys(t.children).length===1&&t.children[ae]!=null?`${Kf(t)}/${e[0]}`:`${Kf(t)}/(${e.join("//")})`}}function IA(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function qf(t){return IA(t).replace(/%3B/gi,";")}function PU(t){return encodeURI(t)}function Ib(t){return IA(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Zf(t){return decodeURIComponent(t)}function fA(t){return Zf(t.replace(/\+/g,"%20"))}function TA(t){return`${Ib(t.path)}${FU(t.parameters)}`}function FU(t){return Object.entries(t).map(([n,e])=>`;${Ib(n)}=${Ib(e)}`).join("")}function LU(t){let n=Object.entries(t).map(([e,i])=>Array.isArray(i)?i.map(r=>`${qf(e)}=${qf(r)}`).join("&"):`${qf(e)}=${qf(i)}`).filter(e=>e);return n.length?`?${n.join("&")}`:""}var BU=/^[^\/()?;#]+/;function wb(t){let n=t.match(BU);return n?n[0]:""}var jU=/^[^\/()?;=#]+/;function VU(t){let n=t.match(jU);return n?n[0]:""}var HU=/^[^=?&#]+/;function UU(t){let n=t.match(HU);return n?n[0]:""}var zU=/^[^&#]+/;function $U(t){let n=t.match(zU);return n?n[0]:""}var Tb=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new Ne([],{}):new Ne([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new w(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(e.length>0||Object.keys(i).length>0)&&(r[ae]=new Ne(e,i)),r}parseSegment(){let n=wb(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new w(4009,!1);return this.capture(n),new Hr(Zf(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let e=VU(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let r=wb(this.remaining);r&&(i=r,this.capture(i))}n[Zf(e)]=Zf(i)}parseQueryParam(n){let e=UU(this.remaining);if(!e)return;this.capture(e);let i="";if(this.consumeOptional("=")){let s=$U(this.remaining);s&&(i=s,this.capture(i))}let r=fA(e),o=fA(i);if(n.hasOwnProperty(r)){let s=n[r];Array.isArray(s)||(s=[s],n[r]=s),s.push(o)}else n[r]=o}parseParens(n,e){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=wb(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new w(4010,!1);let s;r.indexOf(":")>-1?(s=r.slice(0,r.indexOf(":")),this.capture(s),this.capture(":")):n&&(s=ae);let a=this.parseChildren(e+1);i[s??ae]=Object.keys(a).length===1&&a[ae]?a[ae]:new Ne([],a),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new w(4011,!1)}};function MA(t){return t.segments.length>0?new Ne([],{[ae]:t}):t}function AA(t){let n={};for(let[i,r]of Object.entries(t.children)){let o=AA(r);if(i===ae&&o.segments.length===0&&o.hasChildren())for(let[s,a]of Object.entries(o.children))n[s]=a;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let e=new Ne(t.segments,n);return GU(e)}function GU(t){if(t.numberOfChildren===1&&t.children[ae]){let n=t.children[ae];return new Ne(t.segments.concat(n.segments),n.children)}return t}function Ea(t){return t instanceof An}function kA(t,n,e=null,i=null,r=new tr){let o=RA(t);return NA(o,n,e,i,r)}function RA(t){let n;function e(o){let s={};for(let l of o.children){let c=e(l);s[l.outlet]=c}let a=new Ne(o.url,s);return o===t&&(n=a),a}let i=e(t.root),r=MA(i);return n??r}function NA(t,n,e,i,r){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Db(o,o,o,e,i,r);let s=WU(n);if(s.toRoot())return Db(o,o,new Ne([],{}),e,i,r);let a=qU(s,o,t),l=a.processChildren?Ec(a.segmentGroup,a.index,s.commands):PA(a.segmentGroup,a.index,s.commands);return Db(o,a.segmentGroup,l,e,i,r)}function Jf(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function xc(t){return typeof t=="object"&&t!=null&&t.outlets}function pA(t,n,e){t||="\u0275";let i=new An;return i.queryParams={[t]:n},e.parse(e.serialize(i)).queryParams[t]}function Db(t,n,e,i,r,o){let s={};for(let[c,d]of Object.entries(i??{}))s[c]=Array.isArray(d)?d.map(h=>pA(c,h,o)):pA(c,d,o);let a;t===n?a=e:a=OA(t,n,e);let l=MA(AA(a));return new An(l,s,r)}function OA(t,n,e){let i={};return Object.entries(t.children).forEach(([r,o])=>{o===n?i[r]=e:i[r]=OA(o,n,e)}),new Ne(t.segments,i)}var ep=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,i){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=i,n&&i.length>0&&Jf(i[0]))throw new w(4003,!1);let r=i.find(xc);if(r&&r!==TU(i))throw new w(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function WU(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new ep(!0,0,t);let n=0,e=!1,i=t.reduce((r,o,s)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let a={};return Object.entries(o.outlets).forEach(([l,c])=>{a[l]=typeof c=="string"?c.split("/"):c}),[...r,{outlets:a}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:s===0?(o.split("/").forEach((a,l)=>{l==0&&a==="."||(l==0&&a===""?e=!0:a===".."?n++:a!=""&&r.push(a))}),r):[...r,o]},[]);return new ep(e,n,i)}var ba=class{segmentGroup;processChildren;index;constructor(n,e,i){this.segmentGroup=n,this.processChildren=e,this.index=i}};function qU(t,n,e){if(t.isAbsolute)return new ba(n,!0,0);if(!e)return new ba(n,!1,NaN);if(e.parent===null)return new ba(e,!0,0);let i=Jf(t.commands[0])?0:1,r=e.segments.length-1+i;return YU(e,r,t.numberOfDoubleDots)}function YU(t,n,e){let i=t,r=n,o=e;for(;o>r;){if(o-=r,i=i.parent,!i)throw new w(4005,!1);r=i.segments.length}return new ba(i,!1,r-o)}function QU(t){return xc(t[0])?t[0].outlets:{[ae]:t}}function PA(t,n,e){if(t??=new Ne([],{}),t.segments.length===0&&t.hasChildren())return Ec(t,n,e);let i=KU(t,n,e),r=e.slice(i.commandIndex);if(i.match&&i.pathIndex<t.segments.length){let o=new Ne(t.segments.slice(0,i.pathIndex),{});return o.children[ae]=new Ne(t.segments.slice(i.pathIndex),t.children),Ec(o,0,r)}else return i.match&&r.length===0?new Ne(t.segments,{}):i.match&&!t.hasChildren()?Mb(t,n,e):i.match?Ec(t,0,r):Mb(t,n,e)}function Ec(t,n,e){if(e.length===0)return new Ne(t.segments,{});{let i=QU(e),r={};if(Object.keys(i).some(o=>o!==ae)&&t.children[ae]&&t.numberOfChildren===1&&t.children[ae].segments.length===0){let o=Ec(t.children[ae],n,e);return new Ne(t.segments,o.children)}return Object.entries(i).forEach(([o,s])=>{typeof s=="string"&&(s=[s]),s!==null&&(r[o]=PA(t.children[o],n,s))}),Object.entries(t.children).forEach(([o,s])=>{i[o]===void 0&&(r[o]=s)}),new Ne(t.segments,r)}}function KU(t,n,e){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(i>=e.length)return o;let s=t.segments[r],a=e[i];if(xc(a))break;let l=`${a}`,c=i<e.length-1?e[i+1]:null;if(r>0&&l===void 0)break;if(l&&c&&typeof c=="object"&&c.outlets===void 0){if(!gA(l,c,s))return o;i+=2}else{if(!gA(l,{},s))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Mb(t,n,e){let i=t.segments.slice(0,n),r=0;for(;r<e.length;){let o=e[r];if(xc(o)){let l=ZU(o.outlets);return new Ne(i,l)}if(r===0&&Jf(e[0])){let l=t.segments[n];i.push(new Hr(l.path,mA(e[0]))),r++;continue}let s=xc(o)?o.outlets[ae]:`${o}`,a=r<e.length-1?e[r+1]:null;s&&a&&Jf(a)?(i.push(new Hr(s,mA(a))),r+=2):(i.push(new Hr(s,{})),r++)}return new Ne(i,{})}function ZU(t){let n={};return Object.entries(t).forEach(([e,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[e]=Mb(new Ne([],{}),0,i))}),n}function mA(t){let n={};return Object.entries(t).forEach(([e,i])=>n[e]=`${i}`),n}function gA(t,n,e){return t==e.path&&wi(n,e.parameters)}var wa="imperative",It=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(It||{}),_n=class{id;url;constructor(n,e){this.id=n,this.url=e}},Ur=class extends _n{type=It.NavigationStart;navigationTrigger;restoredState;constructor(n,e,i="imperative",r=null){super(n,e),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Jn=class extends _n{urlAfterRedirects;type=It.NavigationEnd;constructor(n,e,i){super(n,e),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ht=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Ht||{}),Ca=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(Ca||{}),Mn=class extends _n{reason;code;type=It.NavigationCancel;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function FA(t){return t instanceof Mn&&(t.code===Ht.Redirect||t.code===Ht.SupersededByNewNavigation)}var Di=class extends _n{reason;code;type=It.NavigationSkipped;constructor(n,e,i,r){super(n,e),this.reason=i,this.code=r}},Xo=class extends _n{error;target;type=It.NavigationError;constructor(n,e,i,r){super(n,e),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Sc=class extends _n{urlAfterRedirects;state;type=It.RoutesRecognized;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},tp=class extends _n{urlAfterRedirects;state;type=It.GuardsCheckStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},np=class extends _n{urlAfterRedirects;state;shouldActivate;type=It.GuardsCheckEnd;constructor(n,e,i,r,o){super(n,e),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ip=class extends _n{urlAfterRedirects;state;type=It.ResolveStart;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},rp=class extends _n{urlAfterRedirects;state;type=It.ResolveEnd;constructor(n,e,i,r){super(n,e),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},op=class{route;type=It.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},sp=class{route;type=It.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},ap=class{snapshot;type=It.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},lp=class{snapshot;type=It.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},cp=class{snapshot;type=It.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},dp=class{snapshot;type=It.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xa=class{routerEvent;position;anchor;scrollBehavior;type=It.Scroll;constructor(n,e,i,r){this.routerEvent=n,this.position=e,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},Sa=class{},Ic=class{},Ia=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function XU(t){return!(t instanceof Sa)&&!(t instanceof Ia)&&!(t instanceof Ic)}var up=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new ts(this.rootInjector)}},ts=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,i){let r=this.getOrCreateContext(e);r.outlet=i,this.contexts.set(e,r)}onChildOutletDestroyed(e){let i=this.getContext(e);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let i=this.getContext(e);return i||(i=new up(this.rootInjector),this.contexts.set(e,i)),i}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(i){return new(i||t)(I(Fe))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hp=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=Ab(n,this._root);return e?e.children.map(i=>i.value):[]}firstChild(n){let e=Ab(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=kb(n,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return kb(n,this._root).map(e=>e.value)}};function Ab(t,n){if(t===n.value)return n;for(let e of n.children){let i=Ab(t,e);if(i)return i}return null}function kb(t,n){if(t===n.value)return[n];for(let e of n.children){let i=kb(t,e);if(i.length)return i.unshift(n),i}return[]}var gn=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function ya(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var Tc=class extends hp{snapshot;constructor(n,e){super(n),this.snapshot=e,Vb(this,n)}toString(){return this.snapshot.toString()}};function LA(t,n){let e=JU(t,n),i=new Ue([new Hr("",{})]),r=new Ue({}),o=new Ue({}),s=new Ue({}),a=new Ue(""),l=new Ei(i,r,s,a,o,ae,t,e.root);return l.snapshot=e.root,new Tc(new gn(l,[]),e)}function JU(t,n){let e={},i={},r={},s=new Ta([],e,r,"",i,ae,t,null,{},n);return new Mc("",new gn(s,[]))}var Ei=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,e,i,r,o,s,a,l){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=s,this.component=a,this._futureSnapshot=l,this.title=this.dataSubject?.pipe(W(c=>c[Rc]))??j(void 0),this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(W(n=>Zo(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(W(n=>Zo(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function jb(t,n,e="emptyOnly"){let i,{routeConfig:r}=t;return n!==null&&(e==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:_(_({},n.params),t.params),data:_(_({},n.data),t.data),resolve:_(_(_(_({},t.data),n.data),r?.data),t._resolvedData)}:i={params:_({},t.params),data:_({},t.data),resolve:_(_({},t.data),t._resolvedData??{})},r&&jA(r)&&(i.resolve[Rc]=r.title),i}var Ta=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Rc]}constructor(n,e,i,r,o,s,a,l,c,d){this.url=n,this.params=e,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=s,this.component=a,this.routeConfig=l,this._resolve=c,this._environmentInjector=d}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Zo(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Zo(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${e}')`}},Mc=class extends hp{url;constructor(n,e){super(e),this.url=n,Vb(this,e)}toString(){return BA(this._root)}};function Vb(t,n){n.value._routerState=t,n.children.forEach(e=>Vb(t,e))}function BA(t){let n=t.children.length>0?` { ${t.children.map(BA).join(", ")} } `:"";return`${t.value}${n}`}function Eb(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,wi(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),wi(n.params,e.params)||t.paramsSubject.next(e.params),IU(n.url,e.url)||t.urlSubject.next(e.url),wi(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function Rb(t,n){let e=wi(t.params,n.params)&&RU(t.url,n.url),i=!t.parent!=!n.parent;return e&&!i&&(!t.parent||Rb(t.parent,n.parent))}function jA(t){return typeof t.title=="string"||t.title===null}var VA=new g(""),Hb=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=ae;activateEvents=new N;deactivateEvents=new N;attachEvents=new N;detachEvents=new N;routerOutletData=jC();parentContexts=u(ts);location=u(Et);changeDetector=u(Ee);inputBinder=u(Nc,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:i,previousValue:r}=e.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new w(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new w(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new w(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,i){this.activated=e,this._activatedRoute=i,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,i){if(this.isActivated)throw new w(4013,!1);this._activatedRoute=e;let r=this.location,s=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,l=new Nb(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(s,{index:r.length,injector:l,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ke]})}return t})(),Nb=class{route;childContexts;parent;outletData;constructor(n,e,i,r){this.route=n,this.childContexts=e,this.parent=i,this.outletData=r}get(n,e){return n===Ei?this.route:n===ts?this.childContexts:n===VA?this.outletData:this.parent.get(n,e)}},Nc=new g(""),Ub=(()=>{class t{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(e){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e)}subscribeToRouteData(e){let{activatedRoute:i}=e,r=or([i.queryParams,i.params,i.data]).pipe(We(([o,s,a],l)=>(a=_(_(_({},o),s),a),l===0?j(a):Promise.resolve(a)))).subscribe(o=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let s=KC(i.component);if(!s){this.unsubscribeFromRouteData(e);return}for(let{templateName:a}of s.inputs)e.activatedComponentRef.setInput(a,o[a])});this.outletDataSubscriptions.set(e,r)}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})(),zb=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&Se(0,"router-outlet")},dependencies:[Hb],encapsulation:2})}return t})();function $b(t){let n=t.children&&t.children.map($b),e=n?G(_({},t),{children:n}):_({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==ae&&(e.component=zb),e}function ez(t,n,e){let i=Ac(t,n._root,e?e._root:void 0);return new Tc(i,n)}function Ac(t,n,e){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._futureSnapshot=n.value;let r=tz(t,n,e);return new gn(i,r)}else{if(t.shouldAttach(n.value)){let o=t.retrieve(n.value);if(o!==null){let s=o.route;return s.value._futureSnapshot=n.value,s.children=n.children.map(a=>Ac(t,a)),s}}let i=nz(n.value),r=n.children.map(o=>Ac(t,o));return new gn(i,r)}}function tz(t,n,e){return n.children.map(i=>{for(let r of e.children)if(t.shouldReuseRoute(i.value,r.value.snapshot))return Ac(t,i,r);return Ac(t,i)})}function nz(t){return new Ei(new Ue(t.url),new Ue(t.params),new Ue(t.queryParams),new Ue(t.fragment),new Ue(t.data),t.outlet,t.component,t)}var Ma=class{redirectTo;navigationBehaviorOptions;constructor(n,e){this.redirectTo=n,this.navigationBehaviorOptions=e}},HA="ngNavigationCancelingError";function fp(t,n){let{redirectTo:e,navigationBehaviorOptions:i}=Ea(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=UA(!1,Ht.Redirect);return r.url=e,r.navigationBehaviorOptions=i,r}function UA(t,n){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[HA]=!0,e.cancellationCode=n,e}function iz(t){return zA(t)&&Ea(t.url)}function zA(t){return!!t&&t[HA]}var Ob=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,i,r,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,i,n),Eb(this.futureState.root),this.activateChildRoutes(e,i,n)}deactivateChildRoutes(n,e,i){let r=ya(e);n.children.forEach(o=>{let s=o.value.outlet;this.deactivateRoutes(o,r[s],i),delete r[s]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(r===o)if(r.component){let s=i.getContext(r.outlet);s&&this.deactivateChildRoutes(n,e,s.children)}else this.deactivateChildRoutes(n,e,i);else o&&this.deactivateRouteAndItsChildren(e,i)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ya(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);if(i&&i.outlet){let s=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:s,route:n,contexts:a})}}deactivateRouteAndOutlet(n,e){let i=e.getContext(n.value.outlet),r=i&&n.value.component?i.children:e,o=ya(n);for(let s of Object.values(o))this.deactivateRouteAndItsChildren(s,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,e,i){let r=ya(e);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new dp(o.value.snapshot))}),n.children.length&&this.forwardEvent(new lp(n.value.snapshot))}activateRoutes(n,e,i){let r=n.value,o=e?e.value:null;if(Eb(r),r===o)if(r.component){let s=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,e,s.children)}else this.activateChildRoutes(n,e,i);else if(r.component){let s=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),s.children.onOutletReAttached(a.contexts),s.attachRef=a.componentRef,s.route=a.route.value,s.outlet&&s.outlet.attach(a.componentRef,a.route.value),Eb(a.route.value),this.activateChildRoutes(n,null,s.children)}else s.attachRef=null,s.route=r,s.outlet&&s.outlet.activateWith(r,s.injector),this.activateChildRoutes(n,null,s.children)}else this.activateChildRoutes(n,null,i)}},pp=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},Da=class{component;route;constructor(n,e){this.component=n,this.route=e}};function rz(t,n,e){let i=t._root,r=n?n._root:null;return Dc(i,r,e,[i.value])}function oz(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function ka(t,n){let e=Symbol(),i=n.get(t,e);return i===e?typeof t=="function"&&!cm(t)?t:n.get(t):i}function Dc(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ya(n);return t.children.forEach(s=>{sz(s,o[s.value.outlet],e,i.concat([s.value]),r),delete o[s.value.outlet]}),Object.entries(o).forEach(([s,a])=>Cc(a,e.getContext(s),r)),r}function sz(t,n,e,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,s=n?n.value:null,a=e?e.getContext(t.value.outlet):null;if(s&&o.routeConfig===s.routeConfig){let l=az(s,o,o.routeConfig.runGuardsAndResolvers);l?r.canActivateChecks.push(new pp(i)):(o.data=s.data,o._resolvedData=s._resolvedData),o.component?Dc(t,n,a?a.children:null,i,r):Dc(t,n,e,i,r),l&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new Da(a.outlet.component,s))}else s&&Cc(n,a,r),r.canActivateChecks.push(new pp(i)),o.component?Dc(t,null,a?a.children:null,i,r):Dc(t,null,e,i,r);return r}function az(t,n,e){if(typeof e=="function")return pt(n._environmentInjector,()=>e(t,n));switch(e){case"pathParamsChange":return!Ko(t.url,n.url);case"pathParamsOrQueryParamsChange":return!Ko(t.url,n.url)||!wi(t.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Rb(t,n)||!wi(t.queryParams,n.queryParams);default:return!Rb(t,n)}}function Cc(t,n,e){let i=ya(t),r=t.value;Object.entries(i).forEach(([o,s])=>{r.component?n?Cc(s,n.children.getContext(o),e):Cc(s,null,e):Cc(s,n,e)}),r.component?n&&n.outlet&&n.outlet.isActivated?e.canDeactivateChecks.push(new Da(n.outlet.component,r)):e.canDeactivateChecks.push(new Da(null,r)):e.canDeactivateChecks.push(new Da(null,r))}function Oc(t){return typeof t=="function"}function lz(t){return typeof t=="boolean"}function cz(t){return t&&Oc(t.canLoad)}function dz(t){return t&&Oc(t.canActivate)}function uz(t){return t&&Oc(t.canActivateChild)}function hz(t){return t&&Oc(t.canDeactivate)}function fz(t){return t&&Oc(t.canMatch)}function $A(t){return t instanceof eo||t?.name==="EmptyError"}var Yf=Symbol("INITIAL_VALUE");function Aa(){return We(t=>or(t.map(n=>n.pipe(Me(1),ft(Yf)))).pipe(W(n=>{for(let e of n)if(e!==!0){if(e===Yf)return Yf;if(e===!1||pz(e))return e}return!0}),re(n=>n!==Yf),Me(1)))}function pz(t){return Ea(t)||t instanceof Ma}function GA(t){return t.aborted?j(void 0).pipe(Me(1)):new J(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function WA(t){return he(GA(t))}function mz(t){return At(n=>{let{targetSnapshot:e,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?j(G(_({},n),{guardsResult:!0})):gz(o,e,i).pipe(At(s=>s&&lz(s)?_z(e,r,t):j(s)),W(s=>G(_({},n),{guardsResult:s})))})}function gz(t,n,e){return Oe(t).pipe(At(i=>Dz(i.component,i.route,e,n)),Mi(i=>i!==!0,!0))}function _z(t,n,e){return Oe(n).pipe(cr(i=>ar(yz(i.route.parent,e),vz(i.route,e),wz(t,i.path),bz(t,i.route))),Mi(i=>i!==!0,!0))}function vz(t,n){return t!==null&&n&&n(new cp(t)),j(!0)}function yz(t,n){return t!==null&&n&&n(new ap(t)),j(!0)}function bz(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return j(!0);let i=e.map(r=>Ii(()=>{let o=n._environmentInjector,s=ka(r,o),a=dz(s)?s.canActivate(n,t):pt(o,()=>s(n,t));return Jo(a).pipe(Mi())}));return j(i).pipe(Aa())}function wz(t,n){let e=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>oz(o)).filter(o=>o!==null).map(o=>Ii(()=>{let s=o.guards.map(a=>{let l=o.node._environmentInjector,c=ka(a,l),d=uz(c)?c.canActivateChild(e,t):pt(l,()=>c(e,t));return Jo(d).pipe(Mi())});return j(s).pipe(Aa())}));return j(r).pipe(Aa())}function Dz(t,n,e,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return j(!0);let o=r.map(s=>{let a=n._environmentInjector,l=ka(s,a),c=hz(l)?l.canDeactivate(t,n,e,i):pt(a,()=>l(t,n,e,i));return Jo(c).pipe(Mi())});return j(o).pipe(Aa())}function Ez(t,n,e,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return j(!0);let s=o.map(a=>{let l=ka(a,t),c=cz(l)?l.canLoad(n,e):pt(t,()=>l(n,e)),d=Jo(c);return r?d.pipe(WA(r)):d});return j(s).pipe(Aa(),qA(i))}function qA(t){return Up(lt(n=>{if(typeof n!="boolean")throw fp(t,n)}),W(n=>n===!0))}function Cz(t,n,e,i,r,o){let s=n.canMatch;if(!s||s.length===0)return j(!0);let a=s.map(l=>{let c=ka(l,t),d=fz(c)?c.canMatch(n,e,r):pt(t,()=>c(n,e,r));return Jo(d).pipe(WA(o))});return j(a).pipe(Aa(),qA(i))}var er=class t extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}},kc=class t extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function xz(t){throw new w(4e3,!1)}function Sz(t){throw UA(!1,Ht.GuardRejected)}var Pb=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}lineralizeSegments(n,e){return Le(this,null,function*(){let i=[],r=e.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[ae])throw xz(`${n.redirectTo}`);r=r.children[ae]}})}applyRedirectCommands(n,e,i,r,o){return Le(this,null,function*(){let s=yield Iz(e,r,o);if(s instanceof An)throw new kc(s);let a=this.applyRedirectCreateUrlTree(s,this.urlSerializer.parse(s),n,i);if(s[0]==="/")throw new kc(a);return a})}applyRedirectCreateUrlTree(n,e,i,r){let o=this.createSegmentGroup(n,e.root,i,r);return new An(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let a=o.substring(1);i[r]=e[a]}else i[r]=o}),i}createSegmentGroup(n,e,i,r){let o=this.createSegments(n,e.segments,i,r),s={};return Object.entries(e.children).forEach(([a,l])=>{s[a]=this.createSegmentGroup(n,l,i,r)}),new Ne(o,s)}createSegments(n,e,i,r){return e.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,e,i){let r=i[e.path.substring(1)];if(!r)throw new w(4001,!1);return r}findOrReturn(n,e){let i=0;for(let r of e){if(r.path===n.path)return e.splice(i),r;i++}return n}};function Iz(t,n,e){if(typeof t=="string")return Promise.resolve(t);let i=t;return Xf(Jo(pt(e,()=>i(n))))}function Tz(t,n){return t.providers&&!t._injector&&(t._injector=Fs(t.providers,n,`Route: ${t.path}`)),t._injector??n}function Xn(t){return t.outlet||ae}function Mz(t,n){let e=t.filter(i=>Xn(i)===n);return e.push(...t.filter(i=>Xn(i)!==n)),e}var Fb={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function YA(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function Az(t,n,e,i,r,o,s){let a=QA(t,n,e);if(!a.matched)return j(a);let l=YA(o(a));return i=Tz(n,i),Cz(i,n,e,r,l,s).pipe(W(c=>c===!0?a:_({},Fb)))}function QA(t,n,e){if(n.path==="")return n.pathMatch==="full"&&(t.hasChildren()||e.length>0)?_({},Fb):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(n.matcher||yA)(e,t,n);if(!r)return _({},Fb);let o={};Object.entries(r.posParams??{}).forEach(([a,l])=>{o[a]=l.path});let s=r.consumed.length>0?_(_({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:s,positionalParamSegments:r.posParams??{}}}function _A(t,n,e,i,r){return e.length>0&&Nz(t,e,i,r)?{segmentGroup:new Ne(n,Rz(i,new Ne(e,t.children))),slicedSegments:[]}:e.length===0&&Oz(t,e,i)?{segmentGroup:new Ne(t.segments,kz(t,e,i,t.children)),slicedSegments:e}:{segmentGroup:new Ne(t.segments,t.children),slicedSegments:e}}function kz(t,n,e,i){let r={};for(let o of e)if(gp(t,n,o)&&!i[Xn(o)]){let s=new Ne([],{});r[Xn(o)]=s}return _(_({},i),r)}function Rz(t,n){let e={};e[ae]=n;for(let i of t)if(i.path===""&&Xn(i)!==ae){let r=new Ne([],{});e[Xn(i)]=r}return e}function Nz(t,n,e,i){return e.some(r=>!gp(t,n,r)||!(Xn(r)!==ae)?!1:!(i!==void 0&&Xn(r)===i))}function Oz(t,n,e){return e.some(i=>gp(t,n,i))}function gp(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Pz(t,n,e){return n.length===0&&!t.children[e]}var Lb=class{};function Fz(t,n,e,i,r,o,s="emptyOnly",a){return Le(this,null,function*(){return new Bb(t,n,e,i,r,s,o,a).recognize()})}var Lz=31,Bb=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,e,i,r,o,s,a,l){this.injector=n,this.configLoader=e,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=s,this.urlSerializer=a,this.abortSignal=l,this.applyRedirects=new Pb(this.urlSerializer,this.urlTree)}noMatchError(n){return new w(4002,`'${n.segmentGroup}'`)}recognize(){return Le(this,null,function*(){let n=_A(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:i}=yield this.match(n),r=new gn(i,e),o=new Mc("",r),s=kA(i,[],this.urlTree.queryParams,this.urlTree.fragment);return s.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(s),{state:o,tree:s}})}match(n){return Le(this,null,function*(){let e=new Ta([],Object.freeze({}),Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),ae,this.rootComponentType,null,{},this.injector);try{return{children:yield this.processSegmentGroup(this.injector,this.config,n,ae,e),rootSnapshot:e}}catch(i){if(i instanceof kc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof er?this.noMatchError(i):i}})}processSegmentGroup(n,e,i,r,o){return Le(this,null,function*(){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,e,i,o);let s=yield this.processSegment(n,e,i,i.segments,r,!0,o);return s instanceof gn?[s]:[]})}processChildren(n,e,i,r){return Le(this,null,function*(){let o=[];for(let l of Object.keys(i.children))l==="primary"?o.unshift(l):o.push(l);let s=[];for(let l of o){let c=i.children[l],d=Mz(e,l),h=yield this.processSegmentGroup(n,d,c,l,r);s.push(...h)}let a=KA(s);return Bz(a),a})}processSegment(n,e,i,r,o,s,a){return Le(this,null,function*(){for(let l of e)try{return yield this.processSegmentAgainstRoute(l._injector??n,e,l,i,r,o,s,a)}catch(c){if(c instanceof er||$A(c))continue;throw c}if(Pz(i,r,o))return new Lb;throw new er(i)})}processSegmentAgainstRoute(n,e,i,r,o,s,a,l){return Le(this,null,function*(){if(Xn(i)!==s&&(s===ae||!gp(r,o,i)))throw new er(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,s,l);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(n,r,e,i,o,s,l);throw new er(r)})}expandSegmentAgainstRouteUsingRedirect(n,e,i,r,o,s,a){return Le(this,null,function*(){let{matched:l,parameters:c,consumedSegments:d,positionalParamSegments:h,remainingSegments:f}=QA(e,r,o);if(!l)throw new er(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Lz&&(this.allowRedirects=!1));let p=this.createSnapshot(n,r,o,c,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let m=yield this.applyRedirects.applyRedirectCommands(d,r.redirectTo,h,YA(p),n),b=yield this.applyRedirects.lineralizeSegments(r,m);return this.processSegment(n,i,e,b.concat(f),s,!1,a)})}createSnapshot(n,e,i,r,o){let s=new Ta(i,r,Object.freeze(_({},this.urlTree.queryParams)),this.urlTree.fragment,Vz(e),Xn(e),e.component??e._loadedComponent??null,e,Hz(e),n),a=jb(s,o,this.paramsInheritanceStrategy);return s.params=Object.freeze(a.params),s.data=Object.freeze(a.data),s}matchSegmentAgainstRoute(n,e,i,r,o,s){return Le(this,null,function*(){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=we=>this.createSnapshot(n,i,we.consumedSegments,we.parameters,s),l=yield Xf(Az(e,i,r,n,this.urlSerializer,a,this.abortSignal));if(i.path==="**"&&(e.children={}),!l?.matched)throw new er(e);n=i._injector??n;let{routes:c}=yield this.getChildConfig(n,i,r),d=i._loadedInjector??n,{parameters:h,consumedSegments:f,remainingSegments:p}=l,m=this.createSnapshot(n,i,f,h,s),{segmentGroup:b,slicedSegments:C}=_A(e,f,p,c,o);if(C.length===0&&b.hasChildren()){let we=yield this.processChildren(d,c,b,m);return new gn(m,we)}if(c.length===0&&C.length===0)return new gn(m,[]);let M=Xn(i)===o,Y=yield this.processSegment(d,c,b,C,M?ae:o,!0,m);return new gn(m,Y instanceof gn?[Y]:[])})}getChildConfig(n,e,i){return Le(this,null,function*(){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(yield Xf(Ez(n,e,i,this.urlSerializer,this.abortSignal))){let o=yield this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw Sz(e)}return{routes:[],injector:n}})}};function Bz(t){t.sort((n,e)=>n.value.outlet===ae?-1:e.value.outlet===ae?1:n.value.outlet.localeCompare(e.value.outlet))}function jz(t){let n=t.value.routeConfig;return n&&n.path===""}function KA(t){let n=[],e=new Set;for(let i of t){if(!jz(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),e.add(r)):n.push(i)}for(let i of e){let r=KA(i.children);n.push(new gn(i.value,r))}return n.filter(i=>!e.has(i))}function Vz(t){return t.data||{}}function Hz(t){return t.resolve||{}}function Uz(t,n,e,i,r,o,s){return At(a=>Le(null,null,function*(){let{state:l,tree:c}=yield Fz(t,n,e,i,a.extractedUrl,r,o,s);return G(_({},a),{targetSnapshot:l,urlAfterRedirects:c})}))}function zz(t){return At(n=>{let{targetSnapshot:e,guards:{canActivateChecks:i}}=n;if(!i.length)return j(n);let r=new Set(i.map(a=>a.route)),o=new Set;for(let a of r)if(!o.has(a))for(let l of ZA(a))o.add(l);let s=0;return Oe(o).pipe(cr(a=>r.has(a)?$z(a,e,t):(a.data=jb(a,a.parent,t).resolve,j(void 0))),lt(()=>s++),Dd(1),At(a=>s===o.size?j(n):$e))})}function ZA(t){let n=t.children.map(e=>ZA(e)).flat();return[t,...n]}function $z(t,n,e){let i=t.routeConfig,r=t._resolve;return i?.title!==void 0&&!jA(i)&&(r[Rc]=i.title),Ii(()=>(t.data=jb(t,t.parent,e).resolve,Gz(r,t,n).pipe(W(o=>(t._resolvedData=o,t.data=_(_({},t.data),o),null)))))}function Gz(t,n,e){let i=xb(t);if(i.length===0)return j({});let r={};return Oe(i).pipe(At(o=>Wz(t[o],n,e).pipe(Mi(),lt(s=>{if(s instanceof Ma)throw fp(new tr,s);r[o]=s}))),Dd(1),W(()=>r),un(o=>$A(o)?$e:Ha(o)))}function Wz(t,n,e){let i=n._environmentInjector,r=ka(t,i),o=r.resolve?r.resolve(n,e):pt(i,()=>r(n,e));return Jo(o)}function vA(t){return We(n=>{let e=t(n);return e?Oe(e).pipe(W(()=>n)):j(n)})}var Gb=(()=>{class t{buildTitle(e){let i,r=e.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===ae);return i}getResolvedTitleForRoute(e){return e.data[Rc]}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>u(XA),providedIn:"root"})}return t})(),XA=(()=>{class t extends Gb{title;constructor(e){super(),this.title=e}updateTitle(e){let i=this.buildTitle(e);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||t)(I(Dx))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ns=new g("",{factory:()=>({})}),Ra=new g(""),_p=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=u(k_);loadComponent(e,i){return Le(this,null,function*(){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Le(this,null,function*(){try{let o=yield wA(pt(e,()=>i.loadComponent())),s=yield tk(ek(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=s,s}finally{this.componentLoaders.delete(i)}});return this.componentLoaders.set(i,r),r})}loadChildren(e,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=Le(this,null,function*(){try{let o=yield JA(i,this.compiler,e,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}});return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function JA(t,n,e,i){return Le(this,null,function*(){let r=yield wA(pt(e,()=>t.loadChildren())),o=yield tk(ek(r)),s;o instanceof Bu||Array.isArray(o)?s=o:s=yield n.compileModuleAsync(o),i&&i(t);let a,l,c=!1,d;return Array.isArray(s)?(l=s,c=!0):(a=s.create(e).injector,d=s,l=a.get(Ra,[],{optional:!0,self:!0}).flat()),{routes:l.map($b),injector:a,factory:d}})}function qz(t){return t&&typeof t=="object"&&"default"in t}function ek(t){return qz(t)?t.default:t}function tk(t){return Le(this,null,function*(){return t})}var vp=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>u(Yz),providedIn:"root"})}return t})(),Yz=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,i){return e}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Wb=new g(""),qb=new g("");function nk(t,n,e){let i=t.get(qb),r=t.get(P);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(c=>setTimeout(c));let o,s=new Promise(c=>{o=c}),a=r.startViewTransition(()=>(o(),Qz(t)));a.updateCallbackDone.catch(c=>{}),a.ready.catch(c=>{}),a.finished.catch(c=>{});let{onViewTransitionCreated:l}=i;return l&&pt(t,()=>l({transition:a,from:n,to:e})),s}function Qz(t){return new Promise(n=>{st({read:()=>setTimeout(n)},{injector:t})})}var Kz=()=>{},Yb=new g(""),yp=(()=>{class t{currentNavigation=xe(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=xe(null);events=new E;transitionAbortWithErrorSubject=new E;configLoader=u(_p);environmentInjector=u(Fe);destroyRef=u(dt);urlSerializer=u(es);rootContexts=u(ts);location=u(mi);inputBindingEnabled=u(Nc,{optional:!0})!==null;titleStrategy=u(Gb);options=u(ns,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=u(vp);createViewTransition=u(Wb,{optional:!0});navigationErrorHandler=u(Yb,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>j(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new op(r)),i=r=>this.events.next(new sp(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let i=++this.navigationId;rt(()=>{this.transitions?.next(G(_({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Ue(null),this.transitions.pipe(re(i=>i!==null),We(i=>{let r=!1,o=new AbortController,s=()=>!r&&this.currentTransition?.id===i.id;return j(i).pipe(We(a=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",Ht.SupersededByNewNavigation),$e;this.currentTransition=i;let l=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:l?G(_({},l),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let c=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!c&&d!=="reload")return this.events.next(new Di(a.id,this.urlSerializer.serialize(a.rawUrl),"",Ca.IgnoredSameUrlNavigation)),a.resolve(!1),$e;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return j(a).pipe(We(h=>(this.events.next(new Ur(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?$e:Promise.resolve(h))),Uz(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),lt(h=>{i.targetSnapshot=h.targetSnapshot,i.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(f=>(f.finalUrl=h.urlAfterRedirects,f)),this.events.next(new Ic)}),We(h=>Oe(i.routesRecognizeHandler.deferredHandle??j(void 0)).pipe(W(()=>h))),lt(()=>{let h=new Sc(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(h)}));if(c&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:h,extractedUrl:f,source:p,restoredState:m,extras:b}=a,C=new Ur(h,this.urlSerializer.serialize(f),p,m);this.events.next(C);let M=LA(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=G(_({},a),{targetSnapshot:M,urlAfterRedirects:f,extras:G(_({},b),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(Y=>(Y.finalUrl=f,Y)),j(i)}else return this.events.next(new Di(a.id,this.urlSerializer.serialize(a.extractedUrl),"",Ca.IgnoredByUrlHandlingStrategy)),a.resolve(!1),$e}),W(a=>{let l=new tp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(l),this.currentTransition=i=G(_({},a),{guards:rz(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),i}),mz(a=>this.events.next(a)),We(a=>{if(i.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw fp(this.urlSerializer,a.guardsResult);let l=new np(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(l),!s())return $e;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",Ht.GuardRejected),$e;if(a.guards.canActivateChecks.length===0)return j(a);let c=new ip(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(c),!s())return $e;let d=!1;return j(a).pipe(zz(this.paramsInheritanceStrategy),lt({next:()=>{d=!0;let h=new rp(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(h)},complete:()=>{d||this.cancelNavigationTransition(a,"",Ht.NoDataFromResolver)}}))}),vA(a=>{let l=d=>{let h=[];if(d.routeConfig?._loadedComponent)d.component=d.routeConfig?._loadedComponent;else if(d.routeConfig?.loadComponent){let f=d._environmentInjector;h.push(this.configLoader.loadComponent(f,d.routeConfig).then(p=>{d.component=p}))}for(let f of d.children)h.push(...l(f));return h},c=l(a.targetSnapshot.root);return c.length===0?j(a):Oe(Promise.all(c).then(()=>a))}),vA(()=>this.afterPreactivation()),We(()=>{let{currentSnapshot:a,targetSnapshot:l}=i,c=this.createViewTransition?.(this.environmentInjector,a.root,l.root);return c?Oe(c).pipe(W(()=>i)):j(i)}),Me(1),We(a=>{let l=ez(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=i=a=G(_({},a),{targetRouterState:l}),this.currentNavigation.update(d=>(d.targetRouterState=l,d)),this.events.next(new Sa);let c=i.beforeActivateHandler.deferredHandle;return c?Oe(c.then(()=>a)):j(a)}),lt(a=>{new Ob(e.routeReuseStrategy,i.targetRouterState,i.currentRouterState,l=>this.events.next(l),this.inputBindingEnabled).activate(this.rootContexts),s()&&(r=!0,this.currentNavigation.update(l=>(l.abort=Kz,l)),this.lastSuccessfulNavigation.set(rt(this.currentNavigation)),this.events.next(new Jn(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),he(GA(o.signal).pipe(re(()=>!r&&!i.targetRouterState),lt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",Ht.Aborted)}))),lt({complete:()=>{r=!0}}),he(this.transitionAbortWithErrorSubject.pipe(lt(a=>{throw a}))),ni(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",Ht.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),un(a=>{if(r=!0,this.destroyed)return i.resolve(!1),$e;if(zA(a))this.events.next(new Mn(i.id,this.urlSerializer.serialize(i.extractedUrl),a.message,a.cancellationCode)),iz(a)?this.events.next(new Ia(a.url,a.navigationBehaviorOptions)):i.resolve(!1);else{let l=new Xo(i.id,this.urlSerializer.serialize(i.extractedUrl),a,i.targetSnapshot??void 0);try{let c=pt(this.environmentInjector,()=>this.navigationErrorHandler?.(l));if(c instanceof Ma){let{message:d,cancellationCode:h}=fp(this.urlSerializer,c);this.events.next(new Mn(i.id,this.urlSerializer.serialize(i.extractedUrl),d,h)),this.events.next(new Ia(c.redirectTo,c.navigationBehaviorOptions))}else throw this.events.next(l),a}catch(c){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(c)}}return $e}))}))}cancelNavigationTransition(e,i,r){let o=new Mn(e.id,this.urlSerializer.serialize(e.extractedUrl),i,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=rt(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return e.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Zz(t){return t!==wa}var ik=new g("");var rk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>u(Xz),providedIn:"root"})}return t})(),mp=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}},Xz=(()=>{class t extends mp{static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Qb=(()=>{class t{urlSerializer=u(es);options=u(ns,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=u(mi);urlHandlingStrategy=u(vp);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new An;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:i,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,i):i,s=r??o;return s instanceof An?this.urlSerializer.serialize(s):s}commitTransition({targetRouterState:e,finalUrl:i,initialUrl:r}){i&&e?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=e):this.rawUrlTree=r}routerState=LA(null,u(Fe));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:()=>u(Jz),providedIn:"root"})}return t})(),Jz=(()=>{class t extends Qb{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{e(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,i){e instanceof Ur?this.updateStateMemento():e instanceof Di?this.commitTransition(i):e instanceof Sc?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Sa?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):e instanceof Mn&&!FA(e)?this.restoreHistory(i):e instanceof Xo?this.restoreHistory(i,!0):e instanceof Jn&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:i,id:r}){let{replaceUrl:o,state:s}=i;if(this.location.isCurrentPathEqualTo(e)||o){let a=this.browserPageId,l=_(_({},s),this.generateNgRouterState(r,a));this.location.replaceState(e,"",l)}else{let a=_(_({},s),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,i){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:i}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function bp(t,n){t.events.pipe(re(e=>e instanceof Jn||e instanceof Mn||e instanceof Xo||e instanceof Di),W(e=>e instanceof Jn||e instanceof Di?0:(e instanceof Mn?e.code===Ht.Redirect||e.code===Ht.SupersededByNewNavigation:!1)?2:1),re(e=>e!==2),Me(1)).subscribe(()=>{n()})}var Ci=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=u(ju);stateManager=u(Qb);options=u(ns,{optional:!0})||{};pendingTasks=u(ci);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=u(yp);urlSerializer=u(es);location=u(mi);urlHandlingStrategy=u(vp);injector=u(Fe);_events=new E;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=u(rk);injectorCleanup=u(ik,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=u(Ra,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!u(Nc,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new ce;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=rt(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof Mn&&i.code!==Ht.Redirect&&i.code!==Ht.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Jn)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof Ia){let s=i.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),l=_({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Zz(r.source)},s);this.scheduleNavigation(a,wa,null,l,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}XU(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),wa,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,i,r,o)=>{this.navigateToSyncWithBrowser(e,r,i,o)})}navigateToSyncWithBrowser(e,i,r,o){let s=r?.navigationId?r:null;if(r){let l=_({},r);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let a=this.parseUrl(e);this.scheduleNavigation(a,i,s,o).catch(l=>{this.disposed||this.injector.get(fn)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return rt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map($b),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,i={}){let{relativeTo:r,queryParams:o,fragment:s,queryParamsHandling:a,preserveFragment:l}=i,c=l?this.currentUrlTree.fragment:s,d=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":d=_(_({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let f=r?r.snapshot:this.routerState.snapshot.root;h=RA(f)}catch(f){(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return NA(h,e,d,c??null,this.urlSerializer)}navigateByUrl(e,i={skipLocationChange:!1}){let r=Ea(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,wa,null,i)}navigate(e,i={skipLocationChange:!1}){return e$(e),this.navigateByUrl(this.createUrlTree(e,i),i)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch(i){return this.console.warn(ri(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,i){let r;if(i===!0?r=_({},EA):i===!1?r=_({},Sb):r=_(_({},Sb),i),Ea(e))return hA(this.currentUrlTree,e,r);let o=this.parseUrl(e);return hA(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(e,i,r,o,s){if(this.disposed)return Promise.resolve(!1);let a,l,c;s?(a=s.resolve,l=s.reject,c=s.promise):c=new Promise((h,f)=>{a=h,l=f});let d=this.pendingTasks.add();return bp(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:a,reject:l,promise:c,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),c.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||t)};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function e$(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new w(4008,!1)}var Pc=class{};var ok=(()=>{class t{router;injector;preloadingStrategy;loader;subscription;constructor(e,i,r,o){this.router=e,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(re(e=>e instanceof Jn),cr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(e,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=Fs(o.providers,e,""));let s=o._injector??e;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(s).injector);let a=o._loadedInjector??s;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(s,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(a,o.children??o._loadedRoutes))}return Oe(r).pipe(sr())}preloadConfig(e,i){return this.preloadingStrategy.preload(i,()=>{if(e.destroyed)return j(null);let r;i.loadChildren&&i.canLoad===void 0?r=Oe(this.loader.loadChildren(e,i)):r=j(null);let o=r.pipe(At(s=>s===null?j(void 0):(i._loadedRoutes=s.routes,i._loadedInjector=s.injector,i._loadedNgModuleFactory=s.factory,this.processRoutes(s.injector??e,s.routes))));if(i.loadComponent&&!i._loadedComponent){let s=this.loader.loadComponent(e,i);return Oe([o,s]).pipe(sr())}else return o})}static \u0275fac=function(i){return new(i||t)(I(Ci),I(Fe),I(Pc),I(_p))};static \u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),sk=new g(""),n$=(()=>{class t{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=wa;restoredId=0;store={};urlSerializer=u(es);zone=u(T);viewportScroller=u(Y_);transitions=u(yp);constructor(e){this.options=e,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(e=>{e instanceof Ur?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=e.navigationTrigger,this.restoredId=e.restoredState?e.restoredState.navigationId:0):e instanceof Jn?(this.lastId=e.id,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.urlAfterRedirects).fragment)):e instanceof Di&&e.code===Ca.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(e,this.urlSerializer.parse(e.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(e=>{if(!(e instanceof xa)||e.scrollBehavior==="manual")return;let i={behavior:"instant"};e.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(e.position,i):e.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(e.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(e,i){let r=rt(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(()=>Le(this,null,function*(){yield new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new xa(e,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})}))}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){v_()};static \u0275prov=v({token:t,factory:t.\u0275fac})}return t})();function i$(){return u(Ci).routerState.root}function Fc(t,n){return{\u0275kind:t,\u0275providers:n}}function r$(){let t=u(B);return n=>{let e=t.get(Bt);if(n!==e.components[0])return;let i=t.get(Ci),r=t.get(ak);t.get(Zb)===1&&i.initialNavigation(),t.get(dk,null,{optional:!0})?.setUpPreloading(),t.get(sk,null,{optional:!0})?.init(),i.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var ak=new g("",{factory:()=>new E}),Zb=new g("",{factory:()=>1});function lk(){let t=[{provide:Su,useValue:!0},{provide:Zb,useValue:0},$u(()=>{let n=u(B);return n.get(j_,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(Ci),o=n.get(ak);bp(r,()=>{i(!0)}),n.get(yp).afterPreactivation=()=>(i(!0),o.closed?j(void 0):o),r.initialNavigation()}))})];return Fc(2,t)}function ck(){let t=[$u(()=>{u(Ci).setUpLocationChangeListener()}),{provide:Zb,useValue:2}];return Fc(3,t)}var dk=new g("");function uk(t){return Fc(0,[{provide:dk,useExisting:ok},{provide:Pc,useExisting:t}])}function hk(){return Fc(8,[Ub,{provide:Nc,useExisting:Ub}])}function fk(t){Cn("NgRouterViewTransitions");let n=[{provide:Wb,useValue:nk},{provide:qb,useValue:_({skipNextTransition:!!t?.skipInitialTransition},t)}];return Fc(9,n)}var pk=[mi,{provide:es,useClass:tr},Ci,ts,{provide:Ei,useFactory:i$},_p,[]],Xb=(()=>{class t{constructor(){}static forRoot(e,i){return{ngModule:t,providers:[pk,[],{provide:Ra,multi:!0,useValue:e},[],i?.errorHandler?{provide:Yb,useValue:i.errorHandler}:[],{provide:ns,useValue:i||{}},i?.useHash?s$():a$(),o$(),i?.preloadingStrategy?uk(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?l$(i):[],i?.bindToComponentInputs?hk().\u0275providers:[],i?.enableViewTransitions?fk().\u0275providers:[],c$()]}}static forChild(e){return{ngModule:t,providers:[{provide:Ra,multi:!0,useValue:e}]}}static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();function o$(){return{provide:sk,useFactory:()=>{let t=u(Y_),n=u(ns);return n.scrollOffset&&t.setOffset(n.scrollOffset),new n$(n)}}}function s$(){return{provide:$i,useClass:U_}}function a$(){return{provide:$i,useClass:ih}}function l$(t){return[t.initialNavigation==="disabled"?ck().\u0275providers:[],t.initialNavigation==="enabledBlocking"?lk().\u0275providers:[]]}var Kb=new g("");function c$(){return[{provide:Kb,useFactory:r$},{provide:Gu,multi:!0,useExisting:Kb}]}function Na(t){return{month:t.getMonth()+1,year:t.getFullYear()}}function mk(t){let n=BM(t.month),e=t.year-(n===Br.DECEMBER?1:0);return{month:n,year:e}}function wp(t){let n=jM(t.month),e=t.year+(n===Br.JANUARY?1:0);return{month:n,year:e}}function Dp(t){return{identifier:t.identifier,groups:[...t.groups.map(n=>({date:n.date,entries:[...n.entries]}))]}}var Jb=class{constructor(){this.slotA={identifier:Ji.A,groups:[{date:Na(new Date),entries:["H\xE4nsel"]},{date:wp(Na(new Date)),entries:["Gretel"]}]},this.slotB={identifier:Ji.B,groups:[]}}get$(n){return j(n===Ji.A?Dp(this.slotA):Dp(this.slotB))}latest$(){return j(Dp(this.slotA))}put$(n){return n.identifier===Ji.A?this.slotA=n:this.slotB=n,j()}},gk=(()=>{class t{constructor(e){this.httpClient=e,this.demo=new Jb}setConfig(e){this.config=e}get$(e){return this.config?this.httpClient.get(this.config.url,this.prepareOptions(this.config,e)).pipe(this.catch404UseEmptySlot(e)):this.demo.get$(e)}latest$(){return this.config?this.httpClient.get(this.config.url,this.prepareOptions(this.config)).pipe(this.catch404UseEmptySlot(Ji.A)):this.demo.latest$()}put$(e){return this.config?this.httpClient.put(this.config.url,e,this.prepareOptions(this.config,e.identifier)):this.demo.put$(e)}catch404UseEmptySlot(e){return un(i=>{if(i.status==mh.NotFound)return j({identifier:e,groups:[]});throw i})}prepareOptions(e,i){let r={headers:new gi({Authorization:"Basic "+dA(e.authUsername+":"+e.authPassword)})};return i?G(_({},r),{params:{slot:i}}):r}static{this.\u0275fac=function(i){return new(i||t)(I(Er))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function ew(t){return`group-${t.date.year}-${Uf(t.date.month)}`}var _k=(()=>{class t{constructor(){this._groups$=new Ue([]),this._slot$=new Ue(null),this._dirty$=new Ue(!1),this.groups$=this._groups$.asObservable(),this.ids$=this.groups$.pipe(W(e=>e.map(i=>ew(i)))),this.slot$=this._slot$.asObservable(),this.dirty$=this._dirty$.asObservable()}get groups(){return this._groups$.getValue()}set groups(e){this._groups$.next(e),this._dirty$.next(!0)}get slot(){return this._slot$.getValue()}set slot(e){this._slot$.next(e),this._dirty$.next(!0)}init(e){this._groups$.next(e.groups),this._slot$.next(e.identifier),this._dirty$.next(!1)}addGroupAtTop(){let e=this.firstGroup(),i=e?mk(e.date):Na(new Date);this.groups=[{date:i,entries:[]},...this.groups]}addGroupAtBottom(){let e=this.lastGroup(),i=e?wp(e.date):Na(new Date);this.groups=[...this.groups,{date:i,entries:[]}]}removeGroupAtTop(){if(this.groups.length<2)return;let e=this.groups[0],i=this.groups[1];i.entries=[...e.entries,...i.entries],this.groups.splice(0,1),this.groups=[...this.groups]}removeGroupAtBottom(){if(this.groups.length<2)return;let e=this.groups[this.groups.length-2],i=this.groups[this.groups.length-1];e.entries=[...e.entries,...i.entries],this.groups.splice(this.groups.length-1,1),this.groups=[...this.groups]}removeUnnecessaryGroups(){this.groups=this.groups.filter(e=>e.entries&&e.entries.length>0),this.groups.length===0&&this.addGroupAtBottom()}removeEntry(e,i){if(!this.validEntryIndex(e,i))return;this.groups[e].entries.splice(i,1),this.groups=[...this.groups]}addEntry(e,i){if(!this.validGroupIndex(e))return;this.groups[e].entries.push(i),this.groups=[...this.groups]}swapEntry(e,i,r,o){if(!this.validEntryIndex(e,i)||!this.validEntryIndex(r,o))return;let s=this.groups[e],a=this.groups[r],l=a.entries[o];a.entries[o]=s.entries[i],s.entries[i]=l,this.groups=[...this.groups]}moveEntry(e,i,r,o){if(!this.validEntryIndex(e,i)||!this.validGroupIndex(r))return;let s=this.groups[e],a=s.entries[i];s.entries.splice(i,1),this.groups[r].entries.splice(o,0,a),this.groups=[...this.groups]}indexToId(e){return this.validGroupIndex(e)?ew(this.groups[e]):null}idToIndex(e){let i=this.groups.map((r,o)=>this.indexToId(o)).indexOf(e);return i>=0?i:null}getEntry(e,i){return this.validEntryIndex(e,i)?this.groups[e].entries[i]:null}validEntryIndex(e,i){return this.validGroupIndex(e)&&i>=0&&i<this.groups[e].entries.length}validGroupIndex(e){return e>=0&&e<this.groups.length}firstGroup(){return this.groups.length>0?this.groups[0]:null}lastGroup(){return this.groups.length>0?this.groups[this.groups.length-1]:null}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var vk=new g("CdkAccordion");var yk=(()=>{class t{accordion=u(vk,{optional:!0,skipSelf:!0});_changeDetectorRef=u(Ee);_expansionDispatcher=u(ic);_openCloseAllSubscription=ce.EMPTY;closed=new N;opened=new N;destroyed=new N;expandedChange=new N;id=u(Ge).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let i=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,i)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=xe(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,i)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===i&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",ee],disabled:[2,"disabled","disabled",ee]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[Ie([{provide:vk,useValue:void 0}])]})}return t})(),bk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({})}return t})();var m$=["body"],g$=["bodyWrapper"],_$=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],v$=["mat-expansion-panel-header","*","mat-action-row"];function y$(t,n){}var b$=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],w$=["mat-panel-title","mat-panel-description","*"];function D$(t,n){t&1&&(jt(0,"span",1),mo(),jt(1,"svg",2),Kt(2,"path",3),on()())}var wk=new g("MAT_ACCORDION"),Dk=new g("MAT_EXPANSION_PANEL"),E$=(()=>{class t{_template=u(Lt);_expansionPanel=u(Dk,{optional:!0});constructor(){}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["ng-template","matExpansionPanelContent",""]]})}return t})(),Ek=new g("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),tw=(()=>{class t extends yk{_viewContainerRef=u(Et);_animationsDisabled=Ve();_document=u(P);_ngZone=u(T);_elementRef=u(O);_renderer=u(ke);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new N;afterCollapse=new N;_inputChanges=new E;accordion=u(wk,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=u(Ge).getId("mat-expansion-panel-header-");constructor(){super();let e=u(Ek,{optional:!0});this._expansionDispatcher=u(ic),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(ft(null),re(()=>this.expanded&&!this._portal),Me(1)).subscribe(()=>{this._portal=new Ir(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,i=this._body.nativeElement;return e===i||i.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:i})=>{e===this._bodyWrapper?.nativeElement&&i==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-expansion-panel"]],contentQueries:function(i,r,o){if(i&1&&Ct(o,E$,5),i&2){let s;z(s=$())&&(r._lazyContent=s.first)}},viewQuery:function(i,r){if(i&1&&it(m$,5)(g$,5),i&2){let o;z(o=$())&&(r._body=o.first),z(o=$())&&(r._bodyWrapper=o.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(i,r){i&2&&H("mat-expanded",r.expanded)("mat-expansion-panel-spacing",r._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",ee],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[Ie([{provide:wk,useValue:void 0},{provide:Dk,useExisting:t}]),ge,Ke],ngContentSelectors:v$,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(i,r){i&1&&(Re(_$),U(0),D(1,"div",2,0)(3,"div",3,1)(5,"div",4),U(6,1),kt(7,y$,0,0,"ng-template",5),x(),U(8,2),x()()),i&2&&(S(),oe("inert",r.expanded?null:""),S(2),De("id",r.id),oe("aria-labelledby",r._headerId),S(4),De("cdkPortalOutlet",r._portal))},dependencies:[qi],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return t})();var Ck=(()=>{class t{panel=u(tw,{host:!0});_element=u(O);_focusMonitor=u(Xt);_changeDetectorRef=u(Ee);_parentChangeSubscription=ce.EMPTY;constructor(){u(Ye).load(Yn);let e=this.panel,i=u(Ek,{optional:!0}),r=u(new Hi("tabindex"),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(re(s=>!!(s.hideToggle||s.togglePosition))):$e;this.tabIndex=parseInt(r||"")||0,this._parentChangeSubscription=yt(e.opened,e.closed,o,e._inputChanges.pipe(re(s=>!!(s.hideToggle||s.disabled||s.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(re(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),i&&(this.expandedHeight=i.expandedHeight,this.collapsedHeight=i.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:sn(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,i){e?this._focusMonitor.focusVia(this._element,e,i):this._element.nativeElement.focus(i)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(i,r){i&1&&q("click",function(){return r._toggle()})("keydown",function(s){return r._keydown(s)}),i&2&&(oe("id",r.panel._headerId)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r._getPanelId())("aria-expanded",r._isExpanded())("aria-disabled",r.panel.disabled),ji("height",r._getHeaderHeight()),H("mat-expanded",r._isExpanded())("mat-expansion-toggle-indicator-after",r._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",r._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ui(e)]},ngContentSelectors:w$,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(i,r){i&1&&(Re(b$),jt(0,"span",0),U(1),U(2,1),U(3,2),on(),pe(4,D$,3,0,"span",1)),i&2&&(H("mat-content-hide-toggle",!r._showToggle()),S(4),me(r._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var xk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return t})();var Sk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({imports:[bk,qn,Ce]})}return t})();var Ik=(()=>{class t{constructor(){this.EditMode=Vr,this.valueChange=new N}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=F({type:t,selectors:[["mp-edit-mode-selection"]],inputs:{value:"value"},outputs:{valueChange:"valueChange"},standalone:!1,decls:13,vars:19,consts:[[1,"mp-toggle-group",3,"change","value","hideSingleSelectionIndicator","multiple"],[3,"value","matTooltip"],["fontIcon","lock"],["fontIcon","touch_app"],["fontIcon","manage_accounts"],["fontIcon","edit_calendar"]],template:function(i,r){i&1&&(D(0,"mat-button-toggle-group",0),q("change",function(s){return r.valueChange.emit(s.value)}),D(1,"mat-button-toggle",1),mt(2,"transloco"),Se(3,"mat-icon",2),x(),D(4,"mat-button-toggle",1),mt(5,"transloco"),Se(6,"mat-icon",3),x(),D(7,"mat-button-toggle",1),mt(8,"transloco"),Se(9,"mat-icon",4),x(),D(10,"mat-button-toggle",1),mt(11,"transloco"),Se(12,"mat-icon",5),x()()),i&2&&(De("value",r.value)("hideSingleSelectionIndicator",!0)("multiple",!1),S(),De("value",r.EditMode.READ_ONLY)("matTooltip",gt(2,11,"enums.EditMode.READ_ONLY")),S(3),De("value",r.EditMode.PLANNING)("matTooltip",gt(5,13,"enums.EditMode.PLANNING")),S(3),De("value",r.EditMode.PERSON_MANAGEMENT)("matTooltip",gt(8,15,"enums.EditMode.PERSON_MANAGEMENT")),S(3),De("value",r.EditMode.MONTH_MANAGEMENT)("matTooltip",gt(11,17,"enums.EditMode.MONTH_MANAGEMENT")))},dependencies:[sa,rc,oa,wy,Lr],styles:[".mp-toggle-group[_ngcontent-%COMP%]     .mat-button-toggle-label-content{line-height:36px}"],changeDetection:0})}}return t})();var Nk=["*",[["mat-chip-avatar"],["","matChipAvatar",""]],[["mat-chip-trailing-icon"],["","matChipRemove",""],["","matChipTrailingIcon",""]]],Ok=["*","mat-chip-avatar, [matChipAvatar]","mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]"];function S$(t,n){t&1&&(D(0,"span",3),U(1,1),x())}function I$(t,n){t&1&&(D(0,"span",6),U(1,2),x())}function T$(t,n){t&1&&(D(0,"span",3),U(1,1),D(2,"span",7),mo(),D(3,"svg",8),Se(4,"path",9),x()()())}function M$(t,n){t&1&&(D(0,"span",6),U(1,2),x())}var A$=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`;var Pk=new g("mat-chips-default-options",{providedIn:"root",factory:()=>({separatorKeyCodes:[13]})}),Tk=new g("MatChipAvatar"),Mk=new g("MatChipTrailingIcon"),Ak=new g("MatChipEdit"),kk=new g("MatChipRemove"),nw=new g("MatChip"),Fk=(()=>{class t{_elementRef=u(O);_parentChip=u(nw);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?"":null}constructor(){u(Ye).load(Yn),this._elementRef.nativeElement.nodeName==="BUTTON"&&this._elementRef.nativeElement.setAttribute("type","button")}focus(){this._elementRef.nativeElement.focus()}static \u0275fac=function(i){return new(i||t)};static \u0275dir=R({type:t,selectors:[["","matChipContent",""]],hostAttrs:[1,"mat-mdc-chip-action","mdc-evolution-chip__action","mdc-evolution-chip__action--presentational"],hostVars:8,hostBindings:function(i,r){i&2&&(oe("disabled",r._getDisabledAttribute())("aria-disabled",r.disabled),H("mdc-evolution-chip__action--primary",r._isPrimary)("mdc-evolution-chip__action--secondary",!r._isPrimary)("mdc-evolution-chip__action--trailing",!r._isPrimary&&!r._isLeading))},inputs:{disabled:[2,"disabled","disabled",ee],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?-1:Ui(e)],_allowFocusWhenDisabled:"_allowFocusWhenDisabled"}})}return t})(),Lk=(()=>{class t extends Fk{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275dir=R({type:t,selectors:[["","matChipAction",""]],hostVars:3,hostBindings:function(i,r){i&1&&q("click",function(s){return r._handleClick(s)})("keydown",function(s){return r._handleKeydown(s)}),i&2&&(oe("tabindex",r._getTabindex()),H("mdc-evolution-chip__action--presentational",!1))},features:[ge]})}return t})();var Rk=(()=>{class t{_changeDetectorRef=u(Ee);_elementRef=u(O);_tagName=u(BC);_ngZone=u(T);_focusMonitor=u(Xt);_globalRippleOptions=u(Uo,{optional:!0});_document=u(P);_onFocus=new E;_onBlur=new E;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=Ve();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=u(Ge).getId("mat-mdc-chip-");ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new N;destroyed=new N;basicChipAttrName="mat-basic-chip";leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=u(rf);_injector=u(B);constructor(){let e=u(Ye);e.load(Yn),e.load(Qs),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:"mat-mdc-chip-ripple",disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(".mat-mdc-chip-action-label"),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=yt(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe(),this.destroyed.emit({chip:this}),this.destroyed.complete()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(i=>{let r=i._elementRef.nativeElement;return r===e||r.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let i=e!==null;i!==this._hasFocusInternal&&(this._hasFocusInternal=i,i?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=F({type:t,selectors:[["mat-basic-chip"],["","mat-basic-chip",""],["mat-chip"],["","mat-chip",""]],contentQueries:function(i,r,o){if(i&1&&Ct(o,Tk,5)(o,Ak,5)(o,Mk,5)(o,kk,5)(o,Tk,5)(o,Mk,5)(o,Ak,5)(o,kk,5),i&2){let s;z(s=$())&&(r.leadingIcon=s.first),z(s=$())&&(r.editIcon=s.first),z(s=$())&&(r.trailingIcon=s.first),z(s=$())&&(r.removeIcon=s.first),z(s=$())&&(r._allLeadingIcons=s),z(s=$())&&(r._allTrailingIcons=s),z(s=$())&&(r._allEditIcons=s),z(s=$())&&(r._allRemoveIcons=s)}},viewQuery:function(i,r){if(i&1&&it(Lk,5),i&2){let o;z(o=$())&&(r.primaryAction=o.first)}},hostAttrs:[1,"mat-mdc-chip"],hostVars:31,hostBindings:function(i,r){i&1&&q("keydown",function(s){return r._handleKeydown(s)}),i&2&&(pn("id",r.id),oe("role",r.role)("aria-label",r.ariaLabel),Un("mat-"+(r.color||"primary")),H("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-graphic",r.leadingIcon)("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-basic-chip",r._isBasicChip)("mat-mdc-standard-chip",!r._isBasicChip)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon())("_mat-animation-noopable",r._animationsDisabled))},inputs:{role:"role",id:"id",ariaLabel:[0,"aria-label","ariaLabel"],ariaDescription:[0,"aria-description","ariaDescription"],value:"value",color:"color",removable:[2,"removable","removable",ee],highlighted:[2,"highlighted","highlighted",ee],disableRipple:[2,"disableRipple","disableRipple",ee],disabled:[2,"disabled","disabled",ee]},outputs:{removed:"removed",destroyed:"destroyed"},exportAs:["matChip"],features:[Ie([{provide:nw,useExisting:t}])],ngContentSelectors:Ok,decls:8,vars:2,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipContent",""],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"]],template:function(i,r){i&1&&(Re(Nk),Se(0,"span",0),D(1,"span",1)(2,"span",2),pe(3,S$,2,0,"span",3),D(4,"span",4),U(5),Se(6,"span",5),x()()(),pe(7,I$,2,0,"span",6)),i&2&&(S(3),me(r.leadingIcon?3:-1),S(4),me(r._hasTrailingIcon()?7:-1))},dependencies:[Fk],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-outline-width, 1px);
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-outline-color, var(--mat-sys-outline));
}
.mdc-evolution-chip__action--primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--mat-chip-focus-outline-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--primary::before {
  border-color: var(--mat-chip-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--primary::before {
  border-width: var(--mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--mat-chip-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-chip-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-chip-label-text-size, var(--mat-sys-label-large-size));
  font-weight: var(--mat-chip-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-chip-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-label-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--mat-chip-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--mat-chip-with-avatar-avatar-size, 24px);
  height: var(--mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--mat-chip-trailing-action-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--mat-chip-trailing-action-focus-opacity, 1) * var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--mat-chip-container-shape-radius, 8px);
  height: var(--mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--mat-chip-with-icon-icon-size, 18px);
  height: var(--mat-chip-with-icon-icon-size, 18px);
  font-size: var(--mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--mat-chip-with-icon-disabled-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --mat-chip-with-icon-icon-color: var(--mat-chip-with-icon-selected-icon-color, var(--mat-sys-on-secondary-container));
  --mat-chip-elevated-container-color: var(--mat-chip-elevated-selected-container-color, var(--mat-sys-secondary-container));
  --mat-chip-label-text-color: var(--mat-chip-selected-label-text-color, var(--mat-sys-on-secondary-container));
  --mat-chip-outline-width: var(--mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-hover-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-hover-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-focus-state-layer-color, var(--mat-sys-on-surface-variant));
  opacity: var(--mat-chip-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--mat-chip-selected-focus-state-layer-color, var(--mat-sys-on-secondary-container));
  opacity: var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-trailing-icon-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--mat-chip-selected-disabled-trailing-icon-color, var(--mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-trailing-action-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--mat-chip-selected-trailing-action-state-layer-color, var(--mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--mat-chip-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity)) + var(--mat-chip-trailing-action-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2,changeDetection:0})}return t})();var Bk=(()=>{class t extends Rk{_defaultOptions=u(Pk,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName="mat-basic-chip-option";selectionChange=new N;ngOnInit(){super.ngOnInit(),this.role="presentation"}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,i,r){e!==this.selected&&(this._selected=e,r&&this.selectionChange.emit({source:this,isUserInput:i,selected:this.selected}),this._changeDetectorRef.markForCheck())}static \u0275fac=(()=>{let e;return function(r){return(e||(e=je(t)))(r||t)}})();static \u0275cmp=F({type:t,selectors:[["mat-basic-chip-option"],["","mat-basic-chip-option",""],["mat-chip-option"],["","mat-chip-option",""]],hostAttrs:[1,"mat-mdc-chip","mat-mdc-chip-option"],hostVars:37,hostBindings:function(i,r){i&2&&(pn("id",r.id),oe("tabindex",null)("aria-label",null)("aria-description",null)("role",r.role),H("mdc-evolution-chip",!r._isBasicChip)("mdc-evolution-chip--filter",!r._isBasicChip)("mdc-evolution-chip--selectable",!r._isBasicChip)("mat-mdc-chip-selected",r.selected)("mat-mdc-chip-multiple",r._chipListMultiple)("mat-mdc-chip-disabled",r.disabled)("mat-mdc-chip-with-avatar",r.leadingIcon)("mdc-evolution-chip--disabled",r.disabled)("mdc-evolution-chip--selected",r.selected)("mdc-evolution-chip--selecting",!r._animationsDisabled)("mdc-evolution-chip--with-trailing-action",r._hasTrailingIcon())("mdc-evolution-chip--with-primary-icon",r.leadingIcon)("mdc-evolution-chip--with-primary-graphic",r._hasLeadingGraphic())("mdc-evolution-chip--with-avatar",r.leadingIcon)("mat-mdc-chip-highlighted",r.highlighted)("mat-mdc-chip-with-trailing-icon",r._hasTrailingIcon()))},inputs:{selectable:[2,"selectable","selectable",ee],selected:[2,"selected","selected",ee]},outputs:{selectionChange:"selectionChange"},features:[Ie([{provide:Rk,useExisting:t},{provide:nw,useExisting:t}]),ge],ngContentSelectors:Ok,decls:8,vars:6,consts:[[1,"mat-mdc-chip-focus-overlay"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--primary"],["matChipAction","","role","option",3,"_allowFocusWhenDisabled"],[1,"mdc-evolution-chip__graphic","mat-mdc-chip-graphic"],[1,"mdc-evolution-chip__text-label","mat-mdc-chip-action-label"],[1,"mat-mdc-chip-primary-focus-indicator","mat-focus-indicator"],[1,"mdc-evolution-chip__cell","mdc-evolution-chip__cell--trailing"],[1,"mdc-evolution-chip__checkmark"],["viewBox","-2 -3 30 30","focusable","false","aria-hidden","true",1,"mdc-evolution-chip__checkmark-svg"],["fill","none","stroke","currentColor","d","M1.73,12.91 8.1,19.28 22.79,4.59",1,"mdc-evolution-chip__checkmark-path"]],template:function(i,r){i&1&&(Re(Nk),Se(0,"span",0),D(1,"span",1)(2,"button",2),pe(3,T$,5,0,"span",3),D(4,"span",4),U(5),Se(6,"span",5),x()()(),pe(7,M$,2,0,"span",6)),i&2&&(S(2),De("_allowFocusWhenDisabled",!0),oe("aria-description",r.ariaDescription)("aria-label",r.ariaLabel)("aria-selected",r.ariaSelected),S(),me(r._hasLeadingGraphic()?3:-1),S(4),me(r._hasTrailingIcon()?7:-1))},dependencies:[Lk],styles:[A$],encapsulation:2,changeDetection:0})}return t})();var jk=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275mod=k({type:t});static \u0275inj=A({providers:[gf,{provide:Pk,useValue:{separatorKeyCodes:[13]}}],imports:[Or,Ce]})}return t})();var Vk=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=F({type:t,selectors:[["mp-offline-chip"]],standalone:!1,decls:6,vars:5,consts:[["color","accent",3,"selectable","highlighted"],[1,"mp-white"]],template:function(i,r){i&1&&(D(0,"mat-chip-option",0)(1,"mat-icon",1),ye(2,"cloud_off"),x(),D(3,"span",1),ye(4),mt(5,"transloco"),x()()),i&2&&(De("selectable",!1)("highlighted",!0),S(4),ut(gt(5,3,"common.offline")))},dependencies:[sa,Bk,Lr],styles:[".mp-white[_ngcontent-%COMP%]{color:#fff}mat-chip-option[_ngcontent-%COMP%]     .mat-mdc-chip-action-label{display:flex;align-items:center;gap:5px}"]})}}return t})();var N$=()=>[];function O$(t,n){if(t&1){let e=Rt();D(0,"button",13),q("click",function(){tt(e),se();let r=pi(10);return nt(r.toggle())}),D(1,"mat-icon"),ye(2,"menu"),x()()}}function P$(t,n){if(t&1){let e=Rt();D(0,"button",13),q("click",function(){tt(e),se();let r=pi(10);return nt(r.toggle())}),D(1,"mat-icon"),ye(2,"arrow_back"),x()()}}function F$(t,n){t&1&&Se(0,"mp-offline-chip")}function L$(t,n){if(t&1){let e=Rt();Se(0,"div",3),D(1,"button",14),q("click",function(){tt(e);let r=se();return nt(r.reset())}),D(2,"mat-icon"),ye(3,"undo"),x()(),D(4,"button",14),q("click",function(){tt(e);let r=se();return nt(r.save())}),D(5,"mat-icon"),ye(6,"save"),x()()}if(t&2){let e=se();S(),De("disabled",e.inProgress),S(3),De("disabled",e.inProgress)}}function B$(t,n){if(t&1){let e=Rt();D(0,"div",12)(1,"button",15),q("click",function(){tt(e);let r=se();return nt(r.groupStoreService.addGroupAtTop())}),D(2,"mat-icon"),ye(3,"add"),x()(),D(4,"button",15),q("click",function(){tt(e);let r=se();return nt(r.groupStoreService.removeGroupAtTop())}),D(5,"mat-icon"),ye(6,"remove"),x()(),D(7,"button",15),q("click",function(){tt(e);let r=se();return nt(r.groupStoreService.removeUnnecessaryGroups())}),D(8,"mat-icon"),ye(9,"compress"),x()()()}}function j$(t,n){if(t&1){let e=Rt();D(0,"button",15),q("click",function(){tt(e);let r=se().$index,o=se();return nt(o.addPerson(r))}),D(1,"mat-icon"),ye(2,"add"),x()()}}function V$(t,n){t&1&&(D(0,"div",19),Se(1,"mat-icon",21),x())}function H$(t,n){if(t&1){let e=Rt();D(0,"button",15),q("click",function(){tt(e);let r=se().$index,o=se().$index,s=se();return nt(s.removePerson(o,r))}),D(1,"mat-icon"),ye(2,"remove"),x()()}}function U$(t,n){if(t&1){let e=Rt();D(0,"button",15),q("click",function(){tt(e);let r=se().$index,o=se().$index,s=se();return nt(s.swapEntry(o,r))}),D(1,"mat-icon"),ye(2,"swap_vert"),x()()}}function z$(t,n){t&1&&Se(0,"div")}function $$(t,n){if(t&1&&(D(0,"div",18),pe(1,V$,2,0,"div",19),D(2,"div"),ye(3),x(),Se(4,"div",3),D(5,"div"),pe(6,H$,3,0,"button",16),pe(7,U$,3,0,"button",16),x(),kt(8,z$,1,0,"div",20),x()),t&2){let e=n.$implicit,i=se(2);S(),me(i.isPlanning()?1:-1),S(2),Vi(" ",e," "),S(3),me(i.isUserManagement()?6:-1),S(),me(i.isPlanning()?7:-1)}}function G$(t,n){if(t&1){let e=Rt();D(0,"div")(1,"div",12)(2,"h4"),ye(3),mt(4,"monthYear"),x(),Se(5,"div",3),pe(6,j$,3,0,"button",16),x(),D(7,"div",17),mt(8,"async"),q("cdkDropListDropped",function(r){tt(e);let o=se();return nt(o.drop(r))}),xo(9,$$,9,4,"div",18,Co),x()()}if(t&2){let e=n.$implicit,i=n.$index,r=se();S(3),Vi(" ",gt(4,6,e.date)," "),S(3),me(r.isUserManagement()?6:-1),S(),De("id",r.groupStoreService.indexToId(i))("cdkDropListData",e.entries)("cdkDropListConnectedTo",gt(8,8,r.groupStoreService.ids$)||A_(10,N$))("cdkDropListDisabled",!r.isPlanning()),S(2),So(e.entries)}}function W$(t,n){if(t&1){let e=Rt();D(0,"div",12)(1,"button",15),q("click",function(){tt(e);let r=se();return nt(r.addGroupAtBottom())}),D(2,"mat-icon"),ye(3,"add"),x()(),D(4,"button",15),q("click",function(){tt(e);let r=se();return nt(r.groupStoreService.removeGroupAtBottom())}),D(5,"mat-icon"),ye(6,"remove"),x()()()}}var Hk=(()=>{class t{constructor(e,i,r,o,s,a,l,c,d){this.route=r,this.router=o,this.matBottomSheet=s,this.matDialog=a,this.translocoService=l,this.slotService=c,this.groupStoreService=d,this.SlotIdentifier=Ji,this.online=!1,this.opened=!1,this.editMode=Vr.READ_ONLY,this.inProgress=!1,this.reload$=new E,this.destroy$=new E,this.mobileQuery=i.matchMedia("(max-width: 640px)"),this.mobileQueryListener=()=>e.detectChanges(),this.mobileQuery.addEventListener("change",this.mobileQueryListener)}ngOnInit(){this.reload$.pipe(Ti(100),We(e=>e?this.slotService.get$(e):this.slotService.latest$()),he(this.destroy$)).subscribe(e=>{this.groupStoreService.init(e),this.inProgress=!1}),this.route.fragment.subscribe(e=>{let i;if(e)try{i=uA(e)}catch(r){this.router.navigate([])}this.online=!!i,this.slotService.setConfig(i),this.reset()})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.mobileQuery.removeEventListener("change",this.mobileQueryListener)}isMobile(){return this.mobileQuery.matches}save(){this.inProgress=!0,this.slotService.put$({identifier:this.groupStoreService.slot,groups:this.groupStoreService.groups}).pipe(he(this.destroy$),ni(()=>this.reset())).subscribe()}reset(){this.inProgress=!0,this.reload$.next(this.groupStoreService.slot)}drop(e){let i=this.groupStoreService.idToIndex(e.previousContainer.id),r=this.groupStoreService.idToIndex(e.container.id);i==null||r==null||this.groupStoreService.moveEntry(i,e.previousIndex,r,e.currentIndex)}addGroupAtBottom(){this.groupStoreService.addGroupAtBottom(),setTimeout(()=>{let e=this.sidenavContent?.getElementRef().nativeElement;e&&(e.scrollTop=e.scrollHeight)})}swapEntry(e,i){this.matBottomSheet.open(HM,{data:{groupIndex:e,entryIndex:i,groups:this.groupStoreService.groups}}).afterDismissed().subscribe(o=>{o&&this.groupStoreService.swapEntry(e,i,o.groupIndex,o.entryIndex)})}removePerson(e,i){this.matDialog.open(wM,{data:{title:this.translocoService.translate("common.confirmRemoval",{name:this.groupStoreService.getEntry(e,i)}),cancel:this.translocoService.translate("common.cancel"),confirm:this.translocoService.translate("common.remove")}}).afterClosed().subscribe(o=>{o&&this.groupStoreService.removeEntry(e,i)})}addPerson(e){this.matDialog.open(DM,{data:{title:this.translocoService.translate("common.addPerson"),inputLabel:this.translocoService.translate("common.name"),cancel:this.translocoService.translate("common.cancel"),confirm:this.translocoService.translate("common.add")}}).afterClosed().subscribe(r=>{r&&this.groupStoreService.addEntry(e,r)})}isPlanning(){return this.editMode===Vr.PLANNING}isUserManagement(){return this.editMode===Vr.PERSON_MANAGEMENT}isMonthManagement(){return this.editMode===Vr.MONTH_MANAGEMENT}loadSlot(e){this.isMobile()&&this.sidenav?.close(),this.reload$.next(e.value)}static{this.\u0275fac=function(i){return new(i||t)(Z(Ee),Z(Tr),Z(Ei),Z(Ci),Z(Zv),Z(sc),Z(lb),Z(gk),Z(_k))}}static{this.\u0275cmp=F({type:t,selectors:[["mp-app"]],viewQuery:function(i,r){if(i&1&&it(aa,5)(cc,5),i&2){let o;z(o=$())&&(r.sidenavContent=o.first),z(o=$())&&(r.sidenav=o.first)}},standalone:!1,decls:36,vars:31,consts:[["sidenav",""],["color","primary",1,"mp-toolbar"],["mat-icon-button",""],[1,"mp-flex-placeholder"],[3,"openedChange","mode","opened"],[1,"mp-slot-toggle-group",3,"change","vertical","hideSingleSelectionIndicator"],[3,"value","checked"],["hideToggle",""],["src","assets/img/imprint.png",1,"mp-imprint-image"],[1,"mp-content"],[1,"mp-row","mp-edit-mode-row"],[3,"valueChange","value"],[1,"mp-row"],["mat-icon-button","",3,"click"],["mat-icon-button","","color","accent",3,"click","disabled"],["mat-icon-button","","color","accent",3,"click"],["mat-icon-button","","color","accent"],["cdkDropList","",1,"mp-entry-list",3,"cdkDropListDropped","id","cdkDropListData","cdkDropListConnectedTo","cdkDropListDisabled"],["cdkDrag","",1,"mp-entry-item"],[1,"mp-entry-item-drag-handle"],[4,"cdkDragPlaceholder"],["color","accent","fontIcon","drag_handle","cdkDragHandle",""]],template:function(i,r){if(i&1){let o=Rt();D(0,"mat-toolbar",1),pe(1,O$,3,0,"button",2),pe(2,P$,3,0,"button",2),D(3,"span"),ye(4),mt(5,"transloco"),x(),Se(6,"div",3),pe(7,F$,1,0,"mp-offline-chip"),x(),D(8,"mat-sidenav-container")(9,"mat-sidenav",4,0),To("openedChange",function(a){return tt(o),Bs(r.opened,a)||(r.opened=a),nt(a)}),D(11,"mat-button-toggle-group",5),q("change",function(a){return r.loadSlot(a)}),D(12,"mat-button-toggle",6),ye(13),mt(14,"transloco"),x(),D(15,"mat-button-toggle",6),ye(16),mt(17,"transloco"),x()(),Se(18,"div",3),D(19,"mat-expansion-panel",7)(20,"mat-expansion-panel-header")(21,"mat-panel-title"),ye(22),mt(23,"transloco"),x()(),Se(24,"img",8),x()(),D(25,"mat-sidenav-content")(26,"div",9)(27,"div",10)(28,"mp-edit-mode-selection",11),To("valueChange",function(a){return tt(o),Bs(r.editMode,a)||(r.editMode=a),nt(a)}),x(),pe(29,L$,7,2),mt(30,"async"),x(),pe(31,B$,10,0,"div",12),xo(32,G$,11,11,"div",null,Co),mt(34,"async"),pe(35,W$,7,0,"div",12),x()()()}if(i&2){let o;S(),me(r.opened?-1:1),S(),me(r.opened?2:-1),S(2),ut(gt(5,19,"common.title")),S(3),me(r.online?-1:7),S(2),De("mode",r.isMobile()?"over":"side"),Io("opened",r.opened),S(2),De("vertical",!0)("hideSingleSelectionIndicator",!0),S(),De("value",r.SlotIdentifier.A)("checked",r.groupStoreService.slot===r.SlotIdentifier.A),S(),Vi("",gt(14,21,"common.memorySlot")," A"),S(2),De("value",r.SlotIdentifier.B)("checked",r.groupStoreService.slot===r.SlotIdentifier.B),S(),Vi("",gt(17,23,"common.memorySlot")," B"),S(6),Vi(" ",gt(23,25,"common.imprint")," "),S(6),Io("value",r.editMode),S(),me((o=gt(30,27,r.groupStoreService.dirty$))?29:-1,o),S(2),me(r.isMonthManagement()?31:-1),S(),So(gt(34,29,r.groupStoreService.groups$)),S(3),me(r.isMonthManagement()?35:-1)}},dependencies:[Jx,Xx,Qx,eS,_T,sy,sa,rc,oa,cc,mT,aa,tw,Ck,xk,Ik,Vk,$_,Lr,zf],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%}.mp-flex-placeholder[_ngcontent-%COMP%]{flex-grow:1}.mp-row[_ngcontent-%COMP%], .mp-entry-item[_ngcontent-%COMP%], .mp-row-reverse[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px}.mp-row-reverse[_ngcontent-%COMP%]{flex-direction:row-reverse}.mp-toolbar[_ngcontent-%COMP%]{flex:0 0 64px}.mp-toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:20px}mat-sidenav[_ngcontent-%COMP%]{width:260px}mat-sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container{display:flex;flex-direction:column;align-items:stretch}mat-sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container .mp-slot-toggle-group   .mat-button-toggle-button{height:64px}mat-sidenav[_ngcontent-%COMP%]     .mat-drawer-inner-container .mp-imprint-image{width:100%}@media(max-width:360px){mat-sidenav[_ngcontent-%COMP%]{width:100%}}.mat-drawer-container[_ngcontent-%COMP%]{flex-grow:1;background-color:#fff}.mp-content[_ngcontent-%COMP%]{padding:10px 10px 60px}.mp-edit-mode-row[_ngcontent-%COMP%]{height:58px}.mp-entry-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-height:120px;border-radius:4px;overflow:hidden}.mp-entry-item[_ngcontent-%COMP%]{height:60px;border-bottom:solid 1px #ccc;box-sizing:border-box;background:#fff;font-size:20px}.cdk-drag-placeholder[_ngcontent-%COMP%]{background-color:#ccc;min-height:60px;transition:transform .25s cubic-bezier(0,0,.2,1)}.mp-entry-item-drag-handle[_ngcontent-%COMP%]{padding:12px;cursor:move}.mp-entry-item[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:first-child{padding-left:12px}.mp-entry-item[_ngcontent-%COMP%]:last-child{border:none}.mp-entry-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .mp-entry-item[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drag-preview[_ngcontent-%COMP%]{box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"],changeDetection:0})}}return t})();var Uk={baseHref:"/monthly-planning"};var q$=(()=>{class t{constructor(e){this.http=e}getTranslation(e){return this.http.get(Uk.baseHref+`/assets/i18n/${e}.json`)}static{this.\u0275fac=function(i){return new(i||t)(I(Er))}}static{this.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),zk=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=k({type:t})}static{this.\u0275inj=A({providers:[...LM({config:{availableLangs:["en","de"],defaultLang:"de",reRenderOnLangChange:!0,prodMode:!GC()},loader:q$})],imports:[FM]})}}return t})();var $k=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=k({type:t,bootstrap:[Hk]})}static{this.\u0275inj=A({providers:[{provide:cy,useValue:{disableClose:!0,width:"90vw",maxWidth:"480px"}},cv(dv())],imports:[Ol,bM,tS,vT,CI,iT,TI,cI,pT,BI,lc,jk,lT,wT,gT,Sk,IS,Xb.forRoot([]),zk]})}}return t})();tv().bootstrapModule($k,{applicationProviders:[HC()]}).catch(t=>console.error(t));
