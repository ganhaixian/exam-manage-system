// JavaScript Document

$(function(){
			$(".icon_add").on("click",function(event){
			var url = $(this).attr("url");
			$(".right").load(url);
			
			});
			
			
		})//this is $(function(){})ending.
 