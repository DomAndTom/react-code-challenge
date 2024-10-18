import "./styles.scss";

export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <div className="wrapper-container">{children}</div>
    </div>
  );
}
