var Hexin;

var v_saf;!function(){var n=Function.toString,t=[],i=[],o=[].indexOf.bind(t),e=[].push.bind(t),r=[].push.bind(i);function u(n,t){return-1==o(n)&&(e(n),r(`function ${t||n.name||""}() { [native code] }`)),n}Object.defineProperty(Function.prototype,"toString",{enumerable:!1,configurable:!0,writable:!0,value:function(){return"function"==typeof this&&i[o(this)]||n.call(this)}}),u(Function.prototype.toString,"toString"),v_saf=u}();


function _inherits(t, e) {
  t.prototype = Object.create(e.prototype, {
    constructor: { value: t, writable: !0, configurable: !0 }
  }), e && Object.setPrototypeOf(t, e) }
Object.defineProperty(Object.prototype, Symbol.toStringTag, {
  get() { return Object.getPrototypeOf(this).constructor.name }
});
var v_new_toggle = true
Object.freeze(console)//only for javascript-obfuscator anti console debug.
var v_console_logger = console.log
var v_console_log = function(){if (!v_new_toggle){ v_console_logger.apply(this, arguments) }}
var v_random = (function() { var seed = 276951438; return function random() { return seed = (seed * 9301 + 49297) % 233280, (seed / 233280)} })()
var v_new = function(v){var temp=v_new_toggle; v_new_toggle = true; var r = new v; v_new_toggle = temp; return r}


EventTarget = v_saf(function EventTarget(){;})
Navigator = v_saf(function Navigator(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };this._plugins = typeof PluginArray=='undefined'?[]:v_new(PluginArray); this._mimeTypes = typeof MimeTypeArray=='undefined'?[]:v_new(MimeTypeArray)})
PluginArray = v_saf(function PluginArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].filename="internal-pdf-viewer";this[0].length=2;this[0].name="PDF Viewer";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].filename="internal-pdf-viewer";this[1].length=2;this[1].name="Chrome PDF Viewer";
  this[2]=v_new(Plugin);this[2].description="Portable Document Format";this[2].filename="internal-pdf-viewer";this[2].length=2;this[2].name="Chromium PDF Viewer";
  this[3]=v_new(Plugin);this[3].description="Portable Document Format";this[3].filename="internal-pdf-viewer";this[3].length=2;this[3].name="Microsoft Edge PDF Viewer";
  this[4]=v_new(Plugin);this[4].description="Portable Document Format";this[4].filename="internal-pdf-viewer";this[4].length=2;this[4].name="WebKit built-in PDF";})
