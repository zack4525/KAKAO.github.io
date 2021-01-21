const weatherLocation = ['Seoul','Daejeon','Busan','Yanggu','Gwangju','Jeju city'];
const locationName = ['서울','대전','부산','강원','광주','제주']
var i = 0;

setInterval(function(){
    i++
    if(i==6){i=0;}
let weatherApiURL = 'http://api.openweathermap.org/data/2.5/weather?q='+weatherLocation[i]+'&appid=2ded2d90e720b5e34b7d0e4401ca1a6b';
    $.ajax({
        type : "GET",
        url: weatherApiURL,
        dataType : "json",
        async : 'false',
        success : function (resp){
            document.getElementById("weather_local").innerHTML=locationName[i]
            document.getElementById("weather_now").innerHTML= Math.floor(resp.main.temp-273.15)+'°C'
    }
})},4000);
///////////////////////////////////////////////////////////////////////////////////위 날씨 아래 카톡 ///////////////////
var test_type = 0;


function jstalktheme_addmsg(type, name, time, msg)
{
	var ocontainer = document.getElementById("jstalktheme_test");
	var ocontainer_msg = ocontainer.getElementsByClassName("msg")[0];
	
	var onewmsg = document.createElement("div");
	var onewblank = document.createElement("div");
	
	if(type)
	{
		onewmsg.className="othertalk";
		onewmsg.innerHTML = 
		"<div class=\"profile_image\" style=\"background: url(./profile_image.png) no-repeat;\">\n"+
		"</div>\n"+
		"<div class=\"box\">\n"+
		"<div class=\"profile_name\">\n"+
		name+"\n"+
		"</div>\n"+
		"<div class=\"a\">\n"+
		"</div>\n"+
		"<div class=\"b\">\n"+
		msg+"\n"+
		"</div>\n" +
		"<div class=\"time\">\n"+
		time+"\n"+
		"</div>\n"+
		"</div>\n";
	}else{
		onewmsg.className="mytalk";
		onewmsg.innerHTML = 
		"<div class=\"b\">\n"+
		"</div>\n"+
		"<div class=\"a\">\n"+
		msg+"\n"+
		"</div>\n"+
		"<div class=\"time\">\n"+
		time+"\n"+
		"</div>\n" +
		"";
	}
	
	onewmsg.innerHTML +=
    "<div class=\"clear\">\n"+
    "</div>";
	
	onewblank.className="blank";
	
	ocontainer_msg.appendChild(onewmsg);
	ocontainer_msg.appendChild(onewblank);
	
	ocontainer_msg.scrollTop = ocontainer_msg.scrollHeight;
}


function jstalktheme_testfunc()
{
	var otxtmsg = document.getElementById("jstalktheme_testmsg");
	
	var d = new Date();
	var ampm = (d.getHours()>12 ?  "PM" : "AM");
	var h = (d.getHours()>12 ? d.getHours()-12 : d.getHours());
	var m = d.getMinutes();

	test_type ^= 0x01;
	jstalktheme_addmsg(test_type, "이수영", ampm+" "+h+":"+m, otxtmsg.value.replace("\n","<br />\n"));
}


//////////////////////여기서부턴 플레이어 js/////////////////////////////////////
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId:  'uR8Mrt1IpXg',     //, 'uR8Mrt1IpXg' '6uJf2IT2Zh8'
    events: {
    'onReady': onPlayerReady ,  
    'onStateChange': onPlayerStateChange
    }
});
}

function onPlayerReady(event) {
event.target.pauseVideo();
}

var done = false;
function onPlayerStateChange(event) {
if (event.data == YT.PlayerState.PLAYING && !done) {
    
    done = true;
}
}
function stopVideo() {
    player.stopVideo();
}
function playVideo() {
    player.playVideo();
}
function pauseVideo(){
    player.pauseVideo();
}




var i = 0;
var arrMusic = new Array();

function addMusic(){
    var newMusic = prompt("유튜브 동영상 URL ID를 넣어주세요") ;
    var music_list = $("#music_list")
    music_list.append("<li id=music_list"+i+" value="+newMusic+">"+newMusic+"</li>") ;
    arrMusic[i] = newMusic;
    i++;
}
function startAddMusic(){
    player.loadPlaylist( arrMusic, 0,0, 'small')
}

function nextVideo(){
    player.nextVideo();
}
function previousVideo(){
    player.previousVideo();
}

function playVideoAt(){
    player.playVideoAt(0);
}

//////////////////////////////////////////////위 플레이어 아래 버튼 함수ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

function menudisplay(){
	var dpdltlqkf = $('.sidebar').css('position');
	console.log('함수는 작동한다')

	if(dpdltlqkf == "absolute"){
		$('.sidebar').css('position','none');
		console.log('if는 작동한다')
	}
	else {console.log('넌 잘못하고 있따')}
	// else { dpdltlqkf = 'absolute'};
}

function katalk(){
	var dlrjeh = $('.kakaoTalk').css('position')
	console.log(dlrjeh);
	if(dlrjeh == 'absolute'){
		$('kakaoTlak').hide();
	}
}