import React, { useState, useEffect } from 'react';
import { Send, Info, Check, ZoomIn } from 'lucide-react';
import AutoSlideshow from './AutoSlideshow';
import { concepts, contact } from '../data/studio';

const emptyForm = {
  fullName: '',
  phone: '',
  concept: '',
  date: '',
  timeSlot: '',
  people: '1',
  notes: '',
};

const labelStyle = { display: 'block', fontSize: '0.86rem', fontWeight: 600, color: 'var(--color-forest)', marginBottom: '6px' };
const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  backgroundColor: '#ffffff',
  border: '1px solid #F5DADA',
  borderRadius: 0,
  fontSize: '0.9rem',
  outline: 'none',
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  color: 'var(--color-text-dark)',
};
const errorStyle = { color: '#b4233c', fontSize: '0.78rem', marginTop: '4px' };

export default function BookingForm({ selectedRoomName, onSelectRoom, onOpenLightbox, prefill }) {
  const [formData, setFormData] = useState({ ...emptyForm, concept: selectedRoomName || '' });
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  // Concept chosen elsewhere on the page -> auto-fill
  useEffect(() => {
    setFormData((prev) => ({ ...prev, concept: selectedRoomName || '' }));
  }, [selectedRoomName]);

  // Quick bar in hero -> auto-fill date & people
  useEffect(() => {
    if (prefill) {
      setFormData((prev) => ({
        ...prev,
        date: prefill.shootDate || prev.date,
        people: prefill.people ? String(parseInt(prefill.people, 10)) : prev.people,
      }));
    }
  }, [prefill]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setNotice(false);
    if (name === 'concept' && onSelectRoom) onSelectRoom(value, null, true);
  };

  const validate = () => {
    const next = {};
    if (!formData.fullName.trim()) next.fullName = 'Vui lòng nhập họ và tên.';
    const digits = formData.phone.replace(/[\s.\-()+]/g, '');
    if (!formData.phone.trim()) next.phone = 'Vui lòng nhập số điện thoại.';
    else if (!/^\d{8,11}$/.test(digits)) next.phone = 'Số điện thoại chưa hợp lệ (8–11 chữ số).';
    if (formData.date && formData.date < today) next.date = 'Ngày chụp không được ở quá khứ.';
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitting) return;
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setSubmitting(true);
    // Chưa có hệ thống tiếp nhận: không giả lập gửi thành công.
    setTimeout(() => {
      setNotice(true);
      setSubmitting(false);
    }, 400);
  };

  return (
    <section
      id="booking"
      className="section-resort"
      style={{ backgroundColor: '#ffffff', borderTop: '1px solid var(--color-border)', paddingTop: '60px', paddingBottom: '80px' }}
    >
      <div className="container container-wide">
        {/* Section 8: Photoshoot Journey */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="tag-subtitle">QUY TRÌNH ĐẶT LỊCH</span>
          <h2 style={headingStyle}>Đặt lịch thật dễ dàng</h2>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
            gap: '28px',
            maxWidth: '1000px',
            margin: '0 auto 70px auto',
          }}
        >
          {[
            { n: '01', t: 'Chọn concept', d: 'Chọn dịch vụ và concept bạn yêu thích cho bé.' },
            { n: '02', t: 'Gửi yêu cầu đặt lịch', d: 'Điền thông tin và thời gian mong muốn.' },
            { n: '03', t: 'Xác nhận lịch với studio', d: 'Studio trao đổi để xác nhận lịch và chi phí.' },
          ].map((s, i) => (
            <div key={s.n} className={`reveal reveal-up delay-${(i + 1) * 100}`} style={{ textAlign: 'center', padding: '0 8px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '3.4rem', color: '#F6B8BF', lineHeight: 1 }}>{s.n}</div>
              <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-coral)', margin: '12px auto' }} />
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-forest-dark)', marginBottom: '8px' }}>{s.t}</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem', lineHeight: 1.65 }}>{s.d}</p>
            </div>
          ))}
        </div>

        {/* Section 9: Concept selector */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '28px' }}>
          <h2 style={{ ...headingStyle, fontSize: 'clamp(2.2rem, 4vw, 3.2rem)' }}>Concept nào dành cho bạn?</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '8px auto 0 auto' }}>
            Bắt đầu bằng concept bạn yêu thích cho bé và gia đình.
          </p>
        </div>
        <div
          className="concept-grid"
          role="radiogroup"
          aria-label="Chọn concept"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(150px, 100%), 1fr))', gap: '14px', maxWidth: '1000px', margin: '0 auto 14px auto' }}
        >
          {concepts.map((c, i) => {
            const selected = selectedRoomName === c.name;
            return (
              <div
                key={c.id}
                className="zoom-hover"
                style={{
                  position: 'relative',
                  backgroundColor: selected ? '#FDECEC' : '#ffffff',
                  border: '2px solid ' + (selected ? 'var(--color-coral)' : '#F5DADA'),
                  transition: 'all 0.25s ease',
                }}
              >
                <button
                  role="radio"
                  aria-checked={selected}
                  onClick={() => onSelectRoom(selected ? '' : c.name, null, true)}
                  style={{ display: 'block', width: '100%', textAlign: 'center', padding: '8px 8px 12px 8px', background: 'none' }}
                >
                  <div style={{ position: 'relative', aspectRatio: '4 / 5', overflow: 'hidden', marginBottom: '8px' }}>
                    <AutoSlideshow images={c.gallery.map((src) => ({ src, pos: c.imagePosition }))} alt={c.name} interval={3600} startDelay={i * 700} defaultPos={c.imagePosition} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--color-forest)', lineHeight: 1.3, display: 'block', minHeight: '2.6em' }}>{c.name}</span>
                </button>
                <button
                  onClick={() => onOpenLightbox(c.gallery.map((src) => ({ src, alt: c.name })), 0)}
                  aria-label={`Phóng to ảnh ${c.name}`}
                  style={{ position: 'absolute', left: '16px', top: '16px', width: '32px', height: '32px', borderRadius: '50%', backgroundColor: 'rgba(255, 252, 251,0.92)', color: 'var(--color-forest)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}
                >
                  <ZoomIn size={16} />
                </button>
                {selected && (
                  <span style={{ position: 'absolute', top: '16px', right: '16px', width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--color-coral)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none', zIndex: 3 }}>
                    <Check size={14} />
                  </span>
                )}
              </div>
            );
          })}
        </div>
        <p style={{ textAlign: 'center', fontSize: '0.82rem', color: 'var(--color-text-muted)', marginBottom: '60px' }}>
          Có thể bỏ qua nếu muốn được tư vấn trước.
        </p>

        {/* Section 10: Booking form */}
        <div className="reveal reveal-up" style={{ textAlign: 'center', marginBottom: '36px' }}>
          <span className="tag-subtitle">ĐẶT LỊCH CHỤP</span>
          <h2 style={headingStyle}>Cùng tạo nên bộ ảnh đáng yêu</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', maxWidth: '580px', margin: '8px auto 0 auto' }}>
            Chia sẻ ý tưởng, độ tuổi của bé và thời gian bạn mong muốn.
          </p>
        </div>

        <div
          className="booking-split-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(340px, 100%), 1fr))',
            border: '1px solid #F5DADA',
            overflow: 'hidden',
            backgroundColor: '#FDECEC',
            boxShadow: 'var(--shadow-card)',
          }}
        >
          <div className="reveal reveal-left booking-photo" style={{ position: 'relative', width: '100%', minHeight: '480px', height: '100%', overflow: 'hidden' }}>
            <img
              src="/images/raw/trung-thu/16.jpg"
              alt="Mẹ và các bé chụp ảnh gia đình Trung thu - RAW Baby Studio"
              loading="lazy"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
            />
          </div>

          <div
            className="reveal reveal-right delay-200"
            style={{ padding: 'clamp(28px, 4vw, 48px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
          >
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(200px, 100%), 1fr))', gap: '16px' }}>
                <div>
                  <label htmlFor="fullName" style={labelStyle}>Họ và tên <span style={{ color: 'var(--color-coral)' }}>*</span></label>
                  <input id="fullName" type="text" name="fullName" placeholder="Nhập họ và tên" value={formData.fullName} onChange={handleChange} style={inputStyle} />
                  {errors.fullName && <div style={errorStyle}>{errors.fullName}</div>}
                </div>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Số điện thoại <span style={{ color: 'var(--color-coral)' }}>*</span></label>
                  <input id="phone" type="tel" name="phone" placeholder="Nhập số điện thoại" value={formData.phone} onChange={handleChange} style={inputStyle} />
                  {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
                </div>
              </div>

              <div>
                <label htmlFor="concept" style={labelStyle}>Concept muốn chụp</label>
                <select id="concept" name="concept" value={formData.concept} onChange={handleChange} style={inputStyle}>
                  <option value="">Chưa chọn - muốn được tư vấn</option>
                  {concepts.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div className="booking-row3" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(130px, 100%), 1fr))', gap: '14px' }}>
                <div className="booking-date">
                  <label htmlFor="date" style={labelStyle}>Ngày chụp mong muốn</label>
                  <input id="date" type="date" name="date" min={today} value={formData.date} onChange={handleChange} style={inputStyle} />
                  {errors.date && <div style={errorStyle}>{errors.date}</div>}
                </div>
                <div>
                  <label htmlFor="timeSlot" style={labelStyle}>Khung giờ mong muốn</label>
                  <select id="timeSlot" name="timeSlot" value={formData.timeSlot} onChange={handleChange} style={inputStyle}>
                    <option value="">Chưa chọn</option>
                    <option value="Sáng">Buổi sáng</option>
                    <option value="Chiều">Buổi chiều</option>
                    <option value="Tối">Buổi tối</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="people" style={labelStyle}>Số người tham gia</label>
                  <select id="people" name="people" value={formData.people} onChange={handleChange} style={inputStyle}>
                    <option value="1">1 người</option>
                    <option value="2">2 người</option>
                    <option value="3">3 người</option>
                    <option value="4">4 người trở lên</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="notes" style={labelStyle}>Nội dung cần tư vấn</label>
                <textarea id="notes" name="notes" rows="3" placeholder="Ví dụ: bé 10 ngày tuổi, muốn chụp newborn tại cơ sở Nam Định..." value={formData.notes} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} />
              </div>

              <button type="submit" disabled={submitting} className="btn-resort-primary" style={{ width: '100%', padding: '14px', fontSize: '0.98rem', borderRadius: 0, marginTop: '4px', opacity: submitting ? 0.7 : 1 }}>
                <Send size={17} />
                <span>{submitting ? 'ĐANG XỬ LÝ...' : 'GỬI YÊU CẦU ĐẶT LỊCH'}</span>
              </button>

              {notice && (
                <div
                  role="status"
                  style={{ display: 'flex', gap: '10px', padding: '14px 16px', backgroundColor: '#FFFCFB', border: '1px solid var(--color-coral)', fontSize: '0.88rem', lineHeight: 1.6, color: 'var(--color-forest)' }}
                >
                  <Info size={18} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--color-coral)' }} />
                  <span>
                    Biểu mẫu hiện chưa được kết nối với hệ thống tiếp nhận nên yêu cầu <strong>chưa được gửi đi</strong>. Vui lòng gọi{' '}
                    <a href={`tel:${contact.phoneTel}`} style={{ color: 'var(--color-coral)', fontWeight: 700, textDecoration: 'underline' }}>
                      {contact.phoneDisplay}
                    </a>{' '}
                    hoặc nhắn tin qua{' '}
                    <a href={contact.facebook} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-coral)', fontWeight: 700, textDecoration: 'underline' }}>
                      Facebook
                    </a>{' '}
                    để đặt lịch.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

const headingStyle = {
  fontFamily: "'Dancing Script', 'Alex Brush', cursive",
  fontSize: 'clamp(2.8rem, 5.2vw, 4.2rem)',
  color: 'var(--color-coral)',
  fontWeight: 700,
  lineHeight: 1.15,
  marginBottom: '10px',
};
