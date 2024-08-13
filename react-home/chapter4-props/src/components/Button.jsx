function Button(props) {
  //console.log(props); //object {title: 'Red'} ...
  return (
    <div>
      <button style={{ backgroundColor: props.color }}>{props.title}</button>
      {props.children}
    </div >
  );
}
Button.defaultProps = {
  color: 'yellow',
}
export default Button;