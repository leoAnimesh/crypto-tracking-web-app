import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  HomePage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./styles/App.css";

const { Sider, Content, Footer, Header } = Layout;

const App = () => {
  return (
    <>
      <Navbar />
      <Layout>
        <Content
          style={{ padding: "0px", margin: " 20px 30px", minHeight: "100vh" }}
        >
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route
              exact
              path="/cryptocurrencies"
              element={<Cryptocurrencies />}
            />
            <Route path="/crypto/:coinId" element={<CryptoDetails />} />
            <Route path="/news" element={<News />} />
          </Routes>
        </Content>
      </Layout>
    </>
  );
};

export default App;
