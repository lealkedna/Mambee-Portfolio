export default function Textarea() {
    return (
        <>
            <div className="mb-4">
                <textarea name="message" placeholder="Mensagem" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"></textarea>
             </div>
        </>
    )
}