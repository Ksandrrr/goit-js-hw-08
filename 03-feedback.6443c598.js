!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,v=l||d||Function("return this")(),s=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return v.Date.now()};function g(e,t,n){var r,i,a,u,f,c,l=0,d=!1,v=!1,s=!0;if("function"!=typeof e)throw new TypeError(o);function g(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function S(e){return l=e,f=setTimeout(h,t),d?g(e):u}function x(e){var n=e-c;return void 0===c||n>=t||n<0||v&&e-l>=a}function h(){var e=b();if(x(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return v?p(n,a-(e-l)):n}(e))}function w(e){return f=void 0,s&&r?g(e):(r=i=void 0,u)}function T(){var e=b(),n=x(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(v)return f=setTimeout(h,t),g(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(d=!!n.leading,a=(v="maxWait"in n)?m(j(n.maxWait)||0,t):a,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},T.flush=function(){return void 0===f?u:w(b())},T}function y(e){var n=void 0===e?"undefined":t(r)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(r)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var o=u.test(e);return o||f.test(e)?c(e.slice(2),o?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:r,maxWait:t,trailing:i})};var S={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};S.form.addEventListener("submit",n((function(e){e.preventDefault(),localStorage.clear();var t={name:x,email:h};if(""===t.name||""===t.email)return;e.target.reset(),console.log(t)}),500)),S.textarea.addEventListener("input",n((function(e){x=e.target.value,localStorage.setItem("feedback-form-state",x)}),500)),S.input.addEventListener("input",n((function(e){h=e.target.value,localStorage.setItem("feedback-form-input",h)}),500)),function(){var e=localStorage.getItem("feedback-form-state");e&&(S.textarea.value=e);var t=localStorage.getItem("feedback-form-input");t&&(S.input.value=t)}();var x="",h=""}();
//# sourceMappingURL=03-feedback.6443c598.js.map