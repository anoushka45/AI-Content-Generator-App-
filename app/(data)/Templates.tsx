export default [
  {
    name: 'Blog Title',
    description: 'An AI tool that generates a blog title based on your input.',
    category: 'Blog',
    icon: "https://cdn-icons-png.flaticon.com/128/3344/3344836.png",
    aiPrompt: 'Give me 5 blog topic ideas in bullet form, based only on your niche and outline topic, and present results in rich text editor format.',
    slug: 'generate-blog-title',
    form: [
      {
        label: "Enter your blog niche",
        field: 'input',
        name: 'niche',
        required: true
      },
      {
        label: "Enter your blog outline",
        field: 'textarea',
        name: 'outline',
      },
    ]
  },
  {
    name: 'YouTube Title',
    description: 'Generate engaging YouTube video titles from your video topic.',
    category: 'YouTube',
    icon: "https://cdn-icons-png.flaticon.com/128/1384/1384060.png",
    aiPrompt: 'Generate 5 compelling YouTube video titles in bullet form based on the provided topic.',
    slug: 'generate-youtube-title',
    form: [
      {
        label: "Enter your video topic",
        field: 'input',
        name: 'topic',
        required: true
      },
      {
        label: "Define your target audience",
        field: 'input',
        name: 'audience',
      },
    ]
  },
  {
    name: 'SEO Title',
    description: 'Get optimized SEO titles for improved search ranking.',
    category: 'SEO',
    icon: "https://cdn-icons-png.flaticon.com/128/2977/2977790.png",
    aiPrompt: 'Generate 5 SEO-friendly titles based on the primary keyword and target audience.',
    slug: 'generate-seo-title',
    form: [
      {
        label: "Enter your primary keyword",
        field: 'input',
        name: 'keyword',
        required: true
      },
      {
        label: "Define your target audience",
        field: 'input',
        name: 'audience',
      },
    ]
  },
  {
    name: 'Meta Description',
    description: 'Generate SEO-friendly meta descriptions for your webpage.',
    category: 'SEO',
    icon: "https://cdn-icons-png.flaticon.com/128/15540/15540045.png",
    aiPrompt: 'Create a meta description (160 characters max) that includes your keyword and sounds engaging.',
    slug: 'generate-meta-description',
    form: [
      {
        label: "Enter your keyword",
        field: 'input',
        name: 'keyword',
        required: true
      },
      {
        label: "Briefly describe your content",
        field: 'textarea',
        name: 'content_description',
      },
    ]
  },
  {
    name: 'Product Title',
    description: 'Generate catchy titles for your product listings.',
    category: 'E-commerce',
    icon: "https://cdn-icons-png.flaticon.com/128/3081/3081725.png",
    aiPrompt: 'Generate 5 product title ideas using the product name and features.',
    slug: 'generate-product-title',
    form: [
      {
        label: "Enter product name",
        field: 'input',
        name: 'product_name',
        required: true
      },
      {
        label: "List main product features",
        field: 'textarea',
        name: 'features',
      },
    ]
  },
  {
    name: 'Rewrite Article',
    description: 'Rewrite or rephrase content to make it more unique and readable.',
    category: 'Content Writing',
    icon: "https://cdn-icons-png.flaticon.com/128/3126/3126550.png",
    aiPrompt: 'Rewrite the provided text to improve readability and uniqueness.',
    slug: 'rewrite-article',
    form: [
      {
        label: "Enter the text to rewrite",
        field: 'textarea',
        name: 'text',
        required: true
      }
    ]
  },
  {
    name: 'Email Subject Line',
    description: 'Generate effective subject lines to improve email open rates.',
    category: 'Marketing',
    icon: "https://cdn-icons-png.flaticon.com/128/732/732200.png",
    aiPrompt: 'Generate 5 compelling email subject lines based on the purpose of the email.',
    slug: 'generate-email-subject-line',
    form: [
      {
        label: "Enter email purpose",
        field: 'textarea',
        name: 'purpose',
        required: true
      },
      {
        label: "Specify target audience",
        field: 'input',
        name: 'audience',
      }
    ]
  },
  {
    name: 'Social Media Post Caption',
    description: 'Create engaging captions for your social media posts.',
    category: 'Social Media',
    icon: "https://cdn-icons-png.flaticon.com/128/174/174855.png",
    aiPrompt: 'Write a catchy caption for a social media post based on the post content and desired tone.',
    slug: 'generate-social-media-caption',
    form: [
      {
        label: "Describe your post content",
        field: 'textarea',
        name: 'content',
        required: true
      },
      {
        label: "Select tone (e.g., humorous, professional)",
        field: 'input',
        name: 'tone',
      }
    ]
  }
];
