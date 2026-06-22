import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { transportTypes, transportModes } from "../data/site";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  cargo: string;
  date: string;
  origin: string;
  destination: string;
  transport: string;
};

const emptyForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  cargo: "",
  date: "",
  origin: "",
  destination: "",
  transport: "",
};

const inputCls =
  "w-full rounded-xl border border-navy-700 bg-navy-950/60 px-4 py-3 text-ink placeholder-muted/50 outline-none transition-all focus:border-amber-500/70 focus:bg-navy-950 focus:ring-2 focus:ring-amber-500/20";

function Field({ label, children, full = false }: { label: string; children: ReactNode; full?: boolean }) {
  return (
    <label className={`flex flex-col gap-2 ${full ? "sm:col-span-2" : ""}`}>
      <span className="text-sm font-medium text-muted">
        {label}
        <span className="text-amber-400"> *</span>
      </span>
      {children}
    </label>
  );
}

export function CargoForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof FormState) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="yuk-sorgusu" className="relative scroll-mt-24 overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div className="aurora pointer-events-none absolute -left-40 top-1/3 h-[50vh] w-[50vh] rounded-full bg-amber-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* left: info panel */}
        <Reveal className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
            24/7 · Online
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">YÜK SORĞUSU</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Hikmetoglu Transport daşımacılıqda sizin ən etibarlı köməkçinizdir!
          </p>

          <div className="mt-8 space-y-3">
            <a
              href="tel:+994124880537"
              className="group flex items-center gap-3 rounded-2xl border border-navy-700/70 bg-navy-800/40 p-4 transition-all duration-300 ease-out-strong hover:border-amber-500/50 hover:bg-navy-800/80 active:scale-[0.99]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-500/10 ring-1 ring-amber-500/20 transition-colors group-hover:bg-amber-500">
                <Phone className="h-5 w-5 text-amber-400 transition-colors group-hover:text-onaccent" />
              </span>
              <span className="font-display text-base font-medium text-ink">+99412 488 05 37</span>
            </a>
            <a
              href="mailto:office@hikmetoglu.com"
              className="group flex items-center gap-3 rounded-2xl border border-navy-700/70 bg-navy-800/40 p-4 transition-all duration-300 ease-out-strong hover:border-amber-500/50 hover:bg-navy-800/80 active:scale-[0.99]"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-500/10 ring-1 ring-amber-500/20 transition-colors group-hover:bg-amber-500">
                <Mail className="h-5 w-5 text-amber-400 transition-colors group-hover:text-onaccent" />
              </span>
              <span className="font-display text-base font-medium text-ink">office@hikmetoglu.com</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {transportModes.map(({ Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-navy-700 bg-navy-900/50 px-3 py-1.5 text-xs font-medium text-muted"
              >
                <Icon className="h-3.5 w-3.5 text-amber-400" />
                {label}
              </span>
            ))}
          </div>
        </Reveal>

        {/* right: form card */}
        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-navy-700/70 bg-navy-800/40 p-6 shadow-2xl shadow-navy-950/50 backdrop-blur-sm sm:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-4 py-12 text-center"
              >
                <span className="grid h-16 w-16 place-items-center rounded-full bg-amber-500/15 ring-1 ring-amber-500/40">
                  <CheckCircle2 className="h-8 w-8 text-amber-400" />
                </span>
                <h3 className="font-display text-2xl font-semibold text-ink">Sorğunuz qəbul edildi</h3>
                <p className="max-w-md text-muted">
                  Hikmetoglu Transport komandası ən qısa zamanda sizinlə əlaqə saxlayacaq.
                </p>
                <button
                  onClick={() => {
                    setForm(emptyForm);
                    setSubmitted(false);
                  }}
                  className="mt-2 rounded-full border border-navy-700 px-6 py-2.5 text-sm font-semibold text-ink transition-all duration-300 ease-out-strong hover:border-amber-500/50 hover:text-amber-300 active:scale-[0.97]"
                >
                  Yeni sorğu
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5 sm:grid-cols-2">
                <Field label="Ad və Soyadınız">
                  <input type="text" required value={form.fullName} onChange={set("fullName")} className={inputCls} />
                </Field>
                <Field label="E-mail">
                  <input type="email" required value={form.email} onChange={set("email")} className={inputCls} />
                </Field>
                <Field label="Telefon">
                  <input type="tel" required value={form.phone} onChange={set("phone")} className={inputCls} />
                </Field>
                <Field label="Yükləmə tarixi">
                  <input type="date" required value={form.date} onChange={set("date")} className={inputCls} />
                </Field>
                <Field label="Yük haqqında məlumat" full>
                  <textarea required rows={4} value={form.cargo} onChange={set("cargo")} className={`${inputCls} resize-none`} />
                </Field>
                <Field label="Yükün olduğu yer">
                  <input type="text" required value={form.origin} onChange={set("origin")} className={inputCls} />
                </Field>
                <Field label="Yükün daşınacağı yer">
                  <input type="text" required value={form.destination} onChange={set("destination")} className={inputCls} />
                </Field>
                <Field label="Nəqliyyatın növü" full>
                  <select
                    required
                    value={form.transport}
                    onChange={set("transport")}
                    className={`${inputCls} appearance-none bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat pr-10`}
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23fbbf24' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>\")",
                    }}
                  >
                    <option value="" disabled hidden></option>
                    {transportTypes.map((t) => (
                      <option key={t} value={t} className="bg-navy-900 text-ink">
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-7 py-4 text-sm font-semibold text-onaccent shadow-lg shadow-amber-500/20 transition-all duration-300 ease-out-strong hover:-translate-y-0.5 hover:bg-amber-400 hover:shadow-xl hover:shadow-amber-500/30 active:scale-[0.97] sm:w-auto"
                  >
                    Göndər
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
