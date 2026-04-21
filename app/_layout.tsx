import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // 👈 헤더 아예 제거
      }}
    />
  );
}
