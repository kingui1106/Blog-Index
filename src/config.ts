/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
    {
      title: "MAJOR",
      sites: [
        {
          title: "Smart Future Tech",
          url: "https://www.347861.xyz",
          icon: "",
          color: "#0171CD",
        }
      ],
    },
  ];
  
  /** Website 配置（2023.3.29 已废弃） */
  const WEBSITE_ITEMS: WebsiteItem[] = [];
  
  const GLOBAL_CONFIG = {
    /**
     * 博客名称
     */
    BLOG_NAME: "Smart Future Tech",
    /**
     * 个人博客链接
     */
    BLOG_URL: "https://www.347861.xyz",
    /**
     * 指定中心 LOGO 图片地址
     */
    LOGO_URL: null,
    /**
     * 个人 Github 链接
     */
    GITHUB_URL: "https://www.347861.xyz",
    /**
     * 背景图片地址
     */
    BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
    /**
     * ICP 备案号，留空不显示
     */
    ICP: null,
    ICP_URL: null,
    FOOTER_INFO: true,
    /**
     * 网站欢迎标语
     */
    SLOGANS: [
      "Smart Future Tech",
    ],
    /**
     * Website 分类配置
     */
    WEBSITE_SORTS,
    /**
     * Website 配置（2023.3.29 已废弃）
     */
    WEBSITE_ITEMS,
    /**
     * 网站 Title Keywords Description 的配置，用于 SEO
     */
    TKD: {
      title: "Smart Future Tech",
      keywords: "Smart Future Tech",
      description: "Smart Future Tech.",
    },
  };
  
  export default GLOBAL_CONFIG;
