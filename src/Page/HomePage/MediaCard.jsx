// src/MediaCard.jsx
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = ({ workspace, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={workspace.image}
          title={workspace.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {workspace.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rating: {workspace.rating}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {workspace.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Facilities: {workspace.facilities}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Check Out</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default MediaCard;
