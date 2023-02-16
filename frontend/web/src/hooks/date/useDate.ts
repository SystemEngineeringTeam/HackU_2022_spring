import dayjs from "dayjs";

type Props = {
  lastUpdate: string;
};

export const useDate = () => {
  const formatDate = (props: Props) => {
    const { lastUpdate } = props;

    const currentDate = dayjs();
    const lastUpdateDate = dayjs(lastUpdate);

    if (currentDate.diff(lastUpdate, "second") < 60)
      return `${currentDate.diff(lastUpdate, "second")}秒前`;

    if (currentDate.diff(lastUpdate, "minute") < 60)
      return `${currentDate.diff(lastUpdate, "minute")}分前`;

    if (currentDate.diff(lastUpdate, "hour") < 12)
      return `${currentDate.diff(lastUpdate, "hour")}時間前`;

    if (currentDate.diff(lastUpdate, "month") < 12)
      return `${currentDate.diff(lastUpdate, "month")}ヶ月前`;

    return `${currentDate.diff(lastUpdate, "year")}年前`;
  };
  return { formatDate };
};
