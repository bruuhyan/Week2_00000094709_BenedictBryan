import { Text, View, Image, ScrollView, StyleSheet} from "react-native";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.Base}>
      <Image source={require('../assets/images/Bryan.jpeg')} style={styles.Image}/>
      <Text>Benedict Bryan Hudson Prayitno</Text>
      <Text>00000094709</Text>

      <Image source={require('../assets/images/Dapis.jpeg')} style={styles.Image}/>
      <Text>Davis Ariel</Text>
      <Text>00000094994</Text>

      <Image source={require('../assets/images/Airin.jpeg')} style={styles.Image}/>
      <Text>Airin Frantrishia Lay</Text>
      <Text>00000093892</Text>

      <Image source={require('../assets/images/Fedora.jpeg')} style={styles.Image}/>
      <Text>Fedora Anestasia</Text>
      <Text>00000091646</Text>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  Base: {
    alignItems: "center",
  },

  Image: {
    marginTop: 10,
    width: 200,
    height: 200,
  },
});
