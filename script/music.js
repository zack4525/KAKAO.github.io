// 유튜브 API iframe 생성
function onYouTubeIframeAPIReady() {
	// 오디오 플레이어 속성(재생버튼, 제목, 재생시간, 볼륨 등) 초기화
    audioPlayerInit();
    
    // 유튜브 동영상 아이디
    var youtube_id = $("#youtube-player").data('id');
    window.YT.ready(function(){
        youTubePlayer1 = new YT.Player('youtube-player', {
            videoId: youtube_id,
            width: '0',
            height: '0',
            playerVars: {
                width: 0,
                height: 0,
                rel: 0,             		// 추천영상 false
                autoplay: 0,         		// 자동재생 false
                controls: 0,         		// 컨트롤러 false
                showinfo: 1,
                loop: 1,             		// 반복재생 true
                playlist: youtube_id,  		// 단일 영상 반복재생을 위해 동일한 ID를 넣는다.
            },
            events: {
                'onReady': onPlayerReady, 			//로딩할때 이벤트 실행
                'onStateChange': onPlayerStateChange 	//플레이어 상태 변화시 이벤트실행
            }
        }); //youTubePlayer1셋팅
    });
}

// 유튜브 플레이어 로딩
function onPlayerReady(event) {
    //로딩할때 실행될 동작을 작성한다.
    var audio_info = event.target.getVideoData();

	// 올바른 동영상일 경우
    if(audio_info.title != '') {
        BGM_TYPE = 'YOUTUBE';
        //togglePlay($(".audio-control-btn.btn-play"));
        $(".audio_modal_wrap").remove();
        // 제목 넣기
        $(".audio-title-wrap #audio-title").replaceWith('<marquee id="audio-title" behavior="scroll" direction="left" scrollamount="3">'+audio_info.title+'</marquee>');
        // 재생시간 출력
        maxTime = Math.floor(event.target.getDuration());
        var duration = setTimeFormat(maxTime);
        // 볼륨 설정
        youTubePlayer1.setVolume(70);
        $(".play-time.end").text(duration);
    } else {
    // 동영상 정보를 얻을 수 없을 경우
        $(".audio-title-wrap").empty().append('<span id="audio-title"> 제목</span>');
    }

}

// 유튜브 플레이어 상태변화
function onPlayerStateChange(event) {
	
    if (event.data == YT.PlayerState.PLAYING) {
    	// 재생중
        startAudioTimer(); // 오디오 재생시 타이머 시작, 재생바 진행, 재생시간 시작
    } else if(event.data == YT.PlayerState.PAUSED) {
    	// 일시정지
        stopAudioTimer(); // 오디오 재생시 타이머 중지
    } else if (event.data == YT.PlayerState.ENDED) {
        // 중지
        togglePlay($(".audio-control-btn.btn-play"));	// 재생버튼 토글
        $(".play-time.start").text('00:00');	// 타이머 중지
        $(".play-time.end").text('00:00');
        $(".play-progress-bar").width(0);	// 재생바 초기화
    }
}
// 오디오 플레이어 초기화
function audioPlayerInit(){
    // 공통사항 
	// : 타이머중지, 재생버튼으로 초기화, 볼륨버튼 초기화, 재생시간 초기화
    stopAudioTimer();
    togglePlay($(".audio-control-btn.btn-pause"));
    togglePlay($(".audio-control-btn.btn-mute"));
    $(".play-time.start").text('00:00');
    $(".play-time.end").text('00:00');
    $(".play-progress-bar").width(0);
    $(".play-volume-slider").slider({'value' : '70'});
    
    if(BGM_TYPE == 'YOUTUBE'){
		// youtube 링크 삽입일 경우 iframe을 지우고 div로 초기화
        $("#audio-player").remove();
        if($("#out_wrapper .bgm-wrap #youtube-player").length == 0){
            $('#out_wrapper .bgm-wrap').append('<div id="youtube-player"></div>');
        }
    } else {
    	// 음원 삽입일 경우 audio태그를 지우고 div로 초기화
        $("#youtube-player").remove();
        if($("#out_wrapper .bgm-wrap #audio-player").length == 0){
            $('#out_wrapper .bgm-wrap').append('<div id="audio-player"></div>');
        }
    }
}

