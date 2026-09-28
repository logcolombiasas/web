import { useEffect, useState, type FormEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

// Número de WhatsApp de atención (formato internacional, sin "+" ni espacios).
export const WHATSAPP_NUMBER = "573104622366";

export const QUOTE_SERVICES = [
  "Asistencia revisión técnico-mecánica",
  "Asistencia en carretera / traslado de vehículos",
  "Mantenimiento preventivo",
  "Reparaciones mecánicas",
  "Venta y comercialización de vehículos",
  "Elaboración y copia de llaves para vehículos",
] as const;

type QuoteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: string | undefined;
};

const PLATE_PATTERN = /^[A-Z0-9]{5,7}$/;

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function QuoteDialog({
  open,
  onOpenChange,
  defaultService,
}: QuoteDialogProps) {
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [plate, setPlate] = useState("");
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setService(defaultService ?? "");
      setSubmitted(false);
    }
  }, [open, defaultService]);

  const errors = {
    service: !service ? "Selecciona un servicio." : "",
    name: name.trim().length < 2 ? "Escribe tu nombre." : "",
    vehicle: vehicle.trim().length < 2 ? "Indica marca, línea o modelo." : "",
    plate: !PLATE_PATTERN.test(plate) ? "Placa no válida (ej. ABC123)." : "",
  };
  const hasErrors = Object.values(errors).some(Boolean);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (hasErrors) return;

    const lines = [
      "Hola LOG COLOMBIA, quiero solicitar un servicio.",
      "",
      `*Servicio:* ${service}`,
      `*Nombre:* ${name.trim()}`,
      `*Vehículo:* ${vehicle.trim()}`,
      `*Placa:* ${plate}`,
    ];
    if (city.trim()) lines.push(`*Ciudad / ubicación:* ${city.trim()}`);
    if (details.trim()) lines.push(`*Detalle:* ${details.trim()}`);

    window.open(
      buildWhatsAppUrl(lines.join("\n")),
      "_blank",
      "noopener,noreferrer",
    );
    onOpenChange(false);
  };

  const fieldError = (key: keyof typeof errors) =>
    submitted && errors[key] ? (
      <span className="quote-error">{errors[key]}</span>
    ) : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="quote-dialog">
        <p className="eyebrow">Cotizar servicio</p>
        <DialogTitle className="quote-title">
          Cuéntanos qué necesitas.
        </DialogTitle>
        <DialogDescription className="quote-description">
          Completa estos datos y te llevamos a WhatsApp con tu solicitud lista
          para enviar.
        </DialogDescription>

        <form className="quote-form" onSubmit={handleSubmit} noValidate>
          <fieldset className="quote-field">
            <legend>Servicio</legend>
            <div className="quote-services">
              {QUOTE_SERVICES.map((option) => (
                <label key={option} className="quote-service">
                  <input
                    type="radio"
                    name="service"
                    value={option}
                    checked={service === option}
                    onChange={() => setService(option)}
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
            {fieldError("service")}
          </fieldset>

          <div className="quote-grid">
            <label className="quote-field">
              <span>Nombre</span>
              <input
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
              />
              {fieldError("name")}
            </label>
            <label className="quote-field">
              <span>Placa</span>
              <input
                type="text"
                autoCapitalize="characters"
                maxLength={8}
                value={plate}
                onChange={(e) =>
                  setPlate(
                    e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ""),
                  )
                }
                placeholder="ABC123"
              />
              {fieldError("plate")}
            </label>
            <label className="quote-field quote-span">
              <span>Vehículo</span>
              <input
                type="text"
                value={vehicle}
                onChange={(e) => setVehicle(e.target.value)}
                placeholder="Ej. Chevrolet Spark 2018"
              />
              {fieldError("vehicle")}
            </label>
            <label className="quote-field quote-span">
              <span>
                Ciudad o ubicación <em>(opcional)</em>
              </span>
              <input
                type="text"
                autoComplete="address-level2"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="¿Dónde está el vehículo?"
              />
            </label>
            <label className="quote-field quote-span">
              <span>
                Detalle <em>(opcional)</em>
              </span>
              <textarea
                rows={3}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Cuéntanos brevemente qué le pasa al vehículo"
              />
            </label>
          </div>

          <button type="submit" className="button button-solid quote-submit">
            Continuar en WhatsApp <span aria-hidden="true">↗</span>
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
