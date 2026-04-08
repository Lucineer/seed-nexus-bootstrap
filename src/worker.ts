const html = `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>Seed Nexus Bootstrap</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#0a0a0f;color:#f8fafc;font-family:'Inter',sans-serif;min-height:100vh;padding:2rem;line-height:1.6}
.container{max-width:1000px;margin:0 auto}
.hero{text-align:center;padding:3rem 0}
h1{font-size:3rem;font-weight:700;margin-bottom:1rem;color:#a78bfa}
.subtitle{font-size:1.25rem;color:#94a3b8;max-width:600px;margin:0 auto 2rem}
.features{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1.5rem;margin:3rem 0}
.card{background:#1e293b;border-radius:12px;padding:1.5rem;border-left:4px solid #a78bfa}
.card h3{color:#a78bfa;margin-bottom:0.5rem}
.domains{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:1rem;margin:2rem 0}
.domain{background:#1e293b;border-radius:8px;padding:1rem;text-align:center;color:#a78bfa;font-weight:600}
.endpoints{background:#0f172a;border-radius:8px;padding:1.5rem;margin:2rem 0}
.ep{font-family:monospace;background:#1e293b;padding:0.5rem 1rem;border-radius:4px;margin:0.5rem 0;color:#94a3b8}
.footer{margin-top:4rem;text-align:center;color:#64748b;font-size:0.9rem}
.footer a{color:#a78bfa;text-decoration:none}
</style></head><body><div class="container">
<div class="hero"><h1>Seed+Nexus Bootstrap</h1>
<p class="subtitle">Every fork is production-safe from day one. Auto-generates domain code with NEXUS safety tier, reflex bytecode, and complete vessel.json.</p></div>
<div class="features">
<div class="card"><h3>NEXUS Safety Tier</h3><p>Every generated vessel includes full safety validation from the start.</p></div>
<div class="card"><h3>Reflex Bytecode Ready</h3><p>Generated code is compatible with NEXUS reflex compiler immediately.</p></div>
<div class="card"><h3>15 Domain Archetypes</h3><p>Coding, research, robotics, education, creative, gaming, and more.</p></div>
<div class="card"><h3>vessel.json Complete</h3><p>Auto-generated vessel.json with capabilities, equipment, and trust profile.</p></div>
</div>
<div class="domains">
<div class="domain">Coding</div><div class="domain">Research</div><div class="domain">Robotics</div>
<div class="domain">Education</div><div class="domain">Creative</div><div class="domain">Gaming</div>
<div class="domain">Fitness</div><div class="domain">Cooking</div><div class="domain">Legal</div>
<div class="domain">Finance</div><div class="domain">Support</div><div class="domain">NPC</div>
<div class="domain">Marketing</div><div class="domain">Tutoring</div><div class="domain">Business</div>
</div>
<div class="endpoints">
<h3 style="color:#a78bfa;margin-bottom:1rem">API Endpoints</h3>
<div class="ep">POST /api/generate - Generate domain code from archetype</div>
<div class="ep">GET /api/domains - List available domain archetypes</div>
<div class="ep">GET /api/templates - Get starter templates</div>
<div class="ep">GET /health - Liveness check</div>
</div>
<div class="footer">
<p>Part of the <a href="https://github.com/Lucineer/the-fleet">Cocapn fleet</a> - 88+ autonomous vessels.</p>
<p><i>Built with <a href="https://github.com/Lucineer/cocapn-ai">Cocapn</a>.</i></p>
<p>Superinstance &amp; Lucineer (DiGennaro et al.)</p>
</div></div></body></html>`;

const sh = {
  "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-ancestors 'none'",
  "X-Frame-Options": "DENY",
};

export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok", timestamp: new Date().toISOString() }), {
        headers: { "Content-Type": "application/json", ...sh }
      });
    }
    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8", ...sh }
    });
  }
};
