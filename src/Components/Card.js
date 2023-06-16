import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import BackgroundDesktop from '../../src/bg-desktop.svg';
import BackgroundMobile from '../../src/bg-mobile.svg';
import Logo from '../../src/logo.svg';
import Illustration from '../../src/illustration-mockups.svg';

import classes from './Card.module.css';

const Card = () => {
  return (
    <div className={classes.card}>
      <img src={BackgroundDesktop} className={classes.bgDesktop} />
      <img src={BackgroundMobile} className={classes.bgMobile} />
      <img src={Logo} className={classes.logo} />
      <img src={Illustration} className={classes.illustration} />
      <h1>Build The Community Your Fans Will Love</h1>
      <p className={classes.description}>
        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with
        your users as you engage in genuine discussion.{' '}
      </p>
      <p className={classes.register}>Register</p>
      <FontAwesomeIcon icon={faFacebookF} className={classes.iconFacebook} />
      <FontAwesomeIcon icon={faTwitter} className={classes.iconTwitter} />
      <FontAwesomeIcon icon={faInstagram} className={classes.iconInstagram} />
    </div>
  );
};

export default Card;
