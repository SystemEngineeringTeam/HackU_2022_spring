import { FC } from "react";
import { useQRCode } from "next-qrcode";

type Props = {
  text: string
};

export const ShareQrCode: FC<Props> = (props) => {
  const { Image } = useQRCode();

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      text={props.text}
      options={{
        type: 'image/jpeg',
        quality: 0.3,
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#000000',
          light: '#ffffff',
        },
      }}
    />
  );
};
