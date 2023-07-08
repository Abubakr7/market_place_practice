const OwnButton = (props) => {
  const { cls, title, cls1, getName } = props;
  if (title) {
    return (
      <button className={`${cls} ${cls1}`} onClick={getName}>
        {title} {title ? "!" : null}
      </button>
    );
  }
  return (
    <button className={`${cls} ${cls1}`} onClick={getName}>
      btn
    </button>
  );
};

export default OwnButton;
