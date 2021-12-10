import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Stack, Grid } from "@mui/material";
import ProgressBar from "../components/ProgressBar";
const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];
function Storytwo() {
  const [completed, setCompleted] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 1000);
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    navigate("/progress");
  };
  const handleClick2 = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <div className="photo">
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
        >
          {testData.map((item, idx) => (
            <ProgressBar
              key={idx}
              bgcolor={item.bgcolor}
              completed={completed}
            />
          ))}
        </Stack>
        <h1 style={{ color: "white" }}>MCD</h1>
        <Grid item sm={12} style={{ display: "flex" }} xs={12} sx={{ mb: 12 }}>
          <Button onClick={handleClick}>Previous</Button>
          <Button onClick={handleClick2}>Next</Button>
        </Grid>
      </div>
    </>
  );
}

export default Storytwo;
