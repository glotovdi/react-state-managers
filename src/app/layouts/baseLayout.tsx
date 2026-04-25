import { Content } from "../../widgets/content";
import { Header } from "../../widgets/header/header";

export const BaseLayout = ({ children, className = "" }) => {
  return (
    <div className={className}>
      <Header></Header>
      <Content> {children}</Content>
    </div>
  );
};
