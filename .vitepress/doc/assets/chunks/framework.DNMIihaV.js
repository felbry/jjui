/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Se(e, t) {
  const n = new Set(e.split(","));
  return (o) => n.has(o);
}
const te = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Mt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ce = () => {
}, dl = () => !1, Kt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Mn = (e) => e.startsWith("onUpdate:"), oe = Object.assign, Xo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, pl = Object.prototype.hasOwnProperty, J = (e, t) => pl.call(e, t), F = Array.isArray, vt = (e) => Wn(e) === "[object Map]", xs = (e) => Wn(e) === "[object Set]", U = (e) => typeof e == "function", ne = (e) => typeof e == "string", St = (e) => typeof e == "symbol", Z = (e) => e !== null && typeof e == "object", Jo = (e) => (Z(e) || U(e)) && U(e.then) && U(e.catch), Cs = Object.prototype.toString, Wn = (e) => Cs.call(e), Qo = (e) => Wn(e).slice(8, -1), Ds = (e) => Wn(e) === "[object Object]", Zo = (e) => ne(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pt = /* @__PURE__ */ Se(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), hl = /* @__PURE__ */ Se(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), qn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, ml = /-(\w)/g, ke = qn((e) => e.replace(ml, (t, n) => n ? n.toUpperCase() : "")), gl = /\B([A-Z])/g, je = qn(
  (e) => e.replace(gl, "-$1").toLowerCase()
), xt = qn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ot = qn((e) => e ? `on${xt(e)}` : ""), dt = (e, t) => !Object.is(e, t), Yt = (e, t) => {
  for (let n = 0; n < e.length; n++)
    e[n](t);
}, Vs = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, vl = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, _l = (e) => {
  const t = ne(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Cr;
const er = () => Cr || (Cr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function zn(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], r = ne(o) ? Nl(o) : zn(o);
      if (r)
        for (const s in r)
          t[s] = r[s];
    }
    return t;
  } else if (ne(e) || Z(e))
    return e;
}
const El = /;(?![^(]*\))/g, yl = /:([^]+)/, bl = /\/\*[^]*?\*\//g;
function Nl(e) {
  const t = {};
  return e.replace(bl, "").split(El).forEach((n) => {
    if (n) {
      const o = n.split(yl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function wl(e) {
  let t = "";
  if (!e || ne(e))
    return t;
  for (const n in e) {
    const o = e[n];
    if (ne(o) || typeof o == "number") {
      const r = n.startsWith("--") ? n : je(n);
      t += `${r}:${o};`;
    }
  }
  return t;
}
function Gn(e) {
  let t = "";
  if (ne(e))
    t = e;
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const o = Gn(e[n]);
      o && (t += o + " ");
    }
  else if (Z(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ol = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", xl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Cl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Dl = /* @__PURE__ */ Se(Ol), Vl = /* @__PURE__ */ Se(xl), Sl = /* @__PURE__ */ Se(Cl), Ss = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Tl = /* @__PURE__ */ Se(Ss), Dr = /* @__PURE__ */ Se(
  Ss + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected"
);
function tr(e) {
  return !!e || e === "";
}
const Al = /* @__PURE__ */ Se(
  "accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"
), $l = /* @__PURE__ */ Se(
  "xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan"
);
function Rl(e) {
  if (e == null)
    return !1;
  const t = typeof e;
  return t === "string" || t === "number" || t === "boolean";
}
const $f = (e) => ne(e) ? e : e == null ? "" : F(e) || Z(e) && (e.toString === Cs || !U(e.toString)) ? JSON.stringify(e, Ts, 2) : String(e), Ts = (e, t) => t && t.__v_isRef ? Ts(e, t.value) : vt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, r], s) => (n[ho(o, s) + " =>"] = r, n),
    {}
  )
} : xs(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ho(n))
} : St(t) ? ho(t) : Z(t) && !F(t) && !Ds(t) ? String(t) : t, ho = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    St(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ge(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Oe;
class Il {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Oe, !t && Oe && (this.index = (Oe.scopes || (Oe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Oe;
      try {
        return Oe = this, t();
      } finally {
        Oe = n;
      }
    } else
      process.env.NODE_ENV !== "production" && Ge("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Oe = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Oe = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function Ml(e, t = Oe) {
  t && t.active && t.effects.push(e);
}
function As() {
  return Oe;
}
function Pl(e) {
  Oe ? Oe.cleanups.push(e) : process.env.NODE_ENV !== "production" && Ge(
    "onScopeDispose() is called when there is no active effect scope to be associated with."
  );
}
let _t;
class nr {
  constructor(t, n, o, r) {
    this.fn = t, this.trigger = n, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Ml(this, r);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, Xe();
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t];
        if (n.computed && (Ll(n.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Je();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let t = at, n = _t;
    try {
      return at = !0, _t = this, this._runnings++, Vr(this), this.fn();
    } finally {
      Sr(this), this._runnings--, _t = n, at = t;
    }
  }
  stop() {
    this.active && (Vr(this), Sr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function Ll(e) {
  return e.value;
}
function Vr(e) {
  e._trackId++, e._depsLength = 0;
}
function Sr(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++)
      $s(e.deps[t], e);
    e.deps.length = e._depsLength;
  }
}
function $s(e, t) {
  const n = e.get(t);
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup());
}
let at = !0, $o = 0;
const Rs = [];
function Xe() {
  Rs.push(at), at = !1;
}
function Je() {
  const e = Rs.pop();
  at = e === void 0 ? !0 : e;
}
function or() {
  $o++;
}
function rr() {
  for ($o--; !$o && Ro.length; )
    Ro.shift()();
}
function Is(e, t, n) {
  var o;
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId);
    const r = e.deps[e._depsLength];
    r !== t ? (r && $s(r, e), e.deps[e._depsLength++] = t) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, oe({ effect: e }, n)));
  }
}
const Ro = [];
function Ms(e, t, n) {
  var o;
  or();
  for (const r of e.keys()) {
    let s;
    r._dirtyLevel < t && (s ?? (s = e.get(r) === r._trackId)) && (r._shouldSchedule || (r._shouldSchedule = r._dirtyLevel === 0), r._dirtyLevel = t), r._shouldSchedule && (s ?? (s = e.get(r) === r._trackId)) && (process.env.NODE_ENV !== "production" && ((o = r.onTrigger) == null || o.call(r, oe({ effect: r }, n))), r.trigger(), (!r._runnings || r.allowRecurse) && r._dirtyLevel !== 2 && (r._shouldSchedule = !1, r.scheduler && Ro.push(r.scheduler)));
  }
  rr();
}
const Ps = (e, t) => {
  const n = /* @__PURE__ */ new Map();
  return n.cleanup = e, n.computed = t, n;
}, Pn = /* @__PURE__ */ new WeakMap(), Et = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Io = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function ge(e, t, n) {
  if (at && _t) {
    let o = Pn.get(e);
    o || Pn.set(e, o = /* @__PURE__ */ new Map());
    let r = o.get(n);
    r || o.set(n, r = Ps(() => o.delete(n))), Is(
      _t,
      r,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n
      } : void 0
    );
  }
}
function Le(e, t, n, o, r, s) {
  const i = Pn.get(e);
  if (!i)
    return;
  let l = [];
  if (t === "clear")
    l = [...i.values()];
  else if (n === "length" && F(e)) {
    const c = Number(o);
    i.forEach((u, p) => {
      (p === "length" || !St(p) && p >= c) && l.push(u);
    });
  } else
    switch (n !== void 0 && l.push(i.get(n)), t) {
      case "add":
        F(e) ? Zo(n) && l.push(i.get("length")) : (l.push(i.get(Et)), vt(e) && l.push(i.get(Io)));
        break;
      case "delete":
        F(e) || (l.push(i.get(Et)), vt(e) && l.push(i.get(Io)));
        break;
      case "set":
        vt(e) && l.push(i.get(Et));
        break;
    }
  or();
  for (const c of l)
    c && Ms(
      c,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: t,
        key: n,
        newValue: o,
        oldValue: r,
        oldTarget: s
      } : void 0
    );
  rr();
}
function Fl(e, t) {
  const n = Pn.get(e);
  return n && n.get(t);
}
const kl = /* @__PURE__ */ Se("__proto__,__v_isRef,__isVue"), Ls = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(St)
), Tr = /* @__PURE__ */ jl();
function jl() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const o = q(this);
      for (let s = 0, i = this.length; s < i; s++)
        ge(o, "get", s + "");
      const r = o[t](...n);
      return r === -1 || r === !1 ? o[t](...n.map(q)) : r;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Xe(), or();
      const o = q(this)[t].apply(this, n);
      return rr(), Je(), o;
    };
  }), e;
}
function Hl(e) {
  St(e) || (e = String(e));
  const t = q(this);
  return ge(t, "has", e), t.hasOwnProperty(e);
}
class Fs {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    const r = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !r;
    if (n === "__v_isReadonly")
      return r;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (r ? s ? Ws : Ks : s ? Bs : Us).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = F(t);
    if (!r) {
      if (i && J(Tr, n))
        return Reflect.get(Tr, n, o);
      if (n === "hasOwnProperty")
        return Hl;
    }
    const l = Reflect.get(t, n, o);
    return (St(n) ? Ls.has(n) : kl(n)) || (r || ge(t, "get", n), s) ? l : fe(l) ? i && Zo(n) ? l : l.value : Z(l) ? r ? Qn(l) : Jn(l) : l;
  }
}
class ks extends Fs {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, r) {
    let s = t[n];
    if (!this._isShallow) {
      const c = Ct(s);
      if (!yt(o) && !Ct(o) && (s = q(s), o = q(o)), !F(t) && fe(s) && !fe(o))
        return c ? !1 : (s.value = o, !0);
    }
    const i = F(t) && Zo(n) ? Number(n) < t.length : J(t, n), l = Reflect.set(t, n, o, r);
    return t === q(r) && (i ? dt(o, s) && Le(t, "set", n, o, s) : Le(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = J(t, n), r = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Le(t, "delete", n, void 0, r), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!St(n) || !Ls.has(n)) && ge(t, "has", n), o;
  }
  ownKeys(t) {
    return ge(
      t,
      "iterate",
      F(t) ? "length" : Et
    ), Reflect.ownKeys(t);
  }
}
class js extends Fs {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ge(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ge(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ul = /* @__PURE__ */ new ks(), Bl = /* @__PURE__ */ new js(), Kl = /* @__PURE__ */ new ks(
  !0
), Wl = /* @__PURE__ */ new js(!0), sr = (e) => e, Yn = (e) => Reflect.getPrototypeOf(e);
function vn(e, t, n = !1, o = !1) {
  e = e.__v_raw;
  const r = q(e), s = q(t);
  n || (dt(t, s) && ge(r, "get", t), ge(r, "get", s));
  const { has: i } = Yn(r), l = o ? sr : n ? ir : sn;
  if (i.call(r, t))
    return l(e.get(t));
  if (i.call(r, s))
    return l(e.get(s));
  e !== r && e.get(t);
}
function _n(e, t = !1) {
  const n = this.__v_raw, o = q(n), r = q(e);
  return t || (dt(e, r) && ge(o, "has", e), ge(o, "has", r)), e === r ? n.has(e) : n.has(e) || n.has(r);
}
function En(e, t = !1) {
  return e = e.__v_raw, !t && ge(q(e), "iterate", Et), Reflect.get(e, "size", e);
}
function Ar(e) {
  e = q(e);
  const t = q(this);
  return Yn(t).has.call(t, e) || (t.add(e), Le(t, "add", e, e)), this;
}
function $r(e, t) {
  t = q(t);
  const n = q(this), { has: o, get: r } = Yn(n);
  let s = o.call(n, e);
  s ? process.env.NODE_ENV !== "production" && Hs(n, o, e) : (e = q(e), s = o.call(n, e));
  const i = r.call(n, e);
  return n.set(e, t), s ? dt(t, i) && Le(n, "set", e, t, i) : Le(n, "add", e, t), this;
}
function Rr(e) {
  const t = q(this), { has: n, get: o } = Yn(t);
  let r = n.call(t, e);
  r ? process.env.NODE_ENV !== "production" && Hs(t, n, e) : (e = q(e), r = n.call(t, e));
  const s = o ? o.call(t, e) : void 0, i = t.delete(e);
  return r && Le(t, "delete", e, void 0, s), i;
}
function Ir() {
  const e = q(this), t = e.size !== 0, n = process.env.NODE_ENV !== "production" ? vt(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return t && Le(e, "clear", void 0, void 0, n), o;
}
function yn(e, t) {
  return function(o, r) {
    const s = this, i = s.__v_raw, l = q(i), c = t ? sr : e ? ir : sn;
    return !e && ge(l, "iterate", Et), i.forEach((u, p) => o.call(r, c(u), c(p), s));
  };
}
function bn(e, t, n) {
  return function(...o) {
    const r = this.__v_raw, s = q(r), i = vt(s), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, u = r[e](...o), p = n ? sr : t ? ir : sn;
    return !t && ge(
      s,
      "iterate",
      c ? Io : Et
    ), {
      // iterator protocol
      next() {
        const { value: f, done: h } = u.next();
        return h ? { value: f, done: h } : {
          value: l ? [p(f[0]), p(f[1])] : p(f),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function et(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ge(
        `${xt(e)} operation ${n}failed: target is readonly.`,
        q(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ql() {
  const e = {
    get(s) {
      return vn(this, s);
    },
    get size() {
      return En(this);
    },
    has: _n,
    add: Ar,
    set: $r,
    delete: Rr,
    clear: Ir,
    forEach: yn(!1, !1)
  }, t = {
    get(s) {
      return vn(this, s, !1, !0);
    },
    get size() {
      return En(this);
    },
    has: _n,
    add: Ar,
    set: $r,
    delete: Rr,
    clear: Ir,
    forEach: yn(!1, !0)
  }, n = {
    get(s) {
      return vn(this, s, !0);
    },
    get size() {
      return En(this, !0);
    },
    has(s) {
      return _n.call(this, s, !0);
    },
    add: et("add"),
    set: et("set"),
    delete: et("delete"),
    clear: et("clear"),
    forEach: yn(!0, !1)
  }, o = {
    get(s) {
      return vn(this, s, !0, !0);
    },
    get size() {
      return En(this, !0);
    },
    has(s) {
      return _n.call(this, s, !0);
    },
    add: et("add"),
    set: et("set"),
    delete: et("delete"),
    clear: et("clear"),
    forEach: yn(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    e[s] = bn(s, !1, !1), n[s] = bn(s, !0, !1), t[s] = bn(s, !1, !0), o[s] = bn(
      s,
      !0,
      !0
    );
  }), [
    e,
    n,
    t,
    o
  ];
}
const [
  zl,
  Gl,
  Yl,
  Xl
] = /* @__PURE__ */ ql();
function Xn(e, t) {
  const n = t ? e ? Xl : Yl : e ? Gl : zl;
  return (o, r, s) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? o : Reflect.get(
    J(n, r) && r in o ? n : o,
    r,
    s
  );
}
const Jl = {
  get: /* @__PURE__ */ Xn(!1, !1)
}, Ql = {
  get: /* @__PURE__ */ Xn(!1, !0)
}, Zl = {
  get: /* @__PURE__ */ Xn(!0, !1)
}, ec = {
  get: /* @__PURE__ */ Xn(!0, !0)
};
function Hs(e, t, n) {
  const o = q(n);
  if (o !== n && t.call(e, o)) {
    const r = Qo(e);
    Ge(
      `Reactive ${r} contains both the raw and reactive versions of the same object${r === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Us = /* @__PURE__ */ new WeakMap(), Bs = /* @__PURE__ */ new WeakMap(), Ks = /* @__PURE__ */ new WeakMap(), Ws = /* @__PURE__ */ new WeakMap();
function tc(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function nc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : tc(Qo(e));
}
function Jn(e) {
  return Ct(e) ? e : Zn(
    e,
    !1,
    Ul,
    Jl,
    Us
  );
}
function oc(e) {
  return Zn(
    e,
    !1,
    Kl,
    Ql,
    Bs
  );
}
function Qn(e) {
  return Zn(
    e,
    !0,
    Bl,
    Zl,
    Ks
  );
}
function Pe(e) {
  return Zn(
    e,
    !0,
    Wl,
    ec,
    Ws
  );
}
function Zn(e, t, n, o, r) {
  if (!Z(e))
    return process.env.NODE_ENV !== "production" && Ge(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = r.get(e);
  if (s)
    return s;
  const i = nc(e);
  if (i === 0)
    return e;
  const l = new Proxy(
    e,
    i === 2 ? o : n
  );
  return r.set(e, l), l;
}
function Lt(e) {
  return Ct(e) ? Lt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ct(e) {
  return !!(e && e.__v_isReadonly);
}
function yt(e) {
  return !!(e && e.__v_isShallow);
}
function Mo(e) {
  return e ? !!e.__v_raw : !1;
}
function q(e) {
  const t = e && e.__v_raw;
  return t ? q(t) : e;
}
function Vn(e) {
  return Object.isExtensible(e) && Vs(e, "__v_skip", !0), e;
}
const sn = (e) => Z(e) ? Jn(e) : e, ir = (e) => Z(e) ? Qn(e) : e, rc = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class qs {
  constructor(t, n, o, r) {
    this.getter = t, this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new nr(
      () => t(this._value),
      () => tn(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !r, this.__v_isReadonly = o;
  }
  get value() {
    const t = q(this);
    return (!t._cacheable || t.effect.dirty) && dt(t._value, t._value = t.effect.run()) && tn(t, 4), lr(t), t.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && Ge(rc, `

getter: `, this.getter), tn(t, 2)), t._value;
  }
  set value(t) {
    this._setter(t);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(t) {
    this.effect.dirty = t;
  }
  // #endregion
}
function sc(e, t, n = !1) {
  let o, r;
  const s = U(e);
  s ? (o = e, r = process.env.NODE_ENV !== "production" ? () => {
    Ge("Write operation failed: computed value is readonly");
  } : ce) : (o = e.get, r = e.set);
  const i = new qs(o, r, s || !r, n);
  return process.env.NODE_ENV !== "production" && t && !n && (i.effect.onTrack = t.onTrack, i.effect.onTrigger = t.onTrigger), i;
}
function lr(e) {
  var t;
  at && _t && (e = q(e), Is(
    _t,
    (t = e.dep) != null ? t : e.dep = Ps(
      () => e.dep = void 0,
      e instanceof qs ? e : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function tn(e, t = 4, n) {
  e = q(e);
  const o = e.dep;
  o && Ms(
    o,
    t,
    process.env.NODE_ENV !== "production" ? {
      target: e,
      type: "set",
      key: "value",
      newValue: n
    } : void 0
  );
}
function fe(e) {
  return !!(e && e.__v_isRef === !0);
}
function he(e) {
  return Gs(e, !1);
}
function zs(e) {
  return Gs(e, !0);
}
function Gs(e, t) {
  return fe(e) ? e : new ic(e, t);
}
class ic {
  constructor(t, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : q(t), this._value = n ? t : sn(t);
  }
  get value() {
    return lr(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || yt(t) || Ct(t);
    t = n ? t : q(t), dt(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : sn(t), tn(this, 4, t));
  }
}
function Ys(e) {
  return fe(e) ? e.value : e;
}
const lc = {
  get: (e, t, n) => Ys(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const r = e[t];
    return fe(r) && !fe(n) ? (r.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function Xs(e) {
  return Lt(e) ? e : new Proxy(e, lc);
}
class cc {
  constructor(t) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: o } = t(
      () => lr(this),
      () => tn(this)
    );
    this._get = n, this._set = o;
  }
  get value() {
    return this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function ac(e) {
  return new cc(e);
}
class uc {
  constructor(t, n, o) {
    this._object = t, this._key = n, this._defaultValue = o, this.__v_isRef = !0;
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Fl(q(this._object), this._key);
  }
}
class fc {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0;
  }
  get value() {
    return this._getter();
  }
}
function dc(e, t, n) {
  return fe(e) ? e : U(e) ? new fc(e) : Z(e) && arguments.length > 1 ? pc(e, t, n) : he(e);
}
function pc(e, t, n) {
  const o = e[t];
  return fe(o) ? o : new uc(e, t, n);
}
/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const bt = [];
function Sn(e) {
  bt.push(e);
}
function Tn() {
  bt.pop();
}
function N(e, ...t) {
  Xe();
  const n = bt.length ? bt[bt.length - 1].component : null, o = n && n.appContext.config.warnHandler, r = hc();
  if (o)
    ze(
      o,
      n,
      11,
      [
        e + t.map((s) => {
          var i, l;
          return (l = (i = s.toString) == null ? void 0 : i.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        r.map(
          ({ vnode: s }) => `at <${co(n, s.type)}>`
        ).join(`
`),
        r
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    r.length && s.push(`
`, ...mc(r)), console.warn(...s);
  }
  Je();
}
function hc() {
  let e = bt[bt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function mc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...gc(n));
  }), t;
}
function gc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, r = ` at <${co(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [r, ...vc(e.props), s] : [r + s];
}
function vc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...Js(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Js(e, t, n) {
  return ne(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : fe(t) ? (t = Js(e, q(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : U(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = q(t), n ? t : [`${e}=`, t]);
}
function _c(e, t) {
  process.env.NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? N(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && N(`${t} is NaN - the duration expression might be incorrect.`));
}
const cr = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function ze(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (r) {
    fn(r, t, n);
  }
}
function Ve(e, t, n, o) {
  if (U(e)) {
    const r = ze(e, t, n, o);
    return r && Jo(r) && r.catch((s) => {
      fn(s, t, n);
    }), r;
  }
  if (F(e)) {
    const r = [];
    for (let s = 0; s < e.length; s++)
      r.push(Ve(e[s], t, n, o));
    return r;
  } else
    process.env.NODE_ENV !== "production" && N(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function fn(e, t, n, o = !0) {
  const r = t ? t.vnode : null;
  if (t) {
    let s = t.parent;
    const i = t.proxy, l = process.env.NODE_ENV !== "production" ? cr[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; s; ) {
      const u = s.ec;
      if (u) {
        for (let p = 0; p < u.length; p++)
          if (u[p](e, i, l) === !1)
            return;
      }
      s = s.parent;
    }
    const c = t.appContext.config.errorHandler;
    if (c) {
      Xe(), ze(
        c,
        null,
        10,
        [e, i, l]
      ), Je();
      return;
    }
  }
  Ec(e, n, r, o);
}
function Ec(e, t, n, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const r = cr[t];
    if (n && Sn(n), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && Tn(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let ln = !1, Po = !1;
const Ee = [];
let Me = 0;
const Ft = [];
let qe = null, rt = 0;
const Qs = /* @__PURE__ */ Promise.resolve();
let ar = null;
const yc = 100;
function eo(e) {
  const t = ar || Qs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function bc(e) {
  let t = Me + 1, n = Ee.length;
  for (; t < n; ) {
    const o = t + n >>> 1, r = Ee[o], s = cn(r);
    s < e || s === e && r.pre ? t = o + 1 : n = o;
  }
  return t;
}
function to(e) {
  (!Ee.length || !Ee.includes(
    e,
    ln && e.allowRecurse ? Me + 1 : Me
  )) && (e.id == null ? Ee.push(e) : Ee.splice(bc(e.id), 0, e), Zs());
}
function Zs() {
  !ln && !Po && (Po = !0, ar = Qs.then(ti));
}
function Nc(e) {
  const t = Ee.indexOf(e);
  t > Me && Ee.splice(t, 1);
}
function ei(e) {
  F(e) ? Ft.push(...e) : (!qe || !qe.includes(
    e,
    e.allowRecurse ? rt + 1 : rt
  )) && Ft.push(e), Zs();
}
function Mr(e, t, n = ln ? Me + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < Ee.length; n++) {
    const o = Ee[n];
    if (o && o.pre) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && ur(t, o))
        continue;
      Ee.splice(n, 1), n--, o();
    }
  }
}
function Ln(e) {
  if (Ft.length) {
    const t = [...new Set(Ft)].sort(
      (n, o) => cn(n) - cn(o)
    );
    if (Ft.length = 0, qe) {
      qe.push(...t);
      return;
    }
    for (qe = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), rt = 0; rt < qe.length; rt++)
      process.env.NODE_ENV !== "production" && ur(e, qe[rt]) || qe[rt]();
    qe = null, rt = 0;
  }
}
const cn = (e) => e.id == null ? 1 / 0 : e.id, wc = (e, t) => {
  const n = cn(e) - cn(t);
  if (n === 0) {
    if (e.pre && !t.pre)
      return -1;
    if (t.pre && !e.pre)
      return 1;
  }
  return n;
};
function ti(e) {
  Po = !1, ln = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ee.sort(wc);
  const t = process.env.NODE_ENV !== "production" ? (n) => ur(e, n) : ce;
  try {
    for (Me = 0; Me < Ee.length; Me++) {
      const n = Ee[Me];
      if (n && n.active !== !1) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        ze(n, null, 14);
      }
    }
  } finally {
    Me = 0, Ee.length = 0, Ln(e), ln = !1, ar = null, (Ee.length || Ft.length) && ti(e);
  }
}
function ur(e, t) {
  if (!e.has(t))
    e.set(t, 1);
  else {
    const n = e.get(t);
    if (n > yc) {
      const o = t.ownerInstance, r = o && Er(o.type);
      return fn(
        `Maximum recursive updates exceeded${r ? ` in component <${r}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(t, n + 1);
  }
}
let Nt = !1;
const Rt = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (er().__VUE_HMR_RUNTIME__ = {
  createRecord: mo(ni),
  rerender: mo(Cc),
  reload: mo(Dc)
});
const Dt = /* @__PURE__ */ new Map();
function Oc(e) {
  const t = e.type.__hmrId;
  let n = Dt.get(t);
  n || (ni(t, e.type), n = Dt.get(t)), n.instances.add(e);
}
function xc(e) {
  Dt.get(e.type.__hmrId).instances.delete(e);
}
function ni(e, t) {
  return Dt.has(e) ? !1 : (Dt.set(e, {
    initialDef: nn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function nn(e) {
  return Wi(e) ? e.__vccOpts : e;
}
function Cc(e, t) {
  const n = Dt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, nn(o.type).render = t), o.renderCache = [], Nt = !0, o.effect.dirty = !0, o.update(), Nt = !1;
  }));
}
function Dc(e, t) {
  const n = Dt.get(e);
  if (!n)
    return;
  t = nn(t), Pr(n.initialDef, t);
  const o = [...n.instances];
  for (const r of o) {
    const s = nn(r.type);
    Rt.has(s) || (s !== n.initialDef && Pr(s, t), Rt.add(s)), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (Rt.add(s), r.ceReload(t.styles), Rt.delete(s)) : r.parent ? (r.parent.effect.dirty = !0, to(r.parent.update)) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  ei(() => {
    for (const r of o)
      Rt.delete(
        nn(r.type)
      );
  });
}
function Pr(e, t) {
  oe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function mo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Ae, Zt = [], Lo = !1;
function dn(e, ...t) {
  Ae ? Ae.emit(e, ...t) : Lo || Zt.push({ event: e, args: t });
}
function fr(e, t) {
  var n, o;
  Ae = e, Ae ? (Ae.enabled = !0, Zt.forEach(({ event: r, args: s }) => Ae.emit(r, ...s)), Zt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    fr(s, t);
  }), setTimeout(() => {
    Ae || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Lo = !0, Zt = []);
  }, 3e3)) : (Lo = !0, Zt = []);
}
function Vc(e, t) {
  dn("app:init", e, t, {
    Fragment: _e,
    Text: Vt,
    Comment: ae,
    Static: Ht
  });
}
function Sc(e) {
  dn("app:unmount", e);
}
const Tc = /* @__PURE__ */ dr(
  "component:added"
  /* COMPONENT_ADDED */
), oi = /* @__PURE__ */ dr(
  "component:updated"
  /* COMPONENT_UPDATED */
), Ac = /* @__PURE__ */ dr(
  "component:removed"
  /* COMPONENT_REMOVED */
), $c = (e) => {
  Ae && typeof Ae.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Ae.cleanupBuffer(e) && Ac(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function dr(e) {
  return (t) => {
    dn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Rc = /* @__PURE__ */ ri(
  "perf:start"
  /* PERFORMANCE_START */
), Ic = /* @__PURE__ */ ri(
  "perf:end"
  /* PERFORMANCE_END */
);
function ri(e) {
  return (t, n, o) => {
    dn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Mc(e, t, n) {
  dn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
function Pc(e, t, ...n) {
  if (e.isUnmounted)
    return;
  const o = e.vnode.props || te;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [f]
    } = e;
    if (p)
      if (!(t in p))
        (!f || !(ot(t) in f)) && N(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ot(t)}" prop.`
        );
      else {
        const h = p[t];
        U(h) && (h(...n) || N(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let r = n;
  const s = t.startsWith("update:"), i = s && t.slice(7);
  if (i && i in o) {
    const p = `${i === "modelValue" ? "model" : i}Modifiers`, { number: f, trim: h } = o[p] || te;
    h && (r = n.map((_) => ne(_) ? _.trim() : _)), f && (r = n.map(vl));
  }
  if (process.env.NODE_ENV !== "production" && Mc(e, t, r), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && o[ot(p)] && N(
      `Event "${p}" is emitted in component ${co(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${je(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = o[l = ot(t)] || // also try camelCase event handler (#2249)
  o[l = ot(ke(t))];
  !c && s && (c = o[l = ot(je(t))]), c && Ve(
    c,
    e,
    6,
    r
  );
  const u = o[l + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ve(
      u,
      e,
      6,
      r
    );
  }
}
function si(e, t, n = !1) {
  const o = t.emitsCache, r = o.get(e);
  if (r !== void 0)
    return r;
  const s = e.emits;
  let i = {}, l = !1;
  if (!U(e)) {
    const c = (u) => {
      const p = si(u, t, !0);
      p && (l = !0, oe(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !s && !l ? (Z(e) && o.set(e, null), null) : (F(s) ? s.forEach((c) => i[c] = null) : oe(i, s), Z(e) && o.set(e, i), i);
}
function no(e, t) {
  return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), J(e, t[0].toLowerCase() + t.slice(1)) || J(e, je(t)) || J(e, t));
}
let pe = null, oo = null;
function Fn(e) {
  const t = pe;
  return pe = e, oo = e && e.type.__scopeId || null, t;
}
function Rf(e) {
  oo = e;
}
function If() {
  oo = null;
}
function Lc(e, t = pe, n) {
  if (!t || e._n)
    return e;
  const o = (...r) => {
    o._d && Qr(-1);
    const s = Fn(t);
    let i;
    try {
      i = e(...r);
    } finally {
      Fn(s), o._d && Qr(1);
    }
    return process.env.NODE_ENV !== "production" && oi(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
let Fo = !1;
function kn() {
  Fo = !0;
}
function go(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: r,
    propsOptions: [s],
    slots: i,
    attrs: l,
    emit: c,
    render: u,
    renderCache: p,
    props: f,
    data: h,
    setupState: _,
    ctx: V,
    inheritAttrs: M
  } = e, z = Fn(e);
  let G, Y;
  process.env.NODE_ENV !== "production" && (Fo = !1);
  try {
    if (n.shapeFlag & 4) {
      const $ = r || o, B = process.env.NODE_ENV !== "production" && _.__isScriptSetup ? new Proxy($, {
        get(A, S, P) {
          return N(
            `Property '${String(
              S
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(A, S, P);
        }
      }) : $;
      G = De(
        u.call(
          B,
          $,
          p,
          process.env.NODE_ENV !== "production" ? Pe(f) : f,
          _,
          h,
          V
        )
      ), Y = l;
    } else {
      const $ = t;
      process.env.NODE_ENV !== "production" && l === f && kn(), G = De(
        $.length > 1 ? $(
          process.env.NODE_ENV !== "production" ? Pe(f) : f,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return kn(), Pe(l);
            },
            slots: i,
            emit: c
          } : { attrs: l, slots: i, emit: c }
        ) : $(
          process.env.NODE_ENV !== "production" ? Pe(f) : f,
          null
        )
      ), Y = t.props ? l : Fc(l);
    }
  } catch ($) {
    rn.length = 0, fn($, e, 1), G = me(ae);
  }
  let m = G, v;
  if (process.env.NODE_ENV !== "production" && G.patchFlag > 0 && G.patchFlag & 2048 && ([m, v] = ii(G)), Y && M !== !1) {
    const $ = Object.keys(Y), { shapeFlag: B } = m;
    if ($.length) {
      if (B & 7)
        s && $.some(Mn) && (Y = kc(
          Y,
          s
        )), m = He(m, Y, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Fo && m.type !== ae) {
        const A = Object.keys(l), S = [], P = [];
        for (let w = 0, k = A.length; w < k; w++) {
          const D = A[w];
          Kt(D) ? Mn(D) || S.push(D[2].toLowerCase() + D.slice(3)) : P.push(D);
        }
        P.length && N(
          `Extraneous non-props attributes (${P.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), S.length && N(
          `Extraneous non-emits event listeners (${S.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !Lr(m) && N(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), m = He(m, null, !1, !0), m.dirs = m.dirs ? m.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !Lr(m) && N(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), m.transition = n.transition), process.env.NODE_ENV !== "production" && v ? v(m) : G = m, Fn(z), G;
}
const ii = (e) => {
  const t = e.children, n = e.dynamicChildren, o = pr(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return ii(o);
  } else
    return [e, void 0];
  const r = t.indexOf(o), s = n ? n.indexOf(o) : -1, i = (l) => {
    t[r] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [De(o), i];
};
function pr(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const r = e[o];
    if (Ut(r)) {
      if (r.type !== ae || r.children === "v-if") {
        if (n)
          return;
        if (n = r, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return pr(n.children);
      }
    } else
      return;
  }
  return n;
}
const Fc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, kc = (e, t) => {
  const n = {};
  for (const o in e)
    (!Mn(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, Lr = (e) => e.shapeFlag & 7 || e.type === ae;
function jc(e, t, n) {
  const { props: o, children: r, component: s } = e, { props: i, children: l, patchFlag: c } = t, u = s.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (r || l) && Nt || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return o ? Fr(o, i, u) : !!i;
    if (c & 8) {
      const p = t.dynamicProps;
      for (let f = 0; f < p.length; f++) {
        const h = p[f];
        if (i[h] !== o[h] && !no(u, h))
          return !0;
      }
    }
  } else
    return (r || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? Fr(o, i, u) : !0 : !!i;
  return !1;
}
function Fr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < o.length; r++) {
    const s = o[r];
    if (t[s] !== e[s] && !no(n, s))
      return !0;
  }
  return !1;
}
function Hc({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const jn = "components";
function Mf(e, t) {
  return ci(jn, e, !0, t) || e;
}
const li = Symbol.for("v-ndc");
function Pf(e) {
  return ne(e) ? ci(jn, e, !1) || e : e || li;
}
function ci(e, t, n = !0, o = !1) {
  const r = pe || ue;
  if (r) {
    const s = r.type;
    if (e === jn) {
      const l = Er(
        s,
        !1
      );
      if (l && (l === t || l === ke(t) || l === xt(ke(t))))
        return s;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      kr(r[e] || s[e], t) || // global registration
      kr(r.appContext[e], t)
    );
    if (!i && o)
      return s;
    if (process.env.NODE_ENV !== "production" && n && !i) {
      const l = e === jn ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      N(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`);
    }
    return i;
  } else
    process.env.NODE_ENV !== "production" && N(
      `resolve${xt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function kr(e, t) {
  return e && (e[t] || e[ke(t)] || e[xt(ke(t))]);
}
const Uc = (e) => e.__isSuspense;
function ai(e, t) {
  t && t.pendingBranch ? F(e) ? t.effects.push(...e) : t.effects.push(e) : ei(e);
}
const Bc = Symbol.for("v-scx"), Kc = () => {
  {
    const e = jt(Bc);
    return e || process.env.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function ui(e, t) {
  return ro(e, null, t);
}
function Lf(e, t) {
  return ro(
    e,
    null,
    process.env.NODE_ENV !== "production" ? oe({}, t, { flush: "post" }) : { flush: "post" }
  );
}
const Nn = {};
function Fe(e, t, n) {
  return process.env.NODE_ENV !== "production" && !U(t) && N(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), ro(e, t, n);
}
function ro(e, t, {
  immediate: n,
  deep: o,
  flush: r,
  once: s,
  onTrack: i,
  onTrigger: l
} = te) {
  if (t && s) {
    const A = t;
    t = (...S) => {
      A(...S), B();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && N(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !t && (n !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && N(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const c = (A) => {
    N(
      "Invalid watch source: ",
      A,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = ue, p = (A) => o === !0 ? A : (
    // for deep: false, only traverse root-level properties
    It(A, o === !1 ? 1 : void 0)
  );
  let f, h = !1, _ = !1;
  if (fe(e) ? (f = () => e.value, h = yt(e)) : Lt(e) ? (f = () => p(e), h = !0) : F(e) ? (_ = !0, h = e.some((A) => Lt(A) || yt(A)), f = () => e.map((A) => {
    if (fe(A))
      return A.value;
    if (Lt(A))
      return p(A);
    if (U(A))
      return ze(A, u, 2);
    process.env.NODE_ENV !== "production" && c(A);
  })) : U(e) ? t ? f = () => ze(e, u, 2) : f = () => (V && V(), Ve(
    e,
    u,
    3,
    [M]
  )) : (f = ce, process.env.NODE_ENV !== "production" && c(e)), t && o) {
    const A = f;
    f = () => It(A());
  }
  let V, M = (A) => {
    V = v.onStop = () => {
      ze(A, u, 4), V = v.onStop = void 0;
    };
  }, z;
  if (lo)
    if (M = ce, t ? n && Ve(t, u, 3, [
      f(),
      _ ? [] : void 0,
      M
    ]) : f(), r === "sync") {
      const A = Kc();
      z = A.__watcherHandles || (A.__watcherHandles = []);
    } else
      return ce;
  let G = _ ? new Array(e.length).fill(Nn) : Nn;
  const Y = () => {
    if (!(!v.active || !v.dirty))
      if (t) {
        const A = v.run();
        (o || h || (_ ? A.some((S, P) => dt(S, G[P])) : dt(A, G))) && (V && V(), Ve(t, u, 3, [
          A,
          // pass undefined as the old value when it's changed for the first time
          G === Nn ? void 0 : _ && G[0] === Nn ? [] : G,
          M
        ]), G = A);
      } else
        v.run();
  };
  Y.allowRecurse = !!t;
  let m;
  r === "sync" ? m = Y : r === "post" ? m = () => Ne(Y, u && u.suspense) : (Y.pre = !0, u && (Y.id = u.uid), m = () => to(Y));
  const v = new nr(f, ce, m), $ = As(), B = () => {
    v.stop(), $ && Xo($.effects, v);
  };
  return process.env.NODE_ENV !== "production" && (v.onTrack = i, v.onTrigger = l), t ? n ? Y() : G = v.run() : r === "post" ? Ne(
    v.run.bind(v),
    u && u.suspense
  ) : v.run(), z && z.push(B), B;
}
function Wc(e, t, n) {
  const o = this.proxy, r = ne(e) ? e.includes(".") ? fi(o, e) : () => o[e] : e.bind(o, o);
  let s;
  U(t) ? s = t : (s = t.handler, n = t);
  const i = mn(this), l = ro(r, s.bind(o), n);
  return i(), l;
}
function fi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let r = 0; r < n.length && o; r++)
      o = o[n[r]];
    return o;
  };
}
function It(e, t = 1 / 0, n) {
  if (t <= 0 || !Z(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, fe(e))
    It(e.value, t, n);
  else if (F(e))
    for (let o = 0; o < e.length; o++)
      It(e[o], t, n);
  else if (xs(e) || vt(e))
    e.forEach((o) => {
      It(o, t, n);
    });
  else if (Ds(e))
    for (const o in e)
      It(e[o], t, n);
  return e;
}
function di(e) {
  hl(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function Ie(e, t, n, o) {
  const r = e.dirs, s = t && t.dirs;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    s && (l.oldValue = s[i].value);
    let c = l.dir[o];
    c && (Xe(), Ve(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Je());
  }
}
const st = Symbol("_leaveCb"), wn = Symbol("_enterCb");
function qc() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Wt(() => {
    e.isMounted = !0;
  }), _i(() => {
    e.isUnmounting = !0;
  }), e;
}
const xe = [Function, Array], pi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: xe,
  onEnter: xe,
  onAfterEnter: xe,
  onEnterCancelled: xe,
  // leave
  onBeforeLeave: xe,
  onLeave: xe,
  onAfterLeave: xe,
  onLeaveCancelled: xe,
  // appear
  onBeforeAppear: xe,
  onAppear: xe,
  onAfterAppear: xe,
  onAppearCancelled: xe
}, zc = {
  name: "BaseTransition",
  props: pi,
  setup(e, { slots: t }) {
    const n = hn(), o = qc();
    return () => {
      const r = t.default && mi(t.default(), !0);
      if (!r || !r.length)
        return;
      let s = r[0];
      if (r.length > 1) {
        let h = !1;
        for (const _ of r)
          if (_.type !== ae) {
            if (process.env.NODE_ENV !== "production" && h) {
              N(
                "<transition> can only be used on a single element or component. Use <transition-group> for lists."
              );
              break;
            }
            if (s = _, h = !0, process.env.NODE_ENV === "production")
              break;
          }
      }
      const i = q(e), { mode: l } = i;
      if (process.env.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && N(`invalid <transition> mode: ${l}`), o.isLeaving)
        return vo(s);
      const c = jr(s);
      if (!c)
        return vo(s);
      const u = ko(
        c,
        i,
        o,
        n
      );
      jo(c, u);
      const p = n.subTree, f = p && jr(p);
      if (f && f.type !== ae && !gt(c, f)) {
        const h = ko(
          f,
          i,
          o,
          n
        );
        if (jo(f, h), l === "out-in" && c.type !== ae)
          return o.isLeaving = !0, h.afterLeave = () => {
            o.isLeaving = !1, n.update.active !== !1 && (n.effect.dirty = !0, n.update());
          }, vo(s);
        l === "in-out" && c.type !== ae && (h.delayLeave = (_, V, M) => {
          const z = hi(
            o,
            f
          );
          z[String(f.key)] = f, _[st] = () => {
            V(), _[st] = void 0, delete u.delayedLeave;
          }, u.delayedLeave = M;
        });
      }
      return s;
    };
  }
}, Gc = zc;
function hi(e, t) {
  const { leavingVNodes: n } = e;
  let o = n.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), n.set(t.type, o)), o;
}
function ko(e, t, n, o) {
  const {
    appear: r,
    mode: s,
    persisted: i = !1,
    onBeforeEnter: l,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: p,
    onBeforeLeave: f,
    onLeave: h,
    onAfterLeave: _,
    onLeaveCancelled: V,
    onBeforeAppear: M,
    onAppear: z,
    onAfterAppear: G,
    onAppearCancelled: Y
  } = t, m = String(e.key), v = hi(n, e), $ = (S, P) => {
    S && Ve(
      S,
      o,
      9,
      P
    );
  }, B = (S, P) => {
    const w = P[1];
    $(S, P), F(S) ? S.every((k) => k.length <= 1) && w() : S.length <= 1 && w();
  }, A = {
    mode: s,
    persisted: i,
    beforeEnter(S) {
      let P = l;
      if (!n.isMounted)
        if (r)
          P = M || l;
        else
          return;
      S[st] && S[st](
        !0
        /* cancelled */
      );
      const w = v[m];
      w && gt(e, w) && w.el[st] && w.el[st](), $(P, [S]);
    },
    enter(S) {
      let P = c, w = u, k = p;
      if (!n.isMounted)
        if (r)
          P = z || c, w = G || u, k = Y || p;
        else
          return;
      let D = !1;
      const X = S[wn] = (se) => {
        D || (D = !0, se ? $(k, [S]) : $(w, [S]), A.delayedLeave && A.delayedLeave(), S[wn] = void 0);
      };
      P ? B(P, [S, X]) : X();
    },
    leave(S, P) {
      const w = String(e.key);
      if (S[wn] && S[wn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return P();
      $(f, [S]);
      let k = !1;
      const D = S[st] = (X) => {
        k || (k = !0, P(), X ? $(V, [S]) : $(_, [S]), S[st] = void 0, v[w] === e && delete v[w]);
      };
      v[w] = e, h ? B(h, [S, D]) : D();
    },
    clone(S) {
      return ko(S, t, n, o);
    }
  };
  return A;
}
function vo(e) {
  if (pn(e))
    return e = He(e), e.children = null, e;
}
function jr(e) {
  if (!pn(e))
    return e;
  if (process.env.NODE_ENV !== "production" && e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && U(n.default))
      return n.default();
  }
}
function jo(e, t) {
  e.shapeFlag & 6 && e.component ? jo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function mi(e, t = !1, n) {
  let o = [], r = 0;
  for (let s = 0; s < e.length; s++) {
    let i = e[s];
    const l = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
    i.type === _e ? (i.patchFlag & 128 && r++, o = o.concat(
      mi(i.children, t, l)
    )) : (t || i.type !== ae) && o.push(l != null ? He(i, { key: l }) : i);
  }
  if (r > 1)
    for (let s = 0; s < o.length; s++)
      o[s].patchFlag = -2;
  return o;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function gi(e, t) {
  return U(e) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    oe({ name: e.name }, t, { setup: e })
  ) : e;
}
const kt = (e) => !!e.type.__asyncLoader, pn = (e) => e.type.__isKeepAlive;
function Yc(e, t) {
  vi(e, "a", t);
}
function Xc(e, t) {
  vi(e, "da", t);
}
function vi(e, t, n = ue) {
  const o = e.__wdc || (e.__wdc = () => {
    let r = n;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (so(t, o, n), n) {
    let r = n.parent;
    for (; r && r.parent; )
      pn(r.parent.vnode) && Jc(o, t, n, r), r = r.parent;
  }
}
function Jc(e, t, n, o) {
  const r = so(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  io(() => {
    Xo(o[t], r);
  }, n);
}
function so(e, t, n = ue, o = !1) {
  if (n) {
    const r = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Xe();
      const l = mn(n), c = Ve(t, n, e, i);
      return l(), Je(), c;
    });
    return o ? r.unshift(s) : r.push(s), s;
  } else if (process.env.NODE_ENV !== "production") {
    const r = ot(cr[e].replace(/ hook$/, ""));
    N(
      `${r} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Qe = (e) => (t, n = ue) => (
  // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
  (!lo || e === "sp") && so(e, (...o) => t(...o), n)
), Qc = Qe("bm"), Wt = Qe("m"), Zc = Qe("bu"), ea = Qe("u"), _i = Qe("bum"), io = Qe("um"), ta = Qe("sp"), na = Qe(
  "rtg"
), oa = Qe(
  "rtc"
);
function ra(e, t = ue) {
  so("ec", e, t);
}
function Ff(e, t, n, o) {
  let r;
  const s = n;
  if (F(e) || ne(e)) {
    r = new Array(e.length);
    for (let i = 0, l = e.length; i < l; i++)
      r[i] = t(e[i], i, void 0, s);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && N(`The v-for range expect an integer value but got ${e}.`), r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = t(i + 1, i, void 0, s);
  } else if (Z(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (i, l) => t(i, l, void 0, s)
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const u = i[l];
        r[l] = t(e[u], u, l, s);
      }
    }
  else
    r = [];
  return r;
}
function kf(e, t, n = {}, o, r) {
  if (pe.isCE || pe.parent && kt(pe.parent) && pe.parent.isCE)
    return t !== "default" && (n.name = t), me("slot", n, o && o());
  let s = e[t];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (N(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), Ii();
  const i = s && Ei(s(n)), l = Pi(
    _e,
    {
      key: n.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      i && i.key || `_${t}`
    },
    i || (o ? o() : []),
    i && e._ === 1 ? 64 : -2
  );
  return !r && l.scopeId && (l.slotScopeIds = [l.scopeId + "-s"]), s && s._c && (s._d = !0), l;
}
function Ei(e) {
  return e.some((t) => Ut(t) ? !(t.type === ae || t.type === _e && !Ei(t.children)) : !0) ? e : null;
}
function jf(e, t) {
  const n = {};
  if (process.env.NODE_ENV !== "production" && !Z(e))
    return N("v-on with no argument expects an object value."), n;
  for (const o in e)
    n[/[A-Z]/.test(o) ? `on:${o}` : ot(o)] = e[o];
  return n;
}
const Ho = (e) => e ? Ui(e) ? _r(e) || e.proxy : Ho(e.parent) : null, wt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ oe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? Pe(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? Pe(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? Pe(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? Pe(e.refs) : e.refs,
    $parent: (e) => Ho(e.parent),
    $root: (e) => Ho(e.root),
    $emit: (e) => e.emit,
    $options: (e) => mr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, to(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = eo.bind(e.proxy)),
    $watch: (e) => Wc.bind(e)
  })
), hr = (e) => e === "_" || e === "$", _o = (e, t) => e !== te && !e.__isScriptSetup && J(e, t), yi = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: r, props: s, accessCache: i, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let u;
    if (t[0] !== "$") {
      const _ = i[t];
      if (_ !== void 0)
        switch (_) {
          case 1:
            return o[t];
          case 2:
            return r[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (_o(o, t))
          return i[t] = 1, o[t];
        if (r !== te && J(r, t))
          return i[t] = 2, r[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (u = e.propsOptions[0]) && J(u, t)
        )
          return i[t] = 3, s[t];
        if (n !== te && J(n, t))
          return i[t] = 4, n[t];
        Uo && (i[t] = 0);
      }
    }
    const p = wt[t];
    let f, h;
    if (p)
      return t === "$attrs" ? (ge(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && kn()) : process.env.NODE_ENV !== "production" && t === "$slots" && ge(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== te && J(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, J(h, t)
    )
      return h[t];
    process.env.NODE_ENV !== "production" && pe && (!ne(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (r !== te && hr(t[0]) && J(r, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === pe && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: r, ctx: s } = e;
    return _o(r, t) ? (r[t] = n, !0) : process.env.NODE_ENV !== "production" && r.__isScriptSetup && J(r, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== te && J(o, t) ? (o[t] = n, !0) : J(e.props, t) ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && N(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: r, propsOptions: s }
  }, i) {
    let l;
    return !!n[i] || e !== te && J(e, i) || _o(t, i) || (l = s[0]) && J(l, i) || J(o, i) || J(wt, i) || J(r.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : J(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (yi.ownKeys = (e) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function sa(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(wt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => wt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ce
    });
  }), t;
}
function ia(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ce
    });
  });
}
function la(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(q(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (hr(o[0])) {
        N(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ce
      });
    }
  });
}
function Hf() {
  return ca().slots;
}
function ca() {
  const e = hn();
  return process.env.NODE_ENV !== "production" && !e && N("useContext() called without active instance."), e.setupContext || (e.setupContext = Ki(e));
}
function Hr(e) {
  return F(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function aa() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let Uo = !0;
function ua(e) {
  const t = mr(e), n = e.proxy, o = e.ctx;
  Uo = !1, t.beforeCreate && Ur(t.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: s,
    methods: i,
    watch: l,
    provide: c,
    inject: u,
    // lifecycle
    created: p,
    beforeMount: f,
    mounted: h,
    beforeUpdate: _,
    updated: V,
    activated: M,
    deactivated: z,
    beforeDestroy: G,
    beforeUnmount: Y,
    destroyed: m,
    unmounted: v,
    render: $,
    renderTracked: B,
    renderTriggered: A,
    errorCaptured: S,
    serverPrefetch: P,
    // public API
    expose: w,
    inheritAttrs: k,
    // assets
    components: D,
    directives: X,
    filters: se
  } = t, ie = process.env.NODE_ENV !== "production" ? aa() : null;
  if (process.env.NODE_ENV !== "production") {
    const [K] = e.propsOptions;
    if (K)
      for (const I in K)
        ie("Props", I);
  }
  if (u && fa(u, o, ie), i)
    for (const K in i) {
      const I = i[K];
      U(I) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, K, {
        value: I.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[K] = I.bind(n), process.env.NODE_ENV !== "production" && ie("Methods", K)) : process.env.NODE_ENV !== "production" && N(
        `Method "${K}" has type "${typeof I}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (r) {
    process.env.NODE_ENV !== "production" && !U(r) && N(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const K = r.call(n, n);
    if (process.env.NODE_ENV !== "production" && Jo(K) && N(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Z(K))
      process.env.NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = Jn(K), process.env.NODE_ENV !== "production")
      for (const I in K)
        ie("Data", I), hr(I[0]) || Object.defineProperty(o, I, {
          configurable: !0,
          enumerable: !0,
          get: () => K[I],
          set: ce
        });
  }
  if (Uo = !0, s)
    for (const K in s) {
      const I = s[K], we = U(I) ? I.bind(n, n) : U(I.get) ? I.get.bind(n, n) : ce;
      process.env.NODE_ENV !== "production" && we === ce && N(`Computed property "${K}" has no getter.`);
      const qt = !U(I) && U(I.set) ? I.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        N(
          `Write operation failed: computed property "${K}" is readonly.`
        );
      } : ce, zt = le({
        get: we,
        set: qt
      });
      Object.defineProperty(o, K, {
        enumerable: !0,
        configurable: !0,
        get: () => zt.value,
        set: (Tt) => zt.value = Tt
      }), process.env.NODE_ENV !== "production" && ie("Computed", K);
    }
  if (l)
    for (const K in l)
      bi(l[K], o, n, K);
  if (c) {
    const K = U(c) ? c.call(n) : c;
    Reflect.ownKeys(K).forEach((I) => {
      va(I, K[I]);
    });
  }
  p && Ur(p, e, "c");
  function H(K, I) {
    F(I) ? I.forEach((we) => K(we.bind(n))) : I && K(I.bind(n));
  }
  if (H(Qc, f), H(Wt, h), H(Zc, _), H(ea, V), H(Yc, M), H(Xc, z), H(ra, S), H(oa, B), H(na, A), H(_i, Y), H(io, v), H(ta, P), F(w))
    if (w.length) {
      const K = e.exposed || (e.exposed = {});
      w.forEach((I) => {
        Object.defineProperty(K, I, {
          get: () => n[I],
          set: (we) => n[I] = we
        });
      });
    } else
      e.exposed || (e.exposed = {});
  $ && e.render === ce && (e.render = $), k != null && (e.inheritAttrs = k), D && (e.components = D), X && (e.directives = X);
}
function fa(e, t, n = ce) {
  F(e) && (e = Bo(e));
  for (const o in e) {
    const r = e[o];
    let s;
    Z(r) ? "default" in r ? s = jt(
      r.from || o,
      r.default,
      !0
    ) : s = jt(r.from || o) : s = jt(r), fe(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (i) => s.value = i
    }) : t[o] = s, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Ur(e, t, n) {
  Ve(
    F(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function bi(e, t, n, o) {
  const r = o.includes(".") ? fi(n, o) : () => n[o];
  if (ne(e)) {
    const s = t[e];
    U(s) ? Fe(r, s) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, s);
  } else if (U(e))
    Fe(r, e.bind(n));
  else if (Z(e))
    if (F(e))
      e.forEach((s) => bi(s, t, n, o));
    else {
      const s = U(e.handler) ? e.handler.bind(n) : t[e.handler];
      U(s) ? Fe(r, s, e) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else
    process.env.NODE_ENV !== "production" && N(`Invalid watch option: "${o}"`, e);
}
function mr(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: r,
    optionsCache: s,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = s.get(t);
  let c;
  return l ? c = l : !r.length && !n && !o ? c = t : (c = {}, r.length && r.forEach(
    (u) => Hn(c, u, i, !0)
  ), Hn(c, t, i)), Z(t) && s.set(t, c), c;
}
function Hn(e, t, n, o = !1) {
  const { mixins: r, extends: s } = t;
  s && Hn(e, s, n, !0), r && r.forEach(
    (i) => Hn(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = da[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const da = {
  data: Br,
  props: Kr,
  emits: Kr,
  // objects
  methods: en,
  computed: en,
  // lifecycle
  beforeCreate: be,
  created: be,
  beforeMount: be,
  mounted: be,
  beforeUpdate: be,
  updated: be,
  beforeDestroy: be,
  beforeUnmount: be,
  destroyed: be,
  unmounted: be,
  activated: be,
  deactivated: be,
  errorCaptured: be,
  serverPrefetch: be,
  // assets
  components: en,
  directives: en,
  // watch
  watch: ha,
  // provide / inject
  provide: Br,
  inject: pa
};
function Br(e, t) {
  return t ? e ? function() {
    return oe(
      U(e) ? e.call(this, this) : e,
      U(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function pa(e, t) {
  return en(Bo(e), Bo(t));
}
function Bo(e) {
  if (F(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function en(e, t) {
  return e ? oe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Kr(e, t) {
  return e ? F(e) && F(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : oe(
    /* @__PURE__ */ Object.create(null),
    Hr(e),
    Hr(t ?? {})
  ) : t;
}
function ha(e, t) {
  if (!e)
    return t;
  if (!t)
    return e;
  const n = oe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = be(e[o], t[o]);
  return n;
}
function Ni() {
  return {
    app: null,
    config: {
      isNativeTag: dl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ma = 0;
function ga(e, t) {
  return function(o, r = null) {
    U(o) || (o = oe({}, o)), r != null && !Z(r) && (process.env.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), r = null);
    const s = Ni(), i = /* @__PURE__ */ new WeakSet();
    let l = !1;
    const c = s.app = {
      _uid: ma++,
      _component: o,
      _props: r,
      _container: null,
      _context: s,
      _instance: null,
      version: ns,
      get config() {
        return s.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && N(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...p) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : u && U(u.install) ? (i.add(u), u.install(c, ...p)) : U(u) ? (i.add(u), u(c, ...p)) : process.env.NODE_ENV !== "production" && N(
          'A plugin must either be a function or an object with an "install" function.'
        ), c;
      },
      mixin(u) {
        return s.mixins.includes(u) ? process.env.NODE_ENV !== "production" && N(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : s.mixins.push(u), c;
      },
      component(u, p) {
        return process.env.NODE_ENV !== "production" && zo(u, s.config), p ? (process.env.NODE_ENV !== "production" && s.components[u] && N(`Component "${u}" has already been registered in target app.`), s.components[u] = p, c) : s.components[u];
      },
      directive(u, p) {
        return process.env.NODE_ENV !== "production" && di(u), p ? (process.env.NODE_ENV !== "production" && s.directives[u] && N(`Directive "${u}" has already been registered in target app.`), s.directives[u] = p, c) : s.directives[u];
      },
      mount(u, p, f) {
        if (l)
          process.env.NODE_ENV !== "production" && N(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && N(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = me(o, r);
          return h.appContext = s, f === !0 ? f = "svg" : f === !1 && (f = void 0), process.env.NODE_ENV !== "production" && (s.reload = () => {
            e(
              He(h),
              u,
              f
            );
          }), p && t ? t(h, u) : e(h, u, f), l = !0, c._container = u, u.__vue_app__ = c, process.env.NODE_ENV !== "production" && (c._instance = h.component, Vc(c, ns)), _r(h.component) || h.component.proxy;
        }
      },
      unmount() {
        l ? (e(null, c._container), process.env.NODE_ENV !== "production" && (c._instance = null, Sc(c)), delete c._container.__vue_app__) : process.env.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(u, p) {
        return process.env.NODE_ENV !== "production" && u in s.provides && N(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ), s.provides[u] = p, c;
      },
      runWithContext(u) {
        const p = on;
        on = c;
        try {
          return u();
        } finally {
          on = p;
        }
      }
    };
    return c;
  };
}
let on = null;
function va(e, t) {
  if (!ue)
    process.env.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = ue.provides;
    const o = ue.parent && ue.parent.provides;
    o === n && (n = ue.provides = Object.create(o)), n[e] = t;
  }
}
function jt(e, t, n = !1) {
  const o = ue || pe;
  if (o || on) {
    const r = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : on._context.provides;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return n && U(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const wi = {}, Oi = () => Object.create(wi), xi = (e) => Object.getPrototypeOf(e) === wi;
function _a(e, t, n, o = !1) {
  const r = {}, s = Oi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ci(e, t, r, s);
  for (const i in e.propsOptions[0])
    i in r || (r[i] = void 0);
  process.env.NODE_ENV !== "production" && Vi(t || {}, r, e), n ? e.props = o ? r : oc(r) : e.type.props ? e.props = r : e.props = s, e.attrs = s;
}
function Ea(e) {
  for (; e; ) {
    if (e.type.__hmrId)
      return !0;
    e = e.parent;
  }
}
function ya(e, t, n, o) {
  const {
    props: r,
    attrs: s,
    vnode: { patchFlag: i }
  } = e, l = q(r), [c] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Ea(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let f = 0; f < p.length; f++) {
        let h = p[f];
        if (no(e.emitsOptions, h))
          continue;
        const _ = t[h];
        if (c)
          if (J(s, h))
            _ !== s[h] && (s[h] = _, u = !0);
          else {
            const V = ke(h);
            r[V] = Ko(
              c,
              l,
              V,
              _,
              e,
              !1
            );
          }
        else
          _ !== s[h] && (s[h] = _, u = !0);
      }
    }
  } else {
    Ci(e, t, r, s) && (u = !0);
    let p;
    for (const f in l)
      (!t || // for camelCase
      !J(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = je(f)) === f || !J(t, p))) && (c ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[p] !== void 0) && (r[f] = Ko(
        c,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (s !== l)
      for (const f in s)
        (!t || !J(t, f)) && (delete s[f], u = !0);
  }
  u && Le(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && Vi(t || {}, r, e);
}
function Ci(e, t, n, o) {
  const [r, s] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (Pt(c))
        continue;
      const u = t[c];
      let p;
      r && J(r, p = ke(c)) ? !s || !s.includes(p) ? n[p] = u : (l || (l = {}))[p] = u : no(e.emitsOptions, c) || (!(c in o) || u !== o[c]) && (o[c] = u, i = !0);
    }
  if (s) {
    const c = q(n), u = l || te;
    for (let p = 0; p < s.length; p++) {
      const f = s[p];
      n[f] = Ko(
        r,
        c,
        f,
        u[f],
        e,
        !J(u, f)
      );
    }
  }
  return i;
}
function Ko(e, t, n, o, r, s) {
  const i = e[n];
  if (i != null) {
    const l = J(i, "default");
    if (l && o === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && U(c)) {
        const { propsDefaults: u } = r;
        if (n in u)
          o = u[n];
        else {
          const p = mn(r);
          o = u[n] = c.call(
            null,
            t
          ), p();
        }
      } else
        o = c;
    }
    i[
      0
      /* shouldCast */
    ] && (s && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === je(n)) && (o = !0));
  }
  return o;
}
function Di(e, t, n = !1) {
  const o = t.propsCache, r = o.get(e);
  if (r)
    return r;
  const s = e.props, i = {}, l = [];
  let c = !1;
  if (!U(e)) {
    const p = (f) => {
      c = !0;
      const [h, _] = Di(f, t, !0);
      oe(i, h), _ && l.push(..._);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!s && !c)
    return Z(e) && o.set(e, Mt), Mt;
  if (F(s))
    for (let p = 0; p < s.length; p++) {
      process.env.NODE_ENV !== "production" && !ne(s[p]) && N("props must be strings when using array syntax.", s[p]);
      const f = ke(s[p]);
      Wr(f) && (i[f] = te);
    }
  else if (s) {
    process.env.NODE_ENV !== "production" && !Z(s) && N("invalid props options", s);
    for (const p in s) {
      const f = ke(p);
      if (Wr(f)) {
        const h = s[p], _ = i[f] = F(h) || U(h) ? { type: h } : oe({}, h);
        if (_) {
          const V = zr(Boolean, _.type), M = zr(String, _.type);
          _[
            0
            /* shouldCast */
          ] = V > -1, _[
            1
            /* shouldCastTrue */
          ] = M < 0 || V < M, (V > -1 || J(_, "default")) && l.push(f);
        }
      }
    }
  }
  const u = [i, l];
  return Z(e) && o.set(e, u), u;
}
function Wr(e) {
  return e[0] !== "$" && !Pt(e) ? !0 : (process.env.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Wo(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function qr(e, t) {
  return Wo(e) === Wo(t);
}
function zr(e, t) {
  return F(t) ? t.findIndex((n) => qr(n, e)) : U(t) && qr(t, e) ? 0 : -1;
}
function Vi(e, t, n) {
  const o = q(t), r = n.propsOptions[0];
  for (const s in r) {
    let i = r[s];
    i != null && ba(
      s,
      o[s],
      i,
      process.env.NODE_ENV !== "production" ? Pe(o) : o,
      !J(e, s) && !J(e, je(s))
    );
  }
}
function ba(e, t, n, o, r) {
  const { type: s, required: i, validator: l, skipCheck: c } = n;
  if (i && r) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (s != null && s !== !0 && !c) {
      let u = !1;
      const p = F(s) ? s : [s], f = [];
      for (let h = 0; h < p.length && !u; h++) {
        const { valid: _, expectedType: V } = wa(t, p[h]);
        f.push(V || ""), u = _;
      }
      if (!u) {
        N(Oa(e, t, f));
        return;
      }
    }
    l && !l(t, o) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Na = /* @__PURE__ */ Se(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function wa(e, t) {
  let n;
  const o = Wo(t);
  if (Na(o)) {
    const r = typeof e;
    n = r === o.toLowerCase(), !n && r === "object" && (n = e instanceof t);
  } else
    o === "Object" ? n = Z(e) : o === "Array" ? n = F(e) : o === "null" ? n = e === null : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Oa(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(xt).join(" | ")}`;
  const r = n[0], s = Qo(t), i = Gr(t, r), l = Gr(t, s);
  return n.length === 1 && Yr(r) && !xa(r, s) && (o += ` with value ${i}`), o += `, got ${s} `, Yr(s) && (o += `with value ${l}.`), o;
}
function Gr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Yr(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function xa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Si = (e) => e[0] === "_" || e === "$stable", gr = (e) => F(e) ? e.map(De) : [De(e)], Ca = (e, t, n) => {
  if (t._n)
    return t;
  const o = Lc((...r) => (process.env.NODE_ENV !== "production" && ue && (!n || n.root === ue.root) && N(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), gr(t(...r))), n);
  return o._c = !1, o;
}, Ti = (e, t, n) => {
  const o = e._ctx;
  for (const r in e) {
    if (Si(r))
      continue;
    const s = e[r];
    if (U(s))
      t[r] = Ca(r, s, o);
    else if (s != null) {
      process.env.NODE_ENV !== "production" && N(
        `Non-function value encountered for slot "${r}". Prefer function slots for better performance.`
      );
      const i = gr(s);
      t[r] = () => i;
    }
  }
}, Ai = (e, t) => {
  process.env.NODE_ENV !== "production" && !pn(e.vnode) && N(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = gr(t);
  e.slots.default = () => n;
}, Da = (e, t) => {
  const n = e.slots = Oi();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (oe(n, t), Vs(n, "_", o, !0)) : Ti(t, n);
  } else
    t && Ai(e, t);
}, Va = (e, t, n) => {
  const { vnode: o, slots: r } = e;
  let s = !0, i = te;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Nt ? (oe(r, t), Le(e, "set", "$slots")) : n && l === 1 ? s = !1 : (oe(r, t), !n && l === 1 && delete r._) : (s = !t.$stable, Ti(t, r)), i = t;
  } else
    t && (Ai(e, t), i = { default: 1 });
  if (s)
    for (const l in r)
      !Si(l) && i[l] == null && delete r[l];
};
function Un(e, t, n, o, r = !1) {
  if (F(e)) {
    e.forEach(
      (h, _) => Un(
        h,
        t && (F(t) ? t[_] : t),
        n,
        o,
        r
      )
    );
    return;
  }
  if (kt(o) && !r)
    return;
  const s = o.shapeFlag & 4 ? _r(o.component) || o.component.proxy : o.el, i = r ? null : s, { i: l, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    N(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const u = t && t.r, p = l.refs === te ? l.refs = {} : l.refs, f = l.setupState;
  if (u != null && u !== c && (ne(u) ? (p[u] = null, J(f, u) && (f[u] = null)) : fe(u) && (u.value = null)), U(c))
    ze(c, l, 12, [i, p]);
  else {
    const h = ne(c), _ = fe(c);
    if (h || _) {
      const V = () => {
        if (e.f) {
          const M = h ? J(f, c) ? f[c] : p[c] : c.value;
          r ? F(M) && Xo(M, s) : F(M) ? M.includes(s) || M.push(s) : h ? (p[c] = [s], J(f, c) && (f[c] = p[c])) : (c.value = [s], e.k && (p[e.k] = c.value));
        } else
          h ? (p[c] = i, J(f, c) && (f[c] = i)) : _ ? (c.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && N("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (V.id = -1, Ne(V, n)) : V();
    } else
      process.env.NODE_ENV !== "production" && N("Invalid template ref type:", c, `(${typeof c})`);
  }
}
let Be = !1;
const Sa = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Ta = (e) => e.namespaceURI.includes("MathML"), On = (e) => {
  if (Sa(e))
    return "svg";
  if (Ta(e))
    return "mathml";
}, Xt = (e) => e.nodeType === 8;
function Aa(e) {
  const {
    mt: t,
    p: n,
    o: {
      patchProp: o,
      createText: r,
      nextSibling: s,
      parentNode: i,
      remove: l,
      insert: c,
      createComment: u
    }
  } = e, p = (m, v) => {
    if (!v.hasChildNodes()) {
      process.env.NODE_ENV !== "production" && N(
        "Attempting to hydrate existing markup but container is empty. Performing full mount instead."
      ), n(null, m, v), Ln(), v._vnode = m;
      return;
    }
    Be = !1, f(v.firstChild, m, null, null, null), Ln(), v._vnode = m, Be && console.error("Hydration completed but contains mismatches.");
  }, f = (m, v, $, B, A, S = !1) => {
    S = S || !!v.dynamicChildren;
    const P = Xt(m) && m.data === "[", w = () => M(
      m,
      v,
      $,
      B,
      A,
      P
    ), { type: k, ref: D, shapeFlag: X, patchFlag: se } = v;
    let ie = m.nodeType;
    v.el = m, process.env.NODE_ENV !== "production" && ("__vnode" in m || Object.defineProperty(m, "__vnode", {
      value: v,
      enumerable: !1
    }), "__vueParentComponent" in m || Object.defineProperty(m, "__vueParentComponent", {
      value: $,
      enumerable: !1
    })), se === -2 && (S = !1, v.dynamicChildren = null);
    let H = null;
    switch (k) {
      case Vt:
        ie !== 3 ? v.children === "" ? (c(v.el = r(""), i(m), m), H = m) : H = w() : (m.data !== v.children && (Be = !0, process.env.NODE_ENV !== "production" && N(
          "Hydration text mismatch in",
          m.parentNode,
          `
  - rendered on server: ${JSON.stringify(
            m.data
          )}
  - expected on client: ${JSON.stringify(v.children)}`
        ), m.data = v.children), H = s(m));
        break;
      case ae:
        Y(m) ? (H = s(m), G(
          v.el = m.content.firstChild,
          m,
          $
        )) : ie !== 8 || P ? H = w() : H = s(m);
        break;
      case Ht:
        if (P && (m = s(m), ie = m.nodeType), ie === 1 || ie === 3) {
          H = m;
          const K = !v.children.length;
          for (let I = 0; I < v.staticCount; I++)
            K && (v.children += H.nodeType === 1 ? H.outerHTML : H.data), I === v.staticCount - 1 && (v.anchor = H), H = s(H);
          return P ? s(H) : H;
        } else
          w();
        break;
      case _e:
        P ? H = V(
          m,
          v,
          $,
          B,
          A,
          S
        ) : H = w();
        break;
      default:
        if (X & 1)
          (ie !== 1 || v.type.toLowerCase() !== m.tagName.toLowerCase()) && !Y(m) ? H = w() : H = h(
            m,
            v,
            $,
            B,
            A,
            S
          );
        else if (X & 6) {
          v.slotScopeIds = A;
          const K = i(m);
          if (P ? H = z(m) : Xt(m) && m.data === "teleport start" ? H = z(m, m.data, "teleport end") : H = s(m), t(
            v,
            K,
            null,
            $,
            B,
            On(K),
            S
          ), kt(v)) {
            let I;
            P ? (I = me(_e), I.anchor = H ? H.previousSibling : K.lastChild) : I = m.nodeType === 3 ? Hi("") : me("div"), I.el = m, v.component.subTree = I;
          }
        } else
          X & 64 ? ie !== 8 ? H = w() : H = v.type.hydrate(
            m,
            v,
            $,
            B,
            A,
            S,
            e,
            _
          ) : X & 128 ? H = v.type.hydrate(
            m,
            v,
            $,
            B,
            On(i(m)),
            A,
            S,
            e,
            f
          ) : process.env.NODE_ENV !== "production" && N("Invalid HostVNode type:", k, `(${typeof k})`);
    }
    return D != null && Un(D, null, B, v), H;
  }, h = (m, v, $, B, A, S) => {
    S = S || !!v.dynamicChildren;
    const { type: P, props: w, patchFlag: k, shapeFlag: D, dirs: X, transition: se } = v, ie = P === "input" || P === "option";
    if (process.env.NODE_ENV !== "production" || ie || k !== -1) {
      X && Ie(v, null, $, "created");
      let H = !1;
      if (Y(m)) {
        H = $i(B, se) && $ && $.vnode.props && $.vnode.props.appear;
        const I = m.content.firstChild;
        H && se.beforeEnter(I), G(I, m, $), v.el = m = I;
      }
      if (D & 16 && // skip if element has innerHTML / textContent
      !(w && (w.innerHTML || w.textContent))) {
        let I = _(
          m.firstChild,
          v,
          m,
          $,
          B,
          A,
          S
        ), we = !1;
        for (; I; ) {
          Be = !0, process.env.NODE_ENV !== "production" && !we && (N(
            "Hydration children mismatch on",
            m,
            `
Server rendered element contains more child nodes than client vdom.`
          ), we = !0);
          const qt = I;
          I = I.nextSibling, l(qt);
        }
      } else
        D & 8 && m.textContent !== v.children && (Be = !0, process.env.NODE_ENV !== "production" && N(
          "Hydration text content mismatch on",
          m,
          `
  - rendered on server: ${m.textContent}
  - expected on client: ${v.children}`
        ), m.textContent = v.children);
      if (w)
        if (process.env.NODE_ENV !== "production" || ie || !S || k & 48)
          for (const I in w)
            process.env.NODE_ENV !== "production" && $a(m, I, w[I], v, $) && (Be = !0), (ie && (I.endsWith("value") || I === "indeterminate") || Kt(I) && !Pt(I) || // force hydrate v-bind with .prop modifiers
            I[0] === ".") && o(
              m,
              I,
              null,
              w[I],
              void 0,
              void 0,
              $
            );
        else
          w.onClick && o(
            m,
            "onClick",
            null,
            w.onClick,
            void 0,
            void 0,
            $
          );
      let K;
      (K = w && w.onVnodeBeforeMount) && Ce(K, $, v), X && Ie(v, null, $, "beforeMount"), ((K = w && w.onVnodeMounted) || X || H) && ai(() => {
        K && Ce(K, $, v), H && se.enter(m), X && Ie(v, null, $, "mounted");
      }, B);
    }
    return m.nextSibling;
  }, _ = (m, v, $, B, A, S, P) => {
    P = P || !!v.dynamicChildren;
    const w = v.children, k = w.length;
    let D = !1;
    for (let X = 0; X < k; X++) {
      const se = P ? w[X] : w[X] = De(w[X]);
      if (m)
        m = f(
          m,
          se,
          B,
          A,
          S,
          P
        );
      else {
        if (se.type === Vt && !se.children)
          continue;
        Be = !0, process.env.NODE_ENV !== "production" && !D && (N(
          "Hydration children mismatch on",
          $,
          `
Server rendered element contains fewer child nodes than client vdom.`
        ), D = !0), n(
          null,
          se,
          $,
          null,
          B,
          A,
          On($),
          S
        );
      }
    }
    return m;
  }, V = (m, v, $, B, A, S) => {
    const { slotScopeIds: P } = v;
    P && (A = A ? A.concat(P) : P);
    const w = i(m), k = _(
      s(m),
      v,
      w,
      $,
      B,
      A,
      S
    );
    return k && Xt(k) && k.data === "]" ? s(v.anchor = k) : (Be = !0, c(v.anchor = u("]"), w, k), k);
  }, M = (m, v, $, B, A, S) => {
    if (Be = !0, process.env.NODE_ENV !== "production" && N(
      `Hydration node mismatch:
- rendered on server:`,
      m,
      m.nodeType === 3 ? "(text)" : Xt(m) && m.data === "[" ? "(start of fragment)" : "",
      `
- expected on client:`,
      v.type
    ), v.el = null, S) {
      const k = z(m);
      for (; ; ) {
        const D = s(m);
        if (D && D !== k)
          l(D);
        else
          break;
      }
    }
    const P = s(m), w = i(m);
    return l(m), n(
      null,
      v,
      w,
      P,
      $,
      B,
      On(w),
      A
    ), P;
  }, z = (m, v = "[", $ = "]") => {
    let B = 0;
    for (; m; )
      if (m = s(m), m && Xt(m) && (m.data === v && B++, m.data === $)) {
        if (B === 0)
          return s(m);
        B--;
      }
    return m;
  }, G = (m, v, $) => {
    const B = v.parentNode;
    B && B.replaceChild(m, v);
    let A = $;
    for (; A; )
      A.vnode.el === v && (A.vnode.el = A.subTree.el = m), A = A.parent;
  }, Y = (m) => m.nodeType === 1 && m.tagName.toLowerCase() === "template";
  return [p, f];
}
function $a(e, t, n, o, r) {
  var s;
  let i, l, c, u;
  if (t === "class")
    c = e.getAttribute("class"), u = Gn(n), Ra(Xr(c || ""), Xr(u)) || (i = l = "class");
  else if (t === "style") {
    c = e.getAttribute("style") || "", u = ne(n) ? n : wl(zn(n));
    const p = Jr(c), f = Jr(u);
    if (o.dirs)
      for (const { dir: _, value: V } of o.dirs)
        _.name === "show" && !V && f.set("display", "none");
    const h = r == null ? void 0 : r.subTree;
    if (o === h || (h == null ? void 0 : h.type) === _e && h.children.includes(o)) {
      const _ = (s = r == null ? void 0 : r.getCssVars) == null ? void 0 : s.call(r);
      for (const V in _)
        f.set(`--${V}`, String(_[V]));
    }
    Ia(p, f) || (i = l = "style");
  } else
    (e instanceof SVGElement && $l(t) || e instanceof HTMLElement && (Dr(t) || Al(t))) && (Dr(t) ? (c = e.hasAttribute(t), u = tr(n)) : n == null ? (c = e.hasAttribute(t), u = !1) : (e.hasAttribute(t) ? c = e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" ? c = e.value : c = !1, u = Rl(n) ? String(n) : !1), c !== u && (i = "attribute", l = t));
  if (i) {
    const p = (_) => _ === !1 ? "(not rendered)" : `${l}="${_}"`, f = `Hydration ${i} mismatch on`, h = `
  - rendered on server: ${p(c)}
  - expected on client: ${p(u)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`;
    return N(f, e, h), !0;
  }
  return !1;
}
function Xr(e) {
  return new Set(e.trim().split(/\s+/));
}
function Ra(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Jr(e) {
  const t = /* @__PURE__ */ new Map();
  for (const n of e.split(";")) {
    let [o, r] = n.split(":");
    o = o == null ? void 0 : o.trim(), r = r == null ? void 0 : r.trim(), o && r && t.set(o, r);
  }
  return t;
}
function Ia(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const [n, o] of e)
    if (o !== t.get(n))
      return !1;
  return !0;
}
let Jt, ct;
function Ke(e, t) {
  e.appContext.config.performance && Bn() && ct.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Rc(e, t, Bn() ? ct.now() : Date.now());
}
function We(e, t) {
  if (e.appContext.config.performance && Bn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    ct.mark(o), ct.measure(
      `<${co(e, e.type)}> ${t}`,
      n,
      o
    ), ct.clearMarks(n), ct.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Ic(e, t, Bn() ? ct.now() : Date.now());
}
function Bn() {
  return Jt !== void 0 || (typeof window < "u" && window.performance ? (Jt = !0, ct = window.performance) : Jt = !1), Jt;
}
function Ma() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ne = ai;
function Pa(e) {
  return La(e, Aa);
}
function La(e, t) {
  Ma();
  const n = er();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && fr(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: r,
    patchProp: s,
    createElement: i,
    createText: l,
    createComment: c,
    setText: u,
    setElementText: p,
    parentNode: f,
    nextSibling: h,
    setScopeId: _ = ce,
    insertStaticContent: V
  } = e, M = (a, d, g, E = null, y = null, x = null, T = void 0, O = null, C = process.env.NODE_ENV !== "production" && Nt ? !1 : !!d.dynamicChildren) => {
    if (a === d)
      return;
    a && !gt(a, d) && (E = gn(a), Ze(a, y, x, !0), a = null), d.patchFlag === -2 && (C = !1, d.dynamicChildren = null);
    const { type: b, ref: R, shapeFlag: j } = d;
    switch (b) {
      case Vt:
        z(a, d, g, E);
        break;
      case ae:
        G(a, d, g, E);
        break;
      case Ht:
        a == null ? Y(d, g, E, T) : process.env.NODE_ENV !== "production" && m(a, d, g, T);
        break;
      case _e:
        X(
          a,
          d,
          g,
          E,
          y,
          x,
          T,
          O,
          C
        );
        break;
      default:
        j & 1 ? B(
          a,
          d,
          g,
          E,
          y,
          x,
          T,
          O,
          C
        ) : j & 6 ? se(
          a,
          d,
          g,
          E,
          y,
          x,
          T,
          O,
          C
        ) : j & 64 || j & 128 ? b.process(
          a,
          d,
          g,
          E,
          y,
          x,
          T,
          O,
          C,
          At
        ) : process.env.NODE_ENV !== "production" && N("Invalid VNode type:", b, `(${typeof b})`);
    }
    R != null && y && Un(R, a && a.ref, x, d || a, !d);
  }, z = (a, d, g, E) => {
    if (a == null)
      o(
        d.el = l(d.children),
        g,
        E
      );
    else {
      const y = d.el = a.el;
      d.children !== a.children && u(y, d.children);
    }
  }, G = (a, d, g, E) => {
    a == null ? o(
      d.el = c(d.children || ""),
      g,
      E
    ) : d.el = a.el;
  }, Y = (a, d, g, E) => {
    [a.el, a.anchor] = V(
      a.children,
      d,
      g,
      E,
      a.el,
      a.anchor
    );
  }, m = (a, d, g, E) => {
    if (d.children !== a.children) {
      const y = h(a.anchor);
      $(a), [d.el, d.anchor] = V(
        d.children,
        g,
        y,
        E
      );
    } else
      d.el = a.el, d.anchor = a.anchor;
  }, v = ({ el: a, anchor: d }, g, E) => {
    let y;
    for (; a && a !== d; )
      y = h(a), o(a, g, E), a = y;
    o(d, g, E);
  }, $ = ({ el: a, anchor: d }) => {
    let g;
    for (; a && a !== d; )
      g = h(a), r(a), a = g;
    r(d);
  }, B = (a, d, g, E, y, x, T, O, C) => {
    d.type === "svg" ? T = "svg" : d.type === "math" && (T = "mathml"), a == null ? A(
      d,
      g,
      E,
      y,
      x,
      T,
      O,
      C
    ) : w(
      a,
      d,
      y,
      x,
      T,
      O,
      C
    );
  }, A = (a, d, g, E, y, x, T, O) => {
    let C, b;
    const { props: R, shapeFlag: j, transition: L, dirs: W } = a;
    if (C = a.el = i(
      a.type,
      x,
      R && R.is,
      R
    ), j & 8 ? p(C, a.children) : j & 16 && P(
      a.children,
      C,
      null,
      E,
      y,
      Eo(a, x),
      T,
      O
    ), W && Ie(a, null, E, "created"), S(C, a, a.scopeId, T, E), R) {
      for (const ee in R)
        ee !== "value" && !Pt(ee) && s(
          C,
          ee,
          null,
          R[ee],
          x,
          a.children,
          E,
          y,
          Ue
        );
      "value" in R && s(C, "value", null, R.value, x), (b = R.onVnodeBeforeMount) && Ce(b, E, a);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(C, "__vnode", {
      value: a,
      enumerable: !1
    }), Object.defineProperty(C, "__vueParentComponent", {
      value: E,
      enumerable: !1
    })), W && Ie(a, null, E, "beforeMount");
    const Q = $i(y, L);
    Q && L.beforeEnter(C), o(C, d, g), ((b = R && R.onVnodeMounted) || Q || W) && Ne(() => {
      b && Ce(b, E, a), Q && L.enter(C), W && Ie(a, null, E, "mounted");
    }, y);
  }, S = (a, d, g, E, y) => {
    if (g && _(a, g), E)
      for (let x = 0; x < E.length; x++)
        _(a, E[x]);
    if (y) {
      let x = y.subTree;
      if (process.env.NODE_ENV !== "production" && x.patchFlag > 0 && x.patchFlag & 2048 && (x = pr(x.children) || x), d === x) {
        const T = y.vnode;
        S(
          a,
          T,
          T.scopeId,
          T.slotScopeIds,
          y.parent
        );
      }
    }
  }, P = (a, d, g, E, y, x, T, O, C = 0) => {
    for (let b = C; b < a.length; b++) {
      const R = a[b] = O ? it(a[b]) : De(a[b]);
      M(
        null,
        R,
        d,
        g,
        E,
        y,
        x,
        T,
        O
      );
    }
  }, w = (a, d, g, E, y, x, T) => {
    const O = d.el = a.el;
    let { patchFlag: C, dynamicChildren: b, dirs: R } = d;
    C |= a.patchFlag & 16;
    const j = a.props || te, L = d.props || te;
    let W;
    if (g && pt(g, !1), (W = L.onVnodeBeforeUpdate) && Ce(W, g, d, a), R && Ie(d, a, g, "beforeUpdate"), g && pt(g, !0), process.env.NODE_ENV !== "production" && Nt && (C = 0, T = !1, b = null), b ? (k(
      a.dynamicChildren,
      b,
      O,
      g,
      E,
      Eo(d, y),
      x
    ), process.env.NODE_ENV !== "production" && An(a, d)) : T || we(
      a,
      d,
      O,
      null,
      g,
      E,
      Eo(d, y),
      x,
      !1
    ), C > 0) {
      if (C & 16)
        D(
          O,
          d,
          j,
          L,
          g,
          E,
          y
        );
      else if (C & 2 && j.class !== L.class && s(O, "class", null, L.class, y), C & 4 && s(O, "style", j.style, L.style, y), C & 8) {
        const Q = d.dynamicProps;
        for (let ee = 0; ee < Q.length; ee++) {
          const re = Q[ee], de = j[re], Te = L[re];
          (Te !== de || re === "value") && s(
            O,
            re,
            de,
            Te,
            y,
            a.children,
            g,
            E,
            Ue
          );
        }
      }
      C & 1 && a.children !== d.children && p(O, d.children);
    } else
      !T && b == null && D(
        O,
        d,
        j,
        L,
        g,
        E,
        y
      );
    ((W = L.onVnodeUpdated) || R) && Ne(() => {
      W && Ce(W, g, d, a), R && Ie(d, a, g, "updated");
    }, E);
  }, k = (a, d, g, E, y, x, T) => {
    for (let O = 0; O < d.length; O++) {
      const C = a[O], b = d[O], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        C.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (C.type === _e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gt(C, b) || // - In the case of a component, it could contain anything.
        C.shapeFlag & 70) ? f(C.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          g
        )
      );
      M(
        C,
        b,
        R,
        null,
        E,
        y,
        x,
        T,
        !0
      );
    }
  }, D = (a, d, g, E, y, x, T) => {
    if (g !== E) {
      if (g !== te)
        for (const O in g)
          !Pt(O) && !(O in E) && s(
            a,
            O,
            g[O],
            null,
            T,
            d.children,
            y,
            x,
            Ue
          );
      for (const O in E) {
        if (Pt(O))
          continue;
        const C = E[O], b = g[O];
        C !== b && O !== "value" && s(
          a,
          O,
          b,
          C,
          T,
          d.children,
          y,
          x,
          Ue
        );
      }
      "value" in E && s(a, "value", g.value, E.value, T);
    }
  }, X = (a, d, g, E, y, x, T, O, C) => {
    const b = d.el = a ? a.el : l(""), R = d.anchor = a ? a.anchor : l("");
    let { patchFlag: j, dynamicChildren: L, slotScopeIds: W } = d;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Nt || j & 2048) && (j = 0, C = !1, L = null), W && (O = O ? O.concat(W) : W), a == null ? (o(b, g, E), o(R, g, E), P(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      g,
      R,
      y,
      x,
      T,
      O,
      C
    )) : j > 0 && j & 64 && L && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    a.dynamicChildren ? (k(
      a.dynamicChildren,
      L,
      g,
      y,
      x,
      T,
      O
    ), process.env.NODE_ENV !== "production" ? An(a, d) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (d.key != null || y && d === y.subTree) && An(
        a,
        d,
        !0
        /* shallow */
      )
    )) : we(
      a,
      d,
      g,
      R,
      y,
      x,
      T,
      O,
      C
    );
  }, se = (a, d, g, E, y, x, T, O, C) => {
    d.slotScopeIds = O, a == null ? d.shapeFlag & 512 ? y.ctx.activate(
      d,
      g,
      E,
      T,
      C
    ) : ie(
      d,
      g,
      E,
      y,
      x,
      T,
      C
    ) : H(a, d, C);
  }, ie = (a, d, g, E, y, x, T) => {
    const O = a.component = qa(
      a,
      E,
      y
    );
    if (process.env.NODE_ENV !== "production" && O.type.__hmrId && Oc(O), process.env.NODE_ENV !== "production" && (Sn(a), Ke(O, "mount")), pn(a) && (O.ctx.renderer = At), process.env.NODE_ENV !== "production" && Ke(O, "init"), Ga(O), process.env.NODE_ENV !== "production" && We(O, "init"), O.asyncDep) {
      if (y && y.registerDep(O, K), !a.el) {
        const C = O.subTree = me(ae);
        G(null, C, d, g);
      }
    } else
      K(
        O,
        a,
        d,
        g,
        y,
        x,
        T
      );
    process.env.NODE_ENV !== "production" && (Tn(), We(O, "mount"));
  }, H = (a, d, g) => {
    const E = d.component = a.component;
    if (jc(a, d, g))
      if (E.asyncDep && !E.asyncResolved) {
        process.env.NODE_ENV !== "production" && Sn(d), I(E, d, g), process.env.NODE_ENV !== "production" && Tn();
        return;
      } else
        E.next = d, Nc(E.update), E.effect.dirty = !0, E.update();
    else
      d.el = a.el, E.vnode = d;
  }, K = (a, d, g, E, y, x, T) => {
    const O = () => {
      if (a.isMounted) {
        let { next: R, bu: j, u: L, parent: W, vnode: Q } = a;
        {
          const $t = Ri(a);
          if ($t) {
            R && (R.el = Q.el, I(a, R, T)), $t.asyncDep.then(() => {
              a.isUnmounted || O();
            });
            return;
          }
        }
        let ee = R, re;
        process.env.NODE_ENV !== "production" && Sn(R || a.vnode), pt(a, !1), R ? (R.el = Q.el, I(a, R, T)) : R = Q, j && Yt(j), (re = R.props && R.props.onVnodeBeforeUpdate) && Ce(re, W, R, Q), pt(a, !0), process.env.NODE_ENV !== "production" && Ke(a, "render");
        const de = go(a);
        process.env.NODE_ENV !== "production" && We(a, "render");
        const Te = a.subTree;
        a.subTree = de, process.env.NODE_ENV !== "production" && Ke(a, "patch"), M(
          Te,
          de,
          // parent may have changed if it's in a teleport
          f(Te.el),
          // anchor may have changed if it's in a fragment
          gn(Te),
          a,
          y,
          x
        ), process.env.NODE_ENV !== "production" && We(a, "patch"), R.el = de.el, ee === null && Hc(a, de.el), L && Ne(L, y), (re = R.props && R.props.onVnodeUpdated) && Ne(
          () => Ce(re, W, R, Q),
          y
        ), process.env.NODE_ENV !== "production" && oi(a), process.env.NODE_ENV !== "production" && Tn();
      } else {
        let R;
        const { el: j, props: L } = d, { bm: W, m: Q, parent: ee } = a, re = kt(d);
        if (pt(a, !1), W && Yt(W), !re && (R = L && L.onVnodeBeforeMount) && Ce(R, ee, d), pt(a, !0), j && po) {
          const de = () => {
            process.env.NODE_ENV !== "production" && Ke(a, "render"), a.subTree = go(a), process.env.NODE_ENV !== "production" && We(a, "render"), process.env.NODE_ENV !== "production" && Ke(a, "hydrate"), po(
              j,
              a.subTree,
              a,
              y,
              null
            ), process.env.NODE_ENV !== "production" && We(a, "hydrate");
          };
          re ? d.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !a.isUnmounted && de()
          ) : de();
        } else {
          process.env.NODE_ENV !== "production" && Ke(a, "render");
          const de = a.subTree = go(a);
          process.env.NODE_ENV !== "production" && We(a, "render"), process.env.NODE_ENV !== "production" && Ke(a, "patch"), M(
            null,
            de,
            g,
            E,
            a,
            y,
            x
          ), process.env.NODE_ENV !== "production" && We(a, "patch"), d.el = de.el;
        }
        if (Q && Ne(Q, y), !re && (R = L && L.onVnodeMounted)) {
          const de = d;
          Ne(
            () => Ce(R, ee, de),
            y
          );
        }
        (d.shapeFlag & 256 || ee && kt(ee.vnode) && ee.vnode.shapeFlag & 256) && a.a && Ne(a.a, y), a.isMounted = !0, process.env.NODE_ENV !== "production" && Tc(a), d = g = E = null;
      }
    }, C = a.effect = new nr(
      O,
      ce,
      () => to(b),
      a.scope
      // track it in component's effect scope
    ), b = a.update = () => {
      C.dirty && C.run();
    };
    b.id = a.uid, pt(a, !0), process.env.NODE_ENV !== "production" && (C.onTrack = a.rtc ? (R) => Yt(a.rtc, R) : void 0, C.onTrigger = a.rtg ? (R) => Yt(a.rtg, R) : void 0, b.ownerInstance = a), b();
  }, I = (a, d, g) => {
    d.component = a;
    const E = a.vnode.props;
    a.vnode = d, a.next = null, ya(a, d.props, E, g), Va(a, d.children, g), Xe(), Mr(a), Je();
  }, we = (a, d, g, E, y, x, T, O, C = !1) => {
    const b = a && a.children, R = a ? a.shapeFlag : 0, j = d.children, { patchFlag: L, shapeFlag: W } = d;
    if (L > 0) {
      if (L & 128) {
        zt(
          b,
          j,
          g,
          E,
          y,
          x,
          T,
          O,
          C
        );
        return;
      } else if (L & 256) {
        qt(
          b,
          j,
          g,
          E,
          y,
          x,
          T,
          O,
          C
        );
        return;
      }
    }
    W & 8 ? (R & 16 && Ue(b, y, x), j !== b && p(g, j)) : R & 16 ? W & 16 ? zt(
      b,
      j,
      g,
      E,
      y,
      x,
      T,
      O,
      C
    ) : Ue(b, y, x, !0) : (R & 8 && p(g, ""), W & 16 && P(
      j,
      g,
      E,
      y,
      x,
      T,
      O,
      C
    ));
  }, qt = (a, d, g, E, y, x, T, O, C) => {
    a = a || Mt, d = d || Mt;
    const b = a.length, R = d.length, j = Math.min(b, R);
    let L;
    for (L = 0; L < j; L++) {
      const W = d[L] = C ? it(d[L]) : De(d[L]);
      M(
        a[L],
        W,
        g,
        null,
        y,
        x,
        T,
        O,
        C
      );
    }
    b > R ? Ue(
      a,
      y,
      x,
      !0,
      !1,
      j
    ) : P(
      d,
      g,
      E,
      y,
      x,
      T,
      O,
      C,
      j
    );
  }, zt = (a, d, g, E, y, x, T, O, C) => {
    let b = 0;
    const R = d.length;
    let j = a.length - 1, L = R - 1;
    for (; b <= j && b <= L; ) {
      const W = a[b], Q = d[b] = C ? it(d[b]) : De(d[b]);
      if (gt(W, Q))
        M(
          W,
          Q,
          g,
          null,
          y,
          x,
          T,
          O,
          C
        );
      else
        break;
      b++;
    }
    for (; b <= j && b <= L; ) {
      const W = a[j], Q = d[L] = C ? it(d[L]) : De(d[L]);
      if (gt(W, Q))
        M(
          W,
          Q,
          g,
          null,
          y,
          x,
          T,
          O,
          C
        );
      else
        break;
      j--, L--;
    }
    if (b > j) {
      if (b <= L) {
        const W = L + 1, Q = W < R ? d[W].el : E;
        for (; b <= L; )
          M(
            null,
            d[b] = C ? it(d[b]) : De(d[b]),
            g,
            Q,
            y,
            x,
            T,
            O,
            C
          ), b++;
      }
    } else if (b > L)
      for (; b <= j; )
        Ze(a[b], y, x, !0), b++;
    else {
      const W = b, Q = b, ee = /* @__PURE__ */ new Map();
      for (b = Q; b <= L; b++) {
        const ye = d[b] = C ? it(d[b]) : De(d[b]);
        ye.key != null && (process.env.NODE_ENV !== "production" && ee.has(ye.key) && N(
          "Duplicate keys found during update:",
          JSON.stringify(ye.key),
          "Make sure keys are unique."
        ), ee.set(ye.key, b));
      }
      let re, de = 0;
      const Te = L - Q + 1;
      let $t = !1, wr = 0;
      const Gt = new Array(Te);
      for (b = 0; b < Te; b++)
        Gt[b] = 0;
      for (b = W; b <= j; b++) {
        const ye = a[b];
        if (de >= Te) {
          Ze(ye, y, x, !0);
          continue;
        }
        let Re;
        if (ye.key != null)
          Re = ee.get(ye.key);
        else
          for (re = Q; re <= L; re++)
            if (Gt[re - Q] === 0 && gt(ye, d[re])) {
              Re = re;
              break;
            }
        Re === void 0 ? Ze(ye, y, x, !0) : (Gt[Re - Q] = b + 1, Re >= wr ? wr = Re : $t = !0, M(
          ye,
          d[Re],
          g,
          null,
          y,
          x,
          T,
          O,
          C
        ), de++);
      }
      const Or = $t ? Fa(Gt) : Mt;
      for (re = Or.length - 1, b = Te - 1; b >= 0; b--) {
        const ye = Q + b, Re = d[ye], xr = ye + 1 < R ? d[ye + 1].el : E;
        Gt[b] === 0 ? M(
          null,
          Re,
          g,
          xr,
          y,
          x,
          T,
          O,
          C
        ) : $t && (re < 0 || b !== Or[re] ? Tt(Re, g, xr, 2) : re--);
      }
    }
  }, Tt = (a, d, g, E, y = null) => {
    const { el: x, type: T, transition: O, children: C, shapeFlag: b } = a;
    if (b & 6) {
      Tt(a.component.subTree, d, g, E);
      return;
    }
    if (b & 128) {
      a.suspense.move(d, g, E);
      return;
    }
    if (b & 64) {
      T.move(a, d, g, At);
      return;
    }
    if (T === _e) {
      o(x, d, g);
      for (let j = 0; j < C.length; j++)
        Tt(C[j], d, g, E);
      o(a.anchor, d, g);
      return;
    }
    if (T === Ht) {
      v(a, d, g);
      return;
    }
    if (E !== 2 && b & 1 && O)
      if (E === 0)
        O.beforeEnter(x), o(x, d, g), Ne(() => O.enter(x), y);
      else {
        const { leave: j, delayLeave: L, afterLeave: W } = O, Q = () => o(x, d, g), ee = () => {
          j(x, () => {
            Q(), W && W();
          });
        };
        L ? L(x, Q, ee) : ee();
      }
    else
      o(x, d, g);
  }, Ze = (a, d, g, E = !1, y = !1) => {
    const {
      type: x,
      props: T,
      ref: O,
      children: C,
      dynamicChildren: b,
      shapeFlag: R,
      patchFlag: j,
      dirs: L
    } = a;
    if (O != null && Un(O, null, g, a, !0), R & 256) {
      d.ctx.deactivate(a);
      return;
    }
    const W = R & 1 && L, Q = !kt(a);
    let ee;
    if (Q && (ee = T && T.onVnodeBeforeUnmount) && Ce(ee, d, a), R & 6)
      fl(a.component, g, E);
    else {
      if (R & 128) {
        a.suspense.unmount(g, E);
        return;
      }
      W && Ie(a, null, d, "beforeUnmount"), R & 64 ? a.type.remove(
        a,
        d,
        g,
        y,
        At,
        E
      ) : b && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (x !== _e || j > 0 && j & 64) ? Ue(
        b,
        d,
        g,
        !1,
        !0
      ) : (x === _e && j & 384 || !y && R & 16) && Ue(C, d, g), E && ao(a);
    }
    (Q && (ee = T && T.onVnodeUnmounted) || W) && Ne(() => {
      ee && Ce(ee, d, a), W && Ie(a, null, d, "unmounted");
    }, g);
  }, ao = (a) => {
    const { type: d, el: g, anchor: E, transition: y } = a;
    if (d === _e) {
      process.env.NODE_ENV !== "production" && a.patchFlag > 0 && a.patchFlag & 2048 && y && !y.persisted ? a.children.forEach((T) => {
        T.type === ae ? r(T.el) : ao(T);
      }) : ul(g, E);
      return;
    }
    if (d === Ht) {
      $(a);
      return;
    }
    const x = () => {
      r(g), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (a.shapeFlag & 1 && y && !y.persisted) {
      const { leave: T, delayLeave: O } = y, C = () => T(g, x);
      O ? O(a.el, x, C) : C();
    } else
      x();
  }, ul = (a, d) => {
    let g;
    for (; a !== d; )
      g = h(a), r(a), a = g;
    r(d);
  }, fl = (a, d, g) => {
    process.env.NODE_ENV !== "production" && a.type.__hmrId && xc(a);
    const { bum: E, scope: y, update: x, subTree: T, um: O } = a;
    E && Yt(E), y.stop(), x && (x.active = !1, Ze(T, a, d, g)), O && Ne(O, d), Ne(() => {
      a.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && a.asyncDep && !a.asyncResolved && a.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve()), process.env.NODE_ENV !== "production" && $c(a);
  }, Ue = (a, d, g, E = !1, y = !1, x = 0) => {
    for (let T = x; T < a.length; T++)
      Ze(a[T], d, g, E, y);
  }, gn = (a) => a.shapeFlag & 6 ? gn(a.component.subTree) : a.shapeFlag & 128 ? a.suspense.next() : h(a.anchor || a.el);
  let uo = !1;
  const Nr = (a, d, g) => {
    a == null ? d._vnode && Ze(d._vnode, null, null, !0) : M(
      d._vnode || null,
      a,
      d,
      null,
      null,
      null,
      g
    ), uo || (uo = !0, Mr(), Ln(), uo = !1), d._vnode = a;
  }, At = {
    p: M,
    um: Ze,
    m: Tt,
    r: ao,
    mt: ie,
    mc: P,
    pc: we,
    pbc: k,
    n: gn,
    o: e
  };
  let fo, po;
  return t && ([fo, po] = t(
    At
  )), {
    render: Nr,
    hydrate: fo,
    createApp: ga(Nr, fo)
  };
}
function Eo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pt({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function $i(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function An(e, t, n = !1) {
  const o = e.children, r = t.children;
  if (F(o) && F(r))
    for (let s = 0; s < o.length; s++) {
      const i = o[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = it(r[s]), l.el = i.el), n || An(i, l)), l.type === Vt && (l.el = i.el), process.env.NODE_ENV !== "production" && l.type === ae && !l.el && (l.el = i.el);
    }
}
function Fa(e) {
  const t = e.slice(), n = [0];
  let o, r, s, i, l;
  const c = e.length;
  for (o = 0; o < c; o++) {
    const u = e[o];
    if (u !== 0) {
      if (r = n[n.length - 1], e[r] < u) {
        t[o] = r, n.push(o);
        continue;
      }
      for (s = 0, i = n.length - 1; s < i; )
        l = s + i >> 1, e[n[l]] < u ? s = l + 1 : i = l;
      u < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, i = n[s - 1]; s-- > 0; )
    n[s] = i, i = t[i];
  return n;
}
function Ri(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Ri(t);
}
const ka = (e) => e.__isTeleport, _e = Symbol.for("v-fgt"), Vt = Symbol.for("v-txt"), ae = Symbol.for("v-cmt"), Ht = Symbol.for("v-stc"), rn = [];
let $e = null;
function Ii(e = !1) {
  rn.push($e = e ? null : []);
}
function ja() {
  rn.pop(), $e = rn[rn.length - 1] || null;
}
let an = 1;
function Qr(e) {
  an += e;
}
function Mi(e) {
  return e.dynamicChildren = an > 0 ? $e || Mt : null, ja(), an > 0 && $e && $e.push(e), e;
}
function Uf(e, t, n, o, r, s) {
  return Mi(
    Fi(
      e,
      t,
      n,
      o,
      r,
      s,
      !0
    )
  );
}
function Pi(e, t, n, o, r) {
  return Mi(
    me(
      e,
      t,
      n,
      o,
      r,
      !0
    )
  );
}
function Ut(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gt(e, t) {
  return process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && Rt.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
}
const Ha = (...e) => ki(
  ...e
), Li = ({ key: e }) => e ?? null, $n = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ne(e) || fe(e) || U(e) ? { i: pe, r: e, k: t, f: !!n } : e : null);
function Fi(e, t = null, n = null, o = 0, r = null, s = e === _e ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Li(t),
    ref: t && $n(t),
    scopeId: oo,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: pe
  };
  return l ? (vr(c, n), s & 128 && e.normalize(c)) : n && (c.shapeFlag |= ne(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && N("VNode created with invalid key (NaN). VNode type:", c.type), an > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  $e && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && $e.push(c), c;
}
const me = process.env.NODE_ENV !== "production" ? Ha : ki;
function ki(e, t = null, n = null, o = 0, r = null, s = !1) {
  if ((!e || e === li) && (process.env.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = ae), Ut(e)) {
    const l = He(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vr(l, n), an > 0 && !s && $e && (l.shapeFlag & 6 ? $e[$e.indexOf(e)] = l : $e.push(l)), l.patchFlag |= -2, l;
  }
  if (Wi(e) && (e = e.__vccOpts), t) {
    t = Ua(t);
    let { class: l, style: c } = t;
    l && !ne(l) && (t.class = Gn(l)), Z(c) && (Mo(c) && !F(c) && (c = oe({}, c)), t.style = zn(c));
  }
  const i = ne(e) ? 1 : Uc(e) ? 128 : ka(e) ? 64 : Z(e) ? 4 : U(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && Mo(e) && (e = q(e), N(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Fi(
    e,
    t,
    n,
    o,
    r,
    i,
    s,
    !0
  );
}
function Ua(e) {
  return e ? Mo(e) || xi(e) ? oe({}, e) : e : null;
}
function He(e, t, n = !1, o = !1) {
  const { props: r, ref: s, patchFlag: i, children: l, transition: c } = e, u = t ? Ba(r || {}, t) : r, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && Li(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? F(s) ? s.concat($n(t)) : [s, $n(t)] : $n(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && F(l) ? l.map(ji) : l,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== _e ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && He(e.ssContent),
    ssFallback: e.ssFallback && He(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && (p.transition = c.clone(p)), p;
}
function ji(e) {
  const t = He(e);
  return F(e.children) && (t.children = e.children.map(ji)), t;
}
function Hi(e = " ", t = 0) {
  return me(Vt, null, e, t);
}
function Bf(e, t) {
  const n = me(Ht, null, e);
  return n.staticCount = t, n;
}
function Kf(e = "", t = !1) {
  return t ? (Ii(), Pi(ae, null, e)) : me(ae, null, e);
}
function De(e) {
  return e == null || typeof e == "boolean" ? me(ae) : F(e) ? me(
    _e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : typeof e == "object" ? it(e) : me(Vt, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : He(e);
}
function vr(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (F(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const r = t.default;
      r && (r._c && (r._d = !1), vr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = t._;
      !r && !xi(t) ? t._ctx = pe : r === 3 && pe && (pe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else
    U(t) ? (t = { default: t, _ctx: pe }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Hi(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ba(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const r in o)
      if (r === "class")
        t.class !== o.class && (t.class = Gn([t.class, o.class]));
      else if (r === "style")
        t.style = zn([t.style, o.style]);
      else if (Kt(r)) {
        const s = t[r], i = o[r];
        i && s !== i && !(F(s) && s.includes(i)) && (t[r] = s ? [].concat(s, i) : i);
      } else
        r !== "" && (t[r] = o[r]);
  }
  return t;
}
function Ce(e, t, n, o = null) {
  Ve(e, t, 7, [
    n,
    o
  ]);
}
const Ka = Ni();
let Wa = 0;
function qa(e, t, n) {
  const o = e.type, r = (t ? t.appContext : e.appContext) || Ka, s = {
    uid: Wa++,
    vnode: e,
    type: o,
    parent: t,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new Il(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(r.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Di(o, r),
    emitsOptions: si(o, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? s.ctx = sa(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Pc.bind(null, s), e.ce && e.ce(s), s;
}
let ue = null;
const hn = () => ue || pe;
let Kn, qo;
{
  const e = er(), t = (n, o) => {
    let r;
    return (r = e[n]) || (r = e[n] = []), r.push(o), (s) => {
      r.length > 1 ? r.forEach((i) => i(s)) : r[0](s);
    };
  };
  Kn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ue = n
  ), qo = t(
    "__VUE_SSR_SETTERS__",
    (n) => lo = n
  );
}
const mn = (e) => {
  const t = ue;
  return Kn(e), e.scope.on(), () => {
    e.scope.off(), Kn(t);
  };
}, Zr = () => {
  ue && ue.scope.off(), Kn(null);
}, za = /* @__PURE__ */ Se("slot,component");
function zo(e, { isNativeTag: t }) {
  (za(e) || t(e)) && N(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ui(e) {
  return e.vnode.shapeFlag & 4;
}
let lo = !1;
function Ga(e, t = !1) {
  t && qo(t);
  const { props: n, children: o } = e.vnode, r = Ui(e);
  _a(e, n, r, t), Da(e, o);
  const s = r ? Ya(e, t) : void 0;
  return t && qo(!1), s;
}
function Ya(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && zo(o.name, e.appContext.config), o.components) {
      const s = Object.keys(o.components);
      for (let i = 0; i < s.length; i++)
        zo(s[i], e.appContext.config);
    }
    if (o.directives) {
      const s = Object.keys(o.directives);
      for (let i = 0; i < s.length; i++)
        di(s[i]);
    }
    o.compilerOptions && Xa() && N(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, yi), process.env.NODE_ENV !== "production" && ia(e);
  const { setup: r } = o;
  if (r) {
    const s = e.setupContext = r.length > 1 ? Ki(e) : null, i = mn(e);
    Xe();
    const l = ze(
      r,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? Pe(e.props) : e.props,
        s
      ]
    );
    if (Je(), i(), Jo(l)) {
      if (l.then(Zr, Zr), t)
        return l.then((c) => {
          es(e, c, t);
        }).catch((c) => {
          fn(c, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const c = (n = o.name) != null ? n : "Anonymous";
        N(
          `Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      es(e, l, t);
  } else
    Bi(e, t);
}
function es(e, t, n) {
  U(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Z(t) ? (process.env.NODE_ENV !== "production" && Ut(t) && N(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Xs(t), process.env.NODE_ENV !== "production" && la(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && N(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Bi(e, n);
}
let Go;
const Xa = () => !Go;
function Bi(e, t, n) {
  const o = e.type;
  if (!e.render) {
    if (!t && Go && !o.render) {
      const r = o.template || mr(e).template;
      if (r) {
        process.env.NODE_ENV !== "production" && Ke(e, "compile");
        const { isCustomElement: s, compilerOptions: i } = e.appContext.config, { delimiters: l, compilerOptions: c } = o, u = oe(
          oe(
            {
              isCustomElement: s,
              delimiters: l
            },
            i
          ),
          c
        );
        o.render = Go(r, u), process.env.NODE_ENV !== "production" && We(e, "compile");
      }
    }
    e.render = o.render || ce;
  }
  {
    const r = mn(e);
    Xe();
    try {
      ua(e);
    } finally {
      Je(), r();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === ce && !t && (o.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : N("Component is missing template or render function."));
}
const ts = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return kn(), ge(e, "get", ""), e[t];
  },
  set() {
    return N("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return N("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ge(e, "get", ""), e[t];
  }
};
function Ja(e) {
  return e.slotsProxy || (e.slotsProxy = new Proxy(e.slots, {
    get(t, n) {
      return ge(e, "get", "$slots"), t[n];
    }
  }));
}
function Ki(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && N("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (F(n) ? o = "array" : fe(n) && (o = "ref")), o !== "object" && N(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, ts));
      },
      get slots() {
        return Ja(e);
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, ts),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function _r(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(Xs(Vn(e.exposed)), {
      get(t, n) {
        if (n in t)
          return t[n];
        if (n in wt)
          return wt[n](e);
      },
      has(t, n) {
        return n in t || n in wt;
      }
    }));
}
const Qa = /(?:^|[-_])(\w)/g, Za = (e) => e.replace(Qa, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Er(e, t = !0) {
  return U(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function co(e, t, n = !1) {
  let o = Er(t);
  if (!o && t.__file) {
    const r = t.__file.match(/([^/\\]+)\.\w+$/);
    r && (o = r[1]);
  }
  if (!o && e && e.parent) {
    const r = (s) => {
      for (const i in s)
        if (s[i] === t)
          return i;
    };
    o = r(
      e.components || e.parent.type.components
    ) || r(e.appContext.components);
  }
  return o ? Za(o) : n ? "App" : "Anonymous";
}
function Wi(e) {
  return U(e) && "__vccOpts" in e;
}
const le = (e, t) => {
  const n = sc(e, t, lo);
  if (process.env.NODE_ENV !== "production") {
    const o = hn();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Yo(e, t, n) {
  const o = arguments.length;
  return o === 2 ? Z(t) && !F(t) ? Ut(t) ? me(e, null, [t]) : me(e, t) : me(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && Ut(n) && (n = [n]), me(e, t, n));
}
function eu() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, r = {
    header(f) {
      return Z(f) ? f.__isVue ? ["div", e, "VueInstance"] : fe(f) ? [
        "div",
        {},
        ["span", e, p(f)],
        "<",
        l(f.value),
        ">"
      ] : Lt(f) ? [
        "div",
        {},
        ["span", e, yt(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${Ct(f) ? " (readonly)" : ""}`
      ] : Ct(f) ? [
        "div",
        {},
        ["span", e, yt(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...s(f.$)
        ];
    }
  };
  function s(f) {
    const h = [];
    f.type.props && f.props && h.push(i("props", q(f.props))), f.setupState !== te && h.push(i("setup", f.setupState)), f.data !== te && h.push(i("data", q(f.data)));
    const _ = c(f, "computed");
    _ && h.push(i("computed", _));
    const V = c(f, "inject");
    return V && h.push(i("injected", V)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), h;
  }
  function i(f, h) {
    return h = oe({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((_) => [
          "div",
          {},
          ["span", o, _ + ": "],
          l(h[_], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, h = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : Z(f) ? ["object", { object: h ? q(f) : f }] : ["span", n, String(f)];
  }
  function c(f, h) {
    const _ = f.type;
    if (U(_))
      return;
    const V = {};
    for (const M in f.ctx)
      u(_, M, h) && (V[M] = f.ctx[M]);
    return V;
  }
  function u(f, h, _) {
    const V = f[_];
    if (F(V) && V.includes(h) || Z(V) && h in V || f.extends && u(f.extends, h, _) || f.mixins && f.mixins.some((M) => u(M, h, _)))
      return !0;
  }
  function p(f) {
    return yt(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(r) : window.devtoolsFormatters = [r];
}
const ns = "3.4.27", ut = process.env.NODE_ENV !== "production" ? N : ce;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const tu = "http://www.w3.org/2000/svg", nu = "http://www.w3.org/1998/Math/MathML", lt = typeof document < "u" ? document : null, os = lt && /* @__PURE__ */ lt.createElement("template"), ou = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const r = t === "svg" ? lt.createElementNS(tu, e) : t === "mathml" ? lt.createElementNS(nu, e) : lt.createElement(e, n ? { is: n } : void 0);
    return e === "select" && o && o.multiple != null && r.setAttribute("multiple", o.multiple), r;
  },
  createText: (e) => lt.createTextNode(e),
  createComment: (e) => lt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, r, s) {
    const i = n ? n.previousSibling : t.lastChild;
    if (r && (r === s || r.nextSibling))
      for (; t.insertBefore(r.cloneNode(!0), n), !(r === s || !(r = r.nextSibling)); )
        ;
    else {
      os.innerHTML = o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e;
      const l = os.content;
      if (o === "svg" || o === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, tt = "transition", Qt = "animation", un = Symbol("_vtc"), qi = (e, { slots: t }) => Yo(Gc, ru(e), t);
qi.displayName = "Transition";
const zi = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
};
qi.props = /* @__PURE__ */ oe(
  {},
  pi,
  zi
);
const ht = (e, t = []) => {
  F(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, rs = (e) => e ? F(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ru(e) {
  const t = {};
  for (const D in e)
    D in zi || (t[D] = e[D]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: o,
    duration: r,
    enterFromClass: s = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: l = `${n}-enter-to`,
    appearFromClass: c = s,
    appearActiveClass: u = i,
    appearToClass: p = l,
    leaveFromClass: f = `${n}-leave-from`,
    leaveActiveClass: h = `${n}-leave-active`,
    leaveToClass: _ = `${n}-leave-to`
  } = e, V = su(r), M = V && V[0], z = V && V[1], {
    onBeforeEnter: G,
    onEnter: Y,
    onEnterCancelled: m,
    onLeave: v,
    onLeaveCancelled: $,
    onBeforeAppear: B = G,
    onAppear: A = Y,
    onAppearCancelled: S = m
  } = t, P = (D, X, se) => {
    mt(D, X ? p : l), mt(D, X ? u : i), se && se();
  }, w = (D, X) => {
    D._isLeaving = !1, mt(D, f), mt(D, _), mt(D, h), X && X();
  }, k = (D) => (X, se) => {
    const ie = D ? A : Y, H = () => P(X, D, se);
    ht(ie, [X, H]), ss(() => {
      mt(X, D ? c : s), nt(X, D ? p : l), rs(ie) || is(X, o, M, H);
    });
  };
  return oe(t, {
    onBeforeEnter(D) {
      ht(G, [D]), nt(D, s), nt(D, i);
    },
    onBeforeAppear(D) {
      ht(B, [D]), nt(D, c), nt(D, u);
    },
    onEnter: k(!1),
    onAppear: k(!0),
    onLeave(D, X) {
      D._isLeaving = !0;
      const se = () => w(D, X);
      nt(D, f), nt(D, h), cu(), ss(() => {
        D._isLeaving && (mt(D, f), nt(D, _), rs(v) || is(D, o, z, se));
      }), ht(v, [D, se]);
    },
    onEnterCancelled(D) {
      P(D, !1), ht(m, [D]);
    },
    onAppearCancelled(D) {
      P(D, !0), ht(S, [D]);
    },
    onLeaveCancelled(D) {
      w(D), ht($, [D]);
    }
  });
}
function su(e) {
  if (e == null)
    return null;
  if (Z(e))
    return [yo(e.enter), yo(e.leave)];
  {
    const t = yo(e);
    return [t, t];
  }
}
function yo(e) {
  const t = _l(e);
  return process.env.NODE_ENV !== "production" && _c(t, "<transition> explicit duration"), t;
}
function nt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[un] || (e[un] = /* @__PURE__ */ new Set())).add(t);
}
function mt(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const n = e[un];
  n && (n.delete(t), n.size || (e[un] = void 0));
}
function ss(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let iu = 0;
function is(e, t, n, o) {
  const r = e._endId = ++iu, s = () => {
    r === e._endId && o();
  };
  if (n)
    return setTimeout(s, n);
  const { type: i, timeout: l, propCount: c } = lu(e, t);
  if (!i)
    return o();
  const u = i + "end";
  let p = 0;
  const f = () => {
    e.removeEventListener(u, h), s();
  }, h = (_) => {
    _.target === e && ++p >= c && f();
  };
  setTimeout(() => {
    p < c && f();
  }, l + 1), e.addEventListener(u, h);
}
function lu(e, t) {
  const n = window.getComputedStyle(e), o = (V) => (n[V] || "").split(", "), r = o(`${tt}Delay`), s = o(`${tt}Duration`), i = ls(r, s), l = o(`${Qt}Delay`), c = o(`${Qt}Duration`), u = ls(l, c);
  let p = null, f = 0, h = 0;
  t === tt ? i > 0 && (p = tt, f = i, h = s.length) : t === Qt ? u > 0 && (p = Qt, f = u, h = c.length) : (f = Math.max(i, u), p = f > 0 ? i > u ? tt : Qt : null, h = p ? p === tt ? s.length : c.length : 0);
  const _ = p === tt && /\b(transform|all)(,|$)/.test(
    o(`${tt}Property`).toString()
  );
  return {
    type: p,
    timeout: f,
    propCount: h,
    hasTransform: _
  };
}
function ls(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, o) => cs(n) + cs(e[o])));
}
function cs(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function cu() {
  return document.body.offsetHeight;
}
function au(e, t, n) {
  const o = e[un];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const as = Symbol("_vod"), uu = Symbol("_vsh");
process.env.NODE_ENV;
const fu = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), du = /(^|;)\s*display\s*:/;
function pu(e, t, n) {
  const o = e.style, r = ne(n);
  let s = !1;
  if (n && !r) {
    if (t)
      if (ne(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && Rn(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && Rn(o, i, "");
    for (const i in n)
      i === "display" && (s = !0), Rn(o, i, n[i]);
  } else if (r) {
    if (t !== n) {
      const i = o[fu];
      i && (n += ";" + i), o.cssText = n, s = du.test(n);
    }
  } else
    t && e.removeAttribute("style");
  as in e && (e[as] = s ? o.display : "", e[uu] && (o.display = "none"));
}
const hu = /[^\\];\s*$/, us = /\s*!important$/;
function Rn(e, t, n) {
  if (F(n))
    n.forEach((o) => Rn(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && hu.test(n) && ut(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = mu(e, t);
    us.test(n) ? e.setProperty(
      je(o),
      n.replace(us, ""),
      "important"
    ) : e[o] = n;
  }
}
const fs = ["Webkit", "Moz", "ms"], bo = {};
function mu(e, t) {
  const n = bo[t];
  if (n)
    return n;
  let o = ke(t);
  if (o !== "filter" && o in e)
    return bo[t] = o;
  o = xt(o);
  for (let r = 0; r < fs.length; r++) {
    const s = fs[r] + o;
    if (s in e)
      return bo[t] = s;
  }
  return t;
}
const ds = "http://www.w3.org/1999/xlink";
function gu(e, t, n, o, r) {
  if (o && t.startsWith("xlink:"))
    n == null ? e.removeAttributeNS(ds, t.slice(6, t.length)) : e.setAttributeNS(ds, t, n);
  else {
    const s = Tl(t);
    n == null || s && !tr(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n);
  }
}
function vu(e, t, n, o, r, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    o && i(o, r, s), e[t] = n ?? "";
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const u = l === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n ?? "";
    (u !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = tr(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch (u) {
    process.env.NODE_ENV !== "production" && !c && ut(
      `Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${n} is invalid.`,
      u
    );
  }
  c && e.removeAttribute(t);
}
function _u(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Eu(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const ps = Symbol("_vei");
function yu(e, t, n, o, r = null) {
  const s = e[ps] || (e[ps] = {}), i = s[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? ms(o, t) : o;
  else {
    const [l, c] = bu(t);
    if (o) {
      const u = s[t] = Ou(
        process.env.NODE_ENV !== "production" ? ms(o, t) : o,
        r
      );
      _u(e, l, u, c);
    } else
      i && (Eu(e, l, i, c), s[t] = void 0);
  }
}
const hs = /(?:Once|Passive|Capture)$/;
function bu(e) {
  let t;
  if (hs.test(e)) {
    t = {};
    let o;
    for (; o = e.match(hs); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : je(e.slice(2)), t];
}
let No = 0;
const Nu = /* @__PURE__ */ Promise.resolve(), wu = () => No || (Nu.then(() => No = 0), No = Date.now());
function Ou(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ve(
      xu(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = wu(), n;
}
function ms(e, t) {
  return U(e) || F(e) ? e : (ut(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ce);
}
function xu(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (r) => !r._stopped && o && o(r)
    );
  } else
    return t;
}
const gs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Cu = (e, t, n, o, r, s, i, l, c) => {
  const u = r === "svg";
  t === "class" ? au(e, o, u) : t === "style" ? pu(e, n, o) : Kt(t) ? Mn(t) || yu(e, t, n, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Du(e, t, o, u)) ? vu(
    e,
    t,
    o,
    s,
    i,
    l,
    c
  ) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), gu(e, t, o, u));
};
function Du(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && gs(t) && U(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return gs(t) && ne(n) ? !1 : t in e;
}
const Vu = ["ctrl", "shift", "alt", "meta"], Su = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Vu.some((n) => e[`${n}Key`] && !t.includes(n))
}, Wf = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (r, ...s) => {
    for (let i = 0; i < t.length; i++) {
      const l = Su[t[i]];
      if (l && l(r, t))
        return;
    }
    return e(r, ...s);
  });
}, Tu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, qf = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return n[o] || (n[o] = (r) => {
    if (!("key" in r))
      return;
    const s = je(r.key);
    if (t.some((i) => i === s || Tu[i] === s))
      return e(r);
  });
}, Au = /* @__PURE__ */ oe({ patchProp: Cu }, ou);
let wo, vs = !1;
function $u() {
  return wo = vs ? wo : Pa(Au), vs = !0, wo;
}
const zf = (...e) => {
  const t = $u().createApp(...e);
  process.env.NODE_ENV !== "production" && (Iu(t), Mu(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const r = Pu(o);
    if (r)
      return n(r, !0, Ru(r));
  }, t;
};
function Ru(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Iu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Dl(t) || Vl(t) || Sl(t),
    writable: !1
  });
}
function Mu(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ut(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ut(o), n;
      },
      set() {
        ut(o);
      }
    });
  }
}
function Pu(e) {
  if (ne(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && ut(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ut(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Lu() {
  eu();
}
process.env.NODE_ENV !== "production" && Lu();
const Gf = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Fu = window.__VP_SITE_DATA__;
function yr(e) {
  return As() ? (Pl(e), !0) : !1;
}
function ft(e) {
  return typeof e == "function" ? e() : Ys(e);
}
const Gi = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ku = Object.prototype.toString, ju = (e) => ku.call(e) === "[object Object]", Yi = () => {
}, _s = /* @__PURE__ */ Hu();
function Hu() {
  var e, t;
  return Gi && ((e = window == null ? void 0 : window.navigator) == null ? void 0 : e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
}
function Uu(e, t) {
  function n(...o) {
    return new Promise((r, s) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(r).catch(s);
    });
  }
  return n;
}
const Xi = (e) => e();
function Bu(e = Xi) {
  const t = he(!0);
  function n() {
    t.value = !1;
  }
  function o() {
    t.value = !0;
  }
  const r = (...s) => {
    t.value && e(...s);
  };
  return { isActive: Qn(t), pause: n, resume: o, eventFilter: r };
}
function Ku(e) {
  return hn();
}
function Ji(...e) {
  if (e.length !== 1)
    return dc(...e);
  const t = e[0];
  return typeof t == "function" ? Qn(ac(() => ({ get: t, set: Yi }))) : he(t);
}
function Wu(e, t, n = {}) {
  const {
    eventFilter: o = Xi,
    ...r
  } = n;
  return Fe(
    e,
    Uu(
      o,
      t
    ),
    r
  );
}
function qu(e, t, n = {}) {
  const {
    eventFilter: o,
    ...r
  } = n, { eventFilter: s, pause: i, resume: l, isActive: c } = Bu(o);
  return { stop: Wu(
    e,
    t,
    {
      ...r,
      eventFilter: s
    }
  ), pause: i, resume: l, isActive: c };
}
function br(e, t = !0, n) {
  Ku() ? Wt(e, n) : t ? e() : eo(e);
}
function Qi(e) {
  var t;
  const n = ft(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Ye = Gi ? window : void 0;
function Bt(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = Ye) : [t, n, o, r] = e, !t)
    return Yi;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], i = () => {
    s.forEach((p) => p()), s.length = 0;
  }, l = (p, f, h, _) => (p.addEventListener(f, h, _), () => p.removeEventListener(f, h, _)), c = Fe(
    () => [Qi(t), ft(r)],
    ([p, f]) => {
      if (i(), !p)
        return;
      const h = ju(f) ? { ...f } : f;
      s.push(
        ...n.flatMap((_) => o.map((V) => l(p, _, V, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    c(), i();
  };
  return yr(u), u;
}
function zu(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Yf(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: r = Ye,
    eventName: s = "keydown",
    passive: i = !1,
    dedupe: l = !1
  } = o, c = zu(t);
  return Bt(r, s, (p) => {
    p.repeat && ft(l) || c(p) && n(p);
  }, i);
}
function Gu() {
  const e = he(!1), t = hn();
  return t && Wt(() => {
    e.value = !0;
  }, t), e;
}
function Yu(e) {
  const t = Gu();
  return le(() => (t.value, !!e()));
}
function Zi(e, t = {}) {
  const { window: n = Ye } = t, o = Yu(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const s = he(!1), i = (u) => {
    s.value = u.matches;
  }, l = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", i) : r.removeListener(i));
  }, c = ui(() => {
    o.value && (l(), r = n.matchMedia(ft(e)), "addEventListener" in r ? r.addEventListener("change", i) : r.addListener(i), s.value = r.matches);
  });
  return yr(() => {
    c(), l(), r = void 0;
  }), s;
}
const xn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Cn = "__vueuse_ssr_handlers__", Xu = /* @__PURE__ */ Ju();
function Ju() {
  return Cn in xn || (xn[Cn] = xn[Cn] || {}), xn[Cn];
}
function el(e, t) {
  return Xu[e] || t;
}
function Qu(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const Zu = {
  boolean: {
    read: (e) => e === "true",
    write: (e) => String(e)
  },
  object: {
    read: (e) => JSON.parse(e),
    write: (e) => JSON.stringify(e)
  },
  number: {
    read: (e) => Number.parseFloat(e),
    write: (e) => String(e)
  },
  any: {
    read: (e) => e,
    write: (e) => String(e)
  },
  string: {
    read: (e) => e,
    write: (e) => String(e)
  },
  map: {
    read: (e) => new Map(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e.entries()))
  },
  set: {
    read: (e) => new Set(JSON.parse(e)),
    write: (e) => JSON.stringify(Array.from(e))
  },
  date: {
    read: (e) => new Date(e),
    write: (e) => e.toISOString()
  }
}, Es = "vueuse-storage";
function ef(e, t, n, o = {}) {
  var r;
  const {
    flush: s = "pre",
    deep: i = !0,
    listenToStorageChanges: l = !0,
    writeDefaults: c = !0,
    mergeDefaults: u = !1,
    shallow: p,
    window: f = Ye,
    eventFilter: h,
    onError: _ = (w) => {
      console.error(w);
    },
    initOnMounted: V
  } = o, M = (p ? zs : he)(typeof t == "function" ? t() : t);
  if (!n)
    try {
      n = el("getDefaultStorage", () => {
        var w;
        return (w = Ye) == null ? void 0 : w.localStorage;
      })();
    } catch (w) {
      _(w);
    }
  if (!n)
    return M;
  const z = ft(t), G = Qu(z), Y = (r = o.serializer) != null ? r : Zu[G], { pause: m, resume: v } = qu(
    M,
    () => B(M.value),
    { flush: s, deep: i, eventFilter: h }
  );
  f && l && br(() => {
    Bt(f, "storage", S), Bt(f, Es, P), V && S();
  }), V || S();
  function $(w, k) {
    f && f.dispatchEvent(new CustomEvent(Es, {
      detail: {
        key: e,
        oldValue: w,
        newValue: k,
        storageArea: n
      }
    }));
  }
  function B(w) {
    try {
      const k = n.getItem(e);
      if (w == null)
        $(k, null), n.removeItem(e);
      else {
        const D = Y.write(w);
        k !== D && (n.setItem(e, D), $(k, D));
      }
    } catch (k) {
      _(k);
    }
  }
  function A(w) {
    const k = w ? w.newValue : n.getItem(e);
    if (k == null)
      return c && z != null && n.setItem(e, Y.write(z)), z;
    if (!w && u) {
      const D = Y.read(k);
      return typeof u == "function" ? u(D, z) : G === "object" && !Array.isArray(D) ? { ...z, ...D } : D;
    } else
      return typeof k != "string" ? k : Y.read(k);
  }
  function S(w) {
    if (!(w && w.storageArea !== n)) {
      if (w && w.key == null) {
        M.value = z;
        return;
      }
      if (!(w && w.key !== e)) {
        m();
        try {
          (w == null ? void 0 : w.newValue) !== Y.write(M.value) && (M.value = A(w));
        } catch (k) {
          _(k);
        } finally {
          w ? eo(v) : v();
        }
      }
    }
  }
  function P(w) {
    S(w.detail);
  }
  return M;
}
function tl(e) {
  return Zi("(prefers-color-scheme: dark)", e);
}
function tf(e = {}) {
  const {
    selector: t = "html",
    attribute: n = "class",
    initialValue: o = "auto",
    window: r = Ye,
    storage: s,
    storageKey: i = "vueuse-color-scheme",
    listenToStorageChanges: l = !0,
    storageRef: c,
    emitAuto: u,
    disableTransition: p = !0
  } = e, f = {
    auto: "",
    light: "light",
    dark: "dark",
    ...e.modes || {}
  }, h = tl({ window: r }), _ = le(() => h.value ? "dark" : "light"), V = c || (i == null ? Ji(o) : ef(i, o, s, { window: r, listenToStorageChanges: l })), M = le(() => V.value === "auto" ? _.value : V.value), z = el(
    "updateHTMLAttrs",
    (v, $, B) => {
      const A = typeof v == "string" ? r == null ? void 0 : r.document.querySelector(v) : Qi(v);
      if (!A)
        return;
      let S;
      if (p && (S = r.document.createElement("style"), S.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), r.document.head.appendChild(S)), $ === "class") {
        const P = B.split(/\s/g);
        Object.values(f).flatMap((w) => (w || "").split(/\s/g)).filter(Boolean).forEach((w) => {
          P.includes(w) ? A.classList.add(w) : A.classList.remove(w);
        });
      } else
        A.setAttribute($, B);
      p && (r.getComputedStyle(S).opacity, document.head.removeChild(S));
    }
  );
  function G(v) {
    var $;
    z(t, n, ($ = f[v]) != null ? $ : v);
  }
  function Y(v) {
    e.onChanged ? e.onChanged(v, G) : G(v);
  }
  Fe(M, Y, { flush: "post", immediate: !0 }), br(() => Y(M.value));
  const m = le({
    get() {
      return u ? V.value : M.value;
    },
    set(v) {
      V.value = v;
    }
  });
  try {
    return Object.assign(m, { store: V, system: _, state: M });
  } catch {
    return m;
  }
}
function nf(e = {}) {
  const {
    valueDark: t = "dark",
    valueLight: n = "",
    window: o = Ye
  } = e, r = tf({
    ...e,
    onChanged: (l, c) => {
      var u;
      e.onChanged ? (u = e.onChanged) == null || u.call(e, l === "dark", c, l) : c(l);
    },
    modes: {
      dark: t,
      light: n
    }
  }), s = le(() => r.system ? r.system.value : tl({ window: o }).value ? "dark" : "light");
  return le({
    get() {
      return r.value === "dark";
    },
    set(l) {
      const c = l ? "dark" : "light";
      s.value === c ? r.value = "auto" : r.value = c;
    }
  });
}
function Oo(e) {
  return typeof Window < "u" && e instanceof Window ? e.document.documentElement : typeof Document < "u" && e instanceof Document ? e.documentElement : e;
}
function nl(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight)
    return !0;
  {
    const n = e.parentNode;
    return !n || n.tagName === "BODY" ? !1 : nl(n);
  }
}
function of(e) {
  const t = e || window.event, n = t.target;
  return nl(n) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1);
}
const xo = /* @__PURE__ */ new WeakMap();
function Xf(e, t = !1) {
  const n = he(t);
  let o = null, r = "";
  Fe(Ji(e), (l) => {
    const c = Oo(ft(l));
    if (c) {
      const u = c;
      if (xo.get(u) || xo.set(u, u.style.overflow), u.style.overflow !== "hidden" && (r = u.style.overflow), u.style.overflow === "hidden")
        return n.value = !0;
      if (n.value)
        return u.style.overflow = "hidden";
    }
  }, {
    immediate: !0
  });
  const s = () => {
    const l = Oo(ft(e));
    !l || n.value || (_s && (o = Bt(
      l,
      "touchmove",
      (c) => {
        of(c);
      },
      { passive: !1 }
    )), l.style.overflow = "hidden", n.value = !0);
  }, i = () => {
    const l = Oo(ft(e));
    !l || !n.value || (_s && (o == null || o()), l.style.overflow = r, xo.delete(l), n.value = !1);
  };
  return yr(i), le({
    get() {
      return n.value;
    },
    set(l) {
      l ? s() : i();
    }
  });
}
function Jf(e = {}) {
  const { window: t = Ye, behavior: n = "auto" } = e;
  if (!t)
    return {
      x: he(0),
      y: he(0)
    };
  const o = he(t.scrollX), r = he(t.scrollY), s = le({
    get() {
      return o.value;
    },
    set(l) {
      scrollTo({ left: l, behavior: n });
    }
  }), i = le({
    get() {
      return r.value;
    },
    set(l) {
      scrollTo({ top: l, behavior: n });
    }
  });
  return Bt(
    t,
    "scroll",
    () => {
      o.value = t.scrollX, r.value = t.scrollY;
    },
    {
      capture: !1,
      passive: !0
    }
  ), { x: s, y: i };
}
function Qf(e = {}) {
  const {
    window: t = Ye,
    initialWidth: n = Number.POSITIVE_INFINITY,
    initialHeight: o = Number.POSITIVE_INFINITY,
    listenOrientation: r = !0,
    includeScrollbar: s = !0
  } = e, i = he(n), l = he(o), c = () => {
    t && (s ? (i.value = t.innerWidth, l.value = t.innerHeight) : (i.value = t.document.documentElement.clientWidth, l.value = t.document.documentElement.clientHeight));
  };
  if (c(), br(c), Bt("resize", c, { passive: !0 }), r) {
    const u = Zi("(orientation: portrait)");
    Fe(u, () => c());
  }
  return { width: i, height: l };
}
var Co = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ol = /^(?:[a-z]+:|\/\/)/i, rf = "vitepress-theme-appearance", sf = /#.*$/, lf = /[?#].*$/, cf = /(?:(^|\/)index)?\.(?:md|html)$/, ve = typeof document < "u", rl = {
  relativePath: "404.md",
  filePath: "",
  title: "404",
  description: "Not Found",
  headers: [],
  frontmatter: { sidebar: !1, layout: "page" },
  lastUpdated: 0,
  isNotFound: !0
};
function af(e, t, n = !1) {
  if (t === void 0)
    return !1;
  if (e = ys(`/${e}`), n)
    return new RegExp(t).test(e);
  if (ys(t) !== e)
    return !1;
  const o = t.match(sf);
  return o ? (ve ? location.hash : "") === o[0] : !0;
}
function ys(e) {
  return decodeURI(e).replace(lf, "").replace(cf, "$1");
}
function uf(e) {
  return ol.test(e);
}
function ff(e, t) {
  return Object.keys((e == null ? void 0 : e.locales) || {}).find((n) => n !== "root" && !uf(n) && af(t, `/${n}/`, !0)) || "root";
}
function df(e, t) {
  var o, r, s, i, l, c, u;
  const n = ff(e, t);
  return Object.assign({}, e, {
    localeIndex: n,
    lang: ((o = e.locales[n]) == null ? void 0 : o.lang) ?? e.lang,
    dir: ((r = e.locales[n]) == null ? void 0 : r.dir) ?? e.dir,
    title: ((s = e.locales[n]) == null ? void 0 : s.title) ?? e.title,
    titleTemplate: ((i = e.locales[n]) == null ? void 0 : i.titleTemplate) ?? e.titleTemplate,
    description: ((l = e.locales[n]) == null ? void 0 : l.description) ?? e.description,
    head: il(e.head, ((c = e.locales[n]) == null ? void 0 : c.head) ?? []),
    themeConfig: {
      ...e.themeConfig,
      ...(u = e.locales[n]) == null ? void 0 : u.themeConfig
    }
  });
}
function sl(e, t) {
  const n = t.title || e.title, o = t.titleTemplate ?? e.titleTemplate;
  if (typeof o == "string" && o.includes(":title"))
    return o.replace(/:title/g, n);
  const r = pf(e.title, o);
  return n === r.slice(3) ? n : `${n}${r}`;
}
function pf(e, t) {
  return t === !1 ? "" : t === !0 || t === void 0 ? ` | ${e}` : e === t ? "" : ` | ${t}`;
}
function hf(e, t) {
  const [n, o] = t;
  if (n !== "meta")
    return !1;
  const r = Object.entries(o)[0];
  return r == null ? !1 : e.some(([s, i]) => s === n && i[r[0]] === r[1]);
}
function il(e, t) {
  return [...e.filter((n) => !hf(t, n)), ...t];
}
const mf = /[\u0000-\u001F"#$&*+,:;<=>?[\]^`{|}\u007F]/g, gf = /^[a-z]:/i;
function bs(e) {
  const t = gf.exec(e), n = t ? t[0] : "";
  return n + e.slice(n.length).replace(mf, "_").replace(/(^|\/)_+(?=[^/]*$)/, "$1");
}
const Do = /* @__PURE__ */ new Set();
function vf(e) {
  var n;
  if (Do.size === 0) {
    const o = typeof process == "object" && ((n = process.env) == null ? void 0 : n.VITE_EXTRA_EXTENSIONS) || (Co == null ? void 0 : Co.VITE_EXTRA_EXTENSIONS) || "";
    ("3g2,3gp,aac,ai,apng,au,avif,bin,bmp,cer,class,conf,crl,css,csv,dll,doc,eps,epub,exe,gif,gz,ics,ief,jar,jpe,jpeg,jpg,js,json,jsonld,m4a,man,mid,midi,mjs,mov,mp2,mp3,mp4,mpe,mpeg,mpg,mpp,oga,ogg,ogv,ogx,opus,otf,p10,p7c,p7m,p7s,pdf,png,ps,qt,roff,rtf,rtx,ser,svg,t,tif,tiff,tr,ts,tsv,ttf,txt,vtt,wav,weba,webm,webp,woff,woff2,xhtml,xml,yaml,yml,zip" + (o && typeof o == "string" ? "," + o : "")).split(",").forEach((r) => Do.add(r));
  }
  const t = e.split(".").pop();
  return t == null || !Do.has(t.toLowerCase());
}
const _f = Symbol(), Ot = zs(Fu);
function Zf(e) {
  const t = le(() => df(Ot.value, e.data.relativePath)), n = t.value.appearance, o = n === "force-dark" ? he(!0) : n ? nf({
    storageKey: rf,
    initialValue: () => typeof n == "string" ? n : "auto",
    ...typeof n == "object" ? n : {}
  }) : he(!1), r = he(ve ? location.hash : "");
  return ve && window.addEventListener("hashchange", () => {
    r.value = location.hash;
  }), Fe(() => e.data, () => {
    r.value = ve ? location.hash : "";
  }), {
    site: t,
    theme: le(() => t.value.themeConfig),
    page: le(() => e.data),
    frontmatter: le(() => e.data.frontmatter),
    params: le(() => e.data.params),
    lang: le(() => t.value.lang),
    dir: le(() => e.data.frontmatter.dir || t.value.dir),
    localeIndex: le(() => t.value.localeIndex || "root"),
    title: le(() => sl(t.value, e.data)),
    description: le(() => e.data.description || t.value.description),
    isDark: o,
    hash: le(() => r.value)
  };
}
function Ef() {
  const e = jt(_f);
  if (!e)
    throw new Error("vitepress data not properly injected in app");
  return e;
}
function yf(e, t) {
  return `${e}${t}`.replace(/\/+/g, "/");
}
function Ns(e) {
  return ol.test(e) || !e.startsWith("/") ? e : yf(Ot.value.base, e);
}
function bf(e) {
  let t = e.replace(/\.html$/, "");
  if (t = decodeURIComponent(t), t = t.replace(/\/$/, "/index"), ve) {
    const n = "/";
    t = bs(t.slice(n.length).replace(/\//g, "_") || "index") + ".md";
    let o = __VP_HASH_MAP__[t.toLowerCase()];
    if (o || (t = t.endsWith("_index.md") ? t.slice(0, -9) + ".md" : t.slice(0, -3) + "_index.md", o = __VP_HASH_MAP__[t.toLowerCase()]), !o)
      return null;
    t = `${n}assets/${t}.${o}.js`;
  } else
    t = `./${bs(t.slice(1).replace(/\//g, "_"))}.md.js`;
  return t;
}
let In = [];
function ed(e) {
  In.push(e), io(() => {
    In = In.filter((t) => t !== e);
  });
}
function Nf() {
  let e = Ot.value.scrollOffset, t = 0, n = 24;
  if (typeof e == "object" && "padding" in e && (n = e.padding, e = e.selector), typeof e == "number")
    t = e;
  else if (typeof e == "string")
    t = ws(e, n);
  else if (Array.isArray(e))
    for (const o of e) {
      const r = ws(o, n);
      if (r) {
        t = r;
        break;
      }
    }
  return t;
}
function ws(e, t) {
  const n = document.querySelector(e);
  if (!n)
    return 0;
  const o = n.getBoundingClientRect().bottom;
  return o < 0 ? 0 : o + t;
}
const wf = Symbol(), ll = "http://a.com", Of = () => ({
  path: "/",
  component: null,
  data: rl
});
function td(e, t) {
  const n = Jn(Of()), o = {
    route: n,
    go: r
  };
  async function r(l = ve ? location.href : "/") {
    var c, u;
    l = Vo(l), await ((c = o.onBeforeRouteChange) == null ? void 0 : c.call(o, l)) !== !1 && (ve && l !== Vo(location.href) && (history.replaceState({ scrollPosition: window.scrollY }, ""), history.pushState({}, "", l)), await i(l), await ((u = o.onAfterRouteChanged) == null ? void 0 : u.call(o, l)));
  }
  let s = null;
  async function i(l, c = 0, u = !1) {
    var h;
    if (await ((h = o.onBeforePageLoad) == null ? void 0 : h.call(o, l)) === !1)
      return;
    const p = new URL(l, ll), f = s = p.pathname;
    try {
      let _ = await e(f);
      if (!_)
        throw new Error(`Page not found: ${f}`);
      if (s === f) {
        s = null;
        const { default: V, __pageData: M } = _;
        if (!V)
          throw new Error(`Invalid route component: ${V}`);
        n.path = ve ? f : Ns(f), n.component = Vn(V), n.data = Vn(M), ve && eo(() => {
          let z = Ot.value.base + M.relativePath.replace(/(?:(^|\/)index)?\.md$/, "$1");
          if (!Ot.value.cleanUrls && !z.endsWith("/") && (z += ".html"), z !== p.pathname && (p.pathname = z, l = z + p.search + p.hash, history.replaceState({}, "", l)), p.hash && !c) {
            let G = null;
            try {
              G = document.getElementById(decodeURIComponent(p.hash).slice(1));
            } catch (Y) {
              console.warn(Y);
            }
            if (G) {
              Os(G, p.hash);
              return;
            }
          }
          window.scrollTo(0, c);
        });
      }
    } catch (_) {
      if (!/fetch|Page not found/.test(_.message) && !/^\/404(\.html|\/)?$/.test(l) && console.error(_), !u)
        try {
          const V = await fetch(Ot.value.base + "hashmap.json");
          window.__VP_HASH_MAP__ = await V.json(), await i(l, c, !0);
          return;
        } catch {
        }
      if (s === f) {
        s = null, n.path = ve ? f : Ns(f), n.component = t ? Vn(t) : null;
        const V = ve ? f.replace(/(^|\/)$/, "$1index").replace(/(\.html)?$/, ".md").replace(/^\//, "") : "404.md";
        n.data = { ...rl, relativePath: V };
      }
    }
  }
  return ve && (history.state === null && history.replaceState({}, ""), window.addEventListener("click", (l) => {
    if (l.target.closest("button"))
      return;
    const u = l.target.closest("a");
    if (u && !u.closest(".vp-raw") && (u instanceof SVGElement || !u.download)) {
      const { target: p } = u, { href: f, origin: h, pathname: _, hash: V, search: M } = new URL(u.href instanceof SVGAnimatedString ? u.href.animVal : u.href, u.baseURI), z = new URL(location.href);
      !l.ctrlKey && !l.shiftKey && !l.altKey && !l.metaKey && !p && h === z.origin && vf(_) && (l.preventDefault(), _ === z.pathname && M === z.search ? (V !== z.hash && (history.pushState({}, "", f), window.dispatchEvent(new HashChangeEvent("hashchange", {
        oldURL: z.href,
        newURL: f
      }))), V ? Os(u, V, u.classList.contains("header-anchor")) : window.scrollTo(0, 0)) : r(f));
    }
  }, { capture: !0 }), window.addEventListener("popstate", async (l) => {
    var c;
    l.state !== null && (await i(Vo(location.href), l.state && l.state.scrollPosition || 0), (c = o.onAfterRouteChanged) == null || c.call(o, location.href));
  }), window.addEventListener("hashchange", (l) => {
    l.preventDefault();
  })), o;
}
function xf() {
  const e = jt(wf);
  if (!e)
    throw new Error("useRouter() is called without provider.");
  return e;
}
function cl() {
  return xf().route;
}
function Os(e, t, n = !1) {
  let o = null;
  try {
    o = e.classList.contains("header-anchor") ? e : document.getElementById(decodeURIComponent(t).slice(1));
  } catch (r) {
    console.warn(r);
  }
  if (o) {
    let r = function() {
      !n || Math.abs(i - window.scrollY) > window.innerHeight ? window.scrollTo(0, i) : window.scrollTo({ left: 0, top: i, behavior: "smooth" });
    };
    const s = parseInt(window.getComputedStyle(o).paddingTop, 10), i = window.scrollY + o.getBoundingClientRect().top - Nf() + s;
    requestAnimationFrame(r);
  }
}
function Vo(e) {
  const t = new URL(e, ll);
  return t.pathname = t.pathname.replace(/(^|\/)index(\.html)?$/, "$1"), Ot.value.cleanUrls ? t.pathname = t.pathname.replace(/\.html$/, "") : !t.pathname.endsWith("/") && !t.pathname.endsWith(".html") && (t.pathname += ".html"), t.pathname + t.search + t.hash;
}
const So = () => In.forEach((e) => e()), nd = /* @__PURE__ */ gi({
  name: "VitePressContent",
  props: {
    as: { type: [Object, String], default: "div" }
  },
  setup(e) {
    const t = cl(), { site: n } = Ef();
    return () => Yo(e.as, n.value.contentProps ?? { style: { position: "relative" } }, [
      t.component ? Yo(t.component, {
        onVnodeMounted: So,
        onVnodeUpdated: So,
        onVnodeUnmounted: So
      }) : "404 Page Not Found"
    ]);
  }
}), od = /* @__PURE__ */ gi({
  setup(e, { slots: t }) {
    const n = he(!1);
    return Wt(() => {
      n.value = !0;
    }), () => n.value && t.default ? t.default() : null;
  }
});
function rd() {
  ve && window.addEventListener("click", (e) => {
    var n;
    const t = e.target;
    if (t.matches(".vp-code-group input")) {
      const o = (n = t.parentElement) == null ? void 0 : n.parentElement;
      if (!o)
        return;
      const r = Array.from(o.querySelectorAll("input")).indexOf(t);
      if (r < 0)
        return;
      const s = o.querySelector(".blocks");
      if (!s)
        return;
      const i = Array.from(s.children).find((u) => u.classList.contains("active"));
      if (!i)
        return;
      const l = s.children[r];
      if (!l || i === l)
        return;
      i.classList.remove("active"), l.classList.add("active");
      const c = o == null ? void 0 : o.querySelector(`label[for="${t.id}"]`);
      c == null || c.scrollIntoView({ block: "nearest" });
    }
  });
}
function sd() {
  if (ve) {
    const e = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (t) => {
      var o;
      const n = t.target;
      if (n.matches('div[class*="language-"] > button.copy')) {
        const r = n.parentElement, s = (o = n.nextElementSibling) == null ? void 0 : o.nextElementSibling;
        if (!r || !s)
          return;
        const i = /language-(shellscript|shell|bash|sh|zsh)/.test(r.className), l = [".vp-copy-ignore", ".diff.remove"], c = s.cloneNode(!0);
        c.querySelectorAll(l.join(",")).forEach((p) => p.remove());
        let u = c.textContent || "";
        i && (u = u.replace(/^ *(\$|>) /gm, "").trim()), Cf(u).then(() => {
          n.classList.add("copied"), clearTimeout(e.get(n));
          const p = setTimeout(() => {
            n.classList.remove("copied"), n.blur(), e.delete(n);
          }, 2e3);
          e.set(n, p);
        });
      }
    });
  }
}
async function Cf(e) {
  try {
    return navigator.clipboard.writeText(e);
  } catch {
    const t = document.createElement("textarea"), n = document.activeElement;
    t.value = e, t.setAttribute("readonly", ""), t.style.contain = "strict", t.style.position = "absolute", t.style.left = "-9999px", t.style.fontSize = "12pt";
    const o = document.getSelection(), r = o ? o.rangeCount > 0 && o.getRangeAt(0) : null;
    document.body.appendChild(t), t.select(), t.selectionStart = 0, t.selectionEnd = e.length, document.execCommand("copy"), document.body.removeChild(t), r && (o.removeAllRanges(), o.addRange(r)), n && n.focus();
  }
}
function id(e, t) {
  let n = !0, o = [];
  const r = (s) => {
    if (n) {
      n = !1, s.forEach((l) => {
        const c = To(l);
        for (const u of document.head.children)
          if (u.isEqualNode(c)) {
            o.push(u);
            return;
          }
      });
      return;
    }
    const i = s.map(To);
    o.forEach((l, c) => {
      const u = i.findIndex((p) => p == null ? void 0 : p.isEqualNode(l ?? null));
      u !== -1 ? delete i[u] : (l == null || l.remove(), delete o[c]);
    }), i.forEach((l) => l && document.head.appendChild(l)), o = [...o, ...i].filter(Boolean);
  };
  ui(() => {
    const s = e.data, i = t.value, l = s && s.description, c = s && s.frontmatter.head || [], u = sl(i, s);
    u !== document.title && (document.title = u);
    const p = l || i.description;
    let f = document.querySelector("meta[name=description]");
    f ? f.getAttribute("content") !== p && f.setAttribute("content", p) : To(["meta", { name: "description", content: p }]), r(il(i.head, Vf(c)));
  });
}
function To([e, t, n]) {
  const o = document.createElement(e);
  for (const r in t)
    o.setAttribute(r, t[r]);
  return n && (o.innerHTML = n), e === "script" && !t.async && (o.async = !1), o;
}
function Df(e) {
  return e[0] === "meta" && e[1] && e[1].name === "description";
}
function Vf(e) {
  return e.filter((t) => !Df(t));
}
const Ao = /* @__PURE__ */ new Set(), al = () => document.createElement("link"), Sf = (e) => {
  const t = al();
  t.rel = "prefetch", t.href = e, document.head.appendChild(t);
}, Tf = (e) => {
  const t = new XMLHttpRequest();
  t.open("GET", e, t.withCredentials = !0), t.send();
};
let Dn;
const Af = ve && (Dn = al()) && Dn.relList && Dn.relList.supports && Dn.relList.supports("prefetch") ? Sf : Tf;
function ld() {
  if (!ve || !window.IntersectionObserver)
    return;
  let e;
  if ((e = navigator.connection) && (e.saveData || /2g/.test(e.effectiveType)))
    return;
  const t = window.requestIdleCallback || setTimeout;
  let n = null;
  const o = () => {
    n && n.disconnect(), n = new IntersectionObserver((s) => {
      s.forEach((i) => {
        if (i.isIntersecting) {
          const l = i.target;
          n.unobserve(l);
          const { pathname: c } = l;
          if (!Ao.has(c)) {
            Ao.add(c);
            const u = bf(c);
            u && Af(u);
          }
        }
      });
    }), t(() => {
      document.querySelectorAll("#app a").forEach((s) => {
        const { hostname: i, pathname: l } = new URL(s.href instanceof SVGAnimatedString ? s.href.animVal : s.href, s.baseURI), c = l.match(/\.\w+$/);
        c && c[0] !== ".html" || // only prefetch same tab navigation, since a new tab will load
        // the lean js chunk instead.
        s.target !== "_blank" && // only prefetch inbound links
        i === location.hostname && (l !== location.pathname ? n.observe(s) : Ao.add(l));
      });
    });
  };
  Wt(o);
  const r = cl();
  Fe(() => r.path, o), io(() => {
    n && n.disconnect();
  });
}
export {
  Wf as $,
  Lf as A,
  ea as B,
  Nf as C,
  Mf as D,
  Ff as E,
  _e as F,
  zs as G,
  ed as H,
  me as I,
  Pf as J,
  ol as K,
  cl as L,
  Ba as M,
  jt as N,
  Qf as O,
  zn as P,
  Yf as Q,
  eo as R,
  Jf as S,
  qi as T,
  ve as U,
  Qn as V,
  Xf as W,
  va as X,
  jf as Y,
  qf as Z,
  Gf as _,
  Hi as a,
  Hf as a0,
  Bf as a1,
  id as a2,
  wf as a3,
  Zf as a4,
  _f as a5,
  nd as a6,
  od as a7,
  Ot as a8,
  zf as a9,
  td as aa,
  bf as ab,
  ld as ac,
  sd as ad,
  rd as ae,
  Yo as af,
  Pi as b,
  Uf as c,
  gi as d,
  Kf as e,
  vf as f,
  Ns as g,
  le as h,
  uf as i,
  Fi as j,
  Ys as k,
  If as l,
  af as m,
  Gn as n,
  Ii as o,
  Rf as p,
  Zi as q,
  kf as r,
  he as s,
  $f as t,
  Ef as u,
  Fe as v,
  Lc as w,
  ui as x,
  Wt as y,
  io as z
};
