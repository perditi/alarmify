import java.util.Date;
import java.util.HashMap;

// Import all the necessary classes
import java.util.Date;
import java.util.HashMap;

public class AlarmData {

    private enum DaysOfWeek {
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
    }

    //REGION Properties
    private Date time;
    private HashMap<DaysOfWeek, Boolean> daysOfWeek;

    private String soundPath;
    private String timezone;

    public AlarmData(Date time, HashMap<DaysOfWeek, Boolean> daysOfWeek, String soundPath, String timezone) {
        this.time = time;
        this.daysOfWeek = daysOfWeek;
        this.soundPath = soundPath;
        this.timezone = timezone;
    }
    //ENDREGION

    //REGION Getters and Setters
    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public HashMap<DaysOfWeek, Boolean> getDaysOfWeek() {
        return daysOfWeek;
    }

    public void setDaysOfWeek(HashMap<DaysOfWeek, Boolean> daysOfWeek) {
        this.daysOfWeek = daysOfWeek;
    }

    public Boolean trySetDayOfWeek(DaysOfWeek dayOfWeek, Boolean value) {
        if (daysOfWeek.containsKey(dayOfWeek)) {
            daysOfWeek.put(dayOfWeek, value);
            return true;
        }
        return false;
    }

    public String getSoundPath() {
        return soundPath;
    }

    public void setSoundPath(String soundPath) {
        this.soundPath = soundPath;
    }

    public String getTimezone() {
        return timezone;
    }

    public void setTimezone(String timezone) {
        this.timezone = timezone;
    }
    //ENDREGION

    //REGION Methods

    /**
     * Creates a Date object with today's date, but the time already set.
     * @returns The new Date object.
     */
    public Date normalizeTime() {
        Date now = new Date();
        Date normalizedTime = new Date(now.getYear(), now.getMonth(), now.getDate(), time.getHours(), time.getMinutes());

        // if the normalized time is in the past, add one day
        if (normalizedTime.before(now)) {
            normalizedTime.setDate(normalizedTime.getDate() + 1);
        }

        // if the timezone is not "local", convert the time to the specified timezone
//        if (timezone != "local") {
//            try {
//                // convert the time to the specified timezone
//                String loc_String = normalizedTime.toLocaleString("en-US", {timeZone: this.timezone});
//                normalizedTime = new Date(loc_String);
//            } catch (Exception e) {
//                System.err.println("Error converting time to timezone: " + e.getMessage());
//            }
//        }

        return normalizedTime;
    }
    //ENDREGION
}