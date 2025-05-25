document.addEventListener('DOMContentLoaded', function() {
    const mindMapDataText = `
Merkez Tema: Matematik Konuları (Kaynaklara Göre)

*   **1. TRİGONOMETRİ**
    *   **Temel Kavramlar ve Uygulamalar**
        *   **Yönlü Açılar**
            *   Yönlü Açı Kavramı
            *   Başlangıç ve Bitim Kolu
            *   Pozitif Yönlü Açılar (Saatin tersi yönü)
            *   Negatif Yönlü Açılar (Saatin dönme yönü)
            *   Sembol Gösterimi (Örn: GOF%)
        *   Derece, Radyan, Birim Çember, Esas Ölçü
        *   Tanjant Fonksiyonu (tan x)
            *   Tanım Kümesi: ℝ \\ {π/2 + kπ, k ∈ ℤ}
            *   Eşleyen Fonksiyon Tanımı
        *   Kotanjant Fonksiyonu (cot x)
            *   Tanım Kümesi: ℝ \\ {kπ, k ∈ ℤ}
            *   Eşleyen Fonksiyon Tanımı
        *   Geçmişteki Kullanım Alanları: Topoğrafya, Denizcilik, Astronomi
        *   Modern Kullanım Alanları: Elektrik Devreleri, Ses Dalgaları Analizi, Trigonometrik Seriler, Kompleks Sayılar

*   **2. ANALİTİK GEOMETRİ**
    *   **Analitik Düzlem ve Noktalar**
        *   Dik Koordinat Sistemi ve Analitik Düzlem
            *   x ekseni (apsisler ekseni)
            *   y ekseni (ordinatlar ekseni)
            *   Orijin (O(0,0))
        *   Nokta Gösterimi: A(x,y)
            *   Apsis (1. bileşen)
            *   Ordinat (2. bileşen)
            *   Eksenler Üzerindeki Noktalar (x ekseninde ordinat 0, y ekseninde apsis 0)
        *   Analitik Düzlemin Bölgeleri (I, II, III, IV)
        *   İki Nokta Arasındaki Uzaklık
        *   Bir Doğru Parçasını Belli Oranda Bölme (İçten/Dıştan)

    *   **Doğrunun Analitik İncelenmesi**
        *   Doğrunun Eğimi
            *   Eğim Açısı (Doğrunun x ekseniyle pozitif yönde yaptığı açı)
            *   Eğim (Eğim açısının tanjantı, m = tan α)
            *   Eğim ve Açı İlişkisi (Dar açı ise m > 0, Geniş açı ise m < 0)
            *   İki Noktası Bilinen Doğrunun Eğimi
        *   Doğru Denklemleri
            *   Denklem Tanımı (Doğru üzerindeki değişken P(x,y) noktasının koordinatları arasındaki bağıntı)
            *   Bir Noktası ve Eğimi Bilinen Doğru Denklemi (y - y₁ = m(x - x₁))
            *   İki Noktası Bilinen Doğru Denklemi
            *   Koordinat Eksenlerini Kestiği Noktaları Bilinen Doğru Denklemi (x/a + y/b = 1)
            *   Özel Doğrular: y=x (I. açıortay), y=-x (II. açıortay)
        *   Noktaların Doğrusal Olup Olmaması (Doğru denklemini sağlaması gerekir)
        *   Doğru Denklem Sistemleri (Doğruların kesim noktasını bulmak için)
        *   Bir Noktanın Bir Doğruya Uzaklığı
        *   Paralel Doğrular Arasındaki Uzaklık

*   **3. FONKSİYONLARDA UYGULAMALAR**
    *   **Temel Fonksiyon Kavramları**
        *   Fonksiyon Tanımı
        *   Ortalama Değişim Hızı
        *   Grafik Okuma ve Yorumlama (Artan/Azalan aralıklar)
    *   **İkinci Dereceden Fonksiyonlar (Parabol)**
        *   Tanım: f(x) = ax² + bx + c, a ≠ 0
        *   Terimler: Tepe Noktası, Parabol, Simetri Ekseni
        *   f(x) = ax² Grafiği Analizi
        *   Fonksiyon Kuralını Bulma
        *   Grafik Çizimi
    *   **Grafik Dönüşümleri**
        *   Öteleme (x ekseni boyunca, y ekseni boyunca)
        *   Simetri (x eksenine göre, y eksenine göre)
        *   Dönüşüm (Genel terim)
    *   **Problemler ve Modelleme**
        *   Gerçek Hayat Problemlerinin Matematiksel Modellenmesi
        *   İkinci Dereceden Fonksiyonlarla Problem Çözümü

*   **4. DENKLEM VE EŞİTSİZLİK SİSTEMLERİ**
    *   **Denklem Sistemleri**
        *   Tanım
        *   Çözüm Kümesi
        *   Cebirsel Çözüm Yöntemleri
        *   Grafiksel Çözüm (Kesişim Noktaları)
        *   Tek Çözüm Durumu (Geometrik yorum: Teğetlik)
    *   **Eşitsizlikler**
        *   Tanım
        *   Çözüm Kümesi
        *   Birinci Dereceden Bir Bilinmeyenli Eşitsizlikler
            *   İşaret Tablosu
            *   Tek Katlı Kök, Çift Katlı Kök
        *   İkinci Dereceden Bir Bilinmeyenli Eşitsizlikler
            *   Tanım
            *   Çözüm Kümesi
            *   Kök Bulma (Kritik Noktalar)
            *   Çarpım/Bölüm Şeklindeki Eşitsizlikler
            *   Problemlerin Eşitsizliklerle Modellenmesi
    *   **Eşitsizlik Sistemleri**
        *   Tanım (İki veya daha çok eşitsizlik)
        *   Çözüm Kümesi (Bireysel çözüm kümelerinin kesişimi)

*   **5. ÇEMBER VE DAİRE**
    *   **Temel Elemanlar**
        *   Çember Tanımı
            *   Merkez (O veya M)
            *   Yarıçap (r)
        *   Çap (En uzun kiriş)
        *   Kiriş (İki noktayı birleştiren doğru parçası)
        *   Kesen (İki noktadan geçen doğru)
        *   Yay (İki nokta arasındaki çember parçası)
        *   Teğet (Tek noktada değen doğru)
            *   Değme Noktası
            *   Yarıçapın Teğete Dikliği
        *   Temel ve Yardımcı Elemanlar
    *   **Açılar** (merkez, çevre, iç, dış, teğet-kiriş açı özellikleri)
    *   **Özellikler ve Bağıntılar**
        *   Merkezin Doğruya Uzaklığı ve Çemberin Konumu
        *   Üçgende Çemberler:
            *   Çevrel Çember
            *   İç Teğet Çember
            *   Dış Teğet Çember
        *   Teğet Parçaları
        *   Kiriş Özellikleri
        *   Çevre ve Alan Bağıntıları
        *   Pi Sayısı (Çevre/Çap oranı)

*   **6. KATI CİSİMLER**
    *   **Temel Katı Cisimler**
        *   Dik Dairesel Silindir
            *   Tanım: Silindirik Yüzey, Ana Doğru, Tabanlar, Yanal Yüzey, Yükseklik
        *   Dik Dairesel Koni
            *   Tanım: Konik Yüzey, Tepe Noktası, Ana Doğrular
            *   Dik Koni, Dik Dairesel Koni Tanımı
            *   Özellikler
            *   Yanal Alan
        *   Küre
            *   Tanım
            *   Yüzey Alanı (4πr²)
            *   Hacim (4/3 πr³)
    *   **Alan ve Hacim Bağıntıları**
    *   **Problemler** (Katı cisimlerin birbiri içine yerleştirilmesi, kesit alma vb.)

*   **7. OLASILIK**
    *   **Temel Olasılık Kavramları**
        *   Olasılık Tanımı (0-1 aralığında reel sayı)
        *   Örnek Uzay (E)
        *   Olay (Örnek uzayın alt kümesi)
        *   Eş Olumlu Örnek Uzay
        *   Bir Olayın Olasılığı (P(A) = s(A)/s(E))
    *   **Koşullu Olasılık**
        *   Koşullu Olasılık Kavramı
    *   **Bağımlı ve Bağımsız Olaylar**
        *   Tanım: Bağımsız Olaylar
        *   Tanım: Bağımlı Olay
    *   **Bileşik Olaylar**
        *   Tanım
        *   Olasılıklarının Hesaplanması
        *   Ağaç Şeması Kullanımı
    *   **Deneysel ve Teorik Olasılık**
        *   Teorik Olasılık Tanımı
        *   Deneysel Olasılık Tanımı (Gerçekleşme sayısı / Deneme sayısı)
        *   Deney Sayısı Arttıkça Deneysel Olasılığın Teorik Olasılığa Yaklaşması
        *   Hesaplama Örnekleri ve Karşılaştırmalar
        *   Simülasyon Kullanımı
    `;

    function parseMindMapText(text) {
        const lines = text.split('\n').filter(line => line.trim() !== '');
        const rootNode = {
            id: "root",
            topic: "Matematik Konuları", 
            children: []
        };

        const rootTopicMatch = lines.shift().match(/^Merkez Tema:\s*(.*)/);
        if (rootTopicMatch) {
            rootNode.topic = rootTopicMatch[1].trim();
        }

        let parentStack = [rootNode];
        let levelStack = [0];
        let nodeIdCounter = 0;

        function generateId(prefix = "node") {
            return `${prefix}-${nodeIdCounter++}`;
        }
        
        function cleanTopic(topicLine) {
            let cleaned = topicLine.replace(/^\s*\*\s*(\*\*|\s*)?/, '');
            cleaned = cleaned.replace(/\s*\(.*?\)\s*$/g, ''); 
            cleaned = cleaned.replace(/,$/, ''); 
            cleaned = cleaned.replace(/,{2,}/g, ''); 
            const patternsToRemove = [
                " (Kaynaklara Göre)", " (Saatin tersi yönü)", " (Saatin dönme yönü)", " (Örn: GOF%)",
                " (tan x)", " (cot x)", " (apsisler ekseni)", " (ordinatlar ekseni)", " (O(0,0))",
                " (1. bileşen)", " (2. bileşen)", " (x ekseninde ordinat 0, y ekseninde apsis 0)",
                " (I, II, III, IV)", " (İçten/Dıştan)", " (Doğrunun x ekseniyle pozitif yönde yaptığı açı)",
                " (Eğim açısının tanjantı, m = tan α)", " (Dar açı ise m > 0, Geniş açı ise m < 0)",
                " (Doğru üzerindeki değişken P(x,y) noktasının koordinatları arasındaki bağıntı)",
                " (y - y₁ = m(x - x₁))", " (x/a + y/b = 1)", " (I. açıortay)", " (II. açıortay)",
                " (Doğru denklemini sağlaması gerekir)", " (Doğruların kesim noktasını bulmak için)",
                " (Terim, örnek)", " (Artan/Azalan aralıklar)", " (Parabol)", " (a ≠ 0)",
                " (Tepe Noktası, Parabol, Simetri Ekseni)",
                " (a'nın değerine göre kolların yönü ve y eksenine yakınlığı/uzaklığı)",
                " (Örn: x eksenini kestiği noktalar biliniyorsa)",
                " (Tepe noktası, eksenleri kestiği noktalar kullanılarak)",
                " (x ekseni boyunca, y ekseni boyunca)", " (x eksenine göre, y eksenine göre)",
                " (Genel terim)", " (Örn: Alan En Çok Kaç Olur)",
                " (Doğru-parabol kesişimi, parabol-parabol kesişimi)", " (Geometrik yorum: Teğetlik)",
                " (Kritik Noktalar)", " (İşaret tablosu, paydanın köklerinin çözüm kümesine dahil edilmemesi)",
                " (Örn: Kar hesaplama)", " (İki veya daha çok eşitsizlik)",
                " (Bireysel çözüm kümelerinin kesişimi)", " (O veya M)", " (r)", " (En uzun kiriş)",
                " (İki noktayı birleştiren doğru parçası)", " (İki noktadan geçen doğru)",
                " (İki nokta arasındaki çember parçası)", " (Tek noktada değen doğru)",
                " (Değme Noktası)", " (Yarıçapın Teğete Dikliği)", " (Merkez, Yarıçap)",
                " (Teğet, Kiriş, Yay)", " (merkez, çevre, iç, dış, teğet-kiriş açı özellikleri)",
                " (Köşelerden geçen, merkezi kenar orta dikmelerin kesişimi)",
                " (Kenarlara teğet, merkezi iç açıortayların kesişimi)",
                " (Dış noktadan çizilen teğet parçalarının uzunlukları eşittir)",
                " (Öğrenme hedefi: Dairenin çevre ve alanı)", " (Çevre/Çap oranı)",
                " (Silindirik Yüzey, Ana Doğru, Tabanlar, Yanal Yüzey, Yükseklik)",
                " (Konik Yüzey, Tepe Noktası, Ana Doğrular)",
                " (Ana doğruların uzunlukları eşit, yükseklik simetri ekseni)", " (4πr²)", " (4/3 πr³)",
                " (Öğrenme hedefi: Alan ve hacim bağıntılarını oluşturma ve hesaplama)",
                " (Katı cisimlerin birbiri içine yerleştirilmesi, kesit alma vb.)",
                " (0-1 aralığında reel sayı)", " (E)", " (Örnek uzayın alt kümesi)",
                " (P(A) = s(A)/s(E))",
                " (Bir olayın, başka bir olayın gerçekleştiği bilindiğinde olma olasılığı)",
                " (Birinin gerçekleşmesi diğerini etkilemez)", " (Birinin gerçekleşmesi diğerini etkiler)",
                " (İki veya daha çok olayın birlikte/art arda gelmesi)",
                " (Örn: Seçim problemleri, art arda atışlar, torbadan top çekme)",
                " (Tüm sonuçlar göz önünde bulundurularak matematiksel hesaplama)",
                " (Deneme sonuçlarına göre olasılık)", " (Gerçekleşme sayısı / Deneme sayısı)",
                " (Dinamik matematik yazılımı)", " (Öğrenme hedefi)", " (formül/örnek)"
            ];
            patternsToRemove.forEach(pattern => {
                const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
                cleaned = cleaned.replace(new RegExp(escapedPattern.trim() + '$', 'g'), '');
            });
            return cleaned.trim();
        }

        lines.forEach(line => {
            const originalLine = line;
            const trimmedLine = line.trimStart();
            const indent = originalLine.length - trimmedLine.length;
            let currentLevel;
            if (trimmedLine.startsWith('**')) { 
                currentLevel = 1;
            } else if (trimmedLine.startsWith('*   **')) {
                currentLevel = 2;
            } else {
                currentLevel = Math.floor(indent / 4) + 1;
                 if (currentLevel < 2 && trimmedLine.startsWith('*')) currentLevel = 2;
            }
            
            const topic = cleanTopic(trimmedLine);
            if (!topic) return;

            const newNode = {
                id: generateId(currentLevel === 1 ? `node-${topic.charAt(0)}` : 'sub'),
                topic: topic,
                children: []
            };

            while (currentLevel <= levelStack[levelStack.length - 1] && parentStack.length > 1) {
                parentStack.pop();
                levelStack.pop();
            }

            parentStack[parentStack.length - 1].children.push(newNode);
            parentStack.push(newNode);
            levelStack.push(currentLevel);
        });
        
        return {
            meta: {
                name: "Matematik Zihin Haritası",
                author: "AI Generated & User Enhanced",
                version: "0.4" // Sürüm güncellendi
            },
            format: "node_tree",
            data: rootNode
        };
    }

    const mind = parseMindMapText(mindMapDataText);

    const options = {
        container: 'jsmind_container',
        editable: true, // Bu, düğüm sürüklemeyi etkinleştirmelidir.
        theme: 'primary', 
        view:{
            engine: 'svg',
            hmargin: 80,
            vmargin: 40,
            line_width: 2,
            line_color:'#555'
        },
        layout:{
            hspace: 60,
            vspace: 25,
            pspace: 13
        },
        shortcut:{
            enable:true,
            handles:{},
            mapping:{
                addchild   : [45, 40],
                addbrother : 13,
                editnode   : 113,
                delnode    : 46,
                toggle     : 32,
                left       : 37,
                up         : 38,
                right      : 39,
                down       : 40,
            }
        },
        // Düğüm sürükleme için `jsMind`'in dahili ayarı
        // `enable_drag`: true (Bu genellikle `editable:true` ile birlikte gelir, ancak kontrol etmekte fayda var)
        // Eğer `jsMind` varsayılan olarak düğüm sürüklemeyi desteklemiyorsa veya sorun çıkarıyorsa,
        // bu daha karmaşık bir manuel DOM manipülasyonu gerektirebilir.
        // Ancak çoğu `jsMind` versiyonu `editable:true` ile bunu sağlar.
    };

    const jm = jsMind.show(options, mind);

    // ----- GÜNCELLENEN VE YENİ EKLENEN ÖZELLİKLER -----

    const mindContainer = document.getElementById('jsmind_container');

    // 1. Mouse Tekerleği ile Büyütme/Küçültme (Değişiklik yok)
    if (mindContainer) {
        mindContainer.addEventListener('wheel', function(event) {
            event.preventDefault();
            if (event.deltaY < 0) {
                jm.view.zoomIn();
            } else {
                jm.view.zoomOut();
            }
        }, { passive: false });
    }

    // 2. Butonlarla Kontroller (Değişiklik yok)
    document.getElementById('zoom-in-btn').addEventListener('click', () => jm.view.zoomIn());
    document.getElementById('zoom-out-btn').addEventListener('click', () => jm.view.zoomOut());
    document.getElementById('expand-all-btn').addEventListener('click', () => jm.expand_all());
    document.getElementById('collapse-all-btn').addEventListener('click', () => {
        jm.collapse_all();
        const rootNode = jm.get_root();
        if (rootNode) jm.expand_node(rootNode);
    });

    // 3. Sol Tık ile Kutucukları (Düğümleri) Sürükleme
    // jsMind `editable: true` ayarı ile bunu zaten sağlamalı.
    // Eğer bu çalışmıyorsa, jsMind'in kendi `enable_drag` veya benzeri bir seçeneği olabilir
    // veya sürükleme olaylarını manuel olarak yönetmek gerekebilir ki bu daha karmaşıktır.
    // Şimdilik jsMind'in bu özelliği doğru şekilde uyguladığını varsayıyoruz.
    // Konsolda bir hata olup olmadığını kontrol edin.
    // `jsMind.draggable.js` gibi bir eklentisi varsa onun da yüklü olduğundan emin olun.
    // Eğer yoksa ve sürükleme çalışmıyorsa, `jm.enable_event_handle(jm.view.e_handle.drag);`
    // gibi bir komut denenebilir, ancak bu kütüphane versiyonuna göre değişir.
    // `jsMind` belgelerinde "drag" veya "draggable" ile ilgili ayarlara bakmak iyi olur.
    // Çoğu durumda `editable: true` yeterlidir.

    // 4. Sağ Tık ile Ekranda Gezinme (Panning)
    let isPanning = false;
    let lastPanX, lastPanY;

    if (mindContainer) {
        mindContainer.addEventListener('contextmenu', function(event) {
            event.preventDefault(); // Sağ tık menüsünü engelle
        });

        mindContainer.addEventListener('mousedown', function(event) {
            // Sadece sağ tık (event.button === 2) ve haritanın boş bir alanına tıklandığında
            // (yani bir düğümün üzerine değil)
            if (event.button === 2 && event.target.tagName.toLowerCase() !== 'jmnode' && event.target.closest('jmnode') === null) {
                isPanning = true;
                lastPanX = event.clientX;
                lastPanY = event.clientY;
                mindContainer.classList.add('grabbing'); // CSS'ten imleci değiştir
                // jsMind'in dahili sürükleme mekanizmasını geçici olarak devre dışı bırakmak gerekebilir
                // eğer çakışma yaratıyorsa.
                // jm.disable_event_handle(jm.view.e_handle.drag); // Bu satır gerekirse aktif edilebilir
            }
        });

        document.addEventListener('mousemove', function(event) {
            if (isPanning) {
                event.preventDefault();
                const dx = event.clientX - lastPanX;
                const dy = event.clientY - lastPanY;

                jm.view.move(dx, dy); // jsMind'in view'ını hareket ettir

                lastPanX = event.clientX;
                lastPanY = event.clientY;
            }
        });

        document.addEventListener('mouseup', function(event) {
            if (isPanning && event.button === 2) {
                isPanning = false;
                mindContainer.classList.remove('grabbing');
                // Eğer devre dışı bırakıldıysa, jsMind'in sürüklemesini tekrar aktif et
                // jm.enable_event_handle(jm.view.e_handle.drag); // Bu satır gerekirse aktif edilebilir
            }
        });

        // Kullanıcı fareyi konteyner dışına çıkarırsa pan'ı durdur
        mindContainer.addEventListener('mouseleave', function() {
            if (isPanning) {
                isPanning = false;
                mindContainer.classList.remove('grabbing');
                 // jm.enable_event_handle(jm.view.e_handle.drag);
            }
        });
    }


    // 5. Tema Değiştirme (Değişiklik yok)
    const themes = ['primary', 'warning', 'danger', 'success', 'info', 'greensea', 'nepal', 'belizehole', 'wetasphalt', 'pmaple'];
    let currentThemeIndex = 0;
    document.getElementById('toggle-theme-btn').addEventListener('click', function() {
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        jm.set_theme(themes[currentThemeIndex]);
    });

    // Pencere yeniden boyutlandırıldığında haritayı yeniden çiz (Değişiklik yok)
    window.addEventListener('resize', () => jm.resize());
    
    // Başlangıç görünümü (Değişiklik yok)
    jm.collapse_all();
    const root = jm.get_root();
    if(root){
        jm.expand_node(root);
    }
});