import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

import { HeaderLayout } from "@/components/templates/HeaderLayout";

import theme from "../theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <RecoilRoot>
        <HeaderLayout>
          <Component {...pageProps} />
        </HeaderLayout>
      </RecoilRoot>
    </ChakraProvider>
  );
}
