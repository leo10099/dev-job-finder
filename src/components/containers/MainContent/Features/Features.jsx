import React from 'react';
import HtmlParser from 'react-html-parser';
import { Card, Icon } from 'antd';
import featuresListContent from './FeaturesText';
import '../About/About.css';

const Features = () => {
  return (
    <section id="About__Features">
      {featuresListContent.map(feature => {
        return (
          <Card className="About__Features-Card" key={feature.title}>
            <div className="About__Features-CardContent">
              <Icon type={feature.icon} className="About__Features-CardIcon" />
              <h3 className="About__Features-CardTitle">{feature.title.toUpperCase()}</h3>
              <p className="About__Features-CardText">{HtmlParser(feature.description)}</p>
            </div>
          </Card>
        );
      })}
    </section>
  );
};

export default Features;
