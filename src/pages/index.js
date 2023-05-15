import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('heroBanner', styles.heroBanner)} style={{flex:1, backgroundSize:'100%'}}> 
      <div className="container">
        <div className='heroTextContainer'>
          <div className='avatarArea'>
          <img src={require("/img/me.png").default}alt="Day Quiroga" style={{ width: "100px", borderRadius: "50%" }}/>
          </div>
          <div className='heroTextArea'>
          <p className="heroTextTitle">{siteConfig.title}</p>
          <p className="heroTextSubTitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--md"
              to="/docs/intro">
              Ir a la documentación✨
            </Link>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home | ${siteConfig.title}`}
      description="Data base Quiroga">
      <HomepageHeader/>
    </Layout>
  );
}
