import { Heading, Center, Text, ScrollView, Image } from "native-base";
import { Header } from "../components";

const NewsDetail = ({ route }) => {
  // Get the params
  const newsItem = route.params.item;

  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView>
        <Center flex={1} p={4}>
          <Heading>{newsItem.title}</Heading>
          <Image
            source={{ uri: newsItem.image }}
            alt="Image Data"
            size="2xl"
            mt={4}
          />
          <Text fontSize="sm" color="gray.500" mt={4}>
            Date: {newsItem.date}
          </Text>
          <Text mt={4}>{newsItem.content}</Text>
        </Center>
      </ScrollView>
    </>
  );
};

export default NewsDetail;
