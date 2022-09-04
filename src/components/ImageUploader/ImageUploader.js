import { useState } from "react";
import { uploadFile } from "react-s3";
import ImageUploading from "react-images-uploading";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
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
      let file = images[0].file;

      const s3Data = await uploadFile(file, config);

      if (s3Data?.location) {
        console.log(s3Data);
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
      minWidth: 320,
    },
    media: {
      height: 241,
    },
    title: {
      textAlign: "center",
      paddingTop: 8,
      paddingBottom: 8,
    },
    cardActions: { display: "flex", justifyContent: "space-evenly" },
  };

  return (
    <ImageUploading value={images} onChange={onChange} dataURLKey="data_url">
      {({ imageList, onImageUpload, onImageRemoveAll }) => (
        <Card sx={styles.root}>
          <Box>
            {images.length !== 0 && (
              <>
                <Typography variant="h6" display="block" sx={styles.title}>
                  Preview
                </Typography>
                <CardMedia sx={styles.media} image={images[0]["data_url"]} />
              </>
            )}
            {imageUrl && (
              <>
                <Typography variant="h6" display="block" sx={styles.title}>
                  Uploaded Image
                </Typography>
                <CardMedia sx={styles.media} image={imageUrl} />
                <CardContent>
                  <Typography variant="caption" display="block" gutterBottom>
                    {imageUrl}
                  </Typography>
                  <Box sx={{ textAlign: "center", mt: 2 }}>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={onImageRemove}
                    >
                      Remove
                    </Button>
                  </Box>
                </CardContent>
              </>
            )}
          </Box>
          <CardActions sx={styles.cardActions}>
            {imageList.length === 0 && (
              <Button
                color="primary"
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
        </Card>
      )}
    </ImageUploading>
  );
};
