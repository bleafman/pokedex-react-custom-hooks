import T from "prop-types";

export default function Pokemon({ image }) {
  return (
    <div>
      <img
        className="object-contain mx-auto h-72"
        src={image}
        alt="pokemon image"
      />
    </div>
  );
}

Pokemon.propTypes = {
  image: T.string.isRequired,
};
