import { Text } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { style } from "./App.style";
import { TouchableOpacity } from "react-native";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text style={style.title}>Hola</Text>
        <Text style={style.boton}> Sin pedos gano los 60k para 2025</Text>
        <TouchableOpacity style={style.boton}>
          <Text>Click me para confirmar!</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
