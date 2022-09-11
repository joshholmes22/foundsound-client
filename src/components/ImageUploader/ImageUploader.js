import { useState, useEffect } from "react";
import { uploadFile } from "react-s3";
import ImageUploading from "react-images-uploading";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import uuid from "react-uuid";

window.Buffer = window.Buffer || require("buffer").Buffer;

export const ImageUploader = ({
  imageUrl,
  setImageUrl,
  setFileName,
  dirName,
  imageUse,
}) => {
  const [images, setImages] = useState([]);

  const config = {
    dirName: dirName,
    bucketName: process.env.REACT_APP_BUCKET_NAME,
    region: process.env.REACT_APP_REGION,
    accessKeyId: process.env.REACT_APP_ACCESS_KEY,
    secretAccessKey: process.env.REACT_APP_ACCESS_ID,
  };

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const onUpload = async () => {
    try {
      const uniqueId = uuid();
      const file = images[0].file;
      const newFile = new File([file], `${uniqueId}`);

      const s3Data = await uploadFile(newFile, config);
      if (s3Data?.location) {
        setImageUrl(s3Data.location);
        setImages([]);
        setFileName(s3Data.key);
      } else {
        console.log("Failed to upload image.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onImageRemove = async () => {
    // try {
    //   const s3Data = await ReactS3Client.deleteFile(s3FileName);
    //   if (s3Data.status === 204) {
    //     setImageUrl();
    //     setImages([]);
    //   } else {
    //     console.log("failed to delete image");
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const styles = {
    root: {
      width: "100%",
    },
    media: {
      height: 240,
      width: 240,
      textAlign: "center",
      marginBottom: 2,
    },
    profileImageMedia: {
      height: 150,
      width: 150,
      borderRadius: 100,
      textAlign: "center",
      marginBottom: 2,
    },
    title: {
      textAlign: "center",
      paddingTop: 2,
      paddingBottom: 2,
    },
    cardActions: { display: "flex", justifyContent: "space-evenly" },
  };

  return (
    <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
      {({ imageList, onImageUpload, onImageRemoveAll }) => (
        <Card sx={styles.root}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {images.length !== 0 && (
              <>
                <Typography variant="h6" display="block" sx={styles.title}>
                  Preview
                </Typography>
                {imageUse === "profileImage" ? (
                  <CardMedia
                    sx={styles.profileImageMedia}
                    image={images[0]["data_url"]}
                  />
                ) : (
                  <CardMedia sx={styles.media} image={images[0]["data_url"]} />
                )}
              </>
            )}
            {imageUrl && (
              <>
                <Typography variant="h6" display="block" sx={styles.title}>
                  Uploaded Image
                </Typography>
                {imageUse === "profileImage" ? (
                  <CardMedia sx={styles.profileImageMedia} image={imageUrl} />
                ) : (
                  <CardMedia sx={styles.media} image={imageUrl} />
                )}
              </>
            )}
          </Box>
          {!imageUrl && (
            <CardActions sx={styles.cardActions}>
              {imageList.length === 0 && (
                <Button
                  fullWidth
                  onClick={onImageUpload}
                  startIcon={<PhotoCamera />}
                >
                  Upload Image
                </Button>
              )}
              {imageList.length !== 0 && (
                <>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={onImageRemoveAll}
                  >
                    Delete
                  </Button>
                  <Button variant="outlined" color="success" onClick={onUpload}>
                    Upload
                  </Button>
                </>
              )}
            </CardActions>
          )}
        </Card>
      )}
    </ImageUploading>
  );
};
