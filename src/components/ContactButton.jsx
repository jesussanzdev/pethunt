
import Modal from "./Modal";
import { useState } from "react";

export default function ContactButton() {
    const [open, setOpen] = useState(false);
    return (
        <main className="contactButton">
            <button className="btn btn-danger text-lg" onClick={() => setOpen(true)}>
                Contactar
            </button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-200">
                    <div className="mx-auto my-4 w-48">
                        <h3 className="text-lg font-black text-gray-800">Confirmar llamada</h3>
                        <p className="text-sm text-gray-500">
                            ¿Estás seguro de que deseas llamar al dueño/a?
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="btn btn-danger w-full text-sm">Llamar</button>
                        <button className="btn btn-light w-full text-sm" onClick={() => setOpen(false)}>Cancelar</button>
                    </div>
                </div>
            </Modal>
        </main>
    )
}