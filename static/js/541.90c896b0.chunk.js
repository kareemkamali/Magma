"use strict";(self.webpackChunkmagmasolutions=self.webpackChunkmagmasolutions||[]).push([[541],{4595:function(t,e,n){n.d(e,{Z:function(){return b}});var s=n(7462),r=n(3366),a=n(1721);function i(t,e){return t.replace(new RegExp("(^|\\s)"+e+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var o=n(2791),l=n(4164),u=!1,p=o.createContext(null),c="unmounted",d="exited",f="entering",E="entered",h="exiting",m=function(t){function e(e,n){var s;s=t.call(this,e,n)||this;var r,a=n&&!n.isMounting?e.enter:e.appear;return s.appearStatus=null,e.in?a?(r=d,s.appearStatus=f):r=E:r=e.unmountOnExit||e.mountOnEnter?c:d,s.state={status:r},s.nextCallback=null,s}(0,a.Z)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===c?{status:d}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==f&&n!==E&&(e=f):n!==f&&n!==E||(e=h)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,s=this.props.timeout;return t=e=n=s,null!=s&&"number"!==typeof s&&(t=s.exit,e=s.enter,n=void 0!==s.appear?s.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===f?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===d&&this.setState({status:c})},n.performEnter=function(t){var e=this,n=this.props.enter,s=this.context?this.context.isMounting:t,r=this.props.nodeRef?[s]:[l.findDOMNode(this),s],a=r[0],i=r[1],o=this.getTimeouts(),p=s?o.appear:o.enter;!t&&!n||u?this.safeSetState({status:E},(function(){e.props.onEntered(a)})):(this.props.onEnter(a,i),this.safeSetState({status:f},(function(){e.props.onEntering(a,i),e.onTransitionEnd(p,(function(){e.safeSetState({status:E},(function(){e.props.onEntered(a,i)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:l.findDOMNode(this);e&&!u?(this.props.onExit(s),this.safeSetState({status:h},(function(){t.props.onExiting(s),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:d},(function(){t.props.onExited(s)}))}))}))):this.safeSetState({status:d},(function(){t.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,e.nextCallback=null,t(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:l.findDOMNode(this),s=null==t&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],a=r[0],i=r[1];this.props.addEndListener(a,i)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===c)return null;var e=this.props,n=e.children,s=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,(0,r.Z)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.createElement(p.Provider,{value:null},"function"===typeof n?n(t,s):o.cloneElement(o.Children.only(n),s))},e}(o.Component);function x(){}m.contextType=p,m.propTypes={},m.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},m.UNMOUNTED=c,m.EXITED=d,m.ENTERING=f,m.ENTERED=E,m.EXITING=h;var v=m,g=function(t,e){return t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.remove(s):"string"===typeof n.className?n.className=i(n.className,s):n.setAttribute("class",i(n.className&&n.className.baseVal||"",s)));var n,s}))},C=function(t){function e(){for(var e,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},e.onEnter=function(t,n){var s=e.resolveArguments(t,n),r=s[0],a=s[1];e.removeClasses(r,"exit"),e.addClass(r,a?"appear":"enter","base"),e.props.onEnter&&e.props.onEnter(t,n)},e.onEntering=function(t,n){var s=e.resolveArguments(t,n),r=s[0],a=s[1]?"appear":"enter";e.addClass(r,a,"active"),e.props.onEntering&&e.props.onEntering(t,n)},e.onEntered=function(t,n){var s=e.resolveArguments(t,n),r=s[0],a=s[1]?"appear":"enter";e.removeClasses(r,a),e.addClass(r,a,"done"),e.props.onEntered&&e.props.onEntered(t,n)},e.onExit=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"appear"),e.removeClasses(n,"enter"),e.addClass(n,"exit","base"),e.props.onExit&&e.props.onExit(t)},e.onExiting=function(t){var n=e.resolveArguments(t)[0];e.addClass(n,"exit","active"),e.props.onExiting&&e.props.onExiting(t)},e.onExited=function(t){var n=e.resolveArguments(t)[0];e.removeClasses(n,"exit"),e.addClass(n,"exit","done"),e.props.onExited&&e.props.onExited(t)},e.resolveArguments=function(t,n){return e.props.nodeRef?[e.props.nodeRef.current,t]:[t,n]},e.getClassNames=function(t){var n=e.props.classNames,s="string"===typeof n,r=s?""+(s&&n?n+"-":"")+t:n[t];return{baseClassName:r,activeClassName:s?r+"-active":n[t+"Active"],doneClassName:s?r+"-done":n[t+"Done"]}},e}(0,a.Z)(e,t);var n=e.prototype;return n.addClass=function(t,e,n){var s=this.getClassNames(e)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===e&&"done"===n&&r&&(s+=" "+r),"active"===n&&t&&t.scrollTop,s&&(this.appliedClasses[e][n]=s,function(t,e){t&&e&&e.split(" ").forEach((function(e){return s=e,void((n=t).classList?n.classList.add(s):function(t,e){return t.classList?!!e&&t.classList.contains(e):-1!==(" "+(t.className.baseVal||t.className)+" ").indexOf(" "+e+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(t,s))},n.removeClasses=function(t,e){var n=this.appliedClasses[e],s=n.base,r=n.active,a=n.done;this.appliedClasses[e]={},s&&g(t,s),r&&g(t,r),a&&g(t,a)},n.render=function(){var t=this.props,e=(t.classNames,(0,r.Z)(t,["classNames"]));return o.createElement(v,(0,s.Z)({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},e}(o.Component);C.defaultProps={classNames:""},C.propTypes={};var b=C},885:function(t,e,n){n.d(e,{Z:function(){return r}});var s=n(8192);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var s,r,a=[],i=!0,o=!1;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(a.push(s.value),!e||a.length!==e);i=!0);}catch(l){o=!0,r=l}finally{try{i||null==n.return||n.return()}finally{if(o)throw r}}return a}}(t,e)||(0,s.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},8192:function(t,e,n){function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function r(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}n.d(e,{Z:function(){return r}})}}]);
//# sourceMappingURL=541.90c896b0.chunk.js.map