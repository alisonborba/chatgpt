import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Card from "@mui/material/Card";

import { useTranslation } from "react-i18next";
import { chars } from "../utils/characters";
import { Person } from "../utils/index";

interface CharacterSelectProps {
  select: (arg: Person) => void;
}

export default function CharacterSelect({ select }: CharacterSelectProps) {
  const { t } = useTranslation();

  return (
    <Grid sx={{ m: 2 }}>
      <Grid textAlign={"center"} sx={{ mb: 2 }}>
        <Typography variant="h5" color={"white"}>
          {t("title")}
        </Typography>
        <Typography variant="h6" color={"white"}>
          {t("subtitle")}
        </Typography>
      </Grid>
      <Grid container spacing={2} data-testid="character-grid">
        {chars.map((c, i) => {
          return (
            <Grid key={i} item xs={12} sm={4} md={3} lg={3}>
              <Card>
                <CardActionArea onClick={() => select(c)}>
                  <CardContent
                    className="card"
                    sx={{
                      backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0),rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1)), url(${c.img})`,
                    }}
                  >
                    <Typography component="div" sx={{ pb: "5px" }}>
                      {t(c.nickname)}
                    </Typography>
                    <Typography variant="caption">
                      {t(`${c.nickname}Desc`)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Grid container justifyContent="center" sx={{ color: "white", mt: 2 }}>
        {t("warningMessage")}
      </Grid>
    </Grid>
  );
}
