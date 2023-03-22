import { useState } from "react";

const NewMatchModal = ({
  isOpen,
  onSave,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}) => {
  const [name, setName] = useState("");

  const onClickSave = () => {
    onSave(name);
    setName("");
  };

  const onClickClose = () => {
    setName("");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <>
          <input type="checkbox" className="modal-toggle" checked readOnly />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Crear Nuevo Partido</h3>
              <div className="py-4">
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Titulo</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Titulo"
                    className="input input-bordered w-full max-w-xs"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
      )}
    </>
  );
};

export default NewMatchModal;