// 재생버튼 토글
function togglePlay(obj) {
    if(obj.hasClass('btn-play')){ 
    	// 재생 -> 일시정지
        obj.addClass('btn-pause');
        obj.removeClass('btn-play');
        obj.find('i').attr('class','fa fa-pause');
    } else if(obj.hasClass('btn-pause')){
    	// 일시정지 -> 재생
        obj.addClass('btn-play');
        obj.removeClass('btn-pause');
        obj.find('i').attr('class','fa fa-play');
    }
}
// 음소거버튼 토글
function toggleMute(obj) {
    if(obj.hasClass('btn-volume')) {
    	// 볼륨 -> 음소거
        obj.addClass('btn-mute');
        obj.removeClass('btn-volume');
        obj.find('i').attr('class','fa fa-volume-off');
    } else if(obj.hasClass('btn-mute')){
    	// 음소거 -> 볼륨
        obj.addClass('btn-volume');
        obj.removeClass('btn-mute');
        obj.find('i').attr('class','fa fa-volume-up');
    }
}

	// 음량조절
    $(document).on('mouseup', '.play-volume-slider', function(){
    	// jQuery slider
        $(".play-volume-slider").slider({
            slide:function(event,ui){
                var volume = ui.value;
                if(volume > 0){ // 볼륨 up
                    if(BGM_TYPE == 'YOUTUBE') {			// Youtube 링크 삽입
                        youTubePlayer1.unMute();
                        // youtube API 재생컨트롤러 사용
                        youTubePlayer1.setVolume(volume);
                    } else if(BGM_TYPE == 'AUDIO') {	// 음원 파일 삽입
                        var bgm_player = document.getElementById("bgm-audio-player");
                        volume = volume/100;
                        volume = volume.toFixed(1);
                        console.log(volume);
                        bgm_player.muted = false;
                        bgm_player.volume = volume;
                    }
                     // 음소거 아이콘 토글
                    toggleMute($(".audio-control-btn.btn-mute"));
                } else {	// 음소거
                    if(BGM_TYPE == 'YOUTUBE') {				// Youtube 링크 삽입
                        youTubePlayer1.mute();	
                    } else if(BGM_TYPE == 'AUDIO') {		// 음원 파일 삽입
                        var bgm_player = document.getElementById("bgm-audio-player");
                        bgm_player.muted = true;
                    }
                    // 음소거 아이콘 토글
                    toggleMute($(".audio-control-btn.btn-volume"));

                }
            }
        });
	});
	
	/* 오디오 재생시 인터벌 시작
   : 재생 로딩바 시작
   : 재생시간 포멧 변경 시작 */
function startAudioTimer(){
    //플레이어가 재생중일때 실시간재생 시간을 초단위로 출력
    var progressBar = $(".play-progress-bar");
    var progress_val = 0;	// 재생 progress bar 값
    var playtime = 0;		// 재생 시간
    audioTimer = setInterval(function(){
        if(BGM_TYPE == 'YOUTUBE') {
        	// youtube 링크 삽입일 경우
            // 해당 동영상의 정보중 현재 재생시간을 가져온다.
            currentTime = Math.floor(youTubePlayer1.getCurrentTime());
            // 00:00의 형식으로 표기하기위해 포맷변경
            playtime = setTimeFormat(Math.floor(youTubePlayer1.getCurrentTime()));
        } else if(BGM_TYPE == 'AUDIO') {
        	// 음원파일 삽입일 경우
            var player = document.getElementById('bgm-audio-player');
            // audio 태그에서 현재 재생시간을 가져온다.
            currentTime = Math.round(player.currentTime);
            // 00:00의 형식으로 표기하기위해 포맷변경
            playtime = setTimeFormat(currentTime);
        }
        
        // 가져온 현재 재생시간을 progress bar에 표기하기위해 currentTime가공
        // 재생 완료를 100으로 잡고 현재 재생시간을 계산
        // 소수점 첫번째 자리까지 계산
        progress_val = (currentTime/maxTime)*100;
        progress_val = progress_val.toFixed(1);
        $(".play-time.start").text(playtime);
        progressBar.css('width', progress_val+"%");
    }, 1000);
}

// 오디오 정지시 인터벌 중지
function stopAudioTimer(){
    clearInterval(audioTimer);
    $(".play-progress-bar").css('width',0);
}

// 재생시간 포멧변경
function setTimeFormat(sec_time){
    var sec_num = parseInt(sec_time);
    var minutes = Math.floor(sec_num / 60);
    var seconds = sec_num - (minutes * 60);

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}

    return minutes + ':' + seconds;
}