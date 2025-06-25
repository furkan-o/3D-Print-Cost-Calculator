document.addEventListener('DOMContentLoaded', () => {
    // HTML elementlerine erişim
    const calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', () => {
        // Girdi değerlerini al ve sayıya çevir
        const filamentPrice = parseFloat(document.getElementById('filamentPrice').value) || 0;
        const printWeight = parseFloat(document.getElementById('printWeight').value) || 0;
        const electricityPrice = parseFloat(document.getElementById('electricityPrice').value) || 0;
        const powerConsumption = parseFloat(document.getElementById('powerConsumption').value) || 0;
        const printTime = parseFloat(document.getElementById('printTime').value) || 0;
        
        // Opsiyonel amortisman değerleri
        const printerCost = parseFloat(document.getElementById('printerCost').value) || 0;
        const printerLifetime = parseFloat(document.getElementById('printerLifetime').value) || 0;

        // 1. Filament Maliyeti Hesaplama
        // (Baskı Ağırlığı (g) / 1000) * Filament Fiyatı (TL/kg)
        const filamentCost = (printWeight / 1000) * filamentPrice;

        // 2. Elektrik Maliyeti Hesaplama
        // (Yazıcı Gücü (W) / 1000) * (Baskı Süresi (dk) / 60) * Elektrik Fiyatı (TL/kWh)
        const powerInKiloWatts = powerConsumption / 1000; // Watt'ı kW'a çevir
        const timeInHours = printTime / 60; // Dakikayı saate çevir
        const electricityCost = powerInKiloWatts * timeInHours * electricityPrice;
        
        // 3. Amortisman Maliyeti Hesaplama (isteğe bağlı)
        let amortizationCost = 0;
        if (printerCost > 0 && printerLifetime > 0) {
            // (Yazıcı Fiyatı / Yazıcı Ömrü (saat)) * Baskının Sürdüğü Saat
            const costPerHour = printerCost / printerLifetime;
            amortizationCost = costPerHour * timeInHours;
        }

        // 4. Toplam Maliyet
        const totalCost = filamentCost + electricityCost + amortizationCost;

        // Sonuçları ekrana yazdırma
        document.getElementById('filamentCostResult').textContent = filamentCost.toFixed(2);
        document.getElementById('electricityCostResult').textContent = electricityCost.toFixed(2);
        document.getElementById('amortizationCostResult').textContent = amortizationCost.toFixed(2);
        document.getElementById('totalCostResult').textContent = totalCost.toFixed(2);

        // Sonuç kutusunu görünür yap
        document.getElementById('results').style.display = 'block';
    });
});