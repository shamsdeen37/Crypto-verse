import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import { Cryptocurrencies, News } from '../components';
import Loader from './Loader';

const { Title } = Typography;


const Homepage = () => {

  const { data: coinData, isFetching } = useGetCryptosQuery(10);
  console.log(coinData)
  const globalStats = coinData?.data?.stats;
  console.log(globalStats)
  if (isFetching) return <Loader/>;



  return (
    <>
      <Title level={2} className="heading" style={{color:'#02315d'}}>Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className='line'></div>
      <div className="home-heading-container">
        <Title level={2} className="home-title" style={{color:'#02315d'}}>Top 12 Cryptos In The World</Title>
        <Title level={3} className="show-more" ><Link to="/cryptocurrencies" style={{color:'black'}}>Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className='line'></div>

     <div className="home-heading-container">
        <Title level={2} className="home-title" style={{color:'#02315d'}}>Latest Crypto News</Title>
        <Title level={3}><Link to="/news" style={{color:'black'}}>Show more</Link></Title>
      </div>
      <News simplified />
      </>
  )
}

export default Homepage



























/*
import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
*/