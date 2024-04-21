// Import Components
import ReasonCard from "@/app/ui/reason-card";

const reasons = [
  {
    id: 'reason001',
    title: 'Seguridad en tus compras',
    description: 'Aenean ut nulla at purus facilisis rhoncus a a tellus. Quisque pellentesque consequat ex in congue. Nulla eu tincidunt erat. Curabitur sit amet magna lectus. Etiam quis convallis risus.',
    icon: '/icons/lock.svg'
  },
  {
    id: 'reason002',
    title: 'Atencion las 24 Horas',
    description: 'Aenean ut nulla at purus facilisis rhoncus a a tellus. Quisque pellentesque consequat ex in congue. Nulla eu tincidunt erat. Curabitur sit amet magna lectus. Etiam quis convallis risus.',
    icon: '/icons/lock.svg'
  },
  {
    id: 'reason003',
    title: 'Calidad de Viaje',
    description: 'Aenean ut nulla at purus facilisis rhoncus a a tellus. Quisque pellentesque consequat ex in congue. Nulla eu tincidunt erat. Curabitur sit amet magna lectus. Etiam quis convallis risus.',
    icon: '/icons/lock.svg'
  }
]

export default function ReasonList() {
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