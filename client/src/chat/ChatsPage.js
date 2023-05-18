import { PrettyChatWindow } from "react-chat-engine-pretty";
import { Box, Grid } from "@mui/material";

const ChatsPage = (props) => {
  const storedObject = localStorage.getItem("NETTEE_TOKEN");
  const object = JSON.parse(storedObject);
  console.log(object);

  return (
    <div style={{ height: '98.6vh'}}>
      <PrettyChatWindow
        projectId="765d135e-7fe6-4803-8b98-2a4668233bc9"
        username={object.data.user.email}
        secret={object.data.user.email}
      />
    </div>
  );
};

export default ChatsPage;

