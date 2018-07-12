import Helpers from './helpers';

/*=== 테스트용 (raw image asset) ===*/
//import assetEtcs from './assets/asset-etcs.test.json';
//import assetFinish from './assets/asset-finish.test.json';
//import assetGuide from './assets/asset-guide.test.json';
/*=== 배포용 (imported binary image assets) ===*/
import assetEtcs from './assets/asset-etcs.json';
import assetFinish from './assets/asset-finish.json';
import assetGuide from './assets/asset-guide.json';

const styles = {
  // App.js
  app: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100vh',
    fontFamily: 'sans-serif',
    overflow: 'hidden',
  },
  logo: {
    display: 'inline-block',
    position: 'absolute',
    top: 12,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 40,
    height: 40,
    backgroundImage: Helpers.getAssetData(assetEtcs.logo),
    backgroundSize: '30px',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  bottom: {
    display: 'inline-block',
    position: 'absolute',
    zIndex: -1,
    bottom: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    width: '258px',
    height: '75px',
    backgroundImage: Helpers.getAssetData(assetEtcs.bottom),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },

  // AppGuide.js
  guideWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    //width: '100vh',
    //height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, .9)',
  },
  buttonLeft: {
    position: 'absolute',
    top: '50%',
    left: '5vh',
    transform: 'translateY(-50%)',
    width: '19vh',
    height: '6vh',
    backgroundImage: Helpers.getAssetData(assetGuide.buttonLeft),
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  buttonRight: {
    position: 'absolute',
    top: '50%',
    right: '5vh',
    transform: 'translateY(-50%)',
    width: '15.2vh',
    height: '6vh',
    backgroundImage: Helpers.getAssetData(assetGuide.buttonRight),
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  buttonTop: {
    position: 'absolute',
    top: '10vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '21vh',
    height: '12vh',
    backgroundImage: Helpers.getAssetData(assetGuide.buttonTop),
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  message: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '31vh',
    height: '9vh',
    backgroundImage: Helpers.getAssetData(assetGuide.message),
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },

  // AppPlay.js
  playWrapper: {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    height: '100vh',
  },
  content: {
    position: 'relative',
    display: 'inline-block',
    width: '95%',
    height: '100%',
    borderRadius: 15,
    backgroundSize: 'cover',
    backgroundPositionY: '0',
    backgroundRepeat: 'no-repeat',
  },
  cardStatus: {
    position: 'absolute',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
  cardStatusNope: {
    top: '3vh',
    right: '4vh',
    width: '21vh',
    height: '16vh',
    backgroundImage: Helpers.getAssetData(assetEtcs.nope),
  },
  cardStatusLike: {
    top: '3vh',
    left: '4vh',
    width: '21vh',
    height: '16vh',
    backgroundImage: Helpers.getAssetData(assetEtcs.like),
  },
  cardStatusSuperLike: {
    bottom: '10vh',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '26vh',
    height: '18vh',
    backgroundImage: Helpers.getAssetData(assetEtcs.superLike),
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  // AppFinish.js
  finishWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .9)',
  },
  linkButton: {
    position: 'absolute',
    top: '50%',
    width: '40vh',
    height: '8vh',
    left: '50%',
    backgroundColor: 'transparent',
    border: 0,
    transform: 'translate(-50%, -50%)',
    backgroundImage: Helpers.getAssetData(assetFinish.button),
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    backgroundRepeat: 'no-repeat',
    fontSize: 0,
  },
};

export default styles;
