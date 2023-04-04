export function SalariesSectionTitle ({ id, icon, title }) {
  return (
    <h2 id={id} className='flex items-center pt-10 pb-4 text-2xl font-semibold opacity-60 gap-x-2'>
      {icon}
      {title}
    </h2>
  )
}
