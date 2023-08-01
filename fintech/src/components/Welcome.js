const Welcome = (props) => {
  console.log(props);
  return (
    <div>
      <p>
        안녕하세요 {props.userName} 님! {props.age} 세 입니다.
      </p>
    </div>
  );
};

export default Welcome;
