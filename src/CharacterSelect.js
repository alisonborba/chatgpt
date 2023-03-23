import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { chars } from './characters'
import { useTranslation } from 'react-i18next';

export default function CharacterSelect({select}) {
    const { t, i18n } = useTranslation();

    const pt = i18n.language === 'pt';

  return (
    <Grid sx={{m: 2}}>
        <Grid textAlign={'center'} sx={{mb: 2}}>
          <Typography variant='h5' color={'white'}>{t('title')}</Typography>
          <Typography variant='h6' color={'white'}>{t('subtitle')}</Typography>
        </Grid>
        <Grid container spacing={2}>
            {
                chars.map((c, i) => {
                return <Grid key={i} item xs={12} sm={4} md={3} lg={3}>
                    <Card>
                        <CardActionArea onClick={() => select(c)}>
                            <CardContent
                                    sx={{
                                        pt: '200px',
                                        position: 'relative',
                                        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0),rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 1)), url(${c.img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        textAlign: 'justify'
                                    }}
                                >
                                <Typography component="div" sx={{pb: '5px'}}>
                                    {pt ? c.name : c.name_en}
                                </Typography>
                                <Typography variant="body" color="text.secondary" sx={{color: 'black', m: '10px 0'}}>
                                    {pt ? c.description : c.description_en}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                })
            }
        </Grid>
        <Grid container justifyContent="center" sx={{color: 'white', mt: 2}}>{t('warningMessage')}</Grid>
    </Grid>
  );
}
