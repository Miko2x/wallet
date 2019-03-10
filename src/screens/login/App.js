import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions
} from "react-native";

const { width, height } = Dimensions.get("window")

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topAll}>
          <ImageBackground
            source={{ uri: "https://scontent.fcgk18-1.fna.fbcdn.net/v/t1.0-9/30222318_1561923947239265_8873067560734674384_n.jpg?_nc_cat=109&_nc_ht=scontent.fcgk18-1.fna&oh=6a564645589e86bfcf6228a810fd640a&oe=5CC0A576" }}
            style={{ width: width, height: height - 365, justifyContent: "center" }}
          >
            <View style={styles.top}>
              <View style={styles.containerProfile}>
                <View style={styles.profileImage}>
                  <TouchableOpacity>
                    <Image
                      source={{ uri: "https://scontent.fcgk18-2.fna.fbcdn.net/v/t1.0-9/49816881_1915994621832194_5934959163082801152_n.jpg?_nc_cat=110&_nc_ht=scontent.fcgk18-2.fna&oh=19aeaec92c54fe6b7f8d817709f30e8f&oe=5CC86845" }}
                      style={{ width: 132, height: 132, borderRadius: 100, borderWidth: 1 }}
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.profileInformation}>
                  <Text numberOfLines={2} style={styles.name}>Revania Aprillia Kenpenara Yowari</Text>
                  <Text numberOfLines={2} style={styles.caption}>لو كان خيرا لســبقو نا إليه</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.center}></View>

        <View style={styles.bottom}>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}></View>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}></View>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}></View>
          </View>

          <View style={styles.bottomItem}>
            <View style={styles.bottomItemInner}></View>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    height: "45%",
    padding: 10,
    justifyContent: "center",
  },
  topAll: {
    justifyContent: "center"
  },
  containerProfile: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#fff",
    elevation: 5
  },
  profileInformation: {
    width: "55%",
    padding: 20,
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "grey",
    elevation: 3
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20
  },
  caption: {
    color: "#fff",
    fontSize: 20,
  },
  center: {
    height: "10%",
    backgroundColor: "#7fbcac",
  },
  bottom: {
    height: "45%",
    backgroundColor: "#fff",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 5,
  },
  bottomItem: {
    width: "50%",
    height: "50%",
    padding: 5
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: "#292929",
  }
});
