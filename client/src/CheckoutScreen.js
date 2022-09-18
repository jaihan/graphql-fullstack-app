import React from "react";
import { SafeAreaView } from "react-native";
import {
  Text,
  Heading,
  VStack,
  Input,
  Button,
  HStack,
  Radio,
  Select,
  Box,
  CheckIcon,
  View,
} from "native-base";
import { gql, useMutation } from "@apollo/client";

const ADD_USER = gql`
  mutation AddUser(
    $prefix: String!
    $firstName: String!
    $surName: String!
    $email: String!
    $mobilePhone: String!
    $gender: String!
    $age: String!
    $nationlity: String!
    $org: String!
    $jobTitle: String!
  ) {
    addUser(
      prefix: $prefix
      firstName: $firstName
      surName: $surName
      email: $email
      mobilePhone: $mobilePhone
      gender: $gender
      age: $age
      nationlity: $nationlity
      org: $org
      jobTitle: $jobTitle
    ) {
      id
      prefix
      firstName
      surName
      email
      mobilePhone
      gender
      age
      nationlity
      org
      jobTitle
    }
  }
`;

function CheckoutScreen({ navigation }) {
  const [text_prefix, setText_prefix] = React.useState("");
  const [text_fristName, setText_firstName] = React.useState("");
  const [text_surName, setText_surName] = React.useState("");
  const [text_email, setText_email] = React.useState("");
  const [text_mobiilePhone, setText_mobiilePhone] = React.useState("");
  const [text_gender, setText_gender] = React.useState("");
  const [text_age, setText_age] = React.useState("");
  const [text_nationlity, setText_nationlity] = React.useState("");
  const [text_org, setText_org] = React.useState("");
  const [text_jobTitle, setText_jobTitle] = React.useState("");
  const [addUser] = useMutation(ADD_USER);
  return (
    <SafeAreaView>
      <Box>
        <Heading
          size="lg"
          fontWeight="600"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Ticket1: ADEX Ocean Vision 2022 - Standard Pass on 16/09/22
        </Heading>

        <VStack space={3} mt="5">
          <Select
            selectedValue={text_prefix}
            minWidth="200"
            accessibilityLabel="Prefix"
            placeholder="Prefix"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setText_prefix(itemValue)}
          >
            <Select.Item label="MR" value="mr" />
            <Select.Item label="MS" value="ms" />
          </Select>
          <HStack space={5} alignContent="center">
            <Input
              size="md"
              placeholder="First name*"
              value={text_fristName}
              onChangeText={setText_firstName}
              required
            />
            <Input
              size="md"
              placeholder="Surname*"
              value={text_surName}
              onChangeText={setText_surName}
            />
          </HStack>

          <Input
            size="md"
            placeholder="Email address*"
            value={text_email}
            onChangeText={setText_email}
          />
          <Input
            size="md"
            placeholder="Mobile phone*"
            value={text_mobiilePhone}
            onChangeText={setText_mobiilePhone}
          />

          <Text fontSize="xl">Gender*</Text>
          <Radio.Group
            name="myRadioGroup"
            accessibilityLabel="favorite number"
            value={text_gender}
            onChange={(nextValue) => {
              setText_gender(nextValue);
            }}
          >
            <Radio value="male" my={1}>
              Male
            </Radio>
            <Radio value="female" my={1}>
              Female
            </Radio>
            <Radio value="other" my={1}>
              Other
            </Radio>
          </Radio.Group>

          <Input
            size="md"
            placeholder="Age"
            value={text_age}
            onChangeText={setText_age}
          />
          <Input
            size="md"
            placeholder="Nationality"
            value={text_nationlity}
            onChangeText={setText_nationlity}
          />
          <Input
            size="md"
            placeholder="Company / Organisation"
            value={text_org}
            onChangeText={setText_org}
          />
          <Input
            size="md"
            placeholder="Jot Title"
            value={text_jobTitle}
            onChangeText={setText_jobTitle}
          />

          <View>
            <Button
              onPress={() => {
                addUser({
                  variables: {
                    prefix: text_prefix,
                    firstName: text_fristName,
                    surName: text_surName,
                    email: text_email,
                    mobilePhone: text_mobiilePhone,
                    gender: text_gender,
                    age: text_age,
                    nationlity: text_nationlity,
                    org: text_org,
                    jobTitle: text_jobTitle,
                  },
                })
                  .then((res) =>
                    navigation.navigate("Detail", { user: res.data })
                  )
                  .catch((err) => <Text>{err}</Text>);
              }}
            >
              Submit
            </Button>
          </View>
        </VStack>
      </Box>
    </SafeAreaView>
  );
}

export default CheckoutScreen;
