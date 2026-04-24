import { Content } from "../../widgets/content";
import { Header } from "../../widgets/header/header";

export const BaseLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Content> {children}</Content>
    </>
  );
};
