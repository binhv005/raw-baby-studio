// Thông tin chính thức do RAW Baby Studio cung cấp. Chỉ cập nhật tại đây.
export const contact = {
  brand: 'RAW Baby Studio',
  tagline: 'Studio & Photobooth',
  owner: 'Kim Yến',
  city: 'Nam Định',
  phoneDisplay: '0833 141 990',
  phoneTel: '0833141990',
  facebook: 'https://www.facebook.com/Chupanhbevagiadinhnamdinh',
  mapsUrl: 'https://maps.app.goo.gl/CAwjsarJcHH1UdFB8',
  zaloUrl: null, // Chưa có link Zalo
  branches: [
    { name: 'Cơ sở Nam Định', address: '45 Hàng Thao, TP. Nam Định', mapsUrl: 'https://maps.app.goo.gl/CAwjsarJcHH1UdFB8' },
    { name: 'Cơ sở TP. Hồ Chí Minh', address: '708 Phan Văn Trị, Phường 10, Gò Vấp, TP. HCM', mapsUrl: null },
  ],
};

const img = (folder, n) => `/images/raw/${folder}/${String(n).padStart(2, '0')}.jpg`;
const range = (folder, list) => list.map((n) => img(folder, n));

// Bốn nhóm dịch vụ chính
export const services = ['Chụp ảnh bầu', 'Chụp ảnh sơ sinh', 'Chụp ảnh gia đình', 'Chụp ảnh cá nhân'];

