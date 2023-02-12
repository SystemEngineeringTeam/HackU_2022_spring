import { extendTheme } from "@chakra-ui/react";

const thema = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        color: "gray.800",
      },
    },
  },
});

export default thema;
