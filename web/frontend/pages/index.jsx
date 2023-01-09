import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

import { trophyImage } from "../assets";

import { ProductsCard } from "../components";
import MyComponent from "../components/MyComponent";
import {useTest} from '../hooks'
import axios from "axios";
import { getSessionToken } from "@shopify/app-bridge-utils";
import { useAppBridge } from "@shopify/app-bridge-react";

export default function HomePage() {

      const {
        data,
        refetch: refetchProductCount,
        isLoading: isLoadingCount,
        isRefetching: isRefetchingCount,
      } = useTest({
        url: "/api/check/stk",
        reactQueryOptions: {
          onSuccess: () => {
            setIsLoading(false);
          },
        },
      });
      // const headers = {
      //   'Content-Type': 'application/json',
      //   'Authorization': 'JWT fefege...'
      // }
      // const data = {
      //   name:'Akshay'
      // }
      
      // axios.post("/api/check/stk", data, {
      //     headers: headers
      //   })
      //   .then((response) => {
      //     dispatch({
      //       type: FOUND_USER,
      //       data: response.data[0]
      //     })
      //   })
      //   .catch((error) => {
      //     dispatch({
      //       type: ERROR_FINDING_USER
      //     })
      //   })
      const app = useAppBridge()
      getSessionToken(app).then(token =>{
        console.log("token", token)
      })
  return (
    <Page narrowWidth>
      <TitleBar title="App name" primaryAction={null} />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>Nice work on building a Shopify app 🎉</Heading>
                  <p>
                    Your app is ready to explore! It contains everything you
                    need to get started including the{" "}
                    <Link url="https://polaris.shopify.com/" external>
                      Polaris design system
                    </Link>
                    ,{" "}
                    <Link url="https://shopify.dev/api/admin-graphql" external>
                      Shopify Admin API
                    </Link>
                    , and{" "}
                    <Link
                      url="https://shopify.dev/apps/tools/app-bridge"
                      external
                    >
                      App Bridge
                    </Link>{" "}
                    UI library and components.
                  </p>
                  <p>
                    Ready to go? Start populating your app with some sample
                    products to view and test in your store.{" "}
                  </p>
                  <p>
                    Learn more about building out your app in{" "}
                    <Link
                      url="https://shopify.dev/apps/getting-started/add-functionality"
                      external
                    >
                      this Shopify tutorial
                    </Link>{" "}
                    📚{" "}
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <MyComponent/>
          <ProductsCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
