import { Helmet } from "react-helmet";

type HeadProps = {
  title?: string;
  description?: string;
};

export const Head = ({ title, description = "" }: HeadProps) => {
  return (
    <Helmet title={title} defaultTitle="Odin-Book">
      <meta name="description" content={description} />
    </Helmet>
  );
};
