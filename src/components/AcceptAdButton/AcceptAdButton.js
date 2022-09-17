import { Button, Box } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADVERT_RESPONSES } from "../../graphql/mutations";
import { useEffect, useState } from "react";

const AcceptAdButton = ({ userID, adID, responses, eventId }) => {
  const [createAdvertResponse, { data, loading, error }] =
    useMutation(ADVERT_RESPONSES);

  const [responseData, setResponseData] = useState([]);
  const [doesExist, setDoesExist] = useState(false);

  useEffect(() => {
    setResponseData(responses);
  }, []);

  useEffect(() => {
    if (responses.includes(userID)) {
      setDoesExist(true);
    }
  }, [responses]);

  const onClick = () => {
    const advertResponsesInput = {
      adId: adID,
      allResponses: [...responseData, userID],
      eventId: eventId,
    };
    createAdvertResponse({ variables: { advertResponsesInput } });
  };

  return (
    <Box>
      {!doesExist ? (
        <Button variant="contained" onClick={onClick}>
          Apply to Play
        </Button>
      ) : (
        <Button variant="disabled" onClick={onClick}>
          Already Applied
        </Button>
      )}
    </Box>
  );
};

export default AcceptAdButton;
