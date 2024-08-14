interface OptionsProps{
  id: string,
  label: string
}
const Option = ({ id, label }: OptionsProps) => (
  <div className="flex items-center">
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {label}
    </label>
    <input type="checkbox" id={id} className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
  </div>
);
export default function Select(){
    return (
        <>
          <label className="block text-gray-700 text-sm font-bold mb-2">Motivo de contato</label>
        <div className="space-y-2">
          <Option id="dev" label="Contratar dev" />
          <Option id="site" label="Desenvolver site" />
          <Option id="app" label="Desenvolver app" />
          <Option id="outro" label="Outro" />
        </div>
        </>
    )
}