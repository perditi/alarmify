package com.alarmify

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

import android.media.AudioManager

class MainActivity : ReactActivity() {

    MediaPlayer mediaPlayer = new MediaPlayer()
    // Path to the audio file (default is the alarm sound found at android/app/src/main/res/raw/alarm.mp3)
    String dataSource = "android.resource://" + getPackageName() + "/" + R.raw.alarm;

    /**
    * Returns the name of the main component registered from JavaScript. This is used to schedule
    * rendering of the component.
    */
    override fun getMainComponentName(): String = "alarmify"

    /**
    * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
    * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
    */
    override fun createReactActivityDelegate(): ReactActivityDelegate =
        DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled);

    // Set the alarm sound to loop
    fun loopAudio() {
        mediaPlayer.setLooping(true);
    }

    // Play the alarm sound
    fun playAudio() {
        loopAudio();
        mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
        mediaPlayer.setDataSource(dataSource);
        mediaPlayer.prepare();
        mediaPlayer.start();
    }

    // Stop the alarm sound
    fun stopAudio() {
        mediaPlayer.stop();
        mediaPlayer.release();
    }

    // Change the alarm sound
    fun changeAudio(String newDataSource) {
        dataSource = newDataSource;
    }
}
