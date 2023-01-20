import { Card, Modal } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { selectTeam } from "../app/store/teams";
import { SelectedTeamSquadContainer } from "../content/SelectedTeamSquadContainer";
import RemoveAllPlayersAction from "./RemoveAllPlayersAction";
import TeamComposition from "./TeamComposition";
import TeamCover from "./TeamCover";
import ViewSquadAction from "./ViewSquadAction";

const Team: React.FC<{ team: Team }> = ({ team }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setModelOpen] = useState(false);

  const viewSquad = () => {
    dispatch(selectTeam({ team }));
    setModelOpen(true);
  };
  const closeModal = () => {
    dispatch(selectTeam({ team: undefined }));
    setModelOpen(false);
  };

  return (
    <>
      <Card
        title={team.name}
        cover={<TeamCover team={team} width="128px"></TeamCover>}
        bordered={false}
        style={{ minWidth: 400 }}
        actions={[
          <RemoveAllPlayersAction name={team.name}></RemoveAllPlayersAction>,
          <ViewSquadAction viewSquad={viewSquad}></ViewSquadAction>,
        ]}
      >
        <TeamComposition team={team}></TeamComposition>
      </Card>
      <Modal open={isModalOpen} onOk={closeModal} onCancel={closeModal}>
        <SelectedTeamSquadContainer></SelectedTeamSquadContainer>
      </Modal>
    </>
  );
};

export default Team;
