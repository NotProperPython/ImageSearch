const Error = (props) => {
  return (
    <div class="ui negative message">
      <div class="header">Error!!!</div>
      <p>{props.message}</p>
    </div>
  );
};

export default Error;
