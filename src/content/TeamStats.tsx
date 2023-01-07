import { Space } from "antd";
import { useSelector } from "react-redux";
import { allTeams } from "../app/store/teams";
import Team from "../team/Team";

const TeamStats = () => {
  const teams = useSelector(allTeams);
  return (
    <>
      <Space
        wrap={true}
        size="middle"
        align="center"
        style={{ justifyContent: "space-evenly" }}
      >
        {teams.map((team, i) => (
          <Team team={team} key={team.name}></Team>
        ))}
      </Space>
    </>
  );
};

export default TeamStats;
