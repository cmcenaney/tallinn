import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';
import { Link } from 'gatsby';

const Item = ({ title, copy, image }) => (
  <figure>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <Link>More</Link>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
