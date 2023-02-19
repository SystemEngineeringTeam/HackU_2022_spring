import { FC } from "react";
import { useQRCode } from "next-qrcode";

type Props = {
  text: string
};

export const ShareQrCode: FC<Props> = (props) => {
  const { Image } = useQRCode();
  const href = globalThis.window?.location.href;

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      text={href}
      options={{
        type: 'image/jpeg',
        quality: 0.3,
        level: 'M',
        margin: 3,
        scale: 4,
        width: 400,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      }}
    />
  );
};
