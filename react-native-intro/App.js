import { Linking, Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./Components/ProfileCard/Profile.style.js";
import { TouchableOpacity } from "react-native";
import { ProfileCard } from "./Components/ProfileCard/PofileCard.jsx";

export default function App() {
  function goToGithub() {
    Linking.openURL("https://github.com/ESuances");
  }
  function goToLinkedin() {
    Linking.openURL(
      "https://www.linkedin.com/in/erick-samuel-suances-arceo-a1131828a/"
    );
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
        <ProfileCard
          onPressGitHub={goToGithub}
          onPressLinkedin={goToLinkedin}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
