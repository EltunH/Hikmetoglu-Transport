import {
  Truck,
  Plane,
  Ship,
  TrainFront,
  Landmark,
  Mountain,
  Building2,
  TreePalm,
  Compass,
  Phone,
  MapPin,
  Printer,
  Mail,
  ShieldCheck,
  FileCheck2,
  PackageCheck,
  Warehouse,
  Stamp,
  Globe2,
  type LucideIcon,
} from "lucide-react";

/** Primary navigation (also reused in the footer). */
export const navLinks = [
  { label: "Əsas səhifə", href: "#hero" },
  { label: "Haqqımızda", href: "#istiqametlerimiz" },
  { label: "Xidmətlərimiz", href: "#xidmetlerimiz" },
] as const;

export const langs = ["AZ", "EN", "RU"] as const;
export type Lang = (typeof langs)[number];

export type IconItem = { label: string; Icon: LucideIcon };

/** Transport modes shown as chips in the hero and the cargo-form panel. */
export const transportModes: IconItem[] = [
  { label: "Quru", Icon: Truck },
  { label: "Hava", Icon: Plane },
  { label: "Dəniz", Icon: Ship },
  { label: "Dəmiryolu", Icon: TrainFront },
];

export const continents: { name: string; Icon: LucideIcon }[] = [
  { name: "Avropa", Icon: Landmark },
  { name: "Asiya", Icon: Mountain },
  { name: "Amerika", Icon: Building2 },
  { name: "Afrika", Icon: TreePalm },
  { name: "Avstraliya", Icon: Compass },
];

export const services: { no: string; name: string; Icon: LucideIcon }[] = [
  { no: "01", name: "Avtomobil yolu ilə yükdaşıma", Icon: Truck },
  { no: "02", name: "Hava yolu ilə yükdaşıma", Icon: Plane },
  { no: "03", name: "Dəniz və okean yolu ilə yükdaşıma", Icon: Ship },
  { no: "04", name: "Dəmiryolu ilə yükdaşıma", Icon: TrainFront },
];

export const transportTypes = [
  "Avtomobil yolu ilə",
  "Hava yolu ilə",
  "Dəniz və okean yolu ilə",
  "Dəmiryolu ilə",
  "Qrup halında",
];

export const contactCards: {
  Icon: LucideIcon;
  label: string;
  lines: { text: string; href?: string }[];
}[] = [
  {
    Icon: Phone,
    label: "Telefon",
    lines: [
      { text: "+99412 488 05 37", href: "tel:+994124880537" },
      { text: "+99450 227 02 70", href: "tel:+994502270270" },
    ],
  },
  {
    Icon: MapPin,
    label: "Ünvan",
    lines: [
      {
        text: "A.Quliyev 1131, blok C, fl.11, Babək prospekti, Babek Plaza, AZ1025, Bakı, Azərbaycan",
        href: "https://www.google.com/maps/search/?api=1&query=Babek+Plaza+Baku+Azerbaijan",
      },
    ],
  },
  { Icon: Printer, label: "Fax", lines: [{ text: "+99412 404 83 50", href: "tel:+994124048350" }] },
  { Icon: Mail, label: "E-mail", lines: [{ text: "office@hikmetoglu.com", href: "mailto:office@hikmetoglu.com" }] },
];

/** Trust strip — real, verifiable figures (no invented statistics). */
export const stats: { value: string; label: string }[] = [
  { value: "2013", label: "Təsis ili" },
  { value: "5", label: "Qitə" },
  { value: "4", label: "Nəqliyyat növü" },
  { value: "ADR", label: "Sertifikatlı yük" },
];

/** Advantages — the company's own stated capabilities, minimally rephrased. */
export const advantages: { Icon: LucideIcon; title: string; text: string }[] = [
  { Icon: ShieldCheck, title: "C.M.R sığorta", text: "Yükləriniz beynəlxalq C.M.R sığortası ilə qorunur." },
  { Icon: FileCheck2, title: "ADR sertifikatı", text: "Təhlükəli yüklərin sertifikatlı daşınması." },
  { Icon: PackageCheck, title: "Qapıdan-qapıya", text: "Götürülmədən çatdırılmaya qədər tam zəncir." },
  { Icon: Warehouse, title: "Anbar təsərrüfatı", text: "Saxlama və anbar idarəetməsi." },
  { Icon: Stamp, title: "Gömrük rəsmiləşdirilməsi", text: "Gömrük prosedurlarının həlli." },
  { Icon: Globe2, title: "5 qitə üzrə daşıma", text: "Dünyanın istənilən nöqtəsinə yük daşınması." },
];

export const footerAbout = ["Hikmetoglu Transport", "Güvən və təhlükəsizlik"];

export const footerServices = [
  "Hava yolu ilə yükdaşıma",
  "Dəniz və okean yolu ilə yükdaşıma",
  "Avtomobil yolu ilə yükdaşıma",
  "Dəmiryolu ilə yükdaşıma",
];
