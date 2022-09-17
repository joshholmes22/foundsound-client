import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";

import { CREATE_ARTIST_PROFILE } from "../../graphql/mutations";
import { useMutation } from "@apollo/client";

const ArtistNameUpload = ({ setArtistName }) => {
  const [createArtistProfile, { data, loading, error }] = useMutation(
    CREATE_ARTIST_PROFILE
  );
  const [errorText, setErrorText] = useState("UNKNOWN ERROR");
  const [trackError, setTrackError] = useState(false);
  const [newName, setNewName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newName.trim()) {
      const createArtistProfileInput = {
        name: newName.trim(),
      };
      createArtistProfile({ variables: { createArtistProfileInput } });
      setArtistName(newName);
      setNewName("");
      setTrackError(false);
    } else {
      setErrorText("ERROR: Please enter a valid URI.");
      setTrackError(true);
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column" }}
      component="form"
      onSubmit={handleSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Artist Name"
        variant="outlined"
        sx={{ mb: "15px", width: "400px" }}
        value={newName}
        onInput={(e) => setNewName(e.target.value)}
      />
      <Button type="submit" variant="contained" startIcon={<EditIcon />}>
        Change Name
      </Button>
      {trackError && (
        <FormHelperText
          id="my-error-text"
          sx={{ color: "red", textAlign: "center" }}
        >
          {errorText}
        </FormHelperText>
      )}
    </Box>
  );
};

export default ArtistNameUpload;
