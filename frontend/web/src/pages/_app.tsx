import { HeaderLayout } from "@/components/templates/HeaderLayout";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import theme from "../theme/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <HeaderLayout>
        <Component {...pageProps} />
      </HeaderLayout>
    </ChakraProvider>
  );
}
