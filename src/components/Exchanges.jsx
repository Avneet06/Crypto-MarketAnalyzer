// import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Avatar } from 'antd';
import HTMLReactParser from 'html-react-parser';

import { useGetExchangesQuery } from '../services/cryptoApi';
import Loader from './Loader';

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data, isFetching } = useGetExchangesQuery();
  const exchangesList = data?.data?.exchanges;

  if (isFetching) return <Loader />;

  return (
    <>
      <Row>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Number of Markets</Col>
        <Col span={6}>Number of Coins</Col>
      </Row>
      {exchangesList?.map((exchange) => (
        <Row key={exchange.id}>
          <Col span={6}>
            <Avatar src={exchange.iconUrl} />
            <Text>{exchange.name}</Text>
          </Col>
          <Col span={6}>{millify(exchange.volume)}</Col>
          <Col span={6}>{millify(exchange.numberOfMarkets)}</Col>
          <Col span={6}>{millify(exchange.numberOfCoins)}</Col>
        </Row>
      ))}
    </>
  );
};

export default Exchanges;
