var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,i=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,g=function(){return c.Date.now()};function m(e,t,n){var r,a,o,i,u,f,c=0,l=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=a;return r=a=void 0,c=t,i=e.apply(o,n)}function S(e){return c=e,u=setTimeout(x,t),l?y(e):i}function O(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-c>=o}function x(){var e=g();if(O(e))return j(e);u=setTimeout(x,function(e){var n=t-(e-f);return m?d(n,o-(e-c)):n}(e))}function j(e){return u=void 0,b&&r?y(e):(r=a=void 0,i)}function T(){var e=g(),n=O(e);if(r=arguments,a=this,f=e,n){if(void 0===u)return S(f);if(m)return u=setTimeout(x,t),y(f)}return void 0===u&&(u=setTimeout(x,t)),i}return t=v(t)||0,p(n)&&(l=!!n.leading,o=(m="maxWait"in n)?s(v(n.maxWait)||0,t):o,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=f=a=u=void 0},T.flush=function(){return void 0===u?i:j(g())},T}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function v(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=a.test(e);return u||o.test(e)?i(e.slice(2),u?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),m(e,t,{leading:r,maxWait:t,trailing:a})};const b={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),textarea:document.querySelector("textarea")};b.form.addEventListener("submit",t((function(e){e.preventDefault(),console.log(O),e.currentTarget.reset(),localStorage.clear(),O={}}),500)),b.textarea.addEventListener("input",t((function(e){localStorage.setItem("feedback-form-state",JSON.stringify(O)),y=localStorage.getItem("feedback-form-state"),S=JSON.parse(y),O.message=e.target.value,""===e.target.value&&(e.target.value="")}),500)),b.input.addEventListener("input",t((function(e){localStorage.setItem("feedback-form-state",JSON.stringify(O)),y=localStorage.getItem("feedback-form-state"),S=JSON.parse(y),O.email=e.target.value,""===e.target.value&&(e.target.value="")}),500));let y,S,O={};!function(){const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);t&&(b.input.value=t.email,O.email=t.email);t&&(b.textarea.value=t.message,O.message=t.message)}();
//# sourceMappingURL=03-feedback.bb815546.js.map
