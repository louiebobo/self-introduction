function Contact() {
  const contacts = [
    { label: 'Email', value: '311louie@gmail.com', href: 'mailto:311louie@gmail.com' },
    { label: 'Phone', value: '0958868004', href: 'tel:0958868004' },
    { label: 'GitHub', value: '（待補）', href: null },
    { label: 'LinkedIn', value: '（待補）', href: null },
  ];

  return (
    <div className="page">
      <h1 className="page-title">聯絡方式</h1>
      <p className="page-subtitle">歡迎透過以下方式與我聯絡</p>

      <div className="contact-list">
        {contacts.map((c) => (
          <div key={c.label} className="contact-item">
            <span className="contact-label">{c.label}</span>
            {c.href ? (
              <a href={c.href} className="contact-value link">{c.value}</a>
            ) : (
              <span className="contact-value muted">{c.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
