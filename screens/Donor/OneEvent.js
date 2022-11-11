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
  Stack,
  FormControl,
} from "native-base";

function Background() {
  return (
    <Center>
      <Image
        source={require("../../assets/background.jpg")}
        alt="Alternate Text"
        size="xl"
        opacity="0.6"
        h="300"
        w="500"
        marginLeft="-100"
        marginTop="100"
      />

      <Image
        source={require("../../assets/back2.jpg")}
        alt="Alternate Text"
        size="xl"
        opacity="0.6"
        h="300"
        w="500"
        marginLeft="300"
        marginTop="400"
      />
    </Center>
  );
}

function Items() {
  return (
    <ScrollView w="100%">
      <Stack
        space={2.5}
        alignSelf="center"
        px="3"
        safeArea
        mt="4"
        w={{
          base: "100%",
          md: "2%",
        }}
      >
        <Box>
          <FormControl isDisabled mb="5">
            <FormControl.Label
              _disabled={{
                _text: {
                  color: "gray.400",
                  fontWeight: "bold",
                },
              }}
              marginTop="30"
            >
              Event Date
            </FormControl.Label>
            <Input placeholder="03-10-2022" />
          </FormControl>
        </Box>
      </Stack>
    </ScrollView>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} backgroundColor="#fff">
        <Background />
      </Center>
      <Center flex={3} backgroundColor="#fff">
        <Items />
      </Center>
    </NativeBaseProvider>
  );
};
