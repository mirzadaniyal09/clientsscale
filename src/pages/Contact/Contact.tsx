import ContactForm from "./ContactForm";

const CONTACT_INFO = [
  {
    label: "Visit Us",
    value: "1894 E William St STE 4, Carson City, NV 89701",
    href: "https://www.google.com/maps/place/1894+E+William+St,+Carson+City,+NV+89701",
    icon: "⌖",
  },
  {
    label: "Call Us",
    value: "(626) 548 7517",
    href: "tel:+16265487517",
    icon: "↗",
  },
  {
    label: "Email Us",
    value: "info@systemmapai.com",
    href: "mailto:info@systemmapai.com",
    icon: "✉",
  },
  {
    label: "Business Hours",
    value: "Mon–Fri: 9:00am – 7:00pm",
    href: null,
    icon: "◷",
  },
];

export default function ContactPage() {
  return (
    <main className="contact-page">
      <style>{`
                .contact-page {
                    min-height: 100vh;
                    overflow: hidden;
                    background:
                        radial-gradient(circle at 85% 8%, rgba(9, 169, 199, 0.12), transparent 28%),
                        radial-gradient(circle at 8% 35%, rgba(9, 169, 199, 0.06), transparent 25%),
                        #f8fafc;
                    color: #0b1220;
                }

                .contact-page *,
                .contact-page *::before,
                .contact-page *::after {
                    box-sizing: border-box;
                }

                .contact-page .container {
                    position: relative;
                    z-index: 1;
                    width: min(1180px, calc(100% - 40px));
                    margin: 0 auto;
                }

                .contact-hero {
                    position: relative;
                    padding: 88px 0 62px;
                    text-align: center;
                }

                .contact-hero::before {
                    content: "";
                    position: absolute;
                    top: -150px;
                    left: 50%;
                    width: 520px;
                    height: 520px;
                    transform: translateX(-50%);
                    border: 1px solid rgba(9, 169, 199, 0.10);
                    border-radius: 50%;
                    pointer-events: none;
                }

                .contact-eyebrow {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    margin-bottom: 18px;
                    color: #079bb5;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 0.14em;
                    text-transform: uppercase;
                }

                .contact-eyebrow::before,
                .contact-eyebrow::after {
                    content: "";
                    width: 30px;
                    height: 2px;
                    border-radius: 99px;
                    background: #09a9c7;
                }

                .contact-title {
                    margin: 0;
                    color: #07111f;
                    font-size: clamp(42px, 6vw, 68px);
                    line-height: 1;
                    letter-spacing: -0.055em;
                    font-weight: 850;
                }

                .contact-subtitle {
                    width: min(700px, 100%);
                    margin: 20px auto 0;
                    color: #64748b;
                    font-size: 17px;
                    line-height: 1.75;
                }

                .contact-content {
                    padding: 0 0 100px;
                }

                .contact-info-grid {
                    display: grid;
                    grid-template-columns: repeat(4, minmax(0, 1fr));
                    gap: 16px;
                    margin-bottom: 24px;
                }

                .contact-info-card {
                    position: relative;
                    min-height: 164px;
                    padding: 24px;
                    overflow: hidden;
                    border: 1px solid #e2e8f0;
                    border-radius: 18px;
                    background: rgba(255, 255, 255, 0.88);
                    box-shadow: 0 16px 45px rgba(15, 23, 42, 0.055);
                    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
                }

                .contact-info-card::after {
                    content: "";
                    position: absolute;
                    right: -35px;
                    bottom: -45px;
                    width: 120px;
                    height: 120px;
                    border-radius: 50%;
                    background: rgba(9, 169, 199, 0.06);
                }

                .contact-info-card:hover {
                    transform: translateY(-5px);
                    border-color: rgba(9, 169, 199, 0.38);
                    box-shadow: 0 22px 55px rgba(15, 23, 42, 0.09);
                }

                .contact-icon {
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 18px;
                    border: 1px solid rgba(9, 169, 199, 0.18);
                    border-radius: 12px;
                    background: #effbfc;
                    color: #079bb5;
                    font-size: 19px;
                    font-weight: 700;
                }

                .contact-info-label {
                    margin-bottom: 7px;
                    color: #94a3b8;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                }

                .contact-info-value {
                    color: #172033;
                    font-size: 14px;
                    font-weight: 650;
                    line-height: 1.55;
                }

                .contact-info-value:hover {
                    color: #079bb5;
                }

                .contact-main-grid {
                    display: grid;
                    grid-template-columns: minmax(0, 1.45fr) minmax(320px, 0.75fr);
                    gap: 24px;
                    align-items: stretch;
                }

                .contact-form-card,
                .contact-side-card {
                    border: 1px solid #e2e8f0;
                    border-radius: 24px;
                    background: #ffffff;
                    box-shadow: 0 24px 70px rgba(15, 23, 42, 0.065);
                }

                .contact-form-card {
                    padding: clamp(26px, 4vw, 42px);
                }

                .contact-form-heading {
                    margin: 0;
                    color: #0b1220;
                    font-size: 26px;
                    line-height: 1.15;
                    letter-spacing: -0.03em;
                    font-weight: 800;
                }

                .contact-form-intro {
                    max-width: 620px;
                    margin: 10px 0 28px;
                    color: #64748b;
                    font-size: 14px;
                    line-height: 1.7;
                }

                .contact-form {
                    display: grid;
                    gap: 16px;
                }

                .contact-fields {
                    display: grid;
                    grid-template-columns: repeat(2, minmax(0, 1fr));
                    gap: 16px;
                }

                .contact-field {
                    display: grid;
                    gap: 7px;
                }

                .contact-field label {
                    color: #334155;
                    font-size: 12px;
                    font-weight: 750;
                }

                .contact-field input,
                .contact-field textarea {
                    width: 100%;
                    border: 1px solid #dbe3ea;
                    border-radius: 12px;
                    outline: none;
                    background: #fbfdfe;
                    color: #0f172a;
                    padding: 13px 15px;
                    font: inherit;
                    font-size: 14px;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
                }

                .contact-field input {
                    height: 48px;
                }

                .contact-field textarea {
                    min-height: 145px;
                    resize: vertical;
                }

                .contact-field input::placeholder,
                .contact-field textarea::placeholder {
                    color: #a3afbd;
                }

                .contact-field input:focus,
                .contact-field textarea:focus {
                    border-color: #09a9c7;
                    background: #ffffff;
                    box-shadow: 0 0 0 4px rgba(9, 169, 199, 0.10);
                }

                .contact-submit {
                    margin-top: 4px;
                }

                .contact-side-card {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    min-height: 100%;
                    padding: 34px;
                    overflow: hidden;
                    color: #ffffff;
                    background:
                        radial-gradient(circle at 90% 8%, rgba(9, 169, 199, 0.32), transparent 30%),
                        linear-gradient(145deg, #08111f 0%, #101b2d 100%);
                    border-color: #17263b;
                }

                .contact-side-card::before {
                    content: "";
                    position: absolute;
                    right: -120px;
                    top: -120px;
                    width: 300px;
                    height: 300px;
                    border: 1px solid rgba(9, 169, 199, 0.18);
                    border-radius: 50%;
                }

                .contact-side-card::after {
                    content: "";
                    position: absolute;
                    right: -65px;
                    top: -65px;
                    width: 190px;
                    height: 190px;
                    border: 1px solid rgba(255, 255, 255, 0.07);
                    border-radius: 50%;
                }

                .contact-side-content {
                    position: relative;
                    z-index: 1;
                }

                .contact-side-kicker {
                    color: #27c3df;
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 0.13em;
                    text-transform: uppercase;
                }

                .contact-side-title {
                    margin: 12px 0 14px;
                    color: #ffffff;
                    font-size: 30px;
                    line-height: 1.12;
                    letter-spacing: -0.035em;
                    font-weight: 800;
                }

                .contact-side-copy {
                    color: #aebdce;
                    font-size: 14px;
                    line-height: 1.75;
                }

                .contact-quote {
                    position: relative;
                    z-index: 1;
                    margin: 36px 0 0;
                    padding-top: 24px;
                    border-top: 1px solid rgba(255, 255, 255, 0.10);
                }

                .contact-quote-mark {
                    color: #20b9d5;
                    font-size: 34px;
                    line-height: 0.7;
                    font-weight: 800;
                }

                .contact-quote-text {
                    margin: 12px 0 20px;
                    color: #e6edf5;
                    font-size: 15px;
                    line-height: 1.75;
                }

                .contact-person {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                }

                .contact-avatar {
                    width: 40px;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: linear-gradient(135deg, #09a9c7, #0d7188);
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 800;
                }

                .contact-person-name {
                    color: #ffffff;
                    font-size: 13px;
                    font-weight: 750;
                }

                .contact-person-role {
                    margin-top: 3px;
                    color: #8798ac;
                    font-size: 11px;
                }

                .contact-trust {
                    position: relative;
                    z-index: 1;
                    display: flex;
                    align-items: center;
                    gap: 9px;
                    margin-top: 34px;
                    padding-top: 20px;
                    border-top: 1px solid rgba(255, 255, 255, 0.10);
                    color: #91a3b8;
                    font-size: 11px;
                    line-height: 1.5;
                }

                .contact-trust-dot {
                    width: 8px;
                    height: 8px;
                    flex: 0 0 auto;
                    border-radius: 50%;
                    background: #20c3df;
                    box-shadow: 0 0 0 5px rgba(32, 195, 223, 0.10);
                }

                @media (max-width: 1000px) {
                    .contact-info-grid {
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                    }

                    .contact-main-grid {
                        grid-template-columns: 1fr;
                    }

                    .contact-side-card {
                        min-height: 400px;
                    }
                }

                @media (max-width: 650px) {
                    .contact-page .container {
                        width: min(100% - 28px, 1180px);
                    }

                    .contact-hero {
                        padding: 62px 0 42px;
                    }

                    .contact-title {
                        font-size: 43px;
                    }

                    .contact-subtitle {
                        font-size: 15px;
                        line-height: 1.65;
                    }

                    .contact-info-grid,
                    .contact-fields {
                        grid-template-columns: 1fr;
                    }

                    .contact-info-card {
                        min-height: auto;
                    }

                    .contact-form-card,
                    .contact-side-card {
                        padding: 25px;
                        border-radius: 20px;
                    }

                    .contact-content {
                        padding-bottom: 65px;
                    }
                }
            `}</style>

      {/* HERO */}
      <section className="contact-hero">
        <div className="container">
          <div className="contact-eyebrow">Let's Talk</div>
          <h1 className="contact-title">Contact Us</h1>
          <p className="contact-subtitle">
            Have a project in mind or simply want to explore what's possible?
            Tell us what you're building and our team will help you find the
            right path forward.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          {/* CONTACT INFO */}
          <div className="contact-info-grid">
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className="contact-info-card">
                <div className="contact-icon" aria-hidden="true">
                  {info.icon}
                </div>

                <div className="contact-info-label">{info.label}</div>

                {info.href ? (
                  <a className="contact-info-value" href={info.href}>
                    {info.value}
                  </a>
                ) : (
                  <div className="contact-info-value">{info.value}</div>
                )}
              </div>
            ))}
          </div>

          {/* FORM + TESTIMONIAL */}
          <div className="contact-main-grid">
            <div className="contact-form-card">
              <h2 className="contact-form-heading">Send Us a Message</h2>
              <p className="contact-form-intro">
                Share a few details about your project and we'll get back to you
                with the next steps and a free quote.
              </p>
              <ContactForm />
            </div>

            <aside className="contact-side-card">
              <div className="contact-side-content">
                <div className="contact-side-kicker">Why Work With Us</div>
                <h2 className="contact-side-title">
                  Let's turn your idea into something exceptional.
                </h2>
                <p className="contact-side-copy">
                  From strategy and design to development and growth, we bring
                  everything together to create digital experiences that move
                  your business forward.
                </p>

                <div className="contact-quote">
                  <div className="contact-quote-mark">“</div>
                  <p className="contact-quote-text">
                    Working with them is always a pleasure. Their team is
                    responsive, efficient, and consistently meets deadlines.
                    They've been integral in pushing our digital boundaries.
                  </p>

                  <div className="contact-person">
                    <div className="contact-avatar">AE</div>
                    <div>
                      <div className="contact-person-name">Ava Evans</div>
                      <div className="contact-person-role">
                        Creative Director, Fusion LLC
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-trust">
                <span className="contact-trust-dot" />
                <span>
                  Your information is kept private and used only to respond to
                  your inquiry.
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
