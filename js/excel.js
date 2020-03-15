function selectFile() {
		document.getElementById('file').click();
	}

	// 读取本地excel文件
	function readWorkbookFromLocalFile(file, callback) {
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;
			var workbook = XLSX.read(data, {type: 'binary'});
			if(callback) callback(workbook);
		};
		reader.readAsBinaryString(file);
	}

	// 从网络上读取某个excel文件，url必须同域，否则报错
	function readWorkbookFromRemoteFile(url, callback) {
		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.responseType = 'arraybuffer';
		xhr.onload = function(e) {
			if(xhr.status == 200) {
				var data = new Uint8Array(xhr.response)
				var workbook = XLSX.read(data, {type: 'array'});
				if(callback) callback(workbook);
			}
		};
		xhr.send();
	}

	// 读取 excel文件
	function outputWorkbook(workbook) {
		var sheetNames = workbook.SheetNames; // 工作表名称集合
		sheetNames.forEach(name => {
			var worksheet = workbook.Sheets[name]; // 只能通过工作表名称来获取指定工作表
			for(var key in worksheet) {
				// v是读取单元格的原始值
				console.log(key, key[0] === '!' ? worksheet[key] : worksheet[key].v);
			}
		});
	}
var sheet2arr = function(sheet){
        var result = [];
        var row;
        var rowNum;
        var colNum;
        var range = XLSX.utils.decode_range(sheet['!ref']);
        for(rowNum = range.s.r; rowNum <= range.e.r; rowNum++){
            row = [];
            for(colNum=range.s.c; colNum<=range.e.c; colNum++){
                var nextCell = sheet[
                    XLSX.utils.encode_cell({r: rowNum, c: colNum})
                    ];
                if( typeof nextCell === 'undefined' ){
                    row.push(void 0);
                } else row.push(nextCell.w);
            }
            result.push(row);
        }
        return result;
    };
	var worldarray;	var handata=new Array();
	var rdata=new Array();
	var jdata=new Array();
	var ydata=new Array();
	var mdata=new Array();
	var edata=new Array();
	var idata=new Array();
	var bdata=new Array();
	var zdata=new Array();
	//**************************************************读数据
	function readWorkbook(workbook) {
		var sheetNames = workbook.SheetNames; // 工作表名称集合
		var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
		var csv = XLSX.utils.sheet_to_csv(worksheet);
		var sheet_name_list = workbook.SheetNames;
		worldarr2object(sheet2arr(workbook.Sheets[sheet_name_list[0]]));
		rdata=otherarr2object(sheet2arr(workbook.Sheets[sheet_name_list[1]]));
		handata=otherarr2object(sheet2arr(workbook.Sheets[sheet_name_list[2]]));
		jdata=otherarr2object(sheet2arr(workbook.Sheets[sheet_name_list[3]]));
		ydata=otherarr2object(sheet2arr(workbook.Sheets[sheet_name_list[4]]));
		mdata=otherarr2object(sheet2arr(workbook.Sheets[sheet_name_list[5]]));
		edata=otherarr2object(sheet2arr(workbook.Sheets[sheet_name_list[6]]));
		idata=otherarr2object(sheet2arr(workbook.Sheets[sheet_name_list[7]]));
		bdata=otherarr2object(sheet2arr(workbook.Sheets[sheet_name_list[8]]));
		zdata=otherarr2object(sheet2arr(workbook.Sheets[sheet_name_list[9]]));
		savejson(worlddata,"world");
		//savejson(rdata,"rb");
		savejson(handata,"hg");
		savejson(jdata,"jnd");
		savejson(ydata,"yd");
		savejson(mdata,"mg");
		savejson(edata,"eg");
		savejson(idata,"idl");
		savejson(bdata,"bx");
		savejson(worldsumdata,"worldsum");
		//savejson(dataobject,"data");
		savejson(zdata,"zg");
		document.getElementById('result').innerHTML = csv2table(csv);
	}
	function savejson(oobject,name){
		var jsonworlddata= JSON.stringify(oobject);
		console.log(jsonworlddata);
		var blob = new Blob([jsonworlddata], {type: "text/plain;charset=utf-8"});
		saveAs(blob, name+".json");
	}
	//数组的第一列、最后一列转化为对象
	var worlddata=new Array();
	var worldsumdata=new Array();
	var dataobject;

	function otherarr2object(arraytmp){
		var data1=new Array();
		for(i=1;i<arraytmp.length;i++){
			var arrayy=arraytmp[i];
			lengthtmp=arrayy.length;
			var objecttmp={name:arrayy[0],value:arrayy[lengthtmp-1]};
			data1.push(objecttmp);
			}
			return data1;
		}
	
	function worldarr2object(arraytmp){
		for(i=0;i<arraytmp.length;i++){
			var arrayy=arraytmp[i];
			if(arrayy[0]=='日期')
			{
				lengthtmp=arrayy.length;
				dataobject={name:'日期',value:arrayy[lengthtmp-1]};
				continue;
			}
			if(arrayy[0]=='世界'||arrayy[0]=='亚洲'||arrayy[0]=='欧洲'||arrayy[0]=='北美洲'||arrayy[0]=='大洋洲'||arrayy[0]=='非洲'||arrayy[0]=='南美洲'||arrayy[0]=='其他地区'||arrayy[0]=='钻石公主号邮轮'){
			lengthtmp=arrayy.length;
			var objecttmp={name:arrayy[0],value:arrayy[lengthtmp-1]};
			worldsumdata.push(objecttmp);
			}
			else if(arrayy[0]=='其他')
			{
				continue;
			}
			else
			{
			
			lengthtmp=arrayy.length;
			var objecttmp={name:arrayy[1],value:arrayy[lengthtmp-1]};
			worlddata.push(objecttmp);
			}
		}
	}
	
	// 将csv转换成表格
	function csv2table(csv)
	{
		var html = '<table>';
		var rows = csv.split('\n');
		rows.pop(); // 最后一行没用的
		rows.forEach(function(row, idx) {
			var columns = row.split(',');
			columns.unshift(idx+1); // 添加行索引
			if(idx == 0) { // 添加列索引
				html += '<tr>';
				for(var i=0; i<columns.length; i++) {
					html += '<th>' + (i==0?'':String.fromCharCode(65+i-1)) + '</th>';
				}
				html += '</tr>';
			}
			html += '<tr>';
			columns.forEach(function(column) {
				html += '<td>'+column+'</td>';
			});
			html += '</tr>';
		});
		html += '</table>';
		return html;
	}

	function table2csv(table) {
		var csv = [];
		$(table).find('tr').each(function() {
			var temp = [];	
			$(this).find('td').each(function() {
				temp.push($(this).html());
			})
			temp.shift(); // 移除第一个
			csv.push(temp.join(','));
		});
		csv.shift();
		return csv.join('\n');
	}

	// csv转sheet对象
	function csv2sheet(csv) {
		var sheet = {}; // 将要生成的sheet
		csv = csv.split('\n');
		csv.forEach(function(row, i) {
			row = row.split(',');
			if(i == 0) sheet['!ref'] = 'A1:'+String.fromCharCode(65+row.length-1)+(csv.length-1);
			row.forEach(function(col, j) {
				sheet[String.fromCharCode(65+j)+(i+1)] = {v: col};
			});
		});
		return sheet;
	}

	// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
	function sheet2blob(sheet, sheetName) {
		sheetName = sheetName || 'sheet1';
		var workbook = {
			SheetNames: [sheetName],
			Sheets: {}
		};
		workbook.Sheets[sheetName] = sheet;
		// 生成excel的配置项
		var wopts = {
			bookType: 'xlsx', // 要生成的文件类型
			bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
			type: 'binary'
		};
		var wbout = XLSX.write(workbook, wopts);
		var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
		// 字符串转ArrayBuffer
		function s2ab(s) {
			var buf = new ArrayBuffer(s.length);
			var view = new Uint8Array(buf);
			for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
			return buf;
		}
		return blob;
	}

	/**
	 * 通用的打开下载对话框方法，没有测试过具体兼容性
	 * @param url 下载地址，也可以是一个blob对象，必选
	 * @param saveName 保存文件名，可选
	 */
	function openDownloadDialog(url, saveName)
	{
		if(typeof url == 'object' && url instanceof Blob)
		{
			url = URL.createObjectURL(url); // 创建blob地址
		}
		var aLink = document.createElement('a');
		aLink.href = url;
		aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
		var event;
		if(window.MouseEvent) event = new MouseEvent('click');
		else
		{
			event = document.createEvent('MouseEvents');
			event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
		}
		aLink.dispatchEvent(event);
	}

	$(function() {
		document.getElementById('file').addEventListener('change', function(e) {
			var files = e.target.files;
			if(files.length == 0) return;
			var f = files[0];
			if(!/\.xlsx$/g.test(f.name)) {
				alert('仅支持读取xlsx格式！');
				return;
			}
			readWorkbookFromLocalFile(f, function(workbook) {
				readWorkbook(workbook);
			});
		});
		//loadRemoteFile('./sample.xlsx');
	});
	
	function loadRemoteFile(url) {
		readWorkbookFromRemoteFile(url, function(workbook) {
			readWorkbook(workbook);
		});
	}

	function exportExcel() {
		//var csv = table2csv($('#result table')[0]);
		//var sheet = csv2sheet(csv);
		var sheet = XLSX.utils.aoa_to_sheet(array2);
		var blob = sheet2blob(sheet);
		openDownloadDialog(blob, '导出.xlsx');
	}

	function exportSpecialExcel() {
		var aoa = [
			['主要信息', null, null, '其它信息'], // 特别注意合并的地方后面预留2个null
			['姓名', '性别', '年龄', '注册时间'],
			['张三', '男', 18, new Date()],
			['李四', '女', 22, new Date()]
		];
		var sheet = XLSX.utils.aoa_to_sheet(aoa);
		sheet['!merges'] = [
			// 设置A1-C1的单元格合并
			{s: {r: 0, c: 0}, e: {r: 0, c: 2}}
		];
		openDownloadDialog(sheet2blob(sheet), '单元格合并示例.xlsx');
	}