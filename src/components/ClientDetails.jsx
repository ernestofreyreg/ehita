import Link from "next/link";

export function ClienteDetails({ client }) {
  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-6">
          <div className="card p-2">
            <div className="card-body">
              <h3 className="p-2">Client Details:</h3>
              <label className="p-2">Name: </label>
              <input value={client.name}></input>
              <label className="p-2">Email: </label>
              <input value={client.email}></input>
              <label className="p-2">Phone: </label>
              <input value={client.phone}></input>
              <label className="p-2">WebSite: </label>
              <input value={client.website}></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
