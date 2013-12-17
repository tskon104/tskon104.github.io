<script type="text/javascript">

	// var SelectedData;
	
	var UseData = UseData || {};
	UseData.year = "";
	UseData.fileName = "";
	
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
		// SelectedYear=frmObj.elements["selectedYear"].selectedIndex;
		var select=document.getElementById('year');
		var options=document.getElementById('year').options;
		UseData.year=options.item(select.selectedIndex).value;
		
		for( var i = 0; i < datas.length; i++ ) {
			if( datas[i][0] == UseData.year ) {
			UseData.fileName = datas[i][1];
			break;
			}
		}
		
		//Šm”F—p
		alert("year num : " + UseData.year + ", fileName : " + UseData.fileName );
    }

</script>