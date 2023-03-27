$(document).ready(function(){

	$("#save").click(function(){
		var Username=$("#Username").val();
		var Password=$("#Password").val();
		if( Username==""){
			$("#Username").css("border","1px solid red");
			$("#Username").focus();
			return false;
		}
		else{
			$("#Username").css("border","1px solid green");
		}
		if(Password==""){
			$("#Password").css("border","1px solid red");
			$("#Password").focus();
			return false;
		}
		else{
			$("#Password").css("border","1px solid green");
		}
		$.ajax({
			type:"POST",
			url:"php/login.php",
			dataType:"json",
			//data:{"uname":username,"pass":password},
			data:$("#loginForm").serialize(),
			success:function(res){
				if(res.status=="login"){
					window.location="profile.html";
				}
			}

		})
	})
})