import { ConfigProvider, Layout } from "antd";
import "./App.css";
import SelectionContainer from "./content/SelectionContainer";
import TeamStats from "./content/TeamStats";
import Footer from "./footer/Footer";
import Header from "./header/Header";
const { Content } = Layout;

const App = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: "#40E0D0",
      },
    }}
  >
    <Layout>
      <Layout>
        <Header></Header>
        <Content>
          <SelectionContainer></SelectionContainer>
          <TeamStats></TeamStats>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </ConfigProvider>
);

export default App;
