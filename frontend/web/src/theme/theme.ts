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
  // components: {
  //   Button: {
  //     baseStyle: {
  //       color: "red.500",
  //       backgroundColor: "orange.400",
  //     },
  //   },
  // },
});

export default thema;
