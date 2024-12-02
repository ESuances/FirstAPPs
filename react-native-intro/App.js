import { Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./Components/ProfileCard/Profile.style.js";
import { TouchableOpacity } from "react-native";
import { ProfileCard } from "./Components/ProfileCard/PofileCard.jsx";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfileCard />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
