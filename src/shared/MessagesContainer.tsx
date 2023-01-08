import { message } from "antd";
import { useEffect } from "react";
import { useAppSelect } from "../app/store/hooks";
import { getMessage } from "../app/store/teams";

export const MessagesContainer = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const messageToShow = useAppSelect(getMessage);

  useEffect(() => {
    if (messageToShow) {
      messageApi.open({
        type: messageToShow.type || "info",
        content: messageToShow.message,
      });
    }
  }, [messageToShow, messageApi]);

  return <>{contextHolder}</>;
};
