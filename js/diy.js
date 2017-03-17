/*
	name:ChenGuoTao
	QQ/E-mail:969870539@qq.com
*/

charset="utf-8";

$(function(){

	/*	变量	*/
	var verificID=0;
	var verificValue=new Array("qmmt","nwyn","ngza","hnhn","bpbf","cpde","bqbt","ashq","nwnm","myhy");
	verificID=Math.round(Math.random()*9);
	var Omsg_verific_box=$("#msg_verific_box");
	var Oqr_box=$("#qr_box");
	var Ohonor_plus=$("#honor_plus");
	var honor_img_src='';
	
	/*	导航	*/
	var Onav=$("#nav_list>ul>li");
	Onav.click(function(){
	Onav.removeClass('active');
	$(this).addClass("active");
	});
	
	/*	验证码提交按钮点击	*/
	$("#sumbitMsg").click(function(){
		var msgTitleInfo=$.trim($("#msg_title").val());
		var msgContentInfo=$.trim($("#msg_content").val());
		var msg_messageText="";
		if($("#msg_verific").val().toLocaleLowerCase()==verificValue[verificID]){
			if(((msgTitleInfo!="")&&(msgTitleInfo!=null))&&((msgContentInfo!="")&&(msgContentInfo!=null))){
				var addMsgInfo="<li><p>"+$("#msg_title").val()+"</p><div>"+$("#msg_content").val()+"</div></li>";
				$("#look_msg").append(addMsgInfo);
				msg_messageText="留言成功";
			}else{
				msg_messageText="对不起!您的留言内容无效";	
			}
			Omsg_verific_box.css("display","none");
		}else{
			msg_messageText="验证码错误"
		}
		$("#msg_message").text(msg_messageText);
		$("#msg_message").css("display","inline");
		$("#msg_message").fadeOut(3000);
		verificID=Math.round(Math.random()*9);
	})
	
	/*	验证码输入框获得焦点	*/
	$("#msg_verific").focus(function(){
		$("#verificImg").attr('src','img/verific/'+verificID+'.jpg');
		Omsg_verific_box.css("display","inline");
		Omsg_verific_box.css("top",$(this).offset().top-150);
		Omsg_verific_box.css("left",$(this).offset().left+2);
		Omsg_verific_box.css("width",$(this).width()+22);
	}); 
	
	/*	验证码刷新span点击	*/
	$("#verificUpdate").click(function(){
		if(verificID<9){
			verificID+=1;
		}else{
			verificID=0;
		}
		$("#verificImg").attr('src','img/verific/'+verificID+'.jpg'); 
	});	
	
	/*	关闭验证码窗口	*/
	$("#off_msg_verific_box").click(function(){
		Omsg_verific_box.css("display","none");
	});
	
	/*	回到顶部按钮	*/
	var top_button=$("#top_button");
	$(document).scroll(function() {
		if($(document).scrollTop()>120){
			top_button.css("visibility","visible");
		}else{
			top_button.css("visibility","hidden");
		}

		if($(document).scrollTop()<parseInt($(".nav_box").offset().top)+52){
			$(".nav_box").removeClass("nav_box_f");
		}

		if($(document).scrollTop()>$(".nav_box").offset().top){
			$(".nav_box").addClass("nav_box_f");
		}
	});

	top_button.hover(function () {
		top_button.css("background-position"," -190px -15px");
	},function () {
		top_button.css("background-position"," -40px -15px");
	});

	top_button.click(function () {
		top_button.css("background-position"," -786px -15px");
		$('html,body').animate({scrollTop:$("#ahome").offset().top},800);
		setTimeout(function () {
			top_button.css("background-position"," -40px -15px");
		},800);
	});

	/*导航被点击*/
	var navliName=["#ahome","#info","#work","#major","#honor","#msg"];
	var navli=$(".nav>li");
	var titleList=$(".div_title");
	navli.click(function () {
		var clickOne=true,topsize=0;
		topsize=$(navliName[$(this).index()]).offset().top-52;
		$('html,body').animate({
			scrollTop:topsize
			},500);
	});

	/*	遮罩层按钮	*/
	$("#verificationCommand").click(function(){
			if($("#verification").val()=="969870539"){
				//$("#zhezhaoMsg").html("恭喜!您的口令正确！");
				//$("#zhezhao").hide("drop",{direction:"down"},2000);
				$("#zhezhao").slideUp(1000);
				setTimeout(function (){
					if(document.documentElement.clientWidth<768){
						alert("温馨提示：移动设备横屏模式下浏览效果更佳哦！");
					}
				},1500);

				/*显示个人简历*/
				setTimeout(showBio,3500);
				function showBio () {
					$(".navbar-brand").click();
				}
			}else{
				alert("抱歉!您的口令不正确,请重新输入!");
				/*
				$("#zhezhaoMsg").html("抱歉!您的口令不正确,请重新输入!");
				$("#zhezhaoBox").effect("bounce",{
				direction:"down",
				distance:50,
				mode:"effect",
				times:5},1000);
				*/
			}
		});
	/*	与我联系二维码	*/
	$(".contact>span").hover(function(){
			Oqr_box.css("display","inline");
			Oqr_box.css("top",$(this).offset().top-165);
			Oqr_box.css("left",$(this).offset().left+19-75);
		},function(){
			Oqr_box.css("display","none");
	});

	/*关闭按钮*/
	$(".off").click(function () {
		if (confirm("您确定要关闭本页吗？")) {
			window.opener = null;
			window.open('', '_self');
			window.close()
		} else {}
	});


	/*	显示获得荣誉放大镜	*/
/*	$(".honor_show>img").mouseover(function(){
		honor_img_src=$(this).attr('src');
//		alert($(this).attr('src'));
		Ohonor_plus.css("top",$(this).offset().top);
		Ohonor_plus.css("left",$(this).offset().left);
		Ohonor_plus.css("width",$(this).width());
		Ohonor_plus.css("height",$(this).height());
		Ohonor_plus.css("padding-top",$(this).height()/2-50);
//		setTimeout(function(){
		Ohonor_plus.css("display","inline");
//		},100);
		
	});
*/
	/*	隐藏获得荣誉放大镜	*/
/*	Ohonor_plus.mouseout(function(){
		Ohonor_plus.css("display","none");
	});

	Ohonor_plus.click(function(){
		$(".honor_plus_look_img>img").attr('src',honor_img_src); 
		$("#honor_plus_look").show("clip",{direction:"horizontal"},1000);
	});
	
	$(".honor_plus_look_ico").click(function(){
		$("#honor_plus_look").hide("clip",{direction:"vertical"},1000);	
	});
	*/
	
});