import { Button } from "antd";
import { useAppDispatch } from "../app/store/hooks";
import { removeAllPlayers } from "../app/store/teams";

function RemoveAllPlayersAction(props: { name: string }) {
  const dispatch = useAppDispatch();
  return (
    <Button
      danger
      onClick={() =>
        dispatch(
          removeAllPlayers({
            team: props.name,
          })
        )
      }
    >
      Delete all
    </Button>
  );
}

export default RemoveAllPlayersAction;
