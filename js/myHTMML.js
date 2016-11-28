
	$(function(){
		
		//左边菜单栏动态功能
		$(".baseUI>li ul").hide();
		$(".baseUI>li ul:eq(0)").show();
		$(".baseUI>li").on("mouseover",function(event){	
		    $(".baseUI>li>ul").stop();
		    $(".baseUI>li>ul").slideUp();
			$(this).children("ul").stop().slideDown(100);
			});
		
		//点击菜单框会变色
		$(".baseUI>li>ul>li").on("click",function(event){
			$(this).addClass("current").siblings().removeClass("current");
			var url = $(this).attr("url"); //获取点击到的li的文件源url
			$(".right").load(url);  //加载页面
			
			//加载科目数据
			$.ajax({
		url:"http://172.16.0.5:7777/test/exam/manager/getAllDepartmentes.action",
		dataType:"json",
		success: function(data){				
			var table = $(".tablea");
			var tr = $("<tr></tr>");
			tr.append("<td align='center'>科目</td>");
			table.append(tr);
			var td = $("<td></td>");
			var div = $("<div></div>");
					div.addClass("chose");
					div.append("<a class='active3'>全部</a>");
			data.forEach(function(item){
				for(var index in item){
					var a = $("<a>"+item.name+"</a>");
					}
					div.append(a);
					td.append(div);				
				})	
				tr.append(td);	
				$(".tablea").on("click","a",function(event){
					$(event.target).addClass("active3").siblings().removeClass("active3");
					});
			}
			});	
			
			//加载题目类型数据
			$.ajax({
		url:"http://172.16.0.5:7777/test/exam/manager/getAllSubjectType.action",
		dataType:"json",
		success: function(data){				
			var table = $(".tablea");
			var tr = $("<tr></tr>");
			tr.append("<td align='center'>类型</td>");
			table.append(tr);
			var td = $("<td></td>");
			var div = $("<div></div>");
					div.addClass("chose");
					div.append("<a class='active3'>全部</a>");
			data.forEach(function(item){
				for(var index in item){
					var a = $("<a>"+item.realName+"</a>");
					}	
					div.append(a);
					td.append(div);				
				})
				tr.append(td);
				$(".tablea").on("click","a",function(event){
					$(event.target).addClass("active3").siblings().removeClass("active3");
					});	
			}
			});	
			
			
			//加载难度
			$.ajax({
		url:"http://172.16.0.5:7777/test/exam/manager/getAllSubjectLevel.action",
		dataType:"json",
		success: function(data){				
			var table = $(".tablea");
			var tr = $("<tr></tr>");
			tr.append("<td align='center'>难度</td>");
			table.append(tr);
			var td = $("<td></td>");
			var div = $("<div></div>");
					div.addClass("chose");
					div.append("<a class='active3'>全部</a>");
			data.forEach(function(item){
				
				for(var index in item){
					var a = $("<a>"+item.realName+"</a>");
					}					
					div.append(a);
					td.append(div);				
				})				
				tr.append(td);	
				$(".tablea").on("click","a",function(event){
					$(event.target).addClass("active3").siblings().removeClass("active3");
					});
			}
			});								
			
			})//there is ending for load HTML.
			
		
		
		});//这是$(function(){})的结束

		
	