// Concept tiêu biểu (lấy từ ảnh thật của studio)
export const concepts = [
  {
    id: 'newborn',
    name: 'Chụp ảnh newborn',
    badge: 'Sơ sinh',
    image: img('newborn', 2),
    imagePosition: 'center 30%',
    description: 'Lưu giữ những ngày đầu đời bé nhỏ, an toàn và nhẹ nhàng cho bé.',
    fullDescription:
      'Thế mạnh của RAW Baby Studio. Bé được tạo dáng nhẹ nhàng, an toàn trong không gian ấm áp; studio chuẩn bị sẵn mũ len, thú bông, chữ trang trí và phông nền nhiều màu để ba mẹ chọn.',
    highlights: ['Kinh nghiệm chụp bé sơ sinh', 'Đạo cụ, mũ len, thú bông chuẩn bị sẵn', 'Tạo dáng nhẹ nhàng, ưu tiên an toàn của bé'],
    gallery: range('newborn', [2, 3, 4, 5, 7, 1, 6]),
  },
  {
    id: 'family-trung-thu',
    name: 'Chụp ảnh gia đình - Trung thu',
    badge: 'Gia đình',
    image: img('trung-thu', 4),
    imagePosition: 'center 25%',
    description: 'Mẹ và bé rạng rỡ trong không gian Trung thu đỏ thắm, đèn ông sao, trống con.',
    fullDescription:
      'Bộ ảnh kỷ niệm cho cả nhà với bối cảnh Trung thu truyền thống: trăng tròn, đèn ông sao, trống con và sắc đỏ tươi vui. Phù hợp chụp mẹ và bé, anh chị em hoặc cả gia đình.',
    highlights: ['Bối cảnh Trung thu dựng riêng', 'Trang phục đồng điệu cho mẹ và bé', 'Phù hợp gia đình nhiều thành viên'],
    gallery: range('trung-thu', [4, 2, 9, 17, 13, 1, 15, 5]),
  },
  {
    id: 'birthday',
    name: 'Chụp ảnh sinh nhật bé',
    badge: 'Trẻ nhỏ',
    image: img('sinh-nhat', 4),
    imagePosition: 'center 30%',
    description: 'Phông nền pastel, gấu bông, bánh kem - kỷ niệm tuổi mới thật đáng yêu.',
    fullDescription:
      'Concept sinh nhật với phông nền pastel, chữ Happy Birthday, gấu bông và số tuổi trang trí. Bé tự do vui chơi, studio bắt trọn những biểu cảm hồn nhiên nhất.',
    highlights: ['Set sinh nhật theo số tuổi của bé', 'Không gian tươi sáng, màu pastel', 'Có thể chụp cùng anh chị em'],
    gallery: range('sinh-nhat', [4, 17, 2, 12, 6, 15, 8, 20]),
  },
  {
    id: 'little-man',
    name: 'Concept Little Man',
    badge: 'Bé trai',
    image: img('little-man', 4),
    imagePosition: 'center 25%',
    description: 'Phong cách tạp chí thời trang cho bé trai: kính râm, áo khoác da, cà vạt.',
    fullDescription:
      'Bé trai hóa thân thành một quý ông nhỏ với áo khoác da, sơ mi, cà vạt và kính râm. Ảnh có thể thiết kế thành bìa tạp chí độc đáo.',
    highlights: ['Trang phục và phụ kiện có sẵn', 'Tông nâu cổ điển, sang trọng', 'Có thiết kế bìa tạp chí'],
    gallery: range('little-man', [4, 2, 5, 3, 6, 1, 7]),
  },
  {
    id: 'creative',
    name: 'Concept nghệ thuật cho bé',
    badge: 'Sáng tạo',
    image: img('tho-dan', 16),
    imagePosition: 'center 25%',
    description: 'Thổ dân tinh nghịch, tiên nhỏ trong rừng - mỗi bé là một nhân vật.',
    fullDescription:
      'Những concept giàu tính tạo hình như thổ dân với mũ lông vũ, hay nàng tiên nhỏ giữa khu rừng cổ tích. Studio lo trang phục, phụ kiện và hậu kỳ để bé có bộ ảnh như truyện tranh.',
    highlights: ['Đa dạng concept, trang phục và phụ kiện', 'Chụp ngoại cảnh và hậu kỳ nghệ thuật', 'Bắt trọn biểu cảm tinh nghịch của bé'],
    gallery: [...range('tho-dan', [16, 3, 17, 7, 10]), ...range('fairy', [1, 3, 2])],
  },
  {
    id: 'personal',
    name: 'Chụp ảnh cá nhân - Nam Phương Hoàng Hậu',
    badge: 'Cá nhân',
    image: img('nam-phuong', 21),
    imagePosition: 'center 20%',
    description: 'Vẻ đẹp cổ điển, thanh lịch với đầm lụa, hoa loa kèn và kiến trúc Pháp.',
    fullDescription:
      'Concept cá nhân lấy cảm hứng từ Nam Phương Hoàng Hậu: đầm lụa trắng, tóc búi cổ điển, hoa loa kèn và bối cảnh kiến trúc xưa. Dành cho mẹ hoặc các nàng muốn lưu lại vẻ đẹp thanh lịch.',
    highlights: ['Trang điểm và làm tóc theo concept', 'Chụp trong studio và ngoại cảnh', 'Tông màu hoài cổ, sang trọng'],
    gallery: range('nam-phuong', [21, 5, 1, 12, 23, 15, 9, 18]),
  },
];

// Bộ sưu tập: phân loại theo ảnh thật
export const galleryFilters = [
  { id: 'all', label: 'Tất cả' },
  { id: 'newborn', label: 'Sơ sinh' },
  { id: 'kids', label: 'Bé yêu' },
  { id: 'family', label: 'Gia đình' },
  { id: 'personal', label: 'Cá nhân' },
  { id: 'bts', label: 'Hậu trường' },
];

const g = (folder, n, cats, alt) => ({ src: img(folder, n), cats, alt });

