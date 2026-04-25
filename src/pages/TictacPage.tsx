import { BaseLayout } from "../app/layouts/baseLayout";
import Tictac from "../widgets/tictac/tictac";

export const TictacPage = () => {
  return (
    <BaseLayout className="tictac-layout">
      <Tictac />
    </BaseLayout>
  );
};
