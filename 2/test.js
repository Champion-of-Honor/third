

	function check(){
	var name=document.getElementById('userName');
	var submit=document.getElementById('submit');
	var tishi=document.getElementById('tishi');
		if (name.value =='') {
			name.style.borderColor='red';
			tishi.style.color='red';
			tishi.innerHTML='姓名不能为空';	
		}
		else{
			var str= /^\w{4,16}/;
			if(!str.test(name.value)){
				name.style.borderColor='green';
				tishi.style.color='green';
				tishi.innerHTML='名称格式正确';
			}
	}
}