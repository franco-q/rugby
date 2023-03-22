import { useState } from "react";
import colors from "tailwindcss/colors";

const NewEventModal = ({
  isOpen,
  onSave,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string) => void;
}) => {
  const [name, setName] = useState("");
  console.log(
    JSON.stringify(
      Object.entries(colors)
        .filter(([, val]) => val instanceof Object)
        .map(([key, val]) => Object.keys(val).map((k) => `bg-${key}-${k}`))
        .flat()
    )
  );

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
              <h3 className="font-bold text-lg">Crear Nuevo Evento</h3>
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
                <div className="my-4 grid grid-cols-4 gap-4">
                  {[
                    "bg-slate-100 hover:bg-slate-100 text-black",
                    "bg-slate-200 hover:bg-slate-200 text-black",
                    "bg-slate-300 hover:bg-slate-300 text-black",
                    "bg-slate-400 hover:bg-slate-400 text-black",
                    "bg-slate-500 hover:bg-slate-500 text-white",
                    "bg-slate-600 hover:bg-slate-600 text-white",
                    "bg-slate-700 hover:bg-slate-700 text-white",
                    "bg-slate-800 hover:bg-slate-800 text-white",
                    "bg-slate-900 hover:bg-slate-900 text-white",
                    "bg-gray-100 hover:bg-gray-100 text-black",
                    "bg-gray-200 hover:bg-gray-200 text-black",
                    "bg-gray-300 hover:bg-gray-300 text-black",
                    "bg-gray-400 hover:bg-gray-400 text-black",
                    "bg-gray-500 hover:bg-gray-500 text-white",
                    "bg-gray-600 hover:bg-gray-600 text-white",
                    "bg-gray-700 hover:bg-gray-700 text-white",
                    "bg-gray-800 hover:bg-gray-800 text-white",
                    "bg-gray-900 hover:bg-gray-900 text-white",
                    "bg-zinc-100 hover:bg-zinc-100 text-black",
                    "bg-zinc-200 hover:bg-zinc-200 text-black",
                    "bg-zinc-300 hover:bg-zinc-300 text-black",
                    "bg-zinc-400 hover:bg-zinc-400 text-black",
                    "bg-zinc-500 hover:bg-zinc-500 text-white",
                    "bg-zinc-600 hover:bg-zinc-600 text-white",
                    "bg-zinc-700 hover:bg-zinc-700 text-white",
                    "bg-zinc-800 hover:bg-zinc-800 text-white",
                    "bg-zinc-900 hover:bg-zinc-900 text-white",
                    "bg-stone-100 hover:bg-stone-100 text-black",
                    "bg-stone-200 hover:bg-stone-200 text-black",
                    "bg-stone-300 hover:bg-stone-300 text-black",
                    "bg-stone-400 hover:bg-stone-400 text-black",
                    "bg-stone-500 hover:bg-stone-500 text-white",
                    "bg-stone-600 hover:bg-stone-600 text-white",
                    "bg-stone-700 hover:bg-stone-700 text-white",
                    "bg-stone-800 hover:bg-stone-800 text-white",
                    "bg-stone-900 hover:bg-stone-900 text-white",
                    "bg-red-100 hover:bg-red-100 text-black",
                    "bg-red-200 hover:bg-red-200 text-black",
                    "bg-red-300 hover:bg-red-300 text-black",
                    "bg-red-400 hover:bg-red-400 text-black",
                    "bg-red-500 hover:bg-red-500 text-white",
                    "bg-red-600 hover:bg-red-600 text-white",
                    "bg-red-700 hover:bg-red-700 text-white",
                    "bg-red-800 hover:bg-red-800 text-white",
                    "bg-red-900 hover:bg-red-900 text-white",
                    "bg-orange-100 hover:bg-orange-100 text-black",
                    "bg-orange-200 hover:bg-orange-200 text-black",
                    "bg-orange-300 hover:bg-orange-300 text-black",
                    "bg-orange-400 hover:bg-orange-400 text-black",
                    "bg-orange-500 hover:bg-orange-500 text-white",
                    "bg-orange-600 hover:bg-orange-600 text-white",
                    "bg-orange-700 hover:bg-orange-700 text-white",
                    "bg-orange-800 hover:bg-orange-800 text-white",
                    "bg-orange-900 hover:bg-orange-900 text-white",
                    "bg-amber-100 hover:bg-amber-100 text-black",
                    "bg-amber-200 hover:bg-amber-200 text-black",
                    "bg-amber-300 hover:bg-amber-300 text-black",
                    "bg-amber-400 hover:bg-amber-400 text-black",
                    "bg-amber-500 hover:bg-amber-500 text-white",
                    "bg-amber-600 hover:bg-amber-600 text-white",
                    "bg-amber-700 hover:bg-amber-700 text-white",
                    "bg-amber-800 hover:bg-amber-800 text-white",
                    "bg-amber-900 hover:bg-amber-900 text-white",
                    "bg-yellow-100 hover:bg-yellow-100 text-black",
                    "bg-yellow-200 hover:bg-yellow-200 text-black",
                    "bg-yellow-300 hover:bg-yellow-300 text-black",
                    "bg-yellow-400 hover:bg-yellow-400 text-black",
                    "bg-yellow-500 hover:bg-yellow-500 text-white",
                    "bg-yellow-600 hover:bg-yellow-600 text-white",
                    "bg-yellow-700 hover:bg-yellow-700 text-white",
                    "bg-yellow-800 hover:bg-yellow-800 text-white",
                    "bg-yellow-900 hover:bg-yellow-900 text-white",
                    "bg-lime-100 hover:bg-lime-100 text-black",
                    "bg-lime-200 hover:bg-lime-200 text-black",
                    "bg-lime-300 hover:bg-lime-300 text-black",
                    "bg-lime-400 hover:bg-lime-400 text-black",
                    "bg-lime-500 hover:bg-lime-500 text-white",
                    "bg-lime-600 hover:bg-lime-600 text-white",
                    "bg-lime-700 hover:bg-lime-700 text-white",
                    "bg-lime-800 hover:bg-lime-800 text-white",
                    "bg-lime-900 hover:bg-lime-900 text-white",
                    "bg-green-100 hover:bg-green-100 text-black",
                    "bg-green-200 hover:bg-green-200 text-black",
                    "bg-green-300 hover:bg-green-300 text-black",
                    "bg-green-400 hover:bg-green-400 text-black",
                    "bg-green-500 hover:bg-green-500 text-white",
                    "bg-green-600 hover:bg-green-600 text-white",
                    "bg-green-700 hover:bg-green-700 text-white",
                    "bg-green-800 hover:bg-green-800 text-white",
                    "bg-green-900 hover:bg-green-900 text-white",
                    "bg-emerald-100 hover:bg-emerald-100 text-black",
                    "bg-emerald-200 hover:bg-emerald-200 text-black",
                    "bg-emerald-300 hover:bg-emerald-300 text-black",
                    "bg-emerald-400 hover:bg-emerald-400 text-black",
                    "bg-emerald-500 hover:bg-emerald-500 text-white",
                    "bg-emerald-600 hover:bg-emerald-600 text-white",
                    "bg-emerald-700 hover:bg-emerald-700 text-white",
                    "bg-emerald-800 hover:bg-emerald-800 text-white",
                    "bg-emerald-900 hover:bg-emerald-900 text-white",
                    "bg-teal-100 hover:bg-teal-100 text-black",
                    "bg-teal-200 hover:bg-teal-200 text-black",
                    "bg-teal-300 hover:bg-teal-300 text-black",
                    "bg-teal-400 hover:bg-teal-400 text-black",
                    "bg-teal-500 hover:bg-teal-500 text-white",
                    "bg-teal-600 hover:bg-teal-600 text-white",
                    "bg-teal-700 hover:bg-teal-700 text-white",
                    "bg-teal-800 hover:bg-teal-800 text-white",
                    "bg-teal-900 hover:bg-teal-900 text-white",
                    "bg-cyan-100 hover:bg-cyan-100 text-black",
                    "bg-cyan-200 hover:bg-cyan-200 text-black",
                    "bg-cyan-300 hover:bg-cyan-300 text-black",
                    "bg-cyan-400 hover:bg-cyan-400 text-black",
                    "bg-cyan-500 hover:bg-cyan-500 text-white",
                    "bg-cyan-600 hover:bg-cyan-600 text-white",
                    "bg-cyan-700 hover:bg-cyan-700 text-white",
                    "bg-cyan-800 hover:bg-cyan-800 text-white",
                    "bg-cyan-900 hover:bg-cyan-900 text-white",
                    "bg-sky-100 hover:bg-sky-100 text-black",
                    "bg-sky-200 hover:bg-sky-200 text-black",
                    "bg-sky-300 hover:bg-sky-300 text-black",
                    "bg-sky-400 hover:bg-sky-400 text-black",
                    "bg-sky-500 hover:bg-sky-500 text-white",
                    "bg-sky-600 hover:bg-sky-600 text-white",
                    "bg-sky-700 hover:bg-sky-700 text-white",
                    "bg-sky-800 hover:bg-sky-800 text-white",
                    "bg-sky-900 hover:bg-sky-900 text-white",
                    "bg-blue-100 hover:bg-blue-100 text-black",
                    "bg-blue-200 hover:bg-blue-200 text-black",
                    "bg-blue-300 hover:bg-blue-300 text-black",
                    "bg-blue-400 hover:bg-blue-400 text-black",
                    "bg-blue-500 hover:bg-blue-500 text-white",
                    "bg-blue-600 hover:bg-blue-600 text-white",
                    "bg-blue-700 hover:bg-blue-700 text-white",
                    "bg-blue-800 hover:bg-blue-800 text-white",
                    "bg-blue-900 hover:bg-blue-900 text-white",
                    "bg-indigo-100 hover:bg-indigo-100 text-black",
                    "bg-indigo-200 hover:bg-indigo-200 text-black",
                    "bg-indigo-300 hover:bg-indigo-300 text-black",
                    "bg-indigo-400 hover:bg-indigo-400 text-black",
                    "bg-indigo-500 hover:bg-indigo-500 text-white",
                    "bg-indigo-600 hover:bg-indigo-600 text-white",
                    "bg-indigo-700 hover:bg-indigo-700 text-white",
                    "bg-indigo-800 hover:bg-indigo-800 text-white",
                    "bg-indigo-900 hover:bg-indigo-900 text-white",
                    "bg-violet-100 hover:bg-violet-100 text-black",
                    "bg-violet-200 hover:bg-violet-200 text-black",
                    "bg-violet-300 hover:bg-violet-300 text-black",
                    "bg-violet-400 hover:bg-violet-400 text-black",
                    "bg-violet-500 hover:bg-violet-500 text-white",
                    "bg-violet-600 hover:bg-violet-600 text-white",
                    "bg-violet-700 hover:bg-violet-700 text-white",
                    "bg-violet-800 hover:bg-violet-800 text-white",
                    "bg-violet-900 hover:bg-violet-900 text-white",
                    "bg-purple-100 hover:bg-purple-100 text-black",
                    "bg-purple-200 hover:bg-purple-200 text-black",
                    "bg-purple-300 hover:bg-purple-300 text-black",
                    "bg-purple-400 hover:bg-purple-400 text-black",
                    "bg-purple-500 hover:bg-purple-500 text-white",
                    "bg-purple-600 hover:bg-purple-600 text-white",
                    "bg-purple-700 hover:bg-purple-700 text-white",
                    "bg-purple-800 hover:bg-purple-800 text-white",
                    "bg-purple-900 hover:bg-purple-900 text-white",
                    "bg-fuchsia-100 hover:bg-fuchsia-100 text-black",
                    "bg-fuchsia-200 hover:bg-fuchsia-200 text-black",
                    "bg-fuchsia-300 hover:bg-fuchsia-300 text-black",
                    "bg-fuchsia-400 hover:bg-fuchsia-400 text-black",
                    "bg-fuchsia-500 hover:bg-fuchsia-500 text-white",
                    "bg-fuchsia-600 hover:bg-fuchsia-600 text-white",
                    "bg-fuchsia-700 hover:bg-fuchsia-700 text-white",
                    "bg-fuchsia-800 hover:bg-fuchsia-800 text-white",
                    "bg-fuchsia-900 hover:bg-fuchsia-900 text-white",
                    "bg-pink-100 hover:bg-pink-100 text-black",
                    "bg-pink-200 hover:bg-pink-200 text-black",
                    "bg-pink-300 hover:bg-pink-300 text-black",
                    "bg-pink-400 hover:bg-pink-400 text-black",
                    "bg-pink-500 hover:bg-pink-500 text-white",
                    "bg-pink-600 hover:bg-pink-600 text-white",
                    "bg-pink-700 hover:bg-pink-700 text-white",
                    "bg-pink-800 hover:bg-pink-800 text-white",
                    "bg-pink-900 hover:bg-pink-900 text-white",
                    "bg-rose-100 hover:bg-rose-100 text-black",
                    "bg-rose-200 hover:bg-rose-200 text-black",
                    "bg-rose-300 hover:bg-rose-300 text-black",
                    "bg-rose-400 hover:bg-rose-400 text-black",
                    "bg-rose-500 hover:bg-rose-500 text-white",
                    "bg-rose-600 hover:bg-rose-600 text-white",
                    "bg-rose-700 hover:bg-rose-700 text-white",
                    "bg-rose-800 hover:bg-rose-800 text-white",
                    "bg-rose-900 hover:bg-rose-900 text-white",
                  ].map((color) => (
                    <button className={`btn m-1 border-0 ${color}`} key={color}>
                      {name}
                    </button>
                  ))}
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

export default NewEventModal;
