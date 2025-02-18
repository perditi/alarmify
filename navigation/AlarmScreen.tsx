import React, { useState, useEffect } from "react";
import { View, Text, Switch, Button, StyleSheet, Alert, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';

import LinearGradient from 'react-native-linear-gradient';

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const AlarmClock = () => {
  const [alarmTime, setAlarmTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [selectedDays, setSelectedDays] = useState<number[]>([]); // Holds the days of the week for the alarm
  const [isAlarmOn, setAlarmSwitch] = useState(false);
  
  const alarmOnOff = () =>  setAlarmSwitch(previousState => !previousState);

  const showTimePickerModal = () => {
    setShowTimePicker(true);
  };

  const hideTimePickerModal = () => {
    setShowTimePicker(false);
  };

  const handleTimeChange = (event, selectedTime) => {
    hideTimePickerModal();
    if (selectedTime) {
      setAlarmTime(selectedTime);
    }
  };

  const toggleDay = (dayIndex: number) => {
    setSelectedDays((prev) =>
      prev.includes(dayIndex) ? prev.filter((day) => day !== dayIndex) : [...prev, dayIndex]
    );
  };

  useEffect(() => {
    const checkAlarm = setInterval(() => {
      const currentTime = new Date();
      const currentDayIndex = currentTime.getDay();
      if (
        currentTime.getHours() === alarmTime.getHours() &&
        currentTime.getMinutes() === alarmTime.getMinutes() &&
        isAlarmOn &&
        (selectedDays.includes(currentDayIndex) || selectedDays.length === 0)
      ) {
        Alert.alert('Alarm', 'It is time!');
        clearInterval(checkAlarm);
        if (selectedDays.length === 0) {
            alarmOnOff();
        }
      }
    }, 1000);

    return () => clearInterval(checkAlarm);
  }, [alarmTime, selectedDays, isAlarmOn]);


  return (
	<LinearGradient
			colors={['#222339','#2E2F40','#31334B']}
			start={{x: 0, y: 0 }}
			end={{ x: 1, y: 1}}
			style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.appName}>Alarmify</Text>
      </View>

      <View style={styles.clockContainer}>
        <Text style={styles.clockText} onPress={showTimePickerModal}>
          {alarmTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </Text>
      </View>
	  

      <View style={styles.daysContainer}>
        {daysOfWeek.map((day, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayButton,
              selectedDays.includes(index) && styles.dayButtonSelected, // Highlight selected days
            ]}
            onPress={() => toggleDay(index)}
          >
            <Text
              style={[
                styles.dayButtonText,
                selectedDays.includes(index) && styles.dayButtonTextSelected,
              ]}
            >
              {day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {showTimePicker && (
        <DateTimePicker
          value={alarmTime}
          mode="time"
          is24Hour={false}
          display="spinner"
          onChange={handleTimeChange}
        />
      )}
      <Switch onValueChange={alarmOnOff} 
          thumbColor={isAlarmOn ? '#f5dd4b' : '#f4f3f4'}
          value = {isAlarmOn} />

	</LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginBottom: 20,
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  clockContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  clockText: {
    fontSize: 50,
    marginRight: 10,
    color: "#2c3e50",
  },
  daysContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  dayButton: {
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#bdc3c7",
    borderRadius: 6,
  },
  dayButtonSelected: {
    backgroundColor: "#3498db",
  },
  dayButtonText: {
    fontSize: 16,
    color: "#2c3e50",
    fontWeight: "bold",
  },
  dayButtonTextSelected: {
    color: "#ffffff",
  },
});

export default AlarmClock;
