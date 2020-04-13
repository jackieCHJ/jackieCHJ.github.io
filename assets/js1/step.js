 
 $(document).ready(function(){
    	//  Wizard 1  	
		var ziduan;
		var zuobiaoxi=new Array();
        $('#wizard1').smartWizard({
            transitionEffect:'fade',
            onFinish:onFinishCallback,
            onLeaveStep  : leaveAStepCallback,
        });
        function leaveAStepCallback(obj, context){
            // To check and enable finish button if needed
			//alert("Leaving step " + context.fromStep + " to go to step " + context.toStep+"   ");
			if(context.fromStep==1){
					if(array1!=undefined)
					{
						var a=array1[0];
						
						for(var i=0;i<array1.length;i++)
						{
							if(a[i]!=undefined){
									var a=array1[0];
							$("#select-1").append("<option value="+i+">"+a[i]+"</option>");
								}
						}
					}
					else
					{
						alert('请先打开文件！');
						return false;
					}
			}
			if(context.fromStep==2){
				var t = document.getElementById("select-1");
				var value = t.options[t.selectedIndex].value;
				if(value=='')
				{
					alert('请选择相应字段！');return false;
				}
				else
				{
					ziduan=value;
				}
			}
			if(context.fromStep==3){
				var date = document.getElementsByName("form-field-checkbox1");
				var ceshi='';
				var voteList = [];
					$('input:checkbox').each(function(){
						if($(this).is(':checked')==true){
							voteList.push($(this).val());
						}
					})
				console.log(voteList); 
				if(voteList==[])
				{
					alert('请选择相应字段！');return false;
				}
				else
				{
					for(var i=0;i<voteList.length;i++)
					{
						zuobiaoxi.push(voteList[i].value);
					}
					bdGEO(ziduan);
				}
			}
            if (context.fromStep >= 2) {
                $('#wizard1').smartWizard('enableFinish', true);
            }
            return true;
        }
    	//  Wizard 2
      $('#wizard2').smartWizard({transitionEffect:'slide',onFinish:onFinishCallback});
	  
      function onFinishCallback(){
		  exportExcel();
        alert('导出完成，请查收!');
      } 
	  function validateSteps(stepnumber){
        var isStepValid = true;
        // validate step 1
        if(stepnumber == 1){
            // Your step validation logic
            // set isStepValid = false if has errors
        }
        // ...      
    }
	  
		});