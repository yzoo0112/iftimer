type FastingState = "FASTING" | "EATING";

// 상태 계산
export const getFastingState = (
  startTime: number,
  fastingHours: number,
  eatingHours: number,
): { state: FastingState; remaining: number } => {
  const now = Date.now();
  const elapsed = now - startTime;

  const fastingMs = fastingHours * 60 * 60 * 1000;
  const eatingMs = eatingHours * 60 * 60 * 1000;
  const cycle = fastingMs + eatingMs;

  const current = elapsed % cycle;

  if (current < fastingMs) {
    return {
      state: "FASTING",
      remaining: fastingMs - current,
    };
  } else {
    return {
      state: "EATING",
      remaining: cycle - current,
    };
  }
};

// 시간 포맷 (UI용)
export const formatTime = (ms: number) => {
  const totalSec = Math.floor(ms / 1000);
  const h = String(Math.floor(totalSec / 3600)).padStart(2, "0");
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, "0");
  const s = String(totalSec % 60).padStart(2, "0");

  return `${h}:${m}:${s}`;
};
