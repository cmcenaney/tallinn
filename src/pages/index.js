import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';
import MyResponsiveBar from 'components/chart';
import MyResponsiveBubble from 'components/bubble';
import { Link } from 'gatsby';

const Index = ({ data }) => (
  <Layout>
    <Box>
      <Title as="h2" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal>
    </Box>
    <div className="vizBox" style={{ height: '100%' }}>
      <MyResponsiveBubble />
    </div>
    <div className="container">
      <h2 className="subhed">Latest from the Hub</h2>
    </div>
    <Gallery items={data.homeJson.gallery} />
    <div className="container">
      <div className="events">
        <h2 className="subhed">Upcoming Events</h2>
        <div className="date">30th June 2019</div>
        <h3>XR Hackney Weekly Meeting</h3>
        <div className="date">30th June 2019</div>
        <h3>XR Hackney Weekly Meeting</h3>
        <div className="date">30th June 2019</div>
        <h3>XR Hackney Weekly Meeting</h3>
        <div className="date">30th June 2019</div>
        <h3>XR Hackney Weekly Meeting</h3>
        <Link>Find Out More</Link>
      </div>
    </div>
    
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
