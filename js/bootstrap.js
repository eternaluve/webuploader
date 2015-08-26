/*
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if(typeof jQuery==="undefined"){throw new Error("Bootstrap's JavaScript requires jQuery")}+function(b){function a(){var e=document.createElement("bootstrap");var d={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in d){if(e.style[c]!==undefined){return{end:d[c]}}}return false}b.fn.emulateTransitionEnd=function(e){var d=false,c=this;b(this).one(b.support.transition.end,function(){d=true});var f=function(){if(!d){b(c).trigger(b.support.transition.end)}};setTimeout(f,e);return this};b(function(){b.support.transition=a()})}(jQuery);+function(d){var c='[data-dismiss="alert"]';var b=function(e){d(e).on("click",c,this.close)};b.prototype.close=function(j){var i=d(this);var g=i.attr("data-target");if(!g){g=i.attr("href");g=g&&g.replace(/.*(?=#[^\s]*$)/,"")}var h=d(g);if(j){j.preventDefault()}if(!h.length){h=i.hasClass("alert")?i:i.parent()}h.trigger(j=d.Event("close.bs.alert"));if(j.isDefaultPrevented()){return}h.removeClass("in");function f(){h.trigger("closed.bs.alert").remove()}d.support.transition&&h.hasClass("fade")?h.one(d.support.transition.end,f).emulateTransitionEnd(150):f()};var a=d.fn.alert;d.fn.alert=function(e){return this.each(function(){var g=d(this);var f=g.data("bs.alert");if(!f){g.data("bs.alert",(f=new b(this)))}if(typeof e=="string"){f[e].call(g)}})};d.fn.alert.Constructor=b;d.fn.alert.noConflict=function(){d.fn.alert=a;return this};d(document).on("click.bs.alert.data-api",c,b.prototype.close)}(jQuery);+function(c){var b=function(e,d){this.$element=c(e);this.options=c.extend({},b.DEFAULTS,d);this.isLoading=false};b.DEFAULTS={loadingText:"loading..."};b.prototype.setState=function(g){var i="disabled";var e=this.$element;var h=e.is("input")?"val":"html";var f=e.data();g=g+"Text";if(!f.resetText){e.data("resetText",e[h]())}e[h](f[g]||this.options[g]);setTimeout(c.proxy(function(){if(g=="loadingText"){this.isLoading=true;e.addClass(i).attr(i,i)}else{if(this.isLoading){this.isLoading=false;e.removeClass(i).removeAttr(i)}}},this),0)};b.prototype.toggle=function(){var e=true;var d=this.$element.closest('[data-toggle="buttons"]');if(d.length){var f=this.$element.find("input");if(f.prop("type")=="radio"){if(f.prop("checked")&&this.$element.hasClass("active")){e=false}else{d.find(".active").removeClass("active")}}if(e){f.prop("checked",!this.$element.hasClass("active")).trigger("change")}}if(e){this.$element.toggleClass("active")}};var a=c.fn.button;c.fn.button=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.button");var e=typeof d=="object"&&d;if(!f){g.data("bs.button",(f=new b(this,e)))}if(d=="toggle"){f.toggle()}else{if(d){f.setState(d)}}})};c.fn.button.Constructor=b;c.fn.button.noConflict=function(){c.fn.button=a;return this};c(document).on("click.bs.button.data-api","[data-toggle^=button]",function(f){var d=c(f.target);if(!d.hasClass("btn")){d=d.closest(".btn")}d.button("toggle");f.preventDefault()})}(jQuery);+function(b){var c=function(e,d){this.$element=b(e);this.$indicators=this.$element.find(".carousel-indicators");this.options=d;this.paused=this.sliding=this.interval=this.$active=this.$items=null;this.options.pause=="hover"&&this.$element.on("mouseenter",b.proxy(this.pause,this)).on("mouseleave",b.proxy(this.cycle,this))};c.DEFAULTS={interval:5000,pause:"hover",wrap:true};c.prototype.cycle=function(d){d||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval(b.proxy(this.next,this),this.options.interval));return this};c.prototype.getActiveIndex=function(){this.$active=this.$element.find(".item.active");this.$items=this.$active.parent().children();return this.$items.index(this.$active)};c.prototype.to=function(f){var e=this;var d=this.getActiveIndex();if(f>(this.$items.length-1)||f<0){return}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){e.to(f)})}if(d==f){return this.pause().cycle()}return this.slide(f>d?"next":"prev",b(this.$items[f]))};c.prototype.pause=function(d){d||(this.paused=true);if(this.$element.find(".next, .prev").length&&b.support.transition){this.$element.trigger(b.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};c.prototype.next=function(){if(this.sliding){return}return this.slide("next")};c.prototype.prev=function(){if(this.sliding){return}return this.slide("prev")};c.prototype.slide=function(k,f){var m=this.$element.find(".item.active");var d=f||m[k]();var j=this.interval;var l=k=="next"?"left":"right";var g=k=="next"?"first":"last";var h=this;if(!d.length){if(!this.options.wrap){return}d=this.$element.find(".item")[g]()}if(d.hasClass("active")){return this.sliding=false}var i=b.Event("slide.bs.carousel",{relatedTarget:d[0],direction:l});this.$element.trigger(i);if(i.isDefaultPrevented()){return}this.sliding=true;j&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");this.$element.one("slid.bs.carousel",function(){var e=b(h.$indicators.children()[h.getActiveIndex()]);e&&e.addClass("active")})}if(b.support.transition&&this.$element.hasClass("slide")){d.addClass(k);d[0].offsetWidth;m.addClass(l);d.addClass(l);m.one(b.support.transition.end,function(){d.removeClass([k,l].join(" ")).addClass("active");m.removeClass(["active",l].join(" "));h.sliding=false;setTimeout(function(){h.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(m.css("transition-duration").slice(0,-1)*1000)}else{m.removeClass("active");d.addClass("active");this.sliding=false;this.$element.trigger("slid.bs.carousel")}j&&this.cycle();return this};var a=b.fn.carousel;b.fn.carousel=function(d){return this.each(function(){var h=b(this);var g=h.data("bs.carousel");var e=b.extend({},c.DEFAULTS,h.data(),typeof d=="object"&&d);var f=typeof d=="string"?d:e.slide;if(!g){h.data("bs.carousel",(g=new c(this,e)))}if(typeof d=="number"){g.to(d)}else{if(f){g[f]()}else{if(e.interval){g.pause().cycle()}}}})};b.fn.carousel.Constructor=c;b.fn.carousel.noConflict=function(){b.fn.carousel=a;return this};b(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(j){var i=b(this),f;var d=b(i.attr("data-target")||(f=i.attr("href"))&&f.replace(/.*(?=#[^\s]+$)/,""));var g=b.extend({},d.data(),i.data());var h=i.attr("data-slide-to");if(h){g.interval=false}d.carousel(g);if(h=i.attr("data-slide-to")){d.data("bs.carousel").to(h)}j.preventDefault()});b(window).on("load",function(){b('[data-ride="carousel"]').each(function(){var d=b(this);d.carousel(d.data())})})}(jQuery);+function(b){var c=function(e,d){this.$element=b(e);this.options=b.extend({},c.DEFAULTS,d);this.transitioning=null;if(this.options.parent){this.$parent=b(this.options.parent)}if(this.options.toggle){this.toggle()}};c.DEFAULTS={toggle:true};c.prototype.dimension=function(){var d=this.$element.hasClass("width");return d?"width":"height"};c.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return}var e=b.Event("show.bs.collapse");this.$element.trigger(e);if(e.isDefaultPrevented()){return}var h=this.$parent&&this.$parent.find("> .panel > .in");if(h&&h.length){var f=h.data("bs.collapse");if(f&&f.transitioning){return}h.collapse("hide");f||h.data("bs.collapse",null)}var i=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[i](0);this.transitioning=1;var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!b.support.transition){return d.call(this)}var g=b.camelCase(["scroll",i].join("-"));this.$element.one(b.support.transition.end,b.proxy(d,this)).emulateTransitionEnd(350)[i](this.$element[0][g])};c.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return}var e=b.Event("hide.bs.collapse");this.$element.trigger(e);if(e.isDefaultPrevented()){return}var f=this.dimension();this.$element[f](this.$element[f]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse").removeClass("in");this.transitioning=1;var d=function(){this.transitioning=0;this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};if(!b.support.transition){return d.call(this)}this.$element[f](0).one(b.support.transition.end,b.proxy(d,this)).emulateTransitionEnd(350)};c.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var a=b.fn.collapse;b.fn.collapse=function(d){return this.each(function(){var g=b(this);var f=g.data("bs.collapse");var e=b.extend({},c.DEFAULTS,g.data(),typeof d=="object"&&d);if(!f&&e.toggle&&d=="show"){d=!d}if(!f){g.data("bs.collapse",(f=new c(this,e)))}if(typeof d=="string"){f[d]()}})};b.fn.collapse.Constructor=c;b.fn.collapse.noConflict=function(){b.fn.collapse=a;return this};b(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(j){var l=b(this),d;var k=l.attr("data-target")||j.preventDefault()||(d=l.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,"");var f=b(k);var h=f.data("bs.collapse");var i=h?"toggle":l.data();var m=l.attr("data-parent");var g=m&&b(m);if(!h||!h.transitioning){if(g){g.find('[data-toggle=collapse][data-parent="'+m+'"]').not(l).addClass("collapsed")}l[f.hasClass("in")?"addClass":"removeClass"]("collapsed")}f.collapse(i)})}(jQuery);+function(g){var e=".dropdown-backdrop";var b="[data-toggle=dropdown]";var a=function(h){g(h).on("click.bs.dropdown",this.toggle)};a.prototype.toggle=function(l){var k=g(this);if(k.is(".disabled, :disabled")){return}var j=f(k);var i=j.hasClass("open");d();if(!i){if("ontouchstart" in document.documentElement&&!j.closest(".navbar-nav").length){g('<div class="dropdown-backdrop"/>').insertAfter(g(this)).on("click",d)}var h={relatedTarget:this};j.trigger(l=g.Event("show.bs.dropdown",h));if(l.isDefaultPrevented()){return}j.toggleClass("open").trigger("shown.bs.dropdown",h);k.focus()}return false};a.prototype.keydown=function(l){if(!/(38|40|27)/.test(l.keyCode)){return}var k=g(this);l.preventDefault();l.stopPropagation();if(k.is(".disabled, :disabled")){return}var j=f(k);var i=j.hasClass("open");if(!i||(i&&l.keyCode==27)){if(l.which==27){j.find(b).focus()}return k.click()}var m=" li:not(.divider):visible a";var n=j.find("[role=menu]"+m+", [role=listbox]"+m);if(!n.length){return}var h=n.index(n.filter(":focus"));if(l.keyCode==38&&h>0){h--}if(l.keyCode==40&&h<n.length-1){h++}if(!~h){h=0}n.eq(h).focus()};function d(h){g(e).remove();g(b).each(function(){var j=f(g(this));var i={relatedTarget:this};if(!j.hasClass("open")){return}j.trigger(h=g.Event("hide.bs.dropdown",i));if(h.isDefaultPrevented()){return}j.removeClass("open").trigger("hidden.bs.dropdown",i)})}function f(j){var h=j.attr("data-target");if(!h){h=j.attr("href");h=h&&/#[A-Za-z]/.test(h)&&h.replace(/.*(?=#[^\s]*$)/,"")}var i=h&&g(h);return i&&i.length?i:j.parent()}var c=g.fn.dropdown;g.fn.dropdown=function(h){return this.each(function(){var j=g(this);var i=j.data("bs.dropdown");if(!i){j.data("bs.dropdown",(i=new a(this)))}if(typeof h=="string"){i[h].call(j)}})};g.fn.dropdown.Constructor=a;g.fn.dropdown.noConflict=function(){g.fn.dropdown=c;return this};g(document).on("click.bs.dropdown.data-api",d).on("click.bs.dropdown.data-api",".dropdown form",function(h){h.stopPropagation()}).on("click.bs.dropdown.data-api",b,a.prototype.toggle).on("keydown.bs.dropdown.data-api",b+", [role=menu], [role=listbox]",a.prototype.keydown)}(jQuery);+function(c){var b=function(e,d){this.options=d;this.$element=c(e);this.$backdrop=this.isShown=null;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,c.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};b.DEFAULTS={backdrop:true,keyboard:true,show:true};b.prototype.toggle=function(d){return this[!this.isShown?"show":"hide"](d)};b.prototype.show=function(g){var d=this;var f=c.Event("show.bs.modal",{relatedTarget:g});this.$element.trigger(f);if(this.isShown||f.isDefaultPrevented()){return}this.isShown=true;this.escape();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',c.proxy(this.hide,this));this.backdrop(function(){var i=c.support.transition&&d.$element.hasClass("fade");if(!d.$element.parent().length){d.$element.appendTo(document.body)}d.$element.show().scrollTop(0);if(i){d.$element[0].offsetWidth}d.$element.addClass("in").attr("aria-hidden",false);d.enforceFocus();var h=c.Event("shown.bs.modal",{relatedTarget:g});i?d.$element.find(".modal-dialog").one(c.support.transition.end,function(){d.$element.focus().trigger(h)}).emulateTransitionEnd(300):d.$element.focus().trigger(h)})};b.prototype.hide=function(d){if(d){d.preventDefault()}d=c.Event("hide.bs.modal");this.$element.trigger(d);if(!this.isShown||d.isDefaultPrevented()){return}this.isShown=false;this.escape();c(document).off("focusin.bs.modal");this.$element.removeClass("in").attr("aria-hidden",true).off("click.dismiss.bs.modal");c.support.transition&&this.$element.hasClass("fade")?this.$element.one(c.support.transition.end,c.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal()};b.prototype.enforceFocus=function(){c(document).off("focusin.bs.modal").on("focusin.bs.modal",c.proxy(function(d){if(this.$element[0]!==d.target&&!this.$element.has(d.target).length){this.$element.focus()}},this))};b.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.bs.modal",c.proxy(function(d){d.which==27&&this.hide()},this))}else{if(!this.isShown){this.$element.off("keyup.dismiss.bs.modal")}}};b.prototype.hideModal=function(){var d=this;this.$element.hide();this.backdrop(function(){d.removeBackdrop();d.$element.trigger("hidden.bs.modal")})};b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};b.prototype.backdrop=function(f){var e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=c.support.transition&&e;this.$backdrop=c('<div class="modal-backdrop '+e+'" />').appendTo(document.body);this.$element.on("click.dismiss.bs.modal",c.proxy(function(g){if(g.target!==g.currentTarget){return}this.options.backdrop=="static"?this.$element[0].focus.call(this.$element[0]):this.hide.call(this)},this));if(d){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!f){return}d?this.$backdrop.one(c.support.transition.end,f).emulateTransitionEnd(150):f()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");c.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(c.support.transition.end,f).emulateTransitionEnd(150):f()}else{if(f){f()}}}};var a=c.fn.modal;c.fn.modal=function(d,e){return this.each(function(){var h=c(this);var g=h.data("bs.modal");var f=c.extend({},b.DEFAULTS,h.data(),typeof d=="object"&&d);if(!g){h.data("bs.modal",(g=new b(this,f)))}if(typeof d=="string"){g[d](e)}else{if(f.show){g.show(e)}}})};c.fn.modal.Constructor=b;c.fn.modal.noConflict=function(){c.fn.modal=a;return this};c(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(i){var h=c(this);var f=h.attr("href");var d=c(h.attr("data-target")||(f&&f.replace(/.*(?=#[^\s]+$)/,"")));var g=d.data("bs.modal")?"toggle":c.extend({remote:!/#/.test(f)&&f},d.data(),h.data());if(h.is("a")){i.preventDefault()}d.modal(g,this).one("hide",function(){h.is(":visible")&&h.focus()})});c(document).on("show.bs.modal",".modal",function(){c(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){c(document.body).removeClass("modal-open")})}(jQuery);+function(c){var b=function(e,d){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null;this.init("tooltip",e,d)};b.DEFAULTS={animation:true,placement:"top",selector:false,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:false,container:false};b.prototype.init=function(k,h,f){this.enabled=true;this.type=k;this.$element=c(h);this.options=this.getOptions(f);var j=this.options.trigger.split(" ");for(var g=j.length;g--;){var e=j[g];if(e=="click"){this.$element.on("click."+this.type,this.options.selector,c.proxy(this.toggle,this))}else{if(e!="manual"){var l=e=="hover"?"mouseenter":"focusin";var d=e=="hover"?"mouseleave":"focusout";this.$element.on(l+"."+this.type,this.options.selector,c.proxy(this.enter,this));this.$element.on(d+"."+this.type,this.options.selector,c.proxy(this.leave,this))}}}this.options.selector?(this._options=c.extend({},this.options,{trigger:"manual",selector:""})):this.fixTitle()};b.prototype.getDefaults=function(){return b.DEFAULTS};b.prototype.getOptions=function(d){d=c.extend({},this.getDefaults(),this.$element.data(),d);if(d.delay&&typeof d.delay=="number"){d.delay={show:d.delay,hide:d.delay}}return d};b.prototype.getDelegateOptions=function(){var d={};var e=this.getDefaults();this._options&&c.each(this._options,function(f,g){if(e[f]!=g){d[f]=g}});return d};b.prototype.enter=function(e){var d=e instanceof this.constructor?e:c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(d.timeout);d.hoverState="in";if(!d.options.delay||!d.options.delay.show){return d.show()}d.timeout=setTimeout(function(){if(d.hoverState=="in"){d.show()}},d.options.delay.show)};b.prototype.leave=function(e){var d=e instanceof this.constructor?e:c(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);clearTimeout(d.timeout);d.hoverState="out";if(!d.options.delay||!d.options.delay.hide){return d.hide()}d.timeout=setTimeout(function(){if(d.hoverState=="out"){d.hide()}},d.options.delay.hide)};b.prototype.show=function(){var p=c.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(p);if(p.isDefaultPrevented()){return}var o=this;var k=this.tip();this.setContent();if(this.options.animation){k.addClass("fade")}var j=typeof this.options.placement=="function"?this.options.placement.call(this,k[0],this.$element[0]):this.options.placement;var t=/\s?auto?\s?/i;var u=t.test(j);if(u){j=j.replace(t,"")||"top"}k.detach().css({top:0,left:0,display:"block"}).addClass(j);this.options.container?k.appendTo(this.options.container):k.insertAfter(this.$element);var q=this.getPosition();var d=k[0].offsetWidth;var m=k[0].offsetHeight;if(u){var i=this.$element.parent();var h=j;var r=document.documentElement.scrollTop||document.body.scrollTop;var s=this.options.container=="body"?window.innerWidth:i.outerWidth();var n=this.options.container=="body"?window.innerHeight:i.outerHeight();var l=this.options.container=="body"?0:i.offset().left;j=j=="bottom"&&q.top+q.height+m-r>n?"top":j=="top"&&q.top-r-m<0?"bottom":j=="right"&&q.right+d>s?"left":j=="left"&&q.left-d<l?"right":j;k.removeClass(h).addClass(j)}var g=this.getCalculatedOffset(j,q,d,m);this.applyPlacement(g,j);this.hoverState=null;var f=function(){o.$element.trigger("shown.bs."+o.type)};c.support.transition&&this.$tip.hasClass("fade")?k.one(c.support.transition.end,f).emulateTransitionEnd(150):f()}};b.prototype.applyPlacement=function(i,j){var g;var k=this.tip();var f=k[0].offsetWidth;var n=k[0].offsetHeight;var e=parseInt(k.css("margin-top"),10);var h=parseInt(k.css("margin-left"),10);if(isNaN(e)){e=0}if(isNaN(h)){h=0}i.top=i.top+e;i.left=i.left+h;c.offset.setOffset(k[0],c.extend({using:function(o){k.css({top:Math.round(o.top),left:Math.round(o.left)})}},i),0);k.addClass("in");var d=k[0].offsetWidth;var l=k[0].offsetHeight;if(j=="top"&&l!=n){g=true;i.top=i.top+n-l}if(/bottom|top/.test(j)){var m=0;if(i.left<0){m=i.left*-2;i.left=0;k.offset(i);d=k[0].offsetWidth;l=k[0].offsetHeight}this.replaceArrow(m-f+d,d,"left")}else{this.replaceArrow(l-n,l,"top")}if(g){k.offset(i)}};b.prototype.replaceArrow=function(f,e,d){this.arrow().css(d,f?(50*(1-f/e)+"%"):"")};b.prototype.setContent=function(){var e=this.tip();var d=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](d);e.removeClass("fade in top bottom left right")};b.prototype.hide=function(){var f=this;var h=this.tip();var g=c.Event("hide.bs."+this.type);function d(){if(f.hoverState!="in"){h.detach()}f.$element.trigger("hidden.bs."+f.type)}this.$element.trigger(g);if(g.isDefaultPrevented()){return}h.removeClass("in");c.support.transition&&this.$tip.hasClass("fade")?h.one(c.support.transition.end,d).emulateTransitionEnd(150):d();this.hoverState=null;return this};b.prototype.fixTitle=function(){var d=this.$element;if(d.attr("title")||typeof(d.attr("data-original-title"))!="string"){d.attr("data-original-title",d.attr("title")||"").attr("title","")}};b.prototype.hasContent=function(){return this.getTitle()};b.prototype.getPosition=function(){var d=this.$element[0];return c.extend({},(typeof d.getBoundingClientRect=="function")?d.getBoundingClientRect():{width:d.offsetWidth,height:d.offsetHeight},this.$element.offset())};b.prototype.getCalculatedOffset=function(d,g,e,f){return d=="bottom"?{top:g.top+g.height,left:g.left+g.width/2-e/2}:d=="top"?{top:g.top-f,left:g.left+g.width/2-e/2}:d=="left"?{top:g.top+g.height/2-f/2,left:g.left-e}:{top:g.top+g.height/2-f/2,left:g.left+g.width}};b.prototype.getTitle=function(){var f;var d=this.$element;var e=this.options;f=d.attr("data-original-title")||(typeof e.title=="function"?e.title.call(d[0]):e.title);return f};b.prototype.tip=function(){return this.$tip=this.$tip||c(this.options.template)};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")};b.prototype.validate=function(){if(!this.$element[0].parentNode){this.hide();this.$element=null;this.options=null}};b.prototype.enable=function(){this.enabled=true};b.prototype.disable=function(){this.enabled=false};b.prototype.toggleEnabled=function(){this.enabled=!this.enabled};b.prototype.toggle=function(f){var d=f?c(f.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;d.tip().hasClass("in")?d.leave(d):d.enter(d)};b.prototype.destroy=function(){clearTimeout(this.timeout);this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var a=c.fn.tooltip;c.fn.tooltip=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.tooltip");var e=typeof d=="object"&&d;if(!f&&d=="destroy"){return}if(!f){g.data("bs.tooltip",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.tooltip.Constructor=b;c.fn.tooltip.noConflict=function(){c.fn.tooltip=a;return this}}(jQuery);+function(c){var b=function(e,d){this.init("popover",e,d)};if(!c.fn.tooltip){throw new Error("Popover requires tooltip.js")}b.DEFAULTS=c.extend({},c.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'});b.prototype=c.extend({},c.fn.tooltip.Constructor.prototype);b.prototype.constructor=b;b.prototype.getDefaults=function(){return b.DEFAULTS};b.prototype.setContent=function(){var f=this.tip();var e=this.getTitle();var d=this.getContent();f.find(".popover-title")[this.options.html?"html":"text"](e);f.find(".popover-content")[this.options.html?(typeof d=="string"?"html":"append"):"text"](d);f.removeClass("fade top bottom left right in");if(!f.find(".popover-title").html()){f.find(".popover-title").hide()}};b.prototype.hasContent=function(){return this.getTitle()||this.getContent()};b.prototype.getContent=function(){var d=this.$element;var e=this.options;return d.attr("data-content")||(typeof e.content=="function"?e.content.call(d[0]):e.content)};b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};b.prototype.tip=function(){if(!this.$tip){this.$tip=c(this.options.template)}return this.$tip};var a=c.fn.popover;c.fn.popover=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.popover");var e=typeof d=="object"&&d;if(!f&&d=="destroy"){return}if(!f){g.data("bs.popover",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.popover.Constructor=b;c.fn.popover.noConflict=function(){c.fn.popover=a;return this}}(jQuery);+function(c){function b(f,e){var d;var g=c.proxy(this.process,this);this.$element=c(f).is("body")?c(window):c(f);this.$body=c("body");this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",g);this.options=c.extend({},b.DEFAULTS,e);this.selector=(this.options.target||((d=c(f).attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""))||"")+" .nav li > a";this.offsets=c([]);this.targets=c([]);this.activeTarget=null;this.refresh();this.process()}b.DEFAULTS={offset:10};b.prototype.refresh=function(){var d=this.$element[0]==window?"offset":"position";this.offsets=c([]);this.targets=c([]);var e=this;var f=this.$body.find(this.selector).map(function(){var h=c(this);var g=h.data("target")||h.attr("href");var i=/^#./.test(g)&&c(g);return(i&&i.length&&i.is(":visible")&&[[i[d]().top+(!c.isWindow(e.$scrollElement.get(0))&&e.$scrollElement.scrollTop()),g]])||null}).sort(function(h,g){return h[0]-g[0]}).each(function(){e.offsets.push(this[0]);e.targets.push(this[1])})};b.prototype.process=function(){var j=this.$scrollElement.scrollTop()+this.options.offset;var f=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight;var h=f-this.$scrollElement.height();var g=this.offsets;var d=this.targets;var k=this.activeTarget;var e;if(j>=h){return k!=(e=d.last()[0])&&this.activate(e)}if(k&&j<=g[0]){return k!=(e=d[0])&&this.activate(e)}for(e=g.length;e--;){k!=d[e]&&j>=g[e]&&(!g[e+1]||j<=g[e+1])&&this.activate(d[e])}};b.prototype.activate=function(f){this.activeTarget=f;c(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var d=this.selector+'[data-target="'+f+'"],'+this.selector+'[href="'+f+'"]';var e=c(d).parents("li").addClass("active");if(e.parent(".dropdown-menu").length){e=e.closest("li.dropdown").addClass("active")}e.trigger("activate.bs.scrollspy")};var a=c.fn.scrollspy;c.fn.scrollspy=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.scrollspy");var e=typeof d=="object"&&d;if(!f){g.data("bs.scrollspy",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.scrollspy.Constructor=b;c.fn.scrollspy.noConflict=function(){c.fn.scrollspy=a;return this};c(window).on("load",function(){c('[data-spy="scroll"]').each(function(){var d=c(this);d.scrollspy(d.data())})})}(jQuery);+function(c){var b=function(d){this.element=c(d)};b.prototype.show=function(){var j=this.element;var g=j.closest("ul:not(.dropdown-menu)");var f=j.data("target");if(!f){f=j.attr("href");f=f&&f.replace(/.*(?=#[^\s]*$)/,"")}if(j.parent("li").hasClass("active")){return}var h=g.find(".active:last a")[0];var i=c.Event("show.bs.tab",{relatedTarget:h});j.trigger(i);if(i.isDefaultPrevented()){return}var d=c(f);this.activate(j.parent("li"),g);this.activate(d,d.parent(),function(){j.trigger({type:"shown.bs.tab",relatedTarget:h})})};b.prototype.activate=function(f,e,i){var d=e.find("> .active");var h=i&&c.support.transition&&d.hasClass("fade");function g(){d.removeClass("active").find("> .dropdown-menu > .active").removeClass("active");f.addClass("active");if(h){f[0].offsetWidth;f.addClass("in")}else{f.removeClass("fade")}if(f.parent(".dropdown-menu")){f.closest("li.dropdown").addClass("active")}i&&i()}h?d.one(c.support.transition.end,g).emulateTransitionEnd(150):g();d.removeClass("in")};var a=c.fn.tab;c.fn.tab=function(d){return this.each(function(){var f=c(this);var e=f.data("bs.tab");if(!e){f.data("bs.tab",(e=new b(this)))}if(typeof d=="string"){e[d]()}})};c.fn.tab.Constructor=b;c.fn.tab.noConflict=function(){c.fn.tab=a;return this};c(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(d){d.preventDefault();c(this).tab("show")})}(jQuery);+function(c){var b=function(e,d){this.options=c.extend({},b.DEFAULTS,d);this.$window=c(window).on("scroll.bs.affix.data-api",c.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",c.proxy(this.checkPositionWithEventLoop,this));this.$element=c(e);this.affixed=this.unpin=this.pinnedOffset=null;this.checkPosition()};b.RESET="affix affix-top affix-bottom";b.DEFAULTS={offset:0};b.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset}this.$element.removeClass(b.RESET).addClass("affix");var e=this.$window.scrollTop();var d=this.$element.offset();return(this.pinnedOffset=d.top-e)};b.prototype.checkPositionWithEventLoop=function(){setTimeout(c.proxy(this.checkPosition,this),1)};b.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return}var m=c(document).height();var d=this.$window.scrollTop();var j=this.$element.offset();var h=this.options.offset;var f=h.top;var g=h.bottom;if(this.affixed=="top"){j.top+=d}if(typeof h!="object"){g=f=h}if(typeof f=="function"){f=h.top(this.$element)}if(typeof g=="function"){g=h.bottom(this.$element)}var i=this.unpin!=null&&(d+this.unpin<=j.top)?false:g!=null&&(j.top+this.$element.height()>=m-g)?"bottom":f!=null&&(d<=f)?"top":false;if(this.affixed===i){return}if(this.unpin){this.$element.css("top","")}var l="affix"+(i?"-"+i:"");var k=c.Event(l+".bs.affix");this.$element.trigger(k);if(k.isDefaultPrevented()){return}this.affixed=i;this.unpin=i=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(b.RESET).addClass(l).trigger(c.Event(l.replace("affix","affixed")));if(i=="bottom"){this.$element.offset({top:m-g-this.$element.height()})}};var a=c.fn.affix;c.fn.affix=function(d){return this.each(function(){var g=c(this);var f=g.data("bs.affix");var e=typeof d=="object"&&d;if(!f){g.data("bs.affix",(f=new b(this,e)))}if(typeof d=="string"){f[d]()}})};c.fn.affix.Constructor=b;c.fn.affix.noConflict=function(){c.fn.affix=a;return this};c(window).on("load",function(){c('[data-spy="affix"]').each(function(){var e=c(this);var d=e.data();d.offset=d.offset||{};if(d.offsetBottom){d.offset.bottom=d.offsetBottom}if(d.offsetTop){d.offset.top=d.offsetTop}e.affix(d)})})}(jQuery);