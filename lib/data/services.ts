import { Award, Scale, HeadphonesIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  highlighted?: boolean
}

export const services: ServiceItem[] = [
  {
    icon: Award,
    title: "Expert Representation",
    description:
      "We bring deep knowledge of Macedonian law and nearly three decades of courtroom experience to fight for the best possible outcome in your case.",
  },
  {
    icon: Scale,
    title: "Case Clarity",
    description:
      "You have the right to fully understand every aspect of your legal situation. We explain your position clearly, honestly, and without jargon.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description:
      "Our firm is committed to keeping you informed and supported at every stage of your legal proceedings.",
    highlighted: true,
  },
]
