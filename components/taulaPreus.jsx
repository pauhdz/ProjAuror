const TaulaPreus = () => {
    return (
        <div class="bg-maize-100 p-20">
            <table class="w-full border-collapse border border-gray-300">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="p-3 border border-gray-300 text-center">TEMPS</th>
                        <th class="p-3 border border-gray-300 text-center">PREU BASE</th>
                        <th class="p-3 border border-gray-300 text-center">21% IVA</th>
                        <th class="p-3 border border-gray-300 text-center">PREU FINAL</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white">
                        <td class="p-3 border border-gray-300 text-center">1h</td>
                        <td class="p-3 border border-gray-300 text-center">45,00 €</td>
                        <td class="p-3 border border-gray-300 text-center">9,45 €</td>
                        <td class="p-3 border border-gray-300 text-center">54,50 €</td>
                    </tr>
                    <tr class="bg-gray-100">
                        <td class="p-3 border border-gray-300 text-center">2h</td>
                        <td class="p-3 border border-gray-300 text-center">82,65 €</td>
                        <td class="p-3 border border-gray-300 text-center">17,36 €</td>
                        <td class="p-3 border border-gray-300 text-center">100,00 €</td>
                    </tr>
                    <tr class="bg-white">
                        <td class="p-3 border border-gray-300 text-center">3h</td>
                        <td class="p-3 border border-gray-300 text-center">120,00 €</td>
                        <td class="p-3 border border-gray-300 text-center">25,20 €</td>
                        <td class="p-3 border border-gray-300 text-center">145,20 €</td>
                    </tr>
                    <tr class="bg-gray-100">
                        <td class="p-3 border border-gray-300 text-center">4h</td>
                        <td class="p-3 border border-gray-300 text-center">150,00 €</td>
                        <td class="p-3 border border-gray-300 text-center">31,50 €</td>
                        <td class="p-3 border border-gray-300 text-center">181,50 €</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default TaulaPreus;