export const gallery = [
  g('newborn', 2, ['newborn'], 'Bé sơ sinh ngủ ngon bên thú bông ngựa trắng'),
  g('trung-thu', 2, ['family'], 'Mẹ và bé gái cầm đèn ông sao đêm Trung thu'),
  g('sinh-nhat', 17, ['kids'], 'Bé gái đội mũ nồi xanh cười tươi bên số 4'),
  g('tho-dan', 16, ['kids'], 'Bé hóa thân thổ dân với mũ lông vũ'),
  g('nam-phuong', 1, ['personal'], 'Đầm lụa trắng bên bình hoa loa kèn'),
  g('newborn', 7, ['newborn'], 'Bé sơ sinh mỉm cười trong chăn len xanh'),
  g('little-man', 4, ['kids'], 'Bé trai đeo kính râm phong cách quý ông'),
  g('trung-thu', 9, ['kids'], 'Bé gái áo đỏ cầm đèn ông sao dưới trăng tròn'),
  g('fairy', 3, ['kids'], 'Bé gái váy trắng chạy giữa rừng cổ tích'),
  g('cham-soc', 5, ['bts', 'family'], 'Hậu trường buổi chụp ảnh gia đình tại studio'),
  g('sinh-nhat', 2, ['kids'], 'Bé gái mặc váy công chúa tiệc sinh nhật pastel'),
  g('nam-phuong', 5, ['personal'], 'Chụp ngoại cảnh trên cầu thang kiến trúc Pháp'),
  g('newborn', 4, ['newborn'], 'Bé sơ sinh ôm ngựa bông trên nền xanh'),
  g('trung-thu', 17, ['family'], 'Mẹ cùng ba bé trong bối cảnh Trung thu'),
  g('cham-soc', 6, ['bts', 'family'], 'Ba mẹ tạo dáng cùng gấu bông'),
  g('tho-dan', 3, ['kids'], 'Bé thổ dân cầm giáo giữa rừng cây'),
  g('sinh-nhat', 6, ['kids', 'family'], 'Hai anh em trong tiệc sinh nhật'),
  g('nam-phuong', 12, ['personal'], 'Đứng trước cánh cửa gỗ xanh cổ điển'),
  g('cham-soc', 2, ['bts', 'personal'], 'Khách hàng chụp ảnh cá nhân cùng hoa tulip'),
  g('trung-thu', 4, ['family'], 'Mẹ bế bé gái trong trang phục đồng điệu'),
  g('fairy', 1, ['kids'], 'Bé gái trong khu rừng ánh nắng'),
  g('cham-soc', 3, ['bts'], 'Ekip RAW Baby Studio hướng dẫn tạo dáng'),
  g('little-man', 2, ['kids'], 'Bìa tạp chí của quý ông nhỏ'),
  g('newborn', 6, ['newborn'], 'Bé sơ sinh bên chữ LOVE màu xanh'),
];

// Catalog dịch vụ (chưa có bảng giá chính thức)
export const pricingPackages = [
  {
    id: 'maternity',
    image: img('cham-soc', 1),
    imagePosition: '60% 45%',
    name: 'Chụp ảnh bầu',
    features: ['Lưu giữ hành trình mang thai', 'Chụp mẹ bầu cùng ba hoặc gia đình', 'Trang phục và phụ kiện có sẵn'],
  },
  {
    id: 'newborn',
    image: img('newborn', 1),
    imagePosition: '45% 40%',
    name: 'Chụp ảnh sơ sinh',
    features: ['Thế mạnh của studio', 'Đạo cụ newborn chuẩn bị sẵn', 'Ưu tiên an toàn, thoải mái cho bé'],
  },
  {
    id: 'family',
    image: img('trung-thu', 16),
    imagePosition: 'center 25%',
    name: 'Chụp ảnh gia đình',
    features: ['Ảnh kỷ niệm cho cả nhà', 'Concept theo mùa, lễ Tết, sinh nhật', 'Phù hợp gia đình nhiều thành viên'],
  },
  {
    id: 'personal',
    image: img('nam-phuong', 21),
    imagePosition: 'center 20%',
    name: 'Chụp ảnh cá nhân',
    features: ['Concept cá nhân đa dạng', 'Chụp trong studio hoặc ngoại cảnh', 'Tư vấn trang phục theo concept'],
  },
];
