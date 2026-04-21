import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function TimePickerExample() {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState(new Date(0, 0, 0, 16, 0));

  return (
    <View>
      <Pressable onPress={() => setShow(true)}>
        <Text>단식 시간: {time.getHours()}시간</Text>
      </Pressable>

      {show && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={(event, selectedDate) => {
            setShow(false);
            if (selectedDate) setTime(selectedDate);
          }}
        />
      )}
    </View>
  );
}
