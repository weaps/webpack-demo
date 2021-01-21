// if(!window.dhtmlx)
//   window.dhtmlx = {};
let $m = {};
(function(){
	var _dhx_msg_cfg = null;
	function callback(config, result){
			var userCall = config.callback;
			modality(false);
			config.box.parentNode.removeChild(config.box);
			_dhx_msg_cfg = config.box = null;
			if (userCall)
				userCall(result);
	}
	function modal_key(e){
		if (_dhx_msg_cfg){
			e = e||event;
			var code = e.which||event.keyCode;
			if ($m.message.keyboard){
				if (code == 13 || code == 32)
					callback(_dhx_msg_cfg, true);
				if (code == 27)
					callback(_dhx_msg_cfg, false);
			}
			if (e.preventDefault)
				e.preventDefault();
			return !(e.cancelBubble = true);
		}
	}
	if (document.attachEvent)
		document.attachEvent("onkeydown", modal_key);
	else
		document.addEventListener("keydown", modal_key, true);
		
	function modality(mode){
		if(!modality.cover){
			modality.cover = document.createElement("DIV");
			//necessary for IE only
			modality.cover.onkeydown = modal_key;
			modality.cover.className = "ebg_modal_cover";
			document.body.appendChild(modality.cover);
		}
		modality.cover.style.display = mode?"inline-block":"none";
	}

	// 生成对话框footer DOM
	function button(text, result){
		return "<button class='dhtmlx_popup_button ebg-button ebg-button--medium " + (result ? 'ebg-button--primary' : '') + "' result='"+result+"'>"+text+"</button>";
	}

	function setTheme(type) {
		let theme = ''
		if (type === 'success') theme = type
		else if (type === 'error') theme = type
		else if (type === 'warning') theme = type
		else theme = ''
		return theme
	}

	function info(text){
		if (!t.area){
			t.area = document.createElement("DIV");
			t.area.className = `dhtmlx_message_area`;
			t.area.style[t.position]="5px";
			document.body.appendChild(t.area);
		}

		t.hide(text.id);
		var message = document.createElement("DIV");
		message.innerHTML = "<div class='text'>"+text.text+"</div>";
		message.className = "dhtmlx-info message__" + setTheme(text.type);
		message.onclick = function(){
			t.hide(text.id);
			text = null;
		};

		if (t.position == "bottom" && t.area.firstChild)
			t.area.insertBefore(message,t.area.firstChild);
		else
			t.area.appendChild(message);
		
		if (text.expire > 0)
			t.timers[text.id]=window.setTimeout(function(){
				t.hide(text.id);
			}, text.expire);

		t.pull[text.id] = message;
		message = null;

		return text.id;
	}
	function _boxStructure(config, ok, cancel){
		var box = document.createElement("DIV");
		box.className = " dhtmlx_modal_box dhtmlx-"+config.type;
		box.setAttribute("dhxbox", 1);
			
		var inner = '';

		if (config.width)
			box.style.width = config.width;
		if (config.height)
			box.style.height = config.height;
		if (config.title)
			inner+='<div class="dhtmlx_popup_title">'+config.title+'</div>';
		inner+='<div class="dhtmlx_popup_text"><span>'+(config.content?'':config.text)+'</span></div><div  class="dhtmlx_popup_controls">';
		// if (ok)
		// 	inner += button(config.ok || "OK", true);
		// if (cancel)
		// 	inner += button(config.cancel || "Cancel", false);
		// 是否需要渲染cancel button
		if (config.cancel && typeof config.cancel === 'string'){
			inner += button(config.cancel, false);
		}

		// 是否需要渲染 confirm button
		if (config.confirm && typeof config.confirm === 'string'){
			inner += button(config.confirm, true);
		}
		inner += '</div>';
		box.innerHTML = inner;

		if (config.content){
			var node = config.content;
			if (typeof node == "string") 
				node = document.getElementById(node);
			if (node.style.display == 'none')
				node.style.display = "";
			box.childNodes[config.title?1:0].appendChild(node);
		}

		box.onclick = function(e){
			e = e || window.event;
			var source = e.target || e.srcElement;
			if (!source.className) source = source.parentNode;
			if (source.className.indexOf('dhtmlx_popup_button') !== -1) {
				var result = source.getAttribute("result");
				// result = (result == "true")||(result == "false"?false:result);
				console.log(result)
				if (result === 'true') {
					callback(config);
				} else {
					callback(config, true);	
				}
			}
		};
		config.box = box;
		if (ok||cancel)
			_dhx_msg_cfg = config;

		return box;
	}
	function _createBox(config, ok, cancel){
		var box = config.tagName ? config : _boxStructure(config, ok, cancel);
		
		if (!config.hidden)
			modality(true);
		document.body.appendChild(box);
		var x = config.left||Math.abs(Math.floor(((window.innerWidth||document.documentElement.offsetWidth) - box.offsetWidth)/2));
		var y = config.top||Math.abs(Math.floor(((window.innerHeight||document.documentElement.offsetHeight) - box.offsetHeight)/2));
		if (config.position == "top")
			box.style.top = "-3px";
		else
			box.style.top = y+'px';
		box.style.left = x+'px';
		//necessary for IE only
		box.onkeydown = modal_key;

		box.focus();
		if (config.hidden)
			$m.modalbox.hide(box);

		return box;
	}

	function alertPopup(config){
		return _createBox(config, true, false);
	}
	function confirmPopup(config){
		return _createBox(config, true, true);
	}
	function boxPopup(config){
		return _createBox(config);
	}
	function box_params(text, type, callback){
		if (typeof text != "object"){
			if (typeof type == "function"){
				callback = type;
				type = "";
			}
			text = {text:text, type:type, callback:callback };
		}
		return text;
	}
	function params(text, type, expire, id){
		if (typeof text != "object")
			text = {text:text, type:type, expire:expire, id:id};
		text.id = text.id||t.uid();
		text.expire = text.expire||t.expire;
		return text;
	}
	$m.confirm = function(){
		var text = box_params.apply(this, arguments);
		text.type = text.type || "alert";
		return confirmPopup(text);
	};
	$m.modalbox = function(){
		var text = box_params.apply(this, arguments);
		text.type = text.type || "alert";
		return confirmPopup(text);
	};
	$m.modalbox.hide = function(node){
		while (node && node.getAttribute && !node.getAttribute("dhxbox"))
			node = node.parentNode;
		if (node){
			node.parentNode.removeChild(node);
			modality(false);
		}
	};
	var t = $m.message = function(text, type){
		// debugger
		text = params.apply(this, arguments);
		text.type = text.type||"info";
		return info(text);
	};

	t.seed = (new Date()).valueOf();
	t.uid = function(){return t.seed++;};
	t.expire = 1500;
	t.keyboard = true;
	t.position = "top";
	t.pull = {};
	t.timers = {};

	t.hideAll = function(){
		for (var key in t.pull)
			t.hide(key);
	};
	t.hide = function(id){
		var obj = t.pull[id];
		if (obj && obj.parentNode){
			window.setTimeout(function(){
				obj.parentNode.removeChild(obj);
				obj = null;
			},2000);
			obj.className+=" hidden";
			
			if(t.timers[id])
				window.clearTimeout(t.timers[id]);
			delete t.pull[id];
		}
	};
	console.log($m)
})();
console.log($m)
export {$m}

