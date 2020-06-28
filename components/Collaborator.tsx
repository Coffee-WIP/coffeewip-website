function Collaborator(props: { collaborator: any }) {
  return (
    <div>
      <p
        style={{
          marginBottom: "0px",
          fontWeight: "bold",
        }}
      >
        {props?.collaborator?.name}
      </p>
      {props?.collaborator?.tags.map((tag: string) => {
        return (
          <small
            style={{
              marginRight: "8px",
            }}
          >
            #{tag}
          </small>
        );
      })}
    </div>
  );
}

export default Collaborator;