Plugin = v_saf(function Plugin(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCollection = v_saf(function HTMLCollection(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
DOMTokenList = v_saf(function DOMTokenList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
NodeList = v_saf(function NodeList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
CSSStyleDeclaration = v_saf(function CSSStyleDeclaration(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Option = v_saf(function Option(){;})
PerformanceTiming = v_saf(function PerformanceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Image = v_saf(function Image(){;return v_new(HTMLImageElement)})
DOMRectReadOnly = v_saf(function DOMRectReadOnly(){;})
SVGRect = v_saf(function SVGRect(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Event = v_saf(function Event(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Node = v_saf(function Node(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Node, EventTarget)
Screen = v_saf(function Screen(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Screen, EventTarget)
Performance = v_saf(function Performance(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Performance, EventTarget)
XMLHttpRequestEventTarget = v_saf(function XMLHttpRequestEventTarget(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(XMLHttpRequestEventTarget, EventTarget)
CustomEvent = v_saf(function CustomEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(CustomEvent, Event)
UIEvent = v_saf(function UIEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(UIEvent, Event)
Document = v_saf(function Document(){;}); _inherits(Document, Node)
Element = v_saf(function Element(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Element, Node)
XMLHttpRequest = v_saf(function XMLHttpRequest(){;}); _inherits(XMLHttpRequest, XMLHttpRequestEventTarget)
MouseEvent = v_saf(function MouseEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(MouseEvent, UIEvent)
HTMLElement = v_saf(function HTMLElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLElement, Element)
SVGElement = v_saf(function SVGElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(SVGElement, Element)
PointerEvent = v_saf(function PointerEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PointerEvent, MouseEvent)
HTMLInputElement = v_saf(function HTMLInputElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLInputElement, HTMLElement)
HTMLOptionElement = v_saf(function HTMLOptionElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLOptionElement, HTMLElement)
HTMLFormElement = v_saf(function HTMLFormElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLFormElement, HTMLElement)
HTMLSelectElement = v_saf(function HTMLSelectElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSelectElement, HTMLElement)
HTMLImageElement = v_saf(function HTMLImageElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLImageElement, HTMLElement)
HTMLScriptElement = v_saf(function HTMLScriptElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLScriptElement, HTMLElement)
HTMLIFrameElement = v_saf(function HTMLIFrameElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLIFrameElement, HTMLElement)
Window = v_saf(function Window(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(Window, EventTarget)
HTMLDocument = v_saf(function HTMLDocument(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };Object.defineProperty(this, 'location', {get(){return location}})}); _inherits(HTMLDocument, Document)
HTMLHeadElement = v_saf(function HTMLHeadElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLHeadElement, HTMLElement)
HTMLBodyElement = v_saf(function HTMLBodyElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLBodyElement, HTMLElement)
MimeTypeArray = v_saf(function MimeTypeArray(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  this[0]=v_new(Plugin);this[0].description="Portable Document Format";this[0].enabledPlugin={"0":{},"1":{}};this[0].suffixes="pdf";this[0].type="application/pdf";
  this[1]=v_new(Plugin);this[1].description="Portable Document Format";this[1].enabledPlugin={"0":{},"1":{}};this[1].suffixes="pdf";this[1].type="text/pdf";})
MimeType = v_saf(function MimeType(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Location = v_saf(function Location(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLCanvasElement = v_saf(function HTMLCanvasElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLCanvasElement, HTMLElement)
WebGLRenderingContext = v_saf(function WebGLRenderingContext(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };
  function WebGLBuffer(){}
  function WebGLProgram(){}
  function WebGLShader(){}
  this._toggle = {}
  this.createBuffer = function(){ v_console_log('  [*] WebGLRenderingContext -> createBuffer[func]'); return v_new(WebGLBuffer) }
  this.createProgram = function(){ v_console_log('  [*] WebGLRenderingContext -> createProgram[func]'); return v_new(WebGLProgram) }
  this.createShader = function(){ v_console_log('  [*] WebGLRenderingContext -> createShader[func]'); return v_new(WebGLShader) }
  this.getSupportedExtensions = function(){
    v_console_log('  [*] WebGLRenderingContext -> getSupportedExtensions[func]')
    return [
      "ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_float_blend", "EXT_frag_depth",
      "EXT_shader_texture_lod", "EXT_texture_compression_bptc", "EXT_texture_compression_rgtc", "EXT_texture_filter_anisotropic", "WEBKIT_EXT_texture_filter_anisotropic", "EXT_sRGB",
      "KHR_parallel_shader_compile", "OES_element_index_uint", "OES_fbo_render_mipmap", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear",
      "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_s3tc",
      "WEBKIT_WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_debug_renderer_info", "WEBGL_debug_shaders",
      "WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture","WEBGL_draw_buffers","WEBGL_lose_context","WEBKIT_WEBGL_lose_context","WEBGL_multi_draw",
    ]
  }
  var self = this
  this.getExtension = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getExtension[func]:', key)
    class WebGLDebugRendererInfo{
      get UNMASKED_VENDOR_WEBGL(){self._toggle[37445]=1;return 37445}
      get UNMASKED_RENDERER_WEBGL(){self._toggle[37446]=1;return 37446}
    }
    class EXTTextureFilterAnisotropic{}
    class WebGLLoseContext{
      loseContext(){}
      restoreContext(){}
    }
    if (key == 'WEBGL_debug_renderer_info'){ var r = new WebGLDebugRendererInfo }
    if (key == 'EXT_texture_filter_anisotropic'){ var r = new EXTTextureFilterAnisotropic }
    if (key == 'WEBGL_lose_context'){ var r = new WebGLLoseContext }
    else{ var r = new WebGLDebugRendererInfo }
    return r
  }
  this.getParameter = function(key){
    v_console_log('  [*] WebGLRenderingContext -> getParameter[func]:', key)
    if (this._toggle[key]){
      if (key == 37445){ return "Google Inc. (NVIDIA)" }
      if (key == 37446){ return "ANGLE (NVIDIA, NVIDIA GeForce GTX 1050 Ti Direct3D11 vs_5_0 ps_5_0, D3D11-27.21.14.5671)" }
    }else{
      if (key == 33902){ return new Float32Array([1,1]) }
      if (key == 33901){ return new Float32Array([1,1024]) }
      if (key == 35661){ return 32 }
      if (key == 34047){ return 16 }
      if (key == 34076){ return 16384 }
      if (key == 36349){ return 1024 }
      if (key == 34024){ return 16384 }
      if (key == 34930){ return 16 }
      if (key == 3379){ return 16384 }
      if (key == 36348){ return 30 }
      if (key == 34921){ return 16 }
      if (key == 35660){ return 16 }
      if (key == 36347){ return 4095 }
      if (key == 3386){ return new Int32Array([32767, 32767]) }
      if (key == 3410){ return 8 }
      if (key == 7937){ return "WebKit WebGL" }
      if (key == 35724){ return "WebGL GLSL ES 1.0 (OpenGL ES GLSL ES 1.0 Chromium)" }
      if (key == 3415){ return 0 }
      if (key == 7936){ return "WebKit" }
      if (key == 7938){ return "WebGL 1.0 (OpenGL ES 2.0 Chromium)" }
      if (key == 3411){ return 8 }
      if (key == 3412){ return 8 }
      if (key == 3413){ return 8 }
      if (key == 3414){ return 24 }
      return null
    }
  }
  this.getContextAttributes = function(){
    v_console_log('  [*] WebGLRenderingContext -> getContextAttributes[func]')
    return {
      alpha: true,
      antialias: true,
      depth: true,
      desynchronized: false,
      failIfMajorPerformanceCaveat: false,
      powerPreference: "default",
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      stencil: false,
      xrCompatible: false,
    }
  }
  this.getShaderPrecisionFormat = function(a,b){
    v_console_log('  [*] WebGLRenderingContext -> getShaderPrecisionFormat[func]')
    function WebGLShaderPrecisionFormat(){}
    var r1 = v_new(WebGLShaderPrecisionFormat)
    r1.rangeMin = 127
    r1.rangeMax = 127
    r1.precision = 23
    var r2 = v_new(WebGLShaderPrecisionFormat)
    r2.rangeMin = 31
    r2.rangeMax = 30
    r2.precision = 0
    if (a == 35633 && b == 36338){ return r1 } if (a == 35633 && b == 36337){ return r1 } if (a == 35633 && b == 36336){ return r1 }
    if (a == 35633 && b == 36341){ return r2 } if (a == 35633 && b == 36340){ return r2 } if (a == 35633 && b == 36339){ return r2 }
    if (a == 35632 && b == 36338){ return r1 } if (a == 35632 && b == 36337){ return r1 } if (a == 35632 && b == 36336){ return r1 }
    if (a == 35632 && b == 36341){ return r2 } if (a == 35632 && b == 36340){ return r2 } if (a == 35632 && b == 36339){ return r2 }
    throw Error('getShaderPrecisionFormat')
  }
  v_saf(this.createBuffer, 'createBuffer')
  v_saf(this.createProgram, 'createProgram')
  v_saf(this.createShader, 'createShader')
  v_saf(this.getSupportedExtensions, 'getSupportedExtensions')
  v_saf(this.getExtension, 'getExtension')
  v_saf(this.getParameter, 'getParameter')
  v_saf(this.getContextAttributes, 'getContextAttributes')
  v_saf(this.getShaderPrecisionFormat, 'getShaderPrecisionFormat')})
CanvasRenderingContext2D = v_saf(function CanvasRenderingContext2D(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceEntry = v_saf(function PerformanceEntry(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceElementTiming = v_saf(function PerformanceElementTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceElementTiming, PerformanceEntry)
PerformanceEventTiming = v_saf(function PerformanceEventTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceEventTiming, PerformanceEntry)
PerformanceLongTaskTiming = v_saf(function PerformanceLongTaskTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceLongTaskTiming, PerformanceEntry)
PerformanceMark = v_saf(function PerformanceMark(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMark, PerformanceEntry)
PerformanceMeasure = v_saf(function PerformanceMeasure(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceMeasure, PerformanceEntry)
PerformanceNavigation = v_saf(function PerformanceNavigation(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceResourceTiming = v_saf(function PerformanceResourceTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceResourceTiming, PerformanceEntry)
PerformanceNavigationTiming = v_saf(function PerformanceNavigationTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformanceNavigationTiming, PerformanceResourceTiming)
PerformanceObserver = v_saf(function PerformanceObserver(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformanceObserverEntryList = v_saf(function PerformanceObserverEntryList(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
PerformancePaintTiming = v_saf(function PerformancePaintTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(PerformancePaintTiming, PerformanceEntry)
PerformanceServerTiming = v_saf(function PerformanceServerTiming(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
HTMLMediaElement = v_saf(function HTMLMediaElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLMediaElement, HTMLElement)
HTMLUnknownElement = v_saf(function HTMLUnknownElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLUnknownElement, HTMLElement)
Storage = v_saf(function Storage(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
Touch = v_saf(function Touch(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };})
TouchEvent = v_saf(function TouchEvent(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(TouchEvent, UIEvent)
HTMLAnchorElement = v_saf(function HTMLAnchorElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };v_hook_href(this, 'HTMLAnchorElement', location.href)}); _inherits(HTMLAnchorElement, HTMLElement)
HTMLDivElement = v_saf(function HTMLDivElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLDivElement, HTMLElement)
HTMLParagraphElement = v_saf(function HTMLParagraphElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLParagraphElement, HTMLElement)
HTMLTableRowElement = v_saf(function HTMLTableRowElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableRowElement, HTMLElement)
HTMLTableCellElement = v_saf(function HTMLTableCellElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableCellElement, HTMLElement)
HTMLLinkElement = v_saf(function HTMLLinkElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLinkElement, HTMLElement)
HTMLLIElement = v_saf(function HTMLLIElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLLIElement, HTMLElement)
HTMLTableSectionElement = v_saf(function HTMLTableSectionElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableSectionElement, HTMLElement)
HTMLTableElement = v_saf(function HTMLTableElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLTableElement, HTMLElement)
HTMLSpanElement = v_saf(function HTMLSpanElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(HTMLSpanElement, HTMLElement)
SVGGraphicsElement = v_saf(function SVGGraphicsElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(SVGGraphicsElement, SVGElement)
SVGTextContentElement = v_saf(function SVGTextContentElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(SVGTextContentElement, SVGGraphicsElement)
SVGTextPositioningElement = v_saf(function SVGTextPositioningElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(SVGTextPositioningElement, SVGTextContentElement)
SVGTSpanElement = v_saf(function SVGTSpanElement(){if (!v_new_toggle){ throw TypeError("Illegal constructor") };}); _inherits(SVGTSpanElement, SVGTextPositioningElement)
Object.defineProperties(EventTarget.prototype, {
  [Symbol.toStringTag]: {value:"EventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Navigator.prototype, {
  plugins: {get(){ v_console_log("  [*] Navigator -> plugins[get]", this._plugins || []);return this._plugins || [] }},
  userAgent: {get(){ v_console_log("  [*] Navigator -> userAgent[get]", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36");return "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36" }},
  webdriver: {get(){ v_console_log("  [*] Navigator -> webdriver[get]", false);return false }},
  doNotTrack: {get(){ v_console_log("  [*] Navigator -> doNotTrack[get]", {});return {} }},
  language: {get(){ v_console_log("  [*] Navigator -> language[get]", "zh-CN");return "zh-CN" }},
  languages: {get(){ v_console_log("  [*] Navigator -> languages[get]", {});return {} }},
  platform: {get(){ v_console_log("  [*] Navigator -> platform[get]", "MacIntel");return "MacIntel" }},
  vendor: {get(){ v_console_log("  [*] Navigator -> vendor[get]", "Google Inc.");return "Google Inc." }},
  [Symbol.toStringTag]: {value:"Navigator",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PluginArray.prototype, {
  length: {get(){ v_console_log("  [*] PluginArray -> length[get]", 5);return 5 }},
  [Symbol.toStringTag]: {value:"PluginArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Plugin.prototype, {
  [Symbol.toStringTag]: {value:"Plugin",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCollection.prototype, {
  length: {get(){ v_console_log("  [*] HTMLCollection -> length[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"HTMLCollection",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMTokenList.prototype, {
  length: {get(){ v_console_log("  [*] DOMTokenList -> length[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"DOMTokenList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(NodeList.prototype, {
  length: {get(){ v_console_log("  [*] NodeList -> length[get]", 1129);return 1129 }},
  [Symbol.toStringTag]: {value:"NodeList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CSSStyleDeclaration.prototype, {
  cssText: {set(){ v_console_log("  [*] CSSStyleDeclaration -> cssText[set]", [].slice.call(arguments)); }},
  cssFloat: {get(){ v_console_log("  [*] CSSStyleDeclaration -> cssFloat[get]", "left");return "left" }},
  [Symbol.toStringTag]: {value:"CSSStyleDeclaration",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Option.prototype, {
  selected: {get(){ v_console_log("  [*] Option -> selected[get]", true);return true }},
  disabled: {get(){ v_console_log("  [*] Option -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"Option",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceTiming.prototype, {
  domainLookupEnd: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", 1695967095876);return 1695967095876 }},
  domainLookupStart: {get(){ v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", 1695967095814);return 1695967095814 }},
  connectEnd: {get(){ v_console_log("  [*] PerformanceTiming -> connectEnd[get]", 1695967095926);return 1695967095926 }},
  connectStart: {get(){ v_console_log("  [*] PerformanceTiming -> connectStart[get]", 1695967095876);return 1695967095876 }},
  responseStart: {get(){ v_console_log("  [*] PerformanceTiming -> responseStart[get]", 1695967096022);return 1695967096022 }},
  requestStart: {get(){ v_console_log("  [*] PerformanceTiming -> requestStart[get]", 1695967095926);return 1695967095926 }},
  navigationStart: {get(){ v_console_log("  [*] PerformanceTiming -> navigationStart[get]", 1695967095804);return 1695967095804 }},
  domComplete: {get(){ v_console_log("  [*] PerformanceTiming -> domComplete[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"PerformanceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Image.prototype, {
  height: {set(){ v_console_log("  [*] Image -> height[set]", [].slice.call(arguments)); }},
  width: {set(){ v_console_log("  [*] Image -> width[set]", [].slice.call(arguments)); }},
  src: {set(){ v_console_log("  [*] Image -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"Image",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(DOMRectReadOnly.prototype, {
  top: {get(){ v_console_log("  [*] DOMRectReadOnly -> top[get]", 1697);return 1697 }},
  left: {get(){ v_console_log("  [*] DOMRectReadOnly -> left[get]", 72);return 72 }},
  [Symbol.toStringTag]: {value:"DOMRectReadOnly",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(SVGRect.prototype, {
  x: {get(){ v_console_log("  [*] SVGRect -> x[get]", 0);return 0 }},
  y: {get(){ v_console_log("  [*] SVGRect -> y[get]", -9);return -9 }},
  width: {get(){ v_console_log("  [*] SVGRect -> width[get]", 27.8125);return 27.8125 }},
  height: {get(){ v_console_log("  [*] SVGRect -> height[get]", 11);return 11 }},
  [Symbol.toStringTag]: {value:"SVGRect",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Event.prototype, {
  type: {get(){ v_console_log("  [*] Event -> type[get]", "mousemove");return "mousemove" }},
  defaultPrevented: {get(){ v_console_log("  [*] Event -> defaultPrevented[get]", false);return false }},
  returnValue: {get(){ v_console_log("  [*] Event -> returnValue[get]", true);return true },set(){ v_console_log("  [*] Event -> returnValue[set]", [].slice.call(arguments));return true }},
  timeStamp: {get(){ v_console_log("  [*] Event -> timeStamp[get]", 2883.599999997765);return 2883.599999997765 }},
  target: {get(){ v_console_log("  [*] Event -> target[get]", {});return {} }},
  eventPhase: {get(){ v_console_log("  [*] Event -> eventPhase[get]", 3);return 3 }},
  currentTarget: {get(){ v_console_log("  [*] Event -> currentTarget[get]", {});return {} }},
  cancelable: {get(){ v_console_log("  [*] Event -> cancelable[get]", true);return true }},
  bubbles: {get(){ v_console_log("  [*] Event -> bubbles[get]", true);return true }},
  srcElement: {get(){ v_console_log("  [*] Event -> srcElement[get]", {});return {} }},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  CAPTURING_PHASE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  AT_TARGET: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  BUBBLING_PHASE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Event",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Node.prototype, {
  nodeType: {get(){ v_console_log("  [*] Node -> nodeType[get]", 1);return 1 }},
  firstChild: {get(){ v_console_log("  [*] Node -> firstChild[get]", {});return {} }},
  lastChild: {get(){ v_console_log("  [*] Node -> lastChild[get]", {});return {} }},
  childNodes: {get(){ v_console_log("  [*] Node -> childNodes[get]", {});return {} }},
  ownerDocument: {get(){ v_console_log("  [*] Node -> ownerDocument[get]", {});return {} }},
  nodeName: {get(){ v_console_log("  [*] Node -> nodeName[get]", "INPUT");return "INPUT" }},
  parentNode: {get(){ v_console_log("  [*] Node -> parentNode[get]", {});return {} }},
  nextSibling: {get(){ v_console_log("  [*] Node -> nextSibling[get]", {});return {} }},
  ELEMENT_NODE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  ATTRIBUTE_NODE: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TEXT_NODE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  CDATA_SECTION_NODE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_REFERENCE_NODE: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  ENTITY_NODE: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  PROCESSING_INSTRUCTION_NODE: {"value":7,"writable":false,"enumerable":true,"configurable":false},
  COMMENT_NODE: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_NODE: {"value":9,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_TYPE_NODE: {"value":10,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_FRAGMENT_NODE: {"value":11,"writable":false,"enumerable":true,"configurable":false},
  NOTATION_NODE: {"value":12,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_DISCONNECTED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_PRECEDING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_FOLLOWING: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINS: {"value":8,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_CONTAINED_BY: {"value":16,"writable":false,"enumerable":true,"configurable":false},
  DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {"value":32,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Node",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Screen.prototype, {
  width: {get(){ v_console_log("  [*] Screen -> width[get]", 1512);return 1512 }},
  height: {get(){ v_console_log("  [*] Screen -> height[get]", 982);return 982 }},
  [Symbol.toStringTag]: {value:"Screen",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Performance.prototype, {
  timing: {get(){ v_console_log("  [*] Performance -> timing[get]", v_new(PerformanceTiming));return v_new(PerformanceTiming) }},
  [Symbol.toStringTag]: {value:"Performance",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
  [Symbol.toStringTag]: {value:"XMLHttpRequestEventTarget",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CustomEvent.prototype, {
  detail: {get(){ v_console_log("  [*] CustomEvent -> detail[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"CustomEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(UIEvent.prototype, {
  which: {get(){ v_console_log("  [*] UIEvent -> which[get]", 0);return 0 }},
  view: {get(){ v_console_log("  [*] UIEvent -> view[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"UIEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Document.prototype, {
  createElement: {value: v_saf(function createElement(){v_console_log("  [*] Document -> createElement[func]", [].slice.call(arguments));return _createElement(arguments[0])})},
  compatMode: {get(){ v_console_log("  [*] Document -> compatMode[get]", "CSS1Compat");return "CSS1Compat" }},
  createDocumentFragment: {value: v_saf(function createDocumentFragment(){v_console_log("  [*] Document -> createDocumentFragment[func]", [].slice.call(arguments));})},
  readyState: {get(){ v_console_log("  [*] Document -> readyState[get]", "loading");return "loading" }},
  documentElement: {get(){ v_console_log("  [*] Document -> documentElement[get]", document);return document }},
  createComment: {value: v_saf(function createComment(){v_console_log("  [*] Document -> createComment[func]", [].slice.call(arguments));})},
  createElementNS: {value: v_saf(function createElementNS(){v_console_log("  [*] Document -> createElementNS[func]", [].slice.call(arguments));})},
  domain: {set(){ v_console_log("  [*] Document -> domain[set]", [].slice.call(arguments));return {} }},
  referrer: {get(){ v_console_log("  [*] Document -> referrer[get]", "https://cn.bing.com/");return "https://cn.bing.com/" }},
  defaultView: {get(){ v_console_log("  [*] Document -> defaultView[get]", {});return {} }},
  createTextNode: {value: v_saf(function createTextNode(){v_console_log("  [*] Document -> createTextNode[func]", [].slice.call(arguments));})},
  onreadystatechange: {"enumerable":true,"configurable":true},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"Document",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Element.prototype, {
  setAttribute: {value: v_saf(function setAttribute(){v_console_log("  [*] Element -> setAttribute[func]", [].slice.call(arguments));})},
  innerHTML: {get(){ v_console_log("  [*] Element -> innerHTML[get]", "");return "" },set(){ v_console_log("  [*] Element -> innerHTML[set]", [].slice.call(arguments));return "" }},
  getElementsByTagName: {value: v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})},
  tagName: {get(){ v_console_log("  [*] Element -> tagName[get]", this.v_tagName);return this.v_tagName }},
  getAttribute: {value: v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})},
  className: {get(){ v_console_log("  [*] Element -> className[get]", "red");return "red" },set(){ v_console_log("  [*] Element -> className[set]", [].slice.call(arguments));return "red" }},
  outerHTML: {get(){ v_console_log("  [*] Element -> outerHTML[get]", "<nav></nav>");return "<nav></nav>" }},
  getElementsByClassName: {value: v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})},
  id: {get(){ v_console_log("  [*] Element -> id[get]", "maincont");return "maincont" },set(){ v_console_log("  [*] Element -> id[set]", [].slice.call(arguments));return "maincont" }},
  querySelectorAll: {value: v_saf(function querySelectorAll(){v_console_log("  [*] Element -> querySelectorAll[func]", [].slice.call(arguments));})},
  clientWidth: {get(){ v_console_log("  [*] Element -> clientWidth[get]", 1344);return 1344 }},
  clientHeight: {get(){ v_console_log("  [*] Element -> clientHeight[get]", 2182);return 2182 }},
  getBoundingClientRect: {value: v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})},
  clientTop: {get(){ v_console_log("  [*] Element -> clientTop[get]", 0);return 0 }},
  clientLeft: {get(){ v_console_log("  [*] Element -> clientLeft[get]", 0);return 0 }},
  scrollTop: {get(){ v_console_log("  [*] Element -> scrollTop[get]", 0);return 0 }},
  scrollLeft: {get(){ v_console_log("  [*] Element -> scrollLeft[get]", 0);return 0 }},
  namespaceURI: {get(){ v_console_log("  [*] Element -> namespaceURI[get]", "http://www.w3.org/2000/svg");return "http://www.w3.org/2000/svg" }},
  [Symbol.toStringTag]: {value:"Element",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(XMLHttpRequest.prototype, {
  UNSENT: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  OPENED: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HEADERS_RECEIVED: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LOADING: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  DONE: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"XMLHttpRequest",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MouseEvent.prototype, {
  toElement: {get(){ v_console_log("  [*] MouseEvent -> toElement[get]", {});return {} }},
  fromElement: {get(){ v_console_log("  [*] MouseEvent -> fromElement[get]", {});return {} }},
  buttons: {get(){ v_console_log("  [*] MouseEvent -> buttons[get]", 0);return 0 }},
  [Symbol.toStringTag]: {value:"MouseEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLElement.prototype, {
  style: {get(){ v_console_log("  [*] HTMLElement -> style[get]", this.v_style);return this.v_style }},
  offsetHeight: {get(){ v_console_log("  [*] HTMLElement -> offsetHeight[get]", 17);return 17 }},
  offsetWidth: {get(){ v_console_log("  [*] HTMLElement -> offsetWidth[get]", 107);return 107 }},
  offsetTop: {get(){ v_console_log("  [*] HTMLElement -> offsetTop[get]", 8);return 8 }},
  onload: {set(){ v_console_log("  [*] HTMLElement -> onload[set]", [].slice.call(arguments));return 8 }},
  offsetLeft: {get(){ v_console_log("  [*] HTMLElement -> offsetLeft[get]", 8);return 8 }},
  onmousedown: {set(){ v_console_log("  [*] HTMLElement -> onmousedown[set]", [].slice.call(arguments));return 8 }},
  onmousemove: {set(){ v_console_log("  [*] HTMLElement -> onmousemove[set]", [].slice.call(arguments));return 8 }},
  onclick: {set(){ v_console_log("  [*] HTMLElement -> onclick[set]", [].slice.call(arguments));return 8 }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"HTMLElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(SVGElement.prototype, {
  style: {get(){ v_console_log("  [*] SVGElement -> style[get]", ); }},
  onmouseover: {set(){ v_console_log("  [*] SVGElement -> onmouseover[set]", [].slice.call(arguments));return {} }},
  onmouseout: {set(){ v_console_log("  [*] SVGElement -> onmouseout[set]", [].slice.call(arguments));return {} }},
  onmousemove: {set(){ v_console_log("  [*] SVGElement -> onmousemove[set]", [].slice.call(arguments));return {} }},
  onclick: {set(){ v_console_log("  [*] SVGElement -> onclick[set]", [].slice.call(arguments));return {} }},
  onmouseenter: {"enumerable":true,"configurable":true},
  onmouseleave: {"enumerable":true,"configurable":true},
  [Symbol.toStringTag]: {value:"SVGElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PointerEvent.prototype, {
  pointerType: {get(){ v_console_log("  [*] PointerEvent -> pointerType[get]", "mouse");return "mouse" }},
  [Symbol.toStringTag]: {value:"PointerEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLInputElement.prototype, {
  value: {get(){ v_console_log("  [*] HTMLInputElement -> value[get]", "index/index");return "index/index" },set(){ v_console_log("  [*] HTMLInputElement -> value[set]", [].slice.call(arguments));return "index/index" }},
  checked: {get(){ v_console_log("  [*] HTMLInputElement -> checked[get]", true);return true },set(){ v_console_log("  [*] HTMLInputElement -> checked[set]", [].slice.call(arguments));return true }},
  type: {get(){ v_console_log("  [*] HTMLInputElement -> type[get]", "hidden");return "hidden" }},
  [Symbol.toStringTag]: {value:"HTMLInputElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLOptionElement.prototype, {
  selected: {get(){ v_console_log("  [*] HTMLOptionElement -> selected[get]", true);return true }},
  disabled: {get(){ v_console_log("  [*] HTMLOptionElement -> disabled[get]", false);return false }},
  [Symbol.toStringTag]: {value:"HTMLOptionElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLFormElement.prototype, {
  enctype: {get(){ v_console_log("  [*] HTMLFormElement -> enctype[get]", "application/x-www-form-urlencoded");return "application/x-www-form-urlencoded" }},
  [Symbol.toStringTag]: {value:"HTMLFormElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLSelectElement.prototype, {
  disabled: {set(){ v_console_log("  [*] HTMLSelectElement -> disabled[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLSelectElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLImageElement.prototype, {
  height: {set(){ v_console_log("  [*] HTMLImageElement -> height[set]", [].slice.call(arguments)); }},
  width: {set(){ v_console_log("  [*] HTMLImageElement -> width[set]", [].slice.call(arguments)); }},
  src: {set(){ v_console_log("  [*] HTMLImageElement -> src[set]", [].slice.call(arguments)); }},
  [Symbol.toStringTag]: {value:"HTMLImageElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLScriptElement.prototype, {
  async: {set(){ v_console_log("  [*] HTMLScriptElement -> async[set]", [].slice.call(arguments)); }},
  src: {get(){ v_console_log("  [*] HTMLScriptElement -> src[get]", "http://d.10jqka.com.cn/v6/time/151_899050/last.js");return "http://d.10jqka.com.cn/v6/time/151_899050/last.js" },set(){ v_console_log("  [*] HTMLScriptElement -> src[set]", [].slice.call(arguments));return "http://d.10jqka.com.cn/v6/time/151_899050/last.js" }},
  [Symbol.toStringTag]: {value:"HTMLScriptElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLIFrameElement.prototype, {
  contentWindow: {get(){ v_console_log("  [*] HTMLIFrameElement -> contentWindow[get]", {});return {} }},
  [Symbol.toStringTag]: {value:"HTMLIFrameElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Window.prototype, {
  TEMPORARY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  PERSISTENT: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"Window",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDocument.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDocument",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLHeadElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLHeadElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLBodyElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLBodyElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeTypeArray.prototype, {
  [Symbol.toStringTag]: {value:"MimeTypeArray",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(MimeType.prototype, {
  [Symbol.toStringTag]: {value:"MimeType",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Location.prototype, {
  [Symbol.toStringTag]: {value:"Location",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLCanvasElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLCanvasElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(WebGLRenderingContext.prototype, {
  DEPTH_BUFFER_BIT: {"value":256,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BUFFER_BIT: {"value":1024,"writable":false,"enumerable":true,"configurable":false},
  COLOR_BUFFER_BIT: {"value":16384,"writable":false,"enumerable":true,"configurable":false},
  POINTS: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  LINES: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  LINE_LOOP: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LINE_STRIP: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLES: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_STRIP: {"value":5,"writable":false,"enumerable":true,"configurable":false},
  TRIANGLE_FAN: {"value":6,"writable":false,"enumerable":true,"configurable":false},
  ZERO: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  ONE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  SRC_COLOR: {"value":768,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_COLOR: {"value":769,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA: {"value":770,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_SRC_ALPHA: {"value":771,"writable":false,"enumerable":true,"configurable":false},
  DST_ALPHA: {"value":772,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_ALPHA: {"value":773,"writable":false,"enumerable":true,"configurable":false},
  DST_COLOR: {"value":774,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_DST_COLOR: {"value":775,"writable":false,"enumerable":true,"configurable":false},
  SRC_ALPHA_SATURATE: {"value":776,"writable":false,"enumerable":true,"configurable":false},
  FUNC_ADD: {"value":32774,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_RGB: {"value":32777,"writable":false,"enumerable":true,"configurable":false},
  BLEND_EQUATION_ALPHA: {"value":34877,"writable":false,"enumerable":true,"configurable":false},
  FUNC_SUBTRACT: {"value":32778,"writable":false,"enumerable":true,"configurable":false},
  FUNC_REVERSE_SUBTRACT: {"value":32779,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_RGB: {"value":32968,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_RGB: {"value":32969,"writable":false,"enumerable":true,"configurable":false},
  BLEND_DST_ALPHA: {"value":32970,"writable":false,"enumerable":true,"configurable":false},
  BLEND_SRC_ALPHA: {"value":32971,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_COLOR: {"value":32769,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_COLOR: {"value":32770,"writable":false,"enumerable":true,"configurable":false},
  CONSTANT_ALPHA: {"value":32771,"writable":false,"enumerable":true,"configurable":false},
  ONE_MINUS_CONSTANT_ALPHA: {"value":32772,"writable":false,"enumerable":true,"configurable":false},
  BLEND_COLOR: {"value":32773,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER: {"value":34962,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER: {"value":34963,"writable":false,"enumerable":true,"configurable":false},
  ARRAY_BUFFER_BINDING: {"value":34964,"writable":false,"enumerable":true,"configurable":false},
  ELEMENT_ARRAY_BUFFER_BINDING: {"value":34965,"writable":false,"enumerable":true,"configurable":false},
  STREAM_DRAW: {"value":35040,"writable":false,"enumerable":true,"configurable":false},
  STATIC_DRAW: {"value":35044,"writable":false,"enumerable":true,"configurable":false},
  DYNAMIC_DRAW: {"value":35048,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_SIZE: {"value":34660,"writable":false,"enumerable":true,"configurable":false},
  BUFFER_USAGE: {"value":34661,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_VERTEX_ATTRIB: {"value":34342,"writable":false,"enumerable":true,"configurable":false},
  FRONT: {"value":1028,"writable":false,"enumerable":true,"configurable":false},
  BACK: {"value":1029,"writable":false,"enumerable":true,"configurable":false},
  FRONT_AND_BACK: {"value":1032,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_2D: {"value":3553,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE: {"value":2884,"writable":false,"enumerable":true,"configurable":false},
  BLEND: {"value":3042,"writable":false,"enumerable":true,"configurable":false},
  DITHER: {"value":3024,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_TEST: {"value":2960,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_TEST: {"value":2929,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_TEST: {"value":3089,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FILL: {"value":32823,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_ALPHA_TO_COVERAGE: {"value":32926,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE: {"value":32928,"writable":false,"enumerable":true,"configurable":false},
  NO_ERROR: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  INVALID_ENUM: {"value":1280,"writable":false,"enumerable":true,"configurable":false},
  INVALID_VALUE: {"value":1281,"writable":false,"enumerable":true,"configurable":false},
  INVALID_OPERATION: {"value":1282,"writable":false,"enumerable":true,"configurable":false},
  OUT_OF_MEMORY: {"value":1285,"writable":false,"enumerable":true,"configurable":false},
  CW: {"value":2304,"writable":false,"enumerable":true,"configurable":false},
  CCW: {"value":2305,"writable":false,"enumerable":true,"configurable":false},
  LINE_WIDTH: {"value":2849,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_POINT_SIZE_RANGE: {"value":33901,"writable":false,"enumerable":true,"configurable":false},
  ALIASED_LINE_WIDTH_RANGE: {"value":33902,"writable":false,"enumerable":true,"configurable":false},
  CULL_FACE_MODE: {"value":2885,"writable":false,"enumerable":true,"configurable":false},
  FRONT_FACE: {"value":2886,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_RANGE: {"value":2928,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_WRITEMASK: {"value":2930,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_CLEAR_VALUE: {"value":2931,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_FUNC: {"value":2932,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_CLEAR_VALUE: {"value":2961,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FUNC: {"value":2962,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_FAIL: {"value":2964,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_FAIL: {"value":2965,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_PASS_DEPTH_PASS: {"value":2966,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_REF: {"value":2967,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_VALUE_MASK: {"value":2963,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_WRITEMASK: {"value":2968,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FUNC: {"value":34816,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_FAIL: {"value":34817,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_FAIL: {"value":34818,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_PASS_DEPTH_PASS: {"value":34819,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_REF: {"value":36003,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_VALUE_MASK: {"value":36004,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BACK_WRITEMASK: {"value":36005,"writable":false,"enumerable":true,"configurable":false},
  VIEWPORT: {"value":2978,"writable":false,"enumerable":true,"configurable":false},
  SCISSOR_BOX: {"value":3088,"writable":false,"enumerable":true,"configurable":false},
  COLOR_CLEAR_VALUE: {"value":3106,"writable":false,"enumerable":true,"configurable":false},
  COLOR_WRITEMASK: {"value":3107,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_ALIGNMENT: {"value":3317,"writable":false,"enumerable":true,"configurable":false},
  PACK_ALIGNMENT: {"value":3333,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_SIZE: {"value":3379,"writable":false,"enumerable":true,"configurable":false},
  MAX_VIEWPORT_DIMS: {"value":3386,"writable":false,"enumerable":true,"configurable":false},
  SUBPIXEL_BITS: {"value":3408,"writable":false,"enumerable":true,"configurable":false},
  RED_BITS: {"value":3410,"writable":false,"enumerable":true,"configurable":false},
  GREEN_BITS: {"value":3411,"writable":false,"enumerable":true,"configurable":false},
  BLUE_BITS: {"value":3412,"writable":false,"enumerable":true,"configurable":false},
  ALPHA_BITS: {"value":3413,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_BITS: {"value":3414,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_BITS: {"value":3415,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_UNITS: {"value":10752,"writable":false,"enumerable":true,"configurable":false},
  POLYGON_OFFSET_FACTOR: {"value":32824,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_2D: {"value":32873,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_BUFFERS: {"value":32936,"writable":false,"enumerable":true,"configurable":false},
  SAMPLES: {"value":32937,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_VALUE: {"value":32938,"writable":false,"enumerable":true,"configurable":false},
  SAMPLE_COVERAGE_INVERT: {"value":32939,"writable":false,"enumerable":true,"configurable":false},
  COMPRESSED_TEXTURE_FORMATS: {"value":34467,"writable":false,"enumerable":true,"configurable":false},
  DONT_CARE: {"value":4352,"writable":false,"enumerable":true,"configurable":false},
  FASTEST: {"value":4353,"writable":false,"enumerable":true,"configurable":false},
  NICEST: {"value":4354,"writable":false,"enumerable":true,"configurable":false},
  GENERATE_MIPMAP_HINT: {"value":33170,"writable":false,"enumerable":true,"configurable":false},
  BYTE: {"value":5120,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_BYTE: {"value":5121,"writable":false,"enumerable":true,"configurable":false},
  SHORT: {"value":5122,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT: {"value":5123,"writable":false,"enumerable":true,"configurable":false},
  INT: {"value":5124,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_INT: {"value":5125,"writable":false,"enumerable":true,"configurable":false},
  FLOAT: {"value":5126,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT: {"value":6402,"writable":false,"enumerable":true,"configurable":false},
  ALPHA: {"value":6406,"writable":false,"enumerable":true,"configurable":false},
  RGB: {"value":6407,"writable":false,"enumerable":true,"configurable":false},
  RGBA: {"value":6408,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE: {"value":6409,"writable":false,"enumerable":true,"configurable":false},
  LUMINANCE_ALPHA: {"value":6410,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_4_4_4_4: {"value":32819,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_5_5_1: {"value":32820,"writable":false,"enumerable":true,"configurable":false},
  UNSIGNED_SHORT_5_6_5: {"value":33635,"writable":false,"enumerable":true,"configurable":false},
  FRAGMENT_SHADER: {"value":35632,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_SHADER: {"value":35633,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_ATTRIBS: {"value":34921,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_UNIFORM_VECTORS: {"value":36347,"writable":false,"enumerable":true,"configurable":false},
  MAX_VARYING_VECTORS: {"value":36348,"writable":false,"enumerable":true,"configurable":false},
  MAX_COMBINED_TEXTURE_IMAGE_UNITS: {"value":35661,"writable":false,"enumerable":true,"configurable":false},
  MAX_VERTEX_TEXTURE_IMAGE_UNITS: {"value":35660,"writable":false,"enumerable":true,"configurable":false},
  MAX_TEXTURE_IMAGE_UNITS: {"value":34930,"writable":false,"enumerable":true,"configurable":false},
  MAX_FRAGMENT_UNIFORM_VECTORS: {"value":36349,"writable":false,"enumerable":true,"configurable":false},
  SHADER_TYPE: {"value":35663,"writable":false,"enumerable":true,"configurable":false},
  DELETE_STATUS: {"value":35712,"writable":false,"enumerable":true,"configurable":false},
  LINK_STATUS: {"value":35714,"writable":false,"enumerable":true,"configurable":false},
  VALIDATE_STATUS: {"value":35715,"writable":false,"enumerable":true,"configurable":false},
  ATTACHED_SHADERS: {"value":35717,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_UNIFORMS: {"value":35718,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_ATTRIBUTES: {"value":35721,"writable":false,"enumerable":true,"configurable":false},
  SHADING_LANGUAGE_VERSION: {"value":35724,"writable":false,"enumerable":true,"configurable":false},
  CURRENT_PROGRAM: {"value":35725,"writable":false,"enumerable":true,"configurable":false},
  NEVER: {"value":512,"writable":false,"enumerable":true,"configurable":false},
  LESS: {"value":513,"writable":false,"enumerable":true,"configurable":false},
  EQUAL: {"value":514,"writable":false,"enumerable":true,"configurable":false},
  LEQUAL: {"value":515,"writable":false,"enumerable":true,"configurable":false},
  GREATER: {"value":516,"writable":false,"enumerable":true,"configurable":false},
  NOTEQUAL: {"value":517,"writable":false,"enumerable":true,"configurable":false},
  GEQUAL: {"value":518,"writable":false,"enumerable":true,"configurable":false},
  ALWAYS: {"value":519,"writable":false,"enumerable":true,"configurable":false},
  KEEP: {"value":7680,"writable":false,"enumerable":true,"configurable":false},
  REPLACE: {"value":7681,"writable":false,"enumerable":true,"configurable":false},
  INCR: {"value":7682,"writable":false,"enumerable":true,"configurable":false},
  DECR: {"value":7683,"writable":false,"enumerable":true,"configurable":false},
  INVERT: {"value":5386,"writable":false,"enumerable":true,"configurable":false},
  INCR_WRAP: {"value":34055,"writable":false,"enumerable":true,"configurable":false},
  DECR_WRAP: {"value":34056,"writable":false,"enumerable":true,"configurable":false},
  VENDOR: {"value":7936,"writable":false,"enumerable":true,"configurable":false},
  RENDERER: {"value":7937,"writable":false,"enumerable":true,"configurable":false},
  VERSION: {"value":7938,"writable":false,"enumerable":true,"configurable":false},
  NEAREST: {"value":9728,"writable":false,"enumerable":true,"configurable":false},
  LINEAR: {"value":9729,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_NEAREST: {"value":9984,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_NEAREST: {"value":9985,"writable":false,"enumerable":true,"configurable":false},
  NEAREST_MIPMAP_LINEAR: {"value":9986,"writable":false,"enumerable":true,"configurable":false},
  LINEAR_MIPMAP_LINEAR: {"value":9987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MAG_FILTER: {"value":10240,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_MIN_FILTER: {"value":10241,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_S: {"value":10242,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_WRAP_T: {"value":10243,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE: {"value":5890,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP: {"value":34067,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_BINDING_CUBE_MAP: {"value":34068,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_X: {"value":34069,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_X: {"value":34070,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Y: {"value":34071,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Y: {"value":34072,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_POSITIVE_Z: {"value":34073,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE_CUBE_MAP_NEGATIVE_Z: {"value":34074,"writable":false,"enumerable":true,"configurable":false},
  MAX_CUBE_MAP_TEXTURE_SIZE: {"value":34076,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE0: {"value":33984,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE1: {"value":33985,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE2: {"value":33986,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE3: {"value":33987,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE4: {"value":33988,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE5: {"value":33989,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE6: {"value":33990,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE7: {"value":33991,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE8: {"value":33992,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE9: {"value":33993,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE10: {"value":33994,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE11: {"value":33995,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE12: {"value":33996,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE13: {"value":33997,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE14: {"value":33998,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE15: {"value":33999,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE16: {"value":34000,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE17: {"value":34001,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE18: {"value":34002,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE19: {"value":34003,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE20: {"value":34004,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE21: {"value":34005,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE22: {"value":34006,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE23: {"value":34007,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE24: {"value":34008,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE25: {"value":34009,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE26: {"value":34010,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE27: {"value":34011,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE28: {"value":34012,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE29: {"value":34013,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE30: {"value":34014,"writable":false,"enumerable":true,"configurable":false},
  TEXTURE31: {"value":34015,"writable":false,"enumerable":true,"configurable":false},
  ACTIVE_TEXTURE: {"value":34016,"writable":false,"enumerable":true,"configurable":false},
  REPEAT: {"value":10497,"writable":false,"enumerable":true,"configurable":false},
  CLAMP_TO_EDGE: {"value":33071,"writable":false,"enumerable":true,"configurable":false},
  MIRRORED_REPEAT: {"value":33648,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC2: {"value":35664,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC3: {"value":35665,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_VEC4: {"value":35666,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC2: {"value":35667,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC3: {"value":35668,"writable":false,"enumerable":true,"configurable":false},
  INT_VEC4: {"value":35669,"writable":false,"enumerable":true,"configurable":false},
  BOOL: {"value":35670,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC2: {"value":35671,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC3: {"value":35672,"writable":false,"enumerable":true,"configurable":false},
  BOOL_VEC4: {"value":35673,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT2: {"value":35674,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT3: {"value":35675,"writable":false,"enumerable":true,"configurable":false},
  FLOAT_MAT4: {"value":35676,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_2D: {"value":35678,"writable":false,"enumerable":true,"configurable":false},
  SAMPLER_CUBE: {"value":35680,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_ENABLED: {"value":34338,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_SIZE: {"value":34339,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_STRIDE: {"value":34340,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_TYPE: {"value":34341,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_NORMALIZED: {"value":34922,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_POINTER: {"value":34373,"writable":false,"enumerable":true,"configurable":false},
  VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {"value":34975,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_TYPE: {"value":35738,"writable":false,"enumerable":true,"configurable":false},
  IMPLEMENTATION_COLOR_READ_FORMAT: {"value":35739,"writable":false,"enumerable":true,"configurable":false},
  COMPILE_STATUS: {"value":35713,"writable":false,"enumerable":true,"configurable":false},
  LOW_FLOAT: {"value":36336,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_FLOAT: {"value":36337,"writable":false,"enumerable":true,"configurable":false},
  HIGH_FLOAT: {"value":36338,"writable":false,"enumerable":true,"configurable":false},
  LOW_INT: {"value":36339,"writable":false,"enumerable":true,"configurable":false},
  MEDIUM_INT: {"value":36340,"writable":false,"enumerable":true,"configurable":false},
  HIGH_INT: {"value":36341,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER: {"value":36160,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER: {"value":36161,"writable":false,"enumerable":true,"configurable":false},
  RGBA4: {"value":32854,"writable":false,"enumerable":true,"configurable":false},
  RGB5_A1: {"value":32855,"writable":false,"enumerable":true,"configurable":false},
  RGB565: {"value":36194,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_COMPONENT16: {"value":33189,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_INDEX8: {"value":36168,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL: {"value":34041,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_WIDTH: {"value":36162,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_HEIGHT: {"value":36163,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_INTERNAL_FORMAT: {"value":36164,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_RED_SIZE: {"value":36176,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_GREEN_SIZE: {"value":36177,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BLUE_SIZE: {"value":36178,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_ALPHA_SIZE: {"value":36179,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_DEPTH_SIZE: {"value":36180,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_STENCIL_SIZE: {"value":36181,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {"value":36048,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {"value":36049,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {"value":36050,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {"value":36051,"writable":false,"enumerable":true,"configurable":false},
  COLOR_ATTACHMENT0: {"value":36064,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_ATTACHMENT: {"value":36096,"writable":false,"enumerable":true,"configurable":false},
  STENCIL_ATTACHMENT: {"value":36128,"writable":false,"enumerable":true,"configurable":false},
  DEPTH_STENCIL_ATTACHMENT: {"value":33306,"writable":false,"enumerable":true,"configurable":false},
  NONE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_COMPLETE: {"value":36053,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {"value":36054,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {"value":36055,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {"value":36057,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_UNSUPPORTED: {"value":36061,"writable":false,"enumerable":true,"configurable":false},
  FRAMEBUFFER_BINDING: {"value":36006,"writable":false,"enumerable":true,"configurable":false},
  RENDERBUFFER_BINDING: {"value":36007,"writable":false,"enumerable":true,"configurable":false},
  MAX_RENDERBUFFER_SIZE: {"value":34024,"writable":false,"enumerable":true,"configurable":false},
  INVALID_FRAMEBUFFER_OPERATION: {"value":1286,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_FLIP_Y_WEBGL: {"value":37440,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_PREMULTIPLY_ALPHA_WEBGL: {"value":37441,"writable":false,"enumerable":true,"configurable":false},
  CONTEXT_LOST_WEBGL: {"value":37442,"writable":false,"enumerable":true,"configurable":false},
  UNPACK_COLORSPACE_CONVERSION_WEBGL: {"value":37443,"writable":false,"enumerable":true,"configurable":false},
  BROWSER_DEFAULT_WEBGL: {"value":37444,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"WebGLRenderingContext",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(CanvasRenderingContext2D.prototype, {
  [Symbol.toStringTag]: {value:"CanvasRenderingContext2D",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEntry.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEntry",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceElementTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceElementTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceEventTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceEventTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceLongTaskTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceLongTaskTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMark.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMark",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceMeasure.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceMeasure",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigation.prototype, {
  TYPE_NAVIGATE: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RELOAD: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  TYPE_BACK_FORWARD: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  TYPE_RESERVED: {"value":255,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"PerformanceNavigation",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceResourceTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceResourceTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceNavigationTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceNavigationTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserver.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceObserver",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceObserverEntryList.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceObserverEntryList",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformancePaintTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformancePaintTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(PerformanceServerTiming.prototype, {
  [Symbol.toStringTag]: {value:"PerformanceServerTiming",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLMediaElement.prototype, {
  NETWORK_EMPTY: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_IDLE: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_LOADING: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  NETWORK_NO_SOURCE: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_NOTHING: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  HAVE_METADATA: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  HAVE_CURRENT_DATA: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  HAVE_FUTURE_DATA: {"value":3,"writable":false,"enumerable":true,"configurable":false},
  HAVE_ENOUGH_DATA: {"value":4,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"HTMLMediaElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLUnknownElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLUnknownElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Storage.prototype, {
  [Symbol.toStringTag]: {value:"Storage",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(Touch.prototype, {
  [Symbol.toStringTag]: {value:"Touch",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(TouchEvent.prototype, {
  [Symbol.toStringTag]: {value:"TouchEvent",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLAnchorElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLAnchorElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLDivElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLDivElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLParagraphElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLParagraphElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableRowElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableRowElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableCellElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableCellElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLinkElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLinkElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLLIElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLLIElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableSectionElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableSectionElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLTableElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLTableElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(HTMLSpanElement.prototype, {
  [Symbol.toStringTag]: {value:"HTMLSpanElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(SVGGraphicsElement.prototype, {
  [Symbol.toStringTag]: {value:"SVGGraphicsElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(SVGTextContentElement.prototype, {
  LENGTHADJUST_SPACINGANDGLYPHS: {"value":2,"writable":false,"enumerable":true,"configurable":false},
  LENGTHADJUST_SPACING: {"value":1,"writable":false,"enumerable":true,"configurable":false},
  LENGTHADJUST_UNKNOWN: {"value":0,"writable":false,"enumerable":true,"configurable":false},
  [Symbol.toStringTag]: {value:"SVGTextContentElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(SVGTextPositioningElement.prototype, {
  [Symbol.toStringTag]: {value:"SVGTextPositioningElement",writable:false,enumerable:false,configurable:true},
})
Object.defineProperties(SVGTSpanElement.prototype, {
  [Symbol.toStringTag]: {value:"SVGTSpanElement",writable:false,enumerable:false,configurable:true},
})




if (typeof __dirname != 'undefined'){ __dirname = undefined }
if (typeof __filename != 'undefined'){ __filename = undefined }
if (typeof require != 'undefined'){ require = undefined }
if (typeof exports != 'undefined'){ exports = undefined }
if (typeof module != 'undefined'){ module = undefined }
if (typeof Buffer != 'undefined'){ Buffer = undefined }
var __globalThis__ = typeof global != 'undefined' ? global : this
var window = new Proxy(v_new(Window), {
  get(a,b){ return a[b] || __globalThis__[b] },
  set(a,b,c){
    if (b == 'onclick' && typeof c == 'function') { window.addEventListener('click', c) }
    if (b == 'onmousedown' && typeof c == 'function') { window.addEventListener('mousedown', c) }
    if (b == 'onmouseup' && typeof c == 'function') { window.addEventListener('mouseup', c) }
    __globalThis__[b] = a[b] = c
  },
})
var v_hasOwnProperty = Object.prototype.hasOwnProperty
Object.prototype.hasOwnProperty = v_saf(function hasOwnProperty(){
  if (this == window){ return v_hasOwnProperty.apply(__globalThis__, arguments) }
  return v_hasOwnProperty.apply(this, arguments)
})
Object.defineProperties(__globalThis__, {[Symbol.toStringTag]:{value:'Window'}})
Object.defineProperties(__globalThis__, Object.getOwnPropertyDescriptors(window))
Object.setPrototypeOf(__globalThis__, Object.getPrototypeOf(window))
window.parent = window
window.top = window
window.frames = window
window.self = window
window.document = v_new(HTMLDocument)
window.location = v_new(Location)
window.navigator = v_new(Navigator)
window.screen = v_new(Screen)
window.clientInformation = navigator
window.performance = v_new(Performance)
window.sessionStorage = v_new(Storage)
window.localStorage = v_new(Storage)
function _createElement(name){
  var htmlmap = {"HTMLElement":["abbr","address","article","aside","b","bdi","bdo","cite","code","dd","dfn","dt","em","figcaption","figure","footer","header","hgroup","i","kbd","main","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],"HTMLInputElement":["input"],"HTMLOptionElement":["option"],"HTMLFormElement":["form"],"HTMLSelectElement":["select"],"HTMLImageElement":["img"],"HTMLScriptElement":["script"],"HTMLIFrameElement":["iframe"],"HTMLHeadElement":["head"],"HTMLBodyElement":["body"],"HTMLCanvasElement":["canvas"],"HTMLMediaElement":[],"HTMLUnknownElement":[]}
  var ret, htmlmapkeys = Object.keys(htmlmap)
  name = name.toLocaleLowerCase()
  for (var i = 0; i < htmlmapkeys.length; i++) {
    if (htmlmap[htmlmapkeys[i]].indexOf(name) != -1){
      ret = v_new(window[htmlmapkeys[i]])
      break
    }
  }
  if (!ret){ ret = v_new(HTMLUnknownElement) }
  if (typeof CSSStyleDeclaration != 'undefined') { ret.v_style = v_new(CSSStyleDeclaration) }
  ret.v_tagName = name.toUpperCase()
  return ret
}
function init_cookie(cookie){
  var cache = (cookie || "").trim();
  if (!cache){
    cache = ''
  }else if (cache.charAt(cache.length-1) != ';'){
    cache += '; '
  }else{
    cache += ' '
  }
  Object.defineProperty(Document.prototype, 'cookie', {
    get: function() {
      var r = cache.slice(0,cache.length-2);
      v_console_log('  [*] document -> cookie[get]', r)
      return r
    },
    set: function(c) {
      v_console_log('  [*] document -> cookie[set]', c)
      var ncookie = c.split(";")[0].split("=");
      if (!ncookie.slice(1).join('')){
        return c
      }
      var key = ncookie[0].trim()
      var val = ncookie.slice(1).join('').trim()
      var newc = key+'='+val
      var flag = false;
      var temp = cache.split("; ").map(function(a) {
        if (a.split("=")[0] === key) {
          flag = true;
          return newc;
        }
        return a;
      })
      cache = temp.join("; ");
      if (!flag) {
        cache += newc + "; ";
      }
      return cache;
    }
  });
}
function v_hook_href(obj, name, initurl){
  var r = Object.defineProperty(obj, 'href', {
    get: function(){
      if (!(this.protocol) && !(this.host)){
        r = ''
      }else{
        r = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "") + this.pathname + this.search + this.hash;
      }
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[get]:`, JSON.stringify(r))
      return r
    },
    set: function(href){
      href = href.trim()
      v_console_log(`  [*] ${name||obj.constructor.name} -> href[set]:`, JSON.stringify(href))
      if (href.startsWith("http://") || href.startsWith("https://")){/*ok*/}
      else if(href.startsWith("//")){ href = (this.protocol?this.protocol:'http:') + href}
      else{ href = this.protocol+"//"+this.host + (this.port?":"+this.port:"") + '/' + ((href[0]=='/')?href.slice(1):href) }
      var a = href.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
      this.protocol = a[1] ? a[1] : "";
      this.host     = a[2] ? a[2] : "";
      this.port     = a[3] ? a[3] : "";
      this.pathname = a[4] ? a[4] : "";
      this.search   = a[5] ? a[5] : "";
      this.hash     = a[6] ? a[6] : "";
      this.hostname = this.host;
      this.origin   = this.protocol + "//" + this.host + (this.port ? ":" + this.port : "");
    }
  });
  if (initurl && initurl.trim()){ var temp=v_new_toggle; v_new_toggle = true; r.href = initurl; v_new_toggle = temp; }
  return r
}
function v_hook_storage(){
  Storage.prototype.clear      = v_saf(function(){          v_console_log(`  [*] Storage -> clear[func]:`); var self=this;Object.keys(self).forEach(function (key) { delete self[key]; }); }, 'clear')
  Storage.prototype.getItem    = v_saf(function(key){       v_console_log(`  [*] Storage -> getItem[func]:`, key); var r = (this.hasOwnProperty(key)?String(this[key]):null); return r}, 'getItem')
  Storage.prototype.setItem    = v_saf(function(key, val){  v_console_log(`  [*] Storage -> setItem[func]:`, key, val); this[key] = (val === undefined)?null:String(val) }, 'setItem')
  Storage.prototype.key        = v_saf(function(key){       v_console_log(`  [*] Storage -> key[func]:`, key); return Object.keys(this)[key||0];} , 'key')
  Storage.prototype.removeItem = v_saf(function(key){       v_console_log(`  [*] Storage -> removeItem[func]:`, key); delete this[key];}, 'removeItem')
  Object.defineProperty(Storage.prototype, 'length', {get: function(){
    if(this===Storage.prototype){ throw TypeError('Illegal invocation') }return Object.keys(this).length
  }})
  window.sessionStorage = new Proxy(sessionStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
  window.localStorage = new Proxy(localStorage,{ set:function(a,b,c){ v_console_log(`  [*] Storage -> [set]:`, b, c); return a[b]=String(c)}, get:function(a,b){ v_console_log(`  [*] Storage -> [get]:`, b, a[b]); return a[b]},})
}
function v_init_document(){
  Document.prototype.getElementById = v_saf(function getElementById(name){ var r = v_getele(name, 'getElementById'); v_console_log('  [*] Document -> getElementById', name, r); return r })
  Document.prototype.querySelector = v_saf(function querySelector(name){ var r = v_getele(name, 'querySelector'); v_console_log('  [*] Document -> querySelector', name, r); return r })
  Document.prototype.getElementsByClassName = v_saf(function getElementsByClassName(name){ var r = v_geteles(name, 'getElementsByClassName'); v_console_log('  [*] Document -> getElementsByClassName', name, r); return r })
  Document.prototype.getElementsByName = v_saf(function getElementsByName(name){ var r = v_geteles(name, 'getElementsByName'); v_console_log('  [*] Document -> getElementsByName', name, r); return r })
  Document.prototype.getElementsByTagName = v_saf(function getElementsByTagName(name){ var r = v_geteles(name, 'getElementsByTagName'); v_console_log('  [*] Document -> getElementsByTagName', name, r); return r })
  Document.prototype.getElementsByTagNameNS = v_saf(function getElementsByTagNameNS(name){ var r = v_geteles(name, 'getElementsByTagNameNS'); v_console_log('  [*] Document -> getElementsByTagNameNS', name, r); return r })
  Document.prototype.querySelectorAll = v_saf(function querySelectorAll(name){ var r = v_geteles(name, 'querySelectorAll'); v_console_log('  [*] Document -> querySelectorAll', name, r); return r })
  var v_head = v_new(HTMLHeadElement)
  var v_body = v_new(HTMLBodyElement)
  Object.defineProperties(Document.prototype, {
    head: {get(){ v_console_log("  [*] Document -> head[get]", v_head);return v_head }},
    body: {get(){ v_console_log("  [*] Document -> body[get]", v_body);return v_body }},
  })
}
function v_init_canvas(){
  HTMLCanvasElement.prototype.getContext = function(){if (arguments[0]=='2d'){var r = v_new(CanvasRenderingContext2D); return r}; if (arguments[0]=='webgl' || arguments[0]=='experimental-webgl'){var r = v_new(WebGLRenderingContext); r._canvas = this; return r}; return null}
  HTMLCanvasElement.prototype.toDataURL = function(){return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAEYklEQVR4Xu3UAQkAAAwCwdm/9HI83BLIOdw5AgQIRAQWySkmAQIEzmB5AgIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlAABg+UHCBDICBisTFWCEiBgsPwAAQIZAYOVqUpQAgQMlh8gQCAjYLAyVQlKgIDB8gMECGQEDFamKkEJEDBYfoAAgYyAwcpUJSgBAgbLDxAgkBEwWJmqBCVAwGD5AQIEMgIGK1OVoAQIGCw/QIBARsBgZaoSlACBB1YxAJfjJb2jAAAAAElFTkSuQmCC"}
}
var v_start_stamp = +new Date
var v_fake_stamp = +new Date
function v_init_event_target(){
  v_events = {}
  function add_event(_this, x){
    if (!v_events[x[0]]){
      v_events[x[0]] = []
    }
    v_events[x[0]].push([_this, x[1].bind(_this)])
  }
  function _mk_mouse_event(type, canBubble, cancelable, view, detail, screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, button, relatedTarget){
    if (type == 'click'){
      var m = new v_saf(function PointerEvent(){})
      m.pointerType = "mouse"
    }else{
      var m = new v_saf(function MouseEvent(){})
    }
    m.isTrusted = true
    m.type = type
    m.canBubble = canBubble
    m.cancelable = cancelable
    m.view = view
    m.detail = detail
    m.screenX = screenX; m.movementX = screenX
    m.screenY = screenY; m.movementY = screenY
    m.clientX = clientX; m.layerX = clientX; m.offsetX = clientX; m.pageX = clientX; m.x = clientX;
    m.clientY = clientY; m.layerY = clientY; m.offsetY = clientY; m.pageY = clientY; m.y = clientY;
    m.ctrlKey = ctrlKey
    m.altKey = altKey
    m.shiftKey = shiftKey
    m.metaKey = metaKey
    m.button = button
    m.relatedTarget = relatedTarget
    return m
  }
  function make_mouse(type, x, y){
    return _mk_mouse_event(type, true, true, window, 0, 0, 0, x, y, false, false, false, false, 0, null)
  }
  function mouse_click(x, y){
    for (var i = 0; i < (v_events['click'] || []).length; i++) { v_events['click'][i][1](make_mouse('click', x, y)) }
    for (var i = 0; i < (v_events['mousedown'] || []).length; i++) { v_events['mousedown'][i][1](make_mouse('mousedown', x, y)) }
    for (var i = 0; i < (v_events['mouseup'] || []).length; i++) { v_events['mouseup'][i][1](make_mouse('mouseup', x, y)) }
  }
  var offr = Math.random()
  function make_touch(_this, type, x, y, timeStamp){
    var offx = Math.random()
    var offy = Math.random()
    var t = v_new(new v_saf(function Touch(){}))
    t = clientX = offx + x
    t = clientY = offy + y
    t = force = 1
    t = identifier = 0
    t = pageX = offx + x
    t = pageY = offy + y
    t = radiusX = 28 + offr
    t = radiusY = 28 + offr
    t = rotationAngle = 0
    t = screenX = 0
    t = screenY = 0
    var e = v_new(new v_saf(function TouchEvent(){}))
    e.isTrusted = true
    e.altKey = false
    e.bubbles = true
    e.cancelBubble = false
    e.cancelable = false
    e.changedTouches = e.targetTouches = e.touches = [t]
    e.composed = true
    e.ctrlKey = false
    e.currentTarget = null
    e.defaultPrevented = false
    e.detail = 0
    e.eventPhase = 0
    e.metaKey = false
    e.path = _this == window ? [window] : [_this, window]
    e.returnValue = true
    e.shiftKey = false
    e.sourceCapabilities = new v_saf(function InputDeviceCapabilities(){this.firesTouchEvents = true})
    e.srcElement = _this
    e.target = _this
    e.type = type
    e.timeStamp = timeStamp == undefined ? (new Date - v_start_stamp) : ((v_fake_stamp += Math.random()*20) - v_start_stamp)
    e.view = window
    e.which = 0
    return e
  }
  function make_trace(x1, y1, x2, y2){
    // 贝塞尔曲线
    function step_len(x1, y1, x2, y2){
      var ln = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5
      return (ln / 10) ^ 0
    }
    var slen = step_len(x1, y1, x2, y2)
    if (slen < 3){
      return []
    }
    function factorial(x){
      for(var y = 1; x > 1;  x--) {
        y *= x
      }
      return y;
    }
    var lp = Math.random()
    var rp = Math.random()
    var xx1 = (x1 + (x2 - x1) / 12 * (4-lp*4)) ^ 0
    var yy1 = (y1 + (y2 - y1) / 12 * (8+lp*4)) ^ 0
    var xx2 = (x1 + (x2 - x1) / 12 * (8+rp*4)) ^ 0
    var yy2 = (y1 + (y2 - y1) / 12 * (4-rp*4)) ^ 0
    var points = [[x1, y1], [xx1, yy1], [xx2, yy2], [x2, y2]]
    var N = points.length
    var n = N - 1
    var traces = []
    var step = slen
    for (var T = 0; T < step+1; T++) {
      var t = T*(1/step)
      var x = 0
      var y = 0
      for (var i = 0; i < N; i++) {
        var B = factorial(n)*t**i*(1-t)**(n-i)/(factorial(i)*factorial(n-i))
        x += points[i][0]*B
        y += points[i][1]*B
      }
      traces.push([x^0, y^0])
    }
    return traces
  }
  function touch(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var i = 0; i < (v_events['touchstart'] || []).length; i++) { v_events['touchstart'][i][1](make_touch(v_events['touchstart'][i][0], 'touchstart', x1, y1)) }
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['touchmove'] || []).length; i++) { v_events['touchmove'][i][1](make_touch(v_events['touchmove'][i][0], 'touchmove', x, y)) }
    }
    for (var i = 0; i < (v_events['touchend'] || []).length; i++) { v_events['touchend'][i][1](make_touch(v_events['touchend'][i][0], 'touchend', x2, y2)) }
  }
  function mouse_move(x1, y1, x2, y2){
    if (x2 == undefined && y2 == undefined){
      x2 = x1
      y2 = y1
    }
    var traces = make_trace(x1, y1, x2, y2)
    console.log('traces:', traces)
    for (var j = 0; j < traces.length; j++) {
      var x = traces[j][0]
      var y = traces[j][0]
      for (var i = 0; i < (v_events['mousemove'] || []).length; i++) { v_events['mousemove'][i][1](make_touch(v_events['mousemove'][i][0], 'mousemove', x, y)) }
    }
  }
  window.make_mouse = make_mouse
  window.mouse_click = mouse_click
  window.mouse_move = mouse_move
  window.touch = touch
  EventTarget.prototype.addEventListener = function(){v_console_log('  [*] EventTarget -> addEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.dispatchEvent = function(){v_console_log('  [*] EventTarget -> dispatchEvent[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
  EventTarget.prototype.removeEventListener = function(){v_console_log('  [*] EventTarget -> removeEventListener[func]', this===window?'[Window]':this===document?'[Document]':this, [].slice.call(arguments)); add_event(this, [].slice.call(arguments)); return null}
}
function v_init_Element_prototype(){
  Element.prototype.getAnimations          = Element.prototype.getAnimations          || v_saf(function getAnimations(){v_console_log("  [*] Element -> getAnimations[func]", [].slice.call(arguments));})
  Element.prototype.getAttribute           = Element.prototype.getAttribute           || v_saf(function getAttribute(){v_console_log("  [*] Element -> getAttribute[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNS         = Element.prototype.getAttributeNS         || v_saf(function getAttributeNS(){v_console_log("  [*] Element -> getAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNames      = Element.prototype.getAttributeNames      || v_saf(function getAttributeNames(){v_console_log("  [*] Element -> getAttributeNames[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNode       = Element.prototype.getAttributeNode       || v_saf(function getAttributeNode(){v_console_log("  [*] Element -> getAttributeNode[func]", [].slice.call(arguments));})
  Element.prototype.getAttributeNodeNS     = Element.prototype.getAttributeNodeNS     || v_saf(function getAttributeNodeNS(){v_console_log("  [*] Element -> getAttributeNodeNS[func]", [].slice.call(arguments));})
  Element.prototype.getBoundingClientRect  = Element.prototype.getBoundingClientRect  || v_saf(function getBoundingClientRect(){v_console_log("  [*] Element -> getBoundingClientRect[func]", [].slice.call(arguments));})
  Element.prototype.getClientRects         = Element.prototype.getClientRects         || v_saf(function getClientRects(){v_console_log("  [*] Element -> getClientRects[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByClassName = Element.prototype.getElementsByClassName || v_saf(function getElementsByClassName(){v_console_log("  [*] Element -> getElementsByClassName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagName   = Element.prototype.getElementsByTagName   || v_saf(function getElementsByTagName(){v_console_log("  [*] Element -> getElementsByTagName[func]", [].slice.call(arguments));})
  Element.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS || v_saf(function getElementsByTagNameNS(){v_console_log("  [*] Element -> getElementsByTagNameNS[func]", [].slice.call(arguments));})
  Element.prototype.getInnerHTML           = Element.prototype.getInnerHTML           || v_saf(function getInnerHTML(){v_console_log("  [*] Element -> getInnerHTML[func]", [].slice.call(arguments));})
  Element.prototype.hasAttribute           = Element.prototype.hasAttribute           || v_saf(function hasAttribute(){v_console_log("  [*] Element -> hasAttribute[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributeNS         = Element.prototype.hasAttributeNS         || v_saf(function hasAttributeNS(){v_console_log("  [*] Element -> hasAttributeNS[func]", [].slice.call(arguments));})
  Element.prototype.hasAttributes          = Element.prototype.hasAttributes          || v_saf(function hasAttributes(){v_console_log("  [*] Element -> hasAttributes[func]", [].slice.call(arguments));})
  Element.prototype.hasPointerCapture      = Element.prototype.hasPointerCapture      || v_saf(function hasPointerCapture(){v_console_log("  [*] Element -> hasPointerCapture[func]", [].slice.call(arguments));})
  Element.prototype.webkitMatchesSelector  = Element.prototype.webkitMatchesSelector  || v_saf(function webkitMatchesSelector(){v_console_log("  [*] Element -> webkitMatchesSelector[func]", [].slice.call(arguments));})
}
function v_init_DOMTokenList_prototype(){
  DOMTokenList.prototype.add = DOMTokenList.prototype.add || v_saf(function add(){v_console_log("  [*] DOMTokenList -> add[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.contains = DOMTokenList.prototype.contains || v_saf(function contains(){v_console_log("  [*] DOMTokenList -> contains[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.entries = DOMTokenList.prototype.entries || v_saf(function entries(){v_console_log("  [*] DOMTokenList -> entries[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.forEach = DOMTokenList.prototype.forEach || v_saf(function forEach(){v_console_log("  [*] DOMTokenList -> forEach[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.item = DOMTokenList.prototype.item || v_saf(function item(){v_console_log("  [*] DOMTokenList -> item[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.keys = DOMTokenList.prototype.keys || v_saf(function keys(){v_console_log("  [*] DOMTokenList -> keys[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.length = DOMTokenList.prototype.length || v_saf(function length(){v_console_log("  [*] DOMTokenList -> length[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.remove = DOMTokenList.prototype.remove || v_saf(function remove(){v_console_log("  [*] DOMTokenList -> remove[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.replace = DOMTokenList.prototype.replace || v_saf(function replace(){v_console_log("  [*] DOMTokenList -> replace[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.supports = DOMTokenList.prototype.supports || v_saf(function supports(){v_console_log("  [*] DOMTokenList -> supports[func]", [].slice.call(arguments));})
  DOMTokenList.prototype.toggle = DOMTokenList.prototype.toggle || v_saf(function toggle(){v_console_log("  [*] DOMTokenList -> toggle[func]", [].slice.call(arguments));})
}
function v_init_CSSStyleDeclaration_prototype(){
  CSSStyleDeclaration.prototype["zoom"] = ''
  CSSStyleDeclaration.prototype["resize"] = ''
  CSSStyleDeclaration.prototype["text-rendering"] = ''
  CSSStyleDeclaration.prototype["text-align-last"] = ''
}
function v_init_PointerEvent_prototype(){
  PointerEvent.prototype.getCoalescedEvents = v_saf(function getCoalescedEvents(){v_console_log("  [*] PointerEvent -> getCoalescedEvents[func]", [].slice.call(arguments));})
  PointerEvent.prototype.getPredictedEvents = v_saf(function getPredictedEvents(){v_console_log("  [*] PointerEvent -> getPredictedEvents[func]", [].slice.call(arguments));})
}
function v_init_PerformanceTiming_prototype(){
  try{
    Object.defineProperties(PerformanceTiming.prototype, {
      connectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectEnd(){v_console_log("  [*] PerformanceTiming -> connectEnd[get]", [].slice.call(arguments));})},
      connectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function connectStart(){v_console_log("  [*] PerformanceTiming -> connectStart[get]", [].slice.call(arguments));})},
      domComplete: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domComplete(){v_console_log("  [*] PerformanceTiming -> domComplete[get]", [].slice.call(arguments));})},
      domContentLoadedEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventEnd(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventEnd[get]", [].slice.call(arguments));})},
      domContentLoadedEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domContentLoadedEventStart(){v_console_log("  [*] PerformanceTiming -> domContentLoadedEventStart[get]", [].slice.call(arguments));})},
      domInteractive: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domInteractive(){v_console_log("  [*] PerformanceTiming -> domInteractive[get]", [].slice.call(arguments));})},
      domLoading: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domLoading(){v_console_log("  [*] PerformanceTiming -> domLoading[get]", [].slice.call(arguments));})},
      domainLookupEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupEnd(){v_console_log("  [*] PerformanceTiming -> domainLookupEnd[get]", [].slice.call(arguments));})},
      domainLookupStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function domainLookupStart(){v_console_log("  [*] PerformanceTiming -> domainLookupStart[get]", [].slice.call(arguments));})},
      fetchStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function fetchStart(){v_console_log("  [*] PerformanceTiming -> fetchStart[get]", [].slice.call(arguments));})},
      loadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventEnd(){v_console_log("  [*] PerformanceTiming -> loadEventEnd[get]", [].slice.call(arguments));})},
      loadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function loadEventStart(){v_console_log("  [*] PerformanceTiming -> loadEventStart[get]", [].slice.call(arguments));})},
      navigationStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function navigationStart(){v_console_log("  [*] PerformanceTiming -> navigationStart[get]", [].slice.call(arguments));})},
      redirectEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectEnd(){v_console_log("  [*] PerformanceTiming -> redirectEnd[get]", [].slice.call(arguments));})},
      redirectStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function redirectStart(){v_console_log("  [*] PerformanceTiming -> redirectStart[get]", [].slice.call(arguments));})},
      requestStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function requestStart(){v_console_log("  [*] PerformanceTiming -> requestStart[get]", [].slice.call(arguments));})},
      responseEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseEnd(){v_console_log("  [*] PerformanceTiming -> responseEnd[get]", [].slice.call(arguments));})},
      responseStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function responseStart(){v_console_log("  [*] PerformanceTiming -> responseStart[get]", [].slice.call(arguments));})},
      secureConnectionStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function secureConnectionStart(){v_console_log("  [*] PerformanceTiming -> secureConnectionStart[get]", [].slice.call(arguments));})},
      unloadEventEnd: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventEnd(){v_console_log("  [*] PerformanceTiming -> unloadEventEnd[get]", [].slice.call(arguments));})},
      unloadEventStart: {set: undefined, enumerable: true, configurable: true, get: v_saf(function unloadEventStart(){v_console_log("  [*] PerformanceTiming -> unloadEventStart[get]", [].slice.call(arguments));})},
    })
  }catch(e){}
}
function mk_atob_btoa(r){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t=new Array(-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,-1,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,-1,-1,-1,-1,-1);return{atob:function(r){var a,e,o,h,c,i,n;for(i=r.length,c=0,n="";c<i;){do{a=t[255&r.charCodeAt(c++)]}while(c<i&&-1==a);if(-1==a)break;do{e=t[255&r.charCodeAt(c++)]}while(c<i&&-1==e);if(-1==e)break;n+=String.fromCharCode(a<<2|(48&e)>>4);do{if(61==(o=255&r.charCodeAt(c++)))return n;o=t[o]}while(c<i&&-1==o);if(-1==o)break;n+=String.fromCharCode((15&e)<<4|(60&o)>>2);do{if(61==(h=255&r.charCodeAt(c++)))return n;h=t[h]}while(c<i&&-1==h);if(-1==h)break;n+=String.fromCharCode((3&o)<<6|h)}return n},btoa:function(r){var t,e,o,h,c,i;for(o=r.length,e=0,t="";e<o;){if(h=255&r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4),t+="==";break}if(c=r.charCodeAt(e++),e==o){t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2),t+="=";break}i=r.charCodeAt(e++),t+=a.charAt(h>>2),t+=a.charAt((3&h)<<4|(240&c)>>4),t+=a.charAt((15&c)<<2|(192&i)>>6),t+=a.charAt(63&i)}return t}}}
var atob_btoa = mk_atob_btoa()
window.btoa = window.btoa || v_saf(atob_btoa.btoa, 'btoa')
window.atob = window.atob || v_saf(atob_btoa.atob, 'atob')

init_cookie("v=A2OyRp75AlxGF85o7d3d8o9u9KwIWPewMew7zpXAv0I51I1SHSiH6kG8ywam")
v_hook_href(window.location, 'location', "http://q.10jqka.com.cn/")
v_hook_storage()
v_init_document()
v_init_canvas()
v_init_event_target()
v_init_Element_prototype()
v_init_DOMTokenList_prototype()
v_init_CSSStyleDeclaration_prototype()
v_init_PointerEvent_prototype()
v_init_PerformanceTiming_prototype()
window.innerWidth = 1344
window.innerHeight = 292
window.outerHeight = 874
window.outerWidth = 1344
window.isSecureContext = true
window.origin = location.origin

function v_getele(name, func){
  if(name == "J_username" && func == "getElementById"){ return v_new(HTMLAnchorElement) }
  if(name == "person_infos" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "maincont" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "zdfb" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "zdt" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "jrsy" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "dppj" && func == "getElementById"){ return v_new(HTMLDivElement) }
  if(name == "tzjy" && func == "getElementById"){ return v_new(HTMLParagraphElement) }
  if(name == "baseUrl" && func == "getElementById"){ return v_new(HTMLInputElement) }
  return null
}
function v_geteles(name, func){
  if(name == "*" && func == "getElementsByTagName"){ return [v_new(HTMLTableRowElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement),v_new(HTMLAnchorElement),v_new(HTMLElement),v_new(HTMLTableCellElement)] }
  if(name == "a" && func == "getElementsByTagName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "input" && func == "getElementsByTagName"){ return [v_new(HTMLInputElement)] }
  if(name == "link" && func == "getElementsByTagName"){ return [v_new(HTMLLinkElement)] }
  if(name == "e" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == "sizcache009565931911073289" && func == "getElementsByName"){ return [] }
  if(name == "[selected]" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == ":checked" && func == "querySelectorAll"){ return [v_new(HTMLOptionElement)] }
  if(name == ":enabled" && func == "querySelectorAll"){ return [v_new(HTMLInputElement)] }
  if(name == "head" && func == "getElementsByTagName"){ return [v_new(HTMLHeadElement)] }
  if(name == "script" && func == "getElementsByTagName"){ return [v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement),v_new(HTMLScriptElement)] }
  if(name == ".flash-single [data-code]" && func == "querySelectorAll"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == "body" && func == "getElementsByTagName"){ return [v_new(HTMLBodyElement)] }
  if(name == "td" && func == "getElementsByTagName"){ return [] }
  if(name == "login-box" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == "logined_box" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == "homeloginout" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement)] }
  if(name == "li" && func == "getElementsByTagName"){ return [v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement)] }
  if(name == "person_infos" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == "arr-trigger" && func == "getElementsByClassName"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "sub-nav" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == ".sub-nav .channel li" && func == "querySelectorAll"){ return [v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement),v_new(HTMLLIElement)] }
  if(name == "[id='maincont'] .m-table thead" && func == "querySelectorAll"){ return [v_new(HTMLTableSectionElement)] }
  if(name == "[id='sizcache009565931911073289'] tr th" && func == "querySelectorAll"){ return [v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement),v_new(HTMLTableCellElement)] }
  if(name == "table" && func == "getElementsByTagName"){ return [v_new(HTMLTableElement)] }
  if(name == "#maincont .m-pager" && func == "querySelectorAll"){ return [v_new(HTMLDivElement)] }
  if(name == "tab-hv-trigger" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == "m-pager-box" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == "[id='sizcache009565931911073289'] .m-pager-board a[board]" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "m-pager-table" && func == "getElementsByClassName"){ return [v_new(HTMLTableElement),v_new(HTMLTableElement)] }
  if(name == "[id='sizcache009565931911073289'] a[field]" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "[id='sizcache009565931911073289'] .m-pager a[page]" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "[id='sizcache009565931911073289'] .m-pager-board .cur a[board]" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement)] }
  if(name == "[id='sizcache009565931911073289'] .m-pager-table .cur a[field]" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement),v_new(HTMLAnchorElement)] }
  if(name == "[id='sizcache009565931911073289'] .m-pager a.cur" && func == "querySelectorAll"){ return [v_new(HTMLAnchorElement)] }
  if(name == ".hcharts-list .item" && func == "querySelectorAll"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == "[id='sizcache009565931911073289'] .detail span.c-rise" && func == "querySelectorAll"){ return [v_new(HTMLSpanElement)] }
  if(name == "[id='sizcache009565931911073289'] .detail span.c-fall" && func == "querySelectorAll"){ return [v_new(HTMLSpanElement)] }
  if(name == "tspan" && func == "getElementsByTagName"){ return [v_new(SVGTSpanElement)] }
  if(name == "[id='sizcache009565931911073289'] .detail span" && func == "querySelectorAll"){ return [v_new(HTMLSpanElement)] }
  if(name == "iframe:not([data-vue-devtools-ignore])" && func == "querySelectorAll"){ return [v_new(HTMLIFrameElement)] }
  if(name == "span" && func == "getElementsByTagName"){ return [v_new(HTMLSpanElement),v_new(HTMLSpanElement),v_new(HTMLSpanElement)] }
  if(name == "strong" && func == "getElementsByTagName"){ return [v_new(HTMLElement)] }
  if(name == "div" && func == "getElementsByTagName"){ return [v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement),v_new(HTMLDivElement)] }
  if(name == "fixed_thead" && func == "getElementsByClassName"){ return [v_new(HTMLDivElement)] }
  if(name == "[id='sizcache009565931911073289'] table thead" && func == "querySelectorAll"){ return [v_new(HTMLTableSectionElement)] }
  return null
}
var v_Date = Date;
var v_base_time = +new Date;
(function(){
  function ftime(){
    return new v_Date() - v_base_time + v_to_time
  }
  Date = function(_Date) {
    var bind = Function.bind;
    var unbind = bind.bind(bind);
    function instantiate(constructor, args) {
      return new (unbind(constructor, null).apply(null, args));
    }
    var names = Object.getOwnPropertyNames(_Date);
    for (var i = 0; i < names.length; i++) {
      if (names[i]in Date)
        continue;
      var desc = Object.getOwnPropertyDescriptor(_Date, names[i]);
      Object.defineProperty(Date, names[i], desc);
    }
    function Date() {
      var date = instantiate(_Date, [ftime()]);
      return date;
    }
    Date.prototype = _Date.prototype
    return v_saf(Date);
  }(Date);
  Date.now = v_saf(function now(){ return ftime() })
})();
var v_to_time = +new v_Date
// var v_to_time = +new v_Date('Sat Sep 03 2022 11:11:58 GMT+0800') // 自定义起始时间
v_new_toggle = undefined;

setInterval = function (){}
var TOKEN_SERVER_TIME = 1695966000.512;
!function(n, t) {
    !function() {
        var r, e, a;
        r = e = a = n;
        var u, c, s;
        u = c = s = t;
        function v() {
            var n = arguments[s[0]];
            if (!n)
                return r[0];
            for (var t = u[1], o = a[1], i = c[2]; i < n.length; i++) {
                var v = n.charCodeAt(i)
                  , f = v ^ o;
                o = v,
                t += e[2].fromCharCode(f)
            }
            return t
        }
        var f = c[3]
          , l = s[4]
          , p = Wn(e[3], r[4], s[5])
          , d = a[5]
          , h = Wn(c[6], s[7])
          , g = c[8]
          , w = c[9]
          , m = r[6]
          , I = u[10]
          , y = a[7]
          , _ = (s[11],
        c[12],
        s[13])
          , C = e[8]
          , E = u[14]
          , A = ot(e[9], e[10])
          , b = a[11]
          , T = u[15]
          , B = c[16]
          , R = r[12]
          , k = r[13]
          , S = s[17]
          , P = u[18]
          , M = Wn(s[19], s[20], u[21])
          , O = v(s[22], e[14])
          , D = s[23]
          , x = s[24]
          , N = u[25]
          , L = u[26]
          , W = Wn(s[27], r[15])
          , F = u[28]
          , Y = r[16]
          , j = a[17]
          , H = e[18]
          , $ = e[19]
          , U = r[20]
          , V = v(c[29], e[21], e[22])
          , X = s[30]
          , G = s[31]
          , K = s[32]
          , Q = s[33]
          , Z = r[23]
          , q = r[24]
          , z = v(u[12], u[34], s[35])
          , J = u[36]
          , nn = a[25]
          , tn = s[37]
          , rn = c[38]
          , en = r[26]
          , an = c[39]
          , on = s[40]
          , un = a[27]
          , cn = u[41]
          , sn = ot(s[42], c[43])
          , vn = r[28]
          , fn = u[8]
          , ln = s[44]
          , pn = a[29]
          , dn = s[45]
          , hn = a[30]
          , gn = c[46]
          , wn = a[31]
          , mn = a[32]
          , In = s[47]
          , yn = r[33]
          , _n = a[34]
          , Cn = c[48]
          , En = a[8]
          , An = v(a[35], s[49])
          , bn = c[50]
          , Tn = c[51]
          , Bn = at(r[36], s[52])
          , Rn = ot(r[37], e[38])
          , kn = e[39]
          , Sn = u[53]
          , Pn = r[40]
          , Mn = s[54]
          , On = s[55]
          , Dn = Wn(u[56], r[41], r[42])
          , xn = r[43]
          , Nn = u[57]
          , Ln = e[44];
        function Wn() {
            return arguments[u[0]].split(e[0]).reverse().join(c[1])
        }
        var Fn = r[45], Yn = Wn(c[58], e[46]), jn = v(s[59], u[60]), Hn = Wn(r[47], s[61]), $n = s[62], Un = s[63], Vn = u[2], Xn = [new u[27](r[48]), new u[27](c[64])], Gn = [new e[47](ot(a[49])), new u[27](ot(a[50], u[65]))], Kn = c[66][f + l] || r[51].getElementsByTagName(p + d)[r[52]], Qn;
        !function(n) {
            n[e[53]] = s[67];
            function t(n) {
                var t = r[51][u[68]]
                  , o = u[69] + n + s[70]
                  , i = t.indexOf(o);
                if (i == -e[54]) {
                    if (o = n + c[70],
                    t.substr(r[52], o.length) != o)
                        return;
                    i = a[52]
                }
                var f = i + o[v(u[71], s[72])]
                  , l = t.indexOf(r[55], f);
                return l == -a[54] && (l = t[a[56]]),
                t.substring(f, l)
            }
            n[a[57]] = f;
            function o(n, t, a, o, i) {
                var c = n + r[58] + t;
                o && (c += e[59] + o),
                i && (c += v(Jn, u[73], s[74]) + i),
                a && (c += u[75] + a),
                u[66][u[68]] = c
            }
            n[s[76]] = t;
            function i(n, t, r) {
                this.setCookie(n, u[1], u[77], t, r)
            }
            n[s[78]] = o;
            function f() {
                var t = a[60];
                this.setCookie(t, u[67]),
                this.getCookie(t) || (n[r[53]] = e[61]),
                this.delCookie(t)
            }
            n[Wn(N, r[62], c[79])] = i
        }(Qn || (Qn = {}));
        var Zn;
        !function(n) {
            var t = u[80], o = v(nn, s[81], u[82]), i = s[67], f, l = u[83][Wn(u[84], e[63])], p, d;
            function g(n) {
                var t = j;
                return t = dn,
                i ? y(n) : f ? w(n) : void u[2]
            }
            function w(n) {
                E(function() {
                    return n = R(n),
                    f.getAttribute(n)
                })()
            }
            function m() {
                try {
                    return !!(o in s[83] && s[83][o])
                } catch (n) {
                    return void u[2]
                }
            }
            function I(n) {
                try {
                    f.removeItem(n)
                } catch (t) {}
            }
            n[c[85]] = C;
            function y(n) {
                try {
                    return f.getItem(n)
                } catch (t) {
                    return u[86]
                }
            }
            n[c[87]] = B;
            function _(n, t) {
                try {
                    f.setItem(n, t)
                } catch (r) {}
            }
            function C() {
                var n = e[64]
                  , r = u[88];
                if (i = m(),
                i)
                    f = a[65][o];
                else if (l[at(e[66])][at(e[67], a[68])])
                    try {
                        p = new ActiveXObject(Wn(a[69], s[89], l)),
                        p.open(),
                        p.write(s[90]),
                        p.close(),
                        d = p.w[e[70]][s[2]][e[71]],
                        f = d.createElement(n + t + r)
                    } catch (c) {
                        f = l.createElement(o),
                        d = l[Wn(u[91], a[72])] || l.getElementsByTagName(s[92])[s[2]] || l[a[73]]
                    }
            }
            function E(n) {
                return function() {
                    d.appendChild(f),
                    f.addBehavior(s[93]),
                    f.load(o);
                    var t = n();
                    return d.removeChild(f),
                    t
                }
            }
            n[c[94]] = g;
            function A(n) {
                var t, r, e;
                if (t = r = e = a,
                i)
                    I(n);
                else {
                    if (!f)
                        return void e[52];
                    b(n)
                }
            }
            function b(n) {
                E(function() {
                    n = R(n),
                    f.removeAttribute(n),
                    f.save(o)
                })()
            }
            function T(n, t) {
                E(function() {
                    n = R(n),
                    f.setAttribute(n, t),
                    f.save(o)
                })()
            }
            n[a[74]] = A;
            function B(n, t) {
                if (void 0 === t)
                    return A(n);
                if (i)
                    _(n, t);
                else {
                    if (!f)
                        return void u[2];
                    T(n, t)
                }
            }
            function R(n) {
                var t = s[95]
                  , e = r[75]
                  , a = new r[47](t + h + e,c[96]);
                return n.replace(new c[27](u[97]), v(s[98], s[99], s[100])).replace(a, c[101])
            }
        }(Zn || (Zn = {}));
        var qn = function() {
            var n, t, r;
            n = t = r = a;
            var e, o, i;
            e = o = i = s;
            var u = o[15]
              , c = o[102]
              , f = e[103];
            function l(r) {
                var a = o[102]
                  , i = e[103];
                this[n[76]] = r;
                for (var u = t[52], c = r[a + g + i]; u < c; u++)
                    this[u] = t[52]
            }
            return l[e[104]][w + m + I + u] = function() {
                for (var a = e[105], u = this[a + y], c = [], s = -e[0], v = o[2], f = u[r[56]]; v < f; v++)
                    for (var l = this[v], p = u[v], d = s += p; c[d] = l & parseInt(t[77], n[78]),
                    --p != r[52]; )
                        --d,
                        l >>= parseInt(n[79], i[106]);
                return c
            }
            ,
            l[v(t[80], t[81], b)][ot(i[107])] = function(n) {
                for (var r = e[8], a = this[ot(e[108], e[109])], o = t[52], u = e[2], s = a[c + r + f]; u < s; u++) {
                    var v = a[u]
                      , l = i[2];
                    do {
                        l = (l << t[82]) + n[o++]
                    } while (--v > t[52]);
                    this[u] = l >>> i[2]
                }
            }
            ,
            l
        }(), zn;
        !function(n) {
            var t = s[13]
              , o = c[53]
              , i = r[83]
              , f = r[84]
              , l = s[110]
              , d = r[85]
              , h = r[86];
            function g(n, a, o, i, u) {
                for (var c = s[13], v = r[87], f = n[s[111]]; a < f; )
                    o[i++] = n[a++] ^ u & parseInt(c + v + t + _, r[88]),
                    u = ~(u * parseInt(e[89], e[82]))
            }
            function w(n) {
                for (var t = c[112], i = r[52], v = n[s[111]], f = []; i < v; ) {
                    var l = n[i++] << parseInt(C + t, c[113]) | n[i++] << e[82] | n[i++];
                    f.push(m.charAt(l >> parseInt(e[90], e[82])), m.charAt(l >> parseInt(s[114], e[78]) & parseInt(a[91], r[88])), m.charAt(l >> u[59] & parseInt(E + o, a[78])), m.charAt(l & parseInt(a[92], u[113])))
                }
                return f.join(e[0])
            }
            for (var m = at(u[115], s[116]), I = {}, y = u[2]; y < parseInt(i + A, e[93]); y++)
                I[m.charAt(y)] = y;
            function O(n) {
                var t, r, e;
                t = r = e = s;
                var o, i, u;
                o = i = u = a;
                for (var c = ot(i[94]), l = e[2], p = n[o[56]], d = []; l < p; ) {
                    var h = I[n.charAt(l++)] << parseInt(at(t[117]), u[82]) | I[n.charAt(l++)] << parseInt(v(t[118], u[95], e[119]), o[88]) | I[n.charAt(l++)] << t[59] | I[n.charAt(l++)];
                    d.push(h >> parseInt(e[120], t[106]), h >> parseInt(t[121], r[122]) & parseInt(f + b + c, t[106]), h & parseInt(o[96], u[88]))
                }
                return d
            }
            function D(n) {
                var t = O(n);
                if (rn,
                p,
                t[r[52]] != h)
                    return error = T + B + l,
                    void 0;
                var a = t[c[0]]
                  , o = [];
                return g(t, +parseInt(e[79], c[122]), o, +u[2], a),
                x(o) == a ? o : void 0
            }
            function x(n) {
                var t = o;
                t = Vn;
                for (var e = c[2], i = a[52], u = n[c[111]]; i < u; i++)
                    e = (e << s[123]) - e + n[i];
                return e & parseInt(s[124], r[88])
            }
            function N(n) {
                var t = et
                  , r = x(n)
                  , e = [h, r];
                return g(n, +a[52], e, +a[88], r),
                t = P,
                w(e)
            }
            n[e[97]] = w,
            n[R + k + S] = O,
            n[u[125]] = N,
            n[d + P + M] = D
        }(zn || (zn = {}));
        var Jn;
        !function(n) {
            var t = Fn
              , o = at(c[126], a[98])
              , i = r[99]
              , f = v(U, u[127])
              , l = s[128]
              , p = ot(a[100])
              , d = r[5]
              , h = r[101]
              , g = ot(u[129])
              , w = s[130]
              , m = r[102]
              , C = a[103]
              , E = e[104];
            function A(n) {
                for (var t = (Tn,
                I,
                []), e = r[52]; e < n[c[111]]; e++)
                    t.push(n.charCodeAt(e));
                return t
            }
            function b() {
                var n = new e[105];
                try {
                    return time = s[52].now(),
                    time / parseInt(c[131], a[88]) >>> c[2]
                } catch (t) {
                    return time = n.getTime(),
                    time / parseInt(s[121], s[84]) >>> r[52]
                }
            }
            function T(n) {
                var t = u[8]
                  , o = {}
                  , i = function(n, o) {
                    var i = c[102], f, l, p, d;
                    for (o = o.replace(s[132], u[1]),
                    o = o.substring(u[0], o[e[56]] - c[0]),
                    f = o.split(c[133]),
                    p = c[2]; p < f[i + t + O]; p++)
                        if (l = f[p].split(v(r[106], c[134])),
                        l && !(l[r[56]] < s[122])) {
                            for (d = r[88]; d < l[r[56]]; d++)
                                l[r[54]] = l[r[54]] + r[107] + l[d];
                            l[s[2]] = new r[47](c[135]).test(l[e[52]]) ? l[a[52]].substring(u[0], l[e[52]][D + x] - c[0]) : l[a[52]],
                            l[r[54]] = new a[47](c[135]).test(l[r[54]]) ? l[e[54]].substring(s[0], l[a[54]][a[56]] - u[0]) : l[s[0]],
                            n[l[c[2]]] = l[e[54]]
                        }
                    return n
                };
                return new r[47](e[108]).test(n) && (o = i(o, n)),
                o
            }
            function B(n) {
                var t, e, a;
                t = e = a = c;
                var u, s, v;
                if (u = s = v = r,
                typeof n === ot(s[109], sn) && n[Wn(y, a[136], s[110])])
                    try {
                        switch (parseInt(n[e[137]])) {
                        case parseInt(a[131], t[122]):
                            break;
                        case parseInt(v[111], s[78]):
                            top[e[138]][v[112]] = n[t[139]];
                            break;
                        case parseInt(u[113], e[122]):
                            top[o + i + N][e[140]] = n[s[114]];
                            break;
                        default:
                            break
                        }
                    } catch (f) {}
            }
            function R(n, t, r) {
                var e, a, o;
                e = a = o = u,
                q ? n.addEventListener(t, r) : n.attachEvent(a[25] + t, r)
            }
            function k() {
                return Math.random() * parseInt(u[141], r[78]) >>> r[52]
            }
            function S(n, t) {
                var o = en
                  , i = new r[47](e[115],a[116]);
                o = T;
                var s = new u[27](v(p, r[117], m));
                if (n) {
                    var f = n.match(i);
                    if (f) {
                        var l = f[u[0]];
                        return t && s.test(l) && (l = l.split(r[118]).pop().split(r[107])[c[2]]),
                        l
                    }
                }
            }
            function P(n) {
                var t = mn
                  , o = c[142]
                  , i = r[119]
                  , v = e[120]
                  , I = a[121];
                if (!(n > e[122])) {
                    n = n || a[52];
                    var y = parseInt(u[143], e[78])
                      , _ = a[51].createElement(u[144]);
                    t = Q,
                    _[c[145]] = location[r[123]] + a[124] + parseInt((new r[105]).getTime() / y) + (f + o + l),
                    _[e[125]] = function() {
                        Vn = u[0],
                        setTimeout(function() {
                            P(++n)
                        }, n * parseInt(e[126], u[84]))
                    }
                    ,
                    _[p + L + d] = _[s[146]] = function() {
                        var n, t, r;
                        n = t = r = a;
                        var e, o, u;
                        e = o = u = c;
                        var s = e[147];
                        this[t[127]] && this[i + W] !== o[148] && this[u[149]] !== o[150] && this[s + F + h] !== u[151] || (Vn = n[52],
                        _[e[152]] = _[g + w + v] = n[128])
                    }
                    ,
                    c[66][m + I].appendChild(_)
                }
            }
            function M(n) {
                var t, e, a;
                t = e = a = r;
                var o, i, u;
                return o = i = u = s,
                new u[27](t[129]).test(n)
            }
            function X() {
                var n = new s[52];
                return typeof TOKEN_SERVER_TIME == s[153] ? r[52] : (time = parseInt(TOKEN_SERVER_TIME),
                time)
            }
            function G(n) {
                var t, e, a;
                t = e = a = s;
                var o, i, u;
                o = i = u = r;
                for (var c = u[52], v = a[2], f = n[o[56]]; v < f; v++)
                    c = (c << a[123]) - c + n.charCodeAt(v),
                    c >>>= o[52];
                return c
            }
            function K(n) {
                var t = new s[27](e[130],s[80]);
                if (n) {
                    return n.match(t)
                }
            }
            function Z(n) {
                var t = new u[27](c[154]);
                if (M(n))
                    return n;
                var o = t.test(n) ? -a[86] : -parseInt(r[79], e[88]);
                return (tn,
                _,
                n.split(s[155])).slice(o).join(a[131])
            }
            n[Y + C + j] = T,
            t = En,
            n[c[156]] = P,
            n[ot(u[157])] = B,
            n[r[132]] = A,
            n[c[158]] = G,
            n[c[159]] = k,
            n[r[133]] = M,
            n[s[160]] = Z,
            n[E + H] = S,
            n[$ + U] = K,
            n[s[161]] = z,
            n[s[162]] = b,
            n[r[134]] = X;
            var q = !!a[65][a[135]];
            function z(n) {
                for (var t = v(O, u[163]), a = e[136], o = s[2], i = n[V + t + a] - s[0]; i >= r[52]; i--)
                    o = o << r[54] | +n[i];
                return o
            }
            n[u[164]] = R
        }(Jn || (Jn = {}));
        var nt;
        !function(n) {
            var t = u[165]
              , o = a[137]
              , i = at(s[166], s[167])
              , v = u[168]
              , f = a[138]
              , l = c[169]
              , p = ot(s[170], B)
              , d = a[52]
              , h = r[52]
              , g = c[2]
              , w = c[2]
              , m = c[2]
              , I = s[2]
              , y = s[67]
              , _ = t + X in s[66].createElement(s[171]) ? o + G + i : s[172]in c[66] ? u[173] : v + K + f + Q;
            Jn.eventBind(s[66], _, S),
            Jn.eventBind(a[51], r[139], T),
            Jn.eventBind(u[66], Wn(e[140], e[141], s[174]), T),
            Jn.eventBind(c[66], l + Z + q, M),
            Jn.eventBind(u[66], c[175], b);
            function C() {
                return w
            }
            function E() {
                return d
            }
            function b(n) {
                w++
            }
            function T(n) {
                d++
            }
            function R() {
                return h
            }
            function k() {
                return g
            }
            function S(n) {
                h++
            }
            function P() {
                return {
                    x: m,
                    y: I,
                    trusted: y
                }
            }
            function M(n) {
                var t, r, e;
                t = r = e = a;
                var o, i, u;
                o = i = u = c;
                var s = (S,
                A,
                u[36]);
                g++,
                y = void 0 == n[s + z] || n[J + nn],
                m = n[ot(r[142], o[84])],
                I = n[i[176]]
            }
            n[e[143]] = E,
            n[ot(e[144])] = R,
            n[e[145]] = k,
            n[u[177]] = C,
            n[tn + p + rn] = P
        }(nt || (nt = {}));
        var tt;
        !function(n) {
            var t = e[146]
              , f = c[4]
              , l = c[178]
              , p = u[179]
              , h = r[147]
              , g = r[148]
              , m = e[149]
              , I = s[102]
              , y = v(rn, u[180], zn)
              , _ = at(r[150], Y)
              , C = a[151]
              , E = u[181]
              , A = c[182]
              , b = e[152]
              , B = u[183]
              , R = s[184]
              , k = a[64];
            BROWSER_LIST = {
                _1: function() {
                    return c[185]in r[65]
                },
                _2: function() {
                    return a[153]in r[65]
                },
                _3: function() {
                    return e[154]in u[83]
                },
                _4: function() {
                    var n = J
                      , r = u[186]
                      , o = s[187];
                    return n = et,
                    e[155]in e[65] && !(r + o + t in a[51].getElementsByTagName(en + f)[s[2]])
                },
                _5: function() {
                    return e[155]in s[83] && !(e[156]in c[83])
                },
                _6: function() {
                    var n, t, r;
                    n = t = r = c;
                    var e, o, u;
                    return e = o = u = a,
                    e[155]in t[83] && !i
                },
                _7: function() {
                    var n, t, r;
                    n = t = r = a;
                    var e, o, i;
                    return e = o = i = u,
                    o[188]in o[83] && !o[83][r[157]]
                },
                _8: function() {
                    return a[155]in e[65] && !e[65][e[158]]
                },
                _9: function() {
                    return u[188]in s[83] && r[65][e[158]]
                },
                _10: function() {
                    var n, t, r;
                    n = t = r = a;
                    var e, o, i;
                    e = o = i = c;
                    var u = o[189];
                    return n[159] === navigator[an + u + on]
                },
                _11: function() {
                    return ot(u[190]) === navigator[r[160]]
                },
                _12: function() {
                    var n, t, r;
                    return n = t = r = s,
                    at(t[191])in r[83]
                },
                _13: function() {
                    var n, t, r;
                    n = t = r = s;
                    var a, o, i;
                    return a = o = i = e,
                    i[161]in t[83]
                },
                _14: function() {
                    return new u[27](a[162],r[116]).test(navigator.appVersion)
                },
                _15: function() {
                    return e[163]in navigator
                },
                _16: function() {
                    return new c[27](u[192],ot(u[193])).test(navigator.vendor)
                },
                _17: function() {
                    return u[194]in u[83]
                },
                _18: function() {
                    return u[195]in c[83] && new r[47](s[196],e[116]).test(o)
                },
                _19: function() {
                    var n, t, r;
                    n = t = r = s;
                    var a, i, u;
                    a = i = u = e;
                    var c = ot(i[164], i[165])
                      , v = u[166];
                    return l + c + v in t[83] && new n[27](u[167],t[80]).test(o)
                },
                _20: function() {
                    var n = u[197];
                    return r[161]in u[83] && new r[47](n + un).test(o)
                },
                _21: function() {
                    return ot(s[198], r[168])in r[65] && new c[27](c[199],r[116]).test(o)
                },
                _22: function() {
                    var n = x;
                    return n = S,
                    s[195]in e[65] && new c[27](a[169]).test(o)
                },
                _23: function() {
                    var n, t, r;
                    n = t = r = c;
                    var a, i, u;
                    return a = i = u = e,
                    u[161]in a[65] && new t[27](u[170]).test(o)
                },
                _24: function() {
                    return s[195]in r[65] && s[200]in e[65]
                },
                _25: function() {
                    var n = w;
                    return n = Q,
                    cn + sn in u[83]
                }
            };
            function P() {
                var n = v(q, e[171], r[172]);
                return plugin_num = a[52],
                navigator[u[201]] && (plugin_num = navigator[p + h + n][c[111]]),
                plugin_num
            }
            function M() {
                for (var n in BROWSER_LIST)
                    if (BROWSER_LIST.hasOwnProperty(n)) {
                        var t = BROWSER_LIST[n];
                        if (t())
                            return +n.substr(u[0])
                    }
                return s[2]
            }
            var O = navigator[s[201]];
            function D() {
                var n, t, r;
                n = t = r = s;
                var e, o, i;
                e = o = i = a;
                var u = e[173];
                return at(e[174]) == (navigator[g + vn + u + m] || navigator[n[202]])
            }
            function N(n) {
                if (!e[65][at(s[191])])
                    return !a[54];
                var t;
                try {
                    t = new a[65][a[155]](n)
                } catch (r) {
                    return !u[0]
                }
                return !!t
            }
            function L() {
                return a[65][a[175]][a[176]]
            }
            function W() {
                for (var n = [], t = r[52]; t < parseInt(a[79], a[93]); t++)
                    n[t] = tn[t]();
                return Jn.booleanToDecimal(n)
            }
            function F() {
                var t = (n,
                d,
                navigator[r[177]]);
                return t && t[I + fn + y] > a[52]
            }
            function j() {
                return z(new a[47](ln + pn + _,s[80])) || N(s[203])
            }
            function H() {
                return z(new a[47](Wn(s[204], r[178]),e[116]))
            }
            function $() {
                var n = Y
                  , t = at(a[179], a[180]);
                n = J;
                var r;
                try {
                    r = c[66].createElement(dn + t).getContext(c[205])
                } catch (e) {}
                return !!r
            }
            function U() {
                return -parseInt(r[181], u[113]) === (new c[52]).getTimezoneOffset()
            }
            function V() {
                var n, t, e;
                n = t = e = r;
                var a, o, i;
                a = o = i = u;
                for (var c = navigator[o[206]], s = o[2]; s < An[o[111]]; s++)
                    if (An[s].test(c))
                        return s + e[54];
                return i[2]
            }
            function X() {
                var n = (m,
                B,
                a[182]);
                return z(new r[47](C + n + hn))
            }
            function G() {
                return gn + E + wn + A in a[51]
            }
            function K() {
                var n, t, r;
                return n = t = r = c,
                r[86]
            }
            function Z() {
                return u[86]
            }
            function q() {
                return navigator.javaEnabled()
            }
            function z(n) {
                var t = T;
                t = h;
                for (var r = a[52]; r < O[u[111]]; r++) {
                    var e = O[r][s[207]];
                    if (n.test(e))
                        return !a[52]
                }
                return !c[0]
            }
            function J() {
                var n, t, r;
                return n = t = r = e,
                n[183] === r[51][t[184]]
            }
            function nn() {
                var n, t, r;
                return n = t = r = c,
                n[86]
            }
            var tn = [q, j, H, X, L, En, D, bn, G, U, $, F, J, nn, Z, K];
            function En() {
                var n = Nn;
                n = un;
                try {
                    return a[185]in s[83]
                } catch (t) {
                    return s[86]
                }
            }
            var An = [new a[47](u[208]), new a[47](e[186]), new e[47](a[187]), new s[27](mn + In), new e[47](r[188]), new u[27](e[189]), new s[27](s[209]), new u[27](u[210]), new a[47](b + yn), new e[47](B + R + k), new c[27](u[211])];
            function bn() {
                return new u[27](ot(r[190]),u[80]).test(navigator[s[212]] || navigator[_n + Cn])
            }
            n[s[213]] = V,
            n[c[214]] = M,
            n[e[191]] = P,
            n[e[192]] = W
        }(tt || (tt = {}));
        var rt;
        !function(n) {
            var t = e[87], o = a[8], i = e[8], f = s[215], l = r[52], p = s[0], d = parseInt(c[216], u[122]), h = e[86], g = u[217], w = u[123], m = e[165], I = parseInt(t + En, c[122]), y = parseInt(a[79], a[82]), _ = c[218], C = parseInt(a[193], e[82]), E = parseInt(o + i, r[78]), A = parseInt(u[219], s[122]), b = parseInt(f + An, s[106]), T = parseInt(r[194], s[106]), B = parseInt(ot(s[220], e[195]), r[82]), R = parseInt(e[196], u[122]), k = parseInt(e[197], a[78]), S;
            function P() {
                var n = s[0]
                  , t = r[88]
                  , e = parseInt(u[13], c[122])
                  , a = s[217];
                S = new qn([a, a, a, a, n, n, n, e, t, t, t, t, t, t, t, a, t, n]),
                S[p] = Jn.serverTimeNow(),
                M(),
                S[B] = Vn,
                S[k] = Un,
                S[R] = c[2],
                S[h] = Jn.strhash(navigator.userAgent),
                S[b] = tt.getBrowserFeature(),
                S[g] = tt.getPlatform(),
                S[w] = tt.getBrowserIndex(),
                S[m] = tt.getPluginNum()
            }
            function M() {
                var n = Qn.getCookie(Fn) || Zn.get(jn);
                if (n && n[s[111]] == parseInt(c[221], e[93])) {
                    var t = zn.decode(n);
                    if (t && (S.decodeBuffer(t),
                    S[l] != s[2]))
                        return
                }
                S[l] = Jn.random()
            }
            function O() {
                S[R]++,
                S[p] = Jn.serverTimeNow(),
                S[d] = Jn.timeNow(),
                S[B] = Vn,
                S[I] = nt.getMouseMove(),
                S[y] = nt.getMouseClick(),
                S[_] = nt.getMouseWhell(),
                S[C] = nt.getKeyDown(),
                S[E] = nt.getClickPos().x,
                S[A] = nt.getClickPos().y;
                var n = S.toBuffer();
                return zn.encode(n)
            }
            Hexin = O
            n[e[57]] = P;
            function D() {
                return O()
            }
            n[v(an, a[198], r[199])] = D
        }(rt || (rt = {}));
        var et;
        function at() {
            var n, t, r;
            n = t = r = u;
            var a, o, i;
            a = o = i = e;
            var c = arguments[o[52]];
            if (!c)
                return t[1];
            for (var s = o[0], v = o[1], f = a[52]; f < c.length; f++) {
                var l = c.charCodeAt(f)
                  , p = l ^ v;
                v = v * f % n[222] + o[200],
                s += i[2].fromCharCode(p)
            }
            return s
        }
        !function(n) {
            var t, r, e;
            t = r = e = a;
            var o, i, c;
            o = i = c = u;
            var s = c[223], f = t[201], l = i[224], p = o[225], d = t[202], h = i[92], g = e[203], w = o[226], m = c[110], I = c[223], y = !!r[65][r[135]], _, E, A, T, B, R;
            function k(n) {
                var r = o[227]
                  , e = t[204];
                return j(n) && Qn[r + e + s]
            }
            function S(n, t, e) {
                var a, i, u;
                a = i = u = o;
                var c, s, v;
                c = s = v = r;
                var f = b;
                if (f = En,
                Wn(v[205], s[206])in t)
                    return t.apply(n, e);
                switch (e[v[56]]) {
                case v[52]:
                    return t();
                case i[0]:
                    return t(e[c[52]]);
                case u[122]:
                    return t(e[c[52]], e[a[0]]);
                default:
                    return t(e[u[2]], e[v[88]], e[i[63]])
                }
            }
            function P() {
                var n, t, r;
                n = t = r = i;
                var a, o, u;
                a = o = u = e,
                U(o[65], n[188], function(r) {
                    return function(e) {
                        if (e && new t[27](f + l,v(Fn, n[228])).test(e))
                            try {
                                D()
                            } catch (o) {
                                return a[207]
                            }
                        return new r(e)
                    }
                })
            }
            function M() {
                var n = t[51].getElementsByTagName(c[229]);
                function a(a) {
                    if (!new i[27](at(o[230])).test(a.protocol))
                        return r[61];
                    var u = a[i[231]];
                    if (!u) {
                        var s = n[i[2]];
                        s && (u = s[t[208]])
                    }
                    if ((!u || new e[47](ot(c[232], $n),c[80]).test(u)) && (a[o[140]].split(i[233])[e[52]] == _ && a[at(i[234], c[235])]))
                        return i[86];
                    return e[44]
                }
                Jn.eventBind(t[51], r[209], function(n) {
                    var t = i[236];
                    n = n || event;
                    var r = n[bn + t + p] || n[Wn(o[5], c[237], o[238])];
                    do {
                        if (r[i[240]] == i[241]) {
                            a(r) && D();
                            break
                        }
                    } while (r = r[i[239]])
                }),
                Jn.eventBind(i[66], o[242], D),
                Ln || Jn.eventBind(o[83], e[210], D)
            }
            function O() {
                var n = ot(o[243])
                  , e = o[244];
                _ = location[c[140]].split(o[233])[i[2]],
                E = location[n + Tn + e],
                T = location[i[245]],
                B = location[ot(t[211])],
                A = Jn.getRootDomain(E),
                R = new o[27](i[246] + A.replace(new r[47](t[212],i[96]), ot(c[247], r[213])) + t[214],r[116]),
                M(),
                Y(),
                N(),
                $(),
                D()
            }
            function D() {
                var n = rt.update();
                return Qn.setCookie(Fn, n, o[248], A, t[215]),
                Zn.set(jn, n),
                n
            }
            function N() {
                var n = B;
                n = Un;
                var r = ot(c[249]);
                H(t[216], function(n) {
                    return function(t, a) {
                        var i, u, c;
                        i = u = c = e;
                        var s, v, f;
                        s = v = f = o,
                        f[22][i[217]][f[250]].call(t) === v[251] && (t = t[u[218]] || i[0]);
                        var l = D();
                        return a = a || {},
                        Qn[at(u[219], K)] ? X(t) ? k || (t = L(t)) : a[i[220]] ? a[v[252]][jn] = l : (a[s[252]] = new Headers,
                        a[u[220]].append(jn, l)) : (l = rt.update(),
                        a[f[252]] ? a[Bn + d][jn] = l : (a[h + r] = new Headers,
                        a[i[220]].append(jn, l))),
                        n.call(this, t, a)
                    }
                })
            }
            function L(n) {
                for (var a = rt.update(), u = Gn, s = c[2]; s < u[Rn + kn]; s++)
                    if (u[s].test(n))
                        return n;
                return n + (new t[47](v(r[82], r[221], t[222])).test(n) ? Wn(c[253], i[254], bn) : e[223]) + Yn + c[70] + o[255](a)
            }
            function W(n) {
                var t = cn
                  , a = i[16]
                  , u = e[43];
                t = C;
                var s;
                U(n, c[256], function(n) {
                    return function() {
                        var t, r, a;
                        t = r = a = i;
                        var o, u, c;
                        o = u = c = e;
                        try {
                            X(arguments[o[54]]) && !k(arguments[a[0]]) ? arguments[t[0]] = L(arguments[r[0]]) : s = D(),
                            n.apply(this, arguments),
                            X(arguments[r[0]]) || (Qn[u[53]] || (s = rt.update()),
                            this.setRequestHeader(jn, s))
                        } catch (v) {
                            return o[207]
                        }
                    }
                }),
                U(n, c[257], function(n) {
                    var t = w;
                    return t = p,
                    function() {
                        var t, e, i;
                        t = e = i = r;
                        var c, s, v;
                        c = s = v = o;
                        var f = c[258];
                        try {
                            if (parseInt(this.status) === parseInt(f + g + Sn, e[78])) {
                                for (var l = n.apply(this, arguments), p = new s[27](i[224],t[225]), d, h, w = {}; d = p.exec(l); )
                                    w[d[s[0]].toLowerCase()] = d[i[88]];
                                Jn.analysisRst(Jn.parse(w[$n.toLowerCase()]))
                            }
                        } catch (m) {
                            return Pn + a + u
                        }
                        return n.apply(this, arguments)
                    }
                })
            }
            function Y() {
                var n = i[83][Wn(x, c[259])];
                n && W(n.prototype),
                r[65][o[188]] && P()
            }
            function j(n) {
                var r = rn;
                r = p;
                var e = Jn.getHostFromUrl(n, t[44]);
                return e ? R.test(e) : t[44]
            }
            function H(n, t) {
                if (n in i[83]) {
                    c[83].hasOwnProperty(n) && U(i[83], n, t);
                    var r = e[65][c[260]];
                    if (r) {
                        var a = r[o[104]];
                        a.hasOwnProperty(n) && U(a, n, t)
                    }
                }
            }
            function $() {
                var n = at(c[261])
                  , e = c[262]
                  , a = r[226];
                function u(n) {
                    return function(t) {
                        try {
                            s(t)
                        } catch (r) {
                            return r
                        }
                        return S(this, n, arguments)
                    }
                }
                function s(r) {
                    var u = it
                      , c = i[50]
                      , s = at(o[263], i[264]);
                    if (r && r[c + s + Mn + On] == n + e + Dn) {
                        var v = r[t[227]];
                        u = F,
                        V(v) || (k(v) ? D() : r[a + xn + w] = L(r.src))
                    }
                }
                function v(n) {
                    y ? U(Element.prototype, n, u) : (U(Kn, n, u),
                    U(r[51].body, n, u))
                }
                t[65][Hn] = Jn[t[228]],
                v(at(r[229])),
                v(r[230])
            }
            function U(n, a, i) {
                var u = D
                  , s = c[265]
                  , v = ot(t[231]);
                if (!n)
                    return e[61];
                var f = n[a];
                if (u = S,
                !f)
                    return o[86];
                var l = i(f);
                return y || (l[c[266]] = f + t[0]),
                l[s + m + v + I] = f,
                n[a] = l,
                r[44]
            }
            function V(n) {
                var t = Xn
                  , e = o[83][r[232]];
                e && (t = t.concat(e));
                for (var a = i[2]; a < t[c[111]]; a++)
                    if (t[a].test(n))
                        return o[67];
                return o[86]
            }
            function X(n) {
                var t = Jn.getOriginFromUrl(n);
                return t ? !new r[47](e[233] + T).test(t[c[122]]) || !new o[27](B).test(t[r[54]]) : e[61]
            }
            n[t[57]] = O
        }(et || (et = {}));
        function ot() {
            var n, t, e;
            n = t = e = c;
            var a, o, i;
            a = o = i = r;
            var u = arguments[a[52]];
            if (!u)
                return o[0];
            for (var s = a[0], v = n[267], f = o[200], l = t[2]; l < u.length; l++) {
                var p = u.charCodeAt(l);
                f = (f + t[0]) % v.length,
                p ^= v.charCodeAt(f),
                s += i[2].fromCharCode(p)
            }
            return s
        }
        var it;
        !function(n) {
            var t = Wn(r[234], e[235]);
            function o() {
                try {
                    c()
                } catch (n) {
                    return n
                }
            }
            function i() {
                var n = parseInt(t + Nn, s[113]);
                setInterval(function() {
                    Jn.getServerTime()
                }, n)
            }
            function c() {
                Qn.Init(),
                Zn.Init(),
                rt.Init(),
                et.Init(),
                i()
            }
            u[83][v(r[236], e[237])] || (o(),
            u[83][a[238]] = a[44])
        }(it || (it = {}))
    }()
}(["", 9527, String, Boolean, "eh", "ad", "Bu", "ileds", "1", "\b", Array, "7", "base", "64De", "\u2543\u252b", "etatS", "pa", "e", "FromUrl", "getOrigi", "nFromUrl", "\u255b\u253e", "b?\x18q)", "ic", "k", "sted", "he", "wser", "oNo", "ckw", "ent", "hst", "^And", "RM", "systemL", 5, "\u255f\u0978\u095b\u09f5", "TR8", "!'", "gth", "er", "TP", 83, "r", !0, "v", "v-nixeh", RegExp, "thsi.cn", 'K\x19"]K^xVV', "KXxAPD?\x1b[Y", document, 0, "allow", 1, "; ", "length", "Init", "=", "; domain=", "checkcookie", !1, "eikooCled", "tnemucod", "d", window, "\u2553\u0972\u0959\u09e4\u09bd\u0938\u0980\u09c5\u09b1\u09d1\u09a7\u09dc\u09dd\u09d3\u09c2", "\u2556\u0979\u095e\u09d3\u09b5\u0935\u098f\u09c7\u099d\u09d2\u09b0", 23, "l$P$~", "frames", "ducument", "ydob", "documentElement", "del", "@[\\]^`{|}~]", "base_fileds", "255", 10, "10", 39, "\u2547\u2535\u255a\u252e\u2541\u2535\u254c\u253c\u2559", 8, "4", "3", "de", 3, "11", 2, "203", "22", "111111", "3f", 16, "\x0f", "\u2506\u2537\u2507\u2537", "11111111", "base64Encode", "v\x1d", "ati", "WY", "te", "bo", "rs", "getHost", Date, "{DF", ":", "^{.*}$", "WU<P[C", 52, "1001", "href", "1111101010", "redirect_url", "^\\s*(?:https?:)?\\/{2,}([^\\/\\?\\#\\\\]+)", "i", "\u256c\u252c\u2516\u254b", "@", "ready", "change", "dy", 7, "protocol", "//s.thsi.cn/js/chameleon/time.1", "onerror", "2000", "readyState", null, "^(\\d+\\.)+\\d+$", "^\\s*(?:(https?:))?\\/{2,}([^\\/\\?\\#\\\\]+)", ".", "strToBytes", "isIPAddr", "serverTimeNow", "addEventListener", "th", "wh", "Scro", "mousemove", 55, "evomhcuot", "[[?PVC\x0e", "getMouseMove", '_R"xWB%Po_3YT', "getMouseClick", "ght", "gin", "msD", "ack", "\u2556\u096b\u095f", "Nativ", "^A", "MozSettingsEvent", "safari", "ActiveXObject", "postMessage", "Uint8Array", "WeakMap", "Google Inc.", "vendor", "chrome", "python", "sgAppName", "JX", 6, "me", "LBBROWSER", "w4", "2345Explorer", "TheWorld", "\u2544", 40, "tTr", "\u2506", "navigator", "webdriver", "languages", "taborcA|FDP", "\u2541\u097c\u0949", 95, "1e0", "e Cli", "iso-8859-1", "defaultCharset", "localStorage", "^Win64", "^Linux armv|Android", "^iPhone", "^iPad", "B_{VV", "getPluginNum", "getBrowserFeature", "12", "16", "sE", "10000", "17", "\u2542\u2532\u2556\u2537\u2543\u2526", "\x1cx`R", 2333, "XMLH", "ers", "0", "lo", 57, "ylppa", "error", "target", "click", "unload", "HE9AWT9Y", "\\.", "c?", "$", "/", "fetch", "prototype", "url", "\u2556\u0971\u0956\u09fe\u09a7", "headers", "\u256b\u2554", 79, "?", "^(.*?):[ \\t]*([^\\r\\n]*)\\r?$", "gm", "s", "src", "analysisRst", "\u255e\u0973\u0949\u09f4\u09a2\u0929\u09ac\u09d4\u0992\u09d2\u09b0\u09d4", "appendChild", "Y", "jsonp_ignore", "^", 70, "421", "XH>a", "\u2574\u253c\u257d\u2530\u2575\u2539\u257c\u2533\u257d\u2522\u256e\u2521\u2560\u2524\u2561\u2525", "CHAMELEON_LOADED"], [1, "", 0, "he", "ad", 29, "\x180G\x1f", "?>=<;:\\\\/,+", "ng", "to", "ff", Number, Error, "11", "6", "er", "ro", "code", "co", "_?L", "ed", "@S\x15D*", Object, "len", "gth", "on", "lo", RegExp, "ySta", 13, "eel", "ee", "ouse", "ll", "\u2544\u2530\u2555\u2531", "FCm-", "isTru", "getC", "Pos", "ve", "or", "ae", "^", "On", "Sho", "can", "ont", "roid", "anguage", "\u2502", "ta", "tna", Date, "3", "am", "e", "n+", "f80", "\x1dD", 6, "\u255f\u253a\u2542\u252b\u2545\u2568\u251e", "KCABLLAC_NOELEMAHC", "X-Antispider-Message", 3, ".baidu.", Function, document, !0, "cookie", "; ", "=", 96, "\u255b\u253e\u2550\u2537\u2543\u252b", "\u250c\u252c\u255c\u253d\u2549\u2521\u251c", ";O", "; expires=", "getCookie", "Thu, 01 Jan 1970 00:00:00 GMT", "setCookie", "Z\x18|", "i", "\u255b\u2534\u2557\u2536\u255a\u2509\u257d\u2512\u2560\u2501\u2566\u2503", 52, window, 10, "Init", !1, "set", "v", "eliflmth", '<script>document.w=window<\/script><iframe src="/favicon.icon"></iframe>', "iS.p", "head", "#default#userData", "get", "[!\"#$%&'()*", "g", "^d", "$D", "\u2568\u2537\u2568\u254c\u256a", "]\\P", "___", "le", "th", "prototype", "base_f", 8, "\\R5Z\\R\x14@^Q3G", "ZV%PgQ?Y]S%", 67, "r", "length", "0", 16, "12", "\u2576\u095f\u0979\u09d5\u0995\u091b\u09a9\u09f9\u09bd\u09f7\u0989\u09fd\u09f5\u09f3\u09f9\u0a41\u0a4d\u098f\u0999\u0905\u0975\u09cb\u09a9\u09a9\u099d\u0927\u0933\u0913\u0a6b\u0999\u09a3\u0937\u098b\u09f5\u0933\u0a7b\u091b\u09b1\u0a63\u095f\u09fb\u094d\u0993\u0943\u092b\u0949\u09a3\u09e7\u09cb\u0925\u0993\u09ab\u09f0\u092c\u092c\u0942\u0950\u09c8\u0944\u09c6\u0990\u0944\u09cb\u098e", "i,", "\u2505\u092f", 12, 56, "20", "1000", 2, 5, "11111111", "encode", "\u255b\u0972\u0959", "\u2519", "s", "WY$PYS", "ystate", "1111101000", / /g, ",", "\u250d", '^".*"$', "edoc_sutats", "status_code", "location", "redirect_url", "href", "4294967295", "j", "1200000", "script", "src", "onreadystatechange", "read", "loaded", "readyState", "complete", "interactive", "onload", "undefined", "\\.com\\.cn$|\\.com\\.hk$", ".", "getServerTime", 'YY7YAD?FjD"', "strhash", "random", "getRootDomain", "booleanToDecimal", "timeNow", "\u2559\u253e", "eventBind", "onwh", "\u255b", 46, "DOMM", "cl", "T^5^", "div", "onmousewheel", "mousewheel", 51, "keydown", "clientY", "getKeyDown", "ch", "plu", "\u2543\u252b", "ouc", "art", "^i", "Po", "callPhantom", "max", "Hei", "ActiveXObject", "nd", "yG&Y]\x17\x15ZUG#A]Ez\x15qY5\x1b", "\u2576\u097e\u094e\u09f8\u09a6\u0938\u09b6\u09fe\u0996\u09d7\u09a7\u09d2\u09cc", "Maxthon", "Q", "opr", "chrome", "BIDUBrowser", "QQBro", "[_$ZUR", "UBrowser", "MSGesture", "plugins", "doNotTrack", "ShockwaveFlash.ShockwaveFlash", "]C|\x18", "webgl2", "platform", "name", "^Win32", "^MacIntel", "^Linux [ix]\\d+", "^BlackBerry", "language", "getPlatform", "getBrowserIndex", "1", "10", 4, 9, "1100", "\t\0", "3c", 256, "w", "TTP", "et", "c", "al", "\u255e", "base", "\u2569\u0975\u094e\u09e5\u09a0\u092e\u09d1\u09ed\u09ce", "target", "fh%PTQr", "#", "\u255f\u097c\u0949\u09f9", 97, "rg", "tnemelEcrs", "fn_Ws", "parentNode", "tagName", "A", "submit", "PX%", "me", "host", "\\.?", "d\x19", "Fri, 01 Feb 2050 00:00:00 GMT", "]E%", "toString", "[object Request]", "headers", 83, "&", encodeURIComponent, "open", "getAllResponseHeaders", "4", "tseuqeRpttHLMX", "Window", "\u2564\u095e", "RI", "\u2550\u0953", "(YaZ", "_", "_str", "V587"]);

function get_v(){
    return Hexin()
}

console.log(get_v())