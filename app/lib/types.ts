export type Post = {
  id: string;
  title: string;
  slug: string;
  author: {
    name: string;
    image: {
      url: string;
      alt: string;
    };
  };
  mainImage?: {
    _type: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  publishedAt: string;
  excerpt: string;
  body: PostBody[];
  categories: Category[];
  description?: string;
};

type PostBodyBase = {
  _key: string;
  children: PostBody[];
  markDefs: [];
  style: string;
};

export type PostBodyImage = PostBodyBase & {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    url: string;
  };
  alt: string;
};

type PostBodyCode = PostBodyBase & {
  _type: "code";
  code: string;
  language: string;
};

type PostBodyText = PostBodyBase & {
  _type: "block";
  text: string;
};

export type PostBody = PostBodyImage | PostBodyCode | PostBodyText;

export type PostHeading = {
  slug: string;
  title: string;
  author: {
    name: string;
  };
  publishedAt: string;
  category: Category;
  description?: string;
};

export type Category = {
  id: string;
  title: string;
  slug: string;
};

export type Subheading = {
  title: string;
  key: string;
};

export type Project = {
  coverImage: {
    _type: string;
    asset: {
      _ref: string;
      _type: "reference";
    };
  };
  title: string;
  description: string;
  sourceCodeUrl: string;
  liveDemoUrl: string;
  slug: string;
};

export type LandingPageData = {
  welcomeText: PostBodyText[];
  welcomeSubtext: PostBodyText[];
  callToActionLink: {
    text: string;
    url: string;
    style: "primary" | "secondary";
    _key: string;
  }[];
};

export type WorkExperience = {
  title: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string[];
};
