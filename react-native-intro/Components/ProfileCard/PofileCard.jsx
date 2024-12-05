import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "./Profile.style";
import AntDesign from "@expo/vector-icons/AntDesign";

export function ProfileCard({ onPressGitHub, onPressLinkedin }) {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <View>
          <Image
            style={style.avatar}
            source={require("./MyCurrentProfile.png")}
          ></Image>
        </View>
        <View style={style.texts}>
          <Text style={style.name}>Erick Suances</Text>
          <Text>Hi, I am a react native developper</Text>
          <Text>Let's get in touch! </Text>
        </View>
      </View>
      <View style={style.social}>
        <TouchableOpacity onPress={onPressLinkedin} style={style.socialBtn}>
          <AntDesign name="linkedin-square" size={24} color="#0077B5" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressGitHub} style={style.socialBtn}>
          <AntDesign name="github" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialBtn}>
          <AntDesign name="clouddownload" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style={style.socialBtn}>
          <AntDesign name="link" size={24} color="#0A66C2" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
