import T from "prop-types";

export default function Pokemon({ image, isLoading }) {
  return (
    <div>
      <img
        className="object-contain mx-auto h-72 text-gray-500"
        src={isLoading ? "./pokeball.svg" : image}
        alt="pokemon image"
      />
    </div>
  );
}

Pokemon.propTypes = {
  image: T.string.isRequired,
  isLoading: T.bool.isRequired,
};
