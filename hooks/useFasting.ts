import { getFastingState } from "@/utils/time";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export const useFasting = () => {
  const [state, setState] = useState<"FASTING" | "EATING" | "IDLE">("IDLE");
  const [remaining, setRemaining] = useState(0);
  const [data, setData] = useState<any>(null);

  const [fastingHours, setFastingHours] = useState(16);
  const [eatingHours, setEatingHours] = useState(8);

  // 시작
  const start = async () => {
    const newData = {
      startTime: Date.now(),
      fastingHours,
      eatingHours,
    };

    await AsyncStorage.setItem("fasting", JSON.stringify(newData));
    setData(newData);
  };

  // 정지
  const stop = async () => {
    await AsyncStorage.removeItem("fasting");
    setData(null);
    setState("IDLE");
    setRemaining(0);
  };

  // 초기 로드
  useEffect(() => {
    const load = async () => {
      const saved = await AsyncStorage.getItem("fasting");
      if (saved) {
        setData(JSON.parse(saved));
      }
    };

    load();
  }, []);

  // 타이머
  useEffect(() => {
    if (!data) return;

    const interval = setInterval(() => {
      const result = getFastingState(
        data.startTime,
        data.fastingHours,
        data.eatingHours,
      );

      setState(result.state);
      setRemaining(result.remaining);
    }, 1000);

    return () => clearInterval(interval);
  }, [data]);

  return {
    state,
    remaining,
    start,
    stop,
    fastingHours,
    eatingHours,
    setFastingHours,
    setEatingHours,
  };
};
