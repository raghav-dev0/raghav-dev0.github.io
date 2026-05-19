export const resume = {
  name: 'Raghavendra Sai',
  handle: 'raghav',
  title: 'Lead Software Engineer',
  tagline: 'Systems thinker. Problem solver. AI-native builder. Impact at scale.',
  about: `10+ years architecting distributed systems that handle millions of users and move serious money — worldwide scale, with deep focus on EMEA and US markets over the past few years.

I obsess over reliability, cut through complexity, and leave systems simpler than I found them. At Personio, I'm part of the Foundations group — rethinking architectural decisions from the ground up, turning years of accumulated complexity into clean, maintainable systems that keep pace with aggressive customer growth.

I treat AI as a first-class engineering tool: I've shipped GenAI products in production, piloted prompt-first workflows org-wide, and I'm continuously pushing the frontier on what AI-assisted engineering looks like in practice.`,
  contact: {
    email: 'raghavendrasai1742@gmail.com',
    github: 'https://github.com/raghav',
    linkedin: 'https://linkedin.com/in/raghavendrasai',
    phone: '+44-788-7033-124',
  },
  stats: {
    headline: [
      { label: 'Years Experience', value: '10+',  sub: 'across the stack' },
      { label: 'Cost Savings',     value: '$3M+', sub: 'attributed to direct initiatives' },
      { label: 'Revenue Impact',   value: '$5M+', sub: 'shipped features & growth' },
      { label: 'Users Served',     value: '10M+', sub: 'worldwide' },
    ],
    scale: {
      b2c: { label: 'B2C Scale', value: '10M+', desc: 'Consumer-facing products at scale — logistics, fintech, media & digital signage.' },
      b2b: { label: 'B2B Scale', value: 'Double-digit M ARR', desc: 'Enterprise & mid-market SaaS — confidential. Ranges in the tens of millions ARR.' },
    },
    regions: ['US', 'EMEA', 'APAC', 'MENA'],
    regionNote: 'Worldwide reach · Primary focus last few years: US & EMEA',
  },
  skills: {
    languages: ['Java', 'Kotlin', 'TypeScript', 'React', 'NodeJS', 'Scala', 'SQL'],
    frameworks: ['Spring Boot', 'Temporal', 'Kafka', 'GraphQL', 'Redis', 'SQS', 'Kinesis Firehose', 'DynamoDB'],
    cloud: ['AWS CDK', 'Lambda', 'S3', 'SNS', 'Glue', 'Athena'],
    tools: ['Terraform', 'Docker', 'Datadog', 'Grafana / Loki', 'Git', 'IntelliJ'],
    ai: ['Claude Code', 'Codex', 'Cursor', 'Copilot', 'Augment Code', 'Langdock'],
  },
  experience: [
    {
      hash: 'e8a1f2b',
      title: 'Lead Software Engineer',
      company: 'Personio',
      location: 'London, UK',
      period: 'Oct 2024 – Present',
      bullets: [
        'Technical lead for Payroll (Germany & UK) — set roadmap, aligned teams, influenced platform decisions across product and compliance.',
        'Part of the Foundations group: rearchitecting core platform decisions at scale, reducing complexity and enabling the system to grow with aggressive customer demand.',
        'Enabled 2X ARR growth in one year by shipping key customer features that unblocked mid-market deals, working closely with Product, Design, Sales, and Compliance.',
        'Led service consolidation (10% reduction), cutting infra costs and improving developer velocity across teams.',
        'Piloted AI-assisted engineering (prompt-first refactoring) at org level — now a standard practice.',
      ],
    },
    {
      hash: 'c3d9a7e',
      title: 'Senior Software Engineer',
      company: 'Glovo',
      location: 'Barcelona, ES',
      period: 'Sep 2022 – Sep 2024',
      bullets: [
        'Backend tech lead — mentored engineers, drove hiring, raised technical standards across multiple teams.',
        'Shipped Glovo\'s first GenAI product end-to-end: LLM-powered customer support chatbot in a three-sided marketplace, +10% CSAT and €200K saved in agent hours.',
        'Rebuilt in-app contact centre: +12% CSAT, €2M saved through fewer cancellations and better agent efficiency.',
        'Led Q-Commerce catalog and Grafana/OpenTelemetry migrations post-acquisition, cutting monitoring costs 50% (€1M).',
      ],
    },
    {
      hash: 'b7f04c1',
      title: 'Senior Software Engineer',
      company: 'Screencloud',
      location: 'Bangkok, TH',
      period: 'Feb 2021 – Aug 2022',
      bullets: [
        'Designed Screen Playback service processing 6M+ logs/day per tenant — contributed $100K+ in new ARR.',
        'Built serverless QR code metrics service enabling data-driven decisions that lifted sales by 8%.',
      ],
    },
    {
      hash: 'a2e81d4',
      title: 'Senior Software Engineer',
      company: 'Ascend Group',
      location: 'Bangkok, TH',
      period: 'Apr 2019 – Feb 2021',
      bullets: [
        'Built scalable customer profile service for Microcredit lending supporting ~8M users across the platform.',
      ],
    },
    {
      hash: '9f3b52c',
      title: 'Software Engineer II',
      company: 'NationStar Mortgage',
      location: 'Chennai, IND',
      period: 'Dec 2017 – Mar 2019',
      bullets: [
        'End-to-end complaint service for mortgage ops — cut operational costs 20% through faster resolution.',
        'Automated Quality Check and Automatic Resolution tools, eliminating manual steps and improving turnaround.',
      ],
    },
    {
      hash: '6d7a091',
      title: 'Full Stack Developer',
      company: 'Jiva Digital Services',
      location: 'Hyderabad, IND',
      period: 'Jun 2016 – Dec 2017',
      bullets: [
        'Owned all major frontend releases — played central role in fundraising success by rapidly iterating for investors.',
        'Developed SSR-based POS system solving partner pain points with faster load times and smoother product discovery.',
      ],
    },
    {
      hash: '1c4e832',
      title: 'Frontend Developer Intern',
      company: 'YuppTV',
      location: 'Hyderabad, IND',
      period: 'Jan 2016 – Jun 2016',
      bullets: [
        'Built admin portal for Freedocast (live-streaming) that monitored user activity and flagged unusual behaviour.',
      ],
    },
  ],
  education: {
    institution: 'Birla Institute of Technology and Science',
    degree: 'MSc(Tech) Information Systems',
    location: 'Goa, IND',
    period: 'Aug 2012 – Jun 2016',
  },
  research: {
    published: [
      {
        title: 'Leveraging Large Language Models to Build a Low-Resource Customer Support Chatbot in a Three-Sided Marketplace',
        venue: 'EasyChair Preprint',
        year: '2024',
        context: 'Glovo · Delivery leader in Europe',
        desc: 'Hybrid LLM + traditional system approach for production-scale customer support. Achieved real-world impact with minimal investment — reducing agent workload by up to 35%.',
        url: 'https://easychair.org/publications/preprint/nbQw',
        tag: 'GenAI · Production Systems',
      },
    ],
    reading: [
      {
        title: 'Dynamo: Amazon\'s Highly Available Key-value Store',
        authors: 'DeCandia et al., Amazon (2007)',
        desc: 'The paper that shaped how the industry thinks about eventual consistency, vector clocks, and the CAP tradeoff at warehouse scale.',
        url: 'https://www.read.seas.harvard.edu/~kohler/class/cs239-w08/decandia07dynamo.pdf',
        tag: 'Distributed Systems · Storage',
      },
    ],
  },
}
