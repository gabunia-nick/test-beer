import React from 'react';
import { IBeerCardComponentProps } from './BeerCard.types';

import './BeerCard.style.scss';

const BeerCardComponent: React.FunctionComponent<IBeerCardComponentProps> = ({
  name,
  tagline,
  imageUrl,
}) => (
  <div className="BeerCard">
    <div className="BeerCard-ImageContainer">
      <img className="BeerCard-Image" alt={name} src={imageUrl} />
    </div>
    <div className="BeerCard-Content">
      <p className="BeerCard-Tagline">{tagline}</p>
      <p className="BeerdCard-Name">{name}</p>
    </div>
  </div>
);

export default BeerCardComponent;
