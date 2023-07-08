import dayjs from "dayjs";
import { useCallback } from "react";

type Props = {
  lastUpdate: string;
};

export const useDate = () => {
  const formatDate = useCallback((props: Props) => {
    const { lastUpdate } = props;

    const currentDate = dayjs();

    if (currentDate.diff(lastUpdate, "second") < 60)
      return `${currentDate.diff(lastUpdate, "second")}秒前`;

    if (currentDate.diff(lastUpdate, "minute") < 60)
      return `${currentDate.diff(lastUpdate, "minute")}分前`;

    if (currentDate.diff(lastUpdate, "hour") < 24)
      return `${currentDate.diff(lastUpdate, "hour")}時間前`;

    if (currentDate.diff(lastUpdate, "day") < 30)
      return `${currentDate.diff(lastUpdate, "day")}日前`;

    if (currentDate.diff(lastUpdate, "month") < 12)
      return `${currentDate.diff(lastUpdate, "month")}ヶ月前`;

    return `${currentDate.diff(lastUpdate, "year")}年前`;
  }, []);

  return { formatDate };
};
