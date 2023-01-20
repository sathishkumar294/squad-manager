import { WarningTwoTone } from "@ant-design/icons";
import { Card, Collapse, Modal, Progress, Space } from "antd";
import React, { useState } from "react";
import { useAppDispatch, useAppSelect } from "../app/store/hooks";
import { selectTeam, teamCompositionStatus } from "../app/store/teams";
import { MAX_PLAYERS_PER_TEAM } from "../constants/config";
import { SelectedTeamSquadContainer } from "../content/SelectedTeamSquadContainer";
import RemoveAllPlayersAction from "./RemoveAllPlayersAction";
import TeamComposition from "./TeamComposition";
import TeamCover from "./TeamCover";
import ViewSquadAction from "./ViewSquadAction";
const { Panel } = Collapse;
const TeamCard: React.FC<{ team: Team; onClick?: () => void }> = ({
  team,
  onClick,
}) => {
  const dispatch = useAppDispatch();
  const isTeamComposition = useAppSelect(teamCompositionStatus);
  const [open, setOpen] = useState(false);
  let strokeColor = "#8E44AD";
  switch (Math.sign(team.players.length - MAX_PLAYERS_PER_TEAM)) {
    case 0:
      strokeColor = "#28B463";
      break;
    case 1:
      strokeColor = "#E74C3C";
      break;
  }
  const viewSquad = () => {
    dispatch(selectTeam({ team }));
    setOpen(true);
  };
  return (
    <>
      <Card
        title={team.name}
        cover={<TeamCover team={team}></TeamCover>}
        onClick={onClick || (() => {})}
        hoverable={true}
        className="team-card"
        style={{
          ...(!!onClick ? { cursor: "pointer" } : {}),
        }}
        actions={[
          <RemoveAllPlayersAction name={team.name}></RemoveAllPlayersAction>,
          <ViewSquadAction viewSquad={viewSquad}></ViewSquadAction>,
        ]}
      >
        <Space
          direction="vertical"
          align="baseline"
          className="team-card-space"
          onClick={(e: any) => e.stopPropagation()}
        >
          <Progress
            percent={Math.ceil(
              (100 * team.players.length) / MAX_PLAYERS_PER_TEAM
            )}
            steps={MAX_PLAYERS_PER_TEAM}
            size="default"
            strokeColor={strokeColor}
          ></Progress>
          <Collapse className="team-card-space-item">
            <Panel
              key={""}
              header={
                <span>
                  {team.players.length}/{MAX_PLAYERS_PER_TEAM}
                </span>
              }
              extra={
                !isTeamComposition[team.name] && (
                  <WarningTwoTone twoToneColor="#E67E22"></WarningTwoTone>
                )
              }
            >
              <TeamComposition team={team}></TeamComposition>
            </Panel>
          </Collapse>
        </Space>
      </Card>
      <Modal
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width="auto"
      >
        <SelectedTeamSquadContainer></SelectedTeamSquadContainer>
      </Modal>
    </>
  );
};

export default TeamCard;
