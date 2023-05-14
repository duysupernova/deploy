import { Scheduler } from "@aldabil/react-scheduler";
import { Grid } from "@mui/material";

export default function Appointment() {
  return (
        <Scheduler
        editable
        fields={[
            {
            name: "Description",
            type: "input",
            default: "Please enter your description!",
            config: { label: "Details", multiline: true, rows: 4 }
            }
        ]}
        />
  );
}
