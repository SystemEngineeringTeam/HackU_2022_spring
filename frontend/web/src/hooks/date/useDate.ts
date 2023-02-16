import dayjs from "dayjs";

type Props = {
  lastUpdate: string;
};

export const useDate = () => {
  const formatDate = (props: Props) => {
    const { lastUpdate } = props;

    const cuerrentDate = dayjs();
    const lastUdated = dayjs(lastUpdate);

    const displayDate =
      cuerrentDate.format("YYYY/M/D") === lastUdated.format("YYYY/M/D")
        ? lastUdated.format("h:mm A")
        : cuerrentDate.format("YYYY") !== lastUdated.format("YYYY")
        ? `${lastUdated.format("YYYY")}年`
        : lastUdated.format("M / D");

    return displayDate;
  };
  return { formatDate };
};
