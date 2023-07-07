import { useState } from "react";
import DraftEditor from "../components/Editor/testDraft";
import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  min-width: 100%;
`;

const Box = styled.div`
  width: 600px;
  min-height: 300px;
  overflow-y: scroll;
  margin: 20px auto;
  border: 1px solid black;
  padding: 20px;
`;

const Page2 = () => {

  const initialText = "Example text to edit in the Draft.js editor.";

  return (
    <Container>
      <Box>
        <DraftEditor />
      </Box>
    </Container>
  );
};

export default Page2;
