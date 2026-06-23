/**
 * PawGo i18n — Multilingual Translation Engine
 * Supports: 繁體中文 (zh-HK), English (en), 日本語 (ja)
 */
(function () {
  'use strict';

  // ── Translation Database ──────────────────────────────────
  const T = {
    // ═══ META & SEO ═══
    'meta.title': {
      zh: 'PawGo — 香港首個動態寵物拼車社群 | 種子會員招募中',
      en: 'PawGo — Hong Kong\'s First Dynamic Pet Carpool Community | Seeding Now',
      ja: 'PawGo — 香港初の動的ペットライドシェアコミュニティ | 会員募集中'
    },
    'meta.desc': {
      zh: 'PawGo 是香港首個寵物友善拼車社群平台，讓主人和毛孩一起輕鬆出行。AI 動態拼車、寵物友善小巴、實時追蹤，現正招募種子會員！',
      en: 'PawGo is Hong Kong\'s first pet-friendly carpool community platform. AI-powered dynamic ride sharing, pet-friendly minibus, real-time tracking. Founding members wanted!',
      ja: 'PawGoは香港初のペットフレンドリーなライドシェアコミュニティです。AI動的マッチング、ペット対応ミニバス、リアルタイム追跡。創設会員募集中！'
    },
    'meta.og.title': {
      zh: 'PawGo — 香港首個動態寵物拼車社群 | 種子會員招募中',
      en: 'PawGo — Hong Kong\'s First Dynamic Pet Carpool Community',
      ja: 'PawGo — 香港初の動的ペットライドシェアコミュニティ'
    },
    'meta.og.desc': {
      zh: 'AI 動態拼車 × 寵物友善小巴。讓毛孩從此輕鬆出行，不再為搭車煩惱。現正招募種子會員！',
      en: 'AI Dynamic Carpool × Pet-Friendly Minibus. Stress-free pet travel in Hong Kong. Founding members wanted!',
      ja: 'AI動的ライドシェア × ペット対応ミニバス。ペットとのお出かけをもっと自由に。創設会員募集中！'
    },
    'meta.twitter.title': {
      zh: 'PawGo — 香港首個動態寵物拼車社群',
      en: 'PawGo — Hong Kong\'s First Dynamic Pet Carpool Community',
      ja: 'PawGo — 香港初の動的ペットライドシェアコミュニティ'
    },
    'meta.twitter.desc': {
      zh: 'AI 動態拼車 × 寵物友善小巴。毛孩從此輕鬆出行！',
      en: 'AI Dynamic Carpool × Pet-Friendly Minibus. Travel with your furry friend, stress-free!',
      ja: 'AI動的ライドシェア × ペット対応ミニバス。ペットとの移動がもっと自由に！'
    },

    // ═══ BUS PAGE META ═══
    'meta.bus.title': { zh: 'PawGo — 寵物友善小巴 | 香港寵物拼車平台', en: 'PawGo — Pet-Friendly Minibus | HK Pet Carpool', ja: 'PawGo — ペット対応ミニバス | 香港ペットライドシェア' },
    'meta.bus.desc': { zh: 'PawGo 寵物友善小巴拼車服務 — 28座豪華小巴、AI動態配對、屋苑門口接送、寵物助理隨車。讓毛孩出行從此輕鬆安全。', en: 'PawGo Pet-Friendly Minibus — 28-seat luxury bus, AI matching, doorstep pickup, pet assistant onboard.', ja: 'PawGoペット対応ミニバス——28席ラグジュアリーバス、AIマッチング、マンション前送迎。' },
    'meta.bus.og.title': { zh: 'PawGo — 寵物友善小巴 | 香港寵物拼車平台', en: 'PawGo — Pet-Friendly Minibus | HK Pet Carpool', ja: 'PawGo — ペット対応ミニバス | 香港ペットライドシェア' },
    'meta.bus.og.desc': { zh: '28座豪華小巴、AI動態配對、屋苑門口接送——PawGo 寵物友善小巴，讓毛孩出門從此輕鬆。', en: '28-seat luxury minibus, AI matching, doorstep pickup — PawGo makes pet travel effortless.', ja: '28席ラグジュアリーバス、AIマッチング、マンション前送迎——PawGoでペットの移動が楽に。' },
    'meta.bus.twitter.title': { zh: 'PawGo — 寵物友善小巴 | 香港寵物拼車平台', en: 'PawGo — Pet-Friendly Minibus | HK Pet Carpool', ja: 'PawGo — ペット対応ミニバス | 香港ペットライドシェア' },
    'meta.bus.twitter.desc': { zh: '28座豪華小巴、AI動態配對——PawGo 寵物友善小巴，屋苑門口上車！', en: '28-seat luxury minibus, AI matching — PawGo Pet-Friendly Bus, doorstep pickup!', ja: '28席ラグジュアリーバス、AIマッチング——PawGoペット対応バス、マンション前で乗車！' },

    // ═══ VAN PAGE META ═══
    'meta.van.title': { zh: 'PawGo — Van 仔接送 | 香港寵物點對點接送', en: 'PawGo — Van Shuttle | HK Pet Point-to-Point', ja: 'PawGo — バン送迎 | 香港ペットポイントツーポイント' },
    'meta.van.desc': { zh: 'PawGo Van 仔寵物專車 — 的士拒載毛孩？我哋唔會。7座專車點對點接送，寵物安全帶、籠具、GPS追蹤，大型犬都歡迎。預約制，去獸醫、美容院首選。', en: 'PawGo Van Pet Taxi — Taxis reject your pet? We never do. 7-seat dedicated vehicle, seatbelts, crates, GPS. Large dogs welcome. Perfect for vet & grooming trips.', ja: 'PawGoバンペットタクシー——タクシーに拒否されても、私たちはしません。7人乗り専用車、シートベルト、ケージ、GPS。大型犬歓迎。獣医・トリミングに最適。' },
    'meta.van.og.title': { zh: 'PawGo — Van 仔寵物專車 | 香港寵物點對點接送', en: 'PawGo — Van Pet Taxi | HK Pet Point-to-Point', ja: 'PawGo — バンペットタクシー | 香港ペット送迎' },
    'meta.van.og.desc': { zh: '的士拒載？我哋唔會。7座寵物專車、安全帶+籠具+GPS、專業司機、零事故紀錄——PawGo Van 仔寵物專車。', en: 'Taxis say no? We say yes. 7-seat pet taxi, seatbelts+crates+GPS, pro drivers, zero accidents — PawGo Van Pet Taxi.', ja: 'タクシーがノーと言っても、私たちはイエス。7人乗りペットタクシー、シートベルト+ケージ+GPS、プロドライバー、事故ゼロ——PawGoバンペットタクシー。' },
    'meta.van.twitter.title': { zh: 'PawGo — Van 仔寵物專車 | 香港寵物接送', en: 'PawGo — Van Pet Taxi | HK Pet Transport', ja: 'PawGo — バンペットタクシー | 香港ペット送迎' },
    'meta.van.twitter.desc': { zh: '的士拒載毛孩？我哋唔會。7座寵物專車、安全帶+籠具+GPS！', en: 'Taxis reject pets? We never do. 7-seat pet taxi, seatbelts+crates+GPS!', ja: 'タクシーに拒否されても——7人乗りペットタクシー、シートベルト+ケージ+GPS！' },

    // ═══ CROSS-LINK KEYS ═══
    'bus.vanlink.title': { zh: '的士成日拒載毛孩？試試 Van 仔寵物專車', en: 'Taxis Reject Your Pet? Try Our Van Pet Taxi', ja: 'タクシーに拒否された？バンペットタクシーを試そう' },
    'bus.vanlink.desc': { zh: '7 座寵物專車，點對點直達，配備安全帶、籠具、GPS。大型犬、多寵物家庭、獸醫覆診——我哋全部歡迎，唔會拒載。', en: '7-seat pet taxi, point-to-point direct, with seatbelts, crates, GPS. Large dogs, multi-pet families, vet visits — we welcome all, we never reject.', ja: '7人乗りペットタクシー、直行、シートベルト・ケージ・GPS完備。大型犬、複数ペット、獣医通院——すべて歓迎、拒否しません。' },
    'bus.vanlink.btn': { zh: '🚐 了解寵物專車 →', en: '🚐 Explore Pet Taxi →', ja: '🚐 ペットタクシーを見る →' },
    'van.buslink.title': { zh: '想熱鬧啲、抵玩啲？試試巴士拼車', en: 'Want a Fun, Affordable Group Ride? Try the Bus', ja: 'もっと賑やかでお得に？バスライドシェアを試そう' },
    'van.buslink.desc': { zh: '28 座豪華小巴，AI 動態配對同路寵友，每趟車程都係一次寵物聚會。', en: '28-seat luxury minibus, AI matches pet friends heading the same way — every trip is a pet social.', ja: '28席ラグジュアリーミニバス、AIが同方向のペット友達をマッチング——毎回がペット交流会。' },
    'van.buslink.btn': { zh: '🚌 了解寵物巴士 →', en: '🚌 Explore Pet Bus →', ja: '🚌 ペットバスを見る →' },

    // ═══ HEADER / NAV ═══
    'nav.pain': { zh: '痛點', en: 'Pain Points', ja: '課題' },
    'nav.solution': { zh: '解決方案', en: 'Solution', ja: 'ソリューション' },
    'nav.services': { zh: '我們的服務', en: 'Services', ja: 'サービス' },
    'nav.compare': { zh: '巴士 vs Van', en: 'Bus vs Van', ja: 'バス vs バン' },
    'nav.showcase': { zh: '巴士預覽', en: 'Bus Preview', ja: 'バスプレビュー' },
    'nav.seed': { zh: '種子會員', en: 'Founding Member', ja: '創設会員' },
    'nav.join': { zh: '如何加入', en: 'How to Join', ja: '参加方法' },
    'nav.fund': { zh: '資金安全', en: 'Fund Security', ja: '資金の安全性' },
    'nav.testimonial': { zh: '用戶心聲', en: 'Testimonials', ja: '利用者の声' },
    'nav.impact': { zh: '社會價值', en: 'Social Impact', ja: '社会的価値' },
    'nav.faq': { zh: '常見問題', en: 'FAQ', ja: 'よくある質問' },
    'nav.roadmap': { zh: '發展藍圖', en: 'Roadmap', ja: 'ロードマップ' },
    'nav.bus': { zh: '🚌 寵物巴士', en: '🚌 Pet Bus', ja: '🚌 ペットバス' },
    'nav.van': { zh: '🚐 Van 接送', en: '🚐 Van Shuttle', ja: '🚐 バン送迎' },
    'nav.home': { zh: '🏠 首頁', en: '🏠 Home', ja: '🏠 ホーム' },
    'header.cta': { zh: '成為種子會員 →', en: 'Become a Founding Member →', ja: '創設会員になる →' },

    // ═══ HERO ═══
    'hero.tag': { zh: '🐶 種子會員限時招募 · 限額 500 位', en: '🐶 Founding Member Recruitment · 500 Spots Only', ja: '🐶 創設会員限定募集中 · 先着500名様' },
    'hero.h1.line1': { zh: '讓每隻毛孩', en: 'Let Every Furry Friend', ja: 'すべてのペットに' },
    'hero.h1.line2': { zh: '都能出發探索世界', en: 'Explore the World', ja: '世界を探検する自由を' },
    'hero.desc': {
      zh: 'PawGo 是香港首個專為寵物主打造的動態拼車社群。不再被的士拒載、不再週末無處可去——我們讓每次出行都安全、方便，更讓毛孩們在路上結識新朋友。',
      en: 'PawGo is Hong Kong\'s first dynamic carpool community built for pet owners. No more taxi refusals, no more weekend travel struggles — we make every trip safe, convenient, and full of new furry friendships along the way.',
      ja: 'PawGoは香港初のペットオーナー向け動的ライドシェアコミュニティです。タクシー乗車拒否も、週末のお出かけ先不足ももう悩まない。安全で便利、そして道中で新しいペット友達ができる旅を提供します。'
    },
    'hero.btn.primary': { zh: '🐾 成為創始種子會員', en: '🐾 Become a Founding Member', ja: '🐾 創設会員になる' },
    'hero.btn.secondary': { zh: '了解我們的故事', en: 'Our Story', ja: 'ストーリーを見る' },
    'hero.stat1.h4': { zh: '60%+', en: '60%+', ja: '60%以上' },
    'hero.stat1.p': { zh: '寵物主的士拒載經歷', en: 'Pet owners rejected by taxis', ja: 'タクシー乗車拒否経験者' },
    'hero.stat2.h4': { zh: '40萬+', en: '400K+', ja: '40万+' },
    'hero.stat2.p': { zh: '香港貓狗總數', en: 'Cats & dogs in Hong Kong', ja: '香港の犬猫総数' },
    'hero.stat3.h4': { zh: '3–8分鐘', en: '3–8 min', ja: '3〜8分' },
    'hero.stat3.p': { zh: '步行即達上車點', en: 'Walk to pickup point', ja: '乗車場所まで徒歩' },
    'hero.stat4.h4': { zh: '500位', en: '500', ja: '500名' },
    'hero.stat4.p': { zh: '創始種子會員名額', en: 'Founding member spots', ja: '創設会員枠' },

    // ═══ HERO DUAL-SERVICE CARDS ═══
    'hero.svc.bus.subtitle': { zh: '寵物友善小巴', en: 'Pet-Friendly Minibus', ja: 'ペット対応ミニバス' },
    'hero.svc.bus.h3': { zh: '多人拼車，熱鬧抵玩', en: 'Group Ride-Share, Fun & Affordable', ja: 'グループライドシェア、楽しくお得に' },
    'hero.svc.bus.p': { zh: '28 座豪華小巴，AI 動態配對同路寵友。一人兩座、隨車助理，每趟車程都係一次寵物聚會。', en: '28-seat luxury minibus with AI-powered ride matching. Two seats per person, onboard pet assistant — every trip is a pet social gathering.', ja: '28席のラグジュアリーミニバス、AIが同方向のペット友達をマッチング。1名様2席、車内ペットアシスタント付き——毎回の乗車がペット交流会。' },
    'hero.svc.bus.tag1': { zh: '28 座', en: '28 Seats', ja: '28席' },
    'hero.svc.bus.tag2': { zh: 'AI 配對', en: 'AI Matching', ja: 'AIマッチング' },
    'hero.svc.bus.tag3': { zh: '社群出行', en: 'Social Rides', ja: 'ソーシャル乗車' },
    'hero.svc.van.subtitle': { zh: 'Van 仔點對點接送', en: 'Van Point-to-Point Shuttle', ja: 'バン ポイントツーポイント送迎' },
    'hero.svc.van.h3': { zh: '私密靈活，一家專享', en: 'Private & Flexible, Just for You', ja: 'プライベート＆フレキシブル、あなただけに' },
    'hero.svc.van.p': { zh: '7 座小型廂型車，點對點直達。適合小家庭、個別預約——去獸醫、美容院、私密出行，更靈活更自在。', en: '7-seat compact van, point-to-point direct service. Perfect for small families and individual bookings — vet visits, grooming, private outings with total flexibility.', ja: '7人乗りコンパクトバン、ポイントツーポイント直行。小さなご家族や個人予約に最適——獣医、トリミング、プライベートなお出かけに。' },
    'hero.svc.van.tag1': { zh: '7 座', en: '7 Seats', ja: '7席' },
    'hero.svc.van.tag2': { zh: '點對點', en: 'Point-to-Point', ja: '直行' },
    'hero.svc.van.tag3': { zh: '私密出行', en: 'Private Ride', ja: 'プライベート乗車' },
    'hero.subtitle': { zh: '揀你嘅出行方式：Van 仔寵物專車即時接送，或者加入小巴創始會員，一齊改變毛孩出行。', en: 'Choose your ride: Van Pet Taxi for instant pickup, or join Bus Founding Members to transform pet travel together.', ja: '移動手段を選んで：バンペットタクシーで即時送迎、またはバス創設会員になってペットの移動を変えましょう。' },

    // ═══ VAN PAGE HERO ═══
    'hero.van.h1.line1': { zh: '寵物優先，', en: 'Pet First,', ja: 'ペットファースト、' },
    'hero.van.h1.line2': { zh: '毛孩專屬專車', en: 'VIP Ride for Your Pet', ja: 'ペット専用VIP送迎' },
    'hero.van.desc': {
      zh: '你試過攔的士俾司機拒載毛孩未？我哋都試過——所以 PawGo Van 仔寵物專車誕生咗。7 座專車，點對點直達你指定嘅目的地，配備寵物安全帶、專用籠具、GPS 即時追蹤。無論係大型犬、多寵物家庭、定係定期去獸醫覆診——我哋唔會拒載，只會準時到。想熱鬧拼車？我哋仲有 <a href="bus.html" style="color:#FFD166;text-decoration:underline;">寵物友善小巴</a>。',
      en: 'Ever been rejected by a taxi because of your pet? So have we — that\'s why PawGo Van Pet Taxi was born. 7-seat dedicated vehicle, point-to-point direct to your destination, equipped with pet seatbelts, crates, and real-time GPS tracking. Large dogs, multi-pet families, regular vet visits — we never say no, we just show up on time. Prefer a fun group ride? We also have <a href="bus.html" style="color:#FFD166;text-decoration:underline;">Pet-Friendly Minibus</a>.',
      ja: 'ペットのせいでタクシーに乗車拒否されたことはありますか？私たちもです——だからPawGoバンペットタクシーが生まれました。7人乗り専用車、指定の目的地まで直行、ペット用シートベルト、ケージ、GPSリアルタイム追跡を完備。大型犬、複数ペット家庭、定期的な獣医通院——私たちは決して拒否しません、時間通りにお迎えに参ります。賑やかなグループ乗車がお好みですか？<a href="bus.html" style="color:#FFD166;text-decoration:underline;">ペット対応ミニバス</a>もあります。'
    },
    'hero.van.btn.primary': { zh: '🚐 了解寵物專車服務', en: '🚐 Explore Pet Taxi Service', ja: '🚐 ペットタクシーを見る' },
    'hero.van.stat1.h4': { zh: '寵物專車', en: 'Pet-Only Vehicle', ja: 'ペット専用車' },
    'hero.van.stat1.p': { zh: '大型犬都歡迎 · 唔拒載', en: 'Large Dogs Welcome · Never Reject', ja: '大型犬も歓迎 · 拒否なし' },
    'hero.van.stat2.h4': { zh: '點對點', en: 'Point-to-Point', ja: 'ポイントツーポイント' },
    'hero.van.stat2.p': { zh: '直達唔兜路', en: 'Direct, No Detours', ja: '直行、寄り道なし' },
    'hero.van.stat3.h4': { zh: '安全裝備', en: 'Safety Gear', ja: '安全装備' },
    'hero.van.stat3.p': { zh: '寵物安全帶 · 籠具 · GPS', en: 'Seatbelts · Crates · GPS', ja: 'シートベルト · ケージ · GPS' },
    'hero.van.stat4.h4': { zh: '零事故', en: 'Zero Accidents', ja: '事故ゼロ' },
    'hero.van.stat4.p': { zh: '專業司機 · 完美安全紀錄', en: 'Pro Drivers · Perfect Record', ja: 'プロドライバー · 完璧な記録' },

    // ═══ SPLIT PAGE CARDS ═══
    'split.bus.badge': { zh: '創始會員招募', en: 'Founding Member', ja: '創設会員募集中' },
    'split.bus.h2': { zh: '寵物友善小巴', en: 'Pet-Friendly Minibus', ja: 'ペット対応ミニバス' },
    'split.bus.desc': { zh: '限額 500 位創始種子會員，享終身折扣、新路線投票權、專屬社群。28 座豪華小巴，AI 配對同路寵友——成為 PawGo 開創者，同我哋一齊改變毛孩出行。', en: 'Only 500 founding member spots — lifetime discounts, new route voting rights, exclusive community. 28-seat luxury minibus, AI matching — be a PawGo pioneer and change pet travel with us.', ja: '創設会員枠は500名限定——生涯割引、新路線投票権、専用コミュニティ。28席のラグジュアリーミニバス、AIマッチング——PawGoのパイオニアとして、ペットの移動を変えましょう。' },
    'split.bus.btn': { zh: '🐾 成為創始會員 →', en: '🐾 Become a Founding Member →', ja: '🐾 創設会員になる →' },
    'split.van.badge': { zh: '寵物專車', en: 'Pet Taxi', ja: 'ペットタクシー' },
    'split.van.h2': { zh: 'Van 仔寵物專車接送', en: 'Van Pet Taxi Service', ja: 'バン ペットタクシー' },
    'split.van.desc': { zh: '的士拒載毛孩？我哋唔會。7 座寵物專車，點對點直達，配備安全帶、籠具、GPS。大型犬、多寵物家庭、獸醫覆診——全部歡迎。', en: 'Taxi rejected your pet? We never do. 7-seat pet taxi, point-to-point direct, equipped with seatbelts, crates, GPS. Large dogs, multi-pet families, vet visits — all welcome.', ja: 'タクシーにペットを拒否された？私たちはしません。7人乗りペットタクシー、直行、シートベルト・ケージ・GPS完備。大型犬、複数ペット、獣医通院——すべて歓迎。' },
    'split.van.btn': { zh: '🚐 了解寵物專車 →', en: '🚐 Explore Pet Taxi →', ja: '🚐 ペットタクシーを見る →' },

    // ═══ VISION BAND ═══
    'vision.h2': { zh: '想像一下這個週末', en: 'Imagine This Weekend', ja: '次の週末を想像してみてください' },
    'vision.p': {
      zh: 'App 一鍵預約，樓下步行 5 分鐘上車。毛孩在寬敞的豪華座椅上安坐，身邊還有隨車寵物助理照顧。到達寵物友善商場後，WhatsApp 群組裡已經約好了下次的狗公園聚會。',
      en: 'One-tap booking on the app, a 5-minute walk to your pickup point. Your pet relaxes in a spacious luxury seat, cared for by an on-board pet assistant. When you arrive at the pet-friendly mall, the WhatsApp group has already planned the next dog park meetup.',
      ja: 'アプリでワンタップ予約、徒歩5分で乗車場所へ。ペットは広々としたラグジュアリーシートでくつろぎ、車内ペットアシスタントがお世話します。ペットフレンドリーなモールに到着したら、WhatsAppグループですでに次のドッグパーク集会の計画が。'
    },
    'vision.tag1': { zh: '一人兩座', en: '1 Person, 2 Seats', ja: '1名様2席' },
    'vision.tag2': { zh: 'AI 動態配對', en: 'AI Dynamic Matching', ja: 'AI動的マッチング' },
    'vision.tag3': { zh: '寵物助理隨車', en: 'On-board Pet Assistant', ja: '車内ペットアシスタント' },
    'vision.tag4': { zh: 'WhatsApp 社群', en: 'WhatsApp Community', ja: 'WhatsAppコミュニティ' },
    'vision.tag5': { zh: '100% 保證上車', en: '100% Ride Guarantee', ja: '100%乗車保証' },

    // ═══ PAIN POINTS ═══
    'pain.badge': { zh: '我們為何出發', en: 'Why We Started', ja: '私たちの出発点' },
    'pain.title': { zh: '每位香港寵物主，都經歷過這些瞬間', en: 'Every Hong Kong Pet Owner Has Been Here', ja: '香港のペットオーナーなら誰もが経験したこと' },
    'pain.lead': {
      zh: '如果你也曾因為帶寵物而被的士拒載、週末不知帶毛孩去哪裡、想讓毛孩交朋友卻沒有機會——你並不孤單。這些是香港 40 萬寵物家庭每天都在面對的真實困境。',
      en: 'If you\'ve been rejected by taxis because of your pet, struggled to find weekend destinations, or wished your pet could make friends — you\'re not alone. These are the real struggles faced by 400,000 pet families in Hong Kong every day.',
      ja: 'ペットを連れているという理由でタクシーに断られたこと、週末の行き先に困ったこと、ペットに友達を作ってあげたいと思ったこと——あなただけではありません。これは香港の40万のペット家族が毎日直面している現実です。'
    },
    'pain1.icon': { zh: '🚫', en: '🚫', ja: '🚫' },
    'pain1.h3': { zh: '的士拒載，習以為常', en: 'Taxi Refusals — All Too Common', ja: 'タクシー乗車拒否は日常茶飯事' },
    'pain1.stat': { zh: '超過 60% 寵物主曾被拒載', en: 'Over 60% of pet owners rejected', ja: '60%以上の飼い主が乗車拒否を経験' },
    'pain1.p': {
      zh: '香港的士對寵物的態度令人無奈——司機可以合法拒載帶寵物的乘客。下雨天、趕去獸醫、想帶毛孩出門，卻在路邊等了半個鐘也攔不到一輛願意載你的車。',
      en: 'Hong Kong taxi drivers can legally refuse passengers with pets. Rain or shine, rushing to the vet or just wanting a day out — you wait by the roadside for half an hour, unable to find a single willing driver.',
      ja: '香港のタクシー運転手はペット連れの乗客を合法的に拒否できます。雨の日も、獣医に急ぐ時も、ただお出かけしたい時も——30分待ってもペットを乗せてくれる車は見つかりません。'
    },
    'pain2.icon': { zh: '📅', en: '📅', ja: '📅' },
    'pain2.h3': { zh: '寵物友善交通，選擇極少', en: 'Pet-Friendly Transport — Very Few Options', ja: 'ペット対応交通機関の選択肢が極めて少ない' },
    'pain2.stat': { zh: '專線巴士班次稀疏，路線僵化', en: 'Limited schedules, rigid routes', ja: '運行本数が少なく、路線も限定的' },
    'pain2.p': {
      zh: '現有的寵物巴士路線少、班次疏、目的地有限。你想去西九文化區，巴士卻只到某個指定商場；你想下午出發，班次卻只有早上那一班。靈活性幾乎為零。',
      en: 'Existing pet bus routes are few, infrequent, and limited in destinations. You want to go to West Kowloon Cultural District, but the bus only goes to a specific mall. You want an afternoon trip, but there\'s only a morning slot. Zero flexibility.',
      ja: '既存のペットバスは路線が少なく、運行本数もまばらで、目的地も限られています。西九龍文化区に行きたいのに、バスは特定のショッピングモールまでしか行かない。午後出発したいのに、運行は朝の1本のみ。柔軟性はほぼゼロです。'
    },
    'pain3.icon': { zh: '😔', en: '😔', ja: '😔' },
    'pain3.h3': { zh: '毛孩社交，有心無力', en: 'Pet Socialization — So Hard to Arrange', ja: 'ペットの社会化、したくてもできない' },
    'pain3.stat': { zh: '缺乏安全、有組織的寵物社交場景', en: 'No safe, organized pet social scene', ja: '安全で組織的なペット社交の場がない' },
    'pain3.p': {
      zh: '你知道毛孩需要社交，但狗公園遇到陌生狗又擔心安全。你想認識同樣養寵物的鄰居，卻沒有合適的場合。寵物主之間的社群感，在香港幾乎是空白。',
      en: 'You know your pet needs socialization, but meeting unfamiliar dogs at the park feels risky. You want to connect with fellow pet-owning neighbours, but there\'s no proper venue. A sense of community among pet owners is almost nonexistent in Hong Kong.',
      ja: 'ペットに社会化が必要なのはわかっていても、ドッグパークで知らない犬に会うのは不安。同じくペットを飼う隣人と知り合いたくても、適切な場がありません。香港ではペットオーナー同士のコミュニティ感覚がほとんど空白です。'
    },

    // ═══ SOLUTION ═══
    'solution.badge': { zh: '我們的答案', en: 'Our Answer', ja: '私たちの答え' },
    'solution.title': { zh: '不只是拼車，而是一個寵物生活社群', en: 'More Than Carpool — A Pet Lifestyle Community', ja: 'ライドシェアを超えて、ペットライフスタイルコミュニティへ' },
    'solution.lead': {
      zh: 'PawGo 從根本上重新設計了寵物出行的每一個環節——不只是從 A 點到 B 點，而是讓旅程本身成為寵物和主人共同的快樂體驗。',
      en: 'PawGo has redesigned every aspect of pet travel from the ground up — not just point A to point B, but making the journey itself a joyful shared experience for both pet and owner.',
      ja: 'PawGoはペット移動のあらゆる側面を根本から再設計しました——A地点からB地点へ移動するだけでなく、旅そのものをペットと飼い主の共有する喜びの体験に変えます。'
    },
    'sol1.h3': { zh: 'AI 動態拼車，靈活到極致', en: 'AI Dynamic Carpool — Ultimate Flexibility', ja: 'AI動的ライドシェア — 究極の柔軟性' },
    'sol1.p': {
      zh: '不是固定的巴士路線，而是根據用戶需求即時生成最優路線和「虛擬站點」。當同一時段、同一方向的預約達到 8 人，行程自動確認。你家樓下就是上車點——平均步行只需 3–8 分鐘。',
      en: 'Not a fixed bus route, but optimal routes and "virtual stops" generated in real-time based on user demand. When 8 bookings align in time and direction, the trip auto-confirms. Your pickup point is right downstairs — averaging just a 3–8 minute walk.',
      ja: '固定路線ではなく、ユーザーの需要に基づいて最適ルートと「バーチャル停車所」をリアルタイム生成。同じ時間帯・方向の予約が8名に達すると自動確定。乗車場所はあなたのマンションのすぐ下——平均徒歩3〜8分です。'
    },
    'sol2.h3': { zh: '一人兩座，豪華出行', en: 'One Person, Two Seats — Luxury Travel', ja: '1名様2席 — ラグジュアリーな移動' },
    'sol2.p': {
      zh: '不是擁擠的公共交通，而是 28 座豪華小巴，每位乘客享雙座位——你和毛孩都有足夠的空間。車上配置寵物安全帶、清潔墊、飲水設備，還有隨車寵物助理全程照顧。',
      en: 'Not crowded public transport, but a 28-seat luxury minibus where every passenger gets two seats — plenty of space for you and your pet. Pet seatbelts, cleaning mats, water stations on board, plus a dedicated pet assistant throughout the journey.',
      ja: '混雑した公共交通機関ではなく、28席のラグジュアリーミニバスで1名様あたり2席——あなたとペットに十分なスペースを確保。ペット用シートベルト、清掃マット、給水設備を完備し、車内ペットアシスタントが終始お世話します。'
    },
    'sol3.h3': { zh: '每趟行程，就是一次社群聚會', en: 'Every Trip Is a Community Gathering', ja: '毎回の乗車がコミュニティの集いに' },
    'sol3.p': {
      zh: '每趟車程自動建立 WhatsApp 群組。車上認識的寵物朋友，下車後還能繼續交流。從拼車到狗公園聚會、從鄰居到寵友——一個活躍的寵物社群由此誕生。',
      en: 'Every trip auto-creates a WhatsApp group. The furry friends you meet on board stay connected long after the ride. From carpool to dog park meetups, from neighbours to pet buddies — a vibrant community is born.',
      ja: '毎回の乗車でWhatsAppグループが自動生成。車内で出会ったペット友達とは、降車後も交流が続きます。ライドシェアからドッグパーク集会へ、隣人からペット仲間へ——活気あるコミュニティがここから生まれます。'
    },
    'sol4.h3': { zh: '寵物地圖 × 商場聯動', en: 'Pet Map × Mall Integration', ja: 'ペットマップ × 商業施設連携' },
    'sol4.p': {
      zh: '我們不只帶你去，還告訴你到了能做什麼。整合全港寵物友善地點地圖，直達寵物友善商場、獸醫診所、美容店——下車就是目的地，旅程無縫連接。',
      en: 'We don\'t just take you there — we tell you what to do once you arrive. An integrated map of all pet-friendly venues in Hong Kong, taking you directly to pet-friendly malls, vet clinics, and grooming shops — your destination is right at the doorstep.',
      ja: 'お連れするだけでなく、到着後に何ができるかもお伝えします。香港全土のペットフレンドリー施設マップを統合し、ペット対応モール、動物病院、トリミングサロンへ直行——降車したらそこが目的地、シームレスな旅を。'
    },

    // ═══ OUR SERVICES ═══
    'services.badge': { zh: '我們的服務', en: 'Our Services', ja: 'サービス内容' },
    'services.title': { zh: '兩種出行方式，隨你所需', en: 'Two Travel Options, Your Choice', ja: '2つの移動手段、あなた次第' },
    'services.lead': {
      zh: '同一班寵物愛好者出發，揀巴士；想同家人毛孩私密出行，揀 Van。兩種方式同一標準：安全、乾淨、寵物優先。',
      en: 'Heading out with fellow pet lovers? Take the bus. Want a private trip with family and pets? Choose the Van. Same high standards: safe, clean, pet-first.',
      ja: 'ペット好き仲間と一緒に出かけたいならバス。家族とペットだけでプライベートに移動したいならバン。どちらも同じ高基準：安全、清潔、ペット優先。'
    },
    'services.bus.h3': { zh: '寵物友善小巴 · 拼車出行', en: 'Pet-Friendly Minibus · Group Ride', ja: 'ペット対応ミニバス · グループ乗車' },
    'services.bus.p': {
      zh: '28 座豪華小巴，一人兩座，空間闊落。每趟行程由 AI 動態配對同一方向嘅乘客，樓下屋苑門口上車。車上配備寵物安全帶、防水清潔墊、飲水設備，隨車寵物助理全程照顧。適合：週末去寵物友善商場、狗公園聚會、寵物展活動。',
      en: '28-seat luxury minibus, two seats per person, spacious and comfortable. AI dynamically matches passengers heading the same way — pickup right at your estate entrance. Equipped with pet seatbelts, waterproof cleaning mats, water stations, and an onboard pet assistant. Ideal for: weekend pet-friendly mall trips, dog park meetups, pet expos.',
      ja: '28席のラグジュアリーミニバス、1名様2席でゆったり空間。AIが同方向の乗客を動的マッチング——マンションのすぐ下から乗車。ペット用シートベルト、防水マット、給水設備、車内ペットアシスタント完備。ペット対応モール、ドッグパーク集会、ペット展示会に最適。'
    },
    'services.van.h3': { zh: 'Van 仔寵物專車 · 寵物優先接送', en: 'Van Pet Taxi · Pet-First Transport', ja: 'バンペットタクシー · ペット優先送迎' },
    'services.van.p': {
      zh: '7 座寵物專車，點對點直達你指定嘅目的地。的士成日拒載毛孩？我哋唔會——無論係大型犬、多寵物家庭，定係需要定期去獸醫覆診嘅毛孩，全部歡迎。車廂配備寵物專用安全帶、加固籠具、即時 GPS 定位追蹤。司機全部受過寵物護理訓練，持有寵物急救證書，全程照顧毛孩狀態。<br><br><strong>最適合：</strong>帶毛孩睇獸醫（唔使再擔心攔唔到的士）、去寵物美容院、多寵物家庭出行、年長或特殊需要毛孩。',
      en: '7-seat pet-exclusive vehicle, point-to-point direct to your destination. Taxis keep rejecting your pet? We never do — large dogs, multi-pet families, regular vet visits — all welcome. Equipped with pet-specific seatbelts, reinforced crates, and real-time GPS tracking. All drivers are trained in pet care and hold pet first-aid certifications.<br><br><strong>Perfect for:</strong> Vet visits (no more taxi anxiety), grooming trips, multi-pet families, elderly or special-needs pets.',
      ja: '7人乗りペット専用車、指定の目的地まで直行。タクシーにペットを拒否され続けていませんか？私たちはしません——大型犬、複数ペット家庭、定期的な獣医通院——すべて歓迎。ペット用シートベルト、強化ケージ、GPSリアルタイム追跡を完備。全ドライバーがペットケア訓練を受け、ペット応急救護資格を保有しています。<br><br><strong>最適な用途：</strong>獣医通院（タクシー拒否の心配なし）、トリミング、複数ペット家庭、高齢や特別なケアが必要なペット。'
    },
    'services.safety.h3': { zh: '所有車型，寵物安全第一', en: 'All Vehicles — Pet Safety First', ja: '全車両 — ペット安全第一' },
    'services.safety.p': {
      zh: '無論係巴士定 Van 仔，全部使用易清潔防水物料舖設車廂，配備專業通風系統確保空氣流通。每部車均有持牌寵物助理跟車，持有寵物急救證書，全程監察毛孩狀態。寵物責任保險涵蓋每趟行程。',
      en: 'Whether bus or van, all vehicles feature easy-clean waterproof interiors and professional ventilation systems for optimal air circulation. Every vehicle has a licensed pet assistant onboard, certified in pet first aid, monitoring pets throughout the journey. Pet liability insurance covers every trip.',
      ja: 'バスでもバンでも、全車両にイージークリーン防水内装を採用し、プロ仕様の換気システムで最適な空気循環を確保。全車両にペット応急処置認定資格を持つ専任ペットアシスタントが同乗し、移動中ずっとペットを見守ります。ペット賠償責任保険が全行程をカバー。'
    },
    'services.community.h3': { zh: '每趟車程，建立社群連結', en: 'Every Ride Builds Community', ja: '毎回の乗車がコミュニティに' },
    'services.community.p': {
      zh: '巴士拼車會自動建立 WhatsApp 群組，車上識到嘅寵物朋友落車後仲可以繼續交流。Van 仔雖然私密，但你一樣可以加入 PawGo 會員社群，參與狗公園聚會、寵物嘉年華等線下活動。',
      en: 'Bus ride-sharing auto-creates WhatsApp groups so the pet friends you meet on board stay connected after the ride. Van rides are private, but you can still join the PawGo member community for dog park meetups, pet carnivals, and offline events.',
      ja: 'バスのライドシェアではWhatsAppグループが自動生成され、車内で出会ったペット友達と降車後も交流が続きます。バンはプライベートですが、PawGo会員コミュニティに参加してドッグパーク集会やペットカーニバルなどのオフラインイベントに参加できます。'
    },

    // ═══ BUS VS VAN COMPARISON ═══
    'compare.badge': { zh: '巴士 vs Van', en: 'Bus vs Van', ja: 'バス vs バン' },
    'compare.title': { zh: '揀邊款？睇你需要咩', en: 'Which One? It Depends on Your Needs', ja: 'どっち？ニーズ次第です' },
    'compare.lead': {
      zh: '兩種方式各有所長，冇話邊個一定好啲——睇你今次出門嘅目的同心情。但無論揀邊款，都係同一套高標準：持牌車隊、易清潔車廂、通風良好、寵物助理隨車。',
      en: 'Each has its strengths — neither is universally better. It depends on your destination and mood. But whichever you choose, the same high standards apply: licensed fleet, easy-clean interiors, great ventilation, and an onboard pet assistant.',
      ja: 'それぞれに強みがあり、どちらかが絶対的に優れているわけではありません。目的地と気分次第です。でもどちらを選んでも同じ高基準：認可車両、イージークリーン内装、優れた換気、車内ペットアシスタント付き。'
    },
    'compare.bus.h3': { zh: '寵物友善小巴', en: 'Pet-Friendly Minibus', ja: 'ペット対応ミニバス' },
    'compare.bus.ideal': { zh: '適合多人出行', en: 'Ideal for Group Trips', ja: 'グループ旅行に最適' },
    'compare.bus.li1': { zh: '28 座豪華小巴，一人兩座', en: '28-seat luxury minibus, 2 seats per person', ja: '28席ラグジュアリーミニバス、1名様2席' },
    'compare.bus.li2': { zh: 'AI 動態配對，同方向拼車', en: 'AI dynamic matching, same-direction ride-sharing', ja: 'AI動的マッチング、同方向ライドシェア' },
    'compare.bus.li3': { zh: '每程自動建立 WhatsApp 群組', en: 'Auto-created WhatsApp group per trip', ja: '乗車ごとにWhatsAppグループ自動生成' },
    'compare.bus.li4': { zh: '適合多人出行、週末聚會', en: 'Perfect for group outings, weekend gatherings', ja: 'グループ外出、週末の集まりに最適' },
    'compare.bus.li5': { zh: '更經濟，一齊搭更抵', en: 'More economical — cheaper together', ja: 'より経済的——一緒ならもっとお得' },
    'compare.bus.li6': { zh: '沿途停靠多個屋苑站點', en: 'Multiple estate stops along the route', ja: 'ルート沿いの複数マンションに停車' },
    'compare.van.h3': { zh: 'Van 仔寵物專車', en: 'Van Pet Taxi', ja: 'バンペットタクシー' },
    'compare.van.ideal': { zh: '適合寵物專車出行', en: 'Ideal for Pet-Only Trips', ja: 'ペット専用移動に最適' },
    'compare.van.li1': { zh: '7 座寵物專車，的士拒載我哋唔會', en: '7-seat pet taxi, we never reject like taxis do', ja: '7人乗りペットタクシー、タクシーのような拒否はなし' },
    'compare.van.li2': { zh: '點對點直達，唔兜路', en: 'Point-to-point direct, no detours', ja: 'ポイントツーポイント直行、寄り道なし' },
    'compare.van.li3': { zh: '配備寵物安全帶、籠具、GPS 追蹤', en: 'Pet seatbelts, crates, GPS tracking', ja: 'ペット用シートベルト、ケージ、GPS追跡' },
    'compare.van.li4': { zh: '特別適合睇獸醫、美容院、大型犬', en: 'Perfect for vet, grooming trips, large dogs', ja: '獣医、トリミング、大型犬に最適' },
    'compare.van.li5': { zh: '專業司機，受過寵物護理訓練', en: 'Pro drivers trained in pet care', ja: 'ペットケア訓練を受けたプロドライバー' },
    'compare.van.li6': { zh: '預約制，時間完全由你安排', en: 'Appointment-based, fully flexible timing', ja: '予約制、時間は完全にあなた次第' },
    'compare.shared.label': { zh: '🚐🚌 不論巴士定 Van，全部配備：', en: '🚐🚌 Whether Bus or Van, All Equipped With:', ja: '🚐🚌 バスでもバンでも、すべてに装備：' },
    'compare.shared.1': { zh: '易清潔防水車廂物料', en: 'Easy-clean waterproof interior', ja: 'イージークリーン防水内装' },
    'compare.shared.2': { zh: '專業通風系統', en: 'Professional ventilation system', ja: 'プロ仕様換気システム' },
    'compare.shared.3': { zh: '持牌寵物助理隨車', en: 'Licensed pet assistant onboard', ja: '資格保有ペットアシスタント同乗' },
    'compare.shared.4': { zh: '寵物責任保險保障', en: 'Pet liability insurance coverage', ja: 'ペット賠償責任保険' },
    'compare.shared.5': { zh: '飲水設備', en: 'Water station', ja: '給水設備' },
    'compare.shared.6': { zh: '寵物安全帶 / 防護扣', en: 'Pet seatbelt / safety buckle', ja: 'ペット用シートベルト/安全バックル' },
    'compare.shared.title': { zh: '共享配備', en: 'Shared Equipment', ja: '共通装備' },

    // ═══ ADVANTAGES ═══
    'advantages.badge': { zh: '服務優勢', en: 'Our Advantages', ja: 'サービスの強み' },
    'advantages.title': { zh: '點解揀 PawGo？', en: 'Why Choose PawGo?', ja: 'なぜPawGoを選ぶのか？' },
    'advantages.lead': {
      zh: '我哋唔單只提供交通工具——每一趟車程都係精心設計嘅寵物友善體驗。以下係 PawGo 與眾不同嘅地方。',
      en: 'We don\'t just provide transport — every trip is a carefully designed pet-friendly experience. Here\'s what makes PawGo different.',
      ja: '単なる交通手段ではありません——毎回の乗車は綿密に設計されたペットフレンドリー体験です。PawGoが他と違う理由はここにあります。'
    },
    'advantages.1.h3': { zh: '持牌車隊，安全可靠', en: 'Licensed Fleet, Safe & Reliable', ja: '認可車両、安全・信頼' },
    'advantages.1.p': {
      zh: '全部車輛持香港運輸署 A01 牌照合法營運，定期檢驗保養。車廂採用易清潔防水物料，通風系統專業設計，確保毛孩旅途舒適衛生。',
      en: 'All vehicles hold Hong Kong Transport Department A01 license for legal operation with regular inspection and maintenance. Easy-clean waterproof interior and professional ventilation ensure a comfortable, hygienic journey for your furry friend.',
      ja: '全車両が香港運輸署のA01ライセンスを取得し合法的に運行、定期点検・整備済み。イージークリーン防水内装とプロ仕様の換気システムで、快適で衛生的な旅を提供します。'
    },
    'advantages.2.h3': { zh: '專業寵物助理團隊', en: 'Professional Pet Assistant Team', ja: 'プロのペットアシスタントチーム' },
    'advantages.2.p': {
      zh: '每部車均有持牌寵物助理跟車，持有寵物急救證書。上車前評估寵物狀態，車程中全程照顧、實時拍照分享俾主人。佢哋先係毛孩最鍾意嘅人。',
      en: 'Every vehicle has a licensed pet assistant onboard, certified in pet first aid. Pre-boarding pet assessment, full-journey care, and real-time photo sharing with owners. They\'re who pets love most.',
      ja: '全車両にペット応急処置認定資格を持つ専任ペットアシスタントが同乗。乗車前のペット状態評価、全程のケア、飼い主へのリアルタイム写真共有。彼らこそペットに一番愛される存在です。'
    },
    'advantages.3.h3': { zh: '屋苑門口接送', en: 'Doorstep Pickup at Your Estate', ja: 'マンション前で送迎' },
    'advantages.3.p': {
      zh: '虛擬站點覆蓋全港主要屋苑，平均步行 3–8 分鐘就到上車點。唔使去指定巴士站，唔使喺街頭攔車，我哋嚟到你樓下等你。',
      en: 'Virtual stops cover major estates across Hong Kong, averaging just 3–8 minutes\' walk to your pickup point. No need to go to designated bus stops or hail on the street — we come to your doorstep.',
      ja: 'バーチャル停車所が香港の主要マンションをカバー、乗車地点まで平均徒歩3〜8分。指定のバス停に行く必要も、路上でタクシーを拾う必要もありません——あなたのマンションの下でお待ちしています。'
    },
    'advantages.4.h3': { zh: 'AI 動態配對，靈活高效', en: 'AI Dynamic Matching, Flexible & Efficient', ja: 'AI動的マッチング、柔軟で効率的' },
    'advantages.4.p': {
      zh: '唔係固定路線，而係根據預約需求即時生成最優路線。同一時段同方向夠人就自動成團，減少空載浪費，更環保更高效。',
      en: 'Not fixed routes — we generate optimal routes in real-time based on booking demand. Enough people heading the same direction at the same time and a trip auto-forms, reducing empty runs and waste — greener and more efficient.',
      ja: '固定路線ではなく、予約需要に基づいてリアルタイムで最適ルートを生成。同時刻・同方向の人数が揃えば自動的にグループが成立し、空車運行を削減——より環境に優しく効率的です。'
    },
    'advantages.5.h3': { zh: '資金安全保障', en: 'Fund Security Guarantee', ja: '資金安全保証' },
    'advantages.5.p': {
      zh: '會員費存入獨立信託銀行帳戶，與公司營運資金分開管理。每月公開帳目，清晰退款政策寫入會員協議，受法律保障。',
      en: 'Membership fees deposited in an independent trust bank account, separated from company operating funds. Monthly public accounting, clear refund policy written into the membership agreement, legally protected.',
      ja: '会費は独立した信託銀行口座に預けられ、会社の運営資金とは分離管理。毎月の会計公開、明確な返金ポリシーが会員契約に明記され、法的に保護されています。'
    },
    'advantages.6.h3': { zh: '乘車即捐款', en: 'Ride = Donation', ja: '乗車が寄付に' },
    'advantages.6.p': {
      zh: '每次乘車自動捐出 HK$10 俾本地動物慈善機構。你嘅每次出行，都同時幫助緊等待一個家嘅流浪毛孩。',
      en: 'Every ride automatically donates HK$10 to local animal charities. Every trip you take helps a stray furry friend waiting for a home.',
      ja: '乗車ごとに自動でHK$10を地元の動物慈善団体に寄付。あなたの毎回の移動が、家を待つ野良のペットを助けています。'
    },

    // ═══ TARGET AUDIENCE ═══
    'target.badge': { zh: '我們的用戶', en: 'Our Users', ja: '対象ユーザー' },
    'target.title': { zh: '為在意生活品質的寵物家庭而生', en: 'Made for Pet Families Who Care About Quality', ja: '生活の質を大切にするペット家族のために' },
    'target.lead': {
      zh: 'PawGo 唔係適合所有人——我哋專注服務以下幾類真正有需要嘅寵物家庭。如果你喺以下任何一類，歡迎加入我哋。',
      en: 'PawGo isn\'t for everyone — we focus on serving the pet families who truly need us. If you fall into any of these categories, welcome aboard.',
      ja: 'PawGoはすべての人のためのものではありません——本当に必要としている以下のようなペット家族に特化しています。あなたが以下のいずれかに当てはまるなら、ぜひご参加ください。'
    },
    'target.1.h3': { zh: '中產寵物家庭', en: 'Middle-Class Pet Families', ja: '中流ペット家族' },
    'target.1.p': {
      zh: '住喺私人屋苑，有穩定收入，願意為毛孩生活品質投資。週末想帶毛孩出去但又唔想揸車搵位泊——PawGo 幫你解決。',
      en: 'Living in private estates with stable income, willing to invest in their pet\'s quality of life. Want to take your pet out on weekends but dread driving and parking — PawGo solves this.',
      ja: 'プライベートマンションに住み、安定した収入があり、ペットの生活の質に投資する意欲がある方。週末にペットを連れて出かけたいけど運転と駐車が面倒——PawGoが解決します。'
    },
    'target.2.h3': { zh: '多寵物家庭', en: 'Multi-Pet Families', ja: '多頭飼い家庭' },
    'target.2.p': {
      zh: '兩隻貓、三隻狗？的士根本唔會載。Van 仔接送最適合你——一家人同毛孩們舒舒服服出發，唔使分開搭車。',
      en: 'Two cats, three dogs? Taxis won\'t take you. Van shuttle is perfect — the whole family travels comfortably with all your pets, no need to split up.',
      ja: '猫2匹、犬3匹？タクシーは絶対に乗せてくれません。バン送迎が最適です——家族みんなでペット全員と一緒に快適に出発、別々に移動する必要なし。'
    },
    'target.3.h3': { zh: '定期去獸醫／美容', en: 'Regular Vet / Grooming Visits', ja: '定期的な獣医・トリミング通い' },
    'target.3.p': {
      zh: '每個月都要帶毛孩去獸醫覆診或者美容？唔想每次都攔的士睇運氣——我哋嘅 Van 仔接送最適合呢啲定期出行需求。',
      en: 'Monthly vet checkups or grooming appointments? Tired of gambling on whether you can hail a taxi — our van shuttle is perfect for these regular travel needs.',
      ja: '毎月の獣医の定期検診やトリミング？毎回タクシーが捕まるか運任せはもう嫌——私たちのバン送迎はこのような定期的な移動ニーズに最適です。'
    },
    'target.4.h3': { zh: '想幫毛孩擴闊社交圈', en: 'Want to Expand Your Pet\'s Social Circle', ja: 'ペットの社交の輪を広げたい' },
    'target.4.p': {
      zh: '你知毛孩需要朋友，但你唔知點樣安全地幫佢識新朋友。巴士拼車係最好嘅起點——喺安全、有專業人士睇住嘅環境下認識其他寵物同主人。',
      en: 'You know your pet needs friends, but you\'re not sure how to safely help them socialize. Bus ride-sharing is the perfect start — meet other pets and owners in a safe, professionally supervised environment.',
      ja: 'ペットに友達が必要なのはわかっているけど、安全に新しい友達を作らせる方法がわからない。バスのライドシェアは最高の出発点です——安全でプロの監督下にある環境で他のペットや飼い主と出会えます。'
    },

    // ═══ MEMBERSHIP ═══
    'membership.badge': { zh: '會員計劃', en: 'Membership Plans', ja: '会員プラン' },
    'membership.title': { zh: '成為 PawGo 會員', en: 'Become a PawGo Member', ja: 'PawGo会員になる' },
    'membership.lead': {
      zh: '三種會員方案，適合不同需求。無論係間中帶毛孩出去，定係長期享受無憂出行，總有一個方案啱你。',
      en: 'Three membership plans for different needs. Whether it\'s occasional pet outings or long-term worry-free travel, there\'s a plan for you.',
      ja: '異なるニーズに対応する3つの会員プラン。たまにペットと出かける方も、長期的に安心して移動したい方も、あなたに合ったプランがあります。'
    },
    'membership.plan1.name': { zh: '基本會員', en: 'Basic Member', ja: 'ベーシック会員' },
    'membership.plan1.price': { zh: 'HK$888<small>/年</small>', en: 'HK$888<small>/yr</small>', ja: 'HK$888<small>/年</small>' },
    'membership.plan1.b1': { zh: '每月 2 次巴士拼車', en: '2 bus rides/month', ja: '毎月2回バス乗車' },
    'membership.plan1.b2': { zh: 'Van 仔接送 85 折', en: '15% off van shuttle', ja: 'バン送迎15%オフ' },
    'membership.plan1.b3': { zh: '專屬 WhatsApp 社群', en: 'Exclusive WhatsApp community', ja: '専用WhatsAppコミュニティ' },
    'membership.plan1.b4': { zh: '寵物安全帶及清潔墊', en: 'Pet seatbelt & cleaning mat', ja: 'ペット用シートベルト＆清掃マット' },
    'membership.plan1.b5': { zh: '迎新禮盒', en: 'Welcome gift box', ja: 'ウェルカムギフトボックス' },
    'membership.plan2.name': { zh: '進階會員', en: 'Premium Member', ja: 'プレミアム会員' },
    'membership.plan2.price': { zh: 'HK$1,888<small>/年</small>', en: 'HK$1,888<small>/yr</small>', ja: 'HK$1,888<small>/年</small>' },
    'membership.plan2.b1': { zh: '每月 4 次巴士拼車 或 2 次 Van 接送', en: '4 bus rides or 2 van shuttles/month', ja: '毎月4回バス乗車または2回バン送迎' },
    'membership.plan2.b2': { zh: '額外乘車 75 折', en: '25% off additional rides', ja: '追加乗車25%オフ' },
    'membership.plan2.b3': { zh: '創始人專屬社群', en: 'Founder-exclusive community', ja: '創設者専用コミュニティ' },
    'membership.plan2.b4': { zh: '新路線投票權', en: 'New route voting rights', ja: '新路線投票権' },
    'membership.plan2.b5': { zh: '優先體驗新功能', en: 'Early access to new features', ja: '新機能先行アクセス' },
    'membership.plan2.b6': { zh: '年度會員聚會', en: 'Annual member gathering', ja: '年次会員集会' },
    'membership.plan2.b7': { zh: '每月 2 次免費取消', en: '2 free cancellations/month', ja: '毎月2回無料キャンセル' },
    'membership.plan3.name': { zh: '終身會員', en: 'Lifetime Member', ja: 'ライフタイム会員' },
    'membership.plan3.price': { zh: 'HK$5,888<small>/ 一次性</small>', en: 'HK$5,888<small>/ one-time</small>', ja: 'HK$5,888<small>/ 一括</small>' },
    'membership.plan3.b1': { zh: '終身每月 6 次巴士拼車 或 3 次 Van 接送', en: '6 bus rides or 3 van shuttles/month for life', ja: '生涯毎月6回バス乗車または3回バン送迎' },
    'membership.plan3.b2': { zh: '全部服務 7 折優惠', en: '30% off all services', ja: '全サービス30%オフ' },
    'membership.plan3.b3': { zh: 'VIP 終身會籍', en: 'VIP lifetime membership', ja: 'VIP生涯会員資格' },
    'membership.plan3.b4': { zh: '所有新功能永久優先', en: 'Permanent early access to all new features', ja: '全新機能永久先行アクセス' },
    'membership.plan3.b5': { zh: '年度 VIP 聚會', en: 'Annual VIP gathering', ja: '年次VIP集会' },
    'membership.plan3.b6': { zh: '限量紀念 NFT', en: 'Limited commemorative NFT', ja: '限定記念NFT' },
    'membership.plan3.b7': { zh: '推薦獎賞計劃', en: 'Referral rewards program', ja: '紹介報酬プログラム' },
    'membership.plan3.b8': { zh: '專屬客戶經理', en: 'Dedicated account manager', ja: '専任アカウントマネージャー' },

    // ═══ ENROLLMENT ═══
    'enrollment.badge': { zh: '立即加入', en: 'Join Now', ja: '今すぐ参加' },
    'enrollment.title': { zh: '準備好讓毛孩自由出行？', en: 'Ready to Let Your Pet Explore Freely?', ja: 'ペットを自由に出かけさせる準備はできましたか？' },
    'enrollment.lead': {
      zh: '填寫以下資料，成為 PawGo 嘅一份子。無論你係想了解多啲，定係已經決定好要加入，我哋都好樂意同你傾吓。',
      en: 'Fill in your details and become part of PawGo. Whether you want to learn more or you\'re ready to join, we\'d love to chat.',
      ja: '以下の情報を入力して、PawGoの一員になりましょう。もっと知りたい方も、参加を決めた方も、ぜひお話ししましょう。'
    },
    'enrollment.form.title': { zh: '📝 快一步登記，了解會員詳情', en: '📝 Register Now for Membership Details', ja: '📝 今すぐ登録して会員詳細を確認' },
    'enrollment.form.subtitle': { zh: '填寫以下資料，我們會透過 WhatsApp / Email 發送詳細會員資訊給你', en: 'Fill in your details and we\'ll send membership info via WhatsApp / Email', ja: '情報を入力いただければ、WhatsApp / メールで会員詳細をお送りします' },
    'enrollment.form.name': { zh: '你的名稱 *', en: 'Your Name *', ja: 'お名前 *' },
    'enrollment.form.name.ph': { zh: '例如：陳小明', en: 'e.g. John Chan', ja: '例：陳小明' },
    'enrollment.form.email': { zh: '電郵地址 *', en: 'Email Address *', ja: 'メールアドレス *' },
    'enrollment.form.email.ph': { zh: 'example@gmail.com', en: 'example@gmail.com', ja: 'example@gmail.com' },
    'enrollment.form.phone': { zh: 'WhatsApp 號碼', en: 'WhatsApp Number', ja: 'WhatsApp番号' },
    'enrollment.form.phone.ph': { zh: '852 1234 5678', en: '852 1234 5678', ja: '852 1234 5678' },
    'enrollment.form.plan': { zh: '感興趣的服務', en: 'Service of Interest', ja: '興味のあるサービス' },
    'enrollment.form.plan.opt0': { zh: '請選擇', en: 'Please select', ja: '選択してください' },
    'enrollment.form.plan.opt1': { zh: '⭐ 基本會員 HK$888/年', en: '⭐ Basic Member HK$888/yr', ja: '⭐ ベーシック会員 HK$888/年' },
    'enrollment.form.plan.opt2': { zh: '🌟 進階會員 HK$1,888/年', en: '🌟 Premium Member HK$1,888/yr', ja: '🌟 プレミアム会員 HK$1,888/年' },
    'enrollment.form.plan.opt3': { zh: '💎 終身會員 HK$5,888/一次性', en: '💎 Lifetime Member HK$5,888/one-time', ja: '💎 ライフタイム会員 HK$5,888/一括' },
    'enrollment.form.plan.opt4': { zh: '🤔 未決定，想了解多啲', en: '🤔 Undecided, want to learn more', ja: '🤔 未定、もっと知りたい' },
    'enrollment.form.msg': { zh: '留言（選填）', en: 'Message (Optional)', ja: 'メッセージ（任意）' },
    'enrollment.form.msg.ph': { zh: '例如：我住喺將軍澳，想知有無路線？', en: 'e.g. I live in Tseung Kwan O, any routes nearby?', ja: '例：将軍澳に住んでいます。近くの路線はありますか？' },
    'enrollment.form.submit': { zh: '🚀 立即登記', en: '🚀 Register Now', ja: '🚀 今すぐ登録' },
    'enrollment.form.note': { zh: '你的資料僅供 PawGo 會員服務使用，我們不會濫發訊息', en: 'Your data is only for PawGo membership services. We never spam.', ja: 'お客様の情報はPawGo会員サービスのみに使用され、迷惑メッセージは送信しません' },

    // ═══ TESTIMONIALS ═══
    'testimonials.title': { zh: '用家真實心聲', en: 'Real Voices from Users', ja: 'ユーザーのリアルな声' },
    'testimonials.lead': {
      zh: '唔好只聽我哋講——以下係真實試乘體驗者嘅分享。佢哋同你一樣，都係希望毛孩過得更好嘅寵物主人。',
      en: 'Don\'t just take our word for it — here\'s what real trial riders are saying. They\'re pet owners, just like you, who want a better life for their furry companions.',
      ja: '私たちの言葉だけを信じないでください——以下は実際の試乗体験者の声です。彼らもあなたと同じ、ペットのより良い生活を願う飼い主です。'
    },
    'testimonials.1.p': {
      zh: '以前帶 Cookie 去睇獸醫，最驚就係攔唔到的士。試過 PawGo 之後真係覺得呢個就係香港寵物主最需要嘅服務。車廂乾淨、助理專業，Cookie 喺車上仲識咗隻柴犬朋友！',
      en: 'Taking Cookie to the vet used to be terrifying — never knowing if I could get a taxi. After trying PawGo, I truly believe this is what HK pet owners need most. Clean cabin, pro assistants, and Cookie even made a Shiba Inu friend!',
      ja: 'Cookieを獣医に連れて行く時、タクシーが捕まらないのが一番怖かったです。PawGoを試して、これこそ香港のペットオーナーが最も必要としているサービスだと実感。清潔な車内、プロのアシスタント、Cookieは車内で柴犬の友達もできました！'
    },
    'testimonials.1.author': { zh: 'Amanda · 柴犬 Cookie 主人', en: 'Amanda · Cookie\'s (Shiba Inu) Human', ja: 'アマンダ · 柴犬Cookieの飼い主' },
    'testimonials.1.location': { zh: '將軍澳居民 · 早期試乘體驗者', en: 'Tseung Kwan O resident · Early trial rider', ja: '将軍澳在住 · 初期試乗体験者' },
    'testimonials.2.p': {
      zh: '養咗兩隻英短，從來唔敢想像可以帶佢哋一齊出門。PawGo 嘅 Van 仔接送真係好方便——車廂乾淨、空間啱啱好，兩隻貓仲可以一齊坐。以後去寵物美容唔使再煩。',
      en: 'I have two British Shorthairs — never imagined I could take them out together. PawGo\'s van shuttle is so convenient — clean cabin, just the right space, and both cats can sit together. No more grooming trip hassles.',
      ja: 'ブリティッシュショートヘアを2匹飼っていますが、一緒に外出できるなんて想像もしていませんでした。PawGoのバン送迎は本当に便利——清潔な車内、ちょうど良いスペース、2匹の猫が一緒に座れます。これからトリミングの悩みはなし。'
    },
    'testimonials.2.author': { zh: 'Jason · 兩隻英短主人', en: 'Jason · Two British Shorthairs\' Human', ja: 'ジェイソン · ブリティッシュショートヘア2匹の飼い主' },
    'testimonials.2.location': { zh: '啟德居民 · 種子會員意向者', en: 'Kai Tak resident · Prospective member', ja: '啓徳在住 · 入会検討中' },

    // ═══ NEWS ═══
    'news.badge': { zh: '最新消息', en: 'Latest News', ja: '最新情報' },
    'news.title': { zh: '路線發展 & 最新動態', en: 'Route Development & Latest Updates', ja: '路線開発＆最新動向' },
    'news.lead': {
      zh: 'PawGo 正逐步擴展服務網絡。以下係我哋目前確認嘅路線同短期計劃。入會後你嘅意見會直接影響下一條路線開去邊。',
      en: 'PawGo is gradually expanding its service network. Here are our confirmed routes and near-term plans. After joining, your feedback directly influences where the next route goes.',
      ja: 'PawGoはサービスネットワークを段階的に拡大しています。以下は現在確定している路線と短期計画です。入会後、あなたの意見が次の路線の行き先に直接影響します。'
    },
    'news.route1.h3': { zh: '首條路線已確認', en: 'First Route Confirmed', ja: '初回路線確定' },
    'news.route1.badge': { zh: '🚀 2026 Q3 開通', en: '🚀 Launching Q3 2026', ja: '🚀 2026 Q3 開通' },
    'news.route1.p': {
      zh: 'Lohas Park（日出康城）↔ 西九文化區 / AIRSIDE 啟德。途經多個寵物友善商場同狗公園，週末出遊首選路線。',
      en: 'Lohas Park ↔ West Kowloon Cultural District / AIRSIDE Kai Tak. Passing multiple pet-friendly malls and dog parks — the top weekend route.',
      ja: 'ロハスパーク（日出康城）↔ 西九龍文化区 / AIRSIDE啓徳。複数のペットフレンドリーモールやドッグパークを経由——週末のお出かけに最適な路線。'
    },
    'news.route2.h3': { zh: '會員投票決定下一站', en: 'Members Vote on the Next Stop', ja: '会員投票で次の行き先を決定' },
    'news.route2.badge': { zh: '🗳️ 即將投票', en: '🗳️ Voting Soon', ja: '🗳️ 投票間近' },
    'news.route2.p': {
      zh: '第二條路線去邊？由種子會員投票決定！候選包括：將軍澳南 ↔ 南區（數碼港 / 淺水灣）、沙田 ↔ 大埔、元朗 ↔ 屯門。你嘅一票決定下一條路線。',
      en: 'Where does the second route go? Founding members vote! Candidates: TKO South ↔ Southern District (Cyberport / Repulse Bay), Sha Tin ↔ Tai Po, Yuen Long ↔ Tuen Mun. Your vote decides.',
      ja: '第2路線はどこへ？創設会員の投票で決定！候補：将軍澳南 ↔ 南区（サイバーポート / レパルスベイ）、沙田 ↔ 大埔、元朗 ↔ 屯門。あなたの一票が次の路線を決めます。'
    },
    'news.van.h3': { zh: 'Van 仔寵物專車現已上線', en: 'Van Pet Taxi Service Now Live', ja: 'バンペットタクシーサービス開始' },
    'news.van.badge': { zh: '✅ 即時可用', en: '✅ Available Now', ja: '✅ 即時利用可能' },
    'news.van.p': {
      zh: '7 座寵物專車接送服務已率先開放預約，覆蓋全港主要區域。的士拒載？我哋唔會。配備安全帶+籠具+GPS，專業司機全程照顧。WhatsApp 客服一對一安排行程。',
      en: '7-seat pet taxi service is now open for booking, covering major HK areas. Taxis reject? We never do. Equipped with seatbelts+crates+GPS, pro drivers for full care. WhatsApp support for one-on-one trip planning.',
      ja: '7人乗りペットタクシーサービスの予約受付を開始、香港の主要エリアをカバー。タクシー拒否？私たちはしません。シートベルト+ケージ+GPS完備、プロドライバーがケア。WhatsAppサポートで一対一の旅程手配。'
    },
    'news.app.h3': { zh: 'App 開發進度', en: 'App Development Progress', ja: 'アプリ開発進捗' },
    'news.app.badge': { zh: '🔄 MVP 開發中', en: '🔄 MVP in Development', ja: '🔄 MVP開発中' },
    'news.app.p': {
      zh: '原生 App 正在全力開發，核心功能包括：AI 動態拼車配對、即時車輛追蹤、一鍵預約 Van 仔、會員社群互動。預計 2026 Q3 推出 Beta 版本。',
      en: 'Native app under active development. Core features: AI dynamic carpool matching, real-time vehicle tracking, one-tap van booking, member community. Beta expected Q3 2026.',
      ja: 'ネイティブアプリを全力で開発中。主要機能：AI動的ライドシェアマッチング、リアルタイム車両追跡、ワンタップバン予約、会員コミュニティ。2026年Q3にベータ版リリース予定。'
    },

    // ═══ ABOUT ═══
    'about.badge': { zh: '關於我們', en: 'About Us', ja: '私たちについて' },
    'about.title': { zh: '一群真心愛寵物的人', en: 'People Who Truly Love Pets', ja: '心からペットを愛する人々' },
    'about.lead': {
      zh: '我哋唔只係創業者，更係寵物主人。每一個功能設計嘅背後，都有我哋同毛孩嘅真實經歷。精幹而全面嘅團隊配置，確保每趟旅程都值得信賴。',
      en: 'We\'re not just entrepreneurs — we\'re pet owners. Behind every feature design is real experience with our own furry companions. A lean yet comprehensive team ensures every journey is trustworthy.',
      ja: '私たちは起業家であるだけでなく、ペットオーナーでもあります。すべての機能設計の背後には、私たち自身とペットの実体験があります。少数精鋭でありながら包括的なチーム編成で、すべての旅が信頼に値するものとなるよう努めています。'
    },
    'about.1.h3': { zh: '創辦人', en: 'Founder', ja: '創業者' },
    'about.1.role': { zh: 'Founder & CEO', en: 'Founder & CEO', ja: 'Founder & CEO' },
    'about.1.type': { zh: '全職', en: 'Full-time', ja: 'フルタイム' },
    'about.1.p': {
      zh: '親身經歷無數次的士拒載。相信每隻毛孩都值得擁有探索世界嘅權利。負責策略規劃、融資及對外合作。',
      en: 'Endured countless taxi refusals firsthand. Believes every pet deserves the right to explore the world. Leads strategy, fundraising, and partnerships.',
      ja: '数え切れないタクシー乗車拒否を経験。すべてのペットに世界を探検する権利があると信じています。戦略立案、資金調達、外部連携を担当。'
    },
    'about.2.h3': { zh: '營運經理', en: 'Operations Manager', ja: 'オペレーションマネージャー' },
    'about.2.role': { zh: 'Operations Manager', en: 'Operations Manager', ja: 'Operations Manager' },
    'about.2.type': { zh: '全職', en: 'Full-time', ja: 'フルタイム' },
    'about.2.p': {
      zh: '路線規劃、車輛調度、服務品質管控。確保巴士同 Van 仔每趟行程都準點、安全。',
      en: 'Route planning, vehicle dispatch, service quality control. Ensures every bus and van trip is punctual and safe.',
      ja: '路線計画、車両配車、サービス品質管理。バスとバンの全行程が定刻通りで安全であることを確保します。'
    },
    'about.3.h3': { zh: '社區經理', en: 'Community Manager', ja: 'コミュニティマネージャー' },
    'about.3.role': { zh: 'Community Manager', en: 'Community Manager', ja: 'Community Manager' },
    'about.3.type': { zh: '全職', en: 'Full-time', ja: 'フルタイム' },
    'about.3.p': {
      zh: '社交媒體運營、WhatsApp 群組管理、線下聚會策劃。打造香港最溫暖嘅寵物社群。',
      en: 'Social media, WhatsApp group management, offline event planning. Building Hong Kong\'s warmest pet community.',
      ja: 'SNS運営、WhatsAppグループ管理、オフラインイベント企画。香港で最も温かいペットコミュニティを創ります。'
    },
    'about.4.h3': { zh: '業務發展經理', en: 'BD Manager', ja: '事業開発マネージャー' },
    'about.4.role': { zh: 'BD Manager', en: 'BD Manager', ja: 'BD Manager' },
    'about.4.type': { zh: '全職', en: 'Full-time', ja: 'フルタイム' },
    'about.4.p': {
      zh: '商場、獸醫診所、美容店合作開拓，讓寵物友善場所越來越多。',
      en: 'Mall, vet clinic, grooming shop partnerships. Growing the number of pet-friendly venues.',
      ja: '商業施設、動物病院、トリミングサロンとの提携開拓。ペットフレンドリーな場所を増やします。'
    },
    'about.5.h3': { zh: '數據分析師', en: 'Data Analyst', ja: 'データアナリスト' },
    'about.5.role': { zh: 'Data Analyst', en: 'Data Analyst', ja: 'Data Analyst' },
    'about.5.type': { zh: '兼職', en: 'Part-time', ja: 'パートタイム' },
    'about.5.p': {
      zh: '路線優化、用戶行為分析，用數據令每次拼車配對更精準。',
      en: 'Route optimization, user behavior analysis. Using data for more precise carpool matching.',
      ja: '路線最適化、ユーザー行動分析。データを活用してライドシェアのマッチング精度を向上させます。'
    },
    'about.6.h3': { zh: '寵物助理 × N', en: 'Pet Assistant × N', ja: 'ペットアシスタント × N' },
    'about.6.role': { zh: 'Pet Care Assistant', en: 'Pet Care Assistant', ja: 'Pet Care Assistant' },
    'about.6.type': { zh: '兼職', en: 'Part-time', ja: 'パートタイム' },
    'about.6.p': {
      zh: '隨車照顧寵物、實時分享、車上社交破冰。每位持寵物急救證書，佢哋先係毛孩最鍾意嘅人。',
      en: 'On-board pet care, real-time sharing, social icebreaking. All are pet first aid certified — they\'re the ones pets love most.',
      ja: '車内ペットケア、リアルタイム共有、社交のアイスブレイク。全員がペット応急処置認定資格を保持——彼らこそペットに一番愛される存在です。'
    },

    // ═══ SHOWCASE ═══
    'showcase.badge': { zh: '先睹為快', en: 'Sneak Peek', ja: '先行プレビュー' },
    'showcase.title': { zh: '我們的寵物巴士，是這樣的', en: 'This Is Our Pet Bus', ja: 'これが私たちのペットバスです' },
    'showcase.lead': {
      zh: '不只是一種想像——以下是 PawGo 寵物巴士的 AI 設計預覽。豪華、安全、充滿社交氛圍的出行體驗，從這裡開始。',
      en: 'More than imagination — here\'s an AI-generated preview of PawGo\'s pet bus. Luxury, safety, and a socially vibrant travel experience starts here.',
      ja: '想像だけではありません——PawGoペットバスのAIデザインプレビューです。ラグジュアリーで安全、社交的な雰囲気あふれる移動体験がここから始まります。'
    },
    'show1.h4': { zh: '🚌 豪華車廂內部', en: '🚌 Luxury Interior', ja: '🚌 ラグジュアリー車内' },
    'show1.p': { zh: '28座小巴 · 一人兩座 · 寵物安全帶 · 飲水設備', en: '28-seat minibus · 2 seats/person · Pet seatbelt · Water station', ja: '28席ミニバス · 1名様2席 · ペット用シートベルト · 給水設備' },
    'show2.h4': { zh: '🏠 樓下即上車', en: '🏠 Pickup at Your Doorstep', ja: '🏠 お家のすぐ下から乗車' },
    'show2.p': { zh: '虛擬站點覆蓋全港屋苑 · 步行 3–8 分鐘到達', en: 'Virtual stops across HK estates · 3–8 min walk', ja: 'バーチャル停車所が香港全域をカバー · 徒歩3〜8分' },
    'show3.h4': { zh: '🐾 每趟都是聚會', en: '🐾 Every Trip Is a Meetup', ja: '🐾 毎回が交流会' },
    'show3.p': { zh: '毛孩交友 · 主人交流 · 寵物助理全程陪伴', en: 'Pet socializing · Owner networking · Pet assistant on board', ja: 'ペットの交流 · 飼い主の交流 · ペットアシスタント常駐' },

    // ═══ SEED MEMBER ═══
    'seed.badge': { zh: '限時招募', en: 'Limited Recruitment', ja: '期間限定募集' },
    'seed.title': { zh: '成為 PawGo 創始種子會員', en: 'Become a PawGo Founding Member', ja: 'PawGo創設会員になる' },
    'seed.lead': {
      zh: '在 PawGo 正式上線前，我們正在尋找 500 位志同道合的寵物主，作為創始種子會員。這不只是一張乘車票——而是共同定義香港寵物出行未來的機會。',
      en: 'Before PawGo officially launches, we\'re looking for 500 like-minded pet owners to be our founding members. This isn\'t just a ride pass — it\'s a chance to shape the future of pet travel in Hong Kong.',
      ja: 'PawGoの正式ローンチに先立ち、500名の志を同じくするペットオーナーを創設会員として募集しています。これは単なる乗車パスではなく、香港のペット移動の未来を共に創る機会です。'
    },
    'seed.hero.h2': { zh: '創始會員 · 終身權益', en: 'Founding Member · Lifetime Benefits', ja: '創設会員 · 生涯特典' },
    'seed.hero.p': {
      zh: '首批 500 位種子會員將獲得獨一無二的創始人身份和永久福利。你的意見將直接影響產品方向，你的名字將留在 PawGo 的創始故事中。',
      en: 'The first 500 founding members receive a unique founder identity and permanent benefits. Your feedback directly shapes product direction, and your name will be part of PawGo\'s founding story.',
      ja: '最初の500名の創設会員には、唯一無二の創設者ステータスと永続的な特典が付与されます。あなたの声が直接プロダクトの方向性を形作り、あなたの名前はPawGoの創設ストーリーに刻まれます。'
    },
    'seed.countdown': { zh: '⏳ 僅開放 500 個名額 · 先到先得', en: '⏳ Only 500 spots · First come, first served', ja: '⏳ 先着500名様限定 · お早めに' },
    'seed.price.p': { zh: '相當於每月不到 HK$74<br>一杯咖啡的價格，換來一整年的出行自由', en: 'Less than HK$74/month<br>The price of a coffee, for a year of travel freedom', ja: '月額約HK$74以下<br>コーヒー1杯分の価格で、1年分の移動の自由を' },
    'seed.plan1.name': { zh: '探索會員', en: 'Explorer', ja: 'エクスプローラー' },
    'seed.plan1.price': { zh: 'HK$888<small>/年</small>', en: 'HK$888<small>/yr</small>', ja: 'HK$888<small>/年</small>' },
    'seed.plan1.b1': { zh: '每月 2 次免費拼車', en: '2 free rides/month', ja: '毎月2回無料乗車' },
    'seed.plan1.b2': { zh: '額外乘車 85 折優惠', en: '15% off additional rides', ja: '追加乗車15%オフ' },
    'seed.plan1.b3': { zh: '專屬 WhatsApp 社群', en: 'Exclusive WhatsApp community', ja: '専用WhatsAppコミュニティ' },
    'seed.plan1.b4': { zh: '寵物地圖完整權限', en: 'Full Pet Map access', ja: 'ペットマップ全機能アクセス' },
    'seed.plan1.b5': { zh: '平台功能優先試用', en: 'Early access to new features', ja: '新機能先行アクセス' },
    'seed.plan1.b6': { zh: '限量 PawGo 迎新禮盒', en: 'Limited PawGo welcome kit', ja: '限定PawGoウェルカムキット' },
    'seed.plan2.name': { zh: '創始會員', en: 'Founding Member', ja: '創設会員' },
    'seed.plan2.price': { zh: 'HK$1,888<small>/年</small>', en: 'HK$1,888<small>/yr</small>', ja: 'HK$1,888<small>/年</small>' },
    'seed.plan2.b1': { zh: '每月 4 次免費拼車', en: '4 free rides/month', ja: '毎月4回無料乗車' },
    'seed.plan2.b2': { zh: '額外乘車 75 折優惠', en: '25% off additional rides', ja: '追加乗車25%オフ' },
    'seed.plan2.b3': { zh: '創始人專屬社群', en: 'Founder-exclusive community', ja: '創設者専用コミュニティ' },
    'seed.plan2.b4': { zh: '產品路線投票權', en: 'Voting rights on product roadmap', ja: 'プロダクト路線の投票権' },
    'seed.plan2.b5': { zh: '優先體驗新功能', en: 'Priority access to new features', ja: '新機能優先アクセス' },
    'seed.plan2.b6': { zh: '獨家創始人紀念品', en: 'Exclusive founder memorabilia', ja: '創設者限定記念品' },
    'seed.plan2.b7': { zh: '年度線下會員聚會', en: 'Annual offline member gathering', ja: '年次オフライン会員集会' },
    'seed.plan2.badge': { zh: '🔥 最受歡迎', en: '🔥 Most Popular', ja: '🔥 一番人気' },
    'seed.plan3.name': { zh: '終身創始會員', en: 'Lifetime Founding Member', ja: '終身創設会員' },
    'seed.plan3.price': { zh: 'HK$5,888<small>/ 一次性</small>', en: 'HK$5,888<small>/ one-time</small>', ja: 'HK$5,888<small>/ 一括</small>' },
    'seed.plan3.b1': { zh: '終身每月 6 次免費拼車', en: '6 free rides/month for life', ja: '生涯毎月6回無料乗車' },
    'seed.plan3.b2': { zh: '額外乘車 7 折優惠', en: '30% off additional rides', ja: '追加乗車30%オフ' },
    'seed.plan3.b3': { zh: '創始人名錄永久展示', en: 'Permanent founder name on website', ja: '創設者名簿に永久掲載' },
    'seed.plan3.b4': { zh: '所有新功能永久優先', en: 'Permanent priority for all new features', ja: '全新機能永久優先' },
    'seed.plan3.b5': { zh: '年度 VIP 聚會邀請', en: 'Annual VIP gathering invitation', ja: '年次VIP集会ご招待' },
    'seed.plan3.b6': { zh: '專屬終身會員徽章', en: 'Exclusive lifetime member badge', ja: '生涯会員専用バッジ' },
    'seed.plan3.b7': { zh: '限量編號紀念 NFT', en: 'Limited numbered commemorative NFT', ja: '限定シリアルナンバー入り記念NFT' },
    'seed.plan3.b8': { zh: '推薦朋友雙方各得一次免費乘車', en: 'Refer a friend — you both get a free ride', ja: '友達紹介で双方に無料乗車1回' },

    // ═══ ENROLLMENT ═══
    'enroll.badge': { zh: '如何加入', en: 'How to Join', ja: '参加方法' },
    'enroll.title': { zh: '三步成為 PawGo 種子會員', en: '3 Steps to Become a PawGo Member', ja: 'PawGo会員になる3つのステップ' },
    'enroll.lead': {
      zh: '選擇你的會員方案，完成付款後將截圖發給我們的客服確認，即可立即解鎖所有創始權益。',
      en: 'Choose your plan, complete payment, send a screenshot to our support team — and unlock all founding benefits instantly.',
      ja: 'プランを選び、お支払い完了後、スクリーンショットをカスタマーサポートに送信するだけで、すべての創設特典が即座に解除されます。'
    },
    'enroll.form.title': { zh: '📝 快速登記，獲取會員詳情', en: '📝 Quick Registration — Get Member Details', ja: '📝 クイック登録 — 会員詳細を入手' },
    'enroll.form.subtitle': { zh: '填寫以下資料，我們會透過 WhatsApp / Email 發送詳細會員資訊給你', en: 'Fill in below, we\'ll send detailed membership info via WhatsApp / Email', ja: '以下にご記入いただくと、WhatsApp / メールで詳細な会員情報をお送りします' },
    'enroll.form.name': { zh: '你的名稱 *', en: 'Your Name *', ja: 'お名前 *' },
    'enroll.form.name.ph': { zh: '例如：陳小明', en: 'e.g. John Chan', ja: '例：田中太郎' },
    'enroll.form.email': { zh: '電郵地址 *', en: 'Email Address *', ja: 'メールアドレス *' },
    'enroll.form.email.ph': { zh: 'example@gmail.com', en: 'example@gmail.com', ja: 'example@gmail.com' },
    'enroll.form.phone': { zh: 'WhatsApp 號碼', en: 'WhatsApp Number', ja: 'WhatsApp番号' },
    'enroll.form.phone.ph': { zh: '852 1234 5678', en: '852 1234 5678', ja: '852 1234 5678' },
    'enroll.form.plan': { zh: '感興趣的會員方案', en: 'Interested Plan', ja: '興味のあるプラン' },
    'enroll.form.plan.opt0': { zh: '請選擇方案', en: 'Select a plan', ja: 'プランを選択' },
    'enroll.form.plan.opt1': { zh: '⭐ 探索會員 HK$888/年', en: '⭐ Explorer HK$888/yr', ja: '⭐ エクスプローラー HK$888/年' },
    'enroll.form.plan.opt2': { zh: '🌟 創始會員 HK$1,888/年', en: '🌟 Founding Member HK$1,888/yr', ja: '🌟 創設会員 HK$1,888/年' },
    'enroll.form.plan.opt3': { zh: '💎 終身創始會員 HK$5,888/一次性', en: '💎 Lifetime Founding HK$5,888/one-time', ja: '💎 終身創設会員 HK$5,888/一括' },
    'enroll.form.plan.opt4': { zh: '🤔 未決定，想了解更多', en: '🤔 Undecided, want to learn more', ja: '🤔 未定、もっと詳しく知りたい' },
    'enroll.form.msg': { zh: '留言（選填）', en: 'Message (optional)', ja: 'メッセージ（任意）' },
    'enroll.form.msg.ph': { zh: '有什麼想問的？例如：可以帶幾隻寵物？', en: 'Any questions? e.g. How many pets can I bring?', ja: '質問は？例：何匹まで連れて行けますか？' },
    'enroll.form.submit': { zh: '🚀 立即登記', en: '🚀 Register Now', ja: '🚀 今すぐ登録' },
    'enroll.form.note': { zh: '我們不會濫發郵件，你的資料僅供 PawGo 會員服務使用', en: 'We will never spam. Your data is used only for PawGo membership services.', ja: '迷惑メールは送信しません。データはPawGo会員サービスのみに使用されます。' },
    'enroll.step1.h4': { zh: '選擇方案', en: 'Choose Plan', ja: 'プラン選択' },
    'enroll.step1.p': { zh: '從探索、創始、終身中選擇最適合你的方案，記下金額', en: 'Pick Explorer, Founder, or Lifetime — note the price', ja: 'エクスプローラー、創設、終身から最適なプランを選び、金額をメモ' },
    'enroll.step2.h4': { zh: '完成付款', en: 'Complete Payment', ja: 'お支払い' },
    'enroll.step2.p': { zh: '使用下方任一方式付款，並截圖保存付款記錄', en: 'Pay via any method below, screenshot the receipt', ja: '以下のいずれかの方法で支払い、領収書をスクリーンショット' },
    'enroll.step3.h4': { zh: '發送確認', en: 'Send Confirmation', ja: '確認送信' },
    'enroll.step3.p': { zh: '將付款截圖發送至客服 WhatsApp 或電郵，確認方案', en: 'Send your payment screenshot to WhatsApp or Email for verification', ja: '支払いスクリーンショットをWhatsAppまたはメールで送信して確認' },
    'enroll.step4.h4': { zh: '成為會員', en: 'Become a Member', ja: '会員登録完了' },
    'enroll.step4.p': { zh: '客服確認後 24 小時內發送會員確認信，立即生效', en: 'Confirmation email within 24h — membership active immediately', ja: '24時間以内に確認メール送信 — 即時有効' },
    'enroll.contact.title': { zh: '📱 聯絡客服確認', en: '📱 Contact Support', ja: '📱 サポートに連絡' },
    'enroll.contact.subtitle': { zh: '付款後請透過以下任一方式發送截圖，我們會盡快確認', en: 'After payment, send your screenshot via any channel below', ja: 'お支払い後、以下のいずれかの方法でスクリーンショットをお送りください' },
    'enroll.pay.title': { zh: '💳 付款方式', en: '💳 Payment Methods', ja: '💳 お支払い方法' },
    'enroll.pay.subtitle': { zh: '支援以下香港主流支付方式，付款後請截圖', en: 'Supports major HK payment methods. Screenshot after paying.', ja: '香港の主要決済方法に対応。お支払い後はスクリーンショットを。' },
    'enroll.pay1.h5': { zh: 'Alipay HK', en: 'Alipay HK', ja: 'Alipay HK' },
    'enroll.pay1.p': { zh: '掃碼轉賬至 PawGo 商戶號', en: 'Scan to pay PawGo merchant account', ja: 'QRコードでPawGo加盟店アカウントに送金' },
    'enroll.pay2.h5': { zh: 'WeChat Pay HK', en: 'WeChat Pay HK', ja: 'WeChat Pay HK' },
    'enroll.pay2.p': { zh: '掃碼轉賬至 PawGo 商戶號', en: 'Scan to pay PawGo merchant account', ja: 'QRコードでPawGo加盟店アカウントに送金' },
    'enroll.pay3.h5': { zh: '轉數快 FPS', en: 'FPS', ja: 'FPS（高速決済）' },
    'enroll.pay3.p': { zh: 'FPS ID: 123456789', en: 'FPS ID: 123456789', ja: 'FPS ID: 123456789' },
    'enroll.pay4.h5': { zh: '銀行轉賬', en: 'Bank Transfer', ja: '銀行振込' },
    'enroll.pay4.p': { zh: 'HSBC / 中銀 / 渣打', en: 'HSBC / BOCHK / Standard Chartered', ja: 'HSBC / 中銀 / スタンダードチャータード' },
    'enroll.pay.notice': {
      zh: '<strong>⚠️ 重要提示：</strong>付款完成後，請務必將<span style="font-weight:700;">付款截圖</span>發送至客服 WhatsApp 或電郵，並註明你選擇的<span style="font-weight:700;">會員方案</span>（探索 / 創始 / 終身）。我們核實後會在 24 小時內發送會員確認信及迎新禮包詳情。',
      en: '<strong>⚠️ Important:</strong> After payment, please send your <span style="font-weight:700;">payment screenshot</span> to support via WhatsApp or Email, and specify your chosen <span style="font-weight:700;">membership plan</span> (Explorer / Founder / Lifetime). We\'ll send your confirmation and welcome kit details within 24 hours.',
      ja: '<strong>⚠️ 重要：</strong>お支払い後、<span style="font-weight:700;">支払いスクリーンショット</span>をWhatsAppまたはメールでサポートに送信し、選択した<span style="font-weight:700;">会員プラン</span>（エクスプローラー / 創設 / 終身）をお知らせください。24時間以内に確認メールとウェルカムキットの詳細をお送りします。'
    },

    // ═══ SOCIAL PROOF ═══
    'proof.stat1.p': { zh: '位寵物主已表達興趣', en: 'Pet owners interested', ja: '名の飼い主が関心を表明' },
    'proof.stat2.p': { zh: '創始種子會員限額', en: 'Founding member cap', ja: '創設会員定員' },
    'proof.stat3.p': { zh: '寵物責任險覆蓋', en: 'Pet liability insurance', ja: 'ペット賠償責任保険' },
    'proof.title': { zh: '和他們一樣，期待 PawGo', en: 'They\'re Excited About PawGo Too', ja: '彼らもPawGoを待っています' },
    'proof.lead': {
      zh: '不只是我們在說——以下是來自試乘體驗者的真實反饋。每一位都和你一樣，是希望讓毛孩過得更好的寵物主人。',
      en: 'Don\'t just take our word for it — here\'s real feedback from trial riders. Every one of them is a pet owner, just like you, who wants a better life for their furry companions.',
      ja: '私たちの言葉だけではありません——以下は試乗体験者からのリアルなフィードバックです。みなさん、あなたと同じようにペットのより良い生活を願う飼い主です。'
    },
    'test1.p': {
      zh: '以前帶 Cookie 去看獸醫，最怕就是攔不到的士。試過 PawGo 的試乘之後，真的覺得這就是香港寵物主最需要的服務。車廂乾淨、助理專業，Cookie 在車上還認識了一隻柴犬朋友！',
      en: 'Taking Cookie to the vet used to be a nightmare — could never get a taxi. After trying PawGo\'s trial ride, I truly believe this is what Hong Kong pet owners desperately need. Clean cabin, professional assistants, and Cookie even made a Shiba Inu friend on board!',
      ja: '以前Cookieを獣医に連れて行く時、タクシーが捕まらないのが一番の悩みでした。PawGoの試乗を体験して、これこそ香港のペットオーナーが最も必要としているサービスだと実感。車内は清潔でアシスタントもプロフェッショナル、Cookieは車内で柴犬の友達もできました！'
    },
    'test1.author': { zh: 'Amanda · 柴犬 Cookie 的主人', en: 'Amanda · Cookie\'s (Shiba Inu) Human', ja: 'アマンダ · 柴犬Cookieの飼い主' },
    'test1.location': { zh: '將軍澳居民 · 早期試乘體驗者', en: 'Tseung Kwan O resident · Early trial rider', ja: '将軍澳在住 · 初期試乗体験者' },
    'test2.p': {
      zh: '作為兩隻貓咪的主人，我從來不敢想像可以帶牠們一起出門去寵物友善商場。PawGo 的拼車模式讓這一切變得可能——而且車上每個座位都有清潔墊和安全扣，非常安心。',
      en: 'As a cat owner of two, I never imagined I could bring them to a pet-friendly mall together. PawGo\'s carpool model makes this possible — and every seat has cleaning mats and safety buckles. So reassuring.',
      ja: '2匹の猫の飼い主として、一緒にペットフレンドリーモールに連れて行けるなんて想像もしていませんでした。PawGoのライドシェアモデルがそれを可能に——しかも各席に清掃マットと安全バックルが完備されていて、とても安心です。'
    },
    'test2.author': { zh: 'Jason · 兩隻英短的主人', en: 'Jason · Two British Shorthairs\' Human', ja: 'ジェイソン · ブリティッシュショートヘア2匹の飼い主' },
    'test2.location': { zh: '啟德居民 · 種子會員意向者', en: 'Kai Tak resident · Prospective member', ja: '啓徳在住 · 入会検討中' },

    // ═══ SOCIAL IMPACT ═══
    'impact.badge': { zh: '不止於商業', en: 'Beyond Business', ja: 'ビジネスを超えて' },
    'impact.title': { zh: '每一次乘車，都在讓香港變得更好', en: 'Every Ride Makes Hong Kong Better', ja: '乗車するたびに、香港はより良くなる' },
    'impact.charity.badge': { zh: '🐾 乘車即捐款', en: '🐾 Ride = Donate', ja: '🐾 乗車が寄付になる' },
    'impact.charity.h3': { zh: '你搭一程，我哋捐 HK$10', en: 'You Ride, We Donate HK$10', ja: 'あなたが乗るたび、私たちがHK$10を寄付' },
    'impact.charity.p': {
      zh: '每位會員每次乘坐 PawGo 寵物巴士，我們將自動捐出 <strong>HK$10</strong> 予本地寵物慈善機構，用於流浪動物救助、絕育計劃及領養推廣。你不需要額外付費——捐款來自 PawGo 的營運收入，你的每次出行都直接幫助了等待一個家的毛孩。',
      en: 'Every time a member rides the PawGo pet bus, we automatically donate <strong>HK$10</strong> to local pet charities for stray animal rescue, spay/neuter programs, and adoption promotion. No extra cost to you — the donation comes from PawGo\'s operating revenue. Every trip you take directly helps a furry friend waiting for a home.',
      ja: '会員がPawGoペットバスに乗車するたびに、私たちは自動的に<strong>HK$10</strong>を地元のペット慈善団体に寄付し、野良動物の救助、避妊去勢プログラム、譲渡促進に役立てます。追加費用は一切かかりません——寄付はPawGoの運営収入から拠出されます。あなたの毎回の乗車が、家を待つペットを直接支援します。'
    },
    'impact.charity.stat1.label': { zh: '每次乘車自動捐出', en: 'Auto-donated per ride', ja: '1乗車ごとに自動寄付' },
    'impact.charity.stat2.label': { zh: '首年預計乘車次數', en: 'Est. first-year rides', ja: '初年度推定乗車回数' },
    'impact.charity.stat3.label': { zh: '首年預計捐款總額', en: 'Est. first-year donations', ja: '初年度推定寄付総額' },
    'impact.quote': {
      zh: '「我們相信：一個對動物友善的城市，才是真正文明的城市。PawGo 的存在，就是要讓這句話變成現實。」',
      en: '"We believe: a city that is kind to animals is a truly civilized city. PawGo exists to make that belief a reality."',
      ja: '「動物に優しい街こそ、真に文明的な街だと信じています。PawGoはその信念を現実にするために存在します。」'
    },
    'impact.card1.h3': { zh: '降低棄養，守護每一個家', en: 'Reducing Abandonment, Protecting Every Home', ja: '遺棄を減らし、すべての家庭を守る' },
    'impact.card1.p': {
      zh: '很多棄養案例的背後，不是不愛，而是無力——無法帶寵物出行、無法負擔私家車、不知道如何照顧。PawGo 讓寵物出行變得簡單、可負擔，直接降低了因「出行困難」而導致的棄養風險。',
      en: 'Behind many abandonment cases isn\'t a lack of love, but helplessness — unable to transport pets, unable to afford private cars, unsure how to care. PawGo makes pet travel simple and affordable, directly reducing abandonment risk caused by "transportation difficulty."',
      ja: '多くの遺棄事例の背後にあるのは、愛情不足ではなく無力感です——ペットを運べない、自家用車を買えない、ケア方法がわからない。PawGoはペットの移動を簡単で手頃なものにし、「移動の困難さ」による遺棄リスクを直接低減します。'
    },
    'impact.card2.h3': { zh: '以領養代替購買', en: 'Adopt, Don\'t Shop', ja: '買うのではなく、譲渡を' },
    'impact.card2.p': {
      zh: '我們堅定支持「領養代替購買」的理念。PawGo 社群將定期舉辦領養日活動，與本地收容所合作，為等待領養的毛孩提供曝光機會。種子會員可優先參與領養配對活動，用行動給流浪動物一個家。',
      en: 'We firmly support "Adopt, Don\'t Shop." The PawGo community will regularly host adoption day events, partnering with local shelters to give waiting pets exposure. Founding members get priority access to adoption matching events — give a stray a home through action.',
      ja: '私たちは「買うのではなく譲渡を」という理念を強く支持します。PawGoコミュニティは定期的に譲渡会イベントを開催し、地元の保護施設と連携して、新しい家族を待つペットに認知の機会を提供します。創設会員は譲渡マッチングイベントに優先参加できます。'
    },
    'impact.card3.h3': { zh: '捐款直達前線救助', en: 'Donations Direct to Frontline Rescue', ja: '寄付は直接現場の救助へ' },
    'impact.card3.p': {
      zh: '每次乘車捐出的 HK$10，將直接用於：流浪動物緊急醫療、免費絕育計劃、疫苗接種、食物及庇護所支援。我們每季度公開捐款報告，讓每位會員清楚知道自己的出行幫助了哪些具體的動物和項目。',
      en: 'The HK$10 per ride goes directly to: emergency medical care for strays, free spay/neuter programs, vaccinations, food & shelter support. We publish quarterly donation reports so every member knows exactly which animals and projects their rides helped.',
      ja: '1乗車あたりHK$10の寄付は、野良動物の緊急医療、無料避妊去勢プログラム、ワクチン接種、食料・シェルター支援に直接使われます。四半期ごとに寄付報告書を公開し、会員の皆様の乗車がどの動物やプロジェクトを支援したかを明確にします。'
    },
    'impact.card4.h3': { zh: '打造寵物友善社區', en: 'Building a Pet-Friendly Community', ja: 'ペットフレンドリーなコミュニティづくり' },
    'impact.card4.p': {
      zh: '我們與屋苑、商場、商戶合作，推動更多場所接納寵物。每一次拼車到達的目的地，都在向社會傳遞一個訊息：寵物是家人，值得被這個城市善待。從交通開始，逐步改變香港的寵物友善文化。',
      en: 'We partner with estates, malls, and merchants to make more places pet-friendly. Every carpool destination sends a message: pets are family, and they deserve kindness from this city. Starting with transport, we\'re gradually transforming Hong Kong\'s pet-friendly culture.',
      ja: '私たちはマンション、モール、店舗と連携し、より多くの場所でペットを受け入れてもらえるよう働きかけます。ライドシェアの目的地のひとつひとつが、メッセージを発信します：「ペットは家族であり、この街から大切にされるべき存在だ」と。交通から始めて、香港のペットフレンドリー文化を徐々に変えていきます。'
    },
    'impact.card5.h3': { zh: '毛孩的身心健康，我們在乎', en: 'We Care About Pet Wellness', ja: 'ペットの心身の健康を大切に' },
    'impact.card5.p': {
      zh: '寵物需要社交、需要探索、需要新鮮的環境來保持身心健康。PawGo 不只解決交通問題，我們為毛孩創造了規律的社交機會和豐富的戶外體驗——更快樂的寵物，更快樂的家庭。',
      en: 'Pets need socialization, exploration, and fresh environments for wellness. PawGo doesn\'t just solve transport — we create regular social opportunities and rich outdoor experiences for your pets. Happier pets, happier families.',
      ja: 'ペットには社会化、探検、新鮮な環境が心身の健康維持に必要です。PawGoは交通問題を解決するだけでなく、ペットに定期的な社交の機会と豊かなアウトドア体験を提供します。幸せなペットは、幸せな家族です。'
    },
    'impact.card6.h3': { zh: '綠色出行，減少碳足跡', en: 'Green Travel, Lower Carbon Footprint', ja: '環境に優しい移動、カーボンフットプリント削減' },
    'impact.card6.p': {
      zh: '8 個人拼一輛車 vs 8 輛私家車或的士——PawGo 的拼車模式大幅減少了碳排放。寵物出行也可以很環保，這是我們對香港環境的一份責任。',
      en: '8 people sharing one vehicle vs 8 private cars or taxis — PawGo\'s carpool model dramatically reduces carbon emissions. Pet travel can be eco-friendly too. This is our responsibility to Hong Kong\'s environment.',
      ja: '8人が1台の車をシェア vs 8台の自家用車やタクシー——PawGoのライドシェアモデルは炭素排出を大幅に削減します。ペットの移動もエコに。これが香港の環境に対する私たちの責任です。'
    },
    'impact.num1.p': { zh: '首年預計慈善捐款', en: 'Est. Year 1 Donations', ja: '初年度推定寄付額' },
    'impact.num2.p': { zh: '服務潛在毛孩數量', en: 'Pets We Can Serve', ja: 'サービス対象ペット数' },
    'impact.num3.h4': { zh: '零拒載', en: 'Zero Refusals', ja: '拒否ゼロ' },
    'impact.num3.p': { zh: '100% 寵物友善保證', en: '100% Pet-Friendly Guarantee', ja: '100%ペットフレンドリー保証' },
    'impact.num4.p': { zh: '每趟旅程都在改變生命', en: 'Every trip changes a life', ja: 'すべての旅が命を変える' },
    'impact.charity.partners.h4': { zh: '💛 我們關注的慈善機構', en: '💛 Charities We Support', ja: '💛 私たちが支援する慈善団体' },
    'impact.charity.disclaimer': {
      zh: 'PawGo 關注以下機構在香港的動物福利工作，目前正積極與各機構聯繫建立合作關係。每次乘車捐款將捐贈給已簽約的慈善夥伴，正式名單確認後將在此公佈。',
      en: 'PawGo follows the animal welfare work of these organizations in Hong Kong and is actively establishing partnerships. Ride donations go to signed charity partners; the confirmed list will be published here.',
      ja: 'PawGoは以下の香港の動物福祉団体の活動に注目しており、現在積極的に連携を進めています。乗車寄付は契約済みの慈善パートナーに送られ、確定したリストは後日ここで公開されます。'
    },

    // ═══ FUND SECURITY ═══
    'fund.badge': { zh: '資金安全', en: 'Fund Security', ja: '資金の安全性' },
    'fund.title': { zh: '你的錢，受到法律級別的保護', en: 'Your Money, Protected by Law', ja: 'あなたのお金は、法律レベルで保護されています' },
    'fund.lead': {
      zh: '我們理解，把錢交給一個全新的項目需要極大的信任。以下是 PawGo 為保障每位種子會員資金安全而建立的三層防護體系——這不是口頭承諾，而是有銀行制度、法律條款和公開透明三重保障。',
      en: 'We understand that entrusting money to a brand-new project requires immense trust. Here\'s the three-layer protection system PawGo has built to safeguard every founding member\'s funds — not verbal promises, but backed by banking systems, legal terms, and transparent accountability.',
      ja: '新しいプロジェクトにお金を託すには大きな信頼が必要だということを、私たちは理解しています。以下はPawGoが創設会員の資金を守るために構築した3層の保護システムです——口約束ではなく、銀行制度、法的条項、透明性の三重の保証です。'
    },
    'fund.hero.h3': { zh: '🔐 獨立信託帳戶 — 你的錢不進公司戶口', en: '🔐 Independent Trust Account — Your Money Never Enters Our Company Account', ja: '🔐 独立信託口座 — あなたのお金は会社口座に入りません' },
    'fund.hero.p': {
      zh: '所有種子會員的預付資金將存入獨立信託銀行帳戶（Client Trust Account），與 PawGo 日常營運帳戶完全分開。在法律上，這筆錢屬於「會員的錢」，公司只能按會員協議約定的用途使用（App 開發、路線測試、車輛租賃），不能隨意挪用於其他開支。信託帳戶受銀行監管，每一筆支出都有據可查。',
      en: 'All founding member prepaid funds are deposited into an independent Client Trust Account, fully segregated from PawGo\'s daily operating accounts. Legally, this money belongs to "the members," and the company may only use it for purposes specified in the membership agreement (app development, route testing, vehicle leasing). It cannot be diverted for other expenses. The trust account is bank-supervised and every expenditure is traceable.',
      ja: '創設会員の前払い資金はすべて、PawGoの日常運営口座とは完全に分離された独立信託銀行口座（クライアント信託口座）に預けられます。法的には、このお金は「会員の資金」であり、会社は会員契約で定められた用途（アプリ開発、路線テスト、車両リース）にのみ使用でき、他の支出に流用することはできません。信託口座は銀行の監督下にあり、すべての支出が追跡可能です。'
    },
    'fund.flow.step1.h5': { zh: '你付款', en: 'You Pay', ja: 'お支払い' },
    'fund.flow.step1.p': { zh: 'Alipay / WeChat Pay / FPS / 銀行轉賬', en: 'Alipay / WeChat Pay / FPS / Bank Transfer', ja: 'Alipay / WeChat Pay / FPS / 銀行振込' },
    'fund.flow.step2.h5': { zh: '進入信託帳戶', en: 'Enters Trust Account', ja: '信託口座へ' },
    'fund.flow.step2.p': { zh: '獨立於公司營運戶口，受銀行監管', en: 'Segregated from company accounts, bank-supervised', ja: '会社口座から分離、銀行監督下' },
    'fund.flow.step3.h5': { zh: '只用於指定用途', en: 'Designated Use Only', ja: '指定用途のみ' },
    'fund.flow.step3.p': { zh: 'App 開發 · 路線運營 · 租車 · 寵物保險', en: 'App Dev · Route Ops · Vehicle · Pet Insurance', ja: 'アプリ開発 · 路線運営 · 車両 · ペット保険' },
    'fund.card1.h4': { zh: '銀行級資金隔離', en: 'Bank-Grade Fund Segregation', ja: '銀行レベルの資金分離' },
    'fund.card1.p': {
      zh: '會員費用存入獨立信託帳戶，與公司日常營運資金物理隔離。即使公司出現財務問題，信託帳戶內的會員資金也不會受到影響。這是香港金融機構認可的客戶資金保護機制。',
      en: 'Membership fees are deposited in an independent trust account, physically segregated from company operating funds. Even if the company faces financial difficulties, member funds in the trust account remain unaffected. This is a client fund protection mechanism recognized by Hong Kong financial institutions.',
      ja: '会費は独立した信託口座に預けられ、会社の運営資金とは物理的に分離されています。会社が財務上の問題に直面しても、信託口座内の会員資金は影響を受けません。これは香港の金融機関が認める顧客資金保護の仕組みです。'
    },
    'fund.card2.h4': { zh: '律師審核協議', en: 'Lawyer-Vetted Agreement', ja: '弁護士審査済み契約' },
    'fund.card2.p': {
      zh: '每位種子會員將簽署正式的會員協議，協議條款已由香港持牌律師行審核。協議明確列明資金用途限制、退款條件及會員權益，具有法律約束力。你可以在付款前查閱完整協議文本。',
      en: 'Every founding member signs a formal membership agreement, reviewed by a licensed Hong Kong law firm. The agreement clearly states fund usage restrictions, refund conditions, and member rights — legally binding. You may review the full agreement before paying.',
      ja: '創設会員は全員、香港の認可法律事務所が審査した正式な会員契約に署名します。契約には資金用途の制限、返金条件、会員権利が明記され、法的拘束力を持ちます。お支払い前に契約全文をご確認いただけます。'
    },
    'fund.card3.h4': { zh: '每月公開帳目', en: 'Monthly Public Accounting', ja: '毎月の会計公開' },
    'fund.card3.p': {
      zh: '我們承諾每月在種子會員專屬社群發布「資金使用報告」，清楚列出：當月收到多少會員費、支出了多少、用在什麼地方、信託帳戶結餘。所有種子會員都有權查閱和提問，真正做到陽光下的透明。',
      en: 'We commit to publishing a "Fund Usage Report" monthly in the founding member community, detailing: membership fees received, expenditures, allocation, and trust account balance. All founding members have the right to review and ask questions — true transparency in the sunlight.',
      ja: '私たちは毎月、創設会員専用コミュニティで「資金使用報告書」を公開することを約束します。当月の会費受領額、支出額、使途、信託口座残高を明確に記載します。すべての創設会員が閲覧・質問する権利を持ち、真の透明性を実現します。'
    },
    'fund.refund.h4': { zh: '🔙 退款保證 — 寫清楚的承諾', en: '🔙 Refund Guarantee — Written in Black and White', ja: '🔙 返金保証 — 明確な約束' },
    'fund.refund.1.title': {
      zh: '<strong>種子會員募集未達最低目標（HK$200,000）：</strong>全額無條件退款，僅扣除銀行手續費。原路退回你的 FPS / 轉帳帳戶，處理時間不超過 14 天。',
      en: '<strong>If founding member recruitment does not reach the minimum target (HK$200,000):</strong> Full unconditional refund, minus bank fees only. Returned via your original FPS / transfer account, processing within 14 days.',
      ja: '<strong>創設会員募集が最低目標（HK$200,000）に達しなかった場合：</strong>銀行手数料のみ差し引いた上で、全額無条件返金。元のFPS / 振込口座に返金、処理期間は14日以内。'
    },
    'fund.refund.2.title': {
      zh: '<strong>未能在 2026 年 9 月底前正式啟動 Beta 路線：</strong>你可以選擇全額退款，或保留會員資格並獲得額外 3 個月免費延期作為補償。',
      en: '<strong>If Beta routes are not launched by end of September 2026:</strong> You may choose a full refund, or retain membership with an additional 3 months free extension as compensation.',
      ja: '<strong>2026年9月末までにベータ路線が開始されなかった場合：</strong>全額返金、または会員資格を保持して補償として3ヶ月間の無料延長を受けることができます。'
    },
    'fund.refund.3.title': {
      zh: '<strong>服務啟動後因不可抗力長期無法提供：</strong>按剩餘會員期限比例退還未使用部分的費用。例如你購買了一年會員但服務只運行了 3 個月，我們退還 9/12 的費用。',
      en: '<strong>If the service cannot be provided long-term due to force majeure after launch:</strong> Pro-rata refund for the unused portion. e.g., if you purchased a 1-year membership but the service only operated for 3 months, we refund 9/12 of the fee.',
      ja: '<strong>サービス開始後に不可抗力により長期間提供できない場合：</strong>未使用部分を日割りで返金します。例：1年分の会員資格を購入したが、サービスが3ヶ月しか運営されなかった場合、料金の9/12を返金します。'
    },
    'fund.refund.footer': {
      zh: '<span style="font-size:20px; flex-shrink:0;">💡</span><span>所有退款均<strong>原路退回</strong>（FPS / Alipay HK / WeChat Pay HK / 銀行轉賬），處理時間 14–30 天。退款條款已寫入會員協議，受法律約束。如有爭議，以會員協議為準。</span>',
      en: '<span style="font-size:20px; flex-shrink:0;">💡</span><span>All refunds are <strong>returned via the original payment method</strong> (FPS / Alipay HK / WeChat Pay HK / Bank Transfer), processing within 14–30 days. Refund terms are written into the membership agreement and legally binding. In case of dispute, the membership agreement prevails.</span>',
      ja: '<span style="font-size:20px; flex-shrink:0;">💡</span><span>すべての返金は<strong>元の支払い方法で返金</strong>されます（FPS / Alipay HK / WeChat Pay HK / 銀行振込）。処理期間は14〜30日。返金条件は会員契約に明記され、法的拘束力があります。紛争が生じた場合は、会員契約が優先されます。</span>'
    },

    // ═══ FAQ ═══
    'faq.badge': { zh: '常見問題', en: 'Frequently Asked Questions', ja: 'よくある質問' },
    'faq.title': { zh: '你可能想知道的', en: 'What You Might Want to Know', ja: '知りたいかもしれないこと' },
    'faq.lead': {
      zh: '我們知道，把毛孩交給一個全新的服務需要很大的信任。以下是我們最常被問到的問題——希望這些答案能讓你更安心。',
      en: 'We know entrusting your furry friend to a new service takes a lot of trust. Here are our most frequently asked questions — we hope these answers give you peace of mind.',
      ja: '大切なペットを新しいサービスに預けるには大きな信頼が必要だと理解しています。以下はよくある質問です——これらの回答が安心につながれば幸いです。'
    },
    'faq.1.q': { zh: '車上如何確保不同寵物之間的安全？萬一有衝突怎麼辦？', en: 'How do you ensure safety between different pets on board? What if there\'s a conflict?', ja: '車内で異なるペット間の安全はどう確保されていますか？万一トラブルが起きたら？' },
    'faq.1.a': {
      zh: '每位乘客享雙座位（一人兩座），寵物之間有足夠的物理距離。每班車均配備隨車寵物助理，持有寵物急救證書，全程監控車內狀況。上車前，助理會進行基本的寵物行為評估；若發現潛在風險，會安排調整座位或分批乘車。我們還為每趟行程購買了寵物責任保險，確保萬無一失。',
      en: 'Each passenger gets two seats — plenty of physical distance between pets. Every trip has a pet assistant on board, certified in pet first aid, monitoring conditions throughout. Before boarding, the assistant conducts a basic pet behavior assessment; if potential risks are found, seating adjustments or split trips are arranged. We also carry pet liability insurance for every trip — just in case.',
      ja: '各乗客に2席（1名様2席）を提供し、ペット間に十分な物理的距離を確保します。各便にはペット応急処置認定資格を持つ車内ペットアシスタントが同乗し、車内状況を常時監視します。乗車前にアシスタントが基本的なペット行動評価を実施し、潜在的リスクが見つかった場合は座席調整や分乗を手配します。また、万が一に備えて全行程にペット賠償責任保険を掛けています。'
    },
    'faq.2.q': { zh: '如果我臨時有事要取消行程，會扣錢嗎？', en: 'If I need to cancel last minute, will I be charged?', ja: '急用でキャンセルする場合、料金はかかりますか？' },
    'faq.2.a': {
      zh: '我們深知寵物主人的生活充滿變數。出發前 2 小時前取消，全額退款；2 小時內取消，可免費改簽至當天其他班次（如有空位）。種子會員更享「無憂取消」特權——每月 2 次免費取消，無需任何理由。',
      en: 'We know pet owners\' lives are unpredictable. Cancel 2+ hours before departure: full refund. Cancel within 2 hours: free rebooking to another trip that day (subject to availability). Founding members enjoy "Worry-Free Cancel" privilege — 2 free cancellations per month, no questions asked.',
      ja: 'ペットオーナーの生活は予測不可能だと理解しています。出発2時間前までのキャンセル：全額返金。2時間以内のキャンセル：当日の他便への無料振替（空席がある場合）。創設会員はさらに「安心キャンセル」特典——毎月2回まで理由不要で無料キャンセル可能。'
    },
    'faq.3.q': { zh: 'PawGo 買了什麼保險？萬一發生意外怎麼辦？', en: 'What insurance does PawGo carry? What if something happens?', ja: 'PawGoはどのような保険に加入していますか？万一の時は？' },
    'faq.3.a': {
      zh: '我們為每趟行程投保了全面的寵物責任保險及乘客意外保險，涵蓋寵物在車程中可能發生的意外受傷、疾病突發等情況，以及對第三方造成的損失。保險由香港持牌保險公司承保，每位寵物每次行程最高保障額達 HK$50,000。詳情可查閱我們的保險條款頁面。',
      en: 'We carry comprehensive pet liability and passenger accident insurance for every trip, covering accidental pet injuries, sudden illness, and third-party damages. Insured by a licensed Hong Kong insurance company, with up to HK$50,000 coverage per pet per trip. See our insurance policy page for details.',
      ja: '各行程に対して、包括的なペット賠償責任保険と乗客傷害保険に加入しており、車内でのペットの事故による怪我や急病、第三者への損害をカバーします。香港の認可保険会社による引受で、1ペット1行程あたり最高HK$50,000まで保証。詳細は保険約款ページをご覧ください。'
    },
    'faq.4.q': { zh: 'PawGo 的 A01 牌照是什麼？合法嗎？', en: 'What is PawGo\'s A01 license? Is it legal?', ja: 'PawGoのA01ライセンスとは何ですか？合法ですか？' },
    'faq.4.a': {
      zh: 'A01 牌照（私家服務巴士牌照）是香港運輸署簽發的合法營運牌照，允許持牌車輛提供預約式團體運輸服務。PawGo 嚴格依照 A01 牌照要求運營：所有行程必須提前預約、固定上車地點、不設街頭揚手即停。我們與持牌巴士營運商合作，確保每趟旅程完全合規。這是 PawGo 與普通「白牌車」最根本的區別。',
      en: 'The A01 license (Private Service Bus License) is a legal operating license issued by the Hong Kong Transport Department, allowing licensed vehicles to provide pre-booked group transport services. PawGo strictly complies: all trips must be pre-booked with fixed pickup points — no street hailing. We partner with licensed bus operators to ensure full compliance. This is the fundamental difference between PawGo and illegal "white card" vehicles.',
      ja: 'A01ライセンス（プライベートサービスバス許可）は、香港運輸署が発行する合法的な営業許可で、許可車両による予約制団体輸送サービスを認めています。PawGoはA01ライセンス要件を厳守：全行程は事前予約制、乗車場所は固定、路上での手挙げ乗車は不可。認可バス事業者と提携し、全行程の完全なコンプライアンスを確保しています。これがPawGoと一般的な「白タク」との根本的な違いです。'
    },
    'faq.5.q': { zh: '什麼是信託帳戶？我的錢真的安全嗎？', en: 'What is a trust account? Is my money really safe?', ja: '信託口座とは何ですか？私のお金は本当に安全ですか？' },
    'faq.5.a': {
      zh: '信託帳戶（Client Trust Account）是一個與公司日常營運帳戶完全分開的獨立銀行帳戶。在法律上，信託帳戶內的錢屬於「客戶 / 會員的資金」，而非公司資產。PawGo 只能按照會員協議中列明的指定用途使用這些資金（例如 App 開發、路線測試、車輛租賃、寵物保險），不能隨意挪用。這意味著：即使 PawGo 公司遇到財務困難，信託帳戶內的會員資金也不會被公司債權人追索。我們還承諾每月向種子會員公開資金使用報告，真正做到透明可查。',
      en: 'A Client Trust Account is an independent bank account completely separate from the company\'s daily operating accounts. Legally, funds in the trust account belong to "clients/members," not the company. PawGo may only use these funds for designated purposes in the membership agreement (e.g. app development, route testing, vehicle leasing, pet insurance) — no arbitrary diversion. This means: even if PawGo faces financial difficulty, member funds in the trust account cannot be claimed by company creditors. We also commit to monthly fund usage reports to founding members — genuine transparency.',
      ja: 'クライアント信託口座は、会社の日常運営口座とは完全に分離された独立銀行口座です。法的には、信託口座内の資金は「顧客・会員の資金」であり、会社の資産ではありません。PawGoはこれらの資金を会員契約に明記された指定用途（アプリ開発、路線テスト、車両リース、ペット保険など）にのみ使用でき、恣意的に流用することはできません。つまり、PawGoが財務上の困難に直面しても、信託口座内の会員資金は会社の債権者から差し押さえられることはありません。また、毎月の資金使用報告書の創設会員への公開もお約束します——真の透明性です。'
    },
    'faq.6.q': { zh: '如果項目失敗，我能拿回我的錢嗎？有什麼退款保障？', en: 'If the project fails, can I get my money back? What refund protection is there?', ja: 'プロジェクトが失敗した場合、お金は返ってきますか？返金保証は？' },
    'faq.6.a': {
      zh: '我們制定了清晰且有法律約束力的退款政策，已寫入會員協議並經香港持牌律師行審核：① 如果種子會員募集未達最低目標（HK$200,000），全額退款（僅扣除銀行手續費）；② 如果未能在 2026 年 9 月底前啟動 Beta 路線，你可以選擇全額退款或保留資格並獲得 3 個月免費延期；③ 如果服務啟動後因不可抗力長期中斷，按剩餘會員期限比例退還未使用部分。所有退款均原路退回（FPS / Alipay HK / WeChat Pay HK / 銀行轉賬），處理時間不超過 14–30 天。',
      en: 'We have a clear, legally binding refund policy, written into the membership agreement and reviewed by a licensed Hong Kong law firm: ① If founding member recruitment doesn\'t reach HK$200,000 — full refund (minus bank fees only); ② If Beta routes aren\'t launched by end of September 2026 — full refund or keep membership + 3 months free; ③ If service is interrupted long-term due to force majeure — pro-rata refund for unused portion. All refunds via original payment method (FPS / Alipay HK / WeChat Pay HK / Bank Transfer), processed within 14–30 days.',
      ja: '私たちは明確で法的拘束力のある返金ポリシーを会員契約に明記し、香港の認可法律事務所の審査を受けています：① 創設会員募集がHK$200,000の最低目標に達しなかった場合——全額返金（銀行手数料のみ差引）；② 2026年9月末までにベータ路線が開始されなかった場合——全額返金または会員資格保持＋3ヶ月無料延長；③ 不可抗力によりサービスが長期間中断された場合——未使用分の日割り返金。すべて元の支払い方法（FPS / Alipay HK / WeChat Pay HK / 銀行振込）で返金、処理期間14〜30日。'
    },
    'faq.7.q': { zh: '種子會員有最低目標金額嗎？達不到怎麼辦？', en: 'Is there a minimum funding target for founding members? What if it\'s not reached?', ja: '創設会員に最低目標金額はありますか？達成できなかったら？' },
    'faq.7.a': {
      zh: '是的，我們的種子會員募集最低目標是 HK$200,000。這筆資金將用於首批路線的車輛租賃、App 開發、寵物保險採購及隨車助理培訓。如果未能在募集期內達到此目標，所有已付款的會員將獲全額退款（僅扣除銀行手續費），原路退回。我們設定這個門檻是負責任的做法——確保有足夠資源提供優質服務，而不是收了錢卻無法交付承諾的體驗。',
      en: 'Yes, our minimum target is HK$200,000. This funds initial route vehicle leasing, app development, pet insurance, and assistant training. If this target isn\'t met during the recruitment period, all paid members receive full refunds (minus bank fees only), returned to their original payment method. Setting this threshold is the responsible thing to do — it ensures we have sufficient resources to deliver a quality service, rather than taking money and failing to deliver.',
      ja: 'はい、創設会員募集の最低目標はHK$200,000です。この資金は初回路線の車両リース、アプリ開発、ペット保険購入、アシスタント研修に充てられます。募集期間内に目標が達成されなかった場合、お支払い済みの全会員に全額返金（銀行手数料のみ差引）され、元の支払い方法で返金されます。この基準を設けることは責任ある姿勢です——約束した体験を提供できないままお金を受け取るのではなく、質の高いサービスを提供するための十分なリソースを確保するためです。'
    },
    'faq.8.q': { zh: '會員協議是正式法律文件嗎？我可以先看再付款嗎？', en: 'Is the membership agreement a formal legal document? Can I review it before paying?', ja: '会員契約は正式な法的文書ですか？支払い前に確認できますか？' },
    'faq.8.a': {
      zh: '是的，會員協議是一份正式法律文件，已由香港持牌律師行審核，具有完整的法律約束力。協議中明確列明了資金用途限制、退款條件、會員權益及公司的義務。你可以在付款前透過 WhatsApp 或 Email 聯繫我們索取完整協議文本，我們鼓勵每位潛在會員先閱讀再決定。我們相信，真正的信任不是靠隱瞞條款建立的。',
      en: 'Yes, the membership agreement is a formal legal document, reviewed by a licensed Hong Kong law firm, with full legal binding force. It clearly states fund usage restrictions, refund conditions, member rights, and company obligations. You may request the full agreement text via WhatsApp or Email before paying — we encourage every prospective member to read first, then decide. We believe true trust isn\'t built by hiding terms.',
      ja: 'はい、会員契約は正式な法的文書であり、香港の認可法律事務所による審査を受け、完全な法的拘束力を持ちます。契約には資金用途の制限、返金条件、会員権利、会社の義務が明確に記載されています。お支払い前にWhatsAppまたはメールで契約全文をご請求いただけます。すべての潜在的会員に、まず読んでから決断することをお勧めします。真の信頼は条件を隠すことでは築けないと信じているからです。'
    },
    'faq.9.q': { zh: '我可以帶超過一隻寵物上車嗎？', en: 'Can I bring more than one pet on board?', ja: '2匹以上のペットを連れて乗車できますか？' },
    'faq.9.a': {
      zh: '當然可以！每位乘客可攜帶最多 2 隻中小型寵物（或 1 隻大型寵物）共享一個雙人座位。如果你有多隻寵物需要額外空間，可以預訂額外座位。所有寵物上車時須置於清潔墊上，大型犬隻需佩戴牽引繩。',
      en: 'Of course! Each passenger may bring up to 2 small/medium pets (or 1 large pet) sharing a double seat. If you have more pets needing extra space, you can book additional seats. All pets must be on cleaning mats when boarding; large dogs must be leashed.',
      ja: 'もちろん！各乗客は最大2匹の中小型ペット（または1匹の大型ペット）を1つのダブルシートで同伴できます。さらに多くのペットに追加スペースが必要な場合は、追加座席を予約できます。乗車時はすべてのペットを清掃マットの上に置き、大型犬はリード着用が必要です。'
    },

    // ═══ ROADMAP ═══
    'roadmap.badge': { zh: '我們的計劃', en: 'Our Plan', ja: '私たちの計画' },
    'roadmap.title': { zh: '加入後，你會看到這些改變', en: 'Here\'s What You\'ll See After Joining', ja: '参加後に見られる変化' },
    'roadmap.lead': {
      zh: 'PawGo 已於 2026 年中正式啟動——以下是由現在開始的發展時間表。從第一條路線開通，到覆蓋全港每個屋苑，你的會員身份將一路見證每一步成長，你的每次反饋都會影響我們下一步往哪裡走。',
      en: 'PawGo officially launched in mid-2026 — here\'s the development timeline from now. From the first route opening to covering every estate in Hong Kong, your membership will witness every step of growth. Every feedback from you shapes where we go next.',
      ja: 'PawGoは2026年半ばに正式に始動しました——以下は今からの開発タイムラインです。最初の路線開設から香港の全マンションをカバーするまで、あなたの会員資格が成長の各ステップを見届けます。あなたのフィードバックの一つ一つが次の方向性を決めます。'
    },
    'roadmap.1.period': { zh: '階段一 · 2026 Q2–Q3（進行中 🔄）', en: 'Phase 1 · 2026 Q2–Q3 (In Progress 🔄)', ja: 'フェーズ1 · 2026 Q2–Q3（進行中 🔄）' },
    'roadmap.1.h3': { zh: '🏗️ 基礎建設 & 種子會員招募', en: '🏗️ Foundation & Founding Member Recruitment', ja: '🏗️ 基盤構築 & 創設会員募集' },
    'roadmap.1.li1': { zh: '公司註冊已完成，核心團隊組建就位', en: 'Company registered, core team in place', ja: '会社登記完了、コアチーム結成' },
    'roadmap.1.li2': { zh: 'App MVP 開發全力推進中，WhatsApp 社群基礎搭建', en: 'App MVP development underway, WhatsApp community foundation built', ja: 'アプリMVP開発推進中、WhatsAppコミュニティ基盤構築' },
    'roadmap.1.li3': { zh: '首批 6–8 個屋苑站點陸續簽約（Lohas Park、啟德等）', en: 'First 6–8 estate stops being signed (Lohas Park, Kai Tak, etc.)', ja: '初期6〜8箇所のマンション停車所を順次契約（ロハスパーク、啓徳など）' },
    'roadmap.1.li4': { zh: '500 位創始種子會員招募火熱進行中', en: '500 founding member recruitment actively underway', ja: '500名の創設会員募集中' },
    'roadmap.1.li5': { zh: '寵物責任險投保，A01 牌照合規框架確認', en: 'Pet liability insurance in place, A01 license compliance confirmed', ja: 'ペット賠償責任保険加入、A01ライセンスコンプライアンス確認' },
    'roadmap.2.period': { zh: '階段二 · 2026 Q3–Q4', en: 'Phase 2 · 2026 Q3–Q4', ja: 'フェーズ2 · 2026 Q3–Q4' },
    'roadmap.2.h3': { zh: '🚀 首批路線試運營', en: '🚀 First Route Trial Operations', ja: '🚀 初回路線試験運用' },
    'roadmap.2.li1': { zh: '首條路線開通：Lohas Park ↔ 西九文化區 / AIRSIDE', en: 'First route opens: Lohas Park ↔ West Kowloon / AIRSIDE', ja: '初回路線開通：ロハスパーク ↔ 西九龍文化区 / AIRSIDE' },
    'roadmap.2.li2': { zh: '種子會員率先體驗，收集真實反饋', en: 'Founding members first to experience, collecting real feedback', ja: '創設会員が先行体験、リアルなフィードバックを収集' },
    'roadmap.2.li3': { zh: '每趟行程自動建立 WhatsApp 社群群組', en: 'Auto-create WhatsApp community groups per trip', ja: '乗車ごとにWhatsAppコミュニティグループを自動生成' },
    'roadmap.2.li4': { zh: '舉辦首次線下會員聚會', en: 'Host first offline member gathering', ja: '初回オフライン会員集会を開催' },
    'roadmap.2.li5': { zh: '根據用戶反饋迭代產品', en: 'Iterate product based on user feedback', ja: 'ユーザーフィードバックに基づき製品を改善' },
    'roadmap.3.period': { zh: '階段三 · 2026 Q4–2027 Q1', en: 'Phase 3 · 2026 Q4–2027 Q1', ja: 'フェーズ3 · 2026 Q4–2027 Q1' },
    'roadmap.3.h3': { zh: '📈 更多路線 · 更好體驗', en: '📈 More Routes · Better Experience', ja: '📈 より多くの路線 · より良い体験' },
    'roadmap.3.li1': { zh: '原生 App V2.0 上線：動態拼車算法 + 寵物圈社群', en: 'Native App V2.0: Dynamic carpool algorithm + Pet Circle community', ja: 'ネイティブアプリV2.0：動的ライドシェアアルゴリズム + ペットサークルコミュニティ' },
    'roadmap.3.li2': { zh: '根據種子會員投票，新增第二、第三條路線', en: 'Add 2nd and 3rd routes based on member voting', ja: '会員投票に基づき第2・第3路線を追加' },
    'roadmap.3.li3': { zh: '首批商場合作上線（帶毛孩逛街、用餐更方便）', en: 'First mall partnerships live (easier shopping & dining with pets)', ja: '初期商業施設提携開始（ペットとのショッピング・食事がより便利に）' },
    'roadmap.3.li4': { zh: '會員乘車滿意度目標 95%+，路線持續優化', en: 'Target 95%+ ride satisfaction, continuous route optimization', ja: '乗車満足度95%以上を目標、路線を継続的に最適化' },
    'roadmap.3.li5': { zh: '開放更多屋苑站點，讓更多寵物主加入社群', en: 'Open more estate stops, welcoming more pet owners', ja: 'より多くのマンション停車所を開設し、より多くのペットオーナーを歓迎' },
    'roadmap.4.period': { zh: '階段四 · 2027–2031+', en: 'Phase 4 · 2027–2031+', ja: 'フェーズ4 · 2027–2031+' },
    'roadmap.4.h3': { zh: '🌐 全港寵物生活生態', en: '🌐 Hong Kong-Wide Pet Lifestyle Ecosystem', ja: '🌐 香港全域ペットライフスタイルエコシステム' },
    'roadmap.4.li1': { zh: '常規路線擴展至 15+ 條，覆蓋全港主要屋苑', en: 'Expand to 15+ regular routes covering major HK estates', ja: '定期路線を15以上に拡大し、香港の主要マンションをカバー' },
    'roadmap.4.li2': { zh: '推出 PawGo Marketplace：會員專享寵物用品、保險優惠', en: 'Launch PawGo Marketplace: member-exclusive pet supplies & insurance deals', ja: 'PawGoマーケットプレイス開始：会員限定ペット用品・保険優待' },
    'roadmap.4.li3': { zh: 'Pet Map 2.0：實時寵物友善場所資訊 + 真實社群評價', en: 'Pet Map 2.0: real-time pet-friendly venue info + authentic community reviews', ja: 'Pet Map 2.0：リアルタイムペットフレンドリー施設情報 + 本物のコミュニティレビュー' },
    'roadmap.4.li4': { zh: '週末會員社群聚會常態化，覆蓋全港 18 區', en: 'Weekend community gatherings normalized across all 18 districts', ja: '週末会員コミュニティ集会を定例化、全18区をカバー' },
    'roadmap.4.li5': { zh: '會員專屬線下活動：寵物嘉年華、主題工作坊、聯誼派對', en: 'Member-exclusive offline events: pet carnivals, themed workshops, social parties', ja: '会員限定オフラインイベント：ペットカーニバル、テーマワークショップ、交流会' },

    // ═══ TEAM ═══
    'team.badge': { zh: '我們的團隊', en: 'Our Team', ja: '私たちのチーム' },
    'team.title': { zh: '一群真心愛寵物的人', en: 'People Who Truly Love Pets', ja: '心からペットを愛する人々' },
    'team.lead': {
      zh: '我們不只是創業者，更是寵物主人。每一個功能設計的背後，都有我們自己和毛孩的真實經歷。精幹而全面的團隊配置，確保每一趟旅程都值得信賴。',
      en: 'We\'re not just entrepreneurs — we\'re pet owners. Behind every feature design is real experience with our own furry companions. A lean yet comprehensive team ensures every journey is trustworthy.',
      ja: '私たちは起業家であるだけでなく、ペットオーナーでもあります。すべての機能設計の背後には、私たち自身とペットの実体験があります。少数精鋭でありながら包括的なチーム編成で、すべての旅が信頼に値するものとなるよう努めています。'
    },
    'team.1.h3': { zh: '創辦人', en: 'Founder', ja: '創業者' },
    'team.1.role': { zh: 'Founder & CEO', en: 'Founder & CEO', ja: 'Founder & CEO' },
    'team.1.type': { zh: '全職', en: 'Full-time', ja: 'フルタイム' },
    'team.1.p': { zh: '親身經歷無數次的士拒載。相信每一隻毛孩都值得擁有探索世界的權利。負責策略規劃、融資與對外合作。', en: 'Endured countless taxi refusals firsthand. Believes every pet deserves the right to explore the world. Leads strategy, fundraising, and partnerships.', ja: '数え切れないタクシー乗車拒否を経験。すべてのペットに世界を探検する権利があると信じています。戦略立案、資金調達、外部連携を担当。' },
    'team.2.h3': { zh: '營運經理', en: 'Operations Manager', ja: 'オペレーションマネージャー' },
    'team.2.role': { zh: 'Operations Manager', en: 'Operations Manager', ja: 'Operations Manager' },
    'team.2.type': { zh: '全職', en: 'Full-time', ja: 'フルタイム' },
    'team.2.p': { zh: '路線規劃、車輛調度、服務品質管控。確保每趟行程準點、安全、讓主人放心。', en: 'Route planning, vehicle dispatch, service quality. Ensures every trip is punctual, safe, and worry-free for owners.', ja: '路線計画、車両配車、サービス品質管理。すべての行程が定刻通りで安全、飼い主が安心できるよう確保します。' },
    'team.3.h3': { zh: '社區經理', en: 'Community Manager', ja: 'コミュニティマネージャー' },
    'team.3.role': { zh: 'Community Manager', en: 'Community Manager', ja: 'Community Manager' },
    'team.3.type': { zh: '全職', en: 'Full-time', ja: 'フルタイム' },
    'team.3.p': { zh: '社交媒體運營、WhatsApp 群組管理、線下聚會策劃。打造香港最溫暖的寵物社群。', en: 'Social media, WhatsApp group management, offline event planning. Building Hong Kong\'s warmest pet community.', ja: 'SNS運営、WhatsAppグループ管理、オフラインイベント企画。香港で最も温かいペットコミュニティを創ります。' },
    'team.4.h3': { zh: '業務發展經理', en: 'BD Manager', ja: '事業開発マネージャー' },
    'team.4.role': { zh: 'BD Manager', en: 'BD Manager', ja: 'BD Manager' },
    'team.4.type': { zh: '全職', en: 'Full-time', ja: 'フルタイム' },
    'team.4.p': { zh: '商場、獸醫診所、美容店合作開拓。讓寵物友善場所越來越多。', en: 'Mall, vet clinic, grooming shop partnerships. Growing the number of pet-friendly venues.', ja: '商業施設、動物病院、トリミングサロンとの提携開拓。ペットフレンドリーな場所を増やします。' },
    'team.5.h3': { zh: '數據分析師', en: 'Data Analyst', ja: 'データアナリスト' },
    'team.5.role': { zh: 'Data Analyst', en: 'Data Analyst', ja: 'Data Analyst' },
    'team.5.type': { zh: '兼職', en: 'Part-time', ja: 'パートタイム' },
    'team.5.p': { zh: '路線優化、用戶行為分析。用數據讓每次拼車配對更精準、體驗更好。', en: 'Route optimization, user behavior analysis. Using data for more precise carpool matching and better experiences.', ja: '路線最適化、ユーザー行動分析。データを活用してライドシェアのマッチング精度と体験を向上させます。' },
    'team.6.h3': { zh: '寵物助理 × N', en: 'Pet Assistant × N', ja: 'ペットアシスタント × N' },
    'team.6.role': { zh: 'Pet Care Assistant', en: 'Pet Care Assistant', ja: 'Pet Care Assistant' },
    'team.6.type': { zh: '兼職', en: 'Part-time', ja: 'パートタイム' },
    'team.6.p': { zh: '隨車照顧寵物、實時拍照分享、車上社交破冰。每位助理均持寵物急救證書。他們才是毛孩們最喜歡的人。', en: 'On-board pet care, real-time photo sharing, social icebreaking. All assistants are pet first aid certified. They\'re the ones pets love most.', ja: '車内ペットケア、リアルタイム写真共有、社交のアイスブレイク。アシスタント全員がペット応急処置認定資格を保持。彼らこそペットに一番愛される存在です。' },

    // ═══ TRUST BADGES ═══
    'trust.1.h4': { zh: '獨立信託帳戶', en: 'Independent Trust Account', ja: '独立信託口座' },
    'trust.1.p': { zh: '會員資金銀行級隔離監管', en: 'Bank-grade fund segregation', ja: '銀行レベルの資金分離監視' },
    'trust.2.h4': { zh: '律師審核協議', en: 'Lawyer-Vetted Agreement', ja: '弁護士審査済み契約' },
    'trust.2.p': { zh: '會員權益受法律保障', en: 'Member rights legally protected', ja: '会員権利は法的に保護' },
    'trust.3.h4': { zh: '每月公開帳目', en: 'Monthly Public Accounting', ja: '毎月の会計公開' },
    'trust.3.p': { zh: '資金使用全程透明可查', en: 'Full fund usage transparency', ja: '資金使途の完全な透明性' },
    'trust.4.h4': { zh: '明確退款保證', en: 'Clear Refund Guarantee', ja: '明確な返金保証' },
    'trust.4.p': { zh: '未達標或延遲全額退還', en: 'Full refund if targets not met', ja: '目標未達または遅延時は全額返金' },

    // ═══ FOOTER ═══
    'footer.brand.p': {
      zh: '香港首個動態寵物拼車社群平台。<br>不只是交通——是毛孩的社交圈，<br>是寵物主人的第二個家。',
      en: 'Hong Kong\'s first dynamic pet carpool community.<br>More than transport — it\'s your pet\'s social circle,<br>a second home for pet owners.',
      ja: '香港初の動的ペットライドシェアコミュニティ。<br>交通手段を超えて——ペットの社交の輪、<br>ペットオーナーの第二の家です。'
    },
    'footer.col1.h4': { zh: '產品', en: 'Product', ja: 'プロダクト' },
    'footer.col1.a1': { zh: '動態拼車', en: 'Dynamic Carpool', ja: '動的ライドシェア' },
    'footer.col1.a2': { zh: '寵物地圖', en: 'Pet Map', ja: 'ペットマップ' },
    'footer.col1.a3': { zh: '寵物圈社群', en: 'Pet Circle Community', ja: 'ペットサークル' },
    'footer.col1.a4': { zh: '寵物助理服務', en: 'Pet Assistant Service', ja: 'ペットアシスタント' },
    'footer.col2.h4': { zh: '公司', en: 'Company', ja: '会社情報' },
    'footer.col2.a1': { zh: '團隊', en: 'Team', ja: 'チーム' },
    'footer.col2.a2': { zh: '社會價值', en: 'Social Impact', ja: '社会的価値' },
    'footer.col2.a3': { zh: '發展藍圖', en: 'Roadmap', ja: 'ロードマップ' },
    'footer.col2.a4': { zh: '聯絡我們', en: 'Contact Us', ja: 'お問い合わせ' },
    'footer.col3.h4': { zh: '法律', en: 'Legal', ja: '法的情報' },
    'footer.col3.a1': { zh: '隱私政策', en: 'Privacy Policy', ja: 'プライバシーポリシー' },
    'footer.col3.a2': { zh: '服務條款', en: 'Terms of Service', ja: '利用規約' },
    'footer.col3.a3': { zh: 'A01 牌照資訊', en: 'A01 License Info', ja: 'A01ライセンス情報' },
    'footer.copyright': { zh: '© 2026 PawGo. All rights reserved. 香港有限公司', en: '© 2026 PawGo. All rights reserved. Hong Kong Limited', ja: '© 2026 PawGo. All rights reserved. 香港有限公司' },
    'footer.tagline': { zh: '🐾 讓每隻毛孩，都能出發探索世界', en: '🐾 Let every furry friend explore the world', ja: '🐾 すべてのペットが世界を探検できるように' },

    // ═══ FLOATING BUTTONS ═══
    'floating.toggle': { zh: '聯絡我們', en: 'Contact Us', ja: 'お問い合わせ' },
    'floating.wa.tooltip': { zh: 'WhatsApp', en: 'WhatsApp', ja: 'WhatsApp' },
    'floating.fb.tooltip': { zh: 'Messenger', en: 'Messenger', ja: 'Messenger' },
    'floating.fb2.tooltip': { zh: 'Facebook', en: 'Facebook', ja: 'Facebook' },
    'floating.wa.link': { zh: '我想查詢PawGo種子會員計劃', en: 'I\'d like to learn about PawGo Founding Member plan', ja: 'PawGo創設会員プランについて問い合わせたいです' },

    // ═══ ALERTS & CLIPBOARD ═══
    'alert.wechat': { zh: 'WeChat ID 已複製：PawGo888', en: 'WeChat ID copied: PawGo888', ja: 'WeChat IDをコピーしました：PawGo888' },
    'alert.line': { zh: 'Line ID 已複製：+852 5133 6009', en: 'Line ID copied: +852 5133 6009', ja: 'Line IDをコピーしました：+852 5133 6009' },
    'alert.wechat.footer': { zh: 'WeChat ID 已複製：PawGo888', en: 'WeChat ID copied: PawGo888', ja: 'WeChat IDをコピーしました：PawGo888' },
    'alert.line.footer': { zh: 'Line ID 已複製：+852 5133 6009', en: 'Line ID copied: +852 5133 6009', ja: 'Line IDをコピーしました：+852 5133 6009' },
    'form.subject': { zh: 'PawGo 種子會員登記', en: 'PawGo Founding Member Registration', ja: 'PawGo創設会員登録' },

    // ═══ CSS PSEUDO-ELEMENT BADGE ═══
    'seed.plan2.badge': { zh: '🔥 最受歡迎', en: '🔥 Most Popular', ja: '🔥 一番人気' },

    // ═══ VAN PAGE: NAVIGATION ═══
    'nav_van.features': { zh: '服務特色', en: 'Features', ja: 'サービス特徴' },
    'nav_van.about': { zh: '關於我們', en: 'About Us', ja: '私たちについて' },
    'nav_van.whyus': { zh: '選擇我們', en: 'Why Us', ja: '選ばれる理由' },
    'nav_van.reviews': { zh: '客戶評價', en: 'Reviews', ja: 'お客様の声' },
    'nav_van.gallery': { zh: '服務實況', en: 'Gallery', ja: 'サービス風景' },
    'nav_van.faq': { zh: '常見問題', en: 'FAQ', ja: 'よくある質問' },
    'header_van.cta': { zh: '立即預約 ↗', en: 'Book Now ↗', ja: '今すぐ予約 ↗' },

    // ═══ VAN PAGE: OUR STORY ═══
    'story_van.badge': { zh: '我們的故事', en: 'Our Story', ja: '私たちのストーリー' },
    'story_van.h2': { zh: '我們的故事', en: 'Our Story', ja: '私たちのストーリー' },
    'story_van.subtitle': { zh: '始於一個簡單的信念', en: 'Started from a simple belief', ja: 'シンプルな信念から始まった' },
    'story_van.p1': {
      zh: '創辦人發現，香港雖然係國際大都會，但寵物友善嘅交通服務卻極為匮乏。作為一位香港寵物主人，深深體會過帶毛孩出行嘅困境——每次喺街頭攔的士，都充滿挫折同無奈。',
      en: 'The founder discovered that despite being a global metropolis, Hong Kong severely lacks pet-friendly transportation. As a pet owner in Hong Kong, they deeply experienced the frustration of trying to travel with their furry companion — every attempt to hail a taxi was filled with disappointment.',
      ja: '創業者は、香港が国際的な大都市でありながら、ペットフレンドリーな交通サービスが極めて不足していることを発見しました。香港のペットオーナーとして、ペットとの移動の難しさを痛感——タクシーを呼ぶたびに挫折と無力感を味わいました。'
    },
    'story_van.p2': {
      zh: '有啲司機明明喺平台標示「接受寵物」，去到先話「唔載狗」。部分司機會對大型犬有偏見，甚至覺得所有狗都有攻擊性。每次被拒載，唔單止浪費時間，更加係一次又一次嘅無奈。',
      en: 'Some drivers claim on the platform that they accept pets, but refuse upon arrival. Some drivers hold prejudice against large dogs, or assume all dogs are aggressive. Every rejection not only wastes time but adds to the helplessness.',
      ja: 'プラットフォームで「ペット可」と表示しているドライバーでも、到着すると「犬は乗せられない」と断るケースがあります。大型犬に対して偏見を持ち、すべての犬が攻撃的だと決めつけるドライバーも。拒否されるたびに、時間を無駄にするだけでなく、無力感が募ります。'
    },
    'story_van.p3': {
      zh: 'PawGo 致力創造一個真正安全、友善嘅環境，為寵物主人同毛孩帶嚟便利。我哋相信每一隻寵物都應該享有安全、舒適嘅旅程，就好似家人一樣被細心照顧。呢個唔單止係一項服務，更加係我哋對寵物友善社會嘅承諾。',
      en: 'PawGo is dedicated to creating a truly safe and friendly environment, bringing convenience to pet owners and their furry companions. We believe every pet deserves a safe, comfortable journey and should be carefully cared for like family. This is not just a service — it is our commitment to a pet-friendly society.',
      ja: 'PawGoは、ペットオーナーとそのペットに便利さをもたらす、真に安全でフレンドリーな環境の創造に取り組んでいます。すべてのペットが安全で快適な旅を楽しみ、家族のように大切にされるべきだと信じています。これは単なるサービスではなく、ペットフレンドリーな社会への私たちの約束です。'
    },
    'story_van.quote': {
      zh: '「我哋唔只係接載寵物，而係想讓香港成為一個更加寵物友善嘅地方。」',
      en: '"We don\'t just transport pets — we want to make Hong Kong a more pet-friendly place."',
      ja: '「私たちはペットを運ぶだけではなく、香港をよりペットフレンドリーな場所にしたいのです。」'
    },
    'story_van.founder': { zh: '— PawGo 創辦人', en: '— PawGo Founder', ja: '— PawGo創業者' },

    // ═══ VAN PAGE: MISSION & CORE VALUES ═══
    'mission_van.badge': { zh: '使命與承諾', en: 'Mission & Commitment', ja: '使命と約束' },
    'mission_van.h2': { zh: '我們的使命與承諾', en: 'Our Mission & Commitment', ja: '私たちの使命と約束' },
    'mission_van.subtitle': {
      zh: '我們承諾服務質素為最重要，每一位司機都經過專業訓練，為毛孩提供最舒適的旅程。',
      en: 'We promise service quality is the top priority. Every driver is professionally trained to provide the most comfortable journey for your furry companion.',
      ja: '私たちはサービス品質を最優先に約束します。すべてのドライバーは専門訓練を受け、ペットに最も快適な旅を提供します。'
    },
    'mission_van.values_title': { zh: '我們的核心價值', en: 'Our Core Values', ja: '私たちのコアバリュー' },
    'mission_van.v1_title': { zh: '寵物優先', en: 'Pet First', ja: 'ペットファースト' },
    'mission_van.v1_desc': { zh: '每一隻寵物都是我們的 VIP', en: 'Every pet is our VIP', ja: 'すべてのペットが私たちのVIP' },
    'mission_van.v2_title': { zh: '安全承諾', en: 'Safety Promise', ja: '安全への約束' },
    'mission_van.v2_desc': { zh: '零事故的完美記錄', en: 'Perfect record of zero accidents', ja: '事故ゼロの完璧な記録' },
    'mission_van.v3_title': { zh: '專業服務', en: 'Professional Service', ja: 'プロフェッショナルサービス' },
    'mission_van.v3_desc': { zh: '經驗豐富的寵物接送專家', en: 'Experienced pet transport specialists', ja: '経験豊富なペット送迎の専門家' },
    'mission_van.v4_title': { zh: '貼心關懷', en: 'Attentive Care', ja: '思いやりのあるケア' },
    'mission_van.v4_desc': { zh: '24小時貼心客戶服務', en: '24-hour attentive customer service', ja: '24時間対応の手厚いカスタマーサービス' },
    'mission_van.equip_title': { zh: '我們的專業配備', en: 'Our Professional Equipment', ja: 'プロフェッショナル装備' },
    'mission_van.equip1': { zh: '配備寵物專用安全帶和籠具', en: 'Pet-specific seatbelts and carriers', ja: 'ペット専用シートベルトとケージ完備' },
    'mission_van.equip2': { zh: '所有司機均受過寵物護理訓練', en: 'All drivers trained in pet care', ja: '全ドライバーがペットケア訓練修了' },
    'mission_van.equip3': { zh: '即時 GPS 定位追蹤系統', en: 'Real-time GPS tracking system', ja: 'リアルタイムGPS追跡システム' },
    'mission_van.equip4': { zh: '24小時緊急支援熱線', en: '24-hour emergency support hotline', ja: '24時間緊急サポートホットライン' },

    // ═══ VAN PAGE: WHY CHOOSE US ═══
    'whyus_van.badge': { zh: '為什麼選擇我們', en: 'Why Choose Us', ja: '選ばれる理由' },
    'whyus_van.h2': { zh: '為什麼選擇我們？', en: 'Why Choose Us?', ja: 'なぜ私たちを選ぶのか？' },
    'whyus_van.subtitle': {
      zh: '讓我們的專業優勢為您和愛寵提供最優質的接送體驗',
      en: 'Let our professional advantages provide the highest quality transport experience for you and your beloved pet',
      ja: '私たちのプロフェッショナルな強みで、あなたと大切なペットに最高品質の送迎体験を'
    },
    'whyus_van.f1_title': { zh: '專業安全保障', en: 'Professional Safety', ja: 'プロの安全対策' },
    'whyus_van.f1_desc': {
      zh: '配備寵物專用安全帶，GPS 定位追蹤，確保每一趟旅程的安全性',
      en: 'Pet-specific seatbelts and GPS tracking ensure safety on every trip',
      ja: 'ペット専用シートベルトとGPS追跡で、すべての旅の安全性を確保'
    },
    'whyus_van.f2_title': { zh: '準時可靠服務', en: 'Punctual & Reliable', ja: '定刻・信頼のサービス' },
    'whyus_van.f2_desc': {
      zh: '平均 30 分鐘響應時間，預約制彈性安排，完全符合您的時間需求',
      en: 'Average 30-minute response time, flexible booking to perfectly match your schedule',
      ja: '平均30分の応答時間、柔軟な予約制でお客様のスケジュールに完全対応'
    },
    'whyus_van.f3_title': { zh: '受訓專業司機', en: 'Trained Pro Drivers', ja: '訓練されたプロドライバー' },
    'whyus_van.f3_desc': {
      zh: '所有司機均受過寵物護理訓練，了解寵物行為，提供專業照顧',
      en: 'All drivers trained in pet care, understand pet behavior, and provide professional care',
      ja: '全ドライバーがペットケア訓練を受け、ペットの行動を理解し、プロのケアを提供'
    },
    'whyus_van.f4_title': { zh: '貼心服務體驗', en: 'Thoughtful Service', ja: '思いやりのあるサービス' },
    'whyus_van.f4_desc': {
      zh: '全程關懷您的寵物，提供溫馨貼心的接送服務，讓每次旅程都安心放心',
      en: 'Full-journey care for your pet, providing warm and attentive service so every trip is reassuring',
      ja: '旅の全行程でペットを見守り、温かく思いやりのある送迎サービスで、毎回安心の旅を'
    },

    // ═══ VAN PAGE: TESTIMONIALS ═══
    'reviews_van.badge': { zh: '客戶評價', en: 'Customer Reviews', ja: 'お客様の声' },
    'reviews_van.h2': { zh: '客戶評價', en: 'Customer Reviews', ja: 'お客様の声' },
    'reviews_van.subtitle': {
      zh: '查看客戶對我們的寵物接送服務的真實評價',
      en: 'See what our customers say about our pet transport service',
      ja: 'ペット送迎サービスへのお客様のリアルな評価をご覧ください'
    },
    'reviews_van.t1_text': {
      zh: '態度好好，對我哋客人同狗狗都好好，會推薦俾大家。識得照顧狗，仲有安全帶俾我隻狗狗，非常專業。',
      en: 'Great attitude, very good to us and our dog. Will recommend to everyone. Knows how to care for dogs, even has a seatbelt for my dog. Very professional.',
      ja: '態度が素晴らしく、私たちにも犬にもとても親切でした。皆さんにお勧めします。犬の扱い方をよく知っていて、シートベルトまで用意してくれました。とてもプロフェッショナルです。'
    },
    'reviews_van.t1_name': { zh: '陳小姐', en: 'Ms. Chan', ja: '陳さん' },
    'reviews_van.t1_role': { zh: '寵物主人', en: 'Pet Owner', ja: 'ペットオーナー' },
    'reviews_van.t2_text': {
      zh: '每週定期接送我的貓咪去看獸醫，司機準時到達，服務周到。貓咪已經習慣咗，上車都唔驚。',
      en: 'Regular weekly transport for my cat to see the vet. Driver arrives on time, excellent service. My cat has gotten used to it and isn\'t scared anymore.',
      ja: '毎週定期的に猫を獣医に連れて行ってもらっています。ドライバーは時間通りに到着し、サービスも行き届いています。猫も慣れて、車に乗るのを怖がらなくなりました。'
    },
    'reviews_van.t2_name': { zh: '王太太', en: 'Mrs. Wong', ja: '王さん' },
    'reviews_van.t2_role': { zh: '定期客戶', en: 'Regular Client', ja: '定期利用者' },
    'reviews_van.t3_text': {
      zh: '我的老狗需要特別照顧，司機很有耐心，提供了最好的服務。上落車都扶得好穩陣，真係好放心。',
      en: 'My elderly dog needs special care. The driver was very patient and provided the best service. Very careful with boarding and alighting — truly reassuring.',
      ja: '高齢の犬に特別なケアが必要ですが、ドライバーはとても忍耐強く、最高のサービスを提供してくれました。乗り降りもとても丁寧で、本当に安心できました。'
    },
    'reviews_van.t3_name': { zh: '張小姐', en: 'Ms. Cheung', ja: '張さん' },
    'reviews_van.t3_role': { zh: '高齡寵物主人', en: 'Senior Pet Owner', ja: '高齢ペットオーナー' },
    'reviews_van.t4_text': {
      zh: '車輛設備完善，有專門的寵物安全裝置，令我放心。車廂乾淨，冷氣夠，狗狗全程都好舒服。',
      en: 'Well-equipped vehicle with specialized pet safety devices — puts me at ease. Clean interior, good AC, my dog was comfortable the whole way.',
      ja: '専用のペット安全装置を備えた設備の整った車両で、安心できました。車内も清潔で、エアコンも十分、犬もずっと快適そうでした。'
    },
    'reviews_van.t4_name': { zh: '黃先生', en: 'Mr. Wong', ja: '黄さん' },
    'reviews_van.t4_role': { zh: '寵物主人', en: 'Pet Owner', ja: 'ペットオーナー' },
    'reviews_van.t5_text': {
      zh: '司機對寵物很有愛心，成個過程都好溫馨，狗狗都好鍾意。落車之後狗狗仲回頭望司機，好感動。',
      en: 'The driver is very caring towards pets. The whole process was heartwarming and my dog loved it. My dog even looked back at the driver after getting off — so touching.',
      ja: 'ドライバーはペットに愛情たっぷりで、すべての過程が温かく、犬もとても喜んでいました。降りた後も犬がドライバーを振り返っていて、感動しました。'
    },
    'reviews_van.t5_name': { zh: '劉太太', en: 'Mrs. Lau', ja: '劉さん' },
    'reviews_van.t5_role': { zh: '寵物主人', en: 'Pet Owner', ja: 'ペットオーナー' },
    'reviews_van.t6_text': {
      zh: '司機好專業，車廂好乾淨，我隻貓咪坐得好舒服。送去美容院準時到達，接返嚟時間都好準確。推薦！',
      en: 'Driver is professional, vehicle is very clean, my cat rode very comfortably. On-time drop-off at the groomer and accurate pickup time. Recommended!',
      ja: 'ドライバーはプロフェッショナルで、車内もとても清潔、猫も快適に過ごせました。トリミングサロンへの送りも時間通り、迎えの時間も正確でした。おすすめです！'
    },
    'reviews_van.t6_name': { zh: '李太太', en: 'Mrs. Lee', ja: '李さん' },
    'reviews_van.t6_role': { zh: '貓主人', en: 'Cat Owner', ja: '猫のオーナー' },

    // ═══ VAN PAGE: SERVICE GALLERY ═══
    'gallery_van.badge': { zh: '服務實況', en: 'Service Gallery', ja: 'サービス風景' },
    'gallery_van.h2': { zh: '服務實況', en: 'Service Gallery', ja: 'サービス風景' },
    'gallery_van.subtitle': {
      zh: '看看我們如何為香港的毛孩提供專業、安全、舒適的接送服務',
      en: 'See how we provide professional, safe, and comfortable transport for Hong Kong\'s furry companions',
      ja: '香港のペットたちに、どのようにプロフェッショナルで安全かつ快適な送迎を提供しているかご覧ください'
    },

    // ═══ VAN PAGE: FAQ ═══
    'faq_van.badge': { zh: '常見問題', en: 'FAQ', ja: 'よくある質問' },
    'faq_van.h2': { zh: '常見問題', en: 'Frequently Asked Questions', ja: 'よくある質問' },
    'faq_van.subtitle': {
      zh: '以下是我們整理的常見問題，幫助您更好地了解我們的寵物接送服務',
      en: 'Here are frequently asked questions to help you better understand our pet transport service',
      ja: 'ペット送迎サービスをよりよく理解していただくため、よくある質問をまとめました'
    },
    'faq_van.q1': { zh: '你們提供什麼樣的寵物接送服務？', en: 'What kind of pet transport service do you provide?', ja: 'どのようなペット送迎サービスを提供していますか？' },
    'faq_van.a1': {
      zh: '我們提供專業的寵物專用車接送服務，確保您的毛孩在出行過程中安全、舒適。我們的車輛配備了專門的寵物安全設備，司機都經過專業培訓，了解如何照顧不同類型的寵物。無論係大型犬、貓咪、或者其他小型寵物，我哋都歡迎。',
      en: 'We provide professional pet-dedicated vehicle transport services, ensuring your furry companion is safe and comfortable during travel. Our vehicles are equipped with specialized pet safety equipment, and all drivers have undergone professional training on how to care for different types of pets. Large dogs, cats, or other small pets — all are welcome.',
      ja: 'ペット専用車両によるプロフェッショナルな送迎サービスを提供し、ペットが移動中も安全で快適に過ごせるようにしています。車両にはペット専用の安全装置が装備され、全ドライバーがさまざまな種類のペットのケア方法について専門訓練を受けています。大型犬、猫、その他小型ペットもすべて歓迎です。'
    },
    'faq_van.q2': { zh: '服務範圍覆蓋哪些地區？', en: 'What areas does the service cover?', ja: 'サービスエリアはどこですか？' },
    'faq_van.a2': {
      zh: '我哋嘅 Van 仔寵物專車服務覆蓋香港全港主要區域，包括港島、九龍、新界各區。無論你住喺市區定新界，我哋都可以安排接送。如有需要，請 WhatsApp 我哋查詢你嘅具體位置。',
      en: 'Our Van pet taxi service covers all major areas of Hong Kong, including Hong Kong Island, Kowloon, and the New Territories. Whether you live in the city or the New Territories, we can arrange pickup. Please WhatsApp us to check your specific location.',
      ja: 'バンペットタクシーサービスは、香港島、九龍、新界を含む香港の主要エリアをカバーしています。市内でも新界でも、送迎を手配できます。具体的な場所については、WhatsAppでお問い合わせください。'
    },
    'faq_van.q3': { zh: '如何預約接送服務？', en: 'How to book the transport service?', ja: '送迎サービスの予約方法は？' },
    'faq_van.a3': {
      zh: '目前可透過 WhatsApp 或 Facebook Messenger 聯絡我哋進行預約。我哋嘅客服團隊會一對一為你安排行程。App 上線後將支援 App 內一鍵預約，敬請期待！',
      en: 'Currently you can book via WhatsApp or Facebook Messenger. Our customer service team will arrange your trip one-on-one. Once our app launches, one-tap booking will be available — stay tuned!',
      ja: '現在はWhatsAppまたはFacebook Messengerでご連絡いただき、予約を承っています。カスタマーサービスチームが一対一で旅程を手配します。アプリリリース後は、アプリ内でワンタップ予約が可能になります。お楽しみに！'
    },
    'faq_van.q4': { zh: '你們如何確保寵物的安全？', en: 'How do you ensure pet safety?', ja: 'ペットの安全をどのように確保していますか？' },
    'faq_van.a4': {
      zh: '安全係我哋嘅首要關注。所有車輛配備寵物專用安全帶及籠具、GPS 即時定位追蹤。每位司機均受過寵物護理及急救訓練。我哋保持零事故嘅完美安全紀錄，並為每趟行程投保寵物責任保險。',
      en: 'Safety is our top priority. All vehicles are equipped with pet-specific seatbelts, carriers, and real-time GPS tracking. Every driver is trained in pet care and first aid. We maintain a perfect record of zero accidents and insure every trip with pet liability coverage.',
      ja: '安全は私たちの最優先事項です。全車両にペット専用シートベルト、ケージ、リアルタイムGPS追跡を装備。全ドライバーがペットケアと応急処置の訓練を受けています。事故ゼロの完璧な安全記録を維持し、毎回の走行にペット賠償責任保険をかけています。'
    },
    'faq_van.q5': { zh: '如果我的寵物有特殊需求怎麼辦？', en: 'What if my pet has special needs?', ja: 'ペットに特別なニーズがある場合は？' },
    'faq_van.a5': {
      zh: '冇問題！預約時請告知我哋你寵物嘅特殊需求，例如：高齡寵物需要額外協助、特定健康狀況、對溫度敏感等。我哋嘅司機會根據情況提供相應照顧，確保你嘅毛孩得到最合適嘅服務。',
      en: 'No problem! Please inform us of your pet\'s special needs when booking — such as elderly pets needing extra assistance, specific health conditions, temperature sensitivity, etc. Our drivers will provide tailored care to ensure your pet receives the most suitable service.',
      ja: '問題ありません！予約時にペットの特別なニーズをお知らせください。高齢ペットの追加サポート、特定の健康状態、温度感受性など。ドライバーが状況に応じたケアを提供し、ペットに最適なサービスを確保します。'
    },
    'faq_van.q6': { zh: '收費標準是什麼？', en: 'What are your pricing standards?', ja: '料金基準は？' },
    'faq_van.a6': {
      zh: '收費根據距離、時間及寵物數量而定。我哋提供透明嘅報價，預約前會同你確認清楚所有費用，唔會有隱藏收費。請 WhatsApp 聯絡我哋獲取即時報價。',
      en: 'Pricing is based on distance, time, and number of pets. We provide transparent quotes — all fees will be confirmed clearly before booking, with no hidden charges. Please WhatsApp us for an instant quote.',
      ja: '料金は距離、時間、ペットの数に基づきます。透明性のある見積もりを提供し、予約前にすべての料金を明確に確認します。隠れた料金は一切ありません。WhatsAppでお問い合わせいただければ、即時見積もりをご提供します。'
    },
    'faq_van.q7': { zh: '如果需要取消或更改預約，應該怎麼辦？', en: 'What if I need to cancel or change a booking?', ja: '予約のキャンセルや変更が必要な場合は？' },
    'faq_van.a7': {
      zh: '如需取消或更改，請盡早透過 WhatsApp 通知我哋。出發前 2 小時以上取消，不收取任何費用。2 小時內取消會收取基本服務費。我哋會盡力配合你嘅時間變動。',
      en: 'If you need to cancel or change, please notify us via WhatsApp as soon as possible. Cancellations made more than 2 hours before departure incur no charge. Cancellations within 2 hours will incur a basic service fee. We\'ll do our best to accommodate your schedule changes.',
      ja: 'キャンセルや変更が必要な場合は、できるだけ早くWhatsAppでお知らせください。出発2時間前までのキャンセルは無料です。2時間以内のキャンセルは基本サービス料がかかります。スケジュール変更には可能な限り対応いたします。'
    },

    // ═══ VAN PAGE: CTA ═══
    'cta_van.h2': { zh: '準備為您的愛寵預約專業接送？', en: 'Ready to book professional transport for your beloved pet?', ja: '大切なペットのプロ送迎を予約する準備はできましたか？' },
    'cta_van.subtitle': {
      zh: '立即聯繫我們，體驗安全可靠的寵物接送服務 · 讓每一次旅程都安心放心',
      en: 'Contact us now to experience safe and reliable pet transport · Make every journey safe and worry-free',
      ja: '今すぐお問い合わせください。安全で信頼できるペット送迎を体験してください · 毎回の旅を安心に'
    },
    'cta_van.btn_quote': { zh: '查詢價格', en: 'Check Price', ja: '料金を確認' },
    'cta_van.btn_wa': { zh: 'WhatsApp 查詢', en: 'WhatsApp Inquiry', ja: 'WhatsAppで問い合わせ' },
    'cta_van.trust1': { zh: '⭐ 1000+ 滿意客戶', en: '⭐ 1000+ Satisfied Customers', ja: '⭐ 1000人以上の満足したお客様' },
    'cta_van.trust2': { zh: '🛡️ 專業安全保障', en: '🛡️ Professional Safety', ja: '🛡️ プロの安全対策' },
    'cta_van.trust3': { zh: '📱 預約制服務', en: '📱 Booking-based Service', ja: '📱 予約制サービス' },

    // ═══ BUS PAGE: NAVIGATION ═══
    'nav_bus.service': { zh: '巴士服務', en: 'Bus Service', ja: 'バスサービス' },
    'nav_bus.membership': { zh: '會員計劃', en: 'Membership', ja: '会員プラン' },
    'nav_bus.whyjoin': { zh: '加入理由', en: 'Why Join', ja: '参加理由' },
    'nav_bus.faq': { zh: '常見問題', en: 'FAQ', ja: 'よくある質問' },
    'nav_bus.enroll': { zh: '立即加入', en: 'Join Now', ja: '今すぐ参加' },
    'header_bus.cta': { zh: '🐾 成為創始會員 →', en: '🐾 Become Founding Member →', ja: '🐾 創設会員になる →' },

    // ═══ BUS PAGE: HERO ═══
    'bus_hero.tag': { zh: '🚌 創始會員招募 · 限額 500 位', en: '🚌 Founding Member Recruitment · 500 Spots Only', ja: '🚌 創設会員募集 · 先着500名様' },
    'bus_hero.h1.line1': { zh: '加入 PawGo，', en: 'Join PawGo,', ja: 'PawGoに参加して、' },
    'bus_hero.h1.line2': { zh: '成為創始會員', en: 'Become a Founding Member', ja: '創設会員になろう' },
    'bus_hero.desc': {
      zh: '香港首個寵物友善拼車平台現正招募 <strong>500 位創始會員</strong>。28 座豪華小巴、AI 動態配對、屋苑門口接送。創始會員享終身優惠、路線投票權，與我哋一起打造屬於毛孩的出行文化。',
      en: 'Hong Kong\'s first pet-friendly carpool platform is recruiting <strong>500 Founding Members</strong>. 28-seat luxury minibus, AI dynamic matching, doorstep pickup. Founding members enjoy lifetime discounts, route voting rights — help us build a travel culture for pets.',
      ja: '香港初のペットフレンドリーカープールプラットフォームが<strong>500名の創設会員</strong>を募集中。28席ラグジュアリーミニバス、AIダイナミックマッチング、自宅前ピックアップ。創設会員は生涯割引、路線投票権を享受 — 一緒にペットの移動文化を作りましょう。'
    },
    'bus_hero.btn.primary': { zh: '🐾 成為創始會員', en: '🐾 Become Founding Member', ja: '🐾 創設会員になる' },
    'bus_hero.btn.secondary': { zh: '了解巴士服務', en: 'Learn About Bus Service', ja: 'バスサービスを知る' },
    'bus_hero.stat1.h4': { zh: '500 位', en: '500 Spots', ja: '500名' },
    'bus_hero.stat1.p': { zh: '創始會員限額', en: 'Founding Member Limit', ja: '創設会員定員' },
    'bus_hero.stat2.h4': { zh: '28 座', en: '28 Seats', ja: '28席' },
    'bus_hero.stat2.p': { zh: '豪華小巴 · 一人兩座', en: 'Luxury Minibus · 2 Seats/Person', ja: 'ラグジュアリーバス · 1名2席' },
    'bus_hero.stat3.h4': { zh: 'AI 配對', en: 'AI Match', ja: 'AIマッチ' },
    'bus_hero.stat3.p': { zh: '同方向寵友自動成團', en: 'Auto-match same-direction pet lovers', ja: '同方向ペット仲間を自動グループ化' },
    'bus_hero.stat4.h4': { zh: '100%', en: '100%', ja: '100%' },
    'bus_hero.stat4.p': { zh: '寵物友善保證', en: 'Pet-Friendly Guaranteed', ja: 'ペットフレンドリー保証' },

    // ═══ BUS PAGE: URGENCY BAND ═══
    'urgency.h2': { zh: '⏳ 為什麼現在加入？', en: '⏳ Why Join Now?', ja: '⏳ なぜ今参加？' },
    'urgency.p': {
      zh: '創始會員名額只有 500 個，一旦額滿即止。現在加入，你將享有只有創始會員才有的終身特權——後期加入的會員永遠唔會再有這些待遇。',
      en: 'Founding Member spots are limited to 500 — once full, they\'re gone. Join now and enjoy lifetime privileges exclusive to Founding Members that later members can never access.',
      ja: '創設会員の枠は500名限定 — 満員になり次第終了です。今参加すれば、後から入会した会員には決して与えられない、創設会員だけの生涯特権を享受できます。'
    },
    'urgency.tag1': { zh: '限額 500 位', en: '500 spots only', ja: '先着500名限定' },
    'urgency.tag2': { zh: '終身優惠價格', en: 'Lifetime discounted rates', ja: '生涯割引価格' },
    'urgency.tag3': { zh: '路線投票決定權', en: 'Route voting rights', ja: '路線投票権' },
    'urgency.tag4': { zh: '創始人名錄', en: 'Founder\'s Roll of Honor', ja: '創設者名誉ロール' },

    // ═══ BUS PAGE: SERVICE FEATURES ═══
    'bus_features.badge': { zh: '巴士服務', en: 'Bus Service', ja: 'バスサービス' },
    'bus_features.h2': { zh: '寵物友善小巴 · 拼車出行', en: 'Pet-Friendly Minibus · Group Ride', ja: 'ペット対応ミニバス · グループ乗車' },
    'bus_features.subtitle': {
      zh: '28 座豪華小巴，一人兩座，空間闊落。全港首個以寵物為中心設計的拼車服務——每趟車程都係一次毛孩聚會。',
      en: '28-seat luxury minibus, 2 seats per person, spacious. Hong Kong\'s first pet-centered carpool — every trip is a furry gathering.',
      ja: '28席ラグジュアリーミニバス、1名2席、ゆったり空間。香港初のペット中心カープール——毎回の乗車がペットの集まりに。'
    },
    'bus_features.f1.icon': { zh: '🤖', en: '🤖', ja: '🤖' },
    'bus_features.f1.title': { zh: 'AI 動態配對', en: 'AI Dynamic Matching', ja: 'AIダイナミックマッチング' },
    'bus_features.f1.desc': { zh: '根據出發地、目的地、時間自動配對同路寵友，唔係固定路線，更靈活更智慧', en: 'Auto-match by origin, destination, and time. Not fixed routes — more flexible and smarter', ja: '出発地・目的地・時間で自動マッチング。固定ルートではなく、より柔軟でスマート' },
    'bus_features.f2.icon': { zh: '🏠', en: '🏠', ja: '🏠' },
    'bus_features.f2.title': { zh: '屋苑門口接送', en: 'Doorstep Pickup', ja: 'マンション前ピックアップ' },
    'bus_features.f2.desc': { zh: '虛擬站點覆蓋全港主要屋苑，步行 3–8 分鐘即到上車點，唔使喺街頭攔車', en: 'Virtual stops at major estates citywide, 3–8 min walk to boarding point, no street hailing', ja: '主要マンション近くにバーチャル停留所、徒歩3〜8分で乗車地点、道路でのタクシー待ち不要' },
    'bus_features.f3.icon': { zh: '👩‍⚕️', en: '👩‍⚕️', ja: '👩‍⚕️' },
    'bus_features.f3.title': { zh: '寵物助理隨車', en: 'Pet Assistant On Board', ja: 'ペットアシスタント同乗' },
    'bus_features.f3.desc': { zh: '每班車配備持寵物急救證書嘅助理，全程照顧、拍照記錄、社交破冰', en: 'Every bus has a certified pet first-aid assistant — full care, photos, social ice-breaking', ja: '全バスにペット救急認定アシスタント同乗 — 全行程ケア、写真撮影、交流のきっかけ作り' },
    'bus_features.f4.icon': { zh: '💬', en: '💬', ja: '💬' },
    'bus_features.f4.title': { zh: '每程建立社群', en: 'Community Per Trip', ja: '乗車ごとにコミュニティ' },
    'bus_features.f4.desc': { zh: '每班車自動建立 WhatsApp 群組，識到嘅寵物朋友落車後仲可以繼續交流', en: 'Each trip auto-creates a WhatsApp group — pet friends met on board stay connected after', ja: '乗車ごとにWhatsAppグループ自動生成 — 車内で出会ったペット仲間と降車後も交流継続' },
    'bus_features.f5.icon': { zh: '🛡️', en: '🛡️', ja: '🛡️' },
    'bus_features.f5.title': { zh: '安全保障完善', en: 'Comprehensive Safety', ja: '充実した安全対策' },
    'bus_features.f5.desc': { zh: '持牌 A01 車隊、防水易清潔車廂、寵物安全帶、寵物責任保險，每趟行程全程受保', en: 'Licensed A01 fleet, waterproof interiors, pet seatbelts, pet liability insurance on every trip', ja: 'A01認可車隊、防水内装、ペット用シートベルト、全乗車ペット賠償保険' },
    'bus_features.f6.icon': { zh: '💚', en: '💚', ja: '💚' },
    'bus_features.f6.title': { zh: '乘車即捐款', en: 'Ride = Donation', ja: '乗車が寄付に' },
    'bus_features.f6.desc': { zh: '每次乘車自動捐出 HK$10 俾本地動物慈善機構，你嘅出行讓香港更好', en: 'Every trip auto-donates HK$10 to local animal charities — your ride makes HK better', ja: '毎回の乗車で自動的にHK$10が地元動物慈善団体に寄付 — あなたの乗車で香港がより良くなる' },

    // ═══ BUS PAGE: WHY JOIN NOW ═══
    'bus_whyjoin.badge': { zh: '創始會員特權', en: 'Founding Member Privileges', ja: '創設会員特典' },
    'bus_whyjoin.h2': { zh: '為什麼要成為創始會員？', en: 'Why Become a Founding Member?', ja: 'なぜ創設会員になるべきか？' },
    'bus_whyjoin.subtitle': {
      zh: '創始會員唔只係一張車票——而係你對香港寵物出行文化嘅投票，同永久鎖定嘅獨家特權。',
      en: 'Founding membership is more than a ticket — it\'s your vote for pet travel culture in HK and permanently locked-in exclusive privileges.',
      ja: '創設会員はただのチケットではありません——香港のペット移動文化への一票であり、永久に確保された独占特典です。'
    },
    'bus_whyjoin.p1.icon': { zh: '🔒', en: '🔒', ja: '🔒' },
    'bus_whyjoin.p1.title': { zh: '終身鎖定最優惠價', en: 'Lifetime Best Price Locked In', ja: '生涯最優遇価格ロック' },
    'bus_whyjoin.p1.desc': { zh: '創始會員費率係 PawGo 有史以來最低價格，終身有效。日後服務全面開通後，新會員費用只會更高。現在加入，永久享受創始優惠。', en: 'Founding member rates are the lowest ever offered by PawGo, valid for life. Once fully launched, new member fees will only go higher. Join now and lock in the founding price forever.', ja: 'PawGo史上最低価格の創設会員料金は生涯有効。サービス全面開始後、新会員費は上がるだけです。今参加して、創設価格を永久に確保しましょう。' },
    'bus_whyjoin.p2.icon': { zh: '🗳️', en: '🗳️', ja: '🗳️' },
    'bus_whyjoin.p2.title': { zh: '你決定下一條路線', en: 'You Decide the Next Route', ja: 'あなたが次のルートを決める' },
    'bus_whyjoin.p2.desc': { zh: '創始會員擁有路線投票權——下一條路線通往邊個地區，由你同其他創始會員投票決定。你嘅意見直接影響 PawGo 嘅發展方向，唔係普通用家可以參與嘅事。', en: 'Founding Members have route voting rights — the next route\'s destination is decided by you and fellow founding members. Your voice directly shapes PawGo\'s development direction, something ordinary users can never participate in.', ja: '創設会員は路線投票権を持ちます——次の路線の目的地はあなたと他の創設会員が投票で決めます。あなたの声がPawGoの発展方向に直接影響し、一般ユーザーには参加できないことです。' },
    'bus_whyjoin.p3.icon': { zh: '🏆', en: '🏆', ja: '🏆' },
    'bus_whyjoin.p3.title': { zh: '創始人名錄永久展示', en: 'Permanent Place in Founders\' Roll', ja: '創設者名誉ロールに永久掲載' },
    'bus_whyjoin.p3.desc': { zh: '終身創始會員嘅名字將永久展示喺 PawGo 官網嘅「創始人名錄」——你係第一批讓呢個服務成真嘅人，歷史會記住你。', en: 'Lifetime Founding Members\' names are permanently displayed in PawGo\'s "Founders\' Roll" on the official website — you are among the first who made this service possible, and history will remember you.', ja: '終身創設会員のお名前はPawGo公式サイトの「創設者名誉ロール」に永久掲載 — このサービスを実現した最初の一人として、歴史に名を残しましょう。' },
    'bus_whyjoin.p4.icon': { zh: '🎁', en: '🎁', ja: '🎁' },
    'bus_whyjoin.p4.title': { zh: '獨家創始人紀念品', en: 'Exclusive Founder Memorabilia', ja: '限定創設者記念品' },
    'bus_whyjoin.p4.desc': { zh: '每位創始會員均會獲得專屬限量紀念品，包括創始人徽章、限量禮盒，以及一枚印有你專屬編號嘅紀念 NFT。這些不會再有第二次。', en: 'Every founding member receives exclusive limited memorabilia including a founder badge, limited gift box, and a commemorative NFT with your unique serial number. These will never be available again.', ja: '全創設会員に創設者バッジ、限定ギフトボックス、専用シリアルナンバー入り記念NFTを含む限定記念品をお贈りします。これらは二度と手に入りません。' },

    // ═══ BUS PAGE: ROUTE PROGRESS ═══
    'bus_route.badge': { zh: '路線進展', en: 'Route Progress', ja: 'ルート進捗' },
    'bus_route.h2': { zh: '路線發展 & 最新動態', en: 'Route Development & Latest Updates', ja: 'ルート開発 & 最新情報' },
    'bus_route.subtitle': {
      zh: 'PawGo 正逐步擴展服務網絡。入會後你嘅意見會直接影響下一條路線開去邊。',
      en: 'PawGo is steadily expanding its service network. After joining, your vote directly determines where the next route goes.',
      ja: 'PawGoはサービスネットワークを着実に拡大中。入会後、あなたの一票が次の路線の行き先を直接決めます。'
    }
  };

  // ── Get translated text ──────────────────────────────────
  function t(key) {
    if (!T[key]) return '⚠️' + key;
    return T[key][currentLang] || T[key]['zh'] || '⚠️' + key;
  }

  // ── Language state ───────────────────────────────────────
  var currentLang = 'zh';

  // ── Apply translations to the DOM ────────────────────────
  function applyTranslations() {
    // Update html lang
    document.documentElement.lang = currentLang === 'zh' ? 'zh-HK' : currentLang === 'ja' ? 'ja' : 'en';

    // Update elements with data-i18n
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var key = el.getAttribute('data-i18n');
      var translated = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        if (el.type === 'hidden') {
          el.value = translated;
        } else if (el.type === 'submit' || el.type === 'button') {
          el.value = translated;
        } else {
          el.setAttribute('placeholder', translated);
        }
      } else if (el.tagName === 'META') {
        el.setAttribute('content', translated);
      } else if (el.tagName === 'OPTION') {
        el.textContent = translated;
      } else {
        // Leaf element (no child elements) with plain text: use textContent — safer, no HTML injection
        // Contains HTML tags or has children: use innerHTML — translation includes needed HTML tags
        if (el.children.length === 0 && !/<[a-zA-Z]/.test(translated)) {
          el.textContent = translated;
        } else {
          el.innerHTML = translated;
        }
      }
    }

    // Update elements with data-i18n-title
    var titleEls = document.querySelectorAll('[data-i18n-title]');
    for (var j = 0; j < titleEls.length; j++) {
      titleEls[j].setAttribute('title', t(titleEls[j].getAttribute('data-i18n-title')));
    }

    // Update elements with data-i18n-aria
    var ariaEls = document.querySelectorAll('[data-i18n-aria]');
    for (var k = 0; k < ariaEls.length; k++) {
      ariaEls[k].setAttribute('aria-label', t(ariaEls[k].getAttribute('data-i18n-aria')));
    }

    // Update elements with data-i18n-badge (CSS ::before content via data-badge-text)
    var badgeEls = document.querySelectorAll('[data-i18n-badge]');
    for (var b = 0; b < badgeEls.length; b++) {
      var badgeKey = badgeEls[b].getAttribute('data-i18n-badge');
      badgeEls[b].setAttribute('data-badge-text', t(badgeKey));
    }

    // Update floating button WhatsApp link
    var floatingWa = document.querySelector('.floating-btn-wa');
    if (floatingWa) {
      var waMsg = t('floating.wa.link');
      floatingWa.href = 'https://wa.me/85251336009?text=' + encodeURIComponent(waMsg);
    }

    // Update contact WhatsApp link
    var contactWa = document.querySelector('.contact-list a[href*="wa.me"]');
    if (contactWa) {
      var contactMsg = currentLang === 'en' ? 'I want to become a PawGo founding member. Payment completed, please confirm.' :
                       currentLang === 'ja' ? 'PawGo創設会員になりたいです。支払い完了しました。ご確認ください。' :
                       '我想成為PawGo種子會員，已付款請確認';
      contactWa.href = 'https://wa.me/85251336009?text=' + encodeURIComponent(contactMsg);
    }

    // Update email subject lines
    var emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    for (var m = 0; m < emailLinks.length; m++) {
      var href = emailLinks[m].getAttribute('href');
      if (href && href.includes('subject=')) {
        var newSubject = currentLang === 'en' ? 'Founding Member Confirmation - Payment Screenshot' :
                         currentLang === 'ja' ? '創設会員確認 - 支払いスクリーンショット' :
                         '種子會員確認 - 付款截圖';
        emailLinks[m].href = href.replace(/subject=[^&]+/, 'subject=' + encodeURIComponent(newSubject));
      }
    }

    // Update active language button
    document.querySelectorAll('.lang-option').forEach(function(btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  // ── Switch language ─────────────────────────────────────
  function switchLang(lang) {
    if (lang === currentLang) return;
    currentLang = lang;
    try { localStorage.setItem('pawgo-lang', lang); } catch(e) {}
    applyTranslations();
  }

  // ── Initialize ──────────────────────────────────────────
  var saved = null;
  try { saved = localStorage.getItem('pawgo-lang'); } catch(e) {}
  if (saved && (saved === 'zh' || saved === 'en' || saved === 'ja')) {
    currentLang = saved;
  }

  // Apply on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyTranslations);
  } else {
    applyTranslations();
  }

  // Expose
  window.t = t;
  window.switchLang = switchLang;
  window.getCurrentLang = function() { return currentLang; };
})();
