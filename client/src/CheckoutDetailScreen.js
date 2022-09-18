import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { VStack, Heading, Box, Flex, Text } from "native-base";
import QRCode from "react-native-qrcode-svg";

function CheckoutDetailScreen({ route }) {
  const { firstName, surName, jobTitle, org } = route.params.user.addUser;
  const [date, setDate] = React.useState(null);

  React.useEffect(() => {
    let today = new Date();
    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    setDate(date);
  }, []);

  return (
    <SafeAreaView>
      <VStack
        space={2}
        justifyContent="center"
        alignItems="center"
        safeAreaTop
        mb={6}
        style={styles.text}
      >
        <QRCode value={JSON.stringify(route.params.user.addUser)} />
      </VStack>
      <Box style={styles.text}>
        <Heading size="sm">Name</Heading>
        <Text>{firstName + surName}</Text>
      </Box>
      <Box style={styles.text}>
        <Heading size="sm">Event</Heading>
        <Text>{jobTitle}</Text>
      </Box>
      <Box style={styles.text}>
        <Heading size="sm">Location</Heading>
        <Text>{date}</Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
            Add to calendar
          </Text>
        </Flex>
      </Box>
      <Box style={styles.text}>
        <Heading size="sm">Location</Heading>
        <Text>{org}</Text>
        <Flex>
          <Text mt="2" fontSize={12} fontWeight="medium" color="darkBlue.600">
            Read More
          </Text>
        </Flex>
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  img: {
    paddingTop: 20,
  },
  text: {
    padding: 20,
  },
});

export default CheckoutDetailScreen;
