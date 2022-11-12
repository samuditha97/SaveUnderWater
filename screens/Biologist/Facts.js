import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import moment from "moment/moment";

const Facts = () => {
  const facts = [
    {
      title:
        "Protecting whales to protect the planet whales to protect the planet",
      description:
        "Whales are known for being the largest and most intelligent creatures in the ocean. Now, marine biologists have discovered that they also capture tonnes of carbon from the atmosphere, a service with an economic value of US$1 trillion for all the great whales, according to a study published by the International Monetary Fund. Up until now, protecting great whales has been viewed as a human good. But the International Monetary Fund research points out that protecting whales also has a monetary incentive, as it turns out whales are an important nature-based solution to capturing carbon from human emissions. “The carbon capture potential of whales is truly startling,” said the report. “Our conservative estimates put the value of the average great whale, based on its various activities, at more than US$2 million, and easily over US$1 trillion for the current stock of great whales.” Whales accumulate carbon in their bodies during their long lives, some of which stretch to 200 years. When they die, they sink to the bottom of the ocean, taking the carbon with them. According to the study, each great whale sequesters around 33 tonnes of carbon dioxide on average. A tree during the same period only contributes to 3 per cent of the carbon absorption of the whale.",
      image: require("../../assets/marine.jpg"),
      user: {
        name: "Coco",
        image: require("../../assets/coco.jpg"),
      },
      date: "2022-11-12T03:41:12Z",
    },
    {
      title:
        "Protecting whales to protect the planet whales to protect the planet",
      description:
        "Whales are known for being the largest and most intelligent creatures in the ocean. Now, marine biologists have discovered that they also capture tonnes of carbon from the atmosphere, a service with an economic value of US$1 trillion for all the great whales, according to a study published by the International Monetary Fund. Up until now, protecting great whales has been viewed as a human good. But the International Monetary Fund research points out that protecting whales also has a monetary incentive, as it turns out whales are an important nature-based solution to capturing carbon from human emissions. “The carbon capture potential of whales is truly startling,” said the report. “Our conservative estimates put the value of the average great whale, based on its various activities, at more than US$2 million, and easily over US$1 trillion for the current stock of great whales.” Whales accumulate carbon in their bodies during their long lives, some of which stretch to 200 years. When they die, they sink to the bottom of the ocean, taking the carbon with them. According to the study, each great whale sequesters around 33 tonnes of carbon dioxide on average. A tree during the same period only contributes to 3 per cent of the carbon absorption of the whale.",
      image: require("../../assets/marine.jpg"),
      user: {
        name: "Coco",
        image: require("../../assets/coco.jpg"),
      },
      date: "2022-11-12T03:41:12Z",
    },
  ];

  const menu = [
    {
      icon: require("../../assets/icons/events.png"),
    },
    {
      icon: require("../../assets/icons/home.png"),
    },
    {
      icon: require("../../assets/icons/home.png"),
    },
    {
      icon: require("../../assets/icons/events.png"),
    },
    {
      icon: require("../../assets/icons/home.png"),
    },
  ];

  return (
    <View style={styles.main}>
      <SafeAreaView style={styles.container}>
        <View style={styles.innerContainer}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.header}>
              <Text style={styles.h4}>Facts</Text>
            </View>
            {facts.map((fact, key) => (
              <View style={styles.articleWrapper} key={key}>
                <Image source={fact.image} style={styles.articleCover} />
                <Text style={styles.title}>{fact.title}</Text>
                <Text style={styles.description}>{fact.description}</Text>
                <View style={styles.articleBottom}>
                  <Image style={styles.userImage} source={fact.user.image} />
                  <Text style={styles.username}>{fact.user.name}</Text>
                  <Text style={styles.date}>
                    {moment(fact.date).calendar()}
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
      <View style={styles.bottomBar}>
        <View style={styles.innerBottomBar}>
            {menu.map((icon, key) => (
                <Image key={key} source={icon.icon} />
            ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: "relative",
  },
  container: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  innerContainer: {
    display: "flex",
    paddingHorizontal: 30,
    paddingTop: 30,
    marginBottom: 56,
  },
  scrollView: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  articleCover: {
    display: "flex",
    height: 220,
    width: "100%",
    borderRadius: 4,
    resizeMode: "cover",
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 2,
  },
  pageHeader: {
    display: "flex",
    paddingVertical: 20,
  },
  h4: {
    fontSize: 32,
    fontWeight: "500",
    letterSpacing: -1,
    paddingVertical: 10,
  },
  articleWrapper: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    padding: 12,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "#f1f3f9",
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    height: 160,
    marginVertical: 6,
    color: "rgba(0, 0, 0, 0.8)",
  },
  articleBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 24,
    height: 24,
    resizeMode: "cover",
    borderRadius: 60,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderWidth: 2,
  },
  username: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.4)",
    marginHorizontal: 10,
  },
  date: {
    fontSize: 18,
    color: "rgba(0, 0, 0, 0.4)",
    marginLeft: 10,
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#f1f3f9",
    width: "100%",
    height: 90,
    borderColor: "rgba(0, 0, 0, 0.1)",
    borderTopWidth: 1,
  },
  innerBottomBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  }
});

export default Facts;
