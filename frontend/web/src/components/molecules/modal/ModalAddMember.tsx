import { FC } from "react";
import {
  Box,
  Button,
  Center,
  VStack,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import { ShareQrCode } from "@/components/atoms/image/ShareQrCode";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const ModalAddMember: FC<Props> = (props) => {
  const { isOpen, onClose } = props;
  const href = globalThis.window?.location.href;

  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent mx="1rem">
        <ModalHeader>参加者追加</ModalHeader>
        <ModalCloseButton />

        <ModalBody p={2}>
          <Center h="80">
            <VStack>
              <Box h="80" w="80" bg="gray.200">
                <ShareQrCode text={href} />
              </Box>
              <Box>
                <Text>QRコードを読んでください</Text>
              </Box>
            </VStack>
          </Center>


          {/* <Flex mb={2}>
        <Input
          placeholder="dd"
          value="ddd"
         
          mr={2}
        />
        <Button onClick={onCopy}>{hasCopied ? "Copied!" : "Copy"}</Button>
      </Flex>
      <Editable placeholder="Paste here">
        <EditablePreview width="100%" />
        <EditableInput />
      </Editable> */}

        </ModalBody>
        <ModalFooter>
          <Center>
            <HStack spacing={4}>
              <Button
                type="submit"
                color="white"
                backgroundColor="orange.400"
                _hover={{ bg: "orange.500" }}
                _active={{ bg: "orange.600" }}
              >
                作成
              </Button>

              <Button onClick={onClose}>戻る</Button>
            </HStack>
          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
