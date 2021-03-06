const React = require('react');
const { H3, H5, Div, P, Row, Col } = require('fluid-react');

const users = require('./users.json');

const Showcase = props => {
  if (users.length === 0) { return null; }

  const { site, lang } = props;
  const { theme } = site;
  const userComps = users
    .filter(user => !props.pinned || user.pinned)
    .map((user, i) => {
      let img_src = user.img;
      if (!img_src.startsWith('http')) { img_src = site.url(img_src); }
      return (
        <Col xs={6} sm={4} md={3} lg={2} xl={1} key={i}>
          <a style={theme.showcaseBox} href={user.link}>
            <img style={theme.showcaseImage} src={img_src} title={user.caption} />
          </a>
        </Col>
      );
    });

  return (
    <Div style={theme.showcase}>
      <H3 style={theme.h3}>
        {site.i18n.translate('Who\'s Using This?', lang)}</H3>
      <H5 style={theme.h5}>
        {site.i18n.translate('This project is used by all these people', lang)}
      </H5>
      <Row>
        {userComps}
      </Row>
    </Div>
  );
};

module.exports = Showcase;
