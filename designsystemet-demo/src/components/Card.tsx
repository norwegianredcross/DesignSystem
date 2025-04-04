import { Card as DigdirCard } from "@digdir/designsystemet-react"

export const CustomCard = ({ title, content }: { title: string; content: string }) => (
  <div
    className="bg-white rounded-lg shadow-md p-6 mb-6"
    role="region"
    aria-label={title}
  >
    <DigdirCard>
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </DigdirCard>
  </div>
)
