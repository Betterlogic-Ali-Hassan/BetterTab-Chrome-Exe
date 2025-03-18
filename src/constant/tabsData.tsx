export type TabItem = {
  id: number;
  icon: string;
  title: string;
  path: string;
  des: string;
  tags: string[];
};

export const tabsData: TabItem[] = Array.from({ length: 70 }, (_, index) => {
  const baseItems: Omit<TabItem, "id" | "tags">[] = [
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://podscan.fm//&size=32",
      title: "Podscan.fm",
      path: "https://podscan.fm/",
      des: "Search podcasts and get notified about mentions",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://aistudio.google.com//&size=32",
      title: "Google AI Studio",
      path: "https://aistudio.google.com/",
      des: "Design and build AI-powered web and mobile applications",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://n8n.io//&size=32",
      title: "n8n",
      path: "https://n8n.io/",
      des: "A simple, open-source, and self-hosted workflow automation tool",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://blog.hubspot.com/marketing/internet-marketing/&size=32",
      title: "HubSpot Marketing Guide",
      path: "https://blog.hubspot.com/marketing",
      des: "HubSpot's marketing best practices and resources",
    },
    {
      icon: "https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://www.midjourney.com//&size=32",
      title: "Midjourney",
      path: "https://www.midjourney.com/",
      des: "A generative AI tool for creating original content",
    },
  ];

  const tags: string[] = [
    "AI",
    "API",
    "Audio",
    "Automation",
    "Book",
    "Buy",
    "Community",
    "Design",
    "Directory",
    "Documentation",
    "Engineering",
    "Entertainment",
    "Event",
    "Forum",
    "Game",
    "Health",
    "Inspiration",
    "Investing",
    "Learn",
    "Marketing",
    "Mental Models",
    "Mindset",
    "News",
    "Podcast",
    "Research",
    "SEO",
    "Science",
    "Startups",
    "Tools",
    "Trending",
    "Tutorial",
    "Video",
    "Web Development",
    "Writing",
  ];

  const item = baseItems[index % baseItems.length];
  return {
    id: index + 1,
    icon: item.icon,
    title: item.title,
    path: item.path,
    des: item.des,
    tags: [tags[index % tags.length], tags[(index + 1) % tags.length]],
  };
});
