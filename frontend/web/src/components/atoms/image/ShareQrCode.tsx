import { FC } from "react";
import { useQRCode } from "next-qrcode";
import { Box, Modal, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";

type Props = {};

export const ShareQrCode: FC<Props> = (props) => {
  const { Image } = useQRCode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const href = globalThis.window?.location.href;

  return (
    <>
      <Box onClick={onOpen}>
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <Image
          text={href}
          options={{
            type: 'image/jpeg',
            quality: 0.3,
            level: 'M',
            margin: 3,
            scale: 4,
            width:96,
            color: {
              dark: '#000000',
              light: '#ffffff',
            },
          }}
        />
      </Box>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>部屋共有用QRコード</ModalHeader>
          <ModalCloseButton />
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <Image
            text={href}
            options={{
              type: 'image/jpeg',
              quality: 0.3,
              level: 'M',
              margin: 3,
              scale: 4,
              width: 300,
              color: {
                dark: '#000000',
                light: '#ffffff',
              },
            }}
          />
          <ModalFooter>他の参加者にQUコードを読み込んででもらいましょう</ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
