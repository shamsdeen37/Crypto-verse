
import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 12 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);

    const filteredData = cryptosList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchTerm));

    setCryptos(filteredData);
  }, [cryptosList, searchTerm]);

  if (isFetching) return <Loader/>;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >

            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`} >
              <Card
                style={{background:'#001529',border:'none',color:'#d9d9d9'}}
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" alt='img' src={currency.iconUrl} />}
                hoverable
              >
                <p>Price: <span style={{color:'#dcfd82',marginLeft:'79px'}}>{millify(currency.price)}</span></p>
                <p>Market Cap: <span style={{color:'#f7fdb2',marginLeft:'37px'}}>{millify(currency.marketCap)}</span></p>
                <p>Daily Change: <span style={{color:'#b2eafd',marginLeft:'27px'}}>{currency.change}%</span></p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
