
const CalcularFrete = () => {
  return (
    <div className="bg-gray-600 flex justify-center items-center min-h-screen p-4">
        <div className="bg-blue-200 p-8 rounded-2xl w-full max-w-md text-center">
            <h1 className="text-3xl font-bold text-gray-900">Calculadora de Frete</h1>
            <form className="space-y-6">

                <div className="space-y-2 text-left">
                    <label htmlFor="distancia" className="block text-gray-700 font-bold">
                        Distância(Km)
                    </label>
                    <input
                        type="number"
                        id="distancia"
                        min="0"
                        required
                        className="w-full px-4 py-3 border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="space-y-2 text-left">
                    <label htmlFor="transporte" className="block text-gray-700 font-bold">
                        Transporte
                    </label>
                    <select
                        id="transport"
                        className="w-full px-4 py-3 border border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option>Bicicleta</option>
                        <option>Carro</option>
                        <option>Drone</option>
                    </select>
                </div>
                <button className="w-full py-3 bg-blue-700 rounded-2xl text-white text-2xl hover:bg-cyan-700 transition-colors duration-300">
                    Calcular
                </button>
            </form>
            <div className="mt-6 p-4 bg-blue-400 border-blue-600 rounded-2xl">
                <h2 className="text-2xl font-bold text-blue-900 round ">
                    Valo do frete: R$
                </h2>
            </div>
        </div>
    </div>
  )
}

export default CalcularFrete