// REACT
import React from "react";

// STYLES
import styles from "./Profile.module.css";

// IMPORT IMAGES
import Background from './assets/background.png';
import Perfil from './assets/perfil.png';
import Edit from './assets/edit.svg';

const Profile: React.FC = () => {
  
  const [g, setG] = React.useState(true);

  ////////////
  // RENDER //
  ////////////

  return (
    <section className={styles.Container}>
      { g ? (
        <div onClick={() => setG(!g)} className={styles.ProfileContainer}>
          <img src={Perfil} className={styles.Perfil} />
          <h3 className={styles.Name}>Penguin</h3>  
          <img src={Background} className={styles.Background} />
        </div>
        ) : (
        <div className={styles.Gray}>
          <div onClick={() => setG(!g)} className={styles.ProfileContainer}>
            <img src={Background} className={styles.BackgroundGray} />
            <h3 className={styles.NameGray}>Penguin</h3>
            <img src={Perfil} className={styles.PerfilGray} />
          </div>
          <button className={styles.Button} style={{marginTop: '110px', marginLeft: '85%'}}>
            <img src={Edit} />
          </button>
          <button className={styles.Button} style={{marginTop: '120px', marginLeft: '60%'}}>
            <img src={Edit} />
          </button>
          <button className={styles.Button} style={{marginTop: '75%', marginLeft: '72%'}}>
            <img src={Edit} />
          </button>
        </div>
      )}
    </section>
  );
};

export default Profile;