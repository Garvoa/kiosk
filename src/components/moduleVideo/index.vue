<template>
  <div class="video_1">
    <video id="video_1" class="video-js vjs-default-skin" ref="videojs">
      <source src="http://vjs.zencdn.net/v/oceans.mp4" type="video/mp4" />
    </video>
  </div>
</template>
<script>
export default {
  props: { toHome: Function },
  name: 'video_1',
  data() {
    return {
      player: null
    }
  },
  components: {},
  mounted() {
    this.videoFn()
  },
  methods: {
    videoFn() {
      videojs('video_1', {
        muted: true,
        controls: false,
        loop: true,

        autoplay: true
        // 更多配置.....
      })

      var options = {}

      this.player = videojs('video_1', options, function onPlayerReady() {
        videojs.log('播放器已经准备好了!')

        // In this context, `this` is the player that was created by Video.js.<br>  // 注意，这个地方的上下文， `this` 指向的是Video.js的实例对像player
        this.play()

        // How about an event listener?<br>  // 如何使用事件监听？
        this.on('ended', function() {
          videojs.log('播放结束了!')
        })
      })
    },

    pause(e) {
      this.player.pause()
    },
    play() {
      this.player.play()
    }
  },
  watch: {
    $route(to) {
      console.log(to)
    }
  }
}
</script>
<style lang="less">
.video_1 {
  width: 100%;
  height: 100%;
}
#video_1 {
  width: 100% !important;
  height: 100% !important;
}
</style>