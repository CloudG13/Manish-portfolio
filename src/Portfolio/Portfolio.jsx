import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

const SKILLS = [
  { category: "Cloud Platforms", icon: "☁️", items: ["AWS", "GCP"] },
  { category: "DevOps Tools", icon: "⚙️", items: ["Docker", "Kubernetes", "Jenkins", "Ansible"] },
  { category: "Version Control", icon: "🔀", items: ["Git", "GitHub"] },
  { category: "Programming", icon: "💻", items: ["Python", "Bash"] },
  { category: "Operating Systems", icon: "🖥️", items: ["Ubuntu", "CentOS", "RHEL8", "Windows"] },
];

const EXPERIENCE = [
  {
    role: "Google Cloud Ready Program",
    company: "Google Cloud Inc",
    type: "Virtual",
    period: "Feb 2023 – May 2023",
    emoji: "☁️",
    accentColor: "#4285F4",
    points: [
      "Built a strong foundation in GCP Cloud services and architecture.",
      "Gained practical knowledge through structured, hands-on labs.",
      "Developed deep understanding of IAM Roles, Cloud Storage, Cloud Functions, and VM Instances.",
    ],
  },
  {
    role: "ASE Intern",
    company: "Walmart Global Tech at TATA (Forage)",
    type: "Virtual",
    period: "Dec 2022 – Feb 2023",
    emoji: "🏢",
    accentColor: "#0071CE",
    points: [
      "Set up a high-profile, high-stakes enterprise project architecture.",
      "Deployed Apache Kafka and integrated it with the project database.",
      "Deployed a Spring Boot application and connected it with a REST API.",
    ],
  },
];

const PROJECTS = [
  {
    title: "CI/CD Pipeline",
    emoji: "🚀",
    desc: "End-to-end automated delivery pipeline for a demo e-commerce application, ensuring high performance and quality through DevOps automation.",
    tech: ["Git", "Jenkins", "Ansible", "Docker", "Kubernetes", "EC2", "S3", "Route 53"],
    tag: "DevOps",
  },
  {
    title: "3-Tier Architecture on AWS",
    emoji: "🏗️",
    desc: "Secure, highly available web application deployed with a three-tier architecture — frontend, backend, and database — on AWS with full networking setup.",
    tech: ["EC2", "VPC", "RDS", "ELB", "ASG", "S3", "NAT", "IAM"],
    tag: "Cloud",
  },
];

const CERTS = [
  { name: "AWS Cloud Quest: Cloud Practitioner", issuer: "AWS", year: "2023" },
  { name: "CodeKaze AIR-4116", issuer: "Coding Ninjas", year: "2023" },
  { name: "Google Cloud Digital Leader Training", issuer: "Coursera", year: "2022" },
  { name: "Architecting with Google Compute Engine Specialization", issuer: "Coursera", year: "2022" },
  { name: "AWS Academy Graduate – Cloud Foundations", issuer: "AWS", year: "2022" },
  { name: "AWS Academy Graduate – ML Foundation", issuer: "AWS", year: "2022" },
  { name: "AWS Academy Graduate – Data Center Technician", issuer: "AWS", year: "2022" },
  { name: "Qwiklabs Skill Badges (60+)", issuer: "GCP", year: "Since 2021" },
];

const STATS = [
  { value: "2+", label: "Cloud Platforms" },
  { value: "10+", label: "Certifications" },
  { value: "60+", label: "Skill Badges" },
  { value: "2", label: "Projects Built" },
];

export default function Portfolio() {
  const [active, setActive] = useState("About");
  const [isDark, setIsDark] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById("s-" + id.toLowerCase());
    if (!el || !containerRef.current) return;
    containerRef.current.scrollTo({ top: el.offsetTop - 66, behavior: "smooth" });
  };

  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const fn = () => {
      const sy = c.scrollTop + 140;
      for (const l of NAV_LINKS) {
        const el = document.getElementById("s-" + l.toLowerCase());
        if (el && el.offsetTop <= sy && el.offsetTop + el.offsetHeight > sy) setActive(l);
      }
    };
    c.addEventListener("scroll", fn);
    return () => c.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    // Splash screen timer
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1800); // 1.8 seconds splash screen
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} style={{ height: "100vh", overflowY: "auto", background: "var(--bg)", color: "var(--text)", fontFamily: "'Cabinet Grotesk', 'DM Sans', sans-serif", transition: "background 0.3s, color 0.3s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,700;0,9..144,800;1,9..144,400&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }
        :root {
          --bg: ${isDark ? "#0D1117" : "#F8FAFC"};
          --bg2: ${isDark ? "#161B22" : "#FFFFFF"};
          --bg3: ${isDark ? "#1C2333" : "#F1F5F9"};
          --border: ${isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.08)"};
          --border-hover: ${isDark ? "rgba(210,168,92,0.4)" : "rgba(210,168,92,0.6)"};
          --text: ${isDark ? "#E6EDF3" : "#0F172A"};
          --text2: ${isDark ? "#8B949E" : "#475569"};
          --text3: ${isDark ? "#484F58" : "#64748B"};
          --gold: ${isDark ? "#D2A85C" : "#B48B40"};
          --gold-light: ${isDark ? "#F0C87A" : "#9C7631"};
          --gold-dim: ${isDark ? "rgba(210,168,92,0.15)" : "rgba(180,139,64,0.12)"};
          --gold-glow: ${isDark ? "rgba(210,168,92,0.08)" : "rgba(180,139,64,0.06)"};
        }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%,100%{opacity:0.6} 50%{opacity:1} }
        @keyframes splashBg { 0%, 80% {opacity:1} 100% {opacity:0; visibility:hidden} }
        @keyframes splashLogo { 0% {transform:scale(0.8); opacity:0} 20% {transform:scale(1.1); opacity:1} 80% {transform:scale(1); opacity:1} 100% {transform:scale(1.5); opacity:0} }
        
        .fade-up { animation: fadeUp 0.8s 1.8s ease both; }
        .fade-up-2 { animation: fadeUp 0.8s 1.95s ease both; }
        .fade-up-3 { animation: fadeUp 0.8s 2.1s ease both; }

        .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        .nav-btn {
          background: none; border: none; cursor: pointer;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
          color: var(--text2); letter-spacing: 0.01em;
          padding: 5px 0; position: relative; transition: color 0.2s;
        }
        .nav-btn::after {
          content: ''; position: absolute; bottom: -1px; left: 0; right: 0;
          height: 1.5px; background: var(--gold);
          transform: scaleX(0); transform-origin: left; transition: transform 0.25s;
        }
        .nav-btn:hover { color: var(--text); }
        .nav-btn.on { color: var(--gold-light); }
        .nav-btn.on::after { transform: scaleX(1); }
        .card {
          background: var(--bg2); border: 1px solid var(--border);
          border-radius: 14px; transition: border-color 0.25s, transform 0.2s, box-shadow 0.25s;
        }
        .card:hover { border-color: var(--border-hover); transform: translateY(-2px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
        .pill {
          display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 11.5px;
          font-weight: 600; background: var(--gold-dim); color: var(--gold-light);
          border: 1px solid rgba(210,168,92,0.2); margin: 3px; letter-spacing: 0.01em;
          transition: all 0.15s;
        }
        .pill:hover { background: rgba(210,168,92,0.25); border-color: var(--gold); }
        .divider { width: 100%; height: 1px; background: var(--border); margin: 0; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* ──────── SPLASH SCREEN ──────── */}
      {!isLoaded && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center",
          animation: "splashBg 1.8s ease forwards", pointerEvents: "none"
        }}>
          <div style={{
            width: 80, height: 80, borderRadius: 20,
            background: "linear-gradient(135deg, #D2A85C, #8B6914)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Fraunces', serif", fontSize: 40, fontWeight: 800, color: "#fff",
            boxShadow: "0 10px 40px rgba(210,168,92,0.4)",
            animation: "splashLogo 1.6s ease forwards"
          }}>M</div>
        </div>
      )}

      {/* ──────── NAVBAR ──────── */}
      <nav className="fade-up" style={{
        position: "sticky", top: 0, zIndex: 100,
        background: isDark ? "rgba(13,17,23,0.92)" : "rgba(248,250,252,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
        height: 62, display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 48px",
        transition: "background 0.3s",
        animationDelay: "1.8s" // Make sure navbar also waits!
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{
            width: 33, height: 33, borderRadius: 9,
            background: "linear-gradient(135deg, #D2A85C, #8B6914)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, color: "#fff",
            boxShadow: "0 2px 10px rgba(210,168,92,0.3)",
          }}>M</div>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.02em" }}>
            Manish Kumar
          </span>
        </div>
        <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
          {NAV_LINKS.map(l => (
            <button key={l} className={`nav-btn${active === l ? " on" : ""}`} onClick={() => scrollTo(l)}>{l}</button>
          ))}
          <button
            onClick={() => setIsDark(!isDark)}
            style={{
              background: "var(--bg2)", border: "1px solid var(--border)", cursor: "pointer",
              width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 16, transition: "transform 0.2s, background 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>

      {/* ──────── HERO ──────── */}
      <div id="s-about" style={{ position: "relative", maxWidth: 1040, margin: "0 auto", padding: "72px 48px 64px", overflow: "hidden" }}>
        {/* Ambient glow */}
        <div style={{ position: "absolute", top: -100, right: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(210,168,92,0.06) 0%, transparent 65%)", pointerEvents: "none" }} />

        <div className="fade-up" style={{ display: "flex", alignItems: "flex-start", gap: 36, flexWrap: "wrap", marginBottom: 52 }}>
          {/* Avatar */}
          <div style={{ position: "relative", flexShrink: 0 }}>
            <div style={{ width: 108, height: 108, borderRadius: "50%", padding: "2.5px", background: "linear-gradient(135deg, #D2A85C, #5a4010, #D2A85C)" }}>
              <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(145deg, #1C2333, #161B22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Fraunces', serif", fontSize: 42, fontWeight: 700, color: "#D2A85C" }}>M</span>
              </div>
            </div>
            <div style={{ position: "absolute", bottom: 7, right: 5, width: 14, height: 14, borderRadius: "50%", background: "#3FB950", border: "2.5px solid #0D1117", animation: "shimmer 2.5s infinite" }} />
          </div>

          <div style={{ flex: 1, minWidth: 260 }}>
            <div className="fade-up" style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "4px 13px", borderRadius: 20, background: "var(--gold-dim)", border: "1px solid rgba(210,168,92,0.25)", marginBottom: 16 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3FB950", animation: "shimmer 2.5s infinite" }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: "#D2A85C", letterSpacing: "0.1em", textTransform: "uppercase" }}>Available for Opportunities</span>
            </div>

            <h1 className="fade-up-2" style={{ fontFamily: "'Fraunces', serif", fontSize: 48, fontWeight: 800, color: "var(--text)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 6 }}>
              Manish Kumar
            </h1>
            <h2 className="fade-up-2" style={{ fontFamily: "'Fraunces', serif", fontSize: 20, fontWeight: 300, fontStyle: "italic", color: "#D2A85C", marginBottom: 18, letterSpacing: "-0.01em" }}>
              Cloud & DevOps Engineer
            </h2>
            <p className="fade-up-3" style={{ fontSize: 14.5, color: "#8B949E", lineHeight: 1.85, maxWidth: 510, marginBottom: 28 }}>
              Experienced in <span style={{ color: "#D2A85C", fontWeight: 600 }}>AWS</span> and <span style={{ color: "#D2A85C", fontWeight: 600 }}>GCP</span>, with hands-on expertise in Docker, Kubernetes, and CI/CD automation. I design reliable infrastructure that scales and ships software faster.
            </p>

            <div className="fade-up-3" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button onClick={() => scrollTo("Contact")} style={{
                padding: "11px 26px", border: "none", borderRadius: 10, cursor: "pointer",
                background: "linear-gradient(135deg, #D2A85C, #9A7530)",
                color: "#fff", fontFamily: "'DM Sans', sans-serif",
                fontSize: 14, fontWeight: 600, letterSpacing: "0.01em",
                boxShadow: "0 4px 20px rgba(210,168,92,0.35)",
                transition: "opacity 0.2s, transform 0.15s",
              }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >Get in Touch</button>
              <button onClick={() => scrollTo("Projects")} style={{
                padding: "11px 26px", background: "transparent",
                color: "#D2A85C", border: "1px solid rgba(210,168,92,0.35)",
                borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", letterSpacing: "0.01em",
                transition: "background 0.2s, border-color 0.2s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--gold-dim)"; e.currentTarget.style.borderColor = "#D2A85C"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(210,168,92,0.35)"; }}
              >View Projects</button>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--border)", borderRadius: 14, overflow: "hidden" }}>
          {STATS.map((s, i) => (
            <div key={i} style={{ background: "var(--bg2)", padding: "20px 24px", textAlign: "center" }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 28, fontWeight: 800, color: "#D2A85C", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: "#484F58", fontWeight: 500, marginTop: 5, letterSpacing: "0.02em" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ──────── CONTENT ──────── */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "0 48px" }}>

        {/* SKILLS */}
        <RevealOnScroll>
          <div id="s-skills" style={{ paddingBottom: 64 }}>
            <SectionHead title="Skills" sub="Technologies I work with" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
              {SKILLS.map(s => (
                <div key={s.category} className="card" style={{ padding: "22px 24px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
                    <span style={{ fontSize: 17 }}>{s.icon}</span>
                    <span style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 600, color: "#C9A96E", letterSpacing: "-0.01em" }}>{s.category}</span>
                  </div>
                  <div>{s.items.map(item => <span key={item} className="pill">{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* EXPERIENCE */}
        <RevealOnScroll>
          <div id="s-experience" style={{ paddingBottom: 64 }}>
            <SectionHead title="Experience" sub="Where I've worked" />
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className="card" style={{ padding: "26px 28px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 16 }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: 11, flexShrink: 0, marginTop: 1,
                        background: `${exp.accentColor}18`, border: `1px solid ${exp.accentColor}30`,
                        display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20,
                      }}>{exp.emoji}</div>
                      <div>
                        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 16.5, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em", marginBottom: 4 }}>{exp.role}</h3>
                        <p style={{ fontSize: 12.5, color: exp.accentColor, fontWeight: 500 }}>
                          {exp.company} <span style={{ color: "#484F58", fontWeight: 400 }}>· {exp.type}</span>
                        </p>
                      </div>
                    </div>
                    <span style={{ fontSize: 11.5, color: "#484F58", background: "var(--bg3)", padding: "4px 13px", borderRadius: 20, height: "fit-content", whiteSpace: "nowrap", border: "1px solid var(--border)" }}>{exp.period}</span>
                  </div>
                  <ul style={{ paddingLeft: 18, borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                    {exp.points.map((pt, j) => (
                      <li key={j} style={{ fontSize: 13.5, color: "#8B949E", lineHeight: 1.85, marginBottom: 5 }}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* PROJECTS */}
        <RevealOnScroll>
          <div id="s-projects" style={{ paddingBottom: 64 }}>
            <SectionHead title="Projects" sub="Things I've built" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {PROJECTS.map((p, i) => (
                <div key={i} className="card" style={{ overflow: "hidden" }}>
                  {/* Top accent line */}
                  <div style={{ height: 3, background: i === 0 ? "linear-gradient(90deg,#D2A85C,#9A7530)" : "linear-gradient(90deg,#3FB950,#218838)" }} />
                  <div style={{ padding: "24px 26px" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          width: 42, height: 42, borderRadius: 11,
                          background: i === 0 ? "rgba(210,168,92,0.12)" : "rgba(63,185,80,0.1)",
                          border: `1px solid ${i === 0 ? "rgba(210,168,92,0.25)" : "rgba(63,185,80,0.2)"}`,
                          display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0,
                        }}>{p.emoji}</div>
                        <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: 16, fontWeight: 700, color: "var(--text)", letterSpacing: "-0.01em" }}>{p.title}</h3>
                      </div>
                      <span style={{
                        fontSize: 10.5, fontWeight: 700, padding: "3px 10px", borderRadius: 20, letterSpacing: "0.06em",
                        color: i === 0 ? "#D2A85C" : "#3FB950",
                        background: i === 0 ? "rgba(210,168,92,0.1)" : "rgba(63,185,80,0.1)",
                        border: `1px solid ${i === 0 ? "rgba(210,168,92,0.2)" : "rgba(63,185,80,0.2)"}`,
                      }}>{p.tag.toUpperCase()}</span>
                    </div>
                    <p style={{ fontSize: 13, color: "#8B949E", lineHeight: 1.8, marginBottom: 18 }}>{p.desc}</p>
                    <div style={{ borderTop: "1px solid var(--border)", paddingTop: 14 }}>
                      {p.tech.map(t => <span key={t} className="pill" style={{ fontSize: 11 }}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* EDUCATION + CERTS */}
        <RevealOnScroll>
          <div id="s-certifications" style={{ paddingBottom: 64 }}>
            <SectionHead title="Education & Certifications" sub="Academic background and credentials" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 16 }}>

              {/* Education */}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#484F58", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 4 }}>Education</div>
                {[
                  { deg: "B.Tech — Computer Science & Engineering", inst: "Rustam Ji Institute of Technology, B.S.F Academy", period: "2019 – 2023" },
                  { deg: "Secondary Education — PCM", inst: "BSF Senior Secondary School, Tekanpur Academy", period: "2017 – 2019" },
                ].map((e, i) => (
                  <div key={i} className="card" style={{ padding: "20px 22px" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 9, background: "var(--gold-dim)", border: "1px solid rgba(210,168,92,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, marginBottom: 12 }}>🎓</div>
                    <div style={{ fontFamily: "'Fraunces', serif", fontSize: 14, fontWeight: 700, color: "var(--text)", marginBottom: 5, lineHeight: 1.4, letterSpacing: "-0.01em" }}>{e.deg}</div>
                    <div style={{ fontSize: 12, color: "#C9A96E", marginBottom: 8, lineHeight: 1.5 }}>{e.inst}</div>
                    <div style={{ fontSize: 11, color: "#484F58", fontWeight: 500 }}>{e.period}</div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#484F58", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 16 }}>Certifications</div>
                <div className="card" style={{ padding: "6px 22px" }}>
                  {CERTS.map((c, i) => (
                    <div key={i} style={{
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "12px 0", gap: 10,
                      borderBottom: i < CERTS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      transition: "padding-left 0.15s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.paddingLeft = "6px"}
                      onMouseLeave={e => e.currentTarget.style.paddingLeft = "0"}
                    >
                      <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                        <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#D2A85C", marginTop: 5, flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: 12.5, fontWeight: 500, color: "var(--text)", lineHeight: 1.4 }}>{c.name}</div>
                          <div style={{ fontSize: 11, color: "#484F58", marginTop: 2 }}>{c.issuer}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: 10.5, color: "#484F58", whiteSpace: "nowrap", fontVariantNumeric: "tabular-nums" }}>{c.year}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* CONTACT */}
        <RevealOnScroll>
          <div id="s-contact" style={{ paddingBottom: 80 }}>
            <SectionHead title="Contact" sub="Let's connect" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
              {[
                { icon: "✉️", label: "Email", value: "manishkumar42002@gmail.com", href: "mailto:manishkumar42002@gmail.com" },
                { icon: "📞", label: "Phone", value: "+91 8305-016-472", href: "tel:+918305016472" },
                { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/manish-kumar", href: "https://linkedin.com/in/manish-kumar-a1b5571a1/" },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="card"
                  style={{ display: "flex", alignItems: "center", gap: 14, padding: "20px 22px" }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: "var(--gold-dim)", border: "1px solid rgba(210,168,92,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 10, color: "#484F58", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: 12.5, color: "var(--text)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </RevealOnScroll>

      </div>

      {/* FOOTER */}
      <div style={{ borderTop: "1px solid var(--border)", padding: "32px 48px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <p style={{ fontSize: 13, color: "var(--text3)", fontWeight: 500, letterSpacing: "0.01em" }}>
          <span style={{ fontFamily: "'Fraunces', serif", color: "var(--gold)", fontWeight: 700, fontSize: 15 }}>Manish Kumar</span>
          <span style={{ margin: "0 12px", opacity: 0.5 }}>•</span>
          Cloud & DevOps Engineer
          <span style={{ margin: "0 12px", opacity: 0.5 }}>•</span>
          Gwalior, M.P.
        </p>
      </div>
    </div>
  );
}

function SectionHead({ title, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 3 }}>
        <div style={{ width: 3, height: 20, borderRadius: 2, background: "linear-gradient(180deg,#D2A85C,#9A7530)" }} />
        <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 24, fontWeight: 800, color: "var(--text)", letterSpacing: "-0.02em" }}>{title}</h2>
      </div>
      <p style={{ fontSize: 13, color: "#484F58", marginLeft: 13, fontWeight: 400 }}>{sub}</p>
    </div>
  );
}

function RevealOnScroll({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 } // Trigger when 15% of the element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
      {children}
    </div>
  );
}