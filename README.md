# 3D Baskı Maliyet Hesaplayıcı

![Lisans](https://img.shields.io/badge/license-GPL--3.0-blue.svg)

Modern ve kullanıcı dostu bir 3D baskı maliyet hesaplayıcı. Bu araç, statik HTML, CSS ve JavaScript kullanılarak oluşturulmuştur.

**[Canlı Demoyu Görüntüle](https://furkan-o.github.io/3D-Print-Cost-Calculator/)**

---

## ✨ Özellikler

- **Filament Maliyeti:** Kullanılan filamentin gramajına ve kilogram fiyatına göre maliyet hesaplama.
- **Elektrik Maliyeti:** Yazıcının güç tüketimi, baskı süresi ve bölgesel kWh ücretine göre elektrik giderini hesaplama.
- **Yazıcı Amortismanı (Opsiyonel):** Yazıcının satın alım maliyetini ve tahmini ömrünü hesaba katarak her baskı başına düşen yıpranma payını maliyete ekleme.
- **Duyarlı Tasarım:** Mobil cihazlar ve masaüstü bilgisayarlarda sorunsuz çalışır.

---

## 🛠️ Kullanılan Teknolojiler

- **HTML5:** Sayfanın yapısal iskeleti.
- **CSS3:** Modern CSS özellikleri ve Değişkenler (Variables).
- **JavaScript (ES6+):** Kullanıcı girdilerini alıp tüm maliyet hesaplamalarını yapan mantıksal katman.

---

## 🧮 Hesaplama Formülleri

Bu araç aşağıdaki formülleri kullanarak maliyetleri hesaplar:

- **Filament Maliyeti:**
  <code>Maliyet<sub>filament</sub> = (Ağırlık<sub>g</sub> / 1000) * Fiyat<sub>kg</sub></code>

- **Elektrik Maliyeti:**
  <code>Maliyet<sub>elektrik</sub> = (Güç<sub>W</sub> / 1000) * (Süre<sub>dk</sub> / 60) * Fiyat<sub>kWh</sub></code>

- **Amortisman Maliyeti:**
  <code>Maliyet<sub>amortisman</sub> = (Yazıcı Fiyatı / Yazıcı Ömrü<sub>saat</sub>) * (Baskı Süresi<sub>dk</sub> / 60)</code>


---

## 📜 Lisans

Bu proje **GNU General Public License v3.0** kapsamında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasına bakın.
