import { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../Services/cryptoApi";
import { SearchOutlined } from "@ant-design/icons/lib/icons";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: crypstoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState(crypstoList?.data?.coins);
  const [SearchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = crypstoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(SearchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [crypstoList, SearchTerm]);

  if (isFetching) return "Loading ...";
  return (
    <>
      <div className="search-crypto">
        <Input
          placeholder="Search CryptoCurrencies"
          onChange={(e) => setSearchTerm(e.target.value)}
          prefix={<SearchOutlined style={{ marginRight: "5px" }} />}
        />
      </div>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                style={{
                  borderRadius: "5px",
                }}
                hoverable
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                title={`${currency.rank}. ${currency.name} `}
              >
                <p>Price : {millify(currency.price)}</p>
                <p>Market Cap : {millify(currency.marketCap)}</p>
                <p>Daily Change : {millify(currency.change)}</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
