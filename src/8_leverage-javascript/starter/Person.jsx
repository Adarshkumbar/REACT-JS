import avatar from "../../../assets/avatar.svg";
const Person = ({ name, nickName = "Weeb", images }) => {
  // before optional chaining

  // const img =
  //   (images && images[0] && images[0].small && images[0].small.url) || avatar;
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: "100px" }} />
      <h4>{name} </h4>
      <p>Nickname : {nickName}</p>
      <hr></hr>
    </div>
  );
};
export default Person;
 