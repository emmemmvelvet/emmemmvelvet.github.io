import { BLOGS_DATA } from '@/data/blogs';
import { SITE_CONFIG } from '@/data/site-config';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = SITE_CONFIG.siteUrl || 'https://emmemmvelvet.com';

  const feedItems = BLOGS_DATA.map((post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <category>${post.category}</category>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${SITE_CONFIG.contact.primaryEmail} (${post.author.name})</author>
    </item>`).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${SITE_CONFIG.name} — Textile &amp; Design Journal</title>
    <link>${baseUrl}/blog</link>
    <description>Perspectives on upholstery weaving, soft furnishings engineering, and textile trends from Emm Emm Velvet, Panipat.</description>
    <language>en-in</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${feedItems}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
