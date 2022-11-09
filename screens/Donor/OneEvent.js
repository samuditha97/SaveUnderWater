import React from "react";
import {
  VStack,
  Center,
  NativeBaseProvider,
  ScrollView,
  View,
  Flex,
  Divider,
  Image,
  Text,
  Button,
  Input,
  Icon,
  Menu,
  Pressable,
  Box,
  HamburgerIcon,
  HStack,
} from "native-base";

function Background() {
  return (
    <Center>
      <Image
        source={require("../../assets/background.jpg")}
        alt="Alternate Text"
        size="xl"
      />
    </Center>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={2} backgroundColor="">
        <Background />
      </Center>
    </NativeBaseProvider>
  );
};
