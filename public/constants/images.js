import douglas from '../assets/crew/image-douglas-hurley.png';
import mark from '../assets/crew/image-mark-shuttleworth.png';
import victor from '../assets/crew/image-victor-glover.png';
import anousheh from '../assets/crew/image-anousheh-ansari.png';

import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import titan from '../assets/destination/image-titan.png';
import europa from '../assets/destination/image-europa.png';

import launchVehicleLandscape from '../assets/technology/image-launch-vehicle-landscape.jpg';
import spaceportLandscape from '../assets/technology/image-spaceport-landscape.jpg';
import spaceCapsuleLandscape from '../assets/technology/image-space-capsule-landscape.jpg';
import launchVehiclePortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import spaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';

import logo from '../assets/shared/logo.svg';

const images = {
   crew: [
      douglas,
      mark,
      victor,
      anousheh,
   ],
   planets: [
      moon,
      mars,
      europa,
      titan,
   ],
   tech: {
      landscape: [
         launchVehicleLandscape,
         spaceportLandscape,
         spaceCapsuleLandscape,
      ],
      portrait: [
         launchVehiclePortrait,
         spaceportPortrait,
         spaceCapsulePortrait,
      ]
   },
   logo,
}

export default images