import { Briefcase, ShieldAlert, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ValueItem {
  title: string
  description: string
  icon: LucideIcon
}

export const values: ValueItem[] = [
  {
    title: "Corporate Law",
    description:
      "From company formation and commercial contracts to mergers and regulatory compliance, we provide expert legal guidance for businesses operating in North Macedonia.",
    icon: Briefcase,
  },
  {
    title: "Criminal Law",
    description:
      "We provide vigorous criminal defence representation, protecting your rights from initial investigation through trial with extensive experience in Macedonian criminal proceedings.",
    icon: ShieldAlert,
  },
  {
    title: "Civil Law",
    description:
      "We handle civil disputes including property matters, inheritance, contractual claims, and compensation cases with diligence and a commitment to achieving the best outcome.",
    icon: Users,
  },
]
