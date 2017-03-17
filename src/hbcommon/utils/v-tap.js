/**
 * Created by 二哲 on 15/12/6.
 */
/*
 * 不带参数指令
 * v-tap=handler
 * or
 * 带参数指令
 * v-tap=handler($index,el,$event)
 *
 * !!!新增!!!
 * 把tapObj对象注册在原生event对象上
 * 	event.tapObj拥有6个值
 * 	pageX,pageY,clientX,clientY,distanceX,distanceY
 * 后面2个分别的手指可能移动的位置(以后可用于拓展手势)
 *
 * */
;(function () {
	var vueTap = {};
	
	/**                               公用方法开始                 * */
	//pc  传回ture
	function isPc() {
		var uaInfo = navigator.userAgent;
		var agents = ["Android", "iPhone", "Windows Phone", "iPad", "iPod"];
		var flag   = true;
		for ( var i = 0; i < agents.length; i++ ) {
			if (uaInfo.indexOf(agents[i]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
	//判断是否为tap  事件
	function isTap(self) {
		//判断 目标元素是  禁用
		if (self.el.disabled) {
			return false;
		}
		var tapObj = self.tapObj;
		return self.time < 150 && Math.abs(tapObj.distanceX) < 2 && Math.abs(tapObj.distanceY) < 2;
	}
	
	function touchstart(e, self) {
		var touches    = e.touches[0];
		var tapObj     = self.tapObj;
		tapObj.pageX   = touches.pageX;
		tapObj.pageY   = touches.pageY;
		tapObj.clientX = touches.clientX;
		tapObj.clientY = touches.clientY;
		self.time      = +new Date();
	}
	
	function touchend(e, self) {
		var touches      = e.changedTouches[0];
		var tapObj       = self.tapObj;
		self.time        = +new Date() - self.time;
		tapObj.distanceX = tapObj.pageX - touches.pageX;
		tapObj.distanceY = tapObj.pageY - touches.pageY;
		
		if (!isTap(self)) return;
		// setTimeout(function () {
			self.handler(e);
		// }, 30)
	}
	
	/**                               公用方法结束                 * */
	
	var vue1 = {
		isFn: true,
		acceptStatement: true,
		update: function (fn) {
			var self = this;
			self.tapObj = {};
			if (typeof fn !== 'function' && self.el.tagName.toLocaleLowerCase() !== 'a') {
				return console.error('The param of directive "v-tap" must be a function!');
			}
			
			self.handler = function (e) { //This directive.handler
				e.tapObj = self.tapObj;
				if (self.el.href && !self.modifiers.prevent) {
					return window.location = self.el.href;
				}
				fn.call(self, e);
			};
			if (isPc()) {
				self.el.addEventListener('click', function (e) {
					if (self.el.href && !self.modifiers.prevent) {
						return window.location = self.el.href;
					}
					self.handler.call(self, e);
				}, false);
			} else {
				self.el.addEventListener('touchstart', function (e) {
					
					if (self.modifiers.stop)
						e.stopPropagation();
					if (self.modifiers.prevent)
						e.preventDefault();
					touchstart(e, self);
				}, false);
				self.el.addEventListener('touchend', function (e) {
					Object.defineProperties(e, { // 重写currentTarget对象 与jq相同
						"currentTarget": {
							value: self.el,
							writable: true,
							enumerable: true,
							configurable: true
						},
					});
					e.preventDefault();
					
					return touchend(e, self);
				}, false);
			}
		}
	};
	
	vueTap.install = function (Vue) {		
		Vue.directive('tap',vue1);
	};
	
	if (typeof exports == "object") {
		module.exports = vueTap;
	} else if (typeof define == "function" && define.amd) {
		define([], function () {
			return vueTap
		})
	} else if (window.Vue) {
		window.vueTap = vueTap;
		Vue.use(vueTap);
	}
	
})();
