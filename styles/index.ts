import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // 아이폰 느낌 핵심
    alignItems: "center",
    justifyContent: "center",
  },

  status: {
    color: "#aaa",
    fontSize: 18,
    marginBottom: 20,
  },

  timer: {
    color: "#fff",
    fontSize: 64,
    fontWeight: "200", // 얇은 폰트 느낌
    letterSpacing: 2,
    marginBottom: 60,
  },

  button: {
    backgroundColor: "#1c1c1e",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 999,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
  },

  stopButton: {
    backgroundColor: "#ff3b30", // 아이폰 느낌 빨간색
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 999,
  },
  input: {
    backgroundColor: "#1c1c1e",
    color: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 16,
  },
});
