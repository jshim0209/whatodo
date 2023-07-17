type PlaceProps = {
  name: string;
};

const PlaceDetails = ({ name }: PlaceProps) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default PlaceDetails;
