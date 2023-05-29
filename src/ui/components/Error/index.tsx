interface ErrorProps {
  errorMsg: string;
}

const Error: React.FC<ErrorProps> = ({ errorMsg }) => {
  return (
    <div style={{ color: "red" }}>
      Seems like something wrong with the request. {errorMsg}{" "}
    </div>
  );
};

export default Error;
