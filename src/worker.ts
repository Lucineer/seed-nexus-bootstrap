We are creating a Cloudflare Worker with TypeScript that implements a domain code generator with NEXUS safety tier and reflex bytecode.
 The worker must have the following endpoints:
   POST /api/generate - generates domain code based on provided template and domain name
   GET /api/domains - returns a list of generated domains (for demo, we'll store in memory)
   GET /api/templates - returns available templates
   GET /health - returns "ok"

 We are to use a dark theme (#0a0a0f) and accent color (#a78bfa), and Inter font.
 We must set CSP and X-Frame-Options: DENY.
 Zero dependencies, so we'll use built-in Web APIs and TypeScript.

 We are to store generated domains in memory (since we have no persistent storage in this example). In a real app, we'd use KV or D1.

 Steps:
 1. Set up the worker with TypeScript.
 2. Define types for the request and response.
 3. Implement the endpoints.
 4. For the POST /api/generate, we expect a JSON body with { domain: string, template: string }.
    We'll generate code based on the template and domain, and store it in our in-memory list.
 5. The generated code should include NEXUS safety tier and reflex bytecode. We'll have a simple template system.
 6. We'll also have a set of predefined templates (for example, "basic", "advanced").
 7. The GET /api/domains returns the list of generated domains (with their code? or just names? Let's return an array of objects with domain and template and maybe a snippet).
 8. The GET /api/templates returns the list of available templates.

 Since we are in a worker, we can use the Request and Response objects.

 We are to output a complete TypeScript file with export default.

 Let's design:

 In-memory store:
   let domains: Array<{ domain: string, template: string, code: string, createdAt: Date }> = [];

 For the code generation, we'll have a function that takes a template name and domain and returns a string of code.

 We are to include NEXUS safety tier and reflex bytecode. We can define these as parts of the template.

 Example template for "basic":

   `// NEXUS Safety Tier: STANDARD
    // Reflex Bytecode: ENABLED
    // Domain: ${domain}
    export const ${domain} = {
        // ... domain specific code
    };`

 But we can have more complex templates.

 We'll have a map of template names to template strings (or functions that return string).

 Since we are to generate code, we can have:

   const templates: Record<string, (domain: string) => string> = {
        basic: (domain) => `...`,
        advanced: (domain) => `...`
   };

 We'll also have a list of template names for the GET /api/templates.

 For the POST /api/generate, we'll check if the template exists and then generate.

 We must set the CSP header and X-Frame-Options.

 Let's code accordingly.

 Note: We are to use double quotes in HTML (for the footer? but we are not generating HTML in the worker? The worker returns JSON. However, the problem says "Dark theme #0a0a0f, accent #a78bfa, Inter font." - this might be for the frontend? But we are writing a worker. Maybe we are to return HTML for the frontend? The problem says "Domain code generator", so maybe the worker also serves a UI? The endpoints are API, but the problem also says "Fleet footer". Let me re-read:

 "Write a Cloudflare Worker TypeScript file for seed-nexus-bootstrap. Domain code generator with NEXUS safety tier + reflex bytecode from day one Hero: Seed+Nexus Bootstrap — Every fork is production-safe from day one. Features: Auto-generates domain code, includes NEXUS safety tier, reflex bytecode ready, vessel.json complete. Endpoints: POST /api/generate, GET /api/domains, GET /api/templates."

 It doesn't explicitly say to serve a UI, but the design tokens (dark theme, accent, font) and "Fleet footer" suggest we might have a frontend. However, the problem says "TypeScript only, no markdown" and we are to write a worker. It might be that the worker is only the API and the frontend is separate? But the problem says "Write a Cloudflare Worker TypeScript file", so we are only writing the worker.

 However, the problem also says "Must end with complete export default {}; block." and we are to set CSP and X-Frame-Options. So we are setting headers for all responses.

 Since we are only writing the worker, we'll focus on the API and set the headers accordingly.

 But wait: the problem says "Fleet footer". What is that? Maybe it's a footer in the response? But we are returning JSON. Unless we are also serving a HTML page? The endpoints are specified, but maybe we also serve the root? The problem doesn't specify.

 Let's stick to the endpoints and set the headers for all responses.

 We'll set:

   response.headers.set('Content-Security-Policy', "default-src 'self'; style-src 'self' 'unsafe-inline'; font-src 'self';");
   response.headers.set('X-Frame-Options', 'DENY');

 But note: the problem says "CSP + X-Frame-Options: DENY". We'll set a strict CSP.

 However, we are not serving any HTML from the worker? The endpoints return JSON. So maybe we don't need to worry about the theme and font? But the problem mentions them, so perhaps we are to serve a HTML page at the root? The problem doesn't specify.

 Since the problem says "Endpoints: POST /api/generate, GET /api/domains, GET /api/templates", we'll only implement these and the health check.

 But then what about the "Hero" and "Fleet footer"? Maybe they are for the frontend that uses this worker? We are not building the frontend.

 Given the ambiguity, I will assume we are only building the API worker and not the frontend. However, the problem says "Domain code generator", so the worker generates code and returns it. The frontend would be separate.

 But the problem also says "Must end with complete
const sh = {'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; frame-ancestors 'none'",'X-Frame-Options':'DENY'};
export default { async fetch(r: Request) { const u = new URL(r.url); if (u.pathname==='/health') return new Response(JSON.stringify({status:'ok'}),{headers:{'Content-Type':'application/json',...sh}}); return new Response(html,{headers:{'Content-Type':'text/html;charset=UTF-8',...sh}}); }};