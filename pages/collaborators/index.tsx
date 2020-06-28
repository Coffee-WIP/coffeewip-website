import Head from "next/head";
import Collaborator from "../../components/Collaborator";

export default function Collaborators() {
  const collaborators = [
    {
      name: "Colaborador 1",
      tags: ["Frontend", "Backend"],
    },
    {
      name: "Colaborador 2",
      tags: ["Backend", "UX"],
    },
    {
      name: "Colaborador 3",
      tags: ["PM", "SysAdmin"],
    },
  ];
  return (
    <div style={{ padding: "12px" }}>
      <h1>Collaborators - Ejemplo de Routing</h1>
      {collaborators.map((collaborator: any) => {
        return <Collaborator collaborator={collaborator}></Collaborator>;
      })}
    </div>
  );
}
