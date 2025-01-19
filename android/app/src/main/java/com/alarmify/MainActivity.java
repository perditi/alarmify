package com.alarmify;

import android.content.Intent;

import android.os.Bundle;
import android.media.AudioManager;
import android.media.MediaPlayer;
import android.view.View;
import android.widget.Button;
import android.util.Log;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;

public class MainActivity extends ReactActivity {
    private MediaPlayer mediaPlayer = new MediaPlayer();
    // Path to the audio file (default is the alarm sound found at android/app/src/main/res/raw/alarm.mp3)
    private String dataSource = "android.resource://com.alarmify/raw/alarm";

    @Override
    protected String getMainComponentName() {
        return "alarmify";
    }

    // Set the alarm sound to loop
    private void loopAudio() {
        mediaPlayer.setLooping(true);
    }

    // Play the alarm sound
    private void playAudio() {
        loopAudio();
        mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);
        try {
            mediaPlayer.setDataSource(dataSource);
            mediaPlayer.prepare();
            mediaPlayer.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // Stop the alarm sound
    private void stopAudio() {
        mediaPlayer.stop();
        mediaPlayer.release();
    }

    // Change the alarm sound
    private void changeAudio(String newDataSource) {
        dataSource = newDataSource;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mediaPlayer = MediaPlayer.create(this, R.raw.ding);
        mediaPlayer.setAudioStreamType(AudioManager.STREAM_MUSIC);

//        Button playButton = findViewById(R.id.playButton);
//
//        playButton.setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View v) {
//                playAudio();
//                Log.d("MainActivity", "Playing audio");
//            }
//        });
        Log.d("MainActivity", "Created!");
    }
}