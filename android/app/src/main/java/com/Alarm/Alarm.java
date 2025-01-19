import android.app.AlarmManager;

import java.util.Calendar;

/**
 * The Alarm class provides methods to set and cancel alarms using the AlarmManager.
 */
public class Alarm {
    private AlarmManager alarmManager;
    private AlarmData alarmData;

    //REGION Constructors
    public Alarm(AlarmData alarmData) {
        this.alarmData = alarmData;
    }
    //ENDREGION

    //REGION Methods
    /**
     * Sets the alarm using the AlarmManager.
     */
    public void setAlarm() {
        // Create a new Calendar object and set the time to the alarm time.
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(alarmData.normalizeTime());

        // Set the alarm using the AlarmManager.
        alarmManager.set(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), null);
    }
    //ENDREGION
}