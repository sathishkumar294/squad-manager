import { TeamOutlined } from "@ant-design/icons";
import { Button, Card, Modal, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeAllPlayers, selectTeam } from "../app/store/teams";
import { SelectedTeamSquadContainer } from "../content/SelectedTeamSquadContainer";
import TeamComposition from "./TeamComposition";
import TeamCover from "./TeamCover";

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
          <Button
            danger
            onClick={() => dispatch(removeAllPlayers({ team: team.name }))}
          >
            Delete all
          </Button>,
          <Tooltip title="View squad">
            <Button
              shape="circle"
              icon={<TeamOutlined />}
              onClick={viewSquad}
            />
          </Tooltip>,
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
