function CallRandomCharacterQuotationButton({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      className="block m-auto mt-10 p-2  text-black bg-[#faebd7] rounded-lg hover:scale-105"
    >
      {name.charAt(0) === "L" &&
      name.charAt(1) === "e" &&
      name.charAt(2) === "s"
        ? `Voir une autre citation des ${name.slice(3)}`
        : name.charAt(0) === "L" &&
          name.charAt(1) === "e" &&
          name.charAt(2) === " "
        ? `Voir une autre citation du ${name.slice(2)}`
        : name.charAt(0) === "A" ||
          name.charAt(0) === "E" ||
          name.charAt(0) === "I" ||
          name.charAt(0) === "O" ||
          name.charAt(0) === "U" ||
          name.charAt(0) === "Y"
        ? `Voir une autre citation d'${name}`
        : `Voir une autre citation de ${name}`}
    </button>
  );
}

export default CallRandomCharacterQuotationButton;
