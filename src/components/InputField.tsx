interface InputFieldProps{
    label: string,
    type: string,
    name: string
}
export default function InputField({ label, type, name }: InputFieldProps) {
    return (
      <div className="mb-4">
        <input type={type} name={name} placeholder={label} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"/>
      </div>
    );
  }