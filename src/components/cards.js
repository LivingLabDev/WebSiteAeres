import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
// import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "80px",
    marginLeft: "10px",
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function ProjectCards() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item spacing={4}>
            <Card className={classes.root}>
              <CardHeader
                title="Rotterdam de boer op!"
                subheader="19 FEBRUARI 2021 | NATASCHA HOKKE"
              />
              <CardMedia className={classes.media} image="./boeren.png" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Spectaculair meer biodiversiteit op het platteland, eerlijk
                  geproduceerd regionaal eten en een gezonde bedrijfsvoering
                  voor boeren. In Rotterdam komt deze droom tot leven dankzij
                  een speciale gift van 5 miljoen euro van de Nationale Postcode
                  Loterij. Natuurmonumenten heeft samen met boeren,
                  ketenpartijen, (online) supermarkten en ondernemers een unieke
                  coalitie gesmeed. Negentien partijen werken hier samen om deze
                  ambitieuze droom waar te maken.
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Onze droom De stad en het open, weidse platteland zijn
                    onlosmakelijk verbonden. Rotterdammers, boeren en
                    boswachters hebben elkaar gevonden. Lokale, natuurinclusieve
                    producten liggen in de winkelschappen. Het landschap rondom
                    de stad bulkt van de bloemen, wilde bijen, vlinders en
                    vogels. De boer krijgt een eerlijke prijs.
                  </Typography>
                  <Typography paragraph>
                    Herstel van de natuur Ons winkelmandje is de meest bepalende
                    factor voor de kwaliteit van landschap en natuur in
                    Nederland. Hoe komt het dat we die verbinding met ons
                    voedsel zo zijn kwijtgeraakt? De biodiversiteit heeft flinke
                    klappen gehad. De maatschappelijke druk op de landbouw is
                    immens en tegelijkertijd mist de boer de waardering vanuit
                    diezelfde maatschappij.
                  </Typography>
                  <Typography paragraph>
                    Nationale Postcode Loterij: bedankt! Dankzij de deelnemers
                    van de Nationale Postcode Loterij zijn de 19 droompartners
                    een stap dichter bij het realiseren van spectaculair meer
                    biodiversiteit op het platteland rondom Rotterdam. We zijn
                    enorm blij dat de Nationale Postcode Loterij met deze
                    genereuze Droomfondsbijdrage dit initiatief zo’n impuls
                    geeft.
                  </Typography>
                  <Typography paragraph>
                    De Droompartners Het Droomfondsproject ‘Rotterdam de boer
                    op!’ bestaat uit een unieke, onorthodoxe en veelzijdige
                    coalitie van in totaal 19 Droompartners, allemaal
                    daadkrachtige doeners!
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
          <Grid item spacing={4}>
            <Card className={classes.root}>
              <CardHeader
                title="Boer Jeroen van der Kooij start met verzuivelen op Hoeve Rust-hoff"
                subheader="06 JANUARI 2021 | NATASCHA HOKKE"
              />
              <CardMedia className={classes.media} image="./kooij.png" />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  Boer Jeroen en Gusta van der Kooij hebben een biologisch
                  veebedrijf in Maasland met blaarkopkoeien. Een langgekoesterde
                  wens was om op de boerderij op ambachtelijke wijze, zonder
                  bewerkingen van de fabriek, de melk van de koeien te
                  verzuivelen tot biologische melk en yoghurt. Die wens is in
                  vervulling gegaan, de bereidingsruimte is klaar en in gebruik
                  door boer Jeroen zelf!
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>
                    Gezond dier = gezond product De dieren op de boerderij
                    krijgen de beste zorg; er wordt niet het uiterste gevraagd
                    van de dieren, ze eten gezond en ziekte is zeldzaam. “Een
                    gezond dier en een gezond product hangen met elkaar samen”,
                    vertelt boer Jeroen. Volgens hem is het belangrijk dat je
                    het verhaal overbrengt aan de consument. Blije, gezonde
                    dieren leveren topkwaliteit melk, vlees en leer. En nu is
                    hij dus zelf begonnen met het verzuivelen van de melk. “Dat
                    had wel wat voeten in de aarde”, vertelt Jeroen. “Er zit
                    strenge regelomgeving omheen, zeker als je zo’n hygiënische
                    ruimte op de boerderij wilt zetten. Maar het is gelukt, en
                    ik ben heel blij dat ik het verzuivelen nu op ambachtelijke
                    wijze zelf kan doen!".
                  </Typography>
                  <Typography paragraph>
                    Dagverse bio-producten In de gloednieuwe bereidingsruimte
                    wordt allerlei dagverse biologische zuivelproducten gemaakt.
                    De pasteuriseerketel doodt de bacteriën die in de melk
                    zitten. Dit betekent dat de melk op een zeer hoge
                    temperatuur van 85 graden verwarmd wordt en daarna weer
                    gekoeld moet worden naar 30/35 graden.
                  </Typography>
                  <Typography paragraph>
                    Natuur niet tegenwerken, maar omarmen Jeroen en Gusta willen
                    de natuur niet tegenwerken, maar de natuurlijke processen
                    juist omarmen. Boer Jeroen pacht de Aalkeetbuitenpolder van
                    Natuurmonumenten en beheert deze polder met zijn
                    blaarkopkoeien. In het land vinden veel zeldzame weidevogels
                    zoals grutto en tureluur een plekje. De boswachters van
                    Natuurmonumenten en boer Jeroen werken veel samen. Natuur is
                    de basis in het werk van Jeroen en Gusta. Zoals boer Jeroen
                    zelf zegt: “Onze aanpak is niet altijd de makkelijkste, maar
                    het levert wel het beste: voldoening van ons werk en mooie
                    biologische producten, melk en rundvlees.”
                  </Typography>
                  <Typography paragraph>
                    Koop Dwarrs op de boerderij Onder de merknaam Dwarrs zetten
                    Jeroen en Gusta de zelfgemaakte zuivel op de markt. De
                    producten zijn lokaal, met zorg en liefde voor koe, natuur
                    en mens gemaakt. Gusta: “we hebben inmiddels een webshop,
                    waarop klanten hun producten kunnen aanklikken. En dan
                    hoeven ze het alleen nog maar af te halen.” De winkel van
                    Jeroen en Gusta is open op vrijdagmiddag tussen 16.00 en
                    17.00 uur en zaterdagochtend tussen 10.00 en 12.30 uur. Te
                    bereiken op Broekpolderweg 3 in Maasland. Kijk op de website
                    van Hoeve Rust-hoff."
                  </Typography>
                  <Typography paragraph>
                    Of haal de producten op in jouw wijk Sinds eind 2020 kun je
                    de producten van boer Jeroen van der Kooij ook bestellen via
                    Rechtstreex. Via de 50 afhaalpunten in Rotterdam, Den Haag,
                    Gouda en Dordrecht haal je biologische melk of zuivel uit de
                    regio. Een primeur voor Rechtstreex en Hoeve Rust-hoff! Maar
                    2,5% van de 1,6 miljoen melkkoeien in Nederland worden
                    biologisch gehouden. Geen van de biologische melkveehouders
                    in Zuid Holland had nog de stap naar verwerking op eigen erf
                    en afzet in de regio gemaakt, waardoor je biologische melk
                    alleen in de supermarkt kon kopen. Daar is nu verandering in
                    gekomen. Kijk op www.rechtstreex.nl.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
