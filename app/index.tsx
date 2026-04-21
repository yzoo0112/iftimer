import { useFasting } from "@/hooks/useFasting";
import { formatTime } from "@/utils/time";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../styles";

export default function Home() {
  const { state, remaining, start, stop, fastingHours, setFastingHours } =
    useFasting();

  const isRunning = state !== "IDLE";

  const [showPicker, setShowPicker] = useState(false);

  return (
    <View style={styles.container}>
      {/* 상태 */}
      <Text style={styles.status}>
        {state === "FASTING"
          ? "단식 중"
          : state === "EATING"
            ? "식사 중"
            : "대기"}
      </Text>

      {/* 타이머 */}
      <Text style={styles.timer}>{formatTime(remaining)}</Text>

      {/* 시간 설정 */}
      {!isRunning && (
        <>
          <Pressable onPress={() => setShowPicker(true)}>
            <Text style={styles.input}>단식 시간: {fastingHours}시간</Text>
          </Pressable>

          <Text style={{ color: "#888", marginBottom: 20 }}>
            식사 가능 시간: {24 - fastingHours}시간
          </Text>
        </>
      )}

      {/* 버튼 */}
      {!isRunning ? (
        <Pressable style={styles.button} onPress={start}>
          <Text style={styles.buttonText}>시작</Text>
        </Pressable>
      ) : (
        <Pressable style={styles.stopButton} onPress={stop}>
          <Text style={styles.buttonText}>정지</Text>
        </Pressable>
      )}

      {/* 시간 선택 Picker */}
      {showPicker && (
        <DateTimePicker
          value={new Date(0, 0, 0, fastingHours, 0)}
          mode="time"
          display="default"
          onChange={(event, date) => {
            setShowPicker(false);

            if (!date) return;

            const h = date.getHours();

            // 방어 코드 (0~23만 허용)
            if (h <= 0 || h >= 24) return;

            setFastingHours(h);
          }}
        />
      )}
    </View>
  );
}
