import millify from "millify";
import { useState } from "react";
import { Typography, Row, Col, Statistic, Card } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../Services/cryptoApi";
import { Cryptocurrencies, News } from "../components";
const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;
  if (isFetching) return "Loading...";
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col lg={8} sm={12} xs={24} className="stats-card">
          <Card title="Total Cryptocurrencies" hoverable className="stats-card">
            <Typography.Title level={3}>
              {millify(globalStats.total)}
            </Typography.Title>
          </Card>
        </Col>
        <Col lg={8} sm={12} xs={24}>
          <Card title="Total Exchanges" hoverable>
            <Typography.Title level={3}>
              {millify(globalStats.totalExchanges)}
            </Typography.Title>
          </Card>
        </Col>
        <Col lg={8} sm={12} xs={24}>
          <Card title="Total Market Cap" hoverable>
            <Typography.Title level={3}>
              {`$${millify(globalStats.totalMarketCap)}`}
            </Typography.Title>
          </Card>
        </Col>
        <Col lg={8} sm={12} xs={24}>
          <Card title="Total 24h Volume" hoverable>
            <Typography.Title level={3}>
              {`$${millify(globalStats.total24hVolume)}`}
            </Typography.Title>
          </Card>
        </Col>
        <Col lg={8} sm={12} xs={24}>
          <Card title="Total Cryptocurrencies" hoverable>
            <Typography.Title level={3}>
              {millify(globalStats.total)}
            </Typography.Title>
          </Card>
        </Col>
        <Col lg={8} sm={12} xs={24}>
          <Card title="Total Markets" hoverable>
            <Typography.Title level={3}>
              {millify(globalStats.totalMarkets)}
            </Typography.Title>
          </Card>
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies
        </Title>
        <Title level={5} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={5} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
