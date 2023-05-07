import { useState } from "react";

const NewMatchModal = ({
  onSave,
  onClose,
}: {
  onClose: () => void;
  onSave: (match: { name: string; date: string }) => void;
}) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const onClickSave = () => {
    onSave({ name, date });
    setName("");
    setDate("");
  };

  const onClickClose = () => {
    onClose();
    setName("");
    setDate("");
  };

  return (
    <>
      <input type="checkbox" className="modal-toggle" checked readOnly />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Crear Nuevo Partido</h3>
          <div className="grid gap-4 grid-cols-2">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Titulo</span>
              </label>
              <input
                type="text"
                placeholder="Titulo"
                className="input input-bordered w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Fecha</span>
              </label>
              <input
                type="date"
                placeholder="Fecha"
                className="input input-bordered w-full"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-action">
            <button className="btn btn-ghost" onClick={onClickClose}>
              Cerrar
            </button>
            <button className="btn" onClick={onClickSave}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewMatchModal;
