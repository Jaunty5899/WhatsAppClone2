import Card from "@mui/material/Card";
export default function ChatBubble() {
  return (
    <>
      <Card
        variant="outlined"
        sx={{
          minWidth: 275,
          padding: 1,
          marginLeft: 100,
          borderRadius: 2,
          backgroundColor: "#d8fdd2",
          color: "black",
          boxShadow: "rgba(0, 0, 0, 0.33) 1.95px 1.95px 2.6px;",
        }}
      >
        ass
      </Card>
      <Card
        variant="outlined"
        sx={{
          minWidth: 275,
          padding: 1,
          marginRight: 100,
          borderRadius: 2,
          backgroundColor: "#ffffff",
          color: "black",
          boxShadow: "rgba(0, 0, 0, 0.33) 1.95px 1.95px 2.6px;",
        }}
      >
        lady D
      </Card>
    </>
  );
}
