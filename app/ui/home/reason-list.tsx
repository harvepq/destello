// Import Components
import ReasonCard from "@/app/ui/reason-card";

// Data Imports
import { fetchReasons } from "@/app/lib/data";


export default function ReasonList() {
  const reasons = fetchReasons()

  return (
    <>
      {reasons.map(reason => (
        <ReasonCard
          key={reason.id}
          title={reason.title}
          description={reason.description}
          icon={reason.icon}
        />
      ))}
    </>
  )
}