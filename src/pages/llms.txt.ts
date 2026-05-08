import type { APIRoute } from 'astro';
import { site, services, insights } from '../data/placeholder';

export const GET: APIRoute = () => {
  const serviceList = services
    .map((s) => `- ${s.title}: ${s.description}`)
    .join('\n');

  const insightList = insights
    .map((i) => `- [${i.category}] ${i.title} (${i.date})`)
    .join('\n');

  const content = `# ${site.name}

> ${site.description}

## Practice Areas

${serviceList}

## Recent Insights

${insightList}

## Contact

- Email: ${site.contact.email}
- Phone: ${site.contact.phone || 'N/A'}
- Address: ${site.contact.address || ''}, ${site.contact.city || ''}, ${site.contact.country || ''}
- Website: ${site.url}

## Pages

- [Home](${site.url}/): Firm overview, practice areas, team, and insights
- [Insights](${site.url}/blog): Legal analysis and thought leadership
- [Privacy](${site.url}/privacy): Privacy policy
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
