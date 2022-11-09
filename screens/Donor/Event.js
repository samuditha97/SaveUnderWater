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
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

function Example() {
  return (
    <ScrollView w={["500", "300"]} h="6">
      <VStack space={4} alignItems="center">
        <Center w="350" h="150" bg="indigo.50" rounded="md" shadow={3}>
          <Text
            highlight
            fontSize="20"
            _dark={{
              color: "info.400",
            }}
          >
            Hikka Beach Cleanup
          </Text>
          <Text fontSize="15">Hikkaduwa Beach</Text>
          <Text fontSize="15">03-10-2022</Text>
          <Button size="sm" marginLeft="190" marginTop="0">
            VIEW
          </Button>
        </Center>
        <Center w="350" h="150" bg="indigo.50" rounded="md" shadow={3}>
          <Text
            highlight
            fontSize="20"
            _dark={{
              color: "info.400",
            }}
          >
            Hikka Beach Cleanup
          </Text>
          <Text fontSize="15">Hikkaduwa Beach</Text>
          <Text fontSize="15">03-10-2022</Text>
          <Button size="sm" marginLeft="190" marginTop="0">
            VIEW
          </Button>
        </Center>
        <Center w="350" h="150" bg="indigo.50" rounded="md" shadow={3}>
          <Text
            highlight
            fontSize="20"
            _dark={{
              color: "info.400",
            }}
          >
            Hikka Beach Cleanup
          </Text>
          <Text fontSize="15">Hikkaduwa Beach</Text>
          <Text fontSize="15">03-10-2022</Text>
          <Button size="sm" marginLeft="190" marginTop="0">
            VIEW
          </Button>
        </Center>
        <Center w="350" h="150" bg="indigo.50" rounded="md" shadow={3}>
          <Text
            highlight
            fontSize="20"
            _dark={{
              color: "info.400",
            }}
          >
            Hikka Beach Cleanup
          </Text>
          <Text fontSize="15">Hikkaduwa Beach</Text>
          <Text fontSize="15">03-10-2022</Text>
          <Button size="sm" marginLeft="190" marginTop="0">
            VIEW
          </Button>
        </Center>
        <Center w="350" h="150" bg="indigo.50" rounded="md" shadow={3}>
          <Text
            highlight
            fontSize="20"
            _dark={{
              color: "info.400",
            }}
          >
            Hikka Beach Cleanup
          </Text>
          <Text fontSize="15">Hikkaduwa Beach</Text>
          <Text fontSize="15">03-10-2022</Text>
          <Button size="sm" marginLeft="190" marginTop="0">
            VIEW
          </Button>
        </Center>
      </VStack>
    </ScrollView>
  );
}

function Search() {
  return (
    <View marginTop="1000">
      <Input
        placeholder="Search"
        variant="filled"
        width="100%"
        borderRadius="10"
        py="2"
        px="4"
        w="300"
        marginLeft="5"
        InputLeftElement={
          <Icon
            ml="2"
            size="4"
            color="gray.400"
            as={<Ionicons name="ios-search" />}
          />
        }
      />
    </View>
  );
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={2} backgroundColor="muted.50" marginTop="-980">
        <Search />
      </Center>
      <Center flex={1} backgroundColor="muted.50">
        <Example />
      </Center>
    </NativeBaseProvider>
  );
};
