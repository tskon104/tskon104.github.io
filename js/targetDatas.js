
	var UseData = UseData || {};

	function getUseDatas() {
		var url = location.href;
		var params = url.split("?");
		var paramms = [];
		if( params.length >= 2 ) {
			paramms = params[1].split("&");
		}
		var paramArray = [];
		for ( i = 0; i < paramms.length; i++ ) {
	    	var item = paramms[i].split("=");
	    	paramArray.push(item[0]);
	    	paramArray[item[0]] = item[1];
		}

		if( paramArray["requestYear"] != null  && paramArray["requestName"] != null ) {
			UseData.year = paramArray["requestYear"];
			UseData.identifier = paramArray["requestName"];
		}
		else {
			UseData.year = "2012";
			UseData.identifier = "kessan_2012_yokote";
		}
	}
	
	getUseDatas();
	var datas = new Array();

	datas[0] = new Array();
	datas[0][0] = "2010";
	datas[0][1] = "kessan_2010_yokote";

	datas[1] = new Array();
	datas[1][0] = "2011";
	datas[1][1] = "kessan_2011_yokote";

	datas[2] = new Array();
	datas[2][0] = "2012";
	datas[2][1] = "kessan_2012_yokote";

    function setData(frmObj) {
		var yearList=document.getElementById('year');
		var options=document.getElementById('year').options;
		UseData.year=options.item(yearList.selectedIndex).value;
		
		for( var i = 0; i < datas.length; i++ ) {
			if( datas[i][0] == UseData.year ) {
			UseData.identifier = datas[i][1];
			break;
			}
		}
		location.href = "index.html?requestYear=" + UseData.year + "&requestName=" + UseData.identifier;
    }
    window.onpageshow=function(){
	//window.onload=function(){
	  getUseDatas();
		checkSelect( document.getElementById( "year" ), UseData.year );
	}
	
	function checkSelect( obj, val ){
		for(var i = 0; i < obj.length; i++){
			if(obj[i].value == val){
				obj[i].selected=true;
				break;
			}
		}
	}
