// JavaScript Document
$(function(){
			//点击关闭按钮返回首页面
			$(".deletetitle").on("click",function(){
				var url = $(".deletetitle").html();
				$(".right").load(url);
				$(".baseUI>li>ul>li").removeClass("current");
				})
			
			
			//向后台请求数据类型,题目类型
			$.ajax({
				url:"http://172.16.0.5:7777/test/exam/manager/getAllSubjectType.action",
				dataType:"json",
				success: function(data){
					var sel = $(".Attributecontent_left select[name='type']");
					sel.append("<option>——请选择——</option>");
					data.forEach(function(item){
						var option = $("<option></option>");
						for(var index in item){
							var span = item.realName;
							}
							option.append(span);
							sel.append(option);
						})							
						}
				})//ajax ending
				
				
				//向后台请求数据，方向选择
				$.ajax({
				url:"http://172.16.0.5:7777/test/exam/manager/getAllDepartmentes.action",
				dataType:"json",
				success: function(data){
					var sel = $(".Attributecontent_left select[name='department']");
					sel.append("<option>——请选择——</option>");
					data.forEach(function(item){
						var option = $("<option></option>");
						for(var index in item){
							var span = item.name;
							}
							option.append(span);
							sel.append(option);
						})							
						}
				})//ajax ending
				
				//向后台请求数据，难度选择
				$.ajax({
				url:"http://172.16.0.5:7777/test/exam/manager/getAllSubjectLevel.action",
				dataType:"json",
				success: function(data){
					var sel = $(".Attributecontent_left select[name='level']");
					sel.append("<option>——请选择——</option>");
					data.forEach(function(item){
						var option = $("<option></option>");
						for(var index in item){
							var span = item.realName;
							}
							option.append(span);
							sel.append(option);
						})							
						}
				})//ajax ending
				
				
				//向后台请求数据，知识点的选择
				$.ajax({
				url:"http://172.16.0.5:7777/test/exam/manager/getAllTopics.action",
				dataType:"json",
				success: function(data){
					var sel = $(".Attributecontent_left select[name='topics']");
					sel.append("<option>——请选择——</option>");
					data.forEach(function(item){
						var option = $("<option></option>");
						for(var index in item){
							var span = item.title;
							}
							option.append(span);
							sel.append(option);
						})							
						}
				})//ajax ending
				
				
				
				//接收页面的数据，并传送到后台
		$(".btnL").on("click",function(event){
				var type = $(".Attributecontent_left select[name='type']").val();
				//console.log(type);
				var dapartment = $(".Attributecontent_left select[name='department']").val();
				//console.log(dapartment);
				var level = $(".Attributecontent_left select[name='level']").val();
				//console.log(level);
				var topics = $(".Attributecontent_left select[name='topics']").val();  
				//console.log(topics);
				var choose=[type,dapartment,level,topics];
				console.log(choose);				
				//向后台发送数据，保存到数据库
				$.ajax({
					url:"",
					dataType:"jsonp",
					jsonp:"foo",
					jsonpCallback:"send"
					})
				//跳转到原来的页面，即刷新一次	
				$(".right").load("resouceHTML/addSubject.html");
		});//接收数据完毕
		
		//发送数据并关闭
		$("#btnl").on("click",function(event){
				var type = $(".Attributecontent_left select[name='type']").val();
				//console.log(type);
				var dapartment = $(".Attributecontent_left select[name='department']").val();
				//console.log(dapartment);
				var level = $(".Attributecontent_left select[name='level']").val();
				//console.log(level);
				var topics = $(".Attributecontent_left select[name='topics']").val();  
				//console.log(topics);
				var choose=[type,dapartment,level,topics];
				console.log(choose);				
				//向后台发送数据，保存到数据库
				$.ajax({
					url:"",
					dataType:"jsonp",
					jsonp:"foo",
					jsonpCallback:"send"
					})
				//跳转到原来的页面，即刷新一次	
				$("body").load("index.html");
				
		});//接收数据完毕
		
		
	})//$(function(){}) ending 
	
	
	