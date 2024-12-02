import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },

  texts: {
    flex: 1,
    paddingLeft: 15,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },

  header: {
    flexDirection: "row",
  },

  social: {
    padding: 10,
    justifyContent: "space-evenly",
    flexDirection: "row",
  },

  avatar: {
    width: 70,
    height: 70,
  },

  socialBtn: {
    borderRadius: "50%",
    padding: 10,
    backgroundColor: "#eee",
  },
});
