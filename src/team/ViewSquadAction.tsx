import { TeamOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";

function ViewSquadAction(props: { viewSquad: () => void }) {
  return (
    <Tooltip title="View squad">
      <Button
        shape="circle"
        icon={<TeamOutlined />}
        onClick={props.viewSquad}
      />
    </Tooltip>
  );
}
export default ViewSquadAction;
