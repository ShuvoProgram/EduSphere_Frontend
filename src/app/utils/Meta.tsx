interface IMeta {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta = ({ title, description, keywords }: IMeta) => {
  return (
    <>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </>
  );
};

export default Meta